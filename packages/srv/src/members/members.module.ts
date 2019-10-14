import { Module } from '@nestjs/common';
import { Member } from '@vereinsmanager/api/lib';
import { MembersController } from './members.controller';
import { StoreModule } from '../store/store.module';

@Module({
  imports: [
    StoreModule.register<Member>(Member),
  ],
  controllers: [
    MembersController,
  ],
})
export class MembersModule {
}
