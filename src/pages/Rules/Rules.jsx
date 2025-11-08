import "./Rules.css";
import { Link } from "react-router-dom";
export default function Rules() {
  return (
    <>
      <div className="model-rules-model">
        <div className="model-content">
          <Link to={"/menu"}>
            <span className="close-btn close-rules">❌</span>
          </Link>
          <h2>📜 Pravidla hry</h2>
          <p>
            Hra <strong>Chcete být milionářem</strong> je vědomostní soutěž, ve
            které hráč odpovídá na otázky z vybraných kategorií.
          </p>
          <ul>
            <li>Hráč postupuje po „žebříčku výher“ až k 10 000 000 Kč.</li>
            <li>
              Každá otázka má <strong>4 možnosti</strong>, pouze jedna je
              správná.
            </li>
            <li>Správná odpověď posouvá hráče na vyšší částku.</li>
            <li>
              Špatná odpověď znamená konec hry, hráč si odnese nejbližší
              záchytný bod (10 000 Kč nebo 320 000 Kč).
            </li>
            <li>Čas na odpověď může být omezen (např. 30 sekund).</li>
          </ul>
          <h3>Nápovědy</h3>
          <ul>
            <li>
              <strong>50:50</strong> - odstraní 2 špatné odpovědi.
            </li>
            <li>
              <strong>Telefon</strong> - hráč může zavolat o rade.
            </li>
            <li>
              <strong>Přeskočení otázky</strong> - otázka se přeskočí a jdete na
              další otázku
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
