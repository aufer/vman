import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { STORE, StoreModule } from '../store';
import { Appointment } from '@vereinsmanager/api';
import { AppointmentStore } from './appointment.store';

@Module({
  providers: [
    {
      provide: STORE,
      useClass: AppointmentStore,
    },
  ],
  imports: [
    StoreModule.register<Appointment>(Appointment),
  ],
  controllers: [
    AppointmentController,
  ],
})
export class AppointmentModule {
}
