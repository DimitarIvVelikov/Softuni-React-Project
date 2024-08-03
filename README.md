# Softuni-React-Project

Final React Project for Softuni course

# Start API

cd API
npm i
npm run start

# Start Project

cd Project
npm i
npm run dev

# Project Documentation

This project is a forum for trainers and trainees to interact with each other. The goal is to provide a platform for people to find their best fitting training program or provide excellent training programs as a trainer.

The page has a home that will show the latest programs that were introduced.

There is a catalog for all of the available training programs.

Each program has its own page and for the owner there are edit and delete functions. For guests they can only review the information and for logged in users that are not the owner will have the option to sign up.

There is a profile page that has the option to edit it. It has a list of all created or sign up training programs.

There is a page for the creation of training programs.

All forms have validations with some just being required and other a bit more complicated(emails or imageUrls).

Observables were used to fetch data from the API with the provided Endpoints as in the Rest-Api-Endpoints.md file.

The project is nowhere near being complete but it is finalized for the exam to a point where it can be graded.

The following will present the libraries that are used to create this project.

# FrontEnd

    React
    Material IU Icons

# Backend

- NodeJS
- Express
- CookieParser
- Mongoose
- MongoDB
- cors
- JWT token
- Bcrypt

Base API = "http://127.0.0.1:5000/api"

User Base URI = "/auth"
User Endpoints = {
login: "/login", POST
register: "/register", POST
logout: "/logout", POST
profile: "/profile", GET
profile: "/profile", PUT
profilePopulated: "/profile-populated", GET
}

Training Programs Base URI = "/training-programs"

Training Programs Endpoints = {
create: "/", POST
getLatestTrainingPrograms: "/latest", GET
getAllTrainingPrograms: "/", GET
getOneTrainingProgram: "/:id", GET
updateTrainingProgram: "/:id", PUT
deleteTrainingProgram: "/:id", DELETE
signUpForTrainingProgram: "/signUp/:id", POST
}
