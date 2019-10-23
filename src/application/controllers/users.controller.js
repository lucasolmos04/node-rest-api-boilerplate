const infrastructure = require('../../infrastucture/index.infrastucture');

class UsersCtrl  {
    async getUsers(req, res){
        const users = await infrastructure.getUsers();
        console.log(users);
    }
}

module.exports = UsersCtrl;

