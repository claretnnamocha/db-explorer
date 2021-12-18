import { Response, Router } from "express";
import { response } from "./helpers";

const routes = Router();

routes.use((_, res: Response) => {
  response(res, { status: false, message: "Route not found" }, 404);
});

export default routes;
