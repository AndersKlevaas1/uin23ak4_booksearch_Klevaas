import React from 'react'

function BookItem({ book }) {
    return (
        <div className="book-item">
            <h3>{book.title}</h3>
            <p><strong>Forfatter:</strong> {book.author_name}</p>
            <p><strong>Første år publisert:</strong> {book.first_publish_year}</p>
            <p><strong>Gjennomsnittlig rating:</strong> {book.average_rating}</p>
            <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">Søk på Amazon</a>
        </div>
    )
}

export default BookItem
