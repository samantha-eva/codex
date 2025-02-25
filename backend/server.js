import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogRoutes from "./src/routes/blog.route.js";
import commentRoutes from "./src/routes/comment.route.js";

const PORT = process.env.SERVER_PORT || 5050;

const NOM_DATABASE = process.env.NOM_DATABASE;
const MONGO_HOST =  process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

const URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${NOM_DATABASE}`;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blog/", blogRoutes);
app.use("/api/comments/", commentRoutes);

async function main() {
  await mongoose.connect(URI);
  app.get('/', (req, res) => {
    res.send('✅ Le serveur est prêt');
  });
}
main().then(() => console.log(' ✅Mongodb connected successfully!')).catch(err => console.log(err));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});