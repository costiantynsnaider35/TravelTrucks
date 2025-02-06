import { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./Form.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required!!!"),
  email: Yup.string().email("Invalid email").required("Email is required!!!"),
  bookingDate: Yup.date().required("Date is required!!!"),
});

const Form = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className={s.form}>
      <div className={s.formTitle}>
        <h1 className={s.formText}>Book your campervan now</h1>
        <h2 className={s.formSup}>
          Stay connected! We are always ready to help you.
        </h2>
      </div>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          toast.success("Your booking was successful!");
          setSubmitting(false);
          setStartDate(null);
          resetForm();
        }}
      >
        {({ isSubmitting, setFieldValue, isValid, touched }) => (
          <FormikForm className={s.formImputes}>
            <div className={s.formName}>
              <Field type="text" name="name" placeholder="Name*" />
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>
            <div className={s.formEmail}>
              <Field type="email" name="email" placeholder="Email*" />
              <ErrorMessage name="email" component="div" className={s.error} />
            </div>
            <div className={s.formDate}>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFieldValue("bookingDate", date);
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText="Booking date*"
                className={s.datePicker}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={s.error}
              />
            </div>
            <div className={s.formComment}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                rows="4"
              />
            </div>
            <div className={s.formBtn}>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                  if (
                    !isValid &&
                    (touched.name || touched.email || touched.bookingDate)
                  ) {
                    toast.error("Fill out the reservation form, please!");
                  }
                }}
              >
                <p className={s.btnText}>Send</p>
              </button>
            </div>
          </FormikForm>
        )}
      </Formik>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            marginTop: "50px",
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
};

export default Form;
