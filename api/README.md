# Event Horizon API
## Starting the API
To start the API so it corrently works with the electron app run

`PORT=3001 npm start`

## API Requests
There are currently **three** different routing paths foe the api and these include

1) **/user**
2) **/room**
3) **/message**

## /user
In the **/user** route, you can make two different requests, and thse requests are 

1) **/add/:user/:password**
2) **/login/:user/:password**

For both of these cases if everything ended up working, the API will return json with key **Status** being **Ok**. If this is not the case, the json **Status** will be contain a basic error message. The **/add** route creates a new user, and the **/login** routes returns if the user can login with specified username and password. 

**Example**

`localhost3001/add/magnuschase03/password`

## /room
Currently in the **/room** route, there is only one request you can make and it is

1) **/create/:name**

If everything ended up working, the API will return json with key **Status** being **Ok**. If this is not the case, the json **Status** will be contain a basic error message. The **/create** route creates a new room.

**Example**

`localhost3001/room/create/Hackathon`

## /message
In the **/message** route, you can make two different requests, and thse requests are 

1) **/get/:serverName/:serverID**
2) **/send/:serverName/:serverID/:message**

For both of these cases if everything ended up working, the API will return json with key **Status** being **Ok**. If this is not the case, the json **Status** will be contain a basic error message. The **/get** route returns an array of all the message in specified server while **/send** adds a message to the server database.

**Example**

`localhost3001/message/send/Hackathon/1/Hello World`