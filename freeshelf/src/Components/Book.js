import React, { useState } from 'react'
import './books.json'

export default function BookList (props) {
  const [moreInfo, lessInfo] = useState(false)
  const { books } = props
  return (
    <div className='bookContainer'>
      <div className='summary'>
        <div className='details'>
          <div className='coverPic'>
            <img src={books.coverImageUrl} alt='Book Cover Image' /> 
          </div>
          <h3 className='title'> {books.title} </h3>
          <p className='author'> {books.author} </p>
          <p className='shortdescription'> {books.shortDescription} </p>
        </div>
        <button className='button' onClick={() => moreInfo(!lessInfo)}> Show {moreInfo ? 'Less' : 'More'}</button>
      </div>
      <div className='moreInfo'>
        <div className='moreInfoContent'>
          <a href={books.url}>{books.url}</a>
          <h4 className='publisher'> Publisher: {books.publisher} </h4>
          <h5 className='publicationDate'> Publication Date: {books.publicationDate} </h5>
          <p className='detailedDescription'> Detailed Description: {books.detailedDescription} </p>
        </div>
      </div>
    )
}
