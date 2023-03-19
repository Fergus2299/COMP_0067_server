module.exports = (sequelize, DataTypes) => {
    const Programs = sequelize.define("Programs", {
        name: {
            type: DataTypes.STRING,
        },

    }, {timestamps:false});
    Programs.associate = (models) => {
        Programs.hasMany(models.InternalUsers)
    }
    return Programs;
};