App.Utils.renderModules = function() {
	//var modules = $('body').find('*[data-module]');
	// * or div ?
	var modules = $('*').filter(function(){return $(this).data('module');});
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
};

App.Utils.getCurrentTime = function() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var currentTime =  h+':'+m+':'+s;
	return currentTime;
};