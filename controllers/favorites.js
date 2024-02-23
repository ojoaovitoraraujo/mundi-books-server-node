const { getAllFavoriteBooks, addBookToFavorite, deleteFavoriteBooksById } = require('../services/favorites');

function getFavoriteBooks(req, res){
    try{
        const favoriteBooks = getAllFavoriteBooks()
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

function deleteFavoriteBooks(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            deleteFavoriteBooksById(id);
            res.send("Livro Removido da lista de favoritos")
        }
        else{
            res.status(422)
            res.send("Id Inválido")
        }

    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}



module.exports = {
    getFavoriteBooks,
    postFavoritesBooks,
    deleteFavoriteBooks
}