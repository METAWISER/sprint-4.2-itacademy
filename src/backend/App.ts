import dotenv from "dotenv";

import Server from "./Server";

dotenv.config();

class App {
	private server?: Server;
	private readonly port = process.env.PORT ?? "3000";

	public async start(): Promise<void> {
		this.server = new Server(this.port);
		await this.server.start();
	}

	public getHttpServer(): Server["httpServer"] | undefined {
		return this.server?.getHTTPServer();
	}
}

const app = new App();
app.start();
