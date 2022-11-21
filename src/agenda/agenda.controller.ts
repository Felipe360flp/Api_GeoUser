import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';

@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags("Agenda")
@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  @ApiOperation({
    summary: 'Realizar um agendamento',
  })
  create(@Body() createAgendaDto: CreateAgendaDto,@LoggedUser() user:User) {
    return this.agendaService.create(createAgendaDto,user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Localizar todos os agendamentos',
  })
  findAll(@LoggedUser() user:User) {
    return this.agendaService.findAll(user.id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Localizar um agendamento específico',
  })
  findOne(@Param('id') id: string,@LoggedUser() user:User) {
    return this.agendaService.findOne(id,user.id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um agendamento',
  })
  update(@Param('id') id: string, @Body() updateAgendaDto: UpdateAgendaDto,@LoggedUser() user:User) {
    return this.agendaService.update(id, updateAgendaDto,user.id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um agendamento',
  })
  remove(@Param('id') id: string,@LoggedUser() user:User) {
    return this.agendaService.remove(id,user.id);
  }
}
