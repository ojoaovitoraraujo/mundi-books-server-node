const { Router } = require("express");
const {getBooks, getBook, postBook, patchBook, deleteBook} = require("../controllers/books");

const router = Router();

router.get("/", getBooks)

router.get("/getBookById/:id", getBook)

router.post("/addBook", postBook)

router.patch("/updateBook/:id", patchBook)

router.delete("/removeBook/:id", deleteBook)

module.exports = router