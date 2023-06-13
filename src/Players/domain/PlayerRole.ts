import { StringValueObject } from "../../shared/domain/value-objects/StringValueObject";

export class PlayerRole extends StringValueObject {
	private static readonly VALID_ROLES = ["admin", "user"];

	private constructor(value: string) {
		super(value);
	}

	static create(value: string): PlayerRole {
		if (!PlayerRole.isValidRole(value)) {
			throw new Error("Invalid player role.");
		}

		return new PlayerRole(value);
	}

	private static isValidRole(value: string): boolean {
		return PlayerRole.VALID_ROLES.includes(value.toLowerCase());
	}
}
