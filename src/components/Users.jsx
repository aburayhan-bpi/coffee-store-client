import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();

  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = (_id) => {
    console.log("deleting users...", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from database
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted user", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUser = users.filter((d) => d._id !== _id);
              setUsers(remainingUser);
            }
          });

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Total users: {users.length}</h2>

      <div className="overflow-x-auto mt-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Login At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, _id, index) => (
              <tr key={_id}>
                <td>{}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.createdAt}</td>
                <td>{user?.lastSignInTime}</td>
                <td className="flex gap-3">
                  <button className="btn btn-success text-white">Edit</button>
                  <button
                    onClick={() => handleUserDelete(user?._id)}
                    className="btn btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
