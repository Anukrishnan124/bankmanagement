
function login(){
  var username= document.getElementById('username').value;
  var password= document.getElementById('password').value;
  console.log(username);
  console.log(password);

  var usersdata = localStorage.getItem(username);
var userdata = JSON.parse(usersdata);
  console.log(userdata.password);
  if(password!==userdata.password){
    alert('Wrong password')
    return;
  }
  alert('Login successful')
  console.log('Redirecting to home page...'); // Debugging statement
  window.location= './home.html'
  }

 function sign(){
    window.location='./signup.html'
  }