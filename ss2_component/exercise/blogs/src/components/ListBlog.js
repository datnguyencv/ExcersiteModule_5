import { useEffect, useState } from "react";
import * as BlogService from "../services/BlogService";
import { Link } from "react-router-dom";

export function ListBlog() {
  const [post, setPost] = useState([]);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  
  const getPost = async () => {
    let rs = await BlogService.getAll();
    setPost(rs);
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleDeleteForm = (id) => {
    setPostIdToDelete(id);
  };
  
  const handleDelete = async (postIdToDelete) => {
    await BlogService.remove(postIdToDelete);
    alert("Delete successfully")
    getPost();
  };

  return (
    <>
      <h1 className="text-center"> Blog List</h1>
      <Link to={"/create"}> Create Blog ...</Link>
      <div className="table-responsive-sm">
        <table className="table table-light">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Category</th>
              <th>Content</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {post.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.slug}</td>
                <td>{value.category}</td>
                <td>{value.content}</td>
                <td>{value.updatedAt}</td>
                <td>
                  <Link
                    to={`/edit/${value.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                  <div>
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteForm(value.id)}
                      data-bs-toggle="modal"
                      data-bs-target="#modalId"
                    >
                      Delete
                    </button>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="modalId"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="modalTitleId"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                              Delete Box
                            </h5>
                          </div>
                          <div className="modal-body">
                            <div className="container-fluid">
                              Do you want delete its ?
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              No
                            </button>
                            <button onClick={() => handleDelete(postIdToDelete)}
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            >Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
