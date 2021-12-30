
import {noop as css} from "./utils/template-noop.js"
export default () => css`

* {
	margin: 0;
	padding: 0;
}

html {
	font-size: 21px;
	font-family: sans-serif;
	color: #fff6;
	background: #181818;
}

html, body, canvas {
	height: 100%;
}

main {
	padding: 4em;
	max-width: 42em;
	margin: auto;
}

a { color: #f90; opacity: 0.5; transition: opacity ease 200ms; }
a:visited { opacity: 0.4; }
a:focus, a:hover { opacity: 0.8; }
a:active { opacity: 1; }

main > * + * {
	margin-top: 0.4rem;
}

main [data-indent] {
	padding-left: 1em;
}

`
