const http = require('http');
const port = 3000;
const validator = require('./index');

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!')
};

const server = http.createServer(requestHandler);

const valid = validator.validate({
    aa:{
        value:"aa",
        type:"String"
    }
});
console.log(valid);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});