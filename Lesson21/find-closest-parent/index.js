export const getSection = num => {
  const mySpan = document.querySelector(`span[data-number = "${String(num)}"]`);
  const mySpanParent = mySpan.closest('.box');
  const mySpanParentData = mySpanParent.dataset.section;
  return mySpanParentData;
};

// getSection(4);

// console.log(getSection(4));
