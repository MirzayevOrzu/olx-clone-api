const { ForbiddenError } = require("../errors");

/**
 * @param {string[]} roles
 */
function hasRole(roles) {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  return function (req, res, next) {
    if (!roles.includes(req.user?.role)) {
      throw new ForbiddenError("You have no access to perform this action.");
    }
  };
}

module.exports = hasRole;
