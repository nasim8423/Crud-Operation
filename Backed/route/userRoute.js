import express from "express";
import { create, deleteData, getAll, getOne, update } from "../controller/userController.js";

const route = express.Router();


route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteData)


export default route;