/**
 * Frontend routes.
 */
module.exports = {

  HOME: {
    path: '/',
    load: (fn) => require.ensure([], () => fn(require('./pages/HomePage')))
  },

  NOT_FOUND: {
    path: '*',
    load: (fn) => require.ensure([], () => fn(require('./pages/404Page')))
  }
};

// Cookie helpers
function getCookie(key){return document.cookie.split(';').map(function(arg){return arg.split('=')}).filter(function(arr){return arr[0].trim()==key})[0][1];};
function delCookie(name){document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';};
