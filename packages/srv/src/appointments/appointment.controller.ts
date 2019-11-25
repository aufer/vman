import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { Store, STORE } from '../store';
import { Appointment } from '@vereinsmanager/api';
import { VMResponse } from '../utils';

@Controller('appointments')
export class AppointmentController {
  constructor(@Inject(STORE) private store: Store<Appointment>) {}

  @Get()
  async findAll(): VMResponse.of<Appointment[]> {
    return VMResponse.from(await this.store.findAll());
  }

  @Get(':id')
  findAfter(): VMResponse.of<Appointment[]> {
    return VMResponse.from([]);
  }

  @Get(':id')
  findByDay(date: Date): VMResponse.of<Appointment[]> {
    return VMResponse.from([]);
  }

  @Post()
  create(@Body() appointment: Appointment) {

  }

  @Delete(':id')
  delete(@Param('id') id: string) {

  }

  @Put(':id')
  update(@Param('id') id: string, @Body() appointment: Appointment) {

  }
}
