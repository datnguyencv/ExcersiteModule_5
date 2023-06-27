import { Formik, Form, Field } from "formik";
import * as postsService from "../services/PostService";
import { useNavigate } from "react-router";

export function CreatePost() {
  let navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          thumbnail_url: "",
          slug: "",
          category: "",
        }}
        onSubmit={async (values) => {
          await postsService.save(values);
          alert("Them moi thanh cong");
          navigate("/");
        }}
      >
        <Form>
          <div className="container">
            <div className="col-3">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <Field name="title" type="text" className="form-control" />
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="thumbnail_url">Thumbnail_url</label>
                <Field
                  name="thumbnail_url"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="slug">Slug</label>
                <Field name="slug" type="text" className="form-control" />
              </div>
            </div>

            <div className="col-3">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <Field name="category" type="text" className="form-control" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
