import { Injectable } from '@nestjs/common';
import { Cat } from './cats.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { EditCatInput } from './cats.input';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat) private catModel: typeof Cat) {}

  // methods
  getAll(): Promise<Cat[]> {
    return this.catModel.findAll();
  }

  getById(id: number): Promise<Cat | null> {
    return this.catModel.findByPk(id);
  }

  getByName(name: string): Promise<Cat[] | null> {
    return this.catModel.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  }

  newCat(name: string, breed: string, owner?: string): Promise<Cat> {
    return this.catModel.create({
      name,
      breed,
      owner,
    });
  }

  async editCat(id: number, input: EditCatInput): Promise<Cat | null> {
    const [affectedCount] = await this.catModel.update(input, {
      where: { id },
    });

    if (affectedCount === 0) return null;

    return this.catModel.findByPk(id);
  }

  async deleteCat(id: number): Promise<boolean> {
    const rows = await this.catModel.destroy({
      where: {
        id,
      },
    });

    return rows > 0;
  }
}
