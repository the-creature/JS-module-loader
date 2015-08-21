var App = angular.module('app', []);
var Init = function(data) {
	var container = document.createElement('div'),
		upper = (data.name.substr(0, 1).toUpperCase() + data.name.substr(1, data.name.length));

		App.controller(upper+'Controller', function($scope) {
			$scope.name = upper;
		});

	with(container) {
		setAttribute('ng-controller', upper+'Controller');
		innerHTML = '<span>{{name}} text</span>';
	}

	return container;
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