import { BooleanValueObject } from "../shared/domain/value-objects/BooleanValueObject";

export class GameResult extends BooleanValueObject {
	protected toString(): string {
		return this.value ? "Winner" : "You lost";
	}
}
