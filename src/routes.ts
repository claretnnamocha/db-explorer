import { Response, Router } from "express";
import * as controller from "./controller";
import { response } from "./helpers";
import { validate } from "./middlewares";
import * as validator from "./validator";

const routes = Router();

routes.get("/db-name", controller.getDatabaseName);

routes.get("/tables", controller.listTables);

routes.get(
  "/table-columns",
  validate(validator.listTableColumns),
  controller.listTableColumns
);

routes.post(
  "/get-records",
  validate(validator.readRecords),
  controller.readRecords
);

routes.post(
  "/records",
  validate(validator.createRecords),
  controller.createRecords
);

routes.put(
  "/records",
  validate(validator.updateRecords),
  controller.updateRecords
);

routes.delete(
  "/records",
  validate(validator.deleteRecords),
  controller.deleteRecords
);

routes.use((_, res: Response) => {
  response(res, { status: false, message: "Route not found" }, 404);
});

export default routes;
