'use strict';
const fs = require('fs')

module.exports = {
    up: (queryInterface, Sequelize) => {
        const dataBook = JSON.parse(fs.readFileSync('./data/books.json', 'utf8'))

        dataBook.forEach(element => {
            element.createdAt = new Date()
            element.updatedAt = new Date()
        });

        return queryInterface.bulkInsert('Products', dataBook, {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {})
    }
};