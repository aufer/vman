import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { StoreModule } from '../store';
import { Appointment } from '@vereinsmanager/api';

@Module({
  providers: [],
  imports: [
    StoreModule.register<Appointment>(Appointment),
  ],
  controllers: [
    AppointmentController,
  ],
})
export class AppointmentModule {
}
