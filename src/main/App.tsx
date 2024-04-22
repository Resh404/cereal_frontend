import './App.css'
import Header from "./Header.tsx"
import CerealList from "../cereal/CerealList.tsx";

function App() {
    return (
        <div className={'container'}>
            <Header subtitle={'C# Cereal api with Vite + React'}/>
            <CerealList/>
        </div>
    )
}

export default App
