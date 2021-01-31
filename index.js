

let x = Math.random() * 10000;
let y = Math.round(x);
console.log(y)






function dis(val) {
  document.getElementById("edu").value += val
    & nbsp;
}
//function for evaluation
function solve() {
  let x = document.getElementById("edu").value
  let y = eval(x)
  document.getElementById("edu").value = y
}
//function for clearing the display
function clr() {
  document.getElementById("edu").value = ""
}