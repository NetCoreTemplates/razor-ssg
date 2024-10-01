var po = Object.defineProperty;
var mo = (e, t, s) => t in e ? po(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var Le = (e, t, s) => (mo(e, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as ce, computed as v, openBlock as o, createElementBlock as i, normalizeClass as b, createElementVNode as l, createCommentVNode as x, renderSlot as K, ref as I, toDisplayString as P, inject as Ue, nextTick as $t, isRef as ln, unref as te, mergeProps as Ae, withModifiers as qe, h as yt, resolveComponent as G, createBlock as ae, withCtx as Ce, useAttrs as ho, createVNode as xe, createTextVNode as ke, watchEffect as ws, normalizeStyle as nl, Fragment as Ie, renderList as De, withDirectives as Ct, vModelCheckbox as ol, withKeys as nn, createStaticVNode as xs, vModelSelect as go, useSlots as al, getCurrentInstance as Be, onMounted as st, createSlots as rl, normalizeProps as Ot, guardReactiveProps as ks, vModelDynamic as yo, onUnmounted as zt, watch as St, vModelText as bo, resolveDynamicComponent as on, provide as ss, resolveDirective as wo } from "vue";
import { errorResponseExcept as ko, dateFmt as an, toTime as _o, omit as ft, enc as Ks, appendQueryString as Bt, lastLeftPart as rn, setQueryString as $o, nameOf as Co, ApiResult as Xe, lastRightPart as xt, leftPart as Ls, map as Qe, toDate as Mt, toDateTime as xo, toCamelCase as Lo, mapGet as be, chop as Vo, fromXsdDuration as un, isDate as Vs, timeFmt12 as So, apiValue as Mo, indexOfAny as Ao, createBus as To, toKebabCase as Zl, sanitize as Fo, humanize as ze, delaySet as dn, rightPart as ms, queryString as Zs, combinePaths as Io, toPascalCase as ot, errorResponse as pt, trimEnd as Do, $1 as _s, ResponseStatus as Us, ResponseError as Wl, HttpMethods as il, omitEmpty as Po, uniqueKeys as Ws, humanify as cn, each as jo } from "@servicestack/client";
const Oo = { class: "flex items-center" }, Bo = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, Ro = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Eo = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Ho = [
  Eo
], zo = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, No = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), Uo = [
  No
], qo = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Qo = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Ko = [
  Qo
], Zo = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Wo = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), Go = [
  Wo
], Jo = /* @__PURE__ */ ce({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, s = v(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), n = v(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), a = v(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (o(), i("div", {
      class: b([s.value, n.value, "border-l-4 p-4"])
    }, [
      l("div", Oo, [
        r.hideIcon ? x("", !0) : (o(), i("div", Bo, [
          r.type == "warn" ? (o(), i("svg", Ro, Ho)) : r.type == "error" ? (o(), i("svg", zo, Uo)) : r.type == "info" ? (o(), i("svg", qo, Ko)) : r.type == "success" ? (o(), i("svg", Zo, Go)) : x("", !0)
        ])),
        l("div", null, [
          l("p", {
            class: b([a.value, "text-sm"])
          }, [
            K(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), Xo = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, Yo = { class: "flex" }, ea = /* @__PURE__ */ l("div", { class: "flex-shrink-0" }, [
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
], -1), ta = { class: "ml-3" }, sa = { class: "text-sm font-medium text-green-800" }, la = { key: 0 }, na = { class: "ml-auto pl-3" }, oa = { class: "-mx-1.5 -my-1.5" }, aa = /* @__PURE__ */ l("span", { class: "sr-only" }, "Dismiss", -1), ra = /* @__PURE__ */ l("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ l("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), ia = [
  aa,
  ra
], ua = /* @__PURE__ */ ce({
  __name: "AlertSuccess",
  props: {
    message: {}
  },
  setup(e) {
    const t = I(!1);
    return (s, n) => t.value ? x("", !0) : (o(), i("div", Xo, [
      l("div", Yo, [
        ea,
        l("div", ta, [
          l("h3", sa, [
            s.message ? (o(), i("span", la, P(s.message), 1)) : K(s.$slots, "default", { key: 1 })
          ])
        ]),
        l("div", na, [
          l("div", oa, [
            l("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: n[0] || (n[0] = (a) => t.value = !0)
            }, ia)
          ])
        ])
      ])
    ]));
  }
}), da = { class: "flex" }, ca = /* @__PURE__ */ l("div", { class: "flex-shrink-0" }, [
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
], -1), fa = { class: "ml-3" }, va = { class: "text-sm text-red-700 dark:text-red-200" }, pa = /* @__PURE__ */ ce({
  __name: "ErrorSummary",
  props: {
    status: {},
    except: {},
    class: {}
  },
  setup(e) {
    const t = e;
    let s = Ue("ApiState", void 0);
    const n = v(() => t.status || s != null && s.error.value ? ko.call({ responseStatus: t.status ?? (s == null ? void 0 : s.error.value) }, t.except ?? []) : null);
    return (a, r) => n.value ? (o(), i("div", {
      key: 0,
      class: b(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${a.$props.class}`)
    }, [
      l("div", da, [
        ca,
        l("div", fa, [
          l("p", va, P(n.value), 1)
        ])
      ])
    ], 2)) : x("", !0);
  }
}), ma = ["id", "aria-describedby"], ha = /* @__PURE__ */ ce({
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
      l("div", null, P(t.description), 1)
    ], 8, ma)) : x("", !0);
  }
});
function Ss(e) {
  return an(e).replace(/\//g, "-");
}
function fn(e) {
  return e == null ? "" : _o(e);
}
function vn(e, t) {
  e.value = null, $t(() => e.value = t);
}
function It(e) {
  return Object.keys(e).forEach((t) => {
    const s = e[t];
    e[t] = ln(s) ? te(s) : s;
  }), e;
}
function Lt(e, t, s) {
  s ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function hs(e) {
  if (typeof document > "u")
    return;
  let t = (e == null ? void 0 : e.after) || document.activeElement, s = t && t.form;
  if (s) {
    let n = ':not([disabled]):not([tabindex="-1"])', a = s.querySelectorAll(`a:not([disabled]), button${n}, input[type=text]${n}, [tabindex]${n}`), r = Array.prototype.filter.call(
      a,
      (u) => u.offsetWidth > 0 || u.offsetHeight > 0 || u === t
    ), d = r.indexOf(t);
    d > -1 && (r[d + 1] || r[0]).focus();
  }
}
function Nt(e) {
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
function jt(e) {
  return Vl(e);
}
let ga = ["string", "number", "boolean", "null", "undefined"];
function Vt(e) {
  return ga.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Xt(e) {
  return !Vt(e);
}
class pn {
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
    const s = t ? Bt(rn(location.href, "?"), e) : $o(location.href, e);
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
  const t = Y.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function As(e, t) {
  return Bt(`swr.${Co(e)}`, t ? Object.assign({}, e, t) : e);
}
function ya(e) {
  if (e.request) {
    const t = As(e.request, e.args);
    Y.config.storage.removeItem(t);
  }
}
async function mn(e, t, s, n, a) {
  const r = As(t, n);
  s(new Xe({ response: cl(r) }));
  const d = await e.api(t, n, a);
  if (d.succeeded && d.response) {
    d.response._date = (/* @__PURE__ */ new Date()).valueOf();
    const u = JSON.stringify(d.response);
    Y.config.storage.setItem(r, u), s(d);
  }
  return d;
}
function hn(e, t) {
  let s = null;
  return (...n) => {
    s && clearTimeout(s), s = setTimeout(() => {
      e(...n);
    }, t || 100);
  };
}
function bt(e) {
  return typeof e == "string" ? e.split(",") : e || [];
}
function _t(e, t) {
  const s = bt(t);
  return e.reduce((n, a) => (n[a] = !s.includes(a), n), {});
}
function gn() {
  return {
    LocalStore: pn,
    dateInputFormat: Ss,
    timeInputFormat: fn,
    setRef: vn,
    unRefs: It,
    transition: Lt,
    focusNextElement: hs,
    getTypeName: Nt,
    htmlTag: dt,
    htmlAttrs: Gs,
    linkAttrs: Ms,
    toAppUrl: jt,
    isPrimitive: Vt,
    isComplexType: Xt,
    pushState: ul,
    scopedExpr: dl,
    copyText: Js,
    fromCache: cl,
    swrCacheKey: As,
    swrClear: ya,
    swrApi: mn,
    asStrings: bt,
    asOptions: _t,
    createDebounce: hn
  };
}
const yn = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), bn = {
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
}, Gl = Object.keys(bn), vt = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, gs = {
  img: vt("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: vt("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: vt("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: vt("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: vt("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: vt("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: vt("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: vt("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: vt("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, ba = /[\r\n%#()<>?[\\\]^`{|}]/g, Jl = 1024, wa = ["Bytes", "KB", "MB", "GB", "TB"], ka = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", s = "image/", n = "text/", a = "audio/", r = "video/", d = {
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
  function u(f, p) {
    f.split(",").forEach(($) => d[$] = p);
  }
  function c(f, p) {
    f.split(",").forEach(($) => d[$] = p($));
  }
  return c("jpeg,gif,png,tiff,bmp,webp", (f) => s + f), c("jsx,csv,css", (f) => n + f), c("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (f) => a + f), c("3gpp,avi,dv,divx,ogg,mp4,webm", (f) => r + f), c("rtf,pdf", (f) => e + f), u("htm,html,shtm", n + "html"), u("js,mjs,cjs", n + "javascript"), u("yml,yaml", e + "yaml"), u("bat,cmd", e + "bat"), u("xml,csproj,fsproj,vbproj", n + "xml"), u("txt,ps1", n + "plain"), u("qt,mov", r + "quicktime"), u("doc,dot", e + "msword"), u("xls,xlt,xla", e + "excel"), u("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), u("cer,crt,der", e + "x-x509-ca-cert"), u("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), u("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Xs = [];
function wn(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(ba, encodeURIComponent);
}
function fl(e) {
  return "data:image/svg+xml;utf8," + wn(e);
}
function kn(e) {
  let t = URL.createObjectURL(e);
  return Xs.push(t), t;
}
function _n() {
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
  return xt(t, "/");
}
function ls(e) {
  let t = vl(e);
  return t == null || t.indexOf(".") === -1 ? null : xt(t, ".").toLowerCase();
}
function pl(e) {
  let t = ls(e.name);
  return t && yn.indexOf(t) >= 0 ? kn(e) : wt(e.name);
}
function ml(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = ls(e);
  return t && yn.indexOf(t) >= 0 || !1;
}
function wt(e) {
  if (!e)
    return null;
  let t = ls(e);
  return t == null || ml(e) ? e : Jt(t) || fl(gs.doc);
}
function Jt(e) {
  let t = $n(e);
  return t && fl(t) || null;
}
function $n(e) {
  if (gs[e])
    return gs[e];
  for (let t = 0; t < Gl.length; t++) {
    let s = Gl[t];
    if (bn[s].indexOf(e) >= 0)
      return gs[s];
  }
  return null;
}
function hl(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const s = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(Jl));
  return parseFloat((e / Math.pow(Jl, n)).toFixed(s)) + " " + wa[n];
}
function _a(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: pl(t) }));
}
function Ts(e, t) {
  e.onerror = null, e.src = gl(e.src, t) || "";
}
function gl(e, t) {
  return Jt(xt(e, ".").toLowerCase()) || (t ? Jt(t) || t : null) || Jt("doc");
}
function Ys(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = xt(e, ".").toLowerCase();
  return ka[t] || "application/" + t;
}
function Mm() {
  return {
    extSvg: $n,
    extSrc: Jt,
    getExt: ls,
    encodeSvg: wn,
    canPreview: ml,
    getFileName: vl,
    getMimeType: Ys,
    formatBytes: hl,
    filePathUri: wt,
    svgToDataUri: fl,
    fileImageUri: pl,
    objectUrl: kn,
    flush: _n,
    inputFiles: _a,
    iconOnError: Ts,
    iconFallbackSrc: gl
  };
}
class $a {
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
const Rt = "/metadata/app.json", Ca = {
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
}, xa = {
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
const La = {
  String: "string",
  Boolean: "bool",
  ...el
};
function fs(e) {
  return La[e] || e;
}
function Cn(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? fs(t[0]) + "?" : e.endsWith("[]") ? `List<${fs(e.substring(0, e.length - 2))}>` : t.length === 0 ? fs(e) : Ls(fs(e), "`") + "<" + t.join(",") + ">") : "";
}
function Va(e) {
  return e && Cn(e.name, e.genericArgs);
}
class Et {
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
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((s) => !!s).map((s) => s);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    Ne.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : Ne.isQuery(t) && !this.Query ? this.Query = t : Ne.isCreate(t) && !this.Create ? this.Create = t : Ne.isUpdate(t) && !this.Update ? this.Update = t : Ne.isPatch(t) && !this.Patch ? this.Patch = t : Ne.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const s = new Et();
    return t.forEach((n) => {
      s.add(n);
    }), s;
  }
  static forType(t, s) {
    var a;
    let n = new Et();
    if (Y.config.apisResolver && t) {
      const r = Y.config.apisResolver(t, s);
      r && (n.Query = r.Query, n.QueryInto = r.QueryInto, n.Create = r.Create, n.Update = r.Update, n.Patch = r.Patch, n.Delete = r.Delete);
    }
    return t && (s ?? (s = (a = Y.metadata.value) == null ? void 0 : a.api), s == null || s.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == t && n.add(r);
    })), n;
  }
}
const Ne = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => Qe(e.request.inherits, (t) => Ne.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => Qe(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => Qe(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => {
    var t;
    return (t = e.request.implements) == null ? void 0 : t.some((s) => Ne.AnyWrite.indexOf(s.name) >= 0);
  },
  isCreate: (e) => vs(e, Ne.Create),
  isUpdate: (e) => vs(e, Ne.Update),
  isPatch: (e) => vs(e, Ne.Patch),
  isDelete: (e) => vs(e, Ne.Delete),
  model: (e) => {
    var t, s, n;
    return e ? Qe(e.inherits, (a) => Ne.AnyRead.indexOf(a.name) >= 0) ? (t = e.inherits) == null ? void 0 : t.genericArgs[0] : (n = (s = e.implements) == null ? void 0 : s.find((a) => Ne.AnyWrite.indexOf(a.name) >= 0)) == null ? void 0 : n.genericArgs[0] : null;
  }
};
function Sa(e) {
  var t;
  return ((t = e.input) == null ? void 0 : t.type) || Fs(yl(e));
}
function xn(e) {
  return e.endsWith("?") ? Vo(e, 1) : e;
}
function Fs(e) {
  return Ca[xn(e)];
}
function Ma(e) {
  return e && xa[e] || "String";
}
function yl(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function tl(e) {
  return e && Fs(e) == "number" || !1;
}
function Ln(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function Aa(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function Vn(e) {
  if (!(e != null && e.type))
    return !1;
  const t = yl(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : Fs(e.type) == null;
}
function Sn(e) {
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
      function r(d) {
        Object.assign(this, d);
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
function Ta(e, t, s = {}) {
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
      function r(d) {
        Object.assign(this, d);
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
    typeof n == "string" ? n.startsWith("/Date") && (e[s] = Ss(Mt(n))) : n != null && typeof n == "object" && (Array.isArray(n) ? e[s] = Array.from(n) : e[s] = Object.assign({}, n));
  }), e) : {};
}
function Fa(e, t) {
  let s = {};
  return Array.from(e.elements).forEach((n) => {
    var p;
    let a = n;
    if (!a.id || a.value == null || a.value === "")
      return;
    const r = a.id.toLowerCase(), d = t && t.find(($) => $.name.toLowerCase() == r);
    let u = d == null ? void 0 : d.type, c = (p = d == null ? void 0 : d.genericArgs) == null ? void 0 : p[0], f = a.type === "checkbox" ? a.checked : a.value;
    tl(u) ? f = Number(f) : u === "List`1" && typeof f == "string" && (f = f.split(",").map(($) => tl(c) ? Number($) : $)), s[a.id] = f;
  }), s;
}
function bl(e) {
  var t;
  return ((t = e == null ? void 0 : e.api) == null ? void 0 : t.operations) && e.api.operations.length > 0;
}
function Ia(e) {
  if (!wl() && (e != null && e.assert) && !Y.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return Y.metadata.value;
}
function es(e) {
  return e && bl(e) ? (e.date = xo(/* @__PURE__ */ new Date()), Y.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Rt, JSON.stringify(e)), !0) : !1;
}
function Da() {
  Y.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Rt);
}
function wl() {
  if (Y.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (bl(e))
    es(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(Rt) : null;
    if (t)
      try {
        es(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${Rt} from localStorage`);
      }
  }
  return Y.metadata.value != null;
}
async function Xl(e, t) {
  let s = t ? await t() : await fetch(e);
  if (s.ok) {
    let n = await s.text();
    es(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${s.statusText}`);
  bl(Y.metadata.value) || console.warn("AppMetadata is not available");
}
async function Pa(e) {
  var r;
  const { olderThan: t, resolvePath: s, resolve: n } = e || {};
  let a = wl() && t !== 0;
  if (a && t) {
    let d = Mt((r = Y.metadata.value) == null ? void 0 : r.date);
    (!d || (/* @__PURE__ */ new Date()).getTime() - d.getTime() > t) && (a = !1);
  }
  if (!a) {
    if ((s || n) && (await Xl(s || Rt, n), Y.metadata.value != null))
      return;
    const d = Ue("client");
    if (d != null) {
      const u = await d.api(new $a());
      u.succeeded && es(u.response);
    }
    if (Y.metadata.value != null)
      return;
    await Xl(Rt);
  }
  return Y.metadata.value;
}
function at(e, t) {
  var d;
  if (Y.config.typeResolver) {
    let u = Y.config.typeResolver(e, t);
    if (u)
      return u;
  }
  let s = (d = Y.metadata.value) == null ? void 0 : d.api;
  if (!s || !e)
    return null;
  let n = s.types.find((u) => u.name.toLowerCase() === e.toLowerCase() && (!t || u.namespace == t));
  if (n)
    return n;
  let a = Is(e);
  if (a)
    return a.request;
  let r = s.operations.find((u) => u.response && u.response.name.toLowerCase() === e.toLowerCase() && (!t || u.response.namespace == t));
  return r ? r.response : null;
}
function Is(e) {
  var n;
  if (Y.config.apiResolver) {
    const a = Y.config.apiResolver(e);
    if (a)
      return a;
  }
  let t = (n = Y.metadata.value) == null ? void 0 : n.api;
  return t ? t.operations.find((a) => a.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function ja({ dataModel: e }) {
  var n;
  const t = (n = Y.metadata.value) == null ? void 0 : n.api;
  if (!t)
    return [];
  let s = t.operations;
  if (e) {
    const a = typeof e == "string" ? at(e) : e;
    s = s.filter((r) => Mn(r.dataModel, a));
  }
  return s;
}
function kl(e) {
  return e ? at(e.name, e.namespace) : null;
}
function Mn(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function Oa(e, t) {
  let s = at(e);
  return s && s.properties && s.properties.find((a) => a.name.toLowerCase() === t.toLowerCase());
}
function An(e) {
  return Tn(at(e));
}
function Tn(e) {
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
function Fn(e) {
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
    const a = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = at(a);
    if (r)
      return Tn(r);
  }
  return null;
}
function _l(e) {
  if (!e)
    return;
  const t = [];
  return Object.keys(e).forEach((s) => t.push({ key: s, value: e[s] })), t;
}
function Ba(e, t) {
  const n = ((a, r) => Object.assign({
    id: a,
    name: a,
    type: r
  }, t))(e.name, (t == null ? void 0 : t.type) || Sa(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = _l(Fn(e))), n;
}
function Ra(e) {
  let t = [];
  if (e) {
    const s = tt(e), n = Is(e.name), a = kl(n == null ? void 0 : n.dataModel);
    s.forEach((r) => {
      var u, c, f;
      if (!Sn(r))
        return;
      const d = Ba(r, r.input);
      if (d.id = Lo(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const p = (c = (u = Y.metadata.value) == null ? void 0 : u.plugins.filesUpload) == null ? void 0 : c.locations.find(($) => $.name == r.uploadTo);
        p && !d.accept && p.allowExtensions && (d.accept = p.allowExtensions.map(($) => $.startsWith(".") ? $ : `.${$}`).join(","));
      }
      if (a) {
        const p = (f = a.properties) == null ? void 0 : f.find(($) => $.name == r.name);
        r.ref || (r.ref = p == null ? void 0 : p.ref);
      }
      if (d.options)
        try {
          const p = {
            input: d,
            $typeFields: s.map((m) => m.name),
            $dataModelFields: a ? tt(a).map((m) => m.name) : [],
            ...Y.config.scopeWhitelist
          }, $ = dl(d.options, p);
          Object.keys($).forEach((m) => {
            d[m] = $[m];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      t.push(d);
    });
  }
  return t;
}
function $l(e, t) {
  var a, r;
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const s = at(t.type);
  if (!(s != null && s.enumValues))
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let d = 0; d < s.enumValues.length; d++) {
    const u = parseInt(s.enumValues[d]);
    u > 0 && (u & e) === u && n.push(((a = s.enumDescriptions) == null ? void 0 : a[d]) || ((r = s.enumNames) == null ? void 0 : r[d]) || `${e}`);
  }
  return n;
}
function In(e) {
  return (t) => typeof t == "number" ? $l(t, { type: e }) : t;
}
function tt(e) {
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
  return e ? Dn(e, tt(e)) : null;
}
function Dn(e, t) {
  let s = t.find((r) => r.name.toLowerCase() === "id");
  if (s && s.isPrimaryKey)
    return s;
  let a = t.find((r) => r.isPrimaryKey) || s;
  if (!a) {
    let r = Ne.model(e);
    if (r)
      return Qe(at(r), (d) => ns(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return a || null;
}
function Ea(e, t) {
  return Qe(ns(e), (s) => be(t, s.name));
}
function Pn(e, t, s) {
  return e && e.valueType === "none" ? "" : s.key === "%In" || s.key === "%Between" ? `(${s.value})` : Ha(t, s.value);
}
function Ha(e, t) {
  return e ? (e = xn(e), tl(e) || e === "Boolean" ? t : Aa(e) ? `[${t}]` : `'${t}'`) : t;
}
function ht(e, t) {
  return { name: e, value: t };
}
const za = [
  ht("=", "%"),
  ht("!=", "%!"),
  ht(">=", ">%"),
  ht(">", "%>"),
  ht("<=", "%<"),
  ht("<", "<%"),
  ht("In", "%In"),
  ht("Between", "%Between"),
  { name: "Starts With", value: "%StartsWith", types: "string" },
  { name: "Contains", value: "%Contains", types: "string" },
  { name: "Ends With", value: "%EndsWith", types: "string" },
  { name: "Exists", value: "%IsNotNull", valueType: "none" },
  { name: "Not Exists", value: "%IsNull", valueType: "none" }
];
function rt() {
  const e = v(() => {
    var n;
    return ((n = Y.metadata.value) == null ? void 0 : n.app) || null;
  }), t = v(() => {
    var n;
    return ((n = Y.metadata.value) == null ? void 0 : n.api) || null;
  }), s = v(() => {
    var n, a, r;
    return ((r = (a = (n = Y.metadata.value) == null ? void 0 : n.plugins) == null ? void 0 : a.autoQuery) == null ? void 0 : r.viewerConventions) || za;
  });
  return wl(), {
    loadMetadata: Pa,
    getMetadata: Ia,
    setMetadata: es,
    clearMetadata: Da,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: s,
    typeOf: at,
    typeOfRef: kl,
    typeEquals: Mn,
    apiOf: Is,
    findApis: ja,
    typeName: Va,
    typeName2: Cn,
    property: Oa,
    enumOptions: An,
    propertyOptions: Fn,
    createFormLayout: Ra,
    typeProperties: tt,
    supportsProp: Sn,
    Crud: Ne,
    Apis: Et,
    getPrimaryKey: ns,
    getPrimaryKeyByProps: Dn,
    getId: Ea,
    createDto: Yt,
    makeDto: Ta,
    toFormValues: ys,
    formValues: Fa,
    isComplexProp: Vn,
    asKvps: _l,
    expandEnumFlags: $l,
    enumFlagsConverter: In
  };
}
const Ye = class Ye {
  static async getOrFetchValue(t, s, n, a, r, d, u) {
    const c = Ye.getValue(n, u, r);
    return c ?? (await Ye.fetchLookupIds(t, s, n, a, r, d, [u]), Ye.getValue(n, u, r));
  }
  static getValue(t, s, n) {
    const a = Ye.Lookup[t];
    if (a) {
      const r = a[s];
      if (r)
        return n = n.toLowerCase(), r[n];
    }
  }
  static setValue(t, s, n, a) {
    const r = Ye.Lookup[t] ?? (Ye.Lookup[t] = {}), d = r[s] ?? (r[s] = {});
    n = n.toLowerCase(), d[n] = a;
  }
  static setRefValue(t, s) {
    const n = be(s, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const a = be(s, t.refLabel);
    return Ye.setValue(t.model, n, t.refLabel, a), a;
  }
  static async fetchLookupIds(t, s, n, a, r, d, u) {
    const c = s.operations.find((f) => {
      var p;
      return Ne.isAnyQuery(f) && ((p = f.dataModel) == null ? void 0 : p.name) == n;
    });
    if (c) {
      const f = Ye.Lookup[n] ?? (Ye.Lookup[n] = {}), p = [];
      Object.keys(f).forEach((j) => {
        const H = f[j];
        be(H, r) && p.push(j);
      });
      const $ = u.filter((j) => !p.includes(j));
      if ($.length == 0)
        return;
      const m = d ? null : `${a},${r}`, k = {
        [a + "In"]: $.join(",")
      };
      m && (k.fields = m);
      const g = Yt(c, k), w = await t.api(g, { jsconfig: "edv,eccn" });
      if (w.succeeded)
        (be(w.response, "results") || []).forEach((H) => {
          if (!be(H, a)) {
            console.error(`result[${a}] == null`, H);
            return;
          }
          const re = `${be(H, a)}`, F = be(H, r);
          r = r.toLowerCase();
          const T = f[re] ?? (f[re] = {});
          T[r] = `${F}`;
        });
      else {
        console.error(`Failed to call ${c.request.name}`);
        return;
      }
    }
  }
};
Le(Ye, "Lookup", {});
let Dt = Ye, sl = () => (/* @__PURE__ */ new Date()).getTime(), Na = ["/", "T", ":", "-"], ct = {
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
}, Ua = new Intl.RelativeTimeFormat(ct.locale, {}), Yl = 24 * 60 * 60 * 1e3 * 365, qs = {
  year: Yl,
  month: Yl / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, kt = {
  currency: On,
  bytes: Bn,
  link: Rn,
  linkTel: En,
  linkMailTo: Hn,
  icon: zn,
  iconRounded: Nn,
  attachment: Un,
  hidden: qn,
  time: Qn,
  relativeTime: xl,
  relativeTimeFromMs: Ds,
  enumFlags: Zn,
  formatDate: Ut,
  formatNumber: Cl
};
"iconOnError" in globalThis || (globalThis.iconOnError = Ts);
class Ke {
}
Le(Ke, "currency", { method: "currency" }), Le(Ke, "bytes", { method: "bytes" }), Le(Ke, "link", { method: "link" }), Le(Ke, "linkTel", { method: "linkTel" }), Le(Ke, "linkMailTo", { method: "linkMailTo" }), Le(Ke, "icon", { method: "icon" }), Le(Ke, "iconRounded", { method: "iconRounded" }), Le(Ke, "attachment", { method: "attachment" }), Le(Ke, "time", { method: "time" }), Le(Ke, "relativeTime", { method: "relativeTime" }), Le(Ke, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), Le(Ke, "date", { method: "formatDate" }), Le(Ke, "number", { method: "formatNumber" }), Le(Ke, "hidden", { method: "hidden" }), Le(Ke, "enumFlags", { method: "enumFlags" });
function qa(e) {
  ct = Object.assign({}, ct, e);
}
function Qa(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (kt[t] = e[t]);
  });
}
function jn() {
  return kt;
}
function os(e, t) {
  return t ? dt("span", e, t) : e;
}
function On(e, t) {
  const s = ft(t, ["currency"]);
  return os(new Intl.NumberFormat(void 0, { style: "currency", currency: (t == null ? void 0 : t.currency) || "USD" }).format(e), s);
}
function Bn(e, t) {
  return os(hl(e), t);
}
function Rn(e, t) {
  return dt("a", e, Ms({ ...t, href: e }));
}
function En(e, t) {
  return dt("a", e, Ms({ ...t, href: `tel:${e}` }));
}
function Hn(e, t) {
  t || (t = {});
  let { subject: s, body: n } = t, a = ft(t, ["subject", "body"]), r = {};
  return s && (r.subject = s), n && (r.body = n), dt("a", e, Ms({ ...a, href: `mailto:${Bt(e, r)}` }));
}
function zn(e, t) {
  return dt("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: jt(e), onerror: "iconOnError(this)" }, t));
}
function Nn(e, t) {
  return dt("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: jt(e), onerror: "iconOnError(this)" }, t));
}
function Un(e, t) {
  let s = vl(e), a = ls(s) == null || ml(e) ? jt(e) : gl(e);
  const r = jt(a);
  let d = t && (t["icon-class"] || t.iconClass), u = dt("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), c = `<span class="pl-1">${s}</span>`;
  return dt("a", u + c, Object.assign({ class: "flex", href: jt(e), title: e }, t ? ft(t, ["icon-class", "iconClass"]) : null));
}
function qn(e) {
  return "";
}
function Qn(e, t) {
  let s = typeof e == "string" ? new Date(un(e) * 1e3) : Vs(e) ? Mt(e) : null;
  return os(s ? So(s) : e, t);
}
function Ut(e, t) {
  if (e == null)
    return "";
  let s = typeof e == "number" ? new Date(e) : typeof e == "string" ? Mt(e) : e;
  if (!Vs(s))
    return console.warn(`${s} is not a Date value`), e == null ? "" : `${e}`;
  let n = ct.date ? Ps(ct.date) : null;
  return os(typeof n == "function" ? n(s) : an(s), t);
}
function Cl(e, t) {
  if (typeof e != "number")
    return e;
  let s = ct.number ? Ps(ct.number) : null, n = typeof s == "function" ? s(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, s), n = `${e}`), os(n, t);
}
function Kn(e, t, s) {
  let n = Mo(e), a = t ? Ps(t) : null;
  if (typeof a == "function") {
    let d = s;
    if (t != null && t.options)
      try {
        d = dl(t.options, s);
      } catch (u) {
        console.error(`Could not evaluate '${t.options}'`, u, ", with scope:", s);
      }
    return a(e, d);
  }
  let r = n != null ? Vs(n) ? Ut(n, s) : typeof n == "number" ? Cl(n, s) : n : null;
  return r ?? "";
}
function ts(e, t, s) {
  return Vt(e) ? Kn(e, t, s) : Ja(e, t, s);
}
function Ka(e) {
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
    if (Ao(e, Na) >= 0)
      return Mt(e).getTime() - sl();
  }
  return NaN;
}
function Ds(e, t) {
  for (let s in qs)
    if (Math.abs(e) > qs[s] || s === "second")
      return (t || Ua).format(Math.round(e / qs[s]), s);
}
function xl(e, t) {
  let s = Ka(e);
  return isNaN(s) ? "" : Ds(s, t);
}
function Za(e, t) {
  return Ds(e.getTime() - (t ? t.getTime() : sl()));
}
function Zn(e, t) {
  return $l(e, t).join(", ");
}
function Ps(e) {
  if (!e)
    return null;
  let { method: t, options: s } = e, n = `${t}(${s})`, a = kt[n] || kt[t];
  if (typeof a == "function")
    return a;
  let r = e.locale || ct.locale;
  if (t.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", u = `return new ${t}(${d},${s || "undefined"})`;
    try {
      let c = Function(u)();
      return a = t === "Intl.DateTimeFormat" ? (f) => c.format(Mt(f)) : t === "Intl.NumberFormat" ? (f) => c.format(Number(f)) : t === "Intl.RelativeTimeFormat" ? (f) => xl(f, c) : (f) => c.format(f), kt[n] = a;
    } catch (c) {
      console.error(`Invalid format: ${u}`, c);
    }
  } else {
    let d = globalThis[t];
    if (typeof d == "function") {
      let u = s != null ? Function("return " + s)() : void 0;
      return a = (c) => d(c, u, r), kt[n] = a;
    }
    console.error(`No '${t}' function exists`, Object.keys(kt));
  }
  return null;
}
function Wn(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Gn(e) {
  return e.substring(0, 6) === "/Date(" ? Ut(Mt(e)) : e;
}
function Wa(e) {
  return Ll(Ht(e)).replace(/"/g, "");
}
function Jn(e) {
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
  return e = Jn(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function Ga(e) {
  return e = Jn(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = Ht(e), Ll(e));
}
function Ht(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return Gn(e);
  if (Vt(e))
    return e;
  if (e instanceof Date)
    return Ut(e);
  if (Array.isArray(e))
    return e.map(Ht);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((s) => {
      s != "__type" && (t[s] = Ht(e[s]));
    }), t;
  }
  return e;
}
function Ja(e, t, s) {
  let n = e;
  if (Array.isArray(e)) {
    if (Vt(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null)
    return "";
  if (n instanceof Date)
    return Ut(n, s);
  let a = Object.keys(n), r = [];
  for (let d = 0; d < Math.min(ct.maxNestedFields, a.length); d++) {
    let u = a[d], c = `${Ht(n[u])}`;
    r.push(`<b class="font-medium">${u}</b>: ${Ks(Wn(Gn(c), ct.maxNestedFieldLength))}`);
  }
  return a.length > 2 && r.push("..."), dt("span", "{ " + r.join(", ") + " }", Object.assign({ title: Ks(Wa(e)) }, s));
}
function Am() {
  return {
    Formats: Ke,
    setDefaultFormats: qa,
    getFormatters: jn,
    setFormatters: Qa,
    formatValue: ts,
    formatter: Ps,
    dateInputFormat: Ss,
    currency: On,
    bytes: Bn,
    link: Rn,
    linkTel: En,
    linkMailTo: Hn,
    icon: zn,
    iconRounded: Nn,
    attachment: Un,
    hidden: qn,
    time: Qn,
    relativeTime: xl,
    relativeTimeFromDate: Za,
    relativeTimeFromMs: Ds,
    enumFlags: Zn,
    formatDate: Ut,
    formatNumber: Cl,
    indentJson: Ll,
    prettyJson: Ga,
    scrub: Ht,
    truncate: Wn,
    apiValueFmt: Kn,
    iconOnError: Ts
  };
}
const Xa = ["title"], Ya = /* @__PURE__ */ ce({
  __name: "RouterLink",
  props: {
    to: {}
  },
  setup(e) {
    const t = e, { config: s } = At(), n = () => s.value.navigate(t.to ?? "/");
    return (a, r) => (o(), i("a", Ae({
      onClick: qe(n, ["prevent"]),
      title: a.to,
      href: "javascript:void(0)"
    }, a.$attrs), [
      K(a.$slots, "default")
    ], 16, Xa));
  }
});
class er {
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
const et = class et {
  static component(t) {
    const s = et.components[t];
    if (s)
      return s;
    const n = Zl(t), a = Object.keys(et.components).find((r) => Zl(r) === n);
    return a && et.components[a] || null;
  }
};
Le(et, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (t) => location.href = t,
  assetsPathResolver: (t) => t,
  fallbackPathResolver: (t) => t,
  storage: new pn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
  scopeWhitelist: {
    enumFlagsConverter: In,
    ...jn()
  }
}), Le(et, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), Le(et, "events", To()), Le(et, "user", I(null)), Le(et, "metadata", I(null)), Le(et, "components", {
  RouterLink: Ya
}), Le(et, "interceptors", new er());
let Y = et;
function tr(e) {
  Y.config = Object.assign(Y.config, e);
}
function sr(e) {
  Y.autoQueryGridDefaults = Object.assign(Y.autoQueryGridDefaults, e);
}
function Vl(e) {
  return e && Y.config.assetsPathResolver ? Y.config.assetsPathResolver(e) : e;
}
function lr(e) {
  return e && Y.config.fallbackPathResolver ? Y.config.fallbackPathResolver(e) : e;
}
function nr(e, t) {
  Y.interceptors.register(e, t);
}
function At() {
  const e = v(() => Y.config), t = v(() => Y.autoQueryGridDefaults), s = Y.events;
  return {
    config: e,
    setConfig: tr,
    events: s,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: sr,
    assetsPathResolver: Vl,
    fallbackPathResolver: lr,
    registerInterceptor: nr
  };
}
const Xn = ce({
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
        const { typeOf: r } = rt(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? s = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || (s == null ? void 0 : s.svg) || "";
      if (n.startsWith("<svg ")) {
        let d = Ls(n, ">").indexOf("class="), u = `${(s == null ? void 0 : s.cls) || ""} ${t.class || ""}`;
        if (d == -1)
          n = `<svg class="${u}" ${n.substring(4)}`;
        else {
          const c = d + 6 + 1;
          n = `${n.substring(0, c) + u} ${n.substring(c)}`;
        }
        return yt("span", { innerHTML: n });
      } else
        return yt("img", {
          class: [s == null ? void 0 : s.cls, t.class],
          src: Vl(e.src || (s == null ? void 0 : s.uri)),
          onError: (r) => Ts(r.target)
        });
    };
  }
}), or = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, ar = { class: "flex" }, rr = /* @__PURE__ */ l("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), ir = /* @__PURE__ */ l("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), ur = [
  rr,
  ir
], dr = /* @__PURE__ */ ce({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, s) => (o(), i("div", or, [
      l("div", ar, [
        (o(), i("svg", {
          class: b(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", t.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, ur, 2)),
        l("span", null, [
          K(t.$slots, "default")
        ])
      ])
    ]));
  }
}), cr = ["href", "onClick"], fr = ["type"], en = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black", vr = /* @__PURE__ */ ce({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: {}
  },
  setup(e) {
    return (t, s) => {
      const n = G("router-link");
      return t.href ? (o(), ae(n, {
        key: 0,
        to: t.href
      }, {
        default: Ce(({ navigate: a }) => [
          l("button", {
            class: b(en),
            href: t.href,
            onClick: a
          }, [
            K(t.$slots, "default")
          ], 8, cr)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), i("button", Ae({
        key: 1,
        type: t.type,
        class: en
      }, t.$attrs), [
        K(t.$slots, "default")
      ], 16, fr));
    };
  }
}), pr = ["href", "onClick"], mr = ["type"], hr = /* @__PURE__ */ ce({
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
      const d = G("router-link");
      return a.href ? (o(), ae(d, {
        key: 0,
        to: a.href
      }, {
        default: Ce(({ navigate: u }) => [
          l("button", {
            class: b(n.value),
            href: a.href,
            onClick: u
          }, [
            K(a.$slots, "default")
          ], 10, pr)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), i("button", Ae({
        key: 1,
        type: a.type,
        class: n.value
      }, a.$attrs), [
        K(a.$slots, "default")
      ], 16, mr));
    };
  }
}), gr = ["type", "href", "onClick"], yr = ["type"], tn = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black", br = /* @__PURE__ */ ce({
  __name: "SecondaryButton",
  props: {
    type: {},
    href: {}
  },
  setup(e) {
    return (t, s) => {
      const n = G("router-link");
      return t.href ? (o(), ae(n, {
        key: 0,
        to: t.href
      }, {
        default: Ce(({ navigate: a }) => [
          l("button", {
            type: t.type ?? "button",
            class: b(tn),
            href: t.href,
            onClick: a
          }, [
            K(t.$slots, "default")
          ], 8, gr)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), i("button", Ae({
        key: 1,
        type: t.type ?? "button",
        class: tn
      }, t.$attrs), [
        K(t.$slots, "default")
      ], 16, yr));
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
}, nt = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, Gt = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, Pt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, ll = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ze = {
  panelClass(e = "slideOver") {
    return e == "card" ? Gt.panelClass : Pt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? Gt.formClass : Pt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? Gt.headingClass : Pt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? Gt.subHeadingClass : Pt.subHeadingClass;
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
}, wr = {
  colspans: "col-span-3 sm:col-span-3"
}, Tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: Cs,
  card: Gt,
  dummy: wr,
  form: Ze,
  grid: he,
  input: nt,
  modal: ll,
  slideOver: Pt
}, Symbol.toStringTag, { value: "Module" })), kr = /* @__PURE__ */ ce({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = ho(), s = e, n = v(() => (Cs[s.color] || Cs.blue) + (t.href ? "" : " cursor-pointer"));
    return (a, r) => (o(), i("a", {
      class: b(n.value)
    }, [
      K(a.$slots, "default")
    ], 2));
  }
}), _r = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, $r = {
  role: "list",
  class: "flex items-center space-x-4"
}, Cr = ["href", "title"], xr = /* @__PURE__ */ l("svg", {
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
], -1), Lr = { class: "sr-only" }, Vr = /* @__PURE__ */ ce({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, s) => (o(), i("nav", _r, [
      l("ol", $r, [
        l("li", null, [
          l("div", null, [
            l("a", {
              href: t.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: t.homeLabel
            }, [
              xr,
              l("span", Lr, P(t.homeLabel), 1)
            ], 8, Cr)
          ])
        ]),
        K(t.$slots, "default")
      ])
    ]));
  }
}), Sr = { class: "flex items-center" }, Mr = /* @__PURE__ */ l("svg", {
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
], -1), Ar = ["href", "title"], Tr = ["title"], Fr = /* @__PURE__ */ ce({
  __name: "Breadcrumb",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, s) => (o(), i("li", null, [
      l("div", Sr, [
        Mr,
        t.href ? (o(), i("a", {
          key: 0,
          href: t.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: t.title
        }, [
          K(t.$slots, "default")
        ], 8, Ar)) : (o(), i("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: t.title
        }, [
          K(t.$slots, "default")
        ], 8, Tr))
      ])
    ]));
  }
}), Ir = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, Dr = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, Pr = /* @__PURE__ */ ce({
  __name: "NavList",
  props: {
    title: {}
  },
  setup(e) {
    return (t, s) => (o(), i("div", null, [
      t.title ? (o(), i("h2", Ir, P(t.title), 1)) : x("", !0),
      l("ul", Dr, [
        K(t.$slots, "default")
      ])
    ]));
  }
}), jr = { class: "relative flex items-start space-x-4 py-6" }, Or = { class: "flex-shrink-0" }, Br = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, Rr = { class: "min-w-0 flex-1" }, Er = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, Hr = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, zr = ["href"], Nr = /* @__PURE__ */ l("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Ur = { class: "text-base text-gray-500" }, qr = /* @__PURE__ */ l("div", { class: "flex-shrink-0 self-center" }, [
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
], -1), Qr = /* @__PURE__ */ ce({
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
      const n = G("Icon");
      return o(), i("li", jr, [
        l("div", Or, [
          l("span", Br, [
            xe(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: t.icon,
              src: t.iconSrc,
              svg: t.iconSvg,
              alt: t.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        l("div", Rr, [
          l("h3", Er, [
            l("span", Hr, [
              l("a", {
                href: t.href,
                class: "focus:outline-none"
              }, [
                Nr,
                ke(" " + P(t.title), 1)
              ], 8, zr)
            ])
          ]),
          l("p", Ur, [
            K(t.$slots, "default")
          ])
        ]),
        qr
      ]);
    };
  }
});
function Yn(e) {
  return e && e.SessionId ? Fo(e) : e;
}
function Kr(e) {
  Y.user.value = Yn(e), Y.events.publish("signIn", e);
}
function Zr() {
  Y.user.value = null, Y.events.publish("signOut", null);
}
const Sl = (e) => (e == null ? void 0 : e.roles) || [], Ml = (e) => (e == null ? void 0 : e.permissions) || [];
function eo(e) {
  return Sl(Y.user.value).indexOf(e) >= 0;
}
function Wr(e) {
  return Ml(Y.user.value).indexOf(e) >= 0;
}
function Al() {
  return eo("Admin");
}
function bs(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const t = Y.user.value;
  if (!t)
    return !1;
  if (Al())
    return !0;
  let [s, n] = [Sl(t), Ml(t)], [a, r, d, u] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!a.every((c) => s.indexOf(c) >= 0) || d.length > 0 && !d.some((c) => s.indexOf(c) >= 0) || !r.every((c) => n.indexOf(c) >= 0) || u.length > 0 && !u.every((c) => n.indexOf(c) >= 0));
}
function Gr(e) {
  if (!e || !e.requiresAuth)
    return null;
  const t = Y.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (Al())
    return null;
  let [s, n] = [Sl(t), Ml(t)], [a, r, d, u] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], c = a.filter((p) => s.indexOf(p) < 0);
  if (c.length > 0)
    return `Requires ${c.map((p) => "<b>" + p + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "");
  let f = r.filter((p) => n.indexOf(p) < 0);
  return f.length > 0 ? `Requires ${f.map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (f.length > 1 ? "s" : "") : d.length > 0 && !d.some((p) => s.indexOf(p) >= 0) ? `Requires any ${d.filter((p) => s.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "") : u.length > 0 && !u.every((p) => n.indexOf(p) >= 0) ? `Requires any ${u.filter((p) => n.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (f.length > 1 ? "s" : "") : null;
}
function Tl() {
  const e = v(() => Y.user.value || null), t = v(() => Y.user.value != null);
  return { signIn: Kr, signOut: Zr, user: e, toAuth: Yn, isAuthenticated: t, hasRole: eo, hasPermission: Wr, isAdmin: Al, canAccess: bs, invalidAccessMessage: Gr };
}
const Jr = { key: 0 }, Xr = { class: "md:p-4" }, to = /* @__PURE__ */ ce({
  __name: "EnsureAccess",
  props: {
    invalidAccess: {},
    alertClass: {}
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = Tl(), { config: s } = At(), n = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Bt(s.value.redirectSignIn, { redirect: r });
      s.value.navigate(d);
    }, a = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Bt(s.value.redirectSignOut, { ReturnUrl: r });
      s.value.navigate(d);
    };
    return (r, d) => {
      const u = G("Alert"), c = G("SecondaryButton");
      return r.invalidAccess ? (o(), i("div", Jr, [
        xe(u, {
          class: b(r.alertClass),
          innerHTML: r.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        l("div", Xr, [
          te(t) ? (o(), ae(c, {
            key: 1,
            onClick: a
          }, {
            default: Ce(() => [
              ke("Sign Out")
            ]),
            _: 1
          })) : (o(), ae(c, {
            key: 0,
            onClick: n
          }, {
            default: Ce(() => [
              ke("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : x("", !0);
    };
  }
}), Yr = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, ei = { class: "p-4" }, ti = /* @__PURE__ */ l("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), si = { class: "flex w-full justify-center" }, li = /* @__PURE__ */ l("svg", {
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
], -1), ni = /* @__PURE__ */ l("span", null, "ASC", -1), oi = [
  li,
  ni
], ai = /* @__PURE__ */ xs('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), ri = [
  ai
], ii = /* @__PURE__ */ l("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), ui = { key: 0 }, di = ["id", "value"], ci = ["for"], fi = { key: 1 }, vi = { class: "mb-2" }, pi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, mi = ["onClick"], hi = /* @__PURE__ */ l("svg", {
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
], -1), gi = [
  hi
], yi = { class: "flex" }, bi = /* @__PURE__ */ l("svg", {
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
], -1), wi = [
  bi
], ki = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Fl = /* @__PURE__ */ ce({
  __name: "FilterColumn",
  props: {
    definitions: {},
    column: {},
    topLeft: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const s = e, n = t, a = I(), r = I(""), d = I(""), u = I([]), c = v(() => s.column.meta.isEnum == !0), f = v(() => at(s.column.meta.type === "Nullable`1" ? s.column.meta.genericArgs[0] : s.column.meta.type)), p = v(() => s.column.meta.isEnum == !0 ? _l(An(f.value.name)) : []), $ = v(() => {
      var V;
      return ((V = g(s.column.type)) == null ? void 0 : V.map((z) => ({ key: z.value, value: z.name }))) || [];
    }), m = I({ filters: [] }), k = v(() => m.value.filters);
    ws(() => m.value = Object.assign({}, s.column.settings, {
      filters: Array.from(s.column.settings.filters)
    })), ws(() => {
      var z, Q, se, R, Z;
      let V = ((se = (Q = (z = s.column.settings.filters) == null ? void 0 : z[0]) == null ? void 0 : Q.value) == null ? void 0 : se.split(",")) || [];
      if (V.length > 0 && ((R = f.value) != null && R.isEnumInt)) {
        const J = parseInt(V[0]);
        V = ((Z = f.value.enumValues) == null ? void 0 : Z.filter((U) => (J & parseInt(U)) > 0)) || [];
      }
      u.value = V;
    });
    function g(V) {
      let z = s.definitions;
      return Ln(V) || (z = z.filter((Q) => Q.types !== "string")), z;
    }
    function w(V, z) {
      return g(V).find((Q) => Q.value === z);
    }
    function j() {
      var z;
      if (!r.value)
        return;
      let V = (z = w(s.column.type, r.value)) == null ? void 0 : z.name;
      V && (m.value.filters.push({ key: r.value, name: V, value: d.value }), r.value = d.value = "");
    }
    function H(V) {
      m.value.filters.splice(V, 1);
    }
    function re(V) {
      return Pn(w(s.column.type, V.key), s.column.type, V);
    }
    function F() {
      n("done");
    }
    function T() {
      var V;
      r.value = "%", (V = a.value) == null || V.focus();
    }
    function A() {
      var V;
      if (d.value && j(), c.value) {
        let z = Object.values(u.value).filter((Q) => Q);
        m.value.filters = z.length > 0 ? (V = f.value) != null && V.isEnumInt ? [{ key: "%HasAny", name: "HasAny", value: z.map((Q) => parseInt(Q)).reduce((Q, se) => Q + se, 0).toString() }] : [{ key: "%In", name: "In", value: z.join(",") }] : [];
      }
      n("save", m.value), n("done");
    }
    function ue(V) {
      m.value.sort = V === m.value.sort ? void 0 : V, $t(A);
    }
    return (V, z) => {
      var J;
      const Q = G("SelectInput"), se = G("TextInput"), R = G("PrimaryButton"), Z = G("SecondaryButton");
      return o(), i("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: F,
        onVnodeMounted: T
      }, [
        l("div", {
          class: "absolute",
          style: nl(`top:${V.topLeft.y}px;left:${V.topLeft.x}px`),
          onClick: z[5] || (z[5] = qe(() => {
          }, ["stop"]))
        }, [
          l("div", Yr, [
            l("div", ei, [
              ti,
              l("div", si, [
                l("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: z[0] || (z[0] = (U) => ue("ASC")),
                  class: b(`${m.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, oi, 2),
                l("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: z[1] || (z[1] = (U) => ue("DESC")),
                  class: b(`${m.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, ri, 2)
              ]),
              ii,
              c.value ? (o(), i("div", ui, [
                (o(!0), i(Ie, null, De(p.value, (U) => (o(), i("div", {
                  key: U.key,
                  class: "flex items-center"
                }, [
                  Ct(l("input", {
                    type: "checkbox",
                    id: U.key,
                    value: U.key,
                    "onUpdate:modelValue": z[2] || (z[2] = (M) => u.value = M),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, di), [
                    [ol, u.value]
                  ]),
                  l("label", {
                    for: U.key,
                    class: "ml-3"
                  }, P(U.value), 9, ci)
                ]))), 128))
              ])) : (o(), i("div", fi, [
                (o(!0), i(Ie, null, De(k.value, (U, M) => (o(), i("div", vi, [
                  l("span", pi, [
                    ke(P(V.column.name) + " " + P(U.name) + " " + P(re(U)) + " ", 1),
                    l("button", {
                      type: "button",
                      onClick: (ee) => H(M),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, gi, 8, mi)
                  ])
                ]))), 256)),
                l("div", yi, [
                  xe(Q, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: r.value,
                    "onUpdate:modelValue": z[3] || (z[3] = (U) => r.value = U),
                    entries: $.value,
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((J = w(V.column.type, r.value)) == null ? void 0 : J.valueType) !== "none" ? (o(), ae(se, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: a,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: d.value,
                    "onUpdate:modelValue": z[4] || (z[4] = (U) => d.value = U),
                    onKeyup: nn(j, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue"])) : x("", !0),
                  l("div", { class: "pt-1" }, [
                    l("button", {
                      type: "button",
                      onClick: j,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, wi)
                  ])
                ])
              ]))
            ]),
            l("div", ki, [
              xe(R, {
                onClick: A,
                color: "red",
                class: "ml-2"
              }, {
                default: Ce(() => [
                  ke(" Save ")
                ]),
                _: 1
              }),
              xe(Z, { onClick: F }, {
                default: Ce(() => [
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
}), _i = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, $i = { class: "flex flex-wrap" }, Ci = { class: "group pr-4 sm:pr-6 lg:pr-8" }, xi = { class: "flex justify-between w-full font-medium" }, Li = { class: "w-6 flex justify-end" }, Vi = { class: "hidden group-hover:inline" }, Si = ["onClick", "title"], Mi = /* @__PURE__ */ l("svg", {
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
], -1), Ai = [
  Mi
], Ti = {
  key: 0,
  class: "pt-2"
}, Fi = { class: "ml-2" }, Ii = { key: 1 }, Di = { class: "pt-2" }, Pi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, ji = ["onClick"], Oi = /* @__PURE__ */ l("svg", {
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
], -1), Bi = [
  Oi
], Ri = /* @__PURE__ */ l("span", null, "Clear All", -1), Ei = [
  Ri
], Il = /* @__PURE__ */ ce({
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
    function d(m) {
      let k = s.definitions;
      return Ln(m) || (k = k.filter((g) => g.types !== "string")), k;
    }
    function u(m, k) {
      return d(m).find((g) => g.value === k);
    }
    function c(m, k) {
      return Pn(u(m.type, k.value), m.type, k);
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
    return (m, k) => (o(), i("div", _i, [
      l("div", $i, [
        (o(!0), i(Ie, null, De(a.value, (g) => (o(), i("fieldset", Ci, [
          l("legend", xi, [
            l("span", null, P(te(ze)(g.name)), 1),
            l("span", Li, [
              l("span", Vi, [
                l("button", {
                  onClick: (w) => f(g),
                  title: `Clear all ${te(ze)(g.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, Ai, 8, Si)
              ])
            ])
          ]),
          g.meta.isEnum ? (o(), i("div", Ti, [
            (o(!0), i(Ie, null, De(r(g.settings.filters), (w) => (o(), i("div", {
              key: w,
              class: "flex items-center"
            }, [
              l("label", Fi, P(w), 1)
            ]))), 128))
          ])) : (o(), i("div", Ii, [
            (o(!0), i(Ie, null, De(g.settings.filters, (w, j) => (o(), i("div", Di, [
              l("span", Pi, [
                ke(P(g.name) + " " + P(w.name) + " " + P(c(g, w)) + " ", 1),
                l("button", {
                  type: "button",
                  onClick: (H) => p(g, j),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, Bi, 8, ji)
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
        }, Ei)
      ])
    ]));
  }
}), Hi = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, zi = { class: "" }, Ni = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Ui = /* @__PURE__ */ l("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), qi = { class: "mt-4" }, Qi = ["for"], Ki = ["id"], Zi = ["value", "selected"], Wi = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Gi = ["id", "checked"], Ji = ["for"], Xi = { class: "mt-4" }, Yi = { class: "pb-2 px-4" }, eu = { class: "" }, tu = ["id", "value"], su = ["for"], lu = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Dl = /* @__PURE__ */ ce({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: {},
    prefs: {},
    maxLimit: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const { autoQueryGridDefaults: s } = At(), n = e, a = t, r = I({});
    ws(() => r.value = Object.assign({
      take: s.value.take,
      selectedColumns: []
    }, n.prefs));
    const d = [10, 25, 50, 100, 250, 500, 1e3];
    function u() {
      a("done");
    }
    function c() {
      a("save", r.value);
    }
    return (f, p) => {
      const $ = G("PrimaryButton"), m = G("SecondaryButton"), k = G("ModalDialog");
      return o(), ae(k, {
        id: f.id,
        onDone: u,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: Ce(() => [
          l("div", Hi, [
            l("div", zi, [
              l("div", Ni, [
                Ui,
                l("div", qi, [
                  l("label", {
                    for: `${f.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Qi),
                  Ct(l("select", {
                    id: `${f.id}-take`,
                    "onUpdate:modelValue": p[0] || (p[0] = (g) => r.value.take = g),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), i(Ie, null, De(d.filter((g) => n.maxLimit == null || g <= n.maxLimit), (g) => (o(), i("option", {
                      value: g,
                      selected: g === r.value.take
                    }, P(g), 9, Zi))), 256))
                  ], 8, Ki), [
                    [go, r.value.take]
                  ])
                ]),
                l("div", Wi, [
                  l("input", {
                    type: "radio",
                    id: `${f.id}-allColumns`,
                    onClick: p[1] || (p[1] = (g) => r.value.selectedColumns = []),
                    checked: r.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Gi),
                  l("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${f.id}-allColumns`
                  }, "View all columns", 8, Ji)
                ]),
                l("div", Xi, [
                  l("div", Yi, [
                    l("div", eu, [
                      (o(!0), i(Ie, null, De(f.columns, (g) => (o(), i("div", {
                        key: g.name,
                        class: "flex items-center"
                      }, [
                        Ct(l("input", {
                          type: "checkbox",
                          id: g.name,
                          value: g.name,
                          "onUpdate:modelValue": p[2] || (p[2] = (w) => r.value.selectedColumns = w),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, tu), [
                          [ol, r.value.selectedColumns]
                        ]),
                        l("label", {
                          for: g.name,
                          class: "ml-3"
                        }, P(g.name), 9, su)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          l("div", lu, [
            xe($, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: Ce(() => [
                ke(" Save ")
              ]),
              _: 1
            }),
            xe(m, { onClick: u }, {
              default: Ce(() => [
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
}), nu = { key: 0 }, ou = { key: 1 }, au = {
  key: 2,
  class: "pt-1"
}, ru = { key: 0 }, iu = { key: 1 }, uu = { key: 3 }, du = { class: "pl-1 pt-1 flex flex-wrap" }, cu = { class: "flex mt-1" }, fu = ["title"], vu = /* @__PURE__ */ l("svg", {
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
], -1), pu = [
  vu
], mu = ["disabled"], hu = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), gu = [
  hu
], yu = ["disabled"], bu = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), wu = [
  bu
], ku = ["disabled"], _u = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), $u = [
  _u
], Cu = ["disabled"], xu = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), Lu = [
  xu
], Vu = {
  key: 0,
  class: "flex mt-1"
}, Su = { class: "px-4 text-lg text-black dark:text-white" }, Mu = { key: 0 }, Au = { key: 1 }, Tu = /* @__PURE__ */ l("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Fu = { key: 2 }, Iu = { class: "flex flex-wrap" }, Du = {
  key: 0,
  class: "pl-2 mt-1"
}, Pu = /* @__PURE__ */ l("svg", {
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
], -1), ju = [
  Pu
], Ou = {
  key: 1,
  class: "pl-2 mt-1"
}, Bu = /* @__PURE__ */ xs('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), Ru = [
  Bu
], Eu = {
  key: 2,
  class: "pl-2 mt-1"
}, Hu = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, zu = /* @__PURE__ */ l("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Nu = [
  zu
], Uu = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qu = /* @__PURE__ */ l("g", { fill: "none" }, [
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
], -1), Qu = [
  qu
], Ku = /* @__PURE__ */ l("span", { class: "whitespace-nowrap" }, "Copy URL", -1), Zu = {
  key: 3,
  class: "pl-2 mt-1"
}, Wu = /* @__PURE__ */ l("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), Gu = [
  Wu
], Ju = {
  key: 4,
  class: "pl-2 mt-1"
}, Xu = /* @__PURE__ */ l("svg", {
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
], -1), Yu = { class: "mr-1" }, ed = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, td = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), sd = [
  td
], ld = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, nd = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), od = [
  nd
], ad = {
  key: 5,
  class: "pl-2 mt-1"
}, rd = ["title"], id = /* @__PURE__ */ l("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), ud = { class: "whitespace-nowrap" }, dd = { key: 7 }, cd = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, fd = { class: "mr-1 select-none" }, vd = {
  key: 1,
  class: "flex justify-between items-center"
}, pd = { class: "mr-1 select-none" }, ps = 25, md = /* @__PURE__ */ ce({
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
    const { config: n, autoQueryGridDefaults: a } = At(), r = a, d = n.value.storage, u = e, c = s, f = Ue("client"), p = "filtering,queryString,queryFilters".split(","), $ = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), m = v(() => u.deny ? _t(p, u.deny) : _t(p, r.value.deny)), k = v(() => u.hide ? _t($, u.hide) : _t($, r.value.hide));
    function g(_) {
      return m.value[_];
    }
    function w(_) {
      return k.value[_];
    }
    const j = v(() => u.tableStyle ?? r.value.tableStyle), H = v(() => u.gridClass ?? he.getGridClass(j.value)), re = v(() => u.grid2Class ?? he.getGrid2Class(j.value)), F = v(() => u.grid3Class ?? he.getGrid3Class(j.value)), T = v(() => u.grid4Class ?? he.getGrid4Class(j.value)), A = v(() => u.tableClass ?? he.getTableClass(j.value)), ue = v(() => u.theadClass ?? he.getTheadClass(j.value)), V = v(() => u.theadRowClass ?? he.getTheadRowClass(j.value)), z = v(() => u.theadCellClass ?? he.getTheadCellClass(j.value)), Q = v(() => u.toolbarButtonClass ?? he.toolbarButtonClass);
    function se(_, O) {
      var Fe;
      if (u.rowClass)
        return u.rowClass(_, O);
      const ve = !!we.value.AnyUpdate, $e = ((Fe = Ve.value) != null && Fe.name ? be(_, Ve.value.name) : null) == W.value;
      return he.getTableRowClass(u.tableStyle, O, $e, ve);
    }
    const R = al(), Z = v(() => {
      var _;
      return Hs(((_ = we.value.AnyQuery.viewModel) == null ? void 0 : _.name) || we.value.AnyQuery.dataModel.name);
    }), J = v(() => {
      const _ = Object.keys(R).map((O) => O.toLowerCase());
      return tt(Z.value).filter((O) => _.includes(O.name.toLowerCase()) || _.includes(O.name.toLowerCase() + "-header")).map((O) => O.name);
    });
    function U() {
      let _ = bt(u.selectedColumns);
      return _.length > 0 ? _ : J.value.length > 0 ? J.value : [];
    }
    const M = v(() => {
      let O = U().map((oe) => oe.toLowerCase());
      const ve = tt(Z.value);
      return O.length > 0 ? O.map((oe) => ve.find(($e) => $e.name.toLowerCase() === oe)).filter((oe) => oe != null) : ve;
    }), ee = v(() => {
      let _ = M.value.map((ve) => ve.name), O = bt(pe.value.selectedColumns).map((ve) => ve.toLowerCase());
      return O.length > 0 ? _.filter((ve) => O.includes(ve.toLowerCase())) : _;
    }), y = I([]), N = I(new Xe()), E = I(new Xe()), h = I(), C = I(!1), W = I(), X = I(), le = I(!1), D = I(), L = I(u.skip), fe = I(!1), pe = I({ take: ps }), ie = I(!1), me = v(() => y.value.some((_) => _.settings.filters.length > 0 || !!_.settings.sort) || pe.value.selectedColumns), S = v(() => y.value.map((_) => _.settings.filters.length).reduce((_, O) => _ + O, 0)), de = v(() => {
      var _;
      return tt(Hs(Ft.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name)));
    }), Ve = v(() => {
      var _;
      return ns(Hs(Ft.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name)));
    }), Se = v(() => pe.value.take ?? ps), ge = v(() => N.value.response ? be(N.value.response, "results") : []), B = v(() => {
      var _;
      return (((_ = N.value.response) == null ? void 0 : _.total) || ge.value.length) ?? 0;
    }), q = v(() => L.value > 0), ne = v(() => L.value > 0), ye = v(() => ge.value.length >= Se.value), _e = v(() => ge.value.length >= Se.value), Me = I(), Re = I(), Te = {
      NoQuery: "No Query API was found"
    };
    t({
      update: lt,
      search: jl,
      createRequestArgs: Rs,
      reset: Ql,
      createDone: Zt,
      createSave: Ns,
      editDone: Kt,
      editSave: ds,
      forceUpdate: Bs,
      setEdit: Os,
      edit: X,
      createForm: Me,
      editForm: Re,
      apiPrefs: pe,
      results: ge,
      skip: L,
      take: Se,
      total: B
    }), Y.interceptors.has("AutoQueryGrid.new") && Y.interceptors.invoke("AutoQueryGrid.new", { props: u });
    function je(_) {
      if (_) {
        if (u.canFilter)
          return u.canFilter(_);
        const O = de.value.find((ve) => ve.name.toLowerCase() == _.toLowerCase());
        if (O)
          return !Vn(O);
      }
      return !1;
    }
    function Pe(_) {
      c("nav", _), g("queryString") && ul(_);
    }
    async function We(_) {
      L.value += _, L.value < 0 && (L.value = 0);
      const O = Math.floor(B.value / Se.value) * Se.value;
      L.value > O && (L.value = O), Pe({ skip: L.value || void 0 }), await lt();
    }
    async function Ee(_, O) {
      var $e, Fe;
      if (X.value = null, W.value = O, !_ || !O)
        return;
      let ve = Yt(we.value.AnyQuery, { [_]: O });
      const oe = await f.api(ve);
      if (oe.succeeded) {
        let He = ($e = be(oe.response, "results")) == null ? void 0 : $e[0];
        He || console.warn(`API ${(Fe = we.value.AnyQuery) == null ? void 0 : Fe.request.name}(${_}:${O}) returned no results`), X.value = He;
      }
    }
    async function it(_, O) {
      var $e;
      c("rowSelected", _, O);
      const ve = ($e = Ve.value) == null ? void 0 : $e.name, oe = ve ? be(_, ve) : null;
      !ve || !oe || (Pe({ edit: oe }), Ee(ve, oe));
    }
    function Tt(_, O) {
      var oe;
      if (!g("filtering"))
        return;
      let ve = O.target;
      if (je(_) && (ve == null ? void 0 : ve.tagName) !== "TD") {
        let $e = (oe = ve == null ? void 0 : ve.closest("TABLE")) == null ? void 0 : oe.getBoundingClientRect(), Fe = y.value.find((He) => He.name.toLowerCase() == _.toLowerCase());
        if (Fe && $e) {
          let He = 318, ut = $e.x + He + 10;
          D.value = {
            column: Fe,
            topLeft: {
              x: Math.max(Math.floor(O.clientX + He / 2), ut),
              y: $e.y + 45
            }
          };
        }
      }
      c("headerSelected", _, O);
    }
    function mt() {
      D.value = null;
    }
    async function as(_) {
      var ve;
      let O = (ve = D.value) == null ? void 0 : ve.column;
      O && (O.settings = _, d.setItem(is(O.name), JSON.stringify(O.settings)), await lt()), D.value = null;
    }
    async function rs(_) {
      d.setItem(is(_.name), JSON.stringify(_.settings)), await lt();
    }
    async function so(_) {
      le.value = !1, pe.value = _, d.setItem(Es(), JSON.stringify(_)), await lt();
    }
    function Pl(_) {
      var O;
      Me.value && (Object.assign((O = Me.value) == null ? void 0 : O.model, _), Bs());
    }
    function Os(_) {
      Object.assign(X.value, _), Bs();
    }
    function Bs() {
      var O, ve, oe;
      (O = Me.value) == null || O.forceUpdate(), (ve = Re.value) == null || ve.forceUpdate();
      const _ = Be();
      (oe = _ == null ? void 0 : _.proxy) == null || oe.$forceUpdate();
    }
    async function lt() {
      await jl(Rs());
    }
    async function lo() {
      await lt();
    }
    const no = /iPad|iPhone|iPod/.test(navigator.userAgent);
    async function jl(_) {
      const O = we.value.AnyQuery;
      if (!O) {
        console.error(Te.NoQuery);
        return;
      }
      let ve = Yt(O, _), oe = await f.api(ve);
      dn((He) => {
        N.value.response = N.value.error = void 0, ie.value = He, no ? $t(() => N.value = oe) : N.value = oe;
      })();
      let Fe = be(oe.response, "results") || [];
      !oe.succeeded || Fe.label == 0;
    }
    function Rs() {
      let _ = {
        include: "total",
        take: Se.value
      }, O = bt(pe.value.selectedColumns || u.selectedColumns);
      if (O.length > 0) {
        let oe = Ve.value;
        oe && !O.includes(oe.name) && (O = [oe.name, ...O]);
        const $e = de.value, Fe = [];
        O.forEach((He) => {
          var cs;
          const ut = $e.find((Oe) => Oe.name.toLowerCase() == He.toLowerCase());
          (cs = ut == null ? void 0 : ut.ref) != null && cs.selfId && Fe.push(ut.ref.selfId), be(R, He) && Fe.push(...$e.filter((Oe) => {
            var gt, Wt;
            return ((Wt = (gt = Oe.ref) == null ? void 0 : gt.selfId) == null ? void 0 : Wt.toLowerCase()) == He.toLowerCase();
          }).map((Oe) => Oe.name));
        }), Fe.forEach((He) => {
          O.includes(He) || O.push(He);
        }), _.fields = O.join(",");
      }
      let ve = [];
      if (y.value.forEach((oe) => {
        oe.settings.sort && ve.push((oe.settings.sort === "DESC" ? "-" : "") + oe.name), oe.settings.filters.forEach(($e) => {
          let Fe = $e.key.replace("%", oe.name);
          _[Fe] = $e.value;
        });
      }), u.filters && Object.keys(u.filters).forEach((oe) => {
        _[oe] = u.filters[oe];
      }), g("queryString") && g("queryFilters")) {
        const oe = location.search ? location.search : location.hash.includes("?") ? "?" + ms(location.hash, "?") : "";
        let $e = Zs(oe);
        if (Object.keys($e).forEach((Fe) => {
          M.value.find((ut) => ut.name.toLowerCase() === Fe.toLowerCase()) && (_[Fe] = $e[Fe]);
        }), typeof $e.skip < "u") {
          const Fe = parseInt($e.skip);
          isNaN(Fe) || (L.value = _.skip = Fe);
        }
      }
      return typeof _.skip > "u" && L.value > 0 && (_.skip = L.value), ve.length > 0 && (_.orderBy = ve.join(",")), _;
    }
    function oo() {
      const _ = Ol("csv");
      Js(_), typeof window < "u" && window.open(_);
    }
    function ao() {
      const _ = Ol("json");
      Js(_), fe.value = !0, setTimeout(() => fe.value = !1, 3e3);
    }
    function Ol(_ = "json") {
      var Fe;
      const O = Rs(), ve = `/api/${(Fe = we.value.AnyQuery) == null ? void 0 : Fe.request.name}`, oe = Io(f.baseUrl, Bt(ve, { ...O, jsconfig: "edv" }));
      return oe.indexOf("?") >= 0 ? Ls(oe, "?") + "." + _ + "?" + ms(oe, "?") : oe + ".json";
    }
    async function ro() {
      y.value.forEach((_) => {
        _.settings = { filters: [] }, d.removeItem(is(_.name));
      }), pe.value = { take: ps }, d.removeItem(Es()), await lt();
    }
    function io() {
      C.value = !0, Pe({ create: null });
    }
    const Ft = v(() => Nt(u.type)), qt = v(() => {
      var _;
      return Ft.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name);
    }), Qt = v(() => u.modelTitle || qt.value), uo = v(() => u.newButtonLabel || `New ${Qt.value}`), Es = () => {
      var _;
      return `${u.id}/ApiPrefs/${Ft.value || ((_ = we.value.AnyQuery) == null ? void 0 : _.dataModel.name)}`;
    }, is = (_) => {
      var O;
      return `Column/${u.id}:${Ft.value || ((O = we.value.AnyQuery) == null ? void 0 : O.dataModel.name)}.${_}`;
    }, { metadataApi: Bl, typeOf: Hs, apiOf: Rl, filterDefinitions: co } = rt(), { invalidAccessMessage: zs } = Tl(), El = v(() => u.filterDefinitions || co.value), we = v(() => {
      let _ = bt(u.apis);
      return _.length > 0 ? Et.from(_.map((O) => Rl(O)).filter((O) => O != null).map((O) => O)) : Et.forType(Ft.value, Bl.value);
    }), us = (_) => `<span class="text-yellow-700">${_}</span>`, Hl = v(() => {
      if (!Bl.value)
        return us(`AppMetadata not loaded, see <a class="${Cs.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let O = bt(u.apis).map((oe) => Rl(oe) == null ? oe : null).filter((oe) => oe != null);
      if (O.length > 0)
        return us(`Unknown API${O.length > 1 ? "s" : ""}: ${O.join(", ")}`);
      let ve = we.value;
      return ve.empty ? us("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ve.AnyQuery ? null : us(Te.NoQuery);
    }), zl = v(() => we.value.AnyQuery && zs(we.value.AnyQuery)), Nl = v(() => we.value.Create && zs(we.value.Create)), Ul = v(() => we.value.AnyUpdate && zs(we.value.AnyUpdate)), fo = v(() => bs(we.value.Create));
    v(() => bs(we.value.AnyUpdate));
    const ql = v(() => bs(we.value.Delete));
    function Kt() {
      X.value = null, W.value = null, Pe({ edit: void 0 });
    }
    function Zt() {
      C.value = !1, Pe({ create: void 0 });
    }
    async function ds() {
      await lt(), Kt();
    }
    async function Ns() {
      await lt(), Zt();
    }
    function Ql() {
      var ve;
      N.value = new Xe(), E.value = new Xe(), C.value = !1, W.value = null, X.value = null, le.value = !1, D.value = null, L.value = u.skip, fe.value = !1, pe.value = { take: ps }, ie.value = !1;
      const _ = u.prefs || $s(d.getItem(Es()));
      _ && (pe.value = _), y.value = M.value.map((oe) => ({
        name: oe.name,
        type: oe.type,
        meta: oe,
        settings: Object.assign(
          {
            filters: []
          },
          $s(d.getItem(is(oe.name)))
        )
      })), isNaN(u.skip) || (L.value = u.skip);
      let O = (ve = Ve.value) == null ? void 0 : ve.name;
      if (g("queryString")) {
        const oe = location.search ? location.search : location.hash.includes("?") ? "?" + ms(location.hash, "?") : "";
        let $e = Zs(oe);
        typeof $e.create < "u" ? C.value = typeof $e.create < "u" : O && (typeof $e.edit == "string" || typeof $e.edit == "number") && Ee(O, $e.edit);
      }
      u.create === !0 && (C.value = !0), O && u.edit != null && Ee(O, u.edit);
    }
    return st(async () => {
      Ql(), await lt();
    }), (_, O) => {
      const ve = G("Alert"), oe = G("EnsureAccessDialog"), $e = G("AutoCreateForm"), Fe = G("AutoEditForm"), He = G("ErrorSummary"), ut = G("Loading"), Kl = G("SettingsIcons"), cs = G("DataGrid");
      return Hl.value ? (o(), i("div", nu, [
        xe(ve, { innerHTML: Hl.value }, null, 8, ["innerHTML"])
      ])) : zl.value ? (o(), i("div", ou, [
        xe(to, { "invalid-access": zl.value }, null, 8, ["invalid-access"])
      ])) : (o(), i("div", au, [
        C.value && we.value.Create ? (o(), i("div", ru, [
          Nl.value ? (o(), ae(oe, {
            key: 0,
            title: `Create ${Qt.value}`,
            "invalid-access": Nl.value,
            "alert-class": "text-yellow-700",
            onDone: Zt
          }, null, 8, ["title", "invalid-access"])) : te(R).createform ? K(_.$slots, "createform", {
            key: 1,
            type: we.value.Create.request.name,
            configure: _.configureField,
            done: Zt,
            save: Ns
          }) : (o(), ae($e, {
            key: 2,
            ref_key: "createForm",
            ref: Me,
            type: we.value.Create.request.name,
            configure: _.configureField,
            onDone: Zt,
            onSave: Ns
          }, {
            header: Ce(() => [
              K(_.$slots, "formheader", {
                form: "create",
                formInstance: Me.value,
                apis: we.value,
                type: qt.value,
                updateModel: Pl
              })
            ]),
            footer: Ce(() => [
              K(_.$slots, "formfooter", {
                form: "create",
                formInstance: Me.value,
                apis: we.value,
                type: qt.value,
                updateModel: Pl
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : X.value && we.value.AnyUpdate ? (o(), i("div", iu, [
          Ul.value ? (o(), ae(oe, {
            key: 0,
            title: `Update ${Qt.value}`,
            "invalid-access": Ul.value,
            "alert-class": "text-yellow-700",
            onDone: Kt
          }, null, 8, ["title", "invalid-access"])) : te(R).editform ? K(_.$slots, "editform", {
            key: 1,
            model: X.value,
            type: we.value.AnyUpdate.request.name,
            deleteType: ql.value ? we.value.Delete.request.name : null,
            configure: _.configureField,
            done: Kt,
            save: ds
          }) : (o(), ae(Fe, {
            key: 2,
            ref_key: "editForm",
            ref: Re,
            modelValue: X.value,
            "onUpdate:modelValue": O[0] || (O[0] = (Oe) => X.value = Oe),
            type: we.value.AnyUpdate.request.name,
            deleteType: ql.value ? we.value.Delete.request.name : null,
            configure: _.configureField,
            onDone: Kt,
            onSave: ds,
            onDelete: ds
          }, {
            header: Ce(() => [
              K(_.$slots, "formheader", {
                form: "edit",
                formInstance: Re.value,
                apis: we.value,
                type: qt.value,
                model: X.value,
                id: W.value,
                updateModel: Os
              })
            ]),
            footer: Ce(() => [
              K(_.$slots, "formfooter", {
                form: "edit",
                formInstance: Re.value,
                apis: we.value,
                type: qt.value,
                model: X.value,
                id: W.value,
                updateModel: Os
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : x("", !0),
        te(R).toolbar ? K(_.$slots, "toolbar", { key: 2 }) : w("toolbar") ? (o(), i("div", uu, [
          le.value ? (o(), ae(Dl, {
            key: 0,
            columns: M.value,
            prefs: pe.value,
            onDone: O[1] || (O[1] = (Oe) => le.value = !1),
            onSave: so
          }, null, 8, ["columns", "prefs"])) : x("", !0),
          l("div", du, [
            l("div", cu, [
              w("preferences") ? (o(), i("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${Qt.value} Preferences`,
                onClick: O[2] || (O[2] = (Oe) => le.value = !le.value)
              }, pu, 8, fu)) : x("", !0),
              w("pagingNav") ? (o(), i("button", {
                key: 1,
                type: "button",
                class: b(["pl-2", q.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !q.value,
                onClick: O[3] || (O[3] = (Oe) => We(-B.value))
              }, gu, 10, mu)) : x("", !0),
              w("pagingNav") ? (o(), i("button", {
                key: 2,
                type: "button",
                class: b(["pl-2", ne.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !ne.value,
                onClick: O[4] || (O[4] = (Oe) => We(-Se.value))
              }, wu, 10, yu)) : x("", !0),
              w("pagingNav") ? (o(), i("button", {
                key: 3,
                type: "button",
                class: b(["pl-2", ye.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !ye.value,
                onClick: O[5] || (O[5] = (Oe) => We(Se.value))
              }, $u, 10, ku)) : x("", !0),
              w("pagingNav") ? (o(), i("button", {
                key: 4,
                type: "button",
                class: b(["pl-2", _e.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !_e.value,
                onClick: O[6] || (O[6] = (Oe) => We(B.value))
              }, Lu, 10, Cu)) : x("", !0)
            ]),
            w("pagingInfo") ? (o(), i("div", Vu, [
              l("div", Su, [
                ie.value ? (o(), i("span", Mu, "Querying...")) : x("", !0),
                ge.value.length ? (o(), i("span", Au, [
                  Tu,
                  ke(" " + P(L.value + 1) + " - " + P(Math.min(L.value + ge.value.length, B.value)) + " ", 1),
                  l("span", null, " of " + P(B.value), 1)
                ])) : N.value.completed ? (o(), i("span", Fu, "No Results")) : x("", !0)
              ])
            ])) : x("", !0),
            l("div", Iu, [
              w("refresh") ? (o(), i("div", Du, [
                l("button", {
                  type: "button",
                  onClick: lo,
                  title: "Refresh",
                  class: b(Q.value)
                }, ju, 2)
              ])) : x("", !0),
              w("downloadCsv") ? (o(), i("div", Ou, [
                l("button", {
                  type: "button",
                  onClick: oo,
                  title: "Download CSV",
                  class: b(Q.value)
                }, Ru, 2)
              ])) : x("", !0),
              w("copyApiUrl") ? (o(), i("div", Eu, [
                l("button", {
                  type: "button",
                  onClick: ao,
                  title: "Copy API URL",
                  class: b(Q.value)
                }, [
                  fe.value ? (o(), i("svg", Hu, Nu)) : (o(), i("svg", Uu, Qu)),
                  Ku
                ], 2)
              ])) : x("", !0),
              me.value && w("resetPreferences") ? (o(), i("div", Zu, [
                l("button", {
                  type: "button",
                  onClick: ro,
                  title: "Reset Preferences & Filters",
                  class: b(Q.value)
                }, Gu, 2)
              ])) : x("", !0),
              w("filtersView") && S.value > 0 ? (o(), i("div", Ju, [
                l("button", {
                  type: "button",
                  onClick: O[7] || (O[7] = (Oe) => h.value = h.value == "filters" ? null : "filters"),
                  class: b(Q.value),
                  "aria-expanded": "false"
                }, [
                  Xu,
                  l("span", Yu, P(S.value) + " " + P(S.value == 1 ? "Filter" : "Filters"), 1),
                  h.value != "filters" ? (o(), i("svg", ed, sd)) : (o(), i("svg", ld, od))
                ], 2)
              ])) : x("", !0),
              w("newItem") && we.value.Create && fo.value ? (o(), i("div", ad, [
                l("button", {
                  type: "button",
                  onClick: io,
                  title: Qt.value,
                  class: b(Q.value)
                }, [
                  id,
                  l("span", ud, P(uo.value), 1)
                ], 10, rd)
              ])) : x("", !0),
              te(R).toolbarbuttons ? K(_.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: Q.value
              }) : x("", !0)
            ])
          ])
        ])) : x("", !0),
        h.value == "filters" ? (o(), ae(Il, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: El.value,
          columns: y.value,
          onDone: O[8] || (O[8] = (Oe) => h.value = null),
          onChange: rs
        }, null, 8, ["definitions", "columns"])) : x("", !0),
        E.value.error ?? N.value.error ? (o(), ae(He, {
          key: 5,
          status: E.value.error ?? N.value.error
        }, null, 8, ["status"])) : ie.value ? (o(), ae(ut, {
          key: 6,
          class: "p-2"
        })) : x("", !0),
        D.value ? (o(), i("div", dd, [
          xe(Fl, {
            definitions: El.value,
            column: D.value.column,
            "top-left": D.value.topLeft,
            onDone: mt,
            onSave: as
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : x("", !0),
        ge.value.length ? (o(), ae(cs, {
          key: 8,
          id: _.id,
          items: ge.value,
          type: _.type,
          "selected-columns": ee.value,
          class: "mt-1",
          onFiltersChanged: lt,
          tableStyle: j.value,
          gridClass: H.value,
          grid2Class: re.value,
          grid3Class: F.value,
          grid4Class: T.value,
          tableClass: A.value,
          theadClass: ue.value,
          theadRowClass: V.value,
          theadCellClass: z.value,
          tbodyClass: _.tbodyClass,
          rowClass: se,
          onRowSelected: it,
          rowStyle: _.rowStyle,
          headerTitle: _.headerTitle,
          headerTitles: _.headerTitles,
          visibleFrom: _.visibleFrom,
          onHeaderSelected: Tt
        }, rl({
          header: Ce(({ column: Oe, label: gt }) => {
            var Wt;
            return [
              g("filtering") && je(Oe) ? (o(), i("div", cd, [
                l("span", fd, P(gt), 1),
                xe(Kl, {
                  column: y.value.find((vo) => vo.name.toLowerCase() === Oe.toLowerCase()),
                  "is-open": ((Wt = D.value) == null ? void 0 : Wt.column.name) === Oe
                }, null, 8, ["column", "is-open"])
              ])) : (o(), i("div", vd, [
                l("span", pd, P(gt), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          De(Object.keys(te(R)), (Oe) => ({
            name: Oe,
            fn: Ce((gt) => [
              K(_.$slots, Oe, Ot(ks(gt)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : x("", !0)
      ]));
    };
  }
}), hd = { class: "flex" }, gd = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yd = /* @__PURE__ */ l("g", { fill: "none" }, [
  /* @__PURE__ */ l("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), bd = [
  yd
], wd = /* @__PURE__ */ l("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), kd = /* @__PURE__ */ l("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), _d = [
  wd,
  kd
], $d = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Cd = /* @__PURE__ */ l("g", { fill: "none" }, [
  /* @__PURE__ */ l("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), xd = [
  Cd
], Ld = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Vd = /* @__PURE__ */ l("g", { fill: "none" }, [
  /* @__PURE__ */ l("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), Sd = [
  Vd
], Md = /* @__PURE__ */ ce({
  __name: "SettingsIcons",
  props: {
    column: {},
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, s) => {
      var n, a, r, d, u, c, f;
      return o(), i("div", hd, [
        (r = (a = (n = t.column) == null ? void 0 : n.settings) == null ? void 0 : a.filters) != null && r.length ? (o(), i("svg", gd, bd)) : (o(), i("svg", {
          key: 1,
          class: b(["w-4 h-4 transition-transform", t.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, _d, 2)),
        ((u = (d = t.column) == null ? void 0 : d.settings) == null ? void 0 : u.sort) === "ASC" ? (o(), i("svg", $d, xd)) : ((f = (c = t.column) == null ? void 0 : c.settings) == null ? void 0 : f.sort) === "DESC" ? (o(), i("svg", Ld, Sd)) : x("", !0)
      ]);
    };
  }
}), Ad = /* @__PURE__ */ ce({
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
      const n = G("EnsureAccess"), a = G("SlideOver");
      return t.invalidAccess ? (o(), ae(a, {
        key: 0,
        title: t.title,
        onDone: s[0] || (s[0] = (r) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, rl({
        default: Ce(() => [
          xe(n, {
            alertClass: t.alertClass,
            invalidAccess: t.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        t.subtitle ? {
          name: "subtitle",
          fn: Ce(() => [
            ke(P(t.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : x("", !0);
    };
  }
}), Td = ["for"], Fd = { class: "mt-1 relative rounded-md shadow-sm" }, Id = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], Dd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Pd = /* @__PURE__ */ l("svg", {
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
], -1), jd = [
  Pd
], Od = ["id"], Bd = ["id"], Rd = {
  inheritAttrs: !1
}, Ed = /* @__PURE__ */ ce({
  ...Rd,
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
    const a = I();
    function r() {
      var m;
      (m = a.value) == null || m.focus();
    }
    const d = v(() => n.type || "text"), u = v(() => n.label ?? ze(ot(n.id))), c = v(() => n.placeholder ?? u.value);
    let f = Ue("ApiState", void 0);
    const p = v(() => pt.call({ responseStatus: n.status ?? (f == null ? void 0 : f.error.value) }, n.id)), $ = v(() => [nt.base, p.value ? nt.invalid : nt.valid, n.inputClass]);
    return (m, k) => (o(), i("div", {
      class: b([m.$attrs.class])
    }, [
      K(m.$slots, "header", Ae({
        inputElement: a.value,
        id: m.id,
        modelValue: m.modelValue,
        status: m.status
      }, m.$attrs)),
      u.value ? (o(), i("label", {
        key: 0,
        for: m.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${m.labelClass ?? ""}`)
      }, P(u.value), 11, Td)) : x("", !0),
      l("div", Fd, [
        l("input", Ae({
          ref_key: "inputElement",
          ref: a,
          type: d.value,
          name: m.id,
          id: m.id,
          class: $.value,
          placeholder: c.value,
          value: m.modelValue,
          onInput: k[0] || (k[0] = (g) => m.$emit("update:modelValue", s(g.target))),
          "aria-invalid": p.value != null,
          "aria-describedby": `${m.id}-error`,
          step: "any"
        }, te(ft)(m.$attrs, ["class"])), null, 16, Id),
        p.value ? (o(), i("div", Dd, jd)) : x("", !0)
      ]),
      p.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${m.id}-error`
      }, P(p.value), 9, Od)) : m.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${m.id}-description`
      }, P(m.help), 9, Bd)) : x("", !0),
      K(m.$slots, "footer", Ae({
        inputElement: a.value,
        id: m.id,
        modelValue: m.modelValue,
        status: m.status
      }, m.$attrs))
    ], 2));
  }
}), Hd = ["for"], zd = { class: "mt-1 relative rounded-md shadow-sm" }, Nd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], Ud = ["id"], qd = ["id"], Qd = {
  inheritAttrs: !1
}, Kd = /* @__PURE__ */ ce({
  ...Qd,
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
    const t = (c) => c.value, s = e, n = v(() => s.label ?? ze(ot(s.id))), a = v(() => s.placeholder ?? n.value);
    let r = Ue("ApiState", void 0);
    const d = v(() => pt.call({ responseStatus: s.status ?? (r == null ? void 0 : r.error.value) }, s.id)), u = v(() => ["shadow-sm " + nt.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + nt.valid, s.inputClass]);
    return (c, f) => (o(), i("div", {
      class: b([c.$attrs.class])
    }, [
      n.value ? (o(), i("label", {
        key: 0,
        for: c.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${c.labelClass ?? ""}`)
      }, P(n.value), 11, Hd)) : x("", !0),
      l("div", zd, [
        l("textarea", Ae({
          name: c.id,
          id: c.id,
          class: u.value,
          placeholder: a.value,
          onInput: f[0] || (f[0] = (p) => c.$emit("update:modelValue", t(p.target))),
          "aria-invalid": d.value != null,
          "aria-describedby": `${c.id}-error`
        }, te(ft)(c.$attrs, ["class"])), P(c.modelValue), 17, Nd)
      ]),
      d.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${c.id}-error`
      }, P(d.value), 9, Ud)) : c.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${c.id}-description`
      }, P(c.help), 9, qd)) : x("", !0)
    ], 2));
  }
}), Zd = ["for"], Wd = ["id", "name", "value", "aria-invalid", "aria-describedby"], Gd = ["value"], Jd = ["id"], Xd = {
  inheritAttrs: !1
}, Yd = /* @__PURE__ */ ce({
  ...Xd,
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
    const t = (u) => u.value, s = e, n = v(() => s.label ?? ze(ot(s.id)));
    let a = Ue("ApiState", void 0);
    const r = v(() => pt.call({ responseStatus: s.status ?? (a == null ? void 0 : a.error.value) }, s.id)), d = v(() => s.entries || (s.values ? s.values.map((u) => ({ key: u, value: u })) : s.options ? Object.keys(s.options).map((u) => ({ key: u, value: s.options[u] })) : []));
    return (u, c) => (o(), i("div", {
      class: b([u.$attrs.class])
    }, [
      n.value ? (o(), i("label", {
        key: 0,
        for: u.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${u.labelClass ?? ""}`)
      }, P(n.value), 11, Zd)) : x("", !0),
      l("select", Ae({
        id: u.id,
        name: u.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          r.value ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          u.inputClass
        ],
        value: u.modelValue,
        onInput: c[0] || (c[0] = (f) => u.$emit("update:modelValue", t(f.target))),
        "aria-invalid": r.value != null,
        "aria-describedby": `${u.id}-error`
      }, te(ft)(u.$attrs, ["class"])), [
        (o(!0), i(Ie, null, De(d.value, (f) => (o(), i("option", {
          value: f.key
        }, P(f.value), 9, Gd))), 256))
      ], 16, Wd),
      r.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${u.id}-error`
      }, P(r.value), 9, Jd)) : x("", !0)
    ], 2));
  }
}), ec = { class: "flex items-center h-5" }, tc = ["id", "name", "checked"], sc = { class: "ml-3 text-sm" }, lc = ["for"], nc = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, oc = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, ac = {
  inheritAttrs: !1
}, rc = /* @__PURE__ */ ce({
  ...ac,
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
    const s = e, n = v(() => s.label ?? ze(ot(s.id)));
    let a = Ue("ApiState", void 0);
    const r = v(() => pt.call({ responseStatus: s.status ?? (a == null ? void 0 : a.error.value) }, s.id));
    return (d, u) => (o(), i("div", {
      class: b(["relative flex items-start", d.$attrs.class])
    }, [
      l("div", ec, [
        l("input", Ae({
          id: d.id,
          name: d.id,
          type: "checkbox",
          checked: d.modelValue,
          onInput: u[0] || (u[0] = (c) => d.$emit("update:modelValue", c.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", d.inputClass]
        }, te(ft)(d.$attrs, ["class"])), null, 16, tc)
      ]),
      l("div", sc, [
        l("label", {
          for: d.id,
          class: b(`font-medium text-gray-700 dark:text-gray-300 ${d.labelClass ?? ""}`)
        }, P(n.value), 11, lc),
        r.value ? (o(), i("p", nc, P(r.value), 1)) : d.help ? (o(), i("p", oc, P(d.help), 1)) : x("", !0)
      ])
    ], 2));
  }
}), ic = ["id"], uc = ["for"], dc = { class: "mt-1 relative rounded-md shadow-sm" }, cc = ["id", "name", "value"], fc = { class: "flex flex-wrap pb-1.5" }, vc = { class: "pt-1.5 pl-1" }, pc = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, mc = ["onClick"], hc = /* @__PURE__ */ l("svg", {
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
], -1), gc = [
  hc
], yc = { class: "pt-1.5 pl-1 shrink" }, bc = ["type", "name", "id", "aria-invalid", "aria-describedby"], wc = ["id"], kc = ["onMouseover", "onClick"], _c = { class: "block truncate" }, $c = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Cc = /* @__PURE__ */ l("svg", {
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
], -1), xc = [
  Cc
], Lc = ["id"], Vc = ["id"], Sc = {
  inheritAttrs: !1
}, Mc = /* @__PURE__ */ ce({
  ...Sc,
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
    function a(y) {
      return s.converter ? s.converter(y) : y;
    }
    const r = v(() => Qe(a(s.modelValue), (y) => typeof y == "string" ? y.trim().length == 0 ? [] : y.split(",") : y) || []), d = I(), u = I(!1), c = v(() => {
      const y = $.value.toLowerCase();
      return !s.allowableValues || s.allowableValues.length == 0 ? [] : s.allowableValues.length < 1e3 ? s.allowableValues.filter((N) => !r.value.includes(N) && N.toLowerCase().includes(y)) : s.allowableValues.filter((N) => !r.value.includes(N) && N.startsWith(y));
    });
    function f(y) {
      d.value = y;
    }
    const p = I(null), $ = I(""), m = v(() => s.type || "text"), k = v(() => s.label ?? ze(ot(s.id)));
    let g = Ue("ApiState", void 0);
    const w = v(() => pt.call({ responseStatus: s.status ?? (g == null ? void 0 : g.error.value) }, s.id)), j = v(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      w.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      s.inputClass
    ]), H = (y) => V(r.value.filter((N) => N != y));
    function re(y) {
      var N;
      document.activeElement === y.target && ((N = p.value) == null || N.focus());
    }
    const F = I();
    function T() {
      u.value = !0, F.value = !0;
    }
    function A() {
      T();
    }
    function ue() {
      U(Q()), F.value = !1, setTimeout(() => {
        F.value || (u.value = !1);
      }, 200);
    }
    function V(y) {
      const N = s.string ? y.join(",") : y;
      n("update:modelValue", N);
    }
    function z(y) {
      if (y.key == "Backspace" && $.value.length == 0 && r.value.length > 0 && H(r.value[r.value.length - 1]), !(!s.allowableValues || s.allowableValues.length == 0))
        if (y.code == "Escape" || y.code == "Tab")
          u.value = !1;
        else if (y.code == "Home")
          d.value = c.value[0], Z();
        else if (y.code == "End")
          d.value = c.value[c.value.length - 1], Z();
        else if (y.code == "ArrowDown") {
          if (u.value = !0, !d.value)
            d.value = c.value[0];
          else {
            const N = c.value.indexOf(d.value);
            d.value = N + 1 < c.value.length ? c.value[N + 1] : c.value[0];
          }
          J();
        } else if (y.code == "ArrowUp") {
          if (!d.value)
            d.value = c.value[c.value.length - 1];
          else {
            const N = c.value.indexOf(d.value);
            d.value = N - 1 >= 0 ? c.value[N - 1] : c.value[c.value.length - 1];
          }
          J();
        } else
          y.code == "Enter" ? d.value && u.value ? (U(d.value), y.preventDefault()) : u.value = !1 : u.value = c.value.length > 0;
    }
    function Q() {
      if ($.value.length == 0)
        return "";
      let y = Do($.value.trim(), ",");
      return y[0] == "," && (y = y.substring(1)), y = y.trim(), y.length == 0 && u.value && c.value.length > 0 ? d.value : y;
    }
    function se(y) {
      const N = Q();
      if (N.length > 0) {
        const E = s.delimiters.some((C) => C == y.key);
        if (E && y.preventDefault(), y.key == "Enter" || y.key == "NumpadEnter" || y.key.length == 1 && E) {
          U(N);
          return;
        }
      }
    }
    const R = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function Z() {
      setTimeout(() => {
        let y = _s(`#${s.id}-tag li.active`);
        y && y.scrollIntoView(R);
      }, 0);
    }
    function J() {
      setTimeout(() => {
        let y = _s(`#${s.id}-tag li.active`);
        y && ("scrollIntoViewIfNeeded" in y ? y.scrollIntoViewIfNeeded(R) : y.scrollIntoView(R));
      }, 0);
    }
    function U(y) {
      if (y.length === 0)
        return;
      const N = Array.from(r.value);
      N.indexOf(y) == -1 && N.push(y), V(N), $.value = "", u.value = !1;
    }
    function M(y) {
      var E;
      const N = (E = y.clipboardData) == null ? void 0 : E.getData("Text");
      ee(N);
    }
    function ee(y) {
      if (!y)
        return;
      const N = new RegExp(`\\n|\\t|${s.delimiters.join("|")}`), E = Array.from(r.value);
      y.split(N).map((C) => C.trim()).forEach((C) => {
        E.indexOf(C) == -1 && E.push(C);
      }), V(E), $.value = "";
    }
    return (y, N) => (o(), i("div", {
      class: b([y.$attrs.class]),
      id: `${y.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      k.value ? (o(), i("label", {
        key: 0,
        for: y.id,
        class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${y.labelClass ?? ""}`)
      }, P(k.value), 11, uc)) : x("", !0),
      l("div", dc, [
        l("input", {
          type: "hidden",
          id: y.id,
          name: y.id,
          value: r.value.join(",")
        }, null, 8, cc),
        l("button", {
          class: b(j.value),
          onClick: qe(re, ["prevent"]),
          onFocus: N[2] || (N[2] = (E) => u.value = !0),
          tabindex: "-1"
        }, [
          l("div", fc, [
            (o(!0), i(Ie, null, De(r.value, (E) => (o(), i("div", vc, [
              l("span", pc, [
                ke(P(E) + " ", 1),
                l("button", {
                  type: "button",
                  onClick: (h) => H(E),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, gc, 8, mc)
              ])
            ]))), 256)),
            l("div", yc, [
              Ct(l("input", Ae({
                ref_key: "txtInput",
                ref: p,
                type: m.value,
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${y.id}-txt`,
                id: `${y.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${$.value.length + 1}ch`,
                "onUpdate:modelValue": N[0] || (N[0] = (E) => $.value = E),
                "aria-invalid": w.value != null,
                "aria-describedby": `${y.id}-error`,
                onKeydown: z,
                onKeypress: se,
                onPaste: qe(M, ["prevent", "stop"]),
                onFocus: A,
                onBlur: ue,
                onClick: N[1] || (N[1] = (E) => u.value = !0)
              }, te(ft)(y.$attrs, ["class", "required"])), null, 16, bc), [
                [yo, $.value]
              ])
            ])
          ])
        ], 34),
        u.value && c.value.length ? (o(), i("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: z,
          id: `${y.id}-options`,
          role: "listbox"
        }, [
          (o(!0), i(Ie, null, De(c.value.slice(0, y.maxVisibleItems), (E) => (o(), i("li", {
            class: b([E === d.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (h) => f(E),
            onClick: (h) => U(E),
            role: "option",
            tabindex: "-1"
          }, [
            l("span", _c, P(E), 1)
          ], 42, kc))), 256))
        ], 40, wc)) : x("", !0),
        w.value ? (o(), i("div", $c, xc)) : x("", !0)
      ]),
      w.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${y.id}-error`
      }, P(w.value), 9, Lc)) : y.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${y.id}-description`
      }, P(y.help), 9, Vc)) : x("", !0)
    ], 10, ic));
  }
}), Ac = { class: "relative flex-grow mr-2 sm:mr-4" }, Tc = ["for"], Fc = { class: "block mt-2" }, Ic = { class: "sr-only" }, Dc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], Pc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, jc = /* @__PURE__ */ l("svg", {
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
], -1), Oc = [
  jc
], Bc = ["id"], Rc = ["id"], Ec = { key: 0 }, Hc = ["title"], zc = ["alt", "src"], Nc = {
  key: 1,
  class: "mt-3"
}, Uc = { class: "w-full" }, qc = { class: "pr-6 align-bottom pb-2" }, Qc = ["title"], Kc = ["src", "onError"], Zc = ["href"], Wc = {
  key: 1,
  class: "overflow-hidden"
}, Gc = { class: "align-top pb-2 whitespace-nowrap" }, Jc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Xc = /* @__PURE__ */ ce({
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
    const t = e, s = I(null), { assetsPathResolver: n, fallbackPathResolver: a } = At(), r = {}, d = I(), u = I(((T = t.files) == null ? void 0 : T.map(c)) || []);
    function c(A) {
      return A.filePath = n(A.filePath), A;
    }
    t.values && t.values.length > 0 && (u.value = t.values.map((A) => {
      let ue = A.replace(/\\/g, "/");
      return { fileName: rn(xt(ue, "/"), "."), filePath: ue, contentType: Ys(ue) };
    }).map(c));
    const f = v(() => t.label ?? ze(ot(t.id))), p = v(() => t.placeholder ?? f.value);
    let $ = Ue("ApiState", void 0);
    const m = v(() => pt.call({ responseStatus: t.status ?? ($ == null ? void 0 : $.error.value) }, t.id)), k = v(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      m.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ]), g = (A) => {
      let ue = A.target;
      d.value = "", u.value = Array.from(ue.files || []).map((V) => ({
        fileName: V.name,
        filePath: pl(V),
        contentLength: V.size,
        contentType: V.type || Ys(V.name)
      }));
    }, w = () => {
      var A;
      return (A = s.value) == null ? void 0 : A.click();
    }, j = (A) => A == null ? !1 : A.startsWith("data:") || A.startsWith("blob:"), H = v(() => {
      if (u.value.length > 0)
        return u.value[0].filePath;
      let A = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return A && wt(n(A)) || null;
    }), re = (A) => !A || A.startsWith("data:") || A.endsWith(".svg") ? "" : "rounded-full object-cover";
    function F(A) {
      d.value = a(H.value);
    }
    return zt(_n), (A, ue) => (o(), i("div", {
      class: b(["flex", A.multiple ? "flex-col" : "justify-between"])
    }, [
      l("div", Ac, [
        f.value ? (o(), i("label", {
          key: 0,
          for: A.id,
          class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${A.labelClass ?? ""}`)
        }, P(f.value), 11, Tc)) : x("", !0),
        l("div", Fc, [
          l("span", Ic, P(A.help ?? f.value), 1),
          l("input", Ae({
            ref_key: "input",
            ref: s,
            type: "file",
            multiple: A.multiple,
            name: A.id,
            id: A.id,
            class: k.value,
            placeholder: p.value,
            "aria-invalid": m.value != null,
            "aria-describedby": `${A.id}-error`
          }, A.$attrs, { onChange: g }), null, 16, Dc),
          m.value ? (o(), i("div", Pc, Oc)) : x("", !0)
        ]),
        m.value ? (o(), i("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${A.id}-error`
        }, P(m.value), 9, Bc)) : A.help ? (o(), i("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${A.id}-description`
        }, P(A.help), 9, Rc)) : x("", !0)
      ]),
      A.multiple ? (o(), i("div", Nc, [
        l("table", Uc, [
          (o(!0), i(Ie, null, De(u.value, (V) => (o(), i("tr", null, [
            l("td", qc, [
              l("div", {
                class: "flex w-full",
                title: j(V.filePath) ? "" : V.filePath
              }, [
                l("img", {
                  src: r[te(wt)(V.filePath)] || te(n)(te(wt)(V.filePath)),
                  class: b(["mr-2 h-8 w-8", re(V.filePath)]),
                  onError: (z) => r[te(wt)(V.filePath)] = te(a)(te(wt)(V.filePath))
                }, null, 42, Kc),
                j(V.filePath) ? (o(), i("span", Wc, P(V.fileName), 1)) : (o(), i("a", {
                  key: 0,
                  href: te(n)(V.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, P(V.fileName), 9, Zc))
              ], 8, Qc)
            ]),
            l("td", Gc, [
              V.contentLength && V.contentLength > 0 ? (o(), i("span", Jc, P(te(hl)(V.contentLength)), 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), i("div", Ec, [
        H.value ? (o(), i("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: j(H.value) ? "" : H.value
        }, [
          l("img", {
            onClick: w,
            class: b(["h-16 w-16", re(H.value)]),
            alt: `Current ${f.value ?? ""}`,
            src: d.value || te(n)(H.value),
            onError: F
          }, null, 42, zc)
        ], 8, Hc)) : x("", !0)
      ]))
    ], 2));
  }
}), Yc = ["id"], e0 = ["for"], t0 = { class: "relative mt-1" }, s0 = ["id", "placeholder"], l0 = /* @__PURE__ */ l("svg", {
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
], -1), n0 = [
  l0
], o0 = ["id"], a0 = ["onMouseover", "onClick"], r0 = /* @__PURE__ */ l("svg", {
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
], -1), i0 = [
  r0
], u0 = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, d0 = /* @__PURE__ */ l("svg", {
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
], -1), c0 = [
  d0
], f0 = ["id"], v0 = ["id"], p0 = /* @__PURE__ */ ce({
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
    const n = I(!1), a = e, r = s;
    t({ toggle: R });
    function d(M) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(M) >= 0;
    }
    const u = v(() => a.label ?? ze(ot(a.id)));
    let c = Ue("ApiState", void 0);
    const f = v(() => pt.call({ responseStatus: a.status ?? (c == null ? void 0 : c.error.value) }, a.id)), p = v(() => [nt.base, f.value ? nt.invalid : nt.valid]), $ = I(null), m = I(""), k = I(null), g = I(a.viewCount), w = I([]), j = v(() => m.value ? a.options.filter((ee) => a.match(ee, m.value)).slice(0, g.value) : a.options), H = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function re(M) {
      k.value = M, w.value.indexOf(M) > Math.floor(g.value * 0.9) && (g.value += a.viewCount, U());
    }
    const F = [",", `
`, "	"];
    function T(M) {
      var y;
      const ee = (y = M.clipboardData) == null ? void 0 : y.getData("Text");
      A(ee);
    }
    function A(M) {
      if (!M)
        return;
      const ee = F.some((y) => M.includes(y));
      if (!a.multiple || !ee) {
        const y = a.options.filter((N) => a.match(N, M));
        y.length == 1 && (J(y[0]), n.value = !1, hs());
      } else if (ee) {
        const y = new RegExp("\\r|\\n|\\t|,"), E = M.split(y).filter((h) => h.trim()).map((h) => a.options.find((C) => a.match(C, h))).filter((h) => !!h);
        if (E.length > 0) {
          m.value = "", n.value = !1, k.value = null;
          let h = Array.from(a.modelValue || []);
          E.forEach((C) => {
            d(C) ? h = h.filter((W) => W != C) : h.push(C);
          }), r("update:modelValue", h), hs();
        }
      }
    }
    function ue(M) {
      H.indexOf(M.code) || Z();
    }
    function V(M) {
      if (!(M.shiftKey || M.ctrlKey || M.altKey)) {
        if (!n.value) {
          M.code == "ArrowDown" && (n.value = !0, k.value = w.value[0]);
          return;
        }
        if (M.code == "Escape")
          n.value && (M.stopPropagation(), n.value = !1);
        else if (M.code == "Tab")
          n.value = !1;
        else if (M.code == "Home")
          k.value = w.value[0], Q();
        else if (M.code == "End")
          k.value = w.value[w.value.length - 1], Q();
        else if (M.code == "ArrowDown") {
          if (!k.value)
            k.value = w.value[0];
          else {
            const ee = w.value.indexOf(k.value);
            k.value = ee + 1 < w.value.length ? w.value[ee + 1] : w.value[0];
          }
          se();
        } else if (M.code == "ArrowUp") {
          if (!k.value)
            k.value = w.value[w.value.length - 1];
          else {
            const ee = w.value.indexOf(k.value);
            k.value = ee - 1 >= 0 ? w.value[ee - 1] : w.value[w.value.length - 1];
          }
          se();
        } else
          M.code == "Enter" && (k.value ? (J(k.value), a.multiple || (M.preventDefault(), hs())) : n.value = !1);
      }
    }
    const z = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function Q() {
      setTimeout(() => {
        let M = _s(`#${a.id}-autocomplete li.active`);
        M && M.scrollIntoView(z);
      }, 0);
    }
    function se() {
      setTimeout(() => {
        let M = _s(`#${a.id}-autocomplete li.active`);
        M && ("scrollIntoViewIfNeeded" in M ? M.scrollIntoViewIfNeeded(z) : M.scrollIntoView(z));
      }, 0);
    }
    function R(M) {
      var ee;
      n.value = M, M && (Z(), (ee = $.value) == null || ee.focus());
    }
    function Z() {
      n.value = !0, U();
    }
    function J(M) {
      if (m.value = "", n.value = !1, a.multiple) {
        let ee = Array.from(a.modelValue || []);
        d(M) ? ee = ee.filter((y) => y != M) : ee.push(M), k.value = null, r("update:modelValue", ee);
      } else {
        let ee = M;
        a.modelValue == M && (ee = null), r("update:modelValue", ee);
      }
    }
    function U() {
      w.value = j.value;
    }
    return St(m, U), (M, ee) => (o(), i("div", {
      id: `${M.id}-autocomplete`
    }, [
      u.value ? (o(), i("label", {
        key: 0,
        for: `${M.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, P(u.value), 9, e0)) : x("", !0),
      l("div", t0, [
        Ct(l("input", Ae({
          ref_key: "txtInput",
          ref: $,
          id: `${M.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": ee[0] || (ee[0] = (y) => m.value = y),
          class: p.value,
          placeholder: M.multiple || !M.modelValue ? M.placeholder : "",
          onFocus: Z,
          onKeydown: V,
          onKeyup: ue,
          onClick: Z,
          onPaste: T,
          required: !1
        }, M.$attrs), null, 16, s0), [
          [bo, m.value]
        ]),
        l("button", {
          type: "button",
          onClick: ee[1] || (ee[1] = (y) => R(!n.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, n0),
        n.value ? (o(), i("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: V,
          id: `${M.id}-options`,
          role: "listbox"
        }, [
          (o(!0), i(Ie, null, De(w.value, (y) => (o(), i("li", {
            class: b([y === k.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (N) => re(y),
            onClick: (N) => J(y),
            role: "option",
            tabindex: "-1"
          }, [
            K(M.$slots, "item", Ot(ks(y))),
            d(y) ? (o(), i("span", {
              key: 0,
              class: b(["absolute inset-y-0 right-0 flex items-center pr-4", y === k.value ? "text-white" : "text-indigo-600"])
            }, i0, 2)) : x("", !0)
          ], 42, a0))), 256))
        ], 40, o0)) : !M.multiple && M.modelValue ? (o(), i("div", {
          key: 1,
          onKeydown: V,
          onClick: ee[2] || (ee[2] = (y) => R(!n.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          K(M.$slots, "item", Ot(ks(M.modelValue)))
        ], 32)) : x("", !0),
        f.value ? (o(), i("div", u0, c0)) : x("", !0)
      ]),
      f.value ? (o(), i("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${M.id}-error`
      }, P(f.value), 9, f0)) : M.help ? (o(), i("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${M.id}-description`
      }, P(M.help), 9, v0)) : x("", !0)
    ], 8, Yc));
  }
}), m0 = ["id", "name", "value"], h0 = { class: "block truncate" }, g0 = /* @__PURE__ */ ce({
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
        (g = u.value) == null || g.toggle(k);
      }
    });
    const a = s;
    function r(k) {
      a("update:modelValue", k);
    }
    const d = v(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), u = I();
    function c(k, g) {
      return !g || k.value.toLowerCase().includes(g.toLowerCase());
    }
    const f = v(() => n.entries || (n.values ? n.values.map((k) => ({ key: k, value: k })) : n.options ? Object.keys(n.options).map((k) => ({ key: k, value: n.options[k] })) : [])), p = I(d.value ? [] : null);
    function $() {
      let k = n.modelValue && typeof n.modelValue == "object" ? n.modelValue.key : n.modelValue;
      k == null || k === "" ? p.value = d.value ? [] : null : typeof k == "string" ? p.value = f.value.find((g) => g.key === k) || null : Array.isArray(k) && (p.value = f.value.filter((g) => k.includes(g.key)));
    }
    st($);
    const m = v(() => p.value == null ? "" : Array.isArray(p.value) ? p.value.map((k) => encodeURIComponent(k.key)).join(",") : p.value.key);
    return (k, g) => {
      const w = G("Autocomplete");
      return o(), i(Ie, null, [
        l("input", {
          type: "hidden",
          id: k.id,
          name: k.id,
          value: m.value
        }, null, 8, m0),
        xe(w, Ae({
          ref_key: "input",
          ref: u,
          id: k.id,
          options: f.value,
          match: c,
          multiple: d.value
        }, k.$attrs, {
          modelValue: p.value,
          "onUpdate:modelValue": [
            g[0] || (g[0] = (j) => p.value = j),
            r
          ]
        }), {
          item: Ce(({ key: j, value: H }) => [
            l("span", h0, P(H), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), y0 = /* @__PURE__ */ ce({
  __name: "DynamicInput",
  props: {
    input: {},
    modelValue: {},
    api: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, n = t, a = v(() => s.input.type || "text"), r = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), d = v(() => ft(s.input, r)), u = I(Qe(
      s.modelValue[s.input.id],
      (f) => s.input.type === "file" ? null : s.input.type === "date" && f instanceof Date ? Ss(f) : s.input.type === "time" ? fn(f) : f
    ));
    St(u, () => {
      s.modelValue[s.input.id] = u.value, n("update:modelValue", s.modelValue);
    });
    const c = v(() => {
      const f = s.modelValue[s.input.id];
      if (s.input.type !== "file" || !f)
        return [];
      if (typeof f == "string")
        return [{ filePath: f, fileName: xt(f, "/") }];
      if (!Array.isArray(f) && typeof f == "object")
        return f;
      if (Array.isArray(f)) {
        const p = [];
        return f.forEach(($) => {
          typeof $ == "string" ? p.push({ filePath: $, fileName: xt($, "/") }) : typeof $ == "object" && p.push($);
        }), p;
      }
    });
    return (f, p) => {
      var F, T, A, ue, V, z, Q, se, R, Z, J, U, M, ee, y, N, E, h, C, W, X, le, D, L, fe, pe, ie, me;
      const $ = G("SelectInput"), m = G("CheckboxInput"), k = G("TagInput"), g = G("Combobox"), w = G("FileInput"), j = G("TextareaInput"), H = G("MarkdownInput"), re = G("TextInput");
      return te(Y).component(a.value) ? (o(), ae(on(te(Y).component(a.value)), Ae({
        key: 0,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[0] || (p[0] = (S) => u.value = S),
        status: (F = f.api) == null ? void 0 : F.error,
        "input-class": (T = f.input.css) == null ? void 0 : T.input,
        "label-class": (A = f.input.css) == null ? void 0 : A.label
      }, d.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "select" ? (o(), ae($, Ae({
        key: 1,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[1] || (p[1] = (S) => u.value = S),
        status: (ue = f.api) == null ? void 0 : ue.error,
        "input-class": (V = f.input.css) == null ? void 0 : V.input,
        "label-class": (z = f.input.css) == null ? void 0 : z.label,
        entries: f.input.allowableEntries,
        values: f.input.allowableValues
      }, d.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "checkbox" ? (o(), ae(m, Ae({
        key: 2,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[2] || (p[2] = (S) => u.value = S),
        status: (Q = f.api) == null ? void 0 : Q.error,
        "input-class": (se = f.input.css) == null ? void 0 : se.input,
        "label-class": (R = f.input.css) == null ? void 0 : R.label
      }, d.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "tag" ? (o(), ae(k, Ae({
        key: 3,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[3] || (p[3] = (S) => u.value = S),
        status: (Z = f.api) == null ? void 0 : Z.error,
        "input-class": (J = f.input.css) == null ? void 0 : J.input,
        "label-class": (U = f.input.css) == null ? void 0 : U.label,
        allowableValues: f.input.allowableValues,
        string: ((M = f.input.prop) == null ? void 0 : M.type) == "String"
      }, d.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : a.value == "combobox" ? (o(), ae(g, Ae({
        key: 4,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[4] || (p[4] = (S) => u.value = S),
        status: (ee = f.api) == null ? void 0 : ee.error,
        "input-class": (y = f.input.css) == null ? void 0 : y.input,
        "label-class": (N = f.input.css) == null ? void 0 : N.label,
        entries: f.input.allowableEntries,
        values: f.input.allowableValues
      }, d.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "file" ? (o(), ae(w, Ae({
        key: 5,
        id: f.input.id,
        status: (E = f.api) == null ? void 0 : E.error,
        modelValue: u.value,
        "onUpdate:modelValue": p[5] || (p[5] = (S) => u.value = S),
        "input-class": (h = f.input.css) == null ? void 0 : h.input,
        "label-class": (C = f.input.css) == null ? void 0 : C.label,
        files: c.value
      }, d.value), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : a.value == "textarea" ? (o(), ae(j, Ae({
        key: 6,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[6] || (p[6] = (S) => u.value = S),
        status: (W = f.api) == null ? void 0 : W.error,
        "input-class": (X = f.input.css) == null ? void 0 : X.input,
        "label-class": (le = f.input.css) == null ? void 0 : le.label
      }, d.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "MarkdownInput" ? (o(), ae(H, Ae({
        key: 7,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[7] || (p[7] = (S) => u.value = S),
        status: (D = f.api) == null ? void 0 : D.error,
        "input-class": (L = f.input.css) == null ? void 0 : L.input,
        "label-class": (fe = f.input.css) == null ? void 0 : fe.label
      }, d.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), ae(re, Ae({
        key: 8,
        type: a.value,
        id: f.input.id,
        modelValue: u.value,
        "onUpdate:modelValue": p[8] || (p[8] = (S) => u.value = S),
        status: (pe = f.api) == null ? void 0 : pe.error,
        "input-class": (ie = f.input.css) == null ? void 0 : ie.input,
        "label-class": (me = f.input.css) == null ? void 0 : me.label
      }, d.value), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), b0 = { class: "lookup-field" }, w0 = ["name", "value"], k0 = {
  key: 0,
  class: "flex justify-between"
}, _0 = ["for"], $0 = {
  key: 0,
  class: "flex items-center"
}, C0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, x0 = /* @__PURE__ */ l("span", { class: "sr-only" }, "Clear", -1), L0 = /* @__PURE__ */ l("svg", {
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
], -1), V0 = [
  x0,
  L0
], S0 = {
  key: 1,
  class: "mt-1 relative"
}, M0 = { class: "w-full inline-flex truncate" }, A0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, T0 = /* @__PURE__ */ l("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
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
], -1), F0 = ["id"], I0 = ["id"], D0 = /* @__PURE__ */ ce({
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
    const { config: s } = At(), { metadataApi: n } = rt(), a = e, r = t, d = v(() => a.id || a.input.id), u = v(() => a.label ?? ze(ot(d.value)));
    let c = Ue("ApiState", void 0);
    const f = Ue("client"), p = v(() => pt.call({ responseStatus: a.status ?? (c == null ? void 0 : c.error.value) }, d.value)), $ = I(""), m = I(""), k = v(() => be(a.modelValue, d.value)), g = v(() => tt(a.metadataType).find((F) => F.name.toLowerCase() == d.value.toLowerCase())), w = v(() => {
      var F, T, A;
      return ((A = at((T = (F = g.value) == null ? void 0 : F.ref) == null ? void 0 : T.model)) == null ? void 0 : A.icon) || s.value.tableIcon;
    });
    let j;
    function H(F) {
      if (F) {
        if (j == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        j.openModal({ name: "ModalLookup", ref: F }, (T) => {
          if (console.debug("openModal", $.value, " -> ", T, Dt.setRefValue(F, T), F), T) {
            const A = be(T, F.refId);
            $.value = Dt.setRefValue(F, T) || A;
            const ue = te(a.modelValue);
            ue[d.value] = A, r("update:modelValue", ue);
          }
        });
      }
    }
    function re() {
      a.modelValue[d.value] = null, $.value = "";
    }
    return st(async () => {
      var Q, se;
      j = Ue("ModalProvider", void 0);
      const F = a.modelValue;
      a.modelValue[d.value] || (a.modelValue[d.value] = null);
      const T = g.value, A = T == null ? void 0 : T.ref;
      if (!A) {
        console.warn(`No RefInfo for property '${d.value}'`);
        return;
      }
      $.value = "";
      let ue = A.selfId == null ? be(F, T.name) : be(F, A.selfId);
      if (Xt(ue) && (ue = be(F, A.refId)), ue == null)
        return;
      if (((Q = n.value) == null ? void 0 : Q.operations.find((R) => {
        var Z;
        return ((Z = R.dataModel) == null ? void 0 : Z.name) == A.model;
      })) != null) {
        const R = be(F, T.name);
        if (Xt(R))
          return;
        if ($.value = `${R}`, m.value = T.name, A.refLabel != null) {
          const Z = tt(a.metadataType).find((U) => U.type == A.model);
          Z == null && console.warn(`Could not find ${A.model} Property on ${a.metadataType.name}`);
          const J = Z != null ? be(F, Z.name) : null;
          if (J != null) {
            let U = be(J, A.refLabel);
            U && ($.value = `${U}`, Dt.setValue(A.model, ue, A.refLabel, U));
          } else {
            const U = ((se = T.attributes) == null ? void 0 : se.some((ee) => ee.name == "Computed")) == !0;
            let M = await Dt.getOrFetchValue(f, n.value, A.model, A.refId, A.refLabel, U, ue);
            $.value = M || `${A.model}: ${$.value}`;
          }
        }
      }
    }), (F, T) => {
      var ue;
      const A = G("Icon");
      return o(), i("div", b0, [
        l("input", {
          type: "hidden",
          name: d.value,
          value: k.value
        }, null, 8, w0),
        u.value ? (o(), i("div", k0, [
          l("label", {
            for: d.value,
            class: b(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${F.labelClass ?? ""}`)
          }, P(u.value), 11, _0),
          k.value ? (o(), i("div", $0, [
            l("span", C0, P(k.value), 1),
            l("button", {
              onClick: re,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, V0)
          ])) : x("", !0)
        ])) : x("", !0),
        (ue = g.value) != null && ue.ref ? (o(), i("div", S0, [
          l("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: T[0] || (T[0] = (V) => H(g.value.ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            l("span", M0, [
              l("span", A0, [
                xe(A, {
                  class: "mr-1 w-5 h-5",
                  image: w.value
                }, null, 8, ["image"]),
                l("span", null, P($.value), 1)
              ])
            ]),
            T0
          ])
        ])) : x("", !0),
        p.value ? (o(), i("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${d.value}-error`
        }, P(p.value), 9, F0)) : F.help ? (o(), i("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${d.value}-description`
        }, P(F.help), 9, I0)) : x("", !0)
      ]);
    };
  }
}), P0 = /* @__PURE__ */ ce({
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
    t({ forceUpdate: r, props: n, updateValue: u });
    function r() {
      var T;
      const F = Be();
      (T = F == null ? void 0 : F.proxy) == null || T.$forceUpdate();
    }
    function d(F, T) {
      u(F.id, be(T, F.id));
    }
    function u(F, T) {
      n.modelValue[F] = T, a("update:modelValue", n.modelValue), r();
    }
    const { metadataApi: c, apiOf: f, typeOf: p, typeOfRef: $, createFormLayout: m, Crud: k } = rt(), g = v(() => n.type || Nt(n.modelValue)), w = v(() => n.metaType ?? p(g.value)), j = v(() => {
      var F, T;
      return $((T = (F = c.value) == null ? void 0 : F.operations.find((A) => A.request.name == g.value)) == null ? void 0 : T.dataModel) || w.value;
    }), H = v(() => {
      const F = w.value;
      if (!F) {
        if (n.formLayout) {
          const Q = n.formLayout.map((se) => {
            const R = { name: se.id, type: Ma(se.type) }, Z = Object.assign({ prop: R }, se);
            return n.configureField && n.configureField(Z), Z;
          });
          return n.configureFormLayout && n.configureFormLayout(Q), Q;
        }
        throw new Error(`MetadataType for ${g.value} not found`);
      }
      const T = tt(F), A = j.value, ue = n.formLayout ? n.formLayout : m(F), V = [], z = f(F.name);
      return ue.forEach((Q) => {
        var J;
        const se = T.find((U) => U.name == Q.name);
        if (Q.ignore)
          return;
        const R = ((J = A == null ? void 0 : A.properties) == null ? void 0 : J.find((U) => {
          var M;
          return U.name.toLowerCase() == ((M = Q.name) == null ? void 0 : M.toLowerCase());
        })) ?? se, Z = Object.assign({ prop: R, op: z }, Q);
        n.configureField && n.configureField(Z), V.push(Z);
      }), n.configureFormLayout && n.configureFormLayout(V), V;
    }), re = v(() => H.value.filter((F) => F.type != "hidden").map((F) => F.id));
    return (F, T) => {
      var z;
      const A = G("ErrorSummary"), ue = G("LookupInput"), V = G("DynamicInput");
      return o(), i(Ie, null, [
        F.hideSummary ? x("", !0) : (o(), ae(A, {
          key: 0,
          status: (z = F.api) == null ? void 0 : z.error,
          except: re.value
        }, null, 8, ["status", "except"])),
        l("div", {
          class: b(F.flexClass)
        }, [
          l("div", {
            class: b(F.divideClass)
          }, [
            l("div", {
              class: b(F.spaceClass)
            }, [
              l("fieldset", {
                class: b(F.fieldsetClass)
              }, [
                (o(!0), i(Ie, null, De(H.value, (Q) => {
                  var se, R, Z;
                  return o(), i("div", {
                    key: Q.id,
                    class: b([
                      "w-full",
                      ((se = Q.css) == null ? void 0 : se.field) ?? (Q.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (Q.type == "checkbox" ? " flex items-center" : "")),
                      Q.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((R = Q.prop) == null ? void 0 : R.ref) != null && Q.type != "file" && !Q.prop.isPrimaryKey ? (o(), ae(ue, {
                      key: 0,
                      metadataType: j.value,
                      input: Q,
                      modelValue: F.modelValue,
                      "onUpdate:modelValue": (J) => d(Q, J),
                      status: (Z = F.api) == null ? void 0 : Z.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), ae(V, {
                      key: 1,
                      input: Q,
                      modelValue: F.modelValue,
                      "onUpdate:modelValue": T[0] || (T[0] = (J) => F.$emit("update:modelValue", J)),
                      api: F.api
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
function js(e) {
  const t = I(!1), s = I(), n = I(), a = e ?? Ue("client");
  function r({ message: g, errorCode: w, fieldName: j, errors: H }) {
    return w || (w = "Exception"), H || (H = []), s.value = j ? new Us({
      errorCode: w,
      message: g,
      errors: [new Wl({ fieldName: j, errorCode: w, message: g })]
    }) : new Us({ errorCode: w, message: g, errors: H });
  }
  function d({ fieldName: g, message: w, errorCode: j }) {
    if (j || (j = "Exception"), !s.value)
      r({ fieldName: g, message: w, errorCode: j });
    else {
      let H = new Us(s.value);
      H.errors = [
        ...(H.errors || []).filter((re) => {
          var F;
          return ((F = re.fieldName) == null ? void 0 : F.toLowerCase()) !== (g == null ? void 0 : g.toLowerCase());
        }),
        new Wl({ fieldName: g, message: w, errorCode: j })
      ], s.value = H;
    }
  }
  async function u(g, w, j) {
    t.value = !0;
    let H = await a.api(It(g), w, j);
    return t.value = !1, n.value = H.response, s.value = H.error, H;
  }
  async function c(g, w, j) {
    t.value = !0;
    let H = await a.apiVoid(It(g), w, j);
    return t.value = !1, n.value = H.response, s.value = H.error, H;
  }
  async function f(g, w, j, H) {
    t.value = !0;
    let re = await a.apiForm(It(g), w, j, H);
    return t.value = !1, n.value = re.response, s.value = re.error, re;
  }
  async function p(g, w, j, H) {
    t.value = !0;
    let re = await a.apiFormVoid(It(g), w, j, H);
    return t.value = !1, n.value = re.response, s.value = re.error, re;
  }
  async function $(g, w, j, H) {
    return mn(a, g, w, j, H);
  }
  function m(g, w) {
    const j = I(new Xe()), H = hn(async (re) => {
      j.value = await a.api(re);
    }, w == null ? void 0 : w.delayMs);
    return ws(async () => {
      const re = g(), F = cl(As(re));
      F && (j.value = new Xe({ response: F })), (w == null ? void 0 : w.delayMs) === 0 ? j.value = await a.api(re) : H(re);
    }), (async () => j.value = await a.api(g(), w == null ? void 0 : w.args, w == null ? void 0 : w.method))(), j;
  }
  let k = { setError: r, addFieldError: d, loading: t, error: s, api: u, apiVoid: c, apiForm: f, apiFormVoid: p, swr: $, swrEffect: m, unRefs: It, setRef: vn };
  return ss("ApiState", k), k;
}
const j0 = { key: 0 }, O0 = { class: "text-red-700" }, B0 = /* @__PURE__ */ l("b", null, "type", -1), R0 = { key: 0 }, E0 = { key: 2 }, H0 = ["innerHTML"], z0 = /* @__PURE__ */ l("input", {
  type: "submit",
  class: "hidden"
}, null, -1), N0 = { class: "flex justify-end" }, U0 = /* @__PURE__ */ l("div", null, null, -1), q0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, Q0 = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), K0 = { class: "fixed inset-0 overflow-hidden" }, Z0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, W0 = { class: "flex-1" }, G0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, J0 = { class: "flex items-start justify-between space-x-3" }, X0 = { class: "space-y-1" }, Y0 = { key: 0 }, ef = { key: 2 }, tf = ["innerHTML"], sf = { class: "flex h-7 items-center" }, lf = { class: "flex justify-end" }, nf = /* @__PURE__ */ ce({
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
    const n = e, a = s, r = I(), d = I(1), u = I();
    function c() {
      var fe;
      d.value++, J.value = Z();
      const L = Be();
      (fe = L == null ? void 0 : L.proxy) == null || fe.$forceUpdate();
    }
    async function f(L) {
      Object.assign(J.value, L), c(), await $t(() => null);
    }
    ss("ModalProvider", {
      openModal: k
    });
    const $ = I(), m = I();
    function k(L, fe) {
      $.value = L, m.value = fe;
    }
    async function g(L) {
      m.value && m.value(L), $.value = void 0, m.value = void 0;
    }
    const w = js(), { getTypeName: j } = gn(), { typeOf: H, Crud: re, createDto: F } = rt(), T = I(new Xe()), A = v(() => n.panelClass || Ze.panelClass(n.formStyle)), ue = v(() => n.formClass || n.formStyle == "card" ? "shadow sm:rounded-md" : Pt.formClass), V = v(() => n.headingClass || Ze.headingClass(n.formStyle)), z = v(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), Q = v(() => typeof n.buttonsClass == "string" ? n.buttonsClass : Ze.buttonsClass), se = v(() => {
      var L;
      return n.type ? j(n.type) : (L = n.modelValue) != null && L.getTypeName ? n.modelValue.getTypeName() : null;
    }), R = v(() => n.metaType ?? H(se.value)), Z = () => n.modelValue || ee(), J = I(Z()), U = v(() => w.loading.value), M = v(() => {
      var L;
      return n.heading != null ? n.heading : ((L = R.value) == null ? void 0 : L.description) || ze(se.value);
    });
    t({ forceUpdate: c, props: n, setModel: f, formFields: r, submit: N, close: le, model: J });
    function ee() {
      return typeof n.type == "string" ? F(n.type) : n.type ? new n.type() : n.modelValue;
    }
    async function y(L) {
      if (!L || L.tagName != "FORM") {
        console.error("Not a valid form", L);
        return;
      }
      const fe = ee();
      let pe = Qe(fe == null ? void 0 : fe.getMethod, (S) => typeof S == "function" ? S() : null) || "POST", ie = Qe(fe == null ? void 0 : fe.createResponse, (S) => typeof S == "function" ? S() : null) == null;
      const me = n.jsconfig;
      if (il.hasRequestBody(pe)) {
        let S = new fe.constructor(), de = new FormData(L);
        ie ? T.value = await w.apiFormVoid(S, de, { jsconfig: me }) : T.value = await w.apiForm(S, de, { jsconfig: me });
      } else {
        let S = new fe.constructor(Po(J.value));
        console.debug("AutoForm.submit", S), ie ? T.value = await w.apiVoid(S, { jsconfig: me }) : T.value = await w.api(S, { jsconfig: me });
      }
      T.value.succeeded ? (a("success", T.value.response), le()) : a("error", T.value.error);
    }
    async function N() {
      y(u.value);
    }
    function E(L) {
      a("update:modelValue", L);
    }
    function h() {
      a("done");
    }
    const C = I(!1), W = I(""), X = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    St(C, () => {
      Lt(X, W, C.value), C.value || setTimeout(h, 700);
    }), C.value = !0;
    function le() {
      n.formStyle == "slideOver" ? C.value = !1 : h();
    }
    const D = (L) => {
      L.key === "Escape" && le();
    };
    return st(() => window.addEventListener("keydown", D)), zt(() => window.removeEventListener("keydown", D)), (L, fe) => {
      var Se, ge, B, q, ne, ye, _e, Me, Re, Te, je;
      const pe = G("AutoFormFields"), ie = G("FormLoading"), me = G("PrimaryButton"), S = G("CloseButton"), de = G("SecondaryButton"), Ve = G("ModalLookup");
      return o(), i("div", null, [
        R.value ? L.formStyle == "card" ? (o(), i("div", {
          key: 1,
          class: b(A.value)
        }, [
          l("form", {
            ref_key: "elForm",
            ref: u,
            onSubmit: fe[0] || (fe[0] = qe((Pe) => y(Pe.target), ["prevent"])),
            autocomplete: "off",
            class: b(L.innerFormClass)
          }, [
            l("div", {
              class: b(L.bodyClass)
            }, [
              l("div", {
                class: b(L.headerClass)
              }, [
                L.$slots.heading ? (o(), i("div", R0, [
                  K(L.$slots, "heading")
                ])) : (o(), i("h3", {
                  key: 1,
                  class: b(V.value)
                }, P(M.value), 3)),
                L.$slots.subheading ? (o(), i("div", E0, [
                  K(L.$slots, "subheading")
                ])) : L.subHeading ? (o(), i("p", {
                  key: 3,
                  class: b(z.value)
                }, P(L.subHeading), 3)) : (Se = R.value) != null && Se.notes ? (o(), i("p", {
                  key: 4,
                  class: b(["notes", z.value]),
                  innerHTML: (ge = R.value) == null ? void 0 : ge.notes
                }, null, 10, H0)) : x("", !0)
              ], 2),
              K(L.$slots, "header", {
                instance: (B = Be()) == null ? void 0 : B.exposed,
                model: J.value
              }),
              z0,
              (o(), ae(pe, {
                ref_key: "formFields",
                ref: r,
                key: d.value,
                type: L.type,
                modelValue: J.value,
                "onUpdate:modelValue": E,
                api: T.value,
                configureField: L.configureField,
                configureFormLayout: L.configureFormLayout
              }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
              K(L.$slots, "footer", {
                instance: (q = Be()) == null ? void 0 : q.exposed,
                model: J.value
              })
            ], 2),
            K(L.$slots, "buttons", {}, () => {
              var Pe, We;
              return [
                l("div", {
                  class: b(Q.value)
                }, [
                  l("div", null, [
                    K(L.$slots, "leftbuttons", {
                      instance: (Pe = Be()) == null ? void 0 : Pe.exposed,
                      model: J.value
                    })
                  ]),
                  l("div", null, [
                    L.showLoading && U.value ? (o(), ae(ie, { key: 0 })) : x("", !0)
                  ]),
                  l("div", N0, [
                    U0,
                    xe(me, {
                      disabled: L.allowSubmit ? !L.allowSubmit(J.value) : !1
                    }, {
                      default: Ce(() => [
                        ke(P(L.submitLabel), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    K(L.$slots, "rightbuttons", {
                      instance: (We = Be()) == null ? void 0 : We.exposed,
                      model: J.value
                    })
                  ])
                ], 2)
              ];
            })
          ], 34)
        ], 2)) : (o(), i("div", q0, [
          Q0,
          l("div", K0, [
            l("div", {
              onMousedown: le,
              class: "absolute inset-0 overflow-hidden"
            }, [
              l("div", {
                onMousedown: fe[2] || (fe[2] = qe(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                l("div", {
                  class: b(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", W.value])
                }, [
                  l("form", {
                    ref_key: "elForm",
                    ref: u,
                    class: b(ue.value),
                    onSubmit: fe[1] || (fe[1] = qe((Pe) => y(Pe.target), ["prevent"]))
                  }, [
                    l("div", Z0, [
                      l("div", W0, [
                        l("div", G0, [
                          l("div", J0, [
                            l("div", X0, [
                              L.$slots.heading ? (o(), i("div", Y0, [
                                K(L.$slots, "heading")
                              ])) : (o(), i("h3", {
                                key: 1,
                                class: b(V.value)
                              }, P(M.value), 3)),
                              L.$slots.subheading ? (o(), i("div", ef, [
                                K(L.$slots, "subheading")
                              ])) : L.subHeading ? (o(), i("p", {
                                key: 3,
                                class: b(z.value)
                              }, P(L.subHeading), 3)) : (ne = R.value) != null && ne.notes ? (o(), i("p", {
                                key: 4,
                                class: b(["notes", z.value]),
                                innerHTML: (ye = R.value) == null ? void 0 : ye.notes
                              }, null, 10, tf)) : x("", !0)
                            ]),
                            l("div", sf, [
                              xe(S, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: le
                              })
                            ])
                          ])
                        ]),
                        K(L.$slots, "header", {
                          instance: (_e = Be()) == null ? void 0 : _e.exposed,
                          model: J.value
                        }),
                        (o(), ae(pe, {
                          ref_key: "formFields",
                          ref: r,
                          key: d.value,
                          type: L.type,
                          modelValue: J.value,
                          "onUpdate:modelValue": E,
                          api: T.value,
                          configureField: L.configureField,
                          configureFormLayout: L.configureFormLayout
                        }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
                        K(L.$slots, "footer", {
                          instance: (Me = Be()) == null ? void 0 : Me.exposed,
                          model: J.value
                        })
                      ])
                    ]),
                    l("div", {
                      class: b(Q.value)
                    }, [
                      l("div", null, [
                        K(L.$slots, "leftbuttons", {
                          instance: (Re = Be()) == null ? void 0 : Re.exposed,
                          model: J.value
                        })
                      ]),
                      l("div", null, [
                        L.showLoading && U.value ? (o(), ae(ie, { key: 0 })) : x("", !0)
                      ]),
                      l("div", lf, [
                        xe(de, {
                          onClick: le,
                          disabled: U.value
                        }, {
                          default: Ce(() => [
                            ke("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        xe(me, {
                          class: "ml-4",
                          disabled: L.allowSubmit ? !L.allowSubmit(J.value) : !1
                        }, {
                          default: Ce(() => [
                            ke(P(L.submitLabel), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        K(L.$slots, "rightbuttons", {
                          instance: (Te = Be()) == null ? void 0 : Te.exposed,
                          model: J.value
                        })
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), i("div", j0, [
          l("p", O0, [
            ke("Could not create form for unknown "),
            B0,
            ke(" " + P(se.value), 1)
          ])
        ])),
        ((je = $.value) == null ? void 0 : je.name) == "ModalLookup" && $.value.ref ? (o(), ae(Ve, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : x("", !0)
      ]);
    };
  }
}), of = { key: 0 }, af = { class: "text-red-700" }, rf = /* @__PURE__ */ l("b", null, "type", -1), uf = { key: 0 }, df = { key: 2 }, cf = ["innerHTML"], ff = { class: "flex justify-end" }, vf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, pf = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), mf = { class: "fixed inset-0 overflow-hidden" }, hf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, gf = { class: "flex-1" }, yf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, bf = { class: "flex items-start justify-between space-x-3" }, wf = { class: "space-y-1" }, kf = { key: 0 }, _f = { key: 2 }, $f = ["innerHTML"], Cf = { class: "flex h-7 items-center" }, xf = { class: "flex justify-end" }, Lf = /* @__PURE__ */ ce({
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
    const n = e, a = s, r = I(), d = I(1);
    function u() {
      var L, fe;
      d.value++, (L = r.value) == null || L.forceUpdate();
      const D = Be();
      (fe = D == null ? void 0 : D.proxy) == null || fe.$forceUpdate();
    }
    function c(D) {
      Object.assign(V.value, D), u();
    }
    function f(D) {
    }
    ss("ModalProvider", {
      openModal: k
    });
    const $ = I(), m = I();
    function k(D, L) {
      $.value = D, m.value = L;
    }
    async function g(D) {
      m.value && m.value(D), $.value = void 0, m.value = void 0;
    }
    const { typeOf: w, typeProperties: j, Crud: H, createDto: re, formValues: F } = rt(), T = v(() => Nt(n.type)), A = v(() => w(T.value)), V = I((() => typeof n.type == "string" ? re(n.type) : n.type ? new n.type() : null)());
    t({ forceUpdate: u, props: n, setModel: c, formFields: r, model: V });
    const z = v(() => n.panelClass || Ze.panelClass(n.formStyle)), Q = v(() => n.formClass || Ze.formClass(n.formStyle)), se = v(() => n.headingClass || Ze.headingClass(n.formStyle)), R = v(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), Z = v(() => n.buttonsClass || Ze.buttonsClass), J = v(() => H.model(A.value)), U = v(() => {
      var D;
      return n.heading || ((D = w(T.value)) == null ? void 0 : D.description) || (J.value ? `New ${ze(J.value)}` : ze(T.value));
    }), M = I(new Xe());
    let ee = js(), y = v(() => ee.loading.value);
    Y.interceptors.has("AutoCreateForm.new") && Y.interceptors.invoke("AutoCreateForm.new", { props: n, model: V });
    async function N(D) {
      var ie, me;
      let L = D.target;
      if (!n.autosave) {
        a("save", new V.value.constructor(F(L, j(A.value))));
        return;
      }
      let fe = Qe((ie = V.value) == null ? void 0 : ie.getMethod, (S) => typeof S == "function" ? S() : null) || "POST", pe = Qe((me = V.value) == null ? void 0 : me.createResponse, (S) => typeof S == "function" ? S() : null) == null;
      if (il.hasRequestBody(fe)) {
        let S = new V.value.constructor(), de = new FormData(L);
        pe ? M.value = await ee.apiFormVoid(S, de, { jsconfig: "eccn" }) : M.value = await ee.apiForm(S, de, { jsconfig: "eccn" });
      } else {
        let S = F(L, j(A.value)), de = new V.value.constructor(S);
        pe ? M.value = await ee.apiVoid(de, { jsconfig: "eccn" }) : M.value = await ee.api(de, { jsconfig: "eccn" });
      }
      M.value.succeeded ? (L.reset(), a("save", M.value.response)) : a("error", M.value.error);
    }
    function E() {
      a("done");
    }
    const h = I(!1), C = I(""), W = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    St(h, () => {
      Lt(W, C, h.value), h.value || setTimeout(E, 700);
    }), h.value = !0;
    function X() {
      n.formStyle == "slideOver" ? h.value = !1 : E();
    }
    const le = (D) => {
      D.key === "Escape" && X();
    };
    return st(() => window.addEventListener("keydown", le)), zt(() => window.removeEventListener("keydown", le)), (D, L) => {
      var Ve, Se, ge, B, q, ne, ye, _e, Me;
      const fe = G("AutoFormFields"), pe = G("FormLoading"), ie = G("SecondaryButton"), me = G("PrimaryButton"), S = G("CloseButton"), de = G("ModalLookup");
      return o(), i("div", null, [
        A.value ? D.formStyle == "card" ? (o(), i("div", {
          key: 1,
          class: b(z.value)
        }, [
          l("form", {
            onSubmit: qe(N, ["prevent"])
          }, [
            l("div", {
              class: b(Q.value)
            }, [
              l("div", null, [
                D.$slots.heading ? (o(), i("div", uf, [
                  K(D.$slots, "heading")
                ])) : (o(), i("h3", {
                  key: 1,
                  class: b(se.value)
                }, P(U.value), 3)),
                D.$slots.subheading ? (o(), i("div", df, [
                  K(D.$slots, "subheading")
                ])) : D.subHeading ? (o(), i("p", {
                  key: 3,
                  class: b(R.value)
                }, P(D.subHeading), 3)) : (Ve = A.value) != null && Ve.notes ? (o(), i("p", {
                  key: 4,
                  class: b(["notes", R.value]),
                  innerHTML: (Se = A.value) == null ? void 0 : Se.notes
                }, null, 10, cf)) : x("", !0)
              ]),
              K(D.$slots, "header", {
                formInstance: (ge = Be()) == null ? void 0 : ge.exposed,
                model: V.value
              }),
              (o(), ae(fe, {
                ref_key: "formFields",
                ref: r,
                key: d.value,
                modelValue: V.value,
                "onUpdate:modelValue": f,
                api: M.value,
                configureField: D.configureField,
                configureFormLayout: D.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              K(D.$slots, "footer", {
                formInstance: (B = Be()) == null ? void 0 : B.exposed,
                model: V.value
              })
            ], 2),
            l("div", {
              class: b(Z.value)
            }, [
              l("div", null, [
                D.showLoading && te(y) ? (o(), ae(pe, { key: 0 })) : x("", !0)
              ]),
              l("div", ff, [
                D.showCancel ? (o(), ae(ie, {
                  key: 0,
                  onClick: X,
                  disabled: te(y)
                }, {
                  default: Ce(() => [
                    ke("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : x("", !0),
                xe(me, {
                  type: "submit",
                  class: "ml-4",
                  disabled: te(y)
                }, {
                  default: Ce(() => [
                    ke("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), i("div", vf, [
          pf,
          l("div", mf, [
            l("div", {
              onMousedown: X,
              class: "absolute inset-0 overflow-hidden"
            }, [
              l("div", {
                onMousedown: L[0] || (L[0] = qe(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                l("div", {
                  class: b(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", C.value])
                }, [
                  l("form", {
                    class: b(Q.value),
                    onSubmit: qe(N, ["prevent"])
                  }, [
                    l("div", hf, [
                      l("div", gf, [
                        l("div", yf, [
                          l("div", bf, [
                            l("div", wf, [
                              D.$slots.heading ? (o(), i("div", kf, [
                                K(D.$slots, "heading")
                              ])) : (o(), i("h3", {
                                key: 1,
                                class: b(se.value)
                              }, P(U.value), 3)),
                              D.$slots.subheading ? (o(), i("div", _f, [
                                K(D.$slots, "subheading")
                              ])) : D.subHeading ? (o(), i("p", {
                                key: 3,
                                class: b(R.value)
                              }, P(D.subHeading), 3)) : (q = A.value) != null && q.notes ? (o(), i("p", {
                                key: 4,
                                class: b(["notes", R.value]),
                                innerHTML: (ne = A.value) == null ? void 0 : ne.notes
                              }, null, 10, $f)) : x("", !0)
                            ]),
                            l("div", Cf, [
                              xe(S, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: X
                              })
                            ])
                          ])
                        ]),
                        K(D.$slots, "header", {
                          formInstance: (ye = Be()) == null ? void 0 : ye.exposed,
                          model: V.value
                        }),
                        (o(), ae(fe, {
                          ref_key: "formFields",
                          ref: r,
                          key: d.value,
                          modelValue: V.value,
                          "onUpdate:modelValue": f,
                          api: M.value,
                          configureField: D.configureField,
                          configureFormLayout: D.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        K(D.$slots, "footer", {
                          formInstance: (_e = Be()) == null ? void 0 : _e.exposed,
                          model: V.value
                        })
                      ])
                    ]),
                    l("div", {
                      class: b(Z.value)
                    }, [
                      l("div", null, [
                        D.showLoading && te(y) ? (o(), ae(pe, { key: 0 })) : x("", !0)
                      ]),
                      l("div", xf, [
                        D.showCancel ? (o(), ae(ie, {
                          key: 0,
                          onClick: X,
                          disabled: te(y)
                        }, {
                          default: Ce(() => [
                            ke("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : x("", !0),
                        xe(me, {
                          type: "submit",
                          class: "ml-4",
                          disabled: te(y)
                        }, {
                          default: Ce(() => [
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
        ])) : (o(), i("div", of, [
          l("p", af, [
            ke("Could not create form for unknown "),
            rf,
            ke(" " + P(T.value), 1)
          ])
        ])),
        ((Me = $.value) == null ? void 0 : Me.name) == "ModalLookup" && $.value.ref ? (o(), ae(de, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : x("", !0)
      ]);
    };
  }
}), Vf = { key: 0 }, Sf = { class: "text-red-700" }, Mf = /* @__PURE__ */ l("b", null, "type", -1), Af = { key: 0 }, Tf = { key: 2 }, Ff = ["innerHTML"], If = { class: "flex justify-end" }, Df = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, Pf = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), jf = { class: "fixed inset-0 overflow-hidden" }, Of = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Bf = { class: "flex-1" }, Rf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Ef = { class: "flex items-start justify-between space-x-3" }, Hf = { class: "space-y-1" }, zf = { key: 0 }, Nf = { key: 2 }, Uf = ["innerHTML"], qf = { class: "flex h-7 items-center" }, Qf = { class: "flex justify-end" }, Kf = /* @__PURE__ */ ce({
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
    const n = e, a = s, r = I(), d = I(1);
    function u() {
      var de;
      d.value++, se.value = Q();
      const S = Be();
      (de = S == null ? void 0 : S.proxy) == null || de.$forceUpdate();
    }
    function c(S) {
      Object.assign(se.value, S);
    }
    function f(S) {
    }
    ss("ModalProvider", {
      openModal: k
    });
    const $ = I(), m = I();
    function k(S, de) {
      $.value = S, m.value = de;
    }
    async function g(S) {
      m.value && m.value(S), $.value = void 0, m.value = void 0;
    }
    const { typeOf: w, apiOf: j, typeProperties: H, createFormLayout: re, getPrimaryKey: F, Crud: T, createDto: A, formValues: ue } = rt(), V = v(() => Nt(n.type)), z = v(() => w(V.value)), Q = () => typeof n.type == "string" ? A(n.type, ys(n.modelValue)) : n.type ? new n.type(ys(n.modelValue)) : null, se = I(Q());
    t({ forceUpdate: u, props: n, setModel: c, formFields: r, model: se });
    const R = v(() => n.panelClass || Ze.panelClass(n.formStyle)), Z = v(() => n.formClass || Ze.formClass(n.formStyle)), J = v(() => n.headingClass || Ze.headingClass(n.formStyle)), U = v(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), M = v(() => T.model(z.value)), ee = v(() => {
      var S;
      return n.heading || ((S = w(V.value)) == null ? void 0 : S.description) || (M.value ? `Update ${ze(M.value)}` : ze(V.value));
    }), y = I(new Xe());
    let N = Object.assign({}, ys(n.modelValue));
    Y.interceptors.has("AutoEditForm.new") && Y.interceptors.invoke("AutoEditForm.new", { props: n, model: se, origModel: N });
    let E = js(), h = v(() => E.loading.value);
    const C = () => Qe(w(T.model(z.value)), (S) => F(S));
    function W(S) {
      const { op: de, prop: Ve } = S;
      de && (T.isPatch(de) || T.isUpdate(de)) && (S.disabled = Ve == null ? void 0 : Ve.isPrimaryKey), n.configureField && n.configureField(S);
    }
    async function X(S) {
      var B, q;
      let de = S.target;
      if (!n.autosave) {
        a("save", new se.value.constructor(ue(de, H(z.value))));
        return;
      }
      let Ve = Qe((B = se.value) == null ? void 0 : B.getMethod, (ne) => typeof ne == "function" ? ne() : null) || "POST", Se = Qe((q = se.value) == null ? void 0 : q.createResponse, (ne) => typeof ne == "function" ? ne() : null) == null, ge = C();
      if (il.hasRequestBody(Ve)) {
        let ne = new se.value.constructor(), ye = be(n.modelValue, ge.name), _e = new FormData(de);
        ge && !Array.from(_e.keys()).some((je) => je.toLowerCase() == ge.name.toLowerCase()) && _e.append(ge.name, ye);
        let Me = [];
        const Re = V.value && j(V.value);
        if (Re && T.isPatch(Re)) {
          let je = re(z.value), Pe = {};
          if (ge && (Pe[ge.name] = ye), je.forEach((Ee) => {
            let it = Ee.id, Tt = be(N, it);
            if (ge && ge.name.toLowerCase() === it.toLowerCase())
              return;
            let mt = _e.get(it);
            Y.interceptors.has("AutoEditForm.save.formLayout") && Y.interceptors.invoke("AutoEditForm.save.formLayout", { origValue: Tt, formLayout: je, input: Ee, newValue: mt });
            let as = mt != null, rs = Ee.type === "checkbox" ? as !== !!Tt : Ee.type === "file" ? as : mt != Tt;
            !mt && !Tt && (rs = !1), rs && (mt ? Pe[it] = mt : Ee.type !== "file" && Me.push(it));
          }), Y.interceptors.has("AutoEditForm.save") && Y.interceptors.invoke("AutoEditForm.save", { origModel: N, formLayout: je, dirtyValues: Pe }), Array.from(_e.keys()).filter((Ee) => !Pe[Ee]).forEach((Ee) => _e.delete(Ee)), Array.from(_e.keys()).filter((Ee) => Ee.toLowerCase() != ge.name.toLowerCase()).length == 0 && Me.length == 0) {
            ie();
            return;
          }
        }
        const Te = Me.length > 0 ? { jsconfig: "eccn", reset: Me } : { jsconfig: "eccn" };
        Se ? y.value = await E.apiFormVoid(ne, _e, Te) : y.value = await E.apiForm(ne, _e, Te);
      } else {
        let ne = ue(de, H(z.value));
        ge && !be(ne, ge.name) && (ne[ge.name] = be(n.modelValue, ge.name));
        let ye = new se.value.constructor(ne);
        Se ? y.value = await E.apiVoid(ye, { jsconfig: "eccn" }) : y.value = await E.api(ye, { jsconfig: "eccn" });
      }
      y.value.succeeded ? (de.reset(), a("save", y.value.response)) : a("error", y.value.error);
    }
    async function le(S) {
      let de = C();
      const Ve = de ? be(n.modelValue, de.name) : null;
      if (!Ve) {
        console.error(`Could not find Primary Key for Type ${V.value} (${M.value})`);
        return;
      }
      const Se = { [de.name]: Ve }, ge = typeof n.deleteType == "string" ? A(n.deleteType, Se) : n.deleteType ? new n.deleteType(Se) : null;
      Qe(ge.createResponse, (q) => typeof q == "function" ? q() : null) == null ? y.value = await E.apiVoid(ge) : y.value = await E.api(ge), y.value.succeeded ? a("delete", y.value.response) : a("error", y.value.error);
    }
    function D() {
      a("done");
    }
    const L = I(!1), fe = I(""), pe = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    St(L, () => {
      Lt(pe, fe, L.value), L.value || setTimeout(D, 700);
    }), L.value = !0;
    function ie() {
      n.formStyle == "slideOver" ? L.value = !1 : D();
    }
    const me = (S) => {
      S.key === "Escape" && ie();
    };
    return st(() => window.addEventListener("keydown", me)), zt(() => window.removeEventListener("keydown", me)), (S, de) => {
      var _e, Me, Re, Te, je, Pe, We, Ee, it;
      const Ve = G("AutoFormFields"), Se = G("ConfirmDelete"), ge = G("FormLoading"), B = G("SecondaryButton"), q = G("PrimaryButton"), ne = G("CloseButton"), ye = G("ModalLookup");
      return o(), i("div", null, [
        z.value ? S.formStyle == "card" ? (o(), i("div", {
          key: 1,
          class: b(R.value)
        }, [
          l("form", {
            onSubmit: qe(X, ["prevent"])
          }, [
            l("div", {
              class: b(Z.value)
            }, [
              l("div", null, [
                S.$slots.heading ? (o(), i("div", Af, [
                  K(S.$slots, "heading")
                ])) : (o(), i("h3", {
                  key: 1,
                  class: b(J.value)
                }, P(ee.value), 3)),
                S.$slots.subheading ? (o(), i("div", Tf, [
                  K(S.$slots, "subheading")
                ])) : S.subHeading ? (o(), i("p", {
                  key: 3,
                  class: b(U.value)
                }, P(S.subHeading), 3)) : (_e = z.value) != null && _e.notes ? (o(), i("p", {
                  key: 4,
                  class: b(["notes", U.value]),
                  innerHTML: (Me = z.value) == null ? void 0 : Me.notes
                }, null, 10, Ff)) : x("", !0)
              ]),
              K(S.$slots, "header", {
                formInstance: (Re = Be()) == null ? void 0 : Re.exposed,
                model: se.value
              }),
              (o(), ae(Ve, {
                ref_key: "formFields",
                ref: r,
                key: d.value,
                modelValue: se.value,
                "onUpdate:modelValue": f,
                api: y.value,
                configureField: S.configureField,
                configureFormLayout: S.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              K(S.$slots, "footer", {
                formInstance: (Te = Be()) == null ? void 0 : Te.exposed,
                model: se.value
              })
            ], 2),
            l("div", {
              class: b(te(Ze).buttonsClass)
            }, [
              l("div", null, [
                S.deleteType ? (o(), ae(Se, {
                  key: 0,
                  onDelete: le
                })) : x("", !0)
              ]),
              l("div", null, [
                S.showLoading && te(h) ? (o(), ae(ge, { key: 0 })) : x("", !0)
              ]),
              l("div", If, [
                xe(B, {
                  onClick: ie,
                  disabled: te(h)
                }, {
                  default: Ce(() => [
                    ke("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                xe(q, {
                  type: "submit",
                  class: "ml-4",
                  disabled: te(h)
                }, {
                  default: Ce(() => [
                    ke("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), i("div", Df, [
          Pf,
          l("div", jf, [
            l("div", {
              onMousedown: ie,
              class: "absolute inset-0 overflow-hidden"
            }, [
              l("div", {
                onMousedown: de[0] || (de[0] = qe(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                l("div", {
                  class: b(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", fe.value])
                }, [
                  l("form", {
                    class: b(Z.value),
                    onSubmit: qe(X, ["prevent"])
                  }, [
                    l("div", Of, [
                      l("div", Bf, [
                        l("div", Rf, [
                          l("div", Ef, [
                            l("div", Hf, [
                              S.$slots.heading ? (o(), i("div", zf, [
                                K(S.$slots, "heading")
                              ])) : (o(), i("h3", {
                                key: 1,
                                class: b(J.value)
                              }, P(ee.value), 3)),
                              S.$slots.subheading ? (o(), i("div", Nf, [
                                K(S.$slots, "subheading")
                              ])) : S.subHeading ? (o(), i("p", {
                                key: 3,
                                class: b(U.value)
                              }, P(S.subHeading), 3)) : (je = z.value) != null && je.notes ? (o(), i("p", {
                                key: 4,
                                class: b(["notes", U.value]),
                                innerHTML: (Pe = z.value) == null ? void 0 : Pe.notes
                              }, null, 10, Uf)) : x("", !0)
                            ]),
                            l("div", qf, [
                              xe(ne, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ie
                              })
                            ])
                          ])
                        ]),
                        K(S.$slots, "header", {
                          formInstance: (We = Be()) == null ? void 0 : We.exposed,
                          model: se.value
                        }),
                        (o(), ae(Ve, {
                          ref_key: "formFields",
                          ref: r,
                          key: d.value,
                          modelValue: se.value,
                          "onUpdate:modelValue": f,
                          api: y.value,
                          configureField: W,
                          configureFormLayout: S.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        K(S.$slots, "footer", {
                          formInstance: (Ee = Be()) == null ? void 0 : Ee.exposed,
                          model: se.value
                        })
                      ])
                    ]),
                    l("div", {
                      class: b(te(Ze).buttonsClass)
                    }, [
                      l("div", null, [
                        S.deleteType ? (o(), ae(Se, {
                          key: 0,
                          onDelete: le
                        })) : x("", !0)
                      ]),
                      l("div", null, [
                        S.showLoading && te(h) ? (o(), ae(ge, { key: 0 })) : x("", !0)
                      ]),
                      l("div", Qf, [
                        xe(B, {
                          onClick: ie,
                          disabled: te(h)
                        }, {
                          default: Ce(() => [
                            ke("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        xe(q, {
                          type: "submit",
                          class: "ml-4",
                          disabled: te(h)
                        }, {
                          default: Ce(() => [
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
        ])) : (o(), i("div", Vf, [
          l("p", Sf, [
            ke("Could not create form for unknown "),
            Mf,
            ke(" " + P(V.value), 1)
          ])
        ])),
        ((it = $.value) == null ? void 0 : it.name) == "ModalLookup" && $.value.ref ? (o(), ae(ye, {
          key: 3,
          "ref-info": $.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : x("", !0)
      ]);
    };
  }
}), Zf = /* @__PURE__ */ l("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), Wf = /* @__PURE__ */ ce({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let s = I(!1);
    const n = t, a = () => {
      s.value && n("delete");
    }, r = v(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      s.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (d, u) => (o(), i(Ie, null, [
      Ct(l("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": u[0] || (u[0] = (c) => ln(s) ? s.value = c : s = c)
      }, null, 512), [
        [ol, te(s)]
      ]),
      Zf,
      l("span", Ae({
        onClick: qe(a, ["prevent"]),
        class: r.value
      }, d.$attrs), [
        K(d.$slots, "default", {}, () => [
          ke("Delete")
        ])
      ], 16)
    ], 64));
  }
}), Gf = {
  class: "flex",
  title: "loading..."
}, Jf = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, Xf = /* @__PURE__ */ xs('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), Yf = [
  Xf
], ev = { class: "ml-2 mt-1 text-gray-400" }, tv = /* @__PURE__ */ ce({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Ue("ApiState", void 0), (t, s) => (o(), i("div", Gf, [
      t.icon ? (o(), i("svg", Jf, Yf)) : x("", !0),
      l("span", ev, P(t.text), 1)
    ]));
  }
}), sv = ["onClick"], lv = {
  key: 3,
  class: "flex justify-between items-center"
}, nv = { class: "mr-1 select-none" }, ov = ["onClick"], av = /* @__PURE__ */ ce({
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
    const s = e, n = t, a = I(), r = I(null), d = (E) => r.value === E, u = al(), c = (E) => Object.keys(u).find((h) => h.toLowerCase() == E.toLowerCase() + "-header"), f = (E) => Object.keys(u).find((h) => h.toLowerCase() == E.toLowerCase()), p = v(() => Ws(s.items).filter((E) => !!(u[E] || u[E + "-header"]))), { typeOf: $, typeProperties: m } = rt(), k = v(() => Nt(s.type)), g = v(() => $(k.value)), w = v(() => m(g.value));
    function j(E) {
      const h = s.headerTitles && be(s.headerTitles, E) || E;
      return s.headerTitle ? s.headerTitle(h) : cn(h);
    }
    function H(E) {
      const h = E.toLowerCase();
      return w.value.find((C) => C.name.toLowerCase() == h);
    }
    function re(E) {
      const h = H(E);
      return h != null && h.format ? h.format : (h == null ? void 0 : h.type) == "TimeSpan" || (h == null ? void 0 : h.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const F = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function T(E) {
      const h = s.visibleFrom && be(s.visibleFrom, E);
      return h && Qe(F[h], (C) => `hidden ${C}`);
    }
    const A = v(() => s.gridClass ?? he.getGridClass(s.tableStyle)), ue = v(() => s.grid2Class ?? he.getGrid2Class(s.tableStyle)), V = v(() => s.grid3Class ?? he.getGrid3Class(s.tableStyle)), z = v(() => s.grid4Class ?? he.getGrid4Class(s.tableStyle)), Q = v(() => s.tableClass ?? he.getTableClass(s.tableStyle)), se = v(() => s.tbodyClass ?? he.getTbodyClass(s.tbodyClass)), R = v(() => s.theadClass ?? he.getTheadClass(s.tableStyle)), Z = v(() => s.theadRowClass ?? he.getTheadRowClass(s.tableStyle)), J = v(() => s.theadCellClass ?? he.getTheadCellClass(s.tableStyle));
    function U(E, h) {
      return s.rowClass ? s.rowClass(E, h) : he.getTableRowClass(s.tableStyle, h, !!(s.isSelected && s.isSelected(E)), s.isSelected != null);
    }
    function M(E, h) {
      return s.rowStyle ? s.rowStyle(E, h) : void 0;
    }
    const ee = v(() => {
      const E = (typeof s.selectedColumns == "string" ? s.selectedColumns.split(",") : s.selectedColumns) || (p.value.length > 0 ? p.value : Ws(s.items)), h = w.value.reduce((C, W) => (C[W.name.toLowerCase()] = W.format, C), {});
      return E.filter((C) => {
        var W;
        return ((W = h[C.toLowerCase()]) == null ? void 0 : W.method) != "hidden";
      });
    });
    function y(E, h) {
      n("headerSelected", h, E);
    }
    function N(E, h, C) {
      n("rowSelected", C, E);
    }
    return (E, h) => {
      const C = G("CellFormat"), W = G("PreviewFormat");
      return E.items.length ? (o(), i("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: b(A.value)
      }, [
        l("div", {
          class: b(ue.value)
        }, [
          l("div", {
            class: b(V.value)
          }, [
            l("div", {
              class: b(z.value)
            }, [
              l("table", {
                class: b(Q.value)
              }, [
                l("thead", {
                  class: b(R.value)
                }, [
                  l("tr", {
                    class: b(Z.value)
                  }, [
                    (o(!0), i(Ie, null, De(ee.value, (X) => (o(), i("td", {
                      class: b([T(X), J.value, d(X) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      l("div", {
                        onClick: (le) => y(le, X)
                      }, [
                        te(u)[X + "-header"] ? K(E.$slots, X + "-header", {
                          key: 0,
                          column: X
                        }) : c(X) ? K(E.$slots, c(X), {
                          key: 1,
                          column: X
                        }) : te(u).header ? K(E.$slots, "header", {
                          key: 2,
                          column: X,
                          label: j(X)
                        }) : (o(), i("div", lv, [
                          l("span", nv, P(j(X)), 1)
                        ]))
                      ], 8, sv)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                l("tbody", {
                  class: b(se.value)
                }, [
                  (o(!0), i(Ie, null, De(E.items, (X, le) => (o(), i("tr", {
                    class: b(U(X, le)),
                    style: nl(M(X, le)),
                    onClick: (D) => N(D, le, X)
                  }, [
                    (o(!0), i(Ie, null, De(ee.value, (D) => (o(), i("td", {
                      class: b([T(D), te(he).tableCellClass])
                    }, [
                      te(u)[D] ? K(E.$slots, D, Ot(Ae({ key: 0 }, X))) : f(D) ? K(E.$slots, f(D), Ot(Ae({ key: 1 }, X))) : H(D) ? (o(), ae(C, {
                        key: 2,
                        type: g.value,
                        propType: H(D),
                        modelValue: X
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), ae(W, {
                        key: 3,
                        value: te(be)(X, D),
                        format: re(D)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, ov))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : x("", !0);
    };
  }
}), rv = ce({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: s } = rt();
    function n(a) {
      return a != null && a.format ? a.format : (a == null ? void 0 : a.type) == "TimeSpan" || (a == null ? void 0 : a.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var H;
      const a = n(e.propType), r = be(e.modelValue, e.propType.name), d = Object.assign({}, e, t), u = yt("span", { innerHTML: ts(r, a, d) }), c = Xt(r) && Array.isArray(r) ? yt("span", {}, [
        yt("span", { class: "mr-2" }, `${r.length}`),
        u
      ]) : u, f = (H = e.propType) == null ? void 0 : H.ref;
      if (!f)
        return c;
      const $ = tt(e.type).find((re) => re.type === f.model);
      if (!$)
        return c;
      const m = be(e.modelValue, $.name), k = m && f.refLabel && be(m, f.refLabel);
      if (!k)
        return c;
      const g = s(f.model), w = g == null ? void 0 : g.icon, j = w ? yt(Xn, { image: w, class: "w-5 h-5 mr-1" }) : null;
      return yt("span", { class: "flex", title: `${f.model} ${r}` }, [
        j,
        k
      ]);
    };
  }
}), iv = { key: 0 }, uv = {
  key: 0,
  class: "mr-2"
}, dv = ["innerHTML"], cv = ["innerHTML"], fv = {
  inheritAttrs: !1
}, vv = /* @__PURE__ */ ce({
  ...fv,
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
    return (n, a) => te(Xt)(n.value) ? (o(), i("span", iv, [
      n.includeCount && s.value ? (o(), i("span", uv, P(n.value.length), 1)) : x("", !0),
      l("span", {
        innerHTML: te(ts)(n.value, n.format, n.$attrs)
      }, null, 8, dv)
    ])) : (o(), i("span", {
      key: 1,
      innerHTML: te(ts)(n.value, n.format, n.$attrs)
    }, null, 8, cv));
  }
}), pv = ["innerHTML"], mv = { key: 0 }, hv = /* @__PURE__ */ l("b", null, null, -1), gv = { key: 2 }, yv = /* @__PURE__ */ ce({
  __name: "HtmlFormat",
  props: {
    value: {},
    depth: { default: 0 },
    fieldAttrs: {},
    classes: { type: Function, default: (e, t, s, n, a) => n }
  },
  setup(e) {
    const t = e, s = v(() => Vt(t.value)), n = v(() => Array.isArray(t.value)), a = (c) => cn(c), r = (c) => t.fieldAttrs ? t.fieldAttrs(c) : null, d = v(() => Ws(t.value)), u = (c) => c ? Object.keys(c).map((f) => ({ key: a(f), val: c[f] })) : [];
    return (c, f) => {
      const p = G("HtmlFormat", !0);
      return o(), i("div", {
        class: b(c.depth == 0 ? "prose html-format" : "")
      }, [
        s.value ? (o(), i("div", {
          key: 0,
          innerHTML: te(ts)(c.value)
        }, null, 8, pv)) : n.value ? (o(), i("div", {
          key: 1,
          class: b(c.classes("array", "div", c.depth, te(he).gridClass))
        }, [
          te(Vt)(c.value[0]) ? (o(), i("div", mv, "[ " + P(c.value.join(", ")) + " ]", 1)) : (o(), i("div", {
            key: 1,
            class: b(c.classes("array", "div", c.depth, te(he).grid2Class))
          }, [
            l("div", {
              class: b(c.classes("array", "div", c.depth, te(he).grid3Class))
            }, [
              l("div", {
                class: b(c.classes("array", "div", c.depth, te(he).grid4Class))
              }, [
                l("table", {
                  class: b(c.classes("object", "table", c.depth, te(he).tableClass))
                }, [
                  l("thead", {
                    class: b(c.classes("array", "thead", c.depth, te(he).theadClass))
                  }, [
                    l("tr", null, [
                      (o(!0), i(Ie, null, De(d.value, ($) => (o(), i("th", {
                        class: b(c.classes("array", "th", c.depth, te(he).theadCellClass + " whitespace-nowrap"))
                      }, [
                        hv,
                        ke(P(a($)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  l("tbody", null, [
                    (o(!0), i(Ie, null, De(c.value, ($, m) => (o(), i("tr", {
                      class: b(c.classes("array", "tr", c.depth, m % 2 == 0 ? "bg-white" : "bg-gray-50", m))
                    }, [
                      (o(!0), i(Ie, null, De(d.value, (k) => (o(), i("td", {
                        class: b(c.classes("array", "td", c.depth, te(he).tableCellClass))
                      }, [
                        xe(p, Ae({
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
        ], 2)) : (o(), i("div", gv, [
          l("table", {
            class: b(c.classes("object", "table", c.depth, "table-object"))
          }, [
            (o(!0), i(Ie, null, De(u(c.value), ($) => (o(), i("tr", {
              class: b(c.classes("object", "tr", c.depth, ""))
            }, [
              l("th", {
                class: b(c.classes("object", "th", c.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, P($.key), 3),
              l("td", {
                class: b(c.classes("object", "td", c.depth, "align-top py-2 px-4 text-sm"))
              }, [
                xe(p, Ae({
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
}), bv = { class: "absolute top-0 right-0 pt-4 pr-4" }, wv = /* @__PURE__ */ l("span", { class: "sr-only" }, "Close", -1), kv = /* @__PURE__ */ l("svg", {
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
], -1), _v = [
  wv,
  kv
], $v = /* @__PURE__ */ ce({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (s, n) => (o(), i("div", bv, [
      l("button", {
        type: "button",
        onClick: n[0] || (n[0] = (a) => s.$emit("close")),
        class: b([s.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, _v, 2)
    ]));
  }
}), Cv = ["id", "aria-labelledby"], xv = /* @__PURE__ */ l("div", { class: "fixed inset-0" }, null, -1), Lv = { class: "fixed inset-0 overflow-hidden" }, Vv = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, Sv = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Mv = { class: "flex-1" }, Av = { class: "relative bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Tv = { class: "flex items-start justify-between space-x-3" }, Fv = { class: "space-y-1" }, Iv = { key: 0 }, Dv = ["id"], Pv = {
  key: 2,
  class: "text-sm text-gray-500"
}, jv = { class: "flex h-7 items-center" }, Ov = {
  key: 0,
  class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
}, Bv = /* @__PURE__ */ ce({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: {},
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const s = t, n = I(!1), a = I(""), r = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    St(n, () => {
      Lt(r, a, n.value), n.value || setTimeout(() => s("done"), 700);
    }), n.value = !0;
    const d = () => n.value = !1, u = (c) => {
      c.key === "Escape" && d();
    };
    return st(() => window.addEventListener("keydown", u)), zt(() => window.removeEventListener("keydown", u)), (c, f) => {
      const p = G("CloseButton");
      return o(), i("div", {
        id: c.id,
        class: "relative z-10",
        "aria-labelledby": c.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        xv,
        l("div", Lv, [
          l("div", {
            onMousedown: d,
            class: "absolute inset-0 overflow-hidden"
          }, [
            l("div", {
              onMousedown: f[0] || (f[0] = qe(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              l("div", {
                class: b(["panel pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                l("div", Vv, [
                  l("div", Sv, [
                    l("div", Mv, [
                      l("div", Av, [
                        l("div", Tv, [
                          l("div", Fv, [
                            c.$slots.title ? (o(), i("div", Iv, [
                              K(c.$slots, "title")
                            ])) : x("", !0),
                            c.title ? (o(), i("h2", {
                              key: 1,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: c.id + "-title"
                            }, P(c.title), 9, Dv)) : x("", !0),
                            c.$slots.subtitle ? (o(), i("p", Pv, [
                              K(c.$slots, "subtitle")
                            ])) : x("", !0)
                          ]),
                          l("div", jv, [
                            xe(p, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: d
                            })
                          ])
                        ])
                      ]),
                      l("div", {
                        class: b(c.contentClass)
                      }, [
                        K(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  c.$slots.footer ? (o(), i("div", Ov, [
                    K(c.$slots, "footer")
                  ])) : x("", !0)
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Cv);
    };
  }
}), Rv = ["id", "data-transition-for", "aria-labelledby"], Ev = { class: "fixed inset-0 z-10 overflow-y-auto" }, Hv = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, zv = /* @__PURE__ */ l("span", { class: "sr-only" }, "Close", -1), Nv = /* @__PURE__ */ l("svg", {
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
], -1), Uv = [
  zv,
  Nv
], qv = /* @__PURE__ */ ce({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: ll.modalClass },
    sizeClass: { default: ll.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const s = t, n = I(!1), a = I(""), r = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, d = I(""), u = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    St(n, () => {
      Lt(r, a, n.value), Lt(u, d, n.value), n.value || setTimeout(() => s("done"), 200);
    }), n.value = !0;
    const c = () => n.value = !1;
    ss("ModalProvider", {
      openModal: m
    });
    const p = I(), $ = I();
    function m(w, j) {
      p.value = w, $.value = j;
    }
    async function k(w) {
      $.value && $.value(w), p.value = void 0, $.value = void 0;
    }
    const g = (w) => {
      w.key === "Escape" && c();
    };
    return st(() => window.addEventListener("keydown", g)), zt(() => window.removeEventListener("keydown", g)), (w, j) => {
      var re;
      const H = G("ModalLookup");
      return o(), i("div", {
        id: w.id,
        "data-transition-for": w.id,
        onMousedown: c,
        class: "relative z-10",
        "aria-labelledby": `${w.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        l("div", {
          class: b(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", a.value])
        }, null, 2),
        l("div", Ev, [
          l("div", Hv, [
            l("div", {
              class: b([w.modalClass, w.sizeClass, d.value]),
              onMousedown: j[0] || (j[0] = qe(() => {
              }, ["stop"]))
            }, [
              l("div", null, [
                l("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  l("button", {
                    type: "button",
                    onClick: c,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, Uv)
                ]),
                K(w.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((re = p.value) == null ? void 0 : re.name) == "ModalLookup" && p.value.ref ? (o(), ae(H, {
          key: 0,
          "ref-info": p.value.ref,
          onDone: k
        }, null, 8, ["ref-info"])) : x("", !0)
      ], 40, Rv);
    };
  }
}), Qv = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, Kv = { class: "mt-3 pl-5 flex flex-wrap items-center" }, Zv = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, Wv = { class: "hidden md:inline" }, Gv = { class: "flex pb-1 sm:pb-0" }, Jv = ["title"], Xv = /* @__PURE__ */ l("svg", {
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
], -1), Yv = [
  Xv
], ep = ["disabled"], tp = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), sp = [
  tp
], lp = ["disabled"], np = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), op = [
  np
], ap = ["disabled"], rp = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), ip = [
  rp
], up = ["disabled"], dp = /* @__PURE__ */ l("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), cp = [
  dp
], fp = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, vp = { class: "px-4 text-lg text-black dark:text-white" }, pp = { key: 0 }, mp = { key: 1 }, hp = /* @__PURE__ */ l("span", { class: "hidden xl:inline" }, " Showing Results ", -1), gp = { key: 2 }, yp = {
  key: 1,
  class: "pl-2"
}, bp = /* @__PURE__ */ l("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), wp = [
  bp
], kp = { class: "flex pb-1 sm:pb-0" }, _p = {
  key: 0,
  class: "pl-2"
}, $p = /* @__PURE__ */ l("svg", {
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
], -1), Cp = { class: "mr-1" }, xp = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Lp = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), Vp = [
  Lp
], Sp = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Mp = /* @__PURE__ */ l("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Ap = [
  Mp
], Tp = { key: 1 }, Fp = { key: 4 }, Ip = { key: 0 }, Dp = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, Pp = { class: "mr-1 select-none" }, jp = {
  key: 1,
  class: "flex justify-between items-center"
}, Op = { class: "mr-1 select-none" }, sn = 25, Bp = /* @__PURE__ */ ce({
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
    const s = e, n = t, a = al(), { config: r } = At(), { metadataApi: d, filterDefinitions: u } = rt(), c = Ue("client"), f = r.value.storage, p = v(() => s.toolbarButtonClass ?? he.toolbarButtonClass), $ = v(() => u.value), m = I({ take: sn }), k = I(new Xe()), g = I(s.skip), w = I(!1), j = I(), H = (B) => typeof B == "string" ? B.split(",") : B || [];
    function re(B, q) {
      return he.getTableRowClass("fullWidth", q, !1, !0);
    }
    function F() {
      let B = H(s.selectedColumns);
      return B.length > 0 ? B : [];
    }
    const T = v(() => at(s.refInfo.model)), A = v(() => {
      let q = F().map((ye) => ye.toLowerCase());
      const ne = tt(T.value);
      return q.length > 0 ? q.map((ye) => ne.find((_e) => _e.name.toLowerCase() === ye)).filter((ye) => ye != null) : ne;
    }), ue = v(() => {
      let B = A.value.map((ne) => ne.name), q = H(m.value.selectedColumns).map((ne) => ne.toLowerCase());
      return q.length > 0 ? B.filter((ne) => q.includes(ne.toLowerCase())) : B;
    }), V = v(() => m.value.take ?? sn), z = v(() => k.value.response ? be(k.value.response, "results") : []), Q = v(() => {
      var B;
      return ((B = k.value.response) == null ? void 0 : B.total) ?? z.value.length ?? 0;
    }), se = v(() => g.value > 0), R = v(() => g.value > 0), Z = v(() => z.value.length >= V.value), J = v(() => z.value.length >= V.value), U = I([]), M = v(() => U.value.some((B) => B.settings.filters.length > 0 || !!B.settings.sort)), ee = v(() => U.value.map((B) => B.settings.filters.length).reduce((B, q) => B + q, 0)), y = v(() => ns(T.value)), N = v(() => {
      var B;
      return (B = d.value) == null ? void 0 : B.operations.find((q) => {
        var ne;
        return ((ne = q.dataModel) == null ? void 0 : ne.name) == s.refInfo.model && Ne.isAnyQuery(q);
      });
    }), E = I(), h = I(!1), C = I(), W = () => `${s.id}/ApiPrefs/${s.refInfo.model}`, X = (B) => `Column/${s.id}:${s.refInfo.model}.${B}`;
    async function le(B) {
      g.value += B, g.value < 0 && (g.value = 0);
      var q = Math.floor(Q.value / V.value) * V.value;
      g.value > q && (g.value = q), await de();
    }
    async function D(B, q) {
      n("done", B);
    }
    function L() {
      n("done", null);
    }
    function fe(B, q) {
      var ye, _e, Me;
      let ne = q.target;
      if ((ne == null ? void 0 : ne.tagName) !== "TD") {
        let Re = (ye = ne == null ? void 0 : ne.closest("TABLE")) == null ? void 0 : ye.getBoundingClientRect(), Te = U.value.find((je) => je.name.toLowerCase() == B.toLowerCase());
        if (Te && Re) {
          let je = 318, We = (((_e = q.target) == null ? void 0 : _e.tagName) === "DIV" ? q.target : (Me = q.target) == null ? void 0 : Me.closest("DIV")).getBoundingClientRect(), Ee = je + 25;
          C.value = {
            column: Te,
            topLeft: {
              x: Math.max(Math.floor(We.x + 25), Ee),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function pe() {
      C.value = null;
    }
    async function ie(B) {
      var ne;
      let q = (ne = C.value) == null ? void 0 : ne.column;
      q && (q.settings = B, f.setItem(X(q.name), JSON.stringify(q.settings)), await de()), C.value = null;
    }
    async function me(B) {
      f.setItem(X(B.name), JSON.stringify(B.settings)), await de();
    }
    async function S(B) {
      h.value = !1, m.value = B, f.setItem(W(), JSON.stringify(B)), await de();
    }
    async function de() {
      await Ve(Se());
    }
    async function Ve(B) {
      const q = N.value;
      if (!q) {
        console.error(`No Query API was found for ${s.refInfo.model}`);
        return;
      }
      let ne = Yt(q, B), ye = dn((Re) => {
        k.value.response = k.value.error = void 0, w.value = Re;
      }), _e = await c.api(ne);
      ye(), $t(() => k.value = _e);
      let Me = be(_e.response, "results") || [];
      !_e.succeeded || Me.label == 0;
    }
    function Se() {
      let B = {
        include: "total",
        take: V.value
      }, q = H(m.value.selectedColumns || s.selectedColumns);
      if (q.length > 0) {
        let ye = y.value;
        ye && q.includes(ye.name) && (q = [ye.name, ...q]), B.fields = q.join(",");
      }
      let ne = [];
      return U.value.forEach((ye) => {
        ye.settings.sort && ne.push((ye.settings.sort === "DESC" ? "-" : "") + ye.name), ye.settings.filters.forEach((_e) => {
          let Me = _e.key.replace("%", ye.name);
          B[Me] = _e.value;
        });
      }), typeof B.skip > "u" && g.value > 0 && (B.skip = g.value), ne.length > 0 && (B.orderBy = ne.join(",")), B;
    }
    async function ge() {
      U.value.forEach((B) => {
        B.settings = { filters: [] }, f.removeItem(X(B.name));
      }), await de();
    }
    return st(async () => {
      const B = s.prefs || $s(f.getItem(W()));
      B && (m.value = B), U.value = A.value.map((q) => ({
        name: q.name,
        type: q.type,
        meta: q,
        settings: Object.assign(
          {
            filters: []
          },
          $s(f.getItem(X(q.name)))
        )
      })), isNaN(s.skip) || (g.value = s.skip), await de();
    }), (B, q) => {
      const ne = G("ErrorSummary"), ye = G("Loading"), _e = G("SettingsIcons"), Me = G("DataGrid"), Re = G("ModalDialog");
      return o(), i(Ie, null, [
        B.refInfo ? (o(), ae(Re, {
          key: 0,
          ref_key: "modalDialog",
          ref: E,
          id: B.id,
          onDone: L
        }, {
          default: Ce(() => [
            l("div", Qv, [
              l("div", Kv, [
                l("h3", Zv, [
                  ke(" Select "),
                  l("span", Wv, P(te(ze)(B.refInfo.model)), 1)
                ]),
                l("div", Gv, [
                  B.showPreferences ? (o(), i("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${B.refInfo.model} Preferences`,
                    onClick: q[0] || (q[0] = (Te) => h.value = !h.value)
                  }, Yv, 8, Jv)) : x("", !0),
                  B.showPagingNav ? (o(), i("button", {
                    key: 1,
                    type: "button",
                    class: b(["pl-2", se.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !se.value,
                    onClick: q[1] || (q[1] = (Te) => le(-Q.value))
                  }, sp, 10, ep)) : x("", !0),
                  B.showPagingNav ? (o(), i("button", {
                    key: 2,
                    type: "button",
                    class: b(["pl-2", R.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !R.value,
                    onClick: q[2] || (q[2] = (Te) => le(-V.value))
                  }, op, 10, lp)) : x("", !0),
                  B.showPagingNav ? (o(), i("button", {
                    key: 3,
                    type: "button",
                    class: b(["pl-2", Z.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !Z.value,
                    onClick: q[3] || (q[3] = (Te) => le(V.value))
                  }, ip, 10, ap)) : x("", !0),
                  B.showPagingNav ? (o(), i("button", {
                    key: 4,
                    type: "button",
                    class: b(["pl-2", J.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !J.value,
                    onClick: q[4] || (q[4] = (Te) => le(Q.value))
                  }, cp, 10, up)) : x("", !0)
                ]),
                B.showPagingInfo ? (o(), i("div", fp, [
                  l("div", vp, [
                    w.value ? (o(), i("span", pp, "Querying...")) : x("", !0),
                    z.value.length ? (o(), i("span", mp, [
                      hp,
                      ke(" " + P(g.value + 1) + " - " + P(Math.min(g.value + z.value.length, Q.value)) + " ", 1),
                      l("span", null, " of " + P(Q.value), 1)
                    ])) : k.value.completed ? (o(), i("span", gp, "No Results")) : x("", !0)
                  ])
                ])) : x("", !0),
                M.value && B.showResetPreferences ? (o(), i("div", yp, [
                  l("button", {
                    type: "button",
                    onClick: ge,
                    title: "Reset Preferences & Filters",
                    class: b(p.value)
                  }, wp, 2)
                ])) : x("", !0),
                l("div", kp, [
                  B.showFiltersView && ee.value > 0 ? (o(), i("div", _p, [
                    l("button", {
                      type: "button",
                      onClick: q[5] || (q[5] = (Te) => j.value = j.value == "filters" ? null : "filters"),
                      class: b(p.value),
                      "aria-expanded": "false"
                    }, [
                      $p,
                      l("span", Cp, P(ee.value) + " " + P(ee.value == 1 ? "Filter" : "Filters"), 1),
                      j.value != "filters" ? (o(), i("svg", xp, Vp)) : (o(), i("svg", Sp, Ap))
                    ], 2)
                  ])) : x("", !0)
                ])
              ]),
              j.value == "filters" ? (o(), ae(Il, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: $.value,
                columns: U.value,
                onDone: q[6] || (q[6] = (Te) => j.value = null),
                onChange: me
              }, null, 8, ["definitions", "columns"])) : x("", !0),
              C.value ? (o(), i("div", Tp, [
                xe(Fl, {
                  definitions: $.value,
                  column: C.value.column,
                  "top-left": C.value.topLeft,
                  onDone: pe,
                  onSave: ie
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : x("", !0),
              k.value.error ? (o(), ae(ne, {
                key: 2,
                status: k.value.error
              }, null, 8, ["status"])) : w.value ? (o(), ae(ye, { key: 3 })) : (o(), i("div", Fp, [
                z.value.length ? (o(), i("div", Ip, [
                  xe(Me, {
                    id: B.id,
                    items: z.value,
                    type: B.refInfo.model,
                    "selected-columns": ue.value,
                    onFiltersChanged: de,
                    tableStyle: "fullWidth",
                    rowClass: re,
                    onRowSelected: D,
                    onHeaderSelected: fe
                  }, rl({
                    header: Ce(({ column: Te, label: je }) => {
                      var Pe;
                      return [
                        B.allowFiltering && (!s.canFilter || s.canFilter(Te)) ? (o(), i("div", Dp, [
                          l("span", Pp, P(je), 1),
                          xe(_e, {
                            column: U.value.find((We) => We.name.toLowerCase() === Te.toLowerCase()),
                            "is-open": ((Pe = C.value) == null ? void 0 : Pe.column.name) === Te
                          }, null, 8, ["column", "is-open"])
                        ])) : (o(), i("div", jp, [
                          l("span", Op, P(je), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    De(Object.keys(te(a)), (Te) => ({
                      name: Te,
                      fn: Ce((je) => [
                        K(B.$slots, Te, Ot(ks(je)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : x("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : x("", !0),
        h.value ? (o(), ae(Dl, {
          key: 1,
          columns: A.value,
          prefs: m.value,
          onDone: q[7] || (q[7] = (Te) => h.value = !1),
          onSave: S
        }, null, 8, ["columns", "prefs"])) : x("", !0)
      ], 64);
    };
  }
}), Rp = { class: "sm:hidden" }, Ep = ["for"], Hp = ["id", "name"], zp = ["value"], Np = { class: "hidden sm:block" }, Up = { class: "border-b border-gray-200" }, qp = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, Qp = ["onClick"], Kp = /* @__PURE__ */ ce({
  __name: "Tabs",
  props: {
    tabs: {},
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => ze(e) },
    selected: {},
    tabClass: {},
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 },
    clearQuery: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, s = v(() => Object.keys(t.tabs)), n = (p) => t.label ? t.label(p) : ze(p), a = v(() => t.id || "tabs"), r = v(() => t.param || "tab"), d = I();
    function u(p) {
      if (d.value = p, t.url) {
        const $ = s.value[0];
        ul({ tab: p === $ ? void 0 : p }, t.clearQuery);
      }
    }
    function c(p) {
      return d.value === p;
    }
    const f = v(() => `${100 / Object.keys(t.tabs).length}%`);
    return st(() => {
      if (d.value = t.selected || Object.keys(t.tabs)[0], t.url) {
        const p = location.search ? location.search : location.hash.includes("?") ? "?" + ms(location.hash, "?") : "", m = Zs(p)[r.value];
        m && (d.value = m);
      }
    }), (p, $) => (o(), i("div", null, [
      l("div", Rp, [
        l("label", {
          for: a.value,
          class: "sr-only"
        }, "Select a tab", 8, Ep),
        l("select", {
          id: a.value,
          name: a.value,
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: $[0] || ($[0] = (m) => {
            var k;
            return u((k = m.target) == null ? void 0 : k.value);
          })
        }, [
          (o(!0), i(Ie, null, De(s.value, (m) => (o(), i("option", {
            key: m,
            value: m
          }, P(n(m)), 9, zp))), 128))
        ], 40, Hp)
      ]),
      l("div", Np, [
        l("div", Up, [
          l("nav", qp, [
            (o(!0), i(Ie, null, De(s.value, (m) => (o(), i("a", {
              href: "#",
              onClick: qe((k) => u(m), ["prevent"]),
              style: nl({ width: f.value }),
              class: b([c(m) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", p.tabClass])
            }, P(n(m)), 15, Qp))), 256))
          ])
        ])
      ]),
      l("div", {
        class: b(p.bodyClass)
      }, [
        (o(), ae(on(p.tabs[d.value])))
      ], 2)
    ]));
  }
}), Zp = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), Wp = [
  Zp
], Gp = /* @__PURE__ */ l("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ l("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), Jp = [
  Gp
], Xp = /* @__PURE__ */ ce({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.documentElement : null, s = () => !!(t != null && t.classList.contains("dark")), n = I(localStorage.getItem("color-scheme") == "dark");
    function a() {
      s() ? t == null || t.classList.remove("dark") : t == null || t.classList.add("dark"), n.value = s(), localStorage.setItem("color-scheme", n.value ? "dark" : "light");
    }
    return (r, d) => (o(), i("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: d[0] || (d[0] = (u) => a())
    }, [
      l("span", {
        class: b(`${n.value ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        l("span", {
          class: b(`${n.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Wp, 2),
        l("span", {
          class: b(`${n.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Jp, 2)
      ], 2)
    ]));
  }
}), Yp = { key: 0 }, e1 = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, t1 = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, s1 = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, l1 = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, n1 = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, o1 = ["onClick"], a1 = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, r1 = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, i1 = { class: "mt-8" }, u1 = {
  key: 1,
  class: "mt-6"
}, d1 = /* @__PURE__ */ xs('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), c1 = { class: "mt-6 grid grid-cols-3 gap-3" }, f1 = ["href", "title"], v1 = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, p1 = /* @__PURE__ */ l("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), m1 = /* @__PURE__ */ l("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), h1 = [
  p1,
  m1
], g1 = /* @__PURE__ */ ce({
  __name: "SignIn",
  props: {
    provider: {},
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const s = e, n = t, { getMetadata: a, createDto: r } = rt(), d = js(), u = Ue("client"), { signIn: c } = Tl(), f = a({ assert: !0 }), p = f.plugins.auth, $ = document.baseURI, m = f.app.baseUrl, k = I(r("Authenticate")), g = I(new Xe()), w = I(s.provider);
    st(() => {
      p == null || p.authProviders.map((R) => R.formLayout).filter((R) => R).forEach((R) => R.forEach(
        (Z) => k.value[Z.id] = Z.type === "checkbox" ? !1 : ""
      ));
    });
    const j = v(() => (p == null ? void 0 : p.authProviders.filter((R) => R.formLayout)) || []), H = v(() => j.value[0] || {}), re = v(() => j.value[Math.max(j.value.length - 1, 0)] || {}), F = v(() => (w.value ? p == null ? void 0 : p.authProviders.find((R) => R.name === w.value) : null) ?? H.value), T = (R) => R === !1 || R === "false";
    function A(R) {
      return R.label || R.navItem && R.navItem.label;
    }
    const ue = v(() => {
      var R;
      return (((R = F.value) == null ? void 0 : R.formLayout) || []).map((Z) => {
        var J, U;
        return Object.assign({}, Z, {
          type: (J = Z.type) == null ? void 0 : J.toLowerCase(),
          autocomplete: Z.autocomplete || (((U = Z.type) == null ? void 0 : U.toLowerCase()) === "password" ? "current-password" : void 0) || (Z.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, Z.css)
        });
      });
    }), V = v(() => T(s.oauth) ? [] : (p == null ? void 0 : p.authProviders.filter((R) => R.type === "oauth")) || []), z = v(() => {
      let R = jo(
        p == null ? void 0 : p.authProviders.filter((J) => J.formLayout && J.formLayout.length > 0),
        (J, U) => {
          let M = A(U) || ot(U.name);
          J[M] = U.name === H.value.name ? "" : U.name;
        }
      );
      const Z = F.value;
      return Z && T(s.tabs) && (R = { [A(Z) || ot(Z.name)]: Z }), R;
    }), Q = v(() => {
      let R = ue.value.map((Z) => Z.id).filter((Z) => Z);
      return g.value.summaryMessage(R);
    });
    async function se() {
      if (k.value.provider = F.value.name, F.value.name === "authsecret" ? (u.headers.set("authsecret", k.value.authsecret), k.value = r("Authenticate")) : F.value.name === "basic" ? (u.setCredentials(k.value.UserName, k.value.Password), k.value = r("Authenticate"), k.value.UserName = null, k.value.Password = null) : (F.value.type === "Bearer" || F.value.name === "jwt") && (u.bearerToken = k.value.BearerToken, k.value = r("Authenticate")), g.value = await d.api(k.value), g.value.succeeded) {
        const R = g.value.response;
        c(R), n("login", R), g.value = new Xe(), k.value = r("Authenticate");
      }
    }
    return (R, Z) => {
      const J = G("ErrorSummary"), U = G("AutoFormFields"), M = G("PrimaryButton"), ee = G("Icon"), y = wo("href");
      return te(p) ? (o(), i("div", e1, [
        l("div", t1, [
          l("h2", s1, P(R.title), 1),
          Object.keys(z.value).length > 1 ? (o(), i("p", l1, [
            l("span", n1, [
              (o(!0), i(Ie, null, De(z.value, (N, E) => Ct((o(), i("a", {
                onClick: (h) => w.value = N,
                class: b([
                  N === "" || N === H.value.name ? "rounded-l-md" : N === re.value.name ? "rounded-r-md -ml-px" : "-ml-px",
                  w.value === N ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                ke(P(E), 1)
              ], 10, o1)), [
                [y, { provider: N }]
              ])), 256))
            ])
          ])) : x("", !0)
        ]),
        l("div", a1, [
          Q.value ? (o(), ae(J, {
            key: 0,
            class: "mb-3",
            errorSummary: Q.value
          }, null, 8, ["errorSummary"])) : x("", !0),
          l("div", r1, [
            ue.value.length ? (o(), i("form", {
              key: 0,
              onSubmit: qe(se, ["prevent"])
            }, [
              xe(U, {
                modelValue: k.value,
                formLayout: ue.value,
                api: g.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              l("div", i1, [
                xe(M, { class: "w-full" }, {
                  default: Ce(() => [
                    ke("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 32)) : x("", !0),
            V.value.length ? (o(), i("div", u1, [
              d1,
              l("div", c1, [
                (o(!0), i(Ie, null, De(V.value, (N) => (o(), i("div", null, [
                  l("a", {
                    href: te(m) + N.navItem.href + "?continue=" + te($),
                    title: A(N),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    N.icon ? (o(), ae(ee, {
                      key: 0,
                      image: N.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (o(), i("svg", v1, h1))
                  ], 8, f1)
                ]))), 256))
              ])
            ])) : x("", !0)
          ])
        ])
      ])) : (o(), i("div", Yp, "No Auth Plugin"));
    };
  }
}), y1 = ["for"], b1 = {
  key: 1,
  class: "border border-gray-200 flex justify-between"
}, w1 = { class: "p-2 flex flex-wrap gap-x-4" }, k1 = /* @__PURE__ */ l("title", null, "Bold text (CTRL+B)", -1), _1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
}, null, -1), $1 = [
  k1,
  _1
], C1 = /* @__PURE__ */ l("title", null, "Italics (CTRL+I)", -1), x1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
}, null, -1), L1 = [
  C1,
  x1
], V1 = /* @__PURE__ */ l("title", null, "Insert Link (CTRL+K)", -1), S1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
}, null, -1), M1 = [
  V1,
  S1
], A1 = /* @__PURE__ */ l("title", null, "Blockquote (CTRL+Q)", -1), T1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
}, null, -1), F1 = [
  A1,
  T1
], I1 = /* @__PURE__ */ l("title", null, "Insert Image (CTRL+SHIFT+L)", -1), D1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
}, null, -1), P1 = [
  I1,
  D1
], j1 = /* @__PURE__ */ l("title", null, "Insert Code (CTRL+<)", -1), O1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
}, null, -1), B1 = [
  j1,
  O1
], R1 = /* @__PURE__ */ l("title", null, "H2 Heading (CTRL+H)", -1), E1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"
}, null, -1), H1 = [
  R1,
  E1
], z1 = /* @__PURE__ */ l("title", null, "Numbered List (ALT+1)", -1), N1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
}, null, -1), U1 = [
  z1,
  N1
], q1 = /* @__PURE__ */ l("title", null, "Bulleted List (ALT+-)", -1), Q1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
}, null, -1), K1 = [
  q1,
  Q1
], Z1 = /* @__PURE__ */ l("title", null, "Strike Through (ALT+S)", -1), W1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
}, null, -1), G1 = [
  Z1,
  W1
], J1 = /* @__PURE__ */ l("title", null, "Undo (CTRL+Z)", -1), X1 = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
}, null, -1), Y1 = [
  J1,
  X1
], em = /* @__PURE__ */ l("title", null, "Redo (CTRL+SHIFT+Z)", -1), tm = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
}, null, -1), sm = [
  em,
  tm
], lm = {
  key: 0,
  class: "p-2 flex flex-wrap gap-x-4"
}, nm = ["href"], om = /* @__PURE__ */ l("path", {
  fill: "currentColor",
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
}, null, -1), am = [
  om
], rm = { class: "" }, im = ["name", "id", "label", "value", "rows", "disabled"], um = ["id"], dm = ["id"], Je = "w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400", cm = /* @__PURE__ */ ce({
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
    let r = [], d = [], u = Ue("ApiState", void 0);
    const c = v(() => pt.call({ responseStatus: n.status ?? (u == null ? void 0 : u.error.value) }, n.id)), f = v(() => n.label ?? ze(ot(n.id))), p = "bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","), $ = v(() => n.hide ? _t(p, n.hide) : _t(p, []));
    function m(h) {
      return $.value[h];
    }
    const k = v(() => ["shadow-sm font-mono" + nt.base.replace("rounded-md", ""), c.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + nt.valid, n.inputClass]), g = I();
    t({ props: n, textarea: g, updateModelValue: w, selection: H, hasSelection: j, selectionInfo: re, insert: T, replace: F });
    function w(h) {
      a("update:modelValue", h);
    }
    function j() {
      return g.value.selectionStart !== g.value.selectionEnd;
    }
    function H() {
      const h = g.value;
      return h.value.substring(h.selectionStart, h.selectionEnd) || "";
    }
    function re() {
      const h = g.value, C = h.value, W = h.selectionStart, X = C.substring(W, h.selectionEnd) || "", le = C.substring(0, W), D = le.lastIndexOf(`
`);
      return {
        value: C,
        sel: X,
        selPos: W,
        beforeSel: le,
        afterSel: C.substring(W),
        prevCRPos: D,
        beforeCR: D >= 0 ? le.substring(0, D + 1) : "",
        afterCR: D >= 0 ? le.substring(D + 1) : ""
      };
    }
    function F({ value: h, selectionStart: C, selectionEnd: W }) {
      W == null && (W = C), w(h), $t(() => {
        g.value.focus(), g.value.setSelectionRange(C, W);
      });
    }
    function T(h, C, W = "", { selectionAtEnd: X, offsetStart: le, offsetEnd: D, filterValue: L, filterSelection: fe } = {}) {
      const pe = g.value;
      let ie = pe.value, me = pe.selectionEnd;
      r.push({ value: ie, selectionStart: pe.selectionStart, selectionEnd: pe.selectionEnd }), d = [];
      const S = pe.selectionStart, de = pe.selectionEnd;
      let Ve = ie.substring(0, S), Se = ie.substring(de);
      const ge = h && Ve.endsWith(h) && Se.startsWith(C);
      if (S == de) {
        if (ge ? (ie = Ve.substring(0, Ve.length - h.length) + Se.substring(C.length), me += -C.length) : (ie = Ve + h + W + C + Se, me += h.length, le = 0, D = (W == null ? void 0 : W.length) || 0, X && (me += D, D = 0)), L) {
          var q = { pos: me };
          ie = L(ie, q), me = q.pos;
        }
      } else {
        var ne = ie.substring(S, de);
        fe && (ne = fe(ne)), ge ? (ie = Ve.substring(0, Ve.length - h.length) + ne + Se.substring(C.length), le = -ne.length - h.length, D = ne.length) : (ie = Ve + h + ne + C + Se, le ? me += (h + C).length : (me = S, le = h.length, D = ne.length));
      }
      w(ie), $t(() => {
        pe.focus(), le = me + (le || 0), D = (le || 0) + (D || 0), pe.setSelectionRange(le, D);
      });
    }
    const A = () => T("**", "**", "bold"), ue = () => T("_", "_", "italics"), V = () => T("~~", "~~", "strikethrough"), z = () => T("[", "](https://)", "", { offsetStart: -9, offsetEnd: 8 }), Q = () => T(`
> `, `
`, "Blockquote", {}), se = () => T("![](", ")");
    function R(h) {
      const C = H();
      if (C && !h.shiftKey)
        T("`", "`", "code");
      else {
        const W = n.lang || "js";
        C.indexOf(`
`) === -1 ? T("\n```" + W + `
`, "\n```\n", "// code") : T("```" + W + `
`, "```\n", "");
      }
    }
    function Z() {
      if (j()) {
        let { sel: h, selPos: C, beforeSel: W, afterSel: X, prevCRPos: le, beforeCR: D, afterCR: L } = re();
        if (h.indexOf(`
`) === -1)
          T(`
 1. `, `
`);
        else if (!h.startsWith(" 1. ")) {
          let ie = 1;
          T("", "", " - ", {
            selectionAtEnd: !0,
            filterSelection: (me) => " 1. " + me.replace(/\n$/, "").replace(/\n/g, (S) => `
 ${++ie}. `) + `
`
          });
        } else
          T("", "", "", {
            filterValue: (ie, me) => {
              if (le >= 0) {
                let S = L.replace(/^ - /, "");
                W = D + S, me.pos -= L.length - S.length;
              }
              return W + X;
            },
            filterSelection: (ie) => ie.replace(/^ 1. /g, "").replace(/\n \d+. /g, `
`)
          });
      } else
        T(`
 1. `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function J() {
      if (j()) {
        let { sel: h, selPos: C, beforeSel: W, afterSel: X, prevCRPos: le, beforeCR: D, afterCR: L } = re();
        h.indexOf(`
`) === -1 ? T(`
 - `, `
`) : !h.startsWith(" - ") ? T("", "", " - ", {
          selectionAtEnd: !0,
          filterSelection: (ie) => " - " + ie.replace(/\n$/, "").replace(/\n/g, `
 - `) + `
`
        }) : T("", "", "", {
          filterValue: (ie, me) => {
            if (le >= 0) {
              let S = L.replace(/^ - /, "");
              W = D + S, me.pos -= L.length - S.length;
            }
            return W + X;
          },
          filterSelection: (ie) => ie.replace(/^ - /g, "").replace(/\n - /g, `
`)
        });
      } else
        T(`
 - `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function U() {
      const h = H(), C = h.indexOf(`
`) === -1;
      h ? C ? T(`
## `, `
`, "") : T("## ", "", "") : T(`
## `, `
`, "Heading", { offsetStart: -8, offsetEnd: 7 });
    }
    function M() {
      let { sel: h, selPos: C, beforeSel: W, afterSel: X, prevCRPos: le, beforeCR: D, afterCR: L } = re();
      !h.startsWith("//") && !L.startsWith("//") ? h ? T("", "", "//", {
        selectionAtEnd: !0,
        filterSelection: (pe) => "//" + pe.replace(/\n$/, "").replace(/\n/g, `
//`) + `
`
      }) : F({
        value: D + "//" + L + X,
        selectionStart: C + 2
      }) : T("", "", "", {
        filterValue: (pe, ie) => {
          if (le >= 0) {
            let me = L.replace(/^\/\//, "");
            W = D + me, ie.pos -= L.length - me.length;
          }
          return W + X;
        },
        filterSelection: (pe) => pe.replace(/^\/\//g, "").replace(/\n\/\//g, `
`)
      });
    }
    const ee = () => T(`/*
`, `*/
`, "");
    function y() {
      if (r.length === 0)
        return !1;
      const h = g.value, C = r.pop();
      return d.push({ value: h.value, selectionStart: h.selectionStart, selectionEnd: h.selectionEnd }), F(C), !0;
    }
    function N() {
      if (d.length === 0)
        return !1;
      const h = g.value, C = d.pop();
      return r.push({ value: h.value, selectionStart: h.selectionStart, selectionEnd: h.selectionEnd }), F(C), !0;
    }
    const E = () => null;
    return st(() => {
      r = [], d = [];
      const h = g.value;
      h.onkeydown = (C) => {
        if (C.key === "Escape" || C.keyCode === 27) {
          a("close");
          return;
        }
        const W = String.fromCharCode(C.keyCode).toLowerCase();
        W === "	" ? (!C.shiftKey ? T("", "", "    ", {
          selectionAtEnd: !0,
          filterSelection: (le) => "    " + le.replace(/\n$/, "").replace(/\n/g, `
    `) + `
`
        }) : T("", "", "", {
          filterValue: (le, D) => {
            let { selPos: L, beforeSel: fe, afterSel: pe, prevCRPos: ie, beforeCR: me, afterCR: S } = re();
            if (ie >= 0) {
              let de = S.replace(/\t/g, "    ").replace(/^ ? ? ? ?/, "");
              fe = me + de, D.pos -= S.length - de.length;
            }
            return fe + pe;
          },
          filterSelection: (le) => le.replace(/\t/g, "    ").replace(/^ ? ? ? ?/g, "").replace(/\n    /g, `
`)
        }), C.preventDefault()) : C.ctrlKey ? W === "z" ? C.shiftKey ? N() && C.preventDefault() : y() && C.preventDefault() : W === "b" && !C.shiftKey ? (A(), C.preventDefault()) : W === "h" && !C.shiftKey ? (U(), C.preventDefault()) : W === "i" && !C.shiftKey ? (ue(), C.preventDefault()) : W === "q" && !C.shiftKey ? (Q(), C.preventDefault()) : W === "k" ? C.shiftKey ? (se(), C.preventDefault()) : (z(), C.preventDefault()) : W === "," || C.key === "<" || C.key === ">" || C.keyCode === 188 ? (R(C), C.preventDefault()) : W === "/" || C.key === "/" ? (M(), C.preventDefault()) : (W === "?" || C.key === "?") && C.shiftKey && (ee(), C.preventDefault()) : C.altKey && (C.key === "1" || C.key === "0" ? (Z(), C.preventDefault()) : C.key === "-" ? (J(), C.preventDefault()) : C.key === "s" && (V(), C.preventDefault()));
      };
    }), (h, C) => {
      var W;
      return o(), i("div", null, [
        K(h.$slots, "header", Ae({
          inputElement: g.value,
          id: h.id,
          modelValue: h.modelValue,
          status: h.status
        }, h.$attrs)),
        f.value ? (o(), i("label", {
          key: 0,
          for: h.id,
          class: b(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${h.labelClass ?? ""}`)
        }, P(f.value), 11, y1)) : x("", !0),
        h.disabled ? x("", !0) : (o(), i("div", b1, [
          l("div", w1, [
            m("bold") ? (o(), i("svg", {
              key: 0,
              class: b(Je),
              onClick: A,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, $1)) : x("", !0),
            m("italics") ? (o(), i("svg", {
              key: 1,
              class: b(Je),
              onClick: ue,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, L1)) : x("", !0),
            m("link") ? (o(), i("svg", {
              key: 2,
              class: b(Je),
              onClick: z,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, M1)) : x("", !0),
            m("blockquote") ? (o(), i("svg", {
              key: 3,
              class: b(Je),
              onClick: Q,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, F1)) : x("", !0),
            m("image") ? (o(), i("svg", {
              key: 4,
              class: b(Je),
              onClick: se,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, P1)) : x("", !0),
            m("code") ? (o(), i("svg", {
              key: 5,
              class: b(Je),
              onClick: R,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, B1)) : x("", !0),
            m("heading") ? (o(), i("svg", {
              key: 6,
              class: b(Je),
              onClick: U,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, H1)) : x("", !0),
            m("orderedList") ? (o(), i("svg", {
              key: 7,
              class: b(Je),
              icon: "",
              onClick: Z,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, U1)) : x("", !0),
            m("unorderedList") ? (o(), i("svg", {
              key: 8,
              class: b(Je),
              onClick: J,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, K1)) : x("", !0),
            m("strikethrough") ? (o(), i("svg", {
              key: 9,
              class: b(Je),
              onClick: V,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, G1)) : x("", !0),
            m("undo") ? (o(), i("svg", {
              key: 10,
              class: b(Je),
              onClick: y,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Y1)) : x("", !0),
            m("redo") ? (o(), i("svg", {
              key: 11,
              class: b(Je),
              onClick: N,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, sm)) : x("", !0),
            K(h.$slots, "toolbarbuttons", {
              instance: (W = Be()) == null ? void 0 : W.exposed
            })
          ]),
          m("help") && h.helpUrl ? (o(), i("div", lm, [
            l("a", {
              title: "formatting help",
              target: "_blank",
              href: h.helpUrl,
              tabindex: "-1"
            }, [
              (o(), i("svg", {
                class: b(Je),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }, am))
            ], 8, nm)
          ])) : x("", !0)
        ])),
        l("div", rm, [
          l("textarea", {
            ref_key: "txt",
            ref: g,
            name: h.id,
            id: h.id,
            class: b(k.value),
            label: h.label,
            value: h.modelValue,
            rows: h.rows || 6,
            disabled: h.disabled,
            onInput: C[0] || (C[0] = (X) => {
              var le;
              return w(((le = X.target) == null ? void 0 : le.value) || "");
            }),
            onKeydown: nn(E, ["tab"])
          }, null, 42, im)
        ]),
        c.value ? (o(), i("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${h.id}-error`
        }, P(c.value), 9, um)) : h.help ? (o(), i("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${h.id}-description`
        }, P(h.help), 9, dm)) : x("", !0),
        K(h.$slots, "footer", Ae({
          inputElement: g.value,
          id: h.id,
          modelValue: h.modelValue,
          status: h.status
        }, h.$attrs))
      ]);
    };
  }
}), fm = {
  key: 0,
  class: "relative z-10 lg:hidden",
  role: "dialog",
  "aria-modal": "true"
}, vm = { class: "fixed inset-0 flex" }, pm = /* @__PURE__ */ l("span", { class: "sr-only" }, "Close sidebar", -1), mm = /* @__PURE__ */ l("svg", {
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
], -1), hm = [
  pm,
  mm
], gm = { class: "flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-black px-6 pb-2" }, ym = { class: "hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col" }, bm = { class: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-6" }, wm = {
  class: /* @__PURE__ */ b(["sticky top-0 flex items-center gap-x-6 bg-white dark:bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden"])
}, km = /* @__PURE__ */ l("span", { class: "sr-only" }, "Open sidebar", -1), _m = /* @__PURE__ */ l("svg", {
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
], -1), $m = [
  km,
  _m
], Cm = /* @__PURE__ */ ce({
  __name: "SidebarLayout",
  setup(e, { expose: t }) {
    const { transition: s } = gn(), n = I(!0), a = I(""), r = {
      entering: { cls: "transition-opacity ease-linear duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "transition-opacity ease-linear duration-300", from: "opacity-100", to: "opacity-0" }
    }, d = I(""), u = {
      entering: { cls: "transition ease-in-out duration-300 transform", from: "-translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transition ease-in-out duration-300 transform", from: "translate-x-0", to: "-translate-x-full" }
    }, c = I(""), f = {
      entering: { cls: "ease-in-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in-out duration-300", from: "opacity-100", to: "opacity-0" }
    };
    function p(k) {
      s(r, a, k), s(u, d, k), s(f, c, k), setTimeout(() => n.value = k, 300);
    }
    function $() {
      p(!0);
    }
    function m() {
      p(!1);
    }
    return t({ show: $, hide: m, toggle: p }), (k, g) => (o(), i("div", null, [
      n.value ? (o(), i("div", fm, [
        l("div", {
          class: b(["fixed inset-0 bg-gray-900/80", a.value])
        }, null, 2),
        l("div", vm, [
          l("div", {
            class: b(["relative mr-16 flex w-full max-w-xs flex-1", d.value])
          }, [
            l("div", {
              class: b(["absolute left-full top-0 flex w-16 justify-center pt-5", c.value])
            }, [
              l("button", {
                type: "button",
                onClick: m,
                class: "-m-2.5 p-2.5"
              }, hm)
            ], 2),
            l("div", gm, [
              K(k.$slots, "default")
            ])
          ], 2)
        ])
      ])) : x("", !0),
      l("div", ym, [
        l("div", bm, [
          K(k.$slots, "default")
        ])
      ]),
      l("div", wm, [
        l("button", {
          type: "button",
          onClick: $,
          class: "-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"
        }, $m),
        K(k.$slots, "mobiletitlebar")
      ])
    ]));
  }
}), xm = {
  Alert: Jo,
  AlertSuccess: ua,
  ErrorSummary: pa,
  InputDescription: ha,
  Icon: Xn,
  Loading: dr,
  OutlineButton: vr,
  PrimaryButton: hr,
  SecondaryButton: br,
  TextLink: kr,
  Breadcrumbs: Vr,
  Breadcrumb: Fr,
  NavList: Pr,
  NavListItem: Qr,
  AutoQueryGrid: md,
  SettingsIcons: Md,
  FilterViews: Il,
  FilterColumn: Fl,
  QueryPrefs: Dl,
  EnsureAccess: to,
  EnsureAccessDialog: Ad,
  TextInput: Ed,
  TextareaInput: Kd,
  SelectInput: Yd,
  CheckboxInput: rc,
  TagInput: Mc,
  FileInput: Xc,
  Autocomplete: p0,
  Combobox: g0,
  DynamicInput: y0,
  LookupInput: D0,
  AutoFormFields: P0,
  AutoForm: nf,
  AutoCreateForm: Lf,
  AutoEditForm: Kf,
  ConfirmDelete: Wf,
  FormLoading: tv,
  DataGrid: av,
  CellFormat: rv,
  PreviewFormat: vv,
  HtmlFormat: yv,
  CloseButton: $v,
  SlideOver: Bv,
  ModalDialog: qv,
  ModalLookup: Bp,
  Tabs: Kp,
  DarkModeToggle: Xp,
  SignIn: g1,
  MarkdownInput: cm,
  SidebarLayout: Cm
}, Qs = xm, Fm = {
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
    return e ? t ? Y.components[e] = t : Y.components[e] || Qs[e] || null : null;
  }
};
export {
  Tm as css,
  Fm as default,
  Tl as useAuth,
  js as useClient,
  At as useConfig,
  Mm as useFiles,
  Am as useFormatters,
  rt as useMetadata,
  gn as useUtils
};
