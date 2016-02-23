/****************************************
*	NAMESPACES
****************************************/
var APPNAME = APPNAME || {};
APPNAME.Modules = APPNAME.Modules || {};
APPNAME.Modules.Live = APPNAME.Modules.Live || {};
APPNAME.Utils = APPNAME.Utils || {};
APPNAME.Utils.Shims = APPNAME.Utils.Shims || {};

/****************************************
*	MODULE BASE CLASS
****************************************/
APPNAME.Modules.__module = (function($) {

	var module = function(props) {
		var properties = props; /* name, id, type, inittime, el */

		var defaults = {
			"name": "Module",
			"collapsible": false,
			"inittime": APPNAME.Utils.getCurrentTime()
		};

		this.settings = $.extend({}, defaults, properties);

		this.initialize();
	};

	module.prototype = {
		initialize: function() {
			this.elements = {};
			this.buildCache();
		},
		buildCache: function() {
			this.elements = {
				'$el': this.settings.el,
				'$body': $('body')
			};
		},
		floatFix: function(n) {
			if(typeof n === "number")
				return ((parseFloat(n).toFixed(2))/1);
			else {
				return "N/A";
			}
		},
		failState: function(ex) {
			APPNAME.Utils.loadblocker.block(this.$el,clientErrorMsg);
			throw new Error(ex);
		}
	};

	return module;

})(jQuery);
