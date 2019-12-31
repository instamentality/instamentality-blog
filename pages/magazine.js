import React from "react";
import Layout from "../components/Layout.js";


const style = {
	display: "grid",
	gridTemplateRows: ""
};
class Magazine extends React.Component {
	render() {
		return (
			<Layout>
				<section>
					<header>Header</header>
					<nav>Nav</nav>
					<main>Main</main>
				</section>

				<style jsx>{`
				section {
					display: grid;
					grid-template-columns: auto 4rem;
					grid-template-rows: 2rem auto;
					grid-template-areas: 
						"header nav"
						"main nav"; 
				}
				header{
					grid-area: header;
				}
				main{
					grid-area: main;
				}
				nav{
					grid-area: nav;
				}
				
				`}

				</style>
			</Layout>

		);
	}
}
export default Magazine;