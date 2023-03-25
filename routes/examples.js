"use strict";

/** Routes for EXAMPLES_ROUTES. */

const jsonschema = require("jsonschema");

const express = require("express");
/** MIDDLEWARE AUTH */
const { BadRequestError } = require("../expressError");
const Example = require("../models/example");
/** SCHEMA'S FOR VALIDATION */

const router = express.Router();

// CRUD

/** POST */
/** GET all */
/** GET one */
/** PATCH update */
/** DELETE */

module.exports = router;
