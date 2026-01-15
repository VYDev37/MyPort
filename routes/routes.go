package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	models "portfolio-backend/models"
)

func AllowCORS(next http.Handler) http.Handler {
	allowedOrigins := map[string]bool{ // domain_name: can access / not
		"http://localhost:5173": true,
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if allowedOrigins[origin] {
			w.Header().Set("Access-Control-Allow-Origin", origin)
		}
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Lanjut ke handler asli
		next.ServeHTTP(w, r)
	})
}

func SendJSON(res http.ResponseWriter, status int, data any) {
	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(status)

	if err := json.NewEncoder(res).Encode(data); err != nil {
		fmt.Printf("Error encoding JSON: %v\n", err)
	}
}

func SendMessage(res http.ResponseWriter, status int, message string) {
	SendJSON(res, status, map[string]string{"message": message})
}

func HandleGetRepos(res http.ResponseWriter, req *http.Request) {
	token := os.Getenv("GITHUB_TOKEN")
	client := &http.Client{}

	request, _ := http.NewRequest("GET", "https://api.github.com/users/vydev37/repos?per_page=50", nil)
	request.Header.Set("Authorization", fmt.Sprintf("Bearer %s", token))
	request.Header.Set("Accept", "application/vnd.github+json")

	resp, err := client.Do(request)
	if err != nil {
		http.Error(res, "Failed to connect with Github API", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		var githubError map[string]interface{}
		SendJSON(res, resp.StatusCode, map[string]interface{}{
			"error":   "GitHub API Error",
			"details": githubError,
		})
		return
	}

	var allRepos []models.Repository
	if err := json.NewDecoder(resp.Body).Decode(&allRepos); err != nil {
		SendMessage(res, http.StatusInternalServerError, err.Error())
		return
	}

	var finalRepos []models.Repository
	for _, r := range allRepos {
		if !r.Fork {
			finalRepos = append(finalRepos, r)
		}
	}

	SendJSON(res, http.StatusOK, map[string]interface{}{"works": finalRepos})
}

func HandleDownloadCV(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")
	cvLink := os.Getenv("CV_LINK")
	http.Redirect(res, req, cvLink, http.StatusFound)
}

func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("GET /api/hello", func(res http.ResponseWriter, req *http.Request) {
		fmt.Fprint(res, "Hello world!")
	})

	mux.HandleFunc("GET /api/download-cv", HandleDownloadCV)
	mux.HandleFunc("GET /api/my-works", HandleGetRepos)
}
