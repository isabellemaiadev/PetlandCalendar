import { Test, TestingModule } from '@nestjs/testing';
import { AvaiableScheduleService } from '../avaiable-schedule.service';

describe('AvaiableScheduledasdService', () => {
  let service: AvaiableScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaiableScheduleService],
    }).compile();

    service = module.get<AvaiableScheduleService>(AvaiableScheduleService);
  });

  it('should return an array', async () => {
    const response = await service.avaiableSchedule();

    expect(typeof response).toBe('object');
  });
});
