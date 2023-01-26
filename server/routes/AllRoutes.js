import express from "express";
import useController from "../controller/AllFunction.js"
import multer from "multer" 

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `public/upload`)
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

  router.post("/user1",upload.single("image"), useController.createUser);
  router.get("/user1",useController.getALLuser)

  export default router;