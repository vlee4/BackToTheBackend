# Back to the Basics

Practicing...

### Setup

To run the PERN project do the following:

1. Navigate into the PERN-tutorial directory with `cd PERN-tutorial`
2. Install all necessary packages, `npm install`
3. Create a database and set up a table within postgres using the commands in the database.sql file.

- Note: You will have had to start psql in the terminal first using `sudo service postgresql start` and `sudo -u postgres psql` (Windows)

4. Create a .env file inside the /server directory and include the following environmental variables

- PGUSER='yourPostgresUser'
- PGHOST='localhost'
- PGDATABASE='perntodo'
- PGPORT=thePortNumberYouChose

5. To start the server run, `npm start`
6. To start the frontend react app, in a separate terminal

- navigate to the client folder `cd /PERN-tutorial/client`
- then use `npm start`

### References

[Node Tutorial](https://www.youtube.com/watch?v=TlB_eWDSMt4)
[Node + Express](https://www.youtube.com/watch?v=pKd0Rpw7O48)
[Middleware](https://www.youtube.com/watch?v=lY6icfhap2o)
[PERN Stack](https://www.youtube.com/watch?v=ldYcgPKEZC8)

- [w3Schools modal reference](https://www.w3schools.com/bootstrap4/bootstrap_modal.asp)
  [Node + Express-FCC](https://www.youtube.com/watch?v=Oe421EPjeBE)
