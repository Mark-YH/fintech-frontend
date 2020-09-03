import * as types from './mutations_type.js'
import axios from "axios";

export const actionCustomMA = ({commit}, form) => {
    // const url = 'http://127.0.0.1:8000/api/ma/custom/'
    const url = 'https://fintech-114.herokuapp.com/api/ma/custom/'

    axios({
        url: url,
        method: 'post',
        responseType: 'json',
        data: JSON.stringify(form),
    })
        .then(function (response) {
            console.log("response status = " + response)
            console.log("response data = " + response.data)
            commit(types.UPDATE, response.data)
        })
}

export const actionRecommendMA = ({commit}, form) => {
    // const url = 'http://127.0.0.1:8000/api/ma/recommend/'
    const url = 'https://fintech-114.herokuapp.com/api/recommend/'

    axios({
        url: url,
        method: 'post',
        responseType: 'json',
        data: JSON.stringify(form),
    })
        .then(function (response) {
            console.log("response status = " + response)
            console.log("response data = " + response.data)
            commit(types.UPDATE, response.data)
        })
}