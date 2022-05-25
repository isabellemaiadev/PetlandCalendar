import { Controller, Get } from '@nestjs/common';
import { AvaiableScheduleService } from './avaiable-schedule.service';

@Controller('avaiable-schedule')
export class AvaiableScheduleController {
    constructor(private readonly avaiableScheduleService: AvaiableScheduleService) {}

    @Get()
    getAvaiableSchedule(){
        return this.avaiableScheduleService.avaiableSchedule();
    }

}


