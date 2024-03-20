const password =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

const fullName = /^[a-zA-ZÀ-ÿ]{3,} [a-zA-ZÀ-ÿ]{3,}$/;

const email = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{3,}$/;

export const Regex = {
  password,
  fullName,
  email,
};
