var ho = Object.defineProperty;
var go = (e, t, s) => t in e ? ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Le = (e, t, s) => (go(e, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as de, computed as v, openBlock as o, createElementBlock as i, normalizeClass as y, createElementVNode as l, createCommentVNode as x, renderSlot as U, ref as O, toDisplayString as F, inject as Qe, nextTick as St, isRef as nn, unref as X, mergeProps as Te, withModifiers as Ue, h as $t, resolveComponent as Z, createBlock as ae, withCtx as xe, useAttrs as yo, createVNode as ye, createTextVNode as ke, watchEffect as ws, normalizeStyle as nl, Fragment as Me, renderList as je, withDirectives as Mt, vModelCheckbox as ol, withKeys as on, createStaticVNode as xs, vModelSelect as bo, useSlots as al, getCurrentInstance as Be, onMounted as Ye, createSlots as rl, normalizeProps as Rt, guardReactiveProps as ks, vModelDynamic as wo, onUnmounted as Ft, watch as bt, vModelText as ko, resolveDynamicComponent as an, provide as ss, resolveDirective as _o } from "vue";
import { errorResponseExcept as $o, toDate as pt, toTime as Co, omit as ft, enc as Ks, appendQueryString as Et, lastLeftPart as rn, setQueryString as xo, nameOf as Lo, ApiResult as Xe, lastRightPart as At, leftPart as Ls, map as Ze, toDateTime as Vo, toCamelCase as So, mapGet as _e, chop as Mo, fromXsdDuration as un, isDate as Vs, timeFmt12 as Ao, dateFmt as To, apiValue as Fo, indexOfAny as Io, createBus as jo, toKebabCase as Wl, sanitize as Oo, humanize as Pe, delaySet as dn, rightPart as ms, queryString as Zs, combinePaths as Do, toPascalCase as at, errorResponse as mt, trimEnd as Po, $1 as _s, ResponseStatus as Us, ResponseError as Gl, HttpMethods as il, omitEmpty as Bo, uniqueKeys as Ws, humanify as cn, each as Ho } from "@servicestack/client";
const Ro = { class: "flex items-center" }, Eo = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, zo = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, No = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Uo = [
  No
], qo = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Qo = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), Ko = [
  Qo
], Zo = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Wo = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Go = [
  Wo
], Jo = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Xo = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), Yo = [
  Xo
], ea = /* @__PURE__ */ de({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, s = v(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), n = v(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), a = v(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, u) => (o(), i("div", {
      class: y([s.value, n.value, "border-l-4 p-4"])
    }, [
      l("div", Ro, [
        r.hideIcon ? x("", !0) : (o(), i("div", Eo, [
          r.type == "warn" ? (o(), i("svg", zo, Uo)) : r.type == "error" ? (o(), i("svg", qo, Ko)) : r.type == "info" ? (o(), i("svg", Zo, Go)) : r.type == "success" ? (o(), i("svg", Jo, Yo)) : x("", !0)
        ])),
        l("div", null, [
          l("p", {
            class: y([a.value, "text-sm"])
          }, [
            U(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), ta = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, sa = { class: "flex" }, la = /* @__PURE__ */ l("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ l("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ l("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), na = { class: "ml-3" }, oa = { class: "text-sm font-medium text-green-800" }, aa = { key: 0 }, ra = { class: "ml-auto pl-3" }, ia = { class: "-mx-1.5 -my-1.5" }, ua = /* @__PURE__ */ l("span", { class: "sr-only" }, "Dismiss", -1), da = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), ca = [
  ua,
  da
], fa = /* @__PURE__ */ de({
  __name: "AlertSuccess",
  props: {
    message: {}
  },
  setup(e) {
    const t = O(!1);
    return (s, n) => t.value ? x("", !0) : (o(), i("div", ta, [
      l("div", sa, [
        la,
        l("div", na, [
          l("h3", oa, [
            s.message ? (o(), i("span", aa, F(s.message), 1)) : U(s.$slots, "default", { key: 1 })
          ])
        ]),
        l("div", ra, [
          l("div", ia, [
            l("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: n[0] || (n[0] = (a) => t.value = !0)
            }, ca)
          ])
        ])
      ])
    ]));
  }
}), va = { class: "flex" }, pa = /* @__PURE__ */ l("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ l("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ l("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), ma = { class: "ml-3" }, ha = { class: "text-sm text-red-700 dark:text-red-200" }, ga = /* @__PURE__ */ de({
  __name: "ErrorSummary",
  props: {
    status: {},
    except: {},
    class: {}
  },
  setup(e) {
    const t = e;
    let s = Qe("ApiState", void 0);
    const n = v(() => t.status || s != null && s.error.value ? $o.call({ responseStatus: t.status ?? (s == null ? void 0 : s.error.value) }, t.except ?? []) : null);
    return (a, r) => n.value ? (o(), i("div", {
      key: 0,
      class: y(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${a.$props.class}`)
    }, [
      l("div", va, [
        pa,
        l("div", ma, [
          l("p", ha, F(n.value), 1)
        ])
      ])
    ], 2)) : x("", !0);
  }
}), ya = ["id", "aria-describedby"], ba = /* @__PURE__ */ de({
  __name: "InputDescription",
  props: {
    id: {},
    description: {}
  },
  setup(e) {
    return (t, s) => t.description ? (o(), i("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${t.id}-description`,
      "aria-describedby": `${t.id}-description`
    }, [
      l("div", null, F(t.description), 1)
    ], 8, ya)) : x("", !0);
  }
});
function Ss(e) {
  if (e == null || typeof e == "object")
    return "";
  const t = pt(e);
  return t == null || t.toString() == "Invalid Date" ? "" : t.toISOString().substring(0, 10) ?? "";
}
function fn(e) {
  if (e == null || typeof e == "object")
    return "";
  const t = pt(e);
  return t == null || t.toString() == "Invalid Date" ? "" : t.toISOString().substring(0, 19) ?? "";
}
function vn(e) {
  return e == null ? "" : Co(e);
}
function pn(e, t) {
  if (G.config.inputValue)
    return G.config.inputValue(e, t);
  let s = e === "date" ? Ss(t) : e === "datetime-local" ? fn(t) : e === "time" ? vn(t) : t;
  const n = typeof s;
  return s = s == null ? "" : n == "boolean" || n == "number" ? `${s}` : s, s;
}
function mn(e, t) {
  e.value = null, St(() => e.value = t);
}
function Dt(e) {
  return Object.keys(e).forEach((t) => {
    const s = e[t];
    e[t] = nn(s) ? X(s) : s;
  }), e;
}
function yt(e, t, s) {
  s ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function hs(e) {
  if (typeof document > "u")
    return;
  let t = (e == null ? void 0 : e.after) || document.activeElement, s = t && t.form;
  if (s) {
    let n = ':not([disabled]):not([tabindex="-1"])', a = s.querySelectorAll(`a:not([disabled]), button${n}, input[type=text]${n}, [tabindex]${n}`), r = Array.prototype.filter.call(
      a,
      (d) => d.offsetWidth > 0 || d.offsetHeight > 0 || d === t
    ), u = r.indexOf(t);
    u > -1 && (r[u + 1] || r[0]).focus();
  }
}
function qt(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const t = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!t)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof t.getTypeName != "function")
    throw new Error(`${JSON.stringify(t)} is not a Request DTO`);
  const s = t.getTypeName();
  if (!s)
    throw new Error("DTO Required");
  return s;
}
function dt(e, t, s) {
  s || (s = {});
  let n = s.cls || s.className || s.class;
  return n && (s = ft(s, ["cls", "class", "className"]), s.class = n), t == null ? `<${e}` + Gs(s) + "/>" : `<${e}` + Gs(s) + `>${t || ""}</${e}>`;
}
function Gs(e) {
  return Object.keys(e).reduce((t, s) => `${t} ${s}="${Ks(e[s])}"`, "");
}
function Ms(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Ht(e) {
  return Vl(e);
}
let wa = ["string", "number", "boolean", "null", "undefined"];
function Tt(e) {
  return wa.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Xt(e) {
  return !Tt(e);
}
class hn {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(t) {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  }
  setItem(t, s) {
    typeof localStorage > "u" || localStorage.setItem(t, s);
  }
  removeItem(t) {
    typeof localStorage > "u" || localStorage.removeItem(t);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(t) {
    return typeof localStorage > "u" ? null : localStorage.key(t);
  }
}
function $s(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function ul(e, t) {
  if (typeof history < "u") {
    const s = t ? Et(rn(location.href, "?"), e) : xo(location.href, e);
    history.pushState({}, "", s);
  }
}
function dl(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((a) => e.includes(a)))
    throw new Error(`Unsafe script: '${e}'`);
  const n = Object.assign(
    Object.keys(globalThis).reduce((a, r) => (a[r] = void 0, a), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(n);
}
function Js(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function cl(e) {
  const t = G.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function As(e, t) {
  return Et(`swr.${Lo(e)}`, t ? Object.assign({}, e, t) : e);
}
function ka(e) {
  if (e.request) {
    const t = As(e.request, e.args);
    G.config.storage.removeItem(t);
  }
}
async function gn(e, t, s, n, a) {
  const r = As(t, n);
  s(new Xe({ response: cl(r) }));
  const u = await e.api(t, n, a);
  if (u.succeeded && u.response) {
    u.response._date = (/* @__PURE__ */ new Date()).valueOf();
    const d = JSON.stringify(u.response);
    G.config.storage.setItem(r, d), s(u);
  }
  return u;
}
function yn(e, t) {
  let s = null;
  return (...n) => {
    s && clearTimeout(s), s = setTimeout(() => {
      e(...n);
    }, t || 100);
  };
}
function Ct(e) {
  return typeof e == "string" ? e.split(",") : e || [];
}
function Vt(e, t) {
  const s = Ct(t);
  return e.reduce((n, a) => (n[a] = !s.includes(a), n), {});
}
function bn() {
  return {
    LocalStore: hn,
    dateInputFormat: Ss,
    dateTimeInputFormat: fn,
    timeInputFormat: vn,
    textInputValue: pn,
    setRef: mn,
    unRefs: Dt,
    transition: yt,
    focusNextElement: hs,
    getTypeName: qt,
    htmlTag: dt,
    htmlAttrs: Gs,
    linkAttrs: Ms,
    toAppUrl: Ht,
    isPrimitive: Tt,
    isComplexType: Xt,
    pushState: ul,
    scopedExpr: dl,
    copyText: Js,
    fromCache: cl,
    swrCacheKey: As,
    swrClear: ka,
    swrApi: gn,
    asStrings: Ct,
    asOptions: Vt,
    createDebounce: yn
  };
}
const wn = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), kn = {
  img: "png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),
  vid: "avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),
  aud: "mp3,mpa,ogg,wav,wma,mid,webm".split(","),
  ppt: "key,odp,pps,ppt,pptx".split(","),
  xls: "xls,xlsm,xlsx,ods,csv,tsv".split(","),
  doc: "doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),
  zip: "zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),
  exe: "exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),
  att: "bin,oct,dat".split(",")
  //attachment
}, Jl = Object.keys(kn), vt = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, gs = {
  img: vt("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: vt("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: vt("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: vt("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: vt("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: vt("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: vt("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: vt("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: vt("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, _a = /[\r\n%#()<>?[\\\]^`{|}]/g, Xl = 1024, $a = ["Bytes", "KB", "MB", "GB", "TB"], Ca = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", s = "image/", n = "text/", a = "audio/", r = "video/", u = {
    jpg: s + "jpeg",
    tif: s + "tiff",
    svg: s + "svg+xml",
    ico: s + "x-icon",
    ts: n + "typescript",
    py: n + "x-python",
    sh: n + "x-sh",
    mp3: a + "mpeg3",
    mpg: r + "mpeg",
    ogv: r + "ogg",
    xlsx: t + "spreadsheetml.sheet",
    xltx: t + "spreadsheetml.template",
    docx: t + "wordprocessingml.document",
    dotx: t + "wordprocessingml.template",
    pptx: t + "presentationml.presentation",
    potx: t + "presentationml.template",
    ppsx: t + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function d(f, p) {
    f.split(",").forEach(($) => u[$] = p);
  }
  function c(f, p) {
    f.split(",").forEach(($) => u[$] = p($));
  }
  return c("jpeg,gif,png,tiff,bmp,webp", (f) => s + f), c("jsx,csv,css", (f) => n + f), c("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (f) => a + f), c("3gpp,avi,dv,divx,ogg,mp4,webm", (f) => r + f), c("rtf,pdf", (f) => e + f), d("htm,html,shtm", n + "html"), d("js,mjs,cjs", n + "javascript"), d("yml,yaml", e + "yaml"), d("bat,cmd", e + "bat"), d("xml,csproj,fsproj,vbproj", n + "xml"), d("txt,ps1", n + "plain"), d("qt,mov", r + "quicktime"), d("doc,dot", e + "msword"), d("xls,xlt,xla", e + "excel"), d("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), d("cer,crt,der", e + "x-x509-ca-cert"), d("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), d("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), u;
})();
let Xs = [];
function _n(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(_a, encodeURIComponent);
}
function fl(e) {
  return "data:image/svg+xml;utf8," + _n(e);
}
function $n(e) {
  let t = URL.createObjectURL(e);
  return Xs.push(t), t;
}
function Cn() {
  Xs.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), Xs = [];
}
function vl(e) {
  if (!e)
    return null;
  let t = Ls(e, "?");
  return At(t, "/");
}
function ls(e) {
  let t = vl(e);
  return t == null || t.indexOf(".") === -1 ? null : At(t, ".").toLowerCase();
}
function pl(e) {
  let t = ls(e.name);
  return t && wn.indexOf(t) >= 0 ? $n(e) : xt(e.name);
}
function ml(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = ls(e);
  return t && wn.indexOf(t) >= 0 || !1;
}
function xt(e) {
  if (!e)
    return null;
  let t = ls(e);
  return t == null || ml(e) ? e : Jt(t) || fl(gs.doc);
}
function Jt(e) {
  let t = xn(e);
  return t && fl(t) || null;
}
function xn(e) {
  if (gs[e])
    return gs[e];
  for (let t = 0; t < Jl.length; t++) {
    let s = Jl[t];
    if (kn[s].indexOf(e) >= 0)
      return gs[s];
  }
  return null;
}
function hl(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const s = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(Xl));
  return parseFloat((e / Math.pow(Xl, n)).toFixed(s)) + " " + $a[n];
}
function xa(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: pl(t) }));
}
function Ts(e, t) {
  e.onerror = null, e.src = gl(e.src, t) || "";
}
function gl(e, t) {
  return Jt(At(e, ".").toLowerCase()) || (t ? Jt(t) || t : null) || Jt("doc");
}
function Ys(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = At(e, ".").toLowerCase();
  return Ca[t] || "application/" + t;
}
function La() {
  return {
    extSvg: xn,
    extSrc: Jt,
    getExt: ls,
    encodeSvg: _n,
    canPreview: ml,
    getFileName: vl,
    getMimeType: Ys,
    formatBytes: hl,
    filePathUri: xt,
    svgToDataUri: fl,
    fileImageUri: pl,
    objectUrl: $n,
    flush: Cn,
    inputFiles: xa,
    iconOnError: Ts,
    iconFallbackSrc: gl
  };
}
class Va {
  constructor(t) {
    Le(this, "view");
    Le(this, "includeTypes");
    Object.assign(this, t);
  }
  getTypeName() {
    return "MetadataApp";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return {};
  }
}
const zt = "/metadata/app.json", Sa = {
  Boolean: "checkbox",
  DateTime: "date",
  DateOnly: "date",
  DateTimeOffset: "date",
  TimeSpan: "time",
  TimeOnly: "time",
  Byte: "number",
  Short: "number",
  Int64: "number",
  Int32: "number",
  UInt16: "number",
  UInt32: "number",
  UInt64: "number",
  Single: "number",
  Double: "number",
  Decimal: "number",
  String: "text",
  Guid: "text",
  Uri: "text"
}, Ma = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, el = {
  Byte: "byte",
  Int16: "short",
  Int32: "int",
  Int64: "long",
  UInt16: "ushort",
  Unt32: "uint",
  UInt64: "ulong",
  Single: "float",
  Double: "double",
  Decimal: "decimal"
};
[...Object.keys(el), ...Object.values(el)];
const Aa = {
  String: "string",
  Boolean: "bool",
  ...el
};
function fs(e) {
  return Aa[e] || e;
}
function Ln(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? fs(t[0]) + "?" : e.endsWith("[]") ? `List<${fs(e.substring(0, e.length - 2))}>` : t.length === 0 ? fs(e) : Ls(fs(e), "`") + "<" + t.join(",") + ">") : "";
}
function Ta(e) {
  return e && Ln(e.name, e.genericArgs);
}
class Nt {
  constructor() {
    Le(this, "Query");
    Le(this, "QueryInto");
    Le(this, "Create");
    Le(this, "Update");
    Le(this, "Patch");
    Le(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  get dataModel() {
    var t;
    return (t = this.AnyQuery) == null ? void 0 : t.dataModel;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((s) => !!s).map((s) => s);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    qe.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : qe.isQuery(t) && !this.Query ? this.Query = t : qe.isCreate(t) && !this.Create ? this.Create = t : qe.isUpdate(t) && !this.Update ? this.Update = t : qe.isPatch(t) && !this.Patch ? this.Patch = t : qe.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const s = new Nt();
    return t.forEach((n) => {
      s.add(n);
    }), s;
  }
  static forType(t, s) {
    var a;
    let n = new Nt();
    if (G.config.apisResolver && t) {
      const r = G.config.apisResolver(t, s);
      r && (n.Query = r.Query, n.QueryInto = r.QueryInto, n.Create = r.Create, n.Update = r.Update, n.Patch = r.Patch, n.Delete = r.Delete);
    }
    return t && (s ?? (s = (a = G.metadata.value) == null ? void 0 : a.api), s == null || s.operations.forEach((r) => {
      var u;
      ((u = r.dataModel) == null ? void 0 : u.name) == t && n.add(r);
    })), n;
  }
}
const qe = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => Ze(e.request.inherits, (t) => qe.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => Ze(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => Ze(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => {
    var t;
    return (t = e.request.implements) == null ? void 0 : t.some((s) => qe.AnyWrite.indexOf(s.name) >= 0);
  },
  isCreate: (e) => vs(e, qe.Create),
  isUpdate: (e) => vs(e, qe.Update),
  isPatch: (e) => vs(e, qe.Patch),
  isDelete: (e) => vs(e, qe.Delete),
  model: (e) => {
    var t, s, n;
    return e ? Ze(e.inherits, (a) => qe.AnyRead.indexOf(a.name) >= 0) ? (t = e.inherits) == null ? void 0 : t.genericArgs[0] : (n = (s = e.implements) == null ? void 0 : s.find((a) => qe.AnyWrite.indexOf(a.name) >= 0)) == null ? void 0 : n.genericArgs[0] : null;
  }
};
function Fa(e) {
  var t;
  return ((t = e.input) == null ? void 0 : t.type) || Fs(yl(e));
}
function Vn(e) {
  return e.endsWith("?") ? Mo(e, 1) : e;
}
function Fs(e) {
  return Sa[Vn(e)];
}
function Ia(e) {
  return e && Ma[e] || "String";
}
function yl(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function tl(e) {
  return e && Fs(e) == "number" || !1;
}
function Sn(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function ja(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function Mn(e) {
  if (!(e != null && e.type))
    return !1;
  const t = yl(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : Fs(e.type) == null;
}
function An(e) {
  var s, n, a, r;
  if (!(e != null && e.type))
    return !1;
  const t = yl(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum || ((s = e.input) == null ? void 0 : s.type) == "hidden" || ((n = e.input) == null ? void 0 : n.type) == "file" || ((a = e.input) == null ? void 0 : a.type) == "tag" || ((r = e.input) == null ? void 0 : r.type) == "combobox" ? !0 : Fs(e.type) != null;
}
function Yt(e, t) {
  let s = typeof e == "string" ? Is(e) : e;
  s || (console.warn(`Metadata not found for: ${e}`), s = { request: { name: e } });
  let n = (
    /** @class */
    function() {
      return function(r) {
        Object.assign(this, r);
      };
    }()
  ), a = (
    /** @class */
    function() {
      function r(u) {
        Object.assign(this, u);
      }
      return r.prototype.createResponse = function() {
        return s.returnsVoid ? void 0 : new n();
      }, r.prototype.getTypeName = function() {
        return s.request.name;
      }, r.prototype.getMethod = function() {
        return s.method || "POST";
      }, r;
    }()
  );
  return new a(t);
}
function Oa(e, t, s = {}) {
  let n = (
    /** @class */
    function() {
      return function(r) {
        Object.assign(this, r);
      };
    }()
  ), a = (
    /** @class */
    function() {
      function r(u) {
        Object.assign(this, u);
      }
      return r.prototype.createResponse = function() {
        return typeof s.createResponse == "function" ? s.createResponse() : new n();
      }, r.prototype.getTypeName = function() {
        return e;
      }, r.prototype.getMethod = function() {
        return s.method || "POST";
      }, r;
    }()
  );
  return new a(t);
}
function ys(e, t) {
  return e ? (Object.keys(e).forEach((s) => {
    let n = e[s];
    typeof n == "string" ? n.startsWith("/Date") && (e[s] = Ss(pt(n))) : n != null && typeof n == "object" && (Array.isArray(n) ? e[s] = Array.from(n) : e[s] = Object.assign({}, n));
  }), e) : {};
}
function Da(e, t) {
  let s = {};
  return Array.from(e.elements).forEach((n) => {
    var p;
    let a = n;
    if (!a.id || a.value == null || a.value === "")
      return;
    const r = a.id.toLowerCase(), u = t && t.find(($) => $.name.toLowerCase() == r);
    let d = u == null ? void 0 : u.type, c = (p = u == null ? void 0 : u.genericArgs) == null ? void 0 : p[0], f = a.type === "checkbox" ? a.checked : a.value;
    tl(d) ? f = Number(f) : d === "List`1" && typeof f == "string" && (f = f.split(",").map(($) => tl(c) ? Number($) : $)), s[a.id] = f;
  }), s;
}
function bl(e) {
  var t;
  return ((t = e == null ? void 0 : e.api) == null ? void 0 : t.operations) && e.api.operations.length > 0;
}
function Pa(e) {
  if (!wl() && (e != null && e.assert) && !G.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return G.metadata.value;
}
function es(e) {
  return e && bl(e) ? (e.date = Vo(/* @__PURE__ */ new Date()), G.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(zt, JSON.stringify(e)), !0) : !1;
}
function Ba() {
  G.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(zt);
}
function wl() {
  if (G.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (bl(e))
    es(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(zt) : null;
    if (t)
      try {
        es(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${zt} from localStorage`);
      }
  }
  return G.metadata.value != null;
}
async function Yl(e, t) {
  let s = t ? await t() : await fetch(e);
  if (s.ok) {
    let n = await s.text();
    es(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${s.statusText}`);
  bl(G.metadata.value) || console.warn("AppMetadata is not available");
}
async function Ha(e) {
  var r;
  const { olderThan: t, resolvePath: s, resolve: n } = e || {};
  let a = wl() && t !== 0;
  if (a && t) {
    let u = pt((r = G.metadata.value) == null ? void 0 : r.date);
    (!u || (/* @__PURE__ */ new Date()).getTime() - u.getTime() > t) && (a = !1);
  }
  if (!a) {
    if ((s || n) && (await Yl(s || zt, n), G.metadata.value != null))
      return;
    const u = Qe("client");
    if (u != null) {
      const d = await u.api(new Va());
      d.succeeded && es(d.response);
    }
    if (G.metadata.value != null)
      return;
    await Yl(zt);
  }
  return G.metadata.value;
}
function rt(e, t) {
  var u;
  if (G.config.typeResolver) {
    let d = G.config.typeResolver(e, t);
    if (d)
      return d;
  }
  let s = (u = G.metadata.value) == null ? void 0 : u.api;
  if (!s || !e)
    return null;
  let n = s.types.find((d) => d.name.toLowerCase() === e.toLowerCase() && (!t || d.namespace == t));
  if (n)
    return n;
  let a = Is(e);
  if (a)
    return a.request;
  let r = s.operations.find((d) => d.response && d.response.name.toLowerCase() === e.toLowerCase() && (!t || d.response.namespace == t));
  return r ? r.response : null;
}
function Is(e) {
  var n;
  if (G.config.apiResolver) {
    const a = G.config.apiResolver(e);
    if (a)
      return a;
  }
  let t = (n = G.metadata.value) == null ? void 0 : n.api;
  return t ? t.operations.find((a) => a.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function Ra({ dataModel: e }) {
  var n;
  const t = (n = G.metadata.value) == null ? void 0 : n.api;
  if (!t)
    return [];
  let s = t.operations;
  if (e) {
    const a = typeof e == "string" ? rt(e) : e;
    s = s.filter((r) => Tn(r.dataModel, a));
  }
  return s;
}
function kl(e) {
  return e ? rt(e.name, e.namespace) : null;
}
function Tn(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function Ea(e, t) {
  let s = rt(e);
  return s && s.properties && s.properties.find((a) => a.name.toLowerCase() === t.toLowerCase());
}
function Fn(e) {
  return In(rt(e));
}
function In(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let t = {};
    for (let s = 0; s < e.enumNames.length; s++) {
      const n = (e.enumDescriptions ? e.enumDescriptions[s] : null) || e.enumNames[s], a = (e.enumValues != null ? e.enumValues[s] : null) || e.enumNames[s];
      t[a] = n;
    }
    return t;
  }
  return null;
}
function jn(e) {
  if (!e)
    return null;
  let t = {}, s = e.input && e.input.allowableEntries;
  if (s) {
    for (let a = 0; a < s.length; a++) {
      let r = s[a];
      t[r.key] = r.value;
    }
    return t;
  }
  let n = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (n) {
    for (let a = 0; a < n.length; a++) {
      let r = n[a];
      t[r] = r;
    }
    return t;
  }
  if (e.isEnum) {
    const a = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = rt(a);
    if (r)
      return In(r);
  }
  return null;
}
function _l(e) {
  if (!e)
    return;
  const t = [];
  return Object.keys(e).forEach((s) => t.push({ key: s, value: e[s] })), t;
}
function za(e, t) {
  const n = ((a, r) => Object.assign({
    id: a,
    name: a,
    type: r
  }, t))(e.name, (t == null ? void 0 : t.type) || Fa(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = _l(jn(e))), n;
}
function Na(e) {
  let t = [];
  if (e) {
    const s = st(e), n = Is(e.name), a = kl(n == null ? void 0 : n.dataModel);
    s.forEach((r) => {
      var d, c, f;
      if (!An(r))
        return;
      const u = za(r, r.input);
      if (u.id = So(u.id), u.type == "file" && r.uploadTo && !u.accept) {
        const p = (c = (d = G.metadata.value) == null ? void 0 : d.plugins.filesUpload) == null ? void 0 : c.locations.find(($) => $.name == r.uploadTo);
        p && !u.accept && p.allowExtensions && (u.accept = p.allowExtensions.map(($) => $.startsWith(".") ? $ : `.${$}`).join(","));
      }
      if (a) {
        const p = (f = a.properties) == null ? void 0 : f.find(($) => $.name == r.name);
        r.ref || (r.ref = p == null ? void 0 : p.ref);
      }
      if (u.options)
        try {
          const p = {
            input: u,
            $typeFields: s.map((m) => m.name),
            $dataModelFields: a ? st(a).map((m) => m.name) : [],
            ...G.config.scopeWhitelist
          }, $ = dl(u.options, p);
          Object.keys($).forEach((m) => {
            u[m] = $[m];
          });
        } catch {
          console.error(`failed to evaluate '${u.options}'`);
        }
      t.push(u);
    });
  }
  return t;
}
function $l(e, t) {
  var a, r;
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const s = rt(t.type);
  if (!(s != null && s.enumValues))
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let u = 0; u < s.enumValues.length; u++) {
    const d = parseInt(s.enumValues[u]);
    d > 0 && (d & e) === d && n.push(((a = s.enumDescriptions) == null ? void 0 : a[u]) || ((r = s.enumNames) == null ? void 0 : r[u]) || `${e}`);
  }
  return n;
}
function On(e) {
  return (t) => typeof t == "number" ? $l(t, { type: e }) : t;
}
function st(e) {
  if (!e)
    return [];
  let t = [], s = {};
  function n(a) {
    a.forEach((r) => {
      s[r.name] || (s[r.name] = 1, t.push(r));
    });
  }
  for (; e; )
    e.properties && n(e.properties), e = e.inherits ? kl(e.inherits) : null;
  return t.map((a) => a.type.endsWith("[]") ? { ...a, type: "List`1", genericArgs: [a.type.substring(0, a.type.length - 2)] } : a);
}
function vs(e, t) {
  var s;
  return ((s = e.request.implements) == null ? void 0 : s.some((n) => n.name === t)) || !1;
}
function ns(e) {
  return e ? Dn(e, st(e)) : null;
}
function Dn(e, t) {
  let s = t.find((r) => r.name.toLowerCase() === "id");
  if (s && s.isPrimaryKey)
    return s;
  let a = t.find((r) => r.isPrimaryKey) || s;
  if (!a) {
    let r = qe.model(e);
    if (r)
      return Ze(rt(r), (u) => ns(u));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return a || null;
}
function Ua(e, t) {
  return Ze(ns(e), (s) => _e(t, s.name));
}
function Pn(e, t, s) {
  return e && e.valueType === "none" ? "" : s.key === "%In" || s.key === "%Between" ? `(${s.value})` : qa(t, s.value);
}
function qa(e, t) {
  return e ? (e = Vn(e), tl(e) || e === "Boolean" ? t : ja(e) ? `[${t}]` : `'${t}'`) : t;
}
function gt(e, t) {
  return { name: e, value: t };
}
const Qa = [
  gt("=", "%"),
  gt("!=", "%!"),
  gt(">=", ">%"),
  gt(">", "%>"),
  gt("<=", "%<"),
  gt("<", "<%"),
  gt("In", "%In"),
  gt("Between", "%Between"),
  { name: "Starts With", value: "%StartsWith", types: "string" },
  { name: "Contains", value: "%Contains", types: "string" },
  { name: "Ends With", value: "%EndsWith", types: "string" },
  { name: "Exists", value: "%IsNotNull", valueType: "none" },
  { name: "Not Exists", value: "%IsNull", valueType: "none" }
];
function lt() {
  const e = v(() => {
    var n;
    return ((n = G.metadata.value) == null ? void 0 : n.app) || null;
  }), t = v(() => {
    var n;
    return ((n = G.metadata.value) == null ? void 0 : n.api) || null;
  }), s = v(() => {
    var n, a, r;
    return ((r = (a = (n = G.metadata.value) == null ? void 0 : n.plugins) == null ? void 0 : a.autoQuery) == null ? void 0 : r.viewerConventions) || Qa;
  });
  return wl(), {
    loadMetadata: Ha,
    getMetadata: Pa,
    setMetadata: es,
    clearMetadata: Ba,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: s,
    typeOf: rt,
    typeOfRef: kl,
    typeEquals: Tn,
    apiOf: Is,
    findApis: Ra,
    typeName: Ta,
    typeName2: Ln,
    property: Ea,
    enumOptions: Fn,
    propertyOptions: jn,
    createFormLayout: Na,
    typeProperties: st,
    supportsProp: An,
    Crud: qe,
    Apis: Nt,
    getPrimaryKey: ns,
    getPrimaryKeyByProps: Dn,
    getId: Ua,
    createDto: Yt,
    makeDto: Oa,
    toFormValues: ys,
    formValues: Da,
    isComplexProp: Mn,
    asKvps: _l,
    expandEnumFlags: $l,
    enumFlagsConverter: On
  };
}
const et = class et {
  static async getOrFetchValue(t, s, n, a, r, u, d) {
    const c = et.getValue(n, d, r);
    return c ?? (await et.fetchLookupIds(t, s, n, a, r, u, [d]), et.getValue(n, d, r));
  }
  static getValue(t, s, n) {
    const a = et.Lookup[t];
    if (a) {
      const r = a[s];
      if (r)
        return n = n.toLowerCase(), r[n];
    }
  }
  static setValue(t, s, n, a) {
    const r = et.Lookup[t] ?? (et.Lookup[t] = {}), u = r[s] ?? (r[s] = {});
    n = n.toLowerCase(), u[n] = a;
  }
  static setRefValue(t, s) {
    const n = _e(s, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const a = _e(s, t.refLabel);
    return et.setValue(t.model, n, t.refLabel, a), a;
  }
  static async fetchLookupIds(t, s, n, a, r, u, d) {
    const c = s.operations.find((f) => {
      var p;
      return qe.isAnyQuery(f) && ((p = f.dataModel) == null ? void 0 : p.name) == n;
    });
    if (c) {
      const f = et.Lookup[n] ?? (et.Lookup[n] = {}), p = [];
      Object.keys(f).forEach((P) => {
        const I = f[P];
        _e(I, r) && p.push(P);
      });
      const $ = d.filter((P) => !p.includes(P));
      if ($.length == 0)
        return;
      const m = u ? null : `${a},${r}`, k = {
        [a + "In"]: $.join(",")
      };
      m && (k.fields = m);
      const g = Yt(c, k), b = await t.api(g, { jsconfig: "edv,eccn" });
      if (b.succeeded)
        (_e(b.response, "results") || []).forEach((I) => {
          if (!_e(I, a)) {
            console.error(`result[${a}] == null`, I);
            return;
          }
          const se = `${_e(I, a)}`, j = _e(I, r);
          r = r.toLowerCase();
          const T = f[se] ?? (f[se] = {});
          T[r] = `${j}`;
        });
      else {
        console.error(`Failed to call ${c.request.name}`);
        return;
      }
    }
  }
};
Le(et, "Lookup", {});
let Pt = et, sl = () => (/* @__PURE__ */ new Date()).getTime(), Ka = ["/", "T", ":", "-"], ct = {
  //locale: null,
  assumeUtc: !0,
  //number: null,
  date: {
    method: "Intl.DateTimeFormat",
    options: "{dateStyle:'medium'}"
  },
  maxFieldLength: 150,
  maxNestedFields: 2,
  maxNestedFieldLength: 30
}, Za = new Intl.RelativeTimeFormat(ct.locale, {}), en = 24 * 60 * 60 * 1e3 * 365, qs = {
  year: en,
  month: en / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, Lt = {
  currency: Hn,
  bytes: Rn,
  link: En,
  linkTel: zn,
  linkMailTo: Nn,
  icon: Un,
  iconRounded: qn,
  attachment: Qn,
  hidden: Kn,
  time: Zn,
  relativeTime: xl,
  relativeTimeFromMs: js,
  enumFlags: Gn,
  formatDate: Qt,
  formatNumber: Cl
};
"iconOnError" in globalThis || (globalThis.iconOnError = Ts);
class Ke {
}
Le(Ke, "currency", { method: "currency" }), Le(Ke, "bytes", { method: "bytes" }), Le(Ke, "link", { method: "link" }), Le(Ke, "linkTel", { method: "linkTel" }), Le(Ke, "linkMailTo", { method: "linkMailTo" }), Le(Ke, "icon", { method: "icon" }), Le(Ke, "iconRounded", { method: "iconRounded" }), Le(Ke, "attachment", { method: "attachment" }), Le(Ke, "time", { method: "time" }), Le(Ke, "relativeTime", { method: "relativeTime" }), Le(Ke, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), Le(Ke, "date", { method: "formatDate" }), Le(Ke, "number", { method: "formatNumber" }), Le(Ke, "hidden", { method: "hidden" }), Le(Ke, "enumFlags", { method: "enumFlags" });
function Wa(e) {
  ct = Object.assign({}, ct, e);
}
function Ga(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (Lt[t] = e[t]);
  });
}
function Bn() {
  return Lt;
}
function os(e, t) {
  return t ? dt("span", e, t) : e;
}
function Hn(e, t) {
  const s = ft(t, ["currency"]);
  return os(new Intl.NumberFormat(void 0, { style: "currency", currency: (t == null ? void 0 : t.currency) || "USD" }).format(e), s);
}
function Rn(e, t) {
  return os(hl(e), t);
}
function En(e, t) {
  return dt("a", e, Ms({ ...t, href: e }));
}
function zn(e, t) {
  return dt("a", e, Ms({ ...t, href: `tel:${e}` }));
}
function Nn(e, t) {
  t || (t = {});
  let { subject: s, body: n } = t, a = ft(t, ["subject", "body"]), r = {};
  return s && (r.subject = s), n && (r.body = n), dt("a", e, Ms({ ...a, href: `mailto:${Et(e, r)}` }));
}
function Un(e, t) {
  return dt("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Ht(e), onerror: "iconOnError(this)" }, t));
}
function qn(e, t) {
  return dt("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Ht(e), onerror: "iconOnError(this)" }, t));
}
function Qn(e, t) {
  let s = vl(e), a = ls(s) == null || ml(e) ? Ht(e) : gl(e);
  const r = Ht(a);
  let u = t && (t["icon-class"] || t.iconClass), d = dt("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, u ? { class: u } : null)), c = `<span class="pl-1">${s}</span>`;
  return dt("a", d + c, Object.assign({ class: "flex", href: Ht(e), title: e }, t ? ft(t, ["icon-class", "iconClass"]) : null));
}
function Kn(e) {
  return "";
}
function Zn(e, t) {
  let s = typeof e == "string" ? new Date(un(e) * 1e3) : Vs(e) ? pt(e) : null;
  return os(s ? Ao(s) : e, t);
}
function Qt(e, t) {
  if (e == null)
    return "";
  let s = typeof e == "number" ? new Date(e) : typeof e == "string" ? pt(e) : e;
  if (!Vs(s))
    return console.warn(`${s} is not a Date value`), e == null ? "" : `${e}`;
  let n = ct.date ? Os(ct.date) : null;
  return os(typeof n == "function" ? n(s) : To(s), t);
}
function Cl(e, t) {
  if (typeof e != "number")
    return e;
  let s = ct.number ? Os(ct.number) : null, n = typeof s == "function" ? s(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, s), n = `${e}`), os(n, t);
}
function Wn(e, t, s) {
  let n = Fo(e), a = t ? Os(t) : null;
  if (typeof a == "function") {
    let u = s;
    if (t != null && t.options)
      try {
        u = dl(t.options, s);
      } catch (d) {
        console.error(`Could not evaluate '${t.options}'`, d, ", with scope:", s);
      }
    return a(e, u);
  }
  let r = n != null ? Vs(n) ? Qt(n, s) : typeof n == "number" ? Cl(n, s) : n : null;
  return r ?? "";
}
function ts(e, t, s) {
  return Tt(e) ? Wn(e, t, s) : tr(e, t, s);
}
function Ja(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (Vs(e))
    return e.getTime() - sl();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return un(e) * 1e3 * -1;
    if (Io(e, Ka) >= 0)
      return pt(e).getTime() - sl();
  }
  return NaN;
}
function js(e, t) {
  for (let s in qs)
    if (Math.abs(e) > qs[s] || s === "second")
      return (t || Za).format(Math.round(e / qs[s]), s);
}
function xl(e, t) {
  let s = Ja(e);
  return isNaN(s) ? "" : js(s, t);
}
function Xa(e, t) {
  return js(e.getTime() - (t ? t.getTime() : sl()));
}
function Gn(e, t) {
  return $l(e, t).join(", ");
}
function Os(e) {
  if (!e)
    return null;
  let { method: t, options: s } = e, n = `${t}(${s})`, a = Lt[n] || Lt[t];
  if (typeof a == "function")
    return a;
  let r = e.locale || ct.locale;
  if (t.startsWith("Intl.")) {
    let u = r ? `'${r}'` : "undefined", d = `return new ${t}(${u},${s || "undefined"})`;
    try {
      let c = Function(d)();
      return a = t === "Intl.DateTimeFormat" ? (f) => c.format(pt(f)) : t === "Intl.NumberFormat" ? (f) => c.format(Number(f)) : t === "Intl.RelativeTimeFormat" ? (f) => xl(f, c) : (f) => c.format(f), Lt[n] = a;
    } catch (c) {
      console.error(`Invalid format: ${d}`, c);
    }
  } else {
    let u = globalThis[t];
    if (typeof u == "function") {
      let d = s != null ? Function("return " + s)() : void 0;
      return a = (c) => u(c, d, r), Lt[n] = a;
    }
    console.error(`No '${t}' function exists`, Object.keys(Lt));
  }
  return null;
}
function Jn(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Xn(e) {
  return e.substring(0, 6) === "/Date(" ? Qt(pt(e)) : e;
}
function Ya(e) {
  return Ll(Ut(e)).replace(/"/g, "");
}
function Yn(e) {
  if (e == null || e === "")
    return "";
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      console.warn("couldn't parse as JSON", e);
    }
  return e;
}
function Ll(e, t = 4) {
  return e = Yn(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function er(e) {
  return e = Yn(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = Ut(e), Ll(e));
}
function Ut(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return Xn(e);
  if (Tt(e))
    return e;
  if (e instanceof Date)
    return Qt(e);
  if (Array.isArray(e))
    return e.map(Ut);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((s) => {
      s != "__type" && (t[s] = Ut(e[s]));
    }), t;
  }
  return e;
}
function tr(e, t, s) {
  let n = e;
  if (Array.isArray(e)) {
    if (Tt(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null)
    return "";
  if (n instanceof Date)
    return Qt(n, s);
  let a = Object.keys(n), r = [];
  for (let u = 0; u < Math.min(ct.maxNestedFields, a.length); u++) {
    let d = a[u], c = `${Ut(n[d])}`;
    r.push(`<b class="font-medium">${d}</b>: ${Ks(Jn(Xn(c), ct.maxNestedFieldLength))}`);
  }
  return a.length > 2 && r.push("..."), dt("span", "{ " + r.join(", ") + " }", Object.assign({ title: Ks(Ya(e)) }, s));
}
function ch() {
  return {
    Formats: Ke,
    setDefaultFormats: Wa,
    getFormatters: Bn,
    setFormatters: Ga,
    formatValue: ts,
    formatter: Os,
    dateInputFormat: Ss,
    currency: Hn,
    bytes: Rn,
    link: En,
    linkTel: zn,
    linkMailTo: Nn,
    icon: Un,
    iconRounded: qn,
    attachment: Qn,
    hidden: Kn,
    time: Zn,
    relativeTime: xl,
    relativeTimeFromDate: Xa,
    relativeTimeFromMs: js,
    enumFlags: Gn,
    formatDate: Qt,
    formatNumber: Cl,
    indentJson: Ll,
    prettyJson: er,
    scrub: Ut,
    truncate: Jn,
    apiValueFmt: Wn,
    iconOnError: Ts
  };
}
const sr = ["title"], lr = /* @__PURE__ */ de({
  __name: "RouterLink",
  props: {
    to: {}
  },
  setup(e) {
    const t = e, { config: s } = It(), n = () => s.value.navigate(t.to ?? "/");
    return (a, r) => (o(), i("a", Te({
      onClick: Ue(n, ["prevent"]),
      title: a.to,
      href: "javascript:void(0)"
    }, a.$attrs), [
      U(a.$slots, "default")
    ], 16, sr));
  }
});
class nr {
  constructor() {
    Le(this, "callbacks", {});
  }
  register(t, s) {
    this.callbacks[t] = s;
  }
  has(t) {
    return !!this.callbacks[t];
  }
  invoke(t, s) {
    const n = this.callbacks[t];
    typeof n == "function" && n(t, s);
  }
}
const tt = class tt {
  static component(t) {
    const s = tt.components[t];
    if (s)
      return s;
    const n = Wl(t), a = Object.keys(tt.components).find((r) => Wl(r) === n);
    return a && tt.components[a] || null;
  }
};
Le(tt, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (t) => location.href = t,
  assetsPathResolver: (t) => t,
  fallbackPathResolver: (t) => t,
  storage: new hn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
  scopeWhitelist: {
    enumFlagsConverter: On,
    ...Bn()
  }
}), Le(tt, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), Le(tt, "events", jo()), Le(tt, "user", O(null)), Le(tt, "metadata", O(null)), Le(tt, "components", {
  RouterLink: lr
}), Le(tt, "interceptors", new nr());
let G = tt;
function or(e) {
  G.config = Object.assign(G.config, e);
}
function ar(e) {
  G.autoQueryGridDefaults = Object.assign(G.autoQueryGridDefaults, e);
}
function Vl(e) {
  return e && G.config.assetsPathResolver ? G.config.assetsPathResolver(e) : e;
}
function rr(e) {
  return e && G.config.fallbackPathResolver ? G.config.fallbackPathResolver(e) : e;
}
function ir(e, t) {
  G.interceptors.register(e, t);
}
function It() {
  const e = v(() => G.config), t = v(() => G.autoQueryGridDefaults), s = G.events;
  return {
    config: e,
    setConfig: or,
    events: s,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: ar,
    assetsPathResolver: Vl,
    fallbackPathResolver: rr,
    registerInterceptor: ir
  };
}
const eo = de({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: t }) {
    return () => {
      let s = e.image;
      if (e.type) {
        const { typeOf: r } = lt(), u = r(e.type);
        u || console.warn(`Type ${e.type} does not exist`), u != null && u.icon ? s = u == null ? void 0 : u.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || (s == null ? void 0 : s.svg) || "";
      if (n.startsWith("<svg ")) {
        let u = Ls(n, ">").indexOf("class="), d = `${(s == null ? void 0 : s.cls) || ""} ${t.class || ""}`;
        if (u == -1)
          n = `<svg class="${d}" ${n.substring(4)}`;
        else {
          const c = u + 6 + 1;
          n = `${n.substring(0, c) + d} ${n.substring(c)}`;
        }
        return $t("span", { innerHTML: n });
      } else
        return $t("img", {
          class: [s == null ? void 0 : s.cls, t.class],
          src: Vl(e.src || (s == null ? void 0 : s.uri)),
          onError: (r) => Ts(r.target)
        });
    };
  }
}), ur = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, dr = { class: "flex" }, cr = /* @__PURE__ */ l("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), fr = /* @__PURE__ */ l("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), vr = [
  cr,
  fr
], pr = /* @__PURE__ */ de({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, s) => (o(), i("div", ur, [
      l("div", dr, [
        (o(), i("svg", {
          class: y(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", t.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, vr, 2)),
        l("span", null, [
          U(t.$slots, "default")
        ])
      ])
    ]));
  }
}), mr = ["href", "onClick"], hr = ["type"], tn = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black", gr = /* @__PURE__ */ de({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: {}
  },
  setup(e) {
    return (t, s) => {
      const n = Z("router-link");
      return t.href ? (o(), ae(n, {
        key: 0,
        to: t.href
      }, {
        default: xe(({ navigate: a }) => [
          l("button", {
            class: y(tn),
            href: t.href,
            onClick: a
          }, [
            U(t.$slots, "default")
          ], 8, mr)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), i("button", Te({
        key: 1,
        type: t.type,
        class: tn
      }, t.$attrs), [
        U(t.$slots, "default")
      ], 16, hr));
    };
  }
}), yr = ["href", "onClick"], br = ["type"], wr = /* @__PURE__ */ de({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: {},
    color: { default: "indigo" }
  },
  setup(e) {
    const t = e, s = {
      blue: "focus:ring-indigo-500 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "focus:ring-indigo-500 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-500 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-500 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-500 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, n = v(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black text-white " + (s[t.color] || s.indigo));
    return (a, r) => {
      const u = Z("router-link");
      return a.href ? (o(), ae(u, {
        key: 0,
        to: a.href
      }, {
        default: xe(({ navigate: d }) => [
          l("button", {
            class: y(n.value),
            href: a.href,
            onClick: d
          }, [
            U(a.$slots, "default")
          ], 10, yr)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), i("button", Te({
        key: 1,
        type: a.type,
        class: n.value
      }, a.$attrs), [
        U(a.$slots, "default")
      ], 16, br));
    };
  }
}), kr = ["type", "href", "onClick"], _r = ["type"], sn = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black", $r = /* @__PURE__ */ de({
  __name: "SecondaryButton",
  props: {
    type: {},
    href: {}
  },
  setup(e) {
    return (t, s) => {
      const n = Z("router-link");
      return t.href ? (o(), ae(n, {
        key: 0,
        to: t.href
      }, {
        default: xe(({ navigate: a }) => [
          l("button", {
            type: t.type ?? "button",
            class: y(sn),
            href: t.href,
            onClick: a
          }, [
            U(t.$slots, "default")
          ], 8, kr)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), i("button", Te({
        key: 1,
        type: t.type ?? "button",
        class: sn
      }, t.$attrs), [
        U(t.$slots, "default")
      ], 16, _r));
    };
  }
});
function Ge(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const Cs = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, ot = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, Gt = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, Bt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, ll = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ee = {
  panelClass(e = "slideOver") {
    return e == "card" ? Gt.panelClass : Bt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? Gt.formClass : Bt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? Gt.headingClass : Bt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? Gt.subHeadingClass : Bt.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, he = {
  getGridClass(e = "stripedRows") {
    return he.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return Ge(e, "fullWidth") ? "overflow-x-auto" : he.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return Ge(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : he.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return Ge(e, "whiteBackground") ? "" : Ge(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : he.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return Ge(e, "fullWidth") || Ge(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : he.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return Ge(e, "whiteBackground") ? "" : he.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return he.theadRowClass + (Ge(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return he.theadCellClass + (Ge(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (Ge(e, "whiteBackground") || Ge(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : he.tableClass) + (Ge(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", t, s, n) {
    return (n ? "cursor-pointer " : "") + (s ? "bg-indigo-100 dark:bg-blue-800" : (n ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (Ge(e, "stripedRows") ? t % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (Ge(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  gridClass: "flex flex-col",
  //original -margins + padding forces scroll bars when parent is w-full for no clear benefits?
  //original: -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8
  grid2Class: "",
  //original: inline-block min-w-full py-2 align-middle md:px-6 lg:px-8
  grid3Class: "inline-block min-w-full py-2 align-middle",
  grid4Class: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
  tableClass: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
  theadClass: "bg-gray-50 dark:bg-gray-900",
  tableCellClass: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
  theadRowClass: "select-none",
  theadCellClass: "px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",
  toolbarButtonClass: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Cr = {
  colspans: "col-span-3 sm:col-span-3"
}, fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: Cs,
  card: Gt,
  dummy: Cr,
  form: Ee,
  grid: he,
  input: ot,
  modal: ll,
  slideOver: Bt
}, Symbol.toStringTag, { value: "Module" })), xr = /* @__PURE__ */ de({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = yo(), s = e, n = v(() => (Cs[s.color] || Cs.blue) + (t.href ? "" : " cursor-pointer"));
    return (a, r) => (o(), i("a", {
      class: y(n.value)
    }, [
      U(a.$slots, "default")
    ], 2));
  }
}), Lr = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, Vr = {
  role: "list",
  class: "flex items-center space-x-4"
}, Sr = ["href", "title"], Mr = /* @__PURE__ */ l("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), Ar = { class: "sr-only" }, Tr = /* @__PURE__ */ de({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, s) => (o(), i("nav", Lr, [
      l("ol", Vr, [
        l("li", null, [
          l("div", null, [
            l("a", {
              href: t.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: t.homeLabel
            }, [
              Mr,
              l("span", Ar, F(t.homeLabel), 1)
            ], 8, Sr)
          ])
        ]),
        U(t.$slots, "default")
      ])
    ]));
  }
}), Fr = { class: "flex items-center" }, Ir = /* @__PURE__ */ l("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), jr = ["href", "title"], Or = ["title"], Dr = /* @__PURE__ */ de({
  __name: "Breadcrumb",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, s) => (o(), i("li", null, [
      l("div", Fr, [
        Ir,
        t.href ? (o(), i("a", {
          key: 0,
          href: t.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: t.title
        }, [
          U(t.$slots, "default")
        ], 8, jr)) : (o(), i("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: t.title
        }, [
          U(t.$slots, "default")
        ], 8, Or))
      ])
    ]));
  }
}), Pr = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, Br = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, Hr = /* @__PURE__ */ de({
  __name: "NavList",
  props: {
    title: {}
  },
  setup(e) {
    return (t, s) => (o(), i("div", null, [
      t.title ? (o(), i("h2", Pr, F(t.title), 1)) : x("", !0),
      l("ul", Br, [
        U(t.$slots, "default")
      ])
    ]));
  }
}), Rr = { class: "relative flex items-start space-x-4 py-6" }, Er = { class: "flex-shrink-0" }, zr = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, Nr = { class: "min-w-0 flex-1" }, Ur = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, qr = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, Qr = ["href"], Kr = /* @__PURE__ */ l("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Zr = { class: "text-base text-gray-500" }, Wr = /* @__PURE__ */ l("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ l("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ l("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Gr = /* @__PURE__ */ de({
  __name: "NavListItem",
  props: {
    title: {},
    href: {},
    icon: {},
    iconSvg: {},
    iconSrc: {},
    iconAlt: {}
  },
  setup(e) {
    return (t, s) => {
      const n = Z("Icon");
      return o(), i("li", Rr, [
        l("div", Er, [
          l("span", zr, [
            ye(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: t.icon,
              src: t.iconSrc,
              svg: t.iconSvg,
              alt: t.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        l("div", Nr, [
          l("h3", Ur, [
            l("span", qr, [
              l("a", {
                href: t.href,
                class: "focus:outline-none"
              }, [
                Kr,
                ke(" " + F(t.title), 1)
              ], 8, Qr)
            ])
          ]),
          l("p", Zr, [
            U(t.$slots, "default")
          ])
        ]),
        Wr
      ]);
    };
  }
});
function to(e) {
  return e && e.SessionId ? Oo(e) : e;
}
function Jr(e) {
  G.user.value = to(e), G.events.publish("signIn", e);
}
function Xr() {
  G.user.value = null, G.events.publish("signOut", null);
}
const Sl = (e) => (e == null ? void 0 : e.roles) || [], Ml = (e) => (e == null ? void 0 : e.permissions) || [];
function so(e) {
  return Sl(G.user.value).indexOf(e) >= 0;
}
function Yr(e) {
  return Ml(G.user.value).indexOf(e) >= 0;
}
function Al() {
  return so("Admin");
}
function bs(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const t = G.user.value;
  if (!t)
    return !1;
  if (Al())
    return !0;
  let [s, n] = [Sl(t), Ml(t)], [a, r, u, d] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!a.every((c) => s.indexOf(c) >= 0) || u.length > 0 && !u.some((c) => s.indexOf(c) >= 0) || !r.every((c) => n.indexOf(c) >= 0) || d.length > 0 && !d.every((c) => n.indexOf(c) >= 0));
}
function ei(e) {
  if (!e || !e.requiresAuth)
    return null;
  const t = G.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (Al())
    return null;
  let [s, n] = [Sl(t), Ml(t)], [a, r, u, d] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], c = a.filter((p) => s.indexOf(p) < 0);
  if (c.length > 0)
    return `Requires ${c.map((p) => "<b>" + p + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "");
  let f = r.filter((p) => n.indexOf(p) < 0);
  return f.length > 0 ? `Requires ${f.map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (f.length > 1 ? "s" : "") : u.length > 0 && !u.some((p) => s.indexOf(p) >= 0) ? `Requires any ${u.filter((p) => s.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "") : d.length > 0 && !d.every((p) => n.indexOf(p) >= 0) ? `Requires any ${d.filter((p) => n.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (f.length > 1 ? "s" : "") : null;
}
function Tl() {
  const e = v(() => G.user.value || null), t = v(() => G.user.value != null);
  return { signIn: Jr, signOut: Xr, user: e, toAuth: to, isAuthenticated: t, hasRole: so, hasPermission: Yr, isAdmin: Al, canAccess: bs, invalidAccessMessage: ei };
}
const ti = { key: 0 }, si = { class: "md:p-4" }, lo = /* @__PURE__ */ de({
  __name: "EnsureAccess",
  props: {
    invalidAccess: {},
    alertClass: {}
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = Tl(), { config: s } = It(), n = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const u = Et(s.value.redirectSignIn, { redirect: r });
      s.value.navigate(u);
    }, a = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const u = Et(s.value.redirectSignOut, { ReturnUrl: r });
      s.value.navigate(u);
    };
    return (r, u) => {
      const d = Z("Alert"), c = Z("SecondaryButton");
      return r.invalidAccess ? (o(), i("div", ti, [
        ye(d, {
          class: y(r.alertClass),
          innerHTML: r.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        l("div", si, [
          X(t) ? (o(), ae(c, {
            key: 1,
            onClick: a
          }, {
            default: xe(() => [
              ke("Sign Out")
            ]),
            _: 1
          })) : (o(), ae(c, {
            key: 0,
            onClick: n
          }, {
            default: xe(() => [
              ke("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : x("", !0);
    };
  }
}), li = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, ni = { class: "p-4" }, oi = /* @__PURE__ */ l("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), ai = { class: "flex w-full justify-center" }, ri = /* @__PURE__ */ l("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ l("g", { fill: "currentColor" }, [
    /* @__PURE__ */ l("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ l("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), ii = /* @__PURE__ */ l("span", null, "ASC", -1), ui = [
  ri,
  ii
], di = /* @__PURE__ */ xs('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), ci = [
  di
], fi = /* @__PURE__ */ l("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), vi = { key: 0 }, pi = ["id", "value"], mi = ["for"], hi = { key: 1 }, gi = { class: "mb-2" }, yi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, bi = ["onClick"], wi = /* @__PURE__ */ l("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), ki = [
  wi
], _i = { class: "flex" }, $i = /* @__PURE__ */ l("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), Ci = [
  $i
], xi = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Fl = /* @__PURE__ */ de({
  __name: "FilterColumn",
  props: {
    definitions: {},
    column: {},
    topLeft: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const s = e, n = t, a = O(), r = O(""), u = O(""), d = O([]), c = v(() => s.column.meta.isEnum == !0), f = v(() => rt(s.column.meta.type === "Nullable`1" ? s.column.meta.genericArgs[0] : s.column.meta.type)), p = v(() => s.column.meta.isEnum == !0 ? _l(Fn(f.value.name)) : []), $ = v(() => {
      var L;
      return ((L = g(s.column.type)) == null ? void 0 : L.map((z) => ({ key: z.value, value: z.name }))) || [];
    }), m = O({ filters: [] }), k = v(() => m.value.filters);
    ws(() => m.value = Object.assign({}, s.column.settings, {
      filters: Array.from(s.column.settings.filters)
    })), ws(() => {
      var z, K, le, R, W;
      let L = ((le = (K = (z = s.column.settings.filters) == null ? void 0 : z[0]) == null ? void 0 : K.value) == null ? void 0 : le.split(",")) || [];
      if (L.length > 0 && ((R = f.value) != null && R.isEnumInt)) {
        const ee = parseInt(L[0]);
        L = ((W = f.value.enumValues) == null ? void 0 : W.filter((q) => (ee & parseInt(q)) > 0)) || [];
      }
      d.value = L;
    });
    function g(L) {
      let z = s.definitions;
      return Sn(L) || (z = z.filter((K) => K.types !== "string")), z;
    }
    function b(L, z) {
      return g(L).find((K) => K.value === z);
    }
    function P() {
      var z;
      if (!r.value)
        return;
      let L = (z = b(s.column.type, r.value)) == null ? void 0 : z.name;
      L && (m.value.filters.push({ key: r.value, name: L, value: u.value }), r.value = u.value = "");
    }
    function I(L) {
      m.value.filters.splice(L, 1);
    }
    function se(L) {
      return Pn(b(s.column.type, L.key), s.column.type, L);
    }
    function j() {
      n("done");
    }
    function T() {
      var L;
      r.value = "%", (L = a.value) == null || L.focus();
    }
    function M() {
      var L;
      if (u.value && P(), c.value) {
        let z = Object.values(d.value).filter((K) => K);
        m.value.filters = z.length > 0 ? (L = f.value) != null && L.isEnumInt ? [{ key: "%HasAny", name: "HasAny", value: z.map((K) => parseInt(K)).reduce((K, le) => K + le, 0).toString() }] : [{ key: "%In", name: "In", value: z.join(",") }] : [];
      }
      n("save", m.value), n("done");
    }
    function ie(L) {
      m.value.sort = L === m.value.sort ? void 0 : L, St(M);
    }
    return (L, z) => {
      var ee;
      const K = Z("SelectInput"), le = Z("TextInput"), R = Z("PrimaryButton"), W = Z("SecondaryButton");
      return o(), i("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: j,
        onVnodeMounted: T
      }, [
        l("div", {
          class: "absolute",
          style: nl(`top:${L.topLeft.y}px;left:${L.topLeft.x}px`),
          onClick: z[5] || (z[5] = Ue(() => {
          }, ["stop"]))
        }, [
          l("div", li, [
            l("div", ni, [
              oi,
              l("div", ai, [
                l("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: z[0] || (z[0] = (q) => ie("ASC")),
                  class: y(`${m.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, ui, 2),
                l("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: z[1] || (z[1] = (q) => ie("DESC")),
                  class: y(`${m.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, ci, 2)
              ]),
              fi,
              c.value ? (o(), i("div", vi, [
                (o(!0), i(Me, null, je(p.value, (q) => (o(), i("div", {
                  key: q.key,
                  class: "flex items-center"
                }, [
                  Mt(l("input", {
                    type: "checkbox",
                    id: q.key,
                    value: q.key,
                    "onUpdate:modelValue": z[2] || (z[2] = (A) => d.value = A),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, pi), [
                    [ol, d.value]
                  ]),
                  l("label", {
                    for: q.key,
                    class: "ml-3"
                  }, F(q.value), 9, mi)
                ]))), 128))
              ])) : (o(), i("div", hi, [
                (o(!0), i(Me, null, je(k.value, (q, A) => (o(), i("div", gi, [
                  l("span", yi, [
                    ke(F(L.column.name) + " " + F(q.name) + " " + F(se(q)) + " ", 1),
                    l("button", {
                      type: "button",
                      onClick: (te) => I(A),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, ki, 8, bi)
                  ])
                ]))), 256)),
                l("div", _i, [
                  ye(K, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: r.value,
                    "onUpdate:modelValue": z[3] || (z[3] = (q) => r.value = q),
                    entries: $.value,
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((ee = b(L.column.type, r.value)) == null ? void 0 : ee.valueType) !== "none" ? (o(), ae(le, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: a,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: u.value,
                    "onUpdate:modelValue": z[4] || (z[4] = (q) => u.value = q),
                    onKeyup: on(P, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue"])) : x("", !0),
                  l("div", { class: "pt-1" }, [
                    l("button", {
                      type: "button",
                      onClick: P,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, Ci)
                  ])
                ])
              ]))
            ]),
            l("div", xi, [
              ye(R, {
                onClick: M,
                color: "red",
                class: "ml-2"
              }, {
                default: xe(() => [
                  ke(" Save ")
                ]),
                _: 1
              }),
              ye(W, { onClick: j }, {
                default: xe(() => [
                  ke(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), Li = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, Vi = { class: "flex flex-wrap" }, Si = { class: "group pr-4 sm:pr-6 lg:pr-8" }, Mi = { class: "flex justify-between w-full font-medium" }, Ai = { class: "w-6 flex justify-end" }, Ti = { class: "hidden group-hover:inline" }, Fi = ["onClick", "title"], Ii = /* @__PURE__ */ l("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), ji = [
  Ii
], Oi = {
  key: 0,
  class: "pt-2"
}, Di = { class: "ml-2" }, Pi = { key: 1 }, Bi = { class: "pt-2" }, Hi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Ri = ["onClick"], Ei = /* @__PURE__ */ l("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), zi = [
  Ei
], Ni = /* @__PURE__ */ l("span", null, "Clear All", -1), Ui = [
  Ni
], Il = /* @__PURE__ */ de({
  __name: "FilterViews",
  props: {
    definitions: {},
    columns: {}
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const s = e, n = t, a = v(() => s.columns.filter((m) => m.settings.filters.length > 0));
    function r(m) {
      var k, g;
      return (g = (k = m == null ? void 0 : m[0]) == null ? void 0 : k.value) == null ? void 0 : g.split(",");
    }
    function u(m) {
      let k = s.definitions;
      return Sn(m) || (k = k.filter((g) => g.types !== "string")), k;
    }
    function d(m, k) {
      return u(m).find((g) => g.value === k);
    }
    function c(m, k) {
      return Pn(d(m.type, k.value), m.type, k);
    }
    function f(m) {
      m.settings.filters = [], n("change", m);
    }
    function p(m, k) {
      m.settings.filters.splice(k, 1), n("change", m);
    }
    function $() {
      s.columns.forEach((m) => {
        m.settings.filters = [], n("change", m);
      }), n("done");
    }
    return (m, k) => (o(), i("div", Li, [
      l("div", Vi, [
        (o(!0), i(Me, null, je(a.value, (g) => (o(), i("fieldset", Si, [
          l("legend", Mi, [
            l("span", null, F(X(Pe)(g.name)), 1),
            l("span", Ai, [
              l("span", Ti, [
                l("button", {
                  onClick: (b) => f(g),
                  title: `Clear all ${X(Pe)(g.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, ji, 8, Fi)
              ])
            ])
          ]),
          g.meta.isEnum ? (o(), i("div", Oi, [
            (o(!0), i(Me, null, je(r(g.settings.filters), (b) => (o(), i("div", {
              key: b,
              class: "flex items-center"
            }, [
              l("label", Di, F(b), 1)
            ]))), 128))
          ])) : (o(), i("div", Pi, [
            (o(!0), i(Me, null, je(g.settings.filters, (b, P) => (o(), i("div", Bi, [
              l("span", Hi, [
                ke(F(g.name) + " " + F(b.name) + " " + F(c(g, b)) + " ", 1),
                l("button", {
                  type: "button",
                  onClick: (I) => p(g, P),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, zi, 8, Ri)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      l("div", { class: "flex justify-center pt-4" }, [
        l("button", {
          type: "button",
          onClick: $,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, Ui)
      ])
    ]));
  }
}), qi = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Qi = { class: "" }, Ki = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Zi = /* @__PURE__ */ l("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Wi = { class: "mt-4" }, Gi = ["for"], Ji = ["id"], Xi = ["value", "selected"], Yi = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, eu = ["id", "checked"], tu = ["for"], su = { class: "mt-4" }, lu = { class: "pb-2 px-4" }, nu = { class: "" }, ou = ["id", "value"], au = ["for"], ru = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, jl = /* @__PURE__ */ de({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: {},
    prefs: {},
    maxLimit: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const { autoQueryGridDefaults: s } = It(), n = e, a = t, r = O({});
    ws(() => r.value = Object.assign({
      take: s.value.take,
      selectedColumns: []
    }, n.prefs));
    const u = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      a("done");
    }
    function c() {
      a("save", r.value);
    }
    return (f, p) => {
      const $ = Z("PrimaryButton"), m = Z("SecondaryButton"), k = Z("ModalDialog");
      return o(), ae(k, {
        id: f.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: xe(() => [
          l("div", qi, [
            l("div", Qi, [
              l("div", Ki, [
                Zi,
                l("div", Wi, [
                  l("label", {
                    for: `${f.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Gi),
                  Mt(l("select", {
                    id: `${f.id}-take`,
                    "onUpdate:modelValue": p[0] || (p[0] = (g) => r.value.take = g),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), i(Me, null, je(u.filter((g) => n.maxLimit == null || g <= n.maxLimit), (g) => (o(), i("option", {
                      value: g,
                      selected: g === r.value.take
                    }, F(g), 9, Xi))), 256))
                  ], 8, Ji), [
                    [bo, r.value.take]
                  ])
                ]),
                l("div", Yi, [
                  l("input", {
                    type: "radio",
                    id: `${f.id}-allColumns`,
                    onClick: p[1] || (p[1] = (g) => r.value.selectedColumns = []),
                    checked: r.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, eu),
                  l("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${f.id}-allColumns`
                  }, "View all columns", 8, tu)
                ]),
                l("div", su, [
                  l("div", lu, [
                    l("div", nu, [
                      (o(!0), i(Me, null, je(f.columns, (g) => (o(), i("div", {
                        key: g.name,
                        class: "flex items-center"
                      }, [
                        Mt(l("input", {
                          type: "checkbox",
                          id: g.name,
                          value: g.name,
                          "onUpdate:modelValue": p[2] || (p[2] = (b) => r.value.selectedColumns = b),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, ou), [
                          [ol, r.value.selectedColumns]
                        ]),
                        l("label", {
                          for: g.name,
                          class: "ml-3"
                        }, F(g.name), 9, au)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          l("div", ru, [
            ye($, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: xe(() => [
                ke(" Save ")
              ]),
              _: 1
            }),
            ye(m, { onClick: d }, {
              default: xe(() => [
                ke(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), iu = { key: 0 }, uu = { key: 1 }, du = {
  key: 2,
  class: "pt-1"
}, cu = { key: 0 }, fu = { key: 1 }, vu = { key: 2 }, pu = { key: 4 }, mu = { class: "pl-1 pt-1 flex flex-wrap" }, hu = { class: "flex mt-1" }, gu = ["title"], yu = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ l("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), bu = [
  yu
], wu = ["disabled"], ku = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), _u = [
  ku
], $u = ["disabled"], Cu = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), xu = [
  Cu
], Lu = ["disabled"], Vu = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Su = [
  Vu
], Mu = ["disabled"], Au = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), Tu = [
  Au
], Fu = {
  key: 0,
  class: "flex mt-1"
}, Iu = { class: "px-4 text-lg text-black dark:text-white" }, ju = { key: 0 }, Ou = { key: 1 }, Du = /* @__PURE__ */ l("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Pu = { key: 2 }, Bu = { class: "flex flex-wrap" }, Hu = {
  key: 0,
  class: "pl-2 mt-1"
}, Ru = /* @__PURE__ */ l("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
  })
], -1), Eu = [
  Ru
], zu = {
  key: 1,
  class: "pl-2 mt-1"
}, Nu = /* @__PURE__ */ xs('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), Uu = [
  Nu
], qu = {
  key: 2,
  class: "pl-2 mt-1"
}, Qu = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Ku = /* @__PURE__ */ l("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Zu = [
  Ku
], Wu = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Gu = /* @__PURE__ */ l("g", { fill: "none" }, [
  /* @__PURE__ */ l("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ l("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Ju = [
  Gu
], Xu = /* @__PURE__ */ l("span", { class: "whitespace-nowrap" }, "Copy URL", -1), Yu = {
  key: 3,
  class: "pl-2 mt-1"
}, ed = /* @__PURE__ */ l("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), td = [
  ed
], sd = {
  key: 4,
  class: "pl-2 mt-1"
}, ld = /* @__PURE__ */ l("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), nd = { class: "mr-1" }, od = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ad = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), rd = [
  ad
], id = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ud = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), dd = [
  ud
], cd = {
  key: 5,
  class: "pl-2 mt-1"
}, fd = ["title"], vd = /* @__PURE__ */ l("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), pd = { class: "whitespace-nowrap" }, md = { key: 8 }, hd = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, gd = { class: "mr-1 select-none" }, yd = {
  key: 1,
  class: "flex justify-between items-center"
}, bd = { class: "mr-1 select-none" }, ps = 25, wd = /* @__PURE__ */ de({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: {},
    id: { default: "AutoQueryGrid" },
    apis: {},
    type: {},
    prefs: {},
    deny: {},
    hide: {},
    selectedColumns: {},
    toolbarButtonClass: {},
    tableStyle: {},
    gridClass: {},
    grid2Class: {},
    grid3Class: {},
    grid4Class: {},
    tableClass: {},
    theadClass: {},
    tbodyClass: {},
    theadRowClass: {},
    theadCellClass: {},
    headerTitle: {},
    headerTitles: {},
    visibleFrom: {},
    rowClass: {},
    rowStyle: {},
    modelTitle: {},
    newButtonLabel: {},
    apiPrefs: {},
    canFilter: {},
    disableKeyBindings: {},
    configureField: {},
    skip: { default: 0 },
    create: { type: Boolean },
    edit: {},
    filters: {}
  },
  emits: ["headerSelected", "rowSelected", "nav"],
  setup(e, { expose: t, emit: s }) {
    const { config: n, autoQueryGridDefaults: a } = It(), r = a, u = n.value.storage, d = e, c = s, f = Qe("client"), p = "filtering,queryString,queryFilters".split(","), $ = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), m = v(() => d.deny ? Vt(p, d.deny) : Vt(p, r.value.deny)), k = v(() => d.hide ? Vt($, d.hide) : Vt($, r.value.hide));
    function g(_) {
      return m.value[_];
    }
    function b(_) {
      return k.value[_];
    }
    const P = v(() => d.tableStyle ?? r.value.tableStyle), I = v(() => d.gridClass ?? he.getGridClass(P.value)), se = v(() => d.grid2Class ?? he.getGrid2Class(P.value)), j = v(() => d.grid3Class ?? he.getGrid3Class(P.value)), T = v(() => d.grid4Class ?? he.getGrid4Class(P.value)), M = v(() => d.tableClass ?? he.getTableClass(P.value)), ie = v(() => d.theadClass ?? he.getTheadClass(P.value)), L = v(() => d.theadRowClass ?? he.getTheadRowClass(P.value)), z = v(() => d.theadCellClass ?? he.getTheadCellClass(P.value)), K = v(() => d.toolbarButtonClass ?? he.toolbarButtonClass);
    function le(_, B) {
      var Ie;
      if (d.rowClass)
        return d.rowClass(_, B);
      const ve = !!we.value.AnyUpdate, Ce = ((Ie = Ve.value) != null && Ie.name ? _e(_, Ve.value.name) : null) == Y.value;
      return he.getTableRowClass(d.tableStyle, B, Ce, ve);
    }
    const R = al(), W = v(() => {
      var _;
      return Es(((_ = we.value.AnyQuery.viewModel) == null ? void 0 : _.name) || we.value.AnyQuery.dataModel.name);
    }), ee = v(() => {
      const _ = Object.keys(R).map((B) => B.toLowerCase());
      return st(W.value).filter((B) => _.includes(B.name.toLowerCase()) || _.includes(B.name.toLowerCase() + "-header")).map((B) => B.name);
    });
    function q() {
      let _ = Ct(d.selectedColumns);
      return _.length > 0 ? _ : ee.value.length > 0 ? ee.value : [];
    }
    const A = v(() => {
      let B = q().map((re) => re.toLowerCase());
      const ve = st(W.value);
      return B.length > 0 ? B.map((re) => ve.find((Ce) => Ce.name.toLowerCase() === re)).filter((re) => re != null) : ve;
    }), te = v(() => {
      let _ = A.value.map((ve) => ve.name), B = Ct(pe.value.selectedColumns).map((ve) => ve.toLowerCase());
      return B.length > 0 ? _.filter((ve) => B.includes(ve.toLowerCase())) : _;
    }), w = O([]), N = O(new Xe()), E = O(new Xe()), h = O(), C = O(!1), Y = O(), J = O(), ne = O(!1), D = O(), V = O(d.skip), fe = O(!1), pe = O({ take: ps }), ue = O(!1), me = v(() => w.value.some((_) => _.settings.filters.length > 0 || !!_.settings.sort) || pe.value.selectedColumns), S = v(() => w.value.map((_) => _.settings.filters.length).reduce((_, B) => _ + B, 0)), ce = v(() => {
      var _;
      return st(Es(Ot.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name)));
    }), Ve = v(() => {
      var _;
      return ns(Es(Ot.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name)));
    }), Se = v(() => pe.value.take ?? ps), ge = v(() => N.value.response ? _e(N.value.response, "results") : []), H = v(() => {
      var _;
      return (((_ = N.value.response) == null ? void 0 : _.total) || ge.value.length) ?? 0;
    }), Q = v(() => V.value > 0), oe = v(() => V.value > 0), be = v(() => ge.value.length >= Se.value), $e = v(() => ge.value.length >= Se.value), Ae = O(), He = O(), Fe = {
      NoQuery: "No Query API was found"
    };
    t({
      update: nt,
      search: Dl,
      createRequestArgs: Hs,
      reset: Ql,
      createDone: Wt,
      createSave: Ns,
      editDone: wt,
      editSave: ds,
      forceUpdate: Bs,
      setEdit: Ps,
      edit: J,
      createForm: Ae,
      editForm: He,
      apiPrefs: pe,
      results: ge,
      skip: V,
      take: Se,
      total: H
    }), G.interceptors.has("AutoQueryGrid.new") && G.interceptors.invoke("AutoQueryGrid.new", { props: d });
    function De(_) {
      if (_) {
        if (d.canFilter)
          return d.canFilter(_);
        const B = ce.value.find((ve) => ve.name.toLowerCase() == _.toLowerCase());
        if (B)
          return !Mn(B);
      }
      return !1;
    }
    function Oe(_) {
      c("nav", _), g("queryString") && ul(_);
    }
    async function We(_) {
      V.value += _, V.value < 0 && (V.value = 0);
      const B = Math.floor(H.value / Se.value) * Se.value;
      V.value > B && (V.value = B), Oe({ skip: V.value || void 0 }), await nt();
    }
    async function Re(_, B) {
      var Ce, Ie;
      if (J.value = null, Y.value = B, !_ || !B)
        return;
      let ve = Yt(we.value.AnyQuery, { [_]: B });
      const re = await f.api(ve);
      if (re.succeeded) {
        let ze = (Ce = _e(re.response, "results")) == null ? void 0 : Ce[0];
        ze || console.warn(`API ${(Ie = we.value.AnyQuery) == null ? void 0 : Ie.request.name}(${_}:${B}) returned no results`), J.value = ze;
      }
    }
    async function it(_, B) {
      var Ce;
      c("rowSelected", _, B);
      const ve = (Ce = Ve.value) == null ? void 0 : Ce.name, re = ve ? _e(_, ve) : null;
      !ve || !re || (Oe({ edit: re }), Re(ve, re));
    }
    function jt(_, B) {
      var re;
      if (!g("filtering"))
        return;
      let ve = B.target;
      if (De(_) && (ve == null ? void 0 : ve.tagName) !== "TD") {
        let Ce = (re = ve == null ? void 0 : ve.closest("TABLE")) == null ? void 0 : re.getBoundingClientRect(), Ie = w.value.find((ze) => ze.name.toLowerCase() == _.toLowerCase());
        if (Ie && Ce) {
          let ze = 318, ut = Ce.x + ze + 10;
          D.value = {
            column: Ie,
            topLeft: {
              x: Math.max(Math.floor(B.clientX + ze / 2), ut),
              y: Ce.y + 45
            }
          };
        }
      }
      c("headerSelected", _, B);
    }
    function ht() {
      D.value = null;
    }
    async function as(_) {
      var ve;
      let B = (ve = D.value) == null ? void 0 : ve.column;
      B && (B.settings = _, u.setItem(is(B.name), JSON.stringify(B.settings)), await nt()), D.value = null;
    }
    async function rs(_) {
      u.setItem(is(_.name), JSON.stringify(_.settings)), await nt();
    }
    async function no(_) {
      ne.value = !1, pe.value = _, u.setItem(Rs(), JSON.stringify(_)), await nt();
    }
    function Ol(_) {
      var B;
      Ae.value && (Object.assign((B = Ae.value) == null ? void 0 : B.model, _), Bs());
    }
    function Ps(_) {
      Object.assign(J.value, _), Bs();
    }
    function Bs() {
      var B, ve, re;
      (B = Ae.value) == null || B.forceUpdate(), (ve = He.value) == null || ve.forceUpdate();
      const _ = Be();
      (re = _ == null ? void 0 : _.proxy) == null || re.$forceUpdate();
    }
    async function nt() {
      await Dl(Hs());
    }
    async function oo() {
      await nt();
    }
    const ao = /iPad|iPhone|iPod/.test(navigator.userAgent);
    async function Dl(_) {
      const B = we.value.AnyQuery;
      if (!B) {
        console.error(Fe.NoQuery);
        return;
      }
      let ve = Yt(B, _), re = await f.api(ve);
      dn((ze) => {
        N.value.response = N.value.error = void 0, ue.value = ze, ao ? St(() => N.value = re) : N.value = re;
      })();
      let Ie = _e(re.response, "results") || [];
      !re.succeeded || Ie.label == 0;
    }
    function Hs() {
      let _ = {
        include: "total",
        take: Se.value
      }, B = Ct(pe.value.selectedColumns || d.selectedColumns);
      if (B.length > 0) {
        let re = Ve.value;
        re && !B.includes(re.name) && (B = [re.name, ...B]);
        const Ce = ce.value, Ie = [];
        B.forEach((ze) => {
          var cs;
          const ut = Ce.find((kt) => kt.name.toLowerCase() == ze.toLowerCase());
          (cs = ut == null ? void 0 : ut.ref) != null && cs.selfId && Ie.push(ut.ref.selfId), _e(R, ze) && Ie.push(...Ce.filter((kt) => {
            var Ne, _t;
            return ((_t = (Ne = kt.ref) == null ? void 0 : Ne.selfId) == null ? void 0 : _t.toLowerCase()) == ze.toLowerCase();
          }).map((kt) => kt.name));
        }), Ie.forEach((ze) => {
          B.includes(ze) || B.push(ze);
        }), _.fields = B.join(",");
      }
      let ve = [];
      if (w.value.forEach((re) => {
        re.settings.sort && ve.push((re.settings.sort === "DESC" ? "-" : "") + re.name), re.settings.filters.forEach((Ce) => {
          let Ie = Ce.key.replace("%", re.name);
          _[Ie] = Ce.value;
        });
      }), d.filters && Object.keys(d.filters).forEach((re) => {
        _[re] = d.filters[re];
      }), g("queryString") && g("queryFilters")) {
        const re = location.search ? location.search : location.hash.includes("?") ? "?" + ms(location.hash, "?") : "";
        let Ce = Zs(re);
        if (Object.keys(Ce).forEach((Ie) => {
          A.value.find((ut) => ut.name.toLowerCase() === Ie.toLowerCase()) && (_[Ie] = Ce[Ie]);
        }), typeof Ce.skip < "u") {
          const Ie = parseInt(Ce.skip);
          isNaN(Ie) || (V.value = _.skip = Ie);
        }
      }
      return typeof _.skip > "u" && V.value > 0 && (_.skip = V.value), ve.length > 0 && (_.orderBy = ve.join(",")), _;
    }
    function ro() {
      const _ = Pl("csv");
      Js(_), typeof window < "u" && window.open(_);
    }
    function io() {
      const _ = Pl("json");
      Js(_), fe.value = !0, setTimeout(() => fe.value = !1, 3e3);
    }
    function Pl(_ = "json") {
      var Ie;
      const B = Hs(), ve = `/api/${(Ie = we.value.AnyQuery) == null ? void 0 : Ie.request.name}`, re = Do(f.baseUrl, Et(ve, { ...B, jsconfig: "edv" }));
      return re.indexOf("?") >= 0 ? Ls(re, "?") + "." + _ + "?" + ms(re, "?") : re + ".json";
    }
    async function uo() {
      w.value.forEach((_) => {
        _.settings = { filters: [] }, u.removeItem(is(_.name));
      }), pe.value = { take: ps }, u.removeItem(Rs()), await nt();
    }
    function co() {
      C.value = !0, Oe({ create: null });
    }
    const Ot = v(() => qt(d.type)), Kt = v(() => {
      var _;
      return Ot.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name);
    }), Zt = v(() => d.modelTitle || Kt.value), fo = v(() => d.newButtonLabel || `New ${Zt.value}`), Rs = () => {
      var _;
      return `${d.id}/ApiPrefs/${Ot.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name)}`;
    }, is = (_) => {
      var B;
      return `Column/${d.id}:${Ot.value || ((B = we.value.AnyQuery) == null ? void 0 : B.dataModel.name)}.${_}`;
    }, { metadataApi: Bl, typeOf: Es, apiOf: Hl, filterDefinitions: vo } = lt(), { invalidAccessMessage: zs } = Tl(), Rl = v(() => d.filterDefinitions || vo.value), we = v(() => {
      let _ = Ct(d.apis);
      return _.length > 0 ? Nt.from(_.map((B) => Hl(B)).filter((B) => B != null).map((B) => B)) : Nt.forType(Ot.value, Bl.value);
    }), us = (_) => `<span class="text-yellow-700">${_}</span>`, El = v(() => {
      if (!Bl.value)
        return us(`AppMetadata not loaded, see <a class="${Cs.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let B = Ct(d.apis).map((re) => Hl(re) == null ? re : null).filter((re) => re != null);
      if (B.length > 0)
        return us(`Unknown API${B.length > 1 ? "s" : ""}: ${B.join(", ")}`);
      let ve = we.value;
      return ve.empty ? us("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ve.AnyQuery ? null : us(Fe.NoQuery);
    }), zl = v(() => we.value.AnyQuery && zs(we.value.AnyQuery)), Nl = v(() => we.value.Create && zs(we.value.Create)), Ul = v(() => we.value.AnyUpdate && zs(we.value.AnyUpdate)), po = v(() => bs(we.value.Create));
    v(() => bs(we.value.AnyUpdate));
    const ql = v(() => bs(we.value.Delete));
    function wt() {
      J.value = null, Y.value = null, Oe({ edit: void 0 });
    }
    function Wt() {
      C.value = !1, Oe({ create: void 0 });
    }
    async function ds() {
      await nt(), wt();
    }
    async function Ns() {
      await nt(), Wt();
    }
    function Ql() {
      var ve;
      N.value = new Xe(), E.value = new Xe(), C.value = !1, Y.value = null, J.value = null, ne.value = !1, D.value = null, V.value = d.skip, fe.value = !1, pe.value = { take: ps }, ue.value = !1;
      const _ = d.prefs || $s(u.getItem(Rs()));
      _ && (pe.value = _), w.value = A.value.map((re) => ({
        name: re.name,
        type: re.type,
        meta: re,
        settings: Object.assign(
          {
            filters: []
          },
          $s(u.getItem(is(re.name)))
        )
      })), isNaN(d.skip) || (V.value = d.skip);
      let B = (ve = Ve.value) == null ? void 0 : ve.name;
      if (g("queryString")) {
        const re = location.search ? location.search : location.hash.includes("?") ? "?" + ms(location.hash, "?") : "";
        let Ce = Zs(re);
        typeof Ce.create < "u" ? C.value = typeof Ce.create < "u" : B && (typeof Ce.edit == "string" || typeof Ce.edit == "number") && Re(B, Ce.edit);
      }
      d.create === !0 && (C.value = !0), B && d.edit != null && Re(B, d.edit);
    }
    return Ye(async () => {
      Ql(), await nt();
    }), (_, B) => {
      const ve = Z("Alert"), re = Z("EnsureAccessDialog"), Ce = Z("AutoCreateForm"), Ie = Z("AutoEditForm"), ze = Z("AutoViewForm"), ut = Z("ErrorSummary"), Kl = Z("Loading"), cs = Z("SettingsIcons"), kt = Z("DataGrid");
      return El.value ? (o(), i("div", iu, [
        ye(ve, { innerHTML: El.value }, null, 8, ["innerHTML"])
      ])) : zl.value ? (o(), i("div", uu, [
        ye(lo, { "invalid-access": zl.value }, null, 8, ["invalid-access"])
      ])) : (o(), i("div", du, [
        C.value && we.value.Create ? (o(), i("div", cu, [
          Nl.value ? (o(), ae(re, {
            key: 0,
            title: `Create ${Zt.value}`,
            "invalid-access": Nl.value,
            "alert-class": "text-yellow-700",
            onDone: Wt
          }, null, 8, ["title", "invalid-access"])) : X(R).createform ? U(_.$slots, "createform", {
            key: 1,
            type: we.value.Create.request.name,
            configure: _.configureField,
            done: Wt,
            save: Ns
          }) : (o(), ae(Ce, {
            key: 2,
            ref_key: "createForm",
            ref: Ae,
            type: we.value.Create.request.name,
            configure: _.configureField,
            onDone: Wt,
            onSave: Ns
          }, {
            header: xe(() => [
              U(_.$slots, "formheader", {
                form: "create",
                formInstance: Ae.value,
                apis: we.value,
                type: Kt.value,
                updateModel: Ol
              })
            ]),
            footer: xe(() => [
              U(_.$slots, "formfooter", {
                form: "create",
                formInstance: Ae.value,
                apis: we.value,
                type: Kt.value,
                updateModel: Ol
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : J.value && we.value.AnyUpdate ? (o(), i("div", fu, [
          Ul.value ? (o(), ae(re, {
            key: 0,
            title: `Update ${Zt.value}`,
            "invalid-access": Ul.value,
            "alert-class": "text-yellow-700",
            onDone: wt
          }, null, 8, ["title", "invalid-access"])) : X(R).editform ? U(_.$slots, "editform", {
            key: 1,
            model: J.value,
            type: we.value.AnyUpdate.request.name,
            deleteType: ql.value ? we.value.Delete.request.name : null,
            configure: _.configureField,
            done: wt,
            save: ds
          }) : (o(), ae(Ie, {
            key: 2,
            ref_key: "editForm",
            ref: He,
            modelValue: J.value,
            "onUpdate:modelValue": B[0] || (B[0] = (Ne) => J.value = Ne),
            type: we.value.AnyUpdate.request.name,
            deleteType: ql.value ? we.value.Delete.request.name : null,
            configure: _.configureField,
            onDone: wt,
            onSave: ds,
            onDelete: ds
          }, {
            header: xe(() => [
              U(_.$slots, "formheader", {
                form: "edit",
                formInstance: He.value,
                apis: we.value,
                type: Kt.value,
                model: J.value,
                id: Y.value,
                updateModel: Ps
              })
            ]),
            footer: xe(() => [
              U(_.$slots, "formfooter", {
                form: "edit",
                formInstance: He.value,
                apis: we.value,
                type: Kt.value,
                model: J.value,
                id: Y.value,
                updateModel: Ps
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : J.value ? (o(), i("div", vu, [
          X(R).viewform ? U(_.$slots, "viewform", {
            key: 0,
            model: J.value,
            apis: we.value,
            done: wt
          }) : (o(), ae(ze, {
            key: 1,
            model: J.value,
            apis: we.value,
            done: wt
          }, null, 8, ["model", "apis"]))
        ])) : x("", !0),
        X(R).toolbar ? U(_.$slots, "toolbar", { key: 3 }) : b("toolbar") ? (o(), i("div", pu, [
          ne.value ? (o(), ae(jl, {
            key: 0,
            columns: A.value,
            prefs: pe.value,
            onDone: B[1] || (B[1] = (Ne) => ne.value = !1),
            onSave: no
          }, null, 8, ["columns", "prefs"])) : x("", !0),
          l("div", mu, [
            l("div", hu, [
              b("preferences") ? (o(), i("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${Zt.value} Preferences`,
                onClick: B[2] || (B[2] = (Ne) => ne.value = !ne.value)
              }, bu, 8, gu)) : x("", !0),
              b("pagingNav") ? (o(), i("button", {
                key: 1,
                type: "button",
                class: y(["pl-2", Q.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !Q.value,
                onClick: B[3] || (B[3] = (Ne) => We(-H.value))
              }, _u, 10, wu)) : x("", !0),
              b("pagingNav") ? (o(), i("button", {
                key: 2,
                type: "button",
                class: y(["pl-2", oe.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !oe.value,
                onClick: B[4] || (B[4] = (Ne) => We(-Se.value))
              }, xu, 10, $u)) : x("", !0),
              b("pagingNav") ? (o(), i("button", {
                key: 3,
                type: "button",
                class: y(["pl-2", be.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !be.value,
                onClick: B[5] || (B[5] = (Ne) => We(Se.value))
              }, Su, 10, Lu)) : x("", !0),
              b("pagingNav") ? (o(), i("button", {
                key: 4,
                type: "button",
                class: y(["pl-2", $e.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !$e.value,
                onClick: B[6] || (B[6] = (Ne) => We(H.value))
              }, Tu, 10, Mu)) : x("", !0)
            ]),
            b("pagingInfo") ? (o(), i("div", Fu, [
              l("div", Iu, [
                ue.value ? (o(), i("span", ju, "Querying...")) : x("", !0),
                ge.value.length ? (o(), i("span", Ou, [
                  Du,
                  ke(" " + F(V.value + 1) + " - " + F(Math.min(V.value + ge.value.length, H.value)) + " ", 1),
                  l("span", null, " of " + F(H.value), 1)
                ])) : N.value.completed ? (o(), i("span", Pu, "No Results")) : x("", !0)
              ])
            ])) : x("", !0),
            l("div", Bu, [
              b("refresh") ? (o(), i("div", Hu, [
                l("button", {
                  type: "button",
                  onClick: oo,
                  title: "Refresh",
                  class: y(K.value)
                }, Eu, 2)
              ])) : x("", !0),
              b("downloadCsv") ? (o(), i("div", zu, [
                l("button", {
                  type: "button",
                  onClick: ro,
                  title: "Download CSV",
                  class: y(K.value)
                }, Uu, 2)
              ])) : x("", !0),
              b("copyApiUrl") ? (o(), i("div", qu, [
                l("button", {
                  type: "button",
                  onClick: io,
                  title: "Copy API URL",
                  class: y(K.value)
                }, [
                  fe.value ? (o(), i("svg", Qu, Zu)) : (o(), i("svg", Wu, Ju)),
                  Xu
                ], 2)
              ])) : x("", !0),
              me.value && b("resetPreferences") ? (o(), i("div", Yu, [
                l("button", {
                  type: "button",
                  onClick: uo,
                  title: "Reset Preferences & Filters",
                  class: y(K.value)
                }, td, 2)
              ])) : x("", !0),
              b("filtersView") && S.value > 0 ? (o(), i("div", sd, [
                l("button", {
                  type: "button",
                  onClick: B[7] || (B[7] = (Ne) => h.value = h.value == "filters" ? null : "filters"),
                  class: y(K.value),
                  "aria-expanded": "false"
                }, [
                  ld,
                  l("span", nd, F(S.value) + " " + F(S.value == 1 ? "Filter" : "Filters"), 1),
                  h.value != "filters" ? (o(), i("svg", od, rd)) : (o(), i("svg", id, dd))
                ], 2)
              ])) : x("", !0),
              b("newItem") && we.value.Create && po.value ? (o(), i("div", cd, [
                l("button", {
                  type: "button",
                  onClick: co,
                  title: Zt.value,
                  class: y(K.value)
                }, [
                  vd,
                  l("span", pd, F(fo.value), 1)
                ], 10, fd)
              ])) : x("", !0),
              X(R).toolbarbuttons ? U(_.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: K.value
              }) : x("", !0)
            ])
          ])
        ])) : x("", !0),
        h.value == "filters" ? (o(), ae(Il, {
          key: 5,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: Rl.value,
          columns: w.value,
          onDone: B[8] || (B[8] = (Ne) => h.value = null),
          onChange: rs
        }, null, 8, ["definitions", "columns"])) : x("", !0),
        E.value.error ?? N.value.error ? (o(), ae(ut, {
          key: 6,
          status: E.value.error ?? N.value.error
        }, null, 8, ["status"])) : ue.value ? (o(), ae(Kl, {
          key: 7,
          class: "p-2"
        })) : x("", !0),
        D.value ? (o(), i("div", md, [
          ye(Fl, {
            definitions: Rl.value,
            column: D.value.column,
            "top-left": D.value.topLeft,
            onDone: ht,
            onSave: as
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : x("", !0),
        ge.value.length ? (o(), ae(kt, {
          key: 9,
          id: _.id,
          items: ge.value,
          type: _.type,
          "selected-columns": te.value,
          class: "mt-1",
          onFiltersChanged: nt,
          tableStyle: P.value,
          gridClass: I.value,
          grid2Class: se.value,
          grid3Class: j.value,
          grid4Class: T.value,
          tableClass: M.value,
          theadClass: ie.value,
          theadRowClass: L.value,
          theadCellClass: z.value,
          tbodyClass: _.tbodyClass,
          rowClass: le,
          onRowSelected: it,
          rowStyle: _.rowStyle,
          headerTitle: _.headerTitle,
          headerTitles: _.headerTitles,
          visibleFrom: _.visibleFrom,
          onHeaderSelected: jt
        }, rl({
          header: xe(({ column: Ne, label: _t }) => {
            var Zl;
            return [
              g("filtering") && De(Ne) ? (o(), i("div", hd, [
                l("span", gd, F(_t), 1),
                ye(cs, {
                  column: w.value.find((mo) => mo.name.toLowerCase() === Ne.toLowerCase()),
                  "is-open": ((Zl = D.value) == null ? void 0 : Zl.column.name) === Ne
                }, null, 8, ["column", "is-open"])
              ])) : (o(), i("div", yd, [
                l("span", bd, F(_t), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          je(Object.keys(X(R)), (Ne) => ({
            name: Ne,
            fn: xe((_t) => [
              U(_.$slots, Ne, Rt(ks(_t)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : x("", !0)
      ]));
    };
  }
}), kd = { class: "flex" }, _d = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $d = /* @__PURE__ */ l("g", { fill: "none" }, [
  /* @__PURE__ */ l("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Cd = [
  $d
], xd = /* @__PURE__ */ l("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), Ld = /* @__PURE__ */ l("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), Vd = [
  xd,
  Ld
], Sd = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Md = /* @__PURE__ */ l("g", { fill: "none" }, [
  /* @__PURE__ */ l("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), Ad = [
  Md
], Td = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Fd = /* @__PURE__ */ l("g", { fill: "none" }, [
  /* @__PURE__ */ l("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), Id = [
  Fd
], jd = /* @__PURE__ */ de({
  __name: "SettingsIcons",
  props: {
    column: {},
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, s) => {
      var n, a, r, u, d, c, f;
      return o(), i("div", kd, [
        (r = (a = (n = t.column) == null ? void 0 : n.settings) == null ? void 0 : a.filters) != null && r.length ? (o(), i("svg", _d, Cd)) : (o(), i("svg", {
          key: 1,
          class: y(["w-4 h-4 transition-transform", t.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, Vd, 2)),
        ((d = (u = t.column) == null ? void 0 : u.settings) == null ? void 0 : d.sort) === "ASC" ? (o(), i("svg", Sd, Ad)) : ((f = (c = t.column) == null ? void 0 : c.settings) == null ? void 0 : f.sort) === "DESC" ? (o(), i("svg", Td, Id)) : x("", !0)
      ]);
    };
  }
}), Od = /* @__PURE__ */ de({
  __name: "EnsureAccessDialog",
  props: {
    title: {},
    subtitle: {},
    invalidAccess: {},
    alertClass: {}
  },
  emits: ["done"],
  setup(e) {
    return (t, s) => {
      const n = Z("EnsureAccess"), a = Z("SlideOver");
      return t.invalidAccess ? (o(), ae(a, {
        key: 0,
        title: t.title,
        onDone: s[0] || (s[0] = (r) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, rl({
        default: xe(() => [
          ye(n, {
            alertClass: t.alertClass,
            invalidAccess: t.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        t.subtitle ? {
          name: "subtitle",
          fn: xe(() => [
            ke(F(t.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : x("", !0);
    };
  }
}), Dd = ["for"], Pd = { class: "mt-1 relative rounded-md shadow-sm" }, Bd = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], Hd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Rd = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Ed = [
  Rd
], zd = ["id"], Nd = ["id"], Ud = {
  inheritAttrs: !1
}, qd = /* @__PURE__ */ de({
  ...Ud,
  __name: "TextInput",
  props: {
    status: {},
    id: {},
    type: {},
    inputClass: {},
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {}
  },
  setup(e, { expose: t }) {
    const s = (m) => m.value, n = e;
    t({
      focus: r
    });
    const a = O();
    function r() {
      var m;
      (m = a.value) == null || m.focus();
    }
    const u = v(() => n.type || "text"), d = v(() => n.label ?? Pe(at(n.id))), c = v(() => n.placeholder ?? d.value);
    let f = Qe("ApiState", void 0);
    const p = v(() => mt.call({ responseStatus: n.status ?? (f == null ? void 0 : f.error.value) }, n.id)), $ = v(() => [ot.base, p.value ? ot.invalid : ot.valid, n.inputClass]);
    return (m, k) => (o(), i("div", {
      class: y([m.$attrs.class])
    }, [
      U(m.$slots, "header", Te({
        inputElement: a.value,
        id: m.id,
        modelValue: m.modelValue,
        status: m.status
      }, m.$attrs)),
      d.value ? (o(), i("label", {
        key: 0,
        for: m.id,
        class: y(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${m.labelClass ?? ""}`)
      }, F(d.value), 11, Dd)) : x("", !0),
      l("div", Pd, [
        l("input", Te({
          ref_key: "inputElement",
          ref: a,
          type: u.value,
          name: m.id,
          id: m.id,
          class: $.value,
          placeholder: c.value,
          value: X(pn)(u.value, m.modelValue),
          onInput: k[0] || (k[0] = (g) => m.$emit("update:modelValue", s(g.target))),
          "aria-invalid": p.value != null,
          "aria-describedby": `${m.id}-error`,
          step: "any"
        }, X(ft)(m.$attrs, ["class", "value"])), null, 16, Bd),
        p.value ? (o(), i("div", Hd, Ed)) : x("", !0)
      ]),
      p.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${m.id}-error`
      }, F(p.value), 9, zd)) : m.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${m.id}-description`
      }, F(m.help), 9, Nd)) : x("", !0),
      U(m.$slots, "footer", Te({
        inputElement: a.value,
        id: m.id,
        modelValue: m.modelValue,
        status: m.status
      }, m.$attrs))
    ], 2));
  }
}), Qd = ["for"], Kd = { class: "mt-1 relative rounded-md shadow-sm" }, Zd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], Wd = ["id"], Gd = ["id"], Jd = {
  inheritAttrs: !1
}, Xd = /* @__PURE__ */ de({
  ...Jd,
  __name: "TextareaInput",
  props: {
    status: {},
    id: {},
    inputClass: {},
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {}
  },
  setup(e) {
    const t = (c) => c.value, s = e, n = v(() => s.label ?? Pe(at(s.id))), a = v(() => s.placeholder ?? n.value);
    let r = Qe("ApiState", void 0);
    const u = v(() => mt.call({ responseStatus: s.status ?? (r == null ? void 0 : r.error.value) }, s.id)), d = v(() => ["shadow-sm " + ot.base, u.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ot.valid, s.inputClass]);
    return (c, f) => (o(), i("div", {
      class: y([c.$attrs.class])
    }, [
      n.value ? (o(), i("label", {
        key: 0,
        for: c.id,
        class: y(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${c.labelClass ?? ""}`)
      }, F(n.value), 11, Qd)) : x("", !0),
      l("div", Kd, [
        l("textarea", Te({
          name: c.id,
          id: c.id,
          class: d.value,
          placeholder: a.value,
          onInput: f[0] || (f[0] = (p) => c.$emit("update:modelValue", t(p.target))),
          "aria-invalid": u.value != null,
          "aria-describedby": `${c.id}-error`
        }, X(ft)(c.$attrs, ["class"])), F(c.modelValue), 17, Zd)
      ]),
      u.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${c.id}-error`
      }, F(u.value), 9, Wd)) : c.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${c.id}-description`
      }, F(c.help), 9, Gd)) : x("", !0)
    ], 2));
  }
}), Yd = ["for"], ec = ["id", "name", "value", "aria-invalid", "aria-describedby"], tc = ["value"], sc = ["id"], lc = {
  inheritAttrs: !1
}, nc = /* @__PURE__ */ de({
  ...lc,
  __name: "SelectInput",
  props: {
    status: {},
    id: {},
    modelValue: {},
    inputClass: {},
    label: {},
    labelClass: {},
    options: {},
    values: {},
    entries: {}
  },
  setup(e) {
    const t = (d) => d.value, s = e, n = v(() => s.label ?? Pe(at(s.id)));
    let a = Qe("ApiState", void 0);
    const r = v(() => mt.call({ responseStatus: s.status ?? (a == null ? void 0 : a.error.value) }, s.id)), u = v(() => s.entries || (s.values ? s.values.map((d) => ({ key: d, value: d })) : s.options ? Object.keys(s.options).map((d) => ({ key: d, value: s.options[d] })) : []));
    return (d, c) => (o(), i("div", {
      class: y([d.$attrs.class])
    }, [
      n.value ? (o(), i("label", {
        key: 0,
        for: d.id,
        class: y(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${d.labelClass ?? ""}`)
      }, F(n.value), 11, Yd)) : x("", !0),
      l("select", Te({
        id: d.id,
        name: d.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          r.value ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          d.inputClass
        ],
        value: d.modelValue,
        onInput: c[0] || (c[0] = (f) => d.$emit("update:modelValue", t(f.target))),
        "aria-invalid": r.value != null,
        "aria-describedby": `${d.id}-error`
      }, X(ft)(d.$attrs, ["class"])), [
        (o(!0), i(Me, null, je(u.value, (f) => (o(), i("option", {
          value: f.key
        }, F(f.value), 9, tc))), 256))
      ], 16, ec),
      r.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${d.id}-error`
      }, F(r.value), 9, sc)) : x("", !0)
    ], 2));
  }
}), oc = { class: "flex items-center h-5" }, ac = ["id", "name", "checked"], rc = { class: "ml-3 text-sm" }, ic = ["for"], uc = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, dc = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, cc = {
  inheritAttrs: !1
}, fc = /* @__PURE__ */ de({
  ...cc,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: {},
    id: {},
    inputClass: {},
    label: {},
    labelClass: {},
    help: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = v(() => s.label ?? Pe(at(s.id)));
    let a = Qe("ApiState", void 0);
    const r = v(() => mt.call({ responseStatus: s.status ?? (a == null ? void 0 : a.error.value) }, s.id));
    return (u, d) => (o(), i("div", {
      class: y(["relative flex items-start", u.$attrs.class])
    }, [
      l("div", oc, [
        l("input", Te({
          id: u.id,
          name: u.id,
          type: "checkbox",
          checked: u.modelValue,
          onInput: d[0] || (d[0] = (c) => u.$emit("update:modelValue", c.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", u.inputClass]
        }, X(ft)(u.$attrs, ["class"])), null, 16, ac)
      ]),
      l("div", rc, [
        l("label", {
          for: u.id,
          class: y(`font-medium text-gray-700 dark:text-gray-300 ${u.labelClass ?? ""}`)
        }, F(n.value), 11, ic),
        r.value ? (o(), i("p", uc, F(r.value), 1)) : u.help ? (o(), i("p", dc, F(u.help), 1)) : x("", !0)
      ])
    ], 2));
  }
}), vc = ["id"], pc = ["for"], mc = { class: "mt-1 relative rounded-md shadow-sm" }, hc = ["id", "name", "value"], gc = { class: "flex flex-wrap pb-1.5" }, yc = { class: "pt-1.5 pl-1" }, bc = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, wc = ["onClick"], kc = /* @__PURE__ */ l("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), _c = [
  kc
], $c = { class: "pt-1.5 pl-1 shrink" }, Cc = ["type", "name", "id", "aria-invalid", "aria-describedby"], xc = ["id"], Lc = ["onMouseover", "onClick"], Vc = { class: "block truncate" }, Sc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Mc = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Ac = [
  Mc
], Tc = ["id"], Fc = ["id"], Ic = {
  inheritAttrs: !1
}, jc = /* @__PURE__ */ de({
  ...Ic,
  __name: "TagInput",
  props: {
    status: {},
    id: {},
    type: {},
    inputClass: {},
    label: {},
    labelClass: {},
    help: {},
    modelValue: { default: () => [] },
    delimiters: { default: () => [","] },
    allowableValues: {},
    string: { type: Boolean },
    maxVisibleItems: { default: 300 },
    converter: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t;
    function a(w) {
      return s.converter ? s.converter(w) : w;
    }
    const r = v(() => Ze(a(s.modelValue), (w) => typeof w == "string" ? w.trim().length == 0 ? [] : w.split(",") : w) || []), u = O(), d = O(!1), c = v(() => {
      const w = $.value.toLowerCase();
      return !s.allowableValues || s.allowableValues.length == 0 ? [] : s.allowableValues.length < 1e3 ? s.allowableValues.filter((N) => !r.value.includes(N) && N.toLowerCase().includes(w)) : s.allowableValues.filter((N) => !r.value.includes(N) && N.startsWith(w));
    });
    function f(w) {
      u.value = w;
    }
    const p = O(null), $ = O(""), m = v(() => s.type || "text"), k = v(() => s.label ?? Pe(at(s.id)));
    let g = Qe("ApiState", void 0);
    const b = v(() => mt.call({ responseStatus: s.status ?? (g == null ? void 0 : g.error.value) }, s.id)), P = v(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      b.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      s.inputClass
    ]), I = (w) => L(r.value.filter((N) => N != w));
    function se(w) {
      var N;
      document.activeElement === w.target && ((N = p.value) == null || N.focus());
    }
    const j = O();
    function T() {
      d.value = !0, j.value = !0;
    }
    function M() {
      T();
    }
    function ie() {
      q(K()), j.value = !1, setTimeout(() => {
        j.value || (d.value = !1);
      }, 200);
    }
    function L(w) {
      const N = s.string ? w.join(",") : w;
      n("update:modelValue", N);
    }
    function z(w) {
      if (w.key == "Backspace" && $.value.length == 0 && r.value.length > 0 && I(r.value[r.value.length - 1]), !(!s.allowableValues || s.allowableValues.length == 0))
        if (w.code == "Escape" || w.code == "Tab")
          d.value = !1;
        else if (w.code == "Home")
          u.value = c.value[0], W();
        else if (w.code == "End")
          u.value = c.value[c.value.length - 1], W();
        else if (w.code == "ArrowDown") {
          if (d.value = !0, !u.value)
            u.value = c.value[0];
          else {
            const N = c.value.indexOf(u.value);
            u.value = N + 1 < c.value.length ? c.value[N + 1] : c.value[0];
          }
          ee();
        } else if (w.code == "ArrowUp") {
          if (!u.value)
            u.value = c.value[c.value.length - 1];
          else {
            const N = c.value.indexOf(u.value);
            u.value = N - 1 >= 0 ? c.value[N - 1] : c.value[c.value.length - 1];
          }
          ee();
        } else
          w.code == "Enter" ? u.value && d.value ? (q(u.value), w.preventDefault()) : d.value = !1 : d.value = c.value.length > 0;
    }
    function K() {
      if ($.value.length == 0)
        return "";
      let w = Po($.value.trim(), ",");
      return w[0] == "," && (w = w.substring(1)), w = w.trim(), w.length == 0 && d.value && c.value.length > 0 ? u.value : w;
    }
    function le(w) {
      const N = K();
      if (N.length > 0) {
        const E = s.delimiters.some((C) => C == w.key);
        if (E && w.preventDefault(), w.key == "Enter" || w.key == "NumpadEnter" || w.key.length == 1 && E) {
          q(N);
          return;
        }
      }
    }
    const R = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function W() {
      setTimeout(() => {
        let w = _s(`#${s.id}-tag li.active`);
        w && w.scrollIntoView(R);
      }, 0);
    }
    function ee() {
      setTimeout(() => {
        let w = _s(`#${s.id}-tag li.active`);
        w && ("scrollIntoViewIfNeeded" in w ? w.scrollIntoViewIfNeeded(R) : w.scrollIntoView(R));
      }, 0);
    }
    function q(w) {
      if (w.length === 0)
        return;
      const N = Array.from(r.value);
      N.indexOf(w) == -1 && N.push(w), L(N), $.value = "", d.value = !1;
    }
    function A(w) {
      var E;
      const N = (E = w.clipboardData) == null ? void 0 : E.getData("Text");
      te(N);
    }
    function te(w) {
      if (!w)
        return;
      const N = new RegExp(`\\n|\\t|${s.delimiters.join("|")}`), E = Array.from(r.value);
      w.split(N).map((C) => C.trim()).forEach((C) => {
        E.indexOf(C) == -1 && E.push(C);
      }), L(E), $.value = "";
    }
    return (w, N) => (o(), i("div", {
      class: y([w.$attrs.class]),
      id: `${w.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      k.value ? (o(), i("label", {
        key: 0,
        for: w.id,
        class: y(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${w.labelClass ?? ""}`)
      }, F(k.value), 11, pc)) : x("", !0),
      l("div", mc, [
        l("input", {
          type: "hidden",
          id: w.id,
          name: w.id,
          value: r.value.join(",")
        }, null, 8, hc),
        l("button", {
          class: y(P.value),
          onClick: Ue(se, ["prevent"]),
          onFocus: N[2] || (N[2] = (E) => d.value = !0),
          tabindex: "-1"
        }, [
          l("div", gc, [
            (o(!0), i(Me, null, je(r.value, (E) => (o(), i("div", yc, [
              l("span", bc, [
                ke(F(E) + " ", 1),
                l("button", {
                  type: "button",
                  onClick: (h) => I(E),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, _c, 8, wc)
              ])
            ]))), 256)),
            l("div", $c, [
              Mt(l("input", Te({
                ref_key: "txtInput",
                ref: p,
                type: m.value,
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${w.id}-txt`,
                id: `${w.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${$.value.length + 1}ch`,
                "onUpdate:modelValue": N[0] || (N[0] = (E) => $.value = E),
                "aria-invalid": b.value != null,
                "aria-describedby": `${w.id}-error`,
                onKeydown: z,
                onKeypress: le,
                onPaste: Ue(A, ["prevent", "stop"]),
                onFocus: M,
                onBlur: ie,
                onClick: N[1] || (N[1] = (E) => d.value = !0)
              }, X(ft)(w.$attrs, ["class", "required"])), null, 16, Cc), [
                [wo, $.value]
              ])
            ])
          ])
        ], 34),
        d.value && c.value.length ? (o(), i("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: z,
          id: `${w.id}-options`,
          role: "listbox"
        }, [
          (o(!0), i(Me, null, je(c.value.slice(0, w.maxVisibleItems), (E) => (o(), i("li", {
            class: y([E === u.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (h) => f(E),
            onClick: (h) => q(E),
            role: "option",
            tabindex: "-1"
          }, [
            l("span", Vc, F(E), 1)
          ], 42, Lc))), 256))
        ], 40, xc)) : x("", !0),
        b.value ? (o(), i("div", Sc, Ac)) : x("", !0)
      ]),
      b.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${w.id}-error`
      }, F(b.value), 9, Tc)) : w.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${w.id}-description`
      }, F(w.help), 9, Fc)) : x("", !0)
    ], 10, vc));
  }
}), Oc = { class: "relative flex-grow mr-2 sm:mr-4" }, Dc = ["for"], Pc = { class: "block mt-2" }, Bc = { class: "sr-only" }, Hc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], Rc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Ec = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), zc = [
  Ec
], Nc = ["id"], Uc = ["id"], qc = { key: 0 }, Qc = ["title"], Kc = ["alt", "src"], Zc = {
  key: 1,
  class: "mt-3"
}, Wc = { class: "w-full" }, Gc = { class: "pr-6 align-bottom pb-2" }, Jc = ["title"], Xc = ["src", "onError"], Yc = ["href"], e0 = {
  key: 1,
  class: "overflow-hidden"
}, t0 = { class: "align-top pb-2 whitespace-nowrap" }, s0 = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, l0 = /* @__PURE__ */ de({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: {},
    id: {},
    inputClass: {},
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {},
    values: {},
    files: {}
  },
  setup(e) {
    var T;
    const t = e, s = O(null), { assetsPathResolver: n, fallbackPathResolver: a } = It(), r = {}, u = O(), d = O(((T = t.files) == null ? void 0 : T.map(c)) || []);
    function c(M) {
      return M.filePath = n(M.filePath), M;
    }
    t.values && t.values.length > 0 && (d.value = t.values.map((M) => {
      let ie = M.replace(/\\/g, "/");
      return { fileName: rn(At(ie, "/"), "."), filePath: ie, contentType: Ys(ie) };
    }).map(c));
    const f = v(() => t.label ?? Pe(at(t.id))), p = v(() => t.placeholder ?? f.value);
    let $ = Qe("ApiState", void 0);
    const m = v(() => mt.call({ responseStatus: t.status ?? ($ == null ? void 0 : $.error.value) }, t.id)), k = v(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      m.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ]), g = (M) => {
      let ie = M.target;
      u.value = "", d.value = Array.from(ie.files || []).map((L) => ({
        fileName: L.name,
        filePath: pl(L),
        contentLength: L.size,
        contentType: L.type || Ys(L.name)
      }));
    }, b = () => {
      var M;
      return (M = s.value) == null ? void 0 : M.click();
    }, P = (M) => M == null ? !1 : M.startsWith("data:") || M.startsWith("blob:"), I = v(() => {
      if (d.value.length > 0)
        return d.value[0].filePath;
      let M = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return M && xt(n(M)) || null;
    }), se = (M) => !M || M.startsWith("data:") || M.endsWith(".svg") ? "" : "rounded-full object-cover";
    function j(M) {
      u.value = a(I.value);
    }
    return Ft(Cn), (M, ie) => (o(), i("div", {
      class: y(["flex", M.multiple ? "flex-col" : "justify-between"])
    }, [
      l("div", Oc, [
        f.value ? (o(), i("label", {
          key: 0,
          for: M.id,
          class: y(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${M.labelClass ?? ""}`)
        }, F(f.value), 11, Dc)) : x("", !0),
        l("div", Pc, [
          l("span", Bc, F(M.help ?? f.value), 1),
          l("input", Te({
            ref_key: "input",
            ref: s,
            type: "file",
            multiple: M.multiple,
            name: M.id,
            id: M.id,
            class: k.value,
            placeholder: p.value,
            "aria-invalid": m.value != null,
            "aria-describedby": `${M.id}-error`
          }, M.$attrs, { onChange: g }), null, 16, Hc),
          m.value ? (o(), i("div", Rc, zc)) : x("", !0)
        ]),
        m.value ? (o(), i("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${M.id}-error`
        }, F(m.value), 9, Nc)) : M.help ? (o(), i("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${M.id}-description`
        }, F(M.help), 9, Uc)) : x("", !0)
      ]),
      M.multiple ? (o(), i("div", Zc, [
        l("table", Wc, [
          (o(!0), i(Me, null, je(d.value, (L) => (o(), i("tr", null, [
            l("td", Gc, [
              l("div", {
                class: "flex w-full",
                title: P(L.filePath) ? "" : L.filePath
              }, [
                l("img", {
                  src: r[X(xt)(L.filePath)] || X(n)(X(xt)(L.filePath)),
                  class: y(["mr-2 h-8 w-8", se(L.filePath)]),
                  onError: (z) => r[X(xt)(L.filePath)] = X(a)(X(xt)(L.filePath))
                }, null, 42, Xc),
                P(L.filePath) ? (o(), i("span", e0, F(L.fileName), 1)) : (o(), i("a", {
                  key: 0,
                  href: X(n)(L.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, F(L.fileName), 9, Yc))
              ], 8, Jc)
            ]),
            l("td", t0, [
              L.contentLength && L.contentLength > 0 ? (o(), i("span", s0, F(X(hl)(L.contentLength)), 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), i("div", qc, [
        I.value ? (o(), i("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: P(I.value) ? "" : I.value
        }, [
          l("img", {
            onClick: b,
            class: y(["h-16 w-16", se(I.value)]),
            alt: `Current ${f.value ?? ""}`,
            src: u.value || X(n)(I.value),
            onError: j
          }, null, 42, Kc)
        ], 8, Qc)) : x("", !0)
      ]))
    ], 2));
  }
}), n0 = ["id"], o0 = ["for"], a0 = { class: "relative mt-1" }, r0 = ["id", "placeholder"], i0 = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), u0 = [
  i0
], d0 = ["id"], c0 = ["onMouseover", "onClick"], f0 = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    "clip-rule": "evenodd"
  })
], -1), v0 = [
  f0
], p0 = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, m0 = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), h0 = [
  m0
], g0 = ["id"], y0 = ["id"], b0 = /* @__PURE__ */ de({
  __name: "Autocomplete",
  props: {
    status: {},
    id: {},
    type: {},
    label: {},
    help: {},
    placeholder: {},
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean },
    options: { default: () => [] },
    modelValue: {},
    match: {},
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: s }) {
    const n = O(!1), a = e, r = s;
    t({ toggle: R });
    function u(A) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(A) >= 0;
    }
    const d = v(() => a.label ?? Pe(at(a.id)));
    let c = Qe("ApiState", void 0);
    const f = v(() => mt.call({ responseStatus: a.status ?? (c == null ? void 0 : c.error.value) }, a.id)), p = v(() => [ot.base, f.value ? ot.invalid : ot.valid]), $ = O(null), m = O(""), k = O(null), g = O(a.viewCount), b = O([]), P = v(() => m.value ? a.options.filter((te) => a.match(te, m.value)).slice(0, g.value) : a.options), I = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function se(A) {
      k.value = A, b.value.indexOf(A) > Math.floor(g.value * 0.9) && (g.value += a.viewCount, q());
    }
    const j = [",", `
`, "	"];
    function T(A) {
      var w;
      const te = (w = A.clipboardData) == null ? void 0 : w.getData("Text");
      M(te);
    }
    function M(A) {
      if (!A)
        return;
      const te = j.some((w) => A.includes(w));
      if (!a.multiple || !te) {
        const w = a.options.filter((N) => a.match(N, A));
        w.length == 1 && (ee(w[0]), n.value = !1, hs());
      } else if (te) {
        const w = new RegExp("\\r|\\n|\\t|,"), E = A.split(w).filter((h) => h.trim()).map((h) => a.options.find((C) => a.match(C, h))).filter((h) => !!h);
        if (E.length > 0) {
          m.value = "", n.value = !1, k.value = null;
          let h = Array.from(a.modelValue || []);
          E.forEach((C) => {
            u(C) ? h = h.filter((Y) => Y != C) : h.push(C);
          }), r("update:modelValue", h), hs();
        }
      }
    }
    function ie(A) {
      I.indexOf(A.code) || W();
    }
    function L(A) {
      if (!(A.shiftKey || A.ctrlKey || A.altKey)) {
        if (!n.value) {
          A.code == "ArrowDown" && (n.value = !0, k.value = b.value[0]);
          return;
        }
        if (A.code == "Escape")
          n.value && (A.stopPropagation(), n.value = !1);
        else if (A.code == "Tab")
          n.value = !1;
        else if (A.code == "Home")
          k.value = b.value[0], K();
        else if (A.code == "End")
          k.value = b.value[b.value.length - 1], K();
        else if (A.code == "ArrowDown") {
          if (!k.value)
            k.value = b.value[0];
          else {
            const te = b.value.indexOf(k.value);
            k.value = te + 1 < b.value.length ? b.value[te + 1] : b.value[0];
          }
          le();
        } else if (A.code == "ArrowUp") {
          if (!k.value)
            k.value = b.value[b.value.length - 1];
          else {
            const te = b.value.indexOf(k.value);
            k.value = te - 1 >= 0 ? b.value[te - 1] : b.value[b.value.length - 1];
          }
          le();
        } else
          A.code == "Enter" && (k.value ? (ee(k.value), a.multiple || (A.preventDefault(), hs())) : n.value = !1);
      }
    }
    const z = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function K() {
      setTimeout(() => {
        let A = _s(`#${a.id}-autocomplete li.active`);
        A && A.scrollIntoView(z);
      }, 0);
    }
    function le() {
      setTimeout(() => {
        let A = _s(`#${a.id}-autocomplete li.active`);
        A && ("scrollIntoViewIfNeeded" in A ? A.scrollIntoViewIfNeeded(z) : A.scrollIntoView(z));
      }, 0);
    }
    function R(A) {
      var te;
      n.value = A, A && (W(), (te = $.value) == null || te.focus());
    }
    function W() {
      n.value = !0, q();
    }
    function ee(A) {
      if (m.value = "", n.value = !1, a.multiple) {
        let te = Array.from(a.modelValue || []);
        u(A) ? te = te.filter((w) => w != A) : te.push(A), k.value = null, r("update:modelValue", te);
      } else {
        let te = A;
        a.modelValue == A && (te = null), r("update:modelValue", te);
      }
    }
    function q() {
      b.value = P.value;
    }
    return bt(m, q), (A, te) => (o(), i("div", {
      id: `${A.id}-autocomplete`
    }, [
      d.value ? (o(), i("label", {
        key: 0,
        for: `${A.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, F(d.value), 9, o0)) : x("", !0),
      l("div", a0, [
        Mt(l("input", Te({
          ref_key: "txtInput",
          ref: $,
          id: `${A.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": te[0] || (te[0] = (w) => m.value = w),
          class: p.value,
          placeholder: A.multiple || !A.modelValue ? A.placeholder : "",
          onFocus: W,
          onKeydown: L,
          onKeyup: ie,
          onClick: W,
          onPaste: T,
          required: !1
        }, A.$attrs), null, 16, r0), [
          [ko, m.value]
        ]),
        l("button", {
          type: "button",
          onClick: te[1] || (te[1] = (w) => R(!n.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, u0),
        n.value ? (o(), i("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: L,
          id: `${A.id}-options`,
          role: "listbox"
        }, [
          (o(!0), i(Me, null, je(b.value, (w) => (o(), i("li", {
            class: y([w === k.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (N) => se(w),
            onClick: (N) => ee(w),
            role: "option",
            tabindex: "-1"
          }, [
            U(A.$slots, "item", Rt(ks(w))),
            u(w) ? (o(), i("span", {
              key: 0,
              class: y(["absolute inset-y-0 right-0 flex items-center pr-4", w === k.value ? "text-white" : "text-indigo-600"])
            }, v0, 2)) : x("", !0)
          ], 42, c0))), 256))
        ], 40, d0)) : !A.multiple && A.modelValue ? (o(), i("div", {
          key: 1,
          onKeydown: L,
          onClick: te[2] || (te[2] = (w) => R(!n.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          U(A.$slots, "item", Rt(ks(A.modelValue)))
        ], 32)) : x("", !0),
        f.value ? (o(), i("div", p0, h0)) : x("", !0)
      ]),
      f.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${A.id}-error`
      }, F(f.value), 9, g0)) : A.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${A.id}-description`
      }, F(A.help), 9, y0)) : x("", !0)
    ], 8, n0));
  }
}), w0 = ["id", "name", "value"], k0 = { class: "block truncate" }, _0 = /* @__PURE__ */ de({
  __name: "Combobox",
  props: {
    id: {},
    modelValue: {},
    multiple: { type: Boolean },
    options: {},
    values: {},
    entries: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: s }) {
    const n = e;
    t({
      toggle(k) {
        var g;
        (g = d.value) == null || g.toggle(k);
      }
    });
    const a = s;
    function r(k) {
      a("update:modelValue", k);
    }
    const u = v(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), d = O();
    function c(k, g) {
      return !g || k.value.toLowerCase().includes(g.toLowerCase());
    }
    const f = v(() => n.entries || (n.values ? n.values.map((k) => ({ key: k, value: k })) : n.options ? Object.keys(n.options).map((k) => ({ key: k, value: n.options[k] })) : [])), p = O(u.value ? [] : null);
    function $() {
      let k = n.modelValue && typeof n.modelValue == "object" ? n.modelValue.key : n.modelValue;
      k == null || k === "" ? p.value = u.value ? [] : null : typeof k == "string" ? p.value = f.value.find((g) => g.key === k) || null : Array.isArray(k) && (p.value = f.value.filter((g) => k.includes(g.key)));
    }
    Ye($);
    const m = v(() => p.value == null ? "" : Array.isArray(p.value) ? p.value.map((k) => encodeURIComponent(k.key)).join(",") : p.value.key);
    return (k, g) => {
      const b = Z("Autocomplete");
      return o(), i(Me, null, [
        l("input", {
          type: "hidden",
          id: k.id,
          name: k.id,
          value: m.value
        }, null, 8, w0),
        ye(b, Te({
          ref_key: "input",
          ref: d,
          id: k.id,
          options: f.value,
          match: c,
          multiple: u.value
        }, k.$attrs, {
          modelValue: p.value,
          "onUpdate:modelValue": [
            g[0] || (g[0] = (P) => p.value = P),
            r
          ]
        }), {
          item: xe(({ key: P, value: I }) => [
            l("span", k0, F(I), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), $0 = /* @__PURE__ */ de({
  __name: "DynamicInput",
  props: {
    input: {},
    modelValue: {},
    api: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, a = v(() => s.input.type || "text"), r = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), u = v(() => ft(s.input, r)), d = O(a.value === "file" ? null : s.modelValue[s.input.id]);
    bt(d, () => {
      s.modelValue[s.input.id] = d.value, n("update:modelValue", s.modelValue);
    });
    const c = v(() => {
      const f = s.modelValue[s.input.id];
      if (s.input.type !== "file" || !f)
        return [];
      if (typeof f == "string")
        return [{ filePath: f, fileName: At(f, "/") }];
      if (!Array.isArray(f) && typeof f == "object")
        return f;
      if (Array.isArray(f)) {
        const p = [];
        return f.forEach(($) => {
          typeof $ == "string" ? p.push({ filePath: $, fileName: At($, "/") }) : typeof $ == "object" && p.push($);
        }), p;
      }
    });
    return (f, p) => {
      var j, T, M, ie, L, z, K, le, R, W, ee, q, A, te, w, N, E, h, C, Y, J, ne, D, V, fe, pe, ue, me;
      const $ = Z("SelectInput"), m = Z("CheckboxInput"), k = Z("TagInput"), g = Z("Combobox"), b = Z("FileInput"), P = Z("TextareaInput"), I = Z("MarkdownInput"), se = Z("TextInput");
      return X(G).component(a.value) ? (o(), ae(an(X(G).component(a.value)), Te({
        key: 0,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[0] || (p[0] = (S) => d.value = S),
        status: (j = f.api) == null ? void 0 : j.error,
        "input-class": (T = f.input.css) == null ? void 0 : T.input,
        "label-class": (M = f.input.css) == null ? void 0 : M.label
      }, u.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "select" ? (o(), ae($, Te({
        key: 1,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[1] || (p[1] = (S) => d.value = S),
        status: (ie = f.api) == null ? void 0 : ie.error,
        "input-class": (L = f.input.css) == null ? void 0 : L.input,
        "label-class": (z = f.input.css) == null ? void 0 : z.label,
        entries: f.input.allowableEntries,
        values: f.input.allowableValues
      }, u.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "checkbox" ? (o(), ae(m, Te({
        key: 2,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[2] || (p[2] = (S) => d.value = S),
        status: (K = f.api) == null ? void 0 : K.error,
        "input-class": (le = f.input.css) == null ? void 0 : le.input,
        "label-class": (R = f.input.css) == null ? void 0 : R.label
      }, u.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "tag" ? (o(), ae(k, Te({
        key: 3,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[3] || (p[3] = (S) => d.value = S),
        status: (W = f.api) == null ? void 0 : W.error,
        "input-class": (ee = f.input.css) == null ? void 0 : ee.input,
        "label-class": (q = f.input.css) == null ? void 0 : q.label,
        allowableValues: f.input.allowableValues,
        string: ((A = f.input.prop) == null ? void 0 : A.type) == "String"
      }, u.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : a.value == "combobox" ? (o(), ae(g, Te({
        key: 4,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[4] || (p[4] = (S) => d.value = S),
        status: (te = f.api) == null ? void 0 : te.error,
        "input-class": (w = f.input.css) == null ? void 0 : w.input,
        "label-class": (N = f.input.css) == null ? void 0 : N.label,
        entries: f.input.allowableEntries,
        values: f.input.allowableValues
      }, u.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "file" ? (o(), ae(b, Te({
        key: 5,
        id: f.input.id,
        status: (E = f.api) == null ? void 0 : E.error,
        modelValue: d.value,
        "onUpdate:modelValue": p[5] || (p[5] = (S) => d.value = S),
        "input-class": (h = f.input.css) == null ? void 0 : h.input,
        "label-class": (C = f.input.css) == null ? void 0 : C.label,
        files: c.value
      }, u.value), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : a.value == "textarea" ? (o(), ae(P, Te({
        key: 6,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[6] || (p[6] = (S) => d.value = S),
        status: (Y = f.api) == null ? void 0 : Y.error,
        "input-class": (J = f.input.css) == null ? void 0 : J.input,
        "label-class": (ne = f.input.css) == null ? void 0 : ne.label
      }, u.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "MarkdownInput" ? (o(), ae(I, Te({
        key: 7,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[7] || (p[7] = (S) => d.value = S),
        status: (D = f.api) == null ? void 0 : D.error,
        "input-class": (V = f.input.css) == null ? void 0 : V.input,
        "label-class": (fe = f.input.css) == null ? void 0 : fe.label
      }, u.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), ae(se, Te({
        key: 8,
        type: a.value,
        id: f.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": p[8] || (p[8] = (S) => d.value = S),
        status: (pe = f.api) == null ? void 0 : pe.error,
        "input-class": (ue = f.input.css) == null ? void 0 : ue.input,
        "label-class": (me = f.input.css) == null ? void 0 : me.label
      }, u.value), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), C0 = { class: "lookup-field" }, x0 = ["name", "value"], L0 = {
  key: 0,
  class: "flex justify-between"
}, V0 = ["for"], S0 = {
  key: 0,
  class: "flex items-center"
}, M0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, A0 = /* @__PURE__ */ l("span", { class: "sr-only" }, "Clear", -1), T0 = /* @__PURE__ */ l("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), F0 = [
  A0,
  T0
], I0 = {
  key: 1,
  class: "mt-1 relative"
}, j0 = { class: "w-full inline-flex truncate" }, O0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, D0 = /* @__PURE__ */ l("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ l("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ l("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ])
], -1), P0 = ["id"], B0 = ["id"], H0 = /* @__PURE__ */ de({
  __name: "LookupInput",
  props: {
    id: {},
    status: {},
    input: {},
    metadataType: {},
    modelValue: {},
    label: {},
    labelClass: {},
    help: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { config: s } = It(), { metadataApi: n } = lt(), a = e, r = t, u = v(() => a.id || a.input.id), d = v(() => a.label ?? Pe(at(u.value)));
    let c = Qe("ApiState", void 0);
    const f = Qe("client"), p = v(() => mt.call({ responseStatus: a.status ?? (c == null ? void 0 : c.error.value) }, u.value)), $ = O(""), m = O(""), k = v(() => _e(a.modelValue, u.value)), g = v(() => st(a.metadataType).find((j) => j.name.toLowerCase() == u.value.toLowerCase())), b = v(() => {
      var j, T, M;
      return ((M = rt((T = (j = g.value) == null ? void 0 : j.ref) == null ? void 0 : T.model)) == null ? void 0 : M.icon) || s.value.tableIcon;
    });
    let P;
    function I(j) {
      if (j) {
        if (P == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        P.openModal({ name: "ModalLookup", ref: j }, (T) => {
          if (console.debug("openModal", $.value, " -> ", T, Pt.setRefValue(j, T), j), T) {
            const M = _e(T, j.refId);
            $.value = Pt.setRefValue(j, T) || M;
            const ie = X(a.modelValue);
            ie[u.value] = M, r("update:modelValue", ie);
          }
        });
      }
    }
    function se() {
      a.modelValue[u.value] = null, $.value = "";
    }
    return Ye(async () => {
      var K, le;
      P = Qe("ModalProvider", void 0);
      const j = a.modelValue;
      a.modelValue[u.value] || (a.modelValue[u.value] = null);
      const T = g.value, M = T == null ? void 0 : T.ref;
      if (!M) {
        console.warn(`No RefInfo for property '${u.value}'`);
        return;
      }
      $.value = "";
      let ie = M.selfId == null ? _e(j, T.name) : _e(j, M.selfId);
      if (Xt(ie) && (ie = _e(j, M.refId)), ie == null)
        return;
      if (((K = n.value) == null ? void 0 : K.operations.find((R) => {
        var W;
        return ((W = R.dataModel) == null ? void 0 : W.name) == M.model;
      })) != null) {
        const R = _e(j, T.name);
        if (Xt(R))
          return;
        if ($.value = `${R}`, m.value = T.name, M.refLabel != null) {
          const W = st(a.metadataType).find((q) => q.type == M.model);
          W == null && console.warn(`Could not find ${M.model} Property on ${a.metadataType.name}`);
          const ee = W != null ? _e(j, W.name) : null;
          if (ee != null) {
            let q = _e(ee, M.refLabel);
            q && ($.value = `${q}`, Pt.setValue(M.model, ie, M.refLabel, q));
          } else {
            const q = ((le = T.attributes) == null ? void 0 : le.some((te) => te.name == "Computed")) == !0;
            let A = await Pt.getOrFetchValue(f, n.value, M.model, M.refId, M.refLabel, q, ie);
            $.value = A || `${M.model}: ${$.value}`;
          }
        }
      }
    }), (j, T) => {
      var ie;
      const M = Z("Icon");
      return o(), i("div", C0, [
        l("input", {
          type: "hidden",
          name: u.value,
          value: k.value
        }, null, 8, x0),
        d.value ? (o(), i("div", L0, [
          l("label", {
            for: u.value,
            class: y(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${j.labelClass ?? ""}`)
          }, F(d.value), 11, V0),
          k.value ? (o(), i("div", S0, [
            l("span", M0, F(k.value), 1),
            l("button", {
              onClick: se,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, F0)
          ])) : x("", !0)
        ])) : x("", !0),
        (ie = g.value) != null && ie.ref ? (o(), i("div", I0, [
          l("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: T[0] || (T[0] = (L) => I(g.value.ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            l("span", j0, [
              l("span", O0, [
                ye(M, {
                  class: "mr-1 w-5 h-5",
                  image: b.value
                }, null, 8, ["image"]),
                l("span", null, F($.value), 1)
              ])
            ]),
            D0
          ])
        ])) : x("", !0),
        p.value ? (o(), i("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${u.value}-error`
        }, F(p.value), 9, P0)) : j.help ? (o(), i("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${u.value}-description`
        }, F(j.help), 9, B0)) : x("", !0)
      ]);
    };
  }
}), R0 = /* @__PURE__ */ de({
  __name: "AutoFormFields",
  props: {
    modelValue: {},
    type: {},
    metaType: {},
    api: {},
    formLayout: {},
    configureField: {},
    configureFormLayout: {},
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: s }) {
    const n = e, a = s;
    t({ forceUpdate: r, props: n, updateValue: d });
    function r() {
      var T;
      const j = Be();
      (T = j == null ? void 0 : j.proxy) == null || T.$forceUpdate();
    }
    function u(j, T) {
      d(j.id, _e(T, j.id));
    }
    function d(j, T) {
      n.modelValue[j] = T, a("update:modelValue", n.modelValue), r();
    }
    const { metadataApi: c, apiOf: f, typeOf: p, typeOfRef: $, createFormLayout: m, Crud: k } = lt(), g = v(() => n.type || qt(n.modelValue)), b = v(() => n.metaType ?? p(g.value)), P = v(() => {
      var j, T;
      return $((T = (j = c.value) == null ? void 0 : j.operations.find((M) => M.request.name == g.value)) == null ? void 0 : T.dataModel) || b.value;
    });
    function I() {
      const j = b.value;
      if (!j) {
        if (n.formLayout) {
          const K = n.formLayout.map((le) => {
            const R = { name: le.id, type: Ia(le.type) }, W = Object.assign({ prop: R }, le);
            return n.configureField && n.configureField(W), W;
          });
          return n.configureFormLayout && n.configureFormLayout(K), K;
        }
        throw new Error(`MetadataType for ${g.value} not found`);
      }
      const T = st(j), M = P.value, ie = n.formLayout ? Array.from(n.formLayout) : m(j), L = [], z = f(j.name);
      return ie.forEach((K) => {
        var ee;
        const le = T.find((q) => q.name == K.name);
        if (K.ignore)
          return;
        const R = ((ee = M == null ? void 0 : M.properties) == null ? void 0 : ee.find((q) => {
          var A;
          return q.name.toLowerCase() == ((A = K.name) == null ? void 0 : A.toLowerCase());
        })) ?? le, W = Object.assign({ prop: R, op: z }, K);
        n.configureField && n.configureField(W), L.push(W);
      }), n.configureFormLayout && n.configureFormLayout(L), L;
    }
    const se = () => I().filter((j) => j.type != "hidden").map((j) => j.id);
    return (j, T) => {
      var z;
      const M = Z("ErrorSummary"), ie = Z("LookupInput"), L = Z("DynamicInput");
      return o(), i(Me, null, [
        j.hideSummary ? x("", !0) : (o(), ae(M, {
          key: 0,
          status: (z = j.api) == null ? void 0 : z.error,
          except: se()
        }, null, 8, ["status", "except"])),
        l("div", {
          class: y(j.flexClass)
        }, [
          l("div", {
            class: y(j.divideClass)
          }, [
            l("div", {
              class: y(j.spaceClass)
            }, [
              l("fieldset", {
                class: y(j.fieldsetClass)
              }, [
                (o(!0), i(Me, null, je(I(), (K) => {
                  var le, R, W;
                  return o(), i("div", {
                    key: K.id,
                    class: y([
                      "w-full",
                      ((le = K.css) == null ? void 0 : le.field) ?? (K.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (K.type == "checkbox" ? " flex items-center" : "")),
                      K.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((R = K.prop) == null ? void 0 : R.ref) != null && K.type != "file" && !K.prop.isPrimaryKey ? (o(), ae(ie, {
                      key: 0,
                      metadataType: P.value,
                      input: K,
                      modelValue: j.modelValue,
                      "onUpdate:modelValue": (ee) => u(K, ee),
                      status: (W = j.api) == null ? void 0 : W.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), ae(L, {
                      key: 1,
                      input: K,
                      modelValue: j.modelValue,
                      "onUpdate:modelValue": T[0] || (T[0] = (ee) => j.$emit("update:modelValue", ee)),
                      api: j.api
                    }, null, 8, ["input", "modelValue", "api"]))
                  ], 2);
                }), 128))
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 64);
    };
  }
});
function Ds(e) {
  const t = O(!1), s = O(), n = O(), a = e ?? Qe("client");
  function r({ message: g, errorCode: b, fieldName: P, errors: I }) {
    return b || (b = "Exception"), I || (I = []), s.value = P ? new Us({
      errorCode: b,
      message: g,
      errors: [new Gl({ fieldName: P, errorCode: b, message: g })]
    }) : new Us({ errorCode: b, message: g, errors: I });
  }
  function u({ fieldName: g, message: b, errorCode: P }) {
    if (P || (P = "Exception"), !s.value)
      r({ fieldName: g, message: b, errorCode: P });
    else {
      let I = new Us(s.value);
      I.errors = [
        ...(I.errors || []).filter((se) => {
          var j;
          return ((j = se.fieldName) == null ? void 0 : j.toLowerCase()) !== (g == null ? void 0 : g.toLowerCase());
        }),
        new Gl({ fieldName: g, message: b, errorCode: P })
      ], s.value = I;
    }
  }
  async function d(g, b, P) {
    t.value = !0;
    let I = await a.api(Dt(g), b, P);
    return t.value = !1, n.value = I.response, s.value = I.error, I;
  }
  async function c(g, b, P) {
    t.value = !0;
    let I = await a.apiVoid(Dt(g), b, P);
    return t.value = !1, n.value = I.response, s.value = I.error, I;
  }
  async function f(g, b, P, I) {
    t.value = !0;
    let se = await a.apiForm(Dt(g), b, P, I);
    return t.value = !1, n.value = se.response, s.value = se.error, se;
  }
  async function p(g, b, P, I) {
    t.value = !0;
    let se = await a.apiFormVoid(Dt(g), b, P, I);
    return t.value = !1, n.value = se.response, s.value = se.error, se;
  }
  async function $(g, b, P, I) {
    return gn(a, g, b, P, I);
  }
  function m(g, b) {
    const P = O(new Xe()), I = yn(async (se) => {
      P.value = await a.api(se);
    }, b == null ? void 0 : b.delayMs);
    return ws(async () => {
      const se = g(), j = cl(As(se));
      j && (P.value = new Xe({ response: j })), (b == null ? void 0 : b.delayMs) === 0 ? P.value = await a.api(se) : I(se);
    }), (async () => P.value = await a.api(g(), b == null ? void 0 : b.args, b == null ? void 0 : b.method))(), P;
  }
  let k = { setError: r, addFieldError: u, loading: t, error: s, api: d, apiVoid: c, apiForm: f, apiFormVoid: p, swr: $, swrEffect: m, unRefs: Dt, setRef: mn };
  return ss("ApiState", k), k;
}
const E0 = { key: 0 }, z0 = { class: "text-red-700" }, N0 = /* @__PURE__ */ l("b", null, "type", -1), U0 = { key: 0 }, q0 = { key: 2 }, Q0 = ["innerHTML"], K0 = /* @__PURE__ */ l("input", {
  type: "submit",
  class: "hidden"
}, null, -1), Z0 = { class: "flex justify-end" }, W0 = /* @__PURE__ */ l("div", null, null, -1), G0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, J0 = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), X0 = { class: "fixed inset-0 overflow-hidden" }, Y0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, ef = { class: "flex-1" }, tf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, sf = { class: "flex items-start justify-between space-x-3" }, lf = { class: "space-y-1" }, nf = { key: 0 }, of = { key: 2 }, af = ["innerHTML"], rf = { class: "flex h-7 items-center" }, uf = { class: "flex justify-end" }, df = /* @__PURE__ */ de({
  __name: "AutoForm",
  props: {
    type: {},
    modelValue: {},
    heading: {},
    subHeading: {},
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    formStyle: { default: "card" },
    metaType: {},
    configureField: {},
    configureFormLayout: {},
    panelClass: {},
    bodyClass: {},
    formClass: {},
    innerFormClass: {},
    headerClass: { default: "p-6" },
    buttonsClass: {},
    headingClass: {},
    subHeadingClass: {},
    submitLabel: { default: "Submit" },
    allowSubmit: {}
  },
  emits: ["success", "error", "update:modelValue", "done"],
  setup(e, { expose: t, emit: s }) {
    const n = e, a = s, r = O(), u = O(1), d = O();
    function c() {
      var fe;
      u.value++, ee.value = W();
      const V = Be();
      (fe = V == null ? void 0 : V.proxy) == null || fe.$forceUpdate();
    }
    async function f(V) {
      Object.assign(ee.value, V), c(), await St(() => null);
    }
    ss("ModalProvider", {
      openModal: k
    });
    const $ = O(), m = O();
    function k(V, fe) {
      $.value = V, m.value = fe;
    }
    async function g(V) {
      m.value && m.value(V), $.value = void 0, m.value = void 0;
    }
    const b = Ds(), { getTypeName: P } = bn(), { typeOf: I, Crud: se, createDto: j } = lt(), T = O(new Xe()), M = v(() => n.panelClass || Ee.panelClass(n.formStyle)), ie = v(() => n.formClass || n.formStyle == "card" ? "shadow sm:rounded-md" : Bt.formClass), L = v(() => n.headingClass || Ee.headingClass(n.formStyle)), z = v(() => n.subHeadingClass || Ee.subHeadingClass(n.formStyle)), K = v(() => typeof n.buttonsClass == "string" ? n.buttonsClass : Ee.buttonsClass), le = v(() => {
      var V;
      return n.type ? P(n.type) : (V = n.modelValue) != null && V.getTypeName ? n.modelValue.getTypeName() : null;
    }), R = v(() => n.metaType ?? I(le.value)), W = () => n.modelValue || te(), ee = O(W()), q = v(() => b.loading.value), A = v(() => {
      var V;
      return n.heading != null ? n.heading : ((V = R.value) == null ? void 0 : V.description) || Pe(le.value);
    });
    t({ forceUpdate: c, props: n, setModel: f, formFields: r, submit: N, close: ne, model: ee });
    function te() {
      return typeof n.type == "string" ? j(n.type) : n.type ? new n.type() : n.modelValue;
    }
    async function w(V) {
      if (!V || V.tagName != "FORM") {
        console.error("Not a valid form", V);
        return;
      }
      const fe = te();
      let pe = Ze(fe == null ? void 0 : fe.getMethod, (S) => typeof S == "function" ? S() : null) || "POST", ue = Ze(fe == null ? void 0 : fe.createResponse, (S) => typeof S == "function" ? S() : null) == null;
      const me = n.jsconfig;
      if (il.hasRequestBody(pe)) {
        let S = new fe.constructor(), ce = new FormData(V);
        ue ? T.value = await b.apiFormVoid(S, ce, { jsconfig: me }) : T.value = await b.apiForm(S, ce, { jsconfig: me });
      } else {
        let S = new fe.constructor(Bo(ee.value));
        console.debug("AutoForm.submit", S), ue ? T.value = await b.apiVoid(S, { jsconfig: me }) : T.value = await b.api(S, { jsconfig: me });
      }
      T.value.succeeded ? (a("success", T.value.response), ne()) : a("error", T.value.error);
    }
    async function N() {
      w(d.value);
    }
    function E(V) {
      a("update:modelValue", V);
    }
    function h() {
      a("done");
    }
    const C = O(!1), Y = O(""), J = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    bt(C, () => {
      yt(J, Y, C.value), C.value || setTimeout(h, 700);
    }), C.value = !0;
    function ne() {
      n.formStyle == "slideOver" ? C.value = !1 : h();
    }
    const D = (V) => {
      V.key === "Escape" && ne();
    };
    return Ye(() => window.addEventListener("keydown", D)), Ft(() => window.removeEventListener("keydown", D)), (V, fe) => {
      var Se, ge, H, Q, oe, be, $e, Ae, He, Fe, De;
      const pe = Z("AutoFormFields"), ue = Z("FormLoading"), me = Z("PrimaryButton"), S = Z("CloseButton"), ce = Z("SecondaryButton"), Ve = Z("ModalLookup");
      return o(), i("div", null, [
        R.value ? V.formStyle == "card" ? (o(), i("div", {
          key: 1,
          class: y(M.value)
        }, [
          l("form", {
            ref_key: "elForm",
            ref: d,
            onSubmit: fe[0] || (fe[0] = Ue((Oe) => w(Oe.target), ["prevent"])),
            autocomplete: "off",
            class: y(V.innerFormClass)
          }, [
            l("div", {
              class: y(V.bodyClass)
            }, [
              l("div", {
                class: y(V.headerClass)
              }, [
                V.$slots.heading ? (o(), i("div", U0, [
                  U(V.$slots, "heading")
                ])) : (o(), i("h3", {
                  key: 1,
                  class: y(L.value)
                }, F(A.value), 3)),
                V.$slots.subheading ? (o(), i("div", q0, [
                  U(V.$slots, "subheading")
                ])) : V.subHeading ? (o(), i("p", {
                  key: 3,
                  class: y(z.value)
                }, F(V.subHeading), 3)) : (Se = R.value) != null && Se.notes ? (o(), i("p", {
                  key: 4,
                  class: y(["notes", z.value]),
                  innerHTML: (ge = R.value) == null ? void 0 : ge.notes
                }, null, 10, Q0)) : x("", !0)
              ], 2),
              U(V.$slots, "header", {
                instance: (H = Be()) == null ? void 0 : H.exposed,
                model: ee.value
              }),
              K0,
              (o(), ae(pe, {
                ref_key: "formFields",
                ref: r,
                key: u.value,
                type: V.type,
                modelValue: ee.value,
                "onUpdate:modelValue": E,
                api: T.value,
                configureField: V.configureField,
                configureFormLayout: V.configureFormLayout
              }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
              U(V.$slots, "footer", {
                instance: (Q = Be()) == null ? void 0 : Q.exposed,
                model: ee.value
              })
            ], 2),
            U(V.$slots, "buttons", {}, () => {
              var Oe, We;
              return [
                l("div", {
                  class: y(K.value)
                }, [
                  l("div", null, [
                    U(V.$slots, "leftbuttons", {
                      instance: (Oe = Be()) == null ? void 0 : Oe.exposed,
                      model: ee.value
                    })
                  ]),
                  l("div", null, [
                    V.showLoading && q.value ? (o(), ae(ue, { key: 0 })) : x("", !0)
                  ]),
                  l("div", Z0, [
                    W0,
                    ye(me, {
                      disabled: V.allowSubmit ? !V.allowSubmit(ee.value) : !1
                    }, {
                      default: xe(() => [
                        ke(F(V.submitLabel), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    U(V.$slots, "rightbuttons", {
                      instance: (We = Be()) == null ? void 0 : We.exposed,
                      model: ee.value
                    })
                  ])
                ], 2)
              ];
            })
          ], 34)
        ], 2)) : (o(), i("div", G0, [
          J0,
          l("div", X0, [
            l("div", {
              onMousedown: ne,
              class: "absolute inset-0 overflow-hidden"
            }, [
              l("div", {
                onMousedown: fe[2] || (fe[2] = Ue(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                l("div", {
                  class: y(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", Y.value])
                }, [
                  l("form", {
                    ref_key: "elForm",
                    ref: d,
                    class: y(ie.value),
                    onSubmit: fe[1] || (fe[1] = Ue((Oe) => w(Oe.target), ["prevent"]))
                  }, [
                    l("div", Y0, [
                      l("div", ef, [
                        l("div", tf, [
                          l("div", sf, [
                            l("div", lf, [
                              V.$slots.heading ? (o(), i("div", nf, [
                                U(V.$slots, "heading")
                              ])) : (o(), i("h3", {
                                key: 1,
                                class: y(L.value)
                              }, F(A.value), 3)),
                              V.$slots.subheading ? (o(), i("div", of, [
                                U(V.$slots, "subheading")
                              ])) : V.subHeading ? (o(), i("p", {
                                key: 3,
                                class: y(z.value)
                              }, F(V.subHeading), 3)) : (oe = R.value) != null && oe.notes ? (o(), i("p", {
                                key: 4,
                                class: y(["notes", z.value]),
                                innerHTML: (be = R.value) == null ? void 0 : be.notes
                              }, null, 10, af)) : x("", !0)
                            ]),
                            l("div", rf, [
                              ye(S, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ne
                              })
                            ])
                          ])
                        ]),
                        U(V.$slots, "header", {
                          instance: ($e = Be()) == null ? void 0 : $e.exposed,
                          model: ee.value
                        }),
                        (o(), ae(pe, {
                          ref_key: "formFields",
                          ref: r,
                          key: u.value,
                          type: V.type,
                          modelValue: ee.value,
                          "onUpdate:modelValue": E,
                          api: T.value,
                          configureField: V.configureField,
                          configureFormLayout: V.configureFormLayout
                        }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
                        U(V.$slots, "footer", {
                          instance: (Ae = Be()) == null ? void 0 : Ae.exposed,
                          model: ee.value
                        })
                      ])
                    ]),
                    l("div", {
                      class: y(K.value)
                    }, [
                      l("div", null, [
                        U(V.$slots, "leftbuttons", {
                          instance: (He = Be()) == null ? void 0 : He.exposed,
                          model: ee.value
                        })
                      ]),
                      l("div", null, [
                        V.showLoading && q.value ? (o(), ae(ue, { key: 0 })) : x("", !0)
                      ]),
                      l("div", uf, [
                        ye(ce, {
                          onClick: ne,
                          disabled: q.value
                        }, {
                          default: xe(() => [
                            ke("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        ye(me, {
                          class: "ml-4",
                          disabled: V.allowSubmit ? !V.allowSubmit(ee.value) : !1
                        }, {
                          default: xe(() => [
                            ke(F(V.submitLabel), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        U(V.$slots, "rightbuttons", {
                          instance: (Fe = Be()) == null ? void 0 : Fe.exposed,
                          model: ee.value
                        })
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), i("div", E0, [
          l("p", z0, [
            ke("Could not create form for unknown "),
            N0,
            ke(" " + F(le.value), 1)
          ])
        ])),
        ((De = $.value) == null ? void 0 : De.name) == "ModalLookup" && $.value.ref ? (o(), ae(Ve, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : x("", !0)
      ]);
    };
  }
}), cf = { key: 0 }, ff = { class: "text-red-700" }, vf = /* @__PURE__ */ l("b", null, "type", -1), pf = { key: 0 }, mf = { key: 2 }, hf = ["innerHTML"], gf = { class: "flex justify-end" }, yf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, bf = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), wf = { class: "fixed inset-0 overflow-hidden" }, kf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, _f = { class: "flex-1" }, $f = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Cf = { class: "flex items-start justify-between space-x-3" }, xf = { class: "space-y-1" }, Lf = { key: 0 }, Vf = { key: 2 }, Sf = ["innerHTML"], Mf = { class: "flex h-7 items-center" }, Af = { class: "flex justify-end" }, Tf = /* @__PURE__ */ de({
  __name: "AutoCreateForm",
  props: {
    type: {},
    formStyle: { default: "slideOver" },
    panelClass: {},
    formClass: {},
    headingClass: {},
    subHeadingClass: {},
    buttonsClass: {},
    heading: {},
    subHeading: {},
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    configureField: {},
    configureFormLayout: {}
  },
  emits: ["done", "save", "error"],
  setup(e, { expose: t, emit: s }) {
    const n = e, a = s, r = O(), u = O(1);
    function d() {
      var V, fe;
      u.value++, (V = r.value) == null || V.forceUpdate();
      const D = Be();
      (fe = D == null ? void 0 : D.proxy) == null || fe.$forceUpdate();
    }
    function c(D) {
      Object.assign(L.value, D), d();
    }
    function f(D) {
    }
    ss("ModalProvider", {
      openModal: k
    });
    const $ = O(), m = O();
    function k(D, V) {
      $.value = D, m.value = V;
    }
    async function g(D) {
      m.value && m.value(D), $.value = void 0, m.value = void 0;
    }
    const { typeOf: b, typeProperties: P, Crud: I, createDto: se, formValues: j } = lt(), T = v(() => qt(n.type)), M = v(() => b(T.value)), L = O((() => typeof n.type == "string" ? se(n.type) : n.type ? new n.type() : null)());
    t({ forceUpdate: d, props: n, setModel: c, formFields: r, model: L });
    const z = v(() => n.panelClass || Ee.panelClass(n.formStyle)), K = v(() => n.formClass || Ee.formClass(n.formStyle)), le = v(() => n.headingClass || Ee.headingClass(n.formStyle)), R = v(() => n.subHeadingClass || Ee.subHeadingClass(n.formStyle)), W = v(() => n.buttonsClass || Ee.buttonsClass), ee = v(() => I.model(M.value)), q = v(() => {
      var D;
      return n.heading || ((D = b(T.value)) == null ? void 0 : D.description) || (ee.value ? `New ${Pe(ee.value)}` : Pe(T.value));
    }), A = O(new Xe());
    let te = Ds(), w = v(() => te.loading.value);
    G.interceptors.has("AutoCreateForm.new") && G.interceptors.invoke("AutoCreateForm.new", { props: n, model: L });
    async function N(D) {
      var ue, me;
      let V = D.target;
      if (!n.autosave) {
        a("save", new L.value.constructor(j(V, P(M.value))));
        return;
      }
      let fe = Ze((ue = L.value) == null ? void 0 : ue.getMethod, (S) => typeof S == "function" ? S() : null) || "POST", pe = Ze((me = L.value) == null ? void 0 : me.createResponse, (S) => typeof S == "function" ? S() : null) == null;
      if (il.hasRequestBody(fe)) {
        let S = new L.value.constructor(), ce = new FormData(V);
        pe ? A.value = await te.apiFormVoid(S, ce, { jsconfig: "eccn" }) : A.value = await te.apiForm(S, ce, { jsconfig: "eccn" });
      } else {
        let S = j(V, P(M.value)), ce = new L.value.constructor(S);
        pe ? A.value = await te.apiVoid(ce, { jsconfig: "eccn" }) : A.value = await te.api(ce, { jsconfig: "eccn" });
      }
      A.value.succeeded ? (V.reset(), a("save", A.value.response)) : a("error", A.value.error);
    }
    function E() {
      a("done");
    }
    const h = O(!1), C = O(""), Y = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    bt(h, () => {
      yt(Y, C, h.value), h.value || setTimeout(E, 700);
    }), h.value = !0;
    function J() {
      n.formStyle == "slideOver" ? h.value = !1 : E();
    }
    const ne = (D) => {
      D.key === "Escape" && J();
    };
    return Ye(() => window.addEventListener("keydown", ne)), Ft(() => window.removeEventListener("keydown", ne)), (D, V) => {
      var Ve, Se, ge, H, Q, oe, be, $e, Ae;
      const fe = Z("AutoFormFields"), pe = Z("FormLoading"), ue = Z("SecondaryButton"), me = Z("PrimaryButton"), S = Z("CloseButton"), ce = Z("ModalLookup");
      return o(), i("div", null, [
        M.value ? D.formStyle == "card" ? (o(), i("div", {
          key: 1,
          class: y(z.value)
        }, [
          l("form", {
            onSubmit: Ue(N, ["prevent"])
          }, [
            l("div", {
              class: y(K.value)
            }, [
              l("div", null, [
                D.$slots.heading ? (o(), i("div", pf, [
                  U(D.$slots, "heading")
                ])) : (o(), i("h3", {
                  key: 1,
                  class: y(le.value)
                }, F(q.value), 3)),
                D.$slots.subheading ? (o(), i("div", mf, [
                  U(D.$slots, "subheading")
                ])) : D.subHeading ? (o(), i("p", {
                  key: 3,
                  class: y(R.value)
                }, F(D.subHeading), 3)) : (Ve = M.value) != null && Ve.notes ? (o(), i("p", {
                  key: 4,
                  class: y(["notes", R.value]),
                  innerHTML: (Se = M.value) == null ? void 0 : Se.notes
                }, null, 10, hf)) : x("", !0)
              ]),
              U(D.$slots, "header", {
                formInstance: (ge = Be()) == null ? void 0 : ge.exposed,
                model: L.value
              }),
              (o(), ae(fe, {
                ref_key: "formFields",
                ref: r,
                key: u.value,
                modelValue: L.value,
                "onUpdate:modelValue": f,
                api: A.value,
                configureField: D.configureField,
                configureFormLayout: D.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              U(D.$slots, "footer", {
                formInstance: (H = Be()) == null ? void 0 : H.exposed,
                model: L.value
              })
            ], 2),
            l("div", {
              class: y(W.value)
            }, [
              l("div", null, [
                D.showLoading && X(w) ? (o(), ae(pe, { key: 0 })) : x("", !0)
              ]),
              l("div", gf, [
                D.showCancel ? (o(), ae(ue, {
                  key: 0,
                  onClick: J,
                  disabled: X(w)
                }, {
                  default: xe(() => [
                    ke("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : x("", !0),
                ye(me, {
                  type: "submit",
                  class: "ml-4",
                  disabled: X(w)
                }, {
                  default: xe(() => [
                    ke("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), i("div", yf, [
          bf,
          l("div", wf, [
            l("div", {
              onMousedown: J,
              class: "absolute inset-0 overflow-hidden"
            }, [
              l("div", {
                onMousedown: V[0] || (V[0] = Ue(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                l("div", {
                  class: y(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", C.value])
                }, [
                  l("form", {
                    class: y(K.value),
                    onSubmit: Ue(N, ["prevent"])
                  }, [
                    l("div", kf, [
                      l("div", _f, [
                        l("div", $f, [
                          l("div", Cf, [
                            l("div", xf, [
                              D.$slots.heading ? (o(), i("div", Lf, [
                                U(D.$slots, "heading")
                              ])) : (o(), i("h3", {
                                key: 1,
                                class: y(le.value)
                              }, F(q.value), 3)),
                              D.$slots.subheading ? (o(), i("div", Vf, [
                                U(D.$slots, "subheading")
                              ])) : D.subHeading ? (o(), i("p", {
                                key: 3,
                                class: y(R.value)
                              }, F(D.subHeading), 3)) : (Q = M.value) != null && Q.notes ? (o(), i("p", {
                                key: 4,
                                class: y(["notes", R.value]),
                                innerHTML: (oe = M.value) == null ? void 0 : oe.notes
                              }, null, 10, Sf)) : x("", !0)
                            ]),
                            l("div", Mf, [
                              ye(S, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: J
                              })
                            ])
                          ])
                        ]),
                        U(D.$slots, "header", {
                          formInstance: (be = Be()) == null ? void 0 : be.exposed,
                          model: L.value
                        }),
                        (o(), ae(fe, {
                          ref_key: "formFields",
                          ref: r,
                          key: u.value,
                          modelValue: L.value,
                          "onUpdate:modelValue": f,
                          api: A.value,
                          configureField: D.configureField,
                          configureFormLayout: D.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        U(D.$slots, "footer", {
                          formInstance: ($e = Be()) == null ? void 0 : $e.exposed,
                          model: L.value
                        })
                      ])
                    ]),
                    l("div", {
                      class: y(W.value)
                    }, [
                      l("div", null, [
                        D.showLoading && X(w) ? (o(), ae(pe, { key: 0 })) : x("", !0)
                      ]),
                      l("div", Af, [
                        D.showCancel ? (o(), ae(ue, {
                          key: 0,
                          onClick: J,
                          disabled: X(w)
                        }, {
                          default: xe(() => [
                            ke("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : x("", !0),
                        ye(me, {
                          type: "submit",
                          class: "ml-4",
                          disabled: X(w)
                        }, {
                          default: xe(() => [
                            ke("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), i("div", cf, [
          l("p", ff, [
            ke("Could not create form for unknown "),
            vf,
            ke(" " + F(T.value), 1)
          ])
        ])),
        ((Ae = $.value) == null ? void 0 : Ae.name) == "ModalLookup" && $.value.ref ? (o(), ae(ce, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : x("", !0)
      ]);
    };
  }
}), Ff = { key: 0 }, If = { class: "text-red-700" }, jf = /* @__PURE__ */ l("b", null, "type", -1), Of = { key: 0 }, Df = { key: 2 }, Pf = ["innerHTML"], Bf = { class: "flex justify-end" }, Hf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, Rf = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), Ef = { class: "fixed inset-0 overflow-hidden" }, zf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Nf = { class: "flex-1" }, Uf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, qf = { class: "flex items-start justify-between space-x-3" }, Qf = { class: "space-y-1" }, Kf = { key: 0 }, Zf = { key: 2 }, Wf = ["innerHTML"], Gf = { class: "flex h-7 items-center" }, Jf = { class: "flex justify-end" }, Xf = /* @__PURE__ */ de({
  __name: "AutoEditForm",
  props: {
    modelValue: {},
    type: {},
    deleteType: {},
    formStyle: { default: "slideOver" },
    panelClass: {},
    formClass: {},
    headingClass: {},
    subHeadingClass: {},
    heading: {},
    subHeading: {},
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    configureField: {},
    configureFormLayout: {}
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { expose: t, emit: s }) {
    const n = e, a = s, r = O(), u = O(1);
    function d() {
      var ce;
      u.value++, le.value = K();
      const S = Be();
      (ce = S == null ? void 0 : S.proxy) == null || ce.$forceUpdate();
    }
    function c(S) {
      Object.assign(le.value, S);
    }
    function f(S) {
    }
    ss("ModalProvider", {
      openModal: k
    });
    const $ = O(), m = O();
    function k(S, ce) {
      $.value = S, m.value = ce;
    }
    async function g(S) {
      m.value && m.value(S), $.value = void 0, m.value = void 0;
    }
    const { typeOf: b, apiOf: P, typeProperties: I, createFormLayout: se, getPrimaryKey: j, Crud: T, createDto: M, formValues: ie } = lt(), L = v(() => qt(n.type)), z = v(() => b(L.value)), K = () => typeof n.type == "string" ? M(n.type, ys(n.modelValue)) : n.type ? new n.type(ys(n.modelValue)) : null, le = O(K());
    t({ forceUpdate: d, props: n, setModel: c, formFields: r, model: le });
    const R = v(() => n.panelClass || Ee.panelClass(n.formStyle)), W = v(() => n.formClass || Ee.formClass(n.formStyle)), ee = v(() => n.headingClass || Ee.headingClass(n.formStyle)), q = v(() => n.subHeadingClass || Ee.subHeadingClass(n.formStyle)), A = v(() => T.model(z.value)), te = v(() => {
      var S;
      return n.heading || ((S = b(L.value)) == null ? void 0 : S.description) || (A.value ? `Update ${Pe(A.value)}` : Pe(L.value));
    }), w = O(new Xe());
    let N = Object.assign({}, ys(n.modelValue));
    G.interceptors.has("AutoEditForm.new") && G.interceptors.invoke("AutoEditForm.new", { props: n, model: le, origModel: N });
    let E = Ds(), h = v(() => E.loading.value);
    const C = () => Ze(b(T.model(z.value)), (S) => j(S));
    function Y(S) {
      const { op: ce, prop: Ve } = S;
      ce && (T.isPatch(ce) || T.isUpdate(ce)) && (S.disabled = Ve == null ? void 0 : Ve.isPrimaryKey), n.configureField && n.configureField(S);
    }
    async function J(S) {
      var H, Q;
      let ce = S.target;
      if (!n.autosave) {
        a("save", new le.value.constructor(ie(ce, I(z.value))));
        return;
      }
      let Ve = Ze((H = le.value) == null ? void 0 : H.getMethod, (oe) => typeof oe == "function" ? oe() : null) || "POST", Se = Ze((Q = le.value) == null ? void 0 : Q.createResponse, (oe) => typeof oe == "function" ? oe() : null) == null, ge = C();
      if (il.hasRequestBody(Ve)) {
        let oe = new le.value.constructor(), be = _e(n.modelValue, ge.name), $e = new FormData(ce);
        ge && !Array.from($e.keys()).some((De) => De.toLowerCase() == ge.name.toLowerCase()) && $e.append(ge.name, be);
        let Ae = [];
        const He = L.value && P(L.value);
        if (He && T.isPatch(He)) {
          let De = se(z.value), Oe = {};
          if (ge && (Oe[ge.name] = be), De.forEach((Re) => {
            let it = Re.id, jt = _e(N, it);
            if (ge && ge.name.toLowerCase() === it.toLowerCase())
              return;
            let ht = $e.get(it);
            G.interceptors.has("AutoEditForm.save.formLayout") && G.interceptors.invoke("AutoEditForm.save.formLayout", { origValue: jt, formLayout: De, input: Re, newValue: ht });
            let as = ht != null, rs = Re.type === "checkbox" ? as !== !!jt : Re.type === "file" ? as : ht != jt;
            !ht && !jt && (rs = !1), rs && (ht ? Oe[it] = ht : Re.type !== "file" && Ae.push(it));
          }), G.interceptors.has("AutoEditForm.save") && G.interceptors.invoke("AutoEditForm.save", { origModel: N, formLayout: De, dirtyValues: Oe }), Array.from($e.keys()).filter((Re) => !Oe[Re]).forEach((Re) => $e.delete(Re)), Array.from($e.keys()).filter((Re) => Re.toLowerCase() != ge.name.toLowerCase()).length == 0 && Ae.length == 0) {
            ue();
            return;
          }
        }
        const Fe = Ae.length > 0 ? { jsconfig: "eccn", reset: Ae } : { jsconfig: "eccn" };
        Se ? w.value = await E.apiFormVoid(oe, $e, Fe) : w.value = await E.apiForm(oe, $e, Fe);
      } else {
        let oe = ie(ce, I(z.value));
        ge && !_e(oe, ge.name) && (oe[ge.name] = _e(n.modelValue, ge.name));
        let be = new le.value.constructor(oe);
        Se ? w.value = await E.apiVoid(be, { jsconfig: "eccn" }) : w.value = await E.api(be, { jsconfig: "eccn" });
      }
      w.value.succeeded ? (ce.reset(), a("save", w.value.response)) : a("error", w.value.error);
    }
    async function ne(S) {
      let ce = C();
      const Ve = ce ? _e(n.modelValue, ce.name) : null;
      if (!Ve) {
        console.error(`Could not find Primary Key for Type ${L.value} (${A.value})`);
        return;
      }
      const Se = { [ce.name]: Ve }, ge = typeof n.deleteType == "string" ? M(n.deleteType, Se) : n.deleteType ? new n.deleteType(Se) : null;
      Ze(ge.createResponse, (Q) => typeof Q == "function" ? Q() : null) == null ? w.value = await E.apiVoid(ge) : w.value = await E.api(ge), w.value.succeeded ? a("delete", w.value.response) : a("error", w.value.error);
    }
    function D() {
      a("done");
    }
    const V = O(!1), fe = O(""), pe = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    bt(V, () => {
      yt(pe, fe, V.value), V.value || setTimeout(D, 700);
    }), V.value = !0;
    function ue() {
      n.formStyle == "slideOver" ? V.value = !1 : D();
    }
    const me = (S) => {
      S.key === "Escape" && ue();
    };
    return Ye(() => window.addEventListener("keydown", me)), Ft(() => window.removeEventListener("keydown", me)), (S, ce) => {
      var $e, Ae, He, Fe, De, Oe, We, Re, it;
      const Ve = Z("AutoFormFields"), Se = Z("ConfirmDelete"), ge = Z("FormLoading"), H = Z("SecondaryButton"), Q = Z("PrimaryButton"), oe = Z("CloseButton"), be = Z("ModalLookup");
      return o(), i("div", null, [
        z.value ? S.formStyle == "card" ? (o(), i("div", {
          key: 1,
          class: y(R.value)
        }, [
          l("form", {
            onSubmit: Ue(J, ["prevent"])
          }, [
            l("div", {
              class: y(W.value)
            }, [
              l("div", null, [
                S.$slots.heading ? (o(), i("div", Of, [
                  U(S.$slots, "heading")
                ])) : (o(), i("h3", {
                  key: 1,
                  class: y(ee.value)
                }, F(te.value), 3)),
                S.$slots.subheading ? (o(), i("div", Df, [
                  U(S.$slots, "subheading")
                ])) : S.subHeading ? (o(), i("p", {
                  key: 3,
                  class: y(q.value)
                }, F(S.subHeading), 3)) : ($e = z.value) != null && $e.notes ? (o(), i("p", {
                  key: 4,
                  class: y(["notes", q.value]),
                  innerHTML: (Ae = z.value) == null ? void 0 : Ae.notes
                }, null, 10, Pf)) : x("", !0)
              ]),
              U(S.$slots, "header", {
                formInstance: (He = Be()) == null ? void 0 : He.exposed,
                model: le.value
              }),
              (o(), ae(Ve, {
                ref_key: "formFields",
                ref: r,
                key: u.value,
                modelValue: le.value,
                "onUpdate:modelValue": f,
                api: w.value,
                configureField: S.configureField,
                configureFormLayout: S.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              U(S.$slots, "footer", {
                formInstance: (Fe = Be()) == null ? void 0 : Fe.exposed,
                model: le.value
              })
            ], 2),
            l("div", {
              class: y(X(Ee).buttonsClass)
            }, [
              l("div", null, [
                S.deleteType ? (o(), ae(Se, {
                  key: 0,
                  onDelete: ne
                })) : x("", !0)
              ]),
              l("div", null, [
                S.showLoading && X(h) ? (o(), ae(ge, { key: 0 })) : x("", !0)
              ]),
              l("div", Bf, [
                ye(H, {
                  onClick: ue,
                  disabled: X(h)
                }, {
                  default: xe(() => [
                    ke("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                ye(Q, {
                  type: "submit",
                  class: "ml-4",
                  disabled: X(h)
                }, {
                  default: xe(() => [
                    ke("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), i("div", Hf, [
          Rf,
          l("div", Ef, [
            l("div", {
              onMousedown: ue,
              class: "absolute inset-0 overflow-hidden"
            }, [
              l("div", {
                onMousedown: ce[0] || (ce[0] = Ue(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                l("div", {
                  class: y(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", fe.value])
                }, [
                  l("form", {
                    class: y(W.value),
                    onSubmit: Ue(J, ["prevent"])
                  }, [
                    l("div", zf, [
                      l("div", Nf, [
                        l("div", Uf, [
                          l("div", qf, [
                            l("div", Qf, [
                              S.$slots.heading ? (o(), i("div", Kf, [
                                U(S.$slots, "heading")
                              ])) : (o(), i("h3", {
                                key: 1,
                                class: y(ee.value)
                              }, F(te.value), 3)),
                              S.$slots.subheading ? (o(), i("div", Zf, [
                                U(S.$slots, "subheading")
                              ])) : S.subHeading ? (o(), i("p", {
                                key: 3,
                                class: y(q.value)
                              }, F(S.subHeading), 3)) : (De = z.value) != null && De.notes ? (o(), i("p", {
                                key: 4,
                                class: y(["notes", q.value]),
                                innerHTML: (Oe = z.value) == null ? void 0 : Oe.notes
                              }, null, 10, Wf)) : x("", !0)
                            ]),
                            l("div", Gf, [
                              ye(oe, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ue
                              })
                            ])
                          ])
                        ]),
                        U(S.$slots, "header", {
                          formInstance: (We = Be()) == null ? void 0 : We.exposed,
                          model: le.value
                        }),
                        (o(), ae(Ve, {
                          ref_key: "formFields",
                          ref: r,
                          key: u.value,
                          modelValue: le.value,
                          "onUpdate:modelValue": f,
                          api: w.value,
                          configureField: Y,
                          configureFormLayout: S.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        U(S.$slots, "footer", {
                          formInstance: (Re = Be()) == null ? void 0 : Re.exposed,
                          model: le.value
                        })
                      ])
                    ]),
                    l("div", {
                      class: y(X(Ee).buttonsClass)
                    }, [
                      l("div", null, [
                        S.deleteType ? (o(), ae(Se, {
                          key: 0,
                          onDelete: ne
                        })) : x("", !0)
                      ]),
                      l("div", null, [
                        S.showLoading && X(h) ? (o(), ae(ge, { key: 0 })) : x("", !0)
                      ]),
                      l("div", Jf, [
                        ye(H, {
                          onClick: ue,
                          disabled: X(h)
                        }, {
                          default: xe(() => [
                            ke("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        ye(Q, {
                          type: "submit",
                          class: "ml-4",
                          disabled: X(h)
                        }, {
                          default: xe(() => [
                            ke("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), i("div", Ff, [
          l("p", If, [
            ke("Could not create form for unknown "),
            jf,
            ke(" " + F(L.value), 1)
          ])
        ])),
        ((it = $.value) == null ? void 0 : it.name) == "ModalLookup" && $.value.ref ? (o(), ae(be, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : x("", !0)
      ]);
    };
  }
}), Yf = { key: 0 }, ev = { class: "text-red-700" }, tv = /* @__PURE__ */ l("b", null, "type", -1), sv = { key: 0 }, lv = { key: 2 }, nv = ["innerHTML"], ov = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, av = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), rv = { class: "fixed inset-0 overflow-hidden" }, iv = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, uv = { class: "flex-1" }, dv = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, cv = { class: "flex items-start justify-between space-x-3" }, fv = { class: "space-y-1" }, vv = { key: 0 }, pv = { key: 2 }, mv = ["innerHTML"], hv = { class: "flex h-7 items-center" }, gv = /* @__PURE__ */ de({
  __name: "AutoViewForm",
  props: {
    model: {},
    apis: {},
    typeName: {},
    done: {},
    formStyle: { default: "slideOver" },
    panelClass: {},
    formClass: {},
    headingClass: {},
    subHeadingClass: {},
    heading: {},
    subHeading: {}
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const s = e, { typeOf: n } = lt(), a = v(() => s.typeName ?? s.apis.dataModel.name), r = v(() => n(a.value)), u = v(() => s.panelClass || Ee.panelClass(s.formStyle)), d = v(() => s.formClass || Ee.formClass(s.formStyle)), c = v(() => s.headingClass || Ee.headingClass(s.formStyle)), f = v(() => s.subHeadingClass || Ee.subHeadingClass(s.formStyle)), p = v(() => {
      var I, se;
      return s.heading || ((I = n(a.value)) == null ? void 0 : I.description) || ((se = s.model) != null && se.id ? `${Pe(a.value)} ${s.model.id}` : "View " + Pe(a.value));
    });
    G.interceptors.has("AutoViewForm.new") && G.interceptors.invoke("AutoViewForm.new", { props: s });
    function $() {
      s.done && s.done();
    }
    const m = O(!1), k = O(""), g = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    bt(m, () => {
      yt(g, k, m.value), m.value || setTimeout($, 700);
    }), m.value = !0;
    function b() {
      s.formStyle == "slideOver" ? m.value = !1 : $();
    }
    const P = (I) => {
      I.key === "Escape" && b();
    };
    return Ye(() => window.addEventListener("keydown", P)), Ft(() => window.removeEventListener("keydown", P)), (I, se) => {
      var M, ie, L, z;
      const j = Z("MarkupModel"), T = Z("CloseButton");
      return o(), i("div", null, [
        a.value ? I.formStyle == "card" ? (o(), i("div", {
          key: 1,
          class: y(u.value)
        }, [
          l("div", {
            class: y(d.value)
          }, [
            l("div", null, [
              I.$slots.heading ? (o(), i("div", sv, [
                U(I.$slots, "heading")
              ])) : (o(), i("h3", {
                key: 1,
                class: y(c.value)
              }, F(p.value), 3)),
              I.$slots.subheading ? (o(), i("div", lv, [
                U(I.$slots, "subheading")
              ])) : I.subHeading ? (o(), i("p", {
                key: 3,
                class: y(f.value)
              }, F(I.subHeading), 3)) : (M = r.value) != null && M.notes ? (o(), i("p", {
                key: 4,
                class: y(["notes", f.value]),
                innerHTML: (ie = r.value) == null ? void 0 : ie.notes
              }, null, 10, nv)) : x("", !0)
            ]),
            ye(j, { value: I.model }, null, 8, ["value"])
          ], 2)
        ], 2)) : (o(), i("div", ov, [
          av,
          l("div", rv, [
            l("div", {
              onMousedown: b,
              class: "absolute inset-0 overflow-hidden"
            }, [
              l("div", {
                onMousedown: se[0] || (se[0] = Ue(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                l("div", {
                  class: y(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", k.value])
                }, [
                  l("div", {
                    class: y(d.value)
                  }, [
                    l("div", iv, [
                      l("div", uv, [
                        l("div", dv, [
                          l("div", cv, [
                            l("div", fv, [
                              I.$slots.heading ? (o(), i("div", vv, [
                                U(I.$slots, "heading")
                              ])) : (o(), i("h3", {
                                key: 1,
                                class: y(c.value)
                              }, F(p.value), 3)),
                              I.$slots.subheading ? (o(), i("div", pv, [
                                U(I.$slots, "subheading")
                              ])) : I.subHeading ? (o(), i("p", {
                                key: 3,
                                class: y(f.value)
                              }, F(I.subHeading), 3)) : (L = r.value) != null && L.notes ? (o(), i("p", {
                                key: 4,
                                class: y(["notes", f.value]),
                                innerHTML: (z = r.value) == null ? void 0 : z.notes
                              }, null, 10, mv)) : x("", !0)
                            ]),
                            l("div", hv, [
                              ye(T, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: b
                              })
                            ])
                          ])
                        ]),
                        ye(j, { value: I.model }, null, 8, ["value"])
                      ])
                    ])
                  ], 2)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), i("div", Yf, [
          l("p", ev, [
            ke("Could not create view for unknown "),
            tv,
            ke(" " + F(a.value), 1)
          ])
        ]))
      ]);
    };
  }
}), yv = /* @__PURE__ */ l("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), bv = /* @__PURE__ */ de({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let s = O(!1);
    const n = t, a = () => {
      s.value && n("delete");
    }, r = v(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      s.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (u, d) => (o(), i(Me, null, [
      Mt(l("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (c) => nn(s) ? s.value = c : s = c)
      }, null, 512), [
        [ol, X(s)]
      ]),
      yv,
      l("span", Te({
        onClick: Ue(a, ["prevent"]),
        class: r.value
      }, u.$attrs), [
        U(u.$slots, "default", {}, () => [
          ke("Delete")
        ])
      ], 16)
    ], 64));
  }
}), wv = {
  class: "flex",
  title: "loading..."
}, kv = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, _v = /* @__PURE__ */ xs('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), $v = [
  _v
], Cv = { class: "ml-2 mt-1 text-gray-400" }, xv = /* @__PURE__ */ de({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Qe("ApiState", void 0), (t, s) => (o(), i("div", wv, [
      t.icon ? (o(), i("svg", kv, $v)) : x("", !0),
      l("span", Cv, F(t.text), 1)
    ]));
  }
}), Lv = ["onClick"], Vv = {
  key: 3,
  class: "flex justify-between items-center"
}, Sv = { class: "mr-1 select-none" }, Mv = ["onClick"], Av = /* @__PURE__ */ de({
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    type: {},
    tableStyle: { default: "stripedRows" },
    selectedColumns: {},
    gridClass: {},
    grid2Class: {},
    grid3Class: {},
    grid4Class: {},
    tableClass: {},
    theadClass: {},
    tbodyClass: {},
    theadRowClass: {},
    theadCellClass: {},
    isSelected: {},
    headerTitle: {},
    headerTitles: {},
    visibleFrom: {},
    rowClass: {},
    rowStyle: {}
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { emit: t }) {
    const s = e, n = t, a = O(), r = O(null), u = (E) => r.value === E, d = al(), c = (E) => Object.keys(d).find((h) => h.toLowerCase() == E.toLowerCase() + "-header"), f = (E) => Object.keys(d).find((h) => h.toLowerCase() == E.toLowerCase()), p = v(() => Ws(s.items).filter((E) => !!(d[E] || d[E + "-header"]))), { typeOf: $, typeProperties: m } = lt(), k = v(() => qt(s.type)), g = v(() => $(k.value)), b = v(() => m(g.value));
    function P(E) {
      const h = s.headerTitles && _e(s.headerTitles, E) || E;
      return s.headerTitle ? s.headerTitle(h) : cn(h);
    }
    function I(E) {
      const h = E.toLowerCase();
      return b.value.find((C) => C.name.toLowerCase() == h);
    }
    function se(E) {
      const h = I(E);
      return h != null && h.format ? h.format : (h == null ? void 0 : h.type) == "TimeSpan" || (h == null ? void 0 : h.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const j = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function T(E) {
      const h = s.visibleFrom && _e(s.visibleFrom, E);
      return h && Ze(j[h], (C) => `hidden ${C}`);
    }
    const M = v(() => s.gridClass ?? he.getGridClass(s.tableStyle)), ie = v(() => s.grid2Class ?? he.getGrid2Class(s.tableStyle)), L = v(() => s.grid3Class ?? he.getGrid3Class(s.tableStyle)), z = v(() => s.grid4Class ?? he.getGrid4Class(s.tableStyle)), K = v(() => s.tableClass ?? he.getTableClass(s.tableStyle)), le = v(() => s.tbodyClass ?? he.getTbodyClass(s.tbodyClass)), R = v(() => s.theadClass ?? he.getTheadClass(s.tableStyle)), W = v(() => s.theadRowClass ?? he.getTheadRowClass(s.tableStyle)), ee = v(() => s.theadCellClass ?? he.getTheadCellClass(s.tableStyle));
    function q(E, h) {
      return s.rowClass ? s.rowClass(E, h) : he.getTableRowClass(s.tableStyle, h, !!(s.isSelected && s.isSelected(E)), s.isSelected != null);
    }
    function A(E, h) {
      return s.rowStyle ? s.rowStyle(E, h) : void 0;
    }
    const te = v(() => {
      const E = (typeof s.selectedColumns == "string" ? s.selectedColumns.split(",") : s.selectedColumns) || (p.value.length > 0 ? p.value : Ws(s.items)), h = b.value.reduce((C, Y) => (C[Y.name.toLowerCase()] = Y.format, C), {});
      return E.filter((C) => {
        var Y;
        return ((Y = h[C.toLowerCase()]) == null ? void 0 : Y.method) != "hidden";
      });
    });
    function w(E, h) {
      n("headerSelected", h, E);
    }
    function N(E, h, C) {
      n("rowSelected", C, E);
    }
    return (E, h) => {
      const C = Z("CellFormat"), Y = Z("PreviewFormat");
      return E.items.length ? (o(), i("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: y(M.value)
      }, [
        l("div", {
          class: y(ie.value)
        }, [
          l("div", {
            class: y(L.value)
          }, [
            l("div", {
              class: y(z.value)
            }, [
              l("table", {
                class: y(K.value)
              }, [
                l("thead", {
                  class: y(R.value)
                }, [
                  l("tr", {
                    class: y(W.value)
                  }, [
                    (o(!0), i(Me, null, je(te.value, (J) => (o(), i("td", {
                      class: y([T(J), ee.value, u(J) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      l("div", {
                        onClick: (ne) => w(ne, J)
                      }, [
                        X(d)[J + "-header"] ? U(E.$slots, J + "-header", {
                          key: 0,
                          column: J
                        }) : c(J) ? U(E.$slots, c(J), {
                          key: 1,
                          column: J
                        }) : X(d).header ? U(E.$slots, "header", {
                          key: 2,
                          column: J,
                          label: P(J)
                        }) : (o(), i("div", Vv, [
                          l("span", Sv, F(P(J)), 1)
                        ]))
                      ], 8, Lv)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                l("tbody", {
                  class: y(le.value)
                }, [
                  (o(!0), i(Me, null, je(E.items, (J, ne) => (o(), i("tr", {
                    class: y(q(J, ne)),
                    style: nl(A(J, ne)),
                    onClick: (D) => N(D, ne, J)
                  }, [
                    (o(!0), i(Me, null, je(te.value, (D) => (o(), i("td", {
                      class: y([T(D), X(he).tableCellClass])
                    }, [
                      X(d)[D] ? U(E.$slots, D, Rt(Te({ key: 0 }, J))) : f(D) ? U(E.$slots, f(D), Rt(Te({ key: 1 }, J))) : I(D) ? (o(), ae(C, {
                        key: 2,
                        type: g.value,
                        propType: I(D),
                        modelValue: J
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), ae(Y, {
                        key: 3,
                        value: X(_e)(J, D),
                        format: se(D)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, Mv))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : x("", !0);
    };
  }
}), Tv = de({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: s } = lt();
    function n(a) {
      return a != null && a.format ? a.format : (a == null ? void 0 : a.type) == "TimeSpan" || (a == null ? void 0 : a.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var I;
      const a = n(e.propType), r = _e(e.modelValue, e.propType.name), u = Object.assign({}, e, t), d = $t("span", { innerHTML: ts(r, a, u) }), c = Xt(r) && Array.isArray(r) ? $t("span", {}, [
        $t("span", { class: "mr-2" }, `${r.length}`),
        d
      ]) : d, f = (I = e.propType) == null ? void 0 : I.ref;
      if (!f)
        return c;
      const $ = st(e.type).find((se) => se.type === f.model);
      if (!$)
        return c;
      const m = _e(e.modelValue, $.name), k = m && f.refLabel && _e(m, f.refLabel);
      if (!k)
        return c;
      const g = s(f.model), b = g == null ? void 0 : g.icon, P = b ? $t(eo, { image: b, class: "w-5 h-5 mr-1" }) : null;
      return $t("span", { class: "flex", title: `${f.model} ${r}` }, [
        P,
        k
      ]);
    };
  }
}), Fv = { key: 0 }, Iv = {
  key: 0,
  class: "mr-2"
}, jv = ["innerHTML"], Ov = ["innerHTML"], Dv = {
  inheritAttrs: !1
}, Pv = /* @__PURE__ */ de({
  ...Dv,
  __name: "PreviewFormat",
  props: {
    value: {},
    format: {},
    includeIcon: { type: Boolean, default: !0 },
    includeCount: { type: Boolean, default: !0 },
    maxFieldLength: { default: 150 },
    maxNestedFields: { default: 2 },
    maxNestedFieldLength: { default: 30 }
  },
  setup(e) {
    const t = e, s = v(() => Array.isArray(t.value));
    return (n, a) => X(Xt)(n.value) ? (o(), i("span", Fv, [
      n.includeCount && s.value ? (o(), i("span", Iv, F(n.value.length), 1)) : x("", !0),
      l("span", {
        innerHTML: X(ts)(n.value, n.format, n.$attrs)
      }, null, 8, jv)
    ])) : (o(), i("span", {
      key: 1,
      innerHTML: X(ts)(n.value, n.format, n.$attrs)
    }, null, 8, Ov));
  }
}), Bv = ["innerHTML"], Hv = { key: 0 }, Rv = /* @__PURE__ */ l("b", null, null, -1), Ev = { key: 2 }, zv = /* @__PURE__ */ de({
  __name: "HtmlFormat",
  props: {
    value: {},
    depth: { default: 0 },
    fieldAttrs: {},
    classes: { type: Function, default: (e, t, s, n, a) => n }
  },
  setup(e) {
    const t = e, s = v(() => Tt(t.value)), n = v(() => Array.isArray(t.value)), a = (c) => cn(c), r = (c) => t.fieldAttrs ? t.fieldAttrs(c) : null, u = v(() => Ws(t.value)), d = (c) => c ? Object.keys(c).map((f) => ({ key: a(f), val: c[f] })) : [];
    return (c, f) => {
      const p = Z("HtmlFormat", !0);
      return o(), i("div", {
        class: y(c.depth == 0 ? "prose html-format" : "")
      }, [
        s.value ? (o(), i("div", {
          key: 0,
          innerHTML: X(ts)(c.value)
        }, null, 8, Bv)) : n.value ? (o(), i("div", {
          key: 1,
          class: y(c.classes("array", "div", c.depth, X(he).gridClass))
        }, [
          X(Tt)(c.value[0]) ? (o(), i("div", Hv, "[ " + F(c.value.join(", ")) + " ]", 1)) : (o(), i("div", {
            key: 1,
            class: y(c.classes("array", "div", c.depth, X(he).grid2Class))
          }, [
            l("div", {
              class: y(c.classes("array", "div", c.depth, X(he).grid3Class))
            }, [
              l("div", {
                class: y(c.classes("array", "div", c.depth, X(he).grid4Class))
              }, [
                l("table", {
                  class: y(c.classes("object", "table", c.depth, X(he).tableClass))
                }, [
                  l("thead", {
                    class: y(c.classes("array", "thead", c.depth, X(he).theadClass))
                  }, [
                    l("tr", null, [
                      (o(!0), i(Me, null, je(u.value, ($) => (o(), i("th", {
                        class: y(c.classes("array", "th", c.depth, X(he).theadCellClass + " whitespace-nowrap"))
                      }, [
                        Rv,
                        ke(F(a($)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  l("tbody", null, [
                    (o(!0), i(Me, null, je(c.value, ($, m) => (o(), i("tr", {
                      class: y(c.classes("array", "tr", c.depth, m % 2 == 0 ? "bg-white" : "bg-gray-50", m))
                    }, [
                      (o(!0), i(Me, null, je(u.value, (k) => (o(), i("td", {
                        class: y(c.classes("array", "td", c.depth, X(he).tableCellClass))
                      }, [
                        ye(p, Te({
                          value: $[k],
                          "field-attrs": c.fieldAttrs,
                          depth: c.depth + 1,
                          classes: c.classes
                        }, r(k)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (o(), i("div", Ev, [
          l("table", {
            class: y(c.classes("object", "table", c.depth, "table-object"))
          }, [
            (o(!0), i(Me, null, je(d(c.value), ($) => (o(), i("tr", {
              class: y(c.classes("object", "tr", c.depth, ""))
            }, [
              l("th", {
                class: y(c.classes("object", "th", c.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, F($.key), 3),
              l("td", {
                class: y(c.classes("object", "td", c.depth, "align-top py-2 px-4 text-sm"))
              }, [
                ye(p, Te({
                  value: $.val,
                  "field-attrs": c.fieldAttrs,
                  depth: c.depth + 1,
                  classes: c.classes
                }, r($.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), Nv = ["href"], Uv = ["href", "title"], qv = /* @__PURE__ */ de({
  __name: "MarkupFormat",
  props: {
    value: {},
    imageClass: { default: "w-8 h-8" }
  },
  setup(e) {
    const t = e, { getMimeType: s } = La(), n = t.value;
    let a = typeof t.value;
    const r = a === "string" && n.length ? s(n) : null;
    if (a === "string" && n.length) {
      const u = n.startsWith("https://") || n.startsWith("http://");
      (u || n[0] === "/") && (r != null && r.startsWith("image/")) ? a = "image" : u && (a = "link");
    }
    return (u, d) => {
      const c = Z("Icon"), f = Z("HtmlFormat");
      return X(a) == "link" ? (o(), i("a", {
        key: 0,
        href: u.value,
        class: "text-indigo-600"
      }, F(u.value), 9, Nv)) : X(a) == "image" ? (o(), i("a", {
        key: 1,
        href: u.value,
        title: u.value,
        class: "inline-block"
      }, [
        ye(c, {
          src: u.value,
          class: y(u.imageClass)
        }, null, 8, ["src", "class"])
      ], 8, Uv)) : (o(), ae(f, {
        key: 2,
        value: u.value
      }, null, 8, ["value"]));
    };
  }
}), Qv = { class: "my-2 w-full" }, Kv = { class: "leading-7" }, Zv = { class: "px-2 text-left align-top" }, Wv = { colspan: "align-top" }, Gv = { class: "my-2 leading-7" }, Jv = {
  colspan: "2",
  class: "px-2 bg-indigo-700 text-white"
}, Xv = { class: "leading-7" }, Yv = {
  colspan: "2",
  class: "px-2 align-top"
}, ep = /* @__PURE__ */ de({
  __name: "MarkupModel",
  props: {
    value: {},
    imageClass: {}
  },
  setup(e) {
    const t = e, s = Object.keys(t.value), n = {}, a = {};
    return s.forEach((r) => {
      const u = t.value[r], d = typeof u;
      u == null || d === "function" || d === "symbol" ? n[r] = `(${u == null ? "null" : "t"})` : d === "object" ? a[r] = u : n[r] = u;
    }), (r, u) => {
      const d = Z("MarkupFormat");
      return o(), i("table", Qv, [
        (o(), i(Me, null, je(n, (c, f) => l("tr", Kv, [
          l("th", Zv, F(X(Pe)(f)), 1),
          l("td", Wv, [
            ye(d, { value: c }, null, 8, ["value"])
          ])
        ])), 64)),
        (o(), i(Me, null, je(a, (c, f) => (o(), i(Me, null, [
          l("tr", Gv, [
            l("td", Jv, F(X(Pe)(f)), 1)
          ]),
          l("tr", Xv, [
            l("td", Yv, [
              ye(d, { value: c }, null, 8, ["value"])
            ])
          ])
        ], 64))), 64))
      ]);
    };
  }
}), tp = { class: "absolute top-0 right-0 pt-4 pr-4" }, sp = /* @__PURE__ */ l("span", { class: "sr-only" }, "Close", -1), lp = /* @__PURE__ */ l("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), np = [
  sp,
  lp
], op = /* @__PURE__ */ de({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (s, n) => (o(), i("div", tp, [
      l("button", {
        type: "button",
        onClick: n[0] || (n[0] = (a) => s.$emit("close")),
        class: y([s.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, np, 2)
    ]));
  }
}), ap = ["id", "aria-labelledby"], rp = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), ip = { class: "fixed inset-0 overflow-hidden" }, up = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, dp = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, cp = { class: "flex-1" }, fp = { class: "relative bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, vp = { class: "flex items-start justify-between space-x-3" }, pp = { class: "space-y-1" }, mp = { key: 0 }, hp = ["id"], gp = {
  key: 2,
  class: "text-sm text-gray-500"
}, yp = { class: "flex h-7 items-center" }, bp = {
  key: 0,
  class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
}, wp = /* @__PURE__ */ de({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: {},
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const s = t, n = O(!1), a = O(""), r = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    bt(n, () => {
      yt(r, a, n.value), n.value || setTimeout(() => s("done"), 700);
    }), n.value = !0;
    const u = () => n.value = !1, d = (c) => {
      c.key === "Escape" && u();
    };
    return Ye(() => window.addEventListener("keydown", d)), Ft(() => window.removeEventListener("keydown", d)), (c, f) => {
      const p = Z("CloseButton");
      return o(), i("div", {
        id: c.id,
        class: "relative z-10",
        "aria-labelledby": c.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        rp,
        l("div", ip, [
          l("div", {
            onMousedown: u,
            class: "absolute inset-0 overflow-hidden"
          }, [
            l("div", {
              onMousedown: f[0] || (f[0] = Ue(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              l("div", {
                class: y(["panel pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                l("div", up, [
                  l("div", dp, [
                    l("div", cp, [
                      l("div", fp, [
                        l("div", vp, [
                          l("div", pp, [
                            c.$slots.title ? (o(), i("div", mp, [
                              U(c.$slots, "title")
                            ])) : x("", !0),
                            c.title ? (o(), i("h2", {
                              key: 1,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: c.id + "-title"
                            }, F(c.title), 9, hp)) : x("", !0),
                            c.$slots.subtitle ? (o(), i("p", gp, [
                              U(c.$slots, "subtitle")
                            ])) : x("", !0)
                          ]),
                          l("div", yp, [
                            ye(p, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: u
                            })
                          ])
                        ])
                      ]),
                      l("div", {
                        class: y(c.contentClass)
                      }, [
                        U(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  c.$slots.footer ? (o(), i("div", bp, [
                    U(c.$slots, "footer")
                  ])) : x("", !0)
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, ap);
    };
  }
}), kp = ["id", "data-transition-for", "aria-labelledby"], _p = { class: "fixed inset-0 z-10 overflow-y-auto" }, $p = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Cp = /* @__PURE__ */ l("span", { class: "sr-only" }, "Close", -1), xp = /* @__PURE__ */ l("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Lp = [
  Cp,
  xp
], Vp = /* @__PURE__ */ de({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: ll.modalClass },
    sizeClass: { default: ll.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const s = t, n = O(!1), a = O(""), r = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, u = O(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    bt(n, () => {
      yt(r, a, n.value), yt(d, u, n.value), n.value || setTimeout(() => s("done"), 200);
    }), n.value = !0;
    const c = () => n.value = !1;
    ss("ModalProvider", {
      openModal: m
    });
    const p = O(), $ = O();
    function m(b, P) {
      p.value = b, $.value = P;
    }
    async function k(b) {
      $.value && $.value(b), p.value = void 0, $.value = void 0;
    }
    const g = (b) => {
      b.key === "Escape" && c();
    };
    return Ye(() => window.addEventListener("keydown", g)), Ft(() => window.removeEventListener("keydown", g)), (b, P) => {
      var se;
      const I = Z("ModalLookup");
      return o(), i("div", {
        id: b.id,
        "data-transition-for": b.id,
        onMousedown: c,
        class: "relative z-10",
        "aria-labelledby": `${b.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        l("div", {
          class: y(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", a.value])
        }, null, 2),
        l("div", _p, [
          l("div", $p, [
            l("div", {
              class: y([b.modalClass, b.sizeClass, u.value]),
              onMousedown: P[0] || (P[0] = Ue(() => {
              }, ["stop"]))
            }, [
              l("div", null, [
                l("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  l("button", {
                    type: "button",
                    onClick: c,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, Lp)
                ]),
                U(b.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((se = p.value) == null ? void 0 : se.name) == "ModalLookup" && p.value.ref ? (o(), ae(I, {
          key: 0,
          "ref-info": p.value.ref,
          onDone: k
        }, null, 8, ["ref-info"])) : x("", !0)
      ], 40, kp);
    };
  }
}), Sp = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, Mp = { class: "mt-3 pl-5 flex flex-wrap items-center" }, Ap = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, Tp = { class: "hidden md:inline" }, Fp = { class: "flex pb-1 sm:pb-0" }, Ip = ["title"], jp = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ l("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), Op = [
  jp
], Dp = ["disabled"], Pp = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Bp = [
  Pp
], Hp = ["disabled"], Rp = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Ep = [
  Rp
], zp = ["disabled"], Np = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Up = [
  Np
], qp = ["disabled"], Qp = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), Kp = [
  Qp
], Zp = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, Wp = { class: "px-4 text-lg text-black dark:text-white" }, Gp = { key: 0 }, Jp = { key: 1 }, Xp = /* @__PURE__ */ l("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Yp = { key: 2 }, em = {
  key: 1,
  class: "pl-2"
}, tm = /* @__PURE__ */ l("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), sm = [
  tm
], lm = { class: "flex pb-1 sm:pb-0" }, nm = {
  key: 0,
  class: "pl-2"
}, om = /* @__PURE__ */ l("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ l("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), am = { class: "mr-1" }, rm = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, im = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), um = [
  im
], dm = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, cm = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), fm = [
  cm
], vm = { key: 1 }, pm = { key: 4 }, mm = { key: 0 }, hm = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, gm = { class: "mr-1 select-none" }, ym = {
  key: 1,
  class: "flex justify-between items-center"
}, bm = { class: "mr-1 select-none" }, ln = 25, wm = /* @__PURE__ */ de({
  __name: "ModalLookup",
  props: {
    id: { default: "ModalLookup" },
    refInfo: {},
    skip: { default: 0 },
    prefs: {},
    selectedColumns: {},
    allowFiltering: { type: [Boolean, null], default: !0 },
    showPreferences: { type: [Boolean, null], default: !0 },
    showPagingNav: { type: [Boolean, null], default: !0 },
    showPagingInfo: { type: [Boolean, null], default: !0 },
    showResetPreferences: { type: [Boolean, null], default: !0 },
    showFiltersView: { type: [Boolean, null], default: !0 },
    toolbarButtonClass: {},
    canFilter: {}
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const s = e, n = t, a = al(), { config: r } = It(), { metadataApi: u, filterDefinitions: d } = lt(), c = Qe("client"), f = r.value.storage, p = v(() => s.toolbarButtonClass ?? he.toolbarButtonClass), $ = v(() => d.value), m = O({ take: ln }), k = O(new Xe()), g = O(s.skip), b = O(!1), P = O(), I = (H) => typeof H == "string" ? H.split(",") : H || [];
    function se(H, Q) {
      return he.getTableRowClass("fullWidth", Q, !1, !0);
    }
    function j() {
      let H = I(s.selectedColumns);
      return H.length > 0 ? H : [];
    }
    const T = v(() => rt(s.refInfo.model)), M = v(() => {
      let Q = j().map((be) => be.toLowerCase());
      const oe = st(T.value);
      return Q.length > 0 ? Q.map((be) => oe.find(($e) => $e.name.toLowerCase() === be)).filter((be) => be != null) : oe;
    }), ie = v(() => {
      let H = M.value.map((oe) => oe.name), Q = I(m.value.selectedColumns).map((oe) => oe.toLowerCase());
      return Q.length > 0 ? H.filter((oe) => Q.includes(oe.toLowerCase())) : H;
    }), L = v(() => m.value.take ?? ln), z = v(() => k.value.response ? _e(k.value.response, "results") : []), K = v(() => {
      var H;
      return ((H = k.value.response) == null ? void 0 : H.total) ?? z.value.length ?? 0;
    }), le = v(() => g.value > 0), R = v(() => g.value > 0), W = v(() => z.value.length >= L.value), ee = v(() => z.value.length >= L.value), q = O([]), A = v(() => q.value.some((H) => H.settings.filters.length > 0 || !!H.settings.sort)), te = v(() => q.value.map((H) => H.settings.filters.length).reduce((H, Q) => H + Q, 0)), w = v(() => ns(T.value)), N = v(() => {
      var H;
      return (H = u.value) == null ? void 0 : H.operations.find((Q) => {
        var oe;
        return ((oe = Q.dataModel) == null ? void 0 : oe.name) == s.refInfo.model && qe.isAnyQuery(Q);
      });
    }), E = O(), h = O(!1), C = O(), Y = () => `${s.id}/ApiPrefs/${s.refInfo.model}`, J = (H) => `Column/${s.id}:${s.refInfo.model}.${H}`;
    async function ne(H) {
      g.value += H, g.value < 0 && (g.value = 0);
      var Q = Math.floor(K.value / L.value) * L.value;
      g.value > Q && (g.value = Q), await ce();
    }
    async function D(H, Q) {
      n("done", H);
    }
    function V() {
      n("done", null);
    }
    function fe(H, Q) {
      var be, $e, Ae;
      let oe = Q.target;
      if ((oe == null ? void 0 : oe.tagName) !== "TD") {
        let He = (be = oe == null ? void 0 : oe.closest("TABLE")) == null ? void 0 : be.getBoundingClientRect(), Fe = q.value.find((De) => De.name.toLowerCase() == H.toLowerCase());
        if (Fe && He) {
          let De = 318, We = ((($e = Q.target) == null ? void 0 : $e.tagName) === "DIV" ? Q.target : (Ae = Q.target) == null ? void 0 : Ae.closest("DIV")).getBoundingClientRect(), Re = De + 25;
          C.value = {
            column: Fe,
            topLeft: {
              x: Math.max(Math.floor(We.x + 25), Re),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function pe() {
      C.value = null;
    }
    async function ue(H) {
      var oe;
      let Q = (oe = C.value) == null ? void 0 : oe.column;
      Q && (Q.settings = H, f.setItem(J(Q.name), JSON.stringify(Q.settings)), await ce()), C.value = null;
    }
    async function me(H) {
      f.setItem(J(H.name), JSON.stringify(H.settings)), await ce();
    }
    async function S(H) {
      h.value = !1, m.value = H, f.setItem(Y(), JSON.stringify(H)), await ce();
    }
    async function ce() {
      await Ve(Se());
    }
    async function Ve(H) {
      const Q = N.value;
      if (!Q) {
        console.error(`No Query API was found for ${s.refInfo.model}`);
        return;
      }
      let oe = Yt(Q, H), be = dn((He) => {
        k.value.response = k.value.error = void 0, b.value = He;
      }), $e = await c.api(oe);
      be(), St(() => k.value = $e);
      let Ae = _e($e.response, "results") || [];
      !$e.succeeded || Ae.label == 0;
    }
    function Se() {
      let H = {
        include: "total",
        take: L.value
      }, Q = I(m.value.selectedColumns || s.selectedColumns);
      if (Q.length > 0) {
        let be = w.value;
        be && Q.includes(be.name) && (Q = [be.name, ...Q]), H.fields = Q.join(",");
      }
      let oe = [];
      return q.value.forEach((be) => {
        be.settings.sort && oe.push((be.settings.sort === "DESC" ? "-" : "") + be.name), be.settings.filters.forEach(($e) => {
          let Ae = $e.key.replace("%", be.name);
          H[Ae] = $e.value;
        });
      }), typeof H.skip > "u" && g.value > 0 && (H.skip = g.value), oe.length > 0 && (H.orderBy = oe.join(",")), H;
    }
    async function ge() {
      q.value.forEach((H) => {
        H.settings = { filters: [] }, f.removeItem(J(H.name));
      }), await ce();
    }
    return Ye(async () => {
      const H = s.prefs || $s(f.getItem(Y()));
      H && (m.value = H), q.value = M.value.map((Q) => ({
        name: Q.name,
        type: Q.type,
        meta: Q,
        settings: Object.assign(
          {
            filters: []
          },
          $s(f.getItem(J(Q.name)))
        )
      })), isNaN(s.skip) || (g.value = s.skip), await ce();
    }), (H, Q) => {
      const oe = Z("ErrorSummary"), be = Z("Loading"), $e = Z("SettingsIcons"), Ae = Z("DataGrid"), He = Z("ModalDialog");
      return o(), i(Me, null, [
        H.refInfo ? (o(), ae(He, {
          key: 0,
          ref_key: "modalDialog",
          ref: E,
          id: H.id,
          onDone: V
        }, {
          default: xe(() => [
            l("div", Sp, [
              l("div", Mp, [
                l("h3", Ap, [
                  ke(" Select "),
                  l("span", Tp, F(X(Pe)(H.refInfo.model)), 1)
                ]),
                l("div", Fp, [
                  H.showPreferences ? (o(), i("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${H.refInfo.model} Preferences`,
                    onClick: Q[0] || (Q[0] = (Fe) => h.value = !h.value)
                  }, Op, 8, Ip)) : x("", !0),
                  H.showPagingNav ? (o(), i("button", {
                    key: 1,
                    type: "button",
                    class: y(["pl-2", le.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !le.value,
                    onClick: Q[1] || (Q[1] = (Fe) => ne(-K.value))
                  }, Bp, 10, Dp)) : x("", !0),
                  H.showPagingNav ? (o(), i("button", {
                    key: 2,
                    type: "button",
                    class: y(["pl-2", R.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !R.value,
                    onClick: Q[2] || (Q[2] = (Fe) => ne(-L.value))
                  }, Ep, 10, Hp)) : x("", !0),
                  H.showPagingNav ? (o(), i("button", {
                    key: 3,
                    type: "button",
                    class: y(["pl-2", W.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !W.value,
                    onClick: Q[3] || (Q[3] = (Fe) => ne(L.value))
                  }, Up, 10, zp)) : x("", !0),
                  H.showPagingNav ? (o(), i("button", {
                    key: 4,
                    type: "button",
                    class: y(["pl-2", ee.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !ee.value,
                    onClick: Q[4] || (Q[4] = (Fe) => ne(K.value))
                  }, Kp, 10, qp)) : x("", !0)
                ]),
                H.showPagingInfo ? (o(), i("div", Zp, [
                  l("div", Wp, [
                    b.value ? (o(), i("span", Gp, "Querying...")) : x("", !0),
                    z.value.length ? (o(), i("span", Jp, [
                      Xp,
                      ke(" " + F(g.value + 1) + " - " + F(Math.min(g.value + z.value.length, K.value)) + " ", 1),
                      l("span", null, " of " + F(K.value), 1)
                    ])) : k.value.completed ? (o(), i("span", Yp, "No Results")) : x("", !0)
                  ])
                ])) : x("", !0),
                A.value && H.showResetPreferences ? (o(), i("div", em, [
                  l("button", {
                    type: "button",
                    onClick: ge,
                    title: "Reset Preferences & Filters",
                    class: y(p.value)
                  }, sm, 2)
                ])) : x("", !0),
                l("div", lm, [
                  H.showFiltersView && te.value > 0 ? (o(), i("div", nm, [
                    l("button", {
                      type: "button",
                      onClick: Q[5] || (Q[5] = (Fe) => P.value = P.value == "filters" ? null : "filters"),
                      class: y(p.value),
                      "aria-expanded": "false"
                    }, [
                      om,
                      l("span", am, F(te.value) + " " + F(te.value == 1 ? "Filter" : "Filters"), 1),
                      P.value != "filters" ? (o(), i("svg", rm, um)) : (o(), i("svg", dm, fm))
                    ], 2)
                  ])) : x("", !0)
                ])
              ]),
              P.value == "filters" ? (o(), ae(Il, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: $.value,
                columns: q.value,
                onDone: Q[6] || (Q[6] = (Fe) => P.value = null),
                onChange: me
              }, null, 8, ["definitions", "columns"])) : x("", !0),
              C.value ? (o(), i("div", vm, [
                ye(Fl, {
                  definitions: $.value,
                  column: C.value.column,
                  "top-left": C.value.topLeft,
                  onDone: pe,
                  onSave: ue
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : x("", !0),
              k.value.error ? (o(), ae(oe, {
                key: 2,
                status: k.value.error
              }, null, 8, ["status"])) : b.value ? (o(), ae(be, { key: 3 })) : (o(), i("div", pm, [
                z.value.length ? (o(), i("div", mm, [
                  ye(Ae, {
                    id: H.id,
                    items: z.value,
                    type: H.refInfo.model,
                    "selected-columns": ie.value,
                    onFiltersChanged: ce,
                    tableStyle: "fullWidth",
                    rowClass: se,
                    onRowSelected: D,
                    onHeaderSelected: fe
                  }, rl({
                    header: xe(({ column: Fe, label: De }) => {
                      var Oe;
                      return [
                        H.allowFiltering && (!s.canFilter || s.canFilter(Fe)) ? (o(), i("div", hm, [
                          l("span", gm, F(De), 1),
                          ye($e, {
                            column: q.value.find((We) => We.name.toLowerCase() === Fe.toLowerCase()),
                            "is-open": ((Oe = C.value) == null ? void 0 : Oe.column.name) === Fe
                          }, null, 8, ["column", "is-open"])
                        ])) : (o(), i("div", ym, [
                          l("span", bm, F(De), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    je(Object.keys(X(a)), (Fe) => ({
                      name: Fe,
                      fn: xe((De) => [
                        U(H.$slots, Fe, Rt(ks(De)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : x("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : x("", !0),
        h.value ? (o(), ae(jl, {
          key: 1,
          columns: M.value,
          prefs: m.value,
          onDone: Q[7] || (Q[7] = (Fe) => h.value = !1),
          onSave: S
        }, null, 8, ["columns", "prefs"])) : x("", !0)
      ], 64);
    };
  }
}), km = { class: "sm:hidden" }, _m = ["for"], $m = ["id", "name"], Cm = ["value"], xm = { class: "hidden sm:block" }, Lm = { class: "border-b border-gray-200" }, Vm = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, Sm = ["onClick"], Mm = /* @__PURE__ */ de({
  __name: "Tabs",
  props: {
    tabs: {},
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Pe(e) },
    selected: {},
    tabClass: {},
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 },
    clearQuery: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, s = v(() => Object.keys(t.tabs)), n = (p) => t.label ? t.label(p) : Pe(p), a = v(() => t.id || "tabs"), r = v(() => t.param || "tab"), u = O();
    function d(p) {
      if (u.value = p, t.url) {
        const $ = s.value[0];
        ul({ tab: p === $ ? void 0 : p }, t.clearQuery);
      }
    }
    function c(p) {
      return u.value === p;
    }
    const f = v(() => `${100 / Object.keys(t.tabs).length}%`);
    return Ye(() => {
      if (u.value = t.selected || Object.keys(t.tabs)[0], t.url) {
        const p = location.search ? location.search : location.hash.includes("?") ? "?" + ms(location.hash, "?") : "", m = Zs(p)[r.value];
        m && (u.value = m);
      }
    }), (p, $) => (o(), i("div", null, [
      l("div", km, [
        l("label", {
          for: a.value,
          class: "sr-only"
        }, "Select a tab", 8, _m),
        l("select", {
          id: a.value,
          name: a.value,
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: $[0] || ($[0] = (m) => {
            var k;
            return d((k = m.target) == null ? void 0 : k.value);
          })
        }, [
          (o(!0), i(Me, null, je(s.value, (m) => (o(), i("option", {
            key: m,
            value: m
          }, F(n(m)), 9, Cm))), 128))
        ], 40, $m)
      ]),
      l("div", xm, [
        l("div", Lm, [
          l("nav", Vm, [
            (o(!0), i(Me, null, je(s.value, (m) => (o(), i("a", {
              href: "#",
              onClick: Ue((k) => d(m), ["prevent"]),
              style: nl({ width: f.value }),
              class: y([c(m) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", p.tabClass])
            }, F(n(m)), 15, Sm))), 256))
          ])
        ])
      ]),
      l("div", {
        class: y(p.bodyClass)
      }, [
        (o(), ae(an(p.tabs[u.value])))
      ], 2)
    ]));
  }
}), Am = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), Tm = [
  Am
], Fm = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), Im = [
  Fm
], jm = /* @__PURE__ */ de({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.documentElement : null, s = () => !!(t != null && t.classList.contains("dark")), n = O(localStorage.getItem("color-scheme") == "dark");
    function a() {
      s() ? t == null || t.classList.remove("dark") : t == null || t.classList.add("dark"), n.value = s(), localStorage.setItem("color-scheme", n.value ? "dark" : "light");
    }
    return (r, u) => (o(), i("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: u[0] || (u[0] = (d) => a())
    }, [
      l("span", {
        class: y(`${n.value ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        l("span", {
          class: y(`${n.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Tm, 2),
        l("span", {
          class: y(`${n.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Im, 2)
      ], 2)
    ]));
  }
}), Om = { key: 0 }, Dm = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, Pm = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, Bm = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, Hm = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, Rm = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, Em = ["onClick"], zm = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, Nm = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, Um = { class: "mt-8" }, qm = {
  key: 1,
  class: "mt-6"
}, Qm = /* @__PURE__ */ xs('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), Km = { class: "mt-6 grid grid-cols-3 gap-3" }, Zm = ["href", "title"], Wm = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Gm = /* @__PURE__ */ l("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), Jm = /* @__PURE__ */ l("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), Xm = [
  Gm,
  Jm
], Ym = /* @__PURE__ */ de({
  __name: "SignIn",
  props: {
    provider: {},
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const s = e, n = t, { getMetadata: a, createDto: r } = lt(), u = Ds(), d = Qe("client"), { signIn: c } = Tl(), f = a({ assert: !0 }), p = f.plugins.auth, $ = document.baseURI, m = f.app.baseUrl, k = O(r("Authenticate")), g = O(new Xe()), b = O(s.provider);
    Ye(() => {
      p == null || p.authProviders.map((R) => R.formLayout).filter((R) => R).forEach((R) => R.forEach(
        (W) => k.value[W.id] = W.type === "checkbox" ? !1 : ""
      ));
    });
    const P = v(() => (p == null ? void 0 : p.authProviders.filter((R) => R.formLayout)) || []), I = v(() => P.value[0] || {}), se = v(() => P.value[Math.max(P.value.length - 1, 0)] || {}), j = v(() => (b.value ? p == null ? void 0 : p.authProviders.find((R) => R.name === b.value) : null) ?? I.value), T = (R) => R === !1 || R === "false";
    function M(R) {
      return R.label || R.navItem && R.navItem.label;
    }
    const ie = v(() => {
      var R;
      return (((R = j.value) == null ? void 0 : R.formLayout) || []).map((W) => {
        var ee, q;
        return Object.assign({}, W, {
          type: (ee = W.type) == null ? void 0 : ee.toLowerCase(),
          autocomplete: W.autocomplete || (((q = W.type) == null ? void 0 : q.toLowerCase()) === "password" ? "current-password" : void 0) || (W.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, W.css)
        });
      });
    }), L = v(() => T(s.oauth) ? [] : (p == null ? void 0 : p.authProviders.filter((R) => R.type === "oauth")) || []), z = v(() => {
      let R = Ho(
        p == null ? void 0 : p.authProviders.filter((ee) => ee.formLayout && ee.formLayout.length > 0),
        (ee, q) => {
          let A = M(q) || at(q.name);
          ee[A] = q.name === I.value.name ? "" : q.name;
        }
      );
      const W = j.value;
      return W && T(s.tabs) && (R = { [M(W) || at(W.name)]: W }), R;
    }), K = v(() => {
      let R = ie.value.map((W) => W.id).filter((W) => W);
      return g.value.summaryMessage(R);
    });
    async function le() {
      if (k.value.provider = j.value.name, j.value.name === "authsecret" ? (d.headers.set("authsecret", k.value.authsecret), k.value = r("Authenticate")) : j.value.name === "basic" ? (d.setCredentials(k.value.UserName, k.value.Password), k.value = r("Authenticate"), k.value.UserName = null, k.value.Password = null) : (j.value.type === "Bearer" || j.value.name === "jwt") && (d.bearerToken = k.value.BearerToken, k.value = r("Authenticate")), g.value = await u.api(k.value), g.value.succeeded) {
        const R = g.value.response;
        c(R), n("login", R), g.value = new Xe(), k.value = r("Authenticate");
      }
    }
    return (R, W) => {
      const ee = Z("ErrorSummary"), q = Z("AutoFormFields"), A = Z("PrimaryButton"), te = Z("Icon"), w = _o("href");
      return X(p) ? (o(), i("div", Dm, [
        l("div", Pm, [
          l("h2", Bm, F(R.title), 1),
          Object.keys(z.value).length > 1 ? (o(), i("p", Hm, [
            l("span", Rm, [
              (o(!0), i(Me, null, je(z.value, (N, E) => Mt((o(), i("a", {
                onClick: (h) => b.value = N,
                class: y([
                  N === "" || N === I.value.name ? "rounded-l-md" : N === se.value.name ? "rounded-r-md -ml-px" : "-ml-px",
                  b.value === N ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                ke(F(E), 1)
              ], 10, Em)), [
                [w, { provider: N }]
              ])), 256))
            ])
          ])) : x("", !0)
        ]),
        l("div", zm, [
          K.value ? (o(), ae(ee, {
            key: 0,
            class: "mb-3",
            errorSummary: K.value
          }, null, 8, ["errorSummary"])) : x("", !0),
          l("div", Nm, [
            ie.value.length ? (o(), i("form", {
              key: 0,
              onSubmit: Ue(le, ["prevent"])
            }, [
              ye(q, {
                modelValue: k.value,
                formLayout: ie.value,
                api: g.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              l("div", Um, [
                ye(A, { class: "w-full" }, {
                  default: xe(() => [
                    ke("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 32)) : x("", !0),
            L.value.length ? (o(), i("div", qm, [
              Qm,
              l("div", Km, [
                (o(!0), i(Me, null, je(L.value, (N) => (o(), i("div", null, [
                  l("a", {
                    href: X(m) + N.navItem.href + "?continue=" + X($),
                    title: M(N),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    N.icon ? (o(), ae(te, {
                      key: 0,
                      image: N.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (o(), i("svg", Wm, Xm))
                  ], 8, Zm)
                ]))), 256))
              ])
            ])) : x("", !0)
          ])
        ])
      ])) : (o(), i("div", Om, "No Auth Plugin"));
    };
  }
}), e1 = ["for"], t1 = {
  key: 1,
  class: "border border-gray-200 flex justify-between"
}, s1 = { class: "p-2 flex flex-wrap gap-x-4" }, l1 = /* @__PURE__ */ l("title", null, "Bold text (CTRL+B)", -1), n1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
}, null, -1), o1 = [
  l1,
  n1
], a1 = /* @__PURE__ */ l("title", null, "Italics (CTRL+I)", -1), r1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
}, null, -1), i1 = [
  a1,
  r1
], u1 = /* @__PURE__ */ l("title", null, "Insert Link (CTRL+K)", -1), d1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
}, null, -1), c1 = [
  u1,
  d1
], f1 = /* @__PURE__ */ l("title", null, "Blockquote (CTRL+Q)", -1), v1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
}, null, -1), p1 = [
  f1,
  v1
], m1 = /* @__PURE__ */ l("title", null, "Insert Image (CTRL+SHIFT+L)", -1), h1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
}, null, -1), g1 = [
  m1,
  h1
], y1 = /* @__PURE__ */ l("title", null, "Insert Code (CTRL+<)", -1), b1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
}, null, -1), w1 = [
  y1,
  b1
], k1 = /* @__PURE__ */ l("title", null, "H2 Heading (CTRL+H)", -1), _1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"
}, null, -1), $1 = [
  k1,
  _1
], C1 = /* @__PURE__ */ l("title", null, "Numbered List (ALT+1)", -1), x1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
}, null, -1), L1 = [
  C1,
  x1
], V1 = /* @__PURE__ */ l("title", null, "Bulleted List (ALT+-)", -1), S1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
}, null, -1), M1 = [
  V1,
  S1
], A1 = /* @__PURE__ */ l("title", null, "Strike Through (ALT+S)", -1), T1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
}, null, -1), F1 = [
  A1,
  T1
], I1 = /* @__PURE__ */ l("title", null, "Undo (CTRL+Z)", -1), j1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
}, null, -1), O1 = [
  I1,
  j1
], D1 = /* @__PURE__ */ l("title", null, "Redo (CTRL+SHIFT+Z)", -1), P1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
}, null, -1), B1 = [
  D1,
  P1
], H1 = {
  key: 0,
  class: "p-2 flex flex-wrap gap-x-4"
}, R1 = ["href"], E1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
}, null, -1), z1 = [
  E1
], N1 = { class: "" }, U1 = ["name", "id", "label", "value", "rows", "disabled"], q1 = ["id"], Q1 = ["id"], Je = "w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400", K1 = /* @__PURE__ */ de({
  __name: "MarkdownInput",
  props: {
    status: {},
    id: {},
    inputClass: {},
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {},
    counter: { type: Boolean },
    rows: {},
    errorMessages: {},
    lang: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    helpUrl: { default: "https://guides.github.com/features/mastering-markdown/" },
    hide: {}
  },
  emits: ["update:modelValue", "close"],
  setup(e, { expose: t, emit: s }) {
    const n = e, a = s;
    let r = [], u = [], d = Qe("ApiState", void 0);
    const c = v(() => mt.call({ responseStatus: n.status ?? (d == null ? void 0 : d.error.value) }, n.id)), f = v(() => n.label ?? Pe(at(n.id))), p = "bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","), $ = v(() => n.hide ? Vt(p, n.hide) : Vt(p, []));
    function m(h) {
      return $.value[h];
    }
    const k = v(() => ["shadow-sm font-mono" + ot.base.replace("rounded-md", ""), c.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ot.valid, n.inputClass]), g = O();
    t({ props: n, textarea: g, updateModelValue: b, selection: I, hasSelection: P, selectionInfo: se, insert: T, replace: j });
    function b(h) {
      a("update:modelValue", h);
    }
    function P() {
      return g.value.selectionStart !== g.value.selectionEnd;
    }
    function I() {
      const h = g.value;
      return h.value.substring(h.selectionStart, h.selectionEnd) || "";
    }
    function se() {
      const h = g.value, C = h.value, Y = h.selectionStart, J = C.substring(Y, h.selectionEnd) || "", ne = C.substring(0, Y), D = ne.lastIndexOf(`
`);
      return {
        value: C,
        sel: J,
        selPos: Y,
        beforeSel: ne,
        afterSel: C.substring(Y),
        prevCRPos: D,
        beforeCR: D >= 0 ? ne.substring(0, D + 1) : "",
        afterCR: D >= 0 ? ne.substring(D + 1) : ""
      };
    }
    function j({ value: h, selectionStart: C, selectionEnd: Y }) {
      Y == null && (Y = C), b(h), St(() => {
        g.value.focus(), g.value.setSelectionRange(C, Y);
      });
    }
    function T(h, C, Y = "", { selectionAtEnd: J, offsetStart: ne, offsetEnd: D, filterValue: V, filterSelection: fe } = {}) {
      const pe = g.value;
      let ue = pe.value, me = pe.selectionEnd;
      r.push({ value: ue, selectionStart: pe.selectionStart, selectionEnd: pe.selectionEnd }), u = [];
      const S = pe.selectionStart, ce = pe.selectionEnd;
      let Ve = ue.substring(0, S), Se = ue.substring(ce);
      const ge = h && Ve.endsWith(h) && Se.startsWith(C);
      if (S == ce) {
        if (ge ? (ue = Ve.substring(0, Ve.length - h.length) + Se.substring(C.length), me += -C.length) : (ue = Ve + h + Y + C + Se, me += h.length, ne = 0, D = (Y == null ? void 0 : Y.length) || 0, J && (me += D, D = 0)), V) {
          var Q = { pos: me };
          ue = V(ue, Q), me = Q.pos;
        }
      } else {
        var oe = ue.substring(S, ce);
        fe && (oe = fe(oe)), ge ? (ue = Ve.substring(0, Ve.length - h.length) + oe + Se.substring(C.length), ne = -oe.length - h.length, D = oe.length) : (ue = Ve + h + oe + C + Se, ne ? me += (h + C).length : (me = S, ne = h.length, D = oe.length));
      }
      b(ue), St(() => {
        pe.focus(), ne = me + (ne || 0), D = (ne || 0) + (D || 0), pe.setSelectionRange(ne, D);
      });
    }
    const M = () => T("**", "**", "bold"), ie = () => T("_", "_", "italics"), L = () => T("~~", "~~", "strikethrough"), z = () => T("[", "](https://)", "", { offsetStart: -9, offsetEnd: 8 }), K = () => T(`
> `, `
`, "Blockquote", {}), le = () => T("![](", ")");
    function R(h) {
      const C = I();
      if (C && !h.shiftKey)
        T("`", "`", "code");
      else {
        const Y = n.lang || "js";
        C.indexOf(`
`) === -1 ? T("\n```" + Y + `
`, "\n```\n", "// code") : T("```" + Y + `
`, "```\n", "");
      }
    }
    function W() {
      if (P()) {
        let { sel: h, selPos: C, beforeSel: Y, afterSel: J, prevCRPos: ne, beforeCR: D, afterCR: V } = se();
        if (h.indexOf(`
`) === -1)
          T(`
 1. `, `
`);
        else if (!h.startsWith(" 1. ")) {
          let ue = 1;
          T("", "", " - ", {
            selectionAtEnd: !0,
            filterSelection: (me) => " 1. " + me.replace(/\n$/, "").replace(/\n/g, (S) => `
 ${++ue}. `) + `
`
          });
        } else
          T("", "", "", {
            filterValue: (ue, me) => {
              if (ne >= 0) {
                let S = V.replace(/^ - /, "");
                Y = D + S, me.pos -= V.length - S.length;
              }
              return Y + J;
            },
            filterSelection: (ue) => ue.replace(/^ 1. /g, "").replace(/\n \d+. /g, `
`)
          });
      } else
        T(`
 1. `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function ee() {
      if (P()) {
        let { sel: h, selPos: C, beforeSel: Y, afterSel: J, prevCRPos: ne, beforeCR: D, afterCR: V } = se();
        h.indexOf(`
`) === -1 ? T(`
 - `, `
`) : !h.startsWith(" - ") ? T("", "", " - ", {
          selectionAtEnd: !0,
          filterSelection: (ue) => " - " + ue.replace(/\n$/, "").replace(/\n/g, `
 - `) + `
`
        }) : T("", "", "", {
          filterValue: (ue, me) => {
            if (ne >= 0) {
              let S = V.replace(/^ - /, "");
              Y = D + S, me.pos -= V.length - S.length;
            }
            return Y + J;
          },
          filterSelection: (ue) => ue.replace(/^ - /g, "").replace(/\n - /g, `
`)
        });
      } else
        T(`
 - `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function q() {
      const h = I(), C = h.indexOf(`
`) === -1;
      h ? C ? T(`
## `, `
`, "") : T("## ", "", "") : T(`
## `, `
`, "Heading", { offsetStart: -8, offsetEnd: 7 });
    }
    function A() {
      let { sel: h, selPos: C, beforeSel: Y, afterSel: J, prevCRPos: ne, beforeCR: D, afterCR: V } = se();
      !h.startsWith("//") && !V.startsWith("//") ? h ? T("", "", "//", {
        selectionAtEnd: !0,
        filterSelection: (pe) => "//" + pe.replace(/\n$/, "").replace(/\n/g, `
//`) + `
`
      }) : j({
        value: D + "//" + V + J,
        selectionStart: C + 2
      }) : T("", "", "", {
        filterValue: (pe, ue) => {
          if (ne >= 0) {
            let me = V.replace(/^\/\//, "");
            Y = D + me, ue.pos -= V.length - me.length;
          }
          return Y + J;
        },
        filterSelection: (pe) => pe.replace(/^\/\//g, "").replace(/\n\/\//g, `
`)
      });
    }
    const te = () => T(`/*
`, `*/
`, "");
    function w() {
      if (r.length === 0)
        return !1;
      const h = g.value, C = r.pop();
      return u.push({ value: h.value, selectionStart: h.selectionStart, selectionEnd: h.selectionEnd }), j(C), !0;
    }
    function N() {
      if (u.length === 0)
        return !1;
      const h = g.value, C = u.pop();
      return r.push({ value: h.value, selectionStart: h.selectionStart, selectionEnd: h.selectionEnd }), j(C), !0;
    }
    const E = () => null;
    return Ye(() => {
      r = [], u = [];
      const h = g.value;
      h.onkeydown = (C) => {
        if (C.key === "Escape" || C.keyCode === 27) {
          a("close");
          return;
        }
        const Y = String.fromCharCode(C.keyCode).toLowerCase();
        Y === "	" ? (!C.shiftKey ? T("", "", "    ", {
          selectionAtEnd: !0,
          filterSelection: (ne) => "    " + ne.replace(/\n$/, "").replace(/\n/g, `
    `) + `
`
        }) : T("", "", "", {
          filterValue: (ne, D) => {
            let { selPos: V, beforeSel: fe, afterSel: pe, prevCRPos: ue, beforeCR: me, afterCR: S } = se();
            if (ue >= 0) {
              let ce = S.replace(/\t/g, "    ").replace(/^ ? ? ? ?/, "");
              fe = me + ce, D.pos -= S.length - ce.length;
            }
            return fe + pe;
          },
          filterSelection: (ne) => ne.replace(/\t/g, "    ").replace(/^ ? ? ? ?/g, "").replace(/\n    /g, `
`)
        }), C.preventDefault()) : C.ctrlKey ? Y === "z" ? C.shiftKey ? N() && C.preventDefault() : w() && C.preventDefault() : Y === "b" && !C.shiftKey ? (M(), C.preventDefault()) : Y === "h" && !C.shiftKey ? (q(), C.preventDefault()) : Y === "i" && !C.shiftKey ? (ie(), C.preventDefault()) : Y === "q" && !C.shiftKey ? (K(), C.preventDefault()) : Y === "k" ? C.shiftKey ? (le(), C.preventDefault()) : (z(), C.preventDefault()) : Y === "," || C.key === "<" || C.key === ">" || C.keyCode === 188 ? (R(C), C.preventDefault()) : Y === "/" || C.key === "/" ? (A(), C.preventDefault()) : (Y === "?" || C.key === "?") && C.shiftKey && (te(), C.preventDefault()) : C.altKey && (C.key === "1" || C.key === "0" ? (W(), C.preventDefault()) : C.key === "-" ? (ee(), C.preventDefault()) : C.key === "s" && (L(), C.preventDefault()));
      };
    }), (h, C) => {
      var Y;
      return o(), i("div", null, [
        U(h.$slots, "header", Te({
          inputElement: g.value,
          id: h.id,
          modelValue: h.modelValue,
          status: h.status
        }, h.$attrs)),
        f.value ? (o(), i("label", {
          key: 0,
          for: h.id,
          class: y(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${h.labelClass ?? ""}`)
        }, F(f.value), 11, e1)) : x("", !0),
        h.disabled ? x("", !0) : (o(), i("div", t1, [
          l("div", s1, [
            m("bold") ? (o(), i("svg", {
              key: 0,
              class: y(Je),
              onClick: M,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, o1)) : x("", !0),
            m("italics") ? (o(), i("svg", {
              key: 1,
              class: y(Je),
              onClick: ie,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, i1)) : x("", !0),
            m("link") ? (o(), i("svg", {
              key: 2,
              class: y(Je),
              onClick: z,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, c1)) : x("", !0),
            m("blockquote") ? (o(), i("svg", {
              key: 3,
              class: y(Je),
              onClick: K,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, p1)) : x("", !0),
            m("image") ? (o(), i("svg", {
              key: 4,
              class: y(Je),
              onClick: le,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, g1)) : x("", !0),
            m("code") ? (o(), i("svg", {
              key: 5,
              class: y(Je),
              onClick: R,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, w1)) : x("", !0),
            m("heading") ? (o(), i("svg", {
              key: 6,
              class: y(Je),
              onClick: q,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, $1)) : x("", !0),
            m("orderedList") ? (o(), i("svg", {
              key: 7,
              class: y(Je),
              icon: "",
              onClick: W,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, L1)) : x("", !0),
            m("unorderedList") ? (o(), i("svg", {
              key: 8,
              class: y(Je),
              onClick: ee,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, M1)) : x("", !0),
            m("strikethrough") ? (o(), i("svg", {
              key: 9,
              class: y(Je),
              onClick: L,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, F1)) : x("", !0),
            m("undo") ? (o(), i("svg", {
              key: 10,
              class: y(Je),
              onClick: w,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, O1)) : x("", !0),
            m("redo") ? (o(), i("svg", {
              key: 11,
              class: y(Je),
              onClick: N,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, B1)) : x("", !0),
            U(h.$slots, "toolbarbuttons", {
              instance: (Y = Be()) == null ? void 0 : Y.exposed
            })
          ]),
          m("help") && h.helpUrl ? (o(), i("div", H1, [
            l("a", {
              title: "formatting help",
              target: "_blank",
              href: h.helpUrl,
              tabindex: "-1"
            }, [
              (o(), i("svg", {
                class: y(Je),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }, z1))
            ], 8, R1)
          ])) : x("", !0)
        ])),
        l("div", N1, [
          l("textarea", {
            ref_key: "txt",
            ref: g,
            name: h.id,
            id: h.id,
            class: y(k.value),
            label: h.label,
            value: h.modelValue,
            rows: h.rows || 6,
            disabled: h.disabled,
            onInput: C[0] || (C[0] = (J) => {
              var ne;
              return b(((ne = J.target) == null ? void 0 : ne.value) || "");
            }),
            onKeydown: on(E, ["tab"])
          }, null, 42, U1)
        ]),
        c.value ? (o(), i("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${h.id}-error`
        }, F(c.value), 9, q1)) : h.help ? (o(), i("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${h.id}-description`
        }, F(h.help), 9, Q1)) : x("", !0),
        U(h.$slots, "footer", Te({
          inputElement: g.value,
          id: h.id,
          modelValue: h.modelValue,
          status: h.status
        }, h.$attrs))
      ]);
    };
  }
}), Z1 = {
  key: 0,
  class: "relative z-10 lg:hidden",
  role: "dialog",
  "aria-modal": "true"
}, W1 = { class: "fixed inset-0 flex" }, G1 = /* @__PURE__ */ l("span", { class: "sr-only" }, "Close sidebar", -1), J1 = /* @__PURE__ */ l("svg", {
  class: "h-6 w-6 text-white dark:text-black",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), X1 = [
  G1,
  J1
], Y1 = { class: "flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-black px-6 pb-2" }, eh = { class: "hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col" }, th = { class: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-6" }, sh = {
  class: /* @__PURE__ */ y(["sticky top-0 flex items-center gap-x-6 bg-white dark:bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden"])
}, lh = /* @__PURE__ */ l("span", { class: "sr-only" }, "Open sidebar", -1), nh = /* @__PURE__ */ l("svg", {
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  })
], -1), oh = [
  lh,
  nh
], ah = /* @__PURE__ */ de({
  __name: "SidebarLayout",
  setup(e, { expose: t }) {
    const { transition: s } = bn(), n = O(!0), a = O(""), r = {
      entering: { cls: "transition-opacity ease-linear duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "transition-opacity ease-linear duration-300", from: "opacity-100", to: "opacity-0" }
    }, u = O(""), d = {
      entering: { cls: "transition ease-in-out duration-300 transform", from: "-translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transition ease-in-out duration-300 transform", from: "translate-x-0", to: "-translate-x-full" }
    }, c = O(""), f = {
      entering: { cls: "ease-in-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in-out duration-300", from: "opacity-100", to: "opacity-0" }
    };
    function p(k) {
      s(r, a, k), s(d, u, k), s(f, c, k), setTimeout(() => n.value = k, 300);
    }
    function $() {
      p(!0);
    }
    function m() {
      p(!1);
    }
    return t({ show: $, hide: m, toggle: p }), (k, g) => (o(), i("div", null, [
      n.value ? (o(), i("div", Z1, [
        l("div", {
          class: y(["fixed inset-0 bg-gray-900/80", a.value])
        }, null, 2),
        l("div", W1, [
          l("div", {
            class: y(["relative mr-16 flex w-full max-w-xs flex-1", u.value])
          }, [
            l("div", {
              class: y(["absolute left-full top-0 flex w-16 justify-center pt-5", c.value])
            }, [
              l("button", {
                type: "button",
                onClick: m,
                class: "-m-2.5 p-2.5"
              }, X1)
            ], 2),
            l("div", Y1, [
              U(k.$slots, "default")
            ])
          ], 2)
        ])
      ])) : x("", !0),
      l("div", eh, [
        l("div", th, [
          U(k.$slots, "default")
        ])
      ]),
      l("div", sh, [
        l("button", {
          type: "button",
          onClick: $,
          class: "-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"
        }, oh),
        U(k.$slots, "mobiletitlebar")
      ])
    ]));
  }
}), rh = {
  Alert: ea,
  AlertSuccess: fa,
  ErrorSummary: ga,
  InputDescription: ba,
  Icon: eo,
  Loading: pr,
  OutlineButton: gr,
  PrimaryButton: wr,
  SecondaryButton: $r,
  TextLink: xr,
  Breadcrumbs: Tr,
  Breadcrumb: Dr,
  NavList: Hr,
  NavListItem: Gr,
  AutoQueryGrid: wd,
  SettingsIcons: jd,
  FilterViews: Il,
  FilterColumn: Fl,
  QueryPrefs: jl,
  EnsureAccess: lo,
  EnsureAccessDialog: Od,
  TextInput: qd,
  TextareaInput: Xd,
  SelectInput: nc,
  CheckboxInput: fc,
  TagInput: jc,
  FileInput: l0,
  Autocomplete: b0,
  Combobox: _0,
  DynamicInput: $0,
  LookupInput: H0,
  AutoFormFields: R0,
  AutoForm: df,
  AutoCreateForm: Tf,
  AutoEditForm: Xf,
  AutoViewForm: gv,
  ConfirmDelete: bv,
  FormLoading: xv,
  DataGrid: Av,
  CellFormat: Tv,
  PreviewFormat: Pv,
  HtmlFormat: zv,
  MarkupFormat: qv,
  MarkupModel: ep,
  CloseButton: op,
  SlideOver: wp,
  ModalDialog: Vp,
  ModalLookup: wm,
  Tabs: Mm,
  DarkModeToggle: jm,
  SignIn: Ym,
  MarkdownInput: K1,
  SidebarLayout: ah
}, Qs = rh, vh = {
  install(e) {
    Object.keys(Qs).forEach((s) => {
      e.component(s, Qs[s]);
    });
    function t(s) {
      const a = Object.keys(s).filter((r) => s[r]).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(s[r])}`).join("&");
      return a ? "?" + a : "./";
    }
    e.directive("href", function(s, n) {
      s.href = t(n.value), s.onclick = (a) => {
        a.preventDefault(), history.pushState(n.value, "", t(n.value));
      };
    });
  },
  component(e, t) {
    return e ? t ? G.components[e] = t : G.components[e] || Qs[e] || null : null;
  }
};
export {
  fh as css,
  vh as default,
  Tl as useAuth,
  Ds as useClient,
  It as useConfig,
  La as useFiles,
  ch as useFormatters,
  lt as useMetadata,
  bn as useUtils
};
