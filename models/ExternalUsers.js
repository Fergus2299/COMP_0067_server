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
            allowNull:true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull:true
        },
        subject: {
            type: DataTypes.STRING,
            allowNull:true
        },
        // company: {
        //     type: DataTypes.STRING,
        //     allowNull:true
        // },
    }, {timestamps:false});

    ExternalUsers.associate = (models) => {
        ExternalUsers.belongsTo(models.Companies, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            },

        })
    }
    ExternalUsers.associate = (models) => {
        ExternalUsers.hasMany(models.Projects)
    }
    return ExternalUsers;
};