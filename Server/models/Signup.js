module.exports = (sequelize, DataTypes) => {

    const Signup = sequelize.define('Signup', {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return Signup;
}