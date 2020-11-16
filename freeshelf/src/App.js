import React from 'react'
import './App.css'
import { books } from './book.js'
import { BookList } from './Components/BookList'

function App () {
  return (
    <div className='BookApp'> {books.map((book, key) => <BookList book={book} key={key} />)}
    </div>
  )
}
export default App
