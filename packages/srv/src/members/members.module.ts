import { Module } from '@nestjs/common';
import { Member } from '@vereinsmanager/api/lib';
import { MembersController } from './members.controller';
import { storeProviderFactory } from '../store';

@Module({
  providers: [
    storeProviderFactory<Member>(),
  ],
  controllers: [MembersController],
})
export class MembersModule {
}
