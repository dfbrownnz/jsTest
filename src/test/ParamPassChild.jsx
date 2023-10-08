import React from "react";

class Child extends React.Component {
	onTrigger = () => {
		this.props.parentCallback("Welcome to GFG from ParamPassChild");
	};

	render() {
		return (
			<div>
				<br></br> <br></br>
				<button onClick={this.onTrigger}>Click Parent Child Param</button>
			</div>
		);
	}
}

export default Child;
