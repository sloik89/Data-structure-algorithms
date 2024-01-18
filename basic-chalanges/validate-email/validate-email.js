const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};
const validateEmails = (email) => {
  if (email.indexOf("@") === -1) {
    return false;
  }
  const [localPart, domain] = email.split("@");
  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }
  const domainExtension = domain.split(".");
  console.log(domainExtension);
  if (domainExtension.length < 2 || domainExtension[1] < 2) {
    return false;
  }
  return true;
};
module.exports = { validateEmail, validateEmails };
