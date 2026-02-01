import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Scan = sequelize.define('Scan', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Path to local image/video',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'scans',
    timestamps: true,
});

export default Scan;
