
import {MyWebsiteContext} from "../../types.js"
import {html, HtmlTemplate} from "xiome/x/toolbox/hamster-html/html.js"
export default ({title, headContent, mainContent, context: {mode, v}}: {
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
	<title>${title}</title>

	<link rel=stylesheet href="${v("/style.css")}"/>
	<link rel="icon" href="/assets/favicon.ico"/>

	${mode === "debug"
		? html`
			<script type="module-shim" src="${v("/main.js")}"></script>
			<script type="importmap-shim" src="${v("/importmap.json")}"></script>
			<script src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
		`
		: html`
			<script src="${v("/main.bundle.min.js")}"></script>
		`}

	${headContent}
</head>
<body class="home">
	<main>
		${mainContent}
	</main>
</body>
</html>

`
