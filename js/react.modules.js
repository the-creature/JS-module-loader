var Init = function(data) {
	var upper = (data.name.substr(0, 1).toUpperCase() + data.name.substr(1, data.name.length)),
		Object = React.createClass({
		render: function() {
			return (
				<div className={data.name}>
					<span>{upper} text</span>
				</div>
			);
		}
	});

	return React.render(<Object />, data.parent).getDOMNode();
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