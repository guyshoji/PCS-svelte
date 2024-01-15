

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.KM1T3_2f.js","_app/immutable/chunks/scheduler.W2ERkcI7.js","_app/immutable/chunks/index.Kbz3BLIs.js","_app/immutable/chunks/Footer.OkevWyVy.js"];
export const stylesheets = ["_app/immutable/assets/Footer.qgVQejMD.css"];
export const fonts = [];
