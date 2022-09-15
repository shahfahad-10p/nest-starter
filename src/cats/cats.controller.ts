import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @HttpCode(300)
  findAll() {
    return this.catsService.findAll();
  }

  @Get('funny')
  findArray(): Observable<any[]> {
    return of(['asd', 'asdsadsa']);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log('BODY : CAT DTO : ', createCatDto);
    this.catsService.create(createCatDto);
  }
}
