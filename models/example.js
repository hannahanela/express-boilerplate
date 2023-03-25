"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");

/** Related functions for EXAMPLE_MODEL. */

class Example {
  // create method
  static async create();

  // read all method
  static async findAll();

  // read detail method
  static async get();

  // update method
  static async update();

  // delete method
  static async remove();
}


module.exports = Example;
