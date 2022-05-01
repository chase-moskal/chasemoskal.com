
import {MyWebsiteContext} from "../../types.js"
import {html, HtmlTemplate} from "xiome/x/toolbox/hamster-html/html.js"
export default ({title, headContent, mainContent, context}: {
	title: string
	headContent?: HtmlTemplate
	mainContent: HtmlTemplate
	context: MyWebsiteContext
}) => html`

<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width,initial-scale=1"/>
	<meta name="darkreader" content="dark"/>
	<title>${title}</title>

	<link rel=stylesheet href="${context.v("/style.css")}"/>
	<link rel="icon" href="/assets/favicon.ico"/>

	${headContent}
</head>
<body class="home">
	<main>
		${mainContent}
	</main>
</body>
</html>

`
