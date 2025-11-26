function registerUser(){
    let username = document.getElementById("registerUserName").value;
    let password = document.getElementById("registerPassword").value;

    if(!username || !password){
        alert("please fill all the fiealds")
        return;
    }

    //Save Credentials

    localStorage.setItem("storedUsername",username);
     localStorage.setItem("storedPassword",password);

     alert("Registration Successful")


}



//Login Functionality

function loginUser(){
    let enteredUsername = document.getElementById("loginUserName").value;
    let enteredPassword = document.getElementById("loginPassword").value;

    let storedUsername = localStorage.getItem("storedUsername");
    let storedPassword = localStorage.getItem("storedPassword");

    if(enteredUsername == storedUsername && enteredPassword ==storedPassword) {
        alert("Login Successful");

        localStorage.setItem("loggedUser",enteredUsername)

        document.getElementById("loginForm").submit();
    }
    else{
        alert("invalid creadentials")
    }


}

let loggedUserName = localStorage.getItem("loggedUser");

let user = document.getElementById("greet");
user.innerText = `Welcome ${loggedUserName} 👋`


