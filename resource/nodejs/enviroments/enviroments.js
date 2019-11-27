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
    var url = 'mongodb://'+enviromentsDataBaseLocal.server+'/'+enviromentsDataBaseLocal.mongoDB;
    if (flat == 'prod') {
        url ='mongodb+srv://'+enviromentsDataBaseRemote.userDB+':'+enviromentsDataBaseRemote.passwordDB+'@cluster0-mulwb.mongodb.net/'+enviromentsDataBaseRemote.mongoDB+'?retryWrites=true&w=majority';
    }
    return url;
};


module.exports = enviromentCtrl;