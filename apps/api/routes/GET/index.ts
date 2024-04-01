import { Router } from "express";

import Notes from "@app/api/routes/GET/notes";

const route = Router();

route.get("/notes", Notes);

export default route;
