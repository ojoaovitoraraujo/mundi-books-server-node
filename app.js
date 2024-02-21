const express = require("express");

const booksRouter = require("./routes/books")

const app = express();

const port = 8000;

app.use("/livros", booksRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);