
import {MyWebsiteContext} from "../types.js"
import pageHtml from "./partials/page.html.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default (context: MyWebsiteContext) => pageHtml({
	title: "chasemoskal.com",
	context,
	mainContent: html`
		<h1>chase moskal.</h1>
		<p>too busy on github to have a cool website.</p>
		<p data-indent><a href="https://github.com/chase-moskal">@chase-moskal</a></p>
	`
})
