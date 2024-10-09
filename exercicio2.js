const salario_inicial = 3000; 

const aumento = salario_inicial * 0.20;
const salario_aumento = salario_inicial + aumento;

const desconto_inss = salario_aumento * 0.08;
const salario_final = salario_aumento - desconto_inss;

console.log(`Salário Inicial: R$${salario_inicial}`);
console.log(`Salário com Aumento: R$${salario_aumento}`);
console.log(`Desconto INSS: R$${desconto_inss}`);
console.log(`Salário Final: R$${salario_final}`);