import { Response, Router } from "express";
import { response } from "./helpers";
import { controller, validate } from "./middlewares";
import * as db from "./service";
import * as validator from "./validator";

const routes = Router();

routes.get("/db-name", controller(db.getDatabaseName));

routes.get("/tables", controller(db.listTables));

routes.get(
  "/table-columns",
  validate(validator.listTableColumns),
  controller(db.listTableColumns)
);

routes.post(
  "/get-records",
  validate(validator.readRecords),
  controller(db.readRecords)
);

routes.post(
  "/records",
  validate(validator.createRecords),
  controller(db.createRecords)
);

routes.put(
  "/records",
  validate(validator.updateRecords),
  controller(db.updateRecords)
);

routes.delete(
  "/records",
  validate(validator.deleteRecords),
  controller(db.deleteRecords)
);

routes.use((_, res: Response) => {
  response(res, { status: false, message: "Route not found" }, 404);
});

export default routes;
