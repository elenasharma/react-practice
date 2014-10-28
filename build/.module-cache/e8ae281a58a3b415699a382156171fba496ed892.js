/** @jsx React.DOM */
React.renderComponent(
  React.DOM.h1(null, "Hello, world!"),
  document.getElementById('example')
);


// var ProductCategoryRow = React.createClass({
//     render: function() {
//         return (<tr><th colSpan="2">{this.props.category}</th></tr>);
//     }
// });

// var ProductRow = React.createClass({
//     render: function() {
//         var name = this.props.product.stocked ?
//             this.props.product.name :
//             <span style={{color: 'purple'}}>
//                 {this.props.product.name}
//             </span>;
//         return (
//             <tr>
//                 <td>{name}</td>
//                 <td>{this.props.product.price}</td>
//             </tr>
//         );
//     }
// });

var GreetingRow = React.createClass({displayName: 'GreetingRow',
	render: function() {
		return (React.DOM.tr(null, this.props));
	}
});

var GreetingTable = React.createClass({displayName: 'GreetingTable',
	render: function() {
		var rows = [];
		this.props.greetings.forEach(function(greeting) {
			rows.push(GreetingRow({key: greeting.id, text: greeting.text, language: greeting.language}));
			React.DOM.br(null)
			});
		return (
			React.DOM.div(null, 
				rows
			)
		);
	}
});

// var ProductTable = React.createClass({
//     render: function() {
//         var rows = [];
//         var lastCategory = null;
//         this.props.products.forEach(function(product) {
//             if (product.category !== lastCategory) {
//                 rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
//             }
//             rows.push(<ProductRow product={product} key={product.name} />);
//             lastCategory = product.category;
//         });
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name!!!</th>
//                         <th>Price!</th>
//                     </tr>
//                 </thead>
//                 <tbody>{rows}</tbody>
//             </table>
//         );
//     }
// });

// var FilterableProductTable = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <SearchBar />
//                 <ProductTable products={this.props.products} />
//             </div>
//         );
//     }
// });


var GREETINGS = [
	{id: 1, text: 'Hello', language: 'English'},
	{id: 2, text: 'Bonjour', language: 'French'},
	{id: 3, text: 'Aloha', language: 'Hawaiian'}
];


React.renderComponent(GreetingTable({greetings: GREETINGS}), document.getElementById('example2'));
 
// React.renderComponent(<FilterableProductTable products={PRODUCTS} />, document.body);