// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
  let inputValue = event.currentTarget.value.trim();
  if (inputValue.length === Number(inputRef.dataset.length)) {
    const currentInvalidInput = document.querySelector(".invalid");
    currentInvalidInput?.inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
  if (
    inputRef.value.length !== Number(inputRef.dataset.length) &&
    inputRef.value.length !== 0
  ) {
    inputRef.classList.add("invalid");
  }
}
// Є питяння! Чому коли в інпут спочатку написати 6 символів підсвічує зеленим а потім коли при першій помилці знову ввожу 6 символів світить червоним і видає помилку Uncaught TypeError: Cannot read properties of undefined (reading 'classList')
