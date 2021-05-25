const precoMacaUn = 1.30;
const precoMacaDuz = 1.00;
const unidMaca = 8;

function calcularPrecoTotalMacas(precoMacaUn, precoMacaDuz, unidMaca) {
  if (unidMaca < 12) {
    return precoMacaUn * unidMaca;
  } else {
    return precoMacaDuz * unidMaca;
  }
}
const total = calcularPrecoTotalMacas(precoMacaUn, precoMacaDuz, unidMaca);
console.log(`O valor total da compra é: R$${total.toFixed(2)}`);