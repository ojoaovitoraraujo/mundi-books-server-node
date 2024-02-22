const { getBookById } = require('../services/books');
const fs = require('fs');

function addBookToFavorite(booksList){
    const favoriteBooks = JSON.parse(fs.readFileSync('favorites.json'));

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

module.exports = {
    getAllFavoriteBooks,
    addBookToFavorite
}