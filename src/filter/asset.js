/**
 * Filters: asset
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

module.exports = function (ns, registerFilter, debug) {

  registerFilter('asset_url', function (url) {
    if (url[0] !== '/') url = '/' + url;
    return '/assets' + url;
  });

};
