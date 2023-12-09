import './App.css'
import Header from "./Header.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Navigation from "./Navigation.tsx";

function App() {

    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>

            </Routes>
        </>
    )
}

export default App
