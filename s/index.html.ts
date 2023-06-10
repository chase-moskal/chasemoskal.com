
import {webpage, html} from "@benev/turtle"

import pageHtml from "./partials/page.html.js"
import {blog_posts} from "./blog_posts.context.js"

export default webpage(async(basics) => pageHtml(basics, {
	content: html`
		<h1>chase's blog</h1>
		<nav>
			${blog_posts.map(post => html`
				<a href="${basics.base}/${post.path}">${post.title}</a>
			`)}
		</nav>
	`,
}))

