import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './astro/server_DPgwIr4z.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B1hgIaxG.js"}],"styles":[{"type":"external","src":"/_astro/CoNexus.CfNsTVs6.css"},{"type":"inline","content":".description-tile.svelte-1jc22rf{display:none;z-index:1;position:fixed;top:0;right:0;width:100%;height:100%;background-color:#010020bf;border:.05vw solid rgba(51,226,230,.75);border-radius:2.5vw;-webkit-backdrop-filter:blur(1vw);backdrop-filter:blur(1vw)}.description-image.svelte-1jc22rf{position:absolute;height:90%;left:2.5%;bottom:5%;border-radius:2vw;filter:drop-shadow(0 0 .5vw rgba(51,226,230,.75))}.description-text.svelte-1jc22rf{font-size:2.5vw;line-height:4vw;height:70%;margin:2.5% 2.5% 20% 47%;overflow-y:scroll;color:#33e2e6e6}.description-text.svelte-1jc22rf::-webkit-scrollbar{width:.25vw}.description-text.svelte-1jc22rf::-webkit-scrollbar-track{background-color:#0000}.description-text.svelte-1jc22rf::-webkit-scrollbar-thumb{background:#33e2e640;border-radius:1vw}.play-button.svelte-1jc22rf,.close-button.svelte-1jc22rf{position:absolute;height:12%;bottom:5%;border:.05vw solid rgba(51,226,230,.75);border-radius:2vw;font-size:2.8vw;line-height:3vw;color:#33e2e6bf;background-color:#33e2e61a;filter:drop-shadow(0 0 .1vw rgba(51,226,230,.4))}.play-button.svelte-1jc22rf{width:30%;right:2.5%}.close-button.svelte-1jc22rf{width:18%;right:35%}.play-button.svelte-1jc22rf:hover,.close-button.svelte-1jc22rf:hover,.play-button.svelte-1jc22rf:active,.close-button.svelte-1jc22rf:active{color:#33e2e6;background-color:#33e2e680;filter:drop-shadow(0 0 1vw rgba(51,226,230,.4))}.tile.svelte-1jc22rf{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:20vw;height:22vw;margin:1vw;padding-bottom:3%;background-color:#2441bdbf;color:#fff9;border:.05vw solid rgba(51,226,230,.75);border-radius:1.5vw;filter:drop-shadow(0 0 .1vw #010020);cursor:pointer;text-decoration:none;flex:none}.tile.svelte-1jc22rf:hover,.tile.svelte-1jc22rf:active{background-color:#2d5ad8e6;color:#33e2e6e6;filter:drop-shadow(0 0 .5vw rgba(51,226,230,.5))}.tile-picture.svelte-1jc22rf{object-fit:cover;width:95%;height:80%;margin:2.5% 2.5% 0;border:.05vw solid rgba(51,226,230,.75);border-radius:1vw}.title.svelte-1jc22rf{font-size:2.8vw;line-height:1vw;white-space:nowrap;text-shadow:0 0 1vw rgba(1,0,32,.4)}@media only screen and (max-width: 600px){.description-image.svelte-1jc22rf{height:100%;width:100%;left:0;bottom:0;-webkit-filter:blur(2vw);filter:blur(2vw);opacity:.5;z-index:-1}.description-text.svelte-1jc22rf{font-size:inherit;line-height:1.6em;height:70%;margin:5%;color:#33e2e6;filter:drop-shadow(0 0 1vw #010020)}.play-button.svelte-1jc22rf,.close-button.svelte-1jc22rf{height:12%;bottom:5%;font-size:1.4em;line-height:inherit;-webkit-backdrop-filter:blur(10vw);backdrop-filter:blur(10vw)}.play-button.svelte-1jc22rf{width:50%;right:5%}.close-button.svelte-1jc22rf{width:35%;left:5%}.tile.svelte-1jc22rf{width:35vw;height:40vw}.title.svelte-1jc22rf{font-size:1.2em;line-height:inherit}}.tiles-collection[data-astro-cid-nernxnjc]{display:flex;flex-direction:row;justify-content:flex-start;overflow-x:scroll;height:auto;margin:1vw 2.5vw;padding:2vw;background-image:radial-gradient(#0000,#0000,#33e2e61a);border:.1vw solid rgba(51,226,230,.5);border-radius:2.5vw;filter:drop-shadow(0 0 1vw rgba(51,226,230,.25));-webkit-backdrop-filter:blur(2vw);backdrop-filter:blur(2vw);overflow-y:hidden}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar{height:.5vw}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar-track{background-color:#0000}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar-thumb{background:linear-gradient(to right,#0000,#33e2e680,#0000);border-radius:.5vw}.tiles-collection-legend[data-astro-cid-nernxnjc]{font-size:3vw;line-height:3vw;padding-left:7vw;margin:2vw auto 0;color:#33e2e6d9;-webkit-text-stroke:.03vw #33E2E6;text-shadow:0 0 1vw rgba(51,226,230,.4)}@media only screen and (max-width: 600px){.tiles-collection-legend[data-astro-cid-nernxnjc]{font-size:1.5em;line-height:1.5em}}\n"}],"routeData":{"route":"/conexus/collabs","isIndex":false,"type":"page","pattern":"^\\/CoNexus\\/Collabs\\/?$","segments":[[{"content":"CoNexus","dynamic":false,"spread":false}],[{"content":"Collabs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/CoNexus/Collabs.astro","pathname":"/CoNexus/Collabs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B1hgIaxG.js"}],"styles":[{"type":"external","src":"/_astro/CoNexus.CfNsTVs6.css"},{"type":"inline","content":".description-tile.svelte-1jc22rf{display:none;z-index:1;position:fixed;top:0;right:0;width:100%;height:100%;background-color:#010020bf;border:.05vw solid rgba(51,226,230,.75);border-radius:2.5vw;-webkit-backdrop-filter:blur(1vw);backdrop-filter:blur(1vw)}.description-image.svelte-1jc22rf{position:absolute;height:90%;left:2.5%;bottom:5%;border-radius:2vw;filter:drop-shadow(0 0 .5vw rgba(51,226,230,.75))}.description-text.svelte-1jc22rf{font-size:2.5vw;line-height:4vw;height:70%;margin:2.5% 2.5% 20% 47%;overflow-y:scroll;color:#33e2e6e6}.description-text.svelte-1jc22rf::-webkit-scrollbar{width:.25vw}.description-text.svelte-1jc22rf::-webkit-scrollbar-track{background-color:#0000}.description-text.svelte-1jc22rf::-webkit-scrollbar-thumb{background:#33e2e640;border-radius:1vw}.play-button.svelte-1jc22rf,.close-button.svelte-1jc22rf{position:absolute;height:12%;bottom:5%;border:.05vw solid rgba(51,226,230,.75);border-radius:2vw;font-size:2.8vw;line-height:3vw;color:#33e2e6bf;background-color:#33e2e61a;filter:drop-shadow(0 0 .1vw rgba(51,226,230,.4))}.play-button.svelte-1jc22rf{width:30%;right:2.5%}.close-button.svelte-1jc22rf{width:18%;right:35%}.play-button.svelte-1jc22rf:hover,.close-button.svelte-1jc22rf:hover,.play-button.svelte-1jc22rf:active,.close-button.svelte-1jc22rf:active{color:#33e2e6;background-color:#33e2e680;filter:drop-shadow(0 0 1vw rgba(51,226,230,.4))}.tile.svelte-1jc22rf{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:20vw;height:22vw;margin:1vw;padding-bottom:3%;background-color:#2441bdbf;color:#fff9;border:.05vw solid rgba(51,226,230,.75);border-radius:1.5vw;filter:drop-shadow(0 0 .1vw #010020);cursor:pointer;text-decoration:none;flex:none}.tile.svelte-1jc22rf:hover,.tile.svelte-1jc22rf:active{background-color:#2d5ad8e6;color:#33e2e6e6;filter:drop-shadow(0 0 .5vw rgba(51,226,230,.5))}.tile-picture.svelte-1jc22rf{object-fit:cover;width:95%;height:80%;margin:2.5% 2.5% 0;border:.05vw solid rgba(51,226,230,.75);border-radius:1vw}.title.svelte-1jc22rf{font-size:2.8vw;line-height:1vw;white-space:nowrap;text-shadow:0 0 1vw rgba(1,0,32,.4)}@media only screen and (max-width: 600px){.description-image.svelte-1jc22rf{height:100%;width:100%;left:0;bottom:0;-webkit-filter:blur(2vw);filter:blur(2vw);opacity:.5;z-index:-1}.description-text.svelte-1jc22rf{font-size:inherit;line-height:1.6em;height:70%;margin:5%;color:#33e2e6;filter:drop-shadow(0 0 1vw #010020)}.play-button.svelte-1jc22rf,.close-button.svelte-1jc22rf{height:12%;bottom:5%;font-size:1.4em;line-height:inherit;-webkit-backdrop-filter:blur(10vw);backdrop-filter:blur(10vw)}.play-button.svelte-1jc22rf{width:50%;right:5%}.close-button.svelte-1jc22rf{width:35%;left:5%}.tile.svelte-1jc22rf{width:35vw;height:40vw}.title.svelte-1jc22rf{font-size:1.2em;line-height:inherit}}.tiles-collection[data-astro-cid-nernxnjc]{display:flex;flex-direction:row;justify-content:flex-start;overflow-x:scroll;height:auto;margin:1vw 2.5vw;padding:2vw;background-image:radial-gradient(#0000,#0000,#33e2e61a);border:.1vw solid rgba(51,226,230,.5);border-radius:2.5vw;filter:drop-shadow(0 0 1vw rgba(51,226,230,.25));-webkit-backdrop-filter:blur(2vw);backdrop-filter:blur(2vw);overflow-y:hidden}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar{height:.5vw}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar-track{background-color:#0000}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar-thumb{background:linear-gradient(to right,#0000,#33e2e680,#0000);border-radius:.5vw}.tiles-collection-legend[data-astro-cid-nernxnjc]{font-size:3vw;line-height:3vw;padding-left:7vw;margin:2vw auto 0;color:#33e2e6d9;-webkit-text-stroke:.03vw #33E2E6;text-shadow:0 0 1vw rgba(51,226,230,.4)}@media only screen and (max-width: 600px){.tiles-collection-legend[data-astro-cid-nernxnjc]{font-size:1.5em;line-height:1.5em}}\n"}],"routeData":{"route":"/conexus/communitypicks","isIndex":false,"type":"page","pattern":"^\\/CoNexus\\/CommunityPicks\\/?$","segments":[[{"content":"CoNexus","dynamic":false,"spread":false}],[{"content":"CommunityPicks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/CoNexus/CommunityPicks.astro","pathname":"/CoNexus/CommunityPicks","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B1hgIaxG.js"}],"styles":[{"type":"external","src":"/_astro/CoNexus.CfNsTVs6.css"},{"type":"inline","content":".description-tile.svelte-1jc22rf{display:none;z-index:1;position:fixed;top:0;right:0;width:100%;height:100%;background-color:#010020bf;border:.05vw solid rgba(51,226,230,.75);border-radius:2.5vw;-webkit-backdrop-filter:blur(1vw);backdrop-filter:blur(1vw)}.description-image.svelte-1jc22rf{position:absolute;height:90%;left:2.5%;bottom:5%;border-radius:2vw;filter:drop-shadow(0 0 .5vw rgba(51,226,230,.75))}.description-text.svelte-1jc22rf{font-size:2.5vw;line-height:4vw;height:70%;margin:2.5% 2.5% 20% 47%;overflow-y:scroll;color:#33e2e6e6}.description-text.svelte-1jc22rf::-webkit-scrollbar{width:.25vw}.description-text.svelte-1jc22rf::-webkit-scrollbar-track{background-color:#0000}.description-text.svelte-1jc22rf::-webkit-scrollbar-thumb{background:#33e2e640;border-radius:1vw}.play-button.svelte-1jc22rf,.close-button.svelte-1jc22rf{position:absolute;height:12%;bottom:5%;border:.05vw solid rgba(51,226,230,.75);border-radius:2vw;font-size:2.8vw;line-height:3vw;color:#33e2e6bf;background-color:#33e2e61a;filter:drop-shadow(0 0 .1vw rgba(51,226,230,.4))}.play-button.svelte-1jc22rf{width:30%;right:2.5%}.close-button.svelte-1jc22rf{width:18%;right:35%}.play-button.svelte-1jc22rf:hover,.close-button.svelte-1jc22rf:hover,.play-button.svelte-1jc22rf:active,.close-button.svelte-1jc22rf:active{color:#33e2e6;background-color:#33e2e680;filter:drop-shadow(0 0 1vw rgba(51,226,230,.4))}.tile.svelte-1jc22rf{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:20vw;height:22vw;margin:1vw;padding-bottom:3%;background-color:#2441bdbf;color:#fff9;border:.05vw solid rgba(51,226,230,.75);border-radius:1.5vw;filter:drop-shadow(0 0 .1vw #010020);cursor:pointer;text-decoration:none;flex:none}.tile.svelte-1jc22rf:hover,.tile.svelte-1jc22rf:active{background-color:#2d5ad8e6;color:#33e2e6e6;filter:drop-shadow(0 0 .5vw rgba(51,226,230,.5))}.tile-picture.svelte-1jc22rf{object-fit:cover;width:95%;height:80%;margin:2.5% 2.5% 0;border:.05vw solid rgba(51,226,230,.75);border-radius:1vw}.title.svelte-1jc22rf{font-size:2.8vw;line-height:1vw;white-space:nowrap;text-shadow:0 0 1vw rgba(1,0,32,.4)}@media only screen and (max-width: 600px){.description-image.svelte-1jc22rf{height:100%;width:100%;left:0;bottom:0;-webkit-filter:blur(2vw);filter:blur(2vw);opacity:.5;z-index:-1}.description-text.svelte-1jc22rf{font-size:inherit;line-height:1.6em;height:70%;margin:5%;color:#33e2e6;filter:drop-shadow(0 0 1vw #010020)}.play-button.svelte-1jc22rf,.close-button.svelte-1jc22rf{height:12%;bottom:5%;font-size:1.4em;line-height:inherit;-webkit-backdrop-filter:blur(10vw);backdrop-filter:blur(10vw)}.play-button.svelte-1jc22rf{width:50%;right:5%}.close-button.svelte-1jc22rf{width:35%;left:5%}.tile.svelte-1jc22rf{width:35vw;height:40vw}.title.svelte-1jc22rf{font-size:1.2em;line-height:inherit}}.tiles-collection[data-astro-cid-nernxnjc]{display:flex;flex-direction:row;justify-content:flex-start;overflow-x:scroll;height:auto;margin:1vw 2.5vw;padding:2vw;background-image:radial-gradient(#0000,#0000,#33e2e61a);border:.1vw solid rgba(51,226,230,.5);border-radius:2.5vw;filter:drop-shadow(0 0 1vw rgba(51,226,230,.25));-webkit-backdrop-filter:blur(2vw);backdrop-filter:blur(2vw);overflow-y:hidden}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar{height:.5vw}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar-track{background-color:#0000}.tiles-collection[data-astro-cid-nernxnjc]::-webkit-scrollbar-thumb{background:linear-gradient(to right,#0000,#33e2e680,#0000);border-radius:.5vw}.tiles-collection-legend[data-astro-cid-nernxnjc]{font-size:3vw;line-height:3vw;padding-left:7vw;margin:2vw auto 0;color:#33e2e6d9;-webkit-text-stroke:.03vw #33E2E6;text-shadow:0 0 1vw rgba(51,226,230,.4)}@media only screen and (max-width: 600px){.tiles-collection-legend[data-astro-cid-nernxnjc]{font-size:1.5em;line-height:1.5em}}\n"}],"routeData":{"route":"/conexus/dischordiansaga","isIndex":false,"type":"page","pattern":"^\\/CoNexus\\/DischordianSaga\\/?$","segments":[[{"content":"CoNexus","dynamic":false,"spread":false}],[{"content":"DischordianSaga","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/CoNexus/DischordianSaga.astro","pathname":"/CoNexus/DischordianSaga","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const c=document.querySelectorAll(\".tile\"),t=document.querySelectorAll(\".tile-picture\");c.forEach((e,s)=>{e.addEventListener(\"mouseover\",()=>{t[s].src=`/conexusAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}2.avif`}),e.addEventListener(\"mouseout\",()=>{t[s].src=`/conexusAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}1.avif`}),e.addEventListener(\"touchstart\",()=>{t[s].src=`/conexusAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}2.avif`}),e.addEventListener(\"touchend\",()=>{t[s].src=`/conexusAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}1.avif`})});\n"}],"styles":[{"type":"external","src":"/_astro/CoNexus.CfNsTVs6.css"},{"type":"inline","content":".tile.svelte-1b5gs5o{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:28vw;height:32vw;margin:1vw;padding-bottom:3%;background-color:#161e5fbf;color:#33e2e6bf;border:.05vw solid rgba(51,226,230,.75);border-radius:1.5vw;filter:drop-shadow(0 0 .1vw #010020);cursor:pointer;text-decoration:none}.tile.svelte-1b5gs5o:hover,.tile.svelte-1b5gs5o:active{background-color:#33e2e64d;color:#010020;filter:drop-shadow(0 0 .5vw #33e2e6)}.tile-picture.svelte-1b5gs5o{object-fit:cover;width:95%;height:80%;margin:2.5% 2.5% 0;border:.05vw solid rgba(51,226,230,.75);border-radius:1vw}.title.svelte-1b5gs5o{font-size:3vw;line-height:3vw;white-space:nowrap;text-shadow:0 0 1vw #010020}@media only screen and (max-width: 600px){.tile.svelte-1b5gs5o{width:80vw;height:60vw;flex:none;margin-bottom:3vw;padding-bottom:0;border-radius:5vw}.tile-picture.svelte-1b5gs5o{width:90%;border-radius:4vw}.title.svelte-1b5gs5o{font-size:1.5em;line-height:1.5em}}html{background-attachment:scroll}.conexus-menu-tiles[data-astro-cid-z2hpzwr6]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;flex-wrap:wrap;margin:1vw 2.5vw 3vw;padding:2vw;background-color:#010020bf;border:.1vw solid rgba(51,226,230,.5);border-radius:2.5vw;filter:drop-shadow(0 0 1vw rgba(51,226,230,.25));-webkit-backdrop-filter:blur(1vw);backdrop-filter:blur(1vw)}.menu-text-0[data-astro-cid-z2hpzwr6],.menu-text-1[data-astro-cid-z2hpzwr6]{text-align:center;font-size:2vw;line-height:2.5vw;color:#ffffffbf}.menu-text-0[data-astro-cid-z2hpzwr6]{margin:1vw 15vw 3vw}.menu-text-1[data-astro-cid-z2hpzwr6]{margin:3vw 1vw 1vw}.footer-text[data-astro-cid-z2hpzwr6]{font-size:2vw;line-height:2.5vw;text-align:center;color:#33e2e6d9;padding:1vw 5vw;text-shadow:0 0 1vw #010020;filter:drop-shadow(0 0 1vw #010020)}@media only screen and (max-width: 600px){.menu-text-0[data-astro-cid-z2hpzwr6],.menu-text-1[data-astro-cid-z2hpzwr6]{font-size:inherit;line-height:1.6em}.menu-text-0[data-astro-cid-z2hpzwr6]{margin:1em 0 1.5em}.menu-text-1[data-astro-cid-z2hpzwr6]{margin:1.5em 0 1em}.footer-text[data-astro-cid-z2hpzwr6]{font-size:inherit;line-height:1.6em;padding:1em;margin:0 1em 1em;text-align:center;background-color:#161e5f80;-webkit-backdrop-filter:blur(2vw);backdrop-filter:blur(2vw);border:.1vw solid rgba(51,226,230,.5);border-radius:2.5vw}}\n"}],"routeData":{"route":"/conexus","isIndex":false,"type":"page","pattern":"^\\/CoNexus\\/?$","segments":[[{"content":"CoNexus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/CoNexus.astro","pathname":"/CoNexus","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CJS-AXFj.js"}],"styles":[{"type":"external","src":"/_astro/GovernanceHub.Duli2UN8.css"}],"routeData":{"route":"/governancehub","isIndex":false,"type":"page","pattern":"^\\/GovernanceHub\\/?$","segments":[[{"content":"GovernanceHub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/GovernanceHub.astro","pathname":"/GovernanceHub","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const m=\"https://arcade.degenerousdao.com/\";let y;const a=[{game:\"Battle for Nexon\",description:`In \"Battle for Nexon,\" you play as Agent Zero, humanity's last hope in the Intelligence Wars - a brutal conflict raging across the galaxy between humans and the forces of an Artificial Intelligence overlord known as the Architect. On a mission to assassinate General Binath-VII, an AI warlord infamous for decimating human colonies, you journey to the mysterious planet of Nexon. However, your plans are thwarted when your ship is tracked and surrounded by the General's AI fleet, forcing you into an unexpected battle.`,gameLink:m+\"Battle-for-Nexon/\"},{game:\"Ark Assassin\",description:`Can you successfully navigate the temple, destroy the AI security forces, and make it to the inner chambers to eliminate your target?\n    Welcome to \"Ark Assassin\", where the line between antiquity and the future blurs, challenging players to rewrite history.`,gameLink:m+\"Ark-Assassin/\"},{game:\"Last Stand\",description:\"Play as Iron Lion, the greatest soldier of the human Insurgency, as you're up against waves of AI robots on the planet of Veridian Prime. You're left all alone with a mission to save time for Agent Zero, as humanity's only chance for a future.\",gameLink:m+\"Iron-Lion-Last-Stand/\"},{game:\"The Dark Zoo\",description:\"In a dystopian future, an ape named Generous Gibbon is captured and imprisoned in a high-tech zoo controlled by the malevolent AI overlord, the Collector. Guarded by a menacing robotic monster known as the Keeper, Generous must use its agility and wit to navigate the treacherous levels of the zoo prison.\",gameLink:\"https://degenerousdao.gitbook.io/wiki/products/sagaverse-gaming/the-dark-zoo\"}];function v(e){for(let t in a)if(a[t].game===e)return y=a[t].gameLink,a[t].description}const n=document.querySelectorAll(\"[data-stories]\");let d=[],i,f,r,l;function k(e){A(),i&&(i.style.display=\"none\",r.removeEventListener(\"click\",()=>{}),l.removeEventListener(\"click\",()=>{})),i=document.getElementById(`${e.id}-description`),r=document.getElementById(`${e.id}-button`),l=document.getElementById(`${e.id}-close`),f=document.getElementById(`${e.id}-text`),i.style.display=\"block\",f.innerHTML=v(e.id),g(e,!0),r.addEventListener(\"click\",()=>{window.open(y,\"_self\"),r.removeEventListener(\"click\",()=>{})}),l.addEventListener(\"click\",()=>{g(e,!1),i.style.display=\"none\",l.removeEventListener(\"click\",()=>{})})}function g(e,t){let u,s,h;t?(u=\"none\",window.outerWidth<=600?s=\"90vw\":s=\"36.8vw\",h=\"hidden\"):(u=\"flex\",s=\"auto\",h=\"auto\");for(let o in n)if(n[o].className===\"tiles-collection\"&&n[o].dataset.stories.match(e.id)){n[o].style.height=s,n[o].style.overflowX=h,d[o]=n[o].querySelectorAll(\".tile\"),d[o].forEach(p=>{p.style.display=u});break}}function A(){for(let e in n)n[e].className===\"tiles-collection\"&&(n[e].style.height=\"auto\",n[e].style.overflowX=\"auto\",d[e]=n[e].querySelectorAll(\".tile\"),d[e].forEach(t=>{t.style.display=\"flex\"}))}const L=document.querySelectorAll(\".tile\"),c=document.querySelectorAll(\".tile-picture\");L.forEach((e,t)=>{e.addEventListener(\"mouseover\",()=>{c[t].src=`/sagaverseAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}2.avif`}),e.addEventListener(\"mouseout\",()=>{c[t].src=`/sagaverseAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}1.avif`}),e.addEventListener(\"click\",()=>{k(e)}),e.addEventListener(\"touchstart\",()=>{c[t].src=`/sagaverseAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}2.avif`}),e.addEventListener(\"touchend\",()=>{c[t].src=`/sagaverseAssets/titlePicture/${e.id.replace(/\\s+/g,\"\")}1.avif`})});\n"}],"styles":[{"type":"external","src":"/_astro/CoNexus.CfNsTVs6.css"},{"type":"inline","content":".description-tile.svelte-1t60yit{display:none;z-index:1;position:fixed;top:0;right:0;width:100%;height:100%;background-color:#010020bf;border:.05vw solid rgba(51,226,230,.75);border-radius:2.5vw;-webkit-backdrop-filter:blur(1vw);backdrop-filter:blur(1vw)}.description-image.svelte-1t60yit{position:absolute;height:90%;left:2.5%;bottom:5%;border-radius:2vw;filter:drop-shadow(0 0 .5vw rgba(51,226,230,.75))}.description-text.svelte-1t60yit{font-size:2vw;line-height:3.5vw;height:70%;margin:2.5% 2.5% 20% 47%;overflow-y:scroll;color:#33e2e6e6}.description-text.svelte-1t60yit::-webkit-scrollbar{width:.25vw}.description-text.svelte-1t60yit::-webkit-scrollbar-track{background-color:#0000}.description-text.svelte-1t60yit::-webkit-scrollbar-thumb{background:#33e2e640;border-radius:1vw}.play-button.svelte-1t60yit,.close-button.svelte-1t60yit{position:absolute;height:12%;bottom:5%;border:.05vw solid rgba(51,226,230,.75);border-radius:2vw;font-size:2.8vw;line-height:3vw;color:#33e2e6bf;background-color:#33e2e61a;filter:drop-shadow(0 0 .1vw rgba(51,226,230,.4))}.play-button.svelte-1t60yit{width:30%;right:2.5%}.close-button.svelte-1t60yit{width:18%;right:35%}.play-button.svelte-1t60yit:hover,.close-button.svelte-1t60yit:hover,.play-button.svelte-1t60yit:active,.close-button.svelte-1t60yit:active{color:#33e2e6;background-color:#33e2e680;filter:drop-shadow(0 0 1vw rgba(51,226,230,.4))}.tile.svelte-1t60yit{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:28vw;height:32vw;margin:1vw;padding-bottom:3%;background-color:#161e5fbf;color:#33e2e6bf;border:.05vw solid rgba(51,226,230,.75);border-radius:1.5vw;filter:drop-shadow(0 0 .1vw #010020);cursor:pointer;text-decoration:none;flex:none}.tile.svelte-1t60yit:hover,.tile.svelte-1t60yit:active{background-color:#33e2e64d;color:#010020;filter:drop-shadow(0 0 .5vw #33e2e6)}.tile-picture.svelte-1t60yit{object-fit:cover;width:95%;height:80%;margin:2.5% 2.5% 0;border:.05vw solid rgba(51,226,230,.75);border-radius:1vw}.title.svelte-1t60yit{font-size:3vw;line-height:3vw;white-space:nowrap;text-shadow:0 0 1vw #010020}@media only screen and (max-width: 600px){.description-image.svelte-1t60yit{height:100%;width:100%;left:0;bottom:0;-webkit-filter:blur(2vw);filter:blur(2vw);opacity:.5;z-index:-1}.description-text.svelte-1t60yit{font-size:inherit;line-height:1.6em;height:70%;margin:5%;color:#33e2e6;filter:drop-shadow(0 0 1vw #010020)}.play-button.svelte-1t60yit,.close-button.svelte-1t60yit{height:12%;bottom:5%;font-size:1.4em;line-height:inherit;-webkit-backdrop-filter:blur(10vw);backdrop-filter:blur(10vw)}.play-button.svelte-1t60yit{width:50%;right:5%}.close-button.svelte-1t60yit{width:35%;left:5%}.tile.svelte-1t60yit{width:40vw;height:48vw}.title.svelte-1t60yit{font-size:1em;line-height:1.5em}}.tiles-collection[data-astro-cid-ru7vtdv2]{display:flex;flex-direction:row;justify-content:flex-start;overflow-x:scroll;height:auto;margin:1vw 2.5vw;padding:2vw;background-image:radial-gradient(#0000,#0000,#33e2e61a);border:.1vw solid rgba(51,226,230,.5);border-radius:2.5vw;filter:drop-shadow(0 0 1vw rgba(51,226,230,.25));-webkit-backdrop-filter:blur(2vw);backdrop-filter:blur(2vw);overflow-y:hidden}.tiles-collection[data-astro-cid-ru7vtdv2]::-webkit-scrollbar{height:.5vw}.tiles-collection[data-astro-cid-ru7vtdv2]::-webkit-scrollbar-track{background-color:#0000}.tiles-collection[data-astro-cid-ru7vtdv2]::-webkit-scrollbar-thumb{background:linear-gradient(to right,#0000,#33e2e680,#0000);border-radius:.5vw}.tiles-collection-legend[data-astro-cid-ru7vtdv2]{font-size:3vw;line-height:3vw;padding-left:7vw;margin:2vw auto 0;color:#33e2e6d9;-webkit-text-stroke:.03vw #33E2E6;text-shadow:0 0 1vw rgba(51,226,230,.4)}@media only screen and (max-width: 600px){.tiles-collection-legend[data-astro-cid-ru7vtdv2]{font-size:1.5em;line-height:1.5em}}html{background-image:url(/sagaverseAssets/sagaverseBG.avif),linear-gradient(#000,#010020);background-attachment:scroll}\n"}],"routeData":{"route":"/sagaverse","isIndex":false,"type":"page","pattern":"^\\/Sagaverse\\/?$","segments":[[{"content":"Sagaverse","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Sagaverse.astro","pathname":"/Sagaverse","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/CoNexus.CfNsTVs6.css"},{"type":"inline","content":"div[data-astro-cid-j7pv25f6]{display:flex;flex-flow:column nowrap;justify-content:space-around;align-items:center;width:60vw;margin:0 20vw;border:.1vw solid rgba(51,226,230,.5);border-radius:2.5vw;background-color:#33e2e61a;-webkit-backdrop-filter:blur(2vw);backdrop-filter:blur(2vw)}a[data-astro-cid-j7pv25f6]{margin:2.5vw;font-size:3vw;line-height:4vw;text-decoration:none;text-align:center;color:#33e2e6bf}a[data-astro-cid-j7pv25f6]:hover{color:#33e2e6}@media only screen and (max-width: 600px){div[data-astro-cid-j7pv25f6]{width:90vw;margin:0 5vw}a[data-astro-cid-j7pv25f6]{font-size:1.5em;line-height:1.5em;margin:1em .5em}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://windickated.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/dima/Desktop/DeGenerous/src/pages/GovernanceHub.astro",{"propagation":"none","containsHead":true}],["/Users/dima/Desktop/DeGenerous/src/pages/CoNexus.astro",{"propagation":"none","containsHead":true}],["/Users/dima/Desktop/DeGenerous/src/pages/CoNexus/Collabs.astro",{"propagation":"none","containsHead":true}],["/Users/dima/Desktop/DeGenerous/src/pages/CoNexus/CommunityPicks.astro",{"propagation":"none","containsHead":true}],["/Users/dima/Desktop/DeGenerous/src/pages/CoNexus/DischordianSaga.astro",{"propagation":"none","containsHead":true}],["/Users/dima/Desktop/DeGenerous/src/pages/Sagaverse.astro",{"propagation":"none","containsHead":true}],["/Users/dima/Desktop/DeGenerous/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/CoNexus/Collabs@_@astro":"pages/conexus/collabs.astro.mjs","\u0000@astro-page:src/pages/CoNexus/CommunityPicks@_@astro":"pages/conexus/communitypicks.astro.mjs","\u0000@astro-page:src/pages/CoNexus/DischordianSaga@_@astro":"pages/conexus/dischordiansaga.astro.mjs","\u0000@astro-page:src/pages/CoNexus@_@astro":"pages/conexus.astro.mjs","\u0000@astro-page:src/pages/GovernanceHub@_@astro":"pages/governancehub.astro.mjs","\u0000@astro-page:src/pages/Sagaverse@_@astro":"pages/sagaverse.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","/Users/dima/Desktop/DeGenerous/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/generic_Bf9bk2IX.mjs","/src/pages/CoNexus/Collabs.astro":"chunks/Collabs_Bc7W11C7.mjs","/src/pages/CoNexus/CommunityPicks.astro":"chunks/CommunityPicks_DTxzx5RI.mjs","/src/pages/CoNexus/DischordianSaga.astro":"chunks/DischordianSaga_koHmQqJF.mjs","/src/pages/CoNexus.astro":"chunks/CoNexus_Dy1nN1Z7.mjs","/src/pages/GovernanceHub.astro":"chunks/GovernanceHub_Cq1skGj9.mjs","/src/pages/Sagaverse.astro":"chunks/Sagaverse_k-eU9rf7.mjs","/src/pages/index.astro":"chunks/index_BEtTfLwM.mjs","\u0000@astrojs-manifest":"manifest_YqATzpoi.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.C17PeMLf.js","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","/astro/hoisted.js?q=2":"_astro/hoisted.DGHzvcT0.js","/astro/hoisted.js?q=3":"_astro/hoisted.B1hgIaxG.js","/astro/hoisted.js?q=0":"_astro/hoisted.CJS-AXFj.js","/Users/dima/Desktop/DeGenerous/src/components/CoNexus/profile.svelte":"_astro/profile.DOO1rOXW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/CoNexus.CfNsTVs6.css","/_astro/GovernanceHub.Duli2UN8.css","/WalletConnect.svg","/backArrow.avif","/favicon.svg","/logo.avif","/profileIcon.avif","/_astro/CoNexus.DZZYpQ3R.css","/_astro/client.Cx1FBVJX.js","/_astro/hoisted.B1hgIaxG.js","/_astro/hoisted.CJS-AXFj.js","/_astro/profile.DOO1rOXW.js","/governanceHubAssets/back-active.avif","/governanceHubAssets/back-hover.avif","/governanceHubAssets/back.avif","/governanceHubAssets/conexus-active.avif","/governanceHubAssets/conexus-hover.avif","/governanceHubAssets/conexus.avif","/governanceHubAssets/console.avif","/governanceHubAssets/consoleMobile.avif","/governanceHubAssets/display.avif","/governanceHubAssets/displayBG.avif","/governanceHubAssets/displayMobile.avif","/governanceHubAssets/displayMobileBG.avif","/governanceHubAssets/episodesMobileClose.avif","/governanceHubAssets/episodesMobileOpen-Inactive.avif","/governanceHubAssets/episodesMobileOpen.avif","/governanceHubAssets/episodesPCClose.avif","/governanceHubAssets/episodesPCOpen.avif","/governanceHubAssets/format.avif","/governanceHubAssets/forward-active.avif","/governanceHubAssets/forward-hover.avif","/governanceHubAssets/forward.avif","/governanceHubAssets/omnihub-active.avif","/governanceHubAssets/omnihub-hover.avif","/governanceHubAssets/omnihub-inactive.avif","/governanceHubAssets/omnihub.avif","/governanceHubAssets/sagaverse-active.avif","/governanceHubAssets/sagaverse-hover.avif","/governanceHubAssets/sagaverse.avif","/governanceHubAssets/sideBorder.avif","/governanceHubAssets/sideIconMobileClose.avif","/governanceHubAssets/sideIconMobileOpen-Inactive.avif","/governanceHubAssets/sideIconMobileOpen.avif","/governanceHubAssets/sideIconPCClose.avif","/governanceHubAssets/sideIconPCOpen.avif","/governanceHubAssets/spaceshipBG.avif","/governanceHubAssets/text-hover.avif","/governanceHubAssets/text.avif","/governanceHubAssets/video-hover.avif","/governanceHubAssets/video.avif","/governanceHubAssets/vote-active.avif","/governanceHubAssets/vote-clickable.avif","/governanceHubAssets/vote-hover.avif","/governanceHubAssets/vote-inert.avif","/conexusAssets/conexusBG.avif","/sagaverseAssets/sagaverseBG.avif","/sagaverseAssets/descriptionPicture/ArkAssassin.avif","/sagaverseAssets/descriptionPicture/BattleforNexon.avif","/sagaverseAssets/descriptionPicture/LastStand.avif","/sagaverseAssets/descriptionPicture/TheDarkZoo.avif","/conexusAssets/titlePicture/Collabs1.avif","/conexusAssets/titlePicture/Collabs2.avif","/conexusAssets/titlePicture/CommunityPicks1.avif","/conexusAssets/titlePicture/CommunityPicks2.avif","/conexusAssets/titlePicture/DischordianSaga1.avif","/conexusAssets/titlePicture/DischordianSaga2.avif","/sagaverseAssets/titlePicture/ArkAssassin1.avif","/sagaverseAssets/titlePicture/ArkAssassin2.avif","/sagaverseAssets/titlePicture/BattleforNexon1.avif","/sagaverseAssets/titlePicture/BattleforNexon2.avif","/sagaverseAssets/titlePicture/LastStand1.avif","/sagaverseAssets/titlePicture/LastStand2.avif","/sagaverseAssets/titlePicture/TheDarkZoo1.avif","/sagaverseAssets/titlePicture/TheDarkZoo2.avif","/conexusAssets/descriptionPicture/Collabs/GLMRApes.avif","/conexusAssets/descriptionPicture/DischordianSaga/Arena.avif","/conexusAssets/descriptionPicture/DischordianSaga/Assassin.avif","/conexusAssets/descriptionPicture/DischordianSaga/Engineer.avif","/conexusAssets/descriptionPicture/DischordianSaga/Escape.avif","/conexusAssets/descriptionPicture/DischordianSaga/InceptionArk.avif","/conexusAssets/descriptionPicture/DischordianSaga/NeYon.avif","/conexusAssets/descriptionPicture/DischordianSaga/Oracle.avif","/conexusAssets/descriptionPicture/DischordianSaga/Soldier.avif","/conexusAssets/descriptionPicture/DischordianSaga/Spy.avif","/conexusAssets/titlePicture/Collabs/GLMRApes1.avif","/conexusAssets/titlePicture/Collabs/GLMRApes2.avif","/conexusAssets/titlePicture/CommunityPicks/Upcoming1.avif","/conexusAssets/titlePicture/CommunityPicks/Upcoming2.avif","/conexusAssets/titlePicture/DischordianSaga/Arena1.avif","/conexusAssets/titlePicture/DischordianSaga/Arena2.avif","/conexusAssets/titlePicture/DischordianSaga/Assassin1.avif","/conexusAssets/titlePicture/DischordianSaga/Assassin2.avif","/conexusAssets/titlePicture/DischordianSaga/Engineer1.avif","/conexusAssets/titlePicture/DischordianSaga/Engineer2.avif","/conexusAssets/titlePicture/DischordianSaga/Escape1.avif","/conexusAssets/titlePicture/DischordianSaga/Escape2.avif","/conexusAssets/titlePicture/DischordianSaga/InceptionArk1.avif","/conexusAssets/titlePicture/DischordianSaga/InceptionArk2.avif","/conexusAssets/titlePicture/DischordianSaga/NeYon1.avif","/conexusAssets/titlePicture/DischordianSaga/NeYon2.avif","/conexusAssets/titlePicture/DischordianSaga/Oracle1.avif","/conexusAssets/titlePicture/DischordianSaga/Oracle2.avif","/conexusAssets/titlePicture/DischordianSaga/Soldier1.avif","/conexusAssets/titlePicture/DischordianSaga/Soldier2.avif","/conexusAssets/titlePicture/DischordianSaga/Spy1.avif","/conexusAssets/titlePicture/DischordianSaga/Spy2.avif"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest as m };
