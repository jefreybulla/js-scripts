function CodelandUsernameValidation(str) { 
  
    if (str.length < 4 || str.length > 25){
        return 'false'
    }
    if (!/[a-zA-Z]/.test(str[0])){
        return 'false'
    }


    for (i of str){
        // Regular expression to confirm letters, numbers and underscore
        if (!/^[A-Za-z0-9-_]*$/.test(str)){
        return false
        }
        
    }
    if ((str[str.length - 1])== '_'){
        return false
    }
    return 'true'
    
}
     
input = 'uu_'     // output = false
//input = "u__hello_world123" // output = true

console.log(CodelandUsernameValidation(input));