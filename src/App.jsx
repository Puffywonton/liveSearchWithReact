import { useState, useEffect } from 'react'
import './App.css'
import LiveSearchContainer from './LiveSearchContainer'
import axios from 'axios';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('trying')
        const { data } = await axios.get('https://swapi.dev/api/people/')
        setCharacters(data.results)
        console.log('done')
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const handleSearch = (searchTerm) => {
    setSearchResults(searchTerm)
    setTimeout(coucou, 1000)
  };

  const coucou = () => {
    console.log('coucou')
  }


  return (
    <>
      <h1>SWAPI Live Search</h1>
      <LiveSearchContainer onSearch={handleSearch} />
      <div className="results">
        {characters.map(character => (
          <div key={character.name}>
                  {character.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default App


