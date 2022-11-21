import { Body,Controller,Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus,UseGuards, UseInterceptors, UploadedFile} from '@nestjs/common';
import { ApiTags,ApiOperation,ApiBearerAuth} from '@nestjs/swagger';
import { CreateUserDto } from './dto/users-create.dto';
import {UpdateUserDto} from './dto/users-update.dto';
import { User } from './entities/users.entity';
import { UserService } from './service.users';
import { AuthGuard } from '@nestjs/passport';
import { isAdmin } from 'src/Utils/isAdmin.utils';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

<<<<<<< HEAD
@ApiTags("User")
@Controller("User")
=======

@Controller()
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
export class UserController{
  constructor(private userService: UserService){}


  @ApiTags("Users")
  @Get('/all')
  @ApiOperation({
    summary: 'Localizar todos os usuários',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findAll(){
    return this.userService.findAll();
  }

  @ApiTags("Users")
  @Get("/:id")
  @ApiOperation({
    summary: 'Localizar um usuário',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findOne(@Param("id") Id:string,){
    return this.userService.findById(Id)
  }

  @ApiTags("Auth")
  @Post("/ADM")
  @ApiOperation({
    summary: 'Adicionar um usuário de nível Admin',
  })
  createADM(@Body() createUserDto: CreateUserDto) {
    return this.userService.createADM(createUserDto);
  }

  @ApiTags("Auth")
  @Post('create-user')
  @ApiOperation({
    summary: 'Adicionar um usuário',
  })
  create(@Body() createUserDto: CreateUserDto) {
<<<<<<< HEAD

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

  @IsUppercase()
  @Patch(':id')
=======
    return this.userService.create(createUserDto);
  }

  @ApiTags("Users")
  @Patch('/:id')
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
  @ApiOperation({
    summary: 'Alterar dados de um usuário',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@Body() dto: UpdateUserDto,@LoggedUser() user:Partial<User>){
    return this.userService.update(dto,user);
  }

  @ApiTags("Users")
  @Delete('/:id')
      @ApiOperation({
        summary: 'Deletar um usuário',
      })
      @HttpCode(HttpStatus.NO_CONTENT)
      @UseGuards(AuthGuard())
      @ApiBearerAuth()
      delete(@Param('id') id: string,@LoggedUser() user:User) {
      this.userService.delete(id);
  }


  @Post('upload/file')
  @ApiOperation({
    summary: 'Fazer upload de arquivos',
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log('file',file);
}

}


