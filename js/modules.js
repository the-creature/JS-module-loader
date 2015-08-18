moduleLoader.createModule({
	name: 'util',
	init: function(data) {
		var Object = React.createClass({
			render: function() {
				return (
					<div className="utilite">
						<span>Util text</span>
					</div>
				);
			}
		});

		return React.render(<Object />, data.parent).getDOMNode();
	}
});

moduleLoader.createModule({
	name: 'header',
	init: function(data) {
		var Object = React.createClass({
			render: function() {
				return (
					<header>
						<span>Header text</span>
					</header>
				);
			}
		});

		return React.render(<Object />, data.parent).getDOMNode();
	}
});

moduleLoader.createModule({
	name: 'carousel',
	init: function(data) {
		var Object = React.createClass({
			render: function() {
				return (
					<div className="carousel">
						<span>Carousel text</span>
					</div>
				);
			}
		});

		return React.render(<Object />, data.parent).getDOMNode();
	}
});

moduleLoader.createModule({
	name: 'modal',
	init: function(data) {
		var Object = React.createClass({
			render: function() {
				return (
					<div className="modal">
						<span>Modal text</span>
					</div>
				);
			}
		});

		return React.render(<Object />, data.parent).getDOMNode();
	}
});

moduleLoader.createModule({
	name: 'tooltip',
	init: function(data) {
		var Object = React.createClass({
			render: function() {
				return (
					<div className="tooltip">
						<span>Tooltip text</span>
					</div>
				);
			}
		});

		return React.render(<Object />, data.parent).getDOMNode();
	}
});

moduleLoader.createModule({
	name: 'autocomplete',
	init: function(data) {
		var Object = React.createClass({
			render: function() {
				return (
					<div className="autocomplete">
						<span>Autocomplete text</span>
					</div>
				);
			}
		});

		return React.render(<Object />, data.parent).getDOMNode();
	}
});