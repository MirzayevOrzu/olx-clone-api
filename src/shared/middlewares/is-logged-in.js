const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { UnauthorizedError } = require("../errors");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function isLoggedIn(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    next(new UnauthorizedError("Unauthorized"));
    return;
  }

  const [type, token] = authorization.split(" ");

  switch (type) {
    case "Bearer": {
      if (!token) {
        next(new UnauthorizedError("Unauthorized"));
        return;
      }

      try {
        const payload = jwt.verify(token, config.jwt.secret, {
          ignoreExpiration: false,
        });

        req.user = payload.user;

        next();
      } catch (error) {
        next(new UnauthorizedError("Unauthorized"));
      }
      break;
    }
    default: {
      next(new UnauthorizedError("Unauthorized"));
      break;
    }
  }
}

module.exports = isLoggedIn;
