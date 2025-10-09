import "dotenv/config";
import { logger } from "../config/config.logger.js";
import { Kafka } from "kafkajs";

export class KafkaController {

  private readonly kafka : Kafka;

  constructor() {
    const clientId : string | undefined = process.env.NODE_APP_CLIENT_ID;
    const brokers : Array<string> = [ process.env.NODE_APP_BROKER_1 || "" ];

    if ( !clientId ) throw new Error("clientId가 존재하지 않습니다.");
  
    this.kafka = new Kafka({
      clientId,
      brokers
    });

  };


}