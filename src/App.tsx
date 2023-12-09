import './App.css'
import Header from "./Header.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Navigation from "./Navigation.tsx";
import CharacterGallery from "./CharacterGallery.tsx";

function App() {

    return (
        <>
            <Header/>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery/>}/>

            </Routes>
        </>
    )
}

export default App
