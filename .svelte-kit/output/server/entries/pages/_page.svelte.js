import { n as noop, i as set_current_component, r as run_all, j as current_component, s as setContext, g as getContext, o as onDestroy, k as get_store_value, c as create_ssr_component, f as subscribe, a as add_attribute, v as validate_component, l as get_current_component, p as compute_rest_props, q as is_promise, t as each, e as escape } from "../../chunks/ssr.js";
import "@formatjs/intl-segmenter/polyfill.js";
import { d as derived, w as writable, r as readable } from "../../chunks/index.js";
import { PerspectiveCamera, Scene, ColorManagement, PCFSoftShadowMap, WebGLRenderer, sRGBEncoding, LinearEncoding, ACESFilmicToneMapping, Vector2, Raycaster } from "three";
import mitt from "mitt";
import { r as revision, S as SceneGraphObject, u as useThrelte, c as createRawEventDispatcher, T, a as useParent } from "../../chunks/vertex.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { OrbitControls as OrbitControls$1 } from "three/examples/jsm/controls/OrbitControls";
import { F as Fade, a as Footer } from "../../chunks/Footer.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
class DAG {
  allVertices = {};
  /** Nodes that are fully unlinked */
  isolatedVertices = {};
  connectedVertices = {};
  sortedConnectedValues = [];
  needsSort = false;
  emitter = mitt();
  emit = this.emitter.emit.bind(this.emitter);
  on = this.emitter.on.bind(this.emitter);
  off = this.emitter.off.bind(this.emitter);
  get sortedVertices() {
    return this.mapNodes((value) => value);
  }
  moveToIsolated(key) {
    const vertex = this.connectedVertices[key];
    if (!vertex)
      return;
    this.isolatedVertices[key] = vertex;
    delete this.connectedVertices[key];
  }
  moveToConnected(key) {
    const vertex = this.isolatedVertices[key];
    if (!vertex)
      return;
    this.connectedVertices[key] = vertex;
    delete this.isolatedVertices[key];
  }
  getKey = (v) => {
    if (typeof v === "object") {
      return v.key;
    }
    return v;
  };
  add(key, value, options) {
    if (this.allVertices[key] && this.allVertices[key].value !== void 0) {
      throw new Error(`A node with the key ${key.toString()} already exists`);
    }
    let vertex = this.allVertices[key];
    if (!vertex) {
      vertex = {
        value,
        previous: /* @__PURE__ */ new Set(),
        next: /* @__PURE__ */ new Set()
      };
      this.allVertices[key] = vertex;
    } else if (vertex.value === void 0) {
      vertex.value = value;
    }
    const hasEdges = vertex.next.size > 0 || vertex.previous.size > 0;
    if (!options?.after && !options?.before && !hasEdges) {
      this.isolatedVertices[key] = vertex;
      this.emit("node:added", {
        key,
        type: "isolated",
        value
      });
      return;
    } else {
      this.connectedVertices[key] = vertex;
    }
    if (options?.after) {
      const afterArr = Array.isArray(options.after) ? options.after : [options.after];
      afterArr.forEach((after) => {
        vertex.previous.add(this.getKey(after));
      });
      afterArr.forEach((after) => {
        const afterKey = this.getKey(after);
        const linkedAfter = this.allVertices[afterKey];
        if (!linkedAfter) {
          this.allVertices[afterKey] = {
            value: void 0,
            previous: /* @__PURE__ */ new Set(),
            next: /* @__PURE__ */ new Set([key])
          };
          this.connectedVertices[afterKey] = this.allVertices[afterKey];
        } else {
          linkedAfter.next.add(key);
          this.moveToConnected(afterKey);
        }
      });
    }
    if (options?.before) {
      const beforeArr = Array.isArray(options.before) ? options.before : [options.before];
      beforeArr.forEach((before) => {
        vertex.next.add(this.getKey(before));
      });
      beforeArr.forEach((before) => {
        const beforeKey = this.getKey(before);
        const linkedBefore = this.allVertices[beforeKey];
        if (!linkedBefore) {
          this.allVertices[beforeKey] = {
            value: void 0,
            previous: /* @__PURE__ */ new Set([key]),
            next: /* @__PURE__ */ new Set()
          };
          this.connectedVertices[beforeKey] = this.allVertices[beforeKey];
        } else {
          linkedBefore.previous.add(key);
          this.moveToConnected(beforeKey);
        }
      });
    }
    this.emit("node:added", {
      key,
      type: "connected",
      value
    });
    this.needsSort = true;
  }
  remove(key) {
    const removeKey = this.getKey(key);
    const unlinkedVertex = this.isolatedVertices[removeKey];
    if (unlinkedVertex) {
      delete this.isolatedVertices[removeKey];
      delete this.allVertices[removeKey];
      this.emit("node:removed", {
        key: removeKey,
        type: "isolated"
      });
      return;
    }
    const linkedVertex = this.connectedVertices[removeKey];
    if (!linkedVertex) {
      return;
    }
    linkedVertex.next.forEach((nextKey) => {
      const nextVertex = this.connectedVertices[nextKey];
      if (nextVertex) {
        nextVertex.previous.delete(removeKey);
        if (nextVertex.previous.size === 0 && nextVertex.next.size === 0) {
          this.moveToIsolated(nextKey);
        }
      }
    });
    linkedVertex.previous.forEach((prevKey) => {
      const prevVertex = this.connectedVertices[prevKey];
      if (prevVertex) {
        prevVertex.next.delete(removeKey);
        if (prevVertex.previous.size === 0 && prevVertex.next.size === 0) {
          this.moveToIsolated(prevKey);
        }
      }
    });
    delete this.connectedVertices[removeKey];
    delete this.allVertices[removeKey];
    this.emit("node:removed", {
      key: removeKey,
      type: "connected"
    });
    this.needsSort = true;
  }
  mapNodes(callback) {
    if (this.needsSort) {
      this.sort();
    }
    const result = [];
    this.forEachNode((value, index) => {
      result.push(callback(value, index));
    });
    return result;
  }
  forEachNode(callback) {
    if (this.needsSort) {
      this.sort();
    }
    let index = 0;
    for (; index < this.sortedConnectedValues.length; index++) {
      callback(this.sortedConnectedValues[index], index);
    }
    Reflect.ownKeys(this.isolatedVertices).forEach((key) => {
      const vertex = this.isolatedVertices[key];
      if (vertex.value !== void 0)
        callback(vertex.value, index++);
    });
  }
  getValueByKey(key) {
    return this.allVertices[key]?.value;
  }
  getKeyByValue(value) {
    return Reflect.ownKeys(this.connectedVertices).find((key) => this.connectedVertices[key].value === value) ?? Reflect.ownKeys(this.isolatedVertices).find((key) => this.isolatedVertices[key].value === value);
  }
  sort() {
    const inDegree = /* @__PURE__ */ new Map();
    const zeroInDegreeQueue = [];
    const result = [];
    const connectedVertexKeysWithValues = Reflect.ownKeys(this.connectedVertices).filter((key) => {
      const vertex = this.connectedVertices[key];
      return vertex.value !== void 0;
    });
    connectedVertexKeysWithValues.forEach((vertex) => {
      inDegree.set(vertex, 0);
    });
    connectedVertexKeysWithValues.forEach((vertexKey) => {
      const vertex = this.connectedVertices[vertexKey];
      vertex.next.forEach((next) => {
        const nextVertex = this.connectedVertices[next];
        if (!nextVertex)
          return;
        inDegree.set(next, (inDegree.get(next) || 0) + 1);
      });
    });
    inDegree.forEach((degree, value) => {
      if (degree === 0) {
        zeroInDegreeQueue.push(value);
      }
    });
    while (zeroInDegreeQueue.length > 0) {
      const vertexKey = zeroInDegreeQueue.shift();
      result.push(vertexKey);
      const v = connectedVertexKeysWithValues.find((key) => key === vertexKey);
      if (v) {
        this.connectedVertices[v]?.next.forEach((adjVertex) => {
          const adjVertexInDegree = (inDegree.get(adjVertex) || 0) - 1;
          inDegree.set(adjVertex, adjVertexInDegree);
          if (adjVertexInDegree === 0) {
            zeroInDegreeQueue.push(adjVertex);
          }
        });
      }
    }
    if (result.length !== connectedVertexKeysWithValues.length) {
      throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");
    }
    const filterUndefined = (value) => value !== void 0;
    this.sortedConnectedValues = result.map((key) => this.connectedVertices[key].value).filter(filterUndefined);
    this.needsSort = false;
  }
  clear() {
    this.allVertices = {};
    this.isolatedVertices = {};
    this.connectedVertices = {};
    this.sortedConnectedValues = [];
    this.needsSort = false;
  }
  static isKey(value) {
    return typeof value === "string" || typeof value === "symbol";
  }
  static isValue(value) {
    return typeof value === "object" && "key" in value;
  }
}
class Task {
  key;
  stage;
  callback;
  runTask = true;
  stop() {
    this.runTask = false;
  }
  start() {
    this.runTask = true;
  }
  constructor(stage, key, callback) {
    this.stage = stage;
    this.key = key;
    this.callback = callback;
  }
  run(delta) {
    if (!this.runTask)
      return;
    this.callback(delta);
  }
}
class Stage extends DAG {
  key;
  scheduler;
  get tasks() {
    return this.sortedVertices;
  }
  callback = (_, r) => r();
  constructor(scheduler, key, callback) {
    super();
    this.scheduler = scheduler;
    this.key = key;
    if (callback)
      this.callback = callback.bind(this);
  }
  createTask(key, callback, options) {
    const task = new Task(this, key, callback);
    this.add(key, task, options);
    return task;
  }
  getTask(key) {
    return this.getValueByKey(key);
  }
  removeTask = this.remove.bind(this);
  run(delta) {
    this.callback(delta, (deltaOverride) => {
      this.forEachNode((task) => {
        task.run(deltaOverride ?? delta);
      });
    });
  }
  runWithTiming(delta) {
    const taskTimings = {};
    this.callback(delta, (deltaOverride) => {
      this.forEachNode((task) => {
        const start = performance.now();
        task.run(deltaOverride ?? delta);
        const duration = performance.now() - start;
        taskTimings[task.key] = duration;
      });
    });
    return taskTimings;
  }
  getSchedule() {
    return this.mapNodes((l) => l.key.toString());
  }
}
class Scheduler extends DAG {
  lastTime = performance.now();
  clampDeltaTo = 0.1;
  get stages() {
    return this.sortedVertices;
  }
  constructor(options) {
    super();
    if (options?.clampDeltaTo)
      this.clampDeltaTo = options.clampDeltaTo;
    this.run = this.run.bind(this);
  }
  createStage(key, options) {
    const stage = new Stage(this, key, options?.callback);
    this.add(key, stage, {
      after: options?.after,
      before: options?.before
    });
    return stage;
  }
  getStage(key) {
    return this.getValueByKey(key);
  }
  removeStage = this.remove.bind(this);
  /**
   * Runs all the stages in the scheduler.
   *
   * @param time The time in milliseconds since the start of the program.
   */
  run(time) {
    const delta = time - this.lastTime;
    this.forEachNode((stage) => {
      stage.run(Math.min(delta / 1e3, this.clampDeltaTo));
    });
    this.lastTime = time;
  }
  runWithTiming(time) {
    const delta = time - this.lastTime;
    const stageTimings = {};
    const start = performance.now();
    this.forEachNode((stage) => {
      const start2 = performance.now();
      const taskTimings = stage.runWithTiming(Math.min(delta / 1e3, this.clampDeltaTo));
      const duration = performance.now() - start2;
      stageTimings[stage.key.toString()] = {
        duration,
        tasks: taskTimings
      };
    });
    return {
      total: performance.now() - start,
      stages: stageTimings
    };
  }
  getSchedule(include = {
    tasks: true
  }) {
    return {
      stages: this.mapNodes((stage) => {
        if (stage === void 0)
          throw new Error("Stage not found");
        return {
          key: stage.key.toString(),
          ...{ tasks: include.tasks ? stage.getSchedule() : void 0 }
        };
      })
    };
  }
  dispose() {
    this.clear();
  }
}
const useLegacyFrameCompatibilityContextKey = Symbol("use-legacy-frame-compatibility-context");
const injectLegacyFrameCompatibilityContext = () => {
  const ctx = {
    useFrameOrders: [],
    useRenderOrders: []
  };
  setContext(useLegacyFrameCompatibilityContextKey, ctx);
  return ctx;
};
const useLegacyFrameCompatibilityContext = () => {
  const ctx = getContext(useLegacyFrameCompatibilityContextKey);
  if (ctx === void 0) {
    throw new Error("No legacy frame compatibility context found, are you using this hook inside of <Canvas>?");
  }
  return ctx;
};
const watch = (stores, callback) => {
  const d = derived(stores, (values) => {
    return values;
  });
  let cleanupFn;
  const unsubscribe = d.subscribe(async (values) => {
    if (cleanupFn)
      cleanupFn();
    const fn = await callback(values);
    if (fn)
      cleanupFn = fn;
  });
  onDestroy(() => {
    unsubscribe();
    if (cleanupFn)
      cleanupFn();
  });
};
function memoize(stores, transform) {
  const obj = {
    current: void 0
  };
  watch(stores, (v) => {
    obj.current = transform ? transform(v) : v;
  });
  return obj;
}
const currentWritable = (value) => {
  const store = writable(value);
  const extendedWritable = {
    set: (value2) => {
      extendedWritable.current = value2;
      store.set(value2);
    },
    subscribe: store.subscribe,
    update: (fn) => {
      const newValue = fn(extendedWritable.current);
      extendedWritable.current = newValue;
      store.set(newValue);
    },
    current: value
  };
  return extendedWritable;
};
const browser = typeof window !== "undefined";
const useParentSize = () => {
  const parentSize = currentWritable({ width: 0, height: 0 });
  if (!browser) {
    return {
      parentSize,
      parentSizeAction: () => {
      }
    };
  }
  const mutationOptions = { childList: true, subtree: false, attributes: false };
  let el;
  const observeParent = (parent) => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();
    resizeObserver.observe(parent);
    mutationObserver.observe(parent, mutationOptions);
  };
  const resizeObserver = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect;
    if (width === parentSize.current.width && height === parentSize.current.height)
      return;
    parentSize.set({ width, height });
  });
  const mutationObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      for (const node of mutation.removedNodes) {
        if (el === node && el.parentElement) {
          observeParent(el.parentElement);
          return;
        }
      }
    }
  });
  const parentSizeAction = (node) => {
    el = node;
    const parent = el.parentElement;
    if (!parent)
      return;
    parentSize.set({
      width: parent.clientWidth,
      height: parent.clientHeight
    });
    observeParent(parent);
  };
  onDestroy(() => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();
  });
  return {
    parentSize,
    parentSizeAction
  };
};
const shallowEqualArrays = (arrA, arrB) => {
  if (arrA === arrB)
    return true;
  if (!arrA || !arrB)
    return false;
  const len = arrA.length;
  if (arrB.length !== len)
    return false;
  for (let i = 0; i < len; i++)
    if (arrA[i] !== arrB[i])
      return false;
  return true;
};
const createCache = () => {
  setContext("threlte-cache", []);
};
const useCache = () => {
  const cache = getContext("threlte-cache");
  if (!cache) {
    throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");
  }
  const remember = (callback, keys) => {
    for (const entry2 of cache) {
      if (shallowEqualArrays(keys, entry2.keys)) {
        if (entry2.error)
          throw entry2.error;
        if (entry2.promise)
          return entry2.promise;
      }
    }
    const entry = {
      promise: callback(),
      keys,
      value: void 0
    };
    cache.push(entry);
    entry.promise.catch((error) => {
      entry.error = error;
    });
    return entry.promise;
  };
  const clear = (keys) => {
    const index = cache.findIndex((entry) => shallowEqualArrays(keys, entry.keys));
    if (index !== -1) {
      cache.splice(index, 1);
    }
  };
  return {
    remember,
    clear
  };
};
const getThrelteUserData = (object) => {
  return object.userData;
};
const createDefaultCamera = () => {
  const defaultCamera = new PerspectiveCamera(75, 0, 0.1, 1e3);
  getThrelteUserData(defaultCamera).threlteDefaultCamera = true;
  defaultCamera.position.z = 5;
  defaultCamera.lookAt(0, 0, 0);
  return defaultCamera;
};
const setDefaultCameraAspectOnSizeChange = (ctx) => {
  watch(ctx.size, (size) => {
    if (getThrelteUserData(get_store_value(ctx.camera)).threlteDefaultCamera) {
      ctx.camera.update((c) => {
        const cam = c;
        cam.aspect = size.width / size.height;
        cam.updateProjectionMatrix();
        ctx.invalidate();
        return cam;
      });
    }
  });
};
const createContexts = (options) => {
  const internalCtx = {
    frameInvalidated: true,
    advance: false,
    autoInvalidations: /* @__PURE__ */ new Set(),
    resetFrameInvalidation: () => {
      internalCtx.frameInvalidated = false;
      internalCtx.advance = false;
    },
    dispose: async (force = false) => {
      await tick();
      if (!internalCtx.shouldDispose && !force)
        return;
      internalCtx.disposableObjects.forEach((mounted, object) => {
        if (mounted === 0 || force) {
          object?.dispose?.();
          internalCtx.disposableObjects.delete(object);
        }
      });
      internalCtx.shouldDispose = false;
    },
    collectDisposableObjects: (object, objects) => {
      const disposables = objects ?? [];
      if (!object)
        return disposables;
      if (object?.dispose && typeof object.dispose === "function" && object.type !== "Scene") {
        disposables.push(object);
      }
      Object.entries(object).forEach(([propKey, propValue]) => {
        if (propKey === "parent" || propKey === "children" || typeof propValue !== "object")
          return;
        const value = propValue;
        if (value?.dispose) {
          internalCtx.collectDisposableObjects(value, disposables);
        }
      });
      return disposables;
    },
    addDisposableObjects: (objects) => {
      objects.forEach((obj) => {
        const currentValue = internalCtx.disposableObjects.get(obj);
        if (currentValue) {
          internalCtx.disposableObjects.set(obj, currentValue + 1);
        } else {
          internalCtx.disposableObjects.set(obj, 1);
        }
      });
    },
    removeDisposableObjects: (objects) => {
      if (objects.length === 0)
        return;
      objects.forEach((obj) => {
        const currentValue = internalCtx.disposableObjects.get(obj);
        if (currentValue && currentValue > 0) {
          internalCtx.disposableObjects.set(obj, currentValue - 1);
        }
      });
      internalCtx.shouldDispose = true;
    },
    disposableObjects: /* @__PURE__ */ new Map(),
    shouldDispose: false
  };
  const ctx = {
    size: derived([options.userSize, options.parentSize], ([uSize, pSize]) => {
      return uSize ? uSize : pSize;
    }),
    camera: currentWritable(createDefaultCamera()),
    scene: new Scene(),
    renderer: void 0,
    invalidate: () => {
      internalCtx.frameInvalidated = true;
    },
    advance: () => {
      internalCtx.advance = true;
    },
    colorSpace: currentWritable(options.colorSpace),
    toneMapping: currentWritable(options.toneMapping),
    dpr: currentWritable(options.dpr),
    useLegacyLights: currentWritable(options.useLegacyLights),
    shadows: currentWritable(options.shadows),
    colorManagementEnabled: currentWritable(options.colorManagementEnabled),
    renderMode: currentWritable(options.renderMode),
    autoRender: currentWritable(options.autoRender),
    scheduler: void 0,
    mainStage: void 0,
    renderStage: void 0,
    autoRenderTask: void 0,
    shouldRender: () => {
      const shouldRender = ctx.renderMode.current === "always" || ctx.renderMode.current === "on-demand" && (internalCtx.frameInvalidated || internalCtx.autoInvalidations.size > 0) || ctx.renderMode.current === "manual" && internalCtx.advance;
      return shouldRender;
    }
  };
  const userCtx = currentWritable({});
  setContext("threlte", ctx);
  setContext("threlte-internal-context", internalCtx);
  setContext("threlte-user-context", userCtx);
  const getCtx = () => ctx;
  const getInternalCtx = () => internalCtx;
  return {
    ctx,
    internalCtx,
    getCtx,
    getInternalCtx
  };
};
const colorSpaceToEncoding = {
  srgb: sRGBEncoding,
  "srgb-linear": LinearEncoding,
  "": LinearEncoding
};
const rendererHasOutputColorSpaceProperty = (renderer) => {
  return renderer.outputColorSpace !== void 0;
};
const useRenderer = (ctx) => {
  const renderer = writable(void 0);
  const createRenderer = (canvas, rendererParameters) => {
    ctx.renderer = new WebGLRenderer({
      powerPreference: "high-performance",
      canvas,
      antialias: true,
      alpha: true,
      ...rendererParameters
    });
    renderer.set(ctx.renderer);
  };
  watch([ctx.colorManagementEnabled], ([colorManagementEnabled]) => {
    if (revision >= 150) {
      ColorManagement.enabled = colorManagementEnabled;
    } else {
      ColorManagement.legacyMode = !colorManagementEnabled;
    }
  });
  watch([renderer, ctx.colorSpace], ([renderer2, colorSpace]) => {
    if (!renderer2)
      return;
    if (rendererHasOutputColorSpaceProperty(renderer2)) {
      renderer2.outputColorSpace = colorSpace;
    } else {
      const encoding = colorSpaceToEncoding[colorSpace];
      if (!encoding) {
        console.warn("No encoding found for colorSpace", colorSpace);
      } else {
        renderer2.outputEncoding = encoding;
      }
    }
  });
  watch([renderer, ctx.dpr], ([renderer2, dpr]) => {
    renderer2?.setPixelRatio(dpr);
  });
  watch([renderer, ctx.size], ([renderer2, size]) => {
    if (renderer2?.xr?.isPresenting)
      return;
    renderer2?.setSize(size.width, size.height);
  });
  watch([renderer, ctx.shadows], ([renderer2, shadows]) => {
    if (!renderer2)
      return;
    renderer2.shadowMap.enabled = !!shadows;
    if (shadows && shadows !== true) {
      renderer2.shadowMap.type = shadows;
    } else if (shadows === true) {
      renderer2.shadowMap.type = PCFSoftShadowMap;
    }
  });
  watch([renderer, ctx.toneMapping], ([renderer2, toneMapping]) => {
    if (!renderer2)
      return;
    renderer2.toneMapping = toneMapping;
  });
  watch([renderer, ctx.useLegacyLights], ([renderer2, useLegacyLights]) => {
    if (!renderer2)
      return;
    if (revision >= 150 && useLegacyLights) {
      renderer2.useLegacyLights = useLegacyLights;
    } else if (revision < 150) {
      renderer2.physicallyCorrectLights = !useLegacyLights;
    }
  });
  return {
    createRenderer
  };
};
const css$3 = {
  code: "canvas.svelte-1oju42t{display:block;z-index:20;position:fixed;top:0;left:0}",
  map: null
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $initialized, $$unsubscribe_initialized;
  let { colorManagementEnabled = true } = $$props;
  let { colorSpace = "srgb" } = $$props;
  let { dpr = browser ? window.devicePixelRatio : 1 } = $$props;
  let { renderMode = "on-demand" } = $$props;
  let { rendererParameters = void 0 } = $$props;
  let { shadows = PCFSoftShadowMap } = $$props;
  let { size = void 0 } = $$props;
  let { toneMapping = ACESFilmicToneMapping } = $$props;
  let { useLegacyLights = revision >= 155 ? false : true } = $$props;
  let { autoRender = true } = $$props;
  let canvas;
  let initialized = writable(false);
  $$unsubscribe_initialized = subscribe(initialized, (value) => $initialized = value);
  const userSize = writable(size);
  const { parentSize, parentSizeAction } = useParentSize();
  const { useRenderOrders } = injectLegacyFrameCompatibilityContext();
  const contexts = createContexts({
    colorManagementEnabled,
    colorSpace,
    dpr,
    renderMode,
    parentSize,
    autoRender,
    shadows,
    toneMapping,
    useLegacyLights,
    userSize
  });
  const scheduler = new Scheduler();
  contexts.getCtx().mainStage = scheduler.createStage(Symbol("threlte-main-stage"));
  contexts.getCtx().renderStage = scheduler.createStage(Symbol("threlte-render-stage"), {
    after: contexts.ctx.mainStage,
    callback(_, runTasks) {
      if (contexts.ctx.shouldRender())
        runTasks();
    }
  });
  contexts.getCtx().autoRenderTask = contexts.ctx.renderStage.createTask(Symbol("threlte-auto-render-task"), (_) => {
    if (useRenderOrders.length > 0)
      return;
    contexts.ctx.renderer.render(ctx.scene, ctx.camera.current);
  });
  watch([initialized, contexts.ctx.autoRender], ([initialized2, autoRender2]) => {
    if (initialized2 && autoRender2) {
      contexts.getCtx().autoRenderTask.start();
    } else {
      contexts.getCtx().autoRenderTask.stop();
    }
    return () => {
      contexts.getCtx().autoRenderTask.stop();
    };
  });
  contexts.getCtx().scheduler = scheduler;
  createCache();
  const ctx = contexts.ctx;
  setDefaultCameraAspectOnSizeChange(ctx);
  useRenderer(ctx);
  onDestroy(() => {
    contexts.internalCtx.dispose(true);
    contexts.ctx.scheduler.dispose();
    contexts.ctx.renderer?.dispose();
  });
  if ($$props.colorManagementEnabled === void 0 && $$bindings.colorManagementEnabled && colorManagementEnabled !== void 0)
    $$bindings.colorManagementEnabled(colorManagementEnabled);
  if ($$props.colorSpace === void 0 && $$bindings.colorSpace && colorSpace !== void 0)
    $$bindings.colorSpace(colorSpace);
  if ($$props.dpr === void 0 && $$bindings.dpr && dpr !== void 0)
    $$bindings.dpr(dpr);
  if ($$props.renderMode === void 0 && $$bindings.renderMode && renderMode !== void 0)
    $$bindings.renderMode(renderMode);
  if ($$props.rendererParameters === void 0 && $$bindings.rendererParameters && rendererParameters !== void 0)
    $$bindings.rendererParameters(rendererParameters);
  if ($$props.shadows === void 0 && $$bindings.shadows && shadows !== void 0)
    $$bindings.shadows(shadows);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toneMapping === void 0 && $$bindings.toneMapping && toneMapping !== void 0)
    $$bindings.toneMapping(toneMapping);
  if ($$props.useLegacyLights === void 0 && $$bindings.useLegacyLights && useLegacyLights !== void 0)
    $$bindings.useLegacyLights(useLegacyLights);
  if ($$props.autoRender === void 0 && $$bindings.autoRender && autoRender !== void 0)
    $$bindings.autoRender(autoRender);
  if ($$props.ctx === void 0 && $$bindings.ctx && ctx !== void 0)
    $$bindings.ctx(ctx);
  $$result.css.add(css$3);
  {
    userSize.set(size);
  }
  {
    contexts.ctx.colorSpace.set(colorSpace);
  }
  {
    contexts.ctx.dpr.set(dpr);
  }
  {
    contexts.ctx.renderMode.set(renderMode);
  }
  {
    contexts.ctx.autoRender.set(autoRender);
  }
  {
    contexts.ctx.shadows.set(shadows);
  }
  {
    contexts.ctx.toneMapping.set(toneMapping);
  }
  $$unsubscribe_initialized();
  return `<canvas class="svelte-1oju42t"${add_attribute("this", canvas, 0)}>${$initialized ? `${validate_component(SceneGraphObject, "SceneGraphObject").$$render($$result, { object: contexts.ctx.scene }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : ``} </canvas>`;
});
function injectPlugin(nameOrNamedPlugin, maybePlugin) {
  const contextName = "threlte-plugin-context";
  if (Array.isArray(nameOrNamedPlugin)) {
    const [name, plugin] = nameOrNamedPlugin;
    setContext(contextName, {
      ...getContext(contextName),
      [name]: plugin
    });
  } else {
    const name = nameOrNamedPlugin;
    const plugin = maybePlugin;
    if (!plugin)
      return;
    setContext(contextName, {
      ...getContext(contextName),
      [name]: plugin
    });
  }
}
function useTask(keyOrFn, fnOrOptions, options) {
  if (!browser) {
    return {
      task: void 0,
      start: () => void 0,
      stop: () => void 0,
      started: readable(false)
    };
  }
  let key;
  let fn;
  let opts;
  if (DAG.isKey(keyOrFn)) {
    key = keyOrFn;
    fn = fnOrOptions;
    opts = options;
  } else {
    key = Symbol("useTask");
    fn = keyOrFn;
    opts = fnOrOptions;
  }
  const ctx = useThrelte();
  let stage = ctx.mainStage;
  if (opts) {
    if (opts.stage) {
      if (DAG.isValue(opts.stage)) {
        stage = opts.stage;
      } else {
        const maybeStage = ctx.scheduler.getStage(opts.stage);
        if (!maybeStage) {
          throw new Error(`No stage found with key ${opts.stage.toString()}`);
        }
        stage = maybeStage;
      }
    } else if (opts.after) {
      if (Array.isArray(opts.after)) {
        for (let index = 0; index < opts.after.length; index++) {
          const element = opts.after[index];
          if (DAG.isValue(element)) {
            stage = element.stage;
            break;
          }
        }
      } else if (DAG.isValue(opts.after)) {
        stage = opts.after.stage;
      }
    } else if (opts.before) {
      if (Array.isArray(opts.before)) {
        for (let index = 0; index < opts.before.length; index++) {
          const element = opts.before[index];
          if (DAG.isValue(element)) {
            stage = element.stage;
            break;
          }
        }
      } else if (DAG.isValue(opts.before)) {
        stage = opts.before.stage;
      }
    }
  }
  const { autoInvalidations } = getContext("threlte-internal-context");
  const started = writable(false);
  const task = stage.createTask(key, fn, opts);
  const start = () => {
    started.set(true);
    if (opts?.autoInvalidate ?? true) {
      autoInvalidations.add(fn);
    }
    task.start();
  };
  const stop = () => {
    started.set(true);
    if (opts?.autoInvalidate ?? true) {
      autoInvalidations.delete(fn);
    }
    task.stop();
  };
  if (opts?.autoStart ?? true) {
    start();
  } else {
    stop();
  }
  onDestroy(() => {
    if (!stage)
      return;
    stage.removeTask(key);
  });
  return {
    task,
    start,
    stop,
    started: {
      subscribe: started.subscribe
    }
  };
}
function useThrelteUserContext(namespace, value, options) {
  const userCtxStore = getContext("threlte-user-context");
  if (!userCtxStore) {
    throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");
  }
  if (!namespace) {
    return {
      subscribe: userCtxStore.subscribe
    };
  }
  if (namespace && !value) {
    return derived(userCtxStore, (ctx) => ctx[namespace]);
  }
  userCtxStore.update((ctx) => {
    if (namespace in ctx) {
      if (!options || options.existing === "skip")
        return ctx;
      if (options.existing === "merge") {
        Object.assign(ctx[namespace], value);
        return ctx;
      }
    }
    ctx[namespace] = value;
    return ctx;
  });
  return userCtxStore.current[namespace];
}
const orderToKey = (order) => `useFrame-order-${order.toString()}`;
const useFrame = (fn, options) => {
  if (!browser) {
    return {
      start: () => void 0,
      stop: () => void 0,
      started: readable(false)
    };
  }
  const started = writable(false);
  const ctx = useThrelte();
  const { useFrameOrders } = useLegacyFrameCompatibilityContext();
  const { autoInvalidations } = getContext("threlte-internal-context");
  let order = options?.order ?? 0;
  while (useFrameOrders.includes(order)) {
    order += 0.01;
  }
  useFrameOrders.push(order);
  const key = orderToKey(order);
  const proxy = (delta) => {
    fn(ctx, delta);
  };
  const task = ctx.mainStage.createTask(key, proxy, {
    after: useFrameOrders.filter((o) => o < order).map((o) => orderToKey(o)),
    before: useFrameOrders.filter((o) => o > order).map((o) => orderToKey(o))
  });
  const start = () => {
    started.set(true);
    if (options?.invalidate ?? true) {
      autoInvalidations.add(fn);
    }
    task.start();
  };
  const stop = () => {
    started.set(true);
    if (options?.invalidate ?? true) {
      autoInvalidations.delete(fn);
    }
    task.stop();
  };
  if (options?.autostart ?? true) {
    start();
  } else {
    stop();
  }
  onDestroy(() => {
    ctx.mainStage.removeTask(key);
    useFrameOrders.splice(useFrameOrders.indexOf(order), 1);
  });
  return {
    start,
    stop,
    started: {
      subscribe: started.subscribe
    }
  };
};
const asyncWritable = (promise) => {
  const store = writable(void 0);
  const error = writable(void 0);
  promise.then((result) => {
    store.set(result);
  }).catch((e) => {
    console.error("Error in asyncWritable:", e.message);
    error.set(e);
  });
  return Object.assign(Object.assign(promise, store), { error, promise });
};
function useLoader(Proto, options) {
  const { remember, clear: clearCacheItem } = useCache();
  let loader;
  const initializeLoader = () => {
    const lazyLoader = new Proto(...options?.args ?? []);
    options?.extend?.(lazyLoader);
    return lazyLoader;
  };
  const load = (input, options2) => {
    const loadResource = async (url) => {
      if (!loader) {
        loader = initializeLoader();
      }
      if ("loadAsync" in loader) {
        const result = await loader.loadAsync(url, options2?.onProgress);
        return options2?.transform?.(result) ?? result;
      } else {
        return new Promise((resolve, reject) => {
          loader.load(url, (data) => resolve(options2?.transform?.(data) ?? data), (event) => options2?.onProgress?.(event), reject);
        });
      }
    };
    if (Array.isArray(input)) {
      const promises = input.map((url) => {
        return remember(() => loadResource(url), [Proto, url]);
      });
      const store = asyncWritable(Promise.all(promises));
      return store;
    } else if (typeof input === "string") {
      const promise = remember(() => loadResource(input), [Proto, input]);
      const store = asyncWritable(promise);
      return store;
    } else {
      const promises = Object.values(input).map((url) => {
        return remember(() => loadResource(url), [Proto, url]);
      });
      const store = asyncWritable(Promise.all(promises).then((results) => {
        return Object.fromEntries(Object.entries(input).map(([key], i) => [key, results[i]]));
      }));
      return store;
    }
  };
  const clear = (input) => {
    if (Array.isArray(input)) {
      input.forEach((url) => {
        clearCacheItem([Proto, url]);
      });
    } else if (typeof input === "string") {
      clearCacheItem([Proto, input]);
    } else {
      Object.entries(input).forEach(([key, url]) => {
        clearCacheItem([Proto, key, url]);
      });
    }
  };
  return {
    load,
    clear,
    loader
  };
}
const forwardEventHandlers = () => {
  const component = get_current_component();
  const dispatchingComponent = writable(void 0);
  watch(dispatchingComponent, (dispatchingComponent2) => {
    if (!dispatchingComponent2)
      return;
    Object.entries(component.$$.callbacks).forEach((callback) => {
      const [key, value] = callback;
      if (key in dispatchingComponent2.$$.callbacks && Array.isArray(dispatchingComponent2.$$.callbacks[key])) {
        dispatchingComponent2.$$.callbacks[key].push(...value);
      } else {
        dispatchingComponent2.$$.callbacks[key] = value;
      }
    });
  });
  return dispatchingComponent;
};
const buildSceneGraph = (object) => {
  const data = { nodes: {}, materials: {} };
  if (object) {
    object.traverse((obj) => {
      if (obj.name)
        data.nodes[obj.name] = obj;
      if (obj.material && !data.materials[obj.material.name])
        data.materials[obj.material.name] = obj.material;
    });
  }
  return data;
};
const defaultDracoLoaderInstances = {};
function useGltf(urlOrOptions, options) {
  const { renderer } = useThrelte();
  const opts = typeof urlOrOptions === "string" ? options : urlOrOptions;
  const loader = useLoader(GLTFLoader, {
    extend(loader2) {
      if (opts?.useDraco) {
        if (typeof opts.useDraco === "string" || typeof opts.useDraco === "boolean") {
          const path = typeof opts.useDraco === "string" ? opts.useDraco : "https://www.gstatic.com/draco/versioned/decoders/1.4.3/";
          if (!defaultDracoLoaderInstances[path]) {
            defaultDracoLoaderInstances[path] = new DRACOLoader().setDecoderPath(path);
          }
          loader2.setDRACOLoader(defaultDracoLoaderInstances[path]);
        } else {
          loader2.setDRACOLoader(opts.useDraco);
        }
      }
      if (opts?.useMeshopt) {
        loader2.setMeshoptDecoder(MeshoptDecoder);
      }
      if (opts?.ktxTranscoderPath) {
        const ktx2Loader = new KTX2Loader();
        ktx2Loader.setTranscoderPath(opts?.ktxTranscoderPath);
        ktx2Loader.detectSupport(renderer);
        loader2.setKTX2Loader(ktx2Loader);
      }
    }
  });
  const load = (url2) => {
    return loader.load(url2, {
      transform(result) {
        return {
          ...result,
          ...buildSceneGraph(result.scene)
        };
      }
    });
  };
  const url = typeof urlOrOptions === "string" ? urlOrOptions : void 0;
  if (url) {
    return load(url);
  } else {
    return {
      load
    };
  }
}
const suspenseContextIdentifier = Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER");
const useSuspense = () => {
  const ctx = getContext(suspenseContextIdentifier);
  const component = get_current_component();
  const suspend = (promise) => {
    ctx?.suspend(component, promise);
    return promise;
  };
  const state = {
    suspended: derived(ctx?.suspended ?? readable(false), (suspended) => suspended)
  };
  onDestroy(() => {
    ctx?.onComponentDestroy(component);
  });
  return Object.assign(suspend, state);
};
const GLTF = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "url",
    "useDraco",
    "useMeshopt",
    "ktxTranscoderPath",
    "gltf",
    "scene",
    "animations",
    "asset",
    "cameras",
    "scenes",
    "userData",
    "parser",
    "materials",
    "nodes"
  ]);
  let $component, $$unsubscribe_component;
  const component = forwardEventHandlers();
  $$unsubscribe_component = subscribe(component, (value) => $component = value);
  let { url } = $$props;
  let { useDraco = false } = $$props;
  let { useMeshopt = false } = $$props;
  let { ktxTranscoderPath = void 0 } = $$props;
  const dispatch = createRawEventDispatcher();
  let { gltf = void 0 } = $$props;
  let { scene = void 0 } = $$props;
  let { animations = void 0 } = $$props;
  let { asset = void 0 } = $$props;
  let { cameras = void 0 } = $$props;
  let { scenes = void 0 } = $$props;
  let { userData = void 0 } = $$props;
  let { parser = void 0 } = $$props;
  let { materials = void 0 } = $$props;
  let { nodes = void 0 } = $$props;
  const loader = useGltf({
    useDraco: useDraco ? typeof useDraco === "string" ? useDraco : "https://www.gstatic.com/draco/v1/decoders/" : void 0,
    useMeshopt,
    ktxTranscoderPath
  });
  const onLoad = (data) => {
    if (gltf)
      dispatch("unload");
    gltf = data;
    scene = data.scene;
    animations = data.animations;
    asset = data.asset;
    cameras = data.cameras;
    scenes = data.scenes;
    userData = data.userData;
    parser = data.parser;
    materials = data.materials;
    nodes = data.nodes;
    dispatch("load", gltf);
  };
  const onError = (error) => {
    console.error(`Error loading GLTF: ${error.message}`);
    gltf = void 0;
    scene = void 0;
    animations = void 0;
    asset = void 0;
    cameras = void 0;
    scenes = void 0;
    userData = void 0;
    parser = void 0;
    nodes = void 0;
    materials = void 0;
    dispatch("error", error.message);
  };
  const suspend = useSuspense();
  const loadGltf = async (url2) => {
    try {
      const model = await suspend(loader.load(url2));
      onLoad(model);
    } catch (error) {
      onError(error);
    }
  };
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.useDraco === void 0 && $$bindings.useDraco && useDraco !== void 0)
    $$bindings.useDraco(useDraco);
  if ($$props.useMeshopt === void 0 && $$bindings.useMeshopt && useMeshopt !== void 0)
    $$bindings.useMeshopt(useMeshopt);
  if ($$props.ktxTranscoderPath === void 0 && $$bindings.ktxTranscoderPath && ktxTranscoderPath !== void 0)
    $$bindings.ktxTranscoderPath(ktxTranscoderPath);
  if ($$props.gltf === void 0 && $$bindings.gltf && gltf !== void 0)
    $$bindings.gltf(gltf);
  if ($$props.scene === void 0 && $$bindings.scene && scene !== void 0)
    $$bindings.scene(scene);
  if ($$props.animations === void 0 && $$bindings.animations && animations !== void 0)
    $$bindings.animations(animations);
  if ($$props.asset === void 0 && $$bindings.asset && asset !== void 0)
    $$bindings.asset(asset);
  if ($$props.cameras === void 0 && $$bindings.cameras && cameras !== void 0)
    $$bindings.cameras(cameras);
  if ($$props.scenes === void 0 && $$bindings.scenes && scenes !== void 0)
    $$bindings.scenes(scenes);
  if ($$props.userData === void 0 && $$bindings.userData && userData !== void 0)
    $$bindings.userData(userData);
  if ($$props.parser === void 0 && $$bindings.parser && parser !== void 0)
    $$bindings.parser(parser);
  if ($$props.materials === void 0 && $$bindings.materials && materials !== void 0)
    $$bindings.materials(materials);
  if ($$props.nodes === void 0 && $$bindings.nodes && nodes !== void 0)
    $$bindings.nodes(nodes);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      loadGltf(url);
    }
    $$rendered = `${scene ? `${validate_component(T, "T").$$render(
      $$result,
      Object.assign({}, { is: scene }, $$restProps, { this: $component }),
      {
        this: ($$value) => {
          $component = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ ref }) => {
          return `${slots.default ? slots.default({ ref }) : ``}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_component();
  return $$rendered;
});
const useControlsContext = () => {
  return useThrelteUserContext("threlte-controls", {
    orbitControls: writable(void 0),
    trackballControls: writable(void 0)
  });
};
const OrbitControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ref"]);
  let $parent, $$unsubscribe_parent;
  let $component, $$unsubscribe_component;
  const parent = useParent();
  $$unsubscribe_parent = subscribe(parent, (value) => $parent = value);
  const isCamera = (p) => {
    return p.isCamera;
  };
  const { renderer, invalidate } = useThrelte();
  if (!isCamera($parent)) {
    throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");
  }
  const ref = new OrbitControls$1($parent, renderer.domElement);
  const { start, stop } = useTask(() => ref.update(), { autoStart: false });
  const component = forwardEventHandlers();
  $$unsubscribe_component = subscribe(component, (value) => $component = value);
  const { orbitControls } = useControlsContext();
  orbitControls.set(ref);
  onDestroy(() => orbitControls.set(void 0));
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($$restProps.autoRotate || $$restProps.enableDamping)
          start();
        else
          stop();
      }
    }
    $$rendered = `${validate_component(T, "T").$$render(
      $$result,
      Object.assign({}, { is: ref }, $$restProps, { this: $component }),
      {
        this: ($$value) => {
          $component = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ ref: ref2 }) => {
          return `${slots.default ? slots.default({ ref: ref2 }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_parent();
  $$unsubscribe_component();
  return $$rendered;
});
const getDefaultComputeFunction = (state) => {
  const camera = memoize(useThrelte().camera);
  let width = 0;
  let height = 0;
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
    }
  });
  watch(state.target, (target) => {
    if (target)
      resizeObserver.observe(target);
    return () => {
      if (target)
        resizeObserver.unobserve(target);
    };
  });
  return (event, state2) => {
    state2.pointer.update((pointer) => {
      pointer.set(event.offsetX / width * 2 - 1, -(event.offsetY / height) * 2 + 1);
      return pointer;
    });
    state2.raycaster.setFromCamera(state2.pointer.current, camera.current);
  };
};
const useInteractivity = () => {
  const state = getContext("threlte-interactivity-context");
  const eventDispatcher = createRawEventDispatcher();
  const addInteractiveObject = (object) => {
    if (!state) {
      console.warn("No interactivity context found. Did you forget to implement interactivity()?");
      return;
    }
    object.userData._threlte_interactivity_dispatcher = eventDispatcher;
    if (state.interactiveObjects.some((obj) => obj.uuid === object.uuid))
      return;
    state.interactiveObjects.push(object);
  };
  const removeInteractiveObject = (object) => {
    if (!state) {
      console.warn("No interactivity context found. Did you forget to implement interactivity()?");
      return;
    }
    state.interactiveObjects = state.interactiveObjects.filter((obj) => obj.uuid !== object.uuid);
    delete object.userData._threlte_interactivity_dispatcher;
  };
  return {
    ...state,
    addInteractiveObject,
    removeInteractiveObject
  };
};
const useComponentHasEventHandlers = (eventNames) => {
  get_current_component();
  const hasEventHandlers = writable(false);
  return {
    hasEventHandlers
  };
};
const injectInteractivityPlugin = () => {
  injectPlugin("interactivity", ({ ref }) => {
    if (!ref.isObject3D)
      return;
    const { addInteractiveObject, removeInteractiveObject } = useInteractivity();
    const refStore = writable(ref);
    const { hasEventHandlers } = useComponentHasEventHandlers();
    watch([hasEventHandlers, refStore], ([hasEventHandlers2, ref2]) => {
      if (!hasEventHandlers2)
        return;
      addInteractiveObject(ref2);
      return () => removeInteractiveObject(ref2);
    });
    return {
      onRefChange(ref2) {
        refStore.set(ref2);
      }
    };
  });
};
const getRawEventDispatcher = (object) => {
  return object.userData._threlte_interactivity_dispatcher;
};
function getIntersectionId(event) {
  return (event.eventObject || event.object).uuid + "/" + event.index + event.instanceId;
}
const DOM_EVENTS = [
  ["click", false],
  ["contextmenu", false],
  ["dblclick", false],
  ["wheel", false],
  ["pointerdown", true],
  ["pointerup", true],
  ["pointerleave", true],
  ["pointerenter", true],
  ["pointermove", true],
  ["pointercancel", true]
];
const setupInteractivity = (state) => {
  function calculateDistance(event) {
    const dx = event.offsetX - state.initialClick[0];
    const dy = event.offsetY - state.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
  function cancelPointer(intersections) {
    for (const hoveredObj of state.hovered.values()) {
      if (!intersections.length || !intersections.find((hit) => {
        return hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId;
      })) {
        const eventObject = hoveredObj.eventObject;
        state.hovered.delete(getIntersectionId(hoveredObj));
        const eventDispatcher = getRawEventDispatcher(eventObject);
        if (eventDispatcher) {
          const data = { ...hoveredObj, intersections };
          eventDispatcher("pointerout", data);
          eventDispatcher("pointerleave", data);
        }
      }
    }
  }
  const enabled = memoize(state.enabled);
  const getHits = () => {
    const duplicates = /* @__PURE__ */ new Set();
    const intersections = [];
    let hits = state.interactiveObjects.flatMap((obj) => enabled.current ? state.raycaster.intersectObject(obj, true) : []).sort((a, b) => a.distance - b.distance).filter((item) => {
      const id = getIntersectionId(item);
      if (duplicates.has(id))
        return false;
      duplicates.add(id);
      return true;
    });
    if (state.filter)
      hits = state.filter(hits, state);
    for (const hit of hits) {
      let eventObject = hit.object;
      while (eventObject) {
        if (getRawEventDispatcher(eventObject))
          intersections.push({ ...hit, eventObject });
        eventObject = eventObject.parent;
      }
    }
    return intersections;
  };
  function pointerMissed(event, objects) {
    for (const object of objects) {
      const eventDispatcher = getRawEventDispatcher(object);
      if (!eventDispatcher)
        continue;
      eventDispatcher("pointermissed", event);
    }
  }
  const getEventHandler = (name) => {
    if (name === "pointerleave" || name === "pointercancel") {
      return () => {
        state.pointerOverTarget.set(false);
        cancelPointer([]);
      };
    }
    if (name === "pointerenter") {
      return () => {
        state.pointerOverTarget.set(true);
      };
    }
    return (event) => {
      const isPointerMove = name === "pointermove";
      const isClickEvent = name === "click" || name === "contextmenu" || name === "dblclick";
      state.compute(event, state);
      const hits = getHits();
      const delta = isClickEvent ? calculateDistance(event) : 0;
      if (name === "pointerdown") {
        state.initialClick = [event.offsetX, event.offsetY];
        state.initialHits = hits.map((hit) => hit.eventObject);
      }
      if (isClickEvent && !hits.length) {
        if (delta <= 2) {
          pointerMissed(event, state.interactiveObjects);
        }
      }
      if (isPointerMove)
        cancelPointer(hits);
      let stopped = false;
      dispatchEvents:
        for (const hit of hits) {
          const intersectionEvent = {
            stopped,
            ...hit,
            intersections: hits,
            stopPropagation() {
              stopped = true;
              intersectionEvent.stopped = true;
              if (state.hovered.size && Array.from(state.hovered.values()).find((i) => i.eventObject === hit.eventObject)) {
                const higher = hits.slice(0, hits.indexOf(hit));
                cancelPointer([...higher, hit]);
              }
            },
            camera: state.raycaster.camera,
            delta,
            nativeEvent: event,
            pointer: state.pointer.current,
            ray: state.raycaster.ray
          };
          const eventDispatcher = getRawEventDispatcher(hit.eventObject);
          if (!eventDispatcher)
            return;
          if (isPointerMove) {
            if (eventDispatcher.hasEventListener("pointerover") || eventDispatcher.hasEventListener("pointerenter") || eventDispatcher.hasEventListener("pointerout") || eventDispatcher.hasEventListener("pointerleave")) {
              const id = getIntersectionId(intersectionEvent);
              const hoveredItem = state.hovered.get(id);
              if (!hoveredItem) {
                state.hovered.set(id, intersectionEvent);
                eventDispatcher("pointerover", intersectionEvent);
                eventDispatcher("pointerenter", intersectionEvent);
              } else if (hoveredItem.stopped) {
                intersectionEvent.stopPropagation();
              }
            }
            eventDispatcher("pointermove", intersectionEvent);
          } else {
            const hasEventListener = eventDispatcher.hasEventListener(name);
            if (hasEventListener) {
              if (!isClickEvent || state.initialHits.includes(hit.eventObject)) {
                pointerMissed(event, state.interactiveObjects.filter((object) => !state.initialHits.includes(object)));
                eventDispatcher(name, intersectionEvent);
              }
            } else {
              if (isClickEvent && state.initialHits.includes(hit.eventObject)) {
                pointerMissed(event, state.interactiveObjects.filter((object) => !state.initialHits.includes(object)));
              }
            }
          }
          if (stopped)
            break dispatchEvents;
        }
    };
  };
  const disconnect = (target) => {
    DOM_EVENTS.forEach(([eventName]) => {
      target.removeEventListener(eventName, getEventHandler(eventName));
    });
  };
  const connect = (target) => {
    DOM_EVENTS.forEach(([eventName, passive]) => {
      target.addEventListener(eventName, getEventHandler(eventName), { passive });
    });
  };
  watch(state.target, (target) => {
    if (target)
      connect(target);
    return () => {
      if (target)
        disconnect(target);
    };
  });
};
const interactivity = (options) => {
  const state = {
    enabled: currentWritable(options?.enabled ?? true),
    pointer: currentWritable(new Vector2()),
    pointerOverTarget: currentWritable(false),
    lastEvent: void 0,
    raycaster: new Raycaster(),
    initialClick: [0, 0],
    initialHits: [],
    hovered: /* @__PURE__ */ new Map(),
    interactiveObjects: [],
    target: currentWritable(options?.target ?? useThrelte().renderer.domElement),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    compute: () => {
    },
    filter: options?.filter
  };
  state.compute = options?.compute ?? getDefaultComputeFunction(state);
  setContext("threlte-interactivity-context", state);
  injectInteractivityPlugin();
  setupInteractivity(state);
  return state;
};
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map(
      (_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const SplashScene = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let material;
  useFrame((state, delta) => {
  });
  interactivity();
  spring(1);
  return `${validate_component(T.PerspectiveCamera, "T.PerspectiveCamera").$$render(
    $$result,
    {
      makeDefault: true,
      position: [15, 15, 10]
    },
    {},
    {
      default: () => {
        return `${validate_component(OrbitControls, "OrbitControls").$$render(
          $$result,
          {
            autoRotate: true,
            autoRotateSpeed: 1,
            enableDamping: true,
            enableZoom: false,
            target: [0, 0, 0]
          },
          {},
          {}
        )} ${validate_component(T.DirectionalLight, "T.DirectionalLight").$$render($$result, { position: [3, 10, 7] }, {}, {})}`;
      }
    }
  )} ${validate_component(T.AmbientLight, "T.AmbientLight").$$render($$result, { intensity: 0.4 }, {}, {})} ${validate_component(GLTF, "GLTF").$$render(
    $$result,
    {
      url: "/whiteHouse/scene.gltf",
      position: [0, 0, 0],
      scale: 1,
      material: { whiteHouse: material }
    },
    {},
    {}
  )}`;
});
const css$2 = {
  code: "@keyframes svelte-1gv2i7t-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1gv2i7t *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1gv2i7t .finished-typing::after{content:none}.cursor.svelte-1gv2i7t .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent.js"),
    cascade: () => import("../../chunks/cascade.js"),
    loop: () => import("../../chunks/loop.js"),
    loopOnce: () => import("../../chunks/loopOnce.js"),
    loopRandom: () => import("../../chunks/loopRandom.js"),
    scramble: () => import("../../chunks/scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0)
    $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0)
    $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$2);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript> ${disabled ? `<div class="typewriter-container svelte-1gv2i7t">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${showCursorOnDelay ? `<div class="typewriter-container cursor svelte-1gv2i7t" data-svelte-h="svelte-1ssf3hl"><p class="typing"></p></div>` : ``} `;
    }
    return function() {
      return ` ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return ` ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-1gv2i7t", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)} `;
        }();
      }(modes[mode]())} `;
    }();
  }(delayPromise())}`}`;
});
const css$1 = {
  code: ".custom-shape-divider-bottom-1705252340.svelte-d124ky.svelte-d124ky{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.custom-shape-divider-bottom-1705252340.svelte-d124ky svg.svelte-d124ky{position:relative;display:block;width:calc(100% + 1.3px);height:150px}.custom-shape-divider-bottom-1705252340.svelte-d124ky .shape-fill.svelte-d124ky{fill:#000000}",
  map: null
};
const TiltDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="custom-shape-divider-bottom-1705252340 svelte-d124ky" data-svelte-h="svelte-1ckxkif"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-d124ky"><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill svelte-d124ky"></path></svg> </div>`;
});
const css = {
  code: "@media screen and (min-width: 2200px){.animation.svelte-1ftqghe{top:10vh;right:0;width:70%;height:80vh;overflow:hidden}.typewriter.svelte-1ftqghe{width:30%;height:100vh;margin:0;position:relative;z-index:100}}@media screen and (max-width: 2200px) and (min-width: 1500px){.animation.svelte-1ftqghe{top:25vh;right:0;width:50%;height:50vh;overflow:hidden}.typewriter.svelte-1ftqghe{width:50%;height:100vh;position:relative;z-index:100}}@media screen and (max-width: 1500px){.animation.svelte-1ftqghe{top:0;right:0;width:100%;height:100vh;overflow:hidden}.typewriter.svelte-1ftqghe{width:100%;height:100vh;margin:0;position:relative;z-index:100}}.typewriter.svelte-1ftqghe{position:relative;width:100%;height:100vh;z-index:100}.animation.svelte-1ftqghe{position:relative;z-index:auto;pointer-events:none}@media(min-width: 1200px){.text-image.svelte-1ftqghe{flex-direction:row}.pcsHeader.svelte-1ftqghe{font-size:4.5rem;line-height:1.5}}@media(max-width: 1200px){.text-image.svelte-1ftqghe{flex-direction:column}.pcsHeader.svelte-1ftqghe{font-size:3rem;line-height:1.5}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let platitudes = [
    "A community dedicated to diverse thought.",
    "A community built for equity. ",
    "A community of innovators.",
    "A community for everyone.",
    "A community paving the path for ethical computing"
  ];
  let scrollToElement;
  $$result.css.add(css);
  return `<div class="w-full h-screen absolute z-0"><div class="animation svelte-1ftqghe">${validate_component(Canvas, "Canvas").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SplashScene, "Scene").$$render($$result, {}, {}, {})}`;
    }
  })}</div></div> <div class="w-full h-screen relative z-10"><div class="typewriter select-none flex flex-col gap-20 pl-16 justify-center items-center svelte-1ftqghe">${validate_component(Fade, "Fade").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-4 justify-center items-start text-left"><h1 class="pcsHeader dark:text-white font-bold svelte-1ftqghe" data-svelte-h="svelte-h6riut">Political Computer Science @ Berkeley</h1> ${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "loop", interval: 70 }, {}, {
        default: () => {
          return `${each(platitudes, (platitude) => {
            return `<h1 class="font-bold text-lg my-3 mr-3 ml-1 drop-shadow-xl">${escape(platitude)}</h1>`;
          })}`;
        }
      })} <div class="flex flex-row justify-center items-start gap-4"><a class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200" href="https://docs.google.com/forms/d/e/1FAIpQLSdLTjL76KESHNkkE-H5BRoGimma8ja0H55lt1-8KsSIzirRdQ/viewform" data-svelte-h="svelte-ch110a">Join Us</a> <button class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200" data-svelte-h="svelte-118wphx">Learn More</button></div></div>`;
    }
  })}</div> ${validate_component(TiltDivider, "TiltDivider").$$render($$result, {}, {}, {})}</div> <div class="flex flex-col justify-center items-center text-center w-full relative bg-surface-900 z-50 gap-10 py-20"${add_attribute("this", scrollToElement, 0)} data-svelte-h="svelte-16r3opz"><div class="flex text-image justify-evenly gap-10 svelte-1ftqghe"><div class="flex flex-col gap-10 px-12 flex-1 text-center justify-center items-center"><h1 class="h1 font-bold">Who Are We?</h1> <p class="p leading-10">Political Computer Science @ Berkeley is a club dedicated to exploring interdisciplinary
				work connecting the technology and political fields. Don&#39;t be fooled-- we have plenty of
				individuals with a strong tech background and host several web development/data science
				project each semester, but we also have room for individuals to explore non-technical
				projects relating to tech policy, and even code tools to help inform others about
				government.</p> <div><a class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200" href="/about">About Us</a></div></div> <div class="p-10 flex-1 flex flex-col justify-center items-center"><img src="/meetings.png" alt="General Meetings"></div></div> <div class="flex flex-col gap-5 w-3/4 items-center justify-center text-center"><h1 class="h1 font-bold pt-20 leading-10">Spring 2024 Recruitment</h1> <p class="p leading-10">Our Spring 2024 Recruitment Schedule is still TBA, but please visit our &quot;Calendar&quot; page for
			updates and follow us on Instagram.</p> <div><a class="bg-primary-600 text-center font-bold flex cursor-pointer rounded-full px-4 py-2 hover:bg-primary-700 duration-200" href="/about">About Us</a></div></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
