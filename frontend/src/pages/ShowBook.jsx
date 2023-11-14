import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Book from '../components/Book'
import axios from 'axios'

const ShowBook = () => {

  const [bookData, setBookData] = useState([])
  const getBooks = async () => {
    const res = await axios.get("http://localhost:8000/api/v1/book/show")
    setBookData(res.data.books)
  }
  useEffect(() => {
    getBooks()
  }, [])

  console.log(bookData)
  return (
    <>
      <Navbar />
      <div className="full">

        {bookData.map((i, index) => {
          return (<Book author={i.author} bookName={i.bookName} price={i.price} sr={index} id={i._id} />)
        })}



      </div>
    </>
  )
}

export default ShowBook
