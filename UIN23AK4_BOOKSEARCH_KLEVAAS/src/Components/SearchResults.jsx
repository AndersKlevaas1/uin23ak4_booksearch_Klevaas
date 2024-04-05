import React from 'react'
import BookItem from './Bookcard.jsx'


function SearchResults({ books }) {
  return (
    <section className="searchresult">
      {books.map((book, index) => (
        <BookItem key={index} {...book} />
      ))}
    </section>
  )
}

export default SearchResults