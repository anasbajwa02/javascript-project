const inputBox = document.getElementById("input")
 const length = 12;
  
 const uperCase  ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerCase ="abcdefghijklmnopqrstuvwxyz";
 const numbers = "123456789";
 const symbols = "!@#$%^&*(){}[]<>;':";
 const allChar = uperCase + lowerCase + numbers + symbols
  console.log(allChar)


 function genPassword(){
     
     let password = ""
     password += uperCase[Math.floor(Math.random() * uperCase.length)]
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
     password += numbers[Math.floor(Math.random() * numbers.length)]
     password += symbols[Math.floor(Math.random() * symbols.length)]
//  console.log(password)
 while(length > password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)]

 }
 inputBox.value = password
 }


 function copyPassword(){
    inputBox.select();
    document.execCommand("copy")
 }