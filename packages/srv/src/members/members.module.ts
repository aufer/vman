import { Module } from '@nestjs/common';
import { Member } from '@vereinsmanager/api/lib';
import { MembersController } from './members.controller';
import { STORE, StoreModule } from '../store';
import { MembersStore } from './members.store';

@Module({
  imports: [
    StoreModule.register<Member>(Member),
  ],
  providers: [
    {
      provide: STORE,
      useClass: MembersStore,
    },
  ],
  controllers: [
    MembersController,
  ],
})
export class MembersModule {
}
