const express = require('express')
const {sequelize} = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routers/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')



const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/apii', router)


app.use(errorHandler)

const start = async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>{console.log(`server start on port ${5000}`);})
    } catch (error) {
        console.log(error);
    }
}

start()