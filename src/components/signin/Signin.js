import React from "react";

import {Formik, Form, Field} from "formik";
import {object, string} from "yup";

import "./SignIn.scss";

const SignIn = () => {
    const initialValues = {
        email: "",
        password: ""
    }
    const validationSchema = object({
        email: string().email().required("This field is required"),
        password: string().min(8,"password should be minimum of 8 characters").required("This field is required")
    })
    return (
        <main>
            <div className="signin__container">
                <div className="signin__content--label">
                    <h4>Login</h4>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                </div>
                <div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => console.log(values)}>
                        {
                            ({
                                handleChange, handleBlur, handleSubmit, errors, touched
                            }) => {
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="signin__content--field-cont">
                                            <Field type="text" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur}></Field>
                                            {
                                                touched.email && errors.email && <p className="signin__field--error">{errors.email}</p>
                                            }
                                        </div>
                                        <div className="signin__content--field-cont">
                                            <Field type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur}></Field>
                                            {
                                                touched.password && errors.password && <p className="signin__field--error">{errors.password}</p>
                                            }
                                        </div>
                                        <div className="signin__content--field-cont">
                                            <button type="submit">Login</button>
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

export default SignIn;