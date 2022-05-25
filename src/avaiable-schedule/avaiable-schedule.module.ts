import { Module } from '@nestjs/common';
import { AvaiableScheduleService } from './avaiable-schedule.service';
import { AvaiableScheduleController } from './avaiable-schedule.controller';

@Module({
  providers: [AvaiableScheduleService],
  controllers: [AvaiableScheduleController]
})
export class AvaiableScheduleModule {}
