# AssignmentEnvigo

## Created following four endpoints in express

/signup - Register a new user, validate provided email is valid email, email shouldn't exist in our db already,password should contain at least a number and a special character, hash the password before saving.

/signin – signin the user, return JWT token as a cookie on successful login.

/user/:id – User can update name, email, phone and profile pic

/user/:id – Get user all details with profile pic.

### Key Points
1) Used multer for file input (profileImage)
2) Used aws-S3 bucket to Upload image and save it's public url in user document
3) Used Mongo-DB as a database to store data of user
4) Used Mongoose to connect node js with Mongo-DB
5) Used bcrypt to encrypt password and stored it in Database.
6) Created .env file to put Confidential credentials like Mongo-db string , Port , JWT-token . 
7) Created .gitignore file to put .env and node_modules in it so that these file(.env , node_modules) will not pushed in my Repository.

### How to run this assignment
1) Clone this repository
````````````````````````````````````````````````````````
https://github.com/SudhanshuSahu/AssignmentEnvigo.git
````````````````````````````````````````````````````````

2) Install Dependencies
````````````````````````````````````````````````````
npm install
````````````````````````````````````````````````````

3) .env file will be provided in mail (Where i submit my assignment) , paste this file into src folder


4) Run server with :-
`````````````````````````````
cd src
`````````````````````````````

`````````````````````````````````````````
npx nodemon index.js
`````````````````````````````````````````

## Assignment Overview
### User Model

````````````````````````````````````````````````````````````````````
    fname: { type: String,required:true , trim:true},
    lname: {type:String, required:true, trim:true},
    email: {type:String, required:true, unique:true, trim:true},
    password: {type:String, required:true, trim:true},
    profileImage: {type:String, trim:true},
    phone:{type:Number, required:true, trim:true}
    
````````````````````````````````````````````````````````````````````    
## User APIs
### POST /signup
- Create a user document from request body.
- Uploaded image to S3 bucket and saved it's public url in user document.
- Saved password in encrypted format. (used bcrypt)  
- __Response format__
-  _**On success**_ - Returned HTTP status 201. Also returned the user document. 
-  _**On error**_ - Returned a suitable error message with a valid HTTP status code.

`````````````````````````````````````````````````````````````````````
{
    "status": true,
    "data": {
        "_id": "62e6210ee76362e0d8b0d3fc",
        "fname": "sudhanshu",
        "lname": "Sahu",
        "email": "sudhanshu@gmail.com",
        "password": "$2b$10$A1wW/tQF4IjFXrsydH69T.rucVtdRBLEBLpLGfTbCOLhMabssQfsO",
        "profileImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/abc/unnamed.png",
        "phone": 7868080111,
        "createdAt": "2022-07-31T06:28:30.597Z",
        "updatedAt": "2022-07-31T06:35:20.937Z",
        "__v": 0
    }
}
`````````````````````````````````````````````````````````````````````````

### POST /signin
- Allow an user to login with their email and password.
- On a successful login attempt return the JWT in cookie.
- __Response format__
-  _**On success**_ - Returned HTTP status 200 with message "Logged in successfully" and JWT in cookies
-  _**On error**_ - Returned a suitable error message with a valid HTTP status code.

``````````````````````````````````````````````````````````````````
{
    "message": "Logged in successfully"
}

``````````````````````````````````````````````````````````````````

### PUT /user/:id  (Authentication and Authorisation is required)
- Allow an user to update their  name, email, phone and profile picture.
- Make sure that userId in url param and in token is same
- __Response format__
- _**On success**_ - Returned HTTP status 200. Also returned the updated user document.
-  _**On error**_ - Returned a suitable error message with a valid HTTP status code.

``````````````````````````````````````````````````````````
{
    "status": true,
    "data": {
        "_id": "62e6210ee76362e0d8b0d3fc",
        "fname": "sudhanshu",
        "lname": "Sahu",
        "email": "sudhanshu@gmail.com",
        "password": "$2b$10$A1wW/tQF4IjFXrsydH69T.rucVtdRBLEBLpLGfTbCOLhMabssQfsO",
        "profileImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/abc/unnamed.png",
        "phone": 7868080111,
        "createdAt": "2022-07-31T06:28:30.597Z",
        "updatedAt": "2022-07-31T06:35:20.937Z",
        "__v": 0
    }
}
`````````````````````````````````````````````````````````````

### GET /user/:id (Authentication is required)
- Allow an user to fetch details of their profile.
- Make sure that userId in url param and in token is same
- __Response format__
  _**On success**_ - Returned HTTP status 200. Also returned the updated user document.
  _**On error**_ - Returned a suitable error message with a valid HTTP status code.
  
  ````````````````````````````````````````````````````````````````
  {
    "status": false,
    "data": {
        "_id": "62e529bd3a0b4c74928ca7de",
        "fname": "sudhanshu",
        "lname": "ss",
        "email": "sahu1@gmail.com",
        "password": "$2b$10$QPFPyvwv9biVMGWuwPS.He3V0TAPbvaYg4oaOJ6MLS4S.ST8t8xaO",
        "profileImage": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/abc/Screenshot%20%28511%29.png",
        "phone": 8130522062,
        "createdAt": "2022-07-30T12:53:17.055Z",
        "updatedAt": "2022-07-30T13:12:28.464Z",
        "__v": 0
    }
}

`````````````````````````````````````````````````````````````````````









