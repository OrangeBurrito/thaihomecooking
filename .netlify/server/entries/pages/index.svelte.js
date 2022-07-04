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
  default: () => Routes,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f2242e29 = require("../../chunks/index-f2242e29.js");
var import_Dishes_2d04ac1f = require("../../chunks/Dishes-2d04ac1f.js");
const nativeEvents = [
  "focus",
  "blur",
  "fullscreenchange",
  "fullscreenerror",
  "scroll",
  "cut",
  "copy",
  "paste",
  "keydown",
  "keypress",
  "keyup",
  "auxclick",
  "click",
  "contextmenu",
  "dblclick",
  "mousedown",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseover",
  "mouseout",
  "mouseup",
  "pointerlockchange",
  "pointerlockerror",
  "select",
  "wheel",
  "drag",
  "dragend",
  "dragenter",
  "dragstart",
  "dragleave",
  "dragover",
  "drop",
  "touchcancel",
  "touchend",
  "touchmove",
  "touchstart",
  "pointerover",
  "pointerenter",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointercancel",
  "pointerout",
  "pointerleave",
  "gotpointercapture",
  "lostpointercapture"
];
function forwardEventsBuilder(component, additionalEvents = []) {
  const events = [
    ...nativeEvents,
    ...additionalEvents
  ];
  function forward(e) {
    (0, import_index_f2242e29.b)(component, e);
  }
  return (node) => {
    const destructors = [];
    for (let i = 0; i < events.length; i++) {
      destructors.push((0, import_index_f2242e29.l)(node, events[i], forward));
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
      }
    };
  };
}
const Inline_svg = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_f2242e29.a)($$props, ["src", "transformSrc"]);
  (0, import_index_f2242e29.d)();
  forwardEventsBuilder((0, import_index_f2242e29.g)());
  let { src } = $$props;
  let { transformSrc = (svg) => svg } = $$props;
  let svgAttrs = {};
  let svgContent;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.transformSrc === void 0 && $$bindings.transformSrc && transformSrc !== void 0)
    $$bindings.transformSrc(transformSrc);
  return `<svg${(0, import_index_f2242e29.f)([
    { xmlns: "http://www.w3.org/2000/svg" },
    (0, import_index_f2242e29.h)(svgAttrs),
    (0, import_index_f2242e29.h)($$restProps),
    { contenteditable: "true" }
  ], {})}>${(($$value) => $$value === void 0 ? `` : $$value)(svgContent)}</svg>`;
});
var Feature_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".feature.svelte-1kfjpau{max-width:400px;display:flex;align-items:center;gap:1rem}p.svelte-1kfjpau{padding-left:0.5rem}",
  map: null
};
const Feature = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { icon = "/icons/translate.svg" } = $$props;
  let { text = "" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$9);
  return `<div class="${"feature svelte-1kfjpau"}">${(0, import_index_f2242e29.v)(Inline_svg, "InlineSVG").$$render($$result, { src: icon }, {}, {})}
	<p class="${"svelte-1kfjpau"}"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END --></p>
</div>`;
});
var Features_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".features.svelte-1ru4nhz.svelte-1ru4nhz{display:flex;flex-direction:column;gap:1rem;padding:1.5rem}.features.svelte-1ru4nhz .list.svelte-1ru4nhz{display:grid;gap:1rem}@media(min-width: 600px){.features.svelte-1ru4nhz.svelte-1ru4nhz{max-width:var(--max-width);margin:0 auto;padding:3rem 1.5rem}.features.svelte-1ru4nhz .list.svelte-1ru4nhz{grid-template-columns:1fr 1fr;gap:1.5rem}}",
  map: null
};
const Features = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let featureData = [
    {
      icon: "group.svg",
      text: "Private, personalized cooking lessons"
    },
    {
      icon: "menu.svg",
      text: "More than 100 recipes from my family cookbook gathered over three generations"
    },
    {
      icon: "translate.svg",
      text: "Cooking lessons can be held in English and Thai"
    },
    {
      icon: "shopping.svg",
      text: "<em>Optional:</em> go to the market with me to select ingredients"
    },
    {
      icon: "dish.svg",
      text: "Each lesson covers three dishes of your choice"
    }
  ];
  $$result.css.add(css$8);
  return `<div class="${"features svelte-1ru4nhz"}"><h2>Why Thai Home Cooking?</h2>
	<div class="${"list svelte-1ru4nhz"}">${(0, import_index_f2242e29.i)(featureData, (feature) => {
    return `${(0, import_index_f2242e29.v)(Feature, "Feature").$$render($$result, {
      icon: `/images/icons/${feature.icon}`,
      text: feature.text
    }, {}, {})}`;
  })}</div>
</div>`;
});
var Review_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".review.svelte-12z2mcx img.svelte-12z2mcx{width:60px;height:60px;background:gray;border-radius:50%}.user-info.svelte-12z2mcx.svelte-12z2mcx{display:flex}",
  map: null
};
const Review = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { review = "" } = $$props;
  let { reviewer = "" } = $$props;
  let { reviewerProfile = "" } = $$props;
  let { reviewerLocation = "" } = $$props;
  if ($$props.review === void 0 && $$bindings.review && review !== void 0)
    $$bindings.review(review);
  if ($$props.reviewer === void 0 && $$bindings.reviewer && reviewer !== void 0)
    $$bindings.reviewer(reviewer);
  if ($$props.reviewerProfile === void 0 && $$bindings.reviewerProfile && reviewerProfile !== void 0)
    $$bindings.reviewerProfile(reviewerProfile);
  if ($$props.reviewerLocation === void 0 && $$bindings.reviewerLocation && reviewerLocation !== void 0)
    $$bindings.reviewerLocation(reviewerLocation);
  $$result.css.add(css$7);
  return `<div class="${"review svelte-12z2mcx"}"><p>${(0, import_index_f2242e29.e)(review)}</p>
	<div class="${"user-info svelte-12z2mcx"}"><img${(0, import_index_f2242e29.j)("src", reviewerProfile, 0)} alt="${""}" class="${"svelte-12z2mcx"}">
		<div class="${"text"}"><h4>${(0, import_index_f2242e29.e)(reviewer)}</h4>
			<p>${(0, import_index_f2242e29.e)(reviewerLocation)}</p></div></div>
</div>`;
});
var Reviews_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".dots.svelte-qv9wqd{padding:1rem}.dot.svelte-qv9wqd{display:inline-block;width:10px;height:10px;background:gainsboro;margin-right:10px;border-radius:50%}.selected-dot.svelte-qv9wqd{background:gray}",
  map: null
};
const Reviews = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { reviews: reviews2 = [] } = $$props;
  let reviewIndex = 0;
  let currentReview;
  if ($$props.reviews === void 0 && $$bindings.reviews && reviews2 !== void 0)
    $$bindings.reviews(reviews2);
  $$result.css.add(css$6);
  currentReview = reviews2[reviewIndex];
  return `<div class="${"reviews-wrap"}"><button class="${"review-button"}">PREV</button>
	<div class="${"reviews"}">${(0, import_index_f2242e29.v)(Review, "Review").$$render($$result, {
    review: currentReview.review,
    reviewer: currentReview.reviewer,
    reviewerProfile: currentReview.pfp,
    reviewerLocation: currentReview.reviewerLocation
  }, {}, {})}</div>
	<button class="${"review-button"}">NEXT</button>
	<div class="${"dots svelte-qv9wqd"}">${(0, import_index_f2242e29.i)(reviews2, (r, i) => {
    return `<div class="${["dot svelte-qv9wqd", i === reviewIndex ? "selected-dot" : ""].join(" ").trim()}"></div>`;
  })}</div>
</div>`;
});
var Gallery_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".gallery.svelte-obqdvr{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem;padding:1rem}img.svelte-obqdvr{width:150px;height:150px;object-fit:cover}@media(min-width: 600px){.gallery.svelte-obqdvr{padding:1rem 3rem;grid-gap:3rem;grid-template-columns:repeat(3, 1fr)}img.svelte-obqdvr{width:100%}}",
  map: null
};
const Gallery = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${"gallery svelte-obqdvr"}"><img src="${"https://orangeburrito.blob.core.windows.net/$web/khao-tang-naa-tang.jpg"}" alt="${""}" class="${"svelte-obqdvr"}">
	<img src="${"https://orangeburrito.blob.core.windows.net/$web/nam-prik-ong.JPEG"}" alt="${""}" class="${"svelte-obqdvr"}">
	<img src="${"https://orangeburrito.blob.core.windows.net/$web/tom-kaa-gai2.JPEG"}" alt="${""}" class="${"svelte-obqdvr"}">
	<img src="${"https://orangeburrito.blob.core.windows.net/$web/yam-pladuk-foo.jpg"}" alt="${""}" class="${"svelte-obqdvr"}">
	<img src="${"https://orangeburrito.blob.core.windows.net/$web/bua-loy-faktong.JPEG"}" alt="${""}" class="${"svelte-obqdvr"}">
	<img src="${"https://orangeburrito.blob.core.windows.net/$web/faktong-gang-sangkaya.JPEG"}" alt="${""}" class="${"svelte-obqdvr"}">
