import { Model } from "mongoose";

import { IPlayerModel } from "../../../../shared/infrastructure/persistence/mongoose/playerModel";
import { IPlayerRepository } from "../../../domain/IPlayerRepository";
import Player from "../../../domain/Player";

export class MongoosePlayerRepository implements IPlayerRepository {
	constructor(readonly ClientModel: Model<IPlayerModel>) {}
	async create(player: Player): Promise<void> {
		const playerToSave = new this.ClientModel(player);
		await playerToSave.save();
	}
}
