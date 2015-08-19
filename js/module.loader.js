/*
	Module loader v 1.0
*/

;(function($w) {
	var ModuleLoader = function() {
		this.modules = {};

		return this;
	}

	ModuleLoader.prototype = {
		constructor: ModuleLoader,
		loadModules: function(data) {
			for(i in data.modules) {
				if(this.modules[ data.modules[i] ]) {
					this.modules[ data.modules[i] ].parent = document.createElement('div');
					var node = this.modules[ data.modules[i] ].init.call(this, this.modules[ data.modules[i] ]);
					if(node.tagName) data.container.appendChild( node );
				}
			}
		},
		createModule: function(data) {
			this.modules[data.name] = data;
		}
	}

	if(typeof jQuery !== 'undefined' || typeof Zepto !== 'undefined') {
		var $ = jQuery || Zepto;
		$.fn.ModuleLoader = function(data) {
			return this.each(function() {
				moduleLoader.loadModules($.extend({container: this}, data));
			});
		}
	}

	$w.moduleLoader = new ModuleLoader();
})(window);

function Dog(name) {
    Animal.call(this, name);
}
 
Dog.prototype = new Animal(null);
 
Dog.prototype.bark = function() {
    console.log("Woof!");
};