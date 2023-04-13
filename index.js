const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
   if(req.url === '/'){
      fs.readFile(
         path.join(__dirname, 'public', 'index.html'),
         (err,content) => {
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
         }
      );
   }
});
server.listen(3000);