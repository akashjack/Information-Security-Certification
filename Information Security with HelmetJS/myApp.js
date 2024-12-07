/* Author : Akash S  */ 

const express = require('express');
const app = express();

/* MIDDLEWARES */
/*
Hide Potentially Dangerous Information Using helmet.hidePoweredBy()
Mitigate the Risk of Clickjacking with helmet.frameguard()
Mitigate the Risk of Cross Site Scripting (XSS) Attacks with helmet.xssFilter()
Avoid Inferring the Response MIME Type with helmet.noSniff()
Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
Disable DNS Prefetching with helmet.dnsPrefetchControl()
Disable Client-Side Caching with helmet.noCache()
Set a Content Security Policy with helmet.contentSecurityPolicy()

*/
const helmet= require('helmet');

ninetyDaysInSeconds = 90*24*60*60;
timeInSeconds = ninetyDaysInSeconds;

app.use(helmet({
  frameguard : {
    action: 'deny'
  },
  contentSecurityPolicy : ({ directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "trusted-cdn.com"] }}
  ),
  hsts : ({
    maxAge: timeInSeconds,
    force: true
  }),
  dnsPrefetchControl : false,
  noCache : false,
  ieNoOpen: true,
  noSniff : false,
  xssFilter : false,
  hidePoweredBy : false
}));





// //START_ASYNC
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});

let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
// //END_SYNC









module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
