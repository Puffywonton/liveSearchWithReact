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
      const url = 'https://rickandmortyapi.com/api/character/?name=' + searchTerm
      const { data } = await axios.get(url)
      console.log(data.results)
      setCharacters(data.results)
      setLoader(false)
    } catch (error) {
      console.log(error)
    }
  }
    
  return (
    <div className='mother'>
      <h1>Rick & Morty Character Search</h1>
      <LiveSearchContainer onSearch={fetchData} onLoad={setLoader} />
      {loader && <div className="lds-dual-ring"></div>}
      {!loader &&
        <div className="results">
          {characters.map(character => (
            <CharacterCard
              character={character}
              key={character.id}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default App


