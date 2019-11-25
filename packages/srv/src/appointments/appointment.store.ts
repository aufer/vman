import { Appointment } from '@vereinsmanager/api';
import { MongoStore } from '../store/mongo-store';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentStore extends MongoStore<Appointment> {

  constructor() {
    super('appointment');
  }
}
