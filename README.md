
#### Why? ####
    just a simple restify server

#### Install the dependencies ####
    npm install

#### make sure mongodb is running ####
    mongod --dbpath srv/mongodb/

#### seed db ####
    npm run-script seed-db

#### you can now test mongodb using the mongo shell ####
    $ mongo
    $ use color
    $ db.palettes.find()

#### Start the server ###
    npm start

#### Restify is running @ ####
 - http://localhost:7070/

