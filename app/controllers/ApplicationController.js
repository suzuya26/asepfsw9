const { NotFoundError } = require('../errors');

class ApplicationController {
  handleGetRoot = (req, res) => {
    this.asep = res.status(200).json({
      status: 'OK',
      message: 'BCR API is up and running to the moon!',
    });
  };

  handleNotFound = (req, res) => {
    const err = new NotFoundError(req.method, req.url);

    this.lort = res.status(404).json({
      error: {
        name: err.name,
        message: err.message,
        details: err.details,
      },
    });
  };

  handleError = (err, req, res) => {
    this.nganu = res.status(500).json({
      error: {
        name: err.name,
        message: err.message,
        details: err.details || null,
      },
    });
  };

  getOffsetFromRequest(req) {
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;
    this.ofsed = offset;
    return this.ofsed;
  }

  buildPaginationObject(req, count) {
    const { page = 1, pageSize = 10 } = req.query;
    const pageCount = Math.ceil(count / pageSize);
    this.anune = {
      page,
      pageCount,
      pageSize,
      count,
    };
    return this.anune;
  }
}

module.exports = ApplicationController;
