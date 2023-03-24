'use strict';

import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ParticipationInterface } from '../../interfaces';
import User from './user';
import Group from './group';

@Table({
  tableName: "participations",
})
export default class Participation extends Model<ParticipationInterface> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  participationId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  groupId: string;

  @BelongsTo(() => Group)
  group: Group;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  weekGoal: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  currentWeekScore: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  totalScore: number;

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

  constructor(values?: any, options?: any) {
    super(values, options);
    this.participationId = '';
    this.userId = '';
    this.user = new User();
    this.groupId = '';
    this.group = new Group();
    this.weekGoal = 0;
    this.currentWeekScore = 0;
    this.totalScore = 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
