const valor_conta = 101.53; 

const valor_carlos = Math.floor(valor_conta / 3);
const valor_andre = Math.floor(valor_conta / 3);
const valor_felipe = valor_conta - (valor_carlos + valor_andre);


console.log(`Carlos deve pagar: R$${valor_carlos}`);
console.log(`André deve pagar: R$${valor_andre}`);
console.log(`Felipe deve pagar: R$${valor_felipe}`);