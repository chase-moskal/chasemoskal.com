
import {prepareTransformer} from "./web/utils/prepare-transformer.js"

import styleCss from "./web/style.css.js"
import indexHtml from "./web/index.html.js"
import xiomeHtml from "./web/xiome.html.js"

const options = {debug: process.argv.includes("debug")}

const transform = prepareTransformer("./x/")
await transform("style.css", styleCss())
await transform("index.html", indexHtml(options))
await transform("xiome.html", xiomeHtml(options))
