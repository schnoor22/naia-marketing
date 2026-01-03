export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.db9b0475.js","app":"_app/immutable/entry/app.217cfe78.js","imports":["_app/immutable/entry/start.db9b0475.js","_app/immutable/chunks/index-client.9a633001.js","_app/immutable/chunks/runtime.1363a653.js","_app/immutable/chunks/singletons.98ea55d8.js","_app/immutable/chunks/index.d6bb0266.js","_app/immutable/entry/app.217cfe78.js","_app/immutable/chunks/runtime.1363a653.js","_app/immutable/chunks/store.4841ebe0.js","_app/immutable/chunks/events.586339fb.js","_app/immutable/chunks/disclose-version.d984c299.js","_app/immutable/chunks/index.d6bb0266.js","_app/immutable/chunks/index-client.9a633001.js","_app/immutable/chunks/if.fbc93502.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
