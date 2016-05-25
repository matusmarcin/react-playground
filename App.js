import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0,
			blue: 0,
			green: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
		})
	}
	render() {
		return (
			<div>
				<h1>Hi there</h1>
				<strong>You ass.</strong>
				<p><code>rgb({this.state.red}, {this.state.green}, {this.state.blue});</code></p>
				<hr />
				<Slider ref="red" update={this.update} />
				<Slider ref="green" update={this.update} />
				<Slider ref="blue" update={this.update} />
			</div>
		);
	}
}

class Slider extends React.Component {
	render() {
		return (
			<input type="range"
				min="0"
				max="255"
				onChange={this.props.update} />
		);
	}
}

// const Widget = (props) => {
// 	return (
// 		<div>
// 			<p>
// 				<input type="text"
// 				onChange={props.update} />
// 				<br /><br />
// 				<strong>{props.txt}</strong>
// 			</p>
// 		</div>
// 	);
// }

// 1.
// stateless - pretty cool
//const App = () => <h1>Hello there</h1>

// 2. + 4.
export default App

// 3.
// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
// 	cat: 6
// }
//
// ReactDOM.render(
// 	<App txt="this is the text" />,
// 	document.getElementById('app')
// );
