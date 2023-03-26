'use strict';
const Companies = require("../create/CompaniesData");
console.log(Companies);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Companies', Companies);
  },
  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Companies',{}, null);
  }
};
