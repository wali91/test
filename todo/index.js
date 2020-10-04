//instatiate express module
const express = require('express')

require('express-group-routes')

const cors = require('cors')

//init bodyparser
const bodyParser = require('body-parser')

//use express in app variable
const app = express()

//define the server port
const port = process.env.PORT || 5000;

app.use(cors())

//allow this app to recived incoming json request
app.use(bodyParser.json())

//Import Middleware
const {authenticated} = require('./middleware')

//Import Auth
const authController = require('./controllers/auth')

//var name_controller = require('directory file')
const todosController = require('./controllers/todos')

//use group router here
app.group('/api/v1', (router) => {

    //Auth
    router.post('/login', authController.login)

    //Todo API
    //Get All data
    router.get('/todos', authenticated, todosController.index)
    //Find One data
    router.get('/todo/:id', todosController.show)
    //Insert Data
    router.post('/todo', authenticated, todosController.store)
    //Update Data
    router.patch('/todo/:id', todosController.update)
    //delete data
    router.delete('/todo/:id', todosController.destroy)
})

//create the home route
app.get('/', (req, res) => {
    res.send('Hi DevOps!');
})

//executed port
app.listen(port, () => console.log(`Listening on port ${port}!`))