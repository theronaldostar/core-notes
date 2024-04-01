import type { Request, Response } from "express";

import { db, msgError } from "@app/api/config";

export default ({ body }: Request, res: Response) => {
	const { title, content, color, favorite } = body;

	const query = "INSERT INTO `notes` (`id`, `title`, `content`, `color`, `favorite`) VALUES (NULL, ?, ?, ?, ?);";

	db.query(query, [title, content, color, favorite], error => {
		if (error) {
			msgError();
			return res.status(400).json({ status: false, ...error });
		}
		res.status(202).json({ status: true, data: body });
	});
};
