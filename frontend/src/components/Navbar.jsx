import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  
  const navigate=useNavigate()

  const handelHome=()=>{
    navigate('/')
  }
  const handelAdd=()=>{
    navigate('/addBook')
  }

  const handelShow=()=>{
    navigate("/showBook")
  }
  return (
    <>
    <div className="nav">
      <div className="logo">
        MyBooks.com
      </div>
      <div className="links">
        <ul> 
          <li onClick={handelHome}>Home</li>
          <li onClick={handelAdd}>Add Books</li>
          <li onClick={handelShow}>Show Books</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar
