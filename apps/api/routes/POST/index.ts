import { Router } from "express";

import CreateNote from "@app/api/routes/POST/create-note";

const route = Router();

route.post("/create-note", CreateNote);

export default route;
