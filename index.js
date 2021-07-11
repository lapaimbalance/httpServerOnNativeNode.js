const http = require('http')
const path = require('path')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res)=>{
    if (req.method === "GET"){
        res.writeHead('200',{
            "Content-type": "text/html, charset = utf-8"
        })
    }
    if (req.url === "/"){
        fs.readFile(path.join(__dirname, 'index.html'),'utf-8',
        (err,content) => {
            if (err){
                throw err
            }
            res.end(content)
        })
    }
    if (req.url === '/about'){
        fs.readFile(path.join(__dirname, 'about.html'), 'utf-8',
        (err,content) => {
            if(err) {
                throw err}
                res.end(content)
        })
    }
})

server.listen(port, ()=>{
    console.log(`Server is started on ${port}`)
})



