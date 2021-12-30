
import {noop as html} from "./utils/template-noop.js"
import headBasicsHtml from "./partials/head-basics.html.js"
export default ({debug}: {debug: boolean}) => html`

<!doctype html>
<html>
<head>
	${headBasicsHtml({title: "chasemoskal.com", debug})}
</head>
<body class="home">
	<main>
		<h1>chase moskal.</h1>
		<p>too busy on github to have a cool website.</p>
		<p data-indent><a href="https://github.com/chase-moskal">@chase-moskal</a></p>
	</main>
</body>
</html>

`
