export const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({ name: 'John', age: 17, userId, email: `${userId}@exemple.com` });
      }, 1000);
    }
  });
  return request;
};

requestUserData('userid777')
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
