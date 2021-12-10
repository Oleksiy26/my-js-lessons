const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(senderText) {
    sender = senderText;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
};
export default createMessenger;

const finalMessage = createMessenger();
finalMessage.sendMessage('Bob');
finalMessage.setMessage('Good Job');
finalMessage.sendMessage('Bob');
finalMessage.setSender('Gromecode');
finalMessage.sendMessage('Bob');
