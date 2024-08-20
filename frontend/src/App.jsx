import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import UserForm from './components/AddUserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleRemoveUser = (user) => {
    setUsers(users.filter(u => u !== user));
  };

  const handleViewDetails = (user) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto p-4">
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} onViewDetails={handleViewDetails} onRemoveUser={handleRemoveUser} />
      {selectedUser && <UserDetails user={selectedUser} onClose={handleCloseDetails} />}
    </div>
  );
};

export default App;
