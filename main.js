var condition = prompt("Please, enter an expression similar to the example: 2 + 4 or 63 * 42 and program will calculate result");

var symbols = condition.split(' ');
console.log(symbols);

var num1 = symbols[0];
var num2 = symbols[2];
console.log(num2);
var calc = symbols[1];

var res;

if (calc === "" || num1 === "" || num2 === "") {
    alert("Value must not be empty! Please try again and enter the number.");
} else if (calc !== "+" && calc !== "-" && calc !== "*" && calc !== "/") {
    alert("The value of operation is incorrect! Please try again and enter the correct value.");
} else if (calc === "+") {
    res = +num1 + +num2;
    alert("Your resault: sum of numbers " + num1 + " and " + num2 + " is " + res);
} else if (calc === "-") {
    res = +num1 - +num2;
    alert("Your resault: difference of numbers " + num1 + " and " + num2 + " is " + res);
} else if (calc === "*") {
    res = +num1 * +num2;
    alert("Your resault: multiplication of numbers " + num1 + " and " + num2 + " is " + res);
} else if (calc === "/") {
    res = +num1 / +num2;
    alert("Your resault: division of numbers " + num1 + " and " + num2 + " is " + res);
} 
