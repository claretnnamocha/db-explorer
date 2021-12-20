import { Sequelize } from "sequelize";

export let db;

export const authenticate = async (dbURL: string) => {
  db = new Sequelize(dbURL, {
    dialectOptions: dbURL.includes("localhost")
      ? null
      : { ssl: { require: true, rejectUnauthorized: false } },
    logging: false,
  });
  await db.authenticate();

  if (db.getDialect() !== "sqlite" && !db.getDatabaseName()) {
    throw new Error("Unable to connect to the database: No DB specified");
  }
};
