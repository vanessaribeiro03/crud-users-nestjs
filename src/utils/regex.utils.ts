const password =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const fullName = /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/;

export const Regex = {
  password,
  fullName,
};
