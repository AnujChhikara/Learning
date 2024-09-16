import jwt from "jsonwebtoken";

//decode, verify, generator
const jwtSecret = "dkf48937rt43ff8239443"; //random secret
const user = {
  username: "Anuj Chhikara",
  password: "4832714980127",
};

//creating token
const token = jwt.sign(user, jwtSecret);

console.log(token);

//jwt tokens can be revert back to the original content by anyone
//if they have your token
//decoding jwt
const decode = jwt.decode(token);

console.log(decode);
//  result will be :
// {
//   username: 'Anuj Chhikara',
//   password: '4832714980127',
//   iat: 1726308417 this iat is Issued At timestamp
// }

const verify = jwt.verify(token, jwtSecret);
console.log(verify);

//Important anyone can decode the content of the token if they get you toke
//jwt secret is only importance is to verify the token without secret it can't be verify
