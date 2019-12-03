import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table
} from "sequelize-typescript";

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: true,
  tableName: "chefs"
})
export class Chef extends Model<Chef> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @HasMany(() => Restaurant)
  restaurants!: Restaurant[];
}

@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] }
  },
  paranoid: true,
  tableName: "restaurants"
})
export class Restaurant extends Model<Restaurant> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.INTEGER.UNSIGNED
  })
  @ForeignKey(() => Chef)
  chefId!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @BelongsTo(() => Chef)
  chef!: Chef;
}

export default [Chef, Restaurant];
