//  swaping js value
let a = 1;
let b = 2;

// console.log(a, b);

let tap = a;
a = b;
b = tap;

// console.log(a, b);

let array = [1, 2, 3, 4, 5];
array[0] = 5;
// console.log(array);

// ===================================== Copy text ==========================//

function handleCopyBtn() {
  const str = document.querySelector("#text");
  const element = document.createElement("textarea");
  element.value = str.innerText;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}
