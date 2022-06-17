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
  default: () => Menu
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f2242e29 = require("../../chunks/index-f2242e29.js");
var import_Dishes_2d04ac1f = require("../../chunks/Dishes-2d04ac1f.js");
const Menu = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_f2242e29.v)(import_Dishes_2d04ac1f.D, "Dishes").$$render($$result, { fullPage: true }, {}, {})}`;
});
