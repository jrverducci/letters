import axios from 'axios'

function newLetter(data){
    let url = "/node/server.js/api/letters";
    const config = {
        method: 'POST',
        data: data
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
} 

function getAll(){
    let url = "/node/server.js/api/letters";
    const config = {
        method: 'GET'
    }
    return axios(url, config)
        .then(responseSuccessHandler)
        .catch(responseErrorHandler)
}

function readByParentId(id){
    let url = "/node/server.js/api/letters/" + id;
    const config = {
        method: 'GET'
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

export {newLetter, getAll, readByParentId}