import express from "express";

import fileUpload from "../helper/multer";
import { normal,ideologist } from "../middleware/Authentication";
import { 
    addNewBorn,
    updateNewBorn,
    getSingleNewBorn,
    viewNewBorns,
    getBornsWithOAEResultOfRefer,
    updateBornWithReferOAEResult,
 } from "../controller/newBornController";

 const newBoneRoute = express.Router();
 newBoneRoute.post("/newBorns/add",normal,fileUpload.single("sex"),addNewBorn);
 newBoneRoute.put("/newBorns/update/:id",normal,fileUpload.single("sex"),updateNewBorn);
 newBoneRoute.put("/newBorns/updateRefer/:id",ideologist,fileUpload.single("sex"),updateBornWithReferOAEResult);
 newBoneRoute.get("/newBorns/getSingle/:id",normal,getSingleNewBorn);
 newBoneRoute.get("/newBorns/getAll",normal,viewNewBorns);
 newBoneRoute.get("/newBorns/getRefers",normal,getBornsWithOAEResultOfRefer);



 export default newBoneRoute;