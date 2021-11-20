const filterNames = (arr, text) =>
  arr.filter(
    userNames => userNames.toLowerCase().includes(text.toLowerCase()) && userNames.length > 5,
  );

const arr = ['Alexandr', 'Kostya', 'Roman', 'Olivya', 'Oli', 'Nastya'];
const text = 'ol';

console.log(filterNames(arr, text));
