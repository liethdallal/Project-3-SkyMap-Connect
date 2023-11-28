
import './css/Search.css';

const Search = ({ handleChange, searchString, handleFormSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(event);
  };

  return (
    <>
      <div id='searchcomponent'>
        <br />
        <h1 id="searchtitle">💨⛈️ Search Here To See Information About Any City! ❄️☀️</h1>
        <form onSubmit={handleSubmit} id="searchform">
          <input
            className='inputs'
            type="text"
            placeholder="City"
            required
            onChange={handleChange}
            value={searchString}
            spellCheck
          />
          <button id='searchbutton' type="submit">Search</button>
        </form>
      </div>

      <br/>
    </>
  );
}

export default Search;











