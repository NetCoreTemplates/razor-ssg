var Fn = Object.defineProperty;
var In = (e, l, t) => l in e ? Fn(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
var ke = (e, l, t) => (In(e, typeof l != "symbol" ? l + "" : l, t), t);
import { defineComponent as Y, computed as f, openBlock as o, createElementBlock as u, normalizeClass as w, unref as n, createElementVNode as s, createCommentVNode as C, renderSlot as Z, ref as T, toDisplayString as L, inject as Be, nextTick as ul, isRef as Ss, h as ft, resolveComponent as U, createBlock as X, withCtx as ve, mergeProps as Ce, useAttrs as Pn, createVNode as fe, createTextVNode as he, watchEffect as Ml, normalizeStyle as El, withModifiers as je, Fragment as ye, renderList as $e, withDirectives as gt, vModelCheckbox as Hl, withKeys as Dn, createStaticVNode as dl, vModelSelect as jn, useSlots as zl, onMounted as lt, createSlots as Nl, normalizeProps as _t, guardReactiveProps as sl, vModelDynamic as On, onUnmounted as zt, watch as Mt, vModelText as Bn, provide as Nt, resolveDynamicComponent as Rn, resolveDirective as En } from "vue";
import { errorResponseExcept as Hn, dateFmt as Ms, toTime as zn, omit as st, enc as Al, setQueryString as Nn, lastRightPart as pt, leftPart as cl, map as De, toDate as bt, toDateTime as Un, toCamelCase as qn, mapGet as ce, chop as Qn, appendQueryString as nl, humanize as Fe, ApiResult as Xe, delaySet as As, queryString as Tl, combinePaths as Kn, rightPart as Gn, toPascalCase as Ye, errorResponse as dt, trimEnd as Wn, $1 as al, lastLeftPart as Zn, ResponseStatus as Ll, ResponseError as Cs, HttpMethods as Ul, uniqueKeys as Fl, humanify as Ts, fromXsdDuration as Fs, isDate as fl, timeFmt12 as Jn, apiValue as Xn, indexOfAny as Yn, each as ea } from "@servicestack/client";
const ta = { class: "flex" }, la = { class: "flex-shrink-0" }, sa = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, na = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), aa = [
  na
], oa = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ia = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), ra = [
  ia
], ua = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, da = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), ca = [
  da
], fa = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ma = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), va = [
  ma
], ha = { class: "ml-3" }, ga = /* @__PURE__ */ Y({
  __name: "Alert",
  props: {
    type: { default: "warn" }
  },
  setup(e) {
    const l = e, t = f(() => l.type == "info" ? "bg-blue-50 dark:bg-blue-200" : l.type == "error" ? "bg-red-50 dark:bg-red-200" : l.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), a = f(() => l.type == "info" ? "border-blue-400" : l.type == "error" ? "border-red-400" : l.type == "success" ? "border-green-400" : "border-yellow-400"), i = f(() => l.type == "info" ? "text-blue-700" : l.type == "error" ? "text-red-700" : l.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (o(), u("div", {
      class: w([n(t), n(a), "border-l-4 p-4"])
    }, [
      s("div", ta, [
        s("div", la, [
          e.type == "warn" ? (o(), u("svg", sa, aa)) : e.type == "error" ? (o(), u("svg", oa, ra)) : e.type == "info" ? (o(), u("svg", ua, ca)) : e.type == "success" ? (o(), u("svg", fa, va)) : C("", !0)
        ]),
        s("div", ha, [
          s("p", {
            class: w([n(i), "text-sm"])
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
}, ya = { class: "flex" }, ba = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), wa = { class: "ml-3" }, xa = { class: "text-sm font-medium text-green-800" }, ka = { key: 0 }, $a = { class: "ml-auto pl-3" }, Ca = { class: "-mx-1.5 -my-1.5" }, _a = /* @__PURE__ */ s("span", { class: "sr-only" }, "Dismiss", -1), La = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Va = [
  _a,
  La
], Sa = /* @__PURE__ */ Y({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const l = T(!1);
    return (t, a) => l.value ? C("", !0) : (o(), u("div", pa, [
      s("div", ya, [
        ba,
        s("div", wa, [
          s("h3", xa, [
            e.message ? (o(), u("span", ka, L(e.message), 1)) : Z(t.$slots, "default", { key: 1 })
          ])
        ]),
        s("div", $a, [
          s("div", Ca, [
            s("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: a[0] || (a[0] = (i) => l.value = !0)
            }, Va)
          ])
        ])
      ])
    ]));
  }
}), Ma = { class: "flex" }, Aa = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ s("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), Ta = { class: "ml-3" }, Fa = { class: "text-sm text-red-700 dark:text-red-200" }, Ia = /* @__PURE__ */ Y({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const l = e;
    let t = Be("ApiState", void 0);
    const a = f(() => l.status || t != null && t.error.value ? Hn.call({ responseStatus: l.status ?? (t == null ? void 0 : t.error.value) }, l.except ?? []) : null);
    return (i, r) => n(a) ? (o(), u("div", {
      key: 0,
      class: w(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      s("div", Ma, [
        Aa,
        s("div", Ta, [
          s("p", Fa, L(n(a)), 1)
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
      s("div", null, L(e.description), 1)
    ], 8, Pa)) : C("", !0);
  }
});
function ml(e) {
  return Ms(e).replace(/\//g, "-");
}
function Is(e) {
  return e == null ? "" : zn(e);
}
function Ps(e, l) {
  e.value = null, ul(() => e.value = l);
}
function kt(e) {
  return Object.keys(e).forEach((l) => {
    const t = e[l];
    e[l] = Ss(t) ? n(t) : t;
  }), e;
}
function Lt(e, l, t) {
  t ? (l.value = e.entering.cls + " " + e.entering.from, setTimeout(() => l.value = e.entering.cls + " " + e.entering.to, 0)) : (l.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => l.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function Yt() {
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
function At(e) {
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
  return a && (t = st(t, ["cls", "class", "className"]), t.class = a), l == null ? `<${e}` + Il(t) + "/>" : `<${e}` + Il(t) + `>${l || ""}</${e}>`;
}
function Il(e) {
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
function Bt(e) {
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
function ol(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function ql(e) {
  if (typeof history < "u") {
    const l = Nn(location.href, e);
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
    timeInputFormat: Is,
    setRef: Ps,
    unRefs: kt,
    transition: Lt,
    focusNextElement: Yt,
    getTypeName: At,
    htmlTag: et,
    htmlAttrs: Il,
    linkAttrs: vl,
    toAppUrl: Ct,
    isPrimitive: yt,
    isComplexType: Bt,
    pushState: ql,
    scopedExpr: Ql,
    copyText: Pl
  };
}
class re {
}
ke(re, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (l) => location.href = l,
  assetsPathResolver: (l) => l,
  fallbackPathResolver: (l) => l,
  storage: new Oa(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" }
}), ke(re, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), ke(re, "user", T(null)), ke(re, "metadata", T(null));
function Ra(e) {
  re.config = Object.assign(re.config, e);
}
function Ea(e) {
  re.autoQueryGridDefaults = Object.assign(re.autoQueryGridDefaults, e);
}
function Kl(e) {
  return e && re.config.assetsPathResolver ? re.config.assetsPathResolver(e) : e;
}
function Ha(e) {
  return e && re.config.fallbackPathResolver ? re.config.fallbackPathResolver(e) : e;
}
function wt() {
  const e = f(() => re.config), l = f(() => re.autoQueryGridDefaults);
  return {
    config: e,
    setConfig: Ra,
    autoQueryGridDefaults: l,
    setAutoQueryGridDefaults: Ea,
    assetsPathResolver: Kl,
    fallbackPathResolver: Ha
  };
}
const Ds = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), js = {
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
}, _s = Object.keys(js), at = (e, l) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${l}</svg>`, el = {
  img: at("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: at("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: at("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: at("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: at("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: at("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: at("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: at("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: at("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, za = /[\r\n%#()<>?[\\\]^`{|}]/g, Ls = 1024, Na = ["Bytes", "KB", "MB", "GB", "TB"], Ua = (() => {
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
  function h(m, v) {
    m.split(",").forEach((g) => d[g] = v);
  }
  function c(m, v) {
    m.split(",").forEach((g) => d[g] = v(g));
  }
  return c("jpeg,gif,png,tiff,bmp,webp", (m) => t + m), c("jsx,csv,css", (m) => a + m), c("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (m) => i + m), c("3gpp,avi,dv,divx,ogg,mp4,webm", (m) => r + m), c("rtf,pdf", (m) => e + m), h("htm,html,shtm", a + "html"), h("js,mjs,cjs", a + "javascript"), h("yml,yaml", e + "yaml"), h("bat,cmd", e + "bat"), h("xml,csproj,fsproj,vbproj", a + "xml"), h("txt,ps1", a + "plain"), h("qt,mov", r + "quicktime"), h("doc,dot", e + "msword"), h("xls,xlt,xla", e + "excel"), h("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), h("cer,crt,der", e + "x-x509-ca-cert"), h("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), h("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Dl = [];
function Os(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(za, encodeURIComponent);
}
function Gl(e) {
  return "data:image/svg+xml;utf8," + Os(e);
}
function Bs(e) {
  let l = URL.createObjectURL(e);
  return Dl.push(l), l;
}
function Rs() {
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
function Ut(e) {
  let l = Wl(e);
  return l == null || l.indexOf(".") === -1 ? null : pt(l, ".").toLowerCase();
}
function Zl(e) {
  let l = Ut(e.name);
  return l && Ds.indexOf(l) >= 0 ? Bs(e) : mt(e.name);
}
function Jl(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let l = Ut(e);
  return l && Ds.indexOf(l) >= 0 || !1;
}
function mt(e) {
  if (!e)
    return null;
  let l = Ut(e);
  return l == null || Jl(e) ? e : Ot(l) || Gl(el.doc);
}
function Ot(e) {
  let l = Es(e);
  return l && Gl(l) || null;
}
function Es(e) {
  if (el[e])
    return el[e];
  for (let l = 0; l < _s.length; l++) {
    let t = _s[l];
    if (js[t].indexOf(e) >= 0)
      return el[t];
  }
  return null;
}
function Xl(e, l = 2) {
  if (e === 0)
    return "0 Bytes";
  const t = l < 0 ? 0 : l, a = Math.floor(Math.log(e) / Math.log(Ls));
  return parseFloat((e / Math.pow(Ls, a)).toFixed(t)) + " " + Na[a];
}
function qa(e) {
  return e.files && Array.from(e.files).map((l) => ({ fileName: l.name, contentLength: l.size, filePath: Zl(l) }));
}
function hl(e, l) {
  e.onerror = null, e.src = Yl(e.src, l) || "";
}
function Yl(e, l) {
  return Ot(pt(e, ".").toLowerCase()) || (l ? Ot(l) || l : null) || Ot("doc");
}
function jl(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const l = pt(e, ".").toLowerCase();
  return Ua[l] || "application/" + l;
}
function Am() {
  return {
    extSvg: Es,
    extSrc: Ot,
    getExt: Ut,
    encodeSvg: Os,
    canPreview: Jl,
    getFileName: Wl,
    getMimeType: jl,
    formatBytes: Xl,
    filePathUri: mt,
    svgToDataUri: Gl,
    fileImageUri: Zl,
    objectUrl: Bs,
    flush: Rs,
    inputFiles: qa,
    iconOnError: hl,
    iconFallbackSrc: Yl
  };
}
const Rt = "/metadata/app.json", Qa = {
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
}, Ka = {
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
const Ga = {
  String: "string",
  Boolean: "bool",
  ...Ol
};
function Jt(e) {
  return Ga[e] || e;
}
function Hs(e, l) {
  return e ? (l || (l = []), e === "Nullable`1" ? Jt(l[0]) + "?" : e.endsWith("[]") ? `List<${Jt(e.substring(0, e.length - 2))}>` : l.length === 0 ? Jt(e) : cl(Jt(e), "`") + "<" + l.join(",") + ">") : "";
}
function Wa(e) {
  return e && Hs(e.name, e.genericArgs);
}
class Vt {
  constructor() {
    ke(this, "Query");
    ke(this, "QueryInto");
    ke(this, "Create");
    ke(this, "Update");
    ke(this, "Patch");
    ke(this, "Delete");
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
    const t = new Vt();
    return l.forEach((a) => {
      t.add(a);
    }), t;
  }
  static forType(l, t) {
    var i;
    let a = new Vt();
    return l && (t ?? (t = (i = re.metadata.value) == null ? void 0 : i.api), t == null || t.operations.forEach((r) => {
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
  isCreate: (e) => Xt(e, Te.Create),
  isUpdate: (e) => Xt(e, Te.Update),
  isPatch: (e) => Xt(e, Te.Patch),
  isDelete: (e) => Xt(e, Te.Delete),
  model: (e) => {
    var l, t, a;
    return e ? De(e.inherits, (i) => Te.AnyRead.indexOf(i.name) >= 0) ? (l = e.inherits) == null ? void 0 : l.genericArgs[0] : (a = (t = e.implements) == null ? void 0 : t.find((i) => Te.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : a.genericArgs[0] : null;
  }
};
function Za(e) {
  var l;
  return ((l = e.input) == null ? void 0 : l.type) || gl(es(e));
}
function zs(e) {
  return e.endsWith("?") ? Qn(e, 1) : e;
}
function gl(e) {
  return Qa[zs(e)];
}
function Ja(e) {
  return e && Ka[e] || "String";
}
function es(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Bl(e) {
  return e && gl(e) == "number" || !1;
}
function Ns(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function Xa(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function Us(e) {
  if (!(e != null && e.type))
    return !1;
  const l = es(e);
  return e.isValueType && l.indexOf("`") == -1 || e.isEnum ? !1 : gl(e.type) == null;
}
function qs(e) {
  var t, a, i;
  if (!(e != null && e.type))
    return !1;
  const l = es(e);
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
function Ya(e, l, t = {}) {
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
function tl(e, l) {
  return e ? (Object.keys(e).forEach((t) => {
    let a = e[t];
    typeof a == "string" && a.startsWith("/Date") && (e[t] = ml(bt(a)));
  }), e) : {};
}
function eo(e, l) {
  let t = {};
  return Array.from(e.elements).forEach((a) => {
    var v;
    let i = a;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = l && l.find((g) => g.name.toLowerCase() == r);
    let h = d == null ? void 0 : d.type, c = (v = d == null ? void 0 : d.genericArgs) == null ? void 0 : v[0], m = i.type === "checkbox" ? i.checked : i.value;
    Bl(h) ? m = Number(m) : h === "List`1" && typeof m == "string" && (m = m.split(",").map((g) => Bl(c) ? Number(g) : g)), t[i.id] = m;
  }), t;
}
function ts(e) {
  var l;
  return ((l = e == null ? void 0 : e.api) == null ? void 0 : l.operations) && e.api.operations.length > 0;
}
function to(e) {
  if (e != null && e.assert && !re.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return re.metadata.value;
}
function il(e) {
  return e && ts(e) ? (e.date = Un(new Date()), re.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Rt, JSON.stringify(e)), !0) : !1;
}
function lo() {
  re.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Rt);
}
function Qs() {
  if (re.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (ts(e))
    il(e);
  else {
    const l = typeof localStorage < "u" ? localStorage.getItem(Rt) : null;
    if (l)
      try {
        il(JSON.parse(l));
      } catch {
        console.error(`Could not JSON.parse ${Rt} from localStorage`);
      }
  }
  return re.metadata.value != null;
}
async function so(e, l) {
  let t = l ? await l() : await fetch(e);
  if (t.ok) {
    let a = await t.text();
    il(JSON.parse(a));
  } else
    console.error(`Could not download ${l ? "AppMetadata" : e}: ${t.statusText}`);
  ts(re.metadata.value) || console.warn("AppMetadata is not available");
}
async function no(e) {
  var r;
  const { olderThan: l, resolvePath: t, resolve: a } = e || {};
  let i = Qs() && l !== 0;
  if (i && l) {
    let d = bt((r = re.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > l) && (i = !1);
  }
  return i || await so(t || Rt, a), re.metadata.value;
}
function it(e, l) {
  var d;
  let t = (d = re.metadata.value) == null ? void 0 : d.api;
  if (!t || !e)
    return null;
  let a = t.types.find((h) => h.name.toLowerCase() === e.toLowerCase() && (!l || h.namespace == l));
  if (a)
    return a;
  let i = pl(e);
  if (i)
    return i.request;
  let r = t.operations.find((h) => h.response && h.response.name.toLowerCase() === e.toLowerCase() && (!l || h.response.namespace == l));
  return r ? r.response : null;
}
function pl(e) {
  var a;
  let l = (a = re.metadata.value) == null ? void 0 : a.api;
  return l ? l.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function ao({ dataModel: e }) {
  var a;
  const l = (a = re.metadata.value) == null ? void 0 : a.api;
  if (!l)
    return [];
  let t = l.operations;
  if (e) {
    const i = typeof e == "string" ? it(e) : e;
    t = t.filter((r) => Ks(r.dataModel, i));
  }
  return t;
}
function ls(e) {
  return e ? it(e.name, e.namespace) : null;
}
function Ks(e, l) {
  return e && l && e.name === l.name && (!e.namespace || !l.namespace || e.namespace === l.namespace);
}
function oo(e, l) {
  let t = it(e);
  return t && t.properties && t.properties.find((i) => i.name.toLowerCase() === l.toLowerCase());
}
function Gs(e) {
  return Ws(it(e));
}
function Ws(e) {
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
function Zs(e) {
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
      return Ws(r);
  }
  return null;
}
function ss(e) {
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
  }, l))(e.name, (l == null ? void 0 : l.type) || Za(e) || "text");
  return e.isEnum && (a.type = "select", a.allowableEntries = ss(Zs(e))), a;
}
function ro(e) {
  let l = [];
  if (e) {
    const t = Ke(e), a = pl(e.name), i = ls(a == null ? void 0 : a.dataModel);
    t.forEach((r) => {
      var h, c, m;
      if (!qs(r))
        return;
      const d = io(r, r.input);
      if (d.id = qn(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const v = (c = (h = re.metadata.value) == null ? void 0 : h.plugins.filesUpload) == null ? void 0 : c.locations.find((g) => g.name == r.uploadTo);
        v && !d.accept && v.allowExtensions && (d.accept = v.allowExtensions.map((g) => g.startsWith(".") ? g : `.${g}`).join(","));
      }
      if (i) {
        const v = (m = i.properties) == null ? void 0 : m.find((g) => g.name == r.name);
        r.ref || (r.ref = v == null ? void 0 : v.ref);
      }
      if (d.options)
        try {
          const v = {
            $typeFields: t.map((p) => p.name),
            $dataModelFields: i ? Ke(i).map((p) => p.name) : []
          }, g = Ql(d.options, v);
          Object.keys(g).forEach((p) => {
            d[p] = g[p];
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
    e.properties && a(e.properties), e = e.inherits ? ls(e.inherits) : null;
  return l.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function Xt(e, l) {
  var t;
  return ((t = e.request.implements) == null ? void 0 : t.some((a) => a.name === l)) || !1;
}
function qt(e) {
  return e ? Js(e, Ke(e)) : null;
}
function Js(e, l) {
  let t = l.find((r) => r.name.toLowerCase() === "id");
  if (t && t.isPrimaryKey)
    return t;
  let i = l.find((r) => r.isPrimaryKey) || t;
  if (!i) {
    let r = Te.model(e);
    if (r)
      return De(it(r), (d) => qt(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function uo(e, l) {
  return De(qt(e), (t) => ce(l, t.name));
}
function Xs(e, l, t) {
  return e && e.valueType === "none" ? "" : t.key === "%In" || t.key === "%Between" ? `(${t.value})` : co(l, t.value);
}
function co(e, l) {
  return e ? (e = zs(e), Bl(e) || e === "Boolean" ? l : Xa(e) ? `[${l}]` : `'${l}'`) : l;
}
function Ze() {
  const e = f(() => {
    var a;
    return ((a = re.metadata.value) == null ? void 0 : a.app) || null;
  }), l = f(() => {
    var a;
    return ((a = re.metadata.value) == null ? void 0 : a.api) || null;
  }), t = f(() => {
    var a;
    return ((a = re.metadata.value) == null ? void 0 : a.plugins.autoQuery.viewerConventions) || [];
  });
  return Qs(), {
    loadMetadata: no,
    getMetadata: to,
    setMetadata: il,
    clearMetadata: lo,
    metadataApp: e,
    metadataApi: l,
    filterDefinitions: t,
    typeOf: it,
    typeOfRef: ls,
    typeEquals: Ks,
    apiOf: pl,
    findApis: ao,
    typeName: Wa,
    typeName2: Hs,
    property: oo,
    enumOptions: Gs,
    propertyOptions: Zs,
    createFormLayout: ro,
    typeProperties: Ke,
    supportsProp: qs,
    Crud: Te,
    Apis: Vt,
    getPrimaryKey: qt,
    getPrimaryKeyByProps: Js,
    getId: uo,
    createDto: Et,
    makeDto: Ya,
    toFormValues: tl,
    formValues: eo,
    isComplexProp: Us,
    asKvps: ss
  };
}
const We = class {
  static async getOrFetchValue(l, t, a, i, r, d, h) {
    const c = We.getValue(a, h, r);
    return c ?? (await We.fetchLookupIds(l, t, a, i, r, d, [h]), We.getValue(a, h, r));
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
  static async fetchLookupIds(l, t, a, i, r, d, h) {
    const c = t.operations.find((m) => {
      var v;
      return Te.isAnyQuery(m) && ((v = m.dataModel) == null ? void 0 : v.name) == a;
    });
    if (c) {
      const m = We.Lookup[a] ?? (We.Lookup[a] = {}), v = [];
      Object.keys(m).forEach((P) => {
        const j = m[P];
        ce(j, r) && v.push(P);
      });
      const g = h.filter((P) => !v.includes(P));
      if (g.length == 0)
        return;
      const p = d ? null : `${i},${r}`, b = {
        [i + "In"]: g.join(",")
      };
      p && (b.fields = p);
      const k = Et(c, b), A = await l.api(k, { jsconfig: "edv,eccn" });
      if (A.succeeded)
        (ce(A.response, "results") || []).forEach((j) => {
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
        console.error(`Failed to call ${c.request.name}`);
        return;
      }
    }
  }
};
let vt = We;
ke(vt, "Lookup", {});
const Ys = Y({
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
        let d = cl(a, ">").indexOf("class="), h = `${(t == null ? void 0 : t.cls) || ""} ${l.class || ""}`;
        if (d == -1)
          a = `<svg class="${h}" ${a.substring(4)}`;
        else {
          const c = d + 6 + 1;
          a = `${a.substring(0, c) + h} ${a.substring(c)}`;
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
}), fo = { class: "mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-300" }, mo = { class: "flex" }, vo = /* @__PURE__ */ s("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), ho = /* @__PURE__ */ s("path", {
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
      s("div", mo, [
        (o(), u("svg", {
          class: w(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, go, 2)),
        s("span", null, [
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
          s("button", {
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
    }, a = f(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (t[l.color] || t.indigo));
    return (i, r) => {
      const d = U("router-link");
      return e.href ? (o(), X(d, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: h }) => [
          s("button", {
            class: w(n(a)),
            href: e.href,
            onClick: h
          }, [
            Z(i.$slots, "default")
          ], 10, xo)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type,
        class: n(a)
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
          s("button", {
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
}, jt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, en = {
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ue = {
  panelClass(e = "slideOver") {
    return e == "card" ? ht.panelClass : jt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? ht.formClass : jt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? ht.headingClass : jt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? ht.subHeadingClass : jt.subHeadingClass;
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
  modal: en,
  slideOver: jt
}, Symbol.toStringTag, { value: "Module" })), Vo = /* @__PURE__ */ Y({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const l = e, t = Pn(), a = f(() => (rl[l.color] || rl.blue) + (t.href ? "" : " cursor-pointer"));
    return (i, r) => (o(), u("a", {
      class: w(n(a))
    }, [
      Z(i.$slots, "default")
    ], 2));
  }
}), So = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, Mo = {
  role: "list",
  class: "flex items-center space-x-4"
}, Ao = ["href", "title"], To = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), Fo = { class: "sr-only" }, Io = /* @__PURE__ */ Y({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (l, t) => (o(), u("nav", So, [
      s("ol", Mo, [
        s("li", null, [
          s("div", null, [
            s("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              To,
              s("span", Fo, L(e.homeLabel), 1)
            ], 8, Ao)
          ])
        ]),
        Z(l.$slots, "default")
      ])
    ]));
  }
}), Po = { class: "flex items-center" }, Do = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
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
      s("div", Po, [
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
      s("ul", Eo, [
        Z(l.$slots, "default")
      ])
    ]));
  }
}), zo = { class: "relative flex items-start space-x-4 py-6" }, No = { class: "flex-shrink-0" }, Uo = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, qo = { class: "min-w-0 flex-1" }, Qo = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, Ko = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, Go = ["href"], Wo = /* @__PURE__ */ s("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), Zo = { class: "text-base text-gray-500" }, Jo = /* @__PURE__ */ s("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
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
        s("div", No, [
          s("span", Uo, [
            fe(a, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        s("div", qo, [
          s("h3", Qo, [
            s("span", Ko, [
              s("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                Wo,
                he(" " + L(e.title), 1)
              ], 8, Go)
            ])
          ]),
          s("p", Zo, [
            Z(l.$slots, "default")
          ])
        ]),
        Jo
      ]);
    };
  }
});
function Yo(e) {
  re.user.value = e;
}
function ei() {
  re.user.value = null;
}
function tn(e) {
  var l;
  return (((l = re.user.value) == null ? void 0 : l.roles) || []).indexOf(e) >= 0;
}
function ti(e) {
  var l;
  return (((l = re.user.value) == null ? void 0 : l.permissions) || []).indexOf(e) >= 0;
}
function ns() {
  return tn("Admin");
}
function ll(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const l = re.user.value;
  if (!l)
    return !1;
  if (ns())
    return !0;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, h] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((c) => t.indexOf(c) >= 0) || d.length > 0 && !d.some((c) => t.indexOf(c) >= 0) || !r.every((c) => a.indexOf(c) >= 0) || h.length > 0 && !h.every((c) => a.indexOf(c) >= 0));
}
function li(e) {
  if (!e || !e.requiresAuth)
    return null;
  const l = re.user.value;
  if (!l)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (ns())
    return null;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, h] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], c = i.filter((v) => t.indexOf(v) < 0);
  if (c.length > 0)
    return `Requires ${c.map((v) => "<b>" + v + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "");
  let m = r.filter((v) => a.indexOf(v) < 0);
  return m.length > 0 ? `Requires ${m.map((v) => "<b>" + v + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : d.length > 0 && !d.some((v) => t.indexOf(v) >= 0) ? `Requires any ${d.filter((v) => t.indexOf(v) < 0).map((v) => "<b>" + v + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "") : h.length > 0 && !h.every((v) => a.indexOf(v) >= 0) ? `Requires any ${h.filter((v) => a.indexOf(v) < 0).map((v) => "<b>" + v + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : null;
}
function as() {
  const e = f(() => re.user.value || null), l = f(() => re.user.value != null);
  return { signIn: Yo, signOut: ei, user: e, isAuthenticated: l, hasRole: tn, hasPermission: ti, isAdmin: ns, canAccess: ll, invalidAccessMessage: li };
}
const si = { key: 0 }, ni = { class: "md:p-4" }, ln = /* @__PURE__ */ Y({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: l } = as(), { config: t } = wt(), a = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = nl(t.value.redirectSignIn, { redirect: r });
      t.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = nl(t.value.redirectSignOut, { ReturnUrl: r });
      t.value.navigate(d);
    };
    return (r, d) => {
      const h = U("Alert"), c = U("SecondaryButton");
      return e.invalidAccess ? (o(), u("div", si, [
        fe(h, {
          class: w(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        s("div", ni, [
          n(l) ? (o(), X(c, {
            key: 1,
            onClick: i
          }, {
            default: ve(() => [
              he("Sign Out")
            ]),
            _: 1
          })) : (o(), X(c, {
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
}), ai = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, oi = { class: "p-4" }, ii = /* @__PURE__ */ s("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), ri = { class: "flex w-full justify-center" }, ui = /* @__PURE__ */ s("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ s("g", { fill: "currentColor" }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ s("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), di = /* @__PURE__ */ s("span", null, "ASC", -1), ci = [
  ui,
  di
], fi = /* @__PURE__ */ dl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), mi = [
  fi
], vi = /* @__PURE__ */ s("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), hi = { key: 0 }, gi = ["id", "value"], pi = ["for"], yi = { key: 1 }, bi = { class: "mb-2" }, wi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, xi = ["onClick"], ki = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), $i = [
  ki
], Ci = { class: "flex" }, _i = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), Li = [
  _i
], Vi = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, os = /* @__PURE__ */ Y({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: l }) {
    const t = e, a = T(), i = T(""), r = T(""), d = T([]), h = f(() => t.column.meta.isEnum == !0), c = f(() => t.column.meta.isEnum == !0 ? ss(Gs(t.column.type)) : []), m = f(() => {
      var $;
      return (($ = p(t.column.type)) == null ? void 0 : $.map((O) => ({ key: O.value, value: O.name }))) || [];
    }), v = T({ filters: [] }), g = f(() => v.value.filters);
    Ml(() => v.value = Object.assign({}, t.column.settings, {
      filters: Array.from(t.column.settings.filters)
    })), Ml(() => {
      var $, O, B;
      return d.value = ((B = (O = ($ = t.column.settings.filters) == null ? void 0 : $[0]) == null ? void 0 : O.value) == null ? void 0 : B.split(",")) || [];
    });
    function p($) {
      let O = t.definitions;
      return Ns($) || (O = O.filter((B) => B.types !== "string")), O;
    }
    function b($, O) {
      return p($).find((B) => B.value === O);
    }
    function k() {
      var O;
      if (!i.value)
        return;
      let $ = (O = b(t.column.type, i.value)) == null ? void 0 : O.name;
      $ && (v.value.filters.push({ key: i.value, name: $, value: r.value }), i.value = r.value = "");
    }
    function A($) {
      v.value.filters.splice($, 1);
    }
    function P($) {
      return Xs(b(t.column.type, $.key), t.column.type, $);
    }
    function j() {
      l("done");
    }
    function z() {
      var $;
      i.value = "%", ($ = a.value) == null || $.focus();
    }
    function q() {
      if (r.value && k(), h.value) {
        let $ = Object.values(d.value).filter((O) => O);
        v.value.filters = $.length > 0 ? [{ key: "%In", name: "In", value: $.join(",") }] : [];
      }
      l("save", v.value), l("done");
    }
    function Q($) {
      v.value.sort = $ === v.value.sort ? void 0 : $, ul(q);
    }
    return ($, O) => {
      var K;
      const B = U("SelectInput"), D = U("TextInput"), F = U("PrimaryButton"), E = U("SecondaryButton");
      return o(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: j,
        onVnodeMounted: z
      }, [
        s("div", {
          class: "absolute",
          style: El(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: O[5] || (O[5] = je(() => {
          }, ["stop"]))
        }, [
          s("div", ai, [
            s("div", oi, [
              ii,
              s("div", ri, [
                s("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: O[0] || (O[0] = (G) => Q("ASC")),
                  class: w(`${v.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, ci, 2),
                s("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: O[1] || (O[1] = (G) => Q("DESC")),
                  class: w(`${v.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, mi, 2)
              ]),
              vi,
              n(h) ? (o(), u("div", hi, [
                (o(!0), u(ye, null, $e(n(c), (G) => (o(), u("div", {
                  key: G.key,
                  class: "flex items-center"
                }, [
                  gt(s("input", {
                    type: "checkbox",
                    id: G.key,
                    value: G.key,
                    "onUpdate:modelValue": O[2] || (O[2] = (te) => d.value = te),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, gi), [
                    [Hl, d.value]
                  ]),
                  s("label", {
                    for: G.key,
                    class: "ml-3"
                  }, L(G.value), 9, pi)
                ]))), 128))
              ])) : (o(), u("div", yi, [
                (o(!0), u(ye, null, $e(n(g), (G, te) => (o(), u("div", bi, [
                  s("span", wi, [
                    he(L(e.column.name) + " " + L(G.name) + " " + L(P(G)) + " ", 1),
                    s("button", {
                      type: "button",
                      onClick: (M) => A(te),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, $i, 8, xi)
                  ])
                ]))), 256)),
                s("div", Ci, [
                  fe(B, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": O[3] || (O[3] = (G) => i.value = G),
                    entries: n(m),
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
                    onKeyup: Dn(k, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : C("", !0),
                  s("div", { class: "pt-1" }, [
                    s("button", {
                      type: "button",
                      onClick: k,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, Li)
                  ])
                ])
              ]))
            ]),
            s("div", Vi, [
              fe(F, {
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
}), Si = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, Mi = { class: "flex flex-wrap" }, Ai = { class: "group pr-4 sm:pr-6 lg:pr-8" }, Ti = { class: "flex justify-between w-full font-medium" }, Fi = { class: "w-6 flex justify-end" }, Ii = { class: "hidden group-hover:inline" }, Pi = ["onClick", "title"], Di = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), ji = [
  Di
], Oi = {
  key: 0,
  class: "pt-2"
}, Bi = { class: "ml-2" }, Ri = { key: 1 }, Ei = { class: "pt-2" }, Hi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, zi = ["onClick"], Ni = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Ui = [
  Ni
], qi = /* @__PURE__ */ s("span", null, "Clear All", -1), Qi = [
  qi
], is = /* @__PURE__ */ Y({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: l }) {
    const t = e, a = f(() => t.columns.filter((g) => g.settings.filters.length > 0));
    function i(g) {
      var p, b;
      return (b = (p = g == null ? void 0 : g[0]) == null ? void 0 : p.value) == null ? void 0 : b.split(",");
    }
    function r(g) {
      let p = t.definitions;
      return Ns(g) || (p = p.filter((b) => b.types !== "string")), p;
    }
    function d(g, p) {
      return r(g).find((b) => b.value === p);
    }
    function h(g, p) {
      return Xs(d(g.type, p.value), g.type, p);
    }
    function c(g) {
      g.settings.filters = [], l("change", g);
    }
    function m(g, p) {
      g.settings.filters.splice(p, 1), l("change", g);
    }
    function v() {
      t.columns.forEach((g) => {
        g.settings.filters = [], l("change", g);
      }), l("done");
    }
    return (g, p) => (o(), u("div", Si, [
      s("div", Mi, [
        (o(!0), u(ye, null, $e(n(a), (b) => (o(), u("fieldset", Ai, [
          s("legend", Ti, [
            s("span", null, L(n(Fe)(b.name)), 1),
            s("span", Fi, [
              s("span", Ii, [
                s("button", {
                  onClick: (k) => c(b),
                  title: `Clear all ${n(Fe)(b.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, ji, 8, Pi)
              ])
            ])
          ]),
          b.meta.isEnum ? (o(), u("div", Oi, [
            (o(!0), u(ye, null, $e(i(b.settings.filters), (k) => (o(), u("div", {
              key: k,
              class: "flex items-center"
            }, [
              s("label", Bi, L(k), 1)
            ]))), 128))
          ])) : (o(), u("div", Ri, [
            (o(!0), u(ye, null, $e(b.settings.filters, (k, A) => (o(), u("div", Ei, [
              s("span", Hi, [
                he(L(b.name) + " " + L(k.name) + " " + L(h(b, k)) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (P) => m(b, A),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, Ui, 8, zi)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      s("div", { class: "flex justify-center pt-4" }, [
        s("button", {
          type: "button",
          onClick: v,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, Qi)
      ])
    ]));
  }
}), Ki = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Gi = { class: "" }, Wi = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Zi = /* @__PURE__ */ s("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Ji = { class: "mt-4" }, Xi = ["for"], Yi = ["id"], er = ["value", "selected"], tr = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, lr = ["id", "checked"], sr = ["for"], nr = { class: "mt-4" }, ar = { class: "pb-2 px-4" }, or = { class: "" }, ir = ["id", "value"], rr = ["for"], ur = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, rs = /* @__PURE__ */ Y({
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
    Ml(() => i.value = Object.assign({
      take: a.value.take,
      selectedColumns: []
    }, t.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      l("done");
    }
    function h() {
      l("save", i.value);
    }
    return (c, m) => {
      const v = U("PrimaryButton"), g = U("SecondaryButton"), p = U("ModalDialog");
      return o(), X(p, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: ve(() => [
          s("div", Ki, [
            s("div", Gi, [
              s("div", Wi, [
                Zi,
                s("div", Ji, [
                  s("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Xi),
                  gt(s("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": m[0] || (m[0] = (b) => i.value.take = b),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), u(ye, null, $e(r.filter((b) => t.maxLimit == null || b <= t.maxLimit), (b) => (o(), u("option", {
                      value: b,
                      selected: b === i.value.take
                    }, L(b), 9, er))), 256))
                  ], 8, Yi), [
                    [jn, i.value.take]
                  ])
                ]),
                s("div", tr, [
                  s("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: m[1] || (m[1] = (b) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, lr),
                  s("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, sr)
                ]),
                s("div", nr, [
                  s("div", ar, [
                    s("div", or, [
                      (o(!0), u(ye, null, $e(e.columns, (b) => (o(), u("div", {
                        key: b.name,
                        class: "flex items-center"
                      }, [
                        gt(s("input", {
                          type: "checkbox",
                          id: b.name,
                          value: b.name,
                          "onUpdate:modelValue": m[2] || (m[2] = (k) => i.value.selectedColumns = k),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, ir), [
                          [Hl, i.value.selectedColumns]
                        ]),
                        s("label", {
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
          s("div", ur, [
            fe(v, {
              onClick: h,
              color: "red",
              class: "ml-2"
            }, {
              default: ve(() => [
                he(" Save ")
              ]),
              _: 1
            }),
            fe(g, { onClick: d }, {
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
}, mr = { key: 0 }, vr = { key: 1 }, hr = { key: 3 }, gr = { class: "pl-1 pt-1 flex flex-wrap" }, pr = { class: "flex mt-1" }, yr = ["title"], br = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), wr = [
  br
], xr = ["disabled"], kr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), $r = [
  kr
], Cr = ["disabled"], _r = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Lr = [
  _r
], Vr = ["disabled"], Sr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Mr = [
  Sr
], Ar = ["disabled"], Tr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), Fr = [
  Tr
], Ir = {
  key: 0,
  class: "flex mt-1"
}, Pr = { class: "px-4 text-lg text-black dark:text-white" }, Dr = { key: 0 }, jr = { key: 1 }, Or = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Br = { key: 2 }, Rr = { class: "flex flex-wrap" }, Er = {
  key: 0,
  class: "pl-2 mt-1"
}, Hr = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
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
}, Gr = /* @__PURE__ */ s("path", {
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
}, Jr = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ s("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Xr = [
  Jr
], Yr = /* @__PURE__ */ s("span", { class: "whitespace-nowrap" }, "Copy URL", -1), eu = {
  key: 3,
  class: "pl-2 mt-1"
}, tu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), lu = [
  tu
], su = {
  key: 4,
  class: "pl-2 mt-1"
}, nu = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
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
}, iu = /* @__PURE__ */ s("path", {
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
}, du = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), cu = [
  du
], fu = {
  key: 5,
  class: "pl-2 mt-1"
}, mu = ["title"], vu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
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
    const a = e, { config: i, autoQueryGridDefaults: r } = wt(), d = r, h = Be("client"), c = i.value.storage;
    l({ update: Ge, search: fs, createRequestArgs: xl, reset: ks, createDone: Pt, createSave: _l, editDone: It, editSave: Wt });
    const m = (x) => typeof x == "string" ? x.split(",") : x || [];
    function v(x, _) {
      const ee = m(_);
      return x.reduce((W, de) => (W[de] = !ee.includes(de), W), {});
    }
    const g = "filtering,queryString,queryFilters".split(","), p = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), b = f(() => a.deny ? v(g, a.deny) : v(g, d.value.deny)), k = f(() => a.hide ? v(p, a.hide) : v(p, d.value.hide));
    function A(x) {
      return b.value[x];
    }
    function P(x) {
      return k.value[x];
    }
    const j = f(() => a.tableStyle ?? d.value.tableStyle), z = f(() => a.gridClass ?? ae.getGridClass(j.value)), q = f(() => a.grid2Class ?? ae.getGrid2Class(j.value)), Q = f(() => a.grid3Class ?? ae.getGrid3Class(j.value)), $ = f(() => a.grid4Class ?? ae.getGrid4Class(j.value)), O = f(() => a.tableClass ?? ae.getTableClass(j.value)), B = f(() => a.theadClass ?? ae.getTheadClass(j.value)), D = f(() => a.theadRowClass ?? ae.getTheadRowClass(j.value)), F = f(() => a.theadCellClass ?? ae.getTheadCellClass(j.value)), E = f(() => a.toolbarButtonClass ?? ae.toolbarButtonClass);
    function K(x, _) {
      var Le;
      if (a.rowClass)
        return a.rowClass(x, _);
      const ee = !!me.value.AnyUpdate, de = ((Le = Ne.value) != null && Le.name ? ce(x, Ne.value.name) : null) == H.value;
      return ae.getTableRowClass(a.tableStyle, _, de, ee);
    }
    const G = zl(), te = f(() => {
      var x;
      return $l(((x = me.value.AnyQuery.viewModel) == null ? void 0 : x.name) || me.value.AnyQuery.dataModel.name);
    }), M = f(() => {
      const x = Object.keys(G).map((_) => _.toLowerCase());
      return Ke(te.value).filter((_) => x.includes(_.name.toLowerCase()) || x.includes(_.name.toLowerCase() + "-header")).map((_) => _.name);
    });
    function y() {
      let x = m(a.selectedColumns);
      return x.length > 0 ? x : M.value.length > 0 ? M.value : [];
    }
    const S = f(() => {
      let _ = y().map((W) => W.toLowerCase());
      const ee = Ke(te.value);
      return _.length > 0 ? _.map((W) => ee.find((de) => de.name.toLowerCase() === W)).filter((W) => W != null) : ee;
    }), le = f(() => {
      let x = S.value.map((ee) => ee.name), _ = m(ge.value.selectedColumns).map((ee) => ee.toLowerCase());
      return _.length > 0 ? x.filter((ee) => _.includes(ee.toLowerCase())) : x;
    }), V = T([]), I = T(new Xe()), ue = T(new Xe()), oe = T(), se = T(!1), H = T(), J = T(), pe = T(!1), _e = T(), ne = T(a.skip), Pe = T(!1), Ae = 25, ge = T({ take: Ae }), Re = T(!1), Se = f(() => V.value.some((x) => x.settings.filters.length > 0 || !!x.settings.sort) || ge.value.selectedColumns), ze = f(() => V.value.map((x) => x.settings.filters.length).reduce((x, _) => x + _, 0)), Je = f(() => {
      var x;
      return Ke($l(xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)));
    }), Ne = f(() => {
      var x;
      return qt($l(xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)));
    }), R = f(() => ge.value.take ?? Ae), N = f(() => I.value.response ? ce(I.value.response, "results") : []), ie = f(() => {
      var x;
      return ((x = I.value.response) == null ? void 0 : x.total) ?? N.value.length ?? 0;
    }), we = f(() => ne.value > 0), be = f(() => ne.value > 0), Ie = f(() => N.value.length >= R.value), qe = f(() => N.value.length >= R.value), xe = {
      NoQuery: "No Query API was found"
    };
    function Ee(x) {
      if (x) {
        if (a.canFilter)
          return a.canFilter(x);
        const _ = Je.value.find((ee) => ee.name.toLowerCase() == x.toLowerCase());
        if (_)
          return !Us(_);
      }
      return !1;
    }
    function Qe(x) {
      A("queryString") && ql(x);
    }
    async function rt(x) {
      ne.value += x, ne.value < 0 && (ne.value = 0);
      const _ = Math.floor(ie.value / R.value) * R.value;
      ne.value > _ && (ne.value = _), Qe({ skip: ne.value || void 0 }), await Ge();
    }
    async function Ft(x, _) {
      var de, Le;
      if (J.value = null, H.value = _, !x || !_)
        return;
      let ee = Et(me.value.AnyQuery, { [x]: _ });
      const W = await h.api(ee);
      if (W.succeeded) {
        let Me = (de = ce(W.response, "results")) == null ? void 0 : de[0];
        Me || console.warn(`API ${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}(${x}:${_}) returned no results`), J.value = Me;
      }
    }
    async function yn(x, _) {
      var de;
      t("rowSelected", x, _);
      const ee = (de = Ne.value) == null ? void 0 : de.name, W = ee ? ce(x, ee) : null;
      !ee || !W || (Qe({ edit: W }), Ft(ee, W));
    }
    function bn(x, _) {
      var W;
      if (!A("filtering"))
        return;
      let ee = _.target;
      if (Ee(x) && (ee == null ? void 0 : ee.tagName) !== "TD") {
        let de = (W = ee == null ? void 0 : ee.closest("TABLE")) == null ? void 0 : W.getBoundingClientRect(), Le = V.value.find((Me) => Me.name.toLowerCase() == x.toLowerCase());
        if (Le && de) {
          let Me = 318, ut = de.x + Me + 10;
          _e.value = {
            column: Le,
            topLeft: {
              x: Math.max(Math.floor(_.clientX + Me / 2), ut),
              y: de.y + 45
            }
          };
        }
      }
      t("headerSelected", x, _);
    }
    function wn() {
      _e.value = null;
    }
    async function xn(x) {
      var ee;
      let _ = (ee = _e.value) == null ? void 0 : ee.column;
      _ && (_.settings = x, c.setItem(Kt(_.name), JSON.stringify(_.settings)), await Ge()), _e.value = null;
    }
    async function kn(x) {
      c.setItem(Kt(x.name), JSON.stringify(x.settings)), await Ge();
    }
    async function $n(x) {
      pe.value = !1, ge.value = x, c.setItem(kl(), JSON.stringify(x)), await Ge();
    }
    async function Ge() {
      await fs(xl());
    }
    async function Cn() {
      await Ge();
    }
    async function fs(x) {
      const _ = me.value.AnyQuery;
      if (!_) {
        console.error(xe.NoQuery);
        return;
      }
      let ee = Et(_, x), W = As((Me) => {
        I.value.response = I.value.error = void 0, Re.value = Me;
      }), de = await h.api(ee);
      W(), ul(() => I.value = de);
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
        _.forEach((Me) => {
          var Zt;
          const ut = de.find((Ve) => Ve.name.toLowerCase() == Me.toLowerCase());
          (Zt = ut == null ? void 0 : ut.ref) != null && Zt.selfId && Le.push(ut.ref.selfId), ce(G, Me) && Le.push(...de.filter((Ve) => {
            var ct, Dt;
            return ((Dt = (ct = Ve.ref) == null ? void 0 : ct.selfId) == null ? void 0 : Dt.toLowerCase()) == Me.toLowerCase();
          }).map((Ve) => Ve.name));
        }), Le.forEach((Me) => {
          _.includes(Me) || _.push(Me);
        }), x.fields = _.join(",");
      }
      let ee = [];
      if (V.value.forEach((W) => {
        W.settings.sort && ee.push((W.settings.sort === "DESC" ? "-" : "") + W.name), W.settings.filters.forEach((de) => {
          let Le = de.key.replace("%", W.name);
          x[Le] = de.value;
        });
      }), A("queryString") && A("queryFilters")) {
        let W = Tl(location.search);
        if (Object.keys(W).forEach((de) => {
          S.value.find((Me) => Me.name === de) && (x[de] = W[de]);
        }), typeof W.skip < "u") {
          const de = parseInt(W.skip);
          isNaN(de) || (ne.value = x.skip = de);
        }
      }
      return typeof x.skip > "u" && ne.value > 0 && (x.skip = ne.value), ee.length > 0 && (x.orderBy = ee.join(",")), x;
    }
    function _n() {
      const x = ms("csv");
      Pl(x), typeof window < "u" && window.open(x);
    }
    function Ln() {
      const x = ms("json");
      Pl(x), Pe.value = !0, setTimeout(() => Pe.value = !1, 3e3);
    }
    function ms(x = "json") {
      var Le;
      const _ = xl(), ee = `/api/${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}`, W = Kn(h.baseUrl, nl(ee, { ..._, jsconfig: "edv" }));
      return W.indexOf("?") >= 0 ? cl(W, "?") + "." + x + "?" + Gn(W, "?") : W + ".json";
    }
    async function Vn() {
      V.value.forEach((x) => {
        x.settings = { filters: [] }, c.removeItem(Kt(x.name));
      }), ge.value = { take: Ae }, c.removeItem(kl()), await Ge();
    }
    function Sn() {
      se.value = !0, Qe({ create: null });
    }
    const xt = f(() => At(a.type)), nt = f(() => {
      var x;
      return xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name);
    }), kl = () => {
      var x;
      return `${a.id}/ApiPrefs/${xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)}`;
    }, Kt = (x) => {
      var _;
      return `Column/${a.id}:${xt.value || ((_ = me.value.AnyQuery) == null ? void 0 : _.dataModel.name)}.${x}`;
    }, { metadataApi: vs, typeOf: $l, apiOf: hs, filterDefinitions: Mn } = Ze(), { invalidAccessMessage: Cl } = as(), gs = f(() => a.filterDefinitions || Mn.value), me = f(() => {
      let x = m(a.apis);
      return x.length > 0 ? Vt.from(x.map((_) => hs(_)).filter((_) => _ != null).map((_) => _)) : Vt.forType(xt.value, vs.value);
    }), Gt = (x) => `<span class="text-yellow-700">${x}</span>`, ps = f(() => {
      if (!vs.value)
        return Gt(`AppMetadata not loaded, see <a class="${rl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let _ = m(a.apis).map((W) => hs(W) == null ? W : null).filter((W) => W != null);
      if (_.length > 0)
        return Gt(`Unknown API${_.length > 1 ? "s" : ""}: ${_.join(", ")}`);
      let ee = me.value;
      return ee.empty ? Gt("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ee.AnyQuery ? null : Gt(xe.NoQuery);
    }), ys = f(() => me.value.AnyQuery && Cl(me.value.AnyQuery)), bs = f(() => me.value.Create && Cl(me.value.Create)), ws = f(() => me.value.AnyUpdate && Cl(me.value.AnyUpdate)), An = f(() => ll(me.value.Create));
    f(() => ll(me.value.AnyUpdate));
    const xs = f(() => ll(me.value.Delete));
    function It() {
      J.value = null, H.value = null, Qe({ edit: void 0 });
    }
    function Pt() {
      se.value = !1, Qe({ create: void 0 });
    }
    async function Wt() {
      await Ge(), It();
    }
    async function _l() {
      await Ge(), Pt();
    }
    function ks() {
      var ee;
      I.value = new Xe(), ue.value = new Xe(), se.value = !1, H.value = null, J.value = null, pe.value = !1, _e.value = null, ne.value = a.skip, Pe.value = !1, ge.value = { take: Ae }, Re.value = !1;
      const x = a.prefs || ol(c.getItem(kl()));
      x && (ge.value = x), V.value = S.value.map((W) => ({
        name: W.name,
        type: W.type,
        meta: W,
        settings: Object.assign(
          {
            filters: []
          },
          ol(c.getItem(Kt(W.name)))
        )
      })), isNaN(a.skip) || (ne.value = a.skip);
      let _ = (ee = Ne.value) == null ? void 0 : ee.name;
      if (A("queryString")) {
        const W = Tl(location.search);
        typeof W.create < "u" ? se.value = typeof W.create < "u" : _ && (typeof W.edit == "string" || typeof W.edit == "number") && Ft(_, W.edit);
      }
      a.create === !0 && (se.value = !0), _ && a.edit != null && Ft(_, a.edit);
    }
    return lt(async () => {
      ks(), await Ge();
    }), (x, _) => {
      const ee = U("Alert"), W = U("EnsureAccessDialog"), de = U("AutoCreateForm"), Le = U("AutoEditForm"), Me = U("ErrorSummary"), ut = U("Loading"), $s = U("SettingsIcons"), Zt = U("DataGrid");
      return n(ps) ? (o(), u("div", dr, [
        fe(ee, { innerHTML: n(ps) }, null, 8, ["innerHTML"])
      ])) : n(ys) ? (o(), u("div", cr, [
        fe(ln, { "invalid-access": n(ys) }, null, 8, ["invalid-access"])
      ])) : (o(), u("div", fr, [
        se.value && n(me).Create ? (o(), u("div", mr, [
          n(bs) ? (o(), X(W, {
            key: 0,
            title: `Create ${n(nt)}`,
            "invalid-access": n(bs),
            "alert-class": "text-yellow-700",
            onDone: Pt
          }, null, 8, ["title", "invalid-access"])) : n(G).createform ? Z(x.$slots, "createform", {
            key: 1,
            type: n(me).Create.request.name,
            configure: e.configureField,
            done: Pt,
            save: _l
          }) : (o(), X(de, {
            key: 2,
            type: n(me).Create.request.name,
            configure: e.configureField,
            onDone: Pt,
            onSave: _l
          }, {
            header: ve(() => [
              Z(x.$slots, "formheader", {
                form: "create",
                apis: n(me),
                type: n(nt)
              })
            ]),
            footer: ve(() => [
              Z(x.$slots, "formfooter", {
                form: "create",
                apis: n(me),
                type: n(nt)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : J.value && n(me).AnyUpdate ? (o(), u("div", vr, [
          n(ws) ? (o(), X(W, {
            key: 0,
            title: `Update ${n(nt)}`,
            "invalid-access": n(ws),
            "alert-class": "text-yellow-700",
            onDone: It
          }, null, 8, ["title", "invalid-access"])) : n(G).editform ? Z(x.$slots, "editform", {
            key: 1,
            model: J.value,
            type: n(me).AnyUpdate.request.name,
            deleteType: n(xs) ? n(me).Delete.request.name : null,
            configure: e.configureField,
            done: It,
            save: Wt
          }) : (o(), X(Le, {
            key: 2,
            modelValue: J.value,
            "onUpdate:modelValue": _[0] || (_[0] = (Ve) => J.value = Ve),
            type: n(me).AnyUpdate.request.name,
            deleteType: n(xs) ? n(me).Delete.request.name : null,
            configure: e.configureField,
            onDone: It,
            onSave: Wt,
            onDelete: Wt
          }, {
            header: ve(() => [
              Z(x.$slots, "formheader", {
                form: "edit",
                apis: n(me),
                type: n(nt),
                model: J.value,
                id: H.value
              })
            ]),
            footer: ve(() => [
              Z(x.$slots, "formfooter", {
                form: "edit",
                apis: n(me),
                type: n(nt),
                model: J.value,
                id: H.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : C("", !0),
        n(G).toolbar ? Z(x.$slots, "toolbar", { key: 2 }) : P("toolbar") ? (o(), u("div", hr, [
          pe.value ? (o(), X(rs, {
            key: 0,
            columns: n(S),
            prefs: ge.value,
            onDone: _[1] || (_[1] = (Ve) => pe.value = !1),
            onSave: $n
          }, null, 8, ["columns", "prefs"])) : C("", !0),
          s("div", gr, [
            s("div", pr, [
              P("preferences") ? (o(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${n(nt)} Preferences`,
                onClick: _[2] || (_[2] = (Ve) => pe.value = !pe.value)
              }, wr, 8, yr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 1,
                type: "button",
                class: w(["pl-2", n(we) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !n(we),
                onClick: _[3] || (_[3] = (Ve) => rt(-n(ie)))
              }, $r, 10, xr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 2,
                type: "button",
                class: w(["pl-2", n(be) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !n(be),
                onClick: _[4] || (_[4] = (Ve) => rt(-n(R)))
              }, Lr, 10, Cr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 3,
                type: "button",
                class: w(["pl-2", n(Ie) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !n(Ie),
                onClick: _[5] || (_[5] = (Ve) => rt(n(R)))
              }, Mr, 10, Vr)) : C("", !0),
              P("pagingNav") ? (o(), u("button", {
                key: 4,
                type: "button",
                class: w(["pl-2", n(qe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !n(qe),
                onClick: _[6] || (_[6] = (Ve) => rt(n(ie)))
              }, Fr, 10, Ar)) : C("", !0)
            ]),
            P("pagingInfo") ? (o(), u("div", Ir, [
              s("div", Pr, [
                Re.value ? (o(), u("span", Dr, "Querying...")) : C("", !0),
                n(N).length ? (o(), u("span", jr, [
                  Or,
                  he(" " + L(ne.value + 1) + " - " + L(Math.min(ne.value + n(N).length, n(ie))) + " ", 1),
                  s("span", null, " of " + L(n(ie)), 1)
                ])) : I.value.completed ? (o(), u("span", Br, "No Results")) : C("", !0)
              ])
            ])) : C("", !0),
            s("div", Rr, [
              P("refresh") ? (o(), u("div", Er, [
                s("button", {
                  type: "button",
                  onClick: Cn,
                  title: "Refresh",
                  class: w(n(E))
                }, zr, 2)
              ])) : C("", !0),
              P("downloadCsv") ? (o(), u("div", Nr, [
                s("button", {
                  type: "button",
                  onClick: _n,
                  title: "Download CSV",
                  class: w(n(E))
                }, qr, 2)
              ])) : C("", !0),
              P("copyApiUrl") ? (o(), u("div", Qr, [
                s("button", {
                  type: "button",
                  onClick: Ln,
                  title: "Copy API URL",
                  class: w(n(E))
                }, [
                  Pe.value ? (o(), u("svg", Kr, Wr)) : (o(), u("svg", Zr, Xr)),
                  Yr
                ], 2)
              ])) : C("", !0),
              n(Se) && P("resetPreferences") ? (o(), u("div", eu, [
                s("button", {
                  type: "button",
                  onClick: Vn,
                  title: "Reset Preferences & Filters",
                  class: w(n(E))
                }, lu, 2)
              ])) : C("", !0),
              P("filtersView") && n(ze) > 0 ? (o(), u("div", su, [
                s("button", {
                  type: "button",
                  onClick: _[7] || (_[7] = (Ve) => oe.value = oe.value == "filters" ? null : "filters"),
                  class: w(n(E)),
                  "aria-expanded": "false"
                }, [
                  nu,
                  s("span", au, L(n(ze)) + " " + L(n(ze) == 1 ? "Filter" : "Filters"), 1),
                  oe.value != "filters" ? (o(), u("svg", ou, ru)) : (o(), u("svg", uu, cu))
                ], 2)
              ])) : C("", !0),
              P("newItem") && n(me).Create && n(An) ? (o(), u("div", fu, [
                s("button", {
                  type: "button",
                  onClick: Sn,
                  title: n(nt),
                  class: w(n(E))
                }, [
                  vu,
                  s("span", hu, "New " + L(n(nt)), 1)
                ], 10, mu)
              ])) : C("", !0),
              n(G).toolbarbuttons ? Z(x.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: n(E)
              }) : C("", !0)
            ])
          ])
        ])) : C("", !0),
        oe.value == "filters" ? (o(), X(is, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: n(gs),
          columns: V.value,
          onDone: _[8] || (_[8] = (Ve) => oe.value = null),
          onChange: kn
        }, null, 8, ["definitions", "columns"])) : C("", !0),
        ue.value.error ?? I.value.error ? (o(), X(Me, {
          key: 5,
          status: ue.value.error ?? I.value.error
        }, null, 8, ["status"])) : Re.value ? (o(), X(ut, {
          key: 6,
          class: "p-2"
        })) : C("", !0),
        _e.value ? (o(), u("div", gu, [
          fe(os, {
            definitions: n(gs),
            column: _e.value.column,
            "top-left": _e.value.topLeft,
            onDone: wn,
            onSave: xn
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : C("", !0),
        n(N).length ? (o(), X(Zt, {
          key: 8,
          id: e.id,
          items: n(N),
          type: e.type,
          "selected-columns": n(le),
          class: "mt-1",
          onFiltersChanged: Ge,
          tableStyle: n(j),
          gridClass: n(z),
          grid2Class: n(q),
          grid3Class: n(Q),
          grid4Class: n($),
          tableClass: n(O),
          theadClass: n(B),
          theadRowClass: n(D),
          theadCellClass: n(F),
          tbodyClass: e.tbodyClass,
          rowClass: K,
          onRowSelected: yn,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: bn
        }, Nl({
          header: ve(({ column: Ve, label: ct }) => {
            var Dt;
            return [
              A("filtering") && Ee(Ve) ? (o(), u("div", pu, [
                s("span", yu, L(ct), 1),
                fe($s, {
                  column: V.value.find((Tn) => Tn.name.toLowerCase() === Ve.toLowerCase()),
                  "is-open": ((Dt = _e.value) == null ? void 0 : Dt.column.name) === Ve
                }, null, 8, ["column", "is-open"])
              ])) : (o(), u("div", bu, [
                s("span", wu, L(ct), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          $e(Object.keys(n(G)), (Ve) => ({
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
}, Cu = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), _u = [
  Cu
], Lu = /* @__PURE__ */ s("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), Vu = /* @__PURE__ */ s("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), Su = [
  Lu,
  Vu
], Mu = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Au = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), Tu = [
  Au
], Fu = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Iu = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), Pu = [
  Iu
], Du = /* @__PURE__ */ Y({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (l, t) => {
      var a, i, r, d, h, c, m;
      return o(), u("div", ku, [
        (r = (i = (a = e.column) == null ? void 0 : a.settings) == null ? void 0 : i.filters) != null && r.length ? (o(), u("svg", $u, _u)) : (o(), u("svg", {
          key: 1,
          class: w(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, Su, 2)),
        ((h = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : h.sort) === "ASC" ? (o(), u("svg", Mu, Tu)) : ((m = (c = e.column) == null ? void 0 : c.settings) == null ? void 0 : m.sort) === "DESC" ? (o(), u("svg", Fu, Pu)) : C("", !0)
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
}, Hu = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
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
    const t = e, a = (p) => p.value;
    l({
      focus: r
    });
    const i = T();
    function r() {
      var p;
      (p = i.value) == null || p.focus();
    }
    const d = f(() => t.type || "text"), h = f(() => t.label ?? Fe(Ye(t.id))), c = f(() => t.placeholder ?? h.value);
    let m = Be("ApiState", void 0);
    const v = f(() => dt.call({ responseStatus: t.status ?? (m == null ? void 0 : m.error.value) }, t.id)), g = f(() => [ot.base, v.value ? ot.invalid : ot.valid, t.inputClass]);
    return (p, b) => (o(), u("div", {
      class: w([p.$attrs.class])
    }, [
      n(h) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(n(h)), 11, Ou)) : C("", !0),
      s("div", Bu, [
        s("input", Ce({
          ref_key: "txtInput",
          ref: i,
          type: n(d),
          name: e.id,
          id: e.id,
          class: n(g),
          placeholder: n(c),
          value: e.modelValue,
          onInput: b[0] || (b[0] = (k) => p.$emit("update:modelValue", a(k.target))),
          "aria-invalid": n(v) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, n(st)(p.$attrs, ["class"])), null, 16, Ru),
        n(v) ? (o(), u("div", Eu, zu)) : C("", !0)
      ]),
      n(v) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(n(v)), 9, Nu)) : e.help ? (o(), u("p", {
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
    const l = e, t = (c) => c.value, a = f(() => l.label ?? Fe(Ye(l.id))), i = f(() => l.placeholder ?? a.value);
    let r = Be("ApiState", void 0);
    const d = f(() => dt.call({ responseStatus: l.status ?? (r == null ? void 0 : r.error.value) }, l.id)), h = f(() => ["shadow-sm " + ot.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ot.valid, l.inputClass]);
    return (c, m) => (o(), u("div", {
      class: w([c.$attrs.class])
    }, [
      n(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(n(a)), 11, Ku)) : C("", !0),
      s("div", Gu, [
        s("textarea", Ce({
          name: e.id,
          id: e.id,
          class: n(h),
          placeholder: n(i),
          onInput: m[0] || (m[0] = (v) => c.$emit("update:modelValue", t(v.target))),
          "aria-invalid": n(d) != null,
          "aria-describedby": `${e.id}-error`
        }, n(st)(c.$attrs, ["class"])), L(e.modelValue), 17, Wu)
      ]),
      n(d) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(n(d)), 9, Zu)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, L(e.help), 9, Ju)) : C("", !0)
    ], 2));
  }
}), ed = ["for"], td = ["id", "name", "value", "aria-invalid", "aria-describedby"], ld = ["value"], sd = ["id"], nd = {
  inheritAttrs: !1
}, ad = /* @__PURE__ */ Y({
  ...nd,
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
    const l = e, t = (h) => h.value, a = f(() => l.label ?? Fe(Ye(l.id)));
    let i = Be("ApiState", void 0);
    const r = f(() => dt.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id)), d = f(() => l.entries || (l.values ? l.values.map((h) => ({ key: h, value: h })) : l.options ? Object.keys(l.options).map((h) => ({ key: h, value: l.options[h] })) : []));
    return (h, c) => (o(), u("div", {
      class: w([h.$attrs.class])
    }, [
      n(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(n(a)), 11, ed)) : C("", !0),
      s("select", Ce({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          n(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: c[0] || (c[0] = (m) => h.$emit("update:modelValue", t(m.target))),
        "aria-invalid": n(r) != null,
        "aria-describedby": `${e.id}-error`
      }, n(st)(h.$attrs, ["class"])), [
        (o(!0), u(ye, null, $e(n(d), (m) => (o(), u("option", {
          value: m.key
        }, L(m.value), 9, ld))), 256))
      ], 16, td),
      n(r) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(n(r)), 9, sd)) : C("", !0)
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
    const t = e, a = f(() => t.label ?? Fe(Ye(t.id)));
    let i = Be("ApiState", void 0);
    const r = f(() => dt.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id));
    return (d, h) => (o(), u("div", {
      class: w(["relative flex items-start", d.$attrs.class])
    }, [
      s("div", od, [
        s("input", Ce({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: h[0] || (h[0] = (c) => d.$emit("update:modelValue", c.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, n(st)(d.$attrs, ["class"])), null, 16, id)
      ]),
      s("div", rd, [
        s("label", {
          for: e.id,
          class: w(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, L(n(a)), 11, ud),
        n(r) ? (o(), u("p", dd, L(n(r)), 1)) : e.help ? (o(), u("p", cd, L(e.help), 1)) : C("", !0)
      ])
    ], 2));
  }
}), vd = ["id"], hd = ["for"], gd = { class: "mt-1 relative rounded-md shadow-sm" }, pd = ["id", "name", "value"], yd = ["onClick"], bd = { class: "flex flex-wrap pb-1.5" }, wd = { class: "pt-1.5 pl-1" }, xd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, kd = ["onClick"], $d = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Cd = [
  $d
], _d = { class: "pt-1.5 pl-1 shrink" }, Ld = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], Vd = ["id"], Sd = ["onMouseover", "onClick"], Md = { class: "block truncate" }, Ad = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Td = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Fd = [
  Td
], Id = ["id"], Pd = ["id"], Dd = {
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
    const t = e, a = f(() => typeof t.modelValue == "string" ? t.modelValue.trim().length == 0 ? [] : t.modelValue.split(",") : t.modelValue || []), i = T(), r = T(!1), d = f(() => !t.allowableValues || t.allowableValues.length == 0 ? [] : t.allowableValues.filter((y) => !a.value.includes(y) && y.toLowerCase().includes(m.value.toLowerCase())));
    function h(y) {
      i.value = y;
    }
    const c = T(null), m = T(""), v = f(() => t.type || "text"), g = f(() => t.label ?? Fe(Ye(t.id)));
    let p = Be("ApiState", void 0);
    const b = f(() => dt.call({ responseStatus: t.status ?? (p == null ? void 0 : p.error.value) }, t.id)), k = f(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      b.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      t.inputClass
    ]), A = (y) => $(a.value.filter((S) => S != y));
    function P(y) {
      var S;
      document.activeElement === y.target && ((S = c.value) == null || S.focus());
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
      if (y.key == "Backspace" && m.value.length == 0 && a.value.length > 0 && A(a.value[a.value.length - 1]), !(!t.allowableValues || t.allowableValues.length == 0))
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
      let y = Wn(m.value.trim(), ",");
      return y[0] == "," && (y = y.substring(1)), y = y.trim(), y.length == 0 && r.value && d.value.length > 0 ? i.value : y;
    }
    function D(y) {
      const S = B();
      if (S.length > 0) {
        const le = t.delimiters.some((I) => I == y.key);
        if (le && y.preventDefault(), y.key == "Enter" || y.key == "NumpadEnter" || y.key.length == 1 && le) {
          G(S);
          return;
        }
      }
    }
    const F = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function E() {
      setTimeout(() => {
        let y = al(`#${t.id}-tag li.active`);
        y && y.scrollIntoView(F);
      }, 0);
    }
    function K() {
      setTimeout(() => {
        let y = al(`#${t.id}-tag li.active`);
        y && ("scrollIntoViewIfNeeded" in y ? y.scrollIntoViewIfNeeded(F) : y.scrollIntoView(F));
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
      M(S);
    }
    function M(y) {
      if (!y)
        return;
      const S = new RegExp(`\\n|\\t|${t.delimiters.join("|")}`), le = Array.from(a.value);
      y.split(S).map((I) => I.trim()).forEach((I) => {
        le.indexOf(I) == -1 && le.push(I);
      }), $(le), m.value = "";
    }
    return (y, S) => (o(), u("div", {
      class: w([y.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      n(g) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, L(n(g)), 11, hd)) : C("", !0),
      s("div", gd, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: n(a).join(",")
        }, null, 8, pd),
        s("button", {
          class: w(n(k)),
          onClick: je(P, ["prevent"]),
          onFocus: S[2] || (S[2] = (le) => r.value = !0),
          tabindex: "-1"
        }, [
          s("div", bd, [
            (o(!0), u(ye, null, $e(n(a), (le) => (o(), u("div", wd, [
              s("span", xd, [
                he(L(le) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (V) => A(le),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, Cd, 8, kd)
              ])
            ]))), 256)),
            s("div", _d, [
              gt(s("input", Ce({
                ref_key: "txtInput",
                ref: c,
                type: n(v),
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
                "aria-invalid": n(b) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: O,
                onKeypress: D,
                onPaste: je(te, ["prevent", "stop"]),
                onFocus: q,
                onBlur: Q,
                onClick: S[1] || (S[1] = (le) => r.value = !0)
              }, n(st)(y.$attrs, ["class"])), null, 16, Ld), [
                [On, m.value]
              ])
            ])
          ])
        ], 42, yd),
        r.value && n(d).length ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: O,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(ye, null, $e(n(d), (le) => (o(), u("li", {
            class: w([le === i.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (V) => h(le),
            onClick: (V) => G(le),
            role: "option",
            tabindex: "-1"
          }, [
            s("span", Md, L(le), 1)
          ], 42, Sd))), 256))
        ], 40, Vd)) : C("", !0),
        n(b) ? (o(), u("div", Ad, Fd)) : C("", !0)
      ]),
      n(b) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(n(b)), 9, Id)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, L(e.help), 9, Pd)) : C("", !0)
    ], 10, vd));
  }
}), Od = { class: "relative w-full" }, Bd = ["for"], Rd = { class: "block mt-2" }, Ed = /* @__PURE__ */ s("span", { class: "sr-only" }, "help ?? useLabel", -1), Hd = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], zd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Nd = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
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
}, sc = { class: "align-top pb-2 whitespace-nowrap" }, nc = {
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
    const l = e, t = T(null), { assetsPathResolver: a, fallbackPathResolver: i } = wt(), r = {}, d = T(), h = T(((Q = l.files) == null ? void 0 : Q.map(c)) || []);
    function c($) {
      return $.filePath = a($.filePath), $;
    }
    l.values && l.values.length > 0 && (h.value = l.values.map(($) => {
      let O = $.replace(/\\/g, "/");
      return { fileName: Zn(pt(O, "/"), "."), filePath: O, contentType: jl(O) };
    }).map(c));
    const m = f(() => l.label ?? Fe(Ye(l.id))), v = f(() => l.placeholder ?? m.value);
    let g = Be("ApiState", void 0);
    const p = f(() => dt.call({ responseStatus: l.status ?? (g == null ? void 0 : g.error.value) }, l.id)), b = f(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      p.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      l.inputClass
    ]), k = ($) => {
      let O = $.target;
      d.value = "", h.value = Array.from(O.files || []).map((B) => ({
        fileName: B.name,
        filePath: Zl(B),
        contentLength: B.size,
        contentType: B.type || jl(B.name)
      }));
    }, A = () => {
      var $;
      return ($ = t.value) == null ? void 0 : $.click();
    }, P = ($) => $ == null ? !1 : $.startsWith("data:") || $.startsWith("blob:"), j = f(() => {
      if (h.value.length > 0)
        return h.value[0].filePath;
      let $ = typeof l.modelValue == "string" ? l.modelValue : l.values && l.values[0];
      return $ && mt(a($)) || null;
    }), z = ($) => !$ || $.startsWith("data:") || $.endsWith(".svg") ? "" : "rounded-full object-cover";
    function q($) {
      d.value = i(j.value);
    }
    return zt(Rs), ($, O) => (o(), u("div", {
      class: w(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      s("div", Od, [
        n(m) ? (o(), u("label", {
          key: 0,
          for: e.id,
          class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, L(n(m)), 11, Bd)) : C("", !0),
        s("div", Rd, [
          Ed,
          s("input", Ce({
            ref_key: "input",
            ref: t,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: n(b),
            placeholder: n(v),
            "aria-invalid": n(p) != null,
            "aria-describedby": `${e.id}-error`
          }, $.$attrs, { onChange: k }), null, 16, Hd),
          n(p) ? (o(), u("div", zd, Ud)) : C("", !0)
        ]),
        n(p) ? (o(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, L(n(p)), 9, qd)) : e.help ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, L(e.help), 9, Qd)) : C("", !0)
      ]),
      e.multiple ? (o(), u("div", Zd, [
        s("table", Jd, [
          (o(!0), u(ye, null, $e(h.value, (B) => (o(), u("tr", null, [
            s("td", Xd, [
              s("div", {
                class: "flex w-full",
                title: P(B.filePath) ? "" : B.filePath
              }, [
                s("img", {
                  src: r[n(mt)(B.filePath)] || n(a)(n(mt)(B.filePath)),
                  class: w(["mr-2 h-8 w-8", z(B.filePath)]),
                  onError: (D) => r[n(mt)(B.filePath)] = n(i)(n(mt)(B.filePath))
                }, null, 42, ec),
                P(B.filePath) ? (o(), u("span", lc, L(B.fileName), 1)) : (o(), u("a", {
                  key: 0,
                  href: n(a)(B.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, L(B.fileName), 9, tc))
              ], 8, Yd)
            ]),
            s("td", sc, [
              B.contentLength && B.contentLength > 0 ? (o(), u("span", nc, L(n(Xl)(B.contentLength)), 1)) : C("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), u("div", Kd, [
        n(j) ? (o(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: P(n(j)) ? "" : n(j)
        }, [
          s("img", {
            onClick: A,
            class: w(["h-16 w-16", z(n(j))]),
            alt: `Current ${n(m)}`,
            src: d.value || n(a)(n(j)),
            onError: q
          }, null, 42, Wd)
        ], 8, Gd)) : C("", !0)
      ]))
    ], 2));
  }
}), oc = ["id"], ic = ["for"], rc = { class: "relative mt-1" }, uc = ["id", "placeholder"], dc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), cc = [
  dc
], fc = ["id"], mc = ["onMouseover", "onClick"], vc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
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
}, pc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
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
    function r(M) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(M) >= 0;
    }
    const d = f(() => a.label ?? Fe(Ye(a.id)));
    let h = Be("ApiState", void 0);
    const c = f(() => dt.call({ responseStatus: a.status ?? (h == null ? void 0 : h.error.value) }, a.id)), m = f(() => [ot.base, c.value ? ot.invalid : ot.valid]), v = T(null), g = T(""), p = T(null), b = T(a.viewCount), k = T([]), A = f(() => g.value ? a.options.filter((y) => a.match(y, g.value)).slice(0, b.value) : a.options), P = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function j(M) {
      p.value = M, k.value.indexOf(M) > Math.floor(b.value * 0.9) && (b.value += a.viewCount, te());
    }
    const z = [",", `
`, "	"];
    function q(M) {
      var S;
      const y = (S = M.clipboardData) == null ? void 0 : S.getData("Text");
      Q(y);
    }
    function Q(M) {
      if (!M)
        return;
      const y = z.some((S) => M.includes(S));
      if (!a.multiple || !y) {
        const S = a.options.filter((le) => a.match(le, M));
        S.length == 1 && (G(S[0]), i.value = !1, Yt());
      } else if (y) {
        const S = new RegExp("\\r|\\n|\\t|,"), V = M.split(S).filter((I) => I.trim()).map((I) => a.options.find((ue) => a.match(ue, I))).filter((I) => !!I);
        if (V.length > 0) {
          g.value = "", i.value = !1, p.value = null;
          let I = Array.from(a.modelValue || []);
          V.forEach((ue) => {
            r(ue) ? I = I.filter((oe) => oe != ue) : I.push(ue);
          }), t("update:modelValue", I), Yt();
        }
      }
    }
    function $(M) {
      P.indexOf(M.code) || K();
    }
    function O(M) {
      if (!(M.shiftKey || M.ctrlKey || M.altKey)) {
        if (!i.value) {
          M.code == "ArrowDown" && (i.value = !0, p.value = k.value[0]);
          return;
        }
        if (M.code == "Escape" || M.code == "Tab")
          i.value = !1;
        else if (M.code == "Home")
          p.value = k.value[0], D();
        else if (M.code == "End")
          p.value = k.value[k.value.length - 1], D();
        else if (M.code == "ArrowDown") {
          if (!p.value)
            p.value = k.value[0];
          else {
            const y = k.value.indexOf(p.value);
            p.value = y + 1 < k.value.length ? k.value[y + 1] : k.value[0];
          }
          F();
        } else if (M.code == "ArrowUp") {
          if (!p.value)
            p.value = k.value[k.value.length - 1];
          else {
            const y = k.value.indexOf(p.value);
            p.value = y - 1 >= 0 ? k.value[y - 1] : k.value[k.value.length - 1];
          }
          F();
        } else
          M.code == "Enter" && (p.value ? (G(p.value), a.multiple || (M.preventDefault(), Yt())) : i.value = !1);
      }
    }
    const B = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function D() {
      setTimeout(() => {
        let M = al(`#${a.id}-autocomplete li.active`);
        M && M.scrollIntoView(B);
      }, 0);
    }
    function F() {
      setTimeout(() => {
        let M = al(`#${a.id}-autocomplete li.active`);
        M && ("scrollIntoViewIfNeeded" in M ? M.scrollIntoViewIfNeeded(B) : M.scrollIntoView(B));
      }, 0);
    }
    function E(M) {
      var y;
      i.value = M, M && (K(), (y = v.value) == null || y.focus());
    }
    function K() {
      i.value = !0, te();
    }
    function G(M) {
      if (g.value = "", i.value = !1, a.multiple) {
        let y = Array.from(a.modelValue || []);
        r(M) ? y = y.filter((S) => S != M) : y.push(M), p.value = null, t("update:modelValue", y);
      } else {
        let y = M;
        a.modelValue == M && (y = null), t("update:modelValue", y);
      }
    }
    function te() {
      k.value = A.value;
    }
    return Mt(g, te), (M, y) => (o(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      n(d) ? (o(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, L(n(d)), 9, ic)) : C("", !0),
      s("div", rc, [
        gt(s("input", Ce({
          ref_key: "txtInput",
          ref: v,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": y[0] || (y[0] = (S) => g.value = S),
          class: n(m),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: y[1] || (y[1] = (S) => i.value = !0),
          onKeydown: O,
          onKeyup: $,
          onClick: K,
          onPaste: q
        }, M.$attrs), null, 16, uc), [
          [Bn, g.value]
        ]),
        s("button", {
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
          (o(!0), u(ye, null, $e(k.value, (S) => (o(), u("li", {
            class: w([S === p.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (le) => j(S),
            onClick: (le) => G(S),
            role: "option",
            tabindex: "-1"
          }, [
            Z(M.$slots, "item", _t(sl(S))),
            r(S) ? (o(), u("span", {
              key: 0,
              class: w(["absolute inset-y-0 right-0 flex items-center pr-4", S === p.value ? "text-white" : "text-indigo-600"])
            }, hc, 2)) : C("", !0)
          ], 42, mc))), 256))
        ], 40, fc)) : !e.multiple && e.modelValue ? (o(), u("div", {
          key: 1,
          onKeydown: O,
          onClick: y[3] || (y[3] = (S) => E(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          Z(M.$slots, "item", _t(sl(e.modelValue)))
        ], 32)) : C("", !0),
        n(c) ? (o(), u("div", gc, yc)) : C("", !0)
      ]),
      n(c) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, L(n(c)), 9, bc)) : e.help ? (o(), u("p", {
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
      toggle(v) {
        var g;
        (g = r.value) == null || g.toggle(v);
      }
    });
    const i = f(() => a.multiple != null ? a.multiple : Array.isArray(a.modelValue)), r = T();
    function d(v, g) {
      return !g || v.value.toLowerCase().includes(g.toLowerCase());
    }
    const h = f(() => a.entries || (a.values ? a.values.map((v) => ({ key: v, value: v })) : a.options ? Object.keys(a.options).map((v) => ({ key: v, value: a.options[v] })) : [])), c = T(i.value ? [] : null);
    lt(() => {
      a.modelValue == null || a.modelValue === "" ? c.value = i.value ? [] : null : typeof a.modelValue == "string" ? c.value = h.value.find((v) => v.key === a.modelValue) || null : Array.isArray(a.modelValue) && (c.value = h.value.filter((v) => a.modelValue.includes(v.key)));
    });
    const m = f(() => c.value == null ? "" : Array.isArray(c.value) ? c.value.map((v) => encodeURIComponent(v.key)).join(",") : c.value.key);
    return (v, g) => {
      const p = U("Autocomplete");
      return o(), u(ye, null, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: n(m)
        }, null, 8, kc),
        fe(p, Ce({
          ref_key: "input",
          ref: r,
          id: e.id,
          options: n(h),
          match: d,
          multiple: n(i)
        }, v.$attrs, {
          modelValue: c.value,
          "onUpdate:modelValue": g[0] || (g[0] = (b) => c.value = b),
          "update:modelValue": "updateModelValue"
        }), {
          item: ve(({ key: b, value: k }) => [
            s("span", $c, L(k), 1)
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
    const t = e, a = f(() => t.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = f(() => st(t.input, i)), d = T(De(
      t.modelValue[t.input.id],
      (c) => t.input.type === "file" ? null : t.input.type === "date" && c instanceof Date ? ml(c) : t.input.type === "time" ? Is(c) : c
    ));
    Mt(d, () => {
      t.modelValue[t.input.id] = d.value, l("update:modelValue", t.modelValue);
    });
    const h = f(() => {
      const c = t.modelValue[t.input.id];
      if (t.input.type !== "file" || !c)
        return [];
      if (typeof c == "string")
        return [{ filePath: c, fileName: pt(c, "/") }];
      if (!Array.isArray(c) && typeof c == "object")
        return c;
      if (Array.isArray(c)) {
        const m = [];
        return c.forEach((v) => {
          typeof v == "string" ? m.push({ filePath: v, fileName: pt(v, "/") }) : typeof v == "object" && m.push(v);
        }), m;
      }
    });
    return (c, m) => {
      var j, z, q, Q, $, O, B, D, F, E, K, G, te, M, y, S, le, V, I, ue, oe, se;
      const v = U("SelectInput"), g = U("CheckboxInput"), p = U("TagInput"), b = U("Combobox"), k = U("FileInput"), A = U("TextareaInput"), P = U("TextInput");
      return n(a) == "select" ? (o(), X(v, Ce({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (H) => d.value = H),
        status: (j = e.api) == null ? void 0 : j.error,
        "input-class": (z = e.input.css) == null ? void 0 : z.input,
        "label-class": (q = e.input.css) == null ? void 0 : q.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, n(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : n(a) == "checkbox" ? (o(), X(g, Ce({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = (H) => d.value = H),
        status: (Q = e.api) == null ? void 0 : Q.error,
        "input-class": ($ = e.input.css) == null ? void 0 : $.input,
        "label-class": (O = e.input.css) == null ? void 0 : O.label
      }, n(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : n(a) == "tag" ? (o(), X(p, Ce({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[2] || (m[2] = (H) => d.value = H),
        status: (B = e.api) == null ? void 0 : B.error,
        "input-class": (D = e.input.css) == null ? void 0 : D.input,
        "label-class": (F = e.input.css) == null ? void 0 : F.label,
        allowableValues: e.input.allowableValues,
        string: ((E = e.input.prop) == null ? void 0 : E.type) == "String"
      }, n(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : n(a) == "combobox" ? (o(), X(b, Ce({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[3] || (m[3] = (H) => d.value = H),
        status: (K = e.api) == null ? void 0 : K.error,
        "input-class": (G = e.input.css) == null ? void 0 : G.input,
        "label-class": (te = e.input.css) == null ? void 0 : te.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, n(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : n(a) == "file" ? (o(), X(k, Ce({
        key: 4,
        id: e.input.id,
        status: (M = e.api) == null ? void 0 : M.error,
        modelValue: d.value,
        "onUpdate:modelValue": m[4] || (m[4] = (H) => d.value = H),
        "input-class": (y = e.input.css) == null ? void 0 : y.input,
        "label-class": (S = e.input.css) == null ? void 0 : S.label,
        files: n(h)
      }, n(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : n(a) == "textarea" ? (o(), X(A, Ce({
        key: 5,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[5] || (m[5] = (H) => d.value = H),
        status: (le = e.api) == null ? void 0 : le.error,
        "input-class": (V = e.input.css) == null ? void 0 : V.input,
        "label-class": (I = e.input.css) == null ? void 0 : I.label
      }, n(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), X(P, Ce({
        key: 6,
        type: n(a),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[6] || (m[6] = (H) => d.value = H),
        status: (ue = e.api) == null ? void 0 : ue.error,
        "input-class": (oe = e.input.css) == null ? void 0 : oe.input,
        "label-class": (se = e.input.css) == null ? void 0 : se.label
      }, n(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), Lc = { class: "lookup-field" }, Vc = ["name", "value"], Sc = {
  key: 0,
  class: "flex justify-between"
}, Mc = ["for"], Ac = {
  key: 0,
  class: "flex items-center"
}, Tc = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, Fc = /* @__PURE__ */ s("span", { class: "sr-only" }, "Clear", -1), Ic = /* @__PURE__ */ s("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Pc = [
  Fc,
  Ic
], Dc = {
  key: 1,
  class: "mt-1 relative"
}, jc = { class: "w-full inline-flex truncate" }, Oc = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, Bc = /* @__PURE__ */ s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
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
    const t = e, { config: a } = wt(), { metadataApi: i } = Ze(), r = f(() => t.id || t.input.id), d = f(() => t.label ?? Fe(Ye(r.value)));
    let h = Be("ApiState", void 0);
    const c = Be("client"), m = f(() => dt.call({ responseStatus: t.status ?? (h == null ? void 0 : h.error.value) }, r.value)), v = T(""), g = T(""), p = f(() => ce(t.modelValue, r.value)), b = f(() => Ke(t.metadataType).find((z) => z.name.toLowerCase() == r.value.toLowerCase())), k = f(() => {
      var z, q, Q;
      return ((Q = it((q = (z = b.value) == null ? void 0 : z.ref) == null ? void 0 : q.model)) == null ? void 0 : Q.icon) || a.value.tableIcon;
    });
    let A;
    function P(z) {
      if (z) {
        if (A == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        A.openModal({ name: "ModalLookup", ref: z }, (q) => {
          if (console.debug("openModal", v.value, " -> ", q, vt.setRefValue(z, q), z), q) {
            const Q = ce(q, z.refId);
            v.value = vt.setRefValue(z, q) || Q;
            const $ = n(t.modelValue);
            $[r.value] = Q, l("update:modelValue", $);
          }
        });
      }
    }
    function j() {
      t.modelValue[r.value] = null, v.value = "";
    }
    return lt(async () => {
      var D, F;
      A = Be("ModalProvider", void 0);
      const z = t.modelValue;
      t.modelValue[r.value] || (t.modelValue[r.value] = null);
      const q = b.value, Q = q == null ? void 0 : q.ref;
      if (!Q) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      v.value = "";
      let $ = Q.selfId == null ? ce(z, q.name) : ce(z, Q.selfId);
      if (Bt($) && ($ = ce(z, Q.refId)), $ == null)
        return;
      if (((D = i.value) == null ? void 0 : D.operations.find((E) => {
        var K;
        return ((K = E.dataModel) == null ? void 0 : K.name) == Q.model;
      })) != null) {
        const E = ce(z, q.name);
        if (Bt(E))
          return;
        if (v.value = `${E}`, g.value = q.name, Q.refLabel != null) {
          const K = Ke(t.metadataType).find((te) => te.type == Q.model);
          K == null && console.warn(`Could not find ${Q.model} Property on ${t.metadataType.name}`);
          const G = K != null ? ce(z, K.name) : null;
          if (G != null) {
            let te = ce(G, Q.refLabel);
            te && (v.value = `${te}`, vt.setValue(Q.model, $, Q.refLabel, te));
          } else {
            const te = ((F = q.attributes) == null ? void 0 : F.some((y) => y.name == "Computed")) == !0;
            let M = await vt.getOrFetchValue(c, i.value, Q.model, Q.refId, Q.refLabel, te, $);
            v.value = M || `${Q.model}: ${v.value}`;
          }
        }
      }
    }), (z, q) => {
      var $;
      const Q = U("Icon");
      return o(), u("div", Lc, [
        s("input", {
          type: "hidden",
          name: n(r),
          value: n(p)
        }, null, 8, Vc),
        n(d) ? (o(), u("div", Sc, [
          s("label", {
            for: n(r),
            class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, L(n(d)), 11, Mc),
          n(p) ? (o(), u("div", Ac, [
            s("span", Tc, L(n(p)), 1),
            s("button", {
              onClick: j,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, Pc)
          ])) : C("", !0)
        ])) : C("", !0),
        ($ = n(b)) != null && $.ref ? (o(), u("div", Dc, [
          s("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: q[0] || (q[0] = (O) => P(n(b).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            s("span", jc, [
              s("span", Oc, [
                fe(Q, {
                  class: "mr-1 w-5 h-5",
                  image: n(k)
                }, null, 8, ["image"]),
                s("span", null, L(v.value), 1)
              ])
            ]),
            Bc
          ])
        ])) : C("", !0),
        n(m) ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${n(r)}-error`
        }, L(n(m)), 9, Rc)) : e.help ? (o(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${n(r)}-description`
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
    function a(A, P) {
      t.modelValue[A.id] = ce(P, A.id), l("update:modelValue", t.modelValue);
    }
    const { metadataApi: i, apiOf: r, typeOf: d, typeOfRef: h, createFormLayout: c, Crud: m } = Ze(), v = f(() => t.type || At(t.modelValue)), g = f(() => d(v.value)), p = f(() => {
      var A, P;
      return h((P = (A = i.value) == null ? void 0 : A.operations.find((j) => j.request.name == v.value)) == null ? void 0 : P.dataModel) || g.value;
    }), b = f(() => {
      const A = g.value;
      if (!A) {
        if (t.formLayout)
          return t.formLayout.map(($) => {
            const O = { name: $.id, type: Ja($.type) }, B = Object.assign({ prop: O }, $);
            return t.configureField && t.configureField(B), B;
          });
        throw new Error(`MetadataType for ${v.value} not found`);
      }
      const P = Ke(A), j = p.value, z = t.formLayout ? t.formLayout : c(A), q = [], Q = r(A.name);
      return z.forEach(($) => {
        var F;
        const O = P.find((E) => E.name == $.name);
        if ($.ignore)
          return;
        const B = ((F = j == null ? void 0 : j.properties) == null ? void 0 : F.find((E) => {
          var K;
          return E.name.toLowerCase() == ((K = $.name) == null ? void 0 : K.toLowerCase());
        })) ?? O, D = Object.assign({ prop: B, op: Q }, $);
        t.configureField && t.configureField(D), q.push(D);
      }), q;
    }), k = f(() => b.value.filter((A) => A.type != "hidden").map((A) => A.id));
    return (A, P) => {
      var Q;
      const j = U("ErrorSummary"), z = U("LookupInput"), q = U("DynamicInput");
      return o(), u(ye, null, [
        e.hideSummary ? C("", !0) : (o(), X(j, {
          key: 0,
          status: (Q = e.api) == null ? void 0 : Q.error,
          except: n(k)
        }, null, 8, ["status", "except"])),
        s("div", {
          class: w(e.flexClass)
        }, [
          s("div", {
            class: w(e.divideClass)
          }, [
            s("div", {
              class: w(e.spaceClass)
            }, [
              s("fieldset", {
                class: w(e.fieldsetClass)
              }, [
                (o(!0), u(ye, null, $e(n(b), ($) => {
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
                      metadataType: n(p),
                      input: $,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (F) => a($, F),
                      status: (D = e.api) == null ? void 0 : D.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), X(q, {
                      key: 1,
                      input: $,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": P[0] || (P[0] = (F) => A.$emit("update:modelValue", F)),
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
  const e = T(!1), l = T(), t = T(), a = Be("client");
  function i({ message: g, errorCode: p, fieldName: b, errors: k }) {
    return p || (p = "Exception"), k || (k = []), l.value = b ? new Ll({
      errorCode: p,
      message: g,
      errors: [new Cs({ fieldName: b, errorCode: p, message: g })]
    }) : new Ll({ errorCode: p, message: g, errors: k });
  }
  function r({ fieldName: g, message: p, errorCode: b }) {
    if (b || (b = "Exception"), !l.value)
      i({ fieldName: g, message: p, errorCode: b });
    else {
      let k = new Ll(l.value);
      k.errors = [
        ...(k.errors || []).filter((A) => {
          var P;
          return ((P = A.fieldName) == null ? void 0 : P.toLowerCase()) !== (g == null ? void 0 : g.toLowerCase());
        }),
        new Cs({ fieldName: g, message: p, errorCode: b })
      ], l.value = k;
    }
  }
  async function d(g, p, b) {
    e.value = !0;
    let k = await a.api(kt(g), p, b);
    return e.value = !1, t.value = k.response, l.value = k.error, k;
  }
  async function h(g, p, b) {
    e.value = !0;
    let k = await a.apiVoid(kt(g), p, b);
    return e.value = !1, t.value = k.response, l.value = k.error, k;
  }
  async function c(g, p, b, k) {
    e.value = !0;
    let A = await a.apiForm(kt(g), p, b, k);
    return e.value = !1, t.value = A.response, l.value = A.error, A;
  }
  async function m(g, p, b, k) {
    e.value = !0;
    let A = await a.apiFormVoid(kt(g), p, b, k);
    return e.value = !1, t.value = A.response, l.value = A.error, A;
  }
  let v = { setError: i, addFieldError: r, loading: e, error: l, api: d, apiVoid: h, apiForm: c, apiFormVoid: m, unRefs: kt, setRef: Ps };
  return Nt("ApiState", v), v;
}
const Nc = ["onSubmit"], Uc = { key: 0 }, qc = { key: 2 }, Qc = ["innerHTML"], Kc = /* @__PURE__ */ s("input", {
  type: "submit",
  class: "hidden"
}, null, -1), Gc = { class: "flex justify-end" }, Wc = /* @__PURE__ */ s("div", null, null, -1), Zc = /* @__PURE__ */ Y({
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
    Nt("ModalProvider", {
      openModal: d
    });
    const i = T(), r = T();
    function d(F, E) {
      i.value = F, r.value = E;
    }
    async function h(F) {
      r.value && r.value(F), i.value = void 0, r.value = void 0;
    }
    const c = yl(), { getTypeName: m } = Ba(), { typeOf: v, Crud: g, createDto: p } = Ze(), b = T(new Xe()), k = f(() => typeof t.buttonsClass == "string" ? t.formClass : Ue.buttonsClass), A = f(() => typeof t.headingClass == "string" ? t.formClass : ht.headingClass), P = f(() => typeof t.subHeadingClass == "string" ? t.subHeadingClass : ht.subHeadingClass), j = f(() => {
      var F;
      return t.type ? m(t.type) : (F = t.modelValue) != null && F.getTypeName ? t.modelValue.getTypeName() : null;
    }), z = f(() => v(j.value)), q = T(t.modelValue || O()), Q = f(() => c.loading.value), $ = f(() => {
      var F;
      return t.heading || ((F = v(j.value)) == null ? void 0 : F.description) || Fe(j.value);
    });
    function O() {
      return typeof t.type == "string" ? p(t.type) : t.type ? new t.type() : t.modelValue;
    }
    async function B(F) {
      let E = F.target;
      const K = O();
      let G = De(K == null ? void 0 : K.getMethod, (y) => typeof y == "function" ? y() : null) || "POST", te = De(K == null ? void 0 : K.createResponse, (y) => typeof y == "function" ? y() : null) == null;
      const M = t.jsconfig;
      if (Ul.hasRequestBody(G)) {
        let y = new K.constructor(), S = new FormData(E);
        console.debug("AutoForm.submitForm", y, S), te ? b.value = await c.apiFormVoid(y, S, { jsconfig: M }) : b.value = await c.apiForm(y, S, { jsconfig: M });
      } else {
        let y = new K.constructor(q.value);
        console.debug("AutoForm.submit", y), te ? b.value = await c.apiVoid(y, { jsconfig: M }) : b.value = await c.api(y, { jsconfig: M });
      }
      b.value.succeeded ? l("success", b.value.response) : l("error", b.value.error);
    }
    function D(F) {
      l("update:modelValue", F);
    }
    return (F, E) => {
      var y, S, le;
      const K = U("AutoFormFields"), G = U("FormLoading"), te = U("PrimaryButton"), M = U("ModalLookup");
      return n(z) ? (o(), u("form", {
        key: 0,
        onSubmit: je(B, ["prevent"]),
        autocomplete: "off",
        class: w(e.formClass)
      }, [
        s("div", {
          class: w(e.innerFormClass)
        }, [
          s("div", {
            class: w(e.bodyClass)
          }, [
            s("div", {
              class: w(e.headerClass)
            }, [
              F.$slots.heading ? (o(), u("div", Uc, [
                Z(F.$slots, "heading")
              ])) : (o(), u("h3", {
                key: 1,
                class: w(n(A))
              }, L(n($)), 3)),
              F.$slots.subheading ? (o(), u("div", qc, [
                Z(F.$slots, "subheading")
              ])) : e.subHeading ? (o(), u("p", {
                key: 3,
                class: w(n(P))
              }, L(e.subHeading), 3)) : (y = n(z)) != null && y.notes ? (o(), u("p", {
                key: 4,
                class: w(["notes", n(P)]),
                innerHTML: (S = n(z)) == null ? void 0 : S.notes
              }, null, 10, Qc)) : C("", !0)
            ], 2),
            Z(F.$slots, "header"),
            Kc,
            fe(K, {
              type: e.type,
              modelValue: q.value,
              "onUpdate:modelValue": D,
              api: b.value,
              configureField: e.configureField
            }, null, 8, ["type", "modelValue", "api", "configureField"]),
            Z(F.$slots, "footer")
          ], 2),
          Z(F.$slots, "buttons", {}, () => [
            s("div", {
              class: w(n(k))
            }, [
              s("div", null, [
                e.showLoading && n(Q) ? (o(), X(G, { key: 0 })) : C("", !0)
              ]),
              s("div", Gc, [
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
        ((le = i.value) == null ? void 0 : le.name) == "ModalLookup" && i.value.ref ? (o(), X(M, {
          key: 0,
          "ref-info": i.value.ref,
          onDone: h
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 42, Nc)) : C("", !0);
    };
  }
}), Jc = { key: 0 }, Xc = { class: "text-red-700" }, Yc = /* @__PURE__ */ s("b", null, "type", -1), e0 = ["onSubmit"], t0 = { key: 0 }, l0 = { key: 2 }, s0 = ["innerHTML"], n0 = { class: "flex justify-end" }, a0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, o0 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), i0 = { class: "fixed inset-0 overflow-hidden" }, r0 = ["onSubmit"], u0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, d0 = { class: "flex-1" }, c0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, f0 = { class: "flex items-start justify-between space-x-3" }, m0 = { class: "space-y-1" }, v0 = { key: 0 }, h0 = { key: 2 }, g0 = ["innerHTML"], p0 = { class: "flex h-7 items-center" }, y0 = { class: "flex justify-end" }, b0 = /* @__PURE__ */ Y({
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
    Nt("ModalProvider", {
      openModal: h
    });
    const r = T(), d = T();
    function h(V, I) {
      r.value = V, d.value = I;
    }
    async function c(V) {
      d.value && d.value(V), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, typeProperties: v, Crud: g, createDto: p, formValues: b } = Ze(), k = f(() => At(t.type)), A = f(() => m(k.value)), P = T(typeof t.type == "string" ? p(t.type) : t.type ? new t.type() : null), j = f(() => t.panelClass || Ue.panelClass(t.formStyle)), z = f(() => t.formClass || Ue.formClass(t.formStyle)), q = f(() => t.headingClass || Ue.headingClass(t.formStyle)), Q = f(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), $ = f(() => t.buttonsClass || Ue.buttonsClass), O = f(() => g.model(A.value)), B = f(() => {
      var V;
      return t.heading || ((V = m(k.value)) == null ? void 0 : V.description) || (O.value ? `New ${Fe(O.value)}` : Fe(k.value));
    }), D = T(new Xe());
    let F = yl(), E = f(() => F.loading.value);
    async function K(V) {
      var se, H;
      let I = V.target;
      if (!t.autosave) {
        l("save", new P.value.constructor(b(I, v(A.value))));
        return;
      }
      let ue = De((se = P.value) == null ? void 0 : se.getMethod, (J) => typeof J == "function" ? J() : null) || "POST", oe = De((H = P.value) == null ? void 0 : H.createResponse, (J) => typeof J == "function" ? J() : null) == null;
      if (Ul.hasRequestBody(ue)) {
        let J = new P.value.constructor(), pe = new FormData(I);
        oe ? D.value = await F.apiFormVoid(J, pe, { jsconfig: "eccn" }) : D.value = await F.apiForm(J, pe, { jsconfig: "eccn" });
      } else {
        let J = b(I, v(A.value)), pe = new P.value.constructor(J);
        oe ? D.value = await F.apiVoid(pe, { jsconfig: "eccn" }) : D.value = await F.api(pe, { jsconfig: "eccn" });
      }
      D.value.succeeded ? (I.reset(), l("save", D.value.response)) : l("error", D.value.error);
    }
    function G() {
      l("done");
    }
    const te = T(!1), M = T(""), y = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Mt(te, () => {
      Lt(y, M, te.value), te.value || setTimeout(G, 700);
    }), te.value = !0;
    function S() {
      t.formStyle == "slideOver" ? te.value = !1 : G();
    }
    const le = (V) => {
      V.key === "Escape" && S();
    };
    return lt(() => window.addEventListener("keydown", le)), zt(() => window.removeEventListener("keydown", le)), (V, I) => {
      var _e, ne, Pe, Ae, ge;
      const ue = U("AutoFormFields"), oe = U("FormLoading"), se = U("SecondaryButton"), H = U("PrimaryButton"), J = U("CloseButton"), pe = U("ModalLookup");
      return o(), u("div", null, [
        n(A) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: w(n(j))
        }, [
          s("form", {
            onSubmit: je(K, ["prevent"])
          }, [
            s("div", {
              class: w(n(z))
            }, [
              s("div", null, [
                V.$slots.heading ? (o(), u("div", t0, [
                  Z(V.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: w(n(q))
                }, L(n(B)), 3)),
                V.$slots.subheading ? (o(), u("div", l0, [
                  Z(V.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: w(n(Q))
                }, L(e.subHeading), 3)) : (_e = n(A)) != null && _e.notes ? (o(), u("p", {
                  key: 4,
                  class: w(["notes", n(Q)]),
                  innerHTML: (ne = n(A)) == null ? void 0 : ne.notes
                }, null, 10, s0)) : C("", !0)
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
            s("div", {
              class: w(n($))
            }, [
              s("div", null, [
                e.showLoading && n(E) ? (o(), X(oe, { key: 0 })) : C("", !0)
              ]),
              s("div", n0, [
                e.showCancel ? (o(), X(se, {
                  key: 0,
                  onClick: S,
                  disabled: n(E)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : C("", !0),
                fe(H, {
                  type: "submit",
                  class: "ml-4",
                  disabled: n(E)
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
          s("div", i0, [
            s("div", {
              onMousedown: S,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: I[0] || (I[0] = je(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", M.value])
                }, [
                  s("form", {
                    class: w(n(z)),
                    onSubmit: je(K, ["prevent"])
                  }, [
                    s("div", u0, [
                      s("div", d0, [
                        s("div", c0, [
                          s("div", f0, [
                            s("div", m0, [
                              V.$slots.heading ? (o(), u("div", v0, [
                                Z(V.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: w(n(q))
                              }, L(n(B)), 3)),
                              V.$slots.subheading ? (o(), u("div", h0, [
                                Z(V.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: w(n(Q))
                              }, L(e.subHeading), 3)) : (Pe = n(A)) != null && Pe.notes ? (o(), u("p", {
                                key: 4,
                                class: w(["notes", n(Q)]),
                                innerHTML: (Ae = n(A)) == null ? void 0 : Ae.notes
                              }, null, 10, g0)) : C("", !0)
                            ]),
                            s("div", p0, [
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
                    s("div", {
                      class: w(n($))
                    }, [
                      s("div", null, [
                        e.showLoading && n(E) ? (o(), X(oe, { key: 0 })) : C("", !0)
                      ]),
                      s("div", y0, [
                        e.showCancel ? (o(), X(se, {
                          key: 0,
                          onClick: S,
                          disabled: n(E)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : C("", !0),
                        fe(H, {
                          type: "submit",
                          class: "ml-4",
                          disabled: n(E)
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
          s("p", Xc, [
            he("Could not create form for unknown "),
            Yc,
            he(" " + L(n(k)), 1)
          ])
        ])),
        ((ge = r.value) == null ? void 0 : ge.name) == "ModalLookup" && r.value.ref ? (o(), X(pe, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: c
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), w0 = { key: 0 }, x0 = { class: "text-red-700" }, k0 = /* @__PURE__ */ s("b", null, "type", -1), $0 = ["onSubmit"], C0 = { key: 0 }, _0 = { key: 2 }, L0 = ["innerHTML"], V0 = { class: "flex justify-end" }, S0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, M0 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), A0 = { class: "fixed inset-0 overflow-hidden" }, T0 = ["onSubmit"], F0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, I0 = { class: "flex-1" }, P0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, D0 = { class: "flex items-start justify-between space-x-3" }, j0 = { class: "space-y-1" }, O0 = { key: 0 }, B0 = { key: 2 }, R0 = ["innerHTML"], E0 = { class: "flex h-7 items-center" }, H0 = { class: "flex justify-end" }, z0 = /* @__PURE__ */ Y({
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
    Nt("ModalProvider", {
      openModal: h
    });
    const r = T(), d = T();
    function h(H, J) {
      r.value = H, d.value = J;
    }
    async function c(H) {
      d.value && d.value(H), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, apiOf: v, typeProperties: g, createFormLayout: p, getPrimaryKey: b, Crud: k, createDto: A, formValues: P } = Ze(), j = f(() => At(t.type)), z = f(() => m(j.value)), q = T(typeof t.type == "string" ? A(t.type, tl(t.modelValue)) : t.type ? new t.type(tl(t.modelValue)) : null), Q = f(() => t.panelClass || Ue.panelClass(t.formStyle)), $ = f(() => t.formClass || Ue.formClass(t.formStyle)), O = f(() => t.headingClass || Ue.headingClass(t.formStyle)), B = f(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), D = f(() => k.model(z.value)), F = f(() => {
      var H;
      return t.heading || ((H = m(j.value)) == null ? void 0 : H.description) || (D.value ? `Update ${Fe(D.value)}` : Fe(j.value));
    }), E = T(new Xe());
    let K = yl(), G = f(() => K.loading.value);
    const te = () => De(m(k.model(z.value)), (H) => b(H));
    function M(H) {
      const { op: J, prop: pe } = H;
      J && (k.isPatch(J) || k.isUpdate(J)) && (H.disabled = pe == null ? void 0 : pe.isPrimaryKey), t.configureField && t.configureField(H);
    }
    async function y(H) {
      var Pe, Ae;
      let J = H.target;
      if (!t.autosave) {
        l("save", new q.value.constructor(P(J, g(z.value))));
        return;
      }
      let pe = De((Pe = q.value) == null ? void 0 : Pe.getMethod, (ge) => typeof ge == "function" ? ge() : null) || "POST", _e = De((Ae = q.value) == null ? void 0 : Ae.createResponse, (ge) => typeof ge == "function" ? ge() : null) == null, ne = te();
      if (Ul.hasRequestBody(pe)) {
        let ge = new q.value.constructor(), Re = ce(t.modelValue, ne.name), Se = new FormData(J);
        ne && !Array.from(Se.keys()).some((R) => R.toLowerCase() == ne.name.toLowerCase()) && Se.append(ne.name, Re);
        let ze = [];
        const Je = j.value && v(j.value);
        if (Je && k.isPatch(Je)) {
          let R = tl(t.modelValue), N = p(z.value), ie = {};
          if (ne && (ie[ne.name] = Re), N.forEach((be) => {
            let Ie = be.id, qe = ce(R, Ie);
            if (ne && ne.name.toLowerCase() === Ie.toLowerCase())
              return;
            let xe = Se.get(Ie), Ee = xe != null, Qe = be.type === "checkbox" ? Ee !== !!qe : be.type === "file" ? Ee : xe != qe;
            !xe && !qe && (Qe = !1), Qe && (xe ? ie[Ie] = xe : be.type !== "file" && ze.push(Ie));
          }), Array.from(Se.keys()).filter((be) => !ie[be]).forEach((be) => Se.delete(be)), Array.from(Se.keys()).filter((be) => be.toLowerCase() != ne.name.toLowerCase()).length == 0 && ze.length == 0) {
            oe();
            return;
          }
        }
        const Ne = ze.length > 0 ? { jsconfig: "eccn", reset: ze } : { jsconfig: "eccn" };
        _e ? E.value = await K.apiFormVoid(ge, Se, Ne) : E.value = await K.apiForm(ge, Se, Ne);
      } else {
        let ge = P(J, g(z.value));
        ne && !ce(ge, ne.name) && (ge[ne.name] = ce(t.modelValue, ne.name));
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
      const _e = { [J.name]: pe }, ne = typeof t.deleteType == "string" ? A(t.deleteType, _e) : t.deleteType ? new t.deleteType(_e) : null;
      De(ne.createResponse, (Ae) => typeof Ae == "function" ? Ae() : null) == null ? E.value = await K.apiVoid(ne) : E.value = await K.api(ne), E.value.succeeded ? l("delete", E.value.response) : l("error", E.value.error);
    }
    function le() {
      l("done");
    }
    const V = T(!1), I = T(""), ue = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Mt(V, () => {
      Lt(ue, I, V.value), V.value || setTimeout(le, 700);
    }), V.value = !0;
    function oe() {
      t.formStyle == "slideOver" ? V.value = !1 : le();
    }
    const se = (H) => {
      H.key === "Escape" && oe();
    };
    return lt(() => window.addEventListener("keydown", se)), zt(() => window.removeEventListener("keydown", se)), (H, J) => {
      var Se, ze, Je, Ne, R;
      const pe = U("AutoFormFields"), _e = U("ConfirmDelete"), ne = U("FormLoading"), Pe = U("SecondaryButton"), Ae = U("PrimaryButton"), ge = U("CloseButton"), Re = U("ModalLookup");
      return o(), u("div", null, [
        n(z) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: w(n(Q))
        }, [
          s("form", {
            onSubmit: je(y, ["prevent"])
          }, [
            s("div", {
              class: w(n($))
            }, [
              s("div", null, [
                H.$slots.heading ? (o(), u("div", C0, [
                  Z(H.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: w(n(O))
                }, L(n(F)), 3)),
                H.$slots.subheading ? (o(), u("div", _0, [
                  Z(H.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: w(n(B))
                }, L(e.subHeading), 3)) : (Se = n(z)) != null && Se.notes ? (o(), u("p", {
                  key: 4,
                  class: w(["notes", n(B)]),
                  innerHTML: (ze = n(z)) == null ? void 0 : ze.notes
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
            s("div", {
              class: w(n(Ue).buttonsClass)
            }, [
              s("div", null, [
                e.deleteType ? (o(), X(_e, {
                  key: 0,
                  onDelete: S
                })) : C("", !0)
              ]),
              s("div", null, [
                e.showLoading && n(G) ? (o(), X(ne, { key: 0 })) : C("", !0)
              ]),
              s("div", V0, [
                fe(Pe, {
                  onClick: oe,
                  disabled: n(G)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                fe(Ae, {
                  type: "submit",
                  class: "ml-4",
                  disabled: n(G)
                }, {
                  default: ve(() => [
                    he("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, $0)
        ], 2)) : (o(), u("div", S0, [
          M0,
          s("div", A0, [
            s("div", {
              onMousedown: oe,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: J[0] || (J[0] = je(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", I.value])
                }, [
                  s("form", {
                    class: w(n($)),
                    onSubmit: je(y, ["prevent"])
                  }, [
                    s("div", F0, [
                      s("div", I0, [
                        s("div", P0, [
                          s("div", D0, [
                            s("div", j0, [
                              H.$slots.heading ? (o(), u("div", O0, [
                                Z(H.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: w(n(O))
                              }, L(n(F)), 3)),
                              H.$slots.subheading ? (o(), u("div", B0, [
                                Z(H.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: w(n(B))
                              }, L(e.subHeading), 3)) : (Je = n(z)) != null && Je.notes ? (o(), u("p", {
                                key: 4,
                                class: w(["notes", n(B)]),
                                innerHTML: (Ne = n(z)) == null ? void 0 : Ne.notes
                              }, null, 10, R0)) : C("", !0)
                            ]),
                            s("div", E0, [
                              fe(ge, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: oe
                              })
                            ])
                          ])
                        ]),
                        Z(H.$slots, "header"),
                        fe(pe, {
                          modelValue: q.value,
                          "onUpdate:modelValue": a,
                          api: E.value,
                          configureField: M
                        }, null, 8, ["modelValue", "api"]),
                        Z(H.$slots, "footer")
                      ])
                    ]),
                    s("div", {
                      class: w(n(Ue).buttonsClass)
                    }, [
                      s("div", null, [
                        e.deleteType ? (o(), X(_e, {
                          key: 0,
                          onDelete: S
                        })) : C("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && n(G) ? (o(), X(ne, { key: 0 })) : C("", !0)
                      ]),
                      s("div", H0, [
                        fe(Pe, {
                          onClick: oe,
                          disabled: n(G)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        fe(Ae, {
                          type: "submit",
                          class: "ml-4",
                          disabled: n(G)
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
          s("p", x0, [
            he("Could not create form for unknown "),
            k0,
            he(" " + L(n(j)), 1)
          ])
        ])),
        ((R = r.value) == null ? void 0 : R.name) == "ModalLookup" && r.value.ref ? (o(), X(Re, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: c
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), N0 = /* @__PURE__ */ s("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), U0 = ["onClick"], q0 = /* @__PURE__ */ Y({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: l }) {
    let t = T(!1);
    const a = () => {
      t.value && l("delete");
    }, i = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      t.value ? "cursor-pointer bg-red-600 dark:bg-red-300 hover:bg-red-700 dark:hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400 dark:bg-red-500"
    ]);
    return (r, d) => (o(), u(ye, null, [
      gt(s("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (h) => Ss(t) ? t.value = h : t = h)
      }, null, 512), [
        [Hl, n(t)]
      ]),
      N0,
      s("span", Ce({
        onClick: je(a, ["prevent"]),
        class: n(i)
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
    return Be("ApiState", void 0), (l, t) => (o(), u("div", Q0, [
      e.icon ? (o(), u("svg", K0, W0)) : C("", !0),
      s("span", Z0, L(e.text), 1)
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
    const t = e, a = T(), i = T(null), r = (V) => i.value === V, d = zl(), h = (V) => Object.keys(d).find((I) => I.toLowerCase() == V.toLowerCase() + "-header"), c = (V) => Object.keys(d).find((I) => I.toLowerCase() == V.toLowerCase()), m = f(() => Fl(t.items).filter((V) => !!(d[V] || d[V + "-header"]))), { typeOf: v, typeProperties: g } = Ze(), p = f(() => At(t.type)), b = f(() => v(p.value)), k = f(() => g(b.value));
    function A(V) {
      const I = t.headerTitles && ce(t.headerTitles, V) || V;
      return t.headerTitle ? t.headerTitle(I) : Ts(I);
    }
    function P(V) {
      const I = V.toLowerCase();
      return k.value.find((ue) => ue.name.toLowerCase() == I);
    }
    function j(V) {
      const I = P(V);
      return I != null && I.format ? I.format : (I == null ? void 0 : I.type) == "TimeSpan" || (I == null ? void 0 : I.type) == "TimeOnly" ? { method: "time" } : null;
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
      const I = t.visibleFrom && ce(t.visibleFrom, V);
      return I && De(z[I], (ue) => `hidden ${ue}`);
    }
    const Q = f(() => t.gridClass ?? ae.getGridClass(t.tableStyle)), $ = f(() => t.grid2Class ?? ae.getGrid2Class(t.tableStyle)), O = f(() => t.grid3Class ?? ae.getGrid3Class(t.tableStyle)), B = f(() => t.grid4Class ?? ae.getGrid4Class(t.tableStyle)), D = f(() => t.tableClass ?? ae.getTableClass(t.tableStyle)), F = f(() => t.tbodyClass ?? ae.getTbodyClass(t.tbodyClass)), E = f(() => t.theadClass ?? ae.getTheadClass(t.tableStyle)), K = f(() => t.theadRowClass ?? ae.getTheadRowClass(t.tableStyle)), G = f(() => t.theadCellClass ?? ae.getTheadCellClass(t.tableStyle));
    function te(V, I) {
      return t.rowClass ? t.rowClass(V, I) : ae.getTableRowClass(t.tableStyle, I, !!(t.isSelected && t.isSelected(V)), t.isSelected != null);
    }
    function M(V, I) {
      return t.rowStyle ? t.rowStyle(V, I) : void 0;
    }
    const y = f(() => {
      const V = (typeof t.selectedColumns == "string" ? t.selectedColumns.split(",") : t.selectedColumns) || (m.value.length > 0 ? m.value : Fl(t.items)), I = k.value.reduce((ue, oe) => (ue[oe.name.toLowerCase()] = oe.format, ue), {});
      return V.filter((ue) => {
        var oe;
        return ((oe = I[ue.toLowerCase()]) == null ? void 0 : oe.method) != "hidden";
      });
    });
    function S(V, I) {
      l("headerSelected", I, V);
    }
    function le(V, I, ue) {
      l("rowSelected", ue, V);
    }
    return (V, I) => {
      const ue = U("CellFormat"), oe = U("PreviewFormat");
      return e.items.length ? (o(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: w(n(Q))
      }, [
        s("div", {
          class: w(n($))
        }, [
          s("div", {
            class: w(n(O))
          }, [
            s("div", {
              class: w(n(B))
            }, [
              s("table", {
                class: w(n(D))
              }, [
                s("thead", {
                  class: w(n(E))
                }, [
                  s("tr", {
                    class: w(n(K))
                  }, [
                    (o(!0), u(ye, null, $e(n(y), (se) => (o(), u("td", {
                      class: w([q(se), n(G), r(se) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      s("div", {
                        onClick: (H) => S(H, se)
                      }, [
                        n(d)[se + "-header"] ? Z(V.$slots, se + "-header", {
                          key: 0,
                          column: se
                        }) : h(se) ? Z(V.$slots, h(se), {
                          key: 1,
                          column: se
                        }) : n(d).header ? Z(V.$slots, "header", {
                          key: 2,
                          column: se,
                          label: A(se)
                        }) : (o(), u("div", Y0, [
                          s("span", ef, L(A(se)), 1)
                        ]))
                      ], 8, X0)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                s("tbody", {
                  class: w(n(F))
                }, [
                  (o(!0), u(ye, null, $e(e.items, (se, H) => (o(), u("tr", {
                    class: w(te(se, H)),
                    style: El(M(se, H)),
                    onClick: (J) => le(J, H, se)
                  }, [
                    (o(!0), u(ye, null, $e(n(y), (J) => (o(), u("td", {
                      class: w([q(J), n(ae).tableCellClass])
                    }, [
                      n(d)[J] ? Z(V.$slots, J, _t(Ce({ key: 0 }, se))) : c(J) ? Z(V.$slots, c(J), _t(Ce({ key: 1 }, se))) : P(J) ? (o(), X(ue, {
                        key: 2,
                        type: n(b),
                        propType: P(J),
                        modelValue: se
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), X(oe, {
                        key: 3,
                        value: n(ce)(se, J),
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
let Rl = () => new Date().getTime(), sf = ["/", "T", ":", "-"], tt = {
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
}, nf = new Intl.RelativeTimeFormat(tt.locale, {}), Vs = 24 * 60 * 60 * 1e3 * 365, Vl = {
  year: Vs,
  month: Vs / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, $t = {
  currency: sn,
  bytes: nn,
  link: an,
  linkTel: on,
  linkMailTo: rn,
  icon: un,
  iconRounded: dn,
  attachment: cn,
  hidden: fn,
  time: mn,
  relativeTime: ds,
  relativeTimeFromMs: bl,
  formatDate: Tt,
  formatNumber: us
};
"iconOnError" in globalThis || (globalThis.iconOnError = hl);
class Oe {
}
ke(Oe, "currency", { method: "currency" }), ke(Oe, "bytes", { method: "bytes" }), ke(Oe, "link", { method: "link" }), ke(Oe, "linkTel", { method: "linkTel" }), ke(Oe, "linkMailTo", { method: "linkMailTo" }), ke(Oe, "icon", { method: "icon" }), ke(Oe, "iconRounded", { method: "iconRounded" }), ke(Oe, "attachment", { method: "attachment" }), ke(Oe, "time", { method: "time" }), ke(Oe, "relativeTime", { method: "relativeTime" }), ke(Oe, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), ke(Oe, "date", { method: "formatDate" }), ke(Oe, "number", { method: "formatNumber" }), ke(Oe, "hidden", { method: "hidden" });
function af(e) {
  tt = Object.assign({}, tt, e);
}
function of(e) {
  Object.keys(e || {}).forEach((l) => {
    typeof e[l] == "function" && ($t[l] = e[l]);
  });
}
function Qt(e, l) {
  return l ? et("span", e, l) : e;
}
function sn(e, l) {
  const t = st(l, ["currency"]);
  return Qt(new Intl.NumberFormat(void 0, { style: "currency", currency: l.currency || "USD" }).format(e), t);
}
function nn(e, l) {
  return Qt(Xl(e), l);
}
function an(e, l) {
  return et("a", e, vl({ ...l, href: e }));
}
function on(e, l) {
  return et("a", e, vl({ ...l, href: `tel:${e}` }));
}
function rn(e, l) {
  l || (l = {});
  let { subject: t, body: a } = l, i = st(l, ["subject", "body"]), r = {};
  return t && (r.subject = t), a && (r.body = a), et("a", e, vl({ ...i, href: `mailto:${nl(e, r)}` }));
}
function un(e, l) {
  return et("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function dn(e, l) {
  return et("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function cn(e, l) {
  let t = Wl(e), i = Ut(t) == null || Jl(e) ? Ct(e) : Yl(e);
  const r = Ct(i);
  let d = l && (l["icon-class"] || l.iconClass), h = et("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), c = `<span class="pl-1">${t}</span>`;
  return et("a", h + c, Object.assign({ class: "flex", href: Ct(e), title: e }, l ? st(l, ["icon-class", "iconClass"]) : null));
}
function fn(e) {
  return "";
}
function mn(e, l) {
  let t = typeof e == "string" ? new Date(Fs(e) * 1e3) : fl(e) ? bt(e) : null;
  return Qt(t ? Jn(t) : e, l);
}
function Tt(e, l) {
  if (e == null)
    return "";
  let t = typeof e == "number" ? new Date(e) : typeof e == "string" ? bt(e) : e;
  if (!fl(t))
    return console.warn(`${t} is not a Date value`), e == null ? "" : `${e}`;
  let a = tt.date ? wl(tt.date) : null;
  return Qt(typeof a == "function" ? a(t) : Ms(t), l);
}
function us(e, l) {
  if (typeof e != "number")
    return e;
  let t = tt.number ? wl(tt.number) : null, a = typeof t == "function" ? t(e) : `${e}`;
  return a === "" && (console.warn(`formatNumber(${e}) => ${a}`, t), a = `${e}`), Qt(a, l);
}
function vn(e, l, t) {
  let a = Xn(e), i = l ? wl(l) : null;
  if (typeof i == "function") {
    let d = t;
    if (l != null && l.options)
      try {
        d = Ql(l.options, t);
      } catch (h) {
        console.error(`Could not evaluate '${l.options}'`, h, ", with scope:", t);
      }
    return i(e, d);
  }
  let r = a != null ? fl(a) ? Tt(a, t) : typeof a == "number" ? us(a, t) : a : null;
  return r ?? "";
}
function Ht(e, l, t) {
  return yt(e) ? vn(e, l, t) : ff(e, l, t);
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
      return Fs(e) * 1e3 * -1;
    if (Yn(e, sf) >= 0)
      return bt(e).getTime() - Rl();
  }
  return NaN;
}
function bl(e, l) {
  for (let t in Vl)
    if (Math.abs(e) > Vl[t] || t === "second")
      return (l || nf).format(Math.round(e / Vl[t]), t);
}
function ds(e, l) {
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
    let d = r ? `'${r}'` : "undefined", h = `return new ${l}(${d},${t || "undefined"})`;
    try {
      let c = Function(h)();
      return i = l === "Intl.DateTimeFormat" ? (m) => c.format(bt(m)) : l === "Intl.NumberFormat" ? (m) => c.format(Number(m)) : l === "Intl.RelativeTimeFormat" ? (m) => ds(m, c) : (m) => c.format(m), $t[a] = i;
    } catch (c) {
      console.error(`Invalid format: ${h}`, c);
    }
  } else {
    let d = globalThis[l];
    if (typeof d == "function") {
      let h = t != null ? Function("return " + t)() : void 0;
      return i = (c) => d(c, h, r), $t[a] = i;
    }
    console.error(`No '${l}' function exists`, Object.keys($t));
  }
  return null;
}
function hn(e, l) {
  return e ? e.length > l ? e.substring(0, l) + "..." : e : "";
}
function gn(e) {
  return e.substring(0, 6) === "/Date(" ? Tt(bt(e)) : e;
}
function df(e) {
  return cs(St(e)).replace(/"/g, "");
}
function pn(e) {
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
function cs(e, l = 4) {
  return e = pn(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, l);
}
function cf(e) {
  return e = pn(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = St(e), cs(e));
}
function St(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return gn(e);
  if (yt(e))
    return e;
  if (e instanceof Date)
    return Tt(e);
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
    return Tt(a, t);
  let i = Object.keys(a), r = [];
  for (let d = 0; d < Math.min(tt.maxNestedFields, i.length); d++) {
    let h = i[d], c = `${St(a[h])}`;
    r.push(`<b class="font-medium">${h}</b>: ${Al(hn(gn(c), tt.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), et("span", "{ " + r.join(", ") + " }", Object.assign({ title: Al(df(e)) }, t));
}
function Fm() {
  return {
    Formats: Oe,
    setDefaultFormats: af,
    setFormatters: of,
    formatValue: Ht,
    formatter: wl,
    dateInputFormat: ml,
    currency: sn,
    bytes: nn,
    link: an,
    linkTel: on,
    linkMailTo: rn,
    icon: un,
    iconRounded: dn,
    attachment: cn,
    hidden: fn,
    time: mn,
    relativeTime: ds,
    relativeTimeFromDate: uf,
    relativeTimeFromMs: bl,
    formatDate: Tt,
    formatNumber: us,
    indentJson: cs,
    prettyJson: cf,
    scrub: St,
    truncate: hn,
    apiValueFmt: vn,
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
      const i = a(e.propType), r = ce(e.modelValue, e.propType.name), d = Object.assign({}, e, l), h = ft("span", { innerHTML: Ht(r, i, d) }), c = Bt(r) && Array.isArray(r) ? ft("span", {}, [
        ft("span", { class: "mr-2" }, `${r.length}`),
        h
      ]) : h, m = (j = e.propType) == null ? void 0 : j.ref;
      if (!m)
        return c;
      const g = Ke(e.type).find((z) => z.type === m.model);
      if (!g)
        return c;
      const p = ce(e.modelValue, g.name), b = p && m.refLabel && ce(p, m.refLabel);
      if (!b)
        return c;
      const k = t(m.model), A = k == null ? void 0 : k.icon, P = A ? ft(Ys, { image: A, class: "w-5 h-5 mr-1" }) : null;
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
    const l = e, t = f(() => Array.isArray(l.value));
    return (a, i) => n(Bt)(e.value) ? (o(), u("span", vf, [
      e.includeCount && n(t) ? (o(), u("span", hf, L(e.value.length), 1)) : C("", !0),
      s("span", {
        innerHTML: n(Ht)(e.value, e.format, a.$attrs)
      }, null, 8, gf)
    ])) : (o(), u("span", {
      key: 1,
      innerHTML: n(Ht)(e.value, e.format, a.$attrs)
    }, null, 8, pf));
  }
}), wf = ["innerHTML"], xf = { key: 0 }, kf = /* @__PURE__ */ s("b", null, null, -1), $f = { key: 2 }, Cf = /* @__PURE__ */ Y({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, l, t, a, i) => a }
  },
  setup(e) {
    const l = e, t = f(() => yt(l.value)), a = f(() => Array.isArray(l.value)), i = (c) => Ts(c), r = (c) => l.fieldAttrs ? l.fieldAttrs(c) : null, d = f(() => Fl(l.value)), h = (c) => c ? Object.keys(c).map((m) => ({ key: i(m), val: c[m] })) : [];
    return (c, m) => {
      const v = U("HtmlFormat", !0);
      return o(), u("div", {
        class: w(e.depth == 0 ? "prose html-format" : "")
      }, [
        n(t) ? (o(), u("div", {
          key: 0,
          innerHTML: n(Ht)(e.value)
        }, null, 8, wf)) : n(a) ? (o(), u("div", {
          key: 1,
          class: w(e.classes("array", "div", e.depth, n(ae).gridClass))
        }, [
          n(yt)(e.value[0]) ? (o(), u("div", xf, "[ " + L(e.value.join(", ")) + " ]", 1)) : (o(), u("div", {
            key: 1,
            class: w(e.classes("array", "div", e.depth, n(ae).grid2Class))
          }, [
            s("div", {
              class: w(e.classes("array", "div", e.depth, n(ae).grid3Class))
            }, [
              s("div", {
                class: w(e.classes("array", "div", e.depth, n(ae).grid4Class))
              }, [
                s("table", {
                  class: w(e.classes("object", "table", e.depth, n(ae).tableClass))
                }, [
                  s("thead", {
                    class: w(e.classes("array", "thead", e.depth, n(ae).theadClass))
                  }, [
                    s("tr", null, [
                      (o(!0), u(ye, null, $e(n(d), (g) => (o(), u("th", {
                        class: w(e.classes("array", "th", e.depth, n(ae).theadCellClass + " whitespace-nowrap"))
                      }, [
                        kf,
                        he(L(i(g)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  s("tbody", null, [
                    (o(!0), u(ye, null, $e(e.value, (g, p) => (o(), u("tr", {
                      class: w(e.classes("array", "tr", e.depth, p % 2 == 0 ? "bg-white" : "bg-gray-50", p))
                    }, [
                      (o(!0), u(ye, null, $e(n(d), (b) => (o(), u("td", {
                        class: w(e.classes("array", "td", e.depth, n(ae).tableCellClass))
                      }, [
                        fe(v, Ce({
                          value: g[b],
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
          s("table", {
            class: w(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (o(!0), u(ye, null, $e(h(e.value), (g) => (o(), u("tr", {
              class: w(e.classes("object", "tr", e.depth, ""))
            }, [
              s("th", {
                class: w(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, L(g.key), 3),
              s("td", {
                class: w(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                fe(v, Ce({
                  value: g.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(g.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), _f = { class: "absolute top-0 right-0 pt-4 pr-4" }, Lf = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), Vf = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Sf = [
  Lf,
  Vf
], Mf = /* @__PURE__ */ Y({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    return (t, a) => (o(), u("div", _f, [
      s("button", {
        type: "button",
        onClick: a[0] || (a[0] = (i) => t.$emit("close")),
        class: w([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, Sf, 2)
    ]));
  }
}), Af = ["id", "aria-labelledby"], Tf = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), Ff = { class: "fixed inset-0 overflow-hidden" }, If = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, Pf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Df = { class: "flex-1" }, jf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Of = { class: "flex items-start justify-between space-x-3" }, Bf = { class: "space-y-1" }, Rf = ["id"], Ef = {
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
    Mt(t, () => {
      Lt(i, a, t.value), t.value || setTimeout(() => l("done"), 700);
    }), t.value = !0;
    const r = () => t.value = !1, d = (h) => {
      h.key === "Escape" && r();
    };
    return lt(() => window.addEventListener("keydown", d)), zt(() => window.removeEventListener("keydown", d)), (h, c) => {
      const m = U("CloseButton");
      return o(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        Tf,
        s("div", Ff, [
          s("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            s("div", {
              onMousedown: c[0] || (c[0] = je(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              s("div", {
                class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                s("div", If, [
                  s("div", Pf, [
                    s("div", Df, [
                      s("div", jf, [
                        s("div", Of, [
                          s("div", Bf, [
                            e.title ? (o(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, L(e.title), 9, Rf)) : C("", !0),
                            h.$slots.subtitle ? (o(), u("p", Ef, [
                              Z(h.$slots, "subtitle")
                            ])) : C("", !0)
                          ]),
                          s("div", Hf, [
                            fe(m, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      s("div", {
                        class: w(e.contentClass)
                      }, [
                        Z(h.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  s("div", zf, [
                    Z(h.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Af);
    };
  }
}), Uf = ["id", "data-transition-for", "aria-labelledby"], qf = { class: "fixed inset-0 z-10 overflow-y-auto" }, Qf = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Kf = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), Gf = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
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
    sizeClass: { default: en.sizeClass }
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
    Mt(t, () => {
      Lt(i, a, t.value), Lt(d, r, t.value), t.value || setTimeout(() => l("done"), 200);
    }), t.value = !0;
    const h = () => t.value = !1;
    Nt("ModalProvider", {
      openModal: g
    });
    const m = T(), v = T();
    function g(k, A) {
      m.value = k, v.value = A;
    }
    async function p(k) {
      v.value && v.value(k), m.value = void 0, v.value = void 0;
    }
    const b = (k) => {
      k.key === "Escape" && h();
    };
    return lt(() => window.addEventListener("keydown", b)), zt(() => window.removeEventListener("keydown", b)), (k, A) => {
      var j;
      const P = U("ModalLookup");
      return o(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: h,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        s("div", {
          class: w(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", a.value])
        }, null, 2),
        s("div", qf, [
          s("div", Qf, [
            s("div", {
              class: w(["relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8", e.sizeClass, r.value]),
              onMousedown: A[0] || (A[0] = je(() => {
              }, ["stop"]))
            }, [
              s("div", null, [
                s("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  s("button", {
                    type: "button",
                    onClick: h,
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
          onDone: p
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 40, Uf);
    };
  }
}), Jf = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, Xf = { class: "mt-3 pl-5 flex flex-wrap items-center" }, Yf = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, e1 = { class: "hidden md:inline" }, t1 = { class: "flex pb-1 sm:pb-0" }, l1 = ["title"], s1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), n1 = [
  s1
], a1 = ["disabled"], o1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), i1 = [
  o1
], r1 = ["disabled"], u1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), d1 = [
  u1
], c1 = ["disabled"], f1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), m1 = [
  f1
], v1 = ["disabled"], h1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), g1 = [
  h1
], p1 = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, y1 = { class: "px-4 text-lg text-black dark:text-white" }, b1 = { key: 0 }, w1 = { key: 1 }, x1 = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), k1 = { key: 2 }, $1 = {
  key: 1,
  class: "pl-2"
}, C1 = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), _1 = [
  C1
], L1 = { class: "flex pb-1 sm:pb-0" }, V1 = {
  key: 0,
  class: "pl-2"
}, S1 = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), M1 = { class: "mr-1" }, A1 = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, T1 = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), F1 = [
  T1
], I1 = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, P1 = /* @__PURE__ */ s("path", {
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
    const t = e, a = zl(), { config: i } = wt(), { metadataApi: r, filterDefinitions: d } = Ze(), h = Be("client"), c = i.value.storage, m = f(() => t.toolbarButtonClass ?? ae.toolbarButtonClass), v = f(() => d.value), g = 25, p = T({ take: g }), b = T(new Xe()), k = T(t.skip), A = T(!1), P = T(), j = (R) => typeof R == "string" ? R.split(",") : R || [];
    function z(R, N) {
      return ae.getTableRowClass("fullWidth", N, !1, !0);
    }
    function q() {
      let R = j(t.selectedColumns);
      return R.length > 0 ? R : [];
    }
    const Q = f(() => it(t.refInfo.model)), $ = f(() => {
      let N = q().map((we) => we.toLowerCase());
      const ie = Ke(Q.value);
      return N.length > 0 ? N.map((we) => ie.find((be) => be.name.toLowerCase() === we)).filter((we) => we != null) : ie;
    }), O = f(() => {
      let R = $.value.map((ie) => ie.name), N = j(p.value.selectedColumns).map((ie) => ie.toLowerCase());
      return N.length > 0 ? R.filter((ie) => N.includes(ie.toLowerCase())) : R;
    }), B = f(() => p.value.take ?? g), D = f(() => b.value.response ? ce(b.value.response, "results") : []), F = f(() => {
      var R;
      return ((R = b.value.response) == null ? void 0 : R.total) ?? D.value.length ?? 0;
    }), E = f(() => k.value > 0), K = f(() => k.value > 0), G = f(() => D.value.length >= B.value), te = f(() => D.value.length >= B.value), M = T([]), y = f(() => M.value.some((R) => R.settings.filters.length > 0 || !!R.settings.sort)), S = f(() => M.value.map((R) => R.settings.filters.length).reduce((R, N) => R + N, 0)), le = f(() => qt(Q.value)), V = f(() => {
      var R;
      return (R = r.value) == null ? void 0 : R.operations.find((N) => {
        var ie;
        return ((ie = N.dataModel) == null ? void 0 : ie.name) == t.refInfo.model && Te.isAnyQuery(N);
      });
    }), I = T(), ue = T(!1), oe = T(), se = () => `${t.id}/ApiPrefs/${t.refInfo.model}`, H = (R) => `Column/${t.id}:${t.refInfo.model}.${R}`;
    async function J(R) {
      k.value += R, k.value < 0 && (k.value = 0);
      var N = Math.floor(F.value / B.value) * B.value;
      k.value > N && (k.value = N), await Se();
    }
    async function pe(R, N) {
      l("done", R);
    }
    function _e() {
      l("done", null);
    }
    function ne(R, N) {
      var we, be, Ie;
      let ie = N.target;
      if ((ie == null ? void 0 : ie.tagName) !== "TD") {
        let qe = (we = ie == null ? void 0 : ie.closest("TABLE")) == null ? void 0 : we.getBoundingClientRect(), xe = M.value.find((Ee) => Ee.name.toLowerCase() == R.toLowerCase());
        if (xe && qe) {
          let Ee = 318, rt = (((be = N.target) == null ? void 0 : be.tagName) === "DIV" ? N.target : (Ie = N.target) == null ? void 0 : Ie.closest("DIV")).getBoundingClientRect(), Ft = Ee + 25;
          oe.value = {
            column: xe,
            topLeft: {
              x: Math.max(Math.floor(rt.x + 25), Ft),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function Pe() {
      oe.value = null;
    }
    async function Ae(R) {
      var ie;
      let N = (ie = oe.value) == null ? void 0 : ie.column;
      N && (N.settings = R, c.setItem(H(N.name), JSON.stringify(N.settings)), await Se()), oe.value = null;
    }
    async function ge(R) {
      c.setItem(H(R.name), JSON.stringify(R.settings)), await Se();
    }
    async function Re(R) {
      ue.value = !1, p.value = R, c.setItem(se(), JSON.stringify(R)), await Se();
    }
    async function Se() {
      await ze(Je());
    }
    async function ze(R) {
      const N = V.value;
      if (!N) {
        console.error(`No Query API was found for ${t.refInfo.model}`);
        return;
      }
      let ie = Et(N, R), we = As((qe) => {
        b.value.response = b.value.error = void 0, A.value = qe;
      }), be = await h.api(ie);
      we(), ul(() => b.value = be);
      let Ie = ce(be.response, "results") || [];
      !be.succeeded || Ie.label == 0;
    }
    function Je() {
      let R = {
        include: "total",
        take: B.value
      }, N = j(p.value.selectedColumns || t.selectedColumns);
      if (N.length > 0) {
        let we = le.value;
        we && N.includes(we.name) && (N = [we.name, ...N]), R.fields = N.join(",");
      }
      let ie = [];
      return M.value.forEach((we) => {
        we.settings.sort && ie.push((we.settings.sort === "DESC" ? "-" : "") + we.name), we.settings.filters.forEach((be) => {
          let Ie = be.key.replace("%", we.name);
          R[Ie] = be.value;
        });
      }), typeof R.skip > "u" && k.value > 0 && (R.skip = k.value), ie.length > 0 && (R.orderBy = ie.join(",")), R;
    }
    async function Ne() {
      M.value.forEach((R) => {
        R.settings = { filters: [] }, c.removeItem(H(R.name));
      }), await Se();
    }
    return lt(async () => {
      const R = t.prefs || ol(c.getItem(se()));
      R && (p.value = R), M.value = $.value.map((N) => ({
        name: N.name,
        type: N.type,
        meta: N,
        settings: Object.assign(
          {
            filters: []
          },
          ol(c.getItem(H(N.name)))
        )
      })), isNaN(t.skip) || (k.value = t.skip), await Se();
    }), (R, N) => {
      const ie = U("ErrorSummary"), we = U("Loading"), be = U("SettingsIcons"), Ie = U("DataGrid"), qe = U("ModalDialog");
      return o(), u(ye, null, [
        e.refInfo ? (o(), X(qe, {
          key: 0,
          ref_key: "modalDialog",
          ref: I,
          id: e.id,
          onDone: _e
        }, {
          default: ve(() => [
            s("div", Jf, [
              s("div", Xf, [
                s("h3", Yf, [
                  he(" Select "),
                  s("span", e1, L(n(Fe)(e.refInfo.model)), 1)
                ]),
                s("div", t1, [
                  e.showPreferences ? (o(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: N[0] || (N[0] = (xe) => ue.value = !ue.value)
                  }, n1, 8, l1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 1,
                    type: "button",
                    class: w(["pl-2", n(E) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !n(E),
                    onClick: N[1] || (N[1] = (xe) => J(-n(F)))
                  }, i1, 10, a1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 2,
                    type: "button",
                    class: w(["pl-2", n(K) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !n(K),
                    onClick: N[2] || (N[2] = (xe) => J(-n(B)))
                  }, d1, 10, r1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 3,
                    type: "button",
                    class: w(["pl-2", n(G) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !n(G),
                    onClick: N[3] || (N[3] = (xe) => J(n(B)))
                  }, m1, 10, c1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 4,
                    type: "button",
                    class: w(["pl-2", n(te) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !n(te),
                    onClick: N[4] || (N[4] = (xe) => J(n(F)))
                  }, g1, 10, v1)) : C("", !0)
                ]),
                e.showPagingInfo ? (o(), u("div", p1, [
                  s("div", y1, [
                    A.value ? (o(), u("span", b1, "Querying...")) : C("", !0),
                    n(D).length ? (o(), u("span", w1, [
                      x1,
                      he(" " + L(k.value + 1) + " - " + L(Math.min(k.value + n(D).length, n(F))) + " ", 1),
                      s("span", null, " of " + L(n(F)), 1)
                    ])) : b.value.completed ? (o(), u("span", k1, "No Results")) : C("", !0)
                  ])
                ])) : C("", !0),
                n(y) && e.showResetPreferences ? (o(), u("div", $1, [
                  s("button", {
                    type: "button",
                    onClick: Ne,
                    title: "Reset Preferences & Filters",
                    class: w(n(m))
                  }, _1, 2)
                ])) : C("", !0),
                s("div", L1, [
                  e.showFiltersView && n(S) > 0 ? (o(), u("div", V1, [
                    s("button", {
                      type: "button",
                      onClick: N[5] || (N[5] = (xe) => P.value = P.value == "filters" ? null : "filters"),
                      class: w(n(m)),
                      "aria-expanded": "false"
                    }, [
                      S1,
                      s("span", M1, L(n(S)) + " " + L(n(S) == 1 ? "Filter" : "Filters"), 1),
                      P.value != "filters" ? (o(), u("svg", A1, F1)) : (o(), u("svg", I1, D1))
                    ], 2)
                  ])) : C("", !0)
                ])
              ]),
              P.value == "filters" ? (o(), X(is, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: n(v),
                columns: M.value,
                onDone: N[6] || (N[6] = (xe) => P.value = null),
                onChange: ge
              }, null, 8, ["definitions", "columns"])) : C("", !0),
              oe.value ? (o(), u("div", j1, [
                fe(os, {
                  definitions: n(v),
                  column: oe.value.column,
                  "top-left": oe.value.topLeft,
                  onDone: Pe,
                  onSave: Ae
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : C("", !0),
              b.value.error ? (o(), X(ie, {
                key: 2,
                status: b.value.error
              }, null, 8, ["status"])) : A.value ? (o(), X(we, { key: 3 })) : (o(), u("div", O1, [
                n(D).length ? (o(), u("div", B1, [
                  fe(Ie, {
                    id: e.id,
                    items: n(D),
                    type: e.refInfo.model,
                    "selected-columns": n(O),
                    onFiltersChanged: Se,
                    tableStyle: "fullWidth",
                    rowClass: z,
                    onRowSelected: pe,
                    onHeaderSelected: ne
                  }, Nl({
                    header: ve(({ column: xe, label: Ee }) => {
                      var Qe;
                      return [
                        e.allowFiltering && (!t.canFilter || t.canFilter(xe)) ? (o(), u("div", R1, [
                          s("span", E1, L(Ee), 1),
                          fe(be, {
                            column: M.value.find((rt) => rt.name.toLowerCase() === xe.toLowerCase()),
                            "is-open": ((Qe = oe.value) == null ? void 0 : Qe.column.name) === xe
                          }, null, 8, ["column", "is-open"])
                        ])) : (o(), u("div", H1, [
                          s("span", z1, L(Ee), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    $e(Object.keys(n(a)), (xe) => ({
                      name: xe,
                      fn: ve((Ee) => [
                        Z(R.$slots, xe, _t(sl(Ee)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : C("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : C("", !0),
        ue.value ? (o(), X(rs, {
          key: 1,
          columns: n($),
          prefs: p.value,
          onDone: N[7] || (N[7] = (xe) => ue.value = !1),
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
    label: { type: Function, default: (e) => Fe(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, t = f(() => Object.keys(l.tabs)), a = (v) => l.label ? l.label(v) : Fe(v), i = f(() => l.id || "tabs"), r = f(() => l.param || "tab"), d = T();
    function h(v) {
      if (d.value = v, l.url) {
        const g = t.value[0];
        ql({ tab: v === g ? void 0 : v });
      }
    }
    function c(v) {
      return d.value === v;
    }
    const m = f(() => `${100 / Object.keys(l.tabs).length}%`);
    return lt(() => {
      if (d.value = Object.keys(l.tabs)[0], l.url) {
        const g = Tl(location.search)[r.value];
        g && (d.value = g);
      }
    }), (v, g) => (o(), u("div", null, [
      s("div", U1, [
        s("label", {
          for: n(i),
          class: "sr-only"
        }, "Select a tab", 8, q1),
        s("select", {
          id: n(i),
          name: n(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: g[0] || (g[0] = (p) => {
            var b;
            return h((b = p.target) == null ? void 0 : b.value);
          })
        }, [
          (o(!0), u(ye, null, $e(n(t), (p) => (o(), u("option", {
            key: p,
            value: p
          }, L(a(p)), 9, K1))), 128))
        ], 40, Q1)
      ]),
      s("div", G1, [
        s("div", W1, [
          s("nav", Z1, [
            (o(!0), u(ye, null, $e(n(t), (p) => (o(), u("a", {
              href: "#",
              onClick: je((b) => h(p), ["prevent"]),
              style: El({ width: n(m) }),
              class: w([c(p) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, L(a(p)), 15, J1))), 256))
          ])
        ])
      ]),
      s("div", {
        class: w(e.bodyClass)
      }, [
        (o(), X(Rn(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), Y1 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), em = [
  Y1
], tm = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), lm = [
  tm
], sm = /* @__PURE__ */ Y({
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
      s("span", {
        class: w(`${n(t) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        s("span", {
          class: w(`${n(t) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, em, 2),
        s("span", {
          class: w(`${n(t) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, lm, 2)
      ], 2)
    ]));
  }
}), nm = { key: 0 }, am = {
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
}, bm = /* @__PURE__ */ s("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), wm = /* @__PURE__ */ s("path", {
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
    const t = e, { getMetadata: a, createDto: i } = Ze(), r = yl(), { signIn: d } = as(), h = a({ assert: !0 }), c = h.plugins.auth, m = document.baseURI, v = h.app.baseUrl, g = T(i("Authenticate")), p = T(new Xe());
    lt(() => {
      c == null || c.authProviders.map((D) => D.formLayout).filter((D) => D).forEach((D) => D.forEach((F) => g.value[F.id] = ""));
    });
    const b = f(() => (c == null ? void 0 : c.authProviders.filter((D) => D.formLayout)) || []), k = f(() => b.value[0] || {}), A = f(() => b.value[Math.max(b.value.length - 1, 0)] || {}), P = f(() => (t.provider ? c == null ? void 0 : c.authProviders.find((D) => D.name === t.provider) : null) ?? k.value), j = (D) => D === !1 || D === "false";
    function z(D) {
      return D.label || D.navItem && D.navItem.label;
    }
    const q = f(() => {
      var D;
      return (((D = P.value) == null ? void 0 : D.formLayout) || []).map((F) => {
        var E, K;
        return Object.assign({}, F, {
          type: (E = F.type) == null ? void 0 : E.toLowerCase(),
          autocomplete: F.autocomplete || (((K = F.type) == null ? void 0 : K.toLowerCase()) === "password" ? "current-password" : void 0) || (F.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, F.css)
        });
      });
    }), Q = f(() => j(t.oauth) ? [] : (c == null ? void 0 : c.authProviders.filter((D) => D.type === "oauth")) || []), $ = f(() => {
      let D = ea(
        c == null ? void 0 : c.authProviders.filter((E) => E.formLayout && E.formLayout.length > 0),
        (E, K) => {
          let G = z(K) || Ye(K.name);
          E[G] = K.name === k.value.name ? "" : K.name;
        }
      );
      const F = P.value;
      return F && j(t.tabs) && (D = { [z(F) || Ye(F.name)]: F }), D;
    }), O = f(() => {
      let D = q.value.map((F) => F.id).filter((F) => F);
      return p.value.summaryMessage(D);
    });
    async function B() {
      if (g.value.provider = P.value.name, p.value = await r.api(g.value), p.value.succeeded) {
        const D = p.value.response;
        d(D), l("login", D), p.value = new Xe(), g.value = i("Authenticate");
      }
    }
    return (D, F) => {
      const E = U("ErrorSummary"), K = U("AutoFormFields"), G = U("PrimaryButton"), te = U("Icon"), M = En("href");
      return n(c) ? (o(), u("div", am, [
        s("div", om, [
          s("h2", im, L(e.title), 1),
          Object.keys(n($)).length > 1 ? (o(), u("p", rm, [
            s("span", um, [
              (o(!0), u(ye, null, $e(n($), (y, S) => gt((o(), u("a", {
                class: w([
                  y === "" || y === n(k).name ? "rounded-l-md" : y === n(A).name ? "rounded-r-md -ml-px" : "-ml-px",
                  e.provider === y ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                he(L(S), 1)
              ], 2)), [
                [M, { provider: y }]
              ])), 256))
            ])
          ])) : C("", !0)
        ]),
        s("div", dm, [
          n(O) ? (o(), X(E, {
            key: 0,
            class: "mb-3",
            errorSummary: n(O)
          }, null, 8, ["errorSummary"])) : C("", !0),
          s("div", cm, [
            n(q).length ? (o(), u("form", {
              key: 0,
              onSubmit: je(B, ["prevent"])
            }, [
              fe(K, {
                modelValue: g.value,
                formLayout: n(q),
                api: p.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              s("div", mm, [
                fe(G, { class: "w-full" }, {
                  default: ve(() => [
                    he("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, fm)) : C("", !0),
            n(Q).length ? (o(), u("div", vm, [
              hm,
              s("div", gm, [
                (o(!0), u(ye, null, $e(n(Q), (y) => (o(), u("div", null, [
                  s("a", {
                    href: n(v) + y.navItem.href + "?continue=" + n(m),
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
      ])) : (o(), u("div", nm, "No Auth Plugin"));
    };
  }
}), $m = {
  Alert: ga,
  AlertSuccess: Sa,
  ErrorSummary: Ia,
  InputDescription: Da,
  Icon: Ys,
  Loading: po,
  OutlineButton: wo,
  PrimaryButton: $o,
  SecondaryButton: Lo,
  TextLink: Vo,
  Breadcrumbs: Io,
  Breadcrumb: Bo,
  NavList: Ho,
  NavListItem: Xo,
  AutoQueryGrid: xu,
  SettingsIcons: Du,
  FilterViews: is,
  FilterColumn: os,
  QueryPrefs: rs,
  EnsureAccess: ln,
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
  CloseButton: Mf,
  SlideOver: Nf,
  ModalDialog: Zf,
  ModalLookup: N1,
  Tabs: X1,
  DarkModeToggle: sm,
  SignIn: km
}, Cm = ["onClick", "title"], _m = /* @__PURE__ */ Y({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const l = e, { config: t } = wt(), a = () => t.value.navigate(l.to ?? "/");
    return (i, r) => (o(), u("a", Ce({
      onClick: je(a, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      Z(i.$slots, "default")
    ], 16, Cm));
  }
}), Lm = { RouterLink: _m }, Sl = $m, Im = {
  install(e) {
    Object.keys(Sl).forEach((l) => {
      e.component(l, Sl[l]);
    });
  },
  component(e) {
    return e && (Sl[e] || Lm[e]) || null;
  }
};
export {
  Tm as css,
  Im as default,
  as as useAuth,
  yl as useClient,
  wt as useConfig,
  Am as useFiles,
  Fm as useFormatters,
  Ze as useMetadata,
  Ba as useUtils
};
