import {Characters} from "./characters.ts";

type characterProps = {
    characters: Characters
}

export default function CharacterCard(props: characterProps) {
    return (
        <>
            <p><img src={props.characters.image} alt={"image of " + props.characters.name}/></p>
            <p>{props.characters.name}</p>
            <p>{props.characters.id}</p>
            <p>{props.characters.status}</p>
        </>
    )
}