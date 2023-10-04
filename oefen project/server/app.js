"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const debug = require("debug");
const app = express();
app.set('port', 3000);
const server = app.listen(app.get('port'), function () {
    debug(`Express server listening on port ${server.address().port}`);
});
//# sourceMappingURL=app.js.map