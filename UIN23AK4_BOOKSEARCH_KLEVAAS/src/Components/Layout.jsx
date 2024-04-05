import React from 'react'
import SearchBox from './Searchbox'
import BookList from './Booklist'

function Layout() {
    return (
        <div className="layout">
            <h1>Book Search App</h1>
            <SearchBox />
            <BookList />
        </div>
    )
}

export default Layout;
