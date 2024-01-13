import { g as getContext, s as setContext, c as create_ssr_component, e as escape, a as add_attribute, b as compute_slots, d as add_styles, f as subscribe, h as createEventDispatcher, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { p as prefersReducedMotionStore, m as modeCurrent, s as setInitialClassState, a as autoModeWatcher } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "../../chunks/client.js";
import "mitt";
import "../../chunks/vertex.js";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { I as Icon } from "../../chunks/Icon.js";
const storePopup = writable(void 0);
const DRAWER_STORE_KEY = "drawerStore";
function getDrawerStore() {
  const drawerStore = getContext(DRAWER_STORE_KEY);
  if (!drawerStore)
    throw new Error("drawerStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return drawerStore;
}
function initializeDrawerStore() {
  const drawerStore = drawerService();
  return setContext(DRAWER_STORE_KEY, drawerStore);
}
function drawerService() {
  const { subscribe: subscribe2, set, update } = writable({});
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
const MODAL_STORE_KEY = "modalStore";
function initializeModalStore() {
  const modalStore = modalService();
  return setContext(MODAL_STORE_KEY, modalStore);
}
function modalService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
const TOAST_STORE_KEY = "toastStore";
function initializeToastStore() {
  const toastStore = toastService();
  return setContext(TOAST_STORE_KEY, toastStore);
}
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function toastService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  const close = (id) => update((tStore) => {
    if (tStore.length > 0) {
      const index = tStore.findIndex((t) => t.id === id);
      const selectedToast = tStore[index];
      if (selectedToast) {
        if (selectedToast.callback)
          selectedToast.callback({ id, status: "closed" });
        if (selectedToast.timeoutId)
          clearTimeout(selectedToast.timeoutId);
        tStore.splice(index, 1);
      }
    }
    return tStore;
  });
  function handleAutoHide(toast) {
    if (toast.autohide === true) {
      return setTimeout(() => {
        close(toast.id);
      }, toast.timeout);
    }
  }
  return {
    subscribe: subscribe2,
    close,
    /** Add a new toast to the queue. */
    trigger: (toast) => {
      const id = randomUUID();
      update((tStore) => {
        if (toast && toast.callback)
          toast.callback({ id, status: "queued" });
        if (toast.hideDismiss)
          toast.autohide = true;
        const tMerged = { ...toastDefaults, ...toast, id };
        tMerged.timeoutId = handleAutoHide(tMerged);
        tStore.push(tMerged);
        return tStore;
      });
      return id;
    },
    /** Remain visible on hover */
    freeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        clearTimeout(tStore[index].timeoutId);
      return tStore;
    }),
    /** Cancel remain visible on leave */
    unfreeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        tStore[index].timeoutId = handleAutoHide(tStore[index]);
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
function initializeStores() {
  initializeModalStore();
  initializeToastStore();
  initializeDrawerStore();
}
const cBase = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}> <div class="${"app-bar-row-main " + escape(classesRowMain, true)}"> ${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>  ${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0)
    $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 flex";
const cDrawer = "overflow-y-auto transition-transform";
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesPosition;
  let classesWidth;
  let classesHeight;
  let classesRounded;
  let classesBackdrop;
  let classesDrawer;
  let $drawerStore, $$unsubscribe_drawerStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  createEventDispatcher();
  let { position = "left" } = $$props;
  let { bgDrawer = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { bgBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { blur = "" } = $$props;
  let { padding = "" } = $$props;
  let { zIndex = "z-40" } = $$props;
  let { regionBackdrop = "" } = $$props;
  let { regionDrawer = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { describedby = "" } = $$props;
  let { duration = 200 } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { opacityTransition = true } = $$props;
  const presets = {
    top: {
      alignment: "items-start",
      width: "w-full",
      height: "h-[50%]",
      rounded: "rounded-bl-container-token rounded-br-container-token"
    },
    bottom: {
      alignment: "items-end",
      width: "w-full",
      height: " h-[50%]",
      rounded: "rounded-tl-container-token rounded-tr-container-token"
    },
    left: {
      alignment: "justify-start",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tr-container-token rounded-br-container-token"
    },
    right: {
      alignment: "justify-end",
      width: "w-[90%]",
      height: "h-full",
      rounded: "rounded-tl-container-token rounded-bl-container-token"
    }
  };
  let elemBackdrop;
  let elemDrawer;
  const drawerStore = getDrawerStore();
  $$unsubscribe_drawerStore = subscribe(drawerStore, (value) => $drawerStore = value);
  const propDefaults = {
    position,
    bgBackdrop,
    blur,
    padding,
    bgDrawer,
    border,
    rounded,
    shadow,
    width,
    height,
    opacityTransition,
    regionBackdrop,
    regionDrawer,
    labelledby,
    describedby,
    duration
  };
  function applyPropSettings(settings) {
    position = settings.position || propDefaults.position;
    bgBackdrop = settings.bgBackdrop || propDefaults.bgBackdrop;
    blur = settings.blur || propDefaults.blur;
    padding = settings.padding || propDefaults.padding;
    bgDrawer = settings.bgDrawer || propDefaults.bgDrawer;
    border = settings.border || propDefaults.border;
    rounded = settings.rounded || propDefaults.rounded;
    shadow = settings.shadow || propDefaults.shadow;
    width = settings.width || propDefaults.width;
    height = settings.height || propDefaults.height;
    regionBackdrop = settings.regionBackdrop || propDefaults.regionBackdrop;
    regionDrawer = settings.regionDrawer || propDefaults.regionDrawer;
    labelledby = settings.labelledby || propDefaults.labelledby;
    describedby = settings.describedby || propDefaults.describedby;
    opacityTransition = settings.opacityTransition || propDefaults.opacityTransition;
    duration = settings.duration || propDefaults.duration;
  }
  drawerStore.subscribe((settings) => {
    if (settings.open !== true)
      return;
    applyPropSettings(settings);
  });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.bgDrawer === void 0 && $$bindings.bgDrawer && bgDrawer !== void 0)
    $$bindings.bgDrawer(bgDrawer);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.bgBackdrop === void 0 && $$bindings.bgBackdrop && bgBackdrop !== void 0)
    $$bindings.bgBackdrop(bgBackdrop);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionDrawer === void 0 && $$bindings.regionDrawer && regionDrawer !== void 0)
    $$bindings.regionDrawer(regionDrawer);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.describedby === void 0 && $$bindings.describedby && describedby !== void 0)
    $$bindings.describedby(describedby);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.opacityTransition === void 0 && $$bindings.opacityTransition && opacityTransition !== void 0)
    $$bindings.opacityTransition(opacityTransition);
  classesPosition = presets[position].alignment;
  classesWidth = width ? width : presets[position].width;
  classesHeight = height ? height : presets[position].height;
  classesRounded = rounded ? rounded : presets[position].rounded;
  classesBackdrop = `${cBackdrop} ${bgBackdrop} ${padding} ${blur} ${classesPosition} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""}`;
  classesDrawer = `${cDrawer} ${bgDrawer} ${border} ${rounded} ${shadow} ${classesWidth} ${classesHeight} ${classesRounded} ${regionDrawer}`;
  $$unsubscribe_drawerStore();
  $$unsubscribe_prefersReducedMotionStore();
  return ` ${$drawerStore.open === true ? `   <div class="${"drawer-backdrop " + escape(classesBackdrop, true)}" data-testid="drawer-backdrop"${add_attribute("this", elemBackdrop, 0)}>  <div class="${"drawer " + escape(classesDrawer, true)}" data-testid="drawer" role="dialog" aria-modal="true"${add_attribute("aria-labelledby", labelledby, 0)}${add_attribute("aria-describedby", describedby, 0)}${add_attribute("this", elemDrawer, 0)}> ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { title = "Toggle light or dark mode." } = $$props;
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
    $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
    $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
    $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
    $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0)
    $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-gewkj4_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-gewkj4_END -->`, ""} <div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)}${add_attribute("title", title, 0)} tabindex="0"> <div class="${"lightswitch-thumb " + escape(classesThumb, true)}"> <svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const css = {
  code: "@media(max-width: 750px){.pcs-logo.svelte-1m7vizb{display:none}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  initializeStores();
  getDrawerStore();
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-293o2g_START --><!-- HTML_TAG_START -->${`<script>${autoModeWatcher.toString()} autoModeWatcher();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-293o2g_END -->`, ""}  ${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    footer: () => {
      return ` <h1 class="text-right dark:text-white m-3" data-svelte-h="svelte-240h92">© PCS Berkeley 2023</h1> `;
    },
    default: () => {
      return `<div class="bg-primary-100"> ${validate_component(AppBar, "AppBar").$$render(
        $$result,
        {
          gridColumns: "grid-cols-3",
          slotDefault: "place-self-center",
          slotTrail: "place-content-end"
        },
        {},
        {
          trail: () => {
            return `${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})} <button class="btn card-hover">${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "ion:language-outline",
                class: "dark:text-white"
              },
              {},
              {}
            )}</button> <button>${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "material-symbols:density-medium-rounded",
                class: "dark:text-white"
              },
              {},
              {}
            )}</button> `;
          },
          lead: () => {
            return `<a href="/" class="w-1/6 flex text-center content-center" data-svelte-h="svelte-1oin5ul"><img src="/pcs-logo.png" class="bg-white pcs-logo svelte-1m7vizb" alt="PCS Icon"> <span class="text-xl dark:text-white font-semibold mx-4 m-auto">PCS@Berkeley</span></a>`;
          }
        }
      )}</div>  ${validate_component(Drawer, "Drawer").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="w-fit font-semibold flex flex-col p-3" data-svelte-h="svelte-17n22jt"><a class="hover:font-normal dark:text-white p-3" href="/"><p>Home</p></a> <a class="hover:font-normal dark:text-white p-3" href="/about"><p>About Us</p></a> <a class="hover:font-normal dark:text-white p-3" href="/projects"><p>Projects</p></a> <a class="hover:font-normal dark:text-white p-3" href="/members"><p>Members</p></a> <a class="hover:font-normal dark:text-white p-3" href="/editorials"><p>Editorials</p></a> <a class="hover:font-normal dark:text-white p-3" href="/calendar"><p>Calendar</p></a> <a class="btn variant-filled-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform">Join Us</a></div>`;
        }
      })} ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
