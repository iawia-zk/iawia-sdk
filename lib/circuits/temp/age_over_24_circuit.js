function verify(value) {
  const dateStr = value.dateOfBirth.toString();
  const day = parseInt(dateStr.substring(0, 2));
  const month = parseInt(dateStr.substring(2, 4)) - 1;
  const year = parseInt(dateStr.substring(4, 6));
  const fullYear = year < 50 ? 2000 + year : 1900 + year;

  const birthDate = new Date(fullYear, month, day);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    return age - 1 > 24;
  }

  return age > 24;
}
