import "./Menu.css";
import { Link } from "react-router-dom";
export default function Menu() {
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
      </div>
      <Link to={"/game"}>
        <div className="game-area">
          <div className="categories">
            <button id="sites">Počítačové sítě</button>
            <button id="programming">Programování</button>
            <button id="webDevelop">Vývoj webových stránek</button>
          </div>
        </div></Link>
    </>
  );
}