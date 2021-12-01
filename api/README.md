# API Documentation

**Running The API**

To run the api run `npm start`. This will start the api on **localhost:3001**

**Routes**

1) /user

**User Route**

The user route is used to add users and gain information about them. So far, there are two main subroutes within this route, and these include `/user/add/:username@:password` and `/user/login/:username-:id@:password`. The responses of these will be **200** if everything was successful, else it will return with an error **406**.