export const delay = milliseconds =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  }).then(() => {
    console.log('Done');
  });

// delay(3000);
