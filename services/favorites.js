const { getBookById } = require('../services/books');
const fs = require('fs');

function addBookToFavorite(booksList){
    const favoriteBooks = JSON.parse(fs.readFileSync('favorites.json'));
    const books = getAllFavoriteBooks();

    let newFavoriteBooks = []

    booksList.forEach( (fbook) => {
        const book = getBookById(fbook.toString())
        newFavoriteBooks.push(book[0])
    })

    const newFavoriteBooksList = [...favoriteBooks, ...newFavoriteBooks]
    
    return fs.writeFileSync('favorites.json', JSON.stringify(newFavoriteBooksList));
}

function getAllFavoriteBooks(){
    return JSON.parse(fs.readFileSync('favorites.json'));
}

function deleteFavoriteBooksById(id){
    const books = JSON.parse(fs.readFileSync("favorites.json"))

    const filteredBooks = books.filter(book => book.id !== id)
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))
}

module.exports = {
    getAllFavoriteBooks,
    addBookToFavorite,
    deleteFavoriteBooksById
}