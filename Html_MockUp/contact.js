var email_visted = false;
var subject_visted = false;
var body_visted = false;
const speakeasy = requires('speakeasy');
const qrcode = requires('qrcode');

function browser() {
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    alert('Opera');
  } else if (navigator.userAgent.indexOf("Edg") != -1) {
    alert('Edge');
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    alert('Chrome');
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    alert('Safari');
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    alert('Firefox');
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
    alert('IE');
  } else {
    alert('unknown');
  }
}

function validateForm() {
    console.log("actually running");
    const regemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const basic_regex = new RegExp(regemail);
    const isValidEmail = basic_regex.test(document.getElementById("txtEmail").value);

    if (isValidEmail == false) {

        document.getElementById("lblError").innerHTML = "Enter valid email Address";
        return false;

    }
    else {
        document.getElementById("lblError").innerHTML = "";
        return true;
    }
}

function change(inputvalue){

    // console.log("changed");
    if(inputvalue==1){
    email_visted = true}
    else if(inputvalue==2){
        subject_visted = true}
    else if(inputvalue==3){
        body_visted = true}   

}

function onblur_check(input) {
    validateForm();
    input_check();

}

function input_check() {
    document.getElementById("submiterror").style.color="red"
    // console.log("input_checked");
    // console.log(body_visted)
    var email_check = validateForm();
    if (email_check == false && email_visted == true) { 
        // console.log("check is not probem");
        document.getElementById("submiterror").innerHTML = "Please Enter Valid Email"; }
    else if ((document.getElementById("Subject_Line").value).length < 1 && subject_visted == true) { 
        // console.log("check 2 is not probem");
        document.getElementById("submiterror").innerHTML = "Please Enter Subject Line"; }
    else if ((document.getElementById("Body").value).length < 1 && body_visted == true) { 
        // console.log("check 3 is not probem");
        
        document.getElementById("submiterror").innerHTML = "Please Enter Email Body"; }
    else {
        document.getElementById("submiterror").style.color="blue"

        document.getElementById("submiterror").innerHTML = "✔ Read To Send";
    }
}

`var clientID = '765060678442-gg76tpqg6ruerm5oouqm2scin1jat679.apps.googleusercontent.com';
var redirectURI = 'http://localhost:8080';
var fragmentString = location.hash.substring(1);

//Checks source of request 
function tryRequest(){
  var params = {};
      var regex = /([^&=]+)=([^&]*)/g, m;
      while (m = regex.exec(fragmentString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      if (Object.keys(params).length > 0) {
        localStorage.setItem('oauth2-test-params', JSON.stringify(params) );
        if (params['state'] && params['state'] == 'startLogIn') {
          startLogIn();
        }
      }
}

function startLogIn() {
  var params = JSON.parse(localStorage.getItem('oauth2-test-params'));
  if (params && params['access_token']) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',
        'https://www.googleapis.com/drive/v3/about?fields=user&' +
        'access_token=' + params['access_token']);
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
      } else if (xhr.readyState === 4 && xhr.status === 401) {
        // Prompts for user permission if token is invalid
        oauth2SignIn();
      }
    };
    xhr.send(null);
  } else {
    oauth2SignIn();
  }
}`


function send_email() {
    var email_check = validateForm();
    // console.log(email_check)
    if (email_check == false) { 
        document.getElementById("submiterror").style.color="red"

        document.getElementById("submiterror").innerHTML = "Please Enter Valid Email"; }
    else if ((document.getElementById("Subject_Line").value).length < 1) { 
        document.getElementById("submiterror").style.color="red"

        document.getElementById("submiterror").innerHTML = "Please Enter Subject Line"; }
    else if ((document.getElementById("Body").value).length < 1) { 
        document.getElementById("submiterror").style.color="red"

        document.getElementById("submiterror").innerHTML = "Please Enter Email Body"; }
    else {
        document.getElementById("submiterror").innerHTML = "";
        var email_for_send = document.getElementById("txtEmail").value;
        var subject_for_send = document.getElementById("Subject_Line").value;
        var body_for_send = document.getElementById("Body").value;
        body_for_send=body_for_send;
        console.log("Before mail to");
        // console.log(email_for_send)
        // console.log(body_for_send)
        myWindow = window.open("mailto:" + "varanoab@merrimack.edu" +'?cc=' + email_for_send + '&subject=' + subject_for_send + '&body=' + (body_for_send+"\n"+' reply-to:'+"<"+email_for_send+">"));
        if (browser == "Firefox") {
          myWindow.close();
        }

    }
}


//'?reply-to:'+email_for_send+ 

//junk
///dssds








// document.getElementById("send-button").onclick = send_email;

// var subject = document.getElementById( "<element_id>" ).value





// function validateForm() {
//     console.log("actually running")
//     var x = document.getElementById("txtEmail").value;
//     var atpos = x.indexOf("@");
//     var dotpos = x.lastIndexOf(".");
//     if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {

//         document.getElementById("lblError").innerHTML = "Enter valid email Address";
//         return false;

//     }
//     else {
//         document.getElementById("lblError").innerHTML = "";
//         return true;
//     }
// }




// const myObject = document.getElementById('txtEmail').value;
// myObject.addEventListener('keydown', function (evt) {
// //     input_check();
// console.log(myObject.value);
// });

// document.getElementById('txtEmail').addEventListener('input',function() {
    
//     email_visted = true;
//     input_check();
// })
// document.getElementById('Subject_Line').addEventListener('input',function() {
    
//     subject_visted = true;
//     input_check();
// })
// document.getElementById('Body').addEventListener('input',function() {
    
//     body_visted = true;
//     input_check();
// })
