const {Sequelize} = require('sequelize')

module.exports = {sequelize: new Sequelize(
    'shop',
    'postgres',
    '1234',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
    }
),
secret_key : 'key'
}

