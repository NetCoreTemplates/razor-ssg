var Fs = Object.defineProperty;
var Ps = (e, l, t) => l in e ? Fs(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
var ye = (e, l, t) => (Ps(e, typeof l != "symbol" ? l + "" : l, t), t);
import { defineComponent as Y, computed as c, openBlock as o, createElementBlock as u, normalizeClass as w, unref as s, createElementVNode as n, createCommentVNode as C, renderSlot as Z, ref as T, toDisplayString as L, inject as je, nextTick as ul, isRef as An, h as ft, resolveComponent as U, createBlock as X, withCtx as ve, mergeProps as Ce, useAttrs as Ds, createVNode as fe, createTextVNode as he, watchEffect as Sl, normalizeStyle as El, withModifiers as Oe, Fragment as be, renderList as $e, withDirectives as gt, vModelCheckbox as Hl, withKeys as js, createStaticVNode as dl, vModelSelect as Os, useSlots as zl, onMounted as lt, createSlots as Nl, normalizeProps as _t, guardReactiveProps as sl, vModelDynamic as Bs, onUnmounted as Nt, watch as At, vModelText as Rs, provide as Ut, resolveDynamicComponent as Es, resolveDirective as Hs } from "vue";
import { errorResponseExcept as zs, dateFmt as Tn, toTime as Ns, omit as nt, enc as Al, setQueryString as Us, lastRightPart as pt, leftPart as cl, map as De, toDate as bt, toDateTime as qs, toCamelCase as Qs, mapGet as ce, chop as Ks, appendQueryString as al, humanize as Ie, ApiResult as Xe, delaySet as In, queryString as Tl, combinePaths as Gs, rightPart as Ws, toPascalCase as Ye, errorResponse as dt, trimEnd as Zs, $1 as ol, lastLeftPart as Js, ResponseStatus as Ll, ResponseError as _n, HttpMethods as Ul, uniqueKeys as Il, humanify as Fn, fromXsdDuration as Pn, isDate as fl, timeFmt12 as Xs, apiValue as Ys, indexOfAny as ea, each as ta } from "@servicestack/client";
const la = { class: "flex items-center" }, na = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, sa = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, aa = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), oa = [
  aa
], ia = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ra = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), ua = [
  ra
], da = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ca = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), fa = [
  ca
], ma = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, va = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), ha = [
  va
], ga = /* @__PURE__ */ Y({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const l = e, t = c(() => l.type == "info" ? "bg-blue-50 dark:bg-blue-200" : l.type == "error" ? "bg-red-50 dark:bg-red-200" : l.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), a = c(() => l.type == "info" ? "border-blue-400" : l.type == "error" ? "border-red-400" : l.type == "success" ? "border-green-400" : "border-yellow-400"), i = c(() => l.type == "info" ? "text-blue-700" : l.type == "error" ? "text-red-700" : l.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (o(), u("div", {
      class: w([s(t), s(a), "border-l-4 p-4"])
    }, [
      n("div", la, [
        e.hideIcon ? C("", !0) : (o(), u("div", na, [
          e.type == "warn" ? (o(), u("svg", sa, oa)) : e.type == "error" ? (o(), u("svg", ia, ua)) : e.type == "info" ? (o(), u("svg", da, fa)) : e.type == "success" ? (o(), u("svg", ma, ha)) : C("", !0)
        ])),
        n("div", null, [
          n("p", {
            class: w([s(i), "text-sm"])
          }, [
            Z(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), pa = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, ya = { class: "flex" }, ba = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), wa = { class: "ml-3" }, xa = { class: "text-sm font-medium text-green-800" }, ka = { key: 0 }, $a = { class: "ml-auto pl-3" }, Ca = { class: "-mx-1.5 -my-1.5" }, _a = /* @__PURE__ */ n("span", { class: "sr-only" }, "Dismiss", -1), La = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Va = [
  _a,
  La
], Ma = /* @__PURE__ */ Y({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const l = T(!1);
    return (t, a) => l.value ? C("", !0) : (o(), u("div", pa, [
      n("div", ya, [
        ba,
        n("div", wa, [
          n("h3", xa, [
            e.message ? (o(), u("span", ka, L(e.message), 1)) : Z(t.$slots, "default", { key: 1 })
          ])
        ]),
        n("div", $a, [
          n("div", Ca, [
            n("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: a[0] || (a[0] = (i) => l.value = !0)
            }, Va)
          ])
        ])
      ])
    ]));
  }
}), Sa = { class: "flex" }, Aa = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ n("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), Ta = { class: "ml-3" }, Ia = { class: "text-sm text-red-700 dark:text-red-200" }, Fa = /* @__PURE__ */ Y({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const l = e;
    let t = je("ApiState", void 0);
    const a = c(() => l.status || t != null && t.error.value ? zs.call({ responseStatus: l.status ?? (t == null ? void 0 : t.error.value) }, l.except ?? []) : null);
    return (i, r) => s(a) ? (o(), u("div", {
      key: 0,
      class: w(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      n("div", Sa, [
        Aa,
        n("div", Ta, [
          n("p", Ia, L(s(a)), 1)
        ])
      ])
    ], 2)) : C("", !0);
  }
}), Pa = ["id", "aria-describedby"], Da = /* @__PURE__ */ Y({
  __name: "InputDescription",
  props: {
    id: null,
    description: null
  },
  setup(e) {
    return (l, t) => e.description ? (o(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      n("div", null, L(e.description), 1)
    ], 8, Pa)) : C("", !0);
  }
});
function ml(e) {
  return Tn(e).replace(/\//g, "-");
}
function Dn(e) {
  return e == null ? "" : Ns(e);
}
function jn(e, l) {
  e.value = null, ul(() => e.value = l);
}
function kt(e) {
  return Object.keys(e).forEach((l) => {
    const t = e[l];
    e[l] = An(t) ? s(t) : t;
  }), e;
}
function Lt(e, l, t) {
  t ? (l.value = e.entering.cls + " " + e.entering.from, setTimeout(() => l.value = e.entering.cls + " " + e.entering.to, 0)) : (l.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => l.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function el() {
  if (typeof document > "u")
    return;
  let e = document.activeElement, l = e && e.form;
  if (l) {
    let t = ':not([disabled]):not([tabindex="-1"])', a = l.querySelectorAll(`a:not([disabled]), button${t}, input[type=text]${t}, [tabindex]${t}`), i = Array.prototype.filter.call(
      a,
      (d) => d.offsetWidth > 0 || d.offsetHeight > 0 || d === e
    ), r = i.indexOf(e);
    r > -1 && (i[r + 1] || i[0]).focus();
  }
}
function Tt(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const l = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!l)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof l.getTypeName != "function")
    throw new Error(`${JSON.stringify(l)} is not a Request DTO`);
  const t = l.getTypeName();
  if (!t)
    throw new Error("DTO Required");
  return t;
}
function et(e, l, t) {
  t || (t = {});
  let a = t.cls || t.className || t.class;
  return a && (t = nt(t, ["cls", "class", "className"]), t.class = a), l == null ? `<${e}` + Fl(t) + "/>" : `<${e}` + Fl(t) + `>${l || ""}</${e}>`;
}
function Fl(e) {
  return Object.keys(e).reduce((l, t) => `${l} ${t}="${Al(e[t])}"`, "");
}
function vl(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Ct(e) {
  return Kl(e);
}
let ja = ["string", "number", "boolean", "null", "undefined"];
function yt(e) {
  return ja.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Rt(e) {
  return !yt(e);
}
class Oa {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(l) {
    return typeof localStorage > "u" ? null : localStorage.getItem(l);
  }
  setItem(l, t) {
    typeof localStorage > "u" || localStorage.setItem(l, t);
  }
  removeItem(l) {
    typeof localStorage > "u" || localStorage.removeItem(l);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(l) {
    return typeof localStorage > "u" ? null : localStorage.key(l);
  }
}
function il(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function ql(e) {
  if (typeof history < "u") {
    const l = Us(location.href, e);
    history.pushState({}, "", l);
  }
}
function Ql(e, l) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const a = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    l
  );
  return new Function("with(this) { return (" + e + ") }").call(a);
}
function Pl(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function Ba() {
  return {
    LocalStore: Storage,
    dateInputFormat: ml,
    timeInputFormat: Dn,
    setRef: jn,
    unRefs: kt,
    transition: Lt,
    focusNextElement: el,
    getTypeName: Tt,
    htmlTag: et,
    htmlAttrs: Fl,
    linkAttrs: vl,
    toAppUrl: Ct,
    isPrimitive: yt,
    isComplexType: Rt,
    pushState: ql,
    scopedExpr: Ql,
    copyText: Pl
  };
}
class oe {
}
ye(oe, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (l) => location.href = l,
  assetsPathResolver: (l) => l,
  fallbackPathResolver: (l) => l,
  storage: new Oa(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" }
}), ye(oe, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), ye(oe, "user", T(null)), ye(oe, "metadata", T(null));
function Ra(e) {
  oe.config = Object.assign(oe.config, e);
}
function Ea(e) {
  oe.autoQueryGridDefaults = Object.assign(oe.autoQueryGridDefaults, e);
}
function Kl(e) {
  return e && oe.config.assetsPathResolver ? oe.config.assetsPathResolver(e) : e;
}
function Ha(e) {
  return e && oe.config.fallbackPathResolver ? oe.config.fallbackPathResolver(e) : e;
}
function wt() {
  const e = c(() => oe.config), l = c(() => oe.autoQueryGridDefaults);
  return {
    config: e,
    setConfig: Ra,
    autoQueryGridDefaults: l,
    setAutoQueryGridDefaults: Ea,
    assetsPathResolver: Kl,
    fallbackPathResolver: Ha
  };
}
const On = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), Bn = {
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
}, Ln = Object.keys(Bn), at = (e, l) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${l}</svg>`, tl = {
  img: at("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: at("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: at("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: at("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: at("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: at("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: at("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: at("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: at("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, za = /[\r\n%#()<>?[\\\]^`{|}]/g, Vn = 1024, Na = ["Bytes", "KB", "MB", "GB", "TB"], Ua = (() => {
  const e = "application/", l = e + "vnd.openxmlformats-officedocument.", t = "image/", a = "text/", i = "audio/", r = "video/", d = {
    jpg: t + "jpeg",
    tif: t + "tiff",
    svg: t + "svg+xml",
    ico: t + "x-icon",
    ts: a + "typescript",
    py: a + "x-python",
    sh: a + "x-sh",
    mp3: i + "mpeg3",
    mpg: r + "mpeg",
    ogv: r + "ogg",
    xlsx: l + "spreadsheetml.sheet",
    xltx: l + "spreadsheetml.template",
    docx: l + "wordprocessingml.document",
    dotx: l + "wordprocessingml.template",
    pptx: l + "presentationml.presentation",
    potx: l + "presentationml.template",
    ppsx: l + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function v(m, p) {
    m.split(",").forEach((h) => d[h] = p);
  }
  function f(m, p) {
    m.split(",").forEach((h) => d[h] = p(h));
  }
  return f("jpeg,gif,png,tiff,bmp,webp", (m) => t + m), f("jsx,csv,css", (m) => a + m), f("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (m) => i + m), f("3gpp,avi,dv,divx,ogg,mp4,webm", (m) => r + m), f("rtf,pdf", (m) => e + m), v("htm,html,shtm", a + "html"), v("js,mjs,cjs", a + "javascript"), v("yml,yaml", e + "yaml"), v("bat,cmd", e + "bat"), v("xml,csproj,fsproj,vbproj", a + "xml"), v("txt,ps1", a + "plain"), v("qt,mov", r + "quicktime"), v("doc,dot", e + "msword"), v("xls,xlt,xla", e + "excel"), v("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), v("cer,crt,der", e + "x-x509-ca-cert"), v("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), v("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Dl = [];
function Rn(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(za, encodeURIComponent);
}
function Gl(e) {
  return "data:image/svg+xml;utf8," + Rn(e);
}
function En(e) {
  let l = URL.createObjectURL(e);
  return Dl.push(l), l;
}
function Hn() {
  Dl.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (l) {
      console.error("URL.revokeObjectURL", l);
    }
  }), Dl = [];
}
function Wl(e) {
  if (!e)
    return null;
  let l = cl(e, "?");
  return pt(l, "/");
}
function qt(e) {
  let l = Wl(e);
  return l == null || l.indexOf(".") === -1 ? null : pt(l, ".").toLowerCase();
}
function Zl(e) {
  let l = qt(e.name);
  return l && On.indexOf(l) >= 0 ? En(e) : mt(e.name);
}
function Jl(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let l = qt(e);
  return l && On.indexOf(l) >= 0 || !1;
}
function mt(e) {
  if (!e)
    return null;
  let l = qt(e);
  return l == null || Jl(e) ? e : Bt(l) || Gl(tl.doc);
}
function Bt(e) {
  let l = zn(e);
  return l && Gl(l) || null;
}
function zn(e) {
  if (tl[e])
    return tl[e];
  for (let l = 0; l < Ln.length; l++) {
    let t = Ln[l];
    if (Bn[t].indexOf(e) >= 0)
      return tl[t];
  }
  return null;
}
function Xl(e, l = 2) {
  if (e === 0)
    return "0 Bytes";
  const t = l < 0 ? 0 : l, a = Math.floor(Math.log(e) / Math.log(Vn));
  return parseFloat((e / Math.pow(Vn, a)).toFixed(t)) + " " + Na[a];
}
function qa(e) {
  return e.files && Array.from(e.files).map((l) => ({ fileName: l.name, contentLength: l.size, filePath: Zl(l) }));
}
function hl(e, l) {
  e.onerror = null, e.src = Yl(e.src, l) || "";
}
function Yl(e, l) {
  return Bt(pt(e, ".").toLowerCase()) || (l ? Bt(l) || l : null) || Bt("doc");
}
function jl(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const l = pt(e, ".").toLowerCase();
  return Ua[l] || "application/" + l;
}
function Am() {
  return {
    extSvg: zn,
    extSrc: Bt,
    getExt: qt,
    encodeSvg: Rn,
    canPreview: Jl,
    getFileName: Wl,
    getMimeType: jl,
    formatBytes: Xl,
    filePathUri: mt,
    svgToDataUri: Gl,
    fileImageUri: Zl,
    objectUrl: En,
    flush: Hn,
    inputFiles: qa,
    iconOnError: hl,
    iconFallbackSrc: Yl
  };
}
class Qa {
  constructor(l) {
    ye(this, "view");
    ye(this, "includeTypes");
    Object.assign(this, l);
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
const Vt = "/metadata/app.json", Ka = {
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
}, Ga = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, Ol = {
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
[...Object.keys(Ol), ...Object.values(Ol)];
const Wa = {
  String: "string",
  Boolean: "bool",
  ...Ol
};
function Xt(e) {
  return Wa[e] || e;
}
function Nn(e, l) {
  return e ? (l || (l = []), e === "Nullable`1" ? Xt(l[0]) + "?" : e.endsWith("[]") ? `List<${Xt(e.substring(0, e.length - 2))}>` : l.length === 0 ? Xt(e) : cl(Xt(e), "`") + "<" + l.join(",") + ">") : "";
}
function Za(e) {
  return e && Nn(e.name, e.genericArgs);
}
class Mt {
  constructor() {
    ye(this, "Query");
    ye(this, "QueryInto");
    ye(this, "Create");
    ye(this, "Update");
    ye(this, "Patch");
    ye(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((t) => !!t).map((t) => t);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(l) {
    Te.isQueryInto(l) && !this.QueryInto ? this.QueryInto = l : Te.isQuery(l) && !this.Query ? this.Query = l : Te.isCreate(l) && !this.Create ? this.Create = l : Te.isUpdate(l) && !this.Update ? this.Update = l : Te.isPatch(l) && !this.Patch ? this.Patch = l : Te.isDelete(l) && !this.Delete && (this.Delete = l);
  }
  static from(l) {
    const t = new Mt();
    return l.forEach((a) => {
      t.add(a);
    }), t;
  }
  static forType(l, t) {
    var i;
    let a = new Mt();
    return l && (t ?? (t = (i = oe.metadata.value) == null ? void 0 : i.api), t == null || t.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == l && a.add(r);
    })), a;
  }
}
const Te = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => De(e.request.inherits, (l) => Te.AnyRead.indexOf(l.name) >= 0),
  isQuery: (e) => De(e.request.inherits, (l) => l.name === "QueryDb`1"),
  isQueryInto: (e) => De(e.request.inherits, (l) => l.name === "QueryDb`2"),
  isCrud: (e) => {
    var l;
    return (l = e.request.implements) == null ? void 0 : l.some((t) => Te.AnyWrite.indexOf(t.name) >= 0);
  },
  isCreate: (e) => Yt(e, Te.Create),
  isUpdate: (e) => Yt(e, Te.Update),
  isPatch: (e) => Yt(e, Te.Patch),
  isDelete: (e) => Yt(e, Te.Delete),
  model: (e) => {
    var l, t, a;
    return e ? De(e.inherits, (i) => Te.AnyRead.indexOf(i.name) >= 0) ? (l = e.inherits) == null ? void 0 : l.genericArgs[0] : (a = (t = e.implements) == null ? void 0 : t.find((i) => Te.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : a.genericArgs[0] : null;
  }
};
function Ja(e) {
  var l;
  return ((l = e.input) == null ? void 0 : l.type) || gl(en(e));
}
function Un(e) {
  return e.endsWith("?") ? Ks(e, 1) : e;
}
function gl(e) {
  return Ka[Un(e)];
}
function Xa(e) {
  return e && Ga[e] || "String";
}
function en(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Bl(e) {
  return e && gl(e) == "number" || !1;
}
function qn(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function Ya(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function Qn(e) {
  if (!(e != null && e.type))
    return !1;
  const l = en(e);
  return e.isValueType && l.indexOf("`") == -1 || e.isEnum ? !1 : gl(e.type) == null;
}
function Kn(e) {
  var t, a, i;
  if (!(e != null && e.type))
    return !1;
  const l = en(e);
  return e.isValueType && l.indexOf("`") == -1 || e.isEnum || ((t = e.input) == null ? void 0 : t.type) == "file" || ((a = e.input) == null ? void 0 : a.type) == "tag" || ((i = e.input) == null ? void 0 : i.type) == "combobox" ? !0 : gl(e.type) != null;
}
function Et(e, l) {
  let t = typeof e == "string" ? pl(e) : e;
  t || (console.warn(`Metadata not found for: ${e}`), t = { request: { name: e } });
  let a = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return t.returnsVoid ? void 0 : new a();
    }, r.prototype.getTypeName = function() {
      return t.request.name;
    }, r.prototype.getMethod = function() {
      return t.method || "POST";
    }, r;
  }();
  return new i(l);
}
function eo(e, l, t = {}) {
  let a = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return typeof t.createResponse == "function" ? t.createResponse() : new a();
    }, r.prototype.getTypeName = function() {
      return e;
    }, r.prototype.getMethod = function() {
      return t.method || "POST";
    }, r;
  }();
  return new i(l);
}
function ll(e, l) {
  return e ? (Object.keys(e).forEach((t) => {
    let a = e[t];
    typeof a == "string" && a.startsWith("/Date") && (e[t] = ml(bt(a)));
  }), e) : {};
}
function to(e, l) {
  let t = {};
  return Array.from(e.elements).forEach((a) => {
    var p;
    let i = a;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = l && l.find((h) => h.name.toLowerCase() == r);
    let v = d == null ? void 0 : d.type, f = (p = d == null ? void 0 : d.genericArgs) == null ? void 0 : p[0], m = i.type === "checkbox" ? i.checked : i.value;
    Bl(v) ? m = Number(m) : v === "List`1" && typeof m == "string" && (m = m.split(",").map((h) => Bl(f) ? Number(h) : h)), t[i.id] = m;
  }), t;
}
function tn(e) {
  var l;
  return ((l = e == null ? void 0 : e.api) == null ? void 0 : l.operations) && e.api.operations.length > 0;
}
function lo(e) {
  if (e != null && e.assert && !oe.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return oe.metadata.value;
}
function Ht(e) {
  return e && tn(e) ? (e.date = qs(new Date()), oe.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Vt, JSON.stringify(e)), !0) : !1;
}
function no() {
  oe.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Vt);
}
function Gn() {
  if (oe.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (tn(e))
    Ht(e);
  else {
    const l = typeof localStorage < "u" ? localStorage.getItem(Vt) : null;
    if (l)
      try {
        Ht(JSON.parse(l));
      } catch {
        console.error(`Could not JSON.parse ${Vt} from localStorage`);
      }
  }
  return oe.metadata.value != null;
}
async function Mn(e, l) {
  let t = l ? await l() : await fetch(e);
  if (t.ok) {
    let a = await t.text();
    Ht(JSON.parse(a));
  } else
    console.error(`Could not download ${l ? "AppMetadata" : e}: ${t.statusText}`);
  tn(oe.metadata.value) || console.warn("AppMetadata is not available");
}
async function so(e) {
  var r;
  const { olderThan: l, resolvePath: t, resolve: a } = e || {};
  let i = Gn() && l !== 0;
  if (i && l) {
    let d = bt((r = oe.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > l) && (i = !1);
  }
  if (!i) {
    if ((t || a) && await Mn(t || Vt, a), oe.metadata.value != null)
      return;
    const d = je("client");
    if (d != null) {
      const v = await d.api(new Qa());
      v.succeeded && Ht(v.response);
    }
    if (oe.metadata.value != null)
      return;
    await Mn(Vt);
  }
  return oe.metadata.value;
}
function it(e, l) {
  var d;
  let t = (d = oe.metadata.value) == null ? void 0 : d.api;
  if (!t || !e)
    return null;
  let a = t.types.find((v) => v.name.toLowerCase() === e.toLowerCase() && (!l || v.namespace == l));
  if (a)
    return a;
  let i = pl(e);
  if (i)
    return i.request;
  let r = t.operations.find((v) => v.response && v.response.name.toLowerCase() === e.toLowerCase() && (!l || v.response.namespace == l));
  return r ? r.response : null;
}
function pl(e) {
  var a;
  let l = (a = oe.metadata.value) == null ? void 0 : a.api;
  return l ? l.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function ao({ dataModel: e }) {
  var a;
  const l = (a = oe.metadata.value) == null ? void 0 : a.api;
  if (!l)
    return [];
  let t = l.operations;
  if (e) {
    const i = typeof e == "string" ? it(e) : e;
    t = t.filter((r) => Wn(r.dataModel, i));
  }
  return t;
}
function ln(e) {
  return e ? it(e.name, e.namespace) : null;
}
function Wn(e, l) {
  return e && l && e.name === l.name && (!e.namespace || !l.namespace || e.namespace === l.namespace);
}
function oo(e, l) {
  let t = it(e);
  return t && t.properties && t.properties.find((i) => i.name.toLowerCase() === l.toLowerCase());
}
function Zn(e) {
  return Jn(it(e));
}
function Jn(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let l = {};
    for (let t = 0; t < e.enumNames.length; t++) {
      const a = (e.enumDescriptions ? e.enumDescriptions[t] : null) || e.enumNames[t], i = (e.enumValues != null ? e.enumValues[t] : null) || e.enumNames[t];
      l[i] = a;
    }
    return l;
  }
  return null;
}
function Xn(e) {
  if (!e)
    return null;
  let l = {}, t = e.input && e.input.allowableEntries;
  if (t) {
    for (let i = 0; i < t.length; i++) {
      let r = t[i];
      l[r.key] = r.value;
    }
    return l;
  }
  let a = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (a) {
    for (let i = 0; i < a.length; i++) {
      let r = a[i];
      l[r] = r;
    }
    return l;
  }
  if (e.isEnum) {
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = it(i);
    if (r)
      return Jn(r);
  }
  return null;
}
function nn(e) {
  if (!e)
    return;
  const l = [];
  return Object.keys(e).forEach((t) => l.push({ key: t, value: e[t] })), l;
}
function io(e, l) {
  const a = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, l))(e.name, (l == null ? void 0 : l.type) || Ja(e) || "text");
  return e.isEnum && (a.type = "select", a.allowableEntries = nn(Xn(e))), a;
}
function ro(e) {
  let l = [];
  if (e) {
    const t = Ke(e), a = pl(e.name), i = ln(a == null ? void 0 : a.dataModel);
    t.forEach((r) => {
      var v, f, m;
      if (!Kn(r))
        return;
      const d = io(r, r.input);
      if (d.id = Qs(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const p = (f = (v = oe.metadata.value) == null ? void 0 : v.plugins.filesUpload) == null ? void 0 : f.locations.find((h) => h.name == r.uploadTo);
        p && !d.accept && p.allowExtensions && (d.accept = p.allowExtensions.map((h) => h.startsWith(".") ? h : `.${h}`).join(","));
      }
      if (i) {
        const p = (m = i.properties) == null ? void 0 : m.find((h) => h.name == r.name);
        r.ref || (r.ref = p == null ? void 0 : p.ref);
      }
      if (d.options)
        try {
          const p = {
            $typeFields: t.map((g) => g.name),
            $dataModelFields: i ? Ke(i).map((g) => g.name) : []
          }, h = Ql(d.options, p);
          Object.keys(h).forEach((g) => {
            d[g] = h[g];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      l.push(d);
    });
  }
  return l;
}
function Ke(e) {
  if (!e)
    return [];
  let l = [], t = {};
  function a(i) {
    i.forEach((r) => {
      t[r.name] || (t[r.name] = 1, l.push(r));
    });
  }
  for (; e; )
    e.properties && a(e.properties), e = e.inherits ? ln(e.inherits) : null;
  return l.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function Yt(e, l) {
  var t;
  return ((t = e.request.implements) == null ? void 0 : t.some((a) => a.name === l)) || !1;
}
function Qt(e) {
  return e ? Yn(e, Ke(e)) : null;
}
function Yn(e, l) {
  let t = l.find((r) => r.name.toLowerCase() === "id");
  if (t && t.isPrimaryKey)
    return t;
  let i = l.find((r) => r.isPrimaryKey) || t;
  if (!i) {
    let r = Te.model(e);
    if (r)
      return De(it(r), (d) => Qt(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function uo(e, l) {
  return De(Qt(e), (t) => ce(l, t.name));
}
function es(e, l, t) {
  return e && e.valueType === "none" ? "" : t.key === "%In" || t.key === "%Between" ? `(${t.value})` : co(l, t.value);
}
function co(e, l) {
  return e ? (e = Un(e), Bl(e) || e === "Boolean" ? l : Ya(e) ? `[${l}]` : `'${l}'`) : l;
}
function Ze() {
  const e = c(() => {
    var a;
    return ((a = oe.metadata.value) == null ? void 0 : a.app) || null;
  }), l = c(() => {
    var a;
    return ((a = oe.metadata.value) == null ? void 0 : a.api) || null;
  }), t = c(() => {
    var a;
    return ((a = oe.metadata.value) == null ? void 0 : a.plugins.autoQuery.viewerConventions) || [];
  });
  return Gn(), {
    loadMetadata: so,
    getMetadata: lo,
    setMetadata: Ht,
    clearMetadata: no,
    metadataApp: e,
    metadataApi: l,
    filterDefinitions: t,
    typeOf: it,
    typeOfRef: ln,
    typeEquals: Wn,
    apiOf: pl,
    findApis: ao,
    typeName: Za,
    typeName2: Nn,
    property: oo,
    enumOptions: Zn,
    propertyOptions: Xn,
    createFormLayout: ro,
    typeProperties: Ke,
    supportsProp: Kn,
    Crud: Te,
    Apis: Mt,
    getPrimaryKey: Qt,
    getPrimaryKeyByProps: Yn,
    getId: uo,
    createDto: Et,
    makeDto: eo,
    toFormValues: ll,
    formValues: to,
    isComplexProp: Qn,
    asKvps: nn
  };
}
const We = class {
  static async getOrFetchValue(l, t, a, i, r, d, v) {
    const f = We.getValue(a, v, r);
    return f ?? (await We.fetchLookupIds(l, t, a, i, r, d, [v]), We.getValue(a, v, r));
  }
  static getValue(l, t, a) {
    const i = We.Lookup[l];
    if (i) {
      const r = i[t];
      if (r)
        return a = a.toLowerCase(), r[a];
    }
  }
  static setValue(l, t, a, i) {
    const r = We.Lookup[l] ?? (We.Lookup[l] = {}), d = r[t] ?? (r[t] = {});
    a = a.toLowerCase(), d[a] = i;
  }
  static setRefValue(l, t) {
    const a = ce(t, l.refId);
    if (a == null || l.refLabel == null)
      return null;
    const i = ce(t, l.refLabel);
    return We.setValue(l.model, a, l.refLabel, i), i;
  }
  static async fetchLookupIds(l, t, a, i, r, d, v) {
    const f = t.operations.find((m) => {
      var p;
      return Te.isAnyQuery(m) && ((p = m.dataModel) == null ? void 0 : p.name) == a;
    });
    if (f) {
      const m = We.Lookup[a] ?? (We.Lookup[a] = {}), p = [];
      Object.keys(m).forEach((P) => {
        const j = m[P];
        ce(j, r) && p.push(P);
      });
      const h = v.filter((P) => !p.includes(P));
      if (h.length == 0)
        return;
      const g = d ? null : `${i},${r}`, b = {
        [i + "In"]: h.join(",")
      };
      g && (b.fields = g);
      const k = Et(f, b), M = await l.api(k, { jsconfig: "edv,eccn" });
      if (M.succeeded)
        (ce(M.response, "results") || []).forEach((j) => {
          if (!ce(j, i)) {
            console.error(`result[${i}] == null`, j);
            return;
          }
          const z = `${ce(j, i)}`, q = ce(j, r);
          r = r.toLowerCase();
          const Q = m[z] ?? (m[z] = {});
          Q[r] = `${q}`;
        });
      else {
        console.error(`Failed to call ${f.request.name}`);
        return;
      }
    }
  }
};
let vt = We;
ye(vt, "Lookup", {});
const ts = Y({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: l }) {
    return () => {
      let t = e.image;
      if (e.type) {
        const { typeOf: r } = Ze(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? t = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let a = e.svg || (t == null ? void 0 : t.svg) || "";
      if (a.startsWith("<svg ")) {
        let d = cl(a, ">").indexOf("class="), v = `${(t == null ? void 0 : t.cls) || ""} ${l.class || ""}`;
        if (d == -1)
          a = `<svg class="${v}" ${a.substring(4)}`;
        else {
          const f = d + 6 + 1;
          a = `${a.substring(0, f) + v} ${a.substring(f)}`;
        }
        return ft("span", { innerHTML: a });
      } else
        return ft("img", {
          class: [t == null ? void 0 : t.cls, l.class],
          src: Kl(e.src || (t == null ? void 0 : t.uri)),
          onError: (r) => hl(r.target)
        });
    };
  }
}), fo = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, mo = { class: "flex" }, vo = /* @__PURE__ */ n("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), ho = /* @__PURE__ */ n("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), go = [
  vo,
  ho
], po = /* @__PURE__ */ Y({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (l, t) => (o(), u("div", fo, [
      n("div", mo, [
        (o(), u("svg", {
          class: w(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, go, 2)),
        n("span", null, [
          Z(l.$slots, "default")
        ])
      ])
    ]));
  }
}), yo = ["href", "onClick"], bo = ["type"], wo = /* @__PURE__ */ Y({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const l = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (t, a) => {
      const i = U("router-link");
      return e.href ? (o(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: r }) => [
          n("button", {
            class: w(l),
            href: e.href,
            onClick: r
          }, [
            Z(t.$slots, "default")
          ], 8, yo)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type,
        class: l
      }, t.$attrs), [
        Z(t.$slots, "default")
      ], 16, bo));
    };
  }
}), xo = ["href", "onClick"], ko = ["type"], $o = /* @__PURE__ */ Y({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: null,
    color: { default: "indigo" }
  },
  setup(e) {
    const l = e, t = {
      blue: "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, a = c(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (t[l.color] || t.indigo));
    return (i, r) => {
      const d = U("router-link");
      return e.href ? (o(), X(d, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: v }) => [
          n("button", {
            class: w(s(a)),
            href: e.href,
            onClick: v
          }, [
            Z(i.$slots, "default")
          ], 10, xo)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type,
        class: s(a)
      }, i.$attrs), [
        Z(i.$slots, "default")
      ], 16, ko));
    };
  }
}), Co = ["type", "href", "onClick"], _o = ["type"], Lo = /* @__PURE__ */ Y({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const l = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (t, a) => {
      const i = U("router-link");
      return e.href ? (o(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: r }) => [
          n("button", {
            type: e.type ?? "button",
            class: w(l),
            href: e.href,
            onClick: r
          }, [
            Z(t.$slots, "default")
          ], 8, Co)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type ?? "button",
        class: l
      }, t.$attrs), [
        Z(t.$slots, "default")
      ], 16, _o));
    };
  }
});
function He(e, l) {
  return Array.isArray(e) ? e.indexOf(l) >= 0 : e == l || e.includes(l);
}
const rl = {
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
}, ht = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, Ot = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, ls = {
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ue = {
  panelClass(e = "slideOver") {
    return e == "card" ? ht.panelClass : Ot.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? ht.formClass : Ot.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? ht.headingClass : Ot.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? ht.subHeadingClass : Ot.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, ae = {
  getGridClass(e = "stripedRows") {
    return ae.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return He(e, "fullWidth") ? "overflow-x-auto" : ae.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return He(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : ae.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return He(e, "whiteBackground") ? "" : He(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : ae.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return He(e, "fullWidth") || He(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : ae.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return He(e, "whiteBackground") ? "" : ae.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return ae.theadRowClass + (He(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return ae.theadCellClass + (He(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (He(e, "whiteBackground") || He(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : ae.tableClass) + (He(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", l, t, a) {
    return (a ? "cursor-pointer " : "") + (t ? "bg-indigo-100 dark:bg-blue-800" : (a ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (He(e, "stripedRows") ? l % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (He(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
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
}, Tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: rl,
  card: ht,
  form: Ue,
  grid: ae,
  input: ot,
  modal: ls,
  slideOver: Ot
}, Symbol.toStringTag, { value: "Module" })), Vo = /* @__PURE__ */ Y({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const l = e, t = Ds(), a = c(() => (rl[l.color] || rl.blue) + (t.href ? "" : " cursor-pointer"));
    return (i, r) => (o(), u("a", {
      class: w(s(a))
    }, [
      Z(i.$slots, "default")
    ], 2));
  }
}), Mo = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, So = {
  role: "list",
  class: "flex items-center space-x-4"
}, Ao = ["href", "title"], To = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), Io = { class: "sr-only" }, Fo = /* @__PURE__ */ Y({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (l, t) => (o(), u("nav", Mo, [
      n("ol", So, [
        n("li", null, [
          n("div", null, [
            n("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              To,
              n("span", Io, L(e.homeLabel), 1)
            ], 8, Ao)
          ])
        ]),
        Z(l.$slots, "default")
      ])
    ]));
  }
}), Po = { class: "flex items-center" }, Do = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), jo = ["href", "title"], Oo = ["title"], Bo = /* @__PURE__ */ Y({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (l, t) => (o(), u("li", null, [
      n("div", Po, [
        Do,
        e.href ? (o(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          Z(l.$slots, "default")
        ], 8, jo)) : (o(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          Z(l.$slots, "default")
        ], 8, Oo))
      ])
    ]));
  }
}), Ro = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, Eo = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, Ho = /* @__PURE__ */ Y({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (l, t) => (o(), u("div", null, [
      e.title ? (o(), u("h2", Ro, L(e.title), 1)) : C("", !0),
      n("ul", Eo, [
        Z(l.$slots, "default")
      ])
    ]));
  }
}), zo = { class: "relative flex items-start space-x-4 py-6" }, No = { class: "flex-shrink-0" }, Uo = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, qo = { class: "min-w-0 flex-1" }, Qo = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, Ko = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, Go = ["href"], Wo = /* @__PURE__ */ n("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Zo = { class: "text-base text-gray-500" }, Jo = /* @__PURE__ */ n("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Xo = /* @__PURE__ */ Y({
  __name: "NavListItem",
  props: {
    title: null,
    href: null,
    icon: null,
    iconSvg: null,
    iconSrc: null,
    iconAlt: null
  },
  setup(e) {
    return (l, t) => {
      const a = U("Icon");
      return o(), u("li", zo, [
        n("div", No, [
          n("span", Uo, [
            fe(a, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        n("div", qo, [
          n("h3", Qo, [
            n("span", Ko, [
              n("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                Wo,
                he(" " + L(e.title), 1)
              ], 8, Go)
            ])
          ]),
          n("p", Zo, [
            Z(l.$slots, "default")
          ])
        ]),
        Jo
      ]);
    };
  }
});
function Yo(e) {
  oe.user.value = e;
}
function ei() {
  oe.user.value = null;
}
function ns(e) {
  var l;
  return (((l = oe.user.value) == null ? void 0 : l.roles) || []).indexOf(e) >= 0;
}
function ti(e) {
  var l;
  return (((l = oe.user.value) == null ? void 0 : l.permissions) || []).indexOf(e) >= 0;
}
function sn() {
  return ns("Admin");
}
function nl(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const l = oe.user.value;
  if (!l)
    return !1;
  if (sn())
    return !0;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, v] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((f) => t.indexOf(f) >= 0) || d.length > 0 && !d.some((f) => t.indexOf(f) >= 0) || !r.every((f) => a.indexOf(f) >= 0) || v.length > 0 && !v.every((f) => a.indexOf(f) >= 0));
}
function li(e) {
  if (!e || !e.requiresAuth)
    return null;
  const l = oe.user.value;
  if (!l)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (sn())
    return null;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, v] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], f = i.filter((p) => t.indexOf(p) < 0);
  if (f.length > 0)
    return `Requires ${f.map((p) => "<b>" + p + "</b>").join(", ")} Role` + (f.length > 1 ? "s" : "");
  let m = r.filter((p) => a.indexOf(p) < 0);
  return m.length > 0 ? `Requires ${m.map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : d.length > 0 && !d.some((p) => t.indexOf(p) >= 0) ? `Requires any ${d.filter((p) => t.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Role` + (f.length > 1 ? "s" : "") : v.length > 0 && !v.every((p) => a.indexOf(p) >= 0) ? `Requires any ${v.filter((p) => a.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : null;
}
function an() {
  const e = c(() => oe.user.value || null), l = c(() => oe.user.value != null);
  return { signIn: Yo, signOut: ei, user: e, isAuthenticated: l, hasRole: ns, hasPermission: ti, isAdmin: sn, canAccess: nl, invalidAccessMessage: li };
}
const ni = { key: 0 }, si = { class: "md:p-4" }, ss = /* @__PURE__ */ Y({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: l } = an(), { config: t } = wt(), a = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = al(t.value.redirectSignIn, { redirect: r });
      t.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = al(t.value.redirectSignOut, { ReturnUrl: r });
      t.value.navigate(d);
    };
    return (r, d) => {
      const v = U("Alert"), f = U("SecondaryButton");
      return e.invalidAccess ? (o(), u("div", ni, [
        fe(v, {
          class: w(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        n("div", si, [
          s(l) ? (o(), X(f, {
            key: 1,
            onClick: i
          }, {
            default: ve(() => [
              he("Sign Out")
            ]),
            _: 1
          })) : (o(), X(f, {
            key: 0,
            onClick: a
          }, {
            default: ve(() => [
              he("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : C("", !0);
    };
  }
}), ai = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, oi = { class: "p-4" }, ii = /* @__PURE__ */ n("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), ri = { class: "flex w-full justify-center" }, ui = /* @__PURE__ */ n("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ n("g", { fill: "currentColor" }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ n("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), di = /* @__PURE__ */ n("span", null, "ASC", -1), ci = [
  ui,
  di
], fi = /* @__PURE__ */ dl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), mi = [
  fi
], vi = /* @__PURE__ */ n("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), hi = { key: 0 }, gi = ["id", "value"], pi = ["for"], yi = { key: 1 }, bi = { class: "mb-2" }, wi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, xi = ["onClick"], ki = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), $i = [
  ki
], Ci = { class: "flex" }, _i = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), Li = [
  _i
], Vi = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, on = /* @__PURE__ */ Y({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: l }) {
    const t = e, a = T(), i = T(""), r = T(""), d = T([]), v = c(() => t.column.meta.isEnum == !0), f = c(() => t.column.meta.isEnum == !0 ? nn(Zn(t.column.type)) : []), m = c(() => {
      var $;
      return (($ = g(t.column.type)) == null ? void 0 : $.map((O) => ({ key: O.value, value: O.name }))) || [];
    }), p = T({ filters: [] }), h = c(() => p.value.filters);
    Sl(() => p.value = Object.assign({}, t.column.settings, {
      filters: Array.from(t.column.settings.filters)
    })), Sl(() => {
      var $, O, B;
      return d.value = ((B = (O = ($ = t.column.settings.filters) == null ? void 0 : $[0]) == null ? void 0 : O.value) == null ? void 0 : B.split(",")) || [];
    });
    function g($) {
      let O = t.definitions;
      return qn($) || (O = O.filter((B) => B.types !== "string")), O;
    }
    function b($, O) {
      return g($).find((B) => B.value === O);
    }
    function k() {
      var O;
      if (!i.value)
        return;
      let $ = (O = b(t.column.type, i.value)) == null ? void 0 : O.name;
      $ && (p.value.filters.push({ key: i.value, name: $, value: r.value }), i.value = r.value = "");
    }
    function M($) {
      p.value.filters.splice($, 1);
    }
    function P($) {
      return es(b(t.column.type, $.key), t.column.type, $);
    }
    function j() {
      l("done");
    }
    function z() {
      var $;
      i.value = "%", ($ = a.value) == null || $.focus();
    }
    function q() {
      if (r.value && k(), v.value) {
        let $ = Object.values(d.value).filter((O) => O);
        p.value.filters = $.length > 0 ? [{ key: "%In", name: "In", value: $.join(",") }] : [];
      }
      l("save", p.value), l("done");
    }
    function Q($) {
      p.value.sort = $ === p.value.sort ? void 0 : $, ul(q);
    }
    return ($, O) => {
      var K;
      const B = U("SelectInput"), D = U("TextInput"), I = U("PrimaryButton"), E = U("SecondaryButton");
      return o(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: j,
        onVnodeMounted: z
      }, [
        n("div", {
          class: "absolute",
          style: El(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: O[5] || (O[5] = Oe(() => {
          }, ["stop"]))
        }, [
          n("div", ai, [
            n("div", oi, [
              ii,
              n("div", ri, [
                n("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: O[0] || (O[0] = (G) => Q("ASC")),
                  class: w(`${p.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, ci, 2),
                n("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: O[1] || (O[1] = (G) => Q("DESC")),
                  class: w(`${p.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, mi, 2)
              ]),
              vi,
              s(v) ? (o(), u("div", hi, [
                (o(!0), u(be, null, $e(s(f), (G) => (o(), u("div", {
                  key: G.key,
                  class: "flex items-center"
                }, [
                  gt(n("input", {
                    type: "checkbox",
                    id: G.key,
                    value: G.key,
                    "onUpdate:modelValue": O[2] || (O[2] = (te) => d.value = te),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, gi), [
                    [Hl, d.value]
                  ]),
                  n("label", {
                    for: G.key,
                    class: "ml-3"
                  }, L(G.value), 9, pi)
                ]))), 128))
              ])) : (o(), u("div", yi, [
                (o(!0), u(be, null, $e(s(h), (G, te) => (o(), u("div", bi, [
                  n("span", wi, [
                    he(L(e.column.name) + " " + L(G.name) + " " + L(P(G)) + " ", 1),
                    n("button", {
                      type: "button",
                      onClick: (A) => M(te),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, $i, 8, xi)
                  ])
                ]))), 256)),
                n("div", Ci, [
                  fe(B, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": O[3] || (O[3] = (G) => i.value = G),
                    entries: s(m),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((K = b(e.column.type, i.value)) == null ? void 0 : K.valueType) !== "none" ? (o(), X(D, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: a,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": O[4] || (O[4] = (G) => r.value = G),
                    onKeyup: js(k, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : C("", !0),
                  n("div", { class: "pt-1" }, [
                    n("button", {
                      type: "button",
                      onClick: k,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, Li)
                  ])
                ])
              ]))
            ]),
            n("div", Vi, [
              fe(I, {
                onClick: q,
                color: "red",
                class: "ml-2"
              }, {
                default: ve(() => [
                  he(" Save ")
                ]),
                _: 1
              }),
              fe(E, { onClick: j }, {
                default: ve(() => [
                  he(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), Mi = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, Si = { class: "flex flex-wrap" }, Ai = { class: "group pr-4 sm:pr-6 lg:pr-8" }, Ti = { class: "flex justify-between w-full font-medium" }, Ii = { class: "w-6 flex justify-end" }, Fi = { class: "hidden group-hover:inline" }, Pi = ["onClick", "title"], Di = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), ji = [
  Di
], Oi = {
  key: 0,
  class: "pt-2"
}, Bi = { class: "ml-2" }, Ri = { key: 1 }, Ei = { class: "pt-2" }, Hi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, zi = ["onClick"], Ni = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Ui = [
  Ni
], qi = /* @__PURE__ */ n("span", null, "Clear All", -1), Qi = [
  qi
], rn = /* @__PURE__ */ Y({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.columns.filter((h) => h.settings.filters.length > 0));
    function i(h) {
      var g, b;
      return (b = (g = h == null ? void 0 : h[0]) == null ? void 0 : g.value) == null ? void 0 : b.split(",");
    }
    function r(h) {
      let g = t.definitions;
      return qn(h) || (g = g.filter((b) => b.types !== "string")), g;
    }
    function d(h, g) {
      return r(h).find((b) => b.value === g);
    }
    function v(h, g) {
      return es(d(h.type, g.value), h.type, g);
    }
    function f(h) {
      h.settings.filters = [], l("change", h);
    }
    function m(h, g) {
      h.settings.filters.splice(g, 1), l("change", h);
    }
    function p() {
      t.columns.forEach((h) => {
        h.settings.filters = [], l("change", h);
      }), l("done");
    }
    return (h, g) => (o(), u("div", Mi, [
      n("div", Si, [
        (o(!0), u(be, null, $e(s(a), (b) => (o(), u("fieldset", Ai, [
          n("legend", Ti, [
            n("span", null, L(s(Ie)(b.name)), 1),
            n("span", Ii, [
              n("span", Fi, [
                n("button", {
                  onClick: (k) => f(b),
                  title: `Clear all ${s(Ie)(b.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, ji, 8, Pi)
              ])
            ])
          ]),
          b.meta.isEnum ? (o(), u("div", Oi, [
            (o(!0), u(be, null, $e(i(b.settings.filters), (k) => (o(), u("div", {
              key: k,
              class: "flex items-center"
            }, [
              n("label", Bi, L(k), 1)
            ]))), 128))
          ])) : (o(), u("div", Ri, [
            (o(!0), u(be, null, $e(b.settings.filters, (k, M) => (o(), u("div", Ei, [
              n("span", Hi, [
                he(L(b.name) + " " + L(k.name) + " " + L(v(b, k)) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (P) => m(b, M),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, Ui, 8, zi)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      n("div", { class: "flex justify-center pt-4" }, [
        n("button", {
          type: "button",
          onClick: p,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, Qi)
      ])
    ]));
  }
}), Ki = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Gi = { class: "" }, Wi = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Zi = /* @__PURE__ */ n("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Ji = { class: "mt-4" }, Xi = ["for"], Yi = ["id"], er = ["value", "selected"], tr = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, lr = ["id", "checked"], nr = ["for"], sr = { class: "mt-4" }, ar = { class: "pb-2 px-4" }, or = { class: "" }, ir = ["id", "value"], rr = ["for"], ur = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, un = /* @__PURE__ */ Y({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: l }) {
    const t = e, { autoQueryGridDefaults: a } = wt(), i = T({});
    Sl(() => i.value = Object.assign({
      take: a.value.take,
      selectedColumns: []
    }, t.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      l("done");
    }
    function v() {
      l("save", i.value);
    }
    return (f, m) => {
      const p = U("PrimaryButton"), h = U("SecondaryButton"), g = U("ModalDialog");
      return o(), X(g, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: ve(() => [
          n("div", Ki, [
            n("div", Gi, [
              n("div", Wi, [
                Zi,
                n("div", Ji, [
                  n("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Xi),
                  gt(n("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": m[0] || (m[0] = (b) => i.value.take = b),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), u(be, null, $e(r.filter((b) => t.maxLimit == null || b <= t.maxLimit), (b) => (o(), u("option", {
                      value: b,
                      selected: b === i.value.take
                    }, L(b), 9, er))), 256))
                  ], 8, Yi), [
                    [Os, i.value.take]
                  ])
                ]),
                n("div", tr, [
                  n("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: m[1] || (m[1] = (b) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, lr),
                  n("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, nr)
                ]),
                n("div", sr, [
                  n("div", ar, [
                    n("div", or, [
                      (o(!0), u(be, null, $e(e.columns, (b) => (o(), u("div", {
                        key: b.name,
                        class: "flex items-center"
                      }, [
                        gt(n("input", {
                          type: "checkbox",
                          id: b.name,
                          value: b.name,
                          "onUpdate:modelValue": m[2] || (m[2] = (k) => i.value.selectedColumns = k),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, ir), [
                          [Hl, i.value.selectedColumns]
                        ]),
                        n("label", {
                          for: b.name,
                          class: "ml-3"
                        }, L(b.name), 9, rr)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          n("div", ur, [
            fe(p, {
              onClick: v,
              color: "red",
              class: "ml-2"
            }, {
              default: ve(() => [
                he(" Save ")
              ]),
              _: 1
            }),
            fe(h, { onClick: d }, {
              default: ve(() => [
                he(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), dr = { key: 0 }, cr = { key: 1 }, fr = {
  key: 2,
  class: "pt-1"
}, mr = { key: 0 }, vr = { key: 1 }, hr = { key: 3 }, gr = { class: "pl-1 pt-1 flex flex-wrap" }, pr = { class: "flex mt-1" }, yr = ["title"], br = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ n("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), wr = [
  br
], xr = ["disabled"], kr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), $r = [
  kr
], Cr = ["disabled"], _r = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Lr = [
  _r
], Vr = ["disabled"], Mr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Sr = [
  Mr
], Ar = ["disabled"], Tr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), Ir = [
  Tr
], Fr = {
  key: 0,
  class: "flex mt-1"
}, Pr = { class: "px-4 text-lg text-black dark:text-white" }, Dr = { key: 0 }, jr = { key: 1 }, Or = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Br = { key: 2 }, Rr = { class: "flex flex-wrap" }, Er = {
  key: 0,
  class: "pl-2 mt-1"
}, Hr = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
  })
], -1), zr = [
  Hr
], Nr = {
  key: 1,
  class: "pl-2 mt-1"
}, Ur = /* @__PURE__ */ dl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), qr = [
  Ur
], Qr = {
  key: 2,
  class: "pl-2 mt-1"
}, Kr = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Gr = /* @__PURE__ */ n("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Wr = [
  Gr
], Zr = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Jr = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ n("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Xr = [
  Jr
], Yr = /* @__PURE__ */ n("span", { class: "whitespace-nowrap" }, "Copy URL", -1), eu = {
  key: 3,
  class: "pl-2 mt-1"
}, tu = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), lu = [
  tu
], nu = {
  key: 4,
  class: "pl-2 mt-1"
}, su = /* @__PURE__ */ n("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), au = { class: "mr-1" }, ou = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, iu = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), ru = [
  iu
], uu = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, du = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), cu = [
  du
], fu = {
  key: 5,
  class: "pl-2 mt-1"
}, mu = ["title"], vu = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), hu = { class: "whitespace-nowrap" }, gu = { key: 7 }, pu = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, yu = { class: "mr-1 select-none" }, bu = {
  key: 1,
  class: "flex justify-between items-center"
}, wu = { class: "mr-1 select-none" }, xu = /* @__PURE__ */ Y({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: null,
    id: { default: "AutoQueryGrid" },
    apis: null,
    type: null,
    prefs: null,
    deny: null,
    hide: null,
    selectedColumns: null,
    toolbarButtonClass: null,
    tableStyle: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null,
    apiPrefs: null,
    canFilter: null,
    disableKeyBindings: null,
    configureField: null,
    skip: { default: 0 },
    create: { type: Boolean },
    edit: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { expose: l, emit: t }) {
    const a = e, { config: i, autoQueryGridDefaults: r } = wt(), d = r, v = je("client"), f = i.value.storage;
    l({ update: Ge, search: mn, createRequestArgs: xl, reset: $n, createDone: Dt, createSave: _l, editDone: Pt, editSave: Zt });
    const m = (x) => typeof x == "string" ? x.split(",") : x || [];
    function p(x, _) {
      const ee = m(_);
      return x.reduce((W, de) => (W[de] = !ee.includes(de), W), {});
    }
    const h = "filtering,queryString,queryFilters".split(","), g = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), b = c(() => a.deny ? p(h, a.deny) : p(h, d.value.deny)), k = c(() => a.hide ? p(g, a.hide) : p(g, d.value.hide));
    function M(x) {
      return b.value[x];
    }
    function P(x) {
      return k.value[x];
    }
    const j = c(() => a.tableStyle ?? d.value.tableStyle), z = c(() => a.gridClass ?? ae.getGridClass(j.value)), q = c(() => a.grid2Class ?? ae.getGrid2Class(j.value)), Q = c(() => a.grid3Class ?? ae.getGrid3Class(j.value)), $ = c(() => a.grid4Class ?? ae.getGrid4Class(j.value)), O = c(() => a.tableClass ?? ae.getTableClass(j.value)), B = c(() => a.theadClass ?? ae.getTheadClass(j.value)), D = c(() => a.theadRowClass ?? ae.getTheadRowClass(j.value)), I = c(() => a.theadCellClass ?? ae.getTheadCellClass(j.value)), E = c(() => a.toolbarButtonClass ?? ae.toolbarButtonClass);
    function K(x, _) {
      var Le;
      if (a.rowClass)
        return a.rowClass(x, _);
      const ee = !!me.value.AnyUpdate, de = ((Le = Ne.value) != null && Le.name ? ce(x, Ne.value.name) : null) == H.value;
      return ae.getTableRowClass(a.tableStyle, _, de, ee);
    }
    const G = zl(), te = c(() => {
      var x;
      return $l(((x = me.value.AnyQuery.viewModel) == null ? void 0 : x.name) || me.value.AnyQuery.dataModel.name);
    }), A = c(() => {
      const x = Object.keys(G).map((_) => _.toLowerCase());
      return Ke(te.value).filter((_) => x.includes(_.name.toLowerCase()) || x.includes(_.name.toLowerCase() + "-header")).map((_) => _.name);
    });
    function y() {
      let x = m(a.selectedColumns);
      return x.length > 0 ? x : A.value.length > 0 ? A.value : [];
    }
    const S = c(() => {
      let _ = y().map((W) => W.toLowerCase());
      const ee = Ke(te.value);
      return _.length > 0 ? _.map((W) => ee.find((de) => de.name.toLowerCase() === W)).filter((W) => W != null) : ee;
    }), le = c(() => {
      let x = S.value.map((ee) => ee.name), _ = m(ge.value.selectedColumns).map((ee) => ee.toLowerCase());
      return _.length > 0 ? x.filter((ee) => _.includes(ee.toLowerCase())) : x;
    }), V = T([]), F = T(new Xe()), ue = T(new Xe()), ie = T(), ne = T(!1), H = T(), J = T(), pe = T(!1), _e = T(), se = T(a.skip), Pe = T(!1), Ae = 25, ge = T({ take: Ae }), Re = T(!1), Me = c(() => V.value.some((x) => x.settings.filters.length > 0 || !!x.settings.sort) || ge.value.selectedColumns), ze = c(() => V.value.map((x) => x.settings.filters.length).reduce((x, _) => x + _, 0)), Je = c(() => {
      var x;
      return Ke($l(xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)));
    }), Ne = c(() => {
      var x;
      return Qt($l(xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)));
    }), R = c(() => ge.value.take ?? Ae), N = c(() => F.value.response ? ce(F.value.response, "results") : []), re = c(() => {
      var x;
      return ((x = F.value.response) == null ? void 0 : x.total) ?? N.value.length ?? 0;
    }), xe = c(() => se.value > 0), we = c(() => se.value > 0), Fe = c(() => N.value.length >= R.value), qe = c(() => N.value.length >= R.value), ke = {
      NoQuery: "No Query API was found"
    };
    function Ee(x) {
      if (x) {
        if (a.canFilter)
          return a.canFilter(x);
        const _ = Je.value.find((ee) => ee.name.toLowerCase() == x.toLowerCase());
        if (_)
          return !Qn(_);
      }
      return !1;
    }
    function Qe(x) {
      M("queryString") && ql(x);
    }
    async function rt(x) {
      se.value += x, se.value < 0 && (se.value = 0);
      const _ = Math.floor(re.value / R.value) * R.value;
      se.value > _ && (se.value = _), Qe({ skip: se.value || void 0 }), await Ge();
    }
    async function Ft(x, _) {
      var de, Le;
      if (J.value = null, H.value = _, !x || !_)
        return;
      let ee = Et(me.value.AnyQuery, { [x]: _ });
      const W = await v.api(ee);
      if (W.succeeded) {
        let Se = (de = ce(W.response, "results")) == null ? void 0 : de[0];
        Se || console.warn(`API ${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}(${x}:${_}) returned no results`), J.value = Se;
      }
    }
    async function bs(x, _) {
      var de;
      t("rowSelected", x, _);
      const ee = (de = Ne.value) == null ? void 0 : de.name, W = ee ? ce(x, ee) : null;
      !ee || !W || (Qe({ edit: W }), Ft(ee, W));
    }
    function ws(x, _) {
      var W;
      if (!M("filtering"))
        return;
      let ee = _.target;
      if (Ee(x) && (ee == null ? void 0 : ee.tagName) !== "TD") {
        let de = (W = ee == null ? void 0 : ee.closest("TABLE")) == null ? void 0 : W.getBoundingClientRect(), Le = V.value.find((Se) => Se.name.toLowerCase() == x.toLowerCase());
        if (Le && de) {
          let Se = 318, ut = de.x + Se + 10;
          _e.value = {
            column: Le,
            topLeft: {
              x: Math.max(Math.floor(_.clientX + Se / 2), ut),
              y: de.y + 45
            }
          };
        }
      }
      t("headerSelected", x, _);
    }
    function xs() {
      _e.value = null;
    }
    async function ks(x) {
      var ee;
      let _ = (ee = _e.value) == null ? void 0 : ee.column;
      _ && (_.settings = x, f.setItem(Gt(_.name), JSON.stringify(_.settings)), await Ge()), _e.value = null;
    }
    async function $s(x) {
      f.setItem(Gt(x.name), JSON.stringify(x.settings)), await Ge();
    }
    async function Cs(x) {
      pe.value = !1, ge.value = x, f.setItem(kl(), JSON.stringify(x)), await Ge();
    }
    async function Ge() {
      await mn(xl());
    }
    async function _s() {
      await Ge();
    }
    async function mn(x) {
      const _ = me.value.AnyQuery;
      if (!_) {
        console.error(ke.NoQuery);
        return;
      }
      let ee = Et(_, x), W = In((Se) => {
        F.value.response = F.value.error = void 0, Re.value = Se;
      }), de = await v.api(ee);
      W(), ul(() => F.value = de);
      let Le = ce(de.response, "results") || [];
      !de.succeeded || Le.label == 0;
    }
    function xl() {
      let x = {
        include: "total",
        take: R.value
      }, _ = m(ge.value.selectedColumns || a.selectedColumns);
      if (_.length > 0) {
        let W = Ne.value;
        W && _.includes(W.name) && (_ = [W.name, ..._]);
        const de = Je.value, Le = [];
        _.forEach((Se) => {
          var Jt;
          const ut = de.find((Ve) => Ve.name.toLowerCase() == Se.toLowerCase());
          (Jt = ut == null ? void 0 : ut.ref) != null && Jt.selfId && Le.push(ut.ref.selfId), ce(G, Se) && Le.push(...de.filter((Ve) => {
            var ct, jt;
            return ((jt = (ct = Ve.ref) == null ? void 0 : ct.selfId) == null ? void 0 : jt.toLowerCase()) == Se.toLowerCase();
          }).map((Ve) => Ve.name));
        }), Le.forEach((Se) => {
          _.includes(Se) || _.push(Se);
        }), x.fields = _.join(",");
      }
      let ee = [];
      if (V.value.forEach((W) => {
        W.settings.sort && ee.push((W.settings.sort === "DESC" ? "-" : "") + W.name), W.settings.filters.forEach((de) => {
          let Le = de.key.replace("%", W.name);
          x[Le] = de.value;
        });
      }), M("queryString") && M("queryFilters")) {
        let W = Tl(location.search);
        if (Object.keys(W).forEach((de) => {
          S.value.find((Se) => Se.name === de) && (x[de] = W[de]);
        }), typeof W.skip < "u") {
          const de = parseInt(W.skip);
          isNaN(de) || (se.value = x.skip = de);
        }
      }
      return typeof x.skip > "u" && se.value > 0 && (x.skip = se.value), ee.length > 0 && (x.orderBy = ee.join(",")), x;
    }
    function Ls() {
      const x = vn("csv");
      Pl(x), typeof window < "u" && window.open(x);
    }
    function Vs() {
      const x = vn("json");
      Pl(x), Pe.value = !0, setTimeout(() => Pe.value = !1, 3e3);
    }
    function vn(x = "json") {
      var Le;
      const _ = xl(), ee = `/api/${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}`, W = Gs(v.baseUrl, al(ee, { ..._, jsconfig: "edv" }));
      return W.indexOf("?") >= 0 ? cl(W, "?") + "." + x + "?" + Ws(W, "?") : W + ".json";
    }
    async function Ms() {
      V.value.forEach((x) => {
        x.settings = { filters: [] }, f.removeItem(Gt(x.name));
      }), ge.value = { take: Ae }, f.removeItem(kl()), await Ge();
    }
    function Ss() {
      ne.value = !0, Qe({ create: null });
    }
    const xt = c(() => Tt(a.type)), st = c(() => {
      var x;
      return xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name);
    }), kl = () => {
      var x;
      return `${a.id}/ApiPrefs/${xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)}`;
    }, Gt = (x) => {
      var _;
      return `Column/${a.id}:${xt.value || ((_ = me.value.AnyQuery) == null ? void 0 : _.dataModel.name)}.${x}`;
    }, { metadataApi: hn, typeOf: $l, apiOf: gn, filterDefinitions: As } = Ze(), { invalidAccessMessage: Cl } = an(), pn = c(() => a.filterDefinitions || As.value), me = c(() => {
      let x = m(a.apis);
      return x.length > 0 ? Mt.from(x.map((_) => gn(_)).filter((_) => _ != null).map((_) => _)) : Mt.forType(xt.value, hn.value);
    }), Wt = (x) => `<span class="text-yellow-700">${x}</span>`, yn = c(() => {
      if (!hn.value)
        return Wt(`AppMetadata not loaded, see <a class="${rl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let _ = m(a.apis).map((W) => gn(W) == null ? W : null).filter((W) => W != null);
      if (_.length > 0)
        return Wt(`Unknown API${_.length > 1 ? "s" : ""}: ${_.join(", ")}`);
      let ee = me.value;
      return ee.empty ? Wt("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ee.AnyQuery ? null : Wt(ke.NoQuery);
    }), bn = c(() => me.value.AnyQuery && Cl(me.value.AnyQuery)), wn = c(() => me.value.Create && Cl(me.value.Create)), xn = c(() => me.value.AnyUpdate && Cl(me.value.AnyUpdate)), Ts = c(() => nl(me.value.Create));
    c(() => nl(me.value.AnyUpdate));
    const kn = c(() => nl(me.value.Delete));
    function Pt() {
      J.value = null, H.value = null, Qe({ edit: void 0 });
    }
    function Dt() {
      ne.value = !1, Qe({ create: void 0 });
    }
    async function Zt() {
      await Ge(), Pt();
    }
    async function _l() {
      await Ge(), Dt();
    }
    function $n() {
      var ee;
      F.value = new Xe(), ue.value = new Xe(), ne.value = !1, H.value = null, J.value = null, pe.value = !1, _e.value = null, se.value = a.skip, Pe.value = !1, ge.value = { take: Ae }, Re.value = !1;
      const x = a.prefs || il(f.getItem(kl()));
      x && (ge.value = x), V.value = S.value.map((W) => ({
        name: W.name,
        type: W.type,
        meta: W,
        settings: Object.assign(
          {
            filters: []
          },
          il(f.getItem(Gt(W.name)))
        )
      })), isNaN(a.skip) || (se.value = a.skip);
      let _ = (ee = Ne.value) == null ? void 0 : ee.name;
      if (M("queryString")) {
        const W = Tl(location.search);
        typeof W.create < "u" ? ne.value = typeof W.create < "u" : _ && (typeof W.edit == "string" || typeof W.edit == "number") && Ft(_, W.edit);
      }
      a.create === !0 && (ne.value = !0), _ && a.edit != null && Ft(_, a.edit);
    }
    return lt(async () => {
      $n(), await Ge();
    }), (x, _) => {
      const ee = U("Alert"), W = U("EnsureAccessDialog"), de = U("AutoCreateForm"), Le = U("AutoEditForm"), Se = U("ErrorSummary"), ut = U("Loading"), Cn = U("SettingsIcons"), Jt = U("DataGrid");
      return s(yn) ? (o(), u("div", dr, [
        fe(ee, { innerHTML: s(yn) }, null, 8, ["innerHTML"])
      ])) : s(bn) ? (o(), u("div", cr, [
        fe(ss, { "invalid-access": s(bn) }, null, 8, ["invalid-access"])
      ])) : (o(), u("div", fr, [
        ne.value && s(me).Create ? (o(), u("div", mr, [
          s(wn) ? (o(), X(W, {
            key: 0,
            title: `Create ${s(st)}`,
            "invalid-access": s(wn),
            "alert-class": "text-yellow-700",
            onDone: Dt
          }, null, 8, ["title", "invalid-access"])) : s(G).createform ? Z(x.$slots, "createform", {
            key: 1,
            type: s(me).Create.request.name,
            configure: e.configureField,
            done: Dt,
            save: _l
          }) : (o(), X(de, {
            key: 2,
            type: s(me).Create.request.name,
            configure: e.configureField,
            onDone: Dt,
            onSave: _l
          }, {
            header: ve(() => [
              Z(x.$slots, "formheader", {
                form: "create",
                apis: s(me),
                type: s(st)
              })
            ]),
            footer: ve(() => [
              Z(x.$slots, "formfooter", {
                form: "create",
                apis: s(me),
                type: s(st)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : J.value && s(me).AnyUpdate ? (o(), u("div", vr, [
          s(xn) ? (o(), X(W, {
            key: 0,
            title: `Update ${s(st)}`,
            "invalid-access": s(xn),
            "alert-class": "text-yellow-700",
            onDone: Pt
          }, null, 8, ["title", "invalid-access"])) : s(G).editform ? Z(x.$slots, "editform", {
            key: 1,
            model: J.value,
            type: s(me).AnyUpdate.request.name,
            deleteType: s(kn) ? s(me).Delete.request.name : null,
            configure: e.configureField,
            done: Pt,
            save: Zt
          }) : (o(), X(Le, {
            key: 2,
            modelValue: J.value,
            "onUpdate:modelValue": _[0] || (_[0] = (Ve) => J.value = Ve),
            type: s(me).AnyUpdate.request.name,
            deleteType: s(kn) ? s(me).Delete.request.name : null,
            configure: e.configureField,
            onDone: Pt,
            onSave: Zt,
            onDelete: Zt
          }, {
            header: ve(() => [
              Z(x.$slots, "formheader", {
                form: "edit",
                apis: s(me),
                type: s(st),
                model: J.value,
                id: H.value
              })
            ]),
            footer: ve(() => [
              Z(x.$slots, "formfooter", {
                form: "edit",
                apis: s(me),
                type: s(st),
                model: J.value,
                id: H.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : C("", !0),
        s(G).toolbar ? Z(x.$slots, "toolbar", { key: 2 }) : P("toolbar") ? (o(), u("div", hr, [
          pe.value ? (o(), X(un, {
            key: 0,
            columns: s(S),
            prefs: ge.value,
            onDone: _[1] || (_[1] = (Ve) => pe.value = !1),
            onSave: Cs
          }, null, 8, ["columns", "prefs"])) : C("", !0),
          n("div", gr, [
            n("div", pr, [
              P("preferences") ? (o(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${s(st)} Preferences`,
                onClick: _[2] || (_[2] = (Ve) => pe.value = !pe.value)
              }, wr, 8, yr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 1,
                type: "button",
                class: w(["pl-2", s(xe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !s(xe),
                onClick: _[3] || (_[3] = (Ve) => rt(-s(re)))
              }, $r, 10, xr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 2,
                type: "button",
                class: w(["pl-2", s(we) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !s(we),
                onClick: _[4] || (_[4] = (Ve) => rt(-s(R)))
              }, Lr, 10, Cr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 3,
                type: "button",
                class: w(["pl-2", s(Fe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !s(Fe),
                onClick: _[5] || (_[5] = (Ve) => rt(s(R)))
              }, Sr, 10, Vr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 4,
                type: "button",
                class: w(["pl-2", s(qe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !s(qe),
                onClick: _[6] || (_[6] = (Ve) => rt(s(re)))
              }, Ir, 10, Ar)) : C("", !0)
            ]),
            P("pagingInfo") ? (o(), u("div", Fr, [
              n("div", Pr, [
                Re.value ? (o(), u("span", Dr, "Querying...")) : C("", !0),
                s(N).length ? (o(), u("span", jr, [
                  Or,
                  he(" " + L(se.value + 1) + " - " + L(Math.min(se.value + s(N).length, s(re))) + " ", 1),
                  n("span", null, " of " + L(s(re)), 1)
                ])) : F.value.completed ? (o(), u("span", Br, "No Results")) : C("", !0)
              ])
            ])) : C("", !0),
            n("div", Rr, [
              P("refresh") ? (o(), u("div", Er, [
                n("button", {
                  type: "button",
                  onClick: _s,
                  title: "Refresh",
                  class: w(s(E))
                }, zr, 2)
              ])) : C("", !0),
              P("downloadCsv") ? (o(), u("div", Nr, [
                n("button", {
                  type: "button",
                  onClick: Ls,
                  title: "Download CSV",
                  class: w(s(E))
                }, qr, 2)
              ])) : C("", !0),
              P("copyApiUrl") ? (o(), u("div", Qr, [
                n("button", {
                  type: "button",
                  onClick: Vs,
                  title: "Copy API URL",
                  class: w(s(E))
                }, [
                  Pe.value ? (o(), u("svg", Kr, Wr)) : (o(), u("svg", Zr, Xr)),
                  Yr
                ], 2)
              ])) : C("", !0),
              s(Me) && P("resetPreferences") ? (o(), u("div", eu, [
                n("button", {
                  type: "button",
                  onClick: Ms,
                  title: "Reset Preferences & Filters",
                  class: w(s(E))
                }, lu, 2)
              ])) : C("", !0),
              P("filtersView") && s(ze) > 0 ? (o(), u("div", nu, [
                n("button", {
                  type: "button",
                  onClick: _[7] || (_[7] = (Ve) => ie.value = ie.value == "filters" ? null : "filters"),
                  class: w(s(E)),
                  "aria-expanded": "false"
                }, [
                  su,
                  n("span", au, L(s(ze)) + " " + L(s(ze) == 1 ? "Filter" : "Filters"), 1),
                  ie.value != "filters" ? (o(), u("svg", ou, ru)) : (o(), u("svg", uu, cu))
                ], 2)
              ])) : C("", !0),
              P("newItem") && s(me).Create && s(Ts) ? (o(), u("div", fu, [
                n("button", {
                  type: "button",
                  onClick: Ss,
                  title: s(st),
                  class: w(s(E))
                }, [
                  vu,
                  n("span", hu, "New " + L(s(st)), 1)
                ], 10, mu)
              ])) : C("", !0),
              s(G).toolbarbuttons ? Z(x.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: s(E)
              }) : C("", !0)
            ])
          ])
        ])) : C("", !0),
        ie.value == "filters" ? (o(), X(rn, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: s(pn),
          columns: V.value,
          onDone: _[8] || (_[8] = (Ve) => ie.value = null),
          onChange: $s
        }, null, 8, ["definitions", "columns"])) : C("", !0),
        ue.value.error ?? F.value.error ? (o(), X(Se, {
          key: 5,
          status: ue.value.error ?? F.value.error
        }, null, 8, ["status"])) : Re.value ? (o(), X(ut, {
          key: 6,
          class: "p-2"
        })) : C("", !0),
        _e.value ? (o(), u("div", gu, [
          fe(on, {
            definitions: s(pn),
            column: _e.value.column,
            "top-left": _e.value.topLeft,
            onDone: xs,
            onSave: ks
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : C("", !0),
        s(N).length ? (o(), X(Jt, {
          key: 8,
          id: e.id,
          items: s(N),
          type: e.type,
          "selected-columns": s(le),
          class: "mt-1",
          onFiltersChanged: Ge,
          tableStyle: s(j),
          gridClass: s(z),
          grid2Class: s(q),
          grid3Class: s(Q),
          grid4Class: s($),
          tableClass: s(O),
          theadClass: s(B),
          theadRowClass: s(D),
          theadCellClass: s(I),
          tbodyClass: e.tbodyClass,
          rowClass: K,
          onRowSelected: bs,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: ws
        }, Nl({
          header: ve(({ column: Ve, label: ct }) => {
            var jt;
            return [
              M("filtering") && Ee(Ve) ? (o(), u("div", pu, [
                n("span", yu, L(ct), 1),
                fe(Cn, {
                  column: V.value.find((Is) => Is.name.toLowerCase() === Ve.toLowerCase()),
                  "is-open": ((jt = _e.value) == null ? void 0 : jt.column.name) === Ve
                }, null, 8, ["column", "is-open"])
              ])) : (o(), u("div", bu, [
                n("span", wu, L(ct), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          $e(Object.keys(s(G)), (Ve) => ({
            name: Ve,
            fn: ve((ct) => [
              Z(x.$slots, Ve, _t(sl(ct)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : C("", !0)
      ]));
    };
  }
}), ku = { class: "flex" }, $u = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Cu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), _u = [
  Cu
], Lu = /* @__PURE__ */ n("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), Vu = /* @__PURE__ */ n("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), Mu = [
  Lu,
  Vu
], Su = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Au = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), Tu = [
  Au
], Iu = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Fu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), Pu = [
  Fu
], Du = /* @__PURE__ */ Y({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (l, t) => {
      var a, i, r, d, v, f, m;
      return o(), u("div", ku, [
        (r = (i = (a = e.column) == null ? void 0 : a.settings) == null ? void 0 : i.filters) != null && r.length ? (o(), u("svg", $u, _u)) : (o(), u("svg", {
          key: 1,
          class: w(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, Mu, 2)),
        ((v = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : v.sort) === "ASC" ? (o(), u("svg", Su, Tu)) : ((m = (f = e.column) == null ? void 0 : f.settings) == null ? void 0 : m.sort) === "DESC" ? (o(), u("svg", Iu, Pu)) : C("", !0)
      ]);
    };
  }
}), ju = /* @__PURE__ */ Y({
  __name: "EnsureAccessDialog",
  props: {
    title: null,
    subtitle: null,
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    return (l, t) => {
      const a = U("EnsureAccess"), i = U("SlideOver");
      return e.invalidAccess ? (o(), X(i, {
        key: 0,
        title: e.title,
        onDone: t[0] || (t[0] = (r) => l.$emit("done")),
        "content-class": "relative flex-1"
      }, Nl({
        default: ve(() => [
          fe(a, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: ve(() => [
            he(L(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : C("", !0);
    };
  }
}), Ou = ["for"], Bu = { class: "mt-1 relative rounded-md shadow-sm" }, Ru = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], Eu = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Hu = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), zu = [
  Hu
], Nu = ["id"], Uu = ["id"], qu = {
  inheritAttrs: !1
}, Qu = /* @__PURE__ */ Y({
  ...qu,
  __name: "TextInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e, { expose: l }) {
    const t = e, a = (g) => g.value;
    l({
      focus: r
    });
    const i = T();
    function r() {
      var g;
      (g = i.value) == null || g.focus();
    }
    const d = c(() => t.type || "text"), v = c(() => t.label ?? Ie(Ye(t.id))), f = c(() => t.placeholder ?? v.value);
    let m = je("ApiState", void 0);
    const p = c(() => dt.call({ responseStatus: t.status ?? (m == null ? void 0 : m.error.value) }, t.id)), h = c(() => [ot.base, p.value ? ot.invalid : ot.valid, t.inputClass]);
    return (g, b) => (o(), u("div", {
      class: w([g.$attrs.class])
    }, [
      s(v) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(s(v)), 11, Ou)) : C("", !0),
      n("div", Bu, [
        n("input", Ce({
          ref_key: "txtInput",
          ref: i,
          type: s(d),
          name: e.id,
          id: e.id,
          class: s(h),
          placeholder: s(f),
          value: e.modelValue,
          onInput: b[0] || (b[0] = (k) => g.$emit("update:modelValue", a(k.target))),
          "aria-invalid": s(p) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, s(nt)(g.$attrs, ["class"])), null, 16, Ru),
        s(p) ? (o(), u("div", Eu, zu)) : C("", !0)
      ]),
      s(p) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(s(p)), 9, Nu)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, L(e.help), 9, Uu)) : C("", !0)
    ], 2));
  }
}), Ku = ["for"], Gu = { class: "mt-1 relative rounded-md shadow-sm" }, Wu = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], Zu = ["id"], Ju = ["id"], Xu = {
  inheritAttrs: !1
}, Yu = /* @__PURE__ */ Y({
  ...Xu,
  __name: "TextareaInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e) {
    const l = e, t = (f) => f.value, a = c(() => l.label ?? Ie(Ye(l.id))), i = c(() => l.placeholder ?? a.value);
    let r = je("ApiState", void 0);
    const d = c(() => dt.call({ responseStatus: l.status ?? (r == null ? void 0 : r.error.value) }, l.id)), v = c(() => ["shadow-sm " + ot.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ot.valid, l.inputClass]);
    return (f, m) => (o(), u("div", {
      class: w([f.$attrs.class])
    }, [
      s(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(s(a)), 11, Ku)) : C("", !0),
      n("div", Gu, [
        n("textarea", Ce({
          name: e.id,
          id: e.id,
          class: s(v),
          placeholder: s(i),
          onInput: m[0] || (m[0] = (p) => f.$emit("update:modelValue", t(p.target))),
          "aria-invalid": s(d) != null,
          "aria-describedby": `${e.id}-error`
        }, s(nt)(f.$attrs, ["class"])), L(e.modelValue), 17, Wu)
      ]),
      s(d) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(s(d)), 9, Zu)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, L(e.help), 9, Ju)) : C("", !0)
    ], 2));
  }
}), ed = ["for"], td = ["id", "name", "value", "aria-invalid", "aria-describedby"], ld = ["value"], nd = ["id"], sd = {
  inheritAttrs: !1
}, ad = /* @__PURE__ */ Y({
  ...sd,
  __name: "SelectInput",
  props: {
    status: null,
    id: null,
    modelValue: null,
    inputClass: null,
    label: null,
    labelClass: null,
    options: null,
    values: null,
    entries: null
  },
  setup(e) {
    const l = e, t = (v) => v.value, a = c(() => l.label ?? Ie(Ye(l.id)));
    let i = je("ApiState", void 0);
    const r = c(() => dt.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id)), d = c(() => l.entries || (l.values ? l.values.map((v) => ({ key: v, value: v })) : l.options ? Object.keys(l.options).map((v) => ({ key: v, value: l.options[v] })) : []));
    return (v, f) => (o(), u("div", {
      class: w([v.$attrs.class])
    }, [
      s(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(s(a)), 11, ed)) : C("", !0),
      n("select", Ce({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          s(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: f[0] || (f[0] = (m) => v.$emit("update:modelValue", t(m.target))),
        "aria-invalid": s(r) != null,
        "aria-describedby": `${e.id}-error`
      }, s(nt)(v.$attrs, ["class"])), [
        (o(!0), u(be, null, $e(s(d), (m) => (o(), u("option", {
          value: m.key
        }, L(m.value), 9, ld))), 256))
      ], 16, td),
      s(r) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(s(r)), 9, nd)) : C("", !0)
    ], 2));
  }
}), od = { class: "flex items-center h-5" }, id = ["id", "name", "checked"], rd = { class: "ml-3 text-sm" }, ud = ["for"], dd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, cd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, fd = {
  inheritAttrs: !1
}, md = /* @__PURE__ */ Y({
  ...fd,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.label ?? Ie(Ye(t.id)));
    let i = je("ApiState", void 0);
    const r = c(() => dt.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id));
    return (d, v) => (o(), u("div", {
      class: w(["relative flex items-start", d.$attrs.class])
    }, [
      n("div", od, [
        n("input", Ce({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: v[0] || (v[0] = (f) => d.$emit("update:modelValue", f.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, s(nt)(d.$attrs, ["class"])), null, 16, id)
      ]),
      n("div", rd, [
        n("label", {
          for: e.id,
          class: w(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, L(s(a)), 11, ud),
        s(r) ? (o(), u("p", dd, L(s(r)), 1)) : e.help ? (o(), u("p", cd, L(e.help), 1)) : C("", !0)
      ])
    ], 2));
  }
}), vd = ["id"], hd = ["for"], gd = { class: "mt-1 relative rounded-md shadow-sm" }, pd = ["id", "name", "value"], yd = ["onClick"], bd = { class: "flex flex-wrap pb-1.5" }, wd = { class: "pt-1.5 pl-1" }, xd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, kd = ["onClick"], $d = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Cd = [
  $d
], _d = { class: "pt-1.5 pl-1 shrink" }, Ld = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], Vd = ["id"], Md = ["onMouseover", "onClick"], Sd = { class: "block truncate" }, Ad = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Td = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Id = [
  Td
], Fd = ["id"], Pd = ["id"], Dd = {
  inheritAttrs: !1
}, jd = /* @__PURE__ */ Y({
  ...Dd,
  __name: "TagInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    modelValue: { default: () => [] },
    delimiters: { default: () => [","] },
    allowableValues: null,
    string: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => typeof t.modelValue == "string" ? t.modelValue.trim().length == 0 ? [] : t.modelValue.split(",") : t.modelValue || []), i = T(), r = T(!1), d = c(() => !t.allowableValues || t.allowableValues.length == 0 ? [] : t.allowableValues.filter((y) => !a.value.includes(y) && y.toLowerCase().includes(m.value.toLowerCase())));
    function v(y) {
      i.value = y;
    }
    const f = T(null), m = T(""), p = c(() => t.type || "text"), h = c(() => t.label ?? Ie(Ye(t.id)));
    let g = je("ApiState", void 0);
    const b = c(() => dt.call({ responseStatus: t.status ?? (g == null ? void 0 : g.error.value) }, t.id)), k = c(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      b.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      t.inputClass
    ]), M = (y) => $(a.value.filter((S) => S != y));
    function P(y) {
      var S;
      document.activeElement === y.target && ((S = f.value) == null || S.focus());
    }
    const j = T();
    function z() {
      r.value = !0, j.value = !0;
    }
    function q() {
      z();
    }
    function Q() {
      G(B()), j.value = !1, setTimeout(() => {
        j.value || (r.value = !1);
      }, 200);
    }
    function $(y) {
      const S = t.string ? y.join(",") : y;
      l("update:modelValue", S);
    }
    function O(y) {
      if (y.key == "Backspace" && m.value.length == 0 && a.value.length > 0 && M(a.value[a.value.length - 1]), !(!t.allowableValues || t.allowableValues.length == 0))
        if (y.code == "Escape" || y.code == "Tab")
          r.value = !1;
        else if (y.code == "Home")
          i.value = d.value[0], E();
        else if (y.code == "End")
          i.value = d.value[d.value.length - 1], E();
        else if (y.code == "ArrowDown") {
          if (r.value = !0, !i.value)
            i.value = d.value[0];
          else {
            const S = d.value.indexOf(i.value);
            i.value = S + 1 < d.value.length ? d.value[S + 1] : d.value[0];
          }
          K();
        } else if (y.code == "ArrowUp") {
          if (!i.value)
            i.value = d.value[d.value.length - 1];
          else {
            const S = d.value.indexOf(i.value);
            i.value = S - 1 >= 0 ? d.value[S - 1] : d.value[d.value.length - 1];
          }
          K();
        } else
          y.code == "Enter" ? i.value && r.value ? (G(i.value), y.preventDefault()) : r.value = !1 : r.value = d.value.length > 0;
    }
    function B() {
      if (m.value.length == 0)
        return "";
      let y = Zs(m.value.trim(), ",");
      return y[0] == "," && (y = y.substring(1)), y = y.trim(), y.length == 0 && r.value && d.value.length > 0 ? i.value : y;
    }
    function D(y) {
      const S = B();
      if (S.length > 0) {
        const le = t.delimiters.some((F) => F == y.key);
        if (le && y.preventDefault(), y.key == "Enter" || y.key == "NumpadEnter" || y.key.length == 1 && le) {
          G(S);
          return;
        }
      }
    }
    const I = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function E() {
      setTimeout(() => {
        let y = ol(`#${t.id}-tag li.active`);
        y && y.scrollIntoView(I);
      }, 0);
    }
    function K() {
      setTimeout(() => {
        let y = ol(`#${t.id}-tag li.active`);
        y && ("scrollIntoViewIfNeeded" in y ? y.scrollIntoViewIfNeeded(I) : y.scrollIntoView(I));
      }, 0);
    }
    function G(y) {
      if (y.length === 0)
        return;
      const S = Array.from(a.value);
      S.indexOf(y) == -1 && S.push(y), $(S), m.value = "", r.value = !1;
    }
    function te(y) {
      var le;
      const S = (le = y.clipboardData) == null ? void 0 : le.getData("Text");
      A(S);
    }
    function A(y) {
      if (!y)
        return;
      const S = new RegExp(`\\n|\\t|${t.delimiters.join("|")}`), le = Array.from(a.value);
      y.split(S).map((F) => F.trim()).forEach((F) => {
        le.indexOf(F) == -1 && le.push(F);
      }), $(le), m.value = "";
    }
    return (y, S) => (o(), u("div", {
      class: w([y.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      s(h) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(s(h)), 11, hd)) : C("", !0),
      n("div", gd, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: s(a).join(",")
        }, null, 8, pd),
        n("button", {
          class: w(s(k)),
          onClick: Oe(P, ["prevent"]),
          onFocus: S[2] || (S[2] = (le) => r.value = !0),
          tabindex: "-1"
        }, [
          n("div", bd, [
            (o(!0), u(be, null, $e(s(a), (le) => (o(), u("div", wd, [
              n("span", xd, [
                he(L(le) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (V) => M(le),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, Cd, 8, kd)
              ])
            ]))), 256)),
            n("div", _d, [
              gt(n("input", Ce({
                ref_key: "txtInput",
                ref: f,
                type: s(p),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: e.id,
                id: e.id,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${m.value.length + 1}ch`,
                "onUpdate:modelValue": S[0] || (S[0] = (le) => m.value = le),
                "aria-invalid": s(b) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: O,
                onKeypress: D,
                onPaste: Oe(te, ["prevent", "stop"]),
                onFocus: q,
                onBlur: Q,
                onClick: S[1] || (S[1] = (le) => r.value = !0)
              }, s(nt)(y.$attrs, ["class"])), null, 16, Ld), [
                [Bs, m.value]
              ])
            ])
          ])
        ], 42, yd),
        r.value && s(d).length ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: O,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(be, null, $e(s(d), (le) => (o(), u("li", {
            class: w([le === i.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (V) => v(le),
            onClick: (V) => G(le),
            role: "option",
            tabindex: "-1"
          }, [
            n("span", Sd, L(le), 1)
          ], 42, Md))), 256))
        ], 40, Vd)) : C("", !0),
        s(b) ? (o(), u("div", Ad, Id)) : C("", !0)
      ]),
      s(b) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(s(b)), 9, Fd)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, L(e.help), 9, Pd)) : C("", !0)
    ], 10, vd));
  }
}), Od = { class: "relative w-full" }, Bd = ["for"], Rd = { class: "block mt-2" }, Ed = /* @__PURE__ */ n("span", { class: "sr-only" }, "help ?? useLabel", -1), Hd = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], zd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Nd = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Ud = [
  Nd
], qd = ["id"], Qd = ["id"], Kd = { key: 0 }, Gd = ["title"], Wd = ["alt", "src"], Zd = {
  key: 1,
  class: "mt-3"
}, Jd = { class: "w-full" }, Xd = { class: "pr-6 align-bottom pb-2" }, Yd = ["title"], ec = ["src", "onError"], tc = ["href"], lc = {
  key: 1,
  class: "overflow-hidden"
}, nc = { class: "align-top pb-2 whitespace-nowrap" }, sc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, ac = /* @__PURE__ */ Y({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    values: null,
    files: null
  },
  setup(e) {
    var Q;
    const l = e, t = T(null), { assetsPathResolver: a, fallbackPathResolver: i } = wt(), r = {}, d = T(), v = T(((Q = l.files) == null ? void 0 : Q.map(f)) || []);
    function f($) {
      return $.filePath = a($.filePath), $;
    }
    l.values && l.values.length > 0 && (v.value = l.values.map(($) => {
      let O = $.replace(/\\/g, "/");
      return { fileName: Js(pt(O, "/"), "."), filePath: O, contentType: jl(O) };
    }).map(f));
    const m = c(() => l.label ?? Ie(Ye(l.id))), p = c(() => l.placeholder ?? m.value);
    let h = je("ApiState", void 0);
    const g = c(() => dt.call({ responseStatus: l.status ?? (h == null ? void 0 : h.error.value) }, l.id)), b = c(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      g.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      l.inputClass
    ]), k = ($) => {
      let O = $.target;
      d.value = "", v.value = Array.from(O.files || []).map((B) => ({
        fileName: B.name,
        filePath: Zl(B),
        contentLength: B.size,
        contentType: B.type || jl(B.name)
      }));
    }, M = () => {
      var $;
      return ($ = t.value) == null ? void 0 : $.click();
    }, P = ($) => $ == null ? !1 : $.startsWith("data:") || $.startsWith("blob:"), j = c(() => {
      if (v.value.length > 0)
        return v.value[0].filePath;
      let $ = typeof l.modelValue == "string" ? l.modelValue : l.values && l.values[0];
      return $ && mt(a($)) || null;
    }), z = ($) => !$ || $.startsWith("data:") || $.endsWith(".svg") ? "" : "rounded-full object-cover";
    function q($) {
      d.value = i(j.value);
    }
    return Nt(Hn), ($, O) => (o(), u("div", {
      class: w(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      n("div", Od, [
        s(m) ? (o(), u("label", {
          key: 0,
          for: e.id,
          class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, L(s(m)), 11, Bd)) : C("", !0),
        n("div", Rd, [
          Ed,
          n("input", Ce({
            ref_key: "input",
            ref: t,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: s(b),
            placeholder: s(p),
            "aria-invalid": s(g) != null,
            "aria-describedby": `${e.id}-error`
          }, $.$attrs, { onChange: k }), null, 16, Hd),
          s(g) ? (o(), u("div", zd, Ud)) : C("", !0)
        ]),
        s(g) ? (o(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, L(s(g)), 9, qd)) : e.help ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, L(e.help), 9, Qd)) : C("", !0)
      ]),
      e.multiple ? (o(), u("div", Zd, [
        n("table", Jd, [
          (o(!0), u(be, null, $e(v.value, (B) => (o(), u("tr", null, [
            n("td", Xd, [
              n("div", {
                class: "flex w-full",
                title: P(B.filePath) ? "" : B.filePath
              }, [
                n("img", {
                  src: r[s(mt)(B.filePath)] || s(a)(s(mt)(B.filePath)),
                  class: w(["mr-2 h-8 w-8", z(B.filePath)]),
                  onError: (D) => r[s(mt)(B.filePath)] = s(i)(s(mt)(B.filePath))
                }, null, 42, ec),
                P(B.filePath) ? (o(), u("span", lc, L(B.fileName), 1)) : (o(), u("a", {
                  key: 0,
                  href: s(a)(B.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, L(B.fileName), 9, tc))
              ], 8, Yd)
            ]),
            n("td", nc, [
              B.contentLength && B.contentLength > 0 ? (o(), u("span", sc, L(s(Xl)(B.contentLength)), 1)) : C("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), u("div", Kd, [
        s(j) ? (o(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: P(s(j)) ? "" : s(j)
        }, [
          n("img", {
            onClick: M,
            class: w(["h-16 w-16", z(s(j))]),
            alt: `Current ${s(m)}`,
            src: d.value || s(a)(s(j)),
            onError: q
          }, null, 42, Wd)
        ], 8, Gd)) : C("", !0)
      ]))
    ], 2));
  }
}), oc = ["id"], ic = ["for"], rc = { class: "relative mt-1" }, uc = ["id", "placeholder"], dc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), cc = [
  dc
], fc = ["id"], mc = ["onMouseover", "onClick"], vc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    "clip-rule": "evenodd"
  })
], -1), hc = [
  vc
], gc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, pc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), yc = [
  pc
], bc = ["id"], wc = ["id"], xc = /* @__PURE__ */ Y({
  __name: "Autocomplete",
  props: {
    status: null,
    id: null,
    type: null,
    label: null,
    help: null,
    placeholder: null,
    multiple: { type: Boolean, default: !1 },
    options: { default: () => [] },
    modelValue: null,
    match: null,
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: l, emit: t }) {
    const a = e, i = T(!1);
    l({ toggle: E });
    function r(A) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(A) >= 0;
    }
    const d = c(() => a.label ?? Ie(Ye(a.id)));
    let v = je("ApiState", void 0);
    const f = c(() => dt.call({ responseStatus: a.status ?? (v == null ? void 0 : v.error.value) }, a.id)), m = c(() => [ot.base, f.value ? ot.invalid : ot.valid]), p = T(null), h = T(""), g = T(null), b = T(a.viewCount), k = T([]), M = c(() => h.value ? a.options.filter((y) => a.match(y, h.value)).slice(0, b.value) : a.options), P = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function j(A) {
      g.value = A, k.value.indexOf(A) > Math.floor(b.value * 0.9) && (b.value += a.viewCount, te());
    }
    const z = [",", `
`, "	"];
    function q(A) {
      var S;
      const y = (S = A.clipboardData) == null ? void 0 : S.getData("Text");
      Q(y);
    }
    function Q(A) {
      if (!A)
        return;
      const y = z.some((S) => A.includes(S));
      if (!a.multiple || !y) {
        const S = a.options.filter((le) => a.match(le, A));
        S.length == 1 && (G(S[0]), i.value = !1, el());
      } else if (y) {
        const S = new RegExp("\\r|\\n|\\t|,"), V = A.split(S).filter((F) => F.trim()).map((F) => a.options.find((ue) => a.match(ue, F))).filter((F) => !!F);
        if (V.length > 0) {
          h.value = "", i.value = !1, g.value = null;
          let F = Array.from(a.modelValue || []);
          V.forEach((ue) => {
            r(ue) ? F = F.filter((ie) => ie != ue) : F.push(ue);
          }), t("update:modelValue", F), el();
        }
      }
    }
    function $(A) {
      P.indexOf(A.code) || K();
    }
    function O(A) {
      if (!(A.shiftKey || A.ctrlKey || A.altKey)) {
        if (!i.value) {
          A.code == "ArrowDown" && (i.value = !0, g.value = k.value[0]);
          return;
        }
        if (A.code == "Escape" || A.code == "Tab")
          i.value = !1;
        else if (A.code == "Home")
          g.value = k.value[0], D();
        else if (A.code == "End")
          g.value = k.value[k.value.length - 1], D();
        else if (A.code == "ArrowDown") {
          if (!g.value)
            g.value = k.value[0];
          else {
            const y = k.value.indexOf(g.value);
            g.value = y + 1 < k.value.length ? k.value[y + 1] : k.value[0];
          }
          I();
        } else if (A.code == "ArrowUp") {
          if (!g.value)
            g.value = k.value[k.value.length - 1];
          else {
            const y = k.value.indexOf(g.value);
            g.value = y - 1 >= 0 ? k.value[y - 1] : k.value[k.value.length - 1];
          }
          I();
        } else
          A.code == "Enter" && (g.value ? (G(g.value), a.multiple || (A.preventDefault(), el())) : i.value = !1);
      }
    }
    const B = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function D() {
      setTimeout(() => {
        let A = ol(`#${a.id}-autocomplete li.active`);
        A && A.scrollIntoView(B);
      }, 0);
    }
    function I() {
      setTimeout(() => {
        let A = ol(`#${a.id}-autocomplete li.active`);
        A && ("scrollIntoViewIfNeeded" in A ? A.scrollIntoViewIfNeeded(B) : A.scrollIntoView(B));
      }, 0);
    }
    function E(A) {
      var y;
      i.value = A, A && (K(), (y = p.value) == null || y.focus());
    }
    function K() {
      i.value = !0, te();
    }
    function G(A) {
      if (h.value = "", i.value = !1, a.multiple) {
        let y = Array.from(a.modelValue || []);
        r(A) ? y = y.filter((S) => S != A) : y.push(A), g.value = null, t("update:modelValue", y);
      } else {
        let y = A;
        a.modelValue == A && (y = null), t("update:modelValue", y);
      }
    }
    function te() {
      k.value = M.value;
    }
    return At(h, te), (A, y) => (o(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      s(d) ? (o(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, L(s(d)), 9, ic)) : C("", !0),
      n("div", rc, [
        gt(n("input", Ce({
          ref_key: "txtInput",
          ref: p,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": y[0] || (y[0] = (S) => h.value = S),
          class: s(m),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: y[1] || (y[1] = (S) => i.value = !0),
          onKeydown: O,
          onKeyup: $,
          onClick: K,
          onPaste: q
        }, A.$attrs), null, 16, uc), [
          [Rs, h.value]
        ]),
        n("button", {
          type: "button",
          onClick: y[2] || (y[2] = (S) => E(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, cc),
        i.value ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: O,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(be, null, $e(k.value, (S) => (o(), u("li", {
            class: w([S === g.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (le) => j(S),
            onClick: (le) => G(S),
            role: "option",
            tabindex: "-1"
          }, [
            Z(A.$slots, "item", _t(sl(S))),
            r(S) ? (o(), u("span", {
              key: 0,
              class: w(["absolute inset-y-0 right-0 flex items-center pr-4", S === g.value ? "text-white" : "text-indigo-600"])
            }, hc, 2)) : C("", !0)
          ], 42, mc))), 256))
        ], 40, fc)) : !e.multiple && e.modelValue ? (o(), u("div", {
          key: 1,
          onKeydown: O,
          onClick: y[3] || (y[3] = (S) => E(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          Z(A.$slots, "item", _t(sl(e.modelValue)))
        ], 32)) : C("", !0),
        s(f) ? (o(), u("div", gc, yc)) : C("", !0)
      ]),
      s(f) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(s(f)), 9, bc)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, L(e.help), 9, wc)) : C("", !0)
    ], 8, oc));
  }
}), kc = ["id", "name", "value"], $c = { class: "block truncate" }, Cc = /* @__PURE__ */ Y({
  __name: "Combobox",
  props: {
    id: null,
    modelValue: null,
    multiple: { type: Boolean },
    options: null,
    values: null,
    entries: null
  },
  emits: ["update:modelValue"],
  setup(e, { expose: l, emit: t }) {
    const a = e;
    l({
      toggle(h) {
        var g;
        (g = d.value) == null || g.toggle(h);
      }
    });
    function i(h) {
      t("update:modelValue", h);
    }
    const r = c(() => a.multiple != null ? a.multiple : Array.isArray(a.modelValue)), d = T();
    function v(h, g) {
      return !g || h.value.toLowerCase().includes(g.toLowerCase());
    }
    const f = c(() => a.entries || (a.values ? a.values.map((h) => ({ key: h, value: h })) : a.options ? Object.keys(a.options).map((h) => ({ key: h, value: a.options[h] })) : [])), m = T(r.value ? [] : null);
    lt(() => {
      a.modelValue == null || a.modelValue === "" ? m.value = r.value ? [] : null : typeof a.modelValue == "string" ? m.value = f.value.find((h) => h.key === a.modelValue) || null : Array.isArray(a.modelValue) && (m.value = f.value.filter((h) => a.modelValue.includes(h.key)));
    });
    const p = c(() => m.value == null ? "" : Array.isArray(m.value) ? m.value.map((h) => encodeURIComponent(h.key)).join(",") : m.value.key);
    return (h, g) => {
      const b = U("Autocomplete");
      return o(), u(be, null, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: s(p)
        }, null, 8, kc),
        fe(b, Ce({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: s(f),
          match: v,
          multiple: s(r)
        }, h.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": [
            g[0] || (g[0] = (k) => m.value = k),
            i
          ]
        }), {
          item: ve(({ key: k, value: M }) => [
            n("span", $c, L(M), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), _c = /* @__PURE__ */ Y({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = c(() => nt(t.input, i)), d = T(De(
      t.modelValue[t.input.id],
      (f) => t.input.type === "file" ? null : t.input.type === "date" && f instanceof Date ? ml(f) : t.input.type === "time" ? Dn(f) : f
    ));
    At(d, () => {
      t.modelValue[t.input.id] = d.value, l("update:modelValue", t.modelValue);
    });
    const v = c(() => {
      const f = t.modelValue[t.input.id];
      if (t.input.type !== "file" || !f)
        return [];
      if (typeof f == "string")
        return [{ filePath: f, fileName: pt(f, "/") }];
      if (!Array.isArray(f) && typeof f == "object")
        return f;
      if (Array.isArray(f)) {
        const m = [];
        return f.forEach((p) => {
          typeof p == "string" ? m.push({ filePath: p, fileName: pt(p, "/") }) : typeof p == "object" && m.push(p);
        }), m;
      }
    });
    return (f, m) => {
      var j, z, q, Q, $, O, B, D, I, E, K, G, te, A, y, S, le, V, F, ue, ie, ne;
      const p = U("SelectInput"), h = U("CheckboxInput"), g = U("TagInput"), b = U("Combobox"), k = U("FileInput"), M = U("TextareaInput"), P = U("TextInput");
      return s(a) == "select" ? (o(), X(p, Ce({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (H) => d.value = H),
        status: (j = e.api) == null ? void 0 : j.error,
        "input-class": (z = e.input.css) == null ? void 0 : z.input,
        "label-class": (q = e.input.css) == null ? void 0 : q.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : s(a) == "checkbox" ? (o(), X(h, Ce({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = (H) => d.value = H),
        status: (Q = e.api) == null ? void 0 : Q.error,
        "input-class": ($ = e.input.css) == null ? void 0 : $.input,
        "label-class": (O = e.input.css) == null ? void 0 : O.label
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : s(a) == "tag" ? (o(), X(g, Ce({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[2] || (m[2] = (H) => d.value = H),
        status: (B = e.api) == null ? void 0 : B.error,
        "input-class": (D = e.input.css) == null ? void 0 : D.input,
        "label-class": (I = e.input.css) == null ? void 0 : I.label,
        allowableValues: e.input.allowableValues,
        string: ((E = e.input.prop) == null ? void 0 : E.type) == "String"
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : s(a) == "combobox" ? (o(), X(b, Ce({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[3] || (m[3] = (H) => d.value = H),
        status: (K = e.api) == null ? void 0 : K.error,
        "input-class": (G = e.input.css) == null ? void 0 : G.input,
        "label-class": (te = e.input.css) == null ? void 0 : te.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : s(a) == "file" ? (o(), X(k, Ce({
        key: 4,
        id: e.input.id,
        status: (A = e.api) == null ? void 0 : A.error,
        modelValue: d.value,
        "onUpdate:modelValue": m[4] || (m[4] = (H) => d.value = H),
        "input-class": (y = e.input.css) == null ? void 0 : y.input,
        "label-class": (S = e.input.css) == null ? void 0 : S.label,
        files: s(v)
      }, s(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : s(a) == "textarea" ? (o(), X(M, Ce({
        key: 5,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[5] || (m[5] = (H) => d.value = H),
        status: (le = e.api) == null ? void 0 : le.error,
        "input-class": (V = e.input.css) == null ? void 0 : V.input,
        "label-class": (F = e.input.css) == null ? void 0 : F.label
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), X(P, Ce({
        key: 6,
        type: s(a),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[6] || (m[6] = (H) => d.value = H),
        status: (ue = e.api) == null ? void 0 : ue.error,
        "input-class": (ie = e.input.css) == null ? void 0 : ie.input,
        "label-class": (ne = e.input.css) == null ? void 0 : ne.label
      }, s(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), Lc = { class: "lookup-field" }, Vc = ["name", "value"], Mc = {
  key: 0,
  class: "flex justify-between"
}, Sc = ["for"], Ac = {
  key: 0,
  class: "flex items-center"
}, Tc = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, Ic = /* @__PURE__ */ n("span", { class: "sr-only" }, "Clear", -1), Fc = /* @__PURE__ */ n("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Pc = [
  Ic,
  Fc
], Dc = {
  key: 1,
  class: "mt-1 relative"
}, jc = { class: "w-full inline-flex truncate" }, Oc = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, Bc = /* @__PURE__ */ n("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Rc = ["id"], Ec = ["id"], Hc = /* @__PURE__ */ Y({
  __name: "LookupInput",
  props: {
    id: null,
    status: null,
    input: null,
    metadataType: null,
    modelValue: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, { config: a } = wt(), { metadataApi: i } = Ze(), r = c(() => t.id || t.input.id), d = c(() => t.label ?? Ie(Ye(r.value)));
    let v = je("ApiState", void 0);
    const f = je("client"), m = c(() => dt.call({ responseStatus: t.status ?? (v == null ? void 0 : v.error.value) }, r.value)), p = T(""), h = T(""), g = c(() => ce(t.modelValue, r.value)), b = c(() => Ke(t.metadataType).find((z) => z.name.toLowerCase() == r.value.toLowerCase())), k = c(() => {
      var z, q, Q;
      return ((Q = it((q = (z = b.value) == null ? void 0 : z.ref) == null ? void 0 : q.model)) == null ? void 0 : Q.icon) || a.value.tableIcon;
    });
    let M;
    function P(z) {
      if (z) {
        if (M == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        M.openModal({ name: "ModalLookup", ref: z }, (q) => {
          if (console.debug("openModal", p.value, " -> ", q, vt.setRefValue(z, q), z), q) {
            const Q = ce(q, z.refId);
            p.value = vt.setRefValue(z, q) || Q;
            const $ = s(t.modelValue);
            $[r.value] = Q, l("update:modelValue", $);
          }
        });
      }
    }
    function j() {
      t.modelValue[r.value] = null, p.value = "";
    }
    return lt(async () => {
      var D, I;
      M = je("ModalProvider", void 0);
      const z = t.modelValue;
      t.modelValue[r.value] || (t.modelValue[r.value] = null);
      const q = b.value, Q = q == null ? void 0 : q.ref;
      if (!Q) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      p.value = "";
      let $ = Q.selfId == null ? ce(z, q.name) : ce(z, Q.selfId);
      if (Rt($) && ($ = ce(z, Q.refId)), $ == null)
        return;
      if (((D = i.value) == null ? void 0 : D.operations.find((E) => {
        var K;
        return ((K = E.dataModel) == null ? void 0 : K.name) == Q.model;
      })) != null) {
        const E = ce(z, q.name);
        if (Rt(E))
          return;
        if (p.value = `${E}`, h.value = q.name, Q.refLabel != null) {
          const K = Ke(t.metadataType).find((te) => te.type == Q.model);
          K == null && console.warn(`Could not find ${Q.model} Property on ${t.metadataType.name}`);
          const G = K != null ? ce(z, K.name) : null;
          if (G != null) {
            let te = ce(G, Q.refLabel);
            te && (p.value = `${te}`, vt.setValue(Q.model, $, Q.refLabel, te));
          } else {
            const te = ((I = q.attributes) == null ? void 0 : I.some((y) => y.name == "Computed")) == !0;
            let A = await vt.getOrFetchValue(f, i.value, Q.model, Q.refId, Q.refLabel, te, $);
            p.value = A || `${Q.model}: ${p.value}`;
          }
        }
      }
    }), (z, q) => {
      var $;
      const Q = U("Icon");
      return o(), u("div", Lc, [
        n("input", {
          type: "hidden",
          name: s(r),
          value: s(g)
        }, null, 8, Vc),
        s(d) ? (o(), u("div", Mc, [
          n("label", {
            for: s(r),
            class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, L(s(d)), 11, Sc),
          s(g) ? (o(), u("div", Ac, [
            n("span", Tc, L(s(g)), 1),
            n("button", {
              onClick: j,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, Pc)
          ])) : C("", !0)
        ])) : C("", !0),
        ($ = s(b)) != null && $.ref ? (o(), u("div", Dc, [
          n("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: q[0] || (q[0] = (O) => P(s(b).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            n("span", jc, [
              n("span", Oc, [
                fe(Q, {
                  class: "mr-1 w-5 h-5",
                  image: s(k)
                }, null, 8, ["image"]),
                n("span", null, L(p.value), 1)
              ])
            ]),
            Bc
          ])
        ])) : C("", !0),
        s(m) ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${s(r)}-error`
        }, L(s(m)), 9, Rc)) : e.help ? (o(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${s(r)}-description`
        }, L(e.help), 9, Ec)) : C("", !0)
      ]);
    };
  }
}), zc = /* @__PURE__ */ Y({
  __name: "AutoFormFields",
  props: {
    modelValue: null,
    type: null,
    api: null,
    formLayout: null,
    configureField: null,
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e;
    function a(M, P) {
      t.modelValue[M.id] = ce(P, M.id), l("update:modelValue", t.modelValue);
    }
    const { metadataApi: i, apiOf: r, typeOf: d, typeOfRef: v, createFormLayout: f, Crud: m } = Ze(), p = c(() => t.type || Tt(t.modelValue)), h = c(() => d(p.value)), g = c(() => {
      var M, P;
      return v((P = (M = i.value) == null ? void 0 : M.operations.find((j) => j.request.name == p.value)) == null ? void 0 : P.dataModel) || h.value;
    }), b = c(() => {
      const M = h.value;
      if (!M) {
        if (t.formLayout)
          return t.formLayout.map(($) => {
            const O = { name: $.id, type: Xa($.type) }, B = Object.assign({ prop: O }, $);
            return t.configureField && t.configureField(B), B;
          });
        throw new Error(`MetadataType for ${p.value} not found`);
      }
      const P = Ke(M), j = g.value, z = t.formLayout ? t.formLayout : f(M), q = [], Q = r(M.name);
      return z.forEach(($) => {
        var I;
        const O = P.find((E) => E.name == $.name);
        if ($.ignore)
          return;
        const B = ((I = j == null ? void 0 : j.properties) == null ? void 0 : I.find((E) => {
          var K;
          return E.name.toLowerCase() == ((K = $.name) == null ? void 0 : K.toLowerCase());
        })) ?? O, D = Object.assign({ prop: B, op: Q }, $);
        t.configureField && t.configureField(D), q.push(D);
      }), q;
    }), k = c(() => b.value.filter((M) => M.type != "hidden").map((M) => M.id));
    return (M, P) => {
      var Q;
      const j = U("ErrorSummary"), z = U("LookupInput"), q = U("DynamicInput");
      return o(), u(be, null, [
        e.hideSummary ? C("", !0) : (o(), X(j, {
          key: 0,
          status: (Q = e.api) == null ? void 0 : Q.error,
          except: s(k)
        }, null, 8, ["status", "except"])),
        n("div", {
          class: w(e.flexClass)
        }, [
          n("div", {
            class: w(e.divideClass)
          }, [
            n("div", {
              class: w(e.spaceClass)
            }, [
              n("fieldset", {
                class: w(e.fieldsetClass)
              }, [
                (o(!0), u(be, null, $e(s(b), ($) => {
                  var O, B, D;
                  return o(), u("div", {
                    key: "f.id",
                    class: w([
                      "w-full",
                      ((O = $.css) == null ? void 0 : O.field) ?? ($.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + ($.type == "checkbox" ? " flex items-center" : "")),
                      $.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((B = $.prop) == null ? void 0 : B.ref) != null && $.type != "file" && !$.prop.isPrimaryKey ? (o(), X(z, {
                      key: 0,
                      metadataType: s(g),
                      input: $,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (I) => a($, I),
                      status: (D = e.api) == null ? void 0 : D.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), X(q, {
                      key: 1,
                      input: $,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": P[0] || (P[0] = (I) => M.$emit("update:modelValue", I)),
                      api: e.api
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
function yl() {
  const e = T(!1), l = T(), t = T(), a = je("client");
  function i({ message: h, errorCode: g, fieldName: b, errors: k }) {
    return g || (g = "Exception"), k || (k = []), l.value = b ? new Ll({
      errorCode: g,
      message: h,
      errors: [new _n({ fieldName: b, errorCode: g, message: h })]
    }) : new Ll({ errorCode: g, message: h, errors: k });
  }
  function r({ fieldName: h, message: g, errorCode: b }) {
    if (b || (b = "Exception"), !l.value)
      i({ fieldName: h, message: g, errorCode: b });
    else {
      let k = new Ll(l.value);
      k.errors = [
        ...(k.errors || []).filter((M) => {
          var P;
          return ((P = M.fieldName) == null ? void 0 : P.toLowerCase()) !== (h == null ? void 0 : h.toLowerCase());
        }),
        new _n({ fieldName: h, message: g, errorCode: b })
      ], l.value = k;
    }
  }
  async function d(h, g, b) {
    e.value = !0;
    let k = await a.api(kt(h), g, b);
    return e.value = !1, t.value = k.response, l.value = k.error, k;
  }
  async function v(h, g, b) {
    e.value = !0;
    let k = await a.apiVoid(kt(h), g, b);
    return e.value = !1, t.value = k.response, l.value = k.error, k;
  }
  async function f(h, g, b, k) {
    e.value = !0;
    let M = await a.apiForm(kt(h), g, b, k);
    return e.value = !1, t.value = M.response, l.value = M.error, M;
  }
  async function m(h, g, b, k) {
    e.value = !0;
    let M = await a.apiFormVoid(kt(h), g, b, k);
    return e.value = !1, t.value = M.response, l.value = M.error, M;
  }
  let p = { setError: i, addFieldError: r, loading: e, error: l, api: d, apiVoid: v, apiForm: f, apiFormVoid: m, unRefs: kt, setRef: jn };
  return Ut("ApiState", p), p;
}
const Nc = ["onSubmit"], Uc = { key: 0 }, qc = { key: 2 }, Qc = ["innerHTML"], Kc = /* @__PURE__ */ n("input", {
  type: "submit",
  class: "hidden"
}, null, -1), Gc = { class: "flex justify-end" }, Wc = /* @__PURE__ */ n("div", null, null, -1), Zc = /* @__PURE__ */ Y({
  __name: "AutoForm",
  props: {
    type: null,
    modelValue: null,
    heading: null,
    subHeading: null,
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    configureField: null,
    bodyClass: null,
    formClass: { default: "shadow sm:rounded-md" },
    innerFormClass: null,
    headerClass: { default: "p-6" },
    buttonsClass: null,
    headingClass: null,
    subHeadingClass: null,
    submitLabel: { default: "Submit" }
  },
  emits: ["success", "error", "update:modelValue"],
  setup(e, { emit: l }) {
    const t = e;
    Ut("ModalProvider", {
      openModal: d
    });
    const i = T(), r = T();
    function d(I, E) {
      i.value = I, r.value = E;
    }
    async function v(I) {
      r.value && r.value(I), i.value = void 0, r.value = void 0;
    }
    const f = yl(), { getTypeName: m } = Ba(), { typeOf: p, Crud: h, createDto: g } = Ze(), b = T(new Xe()), k = c(() => typeof t.buttonsClass == "string" ? t.formClass : Ue.buttonsClass), M = c(() => typeof t.headingClass == "string" ? t.formClass : ht.headingClass), P = c(() => typeof t.subHeadingClass == "string" ? t.subHeadingClass : ht.subHeadingClass), j = c(() => {
      var I;
      return t.type ? m(t.type) : (I = t.modelValue) != null && I.getTypeName ? t.modelValue.getTypeName() : null;
    }), z = c(() => p(j.value)), q = T(t.modelValue || O()), Q = c(() => f.loading.value), $ = c(() => {
      var I;
      return t.heading || ((I = p(j.value)) == null ? void 0 : I.description) || Ie(j.value);
    });
    function O() {
      return typeof t.type == "string" ? g(t.type) : t.type ? new t.type() : t.modelValue;
    }
    async function B(I) {
      let E = I.target;
      const K = O();
      let G = De(K == null ? void 0 : K.getMethod, (y) => typeof y == "function" ? y() : null) || "POST", te = De(K == null ? void 0 : K.createResponse, (y) => typeof y == "function" ? y() : null) == null;
      const A = t.jsconfig;
      if (Ul.hasRequestBody(G)) {
        let y = new K.constructor(), S = new FormData(E);
        console.debug("AutoForm.submitForm", y, S), te ? b.value = await f.apiFormVoid(y, S, { jsconfig: A }) : b.value = await f.apiForm(y, S, { jsconfig: A });
      } else {
        let y = new K.constructor(q.value);
        console.debug("AutoForm.submit", y), te ? b.value = await f.apiVoid(y, { jsconfig: A }) : b.value = await f.api(y, { jsconfig: A });
      }
      b.value.succeeded ? l("success", b.value.response) : l("error", b.value.error);
    }
    function D(I) {
      l("update:modelValue", I);
    }
    return (I, E) => {
      var y, S, le;
      const K = U("AutoFormFields"), G = U("FormLoading"), te = U("PrimaryButton"), A = U("ModalLookup");
      return s(z) ? (o(), u("form", {
        key: 0,
        onSubmit: Oe(B, ["prevent"]),
        autocomplete: "off",
        class: w(e.formClass)
      }, [
        n("div", {
          class: w(e.innerFormClass)
        }, [
          n("div", {
            class: w(e.bodyClass)
          }, [
            n("div", {
              class: w(e.headerClass)
            }, [
              I.$slots.heading ? (o(), u("div", Uc, [
                Z(I.$slots, "heading")
              ])) : (o(), u("h3", {
                key: 1,
                class: w(s(M))
              }, L(s($)), 3)),
              I.$slots.subheading ? (o(), u("div", qc, [
                Z(I.$slots, "subheading")
              ])) : e.subHeading ? (o(), u("p", {
                key: 3,
                class: w(s(P))
              }, L(e.subHeading), 3)) : (y = s(z)) != null && y.notes ? (o(), u("p", {
                key: 4,
                class: w(["notes", s(P)]),
                innerHTML: (S = s(z)) == null ? void 0 : S.notes
              }, null, 10, Qc)) : C("", !0)
            ], 2),
            Z(I.$slots, "header"),
            Kc,
            fe(K, {
              type: e.type,
              modelValue: q.value,
              "onUpdate:modelValue": D,
              api: b.value,
              configureField: e.configureField
            }, null, 8, ["type", "modelValue", "api", "configureField"]),
            Z(I.$slots, "footer")
          ], 2),
          Z(I.$slots, "buttons", {}, () => [
            n("div", {
              class: w(s(k))
            }, [
              n("div", null, [
                e.showLoading && s(Q) ? (o(), X(G, { key: 0 })) : C("", !0)
              ]),
              n("div", Gc, [
                Wc,
                fe(te, null, {
                  default: ve(() => [
                    he(L(e.submitLabel), 1)
                  ]),
                  _: 1
                })
              ])
            ], 2)
          ])
        ], 2),
        ((le = i.value) == null ? void 0 : le.name) == "ModalLookup" && i.value.ref ? (o(), X(A, {
          key: 0,
          "ref-info": i.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 42, Nc)) : C("", !0);
    };
  }
}), Jc = { key: 0 }, Xc = { class: "text-red-700" }, Yc = /* @__PURE__ */ n("b", null, "type", -1), e0 = ["onSubmit"], t0 = { key: 0 }, l0 = { key: 2 }, n0 = ["innerHTML"], s0 = { class: "flex justify-end" }, a0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, o0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), i0 = { class: "fixed inset-0 overflow-hidden" }, r0 = ["onSubmit"], u0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, d0 = { class: "flex-1" }, c0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, f0 = { class: "flex items-start justify-between space-x-3" }, m0 = { class: "space-y-1" }, v0 = { key: 0 }, h0 = { key: 2 }, g0 = ["innerHTML"], p0 = { class: "flex h-7 items-center" }, y0 = { class: "flex justify-end" }, b0 = /* @__PURE__ */ Y({
  __name: "AutoCreateForm",
  props: {
    type: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    buttonsClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    configureField: null
  },
  emits: ["done", "save", "error"],
  setup(e, { emit: l }) {
    const t = e;
    function a(V) {
    }
    Ut("ModalProvider", {
      openModal: v
    });
    const r = T(), d = T();
    function v(V, F) {
      r.value = V, d.value = F;
    }
    async function f(V) {
      d.value && d.value(V), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, typeProperties: p, Crud: h, createDto: g, formValues: b } = Ze(), k = c(() => Tt(t.type)), M = c(() => m(k.value)), P = T(typeof t.type == "string" ? g(t.type) : t.type ? new t.type() : null), j = c(() => t.panelClass || Ue.panelClass(t.formStyle)), z = c(() => t.formClass || Ue.formClass(t.formStyle)), q = c(() => t.headingClass || Ue.headingClass(t.formStyle)), Q = c(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), $ = c(() => t.buttonsClass || Ue.buttonsClass), O = c(() => h.model(M.value)), B = c(() => {
      var V;
      return t.heading || ((V = m(k.value)) == null ? void 0 : V.description) || (O.value ? `New ${Ie(O.value)}` : Ie(k.value));
    }), D = T(new Xe());
    let I = yl(), E = c(() => I.loading.value);
    async function K(V) {
      var ne, H;
      let F = V.target;
      if (!t.autosave) {
        l("save", new P.value.constructor(b(F, p(M.value))));
        return;
      }
      let ue = De((ne = P.value) == null ? void 0 : ne.getMethod, (J) => typeof J == "function" ? J() : null) || "POST", ie = De((H = P.value) == null ? void 0 : H.createResponse, (J) => typeof J == "function" ? J() : null) == null;
      if (Ul.hasRequestBody(ue)) {
        let J = new P.value.constructor(), pe = new FormData(F);
        ie ? D.value = await I.apiFormVoid(J, pe, { jsconfig: "eccn" }) : D.value = await I.apiForm(J, pe, { jsconfig: "eccn" });
      } else {
        let J = b(F, p(M.value)), pe = new P.value.constructor(J);
        ie ? D.value = await I.apiVoid(pe, { jsconfig: "eccn" }) : D.value = await I.api(pe, { jsconfig: "eccn" });
      }
      D.value.succeeded ? (F.reset(), l("save", D.value.response)) : l("error", D.value.error);
    }
    function G() {
      l("done");
    }
    const te = T(!1), A = T(""), y = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(te, () => {
      Lt(y, A, te.value), te.value || setTimeout(G, 700);
    }), te.value = !0;
    function S() {
      t.formStyle == "slideOver" ? te.value = !1 : G();
    }
    const le = (V) => {
      V.key === "Escape" && S();
    };
    return lt(() => window.addEventListener("keydown", le)), Nt(() => window.removeEventListener("keydown", le)), (V, F) => {
      var _e, se, Pe, Ae, ge;
      const ue = U("AutoFormFields"), ie = U("FormLoading"), ne = U("SecondaryButton"), H = U("PrimaryButton"), J = U("CloseButton"), pe = U("ModalLookup");
      return o(), u("div", null, [
        s(M) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: w(s(j))
        }, [
          n("form", {
            onSubmit: Oe(K, ["prevent"])
          }, [
            n("div", {
              class: w(s(z))
            }, [
              n("div", null, [
                V.$slots.heading ? (o(), u("div", t0, [
                  Z(V.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: w(s(q))
                }, L(s(B)), 3)),
                V.$slots.subheading ? (o(), u("div", l0, [
                  Z(V.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: w(s(Q))
                }, L(e.subHeading), 3)) : (_e = s(M)) != null && _e.notes ? (o(), u("p", {
                  key: 4,
                  class: w(["notes", s(Q)]),
                  innerHTML: (se = s(M)) == null ? void 0 : se.notes
                }, null, 10, n0)) : C("", !0)
              ]),
              Z(V.$slots, "header"),
              fe(ue, {
                modelValue: P.value,
                "onUpdate:modelValue": a,
                api: D.value,
                configureField: e.configureField
              }, null, 8, ["modelValue", "api", "configureField"]),
              Z(V.$slots, "footer")
            ], 2),
            n("div", {
              class: w(s($))
            }, [
              n("div", null, [
                e.showLoading && s(E) ? (o(), X(ie, { key: 0 })) : C("", !0)
              ]),
              n("div", s0, [
                e.showCancel ? (o(), X(ne, {
                  key: 0,
                  onClick: S,
                  disabled: s(E)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : C("", !0),
                fe(H, {
                  type: "submit",
                  class: "ml-4",
                  disabled: s(E)
                }, {
                  default: ve(() => [
                    he("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, e0)
        ], 2)) : (o(), u("div", a0, [
          o0,
          n("div", i0, [
            n("div", {
              onMousedown: S,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: F[0] || (F[0] = Oe(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", A.value])
                }, [
                  n("form", {
                    class: w(s(z)),
                    onSubmit: Oe(K, ["prevent"])
                  }, [
                    n("div", u0, [
                      n("div", d0, [
                        n("div", c0, [
                          n("div", f0, [
                            n("div", m0, [
                              V.$slots.heading ? (o(), u("div", v0, [
                                Z(V.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: w(s(q))
                              }, L(s(B)), 3)),
                              V.$slots.subheading ? (o(), u("div", h0, [
                                Z(V.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: w(s(Q))
                              }, L(e.subHeading), 3)) : (Pe = s(M)) != null && Pe.notes ? (o(), u("p", {
                                key: 4,
                                class: w(["notes", s(Q)]),
                                innerHTML: (Ae = s(M)) == null ? void 0 : Ae.notes
                              }, null, 10, g0)) : C("", !0)
                            ]),
                            n("div", p0, [
                              fe(J, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: S
                              })
                            ])
                          ])
                        ]),
                        Z(V.$slots, "header"),
                        fe(ue, {
                          modelValue: P.value,
                          "onUpdate:modelValue": a,
                          api: D.value,
                          configureField: e.configureField
                        }, null, 8, ["modelValue", "api", "configureField"]),
                        Z(V.$slots, "footer")
                      ])
                    ]),
                    n("div", {
                      class: w(s($))
                    }, [
                      n("div", null, [
                        e.showLoading && s(E) ? (o(), X(ie, { key: 0 })) : C("", !0)
                      ]),
                      n("div", y0, [
                        e.showCancel ? (o(), X(ne, {
                          key: 0,
                          onClick: S,
                          disabled: s(E)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : C("", !0),
                        fe(H, {
                          type: "submit",
                          class: "ml-4",
                          disabled: s(E)
                        }, {
                          default: ve(() => [
                            he("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, r0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", Jc, [
          n("p", Xc, [
            he("Could not create form for unknown "),
            Yc,
            he(" " + L(s(k)), 1)
          ])
        ])),
        ((ge = r.value) == null ? void 0 : ge.name) == "ModalLookup" && r.value.ref ? (o(), X(pe, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: f
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), w0 = { key: 0 }, x0 = { class: "text-red-700" }, k0 = /* @__PURE__ */ n("b", null, "type", -1), $0 = ["onSubmit"], C0 = { key: 0 }, _0 = { key: 2 }, L0 = ["innerHTML"], V0 = { class: "flex justify-end" }, M0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, S0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), A0 = { class: "fixed inset-0 overflow-hidden" }, T0 = ["onSubmit"], I0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, F0 = { class: "flex-1" }, P0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, D0 = { class: "flex items-start justify-between space-x-3" }, j0 = { class: "space-y-1" }, O0 = { key: 0 }, B0 = { key: 2 }, R0 = ["innerHTML"], E0 = { class: "flex h-7 items-center" }, H0 = { class: "flex justify-end" }, z0 = /* @__PURE__ */ Y({
  __name: "AutoEditForm",
  props: {
    modelValue: null,
    type: null,
    deleteType: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    configureField: null
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { emit: l }) {
    const t = e;
    function a(H) {
    }
    Ut("ModalProvider", {
      openModal: v
    });
    const r = T(), d = T();
    function v(H, J) {
      r.value = H, d.value = J;
    }
    async function f(H) {
      d.value && d.value(H), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, apiOf: p, typeProperties: h, createFormLayout: g, getPrimaryKey: b, Crud: k, createDto: M, formValues: P } = Ze(), j = c(() => Tt(t.type)), z = c(() => m(j.value)), q = T(typeof t.type == "string" ? M(t.type, ll(t.modelValue)) : t.type ? new t.type(ll(t.modelValue)) : null), Q = c(() => t.panelClass || Ue.panelClass(t.formStyle)), $ = c(() => t.formClass || Ue.formClass(t.formStyle)), O = c(() => t.headingClass || Ue.headingClass(t.formStyle)), B = c(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), D = c(() => k.model(z.value)), I = c(() => {
      var H;
      return t.heading || ((H = m(j.value)) == null ? void 0 : H.description) || (D.value ? `Update ${Ie(D.value)}` : Ie(j.value));
    }), E = T(new Xe());
    let K = yl(), G = c(() => K.loading.value);
    const te = () => De(m(k.model(z.value)), (H) => b(H));
    function A(H) {
      const { op: J, prop: pe } = H;
      J && (k.isPatch(J) || k.isUpdate(J)) && (H.disabled = pe == null ? void 0 : pe.isPrimaryKey), t.configureField && t.configureField(H);
    }
    async function y(H) {
      var Pe, Ae;
      let J = H.target;
      if (!t.autosave) {
        l("save", new q.value.constructor(P(J, h(z.value))));
        return;
      }
      let pe = De((Pe = q.value) == null ? void 0 : Pe.getMethod, (ge) => typeof ge == "function" ? ge() : null) || "POST", _e = De((Ae = q.value) == null ? void 0 : Ae.createResponse, (ge) => typeof ge == "function" ? ge() : null) == null, se = te();
      if (Ul.hasRequestBody(pe)) {
        let ge = new q.value.constructor(), Re = ce(t.modelValue, se.name), Me = new FormData(J);
        se && !Array.from(Me.keys()).some((R) => R.toLowerCase() == se.name.toLowerCase()) && Me.append(se.name, Re);
        let ze = [];
        const Je = j.value && p(j.value);
        if (Je && k.isPatch(Je)) {
          let R = ll(t.modelValue), N = g(z.value), re = {};
          if (se && (re[se.name] = Re), N.forEach((we) => {
            let Fe = we.id, qe = ce(R, Fe);
            if (se && se.name.toLowerCase() === Fe.toLowerCase())
              return;
            let ke = Me.get(Fe), Ee = ke != null, Qe = we.type === "checkbox" ? Ee !== !!qe : we.type === "file" ? Ee : ke != qe;
            !ke && !qe && (Qe = !1), Qe && (ke ? re[Fe] = ke : we.type !== "file" && ze.push(Fe));
          }), Array.from(Me.keys()).filter((we) => !re[we]).forEach((we) => Me.delete(we)), Array.from(Me.keys()).filter((we) => we.toLowerCase() != se.name.toLowerCase()).length == 0 && ze.length == 0) {
            ie();
            return;
          }
        }
        const Ne = ze.length > 0 ? { jsconfig: "eccn", reset: ze } : { jsconfig: "eccn" };
        _e ? E.value = await K.apiFormVoid(ge, Me, Ne) : E.value = await K.apiForm(ge, Me, Ne);
      } else {
        let ge = P(J, h(z.value));
        se && !ce(ge, se.name) && (ge[se.name] = ce(t.modelValue, se.name));
        let Re = new q.value.constructor(ge);
        _e ? E.value = await K.apiVoid(Re, { jsconfig: "eccn" }) : E.value = await K.api(Re, { jsconfig: "eccn" });
      }
      E.value.succeeded ? (J.reset(), l("save", E.value.response)) : l("error", E.value.error);
    }
    async function S(H) {
      let J = te();
      const pe = J ? ce(t.modelValue, J.name) : null;
      if (!pe) {
        console.error(`Could not find Primary Key for Type ${j.value} (${D.value})`);
        return;
      }
      const _e = { [J.name]: pe }, se = typeof t.deleteType == "string" ? M(t.deleteType, _e) : t.deleteType ? new t.deleteType(_e) : null;
      De(se.createResponse, (Ae) => typeof Ae == "function" ? Ae() : null) == null ? E.value = await K.apiVoid(se) : E.value = await K.api(se), E.value.succeeded ? l("delete", E.value.response) : l("error", E.value.error);
    }
    function le() {
      l("done");
    }
    const V = T(!1), F = T(""), ue = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(V, () => {
      Lt(ue, F, V.value), V.value || setTimeout(le, 700);
    }), V.value = !0;
    function ie() {
      t.formStyle == "slideOver" ? V.value = !1 : le();
    }
    const ne = (H) => {
      H.key === "Escape" && ie();
    };
    return lt(() => window.addEventListener("keydown", ne)), Nt(() => window.removeEventListener("keydown", ne)), (H, J) => {
      var Me, ze, Je, Ne, R;
      const pe = U("AutoFormFields"), _e = U("ConfirmDelete"), se = U("FormLoading"), Pe = U("SecondaryButton"), Ae = U("PrimaryButton"), ge = U("CloseButton"), Re = U("ModalLookup");
      return o(), u("div", null, [
        s(z) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: w(s(Q))
        }, [
          n("form", {
            onSubmit: Oe(y, ["prevent"])
          }, [
            n("div", {
              class: w(s($))
            }, [
              n("div", null, [
                H.$slots.heading ? (o(), u("div", C0, [
                  Z(H.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: w(s(O))
                }, L(s(I)), 3)),
                H.$slots.subheading ? (o(), u("div", _0, [
                  Z(H.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: w(s(B))
                }, L(e.subHeading), 3)) : (Me = s(z)) != null && Me.notes ? (o(), u("p", {
                  key: 4,
                  class: w(["notes", s(B)]),
                  innerHTML: (ze = s(z)) == null ? void 0 : ze.notes
                }, null, 10, L0)) : C("", !0)
              ]),
              Z(H.$slots, "header"),
              fe(pe, {
                modelValue: q.value,
                "onUpdate:modelValue": a,
                api: E.value,
                configureField: e.configureField
              }, null, 8, ["modelValue", "api", "configureField"]),
              Z(H.$slots, "footer")
            ], 2),
            n("div", {
              class: w(s(Ue).buttonsClass)
            }, [
              n("div", null, [
                e.deleteType ? (o(), X(_e, {
                  key: 0,
                  onDelete: S
                })) : C("", !0)
              ]),
              n("div", null, [
                e.showLoading && s(G) ? (o(), X(se, { key: 0 })) : C("", !0)
              ]),
              n("div", V0, [
                fe(Pe, {
                  onClick: ie,
                  disabled: s(G)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                fe(Ae, {
                  type: "submit",
                  class: "ml-4",
                  disabled: s(G)
                }, {
                  default: ve(() => [
                    he("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, $0)
        ], 2)) : (o(), u("div", M0, [
          S0,
          n("div", A0, [
            n("div", {
              onMousedown: ie,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: J[0] || (J[0] = Oe(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", F.value])
                }, [
                  n("form", {
                    class: w(s($)),
                    onSubmit: Oe(y, ["prevent"])
                  }, [
                    n("div", I0, [
                      n("div", F0, [
                        n("div", P0, [
                          n("div", D0, [
                            n("div", j0, [
                              H.$slots.heading ? (o(), u("div", O0, [
                                Z(H.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: w(s(O))
                              }, L(s(I)), 3)),
                              H.$slots.subheading ? (o(), u("div", B0, [
                                Z(H.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: w(s(B))
                              }, L(e.subHeading), 3)) : (Je = s(z)) != null && Je.notes ? (o(), u("p", {
                                key: 4,
                                class: w(["notes", s(B)]),
                                innerHTML: (Ne = s(z)) == null ? void 0 : Ne.notes
                              }, null, 10, R0)) : C("", !0)
                            ]),
                            n("div", E0, [
                              fe(ge, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ie
                              })
                            ])
                          ])
                        ]),
                        Z(H.$slots, "header"),
                        fe(pe, {
                          modelValue: q.value,
                          "onUpdate:modelValue": a,
                          api: E.value,
                          configureField: A
                        }, null, 8, ["modelValue", "api"]),
                        Z(H.$slots, "footer")
                      ])
                    ]),
                    n("div", {
                      class: w(s(Ue).buttonsClass)
                    }, [
                      n("div", null, [
                        e.deleteType ? (o(), X(_e, {
                          key: 0,
                          onDelete: S
                        })) : C("", !0)
                      ]),
                      n("div", null, [
                        e.showLoading && s(G) ? (o(), X(se, { key: 0 })) : C("", !0)
                      ]),
                      n("div", H0, [
                        fe(Pe, {
                          onClick: ie,
                          disabled: s(G)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        fe(Ae, {
                          type: "submit",
                          class: "ml-4",
                          disabled: s(G)
                        }, {
                          default: ve(() => [
                            he("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, T0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", w0, [
          n("p", x0, [
            he("Could not create form for unknown "),
            k0,
            he(" " + L(s(j)), 1)
          ])
        ])),
        ((R = r.value) == null ? void 0 : R.name) == "ModalLookup" && r.value.ref ? (o(), X(Re, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: f
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), N0 = /* @__PURE__ */ n("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), U0 = ["onClick"], q0 = /* @__PURE__ */ Y({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: l }) {
    let t = T(!1);
    const a = () => {
      t.value && l("delete");
    }, i = c(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      t.value ? "cursor-pointer bg-red-600 dark:bg-red-300 hover:bg-red-700 dark:hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400 dark:bg-red-500"
    ]);
    return (r, d) => (o(), u(be, null, [
      gt(n("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (v) => An(t) ? t.value = v : t = v)
      }, null, 512), [
        [Hl, s(t)]
      ]),
      N0,
      n("span", Ce({
        onClick: Oe(a, ["prevent"]),
        class: s(i)
      }, r.$attrs), [
        Z(r.$slots, "default", {}, () => [
          he("Delete")
        ])
      ], 16, U0)
    ], 64));
  }
}), Q0 = {
  class: "flex",
  title: "loading..."
}, K0 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, G0 = /* @__PURE__ */ dl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), W0 = [
  G0
], Z0 = { class: "ml-2 mt-1 text-gray-400" }, J0 = /* @__PURE__ */ Y({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return je("ApiState", void 0), (l, t) => (o(), u("div", Q0, [
      e.icon ? (o(), u("svg", K0, W0)) : C("", !0),
      n("span", Z0, L(e.text), 1)
    ]));
  }
}), X0 = ["onClick"], Y0 = {
  key: 3,
  class: "flex justify-between items-center"
}, ef = { class: "mr-1 select-none" }, tf = ["onClick"], lf = /* @__PURE__ */ Y({
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    type: null,
    tableStyle: { default: "stripedRows" },
    selectedColumns: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    isSelected: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { emit: l }) {
    const t = e, a = T(), i = T(null), r = (V) => i.value === V, d = zl(), v = (V) => Object.keys(d).find((F) => F.toLowerCase() == V.toLowerCase() + "-header"), f = (V) => Object.keys(d).find((F) => F.toLowerCase() == V.toLowerCase()), m = c(() => Il(t.items).filter((V) => !!(d[V] || d[V + "-header"]))), { typeOf: p, typeProperties: h } = Ze(), g = c(() => Tt(t.type)), b = c(() => p(g.value)), k = c(() => h(b.value));
    function M(V) {
      const F = t.headerTitles && ce(t.headerTitles, V) || V;
      return t.headerTitle ? t.headerTitle(F) : Fn(F);
    }
    function P(V) {
      const F = V.toLowerCase();
      return k.value.find((ue) => ue.name.toLowerCase() == F);
    }
    function j(V) {
      const F = P(V);
      return F != null && F.format ? F.format : (F == null ? void 0 : F.type) == "TimeSpan" || (F == null ? void 0 : F.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const z = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell"
    };
    function q(V) {
      const F = t.visibleFrom && ce(t.visibleFrom, V);
      return F && De(z[F], (ue) => `hidden ${ue}`);
    }
    const Q = c(() => t.gridClass ?? ae.getGridClass(t.tableStyle)), $ = c(() => t.grid2Class ?? ae.getGrid2Class(t.tableStyle)), O = c(() => t.grid3Class ?? ae.getGrid3Class(t.tableStyle)), B = c(() => t.grid4Class ?? ae.getGrid4Class(t.tableStyle)), D = c(() => t.tableClass ?? ae.getTableClass(t.tableStyle)), I = c(() => t.tbodyClass ?? ae.getTbodyClass(t.tbodyClass)), E = c(() => t.theadClass ?? ae.getTheadClass(t.tableStyle)), K = c(() => t.theadRowClass ?? ae.getTheadRowClass(t.tableStyle)), G = c(() => t.theadCellClass ?? ae.getTheadCellClass(t.tableStyle));
    function te(V, F) {
      return t.rowClass ? t.rowClass(V, F) : ae.getTableRowClass(t.tableStyle, F, !!(t.isSelected && t.isSelected(V)), t.isSelected != null);
    }
    function A(V, F) {
      return t.rowStyle ? t.rowStyle(V, F) : void 0;
    }
    const y = c(() => {
      const V = (typeof t.selectedColumns == "string" ? t.selectedColumns.split(",") : t.selectedColumns) || (m.value.length > 0 ? m.value : Il(t.items)), F = k.value.reduce((ue, ie) => (ue[ie.name.toLowerCase()] = ie.format, ue), {});
      return V.filter((ue) => {
        var ie;
        return ((ie = F[ue.toLowerCase()]) == null ? void 0 : ie.method) != "hidden";
      });
    });
    function S(V, F) {
      l("headerSelected", F, V);
    }
    function le(V, F, ue) {
      l("rowSelected", ue, V);
    }
    return (V, F) => {
      const ue = U("CellFormat"), ie = U("PreviewFormat");
      return e.items.length ? (o(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: w(s(Q))
      }, [
        n("div", {
          class: w(s($))
        }, [
          n("div", {
            class: w(s(O))
          }, [
            n("div", {
              class: w(s(B))
            }, [
              n("table", {
                class: w(s(D))
              }, [
                n("thead", {
                  class: w(s(E))
                }, [
                  n("tr", {
                    class: w(s(K))
                  }, [
                    (o(!0), u(be, null, $e(s(y), (ne) => (o(), u("td", {
                      class: w([q(ne), s(G), r(ne) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      n("div", {
                        onClick: (H) => S(H, ne)
                      }, [
                        s(d)[ne + "-header"] ? Z(V.$slots, ne + "-header", {
                          key: 0,
                          column: ne
                        }) : v(ne) ? Z(V.$slots, v(ne), {
                          key: 1,
                          column: ne
                        }) : s(d).header ? Z(V.$slots, "header", {
                          key: 2,
                          column: ne,
                          label: M(ne)
                        }) : (o(), u("div", Y0, [
                          n("span", ef, L(M(ne)), 1)
                        ]))
                      ], 8, X0)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                n("tbody", {
                  class: w(s(I))
                }, [
                  (o(!0), u(be, null, $e(e.items, (ne, H) => (o(), u("tr", {
                    class: w(te(ne, H)),
                    style: El(A(ne, H)),
                    onClick: (J) => le(J, H, ne)
                  }, [
                    (o(!0), u(be, null, $e(s(y), (J) => (o(), u("td", {
                      class: w([q(J), s(ae).tableCellClass])
                    }, [
                      s(d)[J] ? Z(V.$slots, J, _t(Ce({ key: 0 }, ne))) : f(J) ? Z(V.$slots, f(J), _t(Ce({ key: 1 }, ne))) : P(J) ? (o(), X(ue, {
                        key: 2,
                        type: s(b),
                        propType: P(J),
                        modelValue: ne
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), X(ie, {
                        key: 3,
                        value: s(ce)(ne, J),
                        format: j(J)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, tf))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : C("", !0);
    };
  }
});
let Rl = () => new Date().getTime(), nf = ["/", "T", ":", "-"], tt = {
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
}, sf = new Intl.RelativeTimeFormat(tt.locale, {}), Sn = 24 * 60 * 60 * 1e3 * 365, Vl = {
  year: Sn,
  month: Sn / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, $t = {
  currency: as,
  bytes: os,
  link: is,
  linkTel: rs,
  linkMailTo: us,
  icon: ds,
  iconRounded: cs,
  attachment: fs,
  hidden: ms,
  time: vs,
  relativeTime: cn,
  relativeTimeFromMs: bl,
  formatDate: It,
  formatNumber: dn
};
"iconOnError" in globalThis || (globalThis.iconOnError = hl);
class Be {
}
ye(Be, "currency", { method: "currency" }), ye(Be, "bytes", { method: "bytes" }), ye(Be, "link", { method: "link" }), ye(Be, "linkTel", { method: "linkTel" }), ye(Be, "linkMailTo", { method: "linkMailTo" }), ye(Be, "icon", { method: "icon" }), ye(Be, "iconRounded", { method: "iconRounded" }), ye(Be, "attachment", { method: "attachment" }), ye(Be, "time", { method: "time" }), ye(Be, "relativeTime", { method: "relativeTime" }), ye(Be, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), ye(Be, "date", { method: "formatDate" }), ye(Be, "number", { method: "formatNumber" }), ye(Be, "hidden", { method: "hidden" });
function af(e) {
  tt = Object.assign({}, tt, e);
}
function of(e) {
  Object.keys(e || {}).forEach((l) => {
    typeof e[l] == "function" && ($t[l] = e[l]);
  });
}
function Kt(e, l) {
  return l ? et("span", e, l) : e;
}
function as(e, l) {
  const t = nt(l, ["currency"]);
  return Kt(new Intl.NumberFormat(void 0, { style: "currency", currency: (l == null ? void 0 : l.currency) || "USD" }).format(e), t);
}
function os(e, l) {
  return Kt(Xl(e), l);
}
function is(e, l) {
  return et("a", e, vl({ ...l, href: e }));
}
function rs(e, l) {
  return et("a", e, vl({ ...l, href: `tel:${e}` }));
}
function us(e, l) {
  l || (l = {});
  let { subject: t, body: a } = l, i = nt(l, ["subject", "body"]), r = {};
  return t && (r.subject = t), a && (r.body = a), et("a", e, vl({ ...i, href: `mailto:${al(e, r)}` }));
}
function ds(e, l) {
  return et("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function cs(e, l) {
  return et("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function fs(e, l) {
  let t = Wl(e), i = qt(t) == null || Jl(e) ? Ct(e) : Yl(e);
  const r = Ct(i);
  let d = l && (l["icon-class"] || l.iconClass), v = et("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), f = `<span class="pl-1">${t}</span>`;
  return et("a", v + f, Object.assign({ class: "flex", href: Ct(e), title: e }, l ? nt(l, ["icon-class", "iconClass"]) : null));
}
function ms(e) {
  return "";
}
function vs(e, l) {
  let t = typeof e == "string" ? new Date(Pn(e) * 1e3) : fl(e) ? bt(e) : null;
  return Kt(t ? Xs(t) : e, l);
}
function It(e, l) {
  if (e == null)
    return "";
  let t = typeof e == "number" ? new Date(e) : typeof e == "string" ? bt(e) : e;
  if (!fl(t))
    return console.warn(`${t} is not a Date value`), e == null ? "" : `${e}`;
  let a = tt.date ? wl(tt.date) : null;
  return Kt(typeof a == "function" ? a(t) : Tn(t), l);
}
function dn(e, l) {
  if (typeof e != "number")
    return e;
  let t = tt.number ? wl(tt.number) : null, a = typeof t == "function" ? t(e) : `${e}`;
  return a === "" && (console.warn(`formatNumber(${e}) => ${a}`, t), a = `${e}`), Kt(a, l);
}
function hs(e, l, t) {
  let a = Ys(e), i = l ? wl(l) : null;
  if (typeof i == "function") {
    let d = t;
    if (l != null && l.options)
      try {
        d = Ql(l.options, t);
      } catch (v) {
        console.error(`Could not evaluate '${l.options}'`, v, ", with scope:", t);
      }
    return i(e, d);
  }
  let r = a != null ? fl(a) ? It(a, t) : typeof a == "number" ? dn(a, t) : a : null;
  return r ?? "";
}
function zt(e, l, t) {
  return yt(e) ? hs(e, l, t) : ff(e, l, t);
}
function rf(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (fl(e))
    return e.getTime() - Rl();
  if (typeof e == "string") {
    let l = Number(e);
    if (!isNaN(l))
      return l;
    if (e[0] === "P" || e.startsWith("-P"))
      return Pn(e) * 1e3 * -1;
    if (ea(e, nf) >= 0)
      return bt(e).getTime() - Rl();
  }
  return NaN;
}
function bl(e, l) {
  for (let t in Vl)
    if (Math.abs(e) > Vl[t] || t === "second")
      return (l || sf).format(Math.round(e / Vl[t]), t);
}
function cn(e, l) {
  let t = rf(e);
  return isNaN(t) ? "" : bl(t, l);
}
function uf(e, l) {
  return bl(e.getTime() - (l ? l.getTime() : Rl()));
}
function wl(e) {
  if (!e)
    return null;
  let { method: l, options: t } = e, a = `${l}(${t})`, i = $t[a] || $t[l];
  if (typeof i == "function")
    return i;
  let r = e.locale || tt.locale;
  if (l.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", v = `return new ${l}(${d},${t || "undefined"})`;
    try {
      let f = Function(v)();
      return i = l === "Intl.DateTimeFormat" ? (m) => f.format(bt(m)) : l === "Intl.NumberFormat" ? (m) => f.format(Number(m)) : l === "Intl.RelativeTimeFormat" ? (m) => cn(m, f) : (m) => f.format(m), $t[a] = i;
    } catch (f) {
      console.error(`Invalid format: ${v}`, f);
    }
  } else {
    let d = globalThis[l];
    if (typeof d == "function") {
      let v = t != null ? Function("return " + t)() : void 0;
      return i = (f) => d(f, v, r), $t[a] = i;
    }
    console.error(`No '${l}' function exists`, Object.keys($t));
  }
  return null;
}
function gs(e, l) {
  return e ? e.length > l ? e.substring(0, l) + "..." : e : "";
}
function ps(e) {
  return e.substring(0, 6) === "/Date(" ? It(bt(e)) : e;
}
function df(e) {
  return fn(St(e)).replace(/"/g, "");
}
function ys(e) {
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
function fn(e, l = 4) {
  return e = ys(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, l);
}
function cf(e) {
  return e = ys(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = St(e), fn(e));
}
function St(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return ps(e);
  if (yt(e))
    return e;
  if (e instanceof Date)
    return It(e);
  if (Array.isArray(e))
    return e.map(St);
  if (typeof e == "object") {
    let l = {};
    return Object.keys(e).forEach((t) => {
      t != "__type" && (l[t] = St(e[t]));
    }), l;
  }
  return e;
}
function ff(e, l, t) {
  let a = e;
  if (Array.isArray(e)) {
    if (yt(e[0]))
      return a.join(",");
    e[0] != null && (a = e[0]);
  }
  if (a == null)
    return "";
  if (a instanceof Date)
    return It(a, t);
  let i = Object.keys(a), r = [];
  for (let d = 0; d < Math.min(tt.maxNestedFields, i.length); d++) {
    let v = i[d], f = `${St(a[v])}`;
    r.push(`<b class="font-medium">${v}</b>: ${Al(gs(ps(f), tt.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), et("span", "{ " + r.join(", ") + " }", Object.assign({ title: Al(df(e)) }, t));
}
function Im() {
  return {
    Formats: Be,
    setDefaultFormats: af,
    setFormatters: of,
    formatValue: zt,
    formatter: wl,
    dateInputFormat: ml,
    currency: as,
    bytes: os,
    link: is,
    linkTel: rs,
    linkMailTo: us,
    icon: ds,
    iconRounded: cs,
    attachment: fs,
    hidden: ms,
    time: vs,
    relativeTime: cn,
    relativeTimeFromDate: uf,
    relativeTimeFromMs: bl,
    formatDate: It,
    formatNumber: dn,
    indentJson: fn,
    prettyJson: cf,
    scrub: St,
    truncate: gs,
    apiValueFmt: hs,
    iconOnError: hl
  };
}
const mf = Y({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: l }) {
    const { typeOf: t } = Ze();
    function a(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var j;
      const i = a(e.propType), r = ce(e.modelValue, e.propType.name), d = Object.assign({}, e, l), v = ft("span", { innerHTML: zt(r, i, d) }), f = Rt(r) && Array.isArray(r) ? ft("span", {}, [
        ft("span", { class: "mr-2" }, `${r.length}`),
        v
      ]) : v, m = (j = e.propType) == null ? void 0 : j.ref;
      if (!m)
        return f;
      const h = Ke(e.type).find((z) => z.type === m.model);
      if (!h)
        return f;
      const g = ce(e.modelValue, h.name), b = g && m.refLabel && ce(g, m.refLabel);
      if (!b)
        return f;
      const k = t(m.model), M = k == null ? void 0 : k.icon, P = M ? ft(ts, { image: M, class: "w-5 h-5 mr-1" }) : null;
      return ft("span", { class: "flex", title: `${m.model} ${r}` }, [
        P,
        b
      ]);
    };
  }
}), vf = { key: 0 }, hf = {
  key: 0,
  class: "mr-2"
}, gf = ["innerHTML"], pf = ["innerHTML"], yf = {
  inheritAttrs: !1
}, bf = /* @__PURE__ */ Y({
  ...yf,
  __name: "PreviewFormat",
  props: {
    value: null,
    format: null,
    includeIcon: { type: Boolean, default: !0 },
    includeCount: { type: Boolean, default: !0 },
    maxFieldLength: { default: 150 },
    maxNestedFields: { default: 2 },
    maxNestedFieldLength: { default: 30 }
  },
  setup(e) {
    const l = e, t = c(() => Array.isArray(l.value));
    return (a, i) => s(Rt)(e.value) ? (o(), u("span", vf, [
      e.includeCount && s(t) ? (o(), u("span", hf, L(e.value.length), 1)) : C("", !0),
      n("span", {
        innerHTML: s(zt)(e.value, e.format, a.$attrs)
      }, null, 8, gf)
    ])) : (o(), u("span", {
      key: 1,
      innerHTML: s(zt)(e.value, e.format, a.$attrs)
    }, null, 8, pf));
  }
}), wf = ["innerHTML"], xf = { key: 0 }, kf = /* @__PURE__ */ n("b", null, null, -1), $f = { key: 2 }, Cf = /* @__PURE__ */ Y({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, l, t, a, i) => a }
  },
  setup(e) {
    const l = e, t = c(() => yt(l.value)), a = c(() => Array.isArray(l.value)), i = (f) => Fn(f), r = (f) => l.fieldAttrs ? l.fieldAttrs(f) : null, d = c(() => Il(l.value)), v = (f) => f ? Object.keys(f).map((m) => ({ key: i(m), val: f[m] })) : [];
    return (f, m) => {
      const p = U("HtmlFormat", !0);
      return o(), u("div", {
        class: w(e.depth == 0 ? "prose html-format" : "")
      }, [
        s(t) ? (o(), u("div", {
          key: 0,
          innerHTML: s(zt)(e.value)
        }, null, 8, wf)) : s(a) ? (o(), u("div", {
          key: 1,
          class: w(e.classes("array", "div", e.depth, s(ae).gridClass))
        }, [
          s(yt)(e.value[0]) ? (o(), u("div", xf, "[ " + L(e.value.join(", ")) + " ]", 1)) : (o(), u("div", {
            key: 1,
            class: w(e.classes("array", "div", e.depth, s(ae).grid2Class))
          }, [
            n("div", {
              class: w(e.classes("array", "div", e.depth, s(ae).grid3Class))
            }, [
              n("div", {
                class: w(e.classes("array", "div", e.depth, s(ae).grid4Class))
              }, [
                n("table", {
                  class: w(e.classes("object", "table", e.depth, s(ae).tableClass))
                }, [
                  n("thead", {
                    class: w(e.classes("array", "thead", e.depth, s(ae).theadClass))
                  }, [
                    n("tr", null, [
                      (o(!0), u(be, null, $e(s(d), (h) => (o(), u("th", {
                        class: w(e.classes("array", "th", e.depth, s(ae).theadCellClass + " whitespace-nowrap"))
                      }, [
                        kf,
                        he(L(i(h)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  n("tbody", null, [
                    (o(!0), u(be, null, $e(e.value, (h, g) => (o(), u("tr", {
                      class: w(e.classes("array", "tr", e.depth, g % 2 == 0 ? "bg-white" : "bg-gray-50", g))
                    }, [
                      (o(!0), u(be, null, $e(s(d), (b) => (o(), u("td", {
                        class: w(e.classes("array", "td", e.depth, s(ae).tableCellClass))
                      }, [
                        fe(p, Ce({
                          value: h[b],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes
                        }, r(b)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (o(), u("div", $f, [
          n("table", {
            class: w(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (o(!0), u(be, null, $e(v(e.value), (h) => (o(), u("tr", {
              class: w(e.classes("object", "tr", e.depth, ""))
            }, [
              n("th", {
                class: w(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, L(h.key), 3),
              n("td", {
                class: w(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                fe(p, Ce({
                  value: h.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(h.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), _f = { class: "absolute top-0 right-0 pt-4 pr-4" }, Lf = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), Vf = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Mf = [
  Lf,
  Vf
], Sf = /* @__PURE__ */ Y({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    return (t, a) => (o(), u("div", _f, [
      n("button", {
        type: "button",
        onClick: a[0] || (a[0] = (i) => t.$emit("close")),
        class: w([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, Mf, 2)
    ]));
  }
}), Af = ["id", "aria-labelledby"], Tf = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), If = { class: "fixed inset-0 overflow-hidden" }, Ff = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, Pf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Df = { class: "flex-1" }, jf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Of = { class: "flex items-start justify-between space-x-3" }, Bf = { class: "space-y-1" }, Rf = ["id"], Ef = {
  key: 1,
  class: "text-sm text-gray-500"
}, Hf = { class: "flex h-7 items-center" }, zf = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, Nf = /* @__PURE__ */ Y({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = T(!1), a = T(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(t, () => {
      Lt(i, a, t.value), t.value || setTimeout(() => l("done"), 700);
    }), t.value = !0;
    const r = () => t.value = !1, d = (v) => {
      v.key === "Escape" && r();
    };
    return lt(() => window.addEventListener("keydown", d)), Nt(() => window.removeEventListener("keydown", d)), (v, f) => {
      const m = U("CloseButton");
      return o(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        Tf,
        n("div", If, [
          n("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            n("div", {
              onMousedown: f[0] || (f[0] = Oe(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              n("div", {
                class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                n("div", Ff, [
                  n("div", Pf, [
                    n("div", Df, [
                      n("div", jf, [
                        n("div", Of, [
                          n("div", Bf, [
                            e.title ? (o(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, L(e.title), 9, Rf)) : C("", !0),
                            v.$slots.subtitle ? (o(), u("p", Ef, [
                              Z(v.$slots, "subtitle")
                            ])) : C("", !0)
                          ]),
                          n("div", Hf, [
                            fe(m, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      n("div", {
                        class: w(e.contentClass)
                      }, [
                        Z(v.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  n("div", zf, [
                    Z(v.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Af);
    };
  }
}), Uf = ["id", "data-transition-for", "aria-labelledby"], qf = { class: "fixed inset-0 z-10 overflow-y-auto" }, Qf = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Kf = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), Gf = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Wf = [
  Kf,
  Gf
], Zf = /* @__PURE__ */ Y({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    sizeClass: { default: ls.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = T(!1), a = T(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = T(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    At(t, () => {
      Lt(i, a, t.value), Lt(d, r, t.value), t.value || setTimeout(() => l("done"), 200);
    }), t.value = !0;
    const v = () => t.value = !1;
    Ut("ModalProvider", {
      openModal: h
    });
    const m = T(), p = T();
    function h(k, M) {
      m.value = k, p.value = M;
    }
    async function g(k) {
      p.value && p.value(k), m.value = void 0, p.value = void 0;
    }
    const b = (k) => {
      k.key === "Escape" && v();
    };
    return lt(() => window.addEventListener("keydown", b)), Nt(() => window.removeEventListener("keydown", b)), (k, M) => {
      var j;
      const P = U("ModalLookup");
      return o(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: v,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        n("div", {
          class: w(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", a.value])
        }, null, 2),
        n("div", qf, [
          n("div", Qf, [
            n("div", {
              class: w(["relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8", e.sizeClass, r.value]),
              onMousedown: M[0] || (M[0] = Oe(() => {
              }, ["stop"]))
            }, [
              n("div", null, [
                n("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  n("button", {
                    type: "button",
                    onClick: v,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, Wf)
                ]),
                Z(k.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((j = m.value) == null ? void 0 : j.name) == "ModalLookup" && m.value.ref ? (o(), X(P, {
          key: 0,
          "ref-info": m.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 40, Uf);
    };
  }
}), Jf = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, Xf = { class: "mt-3 pl-5 flex flex-wrap items-center" }, Yf = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, e1 = { class: "hidden md:inline" }, t1 = { class: "flex pb-1 sm:pb-0" }, l1 = ["title"], n1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ n("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), s1 = [
  n1
], a1 = ["disabled"], o1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), i1 = [
  o1
], r1 = ["disabled"], u1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), d1 = [
  u1
], c1 = ["disabled"], f1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), m1 = [
  f1
], v1 = ["disabled"], h1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), g1 = [
  h1
], p1 = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, y1 = { class: "px-4 text-lg text-black dark:text-white" }, b1 = { key: 0 }, w1 = { key: 1 }, x1 = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), k1 = { key: 2 }, $1 = {
  key: 1,
  class: "pl-2"
}, C1 = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), _1 = [
  C1
], L1 = { class: "flex pb-1 sm:pb-0" }, V1 = {
  key: 0,
  class: "pl-2"
}, M1 = /* @__PURE__ */ n("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), S1 = { class: "mr-1" }, A1 = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, T1 = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), I1 = [
  T1
], F1 = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, P1 = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), D1 = [
  P1
], j1 = { key: 1 }, O1 = { key: 4 }, B1 = { key: 0 }, R1 = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, E1 = { class: "mr-1 select-none" }, H1 = {
  key: 1,
  class: "flex justify-between items-center"
}, z1 = { class: "mr-1 select-none" }, N1 = /* @__PURE__ */ Y({
  __name: "ModalLookup",
  props: {
    id: { default: "ModalLookup" },
    refInfo: null,
    skip: { default: 0 },
    prefs: null,
    selectedColumns: null,
    allowFiltering: { type: [Boolean, null], default: !0 },
    showPreferences: { type: [Boolean, null], default: !0 },
    showPagingNav: { type: [Boolean, null], default: !0 },
    showPagingInfo: { type: [Boolean, null], default: !0 },
    showResetPreferences: { type: [Boolean, null], default: !0 },
    showFiltersView: { type: [Boolean, null], default: !0 },
    toolbarButtonClass: null,
    canFilter: null
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = e, a = zl(), { config: i } = wt(), { metadataApi: r, filterDefinitions: d } = Ze(), v = je("client"), f = i.value.storage, m = c(() => t.toolbarButtonClass ?? ae.toolbarButtonClass), p = c(() => d.value), h = 25, g = T({ take: h }), b = T(new Xe()), k = T(t.skip), M = T(!1), P = T(), j = (R) => typeof R == "string" ? R.split(",") : R || [];
    function z(R, N) {
      return ae.getTableRowClass("fullWidth", N, !1, !0);
    }
    function q() {
      let R = j(t.selectedColumns);
      return R.length > 0 ? R : [];
    }
    const Q = c(() => it(t.refInfo.model)), $ = c(() => {
      let N = q().map((xe) => xe.toLowerCase());
      const re = Ke(Q.value);
      return N.length > 0 ? N.map((xe) => re.find((we) => we.name.toLowerCase() === xe)).filter((xe) => xe != null) : re;
    }), O = c(() => {
      let R = $.value.map((re) => re.name), N = j(g.value.selectedColumns).map((re) => re.toLowerCase());
      return N.length > 0 ? R.filter((re) => N.includes(re.toLowerCase())) : R;
    }), B = c(() => g.value.take ?? h), D = c(() => b.value.response ? ce(b.value.response, "results") : []), I = c(() => {
      var R;
      return ((R = b.value.response) == null ? void 0 : R.total) ?? D.value.length ?? 0;
    }), E = c(() => k.value > 0), K = c(() => k.value > 0), G = c(() => D.value.length >= B.value), te = c(() => D.value.length >= B.value), A = T([]), y = c(() => A.value.some((R) => R.settings.filters.length > 0 || !!R.settings.sort)), S = c(() => A.value.map((R) => R.settings.filters.length).reduce((R, N) => R + N, 0)), le = c(() => Qt(Q.value)), V = c(() => {
      var R;
      return (R = r.value) == null ? void 0 : R.operations.find((N) => {
        var re;
        return ((re = N.dataModel) == null ? void 0 : re.name) == t.refInfo.model && Te.isAnyQuery(N);
      });
    }), F = T(), ue = T(!1), ie = T(), ne = () => `${t.id}/ApiPrefs/${t.refInfo.model}`, H = (R) => `Column/${t.id}:${t.refInfo.model}.${R}`;
    async function J(R) {
      k.value += R, k.value < 0 && (k.value = 0);
      var N = Math.floor(I.value / B.value) * B.value;
      k.value > N && (k.value = N), await Me();
    }
    async function pe(R, N) {
      l("done", R);
    }
    function _e() {
      l("done", null);
    }
    function se(R, N) {
      var xe, we, Fe;
      let re = N.target;
      if ((re == null ? void 0 : re.tagName) !== "TD") {
        let qe = (xe = re == null ? void 0 : re.closest("TABLE")) == null ? void 0 : xe.getBoundingClientRect(), ke = A.value.find((Ee) => Ee.name.toLowerCase() == R.toLowerCase());
        if (ke && qe) {
          let Ee = 318, rt = (((we = N.target) == null ? void 0 : we.tagName) === "DIV" ? N.target : (Fe = N.target) == null ? void 0 : Fe.closest("DIV")).getBoundingClientRect(), Ft = Ee + 25;
          ie.value = {
            column: ke,
            topLeft: {
              x: Math.max(Math.floor(rt.x + 25), Ft),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function Pe() {
      ie.value = null;
    }
    async function Ae(R) {
      var re;
      let N = (re = ie.value) == null ? void 0 : re.column;
      N && (N.settings = R, f.setItem(H(N.name), JSON.stringify(N.settings)), await Me()), ie.value = null;
    }
    async function ge(R) {
      f.setItem(H(R.name), JSON.stringify(R.settings)), await Me();
    }
    async function Re(R) {
      ue.value = !1, g.value = R, f.setItem(ne(), JSON.stringify(R)), await Me();
    }
    async function Me() {
      await ze(Je());
    }
    async function ze(R) {
      const N = V.value;
      if (!N) {
        console.error(`No Query API was found for ${t.refInfo.model}`);
        return;
      }
      let re = Et(N, R), xe = In((qe) => {
        b.value.response = b.value.error = void 0, M.value = qe;
      }), we = await v.api(re);
      xe(), ul(() => b.value = we);
      let Fe = ce(we.response, "results") || [];
      !we.succeeded || Fe.label == 0;
    }
    function Je() {
      let R = {
        include: "total",
        take: B.value
      }, N = j(g.value.selectedColumns || t.selectedColumns);
      if (N.length > 0) {
        let xe = le.value;
        xe && N.includes(xe.name) && (N = [xe.name, ...N]), R.fields = N.join(",");
      }
      let re = [];
      return A.value.forEach((xe) => {
        xe.settings.sort && re.push((xe.settings.sort === "DESC" ? "-" : "") + xe.name), xe.settings.filters.forEach((we) => {
          let Fe = we.key.replace("%", xe.name);
          R[Fe] = we.value;
        });
      }), typeof R.skip > "u" && k.value > 0 && (R.skip = k.value), re.length > 0 && (R.orderBy = re.join(",")), R;
    }
    async function Ne() {
      A.value.forEach((R) => {
        R.settings = { filters: [] }, f.removeItem(H(R.name));
      }), await Me();
    }
    return lt(async () => {
      const R = t.prefs || il(f.getItem(ne()));
      R && (g.value = R), A.value = $.value.map((N) => ({
        name: N.name,
        type: N.type,
        meta: N,
        settings: Object.assign(
          {
            filters: []
          },
          il(f.getItem(H(N.name)))
        )
      })), isNaN(t.skip) || (k.value = t.skip), await Me();
    }), (R, N) => {
      const re = U("ErrorSummary"), xe = U("Loading"), we = U("SettingsIcons"), Fe = U("DataGrid"), qe = U("ModalDialog");
      return o(), u(be, null, [
        e.refInfo ? (o(), X(qe, {
          key: 0,
          ref_key: "modalDialog",
          ref: F,
          id: e.id,
          onDone: _e
        }, {
          default: ve(() => [
            n("div", Jf, [
              n("div", Xf, [
                n("h3", Yf, [
                  he(" Select "),
                  n("span", e1, L(s(Ie)(e.refInfo.model)), 1)
                ]),
                n("div", t1, [
                  e.showPreferences ? (o(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: N[0] || (N[0] = (ke) => ue.value = !ue.value)
                  }, s1, 8, l1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 1,
                    type: "button",
                    class: w(["pl-2", s(E) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !s(E),
                    onClick: N[1] || (N[1] = (ke) => J(-s(I)))
                  }, i1, 10, a1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 2,
                    type: "button",
                    class: w(["pl-2", s(K) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !s(K),
                    onClick: N[2] || (N[2] = (ke) => J(-s(B)))
                  }, d1, 10, r1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 3,
                    type: "button",
                    class: w(["pl-2", s(G) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !s(G),
                    onClick: N[3] || (N[3] = (ke) => J(s(B)))
                  }, m1, 10, c1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 4,
                    type: "button",
                    class: w(["pl-2", s(te) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !s(te),
                    onClick: N[4] || (N[4] = (ke) => J(s(I)))
                  }, g1, 10, v1)) : C("", !0)
                ]),
                e.showPagingInfo ? (o(), u("div", p1, [
                  n("div", y1, [
                    M.value ? (o(), u("span", b1, "Querying...")) : C("", !0),
                    s(D).length ? (o(), u("span", w1, [
                      x1,
                      he(" " + L(k.value + 1) + " - " + L(Math.min(k.value + s(D).length, s(I))) + " ", 1),
                      n("span", null, " of " + L(s(I)), 1)
                    ])) : b.value.completed ? (o(), u("span", k1, "No Results")) : C("", !0)
                  ])
                ])) : C("", !0),
                s(y) && e.showResetPreferences ? (o(), u("div", $1, [
                  n("button", {
                    type: "button",
                    onClick: Ne,
                    title: "Reset Preferences & Filters",
                    class: w(s(m))
                  }, _1, 2)
                ])) : C("", !0),
                n("div", L1, [
                  e.showFiltersView && s(S) > 0 ? (o(), u("div", V1, [
                    n("button", {
                      type: "button",
                      onClick: N[5] || (N[5] = (ke) => P.value = P.value == "filters" ? null : "filters"),
                      class: w(s(m)),
                      "aria-expanded": "false"
                    }, [
                      M1,
                      n("span", S1, L(s(S)) + " " + L(s(S) == 1 ? "Filter" : "Filters"), 1),
                      P.value != "filters" ? (o(), u("svg", A1, I1)) : (o(), u("svg", F1, D1))
                    ], 2)
                  ])) : C("", !0)
                ])
              ]),
              P.value == "filters" ? (o(), X(rn, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: s(p),
                columns: A.value,
                onDone: N[6] || (N[6] = (ke) => P.value = null),
                onChange: ge
              }, null, 8, ["definitions", "columns"])) : C("", !0),
              ie.value ? (o(), u("div", j1, [
                fe(on, {
                  definitions: s(p),
                  column: ie.value.column,
                  "top-left": ie.value.topLeft,
                  onDone: Pe,
                  onSave: Ae
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : C("", !0),
              b.value.error ? (o(), X(re, {
                key: 2,
                status: b.value.error
              }, null, 8, ["status"])) : M.value ? (o(), X(xe, { key: 3 })) : (o(), u("div", O1, [
                s(D).length ? (o(), u("div", B1, [
                  fe(Fe, {
                    id: e.id,
                    items: s(D),
                    type: e.refInfo.model,
                    "selected-columns": s(O),
                    onFiltersChanged: Me,
                    tableStyle: "fullWidth",
                    rowClass: z,
                    onRowSelected: pe,
                    onHeaderSelected: se
                  }, Nl({
                    header: ve(({ column: ke, label: Ee }) => {
                      var Qe;
                      return [
                        e.allowFiltering && (!t.canFilter || t.canFilter(ke)) ? (o(), u("div", R1, [
                          n("span", E1, L(Ee), 1),
                          fe(we, {
                            column: A.value.find((rt) => rt.name.toLowerCase() === ke.toLowerCase()),
                            "is-open": ((Qe = ie.value) == null ? void 0 : Qe.column.name) === ke
                          }, null, 8, ["column", "is-open"])
                        ])) : (o(), u("div", H1, [
                          n("span", z1, L(Ee), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    $e(Object.keys(s(a)), (ke) => ({
                      name: ke,
                      fn: ve((Ee) => [
                        Z(R.$slots, ke, _t(sl(Ee)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : C("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : C("", !0),
        ue.value ? (o(), X(un, {
          key: 1,
          columns: s($),
          prefs: g.value,
          onDone: N[7] || (N[7] = (ke) => ue.value = !1),
          onSave: Re
        }, null, 8, ["columns", "prefs"])) : C("", !0)
      ], 64);
    };
  }
}), U1 = { class: "sm:hidden" }, q1 = ["for"], Q1 = ["id", "name"], K1 = ["value"], G1 = { class: "hidden sm:block" }, W1 = { class: "border-b border-gray-200" }, Z1 = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, J1 = ["onClick"], X1 = /* @__PURE__ */ Y({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Ie(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, t = c(() => Object.keys(l.tabs)), a = (p) => l.label ? l.label(p) : Ie(p), i = c(() => l.id || "tabs"), r = c(() => l.param || "tab"), d = T();
    function v(p) {
      if (d.value = p, l.url) {
        const h = t.value[0];
        ql({ tab: p === h ? void 0 : p });
      }
    }
    function f(p) {
      return d.value === p;
    }
    const m = c(() => `${100 / Object.keys(l.tabs).length}%`);
    return lt(() => {
      if (d.value = Object.keys(l.tabs)[0], l.url) {
        const h = Tl(location.search)[r.value];
        h && (d.value = h);
      }
    }), (p, h) => (o(), u("div", null, [
      n("div", U1, [
        n("label", {
          for: s(i),
          class: "sr-only"
        }, "Select a tab", 8, q1),
        n("select", {
          id: s(i),
          name: s(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: h[0] || (h[0] = (g) => {
            var b;
            return v((b = g.target) == null ? void 0 : b.value);
          })
        }, [
          (o(!0), u(be, null, $e(s(t), (g) => (o(), u("option", {
            key: g,
            value: g
          }, L(a(g)), 9, K1))), 128))
        ], 40, Q1)
      ]),
      n("div", G1, [
        n("div", W1, [
          n("nav", Z1, [
            (o(!0), u(be, null, $e(s(t), (g) => (o(), u("a", {
              href: "#",
              onClick: Oe((b) => v(g), ["prevent"]),
              style: El({ width: s(m) }),
              class: w([f(g) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, L(a(g)), 15, J1))), 256))
          ])
        ])
      ]),
      n("div", {
        class: w(e.bodyClass)
      }, [
        (o(), X(Es(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), Y1 = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), em = [
  Y1
], tm = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), lm = [
  tm
], nm = /* @__PURE__ */ Y({
  __name: "DarkModeToggle",
  setup(e) {
    const l = typeof document < "u" ? document.querySelector("html") : null;
    let t = T(l == null ? void 0 : l.classList.contains("dark"));
    function a() {
      t.value ? l == null || l.classList.remove("dark") : l == null || l.classList.add("dark"), t.value = !t.value, localStorage.setItem("color-scheme", t.value ? "dark" : "light");
    }
    return (i, r) => (o(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: r[0] || (r[0] = (d) => a())
    }, [
      n("span", {
        class: w(`${s(t) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        n("span", {
          class: w(`${s(t) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, em, 2),
        n("span", {
          class: w(`${s(t) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, lm, 2)
      ], 2)
    ]));
  }
}), sm = { key: 0 }, am = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, om = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, im = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, rm = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, um = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, dm = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, cm = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, fm = ["onSubmit"], mm = { class: "mt-8" }, vm = {
  key: 1,
  class: "mt-6"
}, hm = /* @__PURE__ */ dl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), gm = { class: "mt-6 grid grid-cols-3 gap-3" }, pm = ["href", "title"], ym = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, bm = /* @__PURE__ */ n("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), wm = /* @__PURE__ */ n("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), xm = [
  bm,
  wm
], km = /* @__PURE__ */ Y({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: l }) {
    const t = e, { getMetadata: a, createDto: i } = Ze(), r = yl(), { signIn: d } = an(), v = a({ assert: !0 }), f = v.plugins.auth, m = document.baseURI, p = v.app.baseUrl, h = T(i("Authenticate")), g = T(new Xe());
    lt(() => {
      f == null || f.authProviders.map((D) => D.formLayout).filter((D) => D).forEach((D) => D.forEach((I) => h.value[I.id] = ""));
    });
    const b = c(() => (f == null ? void 0 : f.authProviders.filter((D) => D.formLayout)) || []), k = c(() => b.value[0] || {}), M = c(() => b.value[Math.max(b.value.length - 1, 0)] || {}), P = c(() => (t.provider ? f == null ? void 0 : f.authProviders.find((D) => D.name === t.provider) : null) ?? k.value), j = (D) => D === !1 || D === "false";
    function z(D) {
      return D.label || D.navItem && D.navItem.label;
    }
    const q = c(() => {
      var D;
      return (((D = P.value) == null ? void 0 : D.formLayout) || []).map((I) => {
        var E, K;
        return Object.assign({}, I, {
          type: (E = I.type) == null ? void 0 : E.toLowerCase(),
          autocomplete: I.autocomplete || (((K = I.type) == null ? void 0 : K.toLowerCase()) === "password" ? "current-password" : void 0) || (I.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, I.css)
        });
      });
    }), Q = c(() => j(t.oauth) ? [] : (f == null ? void 0 : f.authProviders.filter((D) => D.type === "oauth")) || []), $ = c(() => {
      let D = ta(
        f == null ? void 0 : f.authProviders.filter((E) => E.formLayout && E.formLayout.length > 0),
        (E, K) => {
          let G = z(K) || Ye(K.name);
          E[G] = K.name === k.value.name ? "" : K.name;
        }
      );
      const I = P.value;
      return I && j(t.tabs) && (D = { [z(I) || Ye(I.name)]: I }), D;
    }), O = c(() => {
      let D = q.value.map((I) => I.id).filter((I) => I);
      return g.value.summaryMessage(D);
    });
    async function B() {
      if (h.value.provider = P.value.name, g.value = await r.api(h.value), g.value.succeeded) {
        const D = g.value.response;
        d(D), l("login", D), g.value = new Xe(), h.value = i("Authenticate");
      }
    }
    return (D, I) => {
      const E = U("ErrorSummary"), K = U("AutoFormFields"), G = U("PrimaryButton"), te = U("Icon"), A = Hs("href");
      return s(f) ? (o(), u("div", am, [
        n("div", om, [
          n("h2", im, L(e.title), 1),
          Object.keys(s($)).length > 1 ? (o(), u("p", rm, [
            n("span", um, [
              (o(!0), u(be, null, $e(s($), (y, S) => gt((o(), u("a", {
                class: w([
                  y === "" || y === s(k).name ? "rounded-l-md" : y === s(M).name ? "rounded-r-md -ml-px" : "-ml-px",
                  e.provider === y ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                he(L(S), 1)
              ], 2)), [
                [A, { provider: y }]
              ])), 256))
            ])
          ])) : C("", !0)
        ]),
        n("div", dm, [
          s(O) ? (o(), X(E, {
            key: 0,
            class: "mb-3",
            errorSummary: s(O)
          }, null, 8, ["errorSummary"])) : C("", !0),
          n("div", cm, [
            s(q).length ? (o(), u("form", {
              key: 0,
              onSubmit: Oe(B, ["prevent"])
            }, [
              fe(K, {
                modelValue: h.value,
                formLayout: s(q),
                api: g.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              n("div", mm, [
                fe(G, { class: "w-full" }, {
                  default: ve(() => [
                    he("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, fm)) : C("", !0),
            s(Q).length ? (o(), u("div", vm, [
              hm,
              n("div", gm, [
                (o(!0), u(be, null, $e(s(Q), (y) => (o(), u("div", null, [
                  n("a", {
                    href: s(p) + y.navItem.href + "?continue=" + s(m),
                    title: z(y),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    y.icon ? (o(), X(te, {
                      key: 0,
                      image: y.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (o(), u("svg", ym, xm))
                  ], 8, pm)
                ]))), 256))
              ])
            ])) : C("", !0)
          ])
        ])
      ])) : (o(), u("div", sm, "No Auth Plugin"));
    };
  }
}), $m = {
  Alert: ga,
  AlertSuccess: Ma,
  ErrorSummary: Fa,
  InputDescription: Da,
  Icon: ts,
  Loading: po,
  OutlineButton: wo,
  PrimaryButton: $o,
  SecondaryButton: Lo,
  TextLink: Vo,
  Breadcrumbs: Fo,
  Breadcrumb: Bo,
  NavList: Ho,
  NavListItem: Xo,
  AutoQueryGrid: xu,
  SettingsIcons: Du,
  FilterViews: rn,
  FilterColumn: on,
  QueryPrefs: un,
  EnsureAccess: ss,
  EnsureAccessDialog: ju,
  TextInput: Qu,
  TextareaInput: Yu,
  SelectInput: ad,
  CheckboxInput: md,
  TagInput: jd,
  FileInput: ac,
  Autocomplete: xc,
  Combobox: Cc,
  DynamicInput: _c,
  LookupInput: Hc,
  AutoFormFields: zc,
  AutoForm: Zc,
  AutoCreateForm: b0,
  AutoEditForm: z0,
  ConfirmDelete: q0,
  FormLoading: J0,
  DataGrid: lf,
  CellFormat: mf,
  PreviewFormat: bf,
  HtmlFormat: Cf,
  CloseButton: Sf,
  SlideOver: Nf,
  ModalDialog: Zf,
  ModalLookup: N1,
  Tabs: X1,
  DarkModeToggle: nm,
  SignIn: km
}, Cm = ["onClick", "title"], _m = /* @__PURE__ */ Y({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const l = e, { config: t } = wt(), a = () => t.value.navigate(l.to ?? "/");
    return (i, r) => (o(), u("a", Ce({
      onClick: Oe(a, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      Z(i.$slots, "default")
    ], 16, Cm));
  }
}), Lm = { RouterLink: _m }, Ml = $m, Fm = {
  install(e) {
    Object.keys(Ml).forEach((l) => {
      e.component(l, Ml[l]);
    });
  },
  component(e) {
    return e && (Ml[e] || Lm[e]) || null;
  }
};
export {
  Tm as css,
  Fm as default,
  an as useAuth,
  yl as useClient,
  wt as useConfig,
  Am as useFiles,
  Im as useFormatters,
  Ze as useMetadata,
  Ba as useUtils
};
