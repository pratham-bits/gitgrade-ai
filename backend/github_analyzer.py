from github import Github
from scoring import calculate_score
from roadmap import generate_roadmap

g = Github()  # public repos only

def analyze_repo(repo_url):
    owner, repo_name = repo_url.rstrip("/").split("/")[-2:]
    repo = g.get_repo(f"{owner}/{repo_name}")

    files = repo.get_contents("")
    commits = repo.get_commits().totalCount

    readme_exists = True
    try:
        repo.get_readme()
    except:
        readme_exists = False

    languages = repo.get_languages()

    metrics = {
        "files": len(files),
        "commits": commits,
        "readme": readme_exists,
        "languages": list(languages.keys())
    }

    score, summary = calculate_score(metrics)
    roadmap = generate_roadmap(metrics)

    return {
        "score": score,
        "summary": summary,
        "roadmap": roadmap
    }
