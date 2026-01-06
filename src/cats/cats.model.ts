import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@ObjectType()
@Table({ tableName: 'cats' })
export class Cat extends Model {
  @Field(() => Int)
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare breed: string;

  @Field({ nullable: true })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare owner?: string;
}
