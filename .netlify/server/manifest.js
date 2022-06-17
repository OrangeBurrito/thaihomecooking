var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "favicon.png", "images/.DS_Store", "images/angsana.jpg", "images/icons/dish.svg", "images/icons/group.svg", "images/icons/menu.svg", "images/icons/phone.svg", "images/icons/review.svg", "images/icons/shopping.svg", "images/icons/translate.svg", "images/menu/.DS_Store", "images/menu/dishes/khaopat.jpg", "images/menu/dishes/nam-prik-ong.JPEG", "images/overlay.png"]),
  mimeTypes: { ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".JPEG": "image/jpeg" },
  _: {
    entry: { "file": "start-76313911.js", "js": ["start-76313911.js", "chunks/index-e516f6f1.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: ".json",
        pattern: /^\/\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/index.json.js")))
      },
      {
        type: "page",
        id: "menu",
        pattern: /^\/menu\/?$/,
        names: [],
        types: [],
        path: "/menu",
        shadow: null,
        a: [0, 3],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
