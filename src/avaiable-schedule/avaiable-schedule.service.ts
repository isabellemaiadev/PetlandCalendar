import { Injectable } from '@nestjs/common';
import { filter } from 'rxjs';
import {
  getEmployees,
  getHoursFromMinutes,
  getMinutesFromHours,
  getOccupiedSchedules,
  separateSlots,
} from './functions';

@Injectable()
export class AvaiableScheduleService {
  async avaiableSchedule() {
    let allAvaiableTimes = [];
    let occupiedSchedules = [];
    const employeesScheduleArray = [];

    const employeesArray: IEmployeesArray = await getEmployees();

    await Promise.all(
      employeesArray.employees.map(async (employee) => {
        separateSlots(employee.startsAt, employee.finishesAt).forEach(
          (slot) => {
            allAvaiableTimes.push(slot);
          },
        );

        const schedule = await getOccupiedSchedules(employee.id);
        schedule.appointments.map((item) => {
          employeesScheduleArray.push(item);
        });
      }),
    );

    employeesScheduleArray.map((appointment: IAppointmentsEmployee) => {
      const startedTimeSplitted = appointment.startsAt.split(':');
      const finishedTimeSplitted = appointment.finishesAt.split(':');
      let finishedMinutes = parseInt(finishedTimeSplitted[1]);
      let finishedHour = parseInt(finishedTimeSplitted[0]);

      let startedMinutes = parseInt(startedTimeSplitted[1]);
      let startedHour = parseInt(startedTimeSplitted[0]);

      if (startedMinutes > 0 && startedMinutes < 30) {
        startedMinutes = 30;
      } else if (finishedMinutes > 30) {
        startedMinutes = 0;
        startedHour++;
      }

      if (finishedMinutes > 0 && finishedMinutes < 30) {
        finishedMinutes = 30;
      } else if (finishedMinutes > 30) {
        finishedMinutes = 0;
        finishedHour++;
      }

      const startedTimeFixed = startedHour + ':' + startedMinutes;
      const finishTimeFixed = finishedHour + ':' + finishedMinutes;

      separateSlots(startedTimeFixed, finishTimeFixed).forEach((slot) => {
        occupiedSchedules.push(slot);
      });
    });

    console.log(occupiedSchedules);

    occupiedSchedules.forEach((hour) => {
      if (allAvaiableTimes.indexOf(hour) > -1) {
        allAvaiableTimes.splice(allAvaiableTimes.indexOf(hour), 1);
      }
    });

    return { avaiableTimes: allAvaiableTimes };
  }
}
