import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { GroupInterface } from '../../interfaces';
import Participation from './participation';

@Table({
  tableName: "groups",
}) export default class Group extends Model<GroupInterface> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  groupId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  tag: string;

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

  @HasMany(() => Participation)
  participations: Participation[];

  constructor(values?: any, options?: any) {
    super(values, options);
    this.groupId = '';
    this.tag = '';
    this.name = '';
    this.description = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.participations = [];
  }
}