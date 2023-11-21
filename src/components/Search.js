import './Search.css'

//to acess we edo env.{url name not in brackets} test
function Search({ handleSubmit, handleChange, searchString}) {
    return(
        <>
            <h1 id="searchtitle">💨⛈️ Search Here To See the Weather Where You Are ❄️☀️</h1>
            <form onSubmit={handleSubmit} id="searchform">
                <input
                    className='inputs'
                    type="txt" 
                    placeholder="City"
                    required
                    onChange={handleChange}
                    value={searchString}
                />
                <button id='searchbutton' type="Submit">Search</button>
            </form>
        </>

    )
}

export default Search