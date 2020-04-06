var num1 = prompt("Please, enter first number");
console.log(num1);
var num2 = prompt("Please, enter second number");
console.log(num2);
var calc = prompt("Please, enter the operation (+, -, *, / )");
console.log(calc);

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
