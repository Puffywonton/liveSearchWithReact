/* eslint-disable react/prop-types */
const CharacterCard = (props) => {
    console.log(props.character, 'what is this')
    return (
        <div className="character-card" key={props.character.id}>
            <img className="image" src={props.character.image} alt={props.character.name} />
            <div className="overlay-box">
                <ul>
                    <li>Status: {props.character.status}</li>
                    <li>Species: {props.character.species}</li>
                    <li>Hender: {props.character.gender}</li>
                    <li>Type: {props.character.type}</li>
                    <li>Origin: {props.character.origin.name}</li>
                    <li>Current Location: {props.character.location.name}</li>
                </ul>
            </div>
            <h2>{props.character.name}</h2>
        </div>    
    )
}

export default CharacterCard