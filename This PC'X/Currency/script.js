const numberInput = document.getElementById("amount_input");
const result = document.getElementById("amount_output");
const from = document.getElementById("from");
const to = document.getElementById("to");
const fixedIn = document.querySelector(".fixed_in");
const fromCurrencySpan = document.querySelector(".from_currency");
const fixedOut = document.querySelector(".fixed_out");
const toCurrencySpan = document.querySelector(".to_currency");

numberInput.addEventListener("input", function() {
   let fromCurrency = from.value;
   let toCurrency = to.value;
   let amt = numberInput.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
   .then(response => {
         return response.json();
   })
   .then(data => {
      let rate = data.rates[toCurrency];
      let total = rate * amt;
      result.value = total;

      // Update the dynamic parts in the footer_results
      fixedIn.textContent = "1";
      fromCurrencySpan.textContent = fromCurrency;
      fixedOut.textContent = rate.toFixed(2); // Adjust the decimal places as needed
      toCurrencySpan.textContent = toCurrency;
   });
});

