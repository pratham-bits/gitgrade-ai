from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from github_analyzer import analyze_repo

app = FastAPI(title="GitGrade API")

# ✅ Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all origins (safe for hackathon)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "GitGrade API is running"}

@app.get("/analyze")
def analyze(repo_url: str):
    return analyze_repo(repo_url)
