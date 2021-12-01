# API Documentation

**Running The API**

To run the api run `npm start`. This will start the api on **localhost:3001**

**Routes:**

```
/user
/server
```

**User Route**

The user route is used to add users and gain information about them. So far, there are two main subroutes within this route, and these include `/user/add/:username@:password` and `/user/login/:username-:id@:password`. The responses of these will be **200** if everything was successful, else it will return with an error **406**.

**Server Route**

The server route is used for creating new servers and getting all of their messages. There is only one subroute so far and it is `/server/add/:serverName`. The response will be **200** if it created the server sucsesfully, else it will return an error code **406**.