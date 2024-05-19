import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required').matches(/@gmail\.com$/, 'Please use a Gmail address'),
    gender: Yup.string().required('Gender is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number should be a 10 digit number').required('Phone number is required'),
    interest: Yup.array().min(1, 'Please select at least one interest'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: '',
      phone: '',
      interest: [],
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  
  return (
    <div className="w-full bg-gray-500 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.name && formik.errors.name && 'border-red-500'}`}
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email && 'border-red-500'}`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                )}
              </div>
              <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Gender
                </label>
                <div className="flex items-center">
                  <label className="mr-4 flex items-center">
                    <input className="text-gray-700 mr-2" name="gender" type="radio" value="male" onChange={formik.handleChange} />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input className="text-gray-700 mr-2" name="gender" type="radio" value="female" onChange={formik.handleChange} />
                    Female
                  </label>
                </div>
                {formik.touched.gender && formik.errors.gender && (
                  <p className="text-red-500 text-xs italic">{formik.errors.gender}</p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-4'>
                  Phone No
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder='Your Phone No'
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.phone && formik.errors.phone && 'border-red-500'}`}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs italic">{formik.errors.phone}</p>
                )}
              </div>

              <div className='mb-4'>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Interest
                </label>
                <div className="flex items-center">
                  <label className="mr-4 flex items-center">
                    <input className="text-gray-700 mr-2" name="interest" type="checkbox" value="Marketing" onChange={formik.handleChange} />
                    Marketing
                  </label>
                  <label className=" mr-4 flex items-center">
                    <input className="text-gray-700 mr-2" name="interest" type="checkbox" value="Sales" onChange={formik.handleChange} />
                    Sales
                  </label>
                  <label className=" mr-4 flex items-center">
                    <input className="text-gray-700 mr-2" name="interest" type="checkbox" value="IT" onChange={formik.handleChange} />
                    IT
                  </label>
                </div>
                {formik.touched.interest && formik.errors.interest && (
                  <p className="text-red-500 text-xs italic">{formik.errors.interest}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.message && formik.errors.message && 'border-red-500'}`}
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-xs italic">{formik.errors.message}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>

          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ex repudiandae cumque distinctio quos vero!
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-700">Address</h3>
              <p className="text-gray-600">Delhi</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-700">Phone</h3>
              <p className="text-gray-600">123456789</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-700">Email</h3>
              <p className="text-gray-600">xyz@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Contact;
