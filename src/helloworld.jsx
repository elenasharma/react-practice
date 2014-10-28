/** @jsx React.DOM */
React.renderComponent(
  <h1>Hellos of the world!</h1>,
  document.getElementById('example')
);


var GreetingRow = React.createClass({
	render: function() {
		return (<div><tr>{this.props.text}</tr>, which is in <tr>{this.props.language}</tr></div>);
	}
});

var GreetingTable = React.createClass({
	render: function() {
		var rows = [];
		this.props.greetings.forEach(function(greeting) {
			rows.push(<div><GreetingRow key={greeting.id} text={greeting.text} language={greeting.language}/><br/></div>);
			});
		return (
			<div>
				{rows}
			</div>
		);
	}
});

var GREETINGS = [
	{id: 1, text: 'Hello', language: 'English'},
	{id: 2, text: 'Bonjour', language: 'French'},
	{id: 3, text: 'Aloha', language: 'Hawaiian'}
];

React.renderComponent(<GreetingTable greetings={GREETINGS}/>, document.getElementById('example2'));