import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags("Client")
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @ApiOperation({
    summary: 'Para cadastrar um cliente',
  })
  create(@Body() createClientDto: CreateClientDto,@LoggedUser() user:User) {
    return this.clientService.create(createClientDto,user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Localizar todos os Clientes',
  })
  findAll(@LoggedUser() user:User) {
    return this.clientService.findAll(user.id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Localizar um cliente através do ip',
  })
  findOne(@Param('id') id: string,@LoggedUser() user:User) {
    return this.clientService.findOne(id,user.id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar informações de um cliente',
  })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto,@LoggedUser() user:User) {
    return this.clientService.update(id, updateClientDto,user.id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um cliente (ADM)',
  })
  remove(@Param('id') id: string,@LoggedUser() user:User) {
    return this.clientService.remove(id,user.id);
  }
}
