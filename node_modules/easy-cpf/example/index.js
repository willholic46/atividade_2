const { cpf } = require("easy-cpf");

const fakeCpf = cpf.generate();

const isValid = cpf.validate(fakeCpf);

console.log(isValid);
