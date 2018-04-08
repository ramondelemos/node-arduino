import { Router, Request, Response, NextFunction } from 'express';

class Arduino {
    
    router: Router
    
    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', this.get);
    }
    
    public get(req: Request, res: Response, next: NextFunction) {
        res.send("Hello World!");
    }

}

export default new Arduino().router;