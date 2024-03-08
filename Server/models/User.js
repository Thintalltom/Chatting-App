module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        confirmPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Users;
}