import { Formik } from "formik";
import * as Yup from "yup";

export default function Create() {
  return (
    <>
      <Formik
        initialValues={{
          id: "",
          title: "",
          slug: "",
          category: "",
          updateAt: "",
        }}
        validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            category: Yup.string().required("Category is required"),
        })}
        onSubmit={(values) => {
            console.log(values);
            
        }}
      >
        <h1>Create</h1>
      </Formik>
    </>
  );
}
