import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Le serveur est prêt")
})

app.listen(5000, () => {
    console.log("server started at http://localhost:5000 hello");
})