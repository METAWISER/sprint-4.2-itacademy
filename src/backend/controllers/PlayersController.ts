import { Request, Response } from "express";

class PlayersController {
	getPlayers = (req: Request, res: Response): void => {
		res.json({
			msg: "getPlayers",
		});
	};

	getPlayer = (req: Request, res: Response): void => {
		const { id } = req.params;

		res.json({
			msg: "getPlayer",
			id,
		});
	};

	createPlayer = (req: Request, res: Response): void => {
		const { body } = req;

		res.json({
			msg: "createPlayer",
			body,
		});
	};

	updatePlayer = (req: Request, res: Response): void => {
		const { id } = req.params;
		const { body } = req;

		res.json({
			msg: "updatePlayer",
			id,
			body,
		});
	};
}

export default PlayersController;
