import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditUser = () => {
  const users = {
    name: "",
    email: "",
  };

  const { id } = useParams();
  const navigate = useNavigate()
  const [user, setUser] = useState(users);

  //------ inputchange handler ------

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  //------- useEffect --------
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/getOne/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  //---------- SubmitForm Handle --------
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:7000/api/update/${id}`, user)
      .then((Response) => {
        toast.success(Response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className=" h-screen w-full bg-gray-400 pt-24 ">
        <div className="max-w-[320px] mx-auto p-5 bg-white  shadow-md">
          <div className="flex justify-between px-2 py-1.5 rounded-md ">
            <h1 className="text-xl font-semibold">Update User</h1>
            <Link to={"/"}>
              {" "}
              <i class="fa-regular fa-circle-xmark cursor-pointer text-2xl"></i>
            </Link>
          </div>

          <form onSubmit={submitForm}>
            <div className="flex flex-col">
              <label className="w-full">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={inputChangeHandler}
                placeholder="Enter your name"
                className="px-2 py-2 mb-1 rounded-sm outline-none border border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="w-full">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={inputChangeHandler}
                placeholder="Enter your email"
                className="px-2 py-2 mb-4 rounded-sm outline-none border border-gray-400"
              />
            </div>

            <div className="bg-purple-800 px-2 py-2 rounded-sm text-white text-center mb-2 cursor-pointer">
              <button>Update User</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
