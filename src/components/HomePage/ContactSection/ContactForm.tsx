import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
const ContactForm = () => {
  const [togglePolicy, setTogglePolicy] = useState(false);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        description: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        description: Yup.string().required("Required"),
      })}
      onSubmit={async (values, { resetForm }) => {
        try {
          await axios.post(
            "https://en.martatorre.dev/gravityformsapi/forms/2/submissions",
            {
              input_2_1: values.name,
              input_2_2: values.email,
              input_2_3: values.description,
            }
          );
          resetForm();
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {() => (
        <Form className="w-full max-w-xl mx-auto mt-12">
          <div className="flex flex-wrap justify-between mb-8 xs:flex-nowrap gap-x-8">
            <div className="flex flex-col items-start w-full gap-2 ">
              <label className="text-white">
                Name <span className="text-appGreen">*</span>
              </label>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border outline-none border-appBlue focus:border-appGreen"
              />
              <span className="text-sm text-red-500">
                <ErrorMessage name="name" />
              </span>
            </div>
            <div className="flex flex-col items-start w-full gap-2 ">
              <label className="text-white">
                Email <span className="text-appGreen">*</span>
              </label>
              <Field
                name="email"
                type="text"
                placeholder="Email"
                className="w-full px-3 py-2 border outline-none border-appBlue focus:border-appGreen"
              />
              <span className="text-sm text-red-500">
                <ErrorMessage name="email" />
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-start w-full gap-2 ">
              <label className="text-white">
                Message <span className="text-appGreen">*</span>
              </label>
              <Field
                as="textarea"
                name="description"
                rows={10}
                className="w-full px-3 py-2 border outline-none border-appBlue focus:border-appGreen"
              />
              <span className="text-sm text-red-500">
                <ErrorMessage name="description" />
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-2 mt-2">
            <input
              type="checkbox"
              className="accent-appGreen"
              checked={togglePolicy}
              onChange={() => setTogglePolicy((prev) => !prev)}
            />
            <label className="text-white">
              I have read and accept the
              <a className="ml-1 underline cursor-pointer text-appGreen hover:bg-appGreen hover:text-black">
                privacy policy
              </a>
              .<span className="text-appGreen">*</span>
            </label>
          </div>
          <div className="flex justify-end mt-2">
            <button
              disabled={!togglePolicy}
              className="px-8 py-2 uppercase transition bg-appGreen hover:bg-appBlue hover:text-white disabled:hover:bg-gray-100 disabled:hover:text-black disabled:bg-gray-100"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
