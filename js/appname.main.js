var APPNAME = (function() {

  var siteInfo = {
			//NEEDED DYNAMIC INFO, EX: language etc..
  };

  var init = function() {
    this.Utils.renderModules();
  };

  return {
    'Siteinfo': siteInfo,
    'init': init
  };

})();

/****************************************
 *	NAMESPACES
 ****************************************/
var APPNAME = APPNAME || {};
APPNAME.UI = APPNAME.UI || {};
APPNAME.Modules = APPNAME.Modules || {};
APPNAME.Modules.Live = APPNAME.Modules.Live || {};
APPNAME.Utils = APPNAME.Utils || {};
APPNAME.Utils.Shims = APPNAME.Utils.Shims || {};

$(function() {
  APPNAME.init();
});
