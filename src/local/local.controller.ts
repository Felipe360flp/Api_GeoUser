import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LocalService } from './local.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags("Local")
@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um novo endereço referente a empresa',
  })
  create(@Body() createLocalDto: CreateLocalDto,@LoggedUser() user:User) {
    return this.localService.create(createLocalDto,user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Localizar todos os Endereços',
  })
  findAll(@LoggedUser() user:User) {
    return this.localService.findAll(user.id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Localizar um endereço através do id',
  })
  findOne(@Param('id') id: string,@LoggedUser() user:User) {
    return this.localService.findOne(id,user.id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um endereço',
  })
  update(@Param('id') id: string, @Body() updateLocalDto: UpdateLocalDto,@LoggedUser() user:User) {
    return this.localService.update(id, updateLocalDto,user.id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um endereço cadastrado',
  })
  remove(@Param('id') id: string,@LoggedUser() user:User) {
    return this.localService.remove(id,user.id);
  }
}
