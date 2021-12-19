import swaggerJsDoc, { Options } from "swagger-jsdoc";
import { port } from "./env";

const swagger: Options = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      description:
        "Database Explorer backend documention. Built with ❤️ by @claretnnamocha",
      title: "Database Explorer API",
      contact: { name: "Claret Nnamocha", email: "devclareo@gmail.com" },
      servers: [{ url: `http://localhost:${port}` }],
    },
    basePath: "/api",
  },
  apis: ["./src/docs.yml"],
};

const config = swaggerJsDoc(swagger);

export { config };
