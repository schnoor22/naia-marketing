

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.12b435f5.js","_app/immutable/chunks/disclose-version.d984c299.js","_app/immutable/chunks/runtime.1363a653.js","_app/immutable/chunks/legacy.75c03866.js","_app/immutable/chunks/events.586339fb.js","_app/immutable/chunks/if.fbc93502.js"];
export const stylesheets = ["_app/immutable/assets/2.69c73c5f.css"];
export const fonts = [];
