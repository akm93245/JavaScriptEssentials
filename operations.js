let userole= "admin"
let accesslevel

if (userole =="admin"){
    accesslevel = "Full access granted"
}else if(userole =="manager"){
    accesslevel = "limited access granted"
}else{
    accesslevel = "No accesss "
}

console.log("Access Level : ", accesslevel);