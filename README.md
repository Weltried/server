# server
Server is running on Azure instance.

    * weltried.ga

    * the server is managed by docker
        1) https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
            - how to deploy Node.js app using docker
        2) https://blog.logrocket.com/build-deploy-flask-app-using-docker/
            - how to deploy Python flaks app using docker

## About Test Server
The test server is developed by Node.js express.
It is running on port 8080.

    * (POST) weltried.ga:8080

    * (POST) weltried.ga:8080/userinformation
        - you can get random users' information amongst 3 examples.

        - you will get object which contained ...
            1) phone_number
            2) height
            3) weight

    * (POST) weltried.ga:8080/currentposition
        - you will get random integer number between 1 and 9.

## About Main Server
The main server is developed by Node.js express.
It is running on port 80.

    * (POST) weltried.ga

    * (POST) weltried.ga/userinformation
    * (POST) weltried.ga/currentposition

## About AI-Model Server
The AI-Model Server is developed by Python flask.

    * (POST) localhost:9099

    * (POST) localhost:9099/predict

## About Database

