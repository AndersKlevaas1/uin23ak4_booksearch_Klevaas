import React from 'react'

function SearchResult({ title, firstPublishYear, author, averageRating, amazonId }) {
    const handleAmazonSearch = () => {
        window.open(`https://www.amazon.com/s?k=${amazonId}`, '_blank')
    }

    return (
        <div className="search-result">
            <h3>{title}</h3>
            <p>Første publisering år: {firstPublishYear}</p>
            <p>Forfatter: {author}</p>
            <p>Gjennomsnittlig vurdering: {averageRating}</p>
            <button onClick={handleAmazonSearch}>Søk på Amazon</button>
        </div>
    )
}

export default SearchResult
