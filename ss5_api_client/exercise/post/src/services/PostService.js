import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (posts)=>{
    try {
        await axios.post(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`,{ ...posts })
    }catch (e) {
        console.log(e)
    }
}