'use strict';
const programsData = require("../create/ProgramsData");
console.log(programsData);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Programs', programsData);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Programs',{}, null);
  }
};
