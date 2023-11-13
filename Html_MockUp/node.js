var http = require ('http');
const fs = require('fs');
const host = 'localhost';
const port = 8080;

const json = require('./random.json');
console.log(json.date);

http.createServer(function(req,res){
    if(req.method == 'add_user'){
        req.on('data', function(data){

            const json = JSON.parse(stringify(req));

            fs.writeFile('./userlist.json', json, err => {
                if(err){
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
        });
    }
    if(req.method == 'add_comment'){
        const json = JSON.parse(req.url);
    }


}).listen(8080);