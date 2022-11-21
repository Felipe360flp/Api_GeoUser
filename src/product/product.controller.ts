import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@UseGuards(AuthGuard())
@ApiBearerAuth()
@ApiTags("Product")
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({
    summary: 'Para cadastrar um Produto',
  })
  create(@Body() createProductDto: CreateProductDto,@LoggedUser() user:User) {
    return this.productService.create(createProductDto,user.id);
  }

  @Get()
  @ApiOperation({
    summary: 'Para listar todos os produtos',
  })
  findAll(@LoggedUser() user:User) {
    return this.productService.findAll(user.id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Para localizar um dos produtos cadastrados',
  })
  findOne(@Param('id') id: string,@LoggedUser() user:User) {
    return this.productService.findOne(id,user.id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Para alterar dados de um produto cadastrado',
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto,@LoggedUser() user:User) {
    return this.productService.update(id, updateProductDto,user.id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Para deletar um produto',
  })
  remove(@Param('id') id: string,@LoggedUser() user:User) {
    return this.productService.remove(id,user.id);
  }
}
