const fetch = require('node-fetch');
const moment = require('moment');

const endpoint = 'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';
const method = {method: 'get'};

const getUsers = () => {
    return fetch(endpoint, method)
    .then(response => response.json())
    .catch((err) =>{
        console.log('Error:' , err);
        logOut.error(` - La data tuvo un error`);
    })
}

class UsersCtrl  {
    async getUsers(req, res){
        const users = await getUsers();
       
        for(let i = 0; i < users.users.length; i ++){
            let user = users.users[i];
            if(user.is_active){
               user.age = moment().diff(user.birthday, 'years');
            }
        }
        res.status(200).json(users);
    }
}

module.exports = UsersCtrl;

