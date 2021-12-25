export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({ name: 'John', age: 17, userId, email: `${userId}@example.com` });
      }, 1000);
    }
  });
  return request;
};

// console.log(requestUserData('userid777'));
// requestUserData('userid777')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));
