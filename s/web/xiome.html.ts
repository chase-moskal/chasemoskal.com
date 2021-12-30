
import {noop as html} from "./utils/template-noop.js"
import headBasicsHtml from "./partials/head-basics.html.js"
export default ({debug}: {debug: boolean}) => html`

<!doctype html>
<html>
<head>
	${headBasicsHtml({title: "chasemoskal.com – xiome", debug})}
	<script defer src="https://stage.xiome.io/xiome.bundle.min.js"></script>
	<xiome-config
		app="3076e9a97fbfbafa23b3d44f2c4eec44cfbacdfbf70a3be39656fcee16750406"
		api="https://api.stage.xiome.io"
		platform="https://stage.xiome.io"
	></xiome-config>
</head>
<body class="home">
	<main>
		<h1>chase moskal – xiome playground</h1>
		<h2>login to your account</h2>
		<xiome-login-panel show-logout>
			<xiome-my-account></xiome-my-account>
		</xiome-login-panel>
		<h2>check out the cool chat</h2>
		<xiome-chat></xiome-chat>
	</main>
</body>
</html>

`
