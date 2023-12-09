import './App.css'
import Header from "./Header.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import Navigation from "./Navigation.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import {useEffect, useState} from "react";
import {Characters} from "./characters.ts";
import axios from "axios";

function App() {

const [characters, setCharacters] = useState<Characters[]>()

function fetchCharacters() {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(response => setCharacters(response.data.results))
        .catch(error => console.log("Error fetching data " + error))
}

    useEffect(() => {
        fetchCharacters()
    }, [characters]);

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
