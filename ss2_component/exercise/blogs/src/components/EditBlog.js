import { useEffect, useState } from "react";
import * as BlogService from "../services/BlogService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

export function EditBlog() {
  const [postFind, setPostFind] = useState([]);
  const param = useParams();
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleString();

  useEffect(() => {
    const findPost = async () => {
      let rs = await BlogService.findId(param.id);
      setPostFind(rs.data);
    };
    findPost();
  }, [param.id]);
  if (!postFind) {
    return null;
  }
  return (
    <>
      <h1>Edit Blog</h1>
      <Formik
        initialValues={{
          id: postFind?.id,
          title: postFind?.title,
          content: postFind?.content,
          slug: postFind?.slug,
          category: postFind?.category,
          updatedAt: postFind?.updatedAt,
        }}
        enableReinitialize={true}

        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          content: Yup.string().required("Content is required"),
          category: Yup.string().required("Content is required"),
        })}
        onSubmit={(values) => {
          const updatePost = async () => {
            values.updatedAt = currentDate;
            values.slug = values.title.toLowerCase().replace(/\s+/g, "-");
            await BlogService.update(values);
            alert("Update Successful");
            navigate("/");
          };
          updatePost();
        }}
      >
        <Form>
          <div className="mb-3">
            <Field
              type="hidden"
              className="form-control"
              name="id"
              placeholder="Please Enter here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Input Title
            </label>
            <Field
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder="Please Enter here"
            />
            <ErrorMessage
              name="title"
              component="span"
              className="form-text text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Input Content
            </label>
            <Field
              type="text"
              className="form-control"
              name="content"
              id="content"
              placeholder="Please Enter here"
            />
            <ErrorMessage
              name="content"
              component="span"
              className="form-text text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Input Category
            </label>
            <Field
              type="text"
              className="form-control"
              name="category"
              id="category"
              placeholder="Please Enter here"
            />
            <ErrorMessage
              name="category"
              component="span"
              className="form-text text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="updateAt" className="form-label">
              Input Time Update
            </label>
            <Field
              readOnly
              className="form-control"
              name="updateAt"
              id="updateAt"
              placeholder="Please Enter here"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-5 mt-2 float">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
