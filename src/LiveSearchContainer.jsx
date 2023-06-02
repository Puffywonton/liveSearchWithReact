import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const LiveSearchContainer = ({ onSearch, onLoad }) => {
    const [enteredSearch, setEnteredSearch] = useState('')
    const [timer, setTimer] = useState(null)

    const handleSearchChange = (e) => {
        setEnteredSearch(e.target.value)
        onLoad(true)
        clearTimeout(timer)
        const newTimer = setTimeout(() => {
            console.log("lenght", e.target.value)
            onSearch(e.target.value)
        }, 500)
        setTimer(newTimer)
    };

    return (
        <input
            className='input-search'
            type="text"
            placeholder="Search..."
            value={enteredSearch}
            onChange={handleSearchChange}
        />
    );
};

export default LiveSearchContainer





































