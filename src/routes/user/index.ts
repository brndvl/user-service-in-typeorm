import { Router } from "express";
import { loginUserController } from "../../controllers";
import { validateShape } from "../../middlewares";
import authToken from "../../middlewares/authToken.middleware";
import { loginShape } from "../../shapes";

const userRouter = Router()

userRouter.post('/login', validateShape(loginShape), authToken, loginUserController) 
userRouter.post('/register')


export default userRouter
