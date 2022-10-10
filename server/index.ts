import "dotenv/config";
import express from "express";
import cors from "cors";

//PORT
const PORT = process.env.PORT || 8000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.listen(PORT, () => {
  console.log(`Server is started on localhost:${PORT}`);
});
