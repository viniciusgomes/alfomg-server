module.exports = {
  "initial:before": {
    "loopback#favicon": {}
  },
  "initial": {
    "compression": {},
    "cors": {
      "params": {
        "origin": true,
        "credentials": true,
        "maxAge": 86400
      }
    },
    "helmet#xssFilter": {},
    "helmet#frameguard": {
      "params": {
        "action": "deny"
      }
    },
    "helmet#hsts": {
      "params": {
        "maxAge": 0,
        "includeSubDomains": true
      }
    },
    "helmet#hidePoweredBy": {},
    "helmet#ieNoOpen": {},
    "helmet#noSniff": {},
    "helmet#noCache": {
      "enabled": false
    }
  },
  "session": {},
  "auth": {},
  "parse": {},
  "routes": {
    "loopback#rest": {
      "paths": [
        "${restApiRoot}"
      ]
    }
  },
  "files": {},
  "final": {
    "loopback#urlNotFound": {}
  },
  "final:after": {
    "strong-error-handler": {
      "params": {
        "debug": true,
        "log": true
      }
    }
  }
};