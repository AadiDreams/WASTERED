function value(){
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    const users=["admin","user1"];
    const passwords=["admin","user1"];
    if(user==users[0] && pass==passwords[0]){
        window.open("./loged.html");
    }
    else{
        window.alert("Invalid Credential");
    }
}
