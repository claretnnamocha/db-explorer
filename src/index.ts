import cors from "cors";
import express, { NextFunction, Request, Response, Router } from "express";
import formdata from "express-form-data";
import { db, security } from "./configs";
import { response } from "./helpers";
import routes from "./routes";

export default ({ dbURL }) => {
  db.authenticate({ dbURL });
  const router = Router();

  router.use(formdata.parse());
  router.use(express.json({ limit: "100mb", type: "application/json" }));
  router.use(express.urlencoded({ limit: "100mb", extended: true }));
  router.use(cors());

  security.lock(router);

  router.use("/api", routes);
  // todo handle front end

  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return response(
      res,
      { status: false, message: `Internal server error: ${err.message}` },
      500
    );
  });

  return router;
};
