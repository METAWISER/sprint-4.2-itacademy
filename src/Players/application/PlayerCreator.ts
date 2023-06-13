import Player from "../domain/Player";
import { PlayerId } from "../domain/PlayerId";
import { PlayerName } from "../domain/PlayerName";
import { PlayerPassword } from "../domain/PlayerPassword";
import { PlayerRole } from "../domain/PlayerRole";
import { MongoosePlayerRepository } from "../infrastructure/persistense/mongoose/MongoosePlayerRepository";
import { PlayerCreatorRequest } from "./PlayerCreatorRequest";

export class PlayerCreator {
	constructor(readonly playerRepository: MongoosePlayerRepository) {}

	async run(data: PlayerCreatorRequest): Promise<void> {
		const player = new Player(
			new PlayerId(),
			new PlayerName(data.name),
			new PlayerPassword(data.password),
			PlayerRole.create(data.role)
		);
		await this.playerRepository.create(player);
	}
}
