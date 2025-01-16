import React, { useState, useEffect } from 'react';
import './styling/style.scss';
import SearchResults from './Components/SearchResults.jsx';

function App() {
  const [allBooks, setAllBooks] = useState([]); // Alle James Bond-bøkene
  const [filteredBooks, setFilteredBooks] = useState([]); // Filtrerte resultater
  const [query, setQuery] = useState(''); // Søketekst

  // Hent alle bøker om James Bond når siden lastes
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=james%20bond&fields=*,availability&limit=10`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setAllBooks(data.docs); // Lagre alle bøker
        setFilteredBooks(data.docs); // Vis alle bøker som standard
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Kjører kun én gang når komponenten lastes

  // Oppdater filtrerte resultater basert på søketekst
  useEffect(() => {
    if (query.length === 0) {
      setFilteredBooks(allBooks); // Hvis søket er tomt, vis alle bøker
    } else {
      const filtered = allBooks.filter((book) =>
        book.title?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [query, allBooks]); // Kjør når `query` eller `allBooks` oppdateres

  return (
    <div className="App">
      <header>
        <h1>James Bond Book Finder</h1>
      </header>
      <main>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Oppdaterer søketekst
          placeholder="Search James Bond books..."
          className="search-input"
        />
        <SearchResults books={filteredBooks} />
      </main>
    </div>
  );
}

export default App;