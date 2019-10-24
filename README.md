# node-rest-api-boilerplate

👋 Hi, welcome to the test assessment.

Please take care of the requirements described below.
You have only 4 hours to complete the entire test. To save time to develop all the things, we're providing a simple boilerplate with all the basics to start to develop immediately. Don't forget to document all, we evaluate functionality, coding style, and presentation.

## First Steps
- Complete with your personal information the `package.json`.
- Read carefully the requirements
- Start to develop

## Requirements
Functionality: Get a list of active users

Scenario: any member, with available services

```
Given users exist in an external service
When executing a GET petition to the /users endpoint
Then I obtain all the active users ordered by last name
And each user has a field with his calculated age
```

Services to consume
- API Endpoint - https://2eja2nqth0.execute-api.us-east-1.amazonaws.com/api/users
- Swagger - https://app.swaggerhub.com/apis/jbrizio/ms-users-api/1.0.0

# Deliverables
- Repository on Github
- Swagger
- Test cases

## Stack used
- Node.js
- Express

## Advice
Please document all the things that you consider necessary. Follow the good practices followed in the course.

Good luck! 💪


# New Features!

  - Api that returns all users with their personal data
  - Developed with node and express
  - Use mocha and chai libraries for test unit
  - Use the moment library to handle dates

### Endpoint /users
 - Example return api
 -  "users": [
        {
            "id": 3426243159,
            "name": "Diego Matias",
            "lastname": "Pascual",
            "birthday": "1985-08-20",
            "is_active": true,
            "email": "dpascual@email.com",
            "genre": "Masculino"
        },
        {
            "id": 3323683023,
            "name": "Marco Hidalgo",
            "lastname": "Delgado",
            "birthday": "1991-04-21",
            "is_active": false,
            "email": "mdelgado@email.com",
            "genre": "Masculino"
        }
      ]
