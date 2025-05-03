export function verify(value) {
  const birthDate = new Date(value.age);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  return age > 24;
}
