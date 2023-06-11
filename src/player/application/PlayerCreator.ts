import UuidService from "../../shared/application/UuidService";
import { IPlayerRepository } from "../domain/IPlayerRepository";
import Player from "../domain/Player";
import { PlayerCreatorRequest } from "./PlayerCreatorRequest";

export class PlayerCreator {
	constructor(readonly playerRepository: IPlayerRepository) {}

	async run(data: PlayerCreatorRequest): Promise<void> {
		const player = new Player(UuidService.generateUuid(), data.name, data.password, data.role);
		await this.playerRepository.save(player);
	}
}
