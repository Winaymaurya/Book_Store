import React from 'react'
import './Book.css'
import axios from 'axios'
const Book = (props) => {

  const handelDelete= async (_id)=>{
    const res=await axios.delete(`http://localhost:8000/api/v1/book/delete/${_id}`)
    if(res.success){
      alert(res.data.message)
    }
    else{
      alert(res.data.message)
    }
    window.location.reload(true);
    // console.log(res)
}
  return (
    <>
    <div className="mybook">
        <div className="sr">
          {props.sr +1}
        </div>
        <div className="bookN">
           {props.bookName}
        </div>
        <div className="Author">
         {props.author}
        </div>
        <div className="price">
   {props.price}
        </div>
        <div className="delete">
          <img src="delete.png" onClick={()=>handelDelete(props.id)} alt="" />
        </div>
    </div>
    </>
  )
}

export default Book
