'use strict';
const InternalUsersData = require("../create/InternalUsersData");
console.log(InternalUsersData);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('internalusers', InternalUsersData);
  },
  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('internalusers',{}, null);
  }
};
