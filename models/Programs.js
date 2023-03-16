module.exports = (sequelize, DataTypes) => {
    const Programs = sequelize.define("Programs", {
        name: {
            type: DataTypes.STRING,
        },

    }, {timestamps:false});
    return Programs;
};