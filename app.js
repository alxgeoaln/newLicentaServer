var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require("morgan");
const cors = require('cors');
mongoose.connect('mongodb://galin:mcwtuyokzmn1@ds117311.mlab.com:17311/lienta-db');
// mongoose.connect('mongodb://localhost/licenta2017');

//Init App
var app = express();

app.set('view engine', 'html');
app.use(cors());
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
var index = require('./routes/index');
var register = require('./routes/register');
var login = require('./routes/login');
var todo = require('./routes/todo');
var contact = require('./routes/contact');
var sendLocation = require('./routes/sendLocation');
var getRequests = require('./routes/dispatch/getRequests');

app.use('/', index);
app.use('/register', register);
app.use('/login', login);
app.use('/todo', todo);
app.use('/contact', contact);
app.use('/sendLocation', sendLocation);

//region Dispatch
app.use('/getRequests', getRequests);
//endregion

//Set Port


app.set('port', (process.env.PORT || 3000));


app.listen(app.get('port'), function () {
    {
        console.log("Server started on port " + app.get('port'));
    }
});