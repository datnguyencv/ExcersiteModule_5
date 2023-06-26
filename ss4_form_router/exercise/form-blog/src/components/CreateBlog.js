import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as BlogService from "../service/BlogServices";
import { useNavigate } from "react-router-dom";

export function CreateBlog() {
  const currentDate = new Date();
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          content: "",
          category: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Not is required"),
          content: Yup.string().required("Not is required"),
          category: Yup.string().required("Not is required"),
        })}
        onSubmit={(values) => {
          const createPost = async () => {
            values.updatedAt = currentDate;
            values.slug = values.title.toLowerCase().replace(/\s+/g, "-");
            await BlogService.create(values);
            alert("Create Successful");
            navigate("/");
          };
          createPost();
        }}
      >
        <Form className="d-flex">
          <div className="col">
            <div className="mb-3">
              <label className="form-label">Title :</label>
              <Field
                type="text"
                name="title"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                component="span"
                name="title"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Content :</label>
              <Field
                type="text"
                name="content"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                component="span"
                name="content"
                className="text-danger"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category :</label>
              <Field
                type="text"
                name="category"
                className="form-control"
                aria-describedby="helpId"
              />
              <ErrorMessage
                component="span"
                name="category"
                className="text-danger"
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2 mt-4 ">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
