# API Documentation

**Running The API**

To run the api run `npm start`. This will start the api on **localhost:3001**

**Routes:**

```
/user
/server
```

**User Route**

The user route is used to add users and gain information about them. So far, there are three main subroutes within this route, and these include `/user/add/:username@:password`, `/user/login/:username-:id@:password`, and `/user/join/:username-:userID@:serverID`. The responses of these will be **200** if everything was successful, else it will return with an error **406**.

**Server Route**

The server route is used for creating new servers and getting all of their messages. There are three subroute so far and it is `/server/add/:serverName`, `/server/message/send/:serverName-:serverID/:message`, and `/server/message/get/:serverName-:serverID`. The response will be **200** if it created the server sucsesfully, else it will return an error code **406**. When getting messages instead of just returning response code **200**, it will return the **JSON** of the messages.