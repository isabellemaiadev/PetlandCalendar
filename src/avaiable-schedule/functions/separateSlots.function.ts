import {
  getHoursFromMinutes,
  getMinutesFromHours,
} from './getMinutesFromHours.function';

const separateSlots = (startTime: string, finishTime: string) => {
  const slotsArray = [];
  const startHourInMinutes = getMinutesFromHours(startTime);
  const finishesHourInMinutes = getMinutesFromHours(finishTime);

  const totalWorkTime = finishesHourInMinutes - startHourInMinutes;

  const totalSlotsInTime = totalWorkTime / 30;

  for (let slots = 0; slots < totalSlotsInTime; slots++) {
    const startHourInHour = getHoursFromMinutes(
      startHourInMinutes + 30 * slots,
    );

    slotsArray.push(startHourInHour);
  }

  return slotsArray;
};

export default separateSlots;
