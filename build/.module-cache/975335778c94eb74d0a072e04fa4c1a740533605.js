/** @jsx React.DOM */
React.renderComponent(
  React.DOM.h1(null, "Hellos of the world!"),
  document.getElementById('example')
);



var GreetingRow = React.createClass({displayName: 'GreetingRow',
	render: function() {
		return (React.DOM.div(null, React.DOM.tr(null, this.props.text), ", which is in ", React.DOM.tr(null, this.props.language)));
	}
});

var GreetingTable = React.createClass({displayName: 'GreetingTable',
	render: function() {
		var rows = [];
		this.props.greetings.forEach(function(greeting) {
			rows.push(React.DOM.div(null, GreetingRow({key: greeting.id, text: greeting.text, language: greeting.language}), React.DOM.br(null)));
			});
		return (
			React.DOM.div(null, 
				rows
			)
		);
	}
});

var GREETINGS = [
	{id: 1, text: 'Hello', language: 'English'},
	{id: 2, text: 'Bonjour', language: 'French'},
	{id: 3, text: 'Aloha', language: 'Hawaiian'}
];

React.renderComponent(GreetingTable({greetings: GREETINGS}), document.getElementById('example2'));