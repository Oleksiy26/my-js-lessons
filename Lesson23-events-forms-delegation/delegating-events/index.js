const generateNumbersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(seatNumber => `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`)
    .join('');

const getSectorLines = () => {
  const seatString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      lineNumber =>
        `<div class="sector__line" data-line-number="${lineNumber}">${seatString} </div>`,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const lineString = getSectorLines();
  const sectorString = generateNumbersRange(1, 3)
    .map(
      sectorNumber =>
        `<div class="sector" data-sector-number="${sectorNumber}">${lineString} </div>`,
    )
    .join('');
  arenaElem.innerHTML = sectorString;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }

  const seat = event.target.dataset.seatNumber;
  const line = event.target.closest('.sector__line').dataset.lineNumber;
  const sector = event.target.closest('.sector').dataset.sectorNumber;
  console.log(seat);
  const selectedSeatElem = document.querySelector('.board');

  selectedSeatElem.textContent = `S: ${sector}, L: ${line}, S: ${seat},`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
