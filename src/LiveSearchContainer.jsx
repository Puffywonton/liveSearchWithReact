import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const LiveSearchContainer = ({ onSearch }) => {
    const [enteredSearch, setEnteredSearch] = useState('');

    const handleSearchChange = (e) => {
        setEnteredSearch(e.target.value);
        onSearch(e.target.value)
    };

    return (
        <input
            type="text"
            placeholder="Search..."
            value={enteredSearch}
            onChange={handleSearchChange}
        />
    );
};

export default LiveSearchContainer









































