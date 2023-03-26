'use strict';
const projectsData = require("../create/ProjectsData");
console.log(projectsData);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Projects', projectsData);
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Projects',{}, null);
  }
};
