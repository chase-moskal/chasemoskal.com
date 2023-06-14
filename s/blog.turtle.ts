
import {turtle_script} from "@benev/turtle"

import {blog_posts} from "./blog_posts.context.js"
import blogPageHtml from "./partials/blog-page.partial.html.js"

export default turtle_script(async({write_webpage}) => {
	await Promise.all(blog_posts.map(async post => {
		await write_webpage({
			template: blogPageHtml,
			destination: post.path + ".html",
			context: {post},
		})
	}))
})

