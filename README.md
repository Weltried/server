# server
Server is running on Azure instance.
    * weltried.ga

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
The AI-Model Server is developed by Flask (Python).
### Reference
1) https://flask.palletsprojects.com/en/2.1.x/quickstart/
    - flask docs

## About Database

