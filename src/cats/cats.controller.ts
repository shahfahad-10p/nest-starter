import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatSchema } from './interfaces/cat.interface';
import { JoiValidationPipe } from './pipes/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @HttpCode(300)
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':age')
  findWithAge(@Param('age', ParseIntPipe) age: number) {
    return this.catsService.findOne(age);
  }

  @Get('funny')
  findArray(): Observable<any[]> {
    // return of(['asd', 'asdsadsa']);
    // throw new HttpException('Not Found', HttpStatus.NOT_FOUND);

    throw new HttpException(
      {
        status: 400,
        error: 'Bad cookie',
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  @Post()
  @UsePipes(new JoiValidationPipe(CatSchema))
  create(@Body() createCatDto: CreateCatDto) {
    console.log('BODY : CAT DTO : ', createCatDto);
    return this.catsService.create(createCatDto);
  }
}
