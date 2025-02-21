import express from "express";
import cors from "cors";
import { connectToServer } from "./db/connection.js"; // ✅ Correct import;


const PORT = process.env.SERVER_PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Le serveur Express est prêt!");
});

app.listen(PORT, () => {
  connectToServer(); // ✅ Call the function directly
  console.log(`Server listening on port ${PORT}`);
});
