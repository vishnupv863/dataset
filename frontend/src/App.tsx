import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MarketOverview from "./pages/MarketOverview";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market-overview" element={<MarketOverview />} />
      </Routes>
    </BrowserRouter>
  );
}