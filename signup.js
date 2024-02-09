function signup(){
  var username=document.getElementById('username').value;
  var accountnumber=document.getElementById('accountNumber').value;
  var password=document.getElementById('password').value; 
  var accountbalance=0;

  if(localStorage.getItem(username)  ){
    alert('User already exists')
    return;
  }

  var userdata={
    accountnumber: accountnumber,
    password: password,
    accountbalance:accountbalance
  };
  localStorage.setItem(username, JSON.stringify(userdata));
  
  alert('User registered')
  window.location='./login.html'

}
