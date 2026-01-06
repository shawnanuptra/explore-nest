import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { Cat } from './cats.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Cat])],
  providers: [CatsService, CatsResolver],
})
export class CatsModule {}
