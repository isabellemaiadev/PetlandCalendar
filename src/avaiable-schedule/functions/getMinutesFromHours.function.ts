const getMinutesFromHours = (hour: string) => {
  const hourParsed = hour.split(':');
  const hourInMinutes = parseInt(hourParsed[0]) * 60;
  return hourInMinutes + parseInt(hourParsed[1]);
};

const fixTime = (time: string | number) => {
  if (time.toString().length == 1) {
    time = '0' + time;
    return time;
  }
};

const getHoursFromMinutes = (minutes: number) => {
  let minutesInHours: string | number = minutes / 60;

  if (minutesInHours.toString().indexOf('.') == -1) {
    minutesInHours = fixTime(minutesInHours)
      ? fixTime(minutesInHours)
      : minutesInHours;

    return minutesInHours + ':00';
  }

  const minutesInHoursArray = minutesInHours.toString().split('.');
  minutesInHoursArray[0] = fixTime(minutesInHoursArray[0])
    ? fixTime(minutesInHoursArray[0])
    : minutesInHoursArray[0];

  minutesInHoursArray[1] = (parseFloat(minutesInHoursArray[1]) * 60).toString();

  minutesInHoursArray[1] = Math.ceil(
    parseFloat(
      minutesInHoursArray[1].slice(0, 2) +
        '.' +
        minutesInHoursArray[1].slice(2, -1),
    ),
  ).toString();

  return minutesInHoursArray.join(':');
};

export { getMinutesFromHours, getHoursFromMinutes };
