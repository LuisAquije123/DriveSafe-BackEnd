import { Request, NextFunction, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/request-ext.interface";
import { User } from "../interfaces/user.interface";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization;
        const jwt = jwtByUser?.split(' ').pop();
        const User = verifyToken(`${jwt}`) as User;
        if (!User) {
            res.status(401);
            res.send("JWT_INVALID")
        } else if (User.Type !== 'admin' && User.Type !== 'tenant' && User.Type !== 'owner') {
            res.status(401);
            res.send('UNAUTHORIZED')
        } else {
            req.user = User;
            next();
        }
    } catch(e) {
        res.status(400);
        res.send('SOMETHING_WENT_WRONG');
    }
}

const checkJwtAdmin = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || ' '
        const jwt = jwtByUser.split(' ').pop();
        const User = verifyToken(`${jwt}`) as User
        if (!User) {
            res.status(401);
            res.send("JWT_INVALID")
        } else if (User.Type !== 'admin') {
            res.status(401);
            res.send("UNAUTHORIZED")
        }
        else {
            req.user = User;
            next();
        }
    } catch (e) {
        res.status(400)
        res.send('SOMETHING_WENT_WRONG')
    }
}

export {checkJwt, checkJwtAdmin}