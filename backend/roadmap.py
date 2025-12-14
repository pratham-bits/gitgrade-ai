def generate_roadmap(m):
    roadmap = []

    if not m["readme"]:
        roadmap.append("Create a detailed README explaining the project and setup")

    if m["commits"] < 15:
        roadmap.append("Increase commit frequency with meaningful messages")

    if len(m["languages"]) < 2:
        roadmap.append("Improve modularity and code separation")

    roadmap.append("Add automated tests to improve maintainability")
    roadmap.append("Implement CI/CD using GitHub Actions")

    return roadmap
