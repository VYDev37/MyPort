package models

type Repository struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	HtmlUrl     string `json:"html_url"`
	Language    string `json:"language"`
	Homepage    string `json:"homepage"`
	Fork        bool   `json:"fork"`
}
