const jwt = require("jsonwebtoken")
const userModel = require ("../models/userModel")
const { isValidObjectId } = require("../validators/validator");


//------------------------------------------------------------------------------------------------------------------------------------------------------

const authentication = async function (req, res, next) {

  try {

     let token = req.cookies.access_token;

    // if token is not provided
    if (!token) {
      return res.status(400).send({ status: false, msg: "Token required! Please login to generate token" });
    }
    

    jwt.verify(token, "xpyna91skajsusldsje8js", { ignoreExpiration: true }, function (error, decodedToken) {
      // if token is not valid
      if (error) {
        return res.status(400).send({ status: false, msg: "Token is invalid!" });

        // if token is valid
      } else {
        // checking if token session expired
        if (Date.now() > decodedToken.exp * 1000) {
          return res.status(401).send({ status: false, msg: "Session Expired" });
        }
        //exposing decoded token userId in request for everywhere access
        req.userId = decodedToken.userId;
        next();

      }
    }
    )
    

  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
 };


 //------------------------------------------------------------------------------------------------------------------------------------------------------

const authorisation = async function (req, res, next) {
    try {
      // userId sent through path params
      let userId = req.params.id;
  
     
    //   // CASE-1: userId is not an ObjectId
       if (!isValidObjectId(userId)) {
        return res.status(400).send({ status: false, msg: "userId is invalid!" });
      }
      // CASE-2: userId does not exist (in our database)
      let user = await userModel.findOne({ _id: userId }); // database call
      if (!user) {
        return res.status(400).send({
          status: false,
          msg: `User with Id : ${userId} does not exist`,
        });
      }
  
      // Authorisation: userId in token is compared with ObjectID of user
      if (req.userId !== userId) {
        return res.status(403).send({
          status: false,
          msg: `Authorisation Failed!`,
        });
      } else if (req.userId === userId) {
        next();
      }
    } catch (error) {
      res.status(500).send({status:false, message: error.message });
    }
  };
  





 module.exports={authentication,authorisation}
