const http = require('http');

const Koa_Logger = require("koa-logger");
const Koa = require('koa');
const Moment = require("moment");
const cors = require('koa2-cors');
const koa_json=require('koa-json');
const koa_body=require('koa-body');
const convert = require('koa-convert');

const app = new Koa();
const logger = Koa_Logger((str) => {
    console.log(Moment().format('YYYY-MM-DD HH:mm:ss') + str);
});

const routes_Index = require('./router');

app.use(logger);
app.use(convert(koa_body({
    'formLimit':'100mb',
    'jsonLimit':'100mb',
    'textLimit':'100mb',
})));
app.use(cors());


app.use(routes_Index.routes(), routes_Index.allowedMethods());
app.use(koa_json());

http.createServer(app.callback()).listen(3000);

