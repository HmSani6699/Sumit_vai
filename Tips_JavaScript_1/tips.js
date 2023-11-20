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

//  ========================= destructturing aliases =========================//

const obj = {
  id: "222",
  name: "Abol Kalam Ajad",
  age: "20",
  address: "Namapara",
  city: "Dahaka",
};

const { id: numver, age: code } = obj;

// console.log(numver, code);

const aa = [0, 1, 2, 3, 4, 5];
// console.log(aa);

let largeNumber = 0;

for (let i = 0; i < aa.length; i++) {
  if (largeNumber < aa[i]) {
    largeNumber = aa[i];
  }
}

console.log(largeNumber);
