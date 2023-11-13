
// Check browser support

function storage(type,input){

    if(type=="current_user"){
        localStorage.setItem("current_user", input);
    
      }
      if(type=="current_user"){
        localStorage.setItem("user_request", "0001");
    
      }
      if(localStorage.getItem("post_request")==null){
        localStorage.setItem("post_request", "0001");
    
      }

}
if (typeof(Storage) !== "undefined") {
  // Store
  if(localStorage.getItem("current_user")==null){
    localStorage.setItem("current_user", "0001");

  }
  if(localStorage.getItem("user_request")==null){
    localStorage.setItem("user_request", "0001");

  }
  if(localStorage.getItem("post_request")==null){
    localStorage.setItem("post_request", "0001");

  }

}
  // Retrieve
//   document.getElementById("result").innerHTML = localStorage.getItem("lastname");
// } else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }