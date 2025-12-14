export default function ResultCard({ data }) {
  return (
    <div className="mt-4 border p-4">
      <h2>Score: {data.score}/100</h2>
      <p>{data.summary}</p>
      <ul>
        {data.roadmap.map((r, i) => (
          <li key={i}>• {r}</li>
        ))}
      </ul>
    </div>
  );
}
