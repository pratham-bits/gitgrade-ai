def calculate_score(m):
    score = 0

    score += min(m["files"] * 2, 20)
    score += min(m["commits"] // 5, 20)
    score += 20 if m["readme"] else 0
    score += min(len(m["languages"]) * 10, 20)

    if score >= 85:
        summary = "Excellent project with strong structure and consistency."
    elif score >= 60:
        summary = "Good project but needs improvements in documentation or testing."
    else:
        summary = "Basic project; requires better structure and consistency."

    return score, summary
