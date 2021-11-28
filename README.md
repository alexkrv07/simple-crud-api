# simple-crud-api

## How to run
1. Download and install latest LTS version of [Node.js](https://nodejs.org/en/). (Version 16.13 is required!)
2. Clone this repository: `git@github.com:alexkrv07/simple-crud-api.git`
4. Go to folder simple-crud-api: `simple-crud-api`
5. Checkout branch: `git checkout origin/development`
6. Run `npm install` in your terminal
6. Run program `npm run start
7. To exit, enter ```ctrl + c```.

## Usage

Default url for this app `localhost:3000`

### Methods

The CRUD API supports 4 methods:

- GET `/person` or `/person/${personId}` returns all persons or a person with corresponding `personId`
- POST `/person` is used to create a record about a new person and store it in the database
- PUT `/person/${personId}` is used to update a record about an existing person
- DELETE `/person/${personId}` is used to delete a record about an existing person from the database

### Personal data and personal properties types and required properties
Persons are stored as objects that have following properties:

- `id` — a unique identifier (string, uuid) generated on a server side
- `name` — person's name (string, **required**)
- `age` — person's age (number, **required**)
- `hobbies` — person's hobbies (array of strings or empty array, **required**)
