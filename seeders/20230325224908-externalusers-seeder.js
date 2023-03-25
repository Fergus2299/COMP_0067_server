'use strict';

var bcrypt = require("bcrypt");
const ExternalUsersData = require("../create/ExternalUsersData");
  
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // password needs to be hashed
    var hash = await bcrypt.hash(ExternalUsersData[0].password, 10);
    ExternalUsersData[0].password = hash;
    
    return queryInterface.bulkInsert('externalusers', ExternalUsersData);
  },
  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('externalusers',{}, null);
  }
};
