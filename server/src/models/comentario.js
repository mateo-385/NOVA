import { DataTypes } from '../config/database/db.js';
import { sequelize } from '../config/database/db.js';

export const Comentario = sequelize.define('comentarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publicacionId: {
        type: DataTypes.INTEGER,
        references: {
            model: "publicaciones",
            key: 'id'
        }
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: "usuarios",
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    underscored: true,
    timestamps: false
});
