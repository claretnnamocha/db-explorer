import { Sequelize, SequelizeScopeError } from "sequelize";
import { dbURL, dialect } from "./env";

export const db = new Sequelize(dbURL, {
  dialect,
  dialectOptions: dbURL.includes("localhost")
    ? null
    : { ssl: { require: true, rejectUnauthorized: false } },
  logging: false,
});

export const authenticate = async (db: Sequelize, clear: boolean = false) => {
  // try {
  await db.authenticate();

  if (db.getDialect() !== "sqlite" && !db.getDatabaseName()) {
    throw new Error("Unable to connect to the database: No DB specified");
  }

  console.log("Connection to Database has been established successfully.");
  // } catch (error) {
  //   console.log("Unable to connect to the database:", error);
  // }
};
