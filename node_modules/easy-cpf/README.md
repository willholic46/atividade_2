# Easy CPF

`Easy cpf` is a lightweight library for validating and generating CPF (Cadastro de Pessoas Físicas) numbers in TypeScript and JavaScript.

[![npm version](https://img.shields.io/npm/v/easy-cpf.svg?style=flat-square)](https://www.npmjs.com/package/easy-cpf)
[![License](https://img.shields.io/npm/l/easy-cpf.svg?style=flat-square)](https://opensource.org/licenses/MIT)

- [Insalation](#installation)

- [Usage](#usage)

  - [Validator](#validator)

  - [Generator](#generator)

    - [As string](#generator)

    - [As number](#as-number)

- [Author](#author)

- [License](#license)

### Installation

You can install `easy-cpf` via npm or yarn:

```bash
npm install easy-cpf
# or
yarn add easy-cpf
```

### Usage

#### Validator

```js
const { cpf } = require("easy-cpf");

const cpf = "123.456.789-09";

// true or false
cpf.validate(cpf);
```

#### Generator

```js
const { cpf } = require("easy-cpf");

const randomCPF = cpf.generate();

// 123.456.789-10
console.log("Random CPF:", randomCPF);
```

### As number

```js
const { cpf } = require("easy-cpf");

const randomCPF = cpf.generate("number");

//12345678910
console.log("Random CPF:", randomCPF);
```

### Author

[LinkedIn](https://www.linkedin.com/in/daniel-murilo-vaz)

[X (Twitter)](https://twitter.com/daniellmvaz)

[Instagram](https://instagram.com/daniellmurilo)

[Website](https://daniellvaz.github.io/portfolio/)

### Licenses

### [MIT](https://opensource.org/license/mit/)
