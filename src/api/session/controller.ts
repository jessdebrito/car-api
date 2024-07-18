import { Request, Response } from "express";
import { SessionService } from "./service";

export class SessionController {
    private sessionService = new SessionService()

    public login = async (req: Request, res: Response) => {
        const token = await this.sessionService.login(req.body);
        return res.json (token);
    };
}