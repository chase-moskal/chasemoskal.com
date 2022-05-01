
import {MyWebsiteContext} from "../types.js"
import pageHtml from "./partials/page.html.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

const links = {
	"benevolent.games": "https://github.com/benevolent-bees/benevolent.games",
	"xiome": "https://github.com/chase-moskal/xiome",
	"webp-hero": "https://github.com/chase-moskal/webp-hero",
	"importly": "https://github.com/chase-moskal/importly",
	"snapstate": "https://github.com/chase-moskal/snapstate",
	"dbmage": "https://github.com/chase-moskal/dbmage",
	"renraku": "https://github.com/chase-moskal/renraku",
	"sparrow-rtc": "https://github.com/chase-moskal/sparrow-rtc",
	"shopper": "https://github.com/chase-moskal/shopper",
	"crnc": "https://github.com/chase-moskal/crnc",
	"redcrypto": "https://github.com/chase-moskal/redcrypto",
}

export default ({v, ...context}: MyWebsiteContext) => pageHtml({
	title: "chasemoskal.com",
	context: {v, ...context},
	mainContent: html`
		<h1>
			<img alt="" src="${v("/assets/chase.jpg")}"/>
			<span>chase moskal</span>
		</h1>

		<p><em>“i'm too busy on github to have a cool website”</em></p>
		<p><a href="https://github.com/chase-moskal">github.com/chase-moskal</a></p>

		<div class=projects>
			${Object.entries(links).map(([label, href]) => html`
				<a href="${href}">${label}</a>
			`)}
		</div>
	`
})
