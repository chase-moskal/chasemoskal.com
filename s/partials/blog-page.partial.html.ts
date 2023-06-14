
import page from "./page.partial.html.js"
import {BlogPost} from "../types/blog-post.js"
import {html, template, unsanitized} from "@benev/turtle"

const {url} = import.meta

export default template<{post: BlogPost}>(async(basics, {post}) => page(basics, {
	title: `blog - ${post.title}`,
	content: html`
		<h1>chase's blog</h1>
		<a href="${basics.path(url).root("")}">back</a>

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

