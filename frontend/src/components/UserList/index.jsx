import React, { useMemo, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import UserDetailsModal from '../../components/UserDetailModel'; 
import { deleteUser, getUsers } from '../../api/apiService';

const UserList = ({ users, setUsers }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUsers = async () => {
    try {
        const response = await getUsers();
        setUsers(response.data.users);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      console.log(`Deleting user with ID: ${userId}`); 
      await deleteUser(userId);
      await fetchUsers(); 
      console.log('User deleted successfully');
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const columns = useMemo(() => [
    { headerName: "Username", field: "username", sortable: true, filter: true,  },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    { headerName: "Description", field: "description", flex: 1, minWidth: 200, },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: (params) => {
        console.log('Cell Renderer Params:', params); 
        if (!params.data) {
          console.error('No data found in params:', params); 
          return null;
        }
        return (
          <div >
            <button
              onClick={() => {
                setSelectedUser(params.data);
                setModalOpen(true);
              }}
              className="bg-blue-500 text-white px-3 py-2 text-xs font-medium rounded hover:bg-blue-800"
            >
              View Details
            </button>
            <button
              onClick={() => handleDelete(params.data.userId)}
              className="bg-red-500 text-white px-3 py-2 text-xs font-medium rounded hover:bg-red-800"
            >
              Remove
            </button>
          </div>
        );
      }
    }
  ], [users]);

  const defaultColDef = useMemo(() => ({
    resizable: true,
  }), []);


  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact
          rowData={users}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      {modalOpen && selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserList;
