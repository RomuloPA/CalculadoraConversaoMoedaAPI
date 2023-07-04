function result() {
    fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta=>{
      return resposta.json()
    }).then(corpo=>{
      const spanElement = document.getElementById("conversion-result");
      spanElement.textContent = corpo.USDBRL.bid;
    })
  }
  
