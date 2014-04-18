/**
 * Created by Me on 17/04/14.
 */
var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
proxy = httpProxy.createProxy();


proxy.on('proxyRes', function (res) {
    console.log('RAW Response from the target', JSON.stringify(res.headers, true, 2));
});

proxy.on('error', function(err){
    console.log(err);
})

console.log(process.env.PORT || 3000);
//
// Create your target server
//
http.createServer(function (req, res) {
    console.log(req.url);
    /*res.write('hello world');
    res.end();*/
   proxy.web(req, res, {
        target: req.url
    });
}).listen(process.env.PORT || 3000);