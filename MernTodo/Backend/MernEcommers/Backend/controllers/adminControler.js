import Users from "../Model/userModel.js";
import asyncHandler from "../middleWare/asyncHandler.js";


const getAllUsers = asyncHandler(async(req, res) =>{
    const users = await Users.find({isAdmin: false});

    req.json(users);
});