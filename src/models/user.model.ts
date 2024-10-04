import {DataTypes} from 'sequelize';
import db from "../db/connection"

const UserModel = db.define('Users', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Gmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Type: {
        type: DataTypes.ENUM('tenant', 'owner', 'admin'),
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

export default UserModel;