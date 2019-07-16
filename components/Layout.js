import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

class Layout extends React.Component{

	render(){
		return (
			<React.Fragment>
		<Header/> 
		<div>{this.props.children}</div>
		<Footer/>
			</React.Fragment>
		)
	}
}

export default Layout;