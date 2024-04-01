import { Router } from "express";

import DeleteNote from "@app/api/routes/DELETE/delete-note";

const route = Router();

route.delete("/delete-note/:id", DeleteNote);

export default route;
