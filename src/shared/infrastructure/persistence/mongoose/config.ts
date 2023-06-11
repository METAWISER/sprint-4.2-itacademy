/* eslint-disable no-console */
import mongoose from "mongoose";

const mongoConnect = async (): Promise<void> => {
	const db = await mongoose.connect(process.env.MONGODB_URI!);
	console.log("✅ Database is connected to:", db.connection.name);
};

export default mongoConnect;
