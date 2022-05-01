
import {MyWebsiteContext} from "../types.js"
import pageHtml from "./partials/page.html.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

const links = {
	"xiome": "https://github.com/chase-moskal/xiome",
	"benevolent.games": "https://github.com/benevolent-bees/benevolent.games",
	"webp-hero": "https://github.com/chase-moskal/webp-hero",
	"sparrow-rtc": "https://github.com/chase-moskal/sparrow-rtc",
	"importly": "https://github.com/chase-moskal/importly",
	"snapstate": "https://github.com/chase-moskal/snapstate",
	"dbmage": "https://github.com/chase-moskal/dbmage",
	"shopper": "https://github.com/chase-moskal/shopper",
	"crnc": "https://github.com/chase-moskal/crnc",
	"renraku": "https://github.com/chase-moskal/renraku",
}

export default ({v, ...context}: MyWebsiteContext) => pageHtml({
	title: "chasemoskal.com",
	context: {v, ...context},
	mainContent: html`
		<h1>
			<img alt="" src="${v("/assets/chase.jpg")}"/>
			<span>chase moskal</span>
		</h1>
		
		<p>"i'm too busy on github to have a cool website"</p>
		<p><a href="https://github.com/chase-moskal">github.com/chase-moskal</a></p>

		<ul>
			${Object.entries(links).map(([label, href]) => html`
				<li><a href="${href}">${label}</a></li>
			`)}
		</ul>
	`
})
