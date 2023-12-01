
import './css/Search.css'

const Search = ({ handleChange, searchString, handleFormSubmit }) => { //props defined in App.js

    return ( //takes users input and sends that input to fetch from the API's
    <>
      <div id='searchcomponent'> 
        <br />
        <h1 id='searchtitle'>💨⛈️ Search Here To See Information About Any City! ❄️☀️</h1>
        <form onSubmit={handleFormSubmit} id='searchform'>
          <input
            className='inputs'
            type='text'
            placeholder='City'
            required
            onChange={handleChange}
            value={searchString}
            spellCheck
          />
          <button id='searchbutton' type='submit'>Search</button>
        </form>
      </div>

      <br/>
    </>
  )
}

export default Search











