

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0b57ea92.js","_app/immutable/chunks/disclose-version.d984c299.js","_app/immutable/chunks/runtime.1363a653.js","_app/immutable/chunks/legacy.75c03866.js"];
export const stylesheets = [];
export const fonts = [];
