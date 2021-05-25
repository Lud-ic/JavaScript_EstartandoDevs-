const anos = 40;
const meses = 3;
const dias = 2;

function idadeEmDias (anos, meses, dias) {
  const calculoIdade = anos * 365 + meses * 30 + dias;
  return calculoIdade;
}
const totalDias = idadeEmDias (anos, meses, dias);
console.log (`A pessoa tem ${totalDias} dias de vida.`);