const http = require('http');
const fs = require('fs');
const port = 3000;

// Handles HTTP requests.
const requestHandler = (req, res) => {
    fs.writeFile('hello_world.txt' , 'Hello to this great World', 'utf8',(err) =>{
        if (err) throw (err);
        console.log('Success!')
    });
    res.end(`Handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});