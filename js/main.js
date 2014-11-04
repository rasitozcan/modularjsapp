/*
Modular Application Js. Boilerplate
@author Rasit Ozcan <ozcanrasit@gmail.com>
@copyright 2014 Rasit Ozcan <ozcanrasit@gmail.com>
@license The MIT License (MIT) <http://opensource.org/licenses/MIT/>
*/

var App = App || {};
	App.Modules = App.Modules || {};
	App.Modules.Live = App.Modules.Live || {};
	App.Utils = App.Utils || {};
    // TODO:
    //App.UI = App.UI || {};

App.init = function() {
	App.Utils.renderModules();
	App.Utils.domListener();
}

/*** utils.js start ***/
App.Utils.renderModules = function() {
	//var modules 	= $('body').find('*[data-module]');
	// * or div ?
	var modules 	= $('*').filter(function(){return $(this).data('module')});

	modules.each(function(index,el) {
        $this = $(el);
		var moduleID = $this.data('module');
		var data = $this.data('moduledetail');

		if (!data) {
            try {
                $this.data('moduledetail', (data = new App.Modules['module'+moduleID]($this)));
                App.Modules.Live['module' + moduleID + '_' + index] = data;
            } catch(e) {
                $('*').filter('[data-module = '+moduleID+']').remove();
                if(typeof console == "object") console.log('%c' + e.name + ': ' + e.message + ' | No such module logic as: module' + moduleID, 'background-color: yellow');

                // TODO:
                // exception handler
                // xhr post data to security monitor
                // var ExData = {
                //      'site': window.parent.location.origin
                //      'url': window.location.href,
                //      'referrer': document.referrer,
                //      'trace': e.stack || 'N/A'
                //      ...
                // }
            }

		}

	});
}

App.Utils.domListener = function() {
	$('body').on("ajax", function() {
		App.Utils.renderPage();
	});
}

App.Utils.getCurrentTime = function() {
	    var d = new Date();
	    var h = d.getHours();
	    var m = d.getMinutes();
	    var s = d.getSeconds();
	    var currentTime =  h+':'+m+':'+s;
	    return currentTime;
}
/*** utils.js end ***/

/*** modules.js start ***/

//TODO: Module dependencies
//nasil yapsam acaba?

App.Modules.module100 = function(el) {
	//private variables
	info = {
		id		: 100,
		type	: "Calculator",
		name	: "Sth. Calculator",
		el		: el,
		inittime: App.Utils.getCurrentTime()
	},
    /*dependencies = {
        "App.UI.modules" : "custom-checkbox",
        "App.UI.modules" : "validate"
    },*/
	init = function() {
		el.append("<span>Initialized at "+App.Utils.getCurrentTime()+"</span>");
		return true;
	}
	moduleFunc = function() {
		console.log('I am private method of 100');
	}
	return {
		init: init(),
		info: info
	}
}

App.Modules.module101 = function(el) {
	//private variables
	info = {
		id		: 101,
		type	: "Calculator",
		name	: "Sth. Calculator",
		el		: el,
		inittime: App.Utils.getCurrentTime()
	}
	init = function() {
		el.append("<span>Initialized at "+App.Utils.getCurrentTime()+"</span>");
		return true;
	}
	moduleFunc = function() {
		console.log('I am private method of 101');
	}
	return {
		init: init(),
		info: info
	}
}

App.Modules.module102 = function(el) {
	//private variables
	info = {
		id		: 102,
		type	: "Banking Tool",
		name	: "Exchange Rates",
		el		: el,
		inittime: App.Utils.getCurrentTime()
	}
	init = function() {
		el.append("<span>Initialized at "+App.Utils.getCurrentTime()+"</span>");
		return true;
	}
	moduleFunc = function() {
		console.log('I am private method of 102');
	}
	testMethod = function() {
		console.log('i am test method in 102');
	}
	return {
		init: init(),
		info: info
	}
}
/*** modules.js end ***/