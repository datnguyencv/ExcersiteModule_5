import { useEffect, useState } from "react";
import * as PostService from "../service/PostService";

export default function ListPost() {
  const [posts, setPosts] = useState([]);
  const [idDelete, setIdDelete] = useState(null);
  const [nameDelete, setNameDelete] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      let rs = await PostService.getAll();
      setPosts(rs);
    };
    fetchPost();
  }, []);

  const deleteHandler = (id, name) => {
    setIdDelete(id);
    setNameDelete(name);
  };

  const deleteHandlerAction = () => {
    PostService.remove(idDelete)

  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Post List</h1>
      <a href="/create" class="btn btn-primary">
        Create New Posts <span class="badge bg-danger">*</span>
      </a>
      <div className="table-responsive-sm">
        <table className="table table-primary">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Category</th>
              <th>Time</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.slug}</td>
                <td>{value.category}</td>
                <td>{value.updatedAt}</td>
                <td>
                  <a
                    className="btn btn-sm btn-primary"
                    href={`edit/${value.id}`}
                  >
                    Edit
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalId"
                    onClick={deleteHandler(value.id, value.title)}
                  >
                  
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="container-fluid">Do you want delete <span className="text-danger">{nameDelete}</span> ?</div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
