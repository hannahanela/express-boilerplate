"use strict";

const db = require("../db.js");
const { BadRequestError, NotFoundError } = require("../expressError");
const Example = require("./example.js");


beforeEach(async function () {
  // Delete all entries from tables
  await db.query();

  // Create any test data
});

afterAll(async function () {
  await db.end();
});

/**
 * MODEL TESTS: make sure to query db to check successful changes.
 */

/***************************** create */

  // success
  // errors with duplicate
  // missing required data

/***************************** findAll */

  // success
  // failing

/***************************** get */

  // success
  // not found

/***************************** update */

  // success
  // not found
  // missing required data
  // works without optional data

/***************************** delete */

  // success
  // not found