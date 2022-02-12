import { config } from "dotenv";
import express from "express";
import { env } from "./configs";
import explorer from "./";

config();
const app = express();
const port: number = env.port;

app.use("/explorer", explorer({ dbURL: "sqlite://db.db" }));

if (require.main) {
  app.listen(port, () => {
    console.log(
      `Explorer test server is running on http://localhost:${port} (${env.env})`
    );
  });
}
