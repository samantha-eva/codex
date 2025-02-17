import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Le serveur est prêt")
})

app.listen(5050, () => {
    console.log("server started at http://localhost:5050 hello");
})