// export const getSection = num => {
//   const mySpan = document.querySelector(`span[data-number = "${String(num)}"]`);
//   const mySpanParent = mySpan.closest('.box');
//   const mySpanParentDataValue = mySpanParent.dataset.section;
//   return mySpanParentData;
// };
// ------------------минимальная запись---------------
export const getSection = num => {
  const divIs = document.querySelector(`span[data-number = "${String(num)}"]`).closest('.box')
    .dataset.section;
  return divIs;
};

// getSection(4);

// console.log(getSection(4));
