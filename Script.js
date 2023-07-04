function result() {
  const currencyOne = document.getElementById("currency-one").value;
  const currencyTwo = document.getElementById("currency-two").value;
  const conversionValue = parseFloat(document.getElementById("value").value);
  const spanElement = document.getElementById("conversion-result");

  if ((currencyOne === "BRL" || currencyOne === "USD" || currencyOne === "EUR" || currencyOne === "GBP")
  &&(currencyTwo === "BRL" || currencyTwo === "USD" || currencyTwo === "EUR" || currencyTwo === "GBP")
  &&(conversionValue > 0)) {
    fetch(`https://economia.awesomeapi.com.br/json/last/BRL-USD,USD-BRL,BRL-EUR,EUR-BRL,BRL-GBP,GBP-BRL,USD-EUR,EUR-USD,USD-GBP,GBP-USD,EUR-GBP,GBP-EUR`).then(response => {
      return response.json()
    }).then(data => {
      if ((currencyOne === "BRL")&&(currencyTwo === "USD")) { 
        const result = (data.BRLUSD.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "USD")&&(currencyTwo === "BRL")) {
        const result = (data.USDBRL.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "BRL")&&(currencyTwo === "EUR")) {
        const result = (data.BRLEUR.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "EUR")&&(currencyTwo === "BRL")) {
        const result = (data.EURBRL.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "BRL")&&(currencyTwo === "GBP")) {
        const result = (data.BRLGBP.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "GBP")&&(currencyTwo === "BRL")) {
        const result = (data.GBPBRL.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "USD")&&(currencyTwo === "EUR")) {
        const result = (data.USDEUR.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "EUR")&&(currencyTwo === "USD")) {
        const result = (data.EURUSD.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "USD")&&(currencyTwo === "GBP")) {
        const result = (data.USDGBP.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "GBP")&&(currencyTwo === "USD")) {
        const result = (data.GBPUSD.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "EUR")&&(currencyTwo === "GBP")) {
        const result = (data.EURGBP.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "GBP")&&(currencyTwo === "EUR")) {
        const result = (data.GBPEUR.bid * conversionValue).toFixed(2);
        spanElement.textContent = result;
      } else if ((currencyOne === "BRL" && currencyTwo === "BRL")||(currencyOne === "USD" && currencyTwo === "USD")
      ||(currencyOne === "EUR" && currencyTwo === "EUR")||(currencyOne === "GBP" && currencyTwo === "GBP")) {
        spanElement.textContent = conversionValue;
      }
    })
  } else {
    spanElement.textContent = "Por favor, selecione as moedas e preencha o valor.";
  }
}