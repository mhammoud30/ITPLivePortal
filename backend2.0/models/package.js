'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Package.hasMany(models.Log_package, {foreignKey: 'packageID', as: 'log_package'})
      
    }
  }
  Package.init({
    platform: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deliverable: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'package',
    modelName: 'Package',
  });
  return Package;
};