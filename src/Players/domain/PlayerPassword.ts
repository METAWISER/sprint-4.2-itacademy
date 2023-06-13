import { StringValueObject } from "../../shared/domain/value-objects/StringValueObject";

export class PlayerPassword extends StringValueObject {
	constructor(value: string) {
		if (!PlayerPassword.isStrong(value)) {
			throw new Error("Player password is not strong enough.");
		}
		super(value);
	}

	private static isStrong(value: string): boolean {
		const minLength = 8;
		const hasUppercase = /[A-Z]/.test(value);
		const hasLowercase = /[a-z]/.test(value);
		const hasDigit = /\d/.test(value);
		const hasSpecialChar = /[!@#$%^&*]/.test(value);

		return value.length >= minLength && hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
	}
}
