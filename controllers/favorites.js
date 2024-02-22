const { getAllFavoriteBooks, addBookToFavorite } = require('../services/favorites');

function getFavoriteBooks(req, res){
    try{
        const favoriteBooks = getAllFavoriteBooks()
        console.log(favoriteBooks)
        res.send(favoriteBooks)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritesBooks(req, res){
    try{
        const booksList= req.body
        if(booksList){
            addBookToFavorite(booksList)
            
            res.status(200)
            res.send("Livro adicionados aos favoritos com sucesso!")
        }
        else{
            res.status(422)
            res.send("Livros Inválidos")
        }

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}



module.exports = {
    getFavoriteBooks,
    postFavoritesBooks
}