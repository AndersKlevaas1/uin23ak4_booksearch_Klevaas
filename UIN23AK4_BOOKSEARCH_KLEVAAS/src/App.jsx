import React from 'react'
import Layout from './Components/Layout'
import SearchBox from './Components/Searchbox'
import BookList from './Components/Booklist'

function App() {
  return (
    <div className="App">
      <Layout />
      <SearchBox />
      <BookList />
    </div>
  )
}

export default App
