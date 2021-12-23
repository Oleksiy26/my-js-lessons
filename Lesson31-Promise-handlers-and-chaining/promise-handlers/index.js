export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({ name: 'John', age: 17, email: `${userId}`, userId: 'userid777' });
      }, 1000);
    }
  });
  return request;
};

// requestUserData('broken')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));
