import { MyWebsiteContext } from "../../types.js";
import { HtmlTemplate } from "xiome/x/toolbox/hamster-html/html.js";
declare const _default: ({ title, headContent, mainContent, context }: {
    title: string;
    headContent?: HtmlTemplate;
    mainContent: HtmlTemplate;
    context: MyWebsiteContext;
}) => HtmlTemplate;
export default _default;
