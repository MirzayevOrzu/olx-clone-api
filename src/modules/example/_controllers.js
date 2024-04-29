const express = require("express");
const hello = require("./hello");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function getHello(req, res, next) {
  try {
    const data = hello();

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getHello,
};
