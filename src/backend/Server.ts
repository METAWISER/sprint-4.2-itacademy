/* eslint-disable no-console */
import cors from "cors";
import express, { Application, Request, Response, Router } from "express";
import http from "http";
import morgan from "morgan";

//Database connection
import mongoConnect from "../shared/infrastructure/persistence/mongoose/config";
import HttpResponse from "../shared/infrastructure/response/HttpResponse";
import { registerRoutes } from "./routes";

class Server {
	private readonly express: Application;
	private httpServer?: http.Server;

	constructor(private readonly port: string) {
		this.express = express();
		//Database connection
		this.dbConnect();
		//Middlewares
		this.middlewares();
		//Routes
		const router = Router();
		this.express.use(router);
		registerRoutes(router);
		router.use((err: Error, req: Request, res: Response, _next: () => void) => {
			// eslint-disable-next-line no-console
			console.log(err);
			new HttpResponse().InternalServerError(res, "Contact admin");
		});
		this.express.use((err: Error, req: Request, res: Response, _next: () => void) => {
			// eslint-disable-next-line no-console
			console.log(err);
			new HttpResponse().InternalServerError(res, "Server error");
		});
	}

	public middlewares(): void {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
		this.express.use(morgan("dev"));
		this.express.use(cors());
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
