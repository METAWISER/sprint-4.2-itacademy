import { Game } from "../../Games/Game";
import { PlayerId } from "./PlayerId";
import { PlayerName } from "./PlayerName";
import { PlayerPassword } from "./PlayerPassword";
import { PlayerPrimitives } from "./PlayerPrimitives";
import { PlayerRole } from "./PlayerRole";

export default class Player {
	constructor(
		public readonly uid: PlayerId,
		public readonly name: PlayerName,
		public readonly password: PlayerPassword,
		public readonly role: PlayerRole,
		public readonly games?: Game[]
	) {
		games ? games : [];
	}

	static fromPrimitives(plainData: {
		uid: string;
		name: string;
		password: string;
		role: string;
	}): Player {
		const role = PlayerRole.create(plainData.role as keyof typeof PlayerRole);

		return new Player(
			new PlayerId(plainData.uid),
			new PlayerName(plainData.name),
			new PlayerPassword(plainData.password),
			role
		);
	}

	toPrimitives(): PlayerPrimitives {
		return {
			id: this.uid.value,
			name: this.name.value,
			password: this.password.value,
			role: this.role.value,
		};
	}
}
