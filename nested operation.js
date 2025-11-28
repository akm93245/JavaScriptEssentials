{let isloggedin = true;
let userole = "admin";
let usermessage;

if (isloggedin){
    if(userole == "admin"){
        usermessage = "Welcome, Admin ";
    }else{
        usermessage = "Welcome User";
    }
}else{
    usermessage = "Loggin First";
}

console.log(usermessage)}

{
let usertype= prompt("User Type");
let msg;

switch (usertype){
    case "admin":
        msg = "Administrator";
        break
    case "manager":
        msg = "Manager 1";
        break
    case "subscriber":
        msg = "subcriber";
    dafault:
        msg = "Speciefy yourself";

 }
console.log("User Type : ",usertype);
} 

{
let autenticated = true;
let isautenticated = autenticated ? "authenticated" : "notauthenticated";

console.log("Authentication Status : ", isautenticated);}
