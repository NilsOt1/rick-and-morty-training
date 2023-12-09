import CharacterCard from "./CharacterCard.tsx";
import {Characters} from "./characters.ts";

type characterProps = {
    characters: Characters[]
}
export default function CharacterGallery(props: characterProps) {
    return (
        <>

            {props.characters.map(character =>
                <CharacterCard key={character.id} characters={character}/>)}


        </>
    )
}