import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <header>Chcete být milionářem pro IT</header>

      <div className="top-buttons">
        <Link to={"/rules"}>
          <button className="open-rules">📜 Pravidla hry</button>
        </Link>
        <Link to={"/form"}>
          <button className="open-form">✍️ Správa otázek</button>
        </Link>
        <Link to={"/game"}>
          <button className="open-game">🎮 Zvolit kategorii</button>
        </Link>
      </div>
    </>
  );
}
