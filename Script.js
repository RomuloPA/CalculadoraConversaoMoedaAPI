function result() {
  const currencyOne = document.getElementById("currency-one").value;
  const currencyTwo = document.getElementById("currency-two").value;
  const valorMultiplicado = parseFloat(document.getElementById("value").value);
  const spanElement = document.getElementById("conversion-result");

  if ((currencyOne === "BRL" || currencyOne === "USD" || currencyOne === "EUR" || currencyOne === "GBP")
  &&(currencyTwo === "BRL" || currencyTwo === "USD" || currencyTwo === "EUR" || currencyTwo === "GBP")
  &&(valorMultiplicado > 0)) {
    fetch(`https://economia.awesomeapi.com.br/json/last/BRL-USD,USD-BRL,BRL-EUR,EUR-BRL,BRL-GBP,GBP-BRL`).then(response => {
      return response.json()
    }).then(corpo => {
      if ((currencyOne === "BRL")&&(currencyTwo === "USD")) { 
        const resultado = corpo.BRLUSD.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      } else if ((currencyOne === "USD")&&(currencyTwo === "BRL")) {
        const resultado = corpo.USDBRL.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      } else if ((currencyOne === "BRL")&&(currencyTwo === "EUR")) {
        const resultado = corpo.BRLEUR.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      } else if ((currencyOne === "EUR")&&(currencyTwo === "BRL")) {
        const resultado = corpo.EURBRL.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      } else if ((currencyOne === "BRL")&&(currencyTwo === "GBP")) {
        const resultado = corpo.BRLGBP.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      } else if ((currencyOne === "GBP")&&(currencyTwo === "BRL")) {
        const resultado = corpo.GBPBRL.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      } else if ((currencyOne === "BRL" && currencyTwo === "BRL")||(currencyOne === "USD" && currencyTwo === "USD")
      ||(currencyOne === "EUR" && currencyTwo === "EUR")||(currencyOne === "GBP" && currencyTwo === "GBP")) {
        spanElement.textContent = valorMultiplicado;
      }
    })
  } else {
    spanElement.textContent = "Por favor, selecione as moedas e preencha o valor.";
  }
}
  



/*function result() {
  const currencyOne = document.getElementById("currency-one").value;
  const currencyTwo = document.getElementById("currency-two").value;
  const valorMultiplicado = parseFloat(document.getElementById("value").value);
  const spanElement = document.getElementById("conversion-result");

  if ((currencyOne === "BRL" || currencyOne === "USD")&&(currencyTwo === "BRL" || currencyTwo === "USD")&&(valorMultiplicado > 0)) {
    if ((currencyOne === "BRL")&&(currencyTwo === "USD")){
      fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,BRL-USD`).then(response => {
        return response.json()
      }).then(corpo => {
        const resultado = corpo.USDBRL.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      })
    } else if ((currencyOne === "USD")&&(currencyTwo === "BRL")) {
      fetch(`https://economia.awesomeapi.com.br/json/last/BRL-USD`).then(response => {
        return response.json()
      }).then(corpo => {
        const resultado = corpo.BRLUSD.bid * valorMultiplicado;
        spanElement.textContent = resultado;
      })}
  } else {
    spanElement.textContent = "Por favor, selecione uma moeda e preencha o valor.";
  }
}*/