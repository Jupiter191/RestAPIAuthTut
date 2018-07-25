'use strict';

module.exports = {
    success:{
        OK: 200,
        CREATED: 201,
        ACCEPTED: 201,
    },

    client: {
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404
    },

    server: {
        INTERNAL_SERVER_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        BAD_GATEWAY: 502
    }
};