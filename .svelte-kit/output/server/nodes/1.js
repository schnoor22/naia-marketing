

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f657969a.js","_app/immutable/chunks/disclose-version.d984c299.js","_app/immutable/chunks/runtime.1363a653.js","_app/immutable/chunks/legacy.75c03866.js","_app/immutable/chunks/store.4841ebe0.js","_app/immutable/chunks/events.586339fb.js","_app/immutable/chunks/index.d6bb0266.js","_app/immutable/chunks/singletons.98ea55d8.js"];
export const stylesheets = [];
export const fonts = [];
