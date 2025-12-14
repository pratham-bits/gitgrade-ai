export default function RepoForm({ onAnalyze }) {
  const [url, setUrl] = useState("");

  return (
    <div>
      <input
        className="border p-2 w-full"
        placeholder="Paste GitHub repo URL"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="bg-black text-white p-2 mt-2"
        onClick={() => onAnalyze(url)}
      >
        Analyze Repository
      </button>
    </div>
  );
}
