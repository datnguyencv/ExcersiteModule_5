import { useState } from "react";
import * as BlogService from "../services/BlogService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import navigate, { useNavigate } from "react-router-dom";

export function CreateBlog() {
  const navigate = useNavigate();
  const [slug, setSlug] = useState("");

  const handleChangeTitle = (event) => {
    const title = event.target.value;
    const slugValue = title.toLowerCase().replace(/\s+/g, "-");
    setSlug(slugValue);
  };

  return (
    <>
      <h1>Create Blog</h1>
      <Formik
        initialValues={{
          title: "",
          content: "",
          slug: "",
          category: "",
          updatedAt: "",
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          slug: Yup.string().required("Slug is required"),
          content: Yup.string().required("Content is required"),
          category: Yup.string().required("Content is required"),
        })}
        onSubmit={(values) => {
          const createPost = async () => {
            const currentDate = new Date().toLocaleString("vi-VN", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            });
            values = { ...values, updatedAt: currentDate };
            await BlogService.create(values);
            alert("Create Successful");
            navigate("/");
          };
          createPost();
        }}
      >
        <Form>
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
              onChange={handleChangeTitle}
            />
            <ErrorMessage name="title" component='span' className="form-text text-danger"/>
          </div>
          <div className="mb-3">
            <label htmlFor="slug" className="form-label">
              Input Slug
            </label>
            <Field
              type="text"
              className="form-control"
              name="slug"
              id="slug"
              placeholder="Auto commit with Title"
              values ={slug}
              readOnly
            />
            <ErrorMessage name="slug" component='span' className="form-text text-danger"/>
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
            <ErrorMessage name="content" component='span' className="form-text text-danger"/>
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
            <ErrorMessage name="category" component='span' className="form-text text-danger"/>
          </div>
          <button type="submit" className="btn btn-primary mb-5 mt-2 float">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
