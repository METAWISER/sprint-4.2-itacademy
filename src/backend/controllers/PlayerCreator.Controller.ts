import { Request, Response } from "express";

import { PlayerCreator } from "../../Players/application/PlayerCreator";
import { PlayerCreatorResponse } from "../../Players/application/PlayerCreatorResponse";
import HttpResponse from "../../shared/infrastructure/response/HttpResponse";
import { IController } from "./IController";

class CreatePlayerController implements IController {
	constructor(readonly playerCreator: PlayerCreator, readonly httpResonse: HttpResponse) {}

	run = async (req: Request, res: Response): Promise<void> => {
		const { name, password, role } = req.body;

		const player: PlayerCreatorResponse = { name, password, role };
		try {
			await this.playerCreator.run(player);
		} catch (error) {
			this.httpResonse.BadRequest(res, "Error creating player");
		}
		this.httpResonse.Created(res, "Player created");
	};
}

export default CreatePlayerController;
