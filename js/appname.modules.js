var APPNAME = APPNAME || {};

/* MODULE 100 */
APPNAME.Modules.module100 = (function($) {
	var module = function(el, id) {

		var properties = {
			"el"	: el,
			"ID"	: id,
			"name"	: "Module Name"
		};

		APPNAME.Modules.__module.call(this, properties);
		this.init();
	};

	module.prototype = Object.create(APPNAME.Modules.__module.prototype);

	$.extend(module.prototype, {
		init: function() {
			this.moduleCache();
			this.listeners();

			this.elements.$el.append(this.settings.inittime)
		},
		moduleCache: function() {
			// cache dom elements for later use
			// this.elements.$someEl = this.elements.$el.find("selector");
		},
		listeners: function() {

		}
	});

	return module;
})(jQuery);

/* MODULE 101 */
APPNAME.Modules.module101 = (function($) {
	var module = function(el, id) {

		var properties = {
			"el"	: el,
			"ID"	: id,
			"name"	: "Module Name"
		};

		APPNAME.Modules.__module.call(this, properties);
		this.init();
	};

	module.prototype = Object.create(APPNAME.Modules.__module.prototype);

	$.extend(module.prototype, {
		init: function() {
			this.moduleCache();
			this.listeners();

			this.elements.$el.append(this.settings.inittime)
		},
		customMethod: function() {
			alert("Custom Method")
		},
		moduleCache: function() {
			this.elements.$btn = this.elements.$el.find(".btn");
		},
		listeners: function() {
			var _self = this;

			this.elements.$btn.on('click', function() {
				// used self cause func. context changes in listeners
				_self.customMethod();
			})
		}
	});

	return module;
})(jQuery);

/* MODULE 102 */
APPNAME.Modules.module102 = (function($) {
	var module = function(el, id) {

		var properties = {
			"el"	: el,
			"ID"	: id,
			"name"	: "Module Name"
		};

		APPNAME.Modules.__module.call(this, properties);
		this.init();
	};

	module.prototype = Object.create(APPNAME.Modules.__module.prototype);

	$.extend(module.prototype, {
		init: function() {
			this.moduleCache();
			this.listeners();

			this.elements.$el.append(this.settings.inittime)
		},
		moduleCache: function() {
			// cache dom elements for later use
			// this.elements.$someEl = this.elements.$el.find("selector");
		},
		listeners: function() {

		}
	});

	return module;
})(jQuery);

/* MODULE 103 */
APPNAME.Modules.module103 = (function($) {
	var module = function(el, id) {

		var properties = {
			"el"	: el,
			"ID"	: id,
			"name"	: "Module Name"
		};

		APPNAME.Modules.__module.call(this, properties);
		this.init();
	};

	module.prototype = Object.create(APPNAME.Modules.__module.prototype);

	$.extend(module.prototype, {
		init: function() {
			this.moduleCache();
			this.listeners();

			this.elements.$el.append(this.settings.inittime)
		},
		moduleCache: function() {
			// cache dom elements for later use
			// this.elements.$someEl = this.elements.$el.find("selector");
		},
		listeners: function() {

		}
	});

	return module;
})(jQuery);
