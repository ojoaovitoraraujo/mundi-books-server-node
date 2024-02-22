const { getAllBooks, getBookById, addBook, updateBook, removeBook } = require('../services/books');

function getBooks(req, res){
    try{
        const books = getAllBooks()
        res.send(books)
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            const book = getBookById(id);
            res.send(book)
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

function postBook(req, res){
    try{
        const body = req.body
        if(body.name){
            addBook(body)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        }
        else{
            res.status(422)
            res.send("O campo nome é obrigatório")
        }
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res){
    try{
        const body = req.body
        const id = req.params.id
        if(id && Number(id)){
            updateBook(body, id)
            res.status(200)
            res.send("Livro atualizado com sucesso!")
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

function deleteBook(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            removeBook(id)
            
            res.status(200)
            res.send("Livro deletado com sucesso!")
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
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}