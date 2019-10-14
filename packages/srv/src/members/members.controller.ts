import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { Member } from '@vereinsmanager/api';
import { all } from './members.mock';
import { VMResponse } from '../utils';
import { Store, STORE } from '../store';

@Controller('members')
export class MembersController {
  constructor(@Inject(STORE) private store: Store<Member>) {
    all.forEach(s => store.add(s));
  }

  @Get()
  findAll(): VMResponse.of<Member[]> {
    return VMResponse.from(this.store.findAll());
  }

  @Get(':id')
  findById(@Param('id') id: string): VMResponse.of<Member> {
    return VMResponse.from(this.store.findById(id));
  }

  @Post()
  add(@Body() data: Member) {
    console.log(data);
    this.store.add(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() member: Member) {
    this.store.update(id, member);
    return VMResponse.from({id});
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.store.delete(id);
  }
}
