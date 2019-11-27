// Connect database mongo
const mongoose = require('mongoose');
const enviroment = require('../enviroments/enviroments');

/**
 * @param {string} pro = producción
 * 
 */
const urlConnection = enviroment.getConnection('prod');

mongoose.connect(urlConnection, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected mongoDB cluster'))
    .catch(err => console.console.error(err));