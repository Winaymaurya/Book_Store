import mongoose from 'mongoose'


const bookSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})


export default mongoose.model('books',bookSchema);