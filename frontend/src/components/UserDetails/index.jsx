import React from 'react';

const UserDetails = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">User Details</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Description:</strong> {user.description}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Registration Date:</strong> {user.registrationDate}</p>
        <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Close</button>
      </div>
    </div>
  );
};

export default UserDetails;
