welcomeMassage();

function welcomeMassage() {
    let userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById("username").innerHTML = userName;
    }   
    else {
        alert("Welcome to my portfolio!");
    }





}

