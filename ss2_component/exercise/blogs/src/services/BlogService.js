import axios from "axios";

export const getAll = async() =>{
    try{
        const rs = await axios.get(`http://localhost:8080/posts`);
        return rs.data;
    } catch (error){
        console.log(error);
    }
}

export const findId = async(id) =>{
    try{
        const rs = await axios.get(`http://localhost:8080/posts/${id}`);
        return rs;
    } catch (error){
        console.log(error);
    }
}

export const create = async(posts) =>{
    try{
        await axios.post(`http://localhost:8080/posts`, {...posts});
    } catch (error){
        console.log(error);
    }
}

export const update = async(posts) =>{
    try{
        await axios.put(`http://localhost:8080/posts/${posts.id}`, {...posts});
    } catch (error){
        console.log(error);
    }
}

export const remove = async(id) =>{
    try{
        await axios.delete(`http://localhost:8080/posts/${id}`);
    } catch (error){
        console.log(error);
    }
}

