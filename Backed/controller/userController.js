import User from "../model/userModel.js";

//---------- create new user Data Start ---------
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(400).json({ msg: "User not found" });
    }

    const saveData = await userData.save();
    res.status(200).json({msg : "User created sucessfully"});
  } catch (error) {
    res.status(500).json(error);
  }
};





//---------- Get all Data Start ---------
export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if(!userData) {
      return res.status(400).json({ msg: "User not found" });
    }

    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json(error);
  }
}


//---------- Get One Data Start ---------

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist) {
      return res.status(400).json({ msg: "User not found" });
    }

    res.status(200).json(userExist)
  } catch (error) {
    res.status(500).json(error);
  }
}

//---------- Update user data -------

export const update = async (req, res) =>{
  try {

    const id = req.params.id;
    const userExist = await User.findById(id)
    if(!userExist) {
      return res.status(400).json({msg : "User not found"})
    }

    const updateData = await User.findByIdAndUpdate(id, req.body, {new:true});
    res.status(200).json({msg : "User updated sucessfully"});
    
  } catch (error) {
    res.status(500).json(error);
  }
}

//---------- Delete user data -------
export const deleteData = async (req, res) =>{
  try {
    
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist) {
      return res.status(400).json({msg : "User not found"})
    } 

    await User.findByIdAndDelete(id);
    res.status(200).json({msg : "User Delete sucessfully"})

  } catch (error) {
    res.status(500).json(error);
  }

}
