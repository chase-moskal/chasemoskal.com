
import {template, html, Html, easypage, startup_scripts_with_debug_mode} from "@benev/turtle"

export type PageOptions = {
	content: Html
	title?: string
}

export default template<PageOptions>(async(basics, {title, content}) => {
	const path = basics.path(import.meta.url)
	return easypage({
		path,
		title: title
			? `chasemoskal.com - ${title}`
			: `chasemoskal.com`,
		css: "style.css",
		head: html`
			<link rel="icon" href="/assets/favicon.ico"/>
			${startup_scripts_with_debug_mode(path)}
		`,
		body: html`
			<header>
				<h1>chase moskal</h1>
				<img alt="[image: portrait of chase moskal himself]" src="/assets/chase.jpg"/>
			</header>
		`,
	})
})

