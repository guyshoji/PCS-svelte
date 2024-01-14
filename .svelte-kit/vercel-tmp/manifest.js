export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","group-pic.jpeg","meetings.png","Members/andrew-prof.jpeg","Members/carolyn-prof.jpg","Members/emile-prof.jpg","Members/gisele-prof.jpg","Members/kailen-prof.jpeg","Members/Kailen-silly.jpg","Members/mark-prof.jpeg","Members/miller-prof.png","Members/noah-prof.png","Members/stephen-prof.jpg","Members/stephen-silly.jpeg","Members/stephen-silly.jpg","pcs-logo.png","project.png","whiteHouse/license.txt","whiteHouse/scene.bin","whiteHouse/scene.gltf","workshop.JPG"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".txt":"text/plain",".bin":"application/octet-stream",".gltf":"model/gltf+json",".JPG":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.3J3vPZDQ.js","app":"_app/immutable/entry/app.9vc1EOzo.js","imports":["_app/immutable/entry/start.3J3vPZDQ.js","_app/immutable/chunks/entry.aPYenpcP.js","_app/immutable/chunks/scheduler.ed84ymES.js","_app/immutable/chunks/index.6ZkBTdMW.js","_app/immutable/entry/app.9vc1EOzo.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.ed84ymES.js","_app/immutable/chunks/index.g-Cxv3Zo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js'))
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
				id: "/members",
				pattern: /^\/members\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
