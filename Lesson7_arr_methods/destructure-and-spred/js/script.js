const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const studentsBest = allStudentsList.filter(studName => !studentsForRetake.includes(studName));
  const messageForBest = studentsBest.map(best => `Good job, ${best}`);
  return messageForBest;
};
const allStudentsList = ['a', 'b', 'c', 'd'];
const studentsForRetake = ['b', 'd'];

console.log(getMessagesForBestStudents(allStudentsList, studentsForRetake));
