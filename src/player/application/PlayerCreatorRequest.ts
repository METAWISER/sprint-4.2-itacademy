import { Roles } from "../domain/Player";

export interface PlayerCreatorRequest {
	name: string;
	password: string;
	role: Roles;
}
