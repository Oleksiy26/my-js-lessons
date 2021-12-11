export const manageClasses = () => {
  const oneClass = document.querySelector('.one');
  oneClass.classList.add('selected');
  const twoClass = document.querySelector('.two');
  twoClass.classList.remove('selected');
  const threeClass = document.querySelector('.three');
  threeClass.classList.toggle('three_done');
  const fourClass = document.querySelector('.four');
  if (fourClass.classList.contains('some-class')) {
    fourClass.classList.add('another-class');
  }
};

// manageClasses();
