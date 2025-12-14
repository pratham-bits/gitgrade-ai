import React, { useState } from "react";

function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeRepo = async () => {
    if (!repoUrl) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://gitgrade-backend.onrender.com/analyze?repo_url=${repoUrl}`
      );
      const data = await res.json();
      setResult(data);
    } catch {
      setError("Failed to analyze repository. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 75) return "#22c55e"; // green
    if (score >= 50) return "#facc15"; // yellow
    return "#ef4444"; // red
  };

  const getScoreLabel = (score) => {
    if (score >= 75) return "Advanced";
    if (score >= 50) return "Intermediate";
    return "Beginner";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        color: "#e5e7eb"
      }}
    >
      <div
        style={{
          width: "520px",
          background: "#020617",
          padding: "30px",
          borderRadius: "14px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.6)"
        }}
      >
        {/* Title */}
        <h1 style={{ textAlign: "center", marginBottom: "8px" }}>
          GitGrade
        </h1>
        <p style={{ textAlign: "center", color: "#94a3b8" }}>
          AI-powered GitHub Repository Evaluator
        </p>

        {/* About */}
        <div
          style={{
            marginTop: "20px",
            background: "#020617",
            border: "1px solid #1e293b",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "14px",
            color: "#cbd5f5"
          }}
        >
<strong>Overview:</strong>
<p>
  GitGrade is an intelligent repository evaluation system that assesses a
  developer’s GitHub project and translates raw code, structure, and commit
  history into a comprehensive quality score, written evaluation, and
  personalized improvement roadmap.
</p>

          <strong>Evaluation Process:</strong>

          <ul>
            <li>📂 Analyzes repository structure and files</li>
            <li>📈 Evaluates commit consistency and practices</li>
            <li>🧠 Generates actionable AI-like feedback</li>
          </ul>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Paste GitHub repository URL"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #334155",
            background: "#020617",
            color: "#e5e7eb",
            marginTop: "20px"
          }}
        />

        {/* Button */}
        <button
          onClick={analyzeRepo}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Analyze Repository
        </button>

        {/* Status */}
        {loading && (
          <p style={{ marginTop: "15px", color: "#60a5fa" }}>
            🔍 Analyzing repository...
          </p>
        )}

        {error && (
          <p style={{ marginTop: "15px", color: "#ef4444" }}>{error}</p>
        )}

        {/* Result */}
        {result && (
          <div
            style={{
              marginTop: "25px",
              background: "#020617",
              border: "1px solid #1e293b",
              padding: "15px",
              borderRadius: "10px"
            }}
          >
            <h2>
              Score:{" "}
              <span style={{ color: getScoreColor(result.score) }}>
                {result.score} / 100
              </span>
            </h2>

            <p style={{ color: getScoreColor(result.score) }}>
              Level: <strong>{getScoreLabel(result.score)}</strong>
            </p>

            <p style={{ marginTop: "10px" }}>{result.summary}</p>

            <h3 style={{ marginTop: "15px" }}>Personalized Roadmap</h3>
            <ul>
              {result.roadmap.map((item, index) => (
                <li key={index} style={{ marginBottom: "6px" }}>
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
