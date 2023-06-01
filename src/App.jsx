import { useState } from 'react'
import './App.css'
import LiveSearchContainer from './LiveSearchContainer'
import axios from 'axios';


function App() {
  const [characters, setCharacters] = useState([])

  const fetchData = async (searchTerm) => {
    try {
      console.log('trying')
      const url = 'https://swapi.dev/api/people/?search=' + searchTerm
      console.log(url)
      const { data } = await axios.get(url)
      setCharacters(data.results)
      console.log('done')
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <>
      <h1>SWAPI Live Search</h1>
      <LiveSearchContainer onSearch={fetchData} />
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


