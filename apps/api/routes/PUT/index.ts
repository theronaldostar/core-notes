import { Router } from "express";

import ChangeNote from "@app/api/routes/PUT/change-note";

const route = Router();

route.put("/change-note/:id", ChangeNote);

export default route;
