class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class UnauthorizedError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class ForbiddenError extends Error {
  constructor(msg) {
    super(msg);
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
};
