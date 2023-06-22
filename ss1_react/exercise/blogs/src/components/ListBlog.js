import { posts } from "../data/db";

export function ListBlogs() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">Blog List</h1>
        <div className="table-responsive-sm ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titles</th>
                <th>Slug</th>
                <th>Category</th>
                <th>Times</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.slug}</td>
                  <td>{data.category}</td>
                  <td>{data.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
