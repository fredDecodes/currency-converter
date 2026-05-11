const currencyMenu1El = document.getElementById('currency-menu1');
const menu1Value = document.getElementById('menu1-value');
const currencyMenu2El = document.getElementById('currency-menu2');
const menu2Value = document.getElementById('menu2-value');
const exchangeRateEl = document.getElementById('exchange-rate');

const API_URL = `https://v6.exchangerate-api.com/v6/${CONFIG.API_KEY}/latest`;

updateExchangeRate();

function updateExchangeRate() {
  fetch(`${API_URL}/${currencyMenu1El.value}`)
    .then((res) => res.json())
    .then((data) => {
      const exchangeRate = data.conversion_rates[currencyMenu2El.value];
      exchangeRateEl.innerText = `1 ${currencyMenu1El.value} = ${exchangeRate} ${currencyMenu2El.value}`;
      menu2Value.value = (menu1Value.value * exchangeRate).toFixed(2);
  });
}

currencyMenu1El.addEventListener('change', updateExchangeRate);
currencyMenu2El.addEventListener('change', updateExchangeRate);
menu1Value.addEventListener('input', updateExchangeRate);