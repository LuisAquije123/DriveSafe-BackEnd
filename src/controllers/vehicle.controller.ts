import { Request, Response } from "express";
import {getAll, getById, getByOwnerId, _delete, create} from "../services/vehicle.services"

const GetAll = async(req: Request, res: Response) => {
    try {
        const response = await getAll();
        res.send(response);
    } catch(error) {
        res.status(500)
        res.send(error)
    }
}

const GetById = async({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getById(id);
        if (response == "VEHICLE_NOT_FOUND") res.status(404);
        res.send(response);
    } catch(error) {
        res.status(500)
        res.send(error)
    }
}

const GetByOwnerId = async({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getByOwnerId(id);
        res.send(response);
    } catch(error) {
        res.status(500);
        res.send(error)
    }
}

const PostVehicle = async({body}: Request, res: Response) => {
    try {
        const response = await create(body);
        res.send(response);
    } catch(error) {
        res.status(500);
        res.send(error)
    }
}

const Delete = async({params}: Request, res: Response) => {
    try {
        const {id} = params
        const response = await _delete(id);
        if (response == "VEHICLE_NOT_FOUND") res.status(404);
        res.send(response);
    } catch(error) {
        res.status(500);
        res.send(error)
    }
}

export {GetAll, GetById, GetByOwnerId, PostVehicle, Delete};