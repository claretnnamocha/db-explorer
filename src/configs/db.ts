import { Sequelize } from "sequelize";

export let db: Sequelize;

export const authenticate = async ({ dbURL, secure = false }) => {
  db = new Sequelize(dbURL, {
    dialectOptions: !secure
      ? null
      : { ssl: { require: true, rejectUnauthorized: false } },
    logging: false,
  });

  await db.authenticate();

  if (db.getDialect() !== "sqlite" && !db.getDatabaseName()) {
    throw new Error("Unable to connect to the database: No DB specified");
  }
};
