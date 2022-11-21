import { Controller, Get, Param, Post,Res,UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { fileURLToPath } from 'url';
import { AppService } from './app.service';

<<<<<<< HEAD
@ApiTags('Api')
@Controller('Api')
=======
@ApiTags('Status')
@Controller()
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFiles() file) {
  console.log(file);
  }

  @Get(':filePath')
  seeUploadedFile(@Param('filepath')file,@Res () res){
    return res.sendfile(file,{root:'upload'});
  }
}
