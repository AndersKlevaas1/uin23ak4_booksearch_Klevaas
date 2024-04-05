import React, { useState } from 'react'

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Search term:", searchTerm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Søk etter bøker..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit">Søk</button>
        </form>
    )
}

export default SearchBox
