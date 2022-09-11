# ndao_atakalo_wcc_s2_dev

API rest for ndao atakalo application

Require Node >= 14.17

## Installation

Clone this repository to your computer

Install all dependancies using `npm install`

## Setting up the database

To the project folder, run

### `npx prisma migrate dev`

Now the database is created

## Launching the application

Run this command:

### `npm start`

## Querying the database

Fetch active echanges:
Method : 'GET'
In the postman, to get list echanges:use this link : http://localhost:4000/echanges?page=x (change x as a number for pagination)

Create echange:
Method : 'POST'
To post in echanges : set theses payload to pass in the link http://localhost:4000/echange
-nom,
-contact,
-nom_kilalao,
-atakalo,
-photos

Desactivate echange:
Method : 'PUT'
To desactivate an echange, use this link and pass an id : http://localhost:4000/echange/desactivate/id

### tchz_wcc_s2_2022
