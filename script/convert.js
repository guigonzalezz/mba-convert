const amountInput = document.getElementById("amount");
const currencyInput = document.getElementById("currency");

const form = document.querySelector("form");
const footer = document.querySelector("footer");
const submitButton = document.querySelector("button[type=submit]");

const description = document.getElementById("description");
const result = document.getElementById("result");

let amountInputValue = null;
let currencyInputValue = null;

const amount = {
  USD: 5.49,
  EUR: 6,
  GBP: 7.14,
};

const handleEnabledButton = () => {
  if (amountInputValue && currencyInputValue) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
};

amountInput.addEventListener("input", (event) => {
  const formatedValue = currencyMask(maskNumbers(event.target.value));
  amountInput.value = formatedValue;
  amountInputValue = Number(
    formatedValue.replace(/\./g, "").replace(/\,/g, ".")
  );
  handleEnabledButton();
});

currencyInput.addEventListener("input", (event) => {
  currencyInput.value = event.target.value;
  currencyInputValue = event.target.value;
  handleEnabledButton();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (amountInputValue && currencyInputValue) {
    const total = Number(amountInputValue * amount[currencyInputValue]).toFixed(
      2
    );
    description.innerText = `${currencyInputValue} 1 = ${currency(
      amount[currencyInputValue]
    )}`;
    result.innerText = `${currency(total)}`;
    footer.style.display = "block";
  }
});
