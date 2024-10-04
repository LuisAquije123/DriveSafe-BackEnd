import { Router } from "express";
import { Delete, GetAll, GetById, Update } from "../controllers/user.controller";
import { checkJwt } from "../middleware/session";
import { logMiddleware } from "../middleware/log";

const UserRouter = Router();

UserRouter.get('/', checkJwt, logMiddleware, GetAll);
UserRouter.get('/:id', checkJwt, logMiddleware, GetById);
UserRouter.put('/:id', checkJwt, logMiddleware, Update);
UserRouter.delete('/:id', checkJwt, logMiddleware, Delete)

export {UserRouter};