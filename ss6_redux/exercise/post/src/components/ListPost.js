import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllPost } from "../redux/action/posts";

export function ListPost() {
const post =useSelector(state=>state.posts) ;
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost())
  }, []);

  return (
    <>
      <NavLink to="/create" className="btn btn-primary">
        Create
      </NavLink>
      <h1 className="text-center">Post List</h1>
      <table className="table table-striped ">
        <thead className="table-danger">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Thumbnail_url</th>
            <th>Slug</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {post.map((value, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{value.title}</td>
              <td>{value.thumbnail_url}</td>
              <td>{value.slug}</td>
              <td>{value.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
