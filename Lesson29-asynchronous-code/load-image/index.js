export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  imgElem.addEventListener('load', () => callback(null, imgElem));

  imgElem.addEventListener('error', () => callback('Image load is failed'));
};

const imgSrc =
  'https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/javascript-full/lesson29/task1/example.png';

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;

  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};
