import bookModel from "../models/bookModel.js";


export const addBook = async (req, res) => {
    try {
        const { author, bookName, price } = req.body

        const existingBook = await bookModel.findOne({ bookName })
        if (existingBook) {
            return res.status(200).send({
                success: false,
                message: "Book Name Already Exist",
            })
        }
        const books = await new bookModel({
            author, bookName, price
        }).save();
        res.status(200).send({
            success: true,
            message: "New Book added",
            books
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Something Wrong in adding new book",
            error
        })
    }
}


export const showBook = async (req, res) => {

    try {
        const books = await bookModel.find();
        res.status(201).send({
            success: true,
            message: "Books showed",
            books
        })

    } catch (error) {
        res.status(201).send({
            success: false,
            message: "Cannot displayed",
            error
        })
    }
}
export const deleteBook = async (req, res) => {

    try {
        const { _id } = req.params

        const checkExistBook = await bookModel.findOne({ _id });
        console.log(checkExistBook)
        if (!checkExistBook) {
            res.status(200).send({
                success: true,
                message: "Book Do not exist  ",

            })
        }
        else {
            await bookModel.findByIdAndDelete({ _id })
            res.status(200).send({
                success: true,
                message: "Book Deleted  ",

            })
        }


    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Cannot Deleted",
            error
        })
    }
}