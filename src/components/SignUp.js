import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
export const Signup = () => {
    const navigate = useNavigate();
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First Name Required !'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less !')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid !')
            .required('Email is required !'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required !'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match !')
            .required('Confirm password is required !'),
    })
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset, resetForm, setFieldValue, setFieldTouched } = useFormik({
        initialValues: initialValues,
        validationSchema: validate,
        enableReinitialize: true,
        validateOnChange: false,
        onSubmit: async (values, action) => {
            // console.log(values)
            resetForm()
            toast.success('Successfully Registered !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: false,
                theme: "colored",
            });
        }
    })
    return (
        <>
            <ToastContainer />
            <div className="container mt-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-5 border py-4 px-4 col-10 formcontainer">
                        <h1 className="mb-4 font-weight-bold display-4 title">Register Now</h1>
                        <form onSubmit={handleSubmit} encType="multipart/form-data" >
                            <div className="mb-2">
                                <label htmlFor='firstName'>First Name</label>
                                <input
                                    type="text"
                                    id="text"
                                    name='firstName'
                                    className={`form-control shadow-none ${touched.firstName && errors.firstName && 'is-invalid'}`}
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.firstName && touched.firstName ? (<span className=' text-danger errorMsg'>{errors.firstName}</span>) : null}
                            </div>

                            <div className="mb-2">
                                <label htmlFor='lastName'>Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name='lastName'
                                    className={`form-control shadow-none ${touched.lastName && errors.lastName && 'is-invalid'}`}
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lastName && touched.lastName ? (<span className=' text-danger errorMsg'>{errors.lastName}</span>) : null}
                            </div>

                            <div className="mb-2">
                                <label htmlFor='email'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    className={`form-control shadow-none ${touched.email && errors.email && 'is-invalid'}`}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (<span className=' text-danger errorMsg'>{errors.email}</span>) : null}
                            </div>

                            <div className="mb-2">
                                <label htmlFor='password'>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name='password'
                                    className={`form-control shadow-none ${touched.password && errors.password && 'is-invalid'}`}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (<span className=' text-danger errorMsg'>{errors.password}</span>) : null}
                            </div>

                            <div className="mb-2">
                                <label htmlFor='password'>Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name='confirmPassword'
                                    className={`form-control shadow-none ${touched.confirmPassword && errors.confirmPassword && 'is-invalid'}`}
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (<span className=' text-danger errorMsg'>{errors.confirmPassword}</span>) : null}
                            </div>
                            <button className="btnsubmit mt-3 shadow-none" type="submit">Register</button>
                            <button className="btnreset mt-3 mx-3 shadow-none" type="reset" onClick={handleReset}>Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}