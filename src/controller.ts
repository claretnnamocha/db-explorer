import { Response } from "express";
import { response } from "./helpers";
import * as service from "./service";
import { CustomRequest } from "./types/controllers";

export const getDatabaseName = async (req: CustomRequest, res: Response) => {
  const data = await service.getDatabaseName();
  return response(res, data);
};

export const listTables = async (req: CustomRequest, res: Response) => {
  const data = await service.listTables();
  return response(res, data);
};

export const listTableColumns = async (req: CustomRequest, res: Response) => {
  const data = await service.listTableColumns(req.form);
  return response(res, data);
};

export const createRecords = async (req: CustomRequest, res: Response) => {
  const data = await service.createRecords(req.form);
  return response(res, data);
};

export const readRecords = async (req: CustomRequest, res: Response) => {
  const data = await service.readRecords(req.form);
  return response(res, data);
};

export const updateRecords = async (req: CustomRequest, res: Response) => {
  const data = await service.updateRecords(req.form);
  return response(res, data);
};

export const deleteRecords = async (req: CustomRequest, res: Response) => {
  const data = await service.deleteRecords(req.form);
  return response(res, data);
};
