import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvaiableScheduleModule } from './avaiable-schedule/avaiable-schedule.module';

@Module({
  imports: [AvaiableScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
