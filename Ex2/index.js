const brancos = 2100;
const nulos = 1120;
const validos = 23574;

function calculoPorcentagens(brancos, nulos, validos) {
  totalEleitores = brancos + nulos + validos;
  porcentagemBrancos = brancos * 100 / totalEleitores;
  porcentagemNulos = nulos * 100 / totalEleitores;
  porcentagemValidos = validos * 100 / totalEleitores;
  return (porcentagemBrancos, porcentagemNulos, porcentagemValidos);
}
const totalEleitoress = calculoPorcentagens(brancos, nulos, validos);

console.log(
  `Os votos BRANCOS totalizaram: ${porcentagemBrancos.toFixed(2)}%, 
Os votos NULOS totalizaram: ${porcentagemNulos.toFixed(2)}%;
E os votos VÁLIDOS totalizaram: ${porcentagemValidos.toFixed(2)}%.`);