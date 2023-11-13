
// Check browser support
///three major storages. 
// 1. curent user:logged in user
// 2. post request: current post being requested. may need user and post id so it an be properly referenced. 
// 3. user request: current user being requsted for user page look could be used for profile page as well, just set to current user before load. 

// Call this functions before page that requires them is loaded. 



function storage(type,input){

    if(type=="current_user"){
        localStorage.setItem("current_user", input);
    
      }
      if(type=="current_user"){
        localStorage.setItem("user_request", input);
    
      }
      if(localStorage.getItem("post_request")==null){
        localStorage.setItem("post_request", input);
    
      }
      console.log( localStorage.getItem("current_user"))

}

  if(localStorage.getItem("current_user")==null){
    localStorage.setItem("current_user", "0001");

  }
  if(localStorage.getItem("user_request")==null){
    localStorage.setItem("user_request", "0001");

  }
  if(localStorage.getItem("post_request")==null){
    localStorage.setItem("post_request", "0001");

  }







































  
  // Retrieve
//   document.getElementById("result").innerHTML = localStorage.getItem("lastname");
// } else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }