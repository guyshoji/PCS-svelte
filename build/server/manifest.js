const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Members/Kailen-silly.jpg","Members/andrew-prof.jpeg","Members/carolyn-prof.jpg","Members/emile-prof.jpg","Members/gisele-prof.jpg","Members/kailen-prof.jpeg","Members/mark-prof.jpeg","Members/miller-prof.png","Members/noah-prof.png","Members/stephen-prof.jpg","Members/stephen-silly.jpeg","Members/stephen-silly.jpg","favicon.png","group-pic.jpeg","meetings.png","pcs-logo.png","project.png","whiteHouse/license.txt","whiteHouse/scene.bin","whiteHouse/scene.gltf","workshop.JPG"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".JPG":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.LQHHj_QA.js","app":"_app/immutable/entry/app.Xmyaowou.js","imports":["_app/immutable/entry/start.LQHHj_QA.js","_app/immutable/chunks/entry.KkzeUMxG.js","_app/immutable/chunks/scheduler.W2ERkcI7.js","_app/immutable/chunks/index.m3bEDmyw.js","_app/immutable/entry/app.Xmyaowou.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.W2ERkcI7.js","_app/immutable/chunks/index.Kbz3BLIs.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-NpTHcBch.js')),
			__memo(() => import('./chunks/1-mK1zMB-U.js')),
			__memo(() => import('./chunks/2-yo--pOaM.js')),
			__memo(() => import('./chunks/3-cj8mOlA8.js')),
			__memo(() => import('./chunks/4-iqNnkxSQ.js')),
			__memo(() => import('./chunks/5-h4U3pRKM.js')),
			__memo(() => import('./chunks/6-lGE7cTzn.js')),
			__memo(() => import('./chunks/7-iOnxrXxS.js')),
			__memo(() => import('./chunks/8-pvZSYfBV.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/calendar",
				pattern: /^\/calendar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/editorials",
				pattern: /^\/editorials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/members",
				pattern: /^\/members\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
