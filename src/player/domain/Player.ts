enum Roles {
	ADMIN_ROLL = "ADMIN_ROLL",
	USER_ROLL = "USER_ROLL",
}

export default class Player {
	constructor(
		public readonly uuid: string,
		public name: string,
		public password: string,
		public role: Roles
	) {}
}
