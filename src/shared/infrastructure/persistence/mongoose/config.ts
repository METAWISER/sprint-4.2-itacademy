import { connect } from "mongoose";

export default class mongooseConnect {
	public async connect(): Promise<void> {
		await connect("mongodb://127.0.0.1:27017/test");
	}
}
