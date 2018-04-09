import { Router, Request, Response, NextFunction } from 'express';
import * as five from "johnny-five";

class Arduino {

    public router: Router;
    public board: five.Board;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.board = new five.Board({ port: "/dev/ttyUSB0" });
        this.router.get('/', this.get);
    }

    public get(req: Request, res: Response, next: NextFunction) {        

            let turn = req.query.turn;
            
            let led: five.Led;
            led = new five.Led(13);

            if (turn == "on") {
                led.on();
            } else {
                led.off();
            }
    
            res.send({ result: turn });

    }

}

export default new Arduino().router;