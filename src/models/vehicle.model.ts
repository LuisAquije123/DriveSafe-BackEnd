import { DataTypes } from "sequelize";
import db from "../db/connection";

const VehicleModel = db.define('Vehicles', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  Brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  MaximumSpeed: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Consumption: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Dimensions: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Weight: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  CarClass: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Transmission: {
    type: DataTypes.STRING,
    allowNull: false
  },
  TimeType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  RentalCost: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  PickUpPlace: {
    type: DataTypes.STRING,
    allowNull: false
  },
  UrlImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  RentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  OwnerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
});

export default VehicleModel;