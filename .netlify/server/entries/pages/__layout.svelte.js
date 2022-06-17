var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f2242e29 = require("../../chunks/index-f2242e29.js");
var global = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-rkawlf.svelte-rkawlf{text-align:center;background:var(--primary);padding:0.5rem}header.svelte-rkawlf a.svelte-rkawlf{color:var(--on-primary)}footer.svelte-rkawlf.svelte-rkawlf{text-align:center;background:var(--primary-variant);color:var(--on-primary-variant);padding:1rem}footer.svelte-rkawlf p.svelte-rkawlf:first-of-type{padding-bottom:0.5rem}footer.svelte-rkawlf a.svelte-rkawlf{color:var(--primary-variant-light)}",
  map: null
};
const _layout = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-rkawlf"}"><h2><a href="${"/"}" class="${"svelte-rkawlf"}">Thai Home Cooking</a></h2></header>

${slots.default ? slots.default({}) : ``}

<footer class="${"svelte-rkawlf"}"><p class="${"svelte-rkawlf"}">\xA9 Angsana Andersson 2004-2022</p>
	<p class="${"svelte-rkawlf"}">- Website Made By <a href="${"https://orangeburrito.com"}" class="${"svelte-rkawlf"}">OrangeBurrito</a> -</p>
</footer>`;
});
