import axios from "axios"

axios.defaults.baseURL = 'https://my-json-server.typicode.com/sonpham1591996/cg-blogs';

const getAll = () => {
    return axios.get('/posts')
}

const save =(posts) => {
    return axios.post('/posts',{...posts})
}

export const postService = {
    getAll, save
}