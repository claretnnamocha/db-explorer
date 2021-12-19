import { db } from "./configs/db";

export const getDatabaseName = async () => {
  try {
    const data = db.getDatabaseName() || "DB";

    return {
      status: true,
      message: "DB name",
      data,
    };
  } catch (error) {
    return { status: false, message: `Error listing tables: ${error.message}` };
  }
};

export const listTables = async () => {
  try {
    const data = await db.getQueryInterface().showAllTables();

    return {
      status: true,
      message: `Tables for '${db.getDatabaseName() || "DB"}'`,
      data,
    };
  } catch (error) {
    return { status: false, message: `Error listing tables: ${error.message}` };
  }
};

export const createTable = async ({ table, attributes }) => {
  try {
    await db.getQueryInterface().createTable(table, attributes);

    return {
      status: true,
      message: `Table '${table}' created`,
    };
  } catch (error) {
    return { status: false, message: `Error creating table: ${error.message}` };
  }
};

export const deleteTable = async ({ table }) => {
  try {
    await db.getQueryInterface().dropTable(table);

    return {
      status: true,
      message: `Table '${table}' deleted`,
    };
  } catch (error) {
    return { status: false, message: `Error deleting table: ${error.message}` };
  }
};

export const listTableColumns = async ({ table }) => {
  try {
    const data = await db.getQueryInterface().describeTable(table);

    return { status: true, message: `Columns for ${table}`, data };
  } catch (error) {
    return {
      status: false,
      message: `Error listing table columns: ${error.message}`,
    };
  }
};

export const createRecords = async ({ table, records }) => {
  try {
    await db.getQueryInterface().bulkInsert(table, records);

    return { status: true, message: "Record(s) created" };
  } catch (error) {
    return {
      status: false,
      message: `Error trying to create record(s): ${error.message}`,
    };
  }
};

export const readRecords = async ({ table, where = {}, model = null }) => {
  try {
    const data = await db.getQueryInterface().select(model, table, where);
    return { status: true, message: `${table} Record(s)`, data };
  } catch (error) {
    return {
      status: false,
      message: `Error trying to get record(s): ${error.message}`,
    };
  }
};

export const updateRecords = async ({ table, values, where }) => {
  try {
    await db.getQueryInterface().bulkUpdate(table, values, where);

    return { status: true, message: "Record(s) updated" };
  } catch (error) {
    return {
      status: false,
      message: `Error trying to update records: ${error.message}`,
    };
  }
};

export const deleteRecords = async ({ table, where }) => {
  try {
    await db.getQueryInterface().bulkDelete(table, where);

    return { status: true, message: "Record(s) deleted" };
  } catch (error) {
    return {
      status: false,
      message: `Error trying to delete records: ${error.message}`,
    };
  }
};
