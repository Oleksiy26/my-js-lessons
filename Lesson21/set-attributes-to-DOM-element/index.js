export function finishForm() {
  const myForm = document.querySelector('.login-form');
  const loginInput = document.createElement('input');
  loginInput.setAttribute('name', 'login');
  const passwordInput = document.querySelector('input');
  passwordInput.setAttribute('type', 'password');
  myForm.prepend(loginInput);
}
// finishForm();
