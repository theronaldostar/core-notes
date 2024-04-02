import type { Request, Response } from "express";

import { db, msgError } from "@app/api/config";

export default (req: Request, res: Response) => {
	const query = "SELECT * FROM `notes` n1 ORDER BY n1.favorite DESC;";

	db.query(query, null, (error, result) => {
		if (error) {
			msgError();
			return res.status(400).json({ status: false, ...error });
		}
		res.status(200).json({ status: true, data: result });
	});
};
