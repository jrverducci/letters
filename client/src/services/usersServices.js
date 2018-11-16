import axios from 'axios'

function create(data){
    let url = "/node/server.js/api/users";
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
} 

function login(data){
    let url = "/node/server.js/api/users/login";
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function logout(){
    let url = "/node/server.js/api/users/logout";
    const config = {
        method: 'GET'
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function emailCheck(email){
    let url = "/node/server.js/api/users/email";
    const config = {
        method: 'POST',
        data: email
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function getAll(){
    let url = "/node/server.js/api/users";
    const config = {
        method: 'GET'
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
} 

function getById(id){
    let url = "/node/server.js/api/users/" + id;
    const config = {
        method: 'GET'
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function update(id, data){
    let url = "/node/server.js/api/users/" + id;
    const config = {
        method: 'PUT',
        data: data
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
} 

function del(id){
    let url = "/node/server.js/api/users/" + id;
    const config = {
        method: 'DELETE'
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

const responseSuccessHandler = response => {
    console.log(response);
    return response.data;
}

const responseErrorHandler = error => {
    console.log(error)
    if (error && error.response && error.response.data && error.response.data.errors){
        console.error(error.response.data.errors);
    }
    return Promise.reject(error);
}

export {create, login, logout, emailCheck, getAll, getById, update, del}