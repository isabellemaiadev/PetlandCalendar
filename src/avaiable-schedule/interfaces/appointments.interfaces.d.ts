interface IAppointments {
  appointments?: Array<IAppointmentsEmployee | undefined>;
}

interface IAppointmentsEmployee extends IEmployees {
  employeeId: number;
  appointmentId: number;
}
