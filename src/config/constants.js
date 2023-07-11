export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server-kim.fly.dev"
    : "http://localhost:8080";
