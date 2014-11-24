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
};