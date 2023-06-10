
import {webpage, html, unsanitized} from "@benev/turtle"

import pageHtml from "./page.html.js"
import {BlogPost} from "../types/blog-post.js"

export default webpage<{post: BlogPost}>(async(basics, {post}) => pageHtml(basics, {
	content: html`
		<h1>Chase's Blog</h1>
		<a href="${basics.base}/">back</a>

		<article>
			<h1>${post.title}</h1>

			${post.tags.length
				? html`
					<ul class=tags>
						${post.tags.map(tag => html`
							<li>${tag}</li>
						`)}
					</ul>
				`
				: undefined}

			${unsanitized(post.content)}
		</article>
	`,
}))

