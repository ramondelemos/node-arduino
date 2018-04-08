import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import Arduino from './routes/arduino';

// Criando as configurações para o ExpressJS
class App {

    // Instancia dele
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configuração para o nosso middler
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet());
    }

    //Configuração da nossa API e nossos EndPoint e o famoso Hello 
    private routes(): void {
        this.express.use('/api/v1/arduino', Arduino);
    }

}

export default new App().express;
