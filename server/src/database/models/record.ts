import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { RecordInterface } from '../../interfaces';
import User from './user';
import Exercise from './exercise';

@Table({
  tableName: "records",
})
export default class Record extends Model<RecordInterface> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  recordId: string;

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
  description: string;

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

  @HasMany(() => Exercise)
  exercises: Exercise[];

  constructor(values?: any, options?: any) {
    super(values, options);
    this.recordId = '';
    this.userId = '';
    this.user = new User();
    this.name = '';
    this.description = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.exercises = [];
  }
}
