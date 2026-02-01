import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Audit = sequelize.define('Audit', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    prevScanId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    currentScanId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'audits',
    timestamps: true,
});

export default Audit;
