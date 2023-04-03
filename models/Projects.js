// there are many more datapoints we need to store on the projects,
// this is just the beginning

// also for now only the external users can make projects
// we need to ask wei about this
module.exports = (sequelize, DataTypes) => {
    const Projects = sequelize.define("Projects", {
        orgName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        supName: {
            type: DataTypes.STRING,
            allowNull:false
        },
        supEmail: {
            type: DataTypes.STRING,
            allowNull:false
        },
        supTitle: {
            type: DataTypes.STRING,
            allowNull:false
        },
        desAbstract: {
            type: DataTypes.STRING,
            allowNull:false
        },
        challenges: {
            type: DataTypes.STRING,
            allowNull:false
        },
        dataInfo1: {
            type: DataTypes.STRING,
            allowNull:false
        },
        dataInfo2: {
            type: DataTypes.STRING,
            allowNull:false
        },        
        dataInfo3: {
            type: DataTypes.STRING,
            allowNull:false
        },        
        dataInfo4: {
            type: DataTypes.STRING,
            allowNull:false
        },        
        dataInfo5: {
            type: DataTypes.STRING,
            allowNull:false
        },
        dataProcessing: {
            type: DataTypes.STRING,
            allowNull:false
        },
        skillsRequired: {
            type: DataTypes.STRING,
            allowNull:false
        },
        desDetailed: {
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
        status: {
            type: DataTypes.STRING,
            allowNull:true
        },
        programme: {
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