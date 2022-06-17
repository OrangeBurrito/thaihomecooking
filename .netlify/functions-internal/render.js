const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/angsana.jpg","images/icons/dish.svg","images/icons/group.svg","images/icons/menu.svg","images/icons/phone.svg","images/icons/review.svg","images/icons/shopping.svg","images/icons/translate.svg","images/menu/.DS_Store","images/menu/dishes/khaopat.jpg","images/menu/dishes/nam-prik-ong.JPEG","images/overlay.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".JPEG":"image/jpeg"},
	_: {
		entry: {"file":"start-31a7497f.js","js":["start-31a7497f.js","chunks/index-e516f6f1.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'endpoint',
				id: ".json",
				pattern: /^\/\.json$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/index.json.js'))
			},
			{
				type: 'page',
				id: "menu",
				pattern: /^\/menu\/?$/,
				names: [],
				types: [],
				path: "/menu",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
