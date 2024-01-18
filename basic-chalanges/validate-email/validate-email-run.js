const { validateEmail, validateEmails } = require("./validate-email");
const result = validateEmail("john@gmail");
const result1 = validateEmails("john@gmail.com");
console.log(result, result1);
