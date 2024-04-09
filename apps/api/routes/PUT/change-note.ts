import type { Request, Response } from "express";

import { db, msgError } from "@app/api/config";

export default ({ body, params }: Request, res: Response) => {
	const { id } = params;
	const { title, content, color, favorite } = body;

	const query = "UPDATE `notes` n1 SET `title` = ?, `content` = ?, `color` = ?, `favorite` = ? WHERE n1.`id` = ?;";

	db.query(query, [title, content, color, favorite, id], error => {
		if (error) {
			msgError();
			return res.status(400).json({ status: false, ...error });
		}
		res.status(202).json({ status: true });
	});
};
