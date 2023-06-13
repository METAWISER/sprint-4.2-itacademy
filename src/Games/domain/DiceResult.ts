import { NumberValueObject } from "../../shared/domain/value-objects/NumberValueObject";

export class DiceResult extends NumberValueObject {
	constructor(...value: number[]) {
		super(value.reduce((acc, value) => acc + value, 0));
	}

	protected toString(): string {
		return this.value.toString();
	}
}
