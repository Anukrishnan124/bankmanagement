var loggeduser="";
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
  localStorage.setItem('loggeduser', username);
  console.log(loggeduser);
  alert('Login successful')
  console.log('Redirecting to home page...'); // Debugging statement
  window.location= './home.html'
  return loggeduser;
  
  }

function withdraw() {
  var withdraw = document.getElementById("withdraw").value;
  var loggeduser = localStorage.getItem('loggeduser');
  var username = loggeduser;
  var withdrawpass = document.getElementById("withdrawpass").value;

  var usersdata = localStorage.getItem(username);
  var userdata = JSON.parse(usersdata);
  console.log(userdata.password);
  if (withdrawpass !== userdata.password) {
    alert("Wrong password");
    return;
  }
  console.log("login success");
  userdata.accountbalance =
    parseFloat(userdata.accountbalance) - parseFloat(withdraw);
  console.log(userdata.accountbalance);
  balance.innerHTML = `
      <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">  ${userdata.accountbalance}</a>
        
      </div>`;
  localStorage.setItem(username, JSON.stringify(userdata));
  const found = JSON.parse(localStorage.getItem(accountbalance));
  alert("Amount withdrawn " + withdraw);
}

function depositt() {
  var loggeduser = localStorage.getItem('loggeduser');
  console.log(loggeduser);
  var deposit = parseFloat(document.getElementById("deposit").value);
  var username = loggeduser;
  console.log(loggeduser);
  var depositpass = document.getElementById("depositpass").value;
  var usersdata = localStorage.getItem(username);
  var userdata = JSON.parse(usersdata);
  console.log(userdata.password);
  if (depositpass !== userdata.password) {
    alert("Wrong password");
    return;
  }
  console.log("hello");
  userdata.accountbalance =
    parseFloat(userdata.accountbalance) + parseFloat(deposit);
  // const found = JSON.parse(localStorage.getItem(userdata.accountbalance));
  console.log(userdata.accountbalance);
  balance.innerHTML = `
      <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action">  ${userdata.accountbalance}</a>
        
      </div>`;
  localStorage.setItem(username, JSON.stringify(userdata));
  alert("Deposited amount" + deposit);
}

function logout(){

  window.location='./login.html'
}




 function sign(){
    window.location='./signup.html'
   
  }