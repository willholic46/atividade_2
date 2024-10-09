const preco_pequena = 10;
const preco_media = 12;
const preco_grande = 15;

const quantidade_pequena = 3;
const quantidade_media = 2;
const quantidade_grande = 4;

const valorTotal = (quantidade_pequena * preco_pequena) + (quantidade_media * preco_media) + (quantidade_grande * preco_grande);
console.log(`Valor arrecadado com a venda: R$${valorTotal}`);
