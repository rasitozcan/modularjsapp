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
	};
    /*dependencies = {
        "App.UI.modules" : "custom-checkbox",
        "App.UI.modules" : "validate"
    },*/
	init = function() {
		el.append("<span>Initialized at "+App.Utils.getCurrentTime()+"</span>");
		return true;
	};
	moduleFunc = function() {
		console.log('I am private method of 100');
	};
	return {
		init: init(),
		info: info
	};
};

App.Modules.module101 = function(el) {
	//private variables
	info = {
		id		: 101,
		type	: "Calculator",
		name	: "Sth. Calculator",
		el		: el,
		inittime: App.Utils.getCurrentTime()
	};
	init = function() {
		el.append("<span>Initialized at "+App.Utils.getCurrentTime()+"</span>");
		return true;
	};
	moduleFunc = function() {
		console.log('I am private method of 101');
	};
	return {
		init: init(),
		info: info
	};
};

App.Modules.module102 = function(el) {
	//private variables
	info = {
		id		: 102,
		type	: "Banking Tool",
		name	: "Exchange Rates",
		el		: el,
		inittime: App.Utils.getCurrentTime()
	};
	init = function() {
		el.append("<span>Initialized at "+App.Utils.getCurrentTime()+"</span>");
		return true;
	};
	moduleFunc = function() {
		console.log('I am private method of 102');
	};
	testMethod = function() {
		console.log('i am test method in 102');
	};
	return {
		init: init(),
		info: info
	};
};