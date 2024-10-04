import { Router } from "express";
import {GetAll, GetById, GetByOwnerId, PostVehicle, Delete} from "../controllers/vehicle.controller";
import { checkJwt } from "../middleware/session";
import { logMiddleware } from "../middleware/log";

const VehicleRouter = Router();

VehicleRouter.get('/', checkJwt, logMiddleware, GetAll);
VehicleRouter.get('/:id', checkJwt, logMiddleware, GetById);
VehicleRouter.get('/ownerId/:id', checkJwt, logMiddleware, GetByOwnerId);
VehicleRouter.post('/', checkJwt, logMiddleware, PostVehicle);
VehicleRouter.delete('/:id', checkJwt, logMiddleware, Delete);

export {VehicleRouter};