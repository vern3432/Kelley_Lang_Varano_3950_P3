var http = require ('http');
const fs = require('fs');
const host = 'localhost';
const port = 8080;
///please review storage.js to see how we will be storing requests that are being made. 
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
    ///look at userlist.json
    if(req.method == 'add_comment'){
        const json = JSON.parse(req.url);
        

    }
    if(req.method == 'view_video_data'){
        var post_id = parseInt(stringify(req));
        var str_postId = JSON.parse(jsonString);
        fs.readFile("./masterlist.json", "utf8", (err, jsonString) => {
            if (err) {
              console.log("File read failed:", err);
              return;
            }
            console.log("File data:", jsonString);
        });
        return jsonString.posts[post_id]
    }
    if(req.method == 'view_comment_data'){
        var post_id = parseInt(stringify(req));
        var str_postId = JSON.parse(jsonString);
        fs.readFile("./masterlist.json", "utf8", (err, jsonString) => {
            if (err) {
              console.log("File read failed:", err);
              return;
            }
            console.log("File data:", jsonString);
        });
        return jsonString.posts[post_id].comments
    }











    //this does not work, just an outline for you to work on. Maybe send an array with search type in location 0 , search value in location 1
       if (req.method == "search") {
        fs.readFile("./masterlist.json", "utf8", (err, jsonString) => {
                  if (err) {
                    console.log("File read failed:", err);
                    return;
                  }
                  console.log("File data:", jsonString);
                });
        //post case and user case 
       
       var forReturn=new Array();
       if(type=="posts"){
       for (let i = 0; i < jsonString.posts; i++) {
            if (jsonString.posts[i].title.includes(req)) {
              forreturn.push(jsonString.posts[i]);
            }
       }
    }else if(type=="users"){
               for (let i = 0; i < jsonString.users; i++) {
                 if (jsonString.users[i].username.includes(req)) {
                   forreturn.push(jsonString.users[i]);
                 }
               }

       }
       return forReturn;
    }
    ///again, non functional, just giving an outline. THis will be for looking as users pages and their 
    if (req.method == "view_userPage") {



           }

    ///should return a boolean or something, we probably should used hashing or something for this lookups lol. 
    if (req.method == "logIn") {
               }
               
        //maybe should be at top given frequency. Will update friends count, if friend is new, add to friend list and set count value to 1. will update in user file. 
        if (req.method == "friendUpdate") {
        }
        //will add subscription to. maybe if already subscribed then unsubscribe. 
        if (req.method == "Subscribe") {
                
        }


}).listen(8080);