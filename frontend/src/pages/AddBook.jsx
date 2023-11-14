
import React, {useState} from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import './addBook.css'

const AddBook = () => {
const [author, setAuthor] = useState('')

const [name, setName] = useState('')
const [price, setPrice] = useState('')


const handleSubmit= async ()=>{
    const payload={
      author,bookName:name,price
    }
    const res=await axios.post("http://localhost:8000/api/v1/book/add",payload)
    console.log(res)
    if(res.success){
      alert(res.data.message)
    }
    else{
      alert(res.data.message)
    }
    // console.log(res)
}
  return (
    <>
    <Navbar/>
    <div className="book">
      <form >
        <div className="d1">
          <label htmlFor="Author">Author : &nbsp; &nbsp; &nbsp;</label>
          <input type="text" name="Author" id="Author" value={author} onChange={(e)=>setAuthor(e.target.value)} />
        </div>
        <div className="d2">
          <label htmlFor="Name">Book Name :</label>
          <input type="text" name="Name" id="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
        <div className="d3">
          <label htmlFor="Price">Price(in Rs) :</label>
          <input type="Number" name="Price" id="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </div>
          <div className="addButton " onClick={handleSubmit}>ADD BOOK</div>
      </form>
    </div>
    </>
  )
}

export default AddBook
