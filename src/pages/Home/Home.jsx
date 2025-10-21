import "./Home.css"
import Rules from "../Rules/Rules"
import Form from "../Form/Form"
import Game from "../Game/Game"
export default function Home() {
  return (
    <>
    <header>Chcete být milionářem pro IT</header>

    <div className="top-buttons">
        <button className="open-rules">📜 Pravidla hry</button>
        <button className="open-form">✍️ Správa otázek</button>
    </div>
    <Form/>
    <Rules/>
    <Game/>
    </>
  )
}