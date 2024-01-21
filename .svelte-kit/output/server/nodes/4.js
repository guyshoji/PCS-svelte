

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/calendar/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.TR3W-eBO.js","_app/immutable/chunks/scheduler.tEDShyuN.js","_app/immutable/chunks/index.psZnmFP1.js","_app/immutable/chunks/Footer.k3bSiVoJ.js"];
export const stylesheets = ["_app/immutable/assets/Footer.qgVQejMD.css"];
export const fonts = [];
