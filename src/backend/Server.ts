/* eslint-disable no-console */
import cors from "cors";
import express, { Application } from "express";
import http from "http";
import morgan from "morgan";

//Database connection
import mongoConnect from "../shared/infrastructure/persistence/mongoose/config";
import playersRoutes from "./routes/players.routes";

class Server {
	private readonly express: Application;
	private httpServer?: http.Server;
	private readonly apiPaths = {
		players: "/api/players",
	};

	constructor(private readonly port: string) {
		this.express = express();
		//Database connection
		this.dbConnect();
		//Middlewares
		this.middlewares();
		//Routes
		this.routes();
	}

	public middlewares(): void {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
		this.express.use(morgan("dev"));
		this.express.use(cors());
	}

	public routes(): void {
		this.express.use(this.apiPaths.players, playersRoutes);
	}

	public async dbConnect(): Promise<void> {
		await mongoConnect();
	}

	public async start(): Promise<void> {
		await new Promise<void>((resolve) => {
			this.httpServer = this.express.listen(this.port, () => {
				console.log(
					`✅ Backend App is running at http://localhost:${this.port} in ${this.express.get(
						"env"
					)} mode`
				);
				console.log("✋ Press CTRL-C to stop\n");

				resolve();
			});
		});
	}

	public getHTTPServer(): Server["httpServer"] | undefined {
		return this.httpServer;
	}

	async close(): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (this.httpServer) {
				this.httpServer.close((err) => {
					if (err) {
						reject(err);
					}
					resolve();
				});
			}
		});
	}
}

export default Server;
