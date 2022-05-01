import { buildWebsite } from "xiome/x/toolbox/hamster-html/website/build-website.js";
void async function main() {
    const mode = process.argv[2];
    if (!mode) {
        console.error(`website build requires argument "mode"`);
        process.exit(-1);
    }
    await buildWebsite({
        inputDirectory: "x/web/html",
        outputDirectory: "x",
        excludes: ["partials/**/*"],
        logWrittenFile: path => console.log("write", path),
        context: {
            mode,
        },
    });
}();
// import {prepareTransformer} from "./utils/prepare-transformer.js"
// import styleCss from "./style.css.js"
// import indexHtml from "./index.html.js"
// import xiomeHtml from "./xiome.html.js"
// const options = {debug: process.argv.includes("debug")}
// const transform = prepareTransformer("./x/")
// await transform("style.css", styleCss())
// await transform("index.html", indexHtml(options))
// await transform("xiome.html", xiomeHtml(options))
//# sourceMappingURL=build.js.map