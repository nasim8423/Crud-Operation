import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddUser from "./components/AddUser";
// import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import EditUser from "./components/EditUser";
import User from "./components/User";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add" element={<AddUser />} />
          {/* <Route path="/update" element={<UpdateUser />} /> */}
          <Route path="/delete" element={<DeleteUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
