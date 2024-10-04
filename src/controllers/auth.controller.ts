import {Request, Response} from "express";
import { login, register } from "../services/auth.services";

const Register = async({body}: Request, res: Response) => {
    const response = await register(body);
    res.send(response);
}

const Login = async ({body}: Request, res: Response) => {
    const response = await login(body);
    res.send(response)
}

export {Register, Login};