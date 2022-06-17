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
  D: () => Dishes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f2242e29 = require("./index-f2242e29.js");
var Dish_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".dish.svelte-1e4g1o2.svelte-1e4g1o2{display:flex;align-self:center;justify-content:space-between;gap:1rem;padding-bottom:1rem}.dish.svelte-1e4g1o2 p.svelte-1e4g1o2{color:var(--on-background-light)}.dish.svelte-1e4g1o2 img.svelte-1e4g1o2{width:60px;height:40px;object-fit:cover}",
  map: null
};
const Dish = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { photo = "" } = $$props;
  let { photoAlt = "" } = $$props;
  let { name = "" } = $$props;
  let { englishName = "" } = $$props;
  if ($$props.photo === void 0 && $$bindings.photo && photo !== void 0)
    $$bindings.photo(photo);
  if ($$props.photoAlt === void 0 && $$bindings.photoAlt && photoAlt !== void 0)
    $$bindings.photoAlt(photoAlt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.englishName === void 0 && $$bindings.englishName && englishName !== void 0)
    $$bindings.englishName(englishName);
  $$result.css.add(css$1);
  return `<div class="${"dish svelte-1e4g1o2"}"><div class="${"text"}"><h3>${(0, import_index_f2242e29.e)(name)}</h3>
		<p class="${"svelte-1e4g1o2"}">${(0, import_index_f2242e29.e)(englishName)}</p></div>
	${photo ? `<img${(0, import_index_f2242e29.j)("src", photo, 0)}${(0, import_index_f2242e29.j)("alt", photoAlt, 0)} class="${"svelte-1e4g1o2"}">` : ``}
</div>`;
});
const dishes = [
  {
    photo: "khaopat.jpg",
    name: "Khao Pat Gai",
    englishName: "Fried Rice with Chicken"
  },
  {
    photo: "khaopatsapparot.jpg",
    name: "Khao Pat Sapparot",
    englishName: "Fried Rice with Pineapple"
  },
  {
    photo: "https://orangeburrito.blob.core.windows.net/$web/yam-nua-yaang.JPEG",
    name: "Yam Neua Yang",
    englishName: "Spicy Barbecued Beef Salad"
  },
  {
    photo: "gaipatmetmamuang.jpg",
    name: "Gai Pat Met Mamuang",
    englishName: "Chicken Fried with Cashew Nuts and Chili"
  },
  {
    photo: "tomyumgung.jpg",
    name: "Tom Yum Gung",
    englishName: "Spicy Sour Shrimp Soup"
  },
  {
    photo: "popiatod.jpg",
    name: "Po Pia Tod",
    englishName: "Deep Fried Spring Rolls"
  },
  {
    photo: "https://orangeburrito.blob.core.windows.net/$web/gaang-kiew-waan-gai.JPEG",
    name: "Gaeng Khiaw-waan Gai",
    englishName: "Sweet Green Chicken Curry"
  },
  {
    photo: "https://orangeburrito.blob.core.windows.net/$web/Tom kha gai_.jpg",
    name: "Tom Kha Gai",
    englishName: "Spicy Chicken Soup with Coconut Milk"
  },
  {
    photo: "gaanggariigai.jpg",
    name: "Gaeng Ga-rii Gai",
    englishName: "Yellow Chicken Curry"
  },
  {
    photo: "gungpatpriowwaan.jpg",
    name: "Gung Pat Priow Waan",
    englishName: "Sweet and Sour Shrimp"
  }
];
const desserts = [
  {
    photo: "khaoniewmamuang.jpg",
    name: "Khao Niew Mamuang",
    englishName: "Sticky Rice with Mango"
  },
  {
    photo: "https://orangeburrito.blob.core.windows.net/$web/bua-loy-faktong.JPEG",
    name: "Bua Loy Fakthong",
    englishName: " Pumpkin balls simmered in coconut syrup"
  },
  {
    photo: "wunmaphrao.jpg",
    name: "Wun Maphrao",
    englishName: "Coconut Jelly in Coconut Shell"
  },
  {
    photo: "https://orangeburrito.blob.core.windows.net/$web/faktong-gang-sangkaya.JPEG",
    name: "Fakthong Sangkhaya",
    englishName: "Egg Custard in Pumpkin"
  },
  {
    photo: "kluayboadchii.jpg",
    name: "Kluay Boad Chii",
    englishName: "Bananas in Coconut Milk"
  },
  {
    photo: "tabtimgrob.jpg",
    name: "Tabtim Grob",
    englishName: "Crispy water chestnuts in coconut cream"
  },
  {
    photo: "khaoniewnaagung.jpg",
    name: "Khao niew naa gung",
    englishName: "Sweet Sticky Rice with Shrimp Topping"
  },
  {
    photo: "khaotommat.jpg",
    name: "Khaotom Mat",
    englishName: "Steamed sticky rice and banana wrapped in banana leaves"
  }
];
var menu = {
  dishes,
  desserts
};
var Dishes_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dishes.svelte-jbq0x,.desserts.svelte-jbq0x{display:none}.dish-banner.svelte-jbq0x{width:100%;height:80px;object-fit:cover;margin:0.8rem 0}.view-all-btn.svelte-jbq0x{margin-top:1rem}.shown.svelte-jbq0x{display:block}@media(min-width: 600px){.dishes.svelte-jbq0x,.desserts.svelte-jbq0x{max-width:calc(var(--max-width) - 200px);margin:0 auto}.list.svelte-jbq0x{display:grid;grid-template-columns:1fr 1fr;justify-items:center;text-align:center;padding-top:1rem}.button-wrap.svelte-jbq0x{text-align:center}}",
  map: null
};
const Dishes = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { selected = "dishes" } = $$props;
  let { fullPage = false } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.fullPage === void 0 && $$bindings.fullPage && fullPage !== void 0)
    $$bindings.fullPage(fullPage);
  $$result.css.add(css);
  return `<div class="${"wrap"}">${fullPage ? `<div class="${"dishes fullpage shown svelte-jbq0x"}"><h2 class="${"title"}">Dishes</h2>
			${(0, import_index_f2242e29.i)(menu.dishes, (dish) => {
    return `${(0, import_index_f2242e29.v)(Dish, "Dish").$$render($$result, {
      photo: dish.photo,
      name: dish.name,
      englishName: dish.englishName
    }, {}, {})}`;
  })}</div>
		<div class="${"desserts fullpage shown svelte-jbq0x"}" id="${"desserts"}"><h2 class="${"title"}">Desserts</h2>
			${(0, import_index_f2242e29.i)(menu.desserts, (dessert) => {
    return `${(0, import_index_f2242e29.v)(Dish, "Dish").$$render($$result, {
      photo: dessert.photo,
      name: dessert.name,
      englishName: dessert.englishName
    }, {}, {})}`;
  })}</div>` : `<div class="${["dishes svelte-jbq0x", selected === "dishes" ? "shown" : ""].join(" ").trim()}"><img class="${"dish-banner svelte-jbq0x"}" src="${"https://orangeburrito.blob.core.windows.net/$web/Gaeng pet linji sodsai.jpg"}" alt="${""}">
			<div class="${"list svelte-jbq0x"}">${(0, import_index_f2242e29.i)(menu.dishes.slice(0, 8), (dish) => {
    return `${(0, import_index_f2242e29.v)(Dish, "Dish").$$render($$result, {
      name: dish.name,
      englishName: dish.englishName
    }, {}, {})}`;
  })}</div>
			<div class="${"button-wrap svelte-jbq0x"}"><button class="${"view-all-btn svelte-jbq0x"}"><a href="${"/menu"}">View all Dishes</a></button></div></div>
		<div class="${["desserts svelte-jbq0x", selected === "desserts" ? "shown" : ""].join(" ").trim()}"><img class="${"dish-banner svelte-jbq0x"}" src="${"https://images.unsplash.com/photo-1582801205465-c0d029e85a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"}" alt="${""}">
			<div class="${"list svelte-jbq0x"}">${(0, import_index_f2242e29.i)(menu.desserts.slice(0, 5), (dessert) => {
    return `${(0, import_index_f2242e29.v)(Dish, "Dish").$$render($$result, {
      name: dessert.name,
      englishName: dessert.englishName
    }, {}, {})}`;
  })}</div>
			<div class="${"button-wrap svelte-jbq0x"}"><button class="${"view-all-btn svelte-jbq0x"}"><a href="${"/menu#desserts"}">View all Desserts</a></button></div></div>`}
</div>`;
});
