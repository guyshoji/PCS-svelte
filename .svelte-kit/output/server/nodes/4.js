

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.HmIESYgw.js","_app/immutable/chunks/scheduler.6VtDYpK2.js","_app/immutable/chunks/index.5h420UOY.js","_app/immutable/chunks/Footer.6K0UqxkC.js"];
export const stylesheets = ["_app/immutable/assets/Footer.qgVQejMD.css"];
export const fonts = [];
