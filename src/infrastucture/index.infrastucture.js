const express = require('express');
const endpoint = 'https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users';

function getEndPoint(){
    return endpoint;
}

module.exports = getEndPoint;