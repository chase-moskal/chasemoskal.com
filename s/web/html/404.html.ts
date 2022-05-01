
import {MyWebsiteContext} from "../types.js"
import pageHtml from "./partials/page.html.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default (context: MyWebsiteContext) => pageHtml({
	title: "404 - chasemoskal.com",
	context,
	mainContent: html`
		<h1>404 not found</h1>
	`
})
