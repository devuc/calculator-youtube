let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let dot = document.getElementById(".");
let plus = document.getElementById("+");
let minus = document.getElementById("-");
let x = document.getElementById("x");
let division = document.getElementById("/");
let bracketopen = document.getElementById("(");
let bracketclose = document.getElementById(")");
let equalto = document.getElementById("=");
let percentage = document.getElementById("%");
let clear = document.getElementById("c");
let input = "";
let realinput = document.getElementById("input");
setInterval(() => {
  realinput.innerHTML = input;
}, 0.000000000000001);
one.onclick = () => {
  input += one.innerHTML;
};

two.onclick = () => {
  input += two.innerHTML;
};

three.onclick = () => {
  input += three.innerHTML;
};

four.onclick = () => {
  input += four.innerHTML;
};

five.onclick = () => {
  input += five.innerHTML;
};

six.onclick = () => {
  input += six.innerHTML;
};

seven.onclick = () => {
  input += seven.innerHTML;
};

eight.onclick = () => {
  input += eight.innerHTML;
};

nine.onclick = () => {
  input += nine.innerHTML;
};

zero.onclick = () => {
  input += zero.innerHTML;
};

dot.onclick = () => {
  input += dot.innerHTML;
};

bracketopen.onclick = () => {
  input += bracketopen.innerHTML;
};

bracketclose.onclick = () => {
  input += bracketclose.innerHTML;
};

equalto.onclick = () => {
  alert("your answer is : " + eval(input));
};

clear.onclick = () => {
  input = "";
};

percentage.onclick = () => {
  input += percentage.innerHTML;
};

x.onclick = () => {
  input += "*";
};

division.onclick = () => {
  input += "/";
};

plus.onclick = () => {
  input += "+";
};

minus.onclick = () => {
  input += "-";
};
