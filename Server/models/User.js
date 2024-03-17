module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
        firstName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,//save any image using the datatype text is much better
            allowNull:false,

        }
    })
    return Users;
}