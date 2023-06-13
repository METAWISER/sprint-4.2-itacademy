import { Router } from "express";

import { PlayerCreator } from "../../Players/application/PlayerCreator";
import { MongoosePlayerRepository } from "../../Players/infrastructure/persistense/mongoose/MongoosePlayerRepository";
import playerModel from "../../shared/infrastructure/persistence/mongoose/playerModel";
import HttpResponse from "../../shared/infrastructure/response/HttpResponse";
import CreatePlayerController from "../controllers/CreatePlayerController";

const router = Router();
const httpResonse = new HttpResponse();
const mongoosePlayerRepository = new MongoosePlayerRepository(playerModel);
const playerCreator = new PlayerCreator(mongoosePlayerRepository);
const playerController = new CreatePlayerController(playerCreator, httpResonse);

router.post("/", playerController.run);

export default router;
