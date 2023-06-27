import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as BlogService from "../service/BlogServices";

export function DetailBlog() {
  const param = useParams();

  const [postDetail, setPostDetail] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      let rs = await BlogService.findById(param.id);
      setPostDetail(rs.data); 
    };
    getDetail();
  }, [param.id]);

  if(!postDetail) {
    return null
  }

  return (
    <>
    <h1 className="text-center">Detail Blog</h1>
      
    <Link to='/' className='btn btn-primary'>Back List</Link>
    <table className='table table-primary'>
        <thead>
        <tr>
            <th>Id</th>
            <th>{postDetail.id}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>Category</th>
            <th>{postDetail.category}</th>
        </tr>
        <tr>
            <th>Title</th>
            <th>{postDetail.title}</th>
        </tr>
        <tr>
            <th>Content</th>
            <th>{postDetail.content}</th>
        </tr>
        <tr>
            <th>Slug</th>
            <th>{postDetail.slug}</th>
        </tr>
        <tr>
            <th>Time Update</th>
            <th>{postDetail.updatedAt}</th>
        </tr>
        </tbody>
    </table>
    </>
  );
}
