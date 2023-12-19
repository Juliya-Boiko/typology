"use client";
import styles from "./subscribeForm.module.css";
import Arrow from "../../../../public/icons/arrow.svg";
import Check from "../../../../public/icons/check.svg";
import { Formik, Form, Field } from 'formik';
import { subscribeSchema } from "../../services/utils/yup";

export const SubscribeForm = () => {

  const submitHandler = (values, errs) => {
    console.log(errs);
  };

  return (
    <Formik
      initialValues={{ email: "", agreement: false }}
      validationSchema={subscribeSchema}
    >
      {({ values, errors, touched, isValid, dirty, handleChange, resetForm }) => (
        <Form className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler(values, errors);
          }}
        >
          <h6 className={styles.title}>Newsletter</h6>
          <div className={styles.inputWrapper}>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="enter email"
              className={styles.input}
            />
            <button
              type="submit"
              disabled={!isValid || !dirty}
              className={styles.button}
            >
              <Arrow fill="inherit" className={styles.icon} />
            </button>
            {errors.email ? <span className={styles.inputError}>*{errors.email}</span> : null}
          </div>
          
          <label htmlFor="agreement" className={styles.checkboxWrapper}>
            <Field
              type="checkbox"
              name="agreement"
              id="agreement"
              className={styles.hiddenCheckbox}
            />
            <span className={`${styles.customCheckbox} ${values.agreement ? styles.customCheckboxChecked : ''}`}>
              {values.agreement && <Check />}
            </span>
            <span className={`${errors.agreement && touched.agreement ? styles.agreementError : ''}`}>YES I&apos;D LIKE TO RECEIVE THE TYPOLOGY NEWSLETTER. I UNDERSTAND THAT YOU WON&apos;T SHARE MY EMAIL WITH THIRD PARTIES.</span>
          </label>
        </Form>
      )}
    </Formik>
  );
};