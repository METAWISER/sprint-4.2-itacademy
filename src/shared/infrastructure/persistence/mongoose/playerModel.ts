import { Document, Model, model, Schema } from "mongoose";

export interface IPlayerModel extends Document {
	uid: string;
	name: string;
	password: string;
	role: string;
}

const playerSchema: Schema<IPlayerModel> = new Schema<IPlayerModel>({
	uid: { type: String, required: true },
	name: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, required: true },
});

const playerModel: Model<IPlayerModel> = model<IPlayerModel>("Players", playerSchema);

export default playerModel;
