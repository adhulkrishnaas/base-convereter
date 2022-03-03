let inputEl = document.getElementById("input-el");
let fromEl = document.getElementById("from-el");
let toEl = document.getElementById("to-el");
let convertBtn = document.getElementById("convert-btn");
let swapBtn = document.getElementById("swap-btn");
let resulEl = document.getElementById("result-el");

function validateInput() {
  // ----------From == to checking----------------------------//
  if (fromEl.value == toEl.value) {
    resulEl.innerText = inputEl.value;
  }

  //---------------Decimal Conversion checking-----------------------------//

  if (fromEl.value == "decimal" && toEl.value == "hexadecimal") {
    toHexadecimal(inputEl.value);
  }
  if (fromEl.value == "decimal" && toEl.value == "octal") {
    toOctal(inputEl.value);
  }
  if (fromEl.value == "decimal" && toEl.value == "binary") {
    toBinary(inputEl.value);
  }

  //------------------hexadecimal conversion checking-----------------//

  if (fromEl.value == "hexadecimal" && toEl.value == "decimal") {
    hexadecimalToDecimal(inputEl.value);
  }
  if (fromEl.value == "hexadecimal" && toEl.value == "octal") {
    let decimal = hexadecimalToDecimal(inputEl.value);
    toOctal(decimal);
  }
  if (fromEl.value == "hexadecimal" && toEl.value == "binary") {
    let decimal = hexadecimalToDecimal(inputEl.value);
    toBinary(decimal);
  }

  //-----------------octal conversion checking------------------//

  if (fromEl.value == "octal" && toEl.value == "decimal") {
    octalToDecimal(inputEl.value);
  }
  if (fromEl.value == "octal" && toEl.value == "hexadecimal") {
    let decimal = octalToDecimal(inputEl.value);
    toHexadecimal(decimal);
  }
  if (fromEl.value == "octal" && toEl.value == "binary") {
    let decimal = octalToDecimal(inputEl.value);
    toBinary(decimal);
  }

  //-------------binary conversion checking--------------------------------------------------//

  if (fromEl.value == "binary" && toEl.value == "decimal") {
    binaryToDecimal(inputEl.value);
  }
  if (fromEl.value == "binary" && toEl.value == "hexadecimal") {
    let decimal = binaryToDecimal(inputEl.value);
    toHexadecimal(decimal);
  }
  if (fromEl.value == "binary" && toEl.value == "octal") {
    let decimal = binaryToDecimal(inputEl.value);
    toOctal(decimal);
  }
}

function toHexadecimal(input) {
  let result = parseInt(input).toString(16);
  resulEl.innerText = result;
}
function toOctal(input) {
  let result = parseInt(input).toString(8);
  resulEl.innerText = result;
}
function toBinary(input) {
  let result = parseInt(input).toString(2);
  resulEl.innerText = result;
}
function hexadecimalToDecimal(input) {
  let result = parseInt(input, 16);
  resulEl.innerText = result;
  return result;
}
function octalToDecimal(input) {
  let result = parseInt(input, 8);
  resulEl.innerText = result;
  return result;
}
function binaryToDecimal(input) {
  let result = parseInt(input, 2);
  console.log(result);
  resulEl.innerText = result;
  return result;
}

function swapInput() {
  let temp = fromEl.value;
  fromEl.value = toEl.value;
  toEl.value = temp;
}

convertBtn.addEventListener("click", () => {
  validateInput();
});

swapBtn.addEventListener("click", () => {
  swapInput();
});
