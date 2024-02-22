const { Router } = require("express");
const { getFavoriteBooks, postFavoritesBooks} = require("../controllers/favorites");

const router = Router();

router.get("/getFavoriteBooks", getFavoriteBooks)

router.post("/addBookToFavorite", postFavoritesBooks)

module.exports = router