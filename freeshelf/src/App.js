import React from 'react'
import './App.css'
import books from './books.json'
import BookList from './components/BookList'


function App () {
  return (
    <div className='BookApp'> {books.map((book, key) => <BookList book={book} key={key} />)}
    </div>
  )
}
export default App
