const contacts = [
  { name: 'Tom', phoneNumber: '555 - 55 - 55' },
  { name: 'Alex', phoneNumber: '444 - 44 - 44' },
  { name: 'Den', phoneNumber: '333 - 33 - 33' },
  { name: 'Sveta', phoneNumber: '222 - 22 - 22' },
  { name: 'Julia', phoneNumber: '111 - 11 - 11' },
];

const sortContacts = (arr, isAsc) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (typeof isAsc === 'undefined') {
    isAsc = true;
  }
  const result = arr.sort((a, b) => {
    if (isAsc === true) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
  return result;
};

console.log(sortContacts(contacts, false));
