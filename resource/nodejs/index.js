const express = require('express');
const morgan = require('morgan');

// Initiliazations
const app = express();
const { mongoose } = require('./config/database');


// Settings
app.set('port',  process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Global Variables



// Routes
app.use('/api/notification', require('./routes/notificationRouter')); 
app.use('/api/user', require('./routes/userRouter'))


// Static Files (css)



// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server worker on port ' + app.get('port'));
});