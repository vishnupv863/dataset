import { useEffect, useState } from "react";
import { apiFetch } from "../utils/apiFetch";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Imported from your new styles folder layout

interface HomeResponse {
  message: string;
}

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiFetch<HomeResponse>("/home")
      .then((data) => setMessage(data.message))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="home-container">
      {error ? (
        <p className="home-error">{error}</p>
      ) : (
        <p className="home-message">{message || "Connecting to servers..."}</p>
      )}
      
      <Link to="/market-overview" className="dashboard-link">
        View Market Overview Dashboard
      </Link>
    </div>
  );
}