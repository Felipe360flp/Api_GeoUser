import { Body,Controller,Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus,UseGuards, UseInterceptors, UploadedFile} from '@nestjs/common';
import { ApiTags,ApiOperation,ApiBearerAuth} from '@nestjs/swagger';
import { CreateUserDto } from './dto/users-create.dto';
import {UpdateUserDto} from './dto/users-update.dto';
import { User } from './entities/users.entity';
import { UserService } from './service.users';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';

@ApiTags("User")
@Controller("User")
export class UserController{
  constructor(private userService: UserService){}


  @ApiTags("User")
  @Get('/all')
  @ApiOperation({
    summary: 'Localizar todos os usuários',
  })
  findAll(){
    return this.userService.findAll();
  }

  @ApiTags("User")
  @Get("/:id")
  @ApiOperation({
    summary: 'Localizar um usuário',
  })
  findOne(@Param("id") Id:string,){
    return this.userService.findById(Id)
  }

  @ApiTags("User")
  @Post()
  @ApiOperation({
    summary: 'Adicionar um usuário',
  })
  create(@Body() createUserDto: CreateUserDto) {

    if(
      !createUserDto.name ||
      !createUserDto.email ||
      !createUserDto.password||
      !createUserDto.cpf_cnpj
      ){
        return console.log("it is necessary to fill in all the fields!")
      }
      else{
      return this.userService.create(createUserDto);
      }
  }

  @ApiTags("Users")
  @Patch('/:id')
  @ApiOperation({
    summary: 'Alterar dados de um usuário',
  })

  update(@Body() dto: UpdateUserDto,@LoggedUser() user:User){
    return this.userService.update(dto,user);
  }

  @ApiTags("User")
  @Delete('/:id')
      @ApiOperation({
        summary: 'Deletar um usuário',
      })
      @HttpCode(HttpStatus.NO_CONTENT)
      delete(@Param('id') id: string) {
      this.userService.delete(id);
  }

}


