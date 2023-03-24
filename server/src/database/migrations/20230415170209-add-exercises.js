'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exercises', {
      exerciseId: {
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
      recordId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'records',
          key: 'recordId',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      repetitions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      breakTime: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('exercises');
  }
};
