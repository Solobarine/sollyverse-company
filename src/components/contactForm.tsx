"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        subject: "",
        phoneNo: "",
        message: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, isSubmitting }) => (
        <Form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="grid gap-1 rounded-lg ">
            <label htmlFor="fullName">Name</label>
            <Field
              name="fullName"
              type="text"
              className="border-2 border-gray-300 outline-gray-300 px-2 py-1 rounded-lg"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-sm text-red-400"
            />
          </div>
          <div className="grid gap-1 rounded-lg ">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className="border-2 border-gray-300 outline-gray-300 px-2 py-1 rounded-lg"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-sm text-red-400"
            />
          </div>
          <div className="grid gap-1 rounded-lg ">
            <label htmlFor="phoneNo">Phone Number</label>
            <Field
              name="phoneNo"
              type="tel"
              className="border-2 border-gray-300 outline-gray-300 px-2 py-1 rounded-lg"
            />
            <ErrorMessage
              name="phoneNo"
              component="div"
              className="text-sm text-red-400"
            />
          </div>
          <div className="grid gap-1 rounded-lg ">
            <label htmlFor="email">Subject</label>
            <Field
              name="subject"
              as="select"
              className="border-2 border-gray-300 outline-gray-300 px-2 py-1 rounded-lg"
            >
              <option value="general questions">General Questions</option>
              <option value="request quote">Request Quote</option>
              <option value="software development">Software Development</option>
              <option value="others">Others</option>
            </Field>
            <ErrorMessage
              name="subject"
              component="div"
              className="text-sm text-red-400"
            />
          </div>
          <div className="grid gap-1 sm:col-span-2 rounded-lg ">
            <label htmlFor="message">Message</label>
            <Field
              name="message"
              as="textarea"
              className="border-2 border-gray-300 outline-gray-300 px-2 py-1 rounded-lg"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-sm text-red-400"
            />
          </div>
          <button
            type="submit"
            className="w-fit px-6 py-2 rounded-lg text-white bg-green-400 dark:bg-green-800 hover:shadow-md hover:shadow-slate-600"
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
