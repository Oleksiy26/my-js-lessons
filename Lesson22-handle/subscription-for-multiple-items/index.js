export const createButton = buttonText => {
  const myButton = document.createElement('button');
  myButton.textContent = buttonText;
  document.body.append(myButton);
};

// createButton('Send Email');
