import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddUserForm = ({ onAddUser }) => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    description: Yup.string()
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        description: '',
        role: '',
        registeredAt: new Date().toISOString().split('T')[0]
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddUser(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-4 rounded shadow-lg mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="username" component="div" className="text-red-500 text-xs" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Description</label>
            <Field
              type="text"
              name="description"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-xs" />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Role</label>
            <Field
              type="text"
              name="role"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Registration Date</label>
            <Field
              type="date"
              name="registeredAt"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-3 py-2 text-xs font-medium rounded hover:bg-blue-800" disabled={isSubmitting}>
            Add User
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddUserForm;
