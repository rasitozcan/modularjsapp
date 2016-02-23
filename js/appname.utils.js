/****************************************
 *	BROWSER SHIMS
 * Object.create for ie8 and below
 ****************************************/
APPNAME.Utils.Shims.ObjectCreate = (function() {
  if (!Object.create) {
    Object.create = (function() {
      function F() {}

      return function(o) {
        if (arguments.length !== 1) {
          throw new Error('Object.create implementation only accepts one parameter.');
        }
        F.prototype = o;
        return new F();
      };
    })();
  }
})();

/****************************************
 *
 *	MODULE RENDERER
 *
 ****************************************/
APPNAME.Utils.renderModules = (function($) {
  var moduleElements, moduleID, moduleData;

  var init = function() {
    gatherElements();
  };

  var gatherElements = function() {
    moduleElements = $('*').filter(function() {
      return $(this).data('module');
    });
    createModule(moduleElements);
  };

  var createModule = function(modules) {
    var $this;
    $.each(modules, function(index, el) {
      $this = $(el);
      moduleID = $this.data('module');
      moduleData = $this.data('module_' + moduleID);

      if (!moduleData && APPNAME.Modules['module' + moduleID]) {

        $this.data('module_' + moduleID, (
          data = new APPNAME.Modules['module' + moduleID]($this, moduleID)));

        APPNAME.Modules.Live[index] = data.settings;
        //console.log('%c' + 'initialized:' + moduleID , 'background-color: yellow');
      }
    });
  };

  return init;
})(jQuery);

/****************************************
 *	CURRENT TIME GENERATOR
 ****************************************/
APPNAME.Utils.getCurrentTime = function(shortTime) {
  var d = new Date();
  var h = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
  var m = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
  var s = d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds();
  var currentTime = shortTime ? h +':'+ m : h + ':' + m + ':' + s;
  return currentTime;
};

/****************************************
 *
 *	LOAD BLOCKER
 *
 ****************************************/
APPNAME.Utils.loadblocker = (function(el, msg, customClass) {

  var block = function(el, msg, customClass) {
    var $el = el;
    unBlock(el);
    if (!msg) {
      $el.append('<div class="loadblock"></div>');
    } else {
      $el.append('<div class="loadblock msg '+ customClass +'"><span>' + msg + '</span></div>');
    }
  };

  var unBlock = function(el) {
    var $el = el;
    if ($el)
      $el.find(".loadblock").remove();
    else
      $(".loadblock").remove(); //remove all if no element specified
  };

  return {
    block: block,
    unBlock: unBlock
  };
})();
