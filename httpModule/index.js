const http=require('http')
const PORT=8000

const server=http.createServer(function(req,res){
     if(req.url==='/')
          {
               req.write("Welcome to Node JS server");
               res.end();
          }
     if(req.url==='/about')
          {
               res.write("Welcome to About Page");
               res.end();
          }
     else if(req.url==='/contact')
          {
               res.write("Welcome to contact us page ");
               res.end();
          }
});

server.listen(PORT,()=>{
     console.log("Server listening on port number "+PORT)
});