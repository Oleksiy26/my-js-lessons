export function finishForm() {
  const myForm = document.querySelector('.login-form');
  const loginInput = document.createElement('input');
  loginInput.type = 'text';
  loginInput.name = 'login';
  const passwordInput = document.querySelector('input');
  passwordInput.type = 'password';
  myForm.prepend(loginInput);
}
// finishForm();
