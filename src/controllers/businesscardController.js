const cardModel = require("../models/businessCardModel");
const validator = require("../../validator/validation");
const aws = require("../awsConfigs/aws");


const createBusinessCard = async function (req, res) {
    try{
    let data = req.body;
    let files = req.files;
    let { name, phoneNo, email, password, designation, companyName, websiteUrl, socialUrl } = data;

    if (validator.isEmptyBody(data)) {
        return res.status(404).send({ status: false, msg: "data is Mandatory" })
    }


    if (!validator.isValid(name)) {
        return res.status(400).send({ status: false, msg: "name is required" })
    }

    if (!validator.isValid(phoneNo)) {
        return res.status(400).send({ status: false, msg: "phoneNo is required" })
    }

    if (!validator.isValid(email)) {
        return res.status(400).send({ status: false, msg: "email is required" })
    }

    if (!validator.isValid(password)) {
        return res.status(400).send({ status: false, msg: "password is required" })
    }

    if (!validator.isValid(designation)) {
        return res.status(400).send({ status: false, msg: "designation is required" })
    }

    if (!validator.isValid(companyName)) {
        return res.status(400).send({ status: false, msg: "companyName is required" })
    }

    if (!validator.isValid(websiteUrl)) {
        return res.status(400).send({ status: false, msg: "websiteUrl is required" })
    }

    if (!validator.isValid(socialUrl)) {
        return res.status(400).send({ status: false, msg: "socialUrl is required" })
    }else{
        socialUrl=socialUrl.split(",")
    }

    let companyLogo = await aws.uploadFile(files[0])
    if (!companyLogo) {
        return res.status(400).send({ status: false, msg: "upload error" })
    }

    const newData = {
        "name": name,
        "phoneNo": phoneNo,
        "email": email,
        "password": password,
        "designation": designation,
        "companyName": companyName,
        "websiteUrl": websiteUrl,
        "socialUrl": socialUrl,
        "companyLogo": companyLogo
    }
 let businessCard =await cardModel.create(newData);
    return res.status(201).send({ status: true, msg: "business Card created Succesfully", data: businessCard })
    }catch(err){
        return res.status(500).send({status:false,msg:err.message})
    }
}



const getBusinessCard = async function(req,res){
    try{
    let businessCardId=req.params.id
    let checkId =await cardModel.findById(businessCardId)
   if(!checkId){
    return res.status(404).send({status:false,msg:"business Card not found"})
   }
   else{
    return res.send({status:true,msg:"business card found",data:checkId})
   }
}catch(err){
    return res.status(500).send({status:false,msg:err.message})
}
}





module.exports.createBusinessCard = createBusinessCard;
module.exports.getBusinessCard=getBusinessCard;