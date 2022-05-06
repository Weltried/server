# server
Servers is running on Azure instance.
* weltried.ga

* The test server which just return constant value to client is running independently.

* A client will only communicate with Main Server, which means server system appears Reverse Proxy.
    - Only the Main Server communicate with others which are AI-Model Server and Database.

## About Test Server
The test server is developed by Node.js express. It is running on port 8080.
* You can test server using `curl` command.

* (POST) http://weltried.ga:8080
``` bash
curl -X POST http://weltried.ga:8080
```

* (POST) http://weltried.ga:8080/currentposition
``` bash
curl -X POST http://weltried.ga:8080/currentposition
```
    - you will get random integer number between 1 and 9.
    - The range of return value will change after this week, the day this commit ...

## About Main Server
The main server is developed by Node.js express. It is running on port 80.
* (POST) http://weltried.ga

* (POST) http://weltried.ga/userinformation
* (POST) http://weltried.ga/currentposition

## About AI-Model Server
The AI-Model Server is developed by Python flask. It is running on port 9099.
* (POST) localhost:9099

* (POST) localhost:9099/predict
    - If you want more details of this router, go to [LINK](./AI-Model/#predict)

## About Database

