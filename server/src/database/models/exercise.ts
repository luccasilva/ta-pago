import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ExerciseInterface } from '../../interfaces';
import User from './user';
import Record from './record';

@Table({
  tableName: "exercises",
})
export default class Exercise extends Model<ExerciseInterface> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  exerciseId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  weight: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  repetitions: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  breakTime: string;

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

  @ForeignKey(() => Record)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  recordId: string;

  @BelongsTo(() => Record)
  record: Record;

  constructor(values?: any, options?: any) {
    super(values, options);
    this.exerciseId = '';
    this.userId = '';
    this.user = new User();
    this.name = '';
    this.weight = '';
    this.repetitions = '';
    this.breakTime = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.record = new Record();
    this.recordId = '';
  }
}
