import express, { Request, Express } from 'express';
import { Response } from 'express-serve-static-core';
import { AddressInfo } from "net";
import { InsertInto } from './services/DBservice';
import { request } from 'http';

const app = express();

app.set('port', 3000);

app.post('/test', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req)
    InsertInto(req.body.name, req.body.city);
});

const server = app.listen(app.get('port'), function () {
    console.log(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});

