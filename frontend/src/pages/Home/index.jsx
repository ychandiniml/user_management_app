import React, { useState, useEffect } from 'react';
import AddUserForm from '../../components/AddUserForm';
import UserList from '../../components/UserList';
import { addUser, getUsers } from '../../api/apiService';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data.users);
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (newUser) => {
    try {
      const response = await addUser(newUser);
      setUsers([...users, response.data.user]); 
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <AddUserForm onAddUser={handleAddUser} />
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default Home;
