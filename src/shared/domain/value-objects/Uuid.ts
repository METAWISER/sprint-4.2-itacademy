import { v4 as uuid } from "uuid";

export default class Uuid {
	readonly value: string;
	constructor(value?: string) {
		value ? (this.value = value) : (this.value = uuid());
	}

	toString(): string {
		return this.value;
	}
}
