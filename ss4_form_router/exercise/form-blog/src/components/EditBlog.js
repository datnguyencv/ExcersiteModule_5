import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as BlogService from "../service/BlogServices";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function EditBlog() {
  const currentDate = new Date();
  const navigate = useNavigate(null);
  const param = useParams();

  const [postDetail, setPostDetail] = useState([]);
  useEffect(() => {
    const metadata = async () => {
      let rs = await BlogService.findById(param.id);
      setPostDetail(rs.data); 
      console.log(rs.data);
    };
    metadata();
  }, [param.id]);

  if(!postDetail) {
    return null
  }

  return (
    <>
    <h1 className="text-center">Form Edit Blog</h1>
      <Formik
        initialValues={{
          id: postDetail.id,
          title: postDetail.title,
          slug: postDetail.slug,
          content: postDetail.content,
          category: postDetail.category,
          updateAt: postDetail.updateAt,
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Not is required"),
          content: Yup.string().required("Not is required"),
          category: Yup.string().required("Not is required"),
        })}
        onSubmit={(values) => {
          const updatePost = async () => {
            values.updateAt = currentDate;
            values.id = param.id;
            values.slug = values.title.toLowerCase().replace(/\s+/g, "-");
            await BlogService.update(values);
            alert("Update Successful");
            navigate("/");
          };
          updatePost();
        }}
      >
        <Form className="d-flex">
          <div className="col">
            <Field
              type="hidden"
              name="id"
              className="form-control"
              aria-describedby="helpId"
            />
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
              <label className="form-label">Slug :</label>
              <Field
                type="text"
                name="slug"
                readOnly
                className="form-control"
                aria-describedby="helpId"
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
            <div className="mb-3">
              <label className="form-label">Update time :</label>
              <Field
                type="text"
                name="updateAt"
                readOnly
                className="form-control"
                aria-describedby="helpId"
              />
              <button type="submit" className="btn btn-primary mb-2 mt-4 ">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
