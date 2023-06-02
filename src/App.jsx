import { useState } from 'react'
import './App.css'
import LiveSearchContainer from './LiveSearchContainer'
import axios from 'axios';
import CharacterCard from './CharacterCard';


function App() {
  const [characters, setCharacters] = useState([])
  const [loader, setLoader] = useState(false)


  const fetchData = async (searchTerm) => {
    try { // should i put the if before or after the try
      if (searchTerm == '') {
        setCharacters([])
        setLoader(false)
        return
      }
      const url = 'https://swapi.dev/api/people/?search=' + searchTerm
      const { data } = await axios.get(url)
      setCharacters(data.results)
      setLoader(false)
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <>
      <h1>SWAPI Characters Live Search</h1>
      <LiveSearchContainer onSearch={fetchData} onLoad={setLoader} />
      <div className="results-container">
        {loader && <div className="lds-dual-ring"></div>}
        {!loader &&
          <div className="results">
            {characters.map(character => (
              <CharacterCard
                key={character.name}
                title={character.name}
                mass={character.mass}
              />
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default App


