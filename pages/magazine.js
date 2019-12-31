import React from "react";
import Layout from "../components/Layout.js";


const style = {
	display: "grid",
	gridTemplateRows: ""
};
class Magazine extends React.Component {
	render() {
		return (
			<>
				<section>
					<header>
						<div id="hamburger">a</div>
						<div id="title">Title</div>
						<div id="logo">b</div>
					</header>
					<nav>Nav</nav>
					<main>
						<h1>Main</h1>
						<article></article>
					</main>
				</section>

				<style jsx>{`
				section {
					display: grid;
					grid-template-columns: auto 4rem;
					grid-template-rows: 2rem auto;
					grid-template-areas: 
						"header header"
						"main nav"; 
				}
				header{
					grid-area: header;
					display: flex;
					flex-direction: row;
					width: 100%;
					justify-content: space-between;
					align-items: center;
				}
				#title{
					flex-grow: 3;
					text-align: center;
					font-size: 2rem;
				}
				main{
					grid-area: main;
				}
				nav{
					grid-area: nav;
				}
				
				`}

				</style>
			</>

		);
	}
}
export default Magazine;