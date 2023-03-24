'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('participations', {
      participationId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'userId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      groupId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'groups',
          key: 'groupId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      weekGoal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      currentWeekScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      totalScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('participations');
  }
};
