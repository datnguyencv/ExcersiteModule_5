import axios from "axios";
export const getAll = async () => {
  try {
    let rs = await axios.get("http://localhost:8080/posts");
    return rs.data;
  } catch (error) {
    console.log(error);
  }
};

export const findById = async (id) => {
  try {
    let rs = await axios.get(`http://localhost:8080/posts/${id}`);
    return rs;
  } catch (error) {
    console.log(error);
  }
};

export const remove = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/posts/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const create = async (post) => {
  try {
    await axios.post(`http://localhost:8080/posts`, { ...post });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (posts) => {
  try {
    await axios.put(`http://localhost:8080/posts/${posts.id}`, { ...posts });
  } catch (error) {
    console.log(error);
  }
};
