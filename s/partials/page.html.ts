
import {webpage, html, HtmlTemplate} from "@benev/turtle"

export default webpage<{content: HtmlTemplate}>(async({v}, {content}) => html`

	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader" content="dark"/>
			<link rel="stylesheet" href="${v(`/style.css`)}"/>
			<link rel="icon" href="/assets/favicon.ico"/>
			<title>chasemoskal.com</title>
		</head>
		<body>
			<header>
				<h1>chase moskal</h1>
				<img alt="[image: portrait of chase moskal himself]" src="/assets/chase.jpg"/>
			</header>

			${content}
		</body>
	</html>

`)

