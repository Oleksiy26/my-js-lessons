const callbackPrompt = {
  message: 'Please enter your phone number',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
export { callbackPrompt };

callbackPrompt.showDeferredPrompt(2000);
