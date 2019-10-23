const express = require('express');
const endpoint = 'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';
const method = {method: 'get'};


const getUsers = (endpoint, method)=>{
    return fetch(endpoint, method)
    .then(response => response.json())
    .catch((err) =>{
        console.log('Error:' , err);
        logOut.error(` - La data tuvo un error`);
    })
}


module.exports = getUsers;