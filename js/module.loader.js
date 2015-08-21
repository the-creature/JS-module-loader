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
					if(node && node.tagName) {
						data.container.appendChild( node );
						this.modules[ data.modules[i] ].parent = data.container;
						this.modules[ data.modules[i] ].node = node;
					}
					if(typeof data.callback === 'function') data.callback.call(this, node && node.tagName ? 'loaded' : 'fail', this.modules[ data.modules[i] ]);
				}
			}
		},
		createModule: function(data) {
			this.modules[data.name] = data;
		}
	}

	if(typeof jQuery !== 'undefined' || typeof Zepto !== 'undefined') {
		var $ = (typeof jQuery !== 'undefined' ? jQuery : typeof Zepto !== 'undefined' ? Zepto : {});
		$.fn.ModuleLoader = function(data) {
			return this.each(function() {
				$w.ModuleLoader.loadModules($.extend({container: this}, data));
			});
		}
	}

	$w.ModuleLoader = new ModuleLoader();
})(window);