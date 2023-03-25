"use strict";

const request = require("supertest");

const db = require("../db.js");
const app = require("../app");
const Example = require("../models/example");

beforeEach(async function () {
  // Delete all entries from tables
  await db.query();

  // Create any test data
});

afterAll(async function () {
  await db.end();
});

/************************************** POST */
  // success non admin?
  // success admin?
  // unauth for anon
  // missing data
  // invalid data

/************************************** GET all */
  // success
  // unauth anon
  // try to test a large failure (lost all data)

/************************************** GET one */
  // success
  // unauth for anon
  // not found

/************************************** PATCH */
  // success
  // unauth for anon
  // not found
  // invalid data
  // special admin changes

/************************************** DELETE */
  // success
  // unauth for anon
  // not found
