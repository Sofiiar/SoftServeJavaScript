//==============================TASK1================================
function isUpperCaseMatch(string) {
    const regex = /^[A-Z]/;
    return string.match(regex) ? console.log("String starts with uppercase character") : console.log("String does not start with uppercase character");
}

isUpperCaseMatch('regexp');  // String does not start with uppercase character
isUpperCaseMatch('RegExp');  // String starts with uppercase character

//===============================TASK2================================
function checkEmail(email) {
    const trimmedEmail = email.trim();
    const regex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return console.log(regex.test(trimmedEmail));
}

checkEmail("Qmail2@gmail.com "); //true

//================================TASK3================================
function findMatches(text) {
    const regex = /d([b]+)(d?)/gi;
    let matches = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        for (let i = 0; i < match.length; i++) {
            matches.push(match[i]);
        }
    }

    return matches; 
}

const result = findMatches(" cdbBdbsbz ");
console.log(result);  // Output: ['dbBd', 'bB', 'd']


//================================TASK4=================================
function swapTwoWords(input) {
    const regex = /(\b\w+\b)\s+(\b\w+\b)/;
    return input.replace(regex, '$2, $1');
}

const inputString = "Java Script";
const outputString = swapTwoWords(inputString);
console.log(outputString);

//================================TASK5=================================
function isValidCardNumber(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
}

console.log(isValidCardNumber("9999-9999-9999-9999")); // true
console.log(isValidCardNumber("9999999999999999"));  // false

//================================TASK6=================================
function checkAdvancedEmail(email) {
    const regex = /^(?![_-])[\w]+(?:-(?!-)[\w]+)*(?<![_-])@[a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

    return regex.test(email) ? console.log('Email is correct!') : console.log('Email is not correct!');
}

checkAdvancedEmail('my_mail@gmail.com');   // Email is correct!
checkAdvancedEmail('*my_mail@gmail.com');  // Email is not correct!
checkAdvancedEmail('my_ma--il@gmail.com'); // Email is not correct!

//================================TASK7==================================
function isLoginValid(login) {
    return /^[a-zA-Z][a-zA-Z0-9.]*$/.test(login);
}

function extractNumbers(login) {
    return login.match(/\b\d+(\.\d+)?\b/g) || [];
}

function checkLogin(login) {
    const isValidLogin = isLoginValid(login);
    const numbers = extractNumbers(login);

    console.log(isValidLogin);
    numbers.forEach(number => console.log(number));

    return isValidLogin;
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3'); 