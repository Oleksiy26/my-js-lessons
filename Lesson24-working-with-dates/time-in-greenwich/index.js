const clockForm = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const getGreenwichTime = date => clockForm.format(date);

console.log(getGreenwichTime(new Date()));
