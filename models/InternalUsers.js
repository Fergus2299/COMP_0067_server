module.exports = (sequelize, DataTypes) => {
    const InternalUsers = sequelize.define("InternalUsers", {
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull:false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull:false
        },
        subject: {
            type: DataTypes.STRING,
            allowNull:false
        },
    });

    return InternalUsers;
};