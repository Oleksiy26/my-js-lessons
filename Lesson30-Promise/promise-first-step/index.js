const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--22729159.jpg';

export const addImage = imgSrc => {
  const prom = new Promise((resolve, reject) => {
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
  return prom;
};

// const resultPromise = addImage(imgSrc);

// resultPromise
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
