import "./Game.css"

export default function Game() {
  return (
    <>
    <div className="container">
      <div className="game-area">
        <div className="categories">
          <button id="sites">Počítačové sítě</button>
          <button id="programming">Programování</button>
          <button id="webDevelop">Vývoj webových stránek</button>
        </div>
      </div>

      <div className="question-box">
        Tady se objeví otázky z databáze
      </div>

      <div className="answers">
        <button id="a">A:</button>
        <button id="b">B:</button>
        <button id="c">C:</button>
        <button id="d">D:</button>
      </div>

      <div className="lifelines">
        <button id="half">50:50</button>
        <button id="phone">📞</button>
        <button id="skip">Skip</button>
      </div>

      <div className="scoreboard">
        <ul>
          <li><span className="point">15. 10 000 000 Kč</span></li>
          <li>14. 5 000 000 Kč</li>
          <li>13. 2 500 000 Kč</li>
          <li>12. 1 250 000 Kč</li>
          <li>11. 640 000 Kč</li>
          <li><span className="point">10. 320 000 Kč</span></li>
          <li>9. 160 000 Kč</li>
          <li>8. 80 000 Kč</li>
          <li>7. 40 000 Kč</li>
          <li>6. 20 000 Kč</li>
          <li><span className="point">5. 10 000 Kč</span></li>
          <li>4. 5 000 Kč</li>
          <li>3. 3 000 Kč</li>
          <li>2. 2 000 Kč</li>
          <li>1. 1 000 Kč</li>
        </ul>
      </div>
    </div>
    </>
  )
}
