import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:7000/api/create", user)
      .then((Response) => {
        toast.success(Response.data.msg, {position : "top-right"})
        navigate("/");
      })
      .catch(error => console.log(error)
      );
    
  };

  return (
    <>
      <div className="min-h-[1500px] w-full bg-gray-400 pt-24">
        <div className="max-w-[320px] mx-auto p-5 bg-white  shadow-md">
          <div className="flex justify-between px-2 py-1.5 rounded-md ">
            <h1 className="text-xl font-semibold">Add New User</h1>
            <Link to={"/"}>
              {" "}
              <i class="fa-regular fa-circle-xmark cursor-pointer text-2xl"></i>
            </Link>
          </div>

          <form onSubmit={submitForm}>
            <div className="flex flex-col">
              <label className="w-full ">Name</label>
              <input
                onChange={inputHandler}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="px-2 py-2 mb-1 rounded-sm outline-none border border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="w-full">Email</label>
              <input
                onChange={inputHandler}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="px-2 py-2 mb-1 rounded-sm outline-none border border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="w-full">Password</label>
              <input
                onChange={inputHandler}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="px-2 py-2 mb-4 rounded-sm outline-none border border-gray-400"
              />
            </div>

            <div className="bg-purple-800 px-2 py-2 rounded-sm text-white text-center mb-2 cursor-pointer">
              <button>Add User</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
