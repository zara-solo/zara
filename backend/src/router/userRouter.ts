import { signupUser,getUser } from "../controller/userController";
import  express from "express"
const userRouter = express.Router();
userRouter.post("/signup",signupUser);
userRouter.get("/getUser/:email",getUser);

export default  userRouter;