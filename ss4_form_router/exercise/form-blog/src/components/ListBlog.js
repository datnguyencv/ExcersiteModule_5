import * as BlogServices from "../service/BlogServices";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function ListBlog() {
  const [post, setPost] = useState([]);
  const [idDelete, setIdDelete] = useState(null);
  const [nameDelete, setNameDelete] = useState(null);

  const fetchPost = async () => {
    let rs = await BlogServices.getAll();
    setPost(rs);
    console.log(rs);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleId = (id, name) => {
    setIdDelete(id);
    setNameDelete(name);
  };

  const handleDelete = async (idDelete) => {
    await BlogServices.remove(idDelete);
    fetchPost();
    alert(`Removed ${nameDelete} successful`);
  };
  return (
    <>
      <div className="container ml-3">
        <h1 className="text-center">List Blog</h1>
        <Link className="btn btn-sm btn-primary" to={"/create"}> Create new Blog</Link>
        <div className="table-responsive-sm">
          <table className="table table-primary">
            <thead>
              <tr>
                <th>STT</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Category</th>
                <th>Content</th>
                <th>Update Time</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {post.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <NavLink to={`/detail/${data.id}`}>{data.title}</NavLink>
                  </td>
                  <td>{data.slug}</td>
                  <td>{data.category}</td>
                  <td>{data.content}</td>
                  <td>{data.updatedAt}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-primary"
                      to={`/edit/${data.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <div>
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#modalId"
                        onClick={() => handleId(data.id, data.title)}
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
                                Do you want delete
                                <span className="text-danger">
                                  {nameDelete}
                                </span>{" "}
                                ?
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
                              <button
                                type="button"
                                onClick={() => handleDelete(idDelete)}
                                className="btn btn-primary"
                              >
                                Yes
                              </button>
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
      </div>
    </>
  );
}