</div>`;
});
var Contact_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".contact.svelte-nemf5u{padding:1rem}",
  map: null
};
const Contact = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"contact svelte-nemf5u"}"><h2>Contact</h2>
  <div class="${"contact-section hours"}"><h3>Hours</h3>
    <p>Monday-Saturday 9 a.m. - 7 p.m.</p></div>
  <div class="${"contact-section location"}"><h3>Location &amp; Phone</h3>
    <p>2424 Malabar Avenue<br>Bangkok, Thailand 10130</p>
    <div class="${"contact-item"}"><img src="${"/images/icons/phone.svg"}" alt="${""}" class="${"icon"}">
      <p><strong>(+66)</strong> 088 888 8888</p></div></div>
  <div class="${"contact-section social-media"}"><h3>Email &amp; Social Media</h3>
    <div class="${"contact-item"}"><img src="${"/images/icons/mail.svg"}" alt="${""}" class="${"icon"}">
      <a href="${"mailto:someone@gmail.com"}">something@gmail.com</a></div>
    <a href="${"/"}">Facebook</a>
    <a href="${"/"}">TripAdvisor</a></div>
</div>`;
});
var Form_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "form.svelte-1ktanq2{display:grid;gap:1rem}",
  map: null
};
function onSubmit() {
}
const Form = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { method = "" } = $$props;
  let { netlify = false } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.method === void 0 && $$bindings.method && method !== void 0)
    $$bindings.method(method);
  if ($$props.netlify === void 0 && $$bindings.netlify && netlify !== void 0)
    $$bindings.netlify(netlify);
  if ($$props.onSubmit === void 0 && $$bindings.onSubmit && onSubmit !== void 0)
    $$bindings.onSubmit(onSubmit);
  $$result.css.add(css$3);
  return `<form${(0, import_index_f2242e29.j)("name", name, 0)}${(0, import_index_f2242e29.j)("method", method, 0)}${(0, import_index_f2242e29.j)("data-netlify", netlify, 0)} class="${"svelte-1ktanq2"}">${slots.default ? slots.default({}) : ``}
	
</form>`;
});
const Input = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { type = "" } = $$props;
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { required = false } = $$props;
  let { value = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div class="${"text-input"}"><label${(0, import_index_f2242e29.j)("for", id, 0)}>${(0, import_index_f2242e29.e)(label)}</label>
  ${required ? `<abbr title="${"required"}">*</abbr>` : ``}
  <input${(0, import_index_f2242e29.j)("type", type, 0)}${(0, import_index_f2242e29.j)("id", id, 0)}${(0, import_index_f2242e29.j)("name", name, 0)}${(0, import_index_f2242e29.j)("placeholder", placeholder, 0)} ${required ? "required" : ""}></div>`;
});
const NumberInput = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { min = 0 } = $$props;
  let { max = 1 } = $$props;
  let { required = false } = $$props;
  let { value } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div class="${"number-input"}"><label${(0, import_index_f2242e29.j)("for", id, 0)}>${(0, import_index_f2242e29.e)(label)}</label>
  ${required ? `<abbr title="${"required"}">*</abbr>` : ``}
  <input type="${"number"}"${(0, import_index_f2242e29.j)("id", id, 0)}${(0, import_index_f2242e29.j)("name", name, 0)}${(0, import_index_f2242e29.j)("placeholder", placeholder, 0)}${(0, import_index_f2242e29.j)("min", min, 0)}${(0, import_index_f2242e29.j)("max", max, 0)} ${required ? "required" : ""}>
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const SelectInput = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { label = "" } = $$props;
  let { required = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  return `<div class="${"text-input"}"><label${(0, import_index_f2242e29.j)("for", id, 0)}>${(0, import_index_f2242e29.e)(label)}</label>
  ${required ? `<abbr title="${"required"}">*</abbr>` : ``}
  <select${(0, import_index_f2242e29.j)("id", id, 0)}${(0, import_index_f2242e29.j)("name", name, 0)} ${required ? "required" : ""}>${slots.default ? slots.default({}) : ``}</select></div>`;
});
var MailForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "label{font-style:italic;font-size:1.1rem}",
  map: null
};
const MailForm = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `${(0, import_index_f2242e29.v)(Form, "Form").$$render($$result, {
    name: "booking",
    method: "POST",
    netlify: true
  }, {}, {
    default: () => {
      return `${(0, import_index_f2242e29.v)(SelectInput, "SelectInput").$$render($$result, {
        id: "session",
        name: "session-type",
        required: true,
        label: "I'd like to book"
      }, {}, {
        default: () => {
          return `<option value="${"morning"}">Morning Session</option>
      <option value="${"afternoon"}">Afternoon Session</option>
      <option value="${"evening"}">Evening Session</option>`;
        }
      })}
    ${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "date",
        id: "date",
        name: "date",
        label: "on:",
        required: true
      }, {}, {})}
    ${(0, import_index_f2242e29.v)(NumberInput, "NumberInput").$$render($$result, {
        id: "students",
        name: "number-of-students",
        placeholder: "2",
        min: "1",
        max: "10",
        label: "for:",
        required: true
      }, {}, {
        default: () => {
          return `students`;
        }
      })}
		<button type="${"submit"}">Submit</button>`;
    }
  })}`;
});
const TextareaInput = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { name = "" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { required = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  return `<div class="${"textarea-input"}"><label${(0, import_index_f2242e29.j)("for", id, 0)}>${(0, import_index_f2242e29.e)(label)}</label>
  ${required ? `<abbr title="${"required"}">*</abbr>` : ``}
  <textarea${(0, import_index_f2242e29.j)("id", id, 0)}${(0, import_index_f2242e29.j)("name", name, 0)}${(0, import_index_f2242e29.j)("placeholder", placeholder, 0)} ${required ? "required" : ""}></textarea></div>`;
});
var StepForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".form-section.svelte-c19rjj{display:none}.shown.svelte-c19rjj{display:block}button.svelte-c19rjj:disabled{background:gray}",
  map: null
};
const StepForm = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${(0, import_index_f2242e29.v)(Form, "Form").$$render($$result, {
    name: "booking",
    method: "POST",
    netlify: true
  }, {}, {
    default: () => {
      return `<section class="${["form-section svelte-c19rjj", "shown"].join(" ").trim()}" id="${"section-1"}">${(0, import_index_f2242e29.v)(SelectInput, "SelectInput").$$render($$result, {
        id: "session",
        name: "session-type",
        required: true,
        label: "I'd like to book"
      }, {}, {
        default: () => {
          return `<option value="${"morning"}">Morning Session</option>
      <option value="${"afternoon"}">Afternoon Session</option>
      <option value="${"evening"}">Evening Session</option>`;
        }
      })}
    ${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "date",
        id: "date",
        name: "date",
        label: "on:",
        required: true
      }, {}, {})}
    ${(0, import_index_f2242e29.v)(NumberInput, "NumberInput").$$render($$result, {
        id: "students",
        name: "number-of-students",
        placeholder: "2",
        min: "1",
        max: "10",
        label: "for:",
        required: true
      }, {}, {
        default: () => {
          return `students`;
        }
      })}</section>

  <section class="${["form-section svelte-c19rjj", ""].join(" ").trim()}" id="${"section-2"}">${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "text",
        id: "fname",
        name: "first-name",
        label: "first name:",
        required: true
      }, {}, {})}
    ${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "text",
        id: "lname",
        name: "last-name",
        label: "last name:",
        required: true
      }, {}, {})}
    ${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "email",
        id: "email",
        name: "email",
        label: "email:",
        required: true
      }, {}, {})}</section>

  <section class="${["form-section svelte-c19rjj", ""].join(" ").trim()}" id="${"section-3"}">${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "text",
        id: "dish-1",
        name: "dish-1",
        label: "dish #1:",
        required: true
      }, {}, {})}
    ${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "text",
        id: "dish-2",
        name: "dish-2",
        label: "dish #2:"
      }, {}, {})}
    ${(0, import_index_f2242e29.v)(Input, "Input").$$render($$result, {
        type: "text",
        id: "dish-3",
        name: "dish-3",
        label: "dish #3:"
      }, {}, {})}</section>

  <section class="${["form-section svelte-c19rjj", ""].join(" ").trim()}" id="${"section-4"}">${(0, import_index_f2242e29.v)(TextareaInput, "TextareaInput").$$render($$result, {
        id: "comments",
        name: "comments",
        label: "Additional comments:"
      }, {}, {})}</section>

  <button ${"disabled"} class="${"svelte-c19rjj"}">Previous</button>
  ${`<button class="${"svelte-c19rjj"}">Next</button>`}`;
    }
  })}`;
});
var reviews = [
  {
    review: "Very good services, I am made of bees",
    reviewer: "Jane Doe",
    reviewerLocation: "Seattle"
  },
  {
    review: "Very grub services, I am made of crullers",
    reviewer: "Janice Donut"
  },
  {
    review: "Bzzz bzzz bzzz",
    reviewer: "Not a Wasp"
  },
  {
    review: "Perfect for my achy knee, I am old",
    reviewer: "Worlds Oldest Person"
  },
  {
    review: "I am made of milk. 10/10",
    reviewer: "Puddle of Milk"
  }
];
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.call-to-action.svelte-164ype9.svelte-164ype9{text-align:center;background-image:url("/images/overlay.png"), url("/images/menu/dishes/nam-prik-ong.JPEG");background-size:cover;background-position:center;background-repeat:no-repeat;color:var(--on-background-image);padding:2rem 1rem}.call-to-action.svelte-164ype9 p.svelte-164ype9{padding:1rem 0}.about.svelte-164ype9.svelte-164ype9{background:var(--surface);color:var(--on-surface);padding:1.5rem}.about.svelte-164ype9 .content.svelte-164ype9{display:flex;flex-direction:column;gap:1rem}.about.svelte-164ype9 h2.svelte-164ype9{margin-bottom:1rem}.about.svelte-164ype9 p.svelte-164ype9{color:var(--on-surface-light);margin-bottom:1rem}.about-image.svelte-164ype9.svelte-164ype9{background-image:url("/images/angsana.jpg");background-position:center;background-size:cover;width:200px;height:150px;margin:0 auto;padding-top:1rem}.menu.svelte-164ype9.svelte-164ype9{padding:2rem}.menu.svelte-164ype9 h1.svelte-164ype9{text-align:center}.menu.svelte-164ype9 .category-btns.svelte-164ype9{display:flex;justify-content:center;gap:1rem}.menu.svelte-164ype9 .category-btns .selected.svelte-164ype9{color:var(--primary-variant);text-decoration:underline;font-size:1.1em;font-weight:bold}.booking.svelte-164ype9.svelte-164ype9{background:var(--primary-variant);color:var(--on-primary-variant);padding:1rem}.booking.svelte-164ype9 .text.svelte-164ype9{margin-bottom:1rem}@media(min-width: 600px){.call-to-action.svelte-164ype9.svelte-164ype9{padding:3rem 1rem}.call-to-action.svelte-164ype9 .content.svelte-164ype9{max-width:calc(var(--max-width) / 2);margin:0 auto}.about.svelte-164ype9.svelte-164ype9{padding:3rem}.about.svelte-164ype9 .content.svelte-164ype9{max-width:var(--max-width);display:grid;grid-template-columns:1fr 1fr;margin:0 auto}.about-image.svelte-164ype9.svelte-164ype9{width:250px;height:100%}.booking.svelte-164ype9.svelte-164ype9{padding:2rem}.booking.svelte-164ype9 .text.svelte-164ype9{margin:0 auto 1.5rem auto}.form-wrap.svelte-164ype9.svelte-164ype9,.booking.svelte-164ype9 .text.svelte-164ype9{max-width:calc(var(--max-width) - 500px)}.form-wrap.svelte-164ype9.svelte-164ype9{margin:0 auto}}',
  map: null
};
const prerender = true;
const Routes = (0, import_index_f2242e29.c)(($$result, $$props, $$bindings, slots) => {
  let menuCategory = "dishes";
  $$result.css.add(css);
  return `${(0, import_index_f2242e29.v)(StepForm, "StepForm").$$render($$result, {}, {}, {})}

<div class="${"call-to-action svelte-164ype9"}"><div class="${"content svelte-164ype9"}"><h1>Private Thai Home Cooking Course in Bangkok</h1>
    <p class="${"svelte-164ype9"}">Learn how to cook authentic Thai food in my home kitchen.</p>
    <button><a href="${"#booking-form"}">Book an appointment</a></button></div></div>

${(0, import_index_f2242e29.v)(Features, "Features").$$render($$result, {}, {}, {})}

<div class="${"about svelte-164ype9"}"><div class="${"content svelte-164ype9"}"><div class="${"text"}"><h2 class="${"svelte-164ype9"}">Thai Cooking Classes</h2>
      <p class="${"svelte-164ype9"}">Learn how to cook authentic Thai food in my home kitchen.</p>
      <p class="${"svelte-164ype9"}">Unlike traditional cooking schools, I hold private Thai cooking lessons in English or in Thai. You choose day, time, and the dishes you want to cook
        from my family cookbook.
      </p>
      <p class="${"svelte-164ype9"}">Each lesson covers three dishes of your choice. The dishes are listed below, but you may also request dishes not listed in the dishes menu.</p>
      <p class="${"svelte-164ype9"}">All ingredients are included along with copies of the recipes in English.</p></div>
    <div class="${"about-image svelte-164ype9"}"></div></div></div>

<div class="${"menu svelte-164ype9"}"><h1 class="${"svelte-164ype9"}">Menus</h1>

  <div class="${"category-btns svelte-164ype9"}"><button class="${["ghost-btn svelte-164ype9", "selected"].join(" ").trim()}">Dishes</button>
    <button class="${["ghost-btn svelte-164ype9", ""].join(" ").trim()}">Desserts</button></div>

  ${(0, import_index_f2242e29.v)(import_Dishes_2d04ac1f.D, "Dishes").$$render($$result, { selected: menuCategory }, {}, {})}</div>

<div class="${"booking svelte-164ype9"}" id="${"booking-form"}"><div class="${"text svelte-164ype9"}"><h2>Book a cooking class</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>

  <div class="${"form-wrap svelte-164ype9"}">${(0, import_index_f2242e29.v)(MailForm, "MailForm").$$render($$result, {}, {}, {})}</div></div>

${(0, import_index_f2242e29.v)(Reviews, "Reviews").$$render($$result, { reviews }, {}, {})}

${(0, import_index_f2242e29.v)(Gallery, "Gallery").$$render($$result, {}, {}, {})}

${(0, import_index_f2242e29.v)(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});
