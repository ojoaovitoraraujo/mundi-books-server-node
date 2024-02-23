const { Router } = require("express");
const { getFavoriteBooks, postFavoritesBooks, deleteFavoriteBooks} = require("../controllers/favorites");

const router = Router();

router.get("/getFavoriteBooks", getFavoriteBooks)

router.post("/addBookToFavorite", postFavoritesBooks)

router.delete("/removeBookFromFavorite/:id", deleteFavoriteBooks)

module.exports = router