# server
Servers is running on Azure instance.
* weltried.ga

<<<<<<< HEAD
* A test server which just return constant value to client is running independently.

* A client will only communicate with a Main Server, which means server system is Reverse Proxy.
=======
* The test server which just return constant value to client is running independently.

* A client will only communicate with Main Server, which means server system appears Reverse Proxy.
>>>>>>> 09ccbfba89930e963146809b2260b4d45c3aab8e
    - Only the Main Server communicate with others which are AI-Model Server and Database.

## About Test Server
The test server is developed by Node.js express. It is running on port 8080.
* You can test server using `curl` command.
<<<<<<< HEAD

* (POST) http://weltried.ga:8080
``` bash
curl -X POST http://weltried.ga:8080
```

=======

* (POST) http://weltried.ga:8080
``` bash
curl -X POST http://weltried.ga:8080
```

>>>>>>> 09ccbfba89930e963146809b2260b4d45c3aab8e
* (POST) http://weltried.ga:8080/currentposition
``` bash
curl -X POST http://weltried.ga:8080/currentposition
```

## About Main Server
The main server is developed by Node.js express. It is running on port 80.
* (POST) http://weltried.ga

* (POST) http://weltried.ga/currentposition ([DETAILS](./Main/#currentposition))

## About AI-Model Server
<<<<<<< HEAD
The AI-Model Server is developed by Python flask.
<p>you don't have to know routers of this server,
but if you wish ... <a href="./AI-Model">DETAILS</a></p>
=======
The AI-Model Server is developed by Python flask. It is running on port 9099.
* (POST) http://localhost:9099

* (POST) http://localhost:9099/predict ([DETAILS](./AI-Model/#predict))
>>>>>>> 09ccbfba89930e963146809b2260b4d45c3aab8e

## About Database
The database uses MySQL.
