import express from "express";
import apiRouter from "./src";

const app = express();

app.use(express.json());
app.use("/api", apiRouter);
app.get("/", (req, res) => {
  res.send("WORKS");
});

app.listen(3000, () => {
  console.log("Server listens on 3000 port.");
});
