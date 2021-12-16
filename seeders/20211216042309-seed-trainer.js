'use strict';
const fs = require("fs")

let data = JSON.parse(fs.readFileSync("./trainers.json","utf-8"))
// console.log(data);
for ( let i = 0 ; i < data.length;i++){
  data[i].createdAt = new Date()
  data[i].updatedAt = new Date()
}
// console.log(data);

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Trainers',data, {});
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Trainers', null, {});
  }
};
