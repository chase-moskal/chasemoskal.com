
import {html, template} from "@benev/turtle"
import {blog_posts} from "./blog_posts.context.js"
import page from "./partials/page.partial.html.js"

export default template(async basics => {
	const path = basics.path(import.meta.url)

	return page(basics, {
		content: html`
			<h1>chase's blog</h1>
			<nav>
				${blog_posts.map(post => html`
					<a href="${path.root(post.path)}">${post.path}</a>
				`)}
			</nav>
		`,
	})
})

