import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";


function Layout(props) {
	return (
		<React.Fragment>
			<Header />
			<div>{props.children}</div>
			<Footer />
		</React.Fragment>
	)
}

export default Layout;