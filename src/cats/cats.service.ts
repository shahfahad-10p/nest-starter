import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }

  findOne(age: number): Cat {
    const catToFind = this.cats.find((cat) => cat.age === age);
    return catToFind;
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
