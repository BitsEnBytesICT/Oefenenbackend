import * as express from 'express';
import { AddressInfo } from "net";
import { GetAll } from './services/DBservice';

const app = express();

app.set('port', 3000);

const server = app.listen(app.get('port'), function () {
    console.log(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});

GetAll();