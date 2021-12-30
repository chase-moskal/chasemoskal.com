
import {noop as html} from "../utils/template-noop.js"
export default (options: {title: string, debug: boolean}) => html`

<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${options.title}</title>

<link rel=stylesheet href="/style.css"/>
<link rel="icon" href="/assets/favicon.ico"/>

${options.debug?
	html`
		<script type="module-shim" src="/main.js"></script>
		<script type="importmap-shim" src="/importmap.json"></script>
		<script src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
	`:
	html`
		<script src="/main.bundle.min.js"></script>
	`}

`
