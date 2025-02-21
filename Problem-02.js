function validEmail(email) {
  if (typeof email !== "string") return "Invalid";
  if (email.indexOf(" ") !== -1) return false;
  if (".-+@".includes(email[0])) return false;
  if (email.indexOf("@") === -1) return false;
  if (!email.endsWith(".com")) return false;
  return true;
}
// console.log(validEmail("ferdous@gmail.com"));
