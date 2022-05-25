interface ISchedule {
  avaibleTimes: Array<string>;
}

interface IEmployeesArray {
  employees: Array<IEmployees>;
}
interface IEmployees {
  id: number;
  name: string;
  startsAt: string;
  finishesAt: string;
}
