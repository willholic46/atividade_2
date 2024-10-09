export const cpf = {
  validate(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
      return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let verificationDigit1 = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cpf.charAt(9)) !== verificationDigit1) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    let verificationDigit2 = remainder < 2 ? 0 : 11 - remainder;

    if (parseInt(cpf.charAt(10)) !== verificationDigit2) {
      return false;
    }

    return true;
  },

  generate(as: string | number = "string"): string | number {
    const randomDigits = Array.from({ length: 9 }, () =>
      Math.floor(Math.random() * 10)
    );

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += randomDigits[i] * (10 - i);
    }
    let remainder = sum % 11;
    let verificationDigit1 = remainder < 2 ? 0 : 11 - remainder;

    randomDigits.push(verificationDigit1);

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += randomDigits[i] * (11 - i);
    }
    remainder = sum % 11;
    let verificationDigit2 = remainder < 2 ? 0 : 11 - remainder;

    randomDigits.push(verificationDigit2);

    if (as === "number") {
      const cpfNumber = parseInt(randomDigits.join(""));
      return cpfNumber;
    }

    const cpfString = randomDigits
      .join("")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    return cpfString;
  },
};
