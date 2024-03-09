module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,//save any image using the datatype text is much better
            allowNull:false

        }

    })
    return Posts;
}