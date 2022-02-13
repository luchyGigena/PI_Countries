const { DataTypes} = require('sequelize')


module.exports = (sequelize) => {
    sequelize.define('activity',{
       
        name:{
            type: DataTypes.STRING,
            unique:true,
            allowNull: false
        },
        dificultad:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        duracion:{
            type:DataTypes.INTEGER,
            allowNull: false

        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        }

    }
    
    );

}

