const checkIfStrongPassword =(password)=>{
let count=0

if(password.length<6){
   return count+=6-password.length
}else if(password.length>20){
   return count+=password.length-20
}
else if(!(/[a-z]/.test(password))){
    return count++
}
else if(!(/[A-Z]/.test(password))){
    return count++
}
else if(!(/[0-9]/.test(password))){
    return count++
}else{
    for( j in password.length-1){
        if ((password[j] == password[j+1]) && (password[j] == password[j+2])){
            return count++
        }
    }
}
return count
}

console.log(checkIfStrongPassword('a'))