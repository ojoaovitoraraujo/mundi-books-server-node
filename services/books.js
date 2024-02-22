const fs = require('fs');
function getAllBooks(){
    return JSON.parse(fs.readFileSync('books.json'));
}

function getBookById(id){
    const books = JSON.parse(fs.readFileSync('books.json'));
    const filteredBook = books.filter(book => book.id === id)
    return filteredBook;
}

function addBook(newBook){
    const books = JSON.parse(fs.readFileSync('books.json'));
    const newBooksList = [...books, newBook]
    return fs.writeFileSync('books.json', JSON.stringify(newBooksList));
}

function updateBook(updatedBook, id){
    let books = JSON.parse(fs.readFileSync('books.json'));
    const index = books.findIndex(book => book.id === id)
    const modifiedElement = {...books[index], ...updatedBook}
    books[index] = modifiedElement
    
    return fs.writeFileSync('books.json', JSON.stringify(books));
}

function removeBook(id){
    let books = JSON.parse(fs.readFileSync('books.json'));
    const index = books.findIndex(book => book.id === id)
    books.splice(index, 1)    
    return fs.writeFileSync('books.json', JSON.stringify(books));

    // let books = JSON.parse(fs.readFileSync('books.json'));
    // const filteredBooks = books.filter(book => book.id !== id)    
    // return fs.writeFileSync('books.json', JSON.stringify(books));
}



module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    removeBook
}