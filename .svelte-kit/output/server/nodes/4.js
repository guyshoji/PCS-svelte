

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.gmpYK3fz.js","_app/immutable/chunks/scheduler.ed84ymES.js","_app/immutable/chunks/index.g-Cxv3Zo.js","_app/immutable/chunks/Footer.TZxZ9fVE.js"];
export const stylesheets = ["_app/immutable/assets/Footer.qgVQejMD.css"];
export const fonts = [];