/* eslint-disable react/prop-types */
const CharacterCard = (props) => {
    return (
        <div className="character-card" key={props.title}>
            <h3 className="character-title">
                {props.title}
            </h3>
            <span>
                mass:
                {props.mass}
            </span>
        </div>    
    )
}

export default CharacterCard