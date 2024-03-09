const express = require('express');//call express 
const cors = require('cors')
const app = express();// create app variable instance of an express 
app.use(cors())
const db = require('./models')
app.use(express.json())// this will allow editing json
//Routers
const postRequest = require('./Routes/Posts');
app.use('/posts', postRequest)

// Serve static files from the 'upload' directory
app.use(express.static('upload'));


db.sequelize.sync().then(() => {
    app.listen(4001, () =>  {
        console.log('the server is running')
    })// trying to run server in a port
})
 