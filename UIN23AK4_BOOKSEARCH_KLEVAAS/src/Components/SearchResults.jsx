import React from 'react'
import BookItem from './BookItem.jsx'


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