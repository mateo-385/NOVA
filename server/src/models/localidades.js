
import { DataTypes } from '../config/database/db.js'
import { sequelize } from '../config/database/db.js';


export const Localidad = sequelize.define('localidades', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    departamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "departamentos",
            key: 'id'
        }
    }
}, {
    tableName: 'localidades',
    freezeTableName: true,
    underscored: true,
});

