// import { useState } from 'react'
import Navbar from './components/navbar'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from './pages/AddBook';
import ShowBook from './pages/ShowBook';


function App() {
  // const navigate=useNavigate()
  // const handelH=()=>{
  //  navigate('/addBook')
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
            <Navbar />
            <div className="home">
              <div className="intro">
                <p>Welcome To ,</p> <br />
                <span className='head'>MyBook.com</span> <span>Where you can add read delete books.</span>
                <div className="ex">It is a platform for the reader as well as the author to connect.</div>
                <div className="btn" >Add Books</div>
              </div>
              <div className="img">
                <img src="https://img.freepik.com/free-vector/bookshop-concept-illustration_114360-2674.jpg?w=740&t=st=1699677530~exp=1699678130~hmac=1dd31fe66c64c0875f7ecb62874eb6d51bc6c49a6530d51d3871a7e02a6dfbaf" alt="" />
              </div>
            </div>
            </>
          } />

          <Route exact path='/addBook' element={<AddBook />} />
          <Route exact path='/showBook' element={<ShowBook />} />
        </Routes>
      </Router>




    </>
  )
}

export default App
