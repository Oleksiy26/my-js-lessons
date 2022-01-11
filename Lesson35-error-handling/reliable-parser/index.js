const baseUrl = 'https://61dcca24591c3a0017e1aa84.mockapi.io/api/v1/login';

const buttonElem = document.querySelector('.submit-button');
const inputElem = document.querySelector('.login-form');
const errorElem = document.createElement('p');

const onValidInput = () => {
  buttonElem.disabled = !inputElem.reportValidity();
};

inputElem.addEventListener('input', onValidInput);

const onSubmitForm = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(inputElem));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(response => {
      alert(JSON.stringify(response));
      inputElem.reset();
    })
    .catch(() => {
      inputElem.append(errorElem);
      errorElem.textContent = 'Failed to create user';
      errorElem.style.color = 'red';
      errorElem.style.textAlign = 'center';
    });
};

inputElem.addEventListener('submit', onSubmitForm);
