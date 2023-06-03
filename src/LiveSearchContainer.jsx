import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const LiveSearchContainer = ({ onSearch, onLoad }) => {
    const [enteredSearch, setEnteredSearch] = useState('')
    const [timer, setTimer] = useState(null)
    const [defaultPosition, setDefaultPosition] = useState(true)

    const handleSearchChange = (e) => {
        setDefaultPosition(false)
        onLoad(true)
        if (e.target.value == "") {
            setEnteredSearch(e.target.value)
            onSearch('')
            setDefaultPosition(true)
            return
        }
        setEnteredSearch(e.target.value)
        clearTimeout(timer)
        const newTimer = setTimeout(() => {
            console.log("lenght", e.target.value)
            onSearch(e.target.value)
        }, 500)
        setTimer(newTimer)
    };

    return (
        <input
            className={`input-search ${defaultPosition && 'default'}`}
            type="text"
            placeholder="Search..."
            value={enteredSearch}
            onChange={handleSearchChange}
        />
    );
};

export default LiveSearchContainer





































