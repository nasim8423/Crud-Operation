import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
  const [users, setUsers] = useState([]);

//------- useEffect fetch data --------

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:7000/api/getAll");
      setUsers(response.data);
    };

    fetchData();
  }, []);


  //------- delete user------

  const deleteUser = async(userId) => {
    await axios.delete(`http://localhost:7000/api/delete/${userId}`)
    .then((response) => {
      setUsers((prevUser) => prevUser.filter((user) =>user._id !== userId))
      toast.success(response.data.msg, {position : 'top-right'})
      
    })
    .catch((error) => {
      console.log(error);
      
    })

  }



  return (
    <div className="w-full h-screen bg-gray-400 pt-24">
      <div className="max-w-[700px] mx-auto p-5 bg-white  shadow-md pb-9  ">
        <div>
          <h1 className="bg-purple-700 w-[100px] text-white px-3 py-2 mb-3 rounded-md cursor-pointer text-[18px]  ">
            <Link to={"/add"}>Add User</Link>
          </h1>
        </div>
        <table className="w-full">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-2 border-2 border-black">S.N</th>
              <th className="px-4 py-2 border-2 border-black">Name</th>
              <th className="px-4 py-2 border-2 border-black">Email</th>
              <th className="px-4 py-2 border-2 border-black">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td className="px-4 py-1.5 border-2 border-black text-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-1.5 border-2 border-black text-center">
                    {user.name}
                  </td>
                  <td className="px-4 py-1.5 border-2 border-black text-center">
                    {user.email}
                  </td>
                  <td className="px-4 py-1.5 border-2 border-black text-center">
                    <div className="flex justify-center items-center gap-2">
                      <button onClick={() =>deleteUser(user._id)} className="bg-red-500 px-2 py-[5px] rounded-md">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                      <Link to={`/edit/` + user._id}>
                        {" "}
                        <button className="bg-green-500 px-2 py-[5px] rounded-md">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
