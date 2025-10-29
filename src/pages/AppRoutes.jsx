import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home";
import Rules from "./Rules/Rules";
import Game from "./Game/Game";
import Form from "./Form/Form";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="rules" element={<Rules/>}/>
                <Route path="game" element={<Game/>}/>
                <Route path="form" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    )
}