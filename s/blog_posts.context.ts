
import yaml from "yaml"
import {glob} from "glob"
import Path from "path"
import MarkdownIt from "markdown-it"
import {readFile} from "fs/promises"

import {BlogPost} from "./types/blog-post.js"

export const blog_posts: BlogPost[] = []

const ignore: string[] = []
const pattern = "blog/**/*.md"
const paths = await glob(pattern, {ignore, nodir: true})

for (const path of paths) {
	const text = await readFile(path, "utf-8")
	const [frontmatter, markdown] = text.split("---")

	const parsed_path = Path.parse(path)
	const date = parsed_path.dir.split("/").at(-1)!

	const md = new MarkdownIt()
	const html = md.render(markdown)
	const data = yaml.parse(frontmatter)
	const name = data.name as string

	blog_posts.push({
		date,
		name,
		path: `${date}/${name}`,
		title: data.title,
		tags: (data.tags as string)
			.split(",")
			.map(t => t.trim())
			.filter(t => t.length > 0),
		content: html,
	})
}

blog_posts.sort((a, b) => a.date.localeCompare(b.date, "en-US"))

