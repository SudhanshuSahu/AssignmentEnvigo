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
5) Created .env file to put Confidential credentials like Mongo-db string , Port , JWT-token . 
6) Created .gitignore file to put .env and node_modules in it so that these file(.env , node_modules) will not pushed in my Repository.

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







