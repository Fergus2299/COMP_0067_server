// there are many more datapoints we need to store on the projects,
// this is just the beginning

// also for now only the external users can make projects
// we need to ask wei about this
module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define("Projects", {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        status: {
            type: DataTypes.STRING,
            allowNull:false
        },
        field1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        field2: {
            type: DataTypes.STRING,
            allowNull:true
        },
        description: {
            type: DataTypes.STRING,
            allowNull:true
        },
        fileAddress: {
            type: DataTypes.STRING,
            allowNull:true
        },
    }, {timestamps:false});
    Projects.associate = (models) => {
        Projects.belongsTo(models.ExternalUsers, {
            onDelete: "CASCADE",
        })
    }
    return Projects;
};