var Js = Object.defineProperty;
var Xs = (e, t, l) => t in e ? Js(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var _e = (e, t, l) => (Xs(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as ue, computed as f, openBlock as a, createElementBlock as u, normalizeClass as w, unref as o, createElementVNode as n, createCommentVNode as k, renderSlot as K, ref as M, toDisplayString as A, inject as qe, nextTick as xt, isRef as Un, mergeProps as Le, withModifiers as Ne, h as ht, resolveComponent as J, createBlock as ne, withCtx as ke, useAttrs as Ys, createVNode as $e, createTextVNode as xe, watchEffect as Bl, normalizeStyle as Wl, Fragment as Te, renderList as Ie, withDirectives as kt, vModelCheckbox as Jl, withKeys as qn, createStaticVNode as bl, vModelSelect as eo, useSlots as Xl, getCurrentInstance as Be, onMounted as Je, createSlots as Yl, normalizeProps as It, guardReactiveProps as hl, vModelDynamic as to, onUnmounted as Pt, watch as Lt, vModelText as lo, resolveDynamicComponent as Qn, provide as Xt, resolveDirective as no } from "vue";
import { errorResponseExcept as so, dateFmt as Kn, toTime as oo, omit as ut, enc as Rl, setQueryString as ao, appendQueryString as Kt, nameOf as io, ApiResult as tt, lastRightPart as $t, leftPart as wl, map as Ue, toDate as Vt, toDateTime as ro, toCamelCase as uo, mapGet as be, chop as co, fromXsdDuration as Zn, isDate as xl, timeFmt12 as fo, apiValue as mo, indexOfAny as vo, createBus as ho, toKebabCase as Bn, humanize as Ee, delaySet as Gn, rightPart as dl, queryString as Hl, combinePaths as go, toPascalCase as nt, errorResponse as ft, trimEnd as po, $1 as gl, lastLeftPart as yo, ResponseStatus as Ol, ResponseError as Rn, HttpMethods as en, uniqueKeys as El, humanify as Wn, each as bo } from "@servicestack/client";
const wo = { class: "flex items-center" }, xo = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, ko = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, $o = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Co = [
  $o
], _o = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Lo = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), Vo = [
  Lo
], So = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Mo = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Ao = [
  Mo
], To = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Fo = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), Io = [
  Fo
], Do = /* @__PURE__ */ ue({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, l = f(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), s = f(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), i = f(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (a(), u("div", {
      class: w([o(l), o(s), "border-l-4 p-4"])
    }, [
      n("div", wo, [
        e.hideIcon ? k("", !0) : (a(), u("div", xo, [
          e.type == "warn" ? (a(), u("svg", ko, Co)) : e.type == "error" ? (a(), u("svg", _o, Vo)) : e.type == "info" ? (a(), u("svg", So, Ao)) : e.type == "success" ? (a(), u("svg", To, Io)) : k("", !0)
        ])),
        n("div", null, [
          n("p", {
            class: w([o(i), "text-sm"])
          }, [
            K(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), Oo = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, jo = { class: "flex" }, Po = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
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
], -1), Bo = { class: "ml-3" }, Ro = { class: "text-sm font-medium text-green-800" }, Ho = { key: 0 }, Eo = { class: "ml-auto pl-3" }, zo = { class: "-mx-1.5 -my-1.5" }, No = /* @__PURE__ */ n("span", { class: "sr-only" }, "Dismiss", -1), Uo = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), qo = [
  No,
  Uo
], Qo = /* @__PURE__ */ ue({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const t = M(!1);
    return (l, s) => t.value ? k("", !0) : (a(), u("div", Oo, [
      n("div", jo, [
        Po,
        n("div", Bo, [
          n("h3", Ro, [
            e.message ? (a(), u("span", Ho, A(e.message), 1)) : K(l.$slots, "default", { key: 1 })
          ])
        ]),
        n("div", Eo, [
          n("div", zo, [
            n("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: s[0] || (s[0] = (i) => t.value = !0)
            }, qo)
          ])
        ])
      ])
    ]));
  }
}), Ko = { class: "flex" }, Zo = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
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
], -1), Go = { class: "ml-3" }, Wo = { class: "text-sm text-red-700 dark:text-red-200" }, Jo = /* @__PURE__ */ ue({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const t = e;
    let l = qe("ApiState", void 0);
    const s = f(() => t.status || l != null && l.error.value ? so.call({ responseStatus: t.status ?? (l == null ? void 0 : l.error.value) }, t.except ?? []) : null);
    return (i, r) => o(s) ? (a(), u("div", {
      key: 0,
      class: w(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      n("div", Ko, [
        Zo,
        n("div", Go, [
          n("p", Wo, A(o(s)), 1)
        ])
      ])
    ], 2)) : k("", !0);
  }
}), Xo = ["id", "aria-describedby"], Yo = /* @__PURE__ */ ue({
  __name: "InputDescription",
  props: {
    id: null,
    description: null
  },
  setup(e) {
    return (t, l) => e.description ? (a(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      n("div", null, A(e.description), 1)
    ], 8, Xo)) : k("", !0);
  }
});
function kl(e) {
  return Kn(e).replace(/\//g, "-");
}
function Jn(e) {
  return e == null ? "" : oo(e);
}
function Xn(e, t) {
  e.value = null, xt(() => e.value = t);
}
function At(e) {
  return Object.keys(e).forEach((t) => {
    const l = e[t];
    e[t] = Un(l) ? o(l) : l;
  }), e;
}
function Ct(e, t, l) {
  l ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function cl(e) {
  if (typeof document > "u")
    return;
  let t = (e == null ? void 0 : e.after) || document.activeElement, l = t && t.form;
  if (l) {
    let s = ':not([disabled]):not([tabindex="-1"])', i = l.querySelectorAll(`a:not([disabled]), button${s}, input[type=text]${s}, [tabindex]${s}`), r = Array.prototype.filter.call(
      i,
      (c) => c.offsetWidth > 0 || c.offsetHeight > 0 || c === t
    ), d = r.indexOf(t);
    d > -1 && (r[d + 1] || r[0]).focus();
  }
}
function Bt(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const t = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!t)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof t.getTypeName != "function")
    throw new Error(`${JSON.stringify(t)} is not a Request DTO`);
  const l = t.getTypeName();
  if (!l)
    throw new Error("DTO Required");
  return l;
}
function it(e, t, l) {
  l || (l = {});
  let s = l.cls || l.className || l.class;
  return s && (l = ut(l, ["cls", "class", "className"]), l.class = s), t == null ? `<${e}` + zl(l) + "/>" : `<${e}` + zl(l) + `>${t || ""}</${e}>`;
}
function zl(e) {
  return Object.keys(e).reduce((t, l) => `${t} ${l}="${Rl(e[l])}"`, "");
}
function $l(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Ft(e) {
  return bn(e);
}
let ea = ["string", "number", "boolean", "null", "undefined"];
function _t(e) {
  return ea.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Zt(e) {
  return !_t(e);
}
class Yn {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(t) {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  }
  setItem(t, l) {
    typeof localStorage > "u" || localStorage.setItem(t, l);
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
function pl(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function tn(e) {
  if (typeof history < "u") {
    const t = ao(location.href, e);
    history.pushState({}, "", t);
  }
}
function ln(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const s = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(s);
}
function Nl(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function es(e) {
  const t = ae.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function nn(e, t) {
  return Kt(`swr.${io(e)}`, t ? Object.assign({}, e, t) : e);
}
function ta(e) {
  if (e.request) {
    const t = nn(e.request, e.args);
    ae.config.storage.removeItem(t);
  }
}
async function ts(e, t, l, s, i) {
  const r = nn(t, s);
  l(new tt({ response: es(r) }));
  const d = await e.api(t, s, i);
  if (d.succeeded && d.response) {
    d.response._date = new Date().valueOf();
    const c = JSON.stringify(d.response);
    ae.config.storage.setItem(r, c), l(d);
  }
  return d;
}
function gt(e) {
  return typeof e == "string" ? e.split(",") : e || [];
}
function bt(e, t) {
  const l = gt(t);
  return e.reduce((s, i) => (s[i] = !l.includes(i), s), {});
}
function ls() {
  return {
    LocalStore: Yn,
    dateInputFormat: kl,
    timeInputFormat: Jn,
    setRef: Xn,
    unRefs: At,
    transition: Ct,
    focusNextElement: cl,
    getTypeName: Bt,
    htmlTag: it,
    htmlAttrs: zl,
    linkAttrs: $l,
    toAppUrl: Ft,
    isPrimitive: _t,
    isComplexType: Zt,
    pushState: tn,
    scopedExpr: ln,
    copyText: Nl,
    fromCache: es,
    swrCacheKey: nn,
    swrClear: ta,
    swrApi: ts,
    asStrings: gt,
    asOptions: bt
  };
}
const ns = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), ss = {
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
}, Hn = Object.keys(ss), ct = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, fl = {
  img: ct("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: ct("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: ct("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: ct("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: ct("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: ct("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: ct("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: ct("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: ct("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, la = /[\r\n%#()<>?[\\\]^`{|}]/g, En = 1024, na = ["Bytes", "KB", "MB", "GB", "TB"], sa = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", l = "image/", s = "text/", i = "audio/", r = "video/", d = {
    jpg: l + "jpeg",
    tif: l + "tiff",
    svg: l + "svg+xml",
    ico: l + "x-icon",
    ts: s + "typescript",
    py: s + "x-python",
    sh: s + "x-sh",
    mp3: i + "mpeg3",
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
  function c(h, p) {
    h.split(",").forEach((y) => d[y] = p);
  }
  function m(h, p) {
    h.split(",").forEach((y) => d[y] = p(y));
  }
  return m("jpeg,gif,png,tiff,bmp,webp", (h) => l + h), m("jsx,csv,css", (h) => s + h), m("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (h) => i + h), m("3gpp,avi,dv,divx,ogg,mp4,webm", (h) => r + h), m("rtf,pdf", (h) => e + h), c("htm,html,shtm", s + "html"), c("js,mjs,cjs", s + "javascript"), c("yml,yaml", e + "yaml"), c("bat,cmd", e + "bat"), c("xml,csproj,fsproj,vbproj", s + "xml"), c("txt,ps1", s + "plain"), c("qt,mov", r + "quicktime"), c("doc,dot", e + "msword"), c("xls,xlt,xla", e + "excel"), c("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), c("cer,crt,der", e + "x-x509-ca-cert"), c("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), c("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Ul = [];
function os(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(la, encodeURIComponent);
}
function sn(e) {
  return "data:image/svg+xml;utf8," + os(e);
}
function as(e) {
  let t = URL.createObjectURL(e);
  return Ul.push(t), t;
}
function is() {
  Ul.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), Ul = [];
}
function on(e) {
  if (!e)
    return null;
  let t = wl(e, "?");
  return $t(t, "/");
}
function Yt(e) {
  let t = on(e);
  return t == null || t.indexOf(".") === -1 ? null : $t(t, ".").toLowerCase();
}
function an(e) {
  let t = Yt(e.name);
  return t && ns.indexOf(t) >= 0 ? as(e) : pt(e.name);
}
function rn(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = Yt(e);
  return t && ns.indexOf(t) >= 0 || !1;
}
function pt(e) {
  if (!e)
    return null;
  let t = Yt(e);
  return t == null || rn(e) ? e : qt(t) || sn(fl.doc);
}
function qt(e) {
  let t = rs(e);
  return t && sn(t) || null;
}
function rs(e) {
  if (fl[e])
    return fl[e];
  for (let t = 0; t < Hn.length; t++) {
    let l = Hn[t];
    if (ss[l].indexOf(e) >= 0)
      return fl[l];
  }
  return null;
}
function un(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const l = t < 0 ? 0 : t, s = Math.floor(Math.log(e) / Math.log(En));
  return parseFloat((e / Math.pow(En, s)).toFixed(l)) + " " + na[s];
}
function oa(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: an(t) }));
}
function Cl(e, t) {
  e.onerror = null, e.src = dn(e.src, t) || "";
}
function dn(e, t) {
  return qt($t(e, ".").toLowerCase()) || (t ? qt(t) || t : null) || qt("doc");
}
function ql(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = $t(e, ".").toLowerCase();
  return sa[t] || "application/" + t;
}
function gh() {
  return {
    extSvg: rs,
    extSrc: qt,
    getExt: Yt,
    encodeSvg: os,
    canPreview: rn,
    getFileName: on,
    getMimeType: ql,
    formatBytes: un,
    filePathUri: pt,
    svgToDataUri: sn,
    fileImageUri: an,
    objectUrl: as,
    flush: is,
    inputFiles: oa,
    iconOnError: Cl,
    iconFallbackSrc: dn
  };
}
class aa {
  constructor(t) {
    _e(this, "view");
    _e(this, "includeTypes");
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
const Dt = "/metadata/app.json", ia = {
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
}, ra = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, Ql = {
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
[...Object.keys(Ql), ...Object.values(Ql)];
const ua = {
  String: "string",
  Boolean: "bool",
  ...Ql
};
function rl(e) {
  return ua[e] || e;
}
function us(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? rl(t[0]) + "?" : e.endsWith("[]") ? `List<${rl(e.substring(0, e.length - 2))}>` : t.length === 0 ? rl(e) : wl(rl(e), "`") + "<" + t.join(",") + ">") : "";
}
function da(e) {
  return e && us(e.name, e.genericArgs);
}
class Ot {
  constructor() {
    _e(this, "Query");
    _e(this, "QueryInto");
    _e(this, "Create");
    _e(this, "Update");
    _e(this, "Patch");
    _e(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((l) => !!l).map((l) => l);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    ze.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : ze.isQuery(t) && !this.Query ? this.Query = t : ze.isCreate(t) && !this.Create ? this.Create = t : ze.isUpdate(t) && !this.Update ? this.Update = t : ze.isPatch(t) && !this.Patch ? this.Patch = t : ze.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const l = new Ot();
    return t.forEach((s) => {
      l.add(s);
    }), l;
  }
  static forType(t, l) {
    var i;
    let s = new Ot();
    return t && (l ?? (l = (i = ae.metadata.value) == null ? void 0 : i.api), l == null || l.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == t && s.add(r);
    })), s;
  }
}
const ze = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => Ue(e.request.inherits, (t) => ze.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => Ue(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => Ue(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => {
    var t;
    return (t = e.request.implements) == null ? void 0 : t.some((l) => ze.AnyWrite.indexOf(l.name) >= 0);
  },
  isCreate: (e) => ul(e, ze.Create),
  isUpdate: (e) => ul(e, ze.Update),
  isPatch: (e) => ul(e, ze.Patch),
  isDelete: (e) => ul(e, ze.Delete),
  model: (e) => {
    var t, l, s;
    return e ? Ue(e.inherits, (i) => ze.AnyRead.indexOf(i.name) >= 0) ? (t = e.inherits) == null ? void 0 : t.genericArgs[0] : (s = (l = e.implements) == null ? void 0 : l.find((i) => ze.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : s.genericArgs[0] : null;
  }
};
function ca(e) {
  var t;
  return ((t = e.input) == null ? void 0 : t.type) || _l(cn(e));
}
function ds(e) {
  return e.endsWith("?") ? co(e, 1) : e;
}
function _l(e) {
  return ia[ds(e)];
}
function fa(e) {
  return e && ra[e] || "String";
}
function cn(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Kl(e) {
  return e && _l(e) == "number" || !1;
}
function cs(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function ma(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function fs(e) {
  if (!(e != null && e.type))
    return !1;
  const t = cn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : _l(e.type) == null;
}
function ms(e) {
  var l, s, i;
  if (!(e != null && e.type))
    return !1;
  const t = cn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum || ((l = e.input) == null ? void 0 : l.type) == "file" || ((s = e.input) == null ? void 0 : s.type) == "tag" || ((i = e.input) == null ? void 0 : i.type) == "combobox" ? !0 : _l(e.type) != null;
}
function Gt(e, t) {
  let l = typeof e == "string" ? Ll(e) : e;
  l || (console.warn(`Metadata not found for: ${e}`), l = { request: { name: e } });
  let s = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return l.returnsVoid ? void 0 : new s();
    }, r.prototype.getTypeName = function() {
      return l.request.name;
    }, r.prototype.getMethod = function() {
      return l.method || "POST";
    }, r;
  }();
  return new i(t);
}
function va(e, t, l = {}) {
  let s = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return typeof l.createResponse == "function" ? l.createResponse() : new s();
    }, r.prototype.getTypeName = function() {
      return e;
    }, r.prototype.getMethod = function() {
      return l.method || "POST";
    }, r;
  }();
  return new i(t);
}
function ml(e, t) {
  return e ? (Object.keys(e).forEach((l) => {
    let s = e[l];
    typeof s == "string" && s.startsWith("/Date") && (e[l] = kl(Vt(s)));
  }), e) : {};
}
function ha(e, t) {
  let l = {};
  return Array.from(e.elements).forEach((s) => {
    var p;
    let i = s;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = t && t.find((y) => y.name.toLowerCase() == r);
    let c = d == null ? void 0 : d.type, m = (p = d == null ? void 0 : d.genericArgs) == null ? void 0 : p[0], h = i.type === "checkbox" ? i.checked : i.value;
    Kl(c) ? h = Number(h) : c === "List`1" && typeof h == "string" && (h = h.split(",").map((y) => Kl(m) ? Number(y) : y)), l[i.id] = h;
  }), l;
}
function fn(e) {
  var t;
  return ((t = e == null ? void 0 : e.api) == null ? void 0 : t.operations) && e.api.operations.length > 0;
}
function ga(e) {
  if (e != null && e.assert && !ae.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return ae.metadata.value;
}
function Wt(e) {
  return e && fn(e) ? (e.date = ro(new Date()), ae.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Dt, JSON.stringify(e)), !0) : !1;
}
function pa() {
  ae.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Dt);
}
function vs() {
  if (ae.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (fn(e))
    Wt(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(Dt) : null;
    if (t)
      try {
        Wt(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${Dt} from localStorage`);
      }
  }
  return ae.metadata.value != null;
}
async function zn(e, t) {
  let l = t ? await t() : await fetch(e);
  if (l.ok) {
    let s = await l.text();
    Wt(JSON.parse(s));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${l.statusText}`);
  fn(ae.metadata.value) || console.warn("AppMetadata is not available");
}
async function ya(e) {
  var r;
  const { olderThan: t, resolvePath: l, resolve: s } = e || {};
  let i = vs() && t !== 0;
  if (i && t) {
    let d = Vt((r = ae.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > t) && (i = !1);
  }
  if (!i) {
    if ((l || s) && await zn(l || Dt, s), ae.metadata.value != null)
      return;
    const d = qe("client");
    if (d != null) {
      const c = await d.api(new aa());
      c.succeeded && Wt(c.response);
    }
    if (ae.metadata.value != null)
      return;
    await zn(Dt);
  }
  return ae.metadata.value;
}
function st(e, t) {
  var d;
  let l = (d = ae.metadata.value) == null ? void 0 : d.api;
  if (!l || !e)
    return null;
  let s = l.types.find((c) => c.name.toLowerCase() === e.toLowerCase() && (!t || c.namespace == t));
  if (s)
    return s;
  let i = Ll(e);
  if (i)
    return i.request;
  let r = l.operations.find((c) => c.response && c.response.name.toLowerCase() === e.toLowerCase() && (!t || c.response.namespace == t));
  return r ? r.response : null;
}
function Ll(e) {
  var s;
  let t = (s = ae.metadata.value) == null ? void 0 : s.api;
  return t ? t.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function ba({ dataModel: e }) {
  var s;
  const t = (s = ae.metadata.value) == null ? void 0 : s.api;
  if (!t)
    return [];
  let l = t.operations;
  if (e) {
    const i = typeof e == "string" ? st(e) : e;
    l = l.filter((r) => hs(r.dataModel, i));
  }
  return l;
}
function mn(e) {
  return e ? st(e.name, e.namespace) : null;
}
function hs(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function wa(e, t) {
  let l = st(e);
  return l && l.properties && l.properties.find((i) => i.name.toLowerCase() === t.toLowerCase());
}
function gs(e) {
  return ps(st(e));
}
function ps(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let t = {};
    for (let l = 0; l < e.enumNames.length; l++) {
      const s = (e.enumDescriptions ? e.enumDescriptions[l] : null) || e.enumNames[l], i = (e.enumValues != null ? e.enumValues[l] : null) || e.enumNames[l];
      t[i] = s;
    }
    return t;
  }
  return null;
}
function ys(e) {
  if (!e)
    return null;
  let t = {}, l = e.input && e.input.allowableEntries;
  if (l) {
    for (let i = 0; i < l.length; i++) {
      let r = l[i];
      t[r.key] = r.value;
    }
    return t;
  }
  let s = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (s) {
    for (let i = 0; i < s.length; i++) {
      let r = s[i];
      t[r] = r;
    }
    return t;
  }
  if (e.isEnum) {
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = st(i);
    if (r)
      return ps(r);
  }
  return null;
}
function vn(e) {
  if (!e)
    return;
  const t = [];
  return Object.keys(e).forEach((l) => t.push({ key: l, value: e[l] })), t;
}
function xa(e, t) {
  const s = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, t))(e.name, (t == null ? void 0 : t.type) || ca(e) || "text");
  return e.isEnum && (s.type = "select", s.allowableEntries = vn(ys(e))), s;
}
function ka(e) {
  let t = [];
  if (e) {
    const l = We(e), s = Ll(e.name), i = mn(s == null ? void 0 : s.dataModel);
    l.forEach((r) => {
      var c, m, h;
      if (!ms(r))
        return;
      const d = xa(r, r.input);
      if (d.id = uo(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const p = (m = (c = ae.metadata.value) == null ? void 0 : c.plugins.filesUpload) == null ? void 0 : m.locations.find((y) => y.name == r.uploadTo);
        p && !d.accept && p.allowExtensions && (d.accept = p.allowExtensions.map((y) => y.startsWith(".") ? y : `.${y}`).join(","));
      }
      if (i) {
        const p = (h = i.properties) == null ? void 0 : h.find((y) => y.name == r.name);
        r.ref || (r.ref = p == null ? void 0 : p.ref);
      }
      if (d.options)
        try {
          const p = {
            input: d,
            $typeFields: l.map((v) => v.name),
            $dataModelFields: i ? We(i).map((v) => v.name) : [],
            ...ae.config.scopeWhitelist
          }, y = ln(d.options, p);
          Object.keys(y).forEach((v) => {
            d[v] = y[v];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      t.push(d);
    });
  }
  return t;
}
function hn(e, t) {
  var i, r;
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const l = st(t.type);
  if (!(l != null && l.enumValues))
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const s = [];
  for (let d = 0; d < l.enumValues.length; d++) {
    const c = parseInt(l.enumValues[d]);
    c > 0 && (c & e) === c && s.push(((i = l.enumDescriptions) == null ? void 0 : i[d]) || ((r = l.enumNames) == null ? void 0 : r[d]) || `${e}`);
  }
  return s;
}
function bs(e) {
  return (t) => typeof t == "number" ? hn(t, { type: e }) : t;
}
function We(e) {
  if (!e)
    return [];
  let t = [], l = {};
  function s(i) {
    i.forEach((r) => {
      l[r.name] || (l[r.name] = 1, t.push(r));
    });
  }
  for (; e; )
    e.properties && s(e.properties), e = e.inherits ? mn(e.inherits) : null;
  return t.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function ul(e, t) {
  var l;
  return ((l = e.request.implements) == null ? void 0 : l.some((s) => s.name === t)) || !1;
}
function el(e) {
  return e ? ws(e, We(e)) : null;
}
function ws(e, t) {
  let l = t.find((r) => r.name.toLowerCase() === "id");
  if (l && l.isPrimaryKey)
    return l;
  let i = t.find((r) => r.isPrimaryKey) || l;
  if (!i) {
    let r = ze.model(e);
    if (r)
      return Ue(st(r), (d) => el(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function $a(e, t) {
  return Ue(el(e), (l) => be(t, l.name));
}
function xs(e, t, l) {
  return e && e.valueType === "none" ? "" : l.key === "%In" || l.key === "%Between" ? `(${l.value})` : Ca(t, l.value);
}
function Ca(e, t) {
  return e ? (e = ds(e), Kl(e) || e === "Boolean" ? t : ma(e) ? `[${t}]` : `'${t}'`) : t;
}
function ot() {
  const e = f(() => {
    var s;
    return ((s = ae.metadata.value) == null ? void 0 : s.app) || null;
  }), t = f(() => {
    var s;
    return ((s = ae.metadata.value) == null ? void 0 : s.api) || null;
  }), l = f(() => {
    var s;
    return ((s = ae.metadata.value) == null ? void 0 : s.plugins.autoQuery.viewerConventions) || [];
  });
  return vs(), {
    loadMetadata: ya,
    getMetadata: ga,
    setMetadata: Wt,
    clearMetadata: pa,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: l,
    typeOf: st,
    typeOfRef: mn,
    typeEquals: hs,
    apiOf: Ll,
    findApis: ba,
    typeName: da,
    typeName2: us,
    property: wa,
    enumOptions: gs,
    propertyOptions: ys,
    createFormLayout: ka,
    typeProperties: We,
    supportsProp: ms,
    Crud: ze,
    Apis: Ot,
    getPrimaryKey: el,
    getPrimaryKeyByProps: ws,
    getId: $a,
    createDto: Gt,
    makeDto: va,
    toFormValues: ml,
    formValues: ha,
    isComplexProp: fs,
    asKvps: vn,
    expandEnumFlags: hn,
    enumFlagsConverter: bs
  };
}
const et = class {
  static async getOrFetchValue(t, l, s, i, r, d, c) {
    const m = et.getValue(s, c, r);
    return m ?? (await et.fetchLookupIds(t, l, s, i, r, d, [c]), et.getValue(s, c, r));
  }
  static getValue(t, l, s) {
    const i = et.Lookup[t];
    if (i) {
      const r = i[l];
      if (r)
        return s = s.toLowerCase(), r[s];
    }
  }
  static setValue(t, l, s, i) {
    const r = et.Lookup[t] ?? (et.Lookup[t] = {}), d = r[l] ?? (r[l] = {});
    s = s.toLowerCase(), d[s] = i;
  }
  static setRefValue(t, l) {
    const s = be(l, t.refId);
    if (s == null || t.refLabel == null)
      return null;
    const i = be(l, t.refLabel);
    return et.setValue(t.model, s, t.refLabel, i), i;
  }
  static async fetchLookupIds(t, l, s, i, r, d, c) {
    const m = l.operations.find((h) => {
      var p;
      return ze.isAnyQuery(h) && ((p = h.dataModel) == null ? void 0 : p.name) == s;
    });
    if (m) {
      const h = et.Lookup[s] ?? (et.Lookup[s] = {}), p = [];
      Object.keys(h).forEach((Y) => {
        const ie = h[Y];
        be(ie, r) && p.push(Y);
      });
      const y = c.filter((Y) => !p.includes(Y));
      if (y.length == 0)
        return;
      const v = d ? null : `${i},${r}`, g = {
        [i + "In"]: y.join(",")
      };
      v && (g.fields = v);
      const b = Gt(m, g), B = await t.api(b, { jsconfig: "edv,eccn" });
      if (B.succeeded)
        (be(B.response, "results") || []).forEach((ie) => {
          if (!be(ie, i)) {
            console.error(`result[${i}] == null`, ie);
            return;
          }
          const N = `${be(ie, i)}`, z = be(ie, r);
          r = r.toLowerCase();
          const T = h[N] ?? (h[N] = {});
          T[r] = `${z}`;
        });
      else {
        console.error(`Failed to call ${m.request.name}`);
        return;
      }
    }
  }
};
let wt = et;
_e(wt, "Lookup", {});
let Zl = () => new Date().getTime(), _a = ["/", "T", ":", "-"], rt = {
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
}, La = new Intl.RelativeTimeFormat(rt.locale, {}), Nn = 24 * 60 * 60 * 1e3 * 365, jl = {
  year: Nn,
  month: Nn / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, yt = {
  currency: ks,
  bytes: $s,
  link: Cs,
  linkTel: _s,
  linkMailTo: Ls,
  icon: Vs,
  iconRounded: Ss,
  attachment: Ms,
  hidden: As,
  time: Ts,
  relativeTime: pn,
  relativeTimeFromMs: Vl,
  enumFlags: Is,
  formatDate: Rt,
  formatNumber: gn
};
"iconOnError" in globalThis || (globalThis.iconOnError = Cl);
class Ke {
}
_e(Ke, "currency", { method: "currency" }), _e(Ke, "bytes", { method: "bytes" }), _e(Ke, "link", { method: "link" }), _e(Ke, "linkTel", { method: "linkTel" }), _e(Ke, "linkMailTo", { method: "linkMailTo" }), _e(Ke, "icon", { method: "icon" }), _e(Ke, "iconRounded", { method: "iconRounded" }), _e(Ke, "attachment", { method: "attachment" }), _e(Ke, "time", { method: "time" }), _e(Ke, "relativeTime", { method: "relativeTime" }), _e(Ke, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), _e(Ke, "date", { method: "formatDate" }), _e(Ke, "number", { method: "formatNumber" }), _e(Ke, "hidden", { method: "hidden" }), _e(Ke, "enumFlags", { method: "enumFlags" });
function Va(e) {
  rt = Object.assign({}, rt, e);
}
function Sa(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (yt[t] = e[t]);
  });
}
function Ma() {
  return yt;
}
function tl(e, t) {
  return t ? it("span", e, t) : e;
}
function ks(e, t) {
  const l = ut(t, ["currency"]);
  return tl(new Intl.NumberFormat(void 0, { style: "currency", currency: (t == null ? void 0 : t.currency) || "USD" }).format(e), l);
}
function $s(e, t) {
  return tl(un(e), t);
}
function Cs(e, t) {
  return it("a", e, $l({ ...t, href: e }));
}
function _s(e, t) {
  return it("a", e, $l({ ...t, href: `tel:${e}` }));
}
function Ls(e, t) {
  t || (t = {});
  let { subject: l, body: s } = t, i = ut(t, ["subject", "body"]), r = {};
  return l && (r.subject = l), s && (r.body = s), it("a", e, $l({ ...i, href: `mailto:${Kt(e, r)}` }));
}
function Vs(e, t) {
  return it("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Ft(e), onerror: "iconOnError(this)" }, t));
}
function Ss(e, t) {
  return it("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Ft(e), onerror: "iconOnError(this)" }, t));
}
function Ms(e, t) {
  let l = on(e), i = Yt(l) == null || rn(e) ? Ft(e) : dn(e);
  const r = Ft(i);
  let d = t && (t["icon-class"] || t.iconClass), c = it("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), m = `<span class="pl-1">${l}</span>`;
  return it("a", c + m, Object.assign({ class: "flex", href: Ft(e), title: e }, t ? ut(t, ["icon-class", "iconClass"]) : null));
}
function As(e) {
  return "";
}
function Ts(e, t) {
  let l = typeof e == "string" ? new Date(Zn(e) * 1e3) : xl(e) ? Vt(e) : null;
  return tl(l ? fo(l) : e, t);
}
function Rt(e, t) {
  if (e == null)
    return "";
  let l = typeof e == "number" ? new Date(e) : typeof e == "string" ? Vt(e) : e;
  if (!xl(l))
    return console.warn(`${l} is not a Date value`), e == null ? "" : `${e}`;
  let s = rt.date ? Sl(rt.date) : null;
  return tl(typeof s == "function" ? s(l) : Kn(l), t);
}
function gn(e, t) {
  if (typeof e != "number")
    return e;
  let l = rt.number ? Sl(rt.number) : null, s = typeof l == "function" ? l(e) : `${e}`;
  return s === "" && (console.warn(`formatNumber(${e}) => ${s}`, l), s = `${e}`), tl(s, t);
}
function Fs(e, t, l) {
  let s = mo(e), i = t ? Sl(t) : null;
  if (typeof i == "function") {
    let d = l;
    if (t != null && t.options)
      try {
        d = ln(t.options, l);
      } catch (c) {
        console.error(`Could not evaluate '${t.options}'`, c, ", with scope:", l);
      }
    return i(e, d);
  }
  let r = s != null ? xl(s) ? Rt(s, l) : typeof s == "number" ? gn(s, l) : s : null;
  return r ?? "";
}
function Jt(e, t, l) {
  return _t(e) ? Fs(e, t, l) : Da(e, t, l);
}
function Aa(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (xl(e))
    return e.getTime() - Zl();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return Zn(e) * 1e3 * -1;
    if (vo(e, _a) >= 0)
      return Vt(e).getTime() - Zl();
  }
  return NaN;
}
function Vl(e, t) {
  for (let l in jl)
    if (Math.abs(e) > jl[l] || l === "second")
      return (t || La).format(Math.round(e / jl[l]), l);
}
function pn(e, t) {
  let l = Aa(e);
  return isNaN(l) ? "" : Vl(l, t);
}
function Ta(e, t) {
  return Vl(e.getTime() - (t ? t.getTime() : Zl()));
}
function Is(e, t) {
  return hn(e, t).join(", ");
}
function Sl(e) {
  if (!e)
    return null;
  let { method: t, options: l } = e, s = `${t}(${l})`, i = yt[s] || yt[t];
  if (typeof i == "function")
    return i;
  let r = e.locale || rt.locale;
  if (t.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", c = `return new ${t}(${d},${l || "undefined"})`;
    try {
      let m = Function(c)();
      return i = t === "Intl.DateTimeFormat" ? (h) => m.format(Vt(h)) : t === "Intl.NumberFormat" ? (h) => m.format(Number(h)) : t === "Intl.RelativeTimeFormat" ? (h) => pn(h, m) : (h) => m.format(h), yt[s] = i;
    } catch (m) {
      console.error(`Invalid format: ${c}`, m);
    }
  } else {
    let d = globalThis[t];
    if (typeof d == "function") {
      let c = l != null ? Function("return " + l)() : void 0;
      return i = (m) => d(m, c, r), yt[s] = i;
    }
    console.error(`No '${t}' function exists`, Object.keys(yt));
  }
  return null;
}
function Ds(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Os(e) {
  return e.substring(0, 6) === "/Date(" ? Rt(Vt(e)) : e;
}
function Fa(e) {
  return yn(jt(e)).replace(/"/g, "");
}
function js(e) {
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
function yn(e, t = 4) {
  return e = js(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function Ia(e) {
  return e = js(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = jt(e), yn(e));
}
function jt(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return Os(e);
  if (_t(e))
    return e;
  if (e instanceof Date)
    return Rt(e);
  if (Array.isArray(e))
    return e.map(jt);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((l) => {
      l != "__type" && (t[l] = jt(e[l]));
    }), t;
  }
  return e;
}
function Da(e, t, l) {
  let s = e;
  if (Array.isArray(e)) {
    if (_t(e[0]))
      return s.join(",");
    e[0] != null && (s = e[0]);
  }
  if (s == null)
    return "";
  if (s instanceof Date)
    return Rt(s, l);
  let i = Object.keys(s), r = [];
  for (let d = 0; d < Math.min(rt.maxNestedFields, i.length); d++) {
    let c = i[d], m = `${jt(s[c])}`;
    r.push(`<b class="font-medium">${c}</b>: ${Rl(Ds(Os(m), rt.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), it("span", "{ " + r.join(", ") + " }", Object.assign({ title: Rl(Fa(e)) }, l));
}
function ph() {
  return {
    Formats: Ke,
    setDefaultFormats: Va,
    setFormatters: Sa,
    formatValue: Jt,
    formatter: Sl,
    dateInputFormat: kl,
    currency: ks,
    bytes: $s,
    link: Cs,
    linkTel: _s,
    linkMailTo: Ls,
    icon: Vs,
    iconRounded: Ss,
    attachment: Ms,
    hidden: As,
    time: Ts,
    relativeTime: pn,
    relativeTimeFromDate: Ta,
    relativeTimeFromMs: Vl,
    enumFlags: Is,
    formatDate: Rt,
    formatNumber: gn,
    indentJson: yn,
    prettyJson: Ia,
    scrub: jt,
    truncate: Ds,
    apiValueFmt: Fs,
    iconOnError: Cl
  };
}
const Oa = ["onClick", "title"], ja = /* @__PURE__ */ ue({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const t = e, { config: l } = St(), s = () => l.value.navigate(t.to ?? "/");
    return (i, r) => (a(), u("a", Le({
      onClick: Ne(s, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      K(i.$slots, "default")
    ], 16, Oa));
  }
}), Qt = class {
  static component(t) {
    const l = Qt.components[t];
    if (l)
      return l;
    const s = Bn(t), i = Object.keys(Qt.components).find((r) => Bn(r) === s);
    return i && Qt.components[i] || null;
  }
};
let ae = Qt;
_e(ae, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (t) => location.href = t,
  assetsPathResolver: (t) => t,
  fallbackPathResolver: (t) => t,
  storage: new Yn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
  scopeWhitelist: {
    enumFlagsConverter: bs,
    ...Ma()
  }
}), _e(ae, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), _e(ae, "events", ho()), _e(ae, "user", M(null)), _e(ae, "metadata", M(null)), _e(ae, "components", {
  RouterLink: ja
});
function Pa(e) {
  ae.config = Object.assign(ae.config, e);
}
function Ba(e) {
  ae.autoQueryGridDefaults = Object.assign(ae.autoQueryGridDefaults, e);
}
function bn(e) {
  return e && ae.config.assetsPathResolver ? ae.config.assetsPathResolver(e) : e;
}
function Ra(e) {
  return e && ae.config.fallbackPathResolver ? ae.config.fallbackPathResolver(e) : e;
}
function St() {
  const e = f(() => ae.config), t = f(() => ae.autoQueryGridDefaults), l = ae.events;
  return {
    config: e,
    setConfig: Pa,
    events: l,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: Ba,
    assetsPathResolver: bn,
    fallbackPathResolver: Ra
  };
}
const Ps = ue({
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
      let l = e.image;
      if (e.type) {
        const { typeOf: r } = ot(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? l = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let s = e.svg || (l == null ? void 0 : l.svg) || "";
      if (s.startsWith("<svg ")) {
        let d = wl(s, ">").indexOf("class="), c = `${(l == null ? void 0 : l.cls) || ""} ${t.class || ""}`;
        if (d == -1)
          s = `<svg class="${c}" ${s.substring(4)}`;
        else {
          const m = d + 6 + 1;
          s = `${s.substring(0, m) + c} ${s.substring(m)}`;
        }
        return ht("span", { innerHTML: s });
      } else
        return ht("img", {
          class: [l == null ? void 0 : l.cls, t.class],
          src: bn(e.src || (l == null ? void 0 : l.uri)),
          onError: (r) => Cl(r.target)
        });
    };
  }
}), Ha = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, Ea = { class: "flex" }, za = /* @__PURE__ */ n("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Na = /* @__PURE__ */ n("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Ua = [
  za,
  Na
], qa = /* @__PURE__ */ ue({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, l) => (a(), u("div", Ha, [
      n("div", Ea, [
        (a(), u("svg", {
          class: w(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, Ua, 2)),
        n("span", null, [
          K(t.$slots, "default")
        ])
      ])
    ]));
  }
}), Qa = ["href", "onClick"], Ka = ["type"], Za = /* @__PURE__ */ ue({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const t = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (l, s) => {
      const i = J("router-link");
      return e.href ? (a(), ne(i, {
        key: 0,
        to: e.href
      }, {
        default: ke(({ navigate: r }) => [
          n("button", {
            class: w(t),
            href: e.href,
            onClick: r
          }, [
            K(l.$slots, "default")
          ], 8, Qa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Le({
        key: 1,
        type: e.type,
        class: t
      }, l.$attrs), [
        K(l.$slots, "default")
      ], 16, Ka));
    };
  }
}), Ga = ["href", "onClick"], Wa = ["type"], Ja = /* @__PURE__ */ ue({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: null,
    color: { default: "indigo" }
  },
  setup(e) {
    const t = e, l = {
      blue: "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, s = f(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (l[t.color] || l.indigo));
    return (i, r) => {
      const d = J("router-link");
      return e.href ? (a(), ne(d, {
        key: 0,
        to: e.href
      }, {
        default: ke(({ navigate: c }) => [
          n("button", {
            class: w(o(s)),
            href: e.href,
            onClick: c
          }, [
            K(i.$slots, "default")
          ], 10, Ga)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Le({
        key: 1,
        type: e.type,
        class: o(s)
      }, i.$attrs), [
        K(i.$slots, "default")
      ], 16, Wa));
    };
  }
}), Xa = ["type", "href", "onClick"], Ya = ["type"], ei = /* @__PURE__ */ ue({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const t = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (l, s) => {
      const i = J("router-link");
      return e.href ? (a(), ne(i, {
        key: 0,
        to: e.href
      }, {
        default: ke(({ navigate: r }) => [
          n("button", {
            type: e.type ?? "button",
            class: w(t),
            href: e.href,
            onClick: r
          }, [
            K(l.$slots, "default")
          ], 8, Xa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Le({
        key: 1,
        type: e.type ?? "button",
        class: t
      }, l.$attrs), [
        K(l.$slots, "default")
      ], 16, Ya));
    };
  }
});
function Ge(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const yl = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, lt = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, Ut = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, Tt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Gl = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ze = {
  panelClass(e = "slideOver") {
    return e == "card" ? Ut.panelClass : Tt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? Ut.formClass : Tt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? Ut.headingClass : Tt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? Ut.subHeadingClass : Tt.subHeadingClass;
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
  getTableRowClass(e = "stripedRows", t, l, s) {
    return (s ? "cursor-pointer " : "") + (l ? "bg-indigo-100 dark:bg-blue-800" : (s ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (Ge(e, "stripedRows") ? t % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (Ge(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
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
}, ti = {
  colspans: "col-span-3 sm:col-span-3"
}, yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: yl,
  card: Ut,
  dummy: ti,
  form: Ze,
  grid: he,
  input: lt,
  modal: Gl,
  slideOver: Tt
}, Symbol.toStringTag, { value: "Module" })), li = /* @__PURE__ */ ue({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = e, l = Ys(), s = f(() => (yl[t.color] || yl.blue) + (l.href ? "" : " cursor-pointer"));
    return (i, r) => (a(), u("a", {
      class: w(o(s))
    }, [
      K(i.$slots, "default")
    ], 2));
  }
}), ni = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, si = {
  role: "list",
  class: "flex items-center space-x-4"
}, oi = ["href", "title"], ai = /* @__PURE__ */ n("svg", {
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
], -1), ii = { class: "sr-only" }, ri = /* @__PURE__ */ ue({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, l) => (a(), u("nav", ni, [
      n("ol", si, [
        n("li", null, [
          n("div", null, [
            n("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              ai,
              n("span", ii, A(e.homeLabel), 1)
            ], 8, oi)
          ])
        ]),
        K(t.$slots, "default")
      ])
    ]));
  }
}), ui = { class: "flex items-center" }, di = /* @__PURE__ */ n("svg", {
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
], -1), ci = ["href", "title"], fi = ["title"], mi = /* @__PURE__ */ ue({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("li", null, [
      n("div", ui, [
        di,
        e.href ? (a(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          K(t.$slots, "default")
        ], 8, ci)) : (a(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          K(t.$slots, "default")
        ], 8, fi))
      ])
    ]));
  }
}), vi = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, hi = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, gi = /* @__PURE__ */ ue({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("div", null, [
      e.title ? (a(), u("h2", vi, A(e.title), 1)) : k("", !0),
      n("ul", hi, [
        K(t.$slots, "default")
      ])
    ]));
  }
}), pi = { class: "relative flex items-start space-x-4 py-6" }, yi = { class: "flex-shrink-0" }, bi = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, wi = { class: "min-w-0 flex-1" }, xi = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, ki = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, $i = ["href"], Ci = /* @__PURE__ */ n("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), _i = { class: "text-base text-gray-500" }, Li = /* @__PURE__ */ n("div", { class: "flex-shrink-0 self-center" }, [
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
], -1), Vi = /* @__PURE__ */ ue({
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
    return (t, l) => {
      const s = J("Icon");
      return a(), u("li", pi, [
        n("div", yi, [
          n("span", bi, [
            $e(s, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        n("div", wi, [
          n("h3", xi, [
            n("span", ki, [
              n("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                Ci,
                xe(" " + A(e.title), 1)
              ], 8, $i)
            ])
          ]),
          n("p", _i, [
            K(t.$slots, "default")
          ])
        ]),
        Li
      ]);
    };
  }
});
function Si(e) {
  ae.user.value = e, ae.events.publish("signIn", e);
}
function Mi() {
  ae.user.value = null, ae.events.publish("signOut", null);
}
function Bs(e) {
  var t;
  return (((t = ae.user.value) == null ? void 0 : t.roles) || []).indexOf(e) >= 0;
}
function Ai(e) {
  var t;
  return (((t = ae.user.value) == null ? void 0 : t.permissions) || []).indexOf(e) >= 0;
}
function wn() {
  return Bs("Admin");
}
function vl(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const t = ae.user.value;
  if (!t)
    return !1;
  if (wn())
    return !0;
  let [l, s] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((m) => l.indexOf(m) >= 0) || d.length > 0 && !d.some((m) => l.indexOf(m) >= 0) || !r.every((m) => s.indexOf(m) >= 0) || c.length > 0 && !c.every((m) => s.indexOf(m) >= 0));
}
function Ti(e) {
  if (!e || !e.requiresAuth)
    return null;
  const t = ae.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (wn())
    return null;
  let [l, s] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], m = i.filter((p) => l.indexOf(p) < 0);
  if (m.length > 0)
    return `Requires ${m.map((p) => "<b>" + p + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "");
  let h = r.filter((p) => s.indexOf(p) < 0);
  return h.length > 0 ? `Requires ${h.map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (h.length > 1 ? "s" : "") : d.length > 0 && !d.some((p) => l.indexOf(p) >= 0) ? `Requires any ${d.filter((p) => l.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "") : c.length > 0 && !c.every((p) => s.indexOf(p) >= 0) ? `Requires any ${c.filter((p) => s.indexOf(p) < 0).map((p) => "<b>" + p + "</b>").join(", ")} Permission` + (h.length > 1 ? "s" : "") : null;
}
function xn() {
  const e = f(() => ae.user.value || null), t = f(() => ae.user.value != null);
  return { signIn: Si, signOut: Mi, user: e, isAuthenticated: t, hasRole: Bs, hasPermission: Ai, isAdmin: wn, canAccess: vl, invalidAccessMessage: Ti };
}
const Fi = { key: 0 }, Ii = { class: "md:p-4" }, Rs = /* @__PURE__ */ ue({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = xn(), { config: l } = St(), s = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Kt(l.value.redirectSignIn, { redirect: r });
      l.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Kt(l.value.redirectSignOut, { ReturnUrl: r });
      l.value.navigate(d);
    };
    return (r, d) => {
      const c = J("Alert"), m = J("SecondaryButton");
      return e.invalidAccess ? (a(), u("div", Fi, [
        $e(c, {
          class: w(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        n("div", Ii, [
          o(t) ? (a(), ne(m, {
            key: 1,
            onClick: i
          }, {
            default: ke(() => [
              xe("Sign Out")
            ]),
            _: 1
          })) : (a(), ne(m, {
            key: 0,
            onClick: s
          }, {
            default: ke(() => [
              xe("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : k("", !0);
    };
  }
}), Di = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, Oi = { class: "p-4" }, ji = /* @__PURE__ */ n("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), Pi = { class: "flex w-full justify-center" }, Bi = /* @__PURE__ */ n("svg", {
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
], -1), Ri = /* @__PURE__ */ n("span", null, "ASC", -1), Hi = [
  Bi,
  Ri
], Ei = /* @__PURE__ */ bl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), zi = [
  Ei
], Ni = /* @__PURE__ */ n("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), Ui = { key: 0 }, qi = ["id", "value"], Qi = ["for"], Ki = { key: 1 }, Zi = { class: "mb-2" }, Gi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Wi = ["onClick"], Ji = /* @__PURE__ */ n("svg", {
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
], -1), Xi = [
  Ji
], Yi = { class: "flex" }, er = /* @__PURE__ */ n("svg", {
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
], -1), tr = [
  er
], lr = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, kn = /* @__PURE__ */ ue({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, s = M(), i = M(""), r = M(""), d = M([]), c = f(() => l.column.meta.isEnum == !0), m = f(() => st(l.column.meta.type === "Nullable`1" ? l.column.meta.genericArgs[0] : l.column.meta.type)), h = f(() => l.column.meta.isEnum == !0 ? vn(gs(m.value.name)) : []), p = f(() => {
      var O;
      return ((O = g(l.column.type)) == null ? void 0 : O.map((L) => ({ key: L.value, value: L.name }))) || [];
    }), y = M({ filters: [] }), v = f(() => y.value.filters);
    Bl(() => y.value = Object.assign({}, l.column.settings, {
      filters: Array.from(l.column.settings.filters)
    })), Bl(() => {
      var L, U, D, Q, le;
      let O = ((D = (U = (L = l.column.settings.filters) == null ? void 0 : L[0]) == null ? void 0 : U.value) == null ? void 0 : D.split(",")) || [];
      if (O.length > 0 && ((Q = m.value) != null && Q.isEnumInt)) {
        const X = parseInt(O[0]);
        O = ((le = m.value.enumValues) == null ? void 0 : le.filter((ee) => (X & parseInt(ee)) > 0)) || [];
      }
      d.value = O;
    });
    function g(O) {
      let L = l.definitions;
      return cs(O) || (L = L.filter((U) => U.types !== "string")), L;
    }
    function b(O, L) {
      return g(O).find((U) => U.value === L);
    }
    function B() {
      var L;
      if (!i.value)
        return;
      let O = (L = b(l.column.type, i.value)) == null ? void 0 : L.name;
      O && (y.value.filters.push({ key: i.value, name: O, value: r.value }), i.value = r.value = "");
    }
    function Y(O) {
      y.value.filters.splice(O, 1);
    }
    function ie(O) {
      return xs(b(l.column.type, O.key), l.column.type, O);
    }
    function N() {
      t("done");
    }
    function z() {
      var O;
      i.value = "%", (O = s.value) == null || O.focus();
    }
    function T() {
      var O;
      if (r.value && B(), c.value) {
        let L = Object.values(d.value).filter((U) => U);
        y.value.filters = L.length > 0 ? (O = m.value) != null && O.isEnumInt ? [{ key: "%HasAny", name: "HasAny", value: L.map((U) => parseInt(U)).reduce((U, D) => U + D, 0).toString() }] : [{ key: "%In", name: "In", value: L.join(",") }] : [];
      }
      t("save", y.value), t("done");
    }
    function W(O) {
      y.value.sort = O === y.value.sort ? void 0 : O, xt(T);
    }
    return (O, L) => {
      var X;
      const U = J("SelectInput"), D = J("TextInput"), Q = J("PrimaryButton"), le = J("SecondaryButton");
      return a(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: N,
        onVnodeMounted: z
      }, [
        n("div", {
          class: "absolute",
          style: Wl(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: L[5] || (L[5] = Ne(() => {
          }, ["stop"]))
        }, [
          n("div", Di, [
            n("div", Oi, [
              ji,
              n("div", Pi, [
                n("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: L[0] || (L[0] = (ee) => W("ASC")),
                  class: w(`${y.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, Hi, 2),
                n("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: L[1] || (L[1] = (ee) => W("DESC")),
                  class: w(`${y.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, zi, 2)
              ]),
              Ni,
              o(c) ? (a(), u("div", Ui, [
                (a(!0), u(Te, null, Ie(o(h), (ee) => (a(), u("div", {
                  key: ee.key,
                  class: "flex items-center"
                }, [
                  kt(n("input", {
                    type: "checkbox",
                    id: ee.key,
                    value: ee.key,
                    "onUpdate:modelValue": L[2] || (L[2] = (S) => d.value = S),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, qi), [
                    [Jl, d.value]
                  ]),
                  n("label", {
                    for: ee.key,
                    class: "ml-3"
                  }, A(ee.value), 9, Qi)
                ]))), 128))
              ])) : (a(), u("div", Ki, [
                (a(!0), u(Te, null, Ie(o(v), (ee, S) => (a(), u("div", Zi, [
                  n("span", Gi, [
                    xe(A(e.column.name) + " " + A(ee.name) + " " + A(ie(ee)) + " ", 1),
                    n("button", {
                      type: "button",
                      onClick: (te) => Y(S),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, Xi, 8, Wi)
                  ])
                ]))), 256)),
                n("div", Yi, [
                  $e(U, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": L[3] || (L[3] = (ee) => i.value = ee),
                    entries: o(p),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((X = b(e.column.type, i.value)) == null ? void 0 : X.valueType) !== "none" ? (a(), ne(D, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: s,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": L[4] || (L[4] = (ee) => r.value = ee),
                    onKeyup: qn(B, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : k("", !0),
                  n("div", { class: "pt-1" }, [
                    n("button", {
                      type: "button",
                      onClick: B,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, tr)
                  ])
                ])
              ]))
            ]),
            n("div", lr, [
              $e(Q, {
                onClick: T,
                color: "red",
                class: "ml-2"
              }, {
                default: ke(() => [
                  xe(" Save ")
                ]),
                _: 1
              }),
              $e(le, { onClick: N }, {
                default: ke(() => [
                  xe(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), nr = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, sr = { class: "flex flex-wrap" }, or = { class: "group pr-4 sm:pr-6 lg:pr-8" }, ar = { class: "flex justify-between w-full font-medium" }, ir = { class: "w-6 flex justify-end" }, rr = { class: "hidden group-hover:inline" }, ur = ["onClick", "title"], dr = /* @__PURE__ */ n("svg", {
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
], -1), cr = [
  dr
], fr = {
  key: 0,
  class: "pt-2"
}, mr = { class: "ml-2" }, vr = { key: 1 }, hr = { class: "pt-2" }, gr = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, pr = ["onClick"], yr = /* @__PURE__ */ n("svg", {
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
], -1), br = [
  yr
], wr = /* @__PURE__ */ n("span", null, "Clear All", -1), xr = [
  wr
], $n = /* @__PURE__ */ ue({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const l = e, s = f(() => l.columns.filter((y) => y.settings.filters.length > 0));
    function i(y) {
      var v, g;
      return (g = (v = y == null ? void 0 : y[0]) == null ? void 0 : v.value) == null ? void 0 : g.split(",");
    }
    function r(y) {
      let v = l.definitions;
      return cs(y) || (v = v.filter((g) => g.types !== "string")), v;
    }
    function d(y, v) {
      return r(y).find((g) => g.value === v);
    }
    function c(y, v) {
      return xs(d(y.type, v.value), y.type, v);
    }
    function m(y) {
      y.settings.filters = [], t("change", y);
    }
    function h(y, v) {
      y.settings.filters.splice(v, 1), t("change", y);
    }
    function p() {
      l.columns.forEach((y) => {
        y.settings.filters = [], t("change", y);
      }), t("done");
    }
    return (y, v) => (a(), u("div", nr, [
      n("div", sr, [
        (a(!0), u(Te, null, Ie(o(s), (g) => (a(), u("fieldset", or, [
          n("legend", ar, [
            n("span", null, A(o(Ee)(g.name)), 1),
            n("span", ir, [
              n("span", rr, [
                n("button", {
                  onClick: (b) => m(g),
                  title: `Clear all ${o(Ee)(g.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, cr, 8, ur)
              ])
            ])
          ]),
          g.meta.isEnum ? (a(), u("div", fr, [
            (a(!0), u(Te, null, Ie(i(g.settings.filters), (b) => (a(), u("div", {
              key: b,
              class: "flex items-center"
            }, [
              n("label", mr, A(b), 1)
            ]))), 128))
          ])) : (a(), u("div", vr, [
            (a(!0), u(Te, null, Ie(g.settings.filters, (b, B) => (a(), u("div", hr, [
              n("span", gr, [
                xe(A(g.name) + " " + A(b.name) + " " + A(c(g, b)) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (Y) => h(g, B),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, br, 8, pr)
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
        }, xr)
      ])
    ]));
  }
}), kr = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, $r = { class: "" }, Cr = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, _r = /* @__PURE__ */ n("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Lr = { class: "mt-4" }, Vr = ["for"], Sr = ["id"], Mr = ["value", "selected"], Ar = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Tr = ["id", "checked"], Fr = ["for"], Ir = { class: "mt-4" }, Dr = { class: "pb-2 px-4" }, Or = { class: "" }, jr = ["id", "value"], Pr = ["for"], Br = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Cn = /* @__PURE__ */ ue({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, { autoQueryGridDefaults: s } = St(), i = M({});
    Bl(() => i.value = Object.assign({
      take: s.value.take,
      selectedColumns: []
    }, l.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      t("done");
    }
    function c() {
      t("save", i.value);
    }
    return (m, h) => {
      const p = J("PrimaryButton"), y = J("SecondaryButton"), v = J("ModalDialog");
      return a(), ne(v, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: ke(() => [
          n("div", kr, [
            n("div", $r, [
              n("div", Cr, [
                _r,
                n("div", Lr, [
                  n("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Vr),
                  kt(n("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": h[0] || (h[0] = (g) => i.value.take = g),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (a(!0), u(Te, null, Ie(r.filter((g) => l.maxLimit == null || g <= l.maxLimit), (g) => (a(), u("option", {
                      value: g,
                      selected: g === i.value.take
                    }, A(g), 9, Mr))), 256))
                  ], 8, Sr), [
                    [eo, i.value.take]
                  ])
                ]),
                n("div", Ar, [
                  n("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: h[1] || (h[1] = (g) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Tr),
                  n("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, Fr)
                ]),
                n("div", Ir, [
                  n("div", Dr, [
                    n("div", Or, [
                      (a(!0), u(Te, null, Ie(e.columns, (g) => (a(), u("div", {
                        key: g.name,
                        class: "flex items-center"
                      }, [
                        kt(n("input", {
                          type: "checkbox",
                          id: g.name,
                          value: g.name,
                          "onUpdate:modelValue": h[2] || (h[2] = (b) => i.value.selectedColumns = b),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, jr), [
                          [Jl, i.value.selectedColumns]
                        ]),
                        n("label", {
                          for: g.name,
                          class: "ml-3"
                        }, A(g.name), 9, Pr)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          n("div", Br, [
            $e(p, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: ke(() => [
                xe(" Save ")
              ]),
              _: 1
            }),
            $e(y, { onClick: d }, {
              default: ke(() => [
                xe(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), Rr = { key: 0 }, Hr = { key: 1 }, Er = {
  key: 2,
  class: "pt-1"
}, zr = { key: 0 }, Nr = { key: 1 }, Ur = { key: 3 }, qr = { class: "pl-1 pt-1 flex flex-wrap" }, Qr = { class: "flex mt-1" }, Kr = ["title"], Zr = /* @__PURE__ */ n("svg", {
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
], -1), Gr = [
  Zr
], Wr = ["disabled"], Jr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Xr = [
  Jr
], Yr = ["disabled"], eu = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), tu = [
  eu
], lu = ["disabled"], nu = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), su = [
  nu
], ou = ["disabled"], au = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), iu = [
  au
], ru = {
  key: 0,
  class: "flex mt-1"
}, uu = { class: "px-4 text-lg text-black dark:text-white" }, du = { key: 0 }, cu = { key: 1 }, fu = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), mu = { key: 2 }, vu = { class: "flex flex-wrap" }, hu = {
  key: 0,
  class: "pl-2 mt-1"
}, gu = /* @__PURE__ */ n("svg", {
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
], -1), pu = [
  gu
], yu = {
  key: 1,
  class: "pl-2 mt-1"
}, bu = /* @__PURE__ */ bl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), wu = [
  bu
], xu = {
  key: 2,
  class: "pl-2 mt-1"
}, ku = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, $u = /* @__PURE__ */ n("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Cu = [
  $u
], _u = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Lu = /* @__PURE__ */ n("g", { fill: "none" }, [
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
], -1), Vu = [
  Lu
], Su = /* @__PURE__ */ n("span", { class: "whitespace-nowrap" }, "Copy URL", -1), Mu = {
  key: 3,
  class: "pl-2 mt-1"
}, Au = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), Tu = [
  Au
], Fu = {
  key: 4,
  class: "pl-2 mt-1"
}, Iu = /* @__PURE__ */ n("svg", {
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
], -1), Du = { class: "mr-1" }, Ou = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ju = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), Pu = [
  ju
], Bu = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Ru = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Hu = [
  Ru
], Eu = {
  key: 5,
  class: "pl-2 mt-1"
}, zu = ["title"], Nu = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), Uu = { class: "whitespace-nowrap" }, qu = { key: 7 }, Qu = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, Ku = { class: "mr-1 select-none" }, Zu = {
  key: 1,
  class: "flex justify-between items-center"
}, Gu = { class: "mr-1 select-none" }, Wu = /* @__PURE__ */ ue({
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
    edit: null,
    filters: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { expose: t, emit: l }) {
    const s = e, { config: i, autoQueryGridDefaults: r } = St(), d = r, c = qe("client"), m = i.value.storage, h = "filtering,queryString,queryFilters".split(","), p = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), y = f(() => s.deny ? bt(h, s.deny) : bt(h, d.value.deny)), v = f(() => s.hide ? bt(p, s.hide) : bt(p, d.value.hide));
    function g($) {
      return y.value[$];
    }
    function b($) {
      return v.value[$];
    }
    const B = f(() => s.tableStyle ?? d.value.tableStyle), Y = f(() => s.gridClass ?? he.getGridClass(B.value)), ie = f(() => s.grid2Class ?? he.getGrid2Class(B.value)), N = f(() => s.grid3Class ?? he.getGrid3Class(B.value)), z = f(() => s.grid4Class ?? he.getGrid4Class(B.value)), T = f(() => s.tableClass ?? he.getTableClass(B.value)), W = f(() => s.theadClass ?? he.getTheadClass(B.value)), O = f(() => s.theadRowClass ?? he.getTheadRowClass(B.value)), L = f(() => s.theadCellClass ?? he.getTheadCellClass(B.value)), U = f(() => s.toolbarButtonClass ?? he.toolbarButtonClass);
    function D($, I) {
      var Ae;
      if (s.rowClass)
        return s.rowClass($, I);
      const ce = !!we.value.AnyUpdate, pe = ((Ae = ve.value) != null && Ae.name ? be($, ve.value.name) : null) == _.value;
      return he.getTableRowClass(s.tableStyle, I, pe, ce);
    }
    const Q = Xl(), le = f(() => {
      var $;
      return Fl((($ = we.value.AnyQuery.viewModel) == null ? void 0 : $.name) || we.value.AnyQuery.dataModel.name);
    }), X = f(() => {
      const $ = Object.keys(Q).map((I) => I.toLowerCase());
      return We(le.value).filter((I) => $.includes(I.name.toLowerCase()) || $.includes(I.name.toLowerCase() + "-header")).map((I) => I.name);
    });
    function ee() {
      let $ = gt(s.selectedColumns);
      return $.length > 0 ? $ : X.value.length > 0 ? X.value : [];
    }
    const S = f(() => {
      let I = ee().map((oe) => oe.toLowerCase());
      const ce = We(le.value);
      return I.length > 0 ? I.map((oe) => ce.find((pe) => pe.name.toLowerCase() === oe)).filter((oe) => oe != null) : ce;
    }), te = f(() => {
      let $ = S.value.map((ce) => ce.name), I = gt(fe.value.selectedColumns).map((ce) => ce.toLowerCase());
      return I.length > 0 ? $.filter((ce) => I.includes(ce.toLowerCase())) : $;
    }), x = M([]), G = M(new tt()), H = M(new tt()), Z = M(), C = M(!1), _ = M(), P = M(), de = M(!1), F = M(), V = M(s.skip), re = M(!1), ye = 25, fe = M({ take: ye }), R = M(!1), j = f(() => x.value.some(($) => $.settings.filters.length > 0 || !!$.settings.sort) || fe.value.selectedColumns), me = f(() => x.value.map(($) => $.settings.filters.length).reduce(($, I) => $ + I, 0)), Ce = f(() => {
      var $;
      return We(Fl(Mt.value || (($ = we.value.AnyQuery) == null ? void 0 : $.dataModel.name)));
    }), ve = f(() => {
      var $;
      return el(Fl(Mt.value || (($ = we.value.AnyQuery) == null ? void 0 : $.dataModel.name)));
    }), Ve = f(() => fe.value.take ?? ye), Fe = f(() => G.value.response ? be(G.value.response, "results") : []), E = f(() => {
      var $;
      return (($ = G.value.response) == null ? void 0 : $.total) ?? Fe.value.length ?? 0;
    }), q = f(() => V.value > 0), se = f(() => V.value > 0), ge = f(() => Fe.value.length >= Ve.value), Se = f(() => Fe.value.length >= Ve.value), Oe = M(), Re = M(), Me = {
      NoQuery: "No Query API was found"
    };
    t({ update: Ye, search: Ln, createRequestArgs: Al, reset: jn, createDone: zt, createSave: Dl, editDone: Et, editSave: al, forceUpdate: _n, setEdit: zs, edit: P });
    function De($) {
      if ($) {
        if (s.canFilter)
          return s.canFilter($);
        const I = Ce.value.find((ce) => ce.name.toLowerCase() == $.toLowerCase());
        if (I)
          return !fs(I);
      }
      return !1;
    }
    function Qe($) {
      g("queryString") && tn($);
    }
    async function je($) {
      V.value += $, V.value < 0 && (V.value = 0);
      const I = Math.floor(E.value / Ve.value) * Ve.value;
      V.value > I && (V.value = I), Qe({ skip: V.value || void 0 }), await Ye();
    }
    async function Xe($, I) {
      var pe, Ae;
      if (P.value = null, _.value = I, !$ || !I)
        return;
      let ce = Gt(we.value.AnyQuery, { [$]: I });
      const oe = await c.api(ce);
      if (oe.succeeded) {
        let He = (pe = be(oe.response, "results")) == null ? void 0 : pe[0];
        He || console.warn(`API ${(Ae = we.value.AnyQuery) == null ? void 0 : Ae.request.name}(${$}:${I}) returned no results`), P.value = He;
      }
    }
    async function Ht($, I) {
      var pe;
      l("rowSelected", $, I);
      const ce = (pe = ve.value) == null ? void 0 : pe.name, oe = ce ? be($, ce) : null;
      !ce || !oe || (Qe({ edit: oe }), Xe(ce, oe));
    }
    function mt($, I) {
      var oe;
      if (!g("filtering"))
        return;
      let ce = I.target;
      if (De($) && (ce == null ? void 0 : ce.tagName) !== "TD") {
        let pe = (oe = ce == null ? void 0 : ce.closest("TABLE")) == null ? void 0 : oe.getBoundingClientRect(), Ae = x.value.find((He) => He.name.toLowerCase() == $.toLowerCase());
        if (Ae && pe) {
          let He = 318, at = pe.x + He + 10;
          F.value = {
            column: Ae,
            topLeft: {
              x: Math.max(Math.floor(I.clientX + He / 2), at),
              y: pe.y + 45
            }
          };
        }
      }
      l("headerSelected", $, I);
    }
    function ll() {
      F.value = null;
    }
    async function nl($) {
      var ce;
      let I = (ce = F.value) == null ? void 0 : ce.column;
      I && (I.settings = $, m.setItem(sl(I.name), JSON.stringify(I.settings)), await Ye()), F.value = null;
    }
    async function Hs($) {
      m.setItem(sl($.name), JSON.stringify($.settings)), await Ye();
    }
    async function Es($) {
      de.value = !1, fe.value = $, m.setItem(Tl(), JSON.stringify($)), await Ye();
    }
    function zs($) {
      Object.assign(P.value, $), _n();
    }
    function _n() {
      var I, ce, oe;
      (I = Oe.value) == null || I.forceUpdate(), (ce = Re.value) == null || ce.forceUpdate();
      const $ = Be();
      (oe = $ == null ? void 0 : $.proxy) == null || oe.$forceUpdate();
    }
    async function Ye() {
      await Ln(Al());
    }
    async function Ns() {
      await Ye();
    }
    async function Ln($) {
      const I = we.value.AnyQuery;
      if (!I) {
        console.error(Me.NoQuery);
        return;
      }
      let ce = Gt(I, $), oe = Gn((He) => {
        G.value.response = G.value.error = void 0, R.value = He;
      }), pe = await c.api(ce);
      oe(), xt(() => G.value = pe);
      let Ae = be(pe.response, "results") || [];
      !pe.succeeded || Ae.label == 0;
    }
    function Al() {
      let $ = {
        include: "total",
        take: Ve.value
      }, I = gt(fe.value.selectedColumns || s.selectedColumns);
      if (I.length > 0) {
        let oe = ve.value;
        oe && I.includes(oe.name) && (I = [oe.name, ...I]);
        const pe = Ce.value, Ae = [];
        I.forEach((He) => {
          var il;
          const at = pe.find((Pe) => Pe.name.toLowerCase() == He.toLowerCase());
          (il = at == null ? void 0 : at.ref) != null && il.selfId && Ae.push(at.ref.selfId), be(Q, He) && Ae.push(...pe.filter((Pe) => {
            var vt, Nt;
            return ((Nt = (vt = Pe.ref) == null ? void 0 : vt.selfId) == null ? void 0 : Nt.toLowerCase()) == He.toLowerCase();
          }).map((Pe) => Pe.name));
        }), Ae.forEach((He) => {
          I.includes(He) || I.push(He);
        }), $.fields = I.join(",");
      }
      let ce = [];
      if (x.value.forEach((oe) => {
        oe.settings.sort && ce.push((oe.settings.sort === "DESC" ? "-" : "") + oe.name), oe.settings.filters.forEach((pe) => {
          let Ae = pe.key.replace("%", oe.name);
          $[Ae] = pe.value;
        });
      }), s.filters && Object.keys(s.filters).forEach((oe) => {
        $[oe] = s.filters[oe];
      }), g("queryString") && g("queryFilters")) {
        const oe = location.search ? location.search : location.hash.includes("?") ? "?" + dl(location.hash, "?") : "";
        let pe = Hl(oe);
        if (Object.keys(pe).forEach((Ae) => {
          S.value.find((at) => at.name.toLowerCase() === Ae.toLowerCase()) && ($[Ae] = pe[Ae]);
        }), typeof pe.skip < "u") {
          const Ae = parseInt(pe.skip);
          isNaN(Ae) || (V.value = $.skip = Ae);
        }
      }
      return typeof $.skip > "u" && V.value > 0 && ($.skip = V.value), ce.length > 0 && ($.orderBy = ce.join(",")), $;
    }
    function Us() {
      const $ = Vn("csv");
      Nl($), typeof window < "u" && window.open($);
    }
    function qs() {
      const $ = Vn("json");
      Nl($), re.value = !0, setTimeout(() => re.value = !1, 3e3);
    }
    function Vn($ = "json") {
      var Ae;
      const I = Al(), ce = `/api/${(Ae = we.value.AnyQuery) == null ? void 0 : Ae.request.name}`, oe = go(c.baseUrl, Kt(ce, { ...I, jsconfig: "edv" }));
      return oe.indexOf("?") >= 0 ? wl(oe, "?") + "." + $ + "?" + dl(oe, "?") : oe + ".json";
    }
    async function Qs() {
      x.value.forEach(($) => {
        $.settings = { filters: [] }, m.removeItem(sl($.name));
      }), fe.value = { take: ye }, m.removeItem(Tl()), await Ye();
    }
    function Ks() {
      C.value = !0, Qe({ create: null });
    }
    const Mt = f(() => Bt(s.type)), dt = f(() => {
      var $;
      return Mt.value || (($ = we.value.AnyQuery) == null ? void 0 : $.dataModel.name);
    }), Tl = () => {
      var $;
      return `${s.id}/ApiPrefs/${Mt.value || (($ = we.value.AnyQuery) == null ? void 0 : $.dataModel.name)}`;
    }, sl = ($) => {
      var I;
      return `Column/${s.id}:${Mt.value || ((I = we.value.AnyQuery) == null ? void 0 : I.dataModel.name)}.${$}`;
    }, { metadataApi: Sn, typeOf: Fl, apiOf: Mn, filterDefinitions: Zs } = ot(), { invalidAccessMessage: Il } = xn(), An = f(() => s.filterDefinitions || Zs.value), we = f(() => {
      let $ = gt(s.apis);
      return $.length > 0 ? Ot.from($.map((I) => Mn(I)).filter((I) => I != null).map((I) => I)) : Ot.forType(Mt.value, Sn.value);
    }), ol = ($) => `<span class="text-yellow-700">${$}</span>`, Tn = f(() => {
      if (!Sn.value)
        return ol(`AppMetadata not loaded, see <a class="${yl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let I = gt(s.apis).map((oe) => Mn(oe) == null ? oe : null).filter((oe) => oe != null);
      if (I.length > 0)
        return ol(`Unknown API${I.length > 1 ? "s" : ""}: ${I.join(", ")}`);
      let ce = we.value;
      return ce.empty ? ol("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ce.AnyQuery ? null : ol(Me.NoQuery);
    }), Fn = f(() => we.value.AnyQuery && Il(we.value.AnyQuery)), In = f(() => we.value.Create && Il(we.value.Create)), Dn = f(() => we.value.AnyUpdate && Il(we.value.AnyUpdate)), Gs = f(() => vl(we.value.Create));
    f(() => vl(we.value.AnyUpdate));
    const On = f(() => vl(we.value.Delete));
    function Et() {
      P.value = null, _.value = null, Qe({ edit: void 0 });
    }
    function zt() {
      C.value = !1, Qe({ create: void 0 });
    }
    async function al() {
      await Ye(), Et();
    }
    async function Dl() {
      await Ye(), zt();
    }
    function jn() {
      var ce;
      G.value = new tt(), H.value = new tt(), C.value = !1, _.value = null, P.value = null, de.value = !1, F.value = null, V.value = s.skip, re.value = !1, fe.value = { take: ye }, R.value = !1;
      const $ = s.prefs || pl(m.getItem(Tl()));
      $ && (fe.value = $), x.value = S.value.map((oe) => ({
        name: oe.name,
        type: oe.type,
        meta: oe,
        settings: Object.assign(
          {
            filters: []
          },
          pl(m.getItem(sl(oe.name)))
        )
      })), isNaN(s.skip) || (V.value = s.skip);
      let I = (ce = ve.value) == null ? void 0 : ce.name;
      if (g("queryString")) {
        const oe = location.search ? location.search : location.hash.includes("?") ? "?" + dl(location.hash, "?") : "";
        let pe = Hl(oe);
        typeof pe.create < "u" ? C.value = typeof pe.create < "u" : I && (typeof pe.edit == "string" || typeof pe.edit == "number") && Xe(I, pe.edit);
      }
      s.create === !0 && (C.value = !0), I && s.edit != null && Xe(I, s.edit);
    }
    return Je(async () => {
      jn(), await Ye();
    }), ($, I) => {
      const ce = J("Alert"), oe = J("EnsureAccessDialog"), pe = J("AutoCreateForm"), Ae = J("AutoEditForm"), He = J("ErrorSummary"), at = J("Loading"), Pn = J("SettingsIcons"), il = J("DataGrid");
      return o(Tn) ? (a(), u("div", Rr, [
        $e(ce, { innerHTML: o(Tn) }, null, 8, ["innerHTML"])
      ])) : o(Fn) ? (a(), u("div", Hr, [
        $e(Rs, { "invalid-access": o(Fn) }, null, 8, ["invalid-access"])
      ])) : (a(), u("div", Er, [
        C.value && o(we).Create ? (a(), u("div", zr, [
          o(In) ? (a(), ne(oe, {
            key: 0,
            title: `Create ${o(dt)}`,
            "invalid-access": o(In),
            "alert-class": "text-yellow-700",
            onDone: zt
          }, null, 8, ["title", "invalid-access"])) : o(Q).createform ? K($.$slots, "createform", {
            key: 1,
            type: o(we).Create.request.name,
            configure: e.configureField,
            done: zt,
            save: Dl
          }) : (a(), ne(pe, {
            key: 2,
            ref_key: "createForm",
            ref: Oe,
            type: o(we).Create.request.name,
            configure: e.configureField,
            onDone: zt,
            onSave: Dl
          }, {
            header: ke(() => [
              K($.$slots, "formheader", {
                form: "create",
                formInstance: Oe.value,
                apis: o(we),
                type: o(dt)
              })
            ]),
            footer: ke(() => [
              K($.$slots, "formfooter", {
                form: "create",
                formInstance: Oe.value,
                apis: o(we),
                type: o(dt)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : P.value && o(we).AnyUpdate ? (a(), u("div", Nr, [
          o(Dn) ? (a(), ne(oe, {
            key: 0,
            title: `Update ${o(dt)}`,
            "invalid-access": o(Dn),
            "alert-class": "text-yellow-700",
            onDone: Et
          }, null, 8, ["title", "invalid-access"])) : o(Q).editform ? K($.$slots, "editform", {
            key: 1,
            model: P.value,
            type: o(we).AnyUpdate.request.name,
            deleteType: o(On) ? o(we).Delete.request.name : null,
            configure: e.configureField,
            done: Et,
            save: al
          }) : (a(), ne(Ae, {
            key: 2,
            ref_key: "editForm",
            ref: Re,
            modelValue: P.value,
            "onUpdate:modelValue": I[0] || (I[0] = (Pe) => P.value = Pe),
            type: o(we).AnyUpdate.request.name,
            deleteType: o(On) ? o(we).Delete.request.name : null,
            configure: e.configureField,
            onDone: Et,
            onSave: al,
            onDelete: al
          }, {
            header: ke(() => [
              K($.$slots, "formheader", {
                form: "edit",
                formInstance: Re.value,
                apis: o(we),
                type: o(dt),
                model: P.value,
                id: _.value
              })
            ]),
            footer: ke(() => [
              K($.$slots, "formfooter", {
                form: "edit",
                formInstance: Re.value,
                apis: o(we),
                type: o(dt),
                model: P.value,
                id: _.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : k("", !0),
        o(Q).toolbar ? K($.$slots, "toolbar", { key: 2 }) : b("toolbar") ? (a(), u("div", Ur, [
          de.value ? (a(), ne(Cn, {
            key: 0,
            columns: o(S),
            prefs: fe.value,
            onDone: I[1] || (I[1] = (Pe) => de.value = !1),
            onSave: Es
          }, null, 8, ["columns", "prefs"])) : k("", !0),
          n("div", qr, [
            n("div", Qr, [
              b("preferences") ? (a(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${o(dt)} Preferences`,
                onClick: I[2] || (I[2] = (Pe) => de.value = !de.value)
              }, Gr, 8, Kr)) : k("", !0),
              b("pagingNav") ? (a(), u("button", {
                key: 1,
                type: "button",
                class: w(["pl-2", o(q) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !o(q),
                onClick: I[3] || (I[3] = (Pe) => je(-o(E)))
              }, Xr, 10, Wr)) : k("", !0),
              b("pagingNav") ? (a(), u("button", {
                key: 2,
                type: "button",
                class: w(["pl-2", o(se) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !o(se),
                onClick: I[4] || (I[4] = (Pe) => je(-o(Ve)))
              }, tu, 10, Yr)) : k("", !0),
              b("pagingNav") ? (a(), u("button", {
                key: 3,
                type: "button",
                class: w(["pl-2", o(ge) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !o(ge),
                onClick: I[5] || (I[5] = (Pe) => je(o(Ve)))
              }, su, 10, lu)) : k("", !0),
              b("pagingNav") ? (a(), u("button", {
                key: 4,
                type: "button",
                class: w(["pl-2", o(Se) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !o(Se),
                onClick: I[6] || (I[6] = (Pe) => je(o(E)))
              }, iu, 10, ou)) : k("", !0)
            ]),
            b("pagingInfo") ? (a(), u("div", ru, [
              n("div", uu, [
                R.value ? (a(), u("span", du, "Querying...")) : k("", !0),
                o(Fe).length ? (a(), u("span", cu, [
                  fu,
                  xe(" " + A(V.value + 1) + " - " + A(Math.min(V.value + o(Fe).length, o(E))) + " ", 1),
                  n("span", null, " of " + A(o(E)), 1)
                ])) : G.value.completed ? (a(), u("span", mu, "No Results")) : k("", !0)
              ])
            ])) : k("", !0),
            n("div", vu, [
              b("refresh") ? (a(), u("div", hu, [
                n("button", {
                  type: "button",
                  onClick: Ns,
                  title: "Refresh",
                  class: w(o(U))
                }, pu, 2)
              ])) : k("", !0),
              b("downloadCsv") ? (a(), u("div", yu, [
                n("button", {
                  type: "button",
                  onClick: Us,
                  title: "Download CSV",
                  class: w(o(U))
                }, wu, 2)
              ])) : k("", !0),
              b("copyApiUrl") ? (a(), u("div", xu, [
                n("button", {
                  type: "button",
                  onClick: qs,
                  title: "Copy API URL",
                  class: w(o(U))
                }, [
                  re.value ? (a(), u("svg", ku, Cu)) : (a(), u("svg", _u, Vu)),
                  Su
                ], 2)
              ])) : k("", !0),
              o(j) && b("resetPreferences") ? (a(), u("div", Mu, [
                n("button", {
                  type: "button",
                  onClick: Qs,
                  title: "Reset Preferences & Filters",
                  class: w(o(U))
                }, Tu, 2)
              ])) : k("", !0),
              b("filtersView") && o(me) > 0 ? (a(), u("div", Fu, [
                n("button", {
                  type: "button",
                  onClick: I[7] || (I[7] = (Pe) => Z.value = Z.value == "filters" ? null : "filters"),
                  class: w(o(U)),
                  "aria-expanded": "false"
                }, [
                  Iu,
                  n("span", Du, A(o(me)) + " " + A(o(me) == 1 ? "Filter" : "Filters"), 1),
                  Z.value != "filters" ? (a(), u("svg", Ou, Pu)) : (a(), u("svg", Bu, Hu))
                ], 2)
              ])) : k("", !0),
              b("newItem") && o(we).Create && o(Gs) ? (a(), u("div", Eu, [
                n("button", {
                  type: "button",
                  onClick: Ks,
                  title: o(dt),
                  class: w(o(U))
                }, [
                  Nu,
                  n("span", Uu, "New " + A(o(dt)), 1)
                ], 10, zu)
              ])) : k("", !0),
              o(Q).toolbarbuttons ? K($.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: o(U)
              }) : k("", !0)
            ])
          ])
        ])) : k("", !0),
        Z.value == "filters" ? (a(), ne($n, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: o(An),
          columns: x.value,
          onDone: I[8] || (I[8] = (Pe) => Z.value = null),
          onChange: Hs
        }, null, 8, ["definitions", "columns"])) : k("", !0),
        H.value.error ?? G.value.error ? (a(), ne(He, {
          key: 5,
          status: H.value.error ?? G.value.error
        }, null, 8, ["status"])) : R.value ? (a(), ne(at, {
          key: 6,
          class: "p-2"
        })) : k("", !0),
        F.value ? (a(), u("div", qu, [
          $e(kn, {
            definitions: o(An),
            column: F.value.column,
            "top-left": F.value.topLeft,
            onDone: ll,
            onSave: nl
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : k("", !0),
        o(Fe).length ? (a(), ne(il, {
          key: 8,
          id: e.id,
          items: o(Fe),
          type: e.type,
          "selected-columns": o(te),
          class: "mt-1",
          onFiltersChanged: Ye,
          tableStyle: o(B),
          gridClass: o(Y),
          grid2Class: o(ie),
          grid3Class: o(N),
          grid4Class: o(z),
          tableClass: o(T),
          theadClass: o(W),
          theadRowClass: o(O),
          theadCellClass: o(L),
          tbodyClass: e.tbodyClass,
          rowClass: D,
          onRowSelected: Ht,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: mt
        }, Yl({
          header: ke(({ column: Pe, label: vt }) => {
            var Nt;
            return [
              g("filtering") && De(Pe) ? (a(), u("div", Qu, [
                n("span", Ku, A(vt), 1),
                $e(Pn, {
                  column: x.value.find((Ws) => Ws.name.toLowerCase() === Pe.toLowerCase()),
                  "is-open": ((Nt = F.value) == null ? void 0 : Nt.column.name) === Pe
                }, null, 8, ["column", "is-open"])
              ])) : (a(), u("div", Zu, [
                n("span", Gu, A(vt), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          Ie(Object.keys(o(Q)), (Pe) => ({
            name: Pe,
            fn: ke((vt) => [
              K($.$slots, Pe, It(hl(vt)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : k("", !0)
      ]));
    };
  }
}), Ju = { class: "flex" }, Xu = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Yu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), ed = [
  Yu
], td = /* @__PURE__ */ n("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), ld = /* @__PURE__ */ n("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), nd = [
  td,
  ld
], sd = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, od = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), ad = [
  od
], id = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, rd = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), ud = [
  rd
], dd = /* @__PURE__ */ ue({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, l) => {
      var s, i, r, d, c, m, h;
      return a(), u("div", Ju, [
        (r = (i = (s = e.column) == null ? void 0 : s.settings) == null ? void 0 : i.filters) != null && r.length ? (a(), u("svg", Xu, ed)) : (a(), u("svg", {
          key: 1,
          class: w(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, nd, 2)),
        ((c = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : c.sort) === "ASC" ? (a(), u("svg", sd, ad)) : ((h = (m = e.column) == null ? void 0 : m.settings) == null ? void 0 : h.sort) === "DESC" ? (a(), u("svg", id, ud)) : k("", !0)
      ]);
    };
  }
}), cd = /* @__PURE__ */ ue({
  __name: "EnsureAccessDialog",
  props: {
    title: null,
    subtitle: null,
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    return (t, l) => {
      const s = J("EnsureAccess"), i = J("SlideOver");
      return e.invalidAccess ? (a(), ne(i, {
        key: 0,
        title: e.title,
        onDone: l[0] || (l[0] = (r) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, Yl({
        default: ke(() => [
          $e(s, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: ke(() => [
            xe(A(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : k("", !0);
    };
  }
}), fd = ["for"], md = { class: "mt-1 relative rounded-md shadow-sm" }, vd = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], hd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, gd = /* @__PURE__ */ n("svg", {
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
], -1), pd = [
  gd
], yd = ["id"], bd = ["id"], wd = {
  inheritAttrs: !1
}, xd = /* @__PURE__ */ ue({
  ...wd,
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
  setup(e, { expose: t }) {
    const l = e, s = (v) => v.value;
    t({
      focus: r
    });
    const i = M();
    function r() {
      var v;
      (v = i.value) == null || v.focus();
    }
    const d = f(() => l.type || "text"), c = f(() => l.label ?? Ee(nt(l.id))), m = f(() => l.placeholder ?? c.value);
    let h = qe("ApiState", void 0);
    const p = f(() => ft.call({ responseStatus: l.status ?? (h == null ? void 0 : h.error.value) }, l.id)), y = f(() => [lt.base, p.value ? lt.invalid : lt.valid, l.inputClass]);
    return (v, g) => (a(), u("div", {
      class: w([v.$attrs.class])
    }, [
      K(v.$slots, "header", Le({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, v.$attrs)),
      o(c) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(c)), 11, fd)) : k("", !0),
      n("div", md, [
        n("input", Le({
          ref_key: "inputElement",
          ref: i,
          type: o(d),
          name: e.id,
          id: e.id,
          class: o(y),
          placeholder: o(m),
          value: e.modelValue,
          onInput: g[0] || (g[0] = (b) => v.$emit("update:modelValue", s(b.target))),
          "aria-invalid": o(p) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, o(ut)(v.$attrs, ["class"])), null, 16, vd),
        o(p) ? (a(), u("div", hd, pd)) : k("", !0)
      ]),
      o(p) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(p)), 9, yd)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, bd)) : k("", !0),
      K(v.$slots, "footer", Le({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, v.$attrs))
    ], 2));
  }
}), kd = ["for"], $d = { class: "mt-1 relative rounded-md shadow-sm" }, Cd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], _d = ["id"], Ld = ["id"], Vd = {
  inheritAttrs: !1
}, Sd = /* @__PURE__ */ ue({
  ...Vd,
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
    const t = e, l = (m) => m.value, s = f(() => t.label ?? Ee(nt(t.id))), i = f(() => t.placeholder ?? s.value);
    let r = qe("ApiState", void 0);
    const d = f(() => ft.call({ responseStatus: t.status ?? (r == null ? void 0 : r.error.value) }, t.id)), c = f(() => ["shadow-sm " + lt.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + lt.valid, t.inputClass]);
    return (m, h) => (a(), u("div", {
      class: w([m.$attrs.class])
    }, [
      o(s) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(s)), 11, kd)) : k("", !0),
      n("div", $d, [
        n("textarea", Le({
          name: e.id,
          id: e.id,
          class: o(c),
          placeholder: o(i),
          onInput: h[0] || (h[0] = (p) => m.$emit("update:modelValue", l(p.target))),
          "aria-invalid": o(d) != null,
          "aria-describedby": `${e.id}-error`
        }, o(ut)(m.$attrs, ["class"])), A(e.modelValue), 17, Cd)
      ]),
      o(d) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(d)), 9, _d)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, Ld)) : k("", !0)
    ], 2));
  }
}), Md = ["for"], Ad = ["id", "name", "value", "aria-invalid", "aria-describedby"], Td = ["value"], Fd = ["id"], Id = {
  inheritAttrs: !1
}, Dd = /* @__PURE__ */ ue({
  ...Id,
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
    const t = e, l = (c) => c.value, s = f(() => t.label ?? Ee(nt(t.id)));
    let i = qe("ApiState", void 0);
    const r = f(() => ft.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id)), d = f(() => t.entries || (t.values ? t.values.map((c) => ({ key: c, value: c })) : t.options ? Object.keys(t.options).map((c) => ({ key: c, value: t.options[c] })) : []));
    return (c, m) => (a(), u("div", {
      class: w([c.$attrs.class])
    }, [
      o(s) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(s)), 11, Md)) : k("", !0),
      n("select", Le({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          o(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: m[0] || (m[0] = (h) => c.$emit("update:modelValue", l(h.target))),
        "aria-invalid": o(r) != null,
        "aria-describedby": `${e.id}-error`
      }, o(ut)(c.$attrs, ["class"])), [
        (a(!0), u(Te, null, Ie(o(d), (h) => (a(), u("option", {
          value: h.key
        }, A(h.value), 9, Td))), 256))
      ], 16, Ad),
      o(r) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(r)), 9, Fd)) : k("", !0)
    ], 2));
  }
}), Od = { class: "flex items-center h-5" }, jd = ["id", "name", "checked"], Pd = { class: "ml-3 text-sm" }, Bd = ["for"], Rd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, Hd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, Ed = {
  inheritAttrs: !1
}, zd = /* @__PURE__ */ ue({
  ...Ed,
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
  setup(e, { emit: t }) {
    const l = e, s = f(() => l.label ?? Ee(nt(l.id)));
    let i = qe("ApiState", void 0);
    const r = f(() => ft.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id));
    return (d, c) => (a(), u("div", {
      class: w(["relative flex items-start", d.$attrs.class])
    }, [
      n("div", Od, [
        n("input", Le({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: c[0] || (c[0] = (m) => d.$emit("update:modelValue", m.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, o(ut)(d.$attrs, ["class"])), null, 16, jd)
      ]),
      n("div", Pd, [
        n("label", {
          for: e.id,
          class: w(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, A(o(s)), 11, Bd),
        o(r) ? (a(), u("p", Rd, A(o(r)), 1)) : e.help ? (a(), u("p", Hd, A(e.help), 1)) : k("", !0)
      ])
    ], 2));
  }
}), Nd = ["id"], Ud = ["for"], qd = { class: "mt-1 relative rounded-md shadow-sm" }, Qd = ["id", "name", "value"], Kd = ["onClick"], Zd = { class: "flex flex-wrap pb-1.5" }, Gd = { class: "pt-1.5 pl-1" }, Wd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, Jd = ["onClick"], Xd = /* @__PURE__ */ n("svg", {
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
], -1), Yd = [
  Xd
], ec = { class: "pt-1.5 pl-1 shrink" }, tc = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], lc = ["id"], nc = ["onMouseover", "onClick"], sc = { class: "block truncate" }, oc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, ac = /* @__PURE__ */ n("svg", {
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
], -1), ic = [
  ac
], rc = ["id"], uc = ["id"], dc = {
  inheritAttrs: !1
}, cc = /* @__PURE__ */ ue({
  ...dc,
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
    string: { type: Boolean },
    converter: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e;
    function s(x) {
      return l.converter ? l.converter(x) : x;
    }
    const i = f(() => Ue(s(l.modelValue), (x) => typeof x == "string" ? x.trim().length == 0 ? [] : x.split(",") : x) || []), r = M(), d = M(!1), c = f(() => !l.allowableValues || l.allowableValues.length == 0 ? [] : l.allowableValues.filter((x) => !i.value.includes(x) && x.toLowerCase().includes(p.value.toLowerCase())));
    function m(x) {
      r.value = x;
    }
    const h = M(null), p = M(""), y = f(() => l.type || "text"), v = f(() => l.label ?? Ee(nt(l.id)));
    let g = qe("ApiState", void 0);
    const b = f(() => ft.call({ responseStatus: l.status ?? (g == null ? void 0 : g.error.value) }, l.id)), B = f(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      b.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      l.inputClass
    ]), Y = (x) => O(i.value.filter((G) => G != x));
    function ie(x) {
      var G;
      document.activeElement === x.target && ((G = h.value) == null || G.focus());
    }
    const N = M();
    function z() {
      d.value = !0, N.value = !0;
    }
    function T() {
      z();
    }
    function W() {
      ee(U()), N.value = !1, setTimeout(() => {
        N.value || (d.value = !1);
      }, 200);
    }
    function O(x) {
      const G = l.string ? x.join(",") : x;
      t("update:modelValue", G);
    }
    function L(x) {
      if (x.key == "Backspace" && p.value.length == 0 && i.value.length > 0 && Y(i.value[i.value.length - 1]), !(!l.allowableValues || l.allowableValues.length == 0))
        if (x.code == "Escape" || x.code == "Tab")
          d.value = !1;
        else if (x.code == "Home")
          r.value = c.value[0], le();
        else if (x.code == "End")
          r.value = c.value[c.value.length - 1], le();
        else if (x.code == "ArrowDown") {
          if (d.value = !0, !r.value)
            r.value = c.value[0];
          else {
            const G = c.value.indexOf(r.value);
            r.value = G + 1 < c.value.length ? c.value[G + 1] : c.value[0];
          }
          X();
        } else if (x.code == "ArrowUp") {
          if (!r.value)
            r.value = c.value[c.value.length - 1];
          else {
            const G = c.value.indexOf(r.value);
            r.value = G - 1 >= 0 ? c.value[G - 1] : c.value[c.value.length - 1];
          }
          X();
        } else
          x.code == "Enter" ? r.value && d.value ? (ee(r.value), x.preventDefault()) : d.value = !1 : d.value = c.value.length > 0;
    }
    function U() {
      if (p.value.length == 0)
        return "";
      let x = po(p.value.trim(), ",");
      return x[0] == "," && (x = x.substring(1)), x = x.trim(), x.length == 0 && d.value && c.value.length > 0 ? r.value : x;
    }
    function D(x) {
      const G = U();
      if (G.length > 0) {
        const H = l.delimiters.some((C) => C == x.key);
        if (H && x.preventDefault(), x.key == "Enter" || x.key == "NumpadEnter" || x.key.length == 1 && H) {
          ee(G);
          return;
        }
      }
    }
    const Q = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function le() {
      setTimeout(() => {
        let x = gl(`#${l.id}-tag li.active`);
        x && x.scrollIntoView(Q);
      }, 0);
    }
    function X() {
      setTimeout(() => {
        let x = gl(`#${l.id}-tag li.active`);
        x && ("scrollIntoViewIfNeeded" in x ? x.scrollIntoViewIfNeeded(Q) : x.scrollIntoView(Q));
      }, 0);
    }
    function ee(x) {
      if (x.length === 0)
        return;
      const G = Array.from(i.value);
      G.indexOf(x) == -1 && G.push(x), O(G), p.value = "", d.value = !1;
    }
    function S(x) {
      var H;
      const G = (H = x.clipboardData) == null ? void 0 : H.getData("Text");
      te(G);
    }
    function te(x) {
      if (!x)
        return;
      const G = new RegExp(`\\n|\\t|${l.delimiters.join("|")}`), H = Array.from(i.value);
      x.split(G).map((C) => C.trim()).forEach((C) => {
        H.indexOf(C) == -1 && H.push(C);
      }), O(H), p.value = "";
    }
    return (x, G) => (a(), u("div", {
      class: w([x.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      o(v) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(v)), 11, Ud)) : k("", !0),
      n("div", qd, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(i).join(",")
        }, null, 8, Qd),
        n("button", {
          class: w(o(B)),
          onClick: Ne(ie, ["prevent"]),
          onFocus: G[2] || (G[2] = (H) => d.value = !0),
          tabindex: "-1"
        }, [
          n("div", Zd, [
            (a(!0), u(Te, null, Ie(o(i), (H) => (a(), u("div", Gd, [
              n("span", Wd, [
                xe(A(H) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (Z) => Y(H),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, Yd, 8, Jd)
              ])
            ]))), 256)),
            n("div", ec, [
              kt(n("input", Le({
                ref_key: "txtInput",
                ref: h,
                type: o(y),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${e.id}-txt`,
                id: `${e.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${p.value.length + 1}ch`,
                "onUpdate:modelValue": G[0] || (G[0] = (H) => p.value = H),
                "aria-invalid": o(b) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: L,
                onKeypress: D,
                onPaste: Ne(S, ["prevent", "stop"]),
                onFocus: T,
                onBlur: W,
                onClick: G[1] || (G[1] = (H) => d.value = !0)
              }, o(ut)(x.$attrs, ["class", "required"])), null, 16, tc), [
                [to, p.value]
              ])
            ])
          ])
        ], 42, Kd),
        d.value && o(c).length ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: L,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(Te, null, Ie(o(c), (H) => (a(), u("li", {
            class: w([H === r.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (Z) => m(H),
            onClick: (Z) => ee(H),
            role: "option",
            tabindex: "-1"
          }, [
            n("span", sc, A(H), 1)
          ], 42, nc))), 256))
        ], 40, lc)) : k("", !0),
        o(b) ? (a(), u("div", oc, ic)) : k("", !0)
      ]),
      o(b) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(b)), 9, rc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, uc)) : k("", !0)
    ], 10, Nd));
  }
}), fc = { class: "relative flex-grow mr-2 sm:mr-4" }, mc = ["for"], vc = { class: "block mt-2" }, hc = { class: "sr-only" }, gc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], pc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, yc = /* @__PURE__ */ n("svg", {
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
], -1), bc = [
  yc
], wc = ["id"], xc = ["id"], kc = { key: 0 }, $c = ["title"], Cc = ["alt", "src"], _c = {
  key: 1,
  class: "mt-3"
}, Lc = { class: "w-full" }, Vc = { class: "pr-6 align-bottom pb-2" }, Sc = ["title"], Mc = ["src", "onError"], Ac = ["href"], Tc = {
  key: 1,
  class: "overflow-hidden"
}, Fc = { class: "align-top pb-2 whitespace-nowrap" }, Ic = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Dc = /* @__PURE__ */ ue({
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
    var T;
    const t = e, l = M(null), { assetsPathResolver: s, fallbackPathResolver: i } = St(), r = {}, d = M(), c = M(((T = t.files) == null ? void 0 : T.map(m)) || []);
    function m(W) {
      return W.filePath = s(W.filePath), W;
    }
    t.values && t.values.length > 0 && (c.value = t.values.map((W) => {
      let O = W.replace(/\\/g, "/");
      return { fileName: yo($t(O, "/"), "."), filePath: O, contentType: ql(O) };
    }).map(m));
    const h = f(() => t.label ?? Ee(nt(t.id))), p = f(() => t.placeholder ?? h.value);
    let y = qe("ApiState", void 0);
    const v = f(() => ft.call({ responseStatus: t.status ?? (y == null ? void 0 : y.error.value) }, t.id)), g = f(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      v.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ]), b = (W) => {
      let O = W.target;
      d.value = "", c.value = Array.from(O.files || []).map((L) => ({
        fileName: L.name,
        filePath: an(L),
        contentLength: L.size,
        contentType: L.type || ql(L.name)
      }));
    }, B = () => {
      var W;
      return (W = l.value) == null ? void 0 : W.click();
    }, Y = (W) => W == null ? !1 : W.startsWith("data:") || W.startsWith("blob:"), ie = f(() => {
      if (c.value.length > 0)
        return c.value[0].filePath;
      let W = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return W && pt(s(W)) || null;
    }), N = (W) => !W || W.startsWith("data:") || W.endsWith(".svg") ? "" : "rounded-full object-cover";
    function z(W) {
      d.value = i(ie.value);
    }
    return Pt(is), (W, O) => (a(), u("div", {
      class: w(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      n("div", fc, [
        o(h) ? (a(), u("label", {
          key: 0,
          for: e.id,
          class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, A(o(h)), 11, mc)) : k("", !0),
        n("div", vc, [
          n("span", hc, A(e.help ?? o(h)), 1),
          n("input", Le({
            ref_key: "input",
            ref: l,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: o(g),
            placeholder: o(p),
            "aria-invalid": o(v) != null,
            "aria-describedby": `${e.id}-error`
          }, W.$attrs, { onChange: b }), null, 16, gc),
          o(v) ? (a(), u("div", pc, bc)) : k("", !0)
        ]),
        o(v) ? (a(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, A(o(v)), 9, wc)) : e.help ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, A(e.help), 9, xc)) : k("", !0)
      ]),
      e.multiple ? (a(), u("div", _c, [
        n("table", Lc, [
          (a(!0), u(Te, null, Ie(c.value, (L) => (a(), u("tr", null, [
            n("td", Vc, [
              n("div", {
                class: "flex w-full",
                title: Y(L.filePath) ? "" : L.filePath
              }, [
                n("img", {
                  src: r[o(pt)(L.filePath)] || o(s)(o(pt)(L.filePath)),
                  class: w(["mr-2 h-8 w-8", N(L.filePath)]),
                  onError: (U) => r[o(pt)(L.filePath)] = o(i)(o(pt)(L.filePath))
                }, null, 42, Mc),
                Y(L.filePath) ? (a(), u("span", Tc, A(L.fileName), 1)) : (a(), u("a", {
                  key: 0,
                  href: o(s)(L.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, A(L.fileName), 9, Ac))
              ], 8, Sc)
            ]),
            n("td", Fc, [
              L.contentLength && L.contentLength > 0 ? (a(), u("span", Ic, A(o(un)(L.contentLength)), 1)) : k("", !0)
            ])
          ]))), 256))
        ])
      ])) : (a(), u("div", kc, [
        o(ie) ? (a(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: Y(o(ie)) ? "" : o(ie)
        }, [
          n("img", {
            onClick: B,
            class: w(["h-16 w-16", N(o(ie))]),
            alt: `Current ${o(h) ?? ""}`,
            src: d.value || o(s)(o(ie)),
            onError: z
          }, null, 42, Cc)
        ], 8, $c)) : k("", !0)
      ]))
    ], 2));
  }
}), Oc = ["id"], jc = ["for"], Pc = { class: "relative mt-1" }, Bc = ["id", "placeholder"], Rc = /* @__PURE__ */ n("svg", {
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
], -1), Hc = [
  Rc
], Ec = ["id"], zc = ["onMouseover", "onClick"], Nc = /* @__PURE__ */ n("svg", {
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
], -1), Uc = [
  Nc
], qc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, Qc = /* @__PURE__ */ n("svg", {
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
], -1), Kc = [
  Qc
], Zc = ["id"], Gc = ["id"], Wc = /* @__PURE__ */ ue({
  __name: "Autocomplete",
  props: {
    status: null,
    id: null,
    type: null,
    label: null,
    help: null,
    placeholder: null,
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean },
    options: { default: () => [] },
    modelValue: null,
    match: null,
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const s = e, i = M(!1);
    t({ toggle: Q });
    function r(S) {
      return Array.isArray(s.modelValue) && s.modelValue.indexOf(S) >= 0;
    }
    const d = f(() => s.label ?? Ee(nt(s.id)));
    let c = qe("ApiState", void 0);
    const m = f(() => ft.call({ responseStatus: s.status ?? (c == null ? void 0 : c.error.value) }, s.id)), h = f(() => [lt.base, m.value ? lt.invalid : lt.valid]), p = M(null), y = M(""), v = M(null), g = M(s.viewCount), b = M([]), B = f(() => y.value ? s.options.filter((te) => s.match(te, y.value)).slice(0, g.value) : s.options), Y = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function ie(S) {
      v.value = S, b.value.indexOf(S) > Math.floor(g.value * 0.9) && (g.value += s.viewCount, ee());
    }
    const N = [",", `
`, "	"];
    function z(S) {
      var x;
      const te = (x = S.clipboardData) == null ? void 0 : x.getData("Text");
      T(te);
    }
    function T(S) {
      if (!S)
        return;
      const te = N.some((x) => S.includes(x));
      if (!s.multiple || !te) {
        const x = s.options.filter((G) => s.match(G, S));
        x.length == 1 && (X(x[0]), i.value = !1, cl());
      } else if (te) {
        const x = new RegExp("\\r|\\n|\\t|,"), H = S.split(x).filter((Z) => Z.trim()).map((Z) => s.options.find((C) => s.match(C, Z))).filter((Z) => !!Z);
        if (H.length > 0) {
          y.value = "", i.value = !1, v.value = null;
          let Z = Array.from(s.modelValue || []);
          H.forEach((C) => {
            r(C) ? Z = Z.filter((_) => _ != C) : Z.push(C);
          }), l("update:modelValue", Z), cl();
        }
      }
    }
    function W(S) {
      Y.indexOf(S.code) || le();
    }
    function O(S) {
      if (!(S.shiftKey || S.ctrlKey || S.altKey)) {
        if (!i.value) {
          S.code == "ArrowDown" && (i.value = !0, v.value = b.value[0]);
          return;
        }
        if (S.code == "Escape")
          i.value && (S.stopPropagation(), i.value = !1);
        else if (S.code == "Tab")
          i.value = !1;
        else if (S.code == "Home")
          v.value = b.value[0], U();
        else if (S.code == "End")
          v.value = b.value[b.value.length - 1], U();
        else if (S.code == "ArrowDown") {
          if (!v.value)
            v.value = b.value[0];
          else {
            const te = b.value.indexOf(v.value);
            v.value = te + 1 < b.value.length ? b.value[te + 1] : b.value[0];
          }
          D();
        } else if (S.code == "ArrowUp") {
          if (!v.value)
            v.value = b.value[b.value.length - 1];
          else {
            const te = b.value.indexOf(v.value);
            v.value = te - 1 >= 0 ? b.value[te - 1] : b.value[b.value.length - 1];
          }
          D();
        } else
          S.code == "Enter" && (v.value ? (X(v.value), s.multiple || (S.preventDefault(), cl())) : i.value = !1);
      }
    }
    const L = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function U() {
      setTimeout(() => {
        let S = gl(`#${s.id}-autocomplete li.active`);
        S && S.scrollIntoView(L);
      }, 0);
    }
    function D() {
      setTimeout(() => {
        let S = gl(`#${s.id}-autocomplete li.active`);
        S && ("scrollIntoViewIfNeeded" in S ? S.scrollIntoViewIfNeeded(L) : S.scrollIntoView(L));
      }, 0);
    }
    function Q(S) {
      var te;
      i.value = S, S && (le(), (te = p.value) == null || te.focus());
    }
    function le() {
      i.value = !0, ee();
    }
    function X(S) {
      if (y.value = "", i.value = !1, s.multiple) {
        let te = Array.from(s.modelValue || []);
        r(S) ? te = te.filter((x) => x != S) : te.push(S), v.value = null, l("update:modelValue", te);
      } else {
        let te = S;
        s.modelValue == S && (te = null), l("update:modelValue", te);
      }
    }
    function ee() {
      b.value = B.value;
    }
    return Lt(y, ee), (S, te) => (a(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      o(d) ? (a(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, A(o(d)), 9, jc)) : k("", !0),
      n("div", Pc, [
        kt(n("input", Le({
          ref_key: "txtInput",
          ref: p,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": te[0] || (te[0] = (x) => y.value = x),
          class: o(h),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: le,
          onKeydown: O,
          onKeyup: W,
          onClick: le,
          onPaste: z,
          required: !1
        }, S.$attrs), null, 16, Bc), [
          [lo, y.value]
        ]),
        n("button", {
          type: "button",
          onClick: te[1] || (te[1] = (x) => Q(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, Hc),
        i.value ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: O,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(Te, null, Ie(b.value, (x) => (a(), u("li", {
            class: w([x === v.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (G) => ie(x),
            onClick: (G) => X(x),
            role: "option",
            tabindex: "-1"
          }, [
            K(S.$slots, "item", It(hl(x))),
            r(x) ? (a(), u("span", {
              key: 0,
              class: w(["absolute inset-y-0 right-0 flex items-center pr-4", x === v.value ? "text-white" : "text-indigo-600"])
            }, Uc, 2)) : k("", !0)
          ], 42, zc))), 256))
        ], 40, Ec)) : !e.multiple && e.modelValue ? (a(), u("div", {
          key: 1,
          onKeydown: O,
          onClick: te[2] || (te[2] = (x) => Q(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          K(S.$slots, "item", It(hl(e.modelValue)))
        ], 32)) : k("", !0),
        o(m) ? (a(), u("div", qc, Kc)) : k("", !0)
      ]),
      o(m) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(m)), 9, Zc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, Gc)) : k("", !0)
    ], 8, Oc));
  }
}), Jc = ["id", "name", "value"], Xc = { class: "block truncate" }, Yc = /* @__PURE__ */ ue({
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
  setup(e, { expose: t, emit: l }) {
    const s = e;
    t({
      toggle(v) {
        var g;
        (g = d.value) == null || g.toggle(v);
      }
    });
    function i(v) {
      l("update:modelValue", v);
    }
    const r = f(() => s.multiple != null ? s.multiple : Array.isArray(s.modelValue)), d = M();
    function c(v, g) {
      return !g || v.value.toLowerCase().includes(g.toLowerCase());
    }
    const m = f(() => s.entries || (s.values ? s.values.map((v) => ({ key: v, value: v })) : s.options ? Object.keys(s.options).map((v) => ({ key: v, value: s.options[v] })) : [])), h = M(r.value ? [] : null);
    function p() {
      let v = s.modelValue && typeof s.modelValue == "object" ? s.modelValue.key : s.modelValue;
      v == null || v === "" ? h.value = r.value ? [] : null : typeof v == "string" ? h.value = m.value.find((g) => g.key === v) || null : Array.isArray(v) && (h.value = m.value.filter((g) => v.includes(g.key)));
    }
    Je(p);
    const y = f(() => h.value == null ? "" : Array.isArray(h.value) ? h.value.map((v) => encodeURIComponent(v.key)).join(",") : h.value.key);
    return (v, g) => {
      const b = J("Autocomplete");
      return a(), u(Te, null, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(y)
        }, null, 8, Jc),
        $e(b, Le({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: o(m),
          match: c,
          multiple: o(r)
        }, v.$attrs, {
          modelValue: h.value,
          "onUpdate:modelValue": [
            g[0] || (g[0] = (B) => h.value = B),
            i
          ]
        }), {
          item: ke(({ key: B, value: Y }) => [
            n("span", Xc, A(Y), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), e0 = /* @__PURE__ */ ue({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, s = f(() => l.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = f(() => ut(l.input, i)), d = M(Ue(
      l.modelValue[l.input.id],
      (m) => l.input.type === "file" ? null : l.input.type === "date" && m instanceof Date ? kl(m) : l.input.type === "time" ? Jn(m) : m
    ));
    Lt(d, () => {
      l.modelValue[l.input.id] = d.value, t("update:modelValue", l.modelValue);
    });
    const c = f(() => {
      const m = l.modelValue[l.input.id];
      if (l.input.type !== "file" || !m)
        return [];
      if (typeof m == "string")
        return [{ filePath: m, fileName: $t(m, "/") }];
      if (!Array.isArray(m) && typeof m == "object")
        return m;
      if (Array.isArray(m)) {
        const h = [];
        return m.forEach((p) => {
          typeof p == "string" ? h.push({ filePath: p, fileName: $t(p, "/") }) : typeof p == "object" && h.push(p);
        }), h;
      }
    });
    return (m, h) => {
      var N, z, T, W, O, L, U, D, Q, le, X, ee, S, te, x, G, H, Z, C, _, P, de, F, V, re, ye, fe, R;
      const p = J("SelectInput"), y = J("CheckboxInput"), v = J("TagInput"), g = J("Combobox"), b = J("FileInput"), B = J("TextareaInput"), Y = J("MarkdownInput"), ie = J("TextInput");
      return o(ae).component(o(s)) ? (a(), ne(Qn(o(ae).component(o(s))), Le({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[0] || (h[0] = (j) => d.value = j),
        status: (N = e.api) == null ? void 0 : N.error,
        "input-class": (z = e.input.css) == null ? void 0 : z.input,
        "label-class": (T = e.input.css) == null ? void 0 : T.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(s) == "select" ? (a(), ne(p, Le({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[1] || (h[1] = (j) => d.value = j),
        status: (W = e.api) == null ? void 0 : W.error,
        "input-class": (O = e.input.css) == null ? void 0 : O.input,
        "label-class": (L = e.input.css) == null ? void 0 : L.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(s) == "checkbox" ? (a(), ne(y, Le({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[2] || (h[2] = (j) => d.value = j),
        status: (U = e.api) == null ? void 0 : U.error,
        "input-class": (D = e.input.css) == null ? void 0 : D.input,
        "label-class": (Q = e.input.css) == null ? void 0 : Q.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(s) == "tag" ? (a(), ne(v, Le({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[3] || (h[3] = (j) => d.value = j),
        status: (le = e.api) == null ? void 0 : le.error,
        "input-class": (X = e.input.css) == null ? void 0 : X.input,
        "label-class": (ee = e.input.css) == null ? void 0 : ee.label,
        allowableValues: e.input.allowableValues,
        string: ((S = e.input.prop) == null ? void 0 : S.type) == "String"
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : o(s) == "combobox" ? (a(), ne(g, Le({
        key: 4,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[4] || (h[4] = (j) => d.value = j),
        status: (te = e.api) == null ? void 0 : te.error,
        "input-class": (x = e.input.css) == null ? void 0 : x.input,
        "label-class": (G = e.input.css) == null ? void 0 : G.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(s) == "file" ? (a(), ne(b, Le({
        key: 5,
        id: e.input.id,
        status: (H = e.api) == null ? void 0 : H.error,
        modelValue: d.value,
        "onUpdate:modelValue": h[5] || (h[5] = (j) => d.value = j),
        "input-class": (Z = e.input.css) == null ? void 0 : Z.input,
        "label-class": (C = e.input.css) == null ? void 0 : C.label,
        files: o(c)
      }, o(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : o(s) == "textarea" ? (a(), ne(B, Le({
        key: 6,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[6] || (h[6] = (j) => d.value = j),
        status: (_ = e.api) == null ? void 0 : _.error,
        "input-class": (P = e.input.css) == null ? void 0 : P.input,
        "label-class": (de = e.input.css) == null ? void 0 : de.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(s) == "MarkdownInput" ? (a(), ne(Y, Le({
        key: 7,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[7] || (h[7] = (j) => d.value = j),
        status: (F = e.api) == null ? void 0 : F.error,
        "input-class": (V = e.input.css) == null ? void 0 : V.input,
        "label-class": (re = e.input.css) == null ? void 0 : re.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (a(), ne(ie, Le({
        key: 8,
        type: o(s),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[8] || (h[8] = (j) => d.value = j),
        status: (ye = e.api) == null ? void 0 : ye.error,
        "input-class": (fe = e.input.css) == null ? void 0 : fe.input,
        "label-class": (R = e.input.css) == null ? void 0 : R.label
      }, o(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), t0 = { class: "lookup-field" }, l0 = ["name", "value"], n0 = {
  key: 0,
  class: "flex justify-between"
}, s0 = ["for"], o0 = {
  key: 0,
  class: "flex items-center"
}, a0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, i0 = /* @__PURE__ */ n("span", { class: "sr-only" }, "Clear", -1), r0 = /* @__PURE__ */ n("svg", {
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
], -1), u0 = [
  i0,
  r0
], d0 = {
  key: 1,
  class: "mt-1 relative"
}, c0 = { class: "w-full inline-flex truncate" }, f0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, m0 = /* @__PURE__ */ n("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
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
], -1), v0 = ["id"], h0 = ["id"], g0 = /* @__PURE__ */ ue({
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
  setup(e, { emit: t }) {
    const l = e, { config: s } = St(), { metadataApi: i } = ot(), r = f(() => l.id || l.input.id), d = f(() => l.label ?? Ee(nt(r.value)));
    let c = qe("ApiState", void 0);
    const m = qe("client"), h = f(() => ft.call({ responseStatus: l.status ?? (c == null ? void 0 : c.error.value) }, r.value)), p = M(""), y = M(""), v = f(() => be(l.modelValue, r.value)), g = f(() => We(l.metadataType).find((N) => N.name.toLowerCase() == r.value.toLowerCase())), b = f(() => {
      var N, z, T;
      return ((T = st((z = (N = g.value) == null ? void 0 : N.ref) == null ? void 0 : z.model)) == null ? void 0 : T.icon) || s.value.tableIcon;
    });
    let B;
    function Y(N) {
      if (N) {
        if (B == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        B.openModal({ name: "ModalLookup", ref: N }, (z) => {
          if (console.debug("openModal", p.value, " -> ", z, wt.setRefValue(N, z), N), z) {
            const T = be(z, N.refId);
            p.value = wt.setRefValue(N, z) || T;
            const W = o(l.modelValue);
            W[r.value] = T, t("update:modelValue", W);
          }
        });
      }
    }
    function ie() {
      l.modelValue[r.value] = null, p.value = "";
    }
    return Je(async () => {
      var U, D;
      B = qe("ModalProvider", void 0);
      const N = l.modelValue;
      l.modelValue[r.value] || (l.modelValue[r.value] = null);
      const z = g.value, T = z == null ? void 0 : z.ref;
      if (!T) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      p.value = "";
      let W = T.selfId == null ? be(N, z.name) : be(N, T.selfId);
      if (Zt(W) && (W = be(N, T.refId)), W == null)
        return;
      if (((U = i.value) == null ? void 0 : U.operations.find((Q) => {
        var le;
        return ((le = Q.dataModel) == null ? void 0 : le.name) == T.model;
      })) != null) {
        const Q = be(N, z.name);
        if (Zt(Q))
          return;
        if (p.value = `${Q}`, y.value = z.name, T.refLabel != null) {
          const le = We(l.metadataType).find((ee) => ee.type == T.model);
          le == null && console.warn(`Could not find ${T.model} Property on ${l.metadataType.name}`);
          const X = le != null ? be(N, le.name) : null;
          if (X != null) {
            let ee = be(X, T.refLabel);
            ee && (p.value = `${ee}`, wt.setValue(T.model, W, T.refLabel, ee));
          } else {
            const ee = ((D = z.attributes) == null ? void 0 : D.some((te) => te.name == "Computed")) == !0;
            let S = await wt.getOrFetchValue(m, i.value, T.model, T.refId, T.refLabel, ee, W);
            p.value = S || `${T.model}: ${p.value}`;
          }
        }
      }
    }), (N, z) => {
      var W;
      const T = J("Icon");
      return a(), u("div", t0, [
        n("input", {
          type: "hidden",
          name: o(r),
          value: o(v)
        }, null, 8, l0),
        o(d) ? (a(), u("div", n0, [
          n("label", {
            for: o(r),
            class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, A(o(d)), 11, s0),
          o(v) ? (a(), u("div", o0, [
            n("span", a0, A(o(v)), 1),
            n("button", {
              onClick: ie,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, u0)
          ])) : k("", !0)
        ])) : k("", !0),
        (W = o(g)) != null && W.ref ? (a(), u("div", d0, [
          n("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: z[0] || (z[0] = (O) => Y(o(g).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            n("span", c0, [
              n("span", f0, [
                $e(T, {
                  class: "mr-1 w-5 h-5",
                  image: o(b)
                }, null, 8, ["image"]),
                n("span", null, A(p.value), 1)
              ])
            ]),
            m0
          ])
        ])) : k("", !0),
        o(h) ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${o(r)}-error`
        }, A(o(h)), 9, v0)) : e.help ? (a(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${o(r)}-description`
        }, A(e.help), 9, h0)) : k("", !0)
      ]);
    };
  }
}), p0 = /* @__PURE__ */ ue({
  __name: "AutoFormFields",
  props: {
    modelValue: null,
    type: null,
    api: null,
    formLayout: null,
    configureField: null,
    configureFormLayout: null,
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const s = e;
    t({ forceUpdate: i, props: s, updateValue: d });
    function i() {
      var z;
      const N = Be();
      (z = N == null ? void 0 : N.proxy) == null || z.$forceUpdate();
    }
    function r(N, z) {
      d(N.id, be(z, N.id));
    }
    function d(N, z) {
      s.modelValue[N] = z, l("update:modelValue", s.modelValue), i();
    }
    const { metadataApi: c, apiOf: m, typeOf: h, typeOfRef: p, createFormLayout: y, Crud: v } = ot(), g = f(() => s.type || Bt(s.modelValue)), b = f(() => h(g.value)), B = f(() => {
      var N, z;
      return p((z = (N = c.value) == null ? void 0 : N.operations.find((T) => T.request.name == g.value)) == null ? void 0 : z.dataModel) || b.value;
    }), Y = f(() => {
      const N = b.value;
      if (!N) {
        if (s.formLayout) {
          const U = s.formLayout.map((D) => {
            const Q = { name: D.id, type: fa(D.type) }, le = Object.assign({ prop: Q }, D);
            return s.configureField && s.configureField(le), le;
          });
          return s.configureFormLayout && s.configureFormLayout(U), U;
        }
        throw new Error(`MetadataType for ${g.value} not found`);
      }
      const z = We(N), T = B.value, W = s.formLayout ? s.formLayout : y(N), O = [], L = m(N.name);
      return W.forEach((U) => {
        var X;
        const D = z.find((ee) => ee.name == U.name);
        if (U.ignore)
          return;
        const Q = ((X = T == null ? void 0 : T.properties) == null ? void 0 : X.find((ee) => {
          var S;
          return ee.name.toLowerCase() == ((S = U.name) == null ? void 0 : S.toLowerCase());
        })) ?? D, le = Object.assign({ prop: Q, op: L }, U);
        s.configureField && s.configureField(le), O.push(le);
      }), s.configureFormLayout && s.configureFormLayout(O), O;
    }), ie = f(() => Y.value.filter((N) => N.type != "hidden").map((N) => N.id));
    return (N, z) => {
      var L;
      const T = J("ErrorSummary"), W = J("LookupInput"), O = J("DynamicInput");
      return a(), u(Te, null, [
        e.hideSummary ? k("", !0) : (a(), ne(T, {
          key: 0,
          status: (L = e.api) == null ? void 0 : L.error,
          except: o(ie)
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
                (a(!0), u(Te, null, Ie(o(Y), (U) => {
                  var D, Q, le;
                  return a(), u("div", {
                    key: U.id,
                    class: w([
                      "w-full",
                      ((D = U.css) == null ? void 0 : D.field) ?? (U.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (U.type == "checkbox" ? " flex items-center" : "")),
                      U.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((Q = U.prop) == null ? void 0 : Q.ref) != null && U.type != "file" && !U.prop.isPrimaryKey ? (a(), ne(W, {
                      key: 0,
                      metadataType: o(B),
                      input: U,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (X) => r(U, X),
                      status: (le = e.api) == null ? void 0 : le.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (a(), ne(O, {
                      key: 1,
                      input: U,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": z[0] || (z[0] = (X) => N.$emit("update:modelValue", X)),
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
function Ml() {
  const e = M(!1), t = M(), l = M(), s = qe("client");
  function i({ message: v, errorCode: g, fieldName: b, errors: B }) {
    return g || (g = "Exception"), B || (B = []), t.value = b ? new Ol({
      errorCode: g,
      message: v,
      errors: [new Rn({ fieldName: b, errorCode: g, message: v })]
    }) : new Ol({ errorCode: g, message: v, errors: B });
  }
  function r({ fieldName: v, message: g, errorCode: b }) {
    if (b || (b = "Exception"), !t.value)
      i({ fieldName: v, message: g, errorCode: b });
    else {
      let B = new Ol(t.value);
      B.errors = [
        ...(B.errors || []).filter((Y) => {
          var ie;
          return ((ie = Y.fieldName) == null ? void 0 : ie.toLowerCase()) !== (v == null ? void 0 : v.toLowerCase());
        }),
        new Rn({ fieldName: v, message: g, errorCode: b })
      ], t.value = B;
    }
  }
  async function d(v, g, b) {
    e.value = !0;
    let B = await s.api(At(v), g, b);
    return e.value = !1, l.value = B.response, t.value = B.error, B;
  }
  async function c(v, g, b) {
    e.value = !0;
    let B = await s.apiVoid(At(v), g, b);
    return e.value = !1, l.value = B.response, t.value = B.error, B;
  }
  async function m(v, g, b, B) {
    e.value = !0;
    let Y = await s.apiForm(At(v), g, b, B);
    return e.value = !1, l.value = Y.response, t.value = Y.error, Y;
  }
  async function h(v, g, b, B) {
    e.value = !0;
    let Y = await s.apiFormVoid(At(v), g, b, B);
    return e.value = !1, l.value = Y.response, t.value = Y.error, Y;
  }
  async function p(v, g, b, B) {
    return ts(s, v, g, b, B);
  }
  let y = { setError: i, addFieldError: r, loading: e, error: t, api: d, apiVoid: c, apiForm: m, apiFormVoid: h, swr: p, unRefs: At, setRef: Xn };
  return Xt("ApiState", y), y;
}
const y0 = { key: 0 }, b0 = { class: "text-red-700" }, w0 = /* @__PURE__ */ n("b", null, "type", -1), x0 = { key: 0 }, k0 = { key: 2 }, $0 = ["innerHTML"], C0 = /* @__PURE__ */ n("input", {
  type: "submit",
  class: "hidden"
}, null, -1), _0 = { class: "flex justify-end" }, L0 = /* @__PURE__ */ n("div", null, null, -1), V0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, S0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), M0 = { class: "fixed inset-0 overflow-hidden" }, A0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, T0 = { class: "flex-1" }, F0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, I0 = { class: "flex items-start justify-between space-x-3" }, D0 = { class: "space-y-1" }, O0 = { key: 0 }, j0 = { key: 2 }, P0 = ["innerHTML"], B0 = { class: "flex h-7 items-center" }, R0 = { class: "flex justify-end" }, H0 = /* @__PURE__ */ ue({
  __name: "AutoForm",
  props: {
    type: null,
    modelValue: null,
    heading: null,
    subHeading: null,
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    formStyle: { default: "card" },
    configureField: null,
    configureFormLayout: null,
    panelClass: null,
    bodyClass: null,
    formClass: null,
    innerFormClass: null,
    headerClass: { default: "p-6" },
    buttonsClass: null,
    headingClass: null,
    subHeadingClass: null,
    submitLabel: { default: "Submit" },
    allowSubmit: null
  },
  emits: ["success", "error", "update:modelValue", "done"],
  setup(e, { expose: t, emit: l }) {
    const s = e, i = M(), r = M(1), d = M();
    t({ forceUpdate: c, props: s, setModel: m, formFields: i, submit: G, close: de });
    function c() {
      var re;
      r.value++, X.value = le();
      const V = Be();
      (re = V == null ? void 0 : V.proxy) == null || re.$forceUpdate();
    }
    async function m(V) {
      Object.assign(X.value, V), c(), await xt(() => null);
    }
    Xt("ModalProvider", {
      openModal: v
    });
    const p = M(), y = M();
    function v(V, re) {
      p.value = V, y.value = re;
    }
    async function g(V) {
      y.value && y.value(V), p.value = void 0, y.value = void 0;
    }
    const b = Ml(), { getTypeName: B } = ls(), { typeOf: Y, Crud: ie, createDto: N } = ot(), z = M(new tt()), T = f(() => s.panelClass || Ze.panelClass(s.formStyle)), W = f(() => s.formClass || s.formStyle == "card" ? "shadow sm:rounded-md" : Tt.formClass), O = f(() => s.headingClass || Ze.headingClass(s.formStyle)), L = f(() => s.subHeadingClass || Ze.subHeadingClass(s.formStyle)), U = f(() => typeof s.buttonsClass == "string" ? s.buttonsClass : Ze.buttonsClass), D = f(() => {
      var V;
      return s.type ? B(s.type) : (V = s.modelValue) != null && V.getTypeName ? s.modelValue.getTypeName() : null;
    }), Q = f(() => Y(D.value)), le = () => s.modelValue || te(), X = M(le()), ee = f(() => b.loading.value), S = f(() => {
      var V;
      return s.heading || ((V = Y(D.value)) == null ? void 0 : V.description) || Ee(D.value);
    });
    function te() {
      return typeof s.type == "string" ? N(s.type) : s.type ? new s.type() : s.modelValue;
    }
    async function x(V) {
      if (!V || V.tagName != "FORM") {
        console.error("Not a valid form", V);
        return;
      }
      const re = te();
      let ye = Ue(re == null ? void 0 : re.getMethod, (j) => typeof j == "function" ? j() : null) || "POST", fe = Ue(re == null ? void 0 : re.createResponse, (j) => typeof j == "function" ? j() : null) == null;
      const R = s.jsconfig;
      if (en.hasRequestBody(ye)) {
        let j = new re.constructor(), me = new FormData(V);
        console.debug("AutoForm.submitForm", j, me), fe ? z.value = await b.apiFormVoid(j, me, { jsconfig: R }) : z.value = await b.apiForm(j, me, { jsconfig: R });
      } else {
        let j = new re.constructor(X.value);
        console.debug("AutoForm.submit", j), fe ? z.value = await b.apiVoid(j, { jsconfig: R }) : z.value = await b.api(j, { jsconfig: R });
      }
      z.value.succeeded ? (l("success", z.value.response), de()) : l("error", z.value.error);
    }
    async function G() {
      x(d.value);
    }
    function H(V) {
      l("update:modelValue", V);
    }
    function Z() {
      l("done");
    }
    const C = M(!1), _ = M(""), P = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(C, () => {
      Ct(P, _, C.value), C.value || setTimeout(Z, 700);
    }), C.value = !0;
    function de() {
      s.formStyle == "slideOver" ? C.value = !1 : Z();
    }
    const F = (V) => {
      V.key === "Escape" && de();
    };
    return Je(() => window.addEventListener("keydown", F)), Pt(() => window.removeEventListener("keydown", F)), (V, re) => {
      var ve, Ve, Fe, E, q, se, ge, Se, Oe, Re, Me;
      const ye = J("AutoFormFields"), fe = J("FormLoading"), R = J("PrimaryButton"), j = J("CloseButton"), me = J("SecondaryButton"), Ce = J("ModalLookup");
      return a(), u("div", null, [
        o(Q) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: w(o(T))
        }, [
          n("form", {
            ref_key: "elForm",
            ref: d,
            onSubmit: re[0] || (re[0] = Ne((De) => x(De.target), ["prevent"])),
            autocomplete: "off",
            class: w(e.innerFormClass)
          }, [
            n("div", {
              class: w(e.bodyClass)
            }, [
              n("div", {
                class: w(e.headerClass)
              }, [
                V.$slots.heading ? (a(), u("div", x0, [
                  K(V.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: w(o(O))
                }, A(o(S)), 3)),
                V.$slots.subheading ? (a(), u("div", k0, [
                  K(V.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: w(o(L))
                }, A(e.subHeading), 3)) : (ve = o(Q)) != null && ve.notes ? (a(), u("p", {
                  key: 4,
                  class: w(["notes", o(L)]),
                  innerHTML: (Ve = o(Q)) == null ? void 0 : Ve.notes
                }, null, 10, $0)) : k("", !0)
              ], 2),
              K(V.$slots, "header", {
                instance: (Fe = Be()) == null ? void 0 : Fe.exposed,
                model: X.value
              }),
              C0,
              (a(), ne(ye, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                type: e.type,
                modelValue: X.value,
                "onUpdate:modelValue": H,
                api: z.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
              K(V.$slots, "footer", {
                instance: (E = Be()) == null ? void 0 : E.exposed,
                model: X.value
              })
            ], 2),
            K(V.$slots, "buttons", {}, () => {
              var De, Qe;
              return [
                n("div", {
                  class: w(o(U))
                }, [
                  n("div", null, [
                    K(V.$slots, "leftbuttons", {
                      instance: (De = Be()) == null ? void 0 : De.exposed,
                      model: X.value
                    })
                  ]),
                  n("div", null, [
                    e.showLoading && o(ee) ? (a(), ne(fe, { key: 0 })) : k("", !0)
                  ]),
                  n("div", _0, [
                    L0,
                    $e(R, {
                      disabled: e.allowSubmit ? !e.allowSubmit(X.value) : !1
                    }, {
                      default: ke(() => [
                        xe(A(e.submitLabel), 1)
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    K(V.$slots, "rightbuttons", {
                      instance: (Qe = Be()) == null ? void 0 : Qe.exposed,
                      model: X.value
                    })
                  ])
                ], 2)
              ];
            })
          ], 34)
        ], 2)) : (a(), u("div", V0, [
          S0,
          n("div", M0, [
            n("div", {
              onMousedown: de,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: re[2] || (re[2] = Ne(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", _.value])
                }, [
                  n("form", {
                    ref_key: "elForm",
                    ref: d,
                    class: w(o(W)),
                    onSubmit: re[1] || (re[1] = Ne((De) => x(De.target), ["prevent"]))
                  }, [
                    n("div", A0, [
                      n("div", T0, [
                        n("div", F0, [
                          n("div", I0, [
                            n("div", D0, [
                              V.$slots.heading ? (a(), u("div", O0, [
                                K(V.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: w(o(O))
                              }, A(o(S)), 3)),
                              V.$slots.subheading ? (a(), u("div", j0, [
                                K(V.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: w(o(L))
                              }, A(e.subHeading), 3)) : (q = o(Q)) != null && q.notes ? (a(), u("p", {
                                key: 4,
                                class: w(["notes", o(L)]),
                                innerHTML: (se = o(Q)) == null ? void 0 : se.notes
                              }, null, 10, P0)) : k("", !0)
                            ]),
                            n("div", B0, [
                              $e(j, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: de
                              })
                            ])
                          ])
                        ]),
                        K(V.$slots, "header", {
                          instance: (ge = Be()) == null ? void 0 : ge.exposed,
                          model: X.value
                        }),
                        (a(), ne(ye, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          type: e.type,
                          modelValue: X.value,
                          "onUpdate:modelValue": H,
                          api: z.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
                        K(V.$slots, "footer", {
                          instance: (Se = Be()) == null ? void 0 : Se.exposed,
                          model: X.value
                        })
                      ])
                    ]),
                    n("div", {
                      class: w(o(U))
                    }, [
                      n("div", null, [
                        K(V.$slots, "leftbuttons", {
                          instance: (Oe = Be()) == null ? void 0 : Oe.exposed,
                          model: X.value
                        })
                      ]),
                      n("div", null, [
                        e.showLoading && o(ee) ? (a(), ne(fe, { key: 0 })) : k("", !0)
                      ]),
                      n("div", R0, [
                        $e(me, {
                          onClick: de,
                          disabled: o(ee)
                        }, {
                          default: ke(() => [
                            xe("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        $e(R, {
                          class: "ml-4",
                          disabled: e.allowSubmit ? !e.allowSubmit(X.value) : !1
                        }, {
                          default: ke(() => [
                            xe(A(e.submitLabel), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        K(V.$slots, "rightbuttons", {
                          instance: (Re = Be()) == null ? void 0 : Re.exposed,
                          model: X.value
                        })
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", y0, [
          n("p", b0, [
            xe("Could not create form for unknown "),
            w0,
            xe(" " + A(o(D)), 1)
          ])
        ])),
        ((Me = p.value) == null ? void 0 : Me.name) == "ModalLookup" && p.value.ref ? (a(), ne(Ce, {
          key: 3,
          "ref-info": p.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : k("", !0)
      ]);
    };
  }
}), E0 = { key: 0 }, z0 = { class: "text-red-700" }, N0 = /* @__PURE__ */ n("b", null, "type", -1), U0 = ["onSubmit"], q0 = { key: 0 }, Q0 = { key: 2 }, K0 = ["innerHTML"], Z0 = { class: "flex justify-end" }, G0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, W0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), J0 = { class: "fixed inset-0 overflow-hidden" }, X0 = ["onSubmit"], Y0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, ef = { class: "flex-1" }, tf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, lf = { class: "flex items-start justify-between space-x-3" }, nf = { class: "space-y-1" }, sf = { key: 0 }, of = { key: 2 }, af = ["innerHTML"], rf = { class: "flex h-7 items-center" }, uf = { class: "flex justify-end" }, df = /* @__PURE__ */ ue({
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
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "error"],
  setup(e, { expose: t, emit: l }) {
    const s = e, i = M(), r = M(1);
    t({ forceUpdate: d, props: s, setModel: c, formFields: i });
    function d() {
      var V, re;
      r.value++, (V = i.value) == null || V.forceUpdate();
      const F = Be();
      (re = F == null ? void 0 : F.proxy) == null || re.$forceUpdate();
    }
    function c(F) {
      Object.assign(O.value, F), d();
    }
    function m(F) {
    }
    Xt("ModalProvider", {
      openModal: v
    });
    const p = M(), y = M();
    function v(F, V) {
      p.value = F, y.value = V;
    }
    async function g(F) {
      y.value && y.value(F), p.value = void 0, y.value = void 0;
    }
    const { typeOf: b, typeProperties: B, Crud: Y, createDto: ie, formValues: N } = ot(), z = f(() => Bt(s.type)), T = f(() => b(z.value)), O = M((() => typeof s.type == "string" ? ie(s.type) : s.type ? new s.type() : null)()), L = f(() => s.panelClass || Ze.panelClass(s.formStyle)), U = f(() => s.formClass || Ze.formClass(s.formStyle)), D = f(() => s.headingClass || Ze.headingClass(s.formStyle)), Q = f(() => s.subHeadingClass || Ze.subHeadingClass(s.formStyle)), le = f(() => s.buttonsClass || Ze.buttonsClass), X = f(() => Y.model(T.value)), ee = f(() => {
      var F;
      return s.heading || ((F = b(z.value)) == null ? void 0 : F.description) || (X.value ? `New ${Ee(X.value)}` : Ee(z.value));
    }), S = M(new tt());
    let te = Ml(), x = f(() => te.loading.value);
    async function G(F) {
      var fe, R;
      let V = F.target;
      if (!s.autosave) {
        l("save", new O.value.constructor(N(V, B(T.value))));
        return;
      }
      let re = Ue((fe = O.value) == null ? void 0 : fe.getMethod, (j) => typeof j == "function" ? j() : null) || "POST", ye = Ue((R = O.value) == null ? void 0 : R.createResponse, (j) => typeof j == "function" ? j() : null) == null;
      if (en.hasRequestBody(re)) {
        let j = new O.value.constructor(), me = new FormData(V);
        ye ? S.value = await te.apiFormVoid(j, me, { jsconfig: "eccn" }) : S.value = await te.apiForm(j, me, { jsconfig: "eccn" });
      } else {
        let j = N(V, B(T.value)), me = new O.value.constructor(j);
        ye ? S.value = await te.apiVoid(me, { jsconfig: "eccn" }) : S.value = await te.api(me, { jsconfig: "eccn" });
      }
      S.value.succeeded ? (V.reset(), l("save", S.value.response)) : l("error", S.value.error);
    }
    function H() {
      l("done");
    }
    const Z = M(!1), C = M(""), _ = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(Z, () => {
      Ct(_, C, Z.value), Z.value || setTimeout(H, 700);
    }), Z.value = !0;
    function P() {
      s.formStyle == "slideOver" ? Z.value = !1 : H();
    }
    const de = (F) => {
      F.key === "Escape" && P();
    };
    return Je(() => window.addEventListener("keydown", de)), Pt(() => window.removeEventListener("keydown", de)), (F, V) => {
      var Ce, ve, Ve, Fe, E, q, se, ge, Se;
      const re = J("AutoFormFields"), ye = J("FormLoading"), fe = J("SecondaryButton"), R = J("PrimaryButton"), j = J("CloseButton"), me = J("ModalLookup");
      return a(), u("div", null, [
        o(T) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: w(o(L))
        }, [
          n("form", {
            onSubmit: Ne(G, ["prevent"])
          }, [
            n("div", {
              class: w(o(U))
            }, [
              n("div", null, [
                F.$slots.heading ? (a(), u("div", q0, [
                  K(F.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: w(o(D))
                }, A(o(ee)), 3)),
                F.$slots.subheading ? (a(), u("div", Q0, [
                  K(F.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: w(o(Q))
                }, A(e.subHeading), 3)) : (Ce = o(T)) != null && Ce.notes ? (a(), u("p", {
                  key: 4,
                  class: w(["notes", o(Q)]),
                  innerHTML: (ve = o(T)) == null ? void 0 : ve.notes
                }, null, 10, K0)) : k("", !0)
              ]),
              K(F.$slots, "header", {
                formInstance: (Ve = Be()) == null ? void 0 : Ve.exposed,
                model: O.value
              }),
              (a(), ne(re, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: O.value,
                "onUpdate:modelValue": m,
                api: S.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              K(F.$slots, "footer", {
                formInstance: (Fe = Be()) == null ? void 0 : Fe.exposed,
                model: O.value
              })
            ], 2),
            n("div", {
              class: w(o(le))
            }, [
              n("div", null, [
                e.showLoading && o(x) ? (a(), ne(ye, { key: 0 })) : k("", !0)
              ]),
              n("div", Z0, [
                e.showCancel ? (a(), ne(fe, {
                  key: 0,
                  onClick: P,
                  disabled: o(x)
                }, {
                  default: ke(() => [
                    xe("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : k("", !0),
                $e(R, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(x)
                }, {
                  default: ke(() => [
                    xe("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, U0)
        ], 2)) : (a(), u("div", G0, [
          W0,
          n("div", J0, [
            n("div", {
              onMousedown: P,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: V[0] || (V[0] = Ne(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", C.value])
                }, [
                  n("form", {
                    class: w(o(U)),
                    onSubmit: Ne(G, ["prevent"])
                  }, [
                    n("div", Y0, [
                      n("div", ef, [
                        n("div", tf, [
                          n("div", lf, [
                            n("div", nf, [
                              F.$slots.heading ? (a(), u("div", sf, [
                                K(F.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: w(o(D))
                              }, A(o(ee)), 3)),
                              F.$slots.subheading ? (a(), u("div", of, [
                                K(F.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: w(o(Q))
                              }, A(e.subHeading), 3)) : (E = o(T)) != null && E.notes ? (a(), u("p", {
                                key: 4,
                                class: w(["notes", o(Q)]),
                                innerHTML: (q = o(T)) == null ? void 0 : q.notes
                              }, null, 10, af)) : k("", !0)
                            ]),
                            n("div", rf, [
                              $e(j, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: P
                              })
                            ])
                          ])
                        ]),
                        K(F.$slots, "header", {
                          formInstance: (se = Be()) == null ? void 0 : se.exposed,
                          model: O.value
                        }),
                        (a(), ne(re, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: O.value,
                          "onUpdate:modelValue": m,
                          api: S.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        K(F.$slots, "footer", {
                          formInstance: (ge = Be()) == null ? void 0 : ge.exposed,
                          model: O.value
                        })
                      ])
                    ]),
                    n("div", {
                      class: w(o(le))
                    }, [
                      n("div", null, [
                        e.showLoading && o(x) ? (a(), ne(ye, { key: 0 })) : k("", !0)
                      ]),
                      n("div", uf, [
                        e.showCancel ? (a(), ne(fe, {
                          key: 0,
                          onClick: P,
                          disabled: o(x)
                        }, {
                          default: ke(() => [
                            xe("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : k("", !0),
                        $e(R, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(x)
                        }, {
                          default: ke(() => [
                            xe("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, X0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", E0, [
          n("p", z0, [
            xe("Could not create form for unknown "),
            N0,
            xe(" " + A(o(z)), 1)
          ])
        ])),
        ((Se = p.value) == null ? void 0 : Se.name) == "ModalLookup" && p.value.ref ? (a(), ne(me, {
          key: 3,
          "ref-info": p.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : k("", !0)
      ]);
    };
  }
}), cf = { key: 0 }, ff = { class: "text-red-700" }, mf = /* @__PURE__ */ n("b", null, "type", -1), vf = ["onSubmit"], hf = { key: 0 }, gf = { key: 2 }, pf = ["innerHTML"], yf = { class: "flex justify-end" }, bf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, wf = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), xf = { class: "fixed inset-0 overflow-hidden" }, kf = ["onSubmit"], $f = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Cf = { class: "flex-1" }, _f = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Lf = { class: "flex items-start justify-between space-x-3" }, Vf = { class: "space-y-1" }, Sf = { key: 0 }, Mf = { key: 2 }, Af = ["innerHTML"], Tf = { class: "flex h-7 items-center" }, Ff = { class: "flex justify-end" }, If = /* @__PURE__ */ ue({
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
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { expose: t, emit: l }) {
    const s = e, i = M(), r = M(1);
    t({ forceUpdate: d, props: s, setModel: c, formFields: i });
    function d() {
      var j;
      r.value++, D.value = U();
      const R = Be();
      (j = R == null ? void 0 : R.proxy) == null || j.$forceUpdate();
    }
    function c(R) {
      Object.assign(D.value, R);
    }
    function m(R) {
    }
    Xt("ModalProvider", {
      openModal: v
    });
    const p = M(), y = M();
    function v(R, j) {
      p.value = R, y.value = j;
    }
    async function g(R) {
      y.value && y.value(R), p.value = void 0, y.value = void 0;
    }
    const { typeOf: b, apiOf: B, typeProperties: Y, createFormLayout: ie, getPrimaryKey: N, Crud: z, createDto: T, formValues: W } = ot(), O = f(() => Bt(s.type)), L = f(() => b(O.value)), U = () => typeof s.type == "string" ? T(s.type, ml(s.modelValue)) : s.type ? new s.type(ml(s.modelValue)) : null, D = M(U()), Q = f(() => s.panelClass || Ze.panelClass(s.formStyle)), le = f(() => s.formClass || Ze.formClass(s.formStyle)), X = f(() => s.headingClass || Ze.headingClass(s.formStyle)), ee = f(() => s.subHeadingClass || Ze.subHeadingClass(s.formStyle)), S = f(() => z.model(L.value)), te = f(() => {
      var R;
      return s.heading || ((R = b(O.value)) == null ? void 0 : R.description) || (S.value ? `Update ${Ee(S.value)}` : Ee(O.value));
    }), x = M(new tt());
    let G = Ml(), H = f(() => G.loading.value);
    const Z = () => Ue(b(z.model(L.value)), (R) => N(R));
    function C(R) {
      const { op: j, prop: me } = R;
      j && (z.isPatch(j) || z.isUpdate(j)) && (R.disabled = me == null ? void 0 : me.isPrimaryKey), s.configureField && s.configureField(R);
    }
    async function _(R) {
      var Ve, Fe;
      let j = R.target;
      if (!s.autosave) {
        l("save", new D.value.constructor(W(j, Y(L.value))));
        return;
      }
      let me = Ue((Ve = D.value) == null ? void 0 : Ve.getMethod, (E) => typeof E == "function" ? E() : null) || "POST", Ce = Ue((Fe = D.value) == null ? void 0 : Fe.createResponse, (E) => typeof E == "function" ? E() : null) == null, ve = Z();
      if (en.hasRequestBody(me)) {
        let E = new D.value.constructor(), q = be(s.modelValue, ve.name), se = new FormData(j);
        ve && !Array.from(se.keys()).some((Re) => Re.toLowerCase() == ve.name.toLowerCase()) && se.append(ve.name, q);
        let ge = [];
        const Se = O.value && B(O.value);
        if (Se && z.isPatch(Se)) {
          let Re = ml(s.modelValue), Me = ie(L.value), De = {};
          if (ve && (De[ve.name] = q), Me.forEach((je) => {
            let Xe = je.id, Ht = be(Re, Xe);
            if (ve && ve.name.toLowerCase() === Xe.toLowerCase())
              return;
            let mt = se.get(Xe), ll = mt != null, nl = je.type === "checkbox" ? ll !== !!Ht : je.type === "file" ? ll : mt != Ht;
            !mt && !Ht && (nl = !1), nl && (mt ? De[Xe] = mt : je.type !== "file" && ge.push(Xe));
          }), Array.from(se.keys()).filter((je) => !De[je]).forEach((je) => se.delete(je)), Array.from(se.keys()).filter((je) => je.toLowerCase() != ve.name.toLowerCase()).length == 0 && ge.length == 0) {
            ye();
            return;
          }
        }
        const Oe = ge.length > 0 ? { jsconfig: "eccn", reset: ge } : { jsconfig: "eccn" };
        Ce ? x.value = await G.apiFormVoid(E, se, Oe) : x.value = await G.apiForm(E, se, Oe);
      } else {
        let E = W(j, Y(L.value));
        ve && !be(E, ve.name) && (E[ve.name] = be(s.modelValue, ve.name));
        let q = new D.value.constructor(E);
        Ce ? x.value = await G.apiVoid(q, { jsconfig: "eccn" }) : x.value = await G.api(q, { jsconfig: "eccn" });
      }
      x.value.succeeded ? (j.reset(), l("save", x.value.response)) : l("error", x.value.error);
    }
    async function P(R) {
      let j = Z();
      const me = j ? be(s.modelValue, j.name) : null;
      if (!me) {
        console.error(`Could not find Primary Key for Type ${O.value} (${S.value})`);
        return;
      }
      const Ce = { [j.name]: me }, ve = typeof s.deleteType == "string" ? T(s.deleteType, Ce) : s.deleteType ? new s.deleteType(Ce) : null;
      Ue(ve.createResponse, (Fe) => typeof Fe == "function" ? Fe() : null) == null ? x.value = await G.apiVoid(ve) : x.value = await G.api(ve), x.value.succeeded ? l("delete", x.value.response) : l("error", x.value.error);
    }
    function de() {
      l("done");
    }
    const F = M(!1), V = M(""), re = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(F, () => {
      Ct(re, V, F.value), F.value || setTimeout(de, 700);
    }), F.value = !0;
    function ye() {
      s.formStyle == "slideOver" ? F.value = !1 : de();
    }
    const fe = (R) => {
      R.key === "Escape" && ye();
    };
    return Je(() => window.addEventListener("keydown", fe)), Pt(() => window.removeEventListener("keydown", fe)), (R, j) => {
      var se, ge, Se, Oe, Re, Me, De, Qe, je;
      const me = J("AutoFormFields"), Ce = J("ConfirmDelete"), ve = J("FormLoading"), Ve = J("SecondaryButton"), Fe = J("PrimaryButton"), E = J("CloseButton"), q = J("ModalLookup");
      return a(), u("div", null, [
        o(L) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: w(o(Q))
        }, [
          n("form", {
            onSubmit: Ne(_, ["prevent"])
          }, [
            n("div", {
              class: w(o(le))
            }, [
              n("div", null, [
                R.$slots.heading ? (a(), u("div", hf, [
                  K(R.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: w(o(X))
                }, A(o(te)), 3)),
                R.$slots.subheading ? (a(), u("div", gf, [
                  K(R.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: w(o(ee))
                }, A(e.subHeading), 3)) : (se = o(L)) != null && se.notes ? (a(), u("p", {
                  key: 4,
                  class: w(["notes", o(ee)]),
                  innerHTML: (ge = o(L)) == null ? void 0 : ge.notes
                }, null, 10, pf)) : k("", !0)
              ]),
              K(R.$slots, "header", {
                formInstance: (Se = Be()) == null ? void 0 : Se.exposed,
                model: D.value
              }),
              (a(), ne(me, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: D.value,
                "onUpdate:modelValue": m,
                api: x.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              K(R.$slots, "footer", {
                formInstance: (Oe = Be()) == null ? void 0 : Oe.exposed,
                model: D.value
              })
            ], 2),
            n("div", {
              class: w(o(Ze).buttonsClass)
            }, [
              n("div", null, [
                e.deleteType ? (a(), ne(Ce, {
                  key: 0,
                  onDelete: P
                })) : k("", !0)
              ]),
              n("div", null, [
                e.showLoading && o(H) ? (a(), ne(ve, { key: 0 })) : k("", !0)
              ]),
              n("div", yf, [
                $e(Ve, {
                  onClick: ye,
                  disabled: o(H)
                }, {
                  default: ke(() => [
                    xe("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $e(Fe, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(H)
                }, {
                  default: ke(() => [
                    xe("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, vf)
        ], 2)) : (a(), u("div", bf, [
          wf,
          n("div", xf, [
            n("div", {
              onMousedown: ye,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: j[0] || (j[0] = Ne(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", V.value])
                }, [
                  n("form", {
                    class: w(o(le)),
                    onSubmit: Ne(_, ["prevent"])
                  }, [
                    n("div", $f, [
                      n("div", Cf, [
                        n("div", _f, [
                          n("div", Lf, [
                            n("div", Vf, [
                              R.$slots.heading ? (a(), u("div", Sf, [
                                K(R.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: w(o(X))
                              }, A(o(te)), 3)),
                              R.$slots.subheading ? (a(), u("div", Mf, [
                                K(R.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: w(o(ee))
                              }, A(e.subHeading), 3)) : (Re = o(L)) != null && Re.notes ? (a(), u("p", {
                                key: 4,
                                class: w(["notes", o(ee)]),
                                innerHTML: (Me = o(L)) == null ? void 0 : Me.notes
                              }, null, 10, Af)) : k("", !0)
                            ]),
                            n("div", Tf, [
                              $e(E, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ye
                              })
                            ])
                          ])
                        ]),
                        K(R.$slots, "header", {
                          formInstance: (De = Be()) == null ? void 0 : De.exposed,
                          model: D.value
                        }),
                        (a(), ne(me, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: D.value,
                          "onUpdate:modelValue": m,
                          api: x.value,
                          configureField: C,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        K(R.$slots, "footer", {
                          formInstance: (Qe = Be()) == null ? void 0 : Qe.exposed,
                          model: D.value
                        })
                      ])
                    ]),
                    n("div", {
                      class: w(o(Ze).buttonsClass)
                    }, [
                      n("div", null, [
                        e.deleteType ? (a(), ne(Ce, {
                          key: 0,
                          onDelete: P
                        })) : k("", !0)
                      ]),
                      n("div", null, [
                        e.showLoading && o(H) ? (a(), ne(ve, { key: 0 })) : k("", !0)
                      ]),
                      n("div", Ff, [
                        $e(Ve, {
                          onClick: ye,
                          disabled: o(H)
                        }, {
                          default: ke(() => [
                            xe("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        $e(Fe, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(H)
                        }, {
                          default: ke(() => [
                            xe("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, kf)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", cf, [
          n("p", ff, [
            xe("Could not create form for unknown "),
            mf,
            xe(" " + A(o(O)), 1)
          ])
        ])),
        ((je = p.value) == null ? void 0 : je.name) == "ModalLookup" && p.value.ref ? (a(), ne(q, {
          key: 3,
          "ref-info": p.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : k("", !0)
      ]);
    };
  }
}), Df = /* @__PURE__ */ n("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), Of = ["onClick"], jf = /* @__PURE__ */ ue({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let l = M(!1);
    const s = () => {
      l.value && t("delete");
    }, i = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      l.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (r, d) => (a(), u(Te, null, [
      kt(n("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (c) => Un(l) ? l.value = c : l = c)
      }, null, 512), [
        [Jl, o(l)]
      ]),
      Df,
      n("span", Le({
        onClick: Ne(s, ["prevent"]),
        class: o(i)
      }, r.$attrs), [
        K(r.$slots, "default", {}, () => [
          xe("Delete")
        ])
      ], 16, Of)
    ], 64));
  }
}), Pf = {
  class: "flex",
  title: "loading..."
}, Bf = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, Rf = /* @__PURE__ */ bl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), Hf = [
  Rf
], Ef = { class: "ml-2 mt-1 text-gray-400" }, zf = /* @__PURE__ */ ue({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return qe("ApiState", void 0), (t, l) => (a(), u("div", Pf, [
      e.icon ? (a(), u("svg", Bf, Hf)) : k("", !0),
      n("span", Ef, A(e.text), 1)
    ]));
  }
}), Nf = ["onClick"], Uf = {
  key: 3,
  class: "flex justify-between items-center"
}, qf = { class: "mr-1 select-none" }, Qf = ["onClick"], Kf = /* @__PURE__ */ ue({
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
  setup(e, { emit: t }) {
    const l = e, s = M(), i = M(null), r = (H) => i.value === H, d = Xl(), c = (H) => Object.keys(d).find((Z) => Z.toLowerCase() == H.toLowerCase() + "-header"), m = (H) => Object.keys(d).find((Z) => Z.toLowerCase() == H.toLowerCase()), h = f(() => El(l.items).filter((H) => !!(d[H] || d[H + "-header"]))), { typeOf: p, typeProperties: y } = ot(), v = f(() => Bt(l.type)), g = f(() => p(v.value)), b = f(() => y(g.value));
    function B(H) {
      const Z = l.headerTitles && be(l.headerTitles, H) || H;
      return l.headerTitle ? l.headerTitle(Z) : Wn(Z);
    }
    function Y(H) {
      const Z = H.toLowerCase();
      return b.value.find((C) => C.name.toLowerCase() == Z);
    }
    function ie(H) {
      const Z = Y(H);
      return Z != null && Z.format ? Z.format : (Z == null ? void 0 : Z.type) == "TimeSpan" || (Z == null ? void 0 : Z.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const N = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function z(H) {
      const Z = l.visibleFrom && be(l.visibleFrom, H);
      return Z && Ue(N[Z], (C) => `hidden ${C}`);
    }
    const T = f(() => l.gridClass ?? he.getGridClass(l.tableStyle)), W = f(() => l.grid2Class ?? he.getGrid2Class(l.tableStyle)), O = f(() => l.grid3Class ?? he.getGrid3Class(l.tableStyle)), L = f(() => l.grid4Class ?? he.getGrid4Class(l.tableStyle)), U = f(() => l.tableClass ?? he.getTableClass(l.tableStyle)), D = f(() => l.tbodyClass ?? he.getTbodyClass(l.tbodyClass)), Q = f(() => l.theadClass ?? he.getTheadClass(l.tableStyle)), le = f(() => l.theadRowClass ?? he.getTheadRowClass(l.tableStyle)), X = f(() => l.theadCellClass ?? he.getTheadCellClass(l.tableStyle));
    function ee(H, Z) {
      return l.rowClass ? l.rowClass(H, Z) : he.getTableRowClass(l.tableStyle, Z, !!(l.isSelected && l.isSelected(H)), l.isSelected != null);
    }
    function S(H, Z) {
      return l.rowStyle ? l.rowStyle(H, Z) : void 0;
    }
    const te = f(() => {
      const H = (typeof l.selectedColumns == "string" ? l.selectedColumns.split(",") : l.selectedColumns) || (h.value.length > 0 ? h.value : El(l.items)), Z = b.value.reduce((C, _) => (C[_.name.toLowerCase()] = _.format, C), {});
      return H.filter((C) => {
        var _;
        return ((_ = Z[C.toLowerCase()]) == null ? void 0 : _.method) != "hidden";
      });
    });
    function x(H, Z) {
      t("headerSelected", Z, H);
    }
    function G(H, Z, C) {
      t("rowSelected", C, H);
    }
    return (H, Z) => {
      const C = J("CellFormat"), _ = J("PreviewFormat");
      return e.items.length ? (a(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: s,
        class: w(o(T))
      }, [
        n("div", {
          class: w(o(W))
        }, [
          n("div", {
            class: w(o(O))
          }, [
            n("div", {
              class: w(o(L))
            }, [
              n("table", {
                class: w(o(U))
              }, [
                n("thead", {
                  class: w(o(Q))
                }, [
                  n("tr", {
                    class: w(o(le))
                  }, [
                    (a(!0), u(Te, null, Ie(o(te), (P) => (a(), u("td", {
                      class: w([z(P), o(X), r(P) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      n("div", {
                        onClick: (de) => x(de, P)
                      }, [
                        o(d)[P + "-header"] ? K(H.$slots, P + "-header", {
                          key: 0,
                          column: P
                        }) : c(P) ? K(H.$slots, c(P), {
                          key: 1,
                          column: P
                        }) : o(d).header ? K(H.$slots, "header", {
                          key: 2,
                          column: P,
                          label: B(P)
                        }) : (a(), u("div", Uf, [
                          n("span", qf, A(B(P)), 1)
                        ]))
                      ], 8, Nf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                n("tbody", {
                  class: w(o(D))
                }, [
                  (a(!0), u(Te, null, Ie(e.items, (P, de) => (a(), u("tr", {
                    class: w(ee(P, de)),
                    style: Wl(S(P, de)),
                    onClick: (F) => G(F, de, P)
                  }, [
                    (a(!0), u(Te, null, Ie(o(te), (F) => (a(), u("td", {
                      class: w([z(F), o(he).tableCellClass])
                    }, [
                      o(d)[F] ? K(H.$slots, F, It(Le({ key: 0 }, P))) : m(F) ? K(H.$slots, m(F), It(Le({ key: 1 }, P))) : Y(F) ? (a(), ne(C, {
                        key: 2,
                        type: o(g),
                        propType: Y(F),
                        modelValue: P
                      }, null, 8, ["type", "propType", "modelValue"])) : (a(), ne(_, {
                        key: 3,
                        value: o(be)(P, F),
                        format: ie(F)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, Qf))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : k("", !0);
    };
  }
}), Zf = ue({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: l } = ot();
    function s(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var ie;
      const i = s(e.propType), r = be(e.modelValue, e.propType.name), d = Object.assign({}, e, t), c = ht("span", { innerHTML: Jt(r, i, d) }), m = Zt(r) && Array.isArray(r) ? ht("span", {}, [
        ht("span", { class: "mr-2" }, `${r.length}`),
        c
      ]) : c, h = (ie = e.propType) == null ? void 0 : ie.ref;
      if (!h)
        return m;
      const y = We(e.type).find((N) => N.type === h.model);
      if (!y)
        return m;
      const v = be(e.modelValue, y.name), g = v && h.refLabel && be(v, h.refLabel);
      if (!g)
        return m;
      const b = l(h.model), B = b == null ? void 0 : b.icon, Y = B ? ht(Ps, { image: B, class: "w-5 h-5 mr-1" }) : null;
      return ht("span", { class: "flex", title: `${h.model} ${r}` }, [
        Y,
        g
      ]);
    };
  }
}), Gf = { key: 0 }, Wf = {
  key: 0,
  class: "mr-2"
}, Jf = ["innerHTML"], Xf = ["innerHTML"], Yf = {
  inheritAttrs: !1
}, e1 = /* @__PURE__ */ ue({
  ...Yf,
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
    const t = e, l = f(() => Array.isArray(t.value));
    return (s, i) => o(Zt)(e.value) ? (a(), u("span", Gf, [
      e.includeCount && o(l) ? (a(), u("span", Wf, A(e.value.length), 1)) : k("", !0),
      n("span", {
        innerHTML: o(Jt)(e.value, e.format, s.$attrs)
      }, null, 8, Jf)
    ])) : (a(), u("span", {
      key: 1,
      innerHTML: o(Jt)(e.value, e.format, s.$attrs)
    }, null, 8, Xf));
  }
}), t1 = ["innerHTML"], l1 = { key: 0 }, n1 = /* @__PURE__ */ n("b", null, null, -1), s1 = { key: 2 }, o1 = /* @__PURE__ */ ue({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, t, l, s, i) => s }
  },
  setup(e) {
    const t = e, l = f(() => _t(t.value)), s = f(() => Array.isArray(t.value)), i = (m) => Wn(m), r = (m) => t.fieldAttrs ? t.fieldAttrs(m) : null, d = f(() => El(t.value)), c = (m) => m ? Object.keys(m).map((h) => ({ key: i(h), val: m[h] })) : [];
    return (m, h) => {
      const p = J("HtmlFormat", !0);
      return a(), u("div", {
        class: w(e.depth == 0 ? "prose html-format" : "")
      }, [
        o(l) ? (a(), u("div", {
          key: 0,
          innerHTML: o(Jt)(e.value)
        }, null, 8, t1)) : o(s) ? (a(), u("div", {
          key: 1,
          class: w(e.classes("array", "div", e.depth, o(he).gridClass))
        }, [
          o(_t)(e.value[0]) ? (a(), u("div", l1, "[ " + A(e.value.join(", ")) + " ]", 1)) : (a(), u("div", {
            key: 1,
            class: w(e.classes("array", "div", e.depth, o(he).grid2Class))
          }, [
            n("div", {
              class: w(e.classes("array", "div", e.depth, o(he).grid3Class))
            }, [
              n("div", {
                class: w(e.classes("array", "div", e.depth, o(he).grid4Class))
              }, [
                n("table", {
                  class: w(e.classes("object", "table", e.depth, o(he).tableClass))
                }, [
                  n("thead", {
                    class: w(e.classes("array", "thead", e.depth, o(he).theadClass))
                  }, [
                    n("tr", null, [
                      (a(!0), u(Te, null, Ie(o(d), (y) => (a(), u("th", {
                        class: w(e.classes("array", "th", e.depth, o(he).theadCellClass + " whitespace-nowrap"))
                      }, [
                        n1,
                        xe(A(i(y)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  n("tbody", null, [
                    (a(!0), u(Te, null, Ie(e.value, (y, v) => (a(), u("tr", {
                      class: w(e.classes("array", "tr", e.depth, v % 2 == 0 ? "bg-white" : "bg-gray-50", v))
                    }, [
                      (a(!0), u(Te, null, Ie(o(d), (g) => (a(), u("td", {
                        class: w(e.classes("array", "td", e.depth, o(he).tableCellClass))
                      }, [
                        $e(p, Le({
                          value: y[g],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes
                        }, r(g)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (a(), u("div", s1, [
          n("table", {
            class: w(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (a(!0), u(Te, null, Ie(c(e.value), (y) => (a(), u("tr", {
              class: w(e.classes("object", "tr", e.depth, ""))
            }, [
              n("th", {
                class: w(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, A(y.key), 3),
              n("td", {
                class: w(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                $e(p, Le({
                  value: y.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(y.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), a1 = { class: "absolute top-0 right-0 pt-4 pr-4" }, i1 = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), r1 = /* @__PURE__ */ n("svg", {
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
], -1), u1 = [
  i1,
  r1
], d1 = /* @__PURE__ */ ue({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (l, s) => (a(), u("div", a1, [
      n("button", {
        type: "button",
        onClick: s[0] || (s[0] = (i) => l.$emit("close")),
        class: w([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, u1, 2)
    ]));
  }
}), c1 = ["id", "aria-labelledby"], f1 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), m1 = { class: "fixed inset-0 overflow-hidden" }, v1 = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, h1 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, g1 = { class: "flex-1" }, p1 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, y1 = { class: "flex items-start justify-between space-x-3" }, b1 = { class: "space-y-1" }, w1 = ["id"], x1 = {
  key: 1,
  class: "text-sm text-gray-500"
}, k1 = { class: "flex h-7 items-center" }, $1 = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, C1 = /* @__PURE__ */ ue({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = M(!1), s = M(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Lt(l, () => {
      Ct(i, s, l.value), l.value || setTimeout(() => t("done"), 700);
    }), l.value = !0;
    const r = () => l.value = !1, d = (c) => {
      c.key === "Escape" && r();
    };
    return Je(() => window.addEventListener("keydown", d)), Pt(() => window.removeEventListener("keydown", d)), (c, m) => {
      const h = J("CloseButton");
      return a(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        f1,
        n("div", m1, [
          n("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            n("div", {
              onMousedown: m[0] || (m[0] = Ne(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              n("div", {
                class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", s.value])
              }, [
                n("div", v1, [
                  n("div", h1, [
                    n("div", g1, [
                      n("div", p1, [
                        n("div", y1, [
                          n("div", b1, [
                            e.title ? (a(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, A(e.title), 9, w1)) : k("", !0),
                            c.$slots.subtitle ? (a(), u("p", x1, [
                              K(c.$slots, "subtitle")
                            ])) : k("", !0)
                          ]),
                          n("div", k1, [
                            $e(h, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      n("div", {
                        class: w(e.contentClass)
                      }, [
                        K(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  n("div", $1, [
                    K(c.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, c1);
    };
  }
}), _1 = ["id", "data-transition-for", "aria-labelledby"], L1 = { class: "fixed inset-0 z-10 overflow-y-auto" }, V1 = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, S1 = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), M1 = /* @__PURE__ */ n("svg", {
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
], -1), A1 = [
  S1,
  M1
], T1 = /* @__PURE__ */ ue({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Gl.modalClass },
    sizeClass: { default: Gl.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = M(!1), s = M(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = M(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    Lt(l, () => {
      Ct(i, s, l.value), Ct(d, r, l.value), l.value || setTimeout(() => t("done"), 200);
    }), l.value = !0;
    const c = () => l.value = !1;
    Xt("ModalProvider", {
      openModal: y
    });
    const h = M(), p = M();
    function y(b, B) {
      h.value = b, p.value = B;
    }
    async function v(b) {
      p.value && p.value(b), h.value = void 0, p.value = void 0;
    }
    const g = (b) => {
      b.key === "Escape" && c();
    };
    return Je(() => window.addEventListener("keydown", g)), Pt(() => window.removeEventListener("keydown", g)), (b, B) => {
      var ie;
      const Y = J("ModalLookup");
      return a(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: c,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        n("div", {
          class: w(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", s.value])
        }, null, 2),
        n("div", L1, [
          n("div", V1, [
            n("div", {
              class: w([e.modalClass, e.sizeClass, r.value]),
              onMousedown: B[0] || (B[0] = Ne(() => {
              }, ["stop"]))
            }, [
              n("div", null, [
                n("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  n("button", {
                    type: "button",
                    onClick: c,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, A1)
                ]),
                K(b.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((ie = h.value) == null ? void 0 : ie.name) == "ModalLookup" && h.value.ref ? (a(), ne(Y, {
          key: 0,
          "ref-info": h.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : k("", !0)
      ], 40, _1);
    };
  }
}), F1 = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, I1 = { class: "mt-3 pl-5 flex flex-wrap items-center" }, D1 = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, O1 = { class: "hidden md:inline" }, j1 = { class: "flex pb-1 sm:pb-0" }, P1 = ["title"], B1 = /* @__PURE__ */ n("svg", {
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
], -1), R1 = [
  B1
], H1 = ["disabled"], E1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), z1 = [
  E1
], N1 = ["disabled"], U1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), q1 = [
  U1
], Q1 = ["disabled"], K1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Z1 = [
  K1
], G1 = ["disabled"], W1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), J1 = [
  W1
], X1 = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, Y1 = { class: "px-4 text-lg text-black dark:text-white" }, em = { key: 0 }, tm = { key: 1 }, lm = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), nm = { key: 2 }, sm = {
  key: 1,
  class: "pl-2"
}, om = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), am = [
  om
], im = { class: "flex pb-1 sm:pb-0" }, rm = {
  key: 0,
  class: "pl-2"
}, um = /* @__PURE__ */ n("svg", {
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
], -1), dm = { class: "mr-1" }, cm = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, fm = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), mm = [
  fm
], vm = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, hm = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), gm = [
  hm
], pm = { key: 1 }, ym = { key: 4 }, bm = { key: 0 }, wm = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, xm = { class: "mr-1 select-none" }, km = {
  key: 1,
  class: "flex justify-between items-center"
}, $m = { class: "mr-1 select-none" }, Cm = /* @__PURE__ */ ue({
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
  setup(e, { emit: t }) {
    const l = e, s = Xl(), { config: i } = St(), { metadataApi: r, filterDefinitions: d } = ot(), c = qe("client"), m = i.value.storage, h = f(() => l.toolbarButtonClass ?? he.toolbarButtonClass), p = f(() => d.value), y = 25, v = M({ take: y }), g = M(new tt()), b = M(l.skip), B = M(!1), Y = M(), ie = (E) => typeof E == "string" ? E.split(",") : E || [];
    function N(E, q) {
      return he.getTableRowClass("fullWidth", q, !1, !0);
    }
    function z() {
      let E = ie(l.selectedColumns);
      return E.length > 0 ? E : [];
    }
    const T = f(() => st(l.refInfo.model)), W = f(() => {
      let q = z().map((ge) => ge.toLowerCase());
      const se = We(T.value);
      return q.length > 0 ? q.map((ge) => se.find((Se) => Se.name.toLowerCase() === ge)).filter((ge) => ge != null) : se;
    }), O = f(() => {
      let E = W.value.map((se) => se.name), q = ie(v.value.selectedColumns).map((se) => se.toLowerCase());
      return q.length > 0 ? E.filter((se) => q.includes(se.toLowerCase())) : E;
    }), L = f(() => v.value.take ?? y), U = f(() => g.value.response ? be(g.value.response, "results") : []), D = f(() => {
      var E;
      return ((E = g.value.response) == null ? void 0 : E.total) ?? U.value.length ?? 0;
    }), Q = f(() => b.value > 0), le = f(() => b.value > 0), X = f(() => U.value.length >= L.value), ee = f(() => U.value.length >= L.value), S = M([]), te = f(() => S.value.some((E) => E.settings.filters.length > 0 || !!E.settings.sort)), x = f(() => S.value.map((E) => E.settings.filters.length).reduce((E, q) => E + q, 0)), G = f(() => el(T.value)), H = f(() => {
      var E;
      return (E = r.value) == null ? void 0 : E.operations.find((q) => {
        var se;
        return ((se = q.dataModel) == null ? void 0 : se.name) == l.refInfo.model && ze.isAnyQuery(q);
      });
    }), Z = M(), C = M(!1), _ = M(), P = () => `${l.id}/ApiPrefs/${l.refInfo.model}`, de = (E) => `Column/${l.id}:${l.refInfo.model}.${E}`;
    async function F(E) {
      b.value += E, b.value < 0 && (b.value = 0);
      var q = Math.floor(D.value / L.value) * L.value;
      b.value > q && (b.value = q), await Ce();
    }
    async function V(E, q) {
      t("done", E);
    }
    function re() {
      t("done", null);
    }
    function ye(E, q) {
      var ge, Se, Oe;
      let se = q.target;
      if ((se == null ? void 0 : se.tagName) !== "TD") {
        let Re = (ge = se == null ? void 0 : se.closest("TABLE")) == null ? void 0 : ge.getBoundingClientRect(), Me = S.value.find((De) => De.name.toLowerCase() == E.toLowerCase());
        if (Me && Re) {
          let De = 318, je = (((Se = q.target) == null ? void 0 : Se.tagName) === "DIV" ? q.target : (Oe = q.target) == null ? void 0 : Oe.closest("DIV")).getBoundingClientRect(), Xe = De + 25;
          _.value = {
            column: Me,
            topLeft: {
              x: Math.max(Math.floor(je.x + 25), Xe),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function fe() {
      _.value = null;
    }
    async function R(E) {
      var se;
      let q = (se = _.value) == null ? void 0 : se.column;
      q && (q.settings = E, m.setItem(de(q.name), JSON.stringify(q.settings)), await Ce()), _.value = null;
    }
    async function j(E) {
      m.setItem(de(E.name), JSON.stringify(E.settings)), await Ce();
    }
    async function me(E) {
      C.value = !1, v.value = E, m.setItem(P(), JSON.stringify(E)), await Ce();
    }
    async function Ce() {
      await ve(Ve());
    }
    async function ve(E) {
      const q = H.value;
      if (!q) {
        console.error(`No Query API was found for ${l.refInfo.model}`);
        return;
      }
      let se = Gt(q, E), ge = Gn((Re) => {
        g.value.response = g.value.error = void 0, B.value = Re;
      }), Se = await c.api(se);
      ge(), xt(() => g.value = Se);
      let Oe = be(Se.response, "results") || [];
      !Se.succeeded || Oe.label == 0;
    }
    function Ve() {
      let E = {
        include: "total",
        take: L.value
      }, q = ie(v.value.selectedColumns || l.selectedColumns);
      if (q.length > 0) {
        let ge = G.value;
        ge && q.includes(ge.name) && (q = [ge.name, ...q]), E.fields = q.join(",");
      }
      let se = [];
      return S.value.forEach((ge) => {
        ge.settings.sort && se.push((ge.settings.sort === "DESC" ? "-" : "") + ge.name), ge.settings.filters.forEach((Se) => {
          let Oe = Se.key.replace("%", ge.name);
          E[Oe] = Se.value;
        });
      }), typeof E.skip > "u" && b.value > 0 && (E.skip = b.value), se.length > 0 && (E.orderBy = se.join(",")), E;
    }
    async function Fe() {
      S.value.forEach((E) => {
        E.settings = { filters: [] }, m.removeItem(de(E.name));
      }), await Ce();
    }
    return Je(async () => {
      const E = l.prefs || pl(m.getItem(P()));
      E && (v.value = E), S.value = W.value.map((q) => ({
        name: q.name,
        type: q.type,
        meta: q,
        settings: Object.assign(
          {
            filters: []
          },
          pl(m.getItem(de(q.name)))
        )
      })), isNaN(l.skip) || (b.value = l.skip), await Ce();
    }), (E, q) => {
      const se = J("ErrorSummary"), ge = J("Loading"), Se = J("SettingsIcons"), Oe = J("DataGrid"), Re = J("ModalDialog");
      return a(), u(Te, null, [
        e.refInfo ? (a(), ne(Re, {
          key: 0,
          ref_key: "modalDialog",
          ref: Z,
          id: e.id,
          onDone: re
        }, {
          default: ke(() => [
            n("div", F1, [
              n("div", I1, [
                n("h3", D1, [
                  xe(" Select "),
                  n("span", O1, A(o(Ee)(e.refInfo.model)), 1)
                ]),
                n("div", j1, [
                  e.showPreferences ? (a(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: q[0] || (q[0] = (Me) => C.value = !C.value)
                  }, R1, 8, P1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 1,
                    type: "button",
                    class: w(["pl-2", o(Q) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !o(Q),
                    onClick: q[1] || (q[1] = (Me) => F(-o(D)))
                  }, z1, 10, H1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 2,
                    type: "button",
                    class: w(["pl-2", o(le) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !o(le),
                    onClick: q[2] || (q[2] = (Me) => F(-o(L)))
                  }, q1, 10, N1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 3,
                    type: "button",
                    class: w(["pl-2", o(X) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !o(X),
                    onClick: q[3] || (q[3] = (Me) => F(o(L)))
                  }, Z1, 10, Q1)) : k("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 4,
                    type: "button",
                    class: w(["pl-2", o(ee) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !o(ee),
                    onClick: q[4] || (q[4] = (Me) => F(o(D)))
                  }, J1, 10, G1)) : k("", !0)
                ]),
                e.showPagingInfo ? (a(), u("div", X1, [
                  n("div", Y1, [
                    B.value ? (a(), u("span", em, "Querying...")) : k("", !0),
                    o(U).length ? (a(), u("span", tm, [
                      lm,
                      xe(" " + A(b.value + 1) + " - " + A(Math.min(b.value + o(U).length, o(D))) + " ", 1),
                      n("span", null, " of " + A(o(D)), 1)
                    ])) : g.value.completed ? (a(), u("span", nm, "No Results")) : k("", !0)
                  ])
                ])) : k("", !0),
                o(te) && e.showResetPreferences ? (a(), u("div", sm, [
                  n("button", {
                    type: "button",
                    onClick: Fe,
                    title: "Reset Preferences & Filters",
                    class: w(o(h))
                  }, am, 2)
                ])) : k("", !0),
                n("div", im, [
                  e.showFiltersView && o(x) > 0 ? (a(), u("div", rm, [
                    n("button", {
                      type: "button",
                      onClick: q[5] || (q[5] = (Me) => Y.value = Y.value == "filters" ? null : "filters"),
                      class: w(o(h)),
                      "aria-expanded": "false"
                    }, [
                      um,
                      n("span", dm, A(o(x)) + " " + A(o(x) == 1 ? "Filter" : "Filters"), 1),
                      Y.value != "filters" ? (a(), u("svg", cm, mm)) : (a(), u("svg", vm, gm))
                    ], 2)
                  ])) : k("", !0)
                ])
              ]),
              Y.value == "filters" ? (a(), ne($n, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: o(p),
                columns: S.value,
                onDone: q[6] || (q[6] = (Me) => Y.value = null),
                onChange: j
              }, null, 8, ["definitions", "columns"])) : k("", !0),
              _.value ? (a(), u("div", pm, [
                $e(kn, {
                  definitions: o(p),
                  column: _.value.column,
                  "top-left": _.value.topLeft,
                  onDone: fe,
                  onSave: R
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : k("", !0),
              g.value.error ? (a(), ne(se, {
                key: 2,
                status: g.value.error
              }, null, 8, ["status"])) : B.value ? (a(), ne(ge, { key: 3 })) : (a(), u("div", ym, [
                o(U).length ? (a(), u("div", bm, [
                  $e(Oe, {
                    id: e.id,
                    items: o(U),
                    type: e.refInfo.model,
                    "selected-columns": o(O),
                    onFiltersChanged: Ce,
                    tableStyle: "fullWidth",
                    rowClass: N,
                    onRowSelected: V,
                    onHeaderSelected: ye
                  }, Yl({
                    header: ke(({ column: Me, label: De }) => {
                      var Qe;
                      return [
                        e.allowFiltering && (!l.canFilter || l.canFilter(Me)) ? (a(), u("div", wm, [
                          n("span", xm, A(De), 1),
                          $e(Se, {
                            column: S.value.find((je) => je.name.toLowerCase() === Me.toLowerCase()),
                            "is-open": ((Qe = _.value) == null ? void 0 : Qe.column.name) === Me
                          }, null, 8, ["column", "is-open"])
                        ])) : (a(), u("div", km, [
                          n("span", $m, A(De), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    Ie(Object.keys(o(s)), (Me) => ({
                      name: Me,
                      fn: ke((De) => [
                        K(E.$slots, Me, It(hl(De)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : k("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : k("", !0),
        C.value ? (a(), ne(Cn, {
          key: 1,
          columns: o(W),
          prefs: v.value,
          onDone: q[7] || (q[7] = (Me) => C.value = !1),
          onSave: me
        }, null, 8, ["columns", "prefs"])) : k("", !0)
      ], 64);
    };
  }
}), _m = { class: "sm:hidden" }, Lm = ["for"], Vm = ["id", "name"], Sm = ["value"], Mm = { class: "hidden sm:block" }, Am = { class: "border-b border-gray-200" }, Tm = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, Fm = ["onClick"], Im = /* @__PURE__ */ ue({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Ee(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, l = f(() => Object.keys(t.tabs)), s = (p) => t.label ? t.label(p) : Ee(p), i = f(() => t.id || "tabs"), r = f(() => t.param || "tab"), d = M();
    function c(p) {
      if (d.value = p, t.url) {
        const y = l.value[0];
        tn({ tab: p === y ? void 0 : p });
      }
    }
    function m(p) {
      return d.value === p;
    }
    const h = f(() => `${100 / Object.keys(t.tabs).length}%`);
    return Je(() => {
      if (d.value = t.selected || Object.keys(t.tabs)[0], t.url) {
        const p = location.search ? location.search : location.hash.includes("?") ? "?" + dl(location.hash, "?") : "", v = Hl(p)[r.value];
        v && (d.value = v);
      }
    }), (p, y) => (a(), u("div", null, [
      n("div", _m, [
        n("label", {
          for: o(i),
          class: "sr-only"
        }, "Select a tab", 8, Lm),
        n("select", {
          id: o(i),
          name: o(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: y[0] || (y[0] = (v) => {
            var g;
            return c((g = v.target) == null ? void 0 : g.value);
          })
        }, [
          (a(!0), u(Te, null, Ie(o(l), (v) => (a(), u("option", {
            key: v,
            value: v
          }, A(s(v)), 9, Sm))), 128))
        ], 40, Vm)
      ]),
      n("div", Mm, [
        n("div", Am, [
          n("nav", Tm, [
            (a(!0), u(Te, null, Ie(o(l), (v) => (a(), u("a", {
              href: "#",
              onClick: Ne((g) => c(v), ["prevent"]),
              style: Wl({ width: o(h) }),
              class: w([m(v) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, A(s(v)), 15, Fm))), 256))
          ])
        ])
      ]),
      n("div", {
        class: w(e.bodyClass)
      }, [
        (a(), ne(Qn(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), Dm = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), Om = [
  Dm
], jm = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), Pm = [
  jm
], Bm = /* @__PURE__ */ ue({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.querySelector("html") : null;
    let l = M(t == null ? void 0 : t.classList.contains("dark"));
    function s() {
      l.value ? t == null || t.classList.remove("dark") : t == null || t.classList.add("dark"), l.value = !l.value, localStorage.setItem("color-scheme", l.value ? "dark" : "light");
    }
    return (i, r) => (a(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: r[0] || (r[0] = (d) => s())
    }, [
      n("span", {
        class: w(`${o(l) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        n("span", {
          class: w(`${o(l) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Om, 2),
        n("span", {
          class: w(`${o(l) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, Pm, 2)
      ], 2)
    ]));
  }
}), Rm = { key: 0 }, Hm = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, Em = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, zm = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, Nm = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, Um = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, qm = ["onClick"], Qm = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, Km = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, Zm = ["onSubmit"], Gm = { class: "mt-8" }, Wm = {
  key: 1,
  class: "mt-6"
}, Jm = /* @__PURE__ */ bl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), Xm = { class: "mt-6 grid grid-cols-3 gap-3" }, Ym = ["href", "title"], ev = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, tv = /* @__PURE__ */ n("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), lv = /* @__PURE__ */ n("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), nv = [
  tv,
  lv
], sv = /* @__PURE__ */ ue({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const l = e, { getMetadata: s, createDto: i } = ot(), r = Ml(), { signIn: d } = xn(), c = s({ assert: !0 }), m = c.plugins.auth, h = document.baseURI, p = c.app.baseUrl, y = M(i("Authenticate")), v = M(new tt()), g = M(l.provider);
    Je(() => {
      m == null || m.authProviders.map((D) => D.formLayout).filter((D) => D).forEach((D) => D.forEach((Q) => y.value[Q.id] = ""));
    });
    const b = f(() => (m == null ? void 0 : m.authProviders.filter((D) => D.formLayout)) || []), B = f(() => b.value[0] || {}), Y = f(() => b.value[Math.max(b.value.length - 1, 0)] || {}), ie = f(() => (g.value ? m == null ? void 0 : m.authProviders.find((D) => D.name === g.value) : null) ?? B.value), N = (D) => D === !1 || D === "false";
    function z(D) {
      return D.label || D.navItem && D.navItem.label;
    }
    const T = f(() => {
      var D;
      return (((D = ie.value) == null ? void 0 : D.formLayout) || []).map((Q) => {
        var le, X;
        return Object.assign({}, Q, {
          type: (le = Q.type) == null ? void 0 : le.toLowerCase(),
          autocomplete: Q.autocomplete || (((X = Q.type) == null ? void 0 : X.toLowerCase()) === "password" ? "current-password" : void 0) || (Q.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, Q.css)
        });
      });
    }), W = f(() => N(l.oauth) ? [] : (m == null ? void 0 : m.authProviders.filter((D) => D.type === "oauth")) || []), O = f(() => {
      let D = bo(
        m == null ? void 0 : m.authProviders.filter((le) => le.formLayout && le.formLayout.length > 0),
        (le, X) => {
          let ee = z(X) || nt(X.name);
          le[ee] = X.name === B.value.name ? "" : X.name;
        }
      );
      const Q = ie.value;
      return Q && N(l.tabs) && (D = { [z(Q) || nt(Q.name)]: Q }), D;
    }), L = f(() => {
      let D = T.value.map((Q) => Q.id).filter((Q) => Q);
      return v.value.summaryMessage(D);
    });
    async function U() {
      if (y.value.provider = ie.value.name, v.value = await r.api(y.value), v.value.succeeded) {
        const D = v.value.response;
        d(D), t("login", D), v.value = new tt(), y.value = i("Authenticate");
      }
    }
    return (D, Q) => {
      const le = J("ErrorSummary"), X = J("AutoFormFields"), ee = J("PrimaryButton"), S = J("Icon"), te = no("href");
      return o(m) ? (a(), u("div", Hm, [
        n("div", Em, [
          n("h2", zm, A(e.title), 1),
          Object.keys(o(O)).length > 1 ? (a(), u("p", Nm, [
            n("span", Um, [
              (a(!0), u(Te, null, Ie(o(O), (x, G) => kt((a(), u("a", {
                onClick: (H) => g.value = x,
                class: w([
                  x === "" || x === o(B).name ? "rounded-l-md" : x === o(Y).name ? "rounded-r-md -ml-px" : "-ml-px",
                  g.value === x ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                xe(A(G), 1)
              ], 10, qm)), [
                [te, { provider: x }]
              ])), 256))
            ])
          ])) : k("", !0)
        ]),
        n("div", Qm, [
          o(L) ? (a(), ne(le, {
            key: 0,
            class: "mb-3",
            errorSummary: o(L)
          }, null, 8, ["errorSummary"])) : k("", !0),
          n("div", Km, [
            o(T).length ? (a(), u("form", {
              key: 0,
              onSubmit: Ne(U, ["prevent"])
            }, [
              $e(X, {
                modelValue: y.value,
                formLayout: o(T),
                api: v.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              n("div", Gm, [
                $e(ee, { class: "w-full" }, {
                  default: ke(() => [
                    xe("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, Zm)) : k("", !0),
            o(W).length ? (a(), u("div", Wm, [
              Jm,
              n("div", Xm, [
                (a(!0), u(Te, null, Ie(o(W), (x) => (a(), u("div", null, [
                  n("a", {
                    href: o(p) + x.navItem.href + "?continue=" + o(h),
                    title: z(x),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    x.icon ? (a(), ne(S, {
                      key: 0,
                      image: x.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (a(), u("svg", ev, nv))
                  ], 8, Ym)
                ]))), 256))
              ])
            ])) : k("", !0)
          ])
        ])
      ])) : (a(), u("div", Rm, "No Auth Plugin"));
    };
  }
}), ov = ["for"], av = {
  key: 1,
  class: "border border-gray-200 flex justify-between"
}, iv = { class: "p-2 flex flex-wrap gap-x-4" }, rv = /* @__PURE__ */ n("title", null, "Bold text (CTRL+B)", -1), uv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
}, null, -1), dv = [
  rv,
  uv
], cv = /* @__PURE__ */ n("title", null, "Italics (CTRL+I)", -1), fv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
}, null, -1), mv = [
  cv,
  fv
], vv = /* @__PURE__ */ n("title", null, "Insert Link (CTRL+K)", -1), hv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
}, null, -1), gv = [
  vv,
  hv
], pv = /* @__PURE__ */ n("title", null, "Blockquote (CTRL+Q)", -1), yv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
}, null, -1), bv = [
  pv,
  yv
], wv = /* @__PURE__ */ n("title", null, "Insert Image (CTRL+SHIFT+L)", -1), xv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
}, null, -1), kv = [
  wv,
  xv
], $v = /* @__PURE__ */ n("title", null, "Insert Code (CTRL+<)", -1), Cv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
}, null, -1), _v = [
  $v,
  Cv
], Lv = /* @__PURE__ */ n("title", null, "H2 Heading (CTRL+H)", -1), Vv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"
}, null, -1), Sv = [
  Lv,
  Vv
], Mv = /* @__PURE__ */ n("title", null, "Numbered List (ALT+1)", -1), Av = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
}, null, -1), Tv = [
  Mv,
  Av
], Fv = /* @__PURE__ */ n("title", null, "Bulleted List (ALT+-)", -1), Iv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
}, null, -1), Dv = [
  Fv,
  Iv
], Ov = /* @__PURE__ */ n("title", null, "Strike Through (ALT+S)", -1), jv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
}, null, -1), Pv = [
  Ov,
  jv
], Bv = /* @__PURE__ */ n("title", null, "Undo (CTRL+Z)", -1), Rv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
}, null, -1), Hv = [
  Bv,
  Rv
], Ev = /* @__PURE__ */ n("title", null, "Redo (CTRL+SHIFT+Z)", -1), zv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
}, null, -1), Nv = [
  Ev,
  zv
], Uv = {
  key: 0,
  class: "p-2 flex flex-wrap gap-x-4"
}, qv = ["href"], Qv = /* @__PURE__ */ n("path", {
  fill: "currentColor",
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
}, null, -1), Kv = [
  Qv
], Zv = { class: "" }, Gv = ["name", "id", "label", "value", "rows", "disabled", "onKeydown"], Wv = ["id"], Jv = ["id"], Xv = /* @__PURE__ */ ue({
  __name: "MarkdownInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    counter: { type: Boolean },
    rows: null,
    errorMessages: null,
    lang: null,
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    helpUrl: { default: "https://guides.github.com/features/mastering-markdown/" },
    hide: null
  },
  emits: ["update:modelValue", "close"],
  setup(e, { expose: t, emit: l }) {
    const s = e;
    let i = [], r = [], d = qe("ApiState", void 0);
    const c = f(() => ft.call({ responseStatus: s.status ?? (d == null ? void 0 : d.error.value) }, s.id)), m = f(() => s.label ?? Ee(nt(s.id))), h = "bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","), p = f(() => s.hide ? bt(h, s.hide) : bt(h, []));
    function y(C) {
      return p.value[C];
    }
    const v = f(() => ["shadow-sm font-mono" + lt.base.replace("rounded-md", ""), c.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + lt.valid, s.inputClass]), g = "w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400", b = M();
    t({ props: s, textarea: b, updateModelValue: B, selection: ie, hasSelection: Y, selectionInfo: N, insert: T, replace: z });
    function B(C) {
      l("update:modelValue", C);
    }
    function Y() {
      return b.value.selectionStart !== b.value.selectionEnd;
    }
    function ie() {
      const C = b.value;
      return C.value.substring(C.selectionStart, C.selectionEnd) || "";
    }
    function N() {
      const C = b.value, _ = C.value, P = C.selectionStart, de = _.substring(P, C.selectionEnd) || "", F = _.substring(0, P), V = F.lastIndexOf(`
`);
      return {
        value: _,
        sel: de,
        selPos: P,
        beforeSel: F,
        afterSel: _.substring(P),
        prevCRPos: V,
        beforeCR: V >= 0 ? F.substring(0, V + 1) : "",
        afterCR: V >= 0 ? F.substring(V + 1) : ""
      };
    }
    function z({ value: C, selectionStart: _, selectionEnd: P }) {
      P == null && (P = _), B(C), xt(() => {
        b.value.focus(), b.value.setSelectionRange(_, P);
      });
    }
    function T(C, _, P = "", { selectionAtEnd: de, offsetStart: F, offsetEnd: V, filterValue: re, filterSelection: ye } = {}) {
      const fe = b.value;
      let R = fe.value, j = fe.selectionEnd;
      i.push({ value: R, selectionStart: fe.selectionStart, selectionEnd: fe.selectionEnd }), r = [];
      const me = fe.selectionStart, Ce = fe.selectionEnd;
      let ve = R.substring(0, me), Ve = R.substring(Ce);
      const Fe = C && ve.endsWith(C) && Ve.startsWith(_);
      if (me == Ce) {
        if (Fe ? (R = ve.substring(0, ve.length - C.length) + Ve.substring(_.length), j += -_.length) : (R = ve + C + P + _ + Ve, j += C.length, F = 0, V = (P == null ? void 0 : P.length) || 0, de && (j += V, V = 0)), re) {
          var q = { pos: j };
          R = re(R, q), j = q.pos;
        }
      } else {
        var se = R.substring(me, Ce);
        ye && (se = ye(se)), Fe ? (R = ve.substring(0, ve.length - C.length) + se + Ve.substring(_.length), F = -se.length - C.length, V = se.length) : (R = ve + C + se + _ + Ve, F ? j += (C + _).length : (j = me, F = C.length, V = se.length));
      }
      B(R), xt(() => {
        fe.focus(), F = j + (F || 0), V = (F || 0) + (V || 0), fe.setSelectionRange(F, V);
      });
    }
    const W = () => T("**", "**", "bold"), O = () => T("_", "_", "italics"), L = () => T("~~", "~~", "strikethrough"), U = () => T("[", "](https://)", "", { offsetStart: -9, offsetEnd: 8 }), D = () => T(`
> `, `
`, "Blockquote", {}), Q = () => T("![](", ")");
    function le(C) {
      const _ = ie();
      if (_ && !C.shiftKey)
        T("`", "`", "code");
      else {
        const P = s.lang || "js";
        _.indexOf(`
`) === -1 ? T("\n```" + P + `
`, "\n```\n", "// code") : T("```" + P + `
`, "```\n", "");
      }
    }
    function X() {
      if (Y()) {
        let { sel: C, selPos: _, beforeSel: P, afterSel: de, prevCRPos: F, beforeCR: V, afterCR: re } = N();
        if (C.indexOf(`
`) === -1)
          T(`
 1. `, `
`);
        else if (!C.startsWith(" 1. ")) {
          let R = 1;
          T("", "", " - ", {
            selectionAtEnd: !0,
            filterSelection: (j) => " 1. " + j.replace(/\n$/, "").replace(/\n/g, (me) => `
 ${++R}. `) + `
`
          });
        } else
          T("", "", "", {
            filterValue: (R, j) => {
              if (F >= 0) {
                let me = re.replace(/^ - /, "");
                P = V + me, j.pos -= re.length - me.length;
              }
              return P + de;
            },
            filterSelection: (R) => R.replace(/^ 1. /g, "").replace(/\n \d+. /g, `
`)
          });
      } else
        T(`
 1. `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function ee() {
      if (Y()) {
        let { sel: C, selPos: _, beforeSel: P, afterSel: de, prevCRPos: F, beforeCR: V, afterCR: re } = N();
        C.indexOf(`
`) === -1 ? T(`
 - `, `
`) : !C.startsWith(" - ") ? T("", "", " - ", {
          selectionAtEnd: !0,
          filterSelection: (R) => " - " + R.replace(/\n$/, "").replace(/\n/g, `
 - `) + `
`
        }) : T("", "", "", {
          filterValue: (R, j) => {
            if (F >= 0) {
              let me = re.replace(/^ - /, "");
              P = V + me, j.pos -= re.length - me.length;
            }
            return P + de;
          },
          filterSelection: (R) => R.replace(/^ - /g, "").replace(/\n - /g, `
`)
        });
      } else
        T(`
 - `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function S() {
      const C = ie(), _ = C.indexOf(`
`) === -1;
      C ? _ ? T(`
## `, `
`, "") : T("## ", "", "") : T(`
## `, `
`, "Heading", { offsetStart: -8, offsetEnd: 7 });
    }
    function te() {
      let { sel: C, selPos: _, beforeSel: P, afterSel: de, prevCRPos: F, beforeCR: V, afterCR: re } = N();
      !C.startsWith("//") && !re.startsWith("//") ? C ? T("", "", "//", {
        selectionAtEnd: !0,
        filterSelection: (fe) => "//" + fe.replace(/\n$/, "").replace(/\n/g, `
//`) + `
`
      }) : z({
        value: V + "//" + re + de,
        selectionStart: _ + 2
      }) : T("", "", "", {
        filterValue: (fe, R) => {
          if (F >= 0) {
            let j = re.replace(/^\/\//, "");
            P = V + j, R.pos -= re.length - j.length;
          }
          return P + de;
        },
        filterSelection: (fe) => fe.replace(/^\/\//g, "").replace(/\n\/\//g, `
`)
      });
    }
    const x = () => T(`/*
`, `*/
`, "");
    function G() {
      if (i.length === 0)
        return !1;
      const C = b.value, _ = i.pop();
      return r.push({ value: C.value, selectionStart: C.selectionStart, selectionEnd: C.selectionEnd }), z(_), !0;
    }
    function H() {
      if (r.length === 0)
        return !1;
      const C = b.value, _ = r.pop();
      return i.push({ value: C.value, selectionStart: C.selectionStart, selectionEnd: C.selectionEnd }), z(_), !0;
    }
    const Z = () => null;
    return Je(() => {
      i = [], r = [];
      const C = b.value;
      C.onkeydown = (_) => {
        if (_.key === "Escape" || _.keyCode === 27) {
          l("close");
          return;
        }
        const P = String.fromCharCode(_.keyCode).toLowerCase();
        P === "	" ? (!_.shiftKey ? T("", "", "    ", {
          selectionAtEnd: !0,
          filterSelection: (F) => "    " + F.replace(/\n$/, "").replace(/\n/g, `
    `) + `
`
        }) : T("", "", "", {
          filterValue: (F, V) => {
            let { selPos: re, beforeSel: ye, afterSel: fe, prevCRPos: R, beforeCR: j, afterCR: me } = N();
            if (R >= 0) {
              let Ce = me.replace(/\t/g, "    ").replace(/^ ? ? ? ?/, "");
              ye = j + Ce, V.pos -= me.length - Ce.length;
            }
            return ye + fe;
          },
          filterSelection: (F) => F.replace(/\t/g, "    ").replace(/^ ? ? ? ?/g, "").replace(/\n    /g, `
`)
        }), _.preventDefault()) : _.ctrlKey ? P === "z" ? _.shiftKey ? H() && _.preventDefault() : G() && _.preventDefault() : P === "b" && !_.shiftKey ? (W(), _.preventDefault()) : P === "h" && !_.shiftKey ? (S(), _.preventDefault()) : P === "i" && !_.shiftKey ? (O(), _.preventDefault()) : P === "q" && !_.shiftKey ? (D(), _.preventDefault()) : P === "k" ? _.shiftKey ? (Q(), _.preventDefault()) : (U(), _.preventDefault()) : P === "," || _.key === "<" || _.key === ">" || _.keyCode === 188 ? (le(_), _.preventDefault()) : P === "/" || _.key === "/" ? (te(), _.preventDefault()) : (P === "?" || _.key === "?") && _.shiftKey && (x(), _.preventDefault()) : _.altKey && (_.key === "1" || _.key === "0" ? (X(), _.preventDefault()) : _.key === "-" ? (ee(), _.preventDefault()) : _.key === "s" && (L(), _.preventDefault()));
      };
    }), (C, _) => {
      var P;
      return a(), u("div", null, [
        K(C.$slots, "header", Le({
          inputElement: b.value,
          id: e.id,
          modelValue: e.modelValue,
          status: e.status
        }, C.$attrs)),
        o(m) ? (a(), u("label", {
          key: 0,
          for: e.id,
          class: w(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, A(o(m)), 11, ov)) : k("", !0),
        e.disabled ? k("", !0) : (a(), u("div", av, [
          n("div", iv, [
            y("bold") ? (a(), u("svg", {
              key: 0,
              class: w(g),
              onClick: W,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, dv)) : k("", !0),
            y("italics") ? (a(), u("svg", {
              key: 1,
              class: w(g),
              onClick: O,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, mv)) : k("", !0),
            y("link") ? (a(), u("svg", {
              key: 2,
              class: w(g),
              onClick: U,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, gv)) : k("", !0),
            y("blockquote") ? (a(), u("svg", {
              key: 3,
              class: w(g),
              onClick: D,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, bv)) : k("", !0),
            y("image") ? (a(), u("svg", {
              key: 4,
              class: w(g),
              onClick: Q,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, kv)) : k("", !0),
            y("code") ? (a(), u("svg", {
              key: 5,
              class: w(g),
              onClick: le,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, _v)) : k("", !0),
            y("heading") ? (a(), u("svg", {
              key: 6,
              class: w(g),
              onClick: S,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Sv)) : k("", !0),
            y("orderedList") ? (a(), u("svg", {
              key: 7,
              class: w(g),
              icon: "",
              onClick: X,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Tv)) : k("", !0),
            y("unorderedList") ? (a(), u("svg", {
              key: 8,
              class: w(g),
              onClick: ee,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Dv)) : k("", !0),
            y("strikethrough") ? (a(), u("svg", {
              key: 9,
              class: w(g),
              onClick: L,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Pv)) : k("", !0),
            y("undo") ? (a(), u("svg", {
              key: 10,
              class: w(g),
              onClick: G,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Hv)) : k("", !0),
            y("redo") ? (a(), u("svg", {
              key: 11,
              class: w(g),
              onClick: H,
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Nv)) : k("", !0),
            K(C.$slots, "toolbarbuttons", {
              instance: (P = Be()) == null ? void 0 : P.exposed
            })
          ]),
          y("help") && e.helpUrl ? (a(), u("div", Uv, [
            n("a", {
              title: "formatting help",
              target: "_blank",
              href: e.helpUrl,
              tabindex: "-1"
            }, [
              (a(), u("svg", {
                class: w(g),
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }, Kv))
            ], 8, qv)
          ])) : k("", !0)
        ])),
        n("div", Zv, [
          n("textarea", {
            ref_key: "txt",
            ref: b,
            name: e.id,
            id: e.id,
            class: w(o(v)),
            label: e.label,
            value: e.modelValue,
            rows: e.rows || 6,
            disabled: e.disabled,
            onInput: _[0] || (_[0] = (de) => {
              var F;
              return B(((F = de.target) == null ? void 0 : F.value) || "");
            }),
            onKeydown: qn(Z, ["tab"])
          }, null, 42, Gv)
        ]),
        o(c) ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, A(o(c)), 9, Wv)) : e.help ? (a(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, A(e.help), 9, Jv)) : k("", !0),
        K(C.$slots, "footer", Le({
          inputElement: b.value,
          id: e.id,
          modelValue: e.modelValue,
          status: e.status
        }, C.$attrs))
      ]);
    };
  }
}), Yv = {
  key: 0,
  class: "relative z-10 lg:hidden",
  role: "dialog",
  "aria-modal": "true"
}, eh = { class: "fixed inset-0 flex" }, th = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close sidebar", -1), lh = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6 text-white",
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
], -1), nh = [
  th,
  lh
], sh = { class: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2" }, oh = { class: "hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col" }, ah = { class: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6" }, ih = {
  class: /* @__PURE__ */ w(["sticky top-0 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden"])
}, rh = /* @__PURE__ */ n("span", { class: "sr-only" }, "Open sidebar", -1), uh = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  })
], -1), dh = [
  rh,
  uh
], ch = /* @__PURE__ */ ue({
  __name: "SidebarLayout",
  setup(e, { expose: t }) {
    const { transition: l } = ls(), s = M(!0), i = M(""), r = {
      entering: { cls: "transition-opacity ease-linear duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "transition-opacity ease-linear duration-300", from: "opacity-100", to: "opacity-0" }
    }, d = M(""), c = {
      entering: { cls: "transition ease-in-out duration-300 transform", from: "-translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transition ease-in-out duration-300 transform", from: "translate-x-0", to: "-translate-x-full" }
    }, m = M(""), h = {
      entering: { cls: "ease-in-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in-out duration-300", from: "opacity-100", to: "opacity-0" }
    };
    function p(g) {
      l(r, i, g), l(c, d, g), l(h, m, g), setTimeout(() => s.value = g, 300);
    }
    function y() {
      p(!0);
    }
    function v() {
      p(!1);
    }
    return t({ show: y, hide: v, toggle: p }), (g, b) => (a(), u("div", null, [
      s.value ? (a(), u("div", Yv, [
        n("div", {
          class: w(["fixed inset-0 bg-gray-900/80", i.value])
        }, null, 2),
        n("div", eh, [
          n("div", {
            class: w(["relative mr-16 flex w-full max-w-xs flex-1", d.value])
          }, [
            n("div", {
              class: w(["absolute left-full top-0 flex w-16 justify-center pt-5", m.value])
            }, [
              n("button", {
                type: "button",
                onClick: v,
                class: "-m-2.5 p-2.5"
              }, nh)
            ], 2),
            n("div", sh, [
              K(g.$slots, "default")
            ])
          ], 2)
        ])
      ])) : k("", !0),
      n("div", oh, [
        n("div", ah, [
          K(g.$slots, "default")
        ])
      ]),
      n("div", ih, [
        n("button", {
          type: "button",
          onClick: y,
          class: "-m-2.5 p-2.5 text-gray-700 lg:hidden"
        }, dh),
        K(g.$slots, "mobiletitlebar")
      ])
    ]));
  }
}), fh = {
  Alert: Do,
  AlertSuccess: Qo,
  ErrorSummary: Jo,
  InputDescription: Yo,
  Icon: Ps,
  Loading: qa,
  OutlineButton: Za,
  PrimaryButton: Ja,
  SecondaryButton: ei,
  TextLink: li,
  Breadcrumbs: ri,
  Breadcrumb: mi,
  NavList: gi,
  NavListItem: Vi,
  AutoQueryGrid: Wu,
  SettingsIcons: dd,
  FilterViews: $n,
  FilterColumn: kn,
  QueryPrefs: Cn,
  EnsureAccess: Rs,
  EnsureAccessDialog: cd,
  TextInput: xd,
  TextareaInput: Sd,
  SelectInput: Dd,
  CheckboxInput: zd,
  TagInput: cc,
  FileInput: Dc,
  Autocomplete: Wc,
  Combobox: Yc,
  DynamicInput: e0,
  LookupInput: g0,
  AutoFormFields: p0,
  AutoForm: H0,
  AutoCreateForm: df,
  AutoEditForm: If,
  ConfirmDelete: jf,
  FormLoading: zf,
  DataGrid: Kf,
  CellFormat: Zf,
  PreviewFormat: e1,
  HtmlFormat: o1,
  CloseButton: d1,
  SlideOver: C1,
  ModalDialog: T1,
  ModalLookup: Cm,
  Tabs: Im,
  DarkModeToggle: Bm,
  SignIn: sv,
  MarkdownInput: Xv,
  SidebarLayout: ch
}, Pl = fh, bh = {
  install(e) {
    Object.keys(Pl).forEach((l) => {
      e.component(l, Pl[l]);
    });
    function t(l) {
      const i = Object.keys(l).filter((r) => l[r]).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(l[r])}`).join("&");
      return i ? "?" + i : "./";
    }
    e.directive("href", function(l, s) {
      l.href = t(s.value), l.onclick = (i) => {
        i.preventDefault(), history.pushState(s.value, "", t(s.value));
      };
    });
  },
  component(e, t) {
    return e ? t ? ae.components[e] = t : ae.components[e] || Pl[e] || null : null;
  }
};
export {
  yh as css,
  bh as default,
  xn as useAuth,
  Ml as useClient,
  St as useConfig,
  gh as useFiles,
  ph as useFormatters,
  ot as useMetadata,
  ls as useUtils
};
