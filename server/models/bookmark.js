'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bookmark.belongsTo(models.Literatures, {
        foreignKey: {
          name: 'literatureId',
        },
        as: 'literature',
      });
    }
  }
  Bookmark.init(
    {
      userId: DataTypes.INTEGER,
      literatureId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Bookmark',
    }
  );
  return Bookmark;
};
