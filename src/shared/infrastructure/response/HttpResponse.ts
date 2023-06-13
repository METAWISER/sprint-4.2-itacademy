import { Response } from "express";

import { HttpStatus } from "../../domain/HttpStatus";

class HttpResponse {
	Ok(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.OK).json({
			status: HttpStatus.OK,
			msg: "Success",
			data,
		});
	}

	Created(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.CREATED).json({
			status: HttpStatus.CREATED,
			msg: "Created",
			data,
		});
	}

	BadRequest(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.BAD_REQUEST).json({
			status: HttpStatus.BAD_REQUEST,
			msg: "Bad Request",
			data,
		});
	}

	Unauthorized(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.UNAUTHORIZED).json({
			status: HttpStatus.UNAUTHORIZED,
			msg: "Unauthorized",
			data,
		});
	}

	Forbidden(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.FORBIDDEN).json({
			status: HttpStatus.FORBIDDEN,
			msg: "Forbidden",
			data,
		});
	}

	NotFound(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.NOT_FOUND).json({
			status: HttpStatus.NOT_FOUND,
			msg: "Not Found",
			data,
		});
	}

	UnprocessableEntity(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
			status: HttpStatus.UNPROCESSABLE_ENTITY,
			msg: "Unprocessable Entity",
			data,
		});
	}

	InternalServerError(res: Response, data?: unknown): Response {
		return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
			status: HttpStatus.INTERNAL_SERVER_ERROR,
			msg: "Internal Server Error",
			data,
		});
	}
}

export default HttpResponse;
