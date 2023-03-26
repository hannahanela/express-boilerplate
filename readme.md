# Express App Boilerplate

A boilerplate for an Express app.

Project description goes here.

## Features

* List project features here.

## Installation
    
    git clone GITHUB REPO SSH HERE

## Developer Environment Setup

This app uses a PostgreSQL database. You'll need Node 18 and PostgreSQL 12 or later. Please follow instructions for how to [install PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL's Downloads") for your OS.

In your directory, install dependences:

    npm install

Create a .env with two variables:

    DATABASE=NAME_OF_PROJECT_DB
    DATABASE_TEST=NAME_OF_PROJECT_TEST_DB

Seed the database by reading SQL_FILE_NAME.sql:

    psql -f SQL_FILE_NAME.sql PROJECT_DATABASE_NAME

## Run Server

    node server.js -p 3001

If you need to view it in your browser, you can use LOCALHOST_LINK

## Run Tests

To run tests in band:

    jest -i