const http = require("http");

const port = 8081;

http
.createServer((req, res)=>{
    res.writeHead(200, {"Context-Type": "text/html"})
    res.write("<h1>hello this is my first server over here - rohan kinnal 123 </h1>")
    res.end();
})

.listen(port, ()=>{
    console.log(`NodeJs Server is Up and running on port ${port}`)
})


// http status code

// http://localhost:8081/