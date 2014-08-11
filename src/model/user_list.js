/**
 * Model: user_list
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, createModel, debug) {

  var crypto = ns('lib.crypto');

  var model = createModel({
    connection: ns('db'),
    table:      'user_list',
    primary:    'id',
    limit:      ns('config.model.limit'),
    fields: {
      id:           'number',
      name:         'string',
      email:        'string',
      password:     'string',
      is_valid:     'number',
      created_at:   'number',
      updated_at:   'number'
    },
    queryFields: ['name', 'email'],
    requiredFields: ['name', 'email', 'password'],
    input: function (data, callback, type) {
      if (type === 'add') {
        data.created_at = model.timestamp();
        if (!('is_valid' in data)) {
          data.is_valid = 1;
        }
      }
      if (type === 'add' || type === 'update2') {
        data.updated_at = model.timestamp();
        if ('password' in data) {
          data.password = crypto.encryptPassword(data.password);
        }
      }
      callback(null, data);
    }
  });

  return model;

};