package handler

import (
	"net/http"
	"portfolio-backend/routes"
)

func Handler(res http.ResponseWriter, req *http.Request) {
	mux := http.NewServeMux()
	routes.RegisterRoutes(mux)

	handler := routes.AllowCORS(mux)
	handler.ServeHTTP(res, req)
}
