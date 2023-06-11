import { v4 as uuidv4 } from "uuid";

export default class UuidService {
	static generateUuid(): string {
		return uuidv4();
	}
}
