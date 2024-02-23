const express = require("express");
const cors = require("cors");
const booksRouter = require("./routes/books")
const favoritesRouter = require("./routes/favorites")

const app = express();

const port = 8000;


app.use(express.json());

app.use(cors({
    origin: "*"
}))

app.use("/livros", booksRouter)
app.use("/favoritos", favoritesRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);