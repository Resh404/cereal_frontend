import './App.css'
import Header from "./Header.tsx"
import CerealList from "../cereal/CerealList.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CerealDetail from "../cereal/CerealDetail.tsx";
import CerealAdd from "../cereal/CerealAdd.tsx";
import CerealEdit from "../cereal/CerealEdit.tsx";

function App() {
    return (
        <BrowserRouter>
        <div className={'container'}>
            <Header subtitle={'C# Cereal api with Vite + Typescript + React'}/>
            <Routes>
                <Route path="/" element={<CerealList/>}></Route>
                <Route path="/cereal/:id" element={<CerealDetail/>}></Route>
                <Route path={"/cereal/add"} element={<CerealAdd/>}></Route>
                <Route path={"/cereal/edit/:id"} element={<CerealEdit/>}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

    export default App
