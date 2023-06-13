import { StringValueObject } from "../../shared/domain/value-objects/StringValueObject";

export class PlayerName extends StringValueObject {
	constructor(value: string) {
		let defaultValue = value;
		if (value.length === 0) {
			defaultValue = `Anonymous-${Math.floor(Math.random() * 5000)}`.toString();
		}
		super(defaultValue);
	}
}
