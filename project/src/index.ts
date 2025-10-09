import "dotenv/config";
import express, { type Express } from "express";
import { logger } from "./config/config.logger.js";

const app : Express = express();


const port : string = process.env.NODE_APP_PORT || "8080";
app.listen(port, () : void => {
  logger.log("debug", "서버가 실행중입니다.");
});