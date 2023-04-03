const axios = require('axios');
const db = require("../models");
const projects = db.Projects;

  exports.receiveForm = async (req, res) => {
    try {
        const textFieldForm = req.body
        console.log(req.body)
        const jjjj = await projects.create({
            orgName:textFieldForm.organizationName,
            supName:textFieldForm.supervisor,
            supTitle:textFieldForm.supervisorJobTitle,
            supEmail:textFieldForm.emailaddress,
            desAbstract:textFieldForm.desAbstract,
            challenges:textFieldForm.dataChallenges,
            dataProcessing:textFieldForm.processingInfo,
            skillsRequired:textFieldForm.skillRequired,
            desDetailed:textFieldForm.desDetail,
            dataInfo1:textFieldForm.dataInfo1, 
            dataInfo2:textFieldForm.dataInfo2,
            dataInfo3:textFieldForm.dataInfo3,
            dataInfo4:textFieldForm.dataInfo4,
            dataInfo5:textFieldForm.dataInfo5,
            field1:textFieldForm.field1,
            field2:textFieldForm.field2,
            programme:textFieldForm.programme,
            fileAddress:textFieldForm.fileAddress,
            status:'Started' 
        })
        console.log(jjjj)
    } catch (error) {
        console.log(error)
    }
    res.status(200).send({success:1});
  };

  exports.editAfterSave = async (req, res) => {
    try {
        const textFieldForm = req.body
        await projects.update({
            orgName:textFieldForm.organizationName,
            supName:textFieldForm.supervisor,
            supTitle:textFieldForm.supervisorJobTitle,
            supEmail:textFieldForm.emailaddress,
            desAbstract:textFieldForm.desAbstract,
            challenges:textFieldForm.dataChallenges,
            dataProcessing:textFieldForm.processingInfo,
            skillsRequired:textFieldForm.skillRequired,
            desDetailed:textFieldForm.desDetail,
            dataInfo1:textFieldForm.dataInfo1, 
            dataInfo2:textFieldForm.dataInfo2,
            dataInfo3:textFieldForm.dataInfo3,
            dataInfo4:textFieldForm.dataInfo4,
            dataInfo5:textFieldForm.dataInfo5,
            field1:textFieldForm.field1,
            field2:textFieldForm.field2,
            programme:textFieldForm.programme,
            fileAddress:textFieldForm.fileAddress, 
        },{where:{
            id:textFieldForm.id}
        })
        
        
    } catch (error) {
        
    }
    res.status(200).send({success:1});
  };

  exports.submitProject = async (req, res) => {
    try {
        const textFieldForm = req.body
        await projects.update({
            orgName:textFieldForm.organizationName,
            supName:textFieldForm.supervisor,
            supTitle:textFieldForm.supervisorJobTitle,
            supEmail:textFieldForm.emailaddress,
            desAbstract:textFieldForm.desAbstract,
            challenges:textFieldForm.dataChallenges,
            dataProcessing:textFieldForm.processingInfo,
            skillsRequired:textFieldForm.skillRequired,
            desDetailed:textFieldForm.desDetail,
            dataInfo1:textFieldForm.dataInfo1, 
            dataInfo2:textFieldForm.dataInfo2,
            dataInfo3:textFieldForm.dataInfo3,
            dataInfo4:textFieldForm.dataInfo4,
            dataInfo5:textFieldForm.dataInfo5,
            field1:textFieldForm.field1,
            field2:textFieldForm.field2,
            programme:textFieldForm.programme,
            fileAddress:textFieldForm.fileAddress,
            status:"Submitted & Under Review" 
        },{where:{
            id:textFieldForm.id}
        })
        
        
    } catch (error) {
        
    }
    res.status(200).send({success:1});
  };

