import { Injectable } from '@nestjs/common';
import { Cat } from './cats.model';

@Injectable()
export class CatsService {
  // in memory example
  private cats: Cat[] = [
    {
      id: 1,
      breed: 'Scottish Fold',
      name: 'Spongebob',
      owner: 'Shawn',
    },
  ];

  // methods
  getAll(): Cat[] {
    return this.cats;
  }

  getById(id: number): Cat[] {
    const cat = this.cats.find((cat) => cat.id === id);
    return cat ? [cat] : [];
  }

  getByName(name: string): Cat[] {
    console.log(this.cats.filter((cat) => cat.name.includes(name)) ?? []);
    return this.cats.filter((cat) => cat.name.includes(name)) ?? [];
  }

  newCat(name: string, breed: string, owner?: string): Cat {
    const newCat: Cat = {
      id: this.cats.length + 1,
      name,
      breed,
      owner,
    };

    this.cats.push(newCat);
    return newCat;
  }
}
