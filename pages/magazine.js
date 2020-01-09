import React, { useState, useEffect, useRef, useCallback, useMemo, useLayoutEffect } from "react"
import MenuNav from "../components/MenuNav"
import Story from "../components/Story"
import Ad from "../components/Ad"


export default function Magazine() {
	const stories = [
		{ headline: "First Article", content: "<div style='height: 100vh;background-color:black;'> YOLO </div>" },
		{ headline: "Second Article", content: "<h1 style='height: 100vh;background-color:blue;'> Swag it up</h1>" },
		{ headline: "Third Articles", content: "<p style='height: 100vh;background-color:red;'>My name is </p>" },
		{ headline: "Fourth Articles", content: "<article style='height:100vh;background-color:yellow'>Welcome to the article</article>" },
		{ headline: "Fifth Articles", content: "<article style='height:100vh;background-color:purple'>Run of the mill</article>" }
	]
	const normalAreas = `"menu header header"
							"menu main nav"`
	const menuAreas = `"menu header header"
						"menu main main"`

	let [activeIndex, setActiveIndex] = useState(0)
	let [observer, setObserver] = useState(null)
	//determines if scroll handlers should fire since they interfere with link scrolling
	let [linkScrolling, setLinkScrolling] = useState(false)
	const [showMenu, setMenu] = useState(false)

	const onActive = active => setMenu(active)
	const observeRefs = node => {
		if (node != null && observer != null && !linkScrolling) {
			observer.observe(node)
		}
	}
	function setupObserver() {
		let opts = {
			root: null,
			rootMargin: '0px',
			theshold: [0.3, 0.7]
		}
		setObserver(new IntersectionObserver(handleScroll, opts))
	}
	function handleScroll(entries, _observer) {
		entries
			.forEach(entry => {
				if (entry.isIntersecting) {
					setActiveIndex(parseInt(entry.target.id.split("-")[1]))
				}
			})
	}
	function scrollToStory(index) {
		setLinkScrolling(true)
		observer.disconnect()
		setActiveIndex(index)
		//briefly wait until allowing scrollevent handlers to fire 
		setTimeout(() => setLinkScrolling(false), 500)
	}
	let storiesDOM = stories.map(
		({ headline, content }, index) => {
			const id = `story-${index}`
			const ref = useCallback(observeRefs, [activeIndex, observer, linkScrolling])

			const story = (
				<div className="story" key={id} id={id} ref={ref}>
					<Story htmlContent={content} headline={headline} />
				</div>
			)
			const li = <li key={id}><a onClick={() => scrollToStory(index)} className={index == activeIndex ? "active-now" : ""} href={`#${id}`}>{headline}</a></li>
			return { story, li }
		}
	)
	useEffect(setupObserver, [])
	return (
		<>
			<section id="big">
				{showMenu ? <div id="menu">Sidebar</div> : null}
				<header>
					<MenuNav onActive={onActive} />
					<div id="title">Title</div>
					<div id="logo">Logo</div>
				</header>
				<nav>
					<ul>{storiesDOM.map(({ li }) => li)}</ul>
				</nav>
				<main>
					{storiesDOM.map(({ story }) => story)}
				</main>
			</section>

			<style jsx global>{`
				:root {
					scroll-behavior: smooth;
				}
				h1{
					position: sticky;
				}
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
				nav ul{
					position: sticky;
					top: 0;
				}
				#menu{
					grid-area: menu;
				}
				ul{
					color: hotpink;
					list-style-type: none;
				}
				ul > li > a{
					color: blue;
					text-decoration: none;
				}
				.active-now{
					font-weight: bold;
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