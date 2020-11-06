'use strict';
const fs = require('fs')

module.exports = {
    up: (queryInterface, Sequelize) => {
        const dataBanner = JSON.parse(fs.readFileSync('./data/banners.json', 'utf8'))

        dataBanner.forEach(element => {
            element.createdAt = new Date()
            element.updatedAt = new Date()
        });

        return queryInterface.bulkInsert('Banners', dataBanner, {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Banners', null, {})
    }
};