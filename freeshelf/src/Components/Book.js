import React, {useState} from 'react'
import books from './books.json'

export const book = (props) => {
    const [moreInfo, lessInfo] = useState(false)
  return (
    <div className='bookContainer'>
      <div className='Summary'>
        <div className='details'>
          <img classname='coverPic'> {bookList.coverImageUrl} />
          <h3 className='title'> {bookList.title} </h3>
          <p className='author'> {bookList.author} </p>
          <p className='shortdescription'> {bookList.shortDescription} </p>
        </div>
        <button className='button' onClick={() => moreInfo(!lessInfo)}> Show {moreInfo ? 'Less' : 'More'}</button>
      </div>
      <div className='moreInfo'>
        <div className='moreInfoContent'>
          <a href={bookList.url} >{bookList.url}</a>
          <h4 className='publisher'> Publisher: {bookList.publisher} </h4>
          <h5 className='publicationDate'> Publication Date: {bookList.publicationDate} </h5>
          <p className='detailedDescription'> Detailed Description: {bookList.detailedDescription} </p>
        </div>
      </div>
    </div>
  )
}