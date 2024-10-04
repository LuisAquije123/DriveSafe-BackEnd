import {Request, Response} from "express";
import { update, _delete, getAll, getById } from "../services/user.services";

const GetAll = async (req: Request, res: Response) => {
    try {
        const response = await getAll();
        res.send(response);
    } catch(error) {
        res.status(500)
        res.send(error)
    }
}

const GetById = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getById(id);
        if (response == "USER_NOT_FOUND") res.status(404);
        res.send(response);
    } catch(error) {
        res.status(404)
        res.send(error)
    }
}

const Update = async({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response  = await update(body, id);
        res.send(response);
    } catch(error) {
        res.status(500)
        res.send(error)
    }
}

const Delete = async({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await _delete(id);
        res.send(response)
    } catch(error) {
        res.status(500)
        res.send(error)
    }
}

export {Update, Delete, GetAll, GetById};