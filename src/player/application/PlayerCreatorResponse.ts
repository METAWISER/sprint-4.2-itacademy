import { Roles } from "../domain/Player";

export interface PlayerCreatorResponse {
	name: string;
	password: string;
	role: Roles;
}
