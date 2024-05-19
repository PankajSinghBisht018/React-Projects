import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = Yup.object().shape({
    email: Yup.string().required("User email Required"),
    password: Yup.string().required("Password Required")
});

function LoginForm({onClose}) {

    const handleClose = () => {
       onClose();
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('form submit', values);
        }
    });

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-85">
            <div className="bg-white p-6 rounded-lg shadow-xl w-80">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md w-full`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={formik.values.password} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md w-full`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">Submit</button>
                        <button onClick={handleClose} className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md">Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;