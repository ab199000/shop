const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'shop',
    'postgres',
    '1234',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)