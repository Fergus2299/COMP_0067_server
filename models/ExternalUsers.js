module.exports = (sequelize, DataTypes) => {
    const ExternalUsers = sequelize.define("ExternalUsers", {
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
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

    return ExternalUsers;
};