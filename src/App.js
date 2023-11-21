import React, { useState } from 'react';
import Search from "./components/Search"
import Result from "./components/Result"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {
  const [searchString, setSearchString] = useState('');

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };
  return (
<>
    < Header />
    <Search handleChange={handleChange} searchString={searchString} />
    < Result/>
    < Footer />
</>
  )
}
export default App;
