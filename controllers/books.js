function getBooks(req, res){
    try{
        res.send("Hellow World!")
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}