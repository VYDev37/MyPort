## My Portfolio Website
Description: Modern Portfolio with **Dark Blue** theme, built with **React** and **Go**

## Information
- Demo: [here](https://vincentdev37-portfolio.vercel.app/)

## Features
- High Performance: Since backend uses Go, the cold start is finished instantly in Serverless environment
- Responsive Design: Support both mobile and desktop view
- Lightweight and simple: Easy to setup and maintain code
- Type safe: Full TypeScript in Frontend
- Dynamic Project Update: Auto retrieve repository from Github API
- Modern UI: Dark Blue Theme

## Tech Stack
- Frontend: React, TypeScript, Vite, Bootstrap
- Backend: Go (Golang)
- Deployment: Vercel
- Package Manager: PNPM / NPM

## Getting started
### Requirements
- Github account
- Git (connected with Github account)
- VSCode (or any code editor)
- pnpm / npm (optional) -> if you would like to build locally first before pushing it to cloud
- Vercel CLI (optional)

### Setup
1. Clone this repository by running `git clone https://github.com/VYDev37/MyPort.git` in terminal or just use VSCode integrated Git
2. Change the part you would like to change (For repositories retriever, refer to `HandleGetRepos` function and edit the `githubUsername` part, for frontend part, most things are put in `frontend/app.config.ts`)
3. Create new repository
4. Connect to the repository with `git remote add origin <repo_url>` (or just use integrated Git in VSCode)
5. Add the changed file manually with `git add .` (or just use integrated Git in VSCode)
6. Publish the repo and push the change via Git with `git push -u origin main` (or just use integrated Git in VSCode)
7. Open [Vercel](https://vercel.com)
8. Import Project, then choose the repository you uploaded just now
9. Set the environment variable keys and values, required keys and example value can be seen on `.env.example`
10. Deploy
11. Done