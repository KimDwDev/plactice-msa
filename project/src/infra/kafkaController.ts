import "dotenv/config";
import { logger } from "../config/config.logger.js";
import { Kafka, type Admin } from "kafkajs";
import type { Request, Response } from "express";

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

  public async createTopic(req : Request , res : Response) : Promise<void> {
    try {

      const admin : Admin = this.kafka.admin(); 
      await admin.connect();
      await admin.createTopics({
        topics : [{
          topic: req.body.topicName?.toString(),
          numPartitions: parseInt(req.body.noOfPartition),
          replicationFactor : 1
        }]
      });
      await admin.disconnect();
      res.send({
        status : 200,
        message : "ok"
      });
    } catch (err) {
      logger.log("error", err);
      res.status(500).send({
        message : "InterServer Error"
      });
    }
  }

}