import type { Request, Response } from "express";

import { db, msgError } from "@app/api/config";

export default ({ params }: Request, res: Response) => {
	const { id } = params;

	let query = "DELETE FROM `notes` n1 WHERE n1.`id` = ?;";
	query += "SELECT * FROM `notes` n2 ORDER BY n2.favorite DESC;";

	db.query(query, [id], (error, result) => {
		if (error) {
			msgError();
			return res.status(400).json({ status: false, ...error });
		}
		res.status(202).json({ status: true, data: result });
	});
};
