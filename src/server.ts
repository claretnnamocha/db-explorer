import { config } from "dotenv";
import express from "express";
import explorer from "./";

config();
const app = express();
const port: number = 8000;

app.use("/explorer", explorer({ dbURL: "sqlite://db.db" }));

if (require.main) {
  app.listen(port, () => {
    console.log(
      `Explorer test server is running on http://localhost:${port}`
    );
  });
}
