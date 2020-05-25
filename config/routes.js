/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /': { action: 'kurento-cilent-test/index' },
  'GET /hello': { action: 'kurento-cilent-test/hello-socket' },
  // 'GET /client': { view: 'ws-client' }
};
