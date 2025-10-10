import winston, { Logger } from "winston";

export const logger : Logger = winston.createLogger({
  level : "debug",
  format : winston.format.json(),
  transports : [
    new winston.transports.Console()
  ]
})