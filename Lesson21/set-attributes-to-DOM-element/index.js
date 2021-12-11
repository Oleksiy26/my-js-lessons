export function finishForm() {
  const myForm = document.querySelector('.login-form');
  const passwordInput = document.querySelector('input');
  passwordInput.setAttribute('type', 'password');
  const loginInput = document.createElement('input');
  loginInput.setAttribute('name', 'login');
  myForm.prepend(loginInput);
}
// finishForm();
