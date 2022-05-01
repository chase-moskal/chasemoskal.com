import { html } from "xiome/x/toolbox/hamster-html/html.js";
export default ({ mode, v }) => mode === "debug"
    ? html `
			<script type="module-shim" src="${v("/main.js")}"></script>
			<script type="importmap-shim" src="${v("/importmap.json")}"></script>
			<script src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
		`
    : html `
			<script src="${v("/main.bundle.min.js")}"></script>
		`;
//# sourceMappingURL=main-script.html.js.map