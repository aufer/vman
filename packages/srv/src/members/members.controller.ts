import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { Member } from '@vereinsmanager/api';
import { VMResponse } from '../utils';
import { Store, STORE } from '../store';

@Controller('members')
export class MembersController {
  constructor(@Inject(STORE) private store: Store<Member>) {
  }

  @Get()
  async findAll(): VMResponse.of<Member[]> {
    return VMResponse.from(await this.store.findAll());
  }

  @Get(':id')
  async findById(@Param('id') id: string): VMResponse.of<Member> {
    return VMResponse.from(await this.store.findById(id));
  }

  @Post()
  async add(@Body() data: Member) {
    return await this.store.add(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() member: Member) {
    console.log('UPDATE_MEMBER', id, member);
    await this.store.update(id, member);
    return VMResponse.from({ id });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.store.delete(id);
  }
}
