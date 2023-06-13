import { Request, Response, Router } from "express";
import { body, checkExact } from "express-validator";

import { PlayerCreator } from "../../../Players/application/PlayerCreator";
import { MongoosePlayerRepository } from "../../../Players/infrastructure/persistense/mongoose/MongoosePlayerRepository";
import playerModel from "../../../shared/infrastructure/persistence/mongoose/playerModel";
import HttpResponse from "../../../shared/infrastructure/response/HttpResponse";
import PlayerCreatorController from "../../controllers/PlayerCreator.Controller";
import { validateReqSchema } from "../index";

export const register = (router: Router): void => {
	const reqSchema = [body("name").exists().isString()];

	const mongoosePlayerRepository = new MongoosePlayerRepository(playerModel);
	const playerCreator = new PlayerCreator(mongoosePlayerRepository);
	const httpResponse = new HttpResponse();
	const playersCtrl = new PlayerCreatorController(playerCreator, httpResponse);
	router.post(
		"/players",
		checkExact(reqSchema),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		validateReqSchema,
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		async (req: Request, res: Response) => await playersCtrl.run(req, res)
	);
};
