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
		return (React.DOM.tr(null, "Hello!"));
	}
});

var GreetingTable = React.createClass({displayName: 'GreetingTable',
	render: function() {
		var rows = [];
		return (
			React.DOM.div(null, 
				"YAY"
			)
		);
	}
})

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

// var SearchBar = React.createClass({
//     render: function() {
//         return (
//             <form>
//                 <input type="text" placeholder="Search..." />
//                 <p>
//                     <input type="checkbox" />
//                     Blah blah blah
//                 </p>
//             </form>
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
	{id: 2, text: 'Bonjour', language: 'French'}
];

// var PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
 
// React.renderComponent(<FilterableProductTable products={PRODUCTS} />, document.body);

React.renderComponent(GreetingRow(null), document.body);