import type { Request, Response } from "express";

import { db } from "@app/api/config";

const Notes = (req: Request, res: Response) => {
	const select = "SELECT * FROM `notes`;";

	db.query(select, [], (error, result) => {
		if (error) {
			console.error("[server]: An error occurred during the connection to the database..");
			return res.status(400).json({ status: false, ...error });
		}
		res.status(202).json({ status: true, data: result });
	});
};

export default Notes;
