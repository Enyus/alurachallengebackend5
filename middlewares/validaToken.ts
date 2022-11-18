import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

function validaToken (req: Request, res: Response, next:NextFunction) {
    const token = req.headers.authorization;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    // console.log(token);

    if (token == undefined) {
        res.status(401).send("Você deve se logar para conseguir um token de acesso.")
    }

    try {
        const payload = jwt.verify(token as string, PRIVATE_KEY as string);
        // console.log(payload)

        return next();

    } catch (error) {
        console.log(error);
        res.status(401).send("Você deve se logar para conseguir um token de acesso.")
    }
}

export default validaToken;