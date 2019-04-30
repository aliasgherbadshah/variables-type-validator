const http = require('http');
const port = 3000;
const validator = require('./index');

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server!')
};

const server = http.createServer(requestHandler);

validator.createScheam("my_scheam",{
    sample_text:{
        type:"String",
        required:true,
        default:'sample',
        length:{
            gte:3,
            lte:10
        }
    }
},{any:false});

const validate = validator.validateByScheam("my_scheam",{sample_text: "temp"});
console.log(validate);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});