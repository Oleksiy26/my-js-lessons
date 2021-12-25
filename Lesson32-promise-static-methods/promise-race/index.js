const getRandomNum = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const timeout = getRandomNum(1000, 3000);
    setTimeout(() => {
      resolve({ userData: { name: 'Tom', age: 17 }, source: url });
    }, timeout);
  });

const servers = ['https://server.com/us/', 'https://server.com/eu/', 'https://server.com/au/'];

export const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));
  return Promise.race(requests);
};

// getUserASAP('usrer-12').then(url => console.log(url));
