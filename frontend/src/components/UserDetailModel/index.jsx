import React from 'react';
import ReactDOM from 'react-dom';

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">User Details</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Description:</strong> {user.description}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Registered At:</strong> {new Date(user.registeredAt).toLocaleDateString()}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default UserDetailsModal;
