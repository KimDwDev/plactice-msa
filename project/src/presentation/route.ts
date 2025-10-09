import { Router } from "express";
import { KafkaController } from "../infra/kafkaController.js";

export const router : Router = Router();
const controller = new KafkaController();

router.post("/kafka/topics", async (req, res) => {
  await controller.createTopic(req, res);
});