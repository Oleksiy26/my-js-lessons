export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    imgElem.addEventListener('load', () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    });
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed')));
  });
  return p;
};

// const resultPromise = addImage(imgSrc);

// resultPromise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
