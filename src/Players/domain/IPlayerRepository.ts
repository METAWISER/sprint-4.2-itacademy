import Player from "./Player";

export interface IPlayerRepository {
	create(player: Player): Promise<void>;
}
