import { Response } from "express";

enum HttpStatus {
	OK = 200,
	CREATED = 201,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNAL_SERVER_ERROR = 500,
}

class HttpResponse {
	Ok(res: Response, data: unknown): Response {
		return res.status(HttpStatus.OK).json({
			status: HttpStatus.OK,
			msg: "Success",
			data,
		});
	}

	Created(res: Response, data: unknown): Response {
		return res.status(HttpStatus.CREATED).json({
			status: HttpStatus.CREATED,
			msg: "Created",
			data,
		});
	}

	BadRequest(res: Response, data: unknown): Response {
		return res.status(HttpStatus.BAD_REQUEST).json({
			status: HttpStatus.BAD_REQUEST,
			msg: "Bad Request",
			data,
		});
	}

	Unauthorized(res: Response, data: unknown): Response {
		return res.status(HttpStatus.UNAUTHORIZED).json({
			status: HttpStatus.UNAUTHORIZED,
			msg: "Unauthorized",
			data,
		});
	}

	Forbidden(res: Response, data: unknown): Response {
		return res.status(HttpStatus.FORBIDDEN).json({
			status: HttpStatus.FORBIDDEN,
			msg: "Forbidden",
			data,
		});
	}

	NotFound(res: Response, data: unknown): Response {
		return res.status(HttpStatus.NOT_FOUND).json({
			status: HttpStatus.NOT_FOUND,
			msg: "Not Found",
			data,
		});
	}

	InternalServerError(res: Response, data: unknown): Response {
		return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
			status: HttpStatus.INTERNAL_SERVER_ERROR,
			msg: "Internal Server Error",
			data,
		});
	}
}

export default HttpResponse;
