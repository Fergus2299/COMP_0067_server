const axios = require('axios');
const db = require("../models");
const InternalUsers = db.InternalUsers;

  exports.externalUserBoard = (req, res) => {
    res.status(200).send("External User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };

  const client_secret = '30d6d46249ee2f35f2f4a2d3fe7fc29e7f80eb8e78a962e7c69aac6050cd557c'
  
  exports.receiveInfo = async (req,res)=> {
    try {
      const code = req.query.code 
      console.log(req.query);
      const tokendata = await axios.get('https://uclapi.com/oauth/token',{
        params: {client_secret,
                code: req.query.code,
                client_id: req.query.client_id}
      })
      console.log(tokendata.data);
      const result = await axios.get('https://uclapi.com/oauth/user/data',
      {
        params:{
          client_secret,
          token:tokendata.data.token
        }
      })

      const queryresult = await InternalUsers.findOne(
        {where: {email: result.data.email}}
      )


      res.status(200).send({InternalUserType: queryresult? queryresult.dataValues.InternalUserType:null});
    } catch (error) {
      console.log(error)
    }
    
    
    
    // console.log(code) https://uclapi.com/oauth/token
    
    
  }
  