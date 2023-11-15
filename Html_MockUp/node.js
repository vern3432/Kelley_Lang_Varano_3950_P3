var http = require ('http');
const fs = require('fs');
const host = 'localhost';
const port = 8080;
///please review storage.js to see how we will be storing requests that are being made. 
const master = require('./masterlist.json');
const userlist = require('./userlist.json')

http.createServer(function(req,res){

    if(req.method == 'add_post'){

      var post = req.body;

      fs.writeFile('./userlist.json', post, err => {
        if(err){
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })

    fs.writeFile('./masterlist.json', post, err => {
      if(err){
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })

    }


    ///Needs to use the current user
    if(req.method == 'get_subs'){

      fs.readFile("./userlist.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
        }
        console.log("File data:", jsonString);
      });

      const json = JSON.parse(jsonString);

      if(json.users[0].subscrriptions.length < 3){
        const array = [];
      for(let i = 0; i < 3; i++){
        array[i] = json.users[0].subscrriptions[i];
      }
      res.send(array);
      }
      else{
        const array = [];
      for(let i = 0; i < 3; i++){
        array[i] = json.users[0].subscrriptions[i];
      }
      var jsonString = "";
      for(let x = 0; x < json.users.subscrriptions.length; i++){
        jsonString = jsonString + array[i];
      }

      res.send(jsonString);

    }

      res.send(null);

    }
    ///Needs to use the current user
    if(req.method == 'get_friends'){

      fs.readFile("./userlist.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
        }
        console.log("File data:", jsonString);
      });

      const json = JSON.parse(jsonString);

      if(json.users[0].friends.length < 3){
        const array = [];
      for(let i = 0; i < json.users[0].friends.length; i++){
        array[i] = json.users[0].friends[i];
      }
      var jsonString = "";
      for(let x = 0; x < json.users.friends.length; i++){
        jsonString = jsonString + array[i];
      }
      res.send(jsonString);

      }
      else{

        const array = [];
      for(let i = 0; i < 3; i++){
        array[i] = json.users[0].friends[i];
      }
      res.send(array);

      }

      res.send(null);
    }

    ///Doesn't quite add it properly, I'll fix in the morning.
    if(req.method == 'add_user'){

        req.on('data', function(data){

            const json = JSON.parse(req.body);

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
        
      fs.readFile("./masterlist.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
        }
        console.log("File data:", jsonString);
      });
      const json = JSON.parse(jsonString);
      //need to change this so it takes the actual current user
      var length = json.users[1].comments.length;
      json.users[1].comments[length+1] = req.body;

    }
    
    if(req.method == 'view_video_data'){
        var post_id = parseInt(stringify(req));
        var str_postId = JSON.parse(jsonString);
        fs.readFile("./masterlist.json", "utf8", (err, jsonString) => {
            if (err) {
              console.log("File read failed:", err);
            }
            console.log("File data:", jsonString);
        });
        const json = JSON.parse(jsonString);
        res.send(posts[post_id]);

    }
    if(req.method == 'view_comment_data'){
        var post_id = parseInt(stringify(req));
        var str_postId = JSON.parse(jsonString);
        fs.readFile("./masterlist.json", "utf8", (err, jsonString) => {
            if (err) {
              console.log("File read failed:", err);
            }
            console.log("File data:", jsonString);
        });
        const json = JSON.parse(jsonString);

        res.send(json.posts[post_id].comments)
        }

    //this does not work, just an outline for you to work on. Maybe send an array with search type in location 0 , search value in location 1
       if (req.method == "search") {
        fs.readFile("./masterlist.json", "utf8", (err, jsonString) => {
                  if (err) {
                    console.log("File read failed:", err);
                  }
                  console.log("File data:", jsonString);
                });
        //post case and user case 
        const json = JSON.parse(jsonString);
       
       var forReturn=new Array();
       if(type=="posts"){
       for (let i = 0; i < json.posts; i++) {
            if (json.posts[i].title.includes(req)) {
              forreturn.push(json.posts[i]);
            }
       }
    }else if(type=="users"){
               for (let i = 0; i < json.users; i++) {
                 if (json.users[i].username.includes(req)) {
                   forreturn.push(json.users[i]);
                 }
               }

       }
       res.send(forreturn);
    }
    ///again, non functional, just giving an outline. THis will be for looking as users pages and their 
    if (req.method == "view_userPage") {



           }

    ///should return a boolean or something, we probably should used hashing or something for this lookups lol. 
    if (req.method == "logIn") {
      fs.readFile("./user.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", jsonString);
            });
    
            const json = JSON.parse(jsonString);
            for(let i = 0; i < json.users.length; i++){
              if(req.user = json.users[i].username){
                if(req.pass = json.users[i].password){
                  res.send("true");
                }
              }
            }
            res.send("false");

        }
               
        //maybe should be at top given frequency. Will update friends count, if friend is new, add to friend list and set count value to 1. will update in user file. 
        if (req.method == "friendUpdate") {
          ///will take an array of both current user, and userID which will be updated in the freinds array should be pretyt simple 

        }
        //will add subscription to. maybe if already subscribed then unsubscribe. 
        if (req.method == "subscribe") {
            var sub = req.subsctiption;
            fs.readFile("./userlist.json", "utf8", (err, jsonString) => {
              if (err) {
                console.log("File read failed:", err);
                return;
              }
              console.log("File data:", jsonString);
            });
            const json = JSON.parse(jsonString);
            i = json.users[1].subscrriptions.length;
            x = 0;
            while(x < i){
              i = i + 1;
            }
            json.users[1].subscrriptions[i] = sub;


        }

        if(req.method == "view comments"){

          const array = [];

          fs.readFile("./userlist.json", "utf8", (err, jsonString) => {
            if (err) {
              console.log("File read failed:", err);
              return;
            }
          });

          const json = JSON.parse(jsonString);

          for(let i = 0; i > json.user[0].posts.length; i++){

            array[i] = json.user[req.user].posts[req.postId].comments[i];

          }
          
          res.send(array);

        }


}).listen(8080);