import React, { useState } from "react"
import MenuNav from "../components/MenuNav"
import Story from "../components/Story"
import Ad from "../components/Ad"

export default function Magazine(){
	const [showMenu, setMenu] = useState(false)
	const onActive = active => setMenu(active)

	const normalAreas = `"menu header header"
							"menu main nav"`
	const menuAreas = `"menu header header"
						"menu main main"`
	return (
		<>
			<section>
				{showMenu ? <div id="menu">Sidebar</div> : null}
				<header>
					<MenuNav onActive={onActive} />
					<div id="title">Title</div>
					<div id="logo">Logo</div>
				</header>
				<nav>Nav
					with a lot of stuff
					navvv
				</nav>
				<main>
					<Story headline="First Article!"
						htmlContent={`
						<p>This is dangerous!</p>

						<script>alert("DANGER")</script>
						
						`}
					/>
					<Ad/>
					<Story  headline="Second Article!"/>
				</main>
			</section>

			<style jsx>{`
				section{
					--primary:  rgba(224, 221, 221, 0.6);
				}
				section {
					display: grid;
					grid-template-rows: 2rem auto;
					grid-template-areas: ${normalAreas}; 
					
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
					background-color: var(--primary);
				}
				main{
					grid-area: main;
				}
				nav{
					grid-area: nav;
				}
				#menu{
					grid-area: menu;
				}
				
				`}

			</style>
			{/* separating out the dynamically set styles */}
			<style jsx>{`
					section {
						/*notifies browser ahead of time of what will change for 
						efficiency's sake*/
						will-change: grid-template-columns, grid-template-areas;
						transition: all 1s ease-in-out;
						grid-template-areas: ${showMenu ? menuAreas : normalAreas};
						grid-template-columns: ${showMenu ? '2fr 3fr auto' : '0fr 3fr auto'};
					}	
					nav{
						/* make the nav disappear when the menu is opened*/
						display: ${showMenu ? 'none' : 'block'};
					}
				`}</style>
		</>

	);
}