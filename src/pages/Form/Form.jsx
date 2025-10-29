import "./Form.css";
import { Link } from "react-router-dom";
export default function Form() {
  return (
    <div className="modal form-modal">
      <div className="modal-content">
        <Link to={"/"}>
          <span className="close-btn close-form">❌</span>
        </Link>
        <h2>✍️ Správa otázek</h2>

        <div className="form-tabs">
          <button className="tab active">Přidat otázku</button>
          <button className="tab edit-question">Upravit otázku</button>
          <button className="tab delete-question">Smazat otázku</button>
        </div>

        <div className="form-panel active">
          <form>
            <label htmlFor="category">Kategorie:</label>
            <select id="category" name="category" required>
              <option value="">Vyber kategorii</option>
              <option value="sites">Počítačové sítě</option>
              <option value="programming">Programování</option>
              <option value="webDevelop">Vývoj webových stránek</option>
            </select>

            <label htmlFor="question">Otázka:</label>
            <input type="text" id="question" name="question" required />

            <label htmlFor="answerA">Odpověď A:</label>
            <input type="text" id="answerA" name="answerA" required />

            <label htmlFor="answerB">Odpověď B:</label>
            <input type="text" id="answerB" name="answerB" required />

            <label htmlFor="answerC">Odpověď C:</label>
            <input type="text" id="answerC" name="answerC" required />

            <label htmlFor="answerD">Odpověď D:</label>
            <input type="text" id="answerD" name="answerD" required />

            <label htmlFor="correct">Správná odpověď:</label>
            <select id="correct" name="correct">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>

            <div className="form-buttons">
              <button className="add" type="submit">
                Přidat otázku
              </button>
              <button className="delete" type="reset">
                Vymazat
              </button>
            </div>
          </form>
        </div>

        <div className="form-panel">
          <p>
            Zde bude formulář pro <strong>úpravu otázek</strong> (napojíš na
            databázi).
          </p>
        </div>

        <div className="form-panel">
          <p>
            Zde bude formulář pro <strong>mazání otázek</strong> (napojíš na
            databázi).
          </p>
        </div>
      </div>
    </div>
  );
}
