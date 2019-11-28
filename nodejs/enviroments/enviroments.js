// Generate connection development or producction 
enviromentCtrl = {};

enviromentsDataBaseRemote = {
    'mongoDB': 'bpusDB',
    'userDB': 'bpus',
    'passwordDB': 'bpus123456',
};

enviromentsDataBaseLocal = {
    'server': 'localhost',
    'mongoDB': 'bpusDB',
    'userDB': '',
    'passwordDB': '',
};

enviromentCtrl.getConnection = (flat) => {
    let dataConnection = {};
    dataConnection.url = 'mongodb://'+enviromentsDataBaseLocal.server+'/'+enviromentsDataBaseLocal.mongoDB;
    dataConnection.messageConnection = 'DB is connected mongoDB Localhost';
    if (flat == 'prod') {
        dataConnection.url ='mongodb+srv://'+enviromentsDataBaseRemote.userDB+':'+enviromentsDataBaseRemote.passwordDB+'@cluster0-mulwb.mongodb.net/'+enviromentsDataBaseRemote.mongoDB+'?retryWrites=true&w=majority';
        dataConnection.messageConnection = 'DB is connected mongoDB cluster';
    }
    return dataConnection;
};


module.exports = enviromentCtrl;