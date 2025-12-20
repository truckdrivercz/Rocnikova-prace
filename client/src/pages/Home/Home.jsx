import "./Home.css";
import { Link } from "react-router-dom";
import Logo from "../../../public/logo.png"
export default function Home() {
  return (
    <>
      <div className="content">
        <img src={Logo} alt="Logo" />
        <Link to={"/menu"}>
          <button className="open-game">Hrát teď</button>
        </Link>
      </div>
    </>
  );
}
