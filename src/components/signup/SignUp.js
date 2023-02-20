import React from "react";

import {Formik, Form, Field} from "formik";
import {object, string} from "yup";

import "./SignUp.scss";

const SignUp = () => {
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
    }
    const validationSchema = object({
        firstname: string().required("This field is required"),
        lastname: string().required("This field is required"),
        email: string().email().required("This field is required"),
        password: string().min(8,"password should be minimum of 8 characters").required("This field is required"),
        confirmpassword: string().min(8,"password should be minimum of 8 characters").required("This field is required"),
    })
    return (
        <main>
            <div className="signup__container">
                <div className="signup__content--label">
                    <h4>Signup</h4>
                    <p>We do not share your personal detaisl with anyone.</p>
                </div>
                <div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => console.log(values)}>
                        {
                            ({
                                handleChange, handleBlur, handleSubmit, errors, touched
                            }) => {
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="signup__content--field-cont">
                                            <Field type="text" name="firstname" placeholder="First Name" onChange={handleChange} onBlur={handleBlur}></Field>
                                            {
                                                touched.firstname && errors.firstname && <p className="signup__field--error">{errors.firstname}</p>
                                            }
                                        </div>
                                        <div className="signup__content--field-cont">
                                            <Field type="text" name="lastname" placeholder="Last Name" onChange={handleChange} onBlur={handleBlur}></Field>
                                            {
                                                touched.lastname && errors.lastname && <p className="signup__field--error">{errors.lastname}</p>
                                            }
                                        </div>
                                        <div className="signup__content--field-cont">
                                            <Field type="text" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur}></Field>
                                            {
                                                touched.email && errors.email && <p className="signup__field--error">{errors.email}</p>
                                            }
                                        </div>
                                        <div className="signup__content--field-cont">
                                            <Field type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur}></Field>
                                            {
                                                touched.password && errors.password && <p className="signup__field--error">{errors.password}</p>
                                            }
                                        </div>
                                        <div className="signup__content--field-cont">
                                            <Field type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} onBlur={handleBlur}></Field>
                                            {
                                                touched.confirmpassword && errors.confirmpassword && <p className="signup__field--error">{errors.confirmpassword}</p>
                                            }
                                        </div>
                                        <div className="signup__content--field-cont">
                                            <button type="submit">Sign Up</button>
                                        </div>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </div>
            </div>
        </main>
    )
}

export default SignUp;