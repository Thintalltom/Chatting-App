const express = require('express');//call express 
const app = express();// create app variable instance of an express 

const db = require('./models')

db.sequelize.sync().then(() => {
    app.listen(4001, () =>  {
        console.log('the server is running')
    })// trying to run server in a port
})
 