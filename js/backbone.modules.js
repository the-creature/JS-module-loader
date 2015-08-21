var Init = function(data) {
	var container = $('<div />'),
		upper = (data.name.substr(0, 1).toUpperCase() + data.name.substr(1, data.name.length));

	var Module = Backbone.View.extend({
		initialize: function(){
			_.bindAll(this, 'render');
			this.render();
		},
		render: function(){
			$(this.el).html('<span>'+upper+' text</span>');
		}
	});

	return new Module({el: container}).$el[0];
}

ModuleLoader.createModule({
	name: 'util',
	init: Init
});

ModuleLoader.createModule({
	name: 'header',
	init: Init
});

ModuleLoader.createModule({
	name: 'carousel',
	init: Init
});

ModuleLoader.createModule({
	name: 'modal',
	init: Init
});

ModuleLoader.createModule({
	name: 'tooltip',
	init: Init
});

ModuleLoader.createModule({
	name: 'autocomplete',
	init: Init
});