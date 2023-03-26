module.exports = (sequelize, DataTypes) => {
    const Companies = sequelize.define("Companies", {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        address: {
            type: DataTypes.STRING,
            allowNull:false
        },
        industry: {
            type: DataTypes.STRING,
            allowNull:false
        },
        overview: {
            type: DataTypes.STRING,
            allowNull:false
        },
        companyEmail: {
            type: DataTypes.STRING,
            allowNull:false
        },
    }, {timestamps:false});
    Companies.associate = (models) => {
        Companies.hasMany(models.ExternalUsers)
    }


    return Companies;
};