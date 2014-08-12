/**
 * Locals: app
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, registerLocals, debug) {
  var app = ns('app');
  var utils = ns('lib.utils');

  registerLocals('apps', function (name, callback, context) {
    app.call('app.get_list', {limit: 99999}, function (err, list) {
      callback(null, list || []);
    });
  });

};