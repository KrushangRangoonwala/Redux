import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            age: '',
        },
        validationSchema: yup.object({
            username: yup.string().required('* Required'),
            age: yup.number().required('* Required'),
        }),
        onSubmit: values => {
            console.log('values.username ',values.username)
            dispatch(login({ username: values.username, age: values.age }));
            navigate('/');
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>LogIn</h2>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter Name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? <div style={{ fontSize: 'small' }}>{formik.errors.username}</div> : <><br /><br /></>}

                <input
                    name='age'
                    type="number"
                    min={5}
                    placeholder="Enter Age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.age && formik.errors.age ? <div style={{ fontSize: 'small' }}>{formik.errors.age}</div> : <><br /><br /></>}
                
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
