import React, { useState } from 'react'

export default function BookList (props) {
  const [moreInfo, setMoreInfo] = useState(false)
  const { book } = props
  return (
    <div className='bookContainer'>
        <img src={book.coverImageUrl} alt='Book Cover Image' />
        <h3 className='title'> {book.title} </h3>
        <p className='author'> {book.author} </p>
        <p className='shortdescription'> {book.shortDescription} </p>
        <button className='button' onClick={() => setMoreInfo(!moreInfo)}> Show {moreInfo ? 'Less' : 'More'}</button>
        {moreInfo && (
      <div className='moreInfo'>
        <div>URL: <a href={book.url}>{book.url}</a></div>
        <div className='publisher'>
          {book.publisher && <h4>Publisher: {book.publisher}</h4>}</div>
        <div className='publicationDate'> 
          {book.publicationDate && <h5>Publication Date: {book.publicationDate}</h5>}</div>
        <div className='detailedDescription'> 
          {book.detailedDescription && <p>Detailed Description: {book.detailedDescription}</p>}</div>
    </div>
  )}
    </div> 
  )} 
  
