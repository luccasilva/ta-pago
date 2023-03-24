import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserInterface } from '../../interfaces';
import Participation from './participation';
import Exercise from './exercise';
import Record from './record';

@Table({
  tableName: "users",
})
export default class User extends Model<UserInterface> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  updatedAt: Date;

  @HasMany(() => Participation)
  participations: Participation[];

  @HasMany(() => Exercise)
  exercises: Exercise[];

  @HasMany(() => Record)
  records: Record[];

  constructor(values?: any, options?: any) {
    super(values, options);
    this.userId = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.participations = [];
    this.exercises = [];
    this.records = [];
  }
}
