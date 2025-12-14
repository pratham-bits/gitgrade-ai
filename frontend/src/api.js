import axios from "axios";

export const analyzeRepo = (url) =>
  axios.get(`https://your-backend-url/analyze?repo_url=${url}`);
