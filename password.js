let password = 'Password321'

pwdRegex = /[0-9]/


if (password.length >= 10 && pwdRegex.test(password)) {
    console.log('pass')
}
else {
    console.log('Fail')
}

// password = password.split("");
// console.log(password);
// let numberCheck = false;

if (password.includes('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')) {
    numberCheck = true;
} 
else {
    numbers = false;
}

if (numberCheck) {
    console.log("Pass");
}
else {
    console.log("Fail")
}