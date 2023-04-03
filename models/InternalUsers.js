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
        InternalUserType:{
            type: DataTypes.BIGINT
        }
    }, {timestamps:false});
    InternalUsers.associate = (models) => {
        InternalUsers.belongsTo(models.Programs, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },

        })
    }

    return InternalUsers;
};