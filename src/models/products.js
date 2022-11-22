import  sequelize  from "../database/database"
import { DataTypes } from "sequelize/types"

export const Product = sequelize.define("product",{
    id:{
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING(67),
        allowNull:  false,
        unique: true
    },
    prince:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categories:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        defaultValue: "Aparently we have no description to offer you, please tell us if we don´t"
    }
}, {timestamps: false})