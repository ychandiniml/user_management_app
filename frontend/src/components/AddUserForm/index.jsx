import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser({ username, email, description, role: 'User', registrationDate: new Date().toLocaleDateString() });
    setUsername('');
    setEmail('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Add User</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded" required></textarea>
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add User</button>
    </form>
  );
};

export default UserForm;
