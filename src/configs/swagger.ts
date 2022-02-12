import fs from "fs";
import swaggerJsDoc, { Options } from "swagger-jsdoc";
import { displayName, version, description } from "../../package.json";
import { env, port } from "./env";

const swagger: Options = {
  swaggerDefinition: {
    info: {
      version,
      description,
      title: `${displayName} (${env})`,
      contact: { name: "Claret Nnamocha", email: "devclareo@gmail.com" },
      servers: [{ url: `http://localhost:${port}` }],
    },
    basePath: "/api",
  },
  apis: ["./src/*.yml"],
};

const config = swaggerJsDoc(swagger);

export { config };
