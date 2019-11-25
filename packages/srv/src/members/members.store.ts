import { Appointment, Member } from '@vereinsmanager/api';
import { MongoStore } from '../store/mongo-store';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MembersStore extends MongoStore<Member> {

  constructor() {
    super('members');
  }
}
