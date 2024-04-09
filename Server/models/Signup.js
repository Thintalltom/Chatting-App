module.exports = (sequelize, DataTypes) => {

    const signups = sequelize.define('signups', {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return signups;
}