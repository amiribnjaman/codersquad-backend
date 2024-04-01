var jwt = require("jsonwebtoken");
const Task = require("../model/task.model");
require("dotenv").config();

const authorization = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth) {
    const TOKEN = auth.split(" ")[1];
    jwt.verify(
      TOKEN,
      process.env.ACCESS_TOKEN,
      TOKEN,
      async function (err, decoded) {
        if (err) {
          return res.send({ status: 401, msg: "Unathorized Access" });
        } else {
          //   req.decoded = decoded;
          const creatorEmail = await Task.findOne({
            creatorEmail: decoded.email,
          });
            if (creatorEmail) {
                next();
            } else {
                return res.send({ status: 401, msg: "Unathorized Access!" });
            }
        }
      }
    );
  } else {
    return res.send({ status: 401, msg: "Unathorized Access!" });
  }
};

module.exports = authorization;
