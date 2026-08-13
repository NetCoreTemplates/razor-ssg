import { computed as f, inject as Pe, defineComponent as pe, openBlock as o, createElementBlock as u, mergeProps as xe, withModifiers as Ee, renderSlot as W, ref as M, shallowRef as Zl, nextTick as jt, isRef as oa, unref as ae, provide as It, watchEffect as rl, normalizeClass as k, createElementVNode as s, createCommentVNode as $, toDisplayString as S, h as Rt, resolveComponent as N, createBlock as J, withCtx as we, useAttrs as No, createVNode as me, createTextVNode as ve, normalizeStyle as Un, createStaticVNode as sn, Fragment as ye, renderList as be, withDirectives as Ot, vModelCheckbox as Kn, withKeys as an, vModelSelect as Ro, markRaw as Ho, useSlots as ml, getCurrentInstance as Fe, onMounted as ze, createSlots as Qn, normalizeProps as Xl, guardReactiveProps as Yl, vModelDynamic as qo, onUnmounted as Jt, watch as lt, vModelText as ra, resolveDynamicComponent as Jn, resolveDirective as zo, reactive as ia, Teleport as ua } from "vue";
import { lastRightPart as Kt, leftPart as on, toDate as xt, map as qe, mapGet as ce, toCamelCase as Uo, toDateTime as Ko, chop as Qo, isDate as rn, dateFmt as Jo, fromXsdDuration as da, timeFmt12 as Go, omit as ht, appendQueryString as il, indexOfAny as Wo, apiValue as Zo, enc as Ln, createBus as Xo, toKebabCase as Es, toTime as Yo, lastLeftPart as ca, setQueryString as _o, ApiResult as tt, nameOf as er, ResponseStatus as kn, ResponseError as Ds, sanitize as tr, errorResponseExcept as lr, humanize as Te, delaySet as fa, rightPart as Ul, queryString as Vn, combinePaths as nr, toPascalCase as pt, errorResponse as $t, trimEnd as sr, $1 as _l, HttpMethods as Gn, omitEmpty as ar, uniqueKeys as en, humanify as Sl, each as or, JsonServiceClient as rr } from "@servicestack/client";
const ma = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), va = {
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
}, Ns = Object.keys(va), kt = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, Kl = {
  img: kt("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: kt("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: kt("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: kt("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: kt("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: kt("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: kt("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: kt("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: kt("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, ir = /[\r\n%#()<>?[\\\]^`{|}]/g, Rs = 1024, ur = ["Bytes", "KB", "MB", "GB", "TB"], dr = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", l = "image/", n = "text/", a = "audio/", d = "video/", i = {
    jpg: l + "jpeg",
    tif: l + "tiff",
    svg: l + "svg+xml",
    ico: l + "x-icon",
    ts: n + "typescript",
    py: n + "x-python",
    sh: n + "x-sh",
    mp3: a + "mpeg3",
    mpg: d + "mpeg",
    ogv: d + "ogg",
    xlsx: t + "spreadsheetml.sheet",
    xltx: t + "spreadsheetml.template",
    docx: t + "wordprocessingml.document",
    dotx: t + "wordprocessingml.template",
    pptx: t + "presentationml.presentation",
    potx: t + "presentationml.template",
    ppsx: t + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function r(v, m) {
    v.split(",").forEach((b) => i[b] = m);
  }
  function c(v, m) {
    v.split(",").forEach((b) => i[b] = m(b));
  }
  return c("jpeg,gif,png,tiff,bmp,webp", (v) => l + v), c("jsx,csv,css", (v) => n + v), c("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (v) => a + v), c("3gpp,avi,dv,divx,ogg,mp4,webm", (v) => d + v), c("rtf,pdf", (v) => e + v), r("htm,html,shtm", n + "html"), r("js,mjs,cjs", n + "javascript"), r("yml,yaml", e + "yaml"), r("bat,cmd", e + "bat"), r("xml,csproj,fsproj,vbproj", n + "xml"), r("txt,ps1", n + "plain"), r("qt,mov", d + "quicktime"), r("doc,dot", e + "msword"), r("xls,xlt,xla", e + "excel"), r("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), r("cer,crt,der", e + "x-x509-ca-cert"), r("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), r("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), i;
})();
let An = [];
function pa(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(ir, encodeURIComponent);
}
function Wn(e) {
  return "data:image/svg+xml;utf8," + pa(e);
}
function ga(e) {
  let t = URL.createObjectURL(e);
  return An.push(t), t;
}
function ya() {
  An.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), An = [];
}
function Zn(e) {
  if (!e) return null;
  let t = on(e, "?");
  return Kt(t, "/");
}
function Ol(e) {
  let t = Zn(e);
  return t == null || t.indexOf(".") === -1 ? null : Kt(t, ".").toLowerCase();
}
function Xn(e) {
  let t = Ol(e.name);
  return t && ma.indexOf(t) >= 0 ? ga(e) : Ht(e.name);
}
function Yn(e) {
  if (!e) return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = Ol(e);
  return t && ma.indexOf(t) >= 0 || !1;
}
function Ht(e) {
  if (!e) return null;
  let t = Ol(e);
  return t == null || Yn(e) ? e : kl(t) || Wn(Kl.doc);
}
function kl(e) {
  let t = ha(e);
  return t && Wn(t) || null;
}
function ha(e) {
  if (Kl[e])
    return Kl[e];
  for (let t = 0; t < Ns.length; t++) {
    let l = Ns[t];
    if (va[l].indexOf(e) >= 0)
      return Kl[l];
  }
  return null;
}
function _n(e, t = 2) {
  if (e === 0) return "0 Bytes";
  const l = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(Rs));
  return parseFloat((e / Math.pow(Rs, n)).toFixed(l)) + " " + ur[n];
}
function cr(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: Xn(t) }));
}
function un(e, t) {
  e.onerror = null, e.src = es(e.src, t) || "";
}
function es(e, t) {
  return kl(Kt(e, ".").toLowerCase()) || (t ? kl(t) || t : null) || kl("doc");
}
function Mn(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = Kt(e, ".").toLowerCase();
  return dr[t] || "application/" + t;
}
function fr() {
  return {
    extSvg: ha,
    extSrc: kl,
    getExt: Ol,
    encodeSvg: pa,
    canPreview: Yn,
    getFileName: Zn,
    getMimeType: Mn,
    formatBytes: _n,
    filePathUri: Ht,
    svgToDataUri: Wn,
    fileImageUri: Xn,
    objectUrl: ga,
    flush: ya,
    inputFiles: cr,
    iconOnError: un,
    iconFallbackSrc: es
  };
}
class mr {
  view;
  includeTypes;
  constructor(t) {
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
const ul = "/metadata/app.json", vr = {
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
}, pr = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, Tn = {
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
[...Object.keys(Tn), ...Object.values(Tn)];
const gr = {
  String: "string",
  Boolean: "bool",
  ...Tn
};
function Nl(e) {
  return gr[e] || e;
}
function ba(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? Nl(t[0]) + "?" : e.endsWith("[]") ? `List<${Nl(e.substring(0, e.length - 2))}>` : t.length === 0 ? Nl(e) : on(Nl(e), "`") + "<" + t.join(",") + ">") : "";
}
function yr(e) {
  return e && ba(e.name, e.genericArgs);
}
class Mt {
  Query;
  QueryInto;
  Create;
  Update;
  Patch;
  Delete;
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  get dataModel() {
    return this.AnyQuery?.dataModel;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((l) => !!l).map((l) => l);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    He.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : He.isQuery(t) && !this.Query ? this.Query = t : He.isCreate(t) && !this.Create ? this.Create = t : He.isUpdate(t) && !this.Update ? this.Update = t : He.isPatch(t) && !this.Patch ? this.Patch = t : He.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const l = new Mt();
    return t.forEach((n) => {
      l.add(n);
    }), l;
  }
  static forType(t, l) {
    let n = new Mt();
    if (Y.config.apisResolver && t) {
      const a = Y.config.apisResolver(t, l);
      a && (n.Query = a.Query, n.QueryInto = a.QueryInto, n.Create = a.Create, n.Update = a.Update, n.Patch = a.Patch, n.Delete = a.Delete);
    }
    return t && (l ??= Y.metadata.value?.api, l?.operations.forEach((a) => {
      a.dataModel?.name == t && n.add(a);
    })), n;
  }
  /** Build a type context bundle for AQ components */
  static createContext(t) {
    const l = t.id || "AutoQueryGrid";
    let n = t.type;
    const a = sl(t.apis);
    !n && t.apis && a.length > 0 && (n = Ut(a[0])?.dataModel?.name);
    const d = t.metadataApi ?? Y.metadata.value?.api, i = t.filterDefinitions ?? (Y.metadata.value?.plugins?.autoQuery?.viewerConventions || Y.filterDefinitions), r = Gt(n);
    console.log("createContext", l, n, t.apis, r, a);
    const c = a.length > 0 ? Mt.from(a.map((h) => Ut(h)).filter((h) => h != null).map((h) => h)) : Mt.forType(r, d), v = r || c.AnyQuery?.dataModel?.name, m = v ?? "", b = nt(v), w = ot(b), g = nt(v), p = ot(g), x = vl(g), y = a.map((h) => Ut(h) == null ? h : null).filter((h) => h != null);
    return {
      typeName: r,
      dataModel: g,
      dataModelName: v,
      viewModel: b,
      viewModelProps: w,
      dataModelProps: p,
      dataModelPrimaryKey: x,
      apis: c,
      opNames: a,
      invalidApis: y,
      metadataApi: d,
      filterDefinitions: i,
      prefsCacheKey: () => `${l}/ApiPrefs/${m}`,
      columnCacheKey: (h) => `Column/${l}:${m}.${h}`
    };
  }
}
const He = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => qe(e.request.inherits, (t) => He.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => qe(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => qe(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => e.request.implements?.some((t) => He.AnyWrite.indexOf(t.name) >= 0),
  isCreate: (e) => Rl(e, He.Create),
  isUpdate: (e) => Rl(e, He.Update),
  isPatch: (e) => Rl(e, He.Patch),
  isDelete: (e) => Rl(e, He.Delete),
  model: (e) => e ? qe(e.inherits, (t) => He.AnyRead.indexOf(t.name) >= 0) ? e.inherits?.genericArgs[0] : e.implements?.find((t) => He.AnyWrite.indexOf(t.name) >= 0)?.genericArgs[0] : null
};
function hr(e) {
  return e.input?.type || dn(ts(e));
}
function wa(e) {
  return e.endsWith("?") ? Qo(e, 1) : e;
}
function dn(e) {
  return vr[wa(e)];
}
function br(e) {
  return e && pr[e] || "String";
}
function ts(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function jn(e) {
  return e && dn(e) == "number" || !1;
}
function ka(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function wr(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function xa(e) {
  if (!e?.type) return !1;
  const t = ts(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : dn(e.type) == null;
}
function $a(e) {
  if (!e?.type) return !1;
  const t = ts(e);
  if (e.isValueType && t.indexOf("`") == -1 || e.isEnum) return !0;
  const l = e.input?.type;
  return l && (l == "hidden" || l == "file" || l == "tag" || l == "combobox" || Y.components?.[l]) ? !0 : dn(e.type) != null;
}
function Ll(e, t) {
  let l = typeof e == "string" ? Ut(e) : e;
  l || (console.warn(`Metadata not found for: ${e}`), l = { request: { name: e } });
  let n = (
    /** @class */
    /* @__PURE__ */ (function() {
      return function(d) {
        Object.assign(this, d);
      };
    })()
  ), a = (
    /** @class */
    (function() {
      function d(i) {
        Object.assign(this, i);
      }
      return d.prototype.createResponse = function() {
        return l.returnsVoid ? void 0 : new n();
      }, d.prototype.getTypeName = function() {
        return l.request.name;
      }, d.prototype.getMethod = function() {
        return l.method || "POST";
      }, d;
    })()
  );
  return new a(t);
}
function kr(e, t, l = {}) {
  let n = (
    /** @class */
    /* @__PURE__ */ (function() {
      return function(d) {
        Object.assign(this, d);
      };
    })()
  ), a = (
    /** @class */
    (function() {
      function d(i) {
        Object.assign(this, i);
      }
      return d.prototype.createResponse = function() {
        return typeof l.createResponse == "function" ? l.createResponse() : new n();
      }, d.prototype.getTypeName = function() {
        return e;
      }, d.prototype.getMethod = function() {
        return l.method || "POST";
      }, d;
    })()
  );
  return new a(t);
}
function xl(e, t) {
  return e ? (Object.keys(e).forEach((l) => {
    let n = e[l];
    typeof n == "string" ? n.startsWith("/Date") && (e[l] = mn(xt(n))) : n != null && typeof n == "object" && (Array.isArray(n) ? e[l] = Array.from(n) : e[l] = Object.assign({}, n));
  }), e) : {};
}
function xr(e, t) {
  let l = {};
  return Array.from(e.elements).forEach((n) => {
    let a = n;
    if (!a.id || a.value == null || a.value === "") return;
    const d = a.id.toLowerCase(), i = t && t.find((m) => m.name.toLowerCase() == d);
    let r = i?.type, c = i?.genericArgs?.[0], v = a.type === "checkbox" ? a.checked : a.value;
    jn(r) ? v = Number(v) : r === "List`1" && typeof v == "string" && (v = v.split(",").map((m) => jn(c) ? Number(m) : m)), l[a.id] = v;
  }), l;
}
function ls(e) {
  return e?.api?.operations && e.api.operations.length > 0;
}
function $r(e) {
  if (!ns() && e?.assert && !Y.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return Y.metadata.value;
}
function Vl(e) {
  return e && ls(e) ? (e.date = Ko(/* @__PURE__ */ new Date()), Y.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(ul, JSON.stringify(e)), !0) : !1;
}
function Cr() {
  Y.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(ul);
}
function ns() {
  if (Y.metadata.value != null) return !0;
  let e = globalThis.Server;
  if (ls(e))
    Vl(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(ul) : null;
    if (t)
      try {
        Vl(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${ul} from localStorage`);
      }
  }
  return Y.metadata.value != null;
}
async function Hs(e, t) {
  let l = t ? await t() : await fetch(e);
  if (l.ok) {
    let n = await l.text();
    Vl(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${l.statusText}`);
  ls(Y.metadata.value) || console.warn("AppMetadata is not available");
}
async function Sr(e) {
  const { olderThan: t, resolvePath: l, resolve: n } = e || {};
  let a = ns() && t !== 0;
  if (a && t) {
    let d = xt(Y.metadata.value?.date);
    (!d || (/* @__PURE__ */ new Date()).getTime() - d.getTime() > t) && (a = !1);
  }
  if (!a) {
    const d = e.client ?? Pe("client");
    await Lr({ client: d, resolvePath: l, resolve: n });
  }
  return Y.metadata.value;
}
async function Lr(e) {
  const { client: t, resolvePath: l, resolve: n } = e;
  if (!((l || n) && (await Hs(l || ul, n), Y.metadata.value != null))) {
    if (t != null) {
      const a = await t.api(new mr());
      a.succeeded && Vl(a.response);
    }
    if (Y.metadata.value == null)
      return await Hs(ul), Y.metadata.value;
  }
}
function nt(e, t) {
  if (Y.config.typeResolver) {
    let i = Y.config.typeResolver(e, t);
    if (i) return i;
  }
  let l = Y.metadata.value?.api;
  if (!l || !e) return null;
  let n = l.types.find((i) => i.name.toLowerCase() === e.toLowerCase() && (!t || i.namespace == t));
  if (n) return n;
  let a = Ut(e);
  if (a) return a.request;
  let d = l.operations.find((i) => i.response && i.response.name.toLowerCase() === e.toLowerCase() && (!t || i.response.namespace == t));
  return d ? d.response : null;
}
function Ut(e) {
  if (Y.config.apiResolver) {
    const n = Y.config.apiResolver(e);
    if (n) return n;
  }
  let t = Y.metadata.value?.api;
  return t ? t.operations.find((n) => n.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function Vr({ dataModel: e }) {
  const t = Y.metadata.value?.api;
  if (!t) return [];
  let l = t.operations;
  if (e) {
    const n = typeof e == "string" ? nt(e) : e;
    l = l.filter((a) => Ca(a.dataModel, n));
  }
  return l;
}
function ss(e) {
  return e ? nt(e.name, e.namespace) : null;
}
function Ca(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function Ar(e, t) {
  let l = nt(e);
  return l && l.properties && l.properties.find((a) => a.name.toLowerCase() === t.toLowerCase());
}
function Sa(e) {
  return La(nt(e));
}
function La(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let t = {};
    for (let l = 0; l < e.enumNames.length; l++) {
      const n = (e.enumDescriptions ? e.enumDescriptions[l] : null) || e.enumNames[l], a = (e.enumValues != null ? e.enumValues[l] : null) || e.enumNames[l];
      t[a] = n;
    }
    return t;
  }
  return null;
}
function Va(e) {
  if (!e) return null;
  let t = {}, l = e.input && e.input.allowableEntries;
  if (l) {
    for (let a = 0; a < l.length; a++) {
      let d = l[a];
      t[d.key] = d.value;
    }
    return t;
  }
  let n = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (n) {
    for (let a = 0; a < n.length; a++) {
      let d = n[a];
      t[d] = d;
    }
    return t;
  }
  if (e.isEnum) {
    const a = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, d = nt(a);
    if (d)
      return La(d);
  }
  return null;
}
function as(e) {
  if (!e) return;
  const t = [];
  return Object.keys(e).forEach((l) => t.push({ key: l, value: e[l] })), t;
}
function Mr(e, t) {
  const n = ((a, d) => Object.assign({
    id: a,
    name: a,
    type: d
  }, t))(e.name, t?.type || hr(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = as(Va(e))), n;
}
function Tr(e) {
  let t = [];
  if (e) {
    const l = ot(e), n = Ut(e.name), a = ss(n?.dataModel);
    l.forEach((d) => {
      if (!$a(d)) return;
      const i = Mr(d, d.input);
      if (i.id = Uo(i.id), i.type == "file" && d.uploadTo && !i.accept) {
        const r = Y.metadata.value?.plugins.filesUpload?.locations.find((c) => c.name == d.uploadTo);
        r && !i.accept && r.allowExtensions && (i.accept = r.allowExtensions.map((c) => c.startsWith(".") ? c : `.${c}`).join(","));
      }
      if (a) {
        const r = a.properties?.find((c) => c.name == d.name);
        d.ref || (d.ref = r?.ref);
      }
      if (i.options)
        try {
          const r = {
            input: i,
            $typeFields: l.map((v) => v.name),
            $dataModelFields: a ? ot(a).map((v) => v.name) : [],
            ...Y.config.scopeWhitelist
          }, c = Il(i.options, r);
          Object.keys(c).forEach((v) => {
            i[v] = c[v];
          });
        } catch {
          console.error(`failed to evaluate '${i.options}'`);
        }
      t.push(i);
    });
  }
  return t;
}
function os(e, t) {
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const l = nt(t.type);
  if (!l?.enumValues)
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let a = 0; a < l.enumValues.length; a++) {
    const d = parseInt(l.enumValues[a]);
    d > 0 && (d & e) === d && n.push(l.enumDescriptions?.[a] || l.enumNames?.[a] || `${e}`);
  }
  return n;
}
function Aa(e) {
  return (t) => typeof t == "number" ? os(t, { type: e }) : t;
}
function ot(e) {
  if (!e) return [];
  let t = [], l = {};
  function n(a) {
    a.forEach((d) => {
      l[d.name] || (l[d.name] = 1, t.push(d));
    });
  }
  for (; e; )
    e.properties && n(e.properties), e = e.inherits ? ss(e.inherits) : null;
  return t.map((a) => a.type.endsWith("[]") ? { ...a, type: "List`1", genericArgs: [a.type.substring(0, a.type.length - 2)] } : a);
}
function Rl(e, t) {
  return e.request.implements?.some((l) => l.name === t) || !1;
}
function vl(e) {
  return e ? Ma(e, ot(e)) : null;
}
function Ma(e, t) {
  let l = t.find((d) => d.name.toLowerCase() === "id");
  if (l && l.isPrimaryKey) return l;
  let a = t.find((d) => d.isPrimaryKey) || l;
  if (!a) {
    let d = He.model(e);
    if (d)
      return qe(nt(d), (i) => vl(i));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return a || null;
}
function jr(e, t) {
  return qe(vl(e), (l) => ce(t, l.name));
}
function Ta(e, t, l) {
  return e && e.valueType === "none" ? "" : l.key === "%In" || l.key === "%Between" ? `(${l.value})` : Or(t, l.value);
}
function Or(e, t) {
  return e ? (e = wa(e), jn(e) || e === "Boolean" ? t : wr(e) ? `[${t}]` : `'${t}'`) : t;
}
function bt() {
  const e = f(() => Y.metadata.value?.app || null), t = f(() => Y.metadata.value?.api || null), l = f(() => Y.metadata.value?.plugins?.autoQuery?.viewerConventions || Y.filterDefinitions);
  return ns(), {
    loadMetadata: Sr,
    getMetadata: $r,
    setMetadata: Vl,
    clearMetadata: Cr,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: l,
    typeOf: nt,
    typeOfRef: ss,
    typeEquals: Ca,
    apiOf: Ut,
    findApis: Vr,
    typeName: yr,
    typeName2: ba,
    property: Ar,
    enumOptions: Sa,
    propertyOptions: Va,
    createFormLayout: Tr,
    typeProperties: ot,
    supportsProp: $a,
    Crud: He,
    Apis: Mt,
    getPrimaryKey: vl,
    getPrimaryKeyByProps: Ma,
    getId: jr,
    createDto: Ll,
    makeDto: kr,
    toFormValues: xl,
    formValues: xr,
    isComplexProp: xa,
    asKvps: as,
    expandEnumFlags: os,
    enumFlagsConverter: Aa
  };
}
class _e {
  static Lookup = {};
  static async getOrFetchValue(t, l, n, a, d, i, r) {
    const c = _e.getValue(n, r, d);
    return c ?? (await _e.fetchLookupIds(t, l, n, a, d, i, [r]), _e.getValue(n, r, d));
  }
  static getValue(t, l, n) {
    const a = _e.Lookup[t];
    if (a) {
      const d = a[l];
      if (d)
        return n = n.toLowerCase(), d[n];
    }
  }
  static setValue(t, l, n, a) {
    const d = _e.Lookup[t] ?? (_e.Lookup[t] = {}), i = d[l] ?? (d[l] = {});
    n = n.toLowerCase(), i[n] = a;
  }
  static setRefValue(t, l) {
    const n = ce(l, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const a = ce(l, t.refLabel);
    return _e.setValue(t.model, n, t.refLabel, a), a;
  }
  static async fetchLookupIds(t, l, n, a, d, i, r) {
    const c = l.operations.find((v) => He.isAnyQuery(v) && v.dataModel?.name == n);
    if (c) {
      const v = _e.Lookup[n] ?? (_e.Lookup[n] = {}), m = [];
      Object.keys(v).forEach((y) => {
        const h = v[y];
        ce(h, d) && m.push(y);
      });
      const b = r.filter((y) => !m.includes(y));
      if (b.length == 0)
        return;
      const w = i ? null : `${a},${d}`, g = {
        [a + "In"]: b.join(",")
      };
      w && (g.fields = w);
      const p = Ll(c, g), x = await t.api(p, { jsconfig: "edv,eccn" });
      if (x.succeeded)
        (ce(x.response, "results") || []).forEach((h) => {
          if (!ce(h, a)) {
            console.error(`result[${a}] == null`, h);
            return;
          }
          const T = `${ce(h, a)}`, O = ce(h, d);
          d = d.toLowerCase();
          const E = v[T] ?? (v[T] = {});
          E[d] = `${O}`;
        });
      else {
        console.error(`Failed to call ${c.request.name}`);
        return;
      }
    }
  }
}
let On = () => (/* @__PURE__ */ new Date()).getTime(), Fr = ["/", "T", ":", "-"], gt = {
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
}, Ir = new Intl.RelativeTimeFormat(gt.locale, {}), qs = 1440 * 60 * 1e3 * 365, xn = {
  year: qs,
  month: qs / 12,
  day: 1440 * 60 * 1e3,
  hour: 3600 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, qt = {
  currency: Oa,
  bytes: Fa,
  link: Ia,
  linkTel: Pa,
  linkMailTo: Ba,
  icon: Ea,
  iconRounded: Da,
  attachment: Na,
  hidden: Ra,
  time: Ha,
  relativeTime: is,
  relativeTimeFromMs: cn,
  enumFlags: za,
  formatDate: pl,
  formatNumber: rs
};
"iconOnError" in globalThis || (globalThis.iconOnError = un);
let Pr = class {
  static currency = { method: "currency" };
  static bytes = { method: "bytes" };
  static link = { method: "link" };
  static linkTel = { method: "linkTel" };
  static linkMailTo = { method: "linkMailTo" };
  static icon = { method: "icon" };
  static iconRounded = { method: "iconRounded" };
  static attachment = { method: "attachment" };
  static time = { method: "time" };
  static relativeTime = { method: "relativeTime" };
  static relativeTimeFromMs = { method: "relativeTimeFromMs" };
  static date = { method: "formatDate" };
  static number = { method: "formatNumber" };
  static hidden = { method: "hidden" };
  static enumFlags = { method: "enumFlags" };
};
function Br(e) {
  gt = Object.assign({}, gt, e);
}
function Er(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (qt[t] = e[t]);
  });
}
function ja() {
  return qt;
}
function Fl(e, t) {
  return t ? yt("span", e, t) : e;
}
function Oa(e, t) {
  const l = ht(t, ["currency"]);
  return Fl(new Intl.NumberFormat(void 0, { style: "currency", currency: t?.currency || "USD" }).format(e), l);
}
function Fa(e, t) {
  return Fl(_n(e), t);
}
function Ia(e, t) {
  return yt("a", e, vn({ ...t, href: e }));
}
function Pa(e, t) {
  return yt("a", e, vn({ ...t, href: `tel:${e}` }));
}
function Ba(e, t) {
  t || (t = {});
  let { subject: l, body: n } = t, a = ht(t, ["subject", "body"]), d = {};
  return l && (d.subject = l), n && (d.body = n), yt("a", e, vn({ ...a, href: `mailto:${il(e, d)}` }));
}
function Ea(e, t) {
  return yt("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: nl(e), onerror: "iconOnError(this)" }, t));
}
function Da(e, t) {
  return yt("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: nl(e), onerror: "iconOnError(this)" }, t));
}
function Na(e, t) {
  let l = Zn(e), a = Ol(l) == null || Yn(e) ? nl(e) : es(e);
  const d = nl(a);
  let i = t && (t["icon-class"] || t.iconClass), r = yt("img", void 0, Object.assign({ class: "w-6 h-6", src: d, onerror: "iconOnError(this,'att')" }, i ? { class: i } : null)), c = `<span class="pl-1">${l}</span>`;
  return yt("a", r + c, Object.assign({ class: "flex", href: nl(e), title: e }, t ? ht(t, ["icon-class", "iconClass"]) : null));
}
function Ra(e) {
  return "";
}
function Ha(e, t) {
  let l = typeof e == "string" ? new Date(da(e) * 1e3) : rn(e) ? xt(e) : null;
  return Fl(l ? Go(l) : e, t);
}
function pl(e, t) {
  if (e == null) return "";
  let l = typeof e == "number" ? new Date(e) : typeof e == "string" ? xt(e) : e;
  if (!rn(l))
    return console.warn(`${l} is not a Date value`), e == null ? "" : `${e}`;
  let n = gt.date ? fn(gt.date) : null;
  return Fl(typeof n == "function" ? n(l) : Jo(l), t);
}
function rs(e, t) {
  if (typeof e != "number") return e;
  let l = gt.number ? fn(gt.number) : null, n = typeof l == "function" ? l(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, l), n = `${e}`), Fl(n, t);
}
function Ql(e) {
  const t = Math.floor(e / 1e3), l = Math.floor(t / 60), n = Math.floor(l / 60), a = Math.floor(n / 24);
  return a > 0 ? `${a}d ${Ql(e - a * 24 * 60 * 6e4)}` : n > 0 ? `${n}h ${Ql(e - n * 60 * 6e4)}` : l > 0 ? `${l}m ${Ql(e - l * 6e4)}` : t > 0 ? `${t}s` : `${e}ms`;
}
function Dr(e) {
  return e >= 1e9 ? (e / 1e9).toFixed(1) + "b" : e >= 1e6 ? (e / 1e6).toFixed(1) + "m" : e >= 1e3 ? (e / 1e3).toFixed(1) + "k" : e.toLocaleString();
}
function qa(e, t, l) {
  let n = Zo(e), a = t ? fn(t) : null;
  if (typeof a == "function") {
    let i = l;
    if (t?.options)
      try {
        i = Il(t.options, l);
      } catch (r) {
        console.error(`Could not evaluate '${t.options}'`, r, ", with scope:", l);
      }
    return a(e, i);
  }
  let d = n != null ? rn(n) ? pl(n, l) : typeof n == "number" ? rs(n, l) : n : null;
  return d ?? "";
}
function Al(e, t, l) {
  return Qt(e) ? qa(e, t, l) : zr(e, t, l);
}
function Nr(e) {
  if (e == null) return NaN;
  if (typeof e == "number")
    return e;
  if (rn(e))
    return e.getTime() - On();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return da(e) * 1e3 * -1;
    if (Wo(e, Fr) >= 0)
      return xt(e).getTime() - On();
  }
  return NaN;
}
function cn(e, t) {
  for (let l in xn)
    if (Math.abs(e) > xn[l] || l === "second")
      return (t || Ir).format(Math.round(e / xn[l]), l);
}
function is(e, t) {
  let l = Nr(e);
  return isNaN(l) ? "" : cn(l, t);
}
function Rr(e, t) {
  return cn(e.getTime() - (t ? t.getTime() : On()));
}
function za(e, t) {
  return os(e, t).join(", ");
}
function fn(e) {
  if (!e) return null;
  let { method: t, options: l } = e, n = `${t}(${l})`, a = qt[n] || qt[t];
  if (typeof a == "function") return a;
  let d = e.locale || gt.locale;
  if (t.startsWith("Intl.")) {
    let i = d ? `'${d}'` : "undefined", r = `return new ${t}(${i},${l || "undefined"})`;
    try {
      let c = Function(r)();
      return a = t === "Intl.DateTimeFormat" ? (v) => c.format(xt(v)) : t === "Intl.NumberFormat" ? (v) => c.format(Number(v)) : t === "Intl.RelativeTimeFormat" ? (v) => is(v, c) : (v) => c.format(v), qt[n] = a;
    } catch (c) {
      console.error(`Invalid format: ${r}`, c);
    }
  } else {
    let i = globalThis[t];
    if (typeof i == "function") {
      let r = l != null ? Function("return " + l)() : void 0;
      return a = (c) => i(c, r, d), qt[n] = a;
    }
    console.error(`No '${t}' function exists`, Object.keys(qt));
  }
  return null;
}
function Ua(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Ka(e) {
  return e.substring(0, 6) === "/Date(" ? pl(xt(e)) : e;
}
function Hr(e) {
  return us(dl(e)).replace(/"/g, "");
}
function Qa(e) {
  if (e == null || e === "") return "";
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      console.warn("couldn't parse as JSON", e);
    }
  return e;
}
function us(e, t = 4) {
  return e = Qa(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function qr(e) {
  return e = Qa(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = dl(e), us(e));
}
function dl(e) {
  if (e == null) return null;
  if (typeof e == "string") return Ka(e);
  if (Qt(e)) return e;
  if (e instanceof Date) return pl(e);
  if (Array.isArray(e)) return e.map(dl);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((l) => {
      l != "__type" && (t[l] = dl(e[l]));
    }), t;
  }
  return e;
}
function zr(e, t, l) {
  let n = e;
  if (Array.isArray(e)) {
    if (Qt(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null) return "";
  if (n instanceof Date) return pl(n, l);
  let a = Object.keys(n), d = [];
  for (let i = 0; i < Math.min(gt.maxNestedFields, a.length); i++) {
    let r = a[i], c = `${dl(n[r])}`;
    d.push(`<b class="font-medium">${r}</b>: ${Ln(Ua(Ka(c), gt.maxNestedFieldLength))}`);
  }
  return a.length > 2 && d.push("..."), yt("span", "{ " + d.join(", ") + " }", Object.assign({ title: Ln(Hr(e)) }, l));
}
function Ja() {
  return {
    Formats: Pr,
    setDefaultFormats: Br,
    getFormatters: ja,
    setFormatters: Er,
    formatValue: Al,
    formatter: fn,
    dateInputFormat: mn,
    currency: Oa,
    bytes: Fa,
    link: Ia,
    linkTel: Pa,
    linkMailTo: Ba,
    icon: Ea,
    iconRounded: Da,
    attachment: Na,
    hidden: Ra,
    time: Ha,
    relativeTime: is,
    relativeTimeFromDate: Rr,
    relativeTimeFromMs: cn,
    enumFlags: za,
    formatDate: pl,
    formatNumber: rs,
    humanifyMs: Ql,
    humanifyNumber: Dr,
    indentJson: us,
    prettyJson: qr,
    scrub: dl,
    truncate: Ua,
    apiValueFmt: qa,
    iconOnError: un
  };
}
const Ur = ["title"], Kr = /* @__PURE__ */ pe({
  __name: "RouterLink",
  props: {
    to: {}
  },
  setup(e) {
    const t = e, { config: l } = Ct(), n = () => l.value.navigate(t.to ?? "/");
    return (a, d) => (o(), u("a", xe({
      onClick: Ee(n, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, a.$attrs), [
      W(a.$slots, "default")
    ], 16, Ur));
  }
});
class Qr {
  callbacks = {};
  register(t, l) {
    this.callbacks[t] = l;
  }
  has(t) {
    return !!this.callbacks[t];
  }
  invoke(t, l) {
    const n = this.callbacks[t];
    typeof n == "function" && n(t, l);
  }
}
class Jr {
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
const Ga = M("");
function Lt(e, t) {
  return { name: e, value: t };
}
const Gr = [
  Lt("=", "%"),
  Lt("!=", "%!"),
  Lt(">=", ">%"),
  Lt(">", "%>"),
  Lt("<=", "%<"),
  Lt("<", "<%"),
  Lt("In", "%In"),
  Lt("Between", "%Between"),
  { name: "Starts With", value: "%StartsWith", types: "string" },
  { name: "Contains", value: "%Contains", types: "string" },
  { name: "Ends With", value: "%EndsWith", types: "string" },
  { name: "Exists", value: "%IsNotNull", valueType: "none" },
  { name: "Not Exists", value: "%IsNull", valueType: "none" }
];
class Y {
  static config = {
    redirectSignIn: "/signin",
    redirectSignOut: "/auth/logout",
    navigate: (t) => location.href = t,
    assetsPathResolver: (t) => t,
    fallbackPathResolver: (t) => t,
    storage: new Jr(),
    tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
    scopeWhitelist: {
      enumFlagsConverter: Aa,
      ...ja()
    }
  };
  static autoQueryGridDefaults = {
    deny: [],
    hide: [],
    toolbarButtonClass: void 0,
    tableStyle: "stripedRows",
    take: 25,
    maxFieldLength: 150
  };
  static events = Xo();
  static user = M(null);
  static apiKey = Ga;
  static metadata = Zl(null);
  static filterDefinitions = Gr;
  static components = {
    RouterLink: Kr
  };
  static component(t) {
    const l = Y.components[t];
    if (l) return l;
    const n = Es(t), a = Object.keys(Y.components).find((d) => Es(d) === n);
    return a && Y.components[a] || null;
  }
  static interceptors = new Qr();
}
function Wa() {
  return Ga;
}
function Wr(e) {
  Y.config = Object.assign(Y.config, e);
}
function Zr(e) {
  Y.autoQueryGridDefaults = Object.assign(Y.autoQueryGridDefaults, e);
}
function ds(e) {
  return e && Y.config.assetsPathResolver ? Y.config.assetsPathResolver(e) : e;
}
function Xr(e) {
  return e && Y.config.fallbackPathResolver ? Y.config.fallbackPathResolver(e) : e;
}
function Yr(e, t) {
  Y.interceptors.register(e, t);
}
function Ct() {
  const e = f(() => Y.config), t = f(() => Y.autoQueryGridDefaults), l = Y.events;
  return {
    Sole: Y,
    config: e,
    setConfig: Wr,
    events: l,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: Zr,
    assetsPathResolver: ds,
    fallbackPathResolver: Xr,
    registerInterceptor: Yr
  };
}
function mn(e) {
  if (e == null || typeof e == "object") return "";
  const t = xt(e);
  return t == null || t.toString() == "Invalid Date" ? "" : t.toISOString().substring(0, 10) ?? "";
}
function Za(e) {
  if (e == null || typeof e == "object") return "";
  const t = xt(e);
  return t == null || t.toString() == "Invalid Date" ? "" : t.toISOString().substring(0, 19) ?? "";
}
function Xa(e) {
  return e == null ? "" : Yo(e);
}
function Fn(e, t) {
  return Y.config.inputValue ? Y.config.inputValue(e, t) : e === "date" ? mn(t) : e === "datetime-local" ? Za(t) : e === "time" ? Xa(t) : e === "number" || e === "range" ? t == null || t === "" ? "" : Number(t) : t;
}
function Ya(e, t) {
  e.value = null, jt(() => e.value = t);
}
function el(e) {
  return Object.keys(e).forEach((t) => {
    const l = e[t];
    e[t] = oa(l) ? ae(l) : l;
  }), e;
}
function Ft(e, t, l) {
  l ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function Jl(e) {
  if (typeof document > "u") return;
  let t = e?.after || document.activeElement, l = t && t.form;
  if (l) {
    let n = ':not([disabled]):not([tabindex="-1"])', a = l.querySelectorAll(`a:not([disabled]), button${n}, input[type=text]${n}, [tabindex]${n}`), d = Array.prototype.filter.call(
      a,
      (r) => r.offsetWidth > 0 || r.offsetHeight > 0 || r === t
    ), i = d.indexOf(t);
    i > -1 && (d[i + 1] || d[0]).focus();
  }
}
function Gt(e) {
  if (!e) return null;
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
function yt(e, t, l) {
  l || (l = {});
  let n = l.cls || l.className || l.class;
  return n && (l = ht(l, ["cls", "class", "className"]), l.class = n), t == null ? `<${e}` + In(l) + "/>" : `<${e}` + In(l) + `>${t || ""}</${e}>`;
}
function In(e) {
  return Object.keys(e).reduce((t, l) => `${t} ${l}="${Ln(e[l])}"`, "");
}
function vn(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function nl(e) {
  return ds(e);
}
let _r = ["string", "number", "boolean", "null", "undefined"];
function Qt(e) {
  return _r.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Ml(e) {
  return !Qt(e);
}
function tn(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function cs(e, t) {
  if (typeof history < "u") {
    const l = t ? il(ca(location.href, "?"), e) : _o(location.href, e);
    history.pushState({}, "", l);
  }
}
function Il(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((a) => e.includes(a)))
    throw new Error(`Unsafe script: '${e}'`);
  const n = Object.assign(
    Object.keys(globalThis).reduce((a, d) => (a[d] = void 0, a), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(n);
}
function Pn(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function fs(e) {
  const t = Y.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function pn(e, t) {
  return il(`swr.${er(e)}`, t ? Object.assign({}, e, t) : e);
}
function ei(e) {
  if (e.request) {
    const t = pn(e.request, e.args);
    Y.config.storage.removeItem(t);
  }
}
async function _a(e, t, l, n, a) {
  const d = pn(t, n);
  l(new tt({ response: fs(d) }));
  const i = await e.api(t, n, a);
  if (i.succeeded && i.response) {
    i.response._date = (/* @__PURE__ */ new Date()).valueOf();
    const r = JSON.stringify(i.response);
    Y.config.storage.setItem(d, r), l(i);
  }
  return i;
}
function eo(e, t) {
  let l = null;
  return (...n) => {
    l && clearTimeout(l), l = setTimeout(() => {
      e(...n);
    }, t || 100);
  };
}
function sl(e) {
  return typeof e == "string" ? e.split(",") : e || [];
}
function zt(e, t) {
  const l = sl(t);
  return e.reduce((n, a) => (n[a] = !l.includes(a), n), {});
}
function ti(e) {
  return new Promise((t) => setTimeout(t, e));
}
function to(e) {
  const t = [], l = [];
  for (const n of e) {
    const a = n.toLowerCase();
    l.includes(a) || (t.push(n), l.push(a));
  }
  return t;
}
function lo() {
  return {
    dateInputFormat: mn,
    dateTimeInputFormat: Za,
    timeInputFormat: Xa,
    textInputValue: Fn,
    setRef: Ya,
    unRefs: el,
    transition: Ft,
    focusNextElement: Jl,
    getTypeName: Gt,
    htmlTag: yt,
    htmlAttrs: In,
    linkAttrs: vn,
    toAppUrl: nl,
    isPrimitive: Qt,
    isComplexType: Ml,
    pushState: cs,
    scopedExpr: Il,
    copyText: Pn,
    fromCache: fs,
    swrCacheKey: pn,
    swrClear: ei,
    swrApi: _a,
    asStrings: sl,
    asOptions: zt,
    createDebounce: eo,
    delay: ti,
    uniqueIgnoreCase: to
  };
}
function Pl(e) {
  const t = M(!1), l = M(), n = M(), a = e ?? Pe("client");
  function d({ message: p, errorCode: x, fieldName: y, errors: h }) {
    return x || (x = "Exception"), h || (h = []), l.value = y ? new kn({
      errorCode: x,
      message: p,
      errors: [new Ds({ fieldName: y, errorCode: x, message: p })]
    }) : new kn({ errorCode: x, message: p, errors: h });
  }
  function i({ fieldName: p, message: x, errorCode: y }) {
    if (y || (y = "Exception"), !l.value)
      d({ fieldName: p, message: x, errorCode: y });
    else {
      let h = new kn(l.value);
      h.errors = [
        ...(h.errors || []).filter((T) => T.fieldName?.toLowerCase() !== p?.toLowerCase()),
        new Ds({ fieldName: p, message: x, errorCode: y })
      ], l.value = h;
    }
  }
  async function r(p, x, y) {
    t.value = !0;
    let h = await a.api(el(p), x, y);
    return t.value = !1, n.value = h.response, l.value = h.error, h;
  }
  async function c(p, x, y) {
    t.value = !0;
    let h = await a.apiVoid(el(p), x, y);
    return t.value = !1, n.value = h.response, l.value = h.error, h;
  }
  async function v(p, x, y, h) {
    t.value = !0;
    let T = await a.apiForm(el(p), x, y, h);
    return t.value = !1, n.value = T.response, l.value = T.error, T;
  }
  async function m(p, x, y, h) {
    t.value = !0;
    let T = await a.apiFormVoid(el(p), x, y, h);
    return t.value = !1, n.value = T.response, l.value = T.error, T;
  }
  async function b(p, x, y, h) {
    return _a(a, p, x, y, h);
  }
  function w(p, x) {
    const y = M(new tt()), h = eo(async (T) => {
      y.value = await a.api(T);
    }, x?.delayMs);
    return rl(async () => {
      const T = p(), O = fs(pn(T));
      O && (y.value = new tt({ response: O })), x?.delayMs === 0 ? y.value = await a.api(T) : h(T);
    }), (async () => y.value = await a.api(p(), x?.args, x?.method))(), y;
  }
  let g = { setError: d, addFieldError: i, loading: t, error: l, api: r, apiVoid: c, apiForm: v, apiFormVoid: m, swr: b, swrEffect: w, unRefs: el, setRef: Ya };
  return It("ApiState", g), g;
}
function no(e) {
  return e && e.SessionId ? tr(e) : e;
}
function li(e) {
  Y.user.value = no(e), Y.events.publish("signIn", e);
}
function ni() {
  Y.user.value = null, Y.events.publish("signOut", null);
}
const ms = (e) => e?.roles || [], vs = (e) => e?.permissions || [];
function so(e) {
  return ms(Y.user.value).indexOf(e) >= 0;
}
function si(e) {
  return vs(Y.user.value).indexOf(e) >= 0;
}
function ps() {
  return so("Admin");
}
function $l(e) {
  if (!e) return !1;
  if (!e.requiresAuth)
    return !0;
  const t = Y.user.value;
  if (!t)
    return !1;
  if (ps())
    return !0;
  let [l, n] = [ms(t), vs(t)], [a, d, i, r] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!a.every((c) => l.indexOf(c) >= 0) || i.length > 0 && !i.some((c) => l.indexOf(c) >= 0) || !d.every((c) => n.indexOf(c) >= 0) || r.length > 0 && !r.every((c) => n.indexOf(c) >= 0));
}
function ai(e) {
  if (!e || !e.requiresAuth) return null;
  const t = Y.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (ps())
    return null;
  let [l, n] = [ms(t), vs(t)], [a, d, i, r] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], c = a.filter((m) => l.indexOf(m) < 0);
  if (c.length > 0)
    return `Requires ${c.map((m) => "<b>" + m + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "");
  let v = d.filter((m) => n.indexOf(m) < 0);
  return v.length > 0 ? `Requires ${v.map((m) => "<b>" + m + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : i.length > 0 && !i.some((m) => l.indexOf(m) >= 0) ? `Requires any ${i.filter((m) => l.indexOf(m) < 0).map((m) => "<b>" + m + "</b>").join(", ")} Role` + (c.length > 1 ? "s" : "") : r.length > 0 && !r.every((m) => n.indexOf(m) >= 0) ? `Requires any ${r.filter((m) => n.indexOf(m) < 0).map((m) => "<b>" + m + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : null;
}
function cl() {
  const e = f(() => Y.user.value || null), t = f(() => Y.user.value != null);
  return { signIn: li, signOut: ni, user: e, toAuth: no, isAuthenticated: t, hasRole: so, hasPermission: si, isAdmin: ps, canAccess: $l, invalidAccessMessage: ai };
}
function Ye(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const ln = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, vt = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500 disabled:border-slate-200 dark:disabled:border-slate-700 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, bl = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, tl = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Bn = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Re = {
  panelClass(e = "slideOver") {
    return e == "card" ? bl.panelClass : tl.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? bl.formClass : tl.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? bl.headingClass : tl.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? bl.subHeadingClass : tl.subHeadingClass;
  },
  buttonsClass: "px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, ke = {
  getGridClass(e = "stripedRows") {
    return ke.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return Ye(e, "fullWidth") ? "overflow-x-auto" : ke.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return Ye(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : ke.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return Ye(e, "whiteBackground") ? "" : Ye(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black/5" : ke.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return Ye(e, "fullWidth") || Ye(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : ke.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return Ye(e, "whiteBackground") ? "" : ke.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return ke.theadRowClass + (Ye(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return ke.theadCellClass + (Ye(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (Ye(e, "whiteBackground") || Ye(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : ke.tableClass) + (Ye(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", t, l, n) {
    return (n ? "cursor-pointer " : "") + (l ? "bg-indigo-100 dark:bg-blue-800" : (n ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (Ye(e, "stripedRows") ? t % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (Ye(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  gridClass: "flex flex-col",
  //original -margins + padding forces scroll bars when parent is w-full for no clear benefits?
  //original: -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8
  grid2Class: "",
  //original: inline-block min-w-full py-2 align-middle md:px-6 lg:px-8
  grid3Class: "inline-block min-w-full py-2 align-middle",
  grid4Class: "overflow-hidden shadow ring-1 ring-black/5 md:rounded-lg",
  tableClass: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
  theadClass: "bg-gray-50 dark:bg-gray-900",
  tableCellClass: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
  theadRowClass: "select-none",
  theadCellClass: "px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",
  toolbarButtonClass: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
}, oi = {
  colspans: "col-span-3 sm:col-span-3"
};
function Pt(e, t, l) {
  const n = e.filter((a) => a).join(" ");
  return l ??= Y.config.filterInputClass == null ? void 0 : (a) => Y.config.filterInputClass(a, t), l ? l(n) : n;
}
const gs = "col-span-12 sm:col-span-6 3xl:col-span-4";
function ys(e) {
  const t = e?.ui ?? {}, l = t.widget === "textarea" || e?.type === "object", n = e?.type === "object" && e?.properties || e?.type === "array" && e?.items?.type === "object" && e?.items?.properties;
  return l || n || t.fieldCss?.includes("col-span-12");
}
const Lb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: ln,
  card: bl,
  defaultFieldClass: gs,
  dummy: oi,
  filterClass: Pt,
  form: Re,
  grid: ke,
  input: vt,
  isWideSchemaField: ys,
  modal: Bn,
  slideOver: tl
}, Symbol.toStringTag, { value: "Module" })), ri = { class: "flex items-center" }, ii = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, ui = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, di = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ci = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, fi = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, mi = /* @__PURE__ */ pe({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, l = f(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), n = f(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), a = f(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (d, i) => (o(), u("div", {
      class: k([l.value, n.value, "border-l-4 p-4"])
    }, [
      s("div", ri, [
        e.hideIcon ? $("", !0) : (o(), u("div", ii, [
          e.type == "warn" ? (o(), u("svg", ui, [...i[0] || (i[0] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.type == "error" ? (o(), u("svg", di, [...i[1] || (i[1] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.type == "info" ? (o(), u("svg", ci, [...i[2] || (i[2] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : e.type == "success" ? (o(), u("svg", fi, [...i[3] || (i[3] = [
            s("path", {
              "fill-rule": "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
              "clip-rule": "evenodd"
            }, null, -1)
          ])])) : $("", !0)
        ])),
        s("div", null, [
          s("p", {
            class: k([a.value, "text-sm"])
          }, [
            W(d.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), vi = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, pi = { class: "flex" }, gi = { class: "ml-3" }, yi = { class: "text-sm font-medium text-green-800" }, hi = { key: 0 }, bi = { class: "ml-auto pl-3" }, wi = { class: "-mx-1.5 -my-1.5" }, ki = /* @__PURE__ */ pe({
  __name: "AlertSuccess",
  props: {
    message: {}
  },
  setup(e) {
    const t = M(!1);
    return (l, n) => t.value ? $("", !0) : (o(), u("div", vi, [
      s("div", pi, [
        n[2] || (n[2] = s("div", { class: "flex-shrink-0" }, [
          s("svg", {
            class: "h-5 w-5 text-green-400 dark:text-green-500",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            s("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M5 13l4 4L19 7"
            })
          ])
        ], -1)),
        s("div", gi, [
          s("h3", yi, [
            e.message ? (o(), u("span", hi, S(e.message), 1)) : W(l.$slots, "default", {}, void 0, void 0, 1)
          ])
        ]),
        s("div", bi, [
          s("div", wi, [
            s("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 dark:focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-900",
              onClick: n[0] || (n[0] = (a) => t.value = !0)
            }, [...n[1] || (n[1] = [
              s("span", { class: "sr-only" }, "Dismiss", -1),
              s("svg", {
                class: "h-5 w-5",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
              ], -1)
            ])])
          ])
        ])
      ])
    ]));
  }
}), xi = { class: "flex" }, $i = { class: "ml-3" }, Ci = { class: "text-sm text-red-700 dark:text-red-200" }, ao = /* @__PURE__ */ pe({
  __name: "ErrorSummary",
  props: {
    status: {},
    except: {},
    class: {}
  },
  setup(e) {
    const t = e;
    let l = Pe("ApiState", void 0);
    const n = f(() => t.status || l?.error.value ? lr.call({ responseStatus: t.status ?? l?.error.value }, t.except ?? []) : null);
    return (a, d) => n.value ? (o(), u("div", {
      key: 0,
      class: k(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${a.$props.class}`)
    }, [
      s("div", xi, [
        d[0] || (d[0] = s("div", { class: "flex-shrink-0" }, [
          s("svg", {
            class: "h-5 w-5 text-red-400",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              fill: "currentColor",
              d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
            })
          ])
        ], -1)),
        s("div", $i, [
          s("p", Ci, S(n.value), 1)
        ])
      ])
    ], 2)) : $("", !0);
  }
}), Si = ["id", "aria-describedby"], Li = /* @__PURE__ */ pe({
  __name: "InputDescription",
  props: {
    id: {},
    description: {}
  },
  setup(e) {
    return (t, l) => e.description ? (o(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      s("div", null, S(e.description), 1)
    ], 8, Si)) : $("", !0);
  }
}), oo = pe({
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
        const { typeOf: d } = bt(), i = d(e.type);
        i || console.warn(`Type ${e.type} does not exist`), i?.icon ? l = i?.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || l?.svg || "";
      if (n.startsWith("<svg ")) {
        let i = on(n, ">").indexOf("class="), r = `${l?.cls || ""} ${t.class || ""}`;
        if (i == -1)
          n = `<svg class="${r}" ${n.substring(4)}`;
        else {
          const c = i + 6 + 1;
          n = `${n.substring(0, c) + r} ${n.substring(c)}`;
        }
        return Rt("span", { innerHTML: n });
      } else
        return Rt("img", {
          class: [l?.cls, t.class],
          src: ds(e.src || l?.uri),
          onError: (d) => un(d.target)
        });
    };
  }
}), Vi = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, Ai = { class: "flex" }, Mi = /* @__PURE__ */ pe({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, l) => (o(), u("div", Vi, [
      s("div", Ai, [
        (o(), u("svg", {
          class: k(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [...l[0] || (l[0] = [
          s("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor"
          }, null, -1),
          s("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill"
          }, null, -1)
        ])], 2)),
        s("span", null, [
          W(t.$slots, "default")
        ])
      ])
    ]));
  }
}), Ti = ["href", "onClick"], ji = ["type"], zs = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black", Oi = /* @__PURE__ */ pe({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: {}
  },
  setup(e) {
    return (t, l) => {
      const n = N("router-link");
      return e.href ? (o(), J(n, {
        key: 0,
        to: e.href
      }, {
        default: we(({ navigate: a }) => [
          s("button", {
            class: k(zs),
            href: e.href,
            onClick: a
          }, [
            W(t.$slots, "default")
          ], 8, Ti)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", xe({
        key: 1,
        type: e.type,
        class: zs
      }, t.$attrs), [
        W(t.$slots, "default")
      ], 16, ji));
    };
  }
}), Fi = ["href", "onClick"], Ii = ["type"], hs = /* @__PURE__ */ pe({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: {},
    color: { default: "indigo" }
  },
  setup(e) {
    const t = e, l = {
      blue: "focus:ring-blue-500 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "focus:ring-purple-500 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
      red: "focus:ring-red-500 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-500 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-500 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-500 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
    }, n = f(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black text-white " + (l[t.color] || l.indigo));
    return (a, d) => {
      const i = N("router-link");
      return e.href ? (o(), J(i, {
        key: 0,
        to: e.href
      }, {
        default: we(({ navigate: r }) => [
          s("button", {
            class: k(n.value),
            href: e.href,
            onClick: r
          }, [
            W(a.$slots, "default")
          ], 10, Fi)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", xe({
        key: 1,
        type: e.type,
        class: n.value
      }, a.$attrs), [
        W(a.$slots, "default")
      ], 16, Ii));
    };
  }
}), Pi = ["type", "href", "onClick"], Bi = ["type"], Us = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black", ro = /* @__PURE__ */ pe({
  __name: "SecondaryButton",
  props: {
    type: {},
    href: {}
  },
  setup(e) {
    return (t, l) => {
      const n = N("router-link");
      return e.href ? (o(), J(n, {
        key: 0,
        to: e.href
      }, {
        default: we(({ navigate: a }) => [
          s("button", {
            type: e.type ?? "button",
            class: k(Us),
            href: e.href,
            onClick: a
          }, [
            W(t.$slots, "default")
          ], 8, Pi)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", xe({
        key: 1,
        type: e.type ?? "button",
        class: Us
      }, t.$attrs), [
        W(t.$slots, "default")
      ], 16, Bi));
    };
  }
}), Ei = /* @__PURE__ */ pe({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = No(), l = e, n = f(() => (ln[l.color] || ln.blue) + (t.href ? "" : " cursor-pointer"));
    return (a, d) => (o(), u("a", {
      class: k(n.value)
    }, [
      W(a.$slots, "default")
    ], 2));
  }
}), Di = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, Ni = {
  role: "list",
  class: "flex items-center space-x-4"
}, Ri = ["href", "title"], Hi = { class: "sr-only" }, qi = /* @__PURE__ */ pe({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, l) => (o(), u("nav", Di, [
      s("ol", Ni, [
        s("li", null, [
          s("div", null, [
            s("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              l[0] || (l[0] = s("svg", {
                class: "h-6 w-6 flex-shrink-0",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "fill-rule": "evenodd",
                  d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              s("span", Hi, S(e.homeLabel), 1)
            ], 8, Ri)
          ])
        ]),
        W(t.$slots, "default")
      ])
    ]));
  }
}), zi = { class: "flex items-center" }, Ui = ["href", "title"], Ki = ["title"], Qi = /* @__PURE__ */ pe({
  __name: "Breadcrumb",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, l) => (o(), u("li", null, [
      s("div", zi, [
        l[0] || (l[0] = s("svg", {
          class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true"
        }, [
          s("path", {
            "fill-rule": "evenodd",
            d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
            "clip-rule": "evenodd"
          })
        ], -1)),
        e.href ? (o(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          W(t.$slots, "default")
        ], 8, Ui)) : (o(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          W(t.$slots, "default")
        ], 8, Ki))
      ])
    ]));
  }
}), Ji = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, Gi = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, Wi = /* @__PURE__ */ pe({
  __name: "NavList",
  props: {
    title: {}
  },
  setup(e) {
    return (t, l) => (o(), u("div", null, [
      e.title ? (o(), u("h2", Ji, S(e.title), 1)) : $("", !0),
      s("ul", Gi, [
        W(t.$slots, "default")
      ])
    ]));
  }
}), Zi = { class: "relative flex items-start space-x-4 py-6" }, Xi = { class: "flex-shrink-0" }, Yi = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, _i = { class: "min-w-0 flex-1" }, eu = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, tu = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, lu = ["href"], nu = { class: "text-base text-gray-500" }, su = /* @__PURE__ */ pe({
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
    return (t, l) => {
      const n = N("Icon");
      return o(), u("li", Zi, [
        s("div", Xi, [
          s("span", Yi, [
            me(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        s("div", _i, [
          s("h3", eu, [
            s("span", tu, [
              s("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                l[0] || (l[0] = s("span", {
                  class: "absolute inset-0",
                  "aria-hidden": "true"
                }, null, -1)),
                ve(" " + S(e.title), 1)
              ], 8, lu)
            ])
          ]),
          s("p", nu, [
            W(t.$slots, "default")
          ])
        ]),
        l[1] || (l[1] = s("div", { class: "flex-shrink-0 self-center" }, [
          s("svg", {
            class: "h-5 w-5 text-gray-400",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
              "clip-rule": "evenodd"
            })
          ])
        ], -1))
      ]);
    };
  }
}), au = { key: 0 }, ou = { class: "md:p-4" }, io = /* @__PURE__ */ pe({
  __name: "EnsureAccess",
  props: {
    invalidAccess: {},
    alertClass: {}
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = cl(), { config: l } = Ct(), n = () => {
      let d = location.href.substring(location.origin.length) || "/";
      const i = il(l.value.redirectSignIn, { redirect: d });
      l.value.navigate(i);
    }, a = () => {
      let d = location.href.substring(location.origin.length) || "/";
      const i = il(l.value.redirectSignOut, { ReturnUrl: d });
      l.value.navigate(i);
    };
    return (d, i) => {
      const r = N("Alert"), c = N("SecondaryButton");
      return e.invalidAccess ? (o(), u("div", au, [
        me(r, {
          class: k(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        s("div", ou, [
          ae(t) ? (o(), J(c, {
            key: 1,
            onClick: a
          }, {
            default: we(() => [...i[1] || (i[1] = [
              ve("Sign Out", -1)
            ])]),
            _: 1
          })) : (o(), J(c, {
            key: 0,
            onClick: n
          }, {
            default: we(() => [...i[0] || (i[0] = [
              ve("Sign In", -1)
            ])]),
            _: 1
          }))
        ])
      ])) : $("", !0);
    };
  }
}), ru = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, iu = { class: "p-4" }, uu = { class: "flex w-full justify-center" }, du = { key: 0 }, cu = ["id", "value"], fu = ["for"], mu = { key: 1 }, vu = { class: "mb-2" }, pu = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, gu = ["onClick"], yu = { class: "flex" }, hu = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, bs = /* @__PURE__ */ pe({
  __name: "FilterColumn",
  props: {
    definitions: {},
    column: {},
    topLeft: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = M(), d = M(""), i = M(""), r = M([]), c = f(() => l.column.meta.isEnum == !0), v = f(() => nt(l.column.meta.type === "Nullable`1" ? l.column.meta.genericArgs[0] : l.column.meta.type)), m = f(() => l.column.meta.isEnum == !0 ? as(Sa(v.value.name)) : []), b = f(() => p(l.column.type)?.map((P) => ({ key: P.value, value: P.name })) || []), w = M({ filters: [] }), g = f(() => w.value.filters);
    rl(() => w.value = Object.assign({}, l.column.settings, {
      filters: Array.from(l.column.settings.filters)
    })), rl(() => {
      let P = l.column.settings.filters?.[0]?.value?.split(",") || [];
      if (P.length > 0 && v.value?.isEnumInt) {
        const F = P[0] && parseInt(P[0]) || 0;
        P = v.value.enumValues?.filter((re) => (F & parseInt(re)) > 0) || [];
      }
      r.value = P;
    });
    function p(P) {
      let F = l.definitions;
      return ka(P) || (F = F.filter((re) => re.types !== "string")), F;
    }
    function x(P, F) {
      return p(P).find((re) => re.value === F);
    }
    function y() {
      if (!d.value) return;
      let P = x(l.column.type, d.value)?.name;
      P && (w.value.filters.push({ key: d.value, name: P, value: i.value }), d.value = i.value = "");
    }
    function h(P) {
      w.value.filters.splice(P, 1);
    }
    function T(P) {
      return Ta(x(l.column.type, P.key), l.column.type, P);
    }
    function O() {
      n("done");
    }
    function E() {
      d.value = "%", a.value?.focus();
    }
    function _() {
      if (i.value && y(), c.value) {
        let P = Object.values(r.value).filter((F) => F);
        w.value.filters = P.length > 0 ? v.value?.isEnumInt ? [{ key: "%HasAny", name: "HasAny", value: P.map((F) => parseInt(F)).reduce((F, re) => F + re, 0).toString() }] : [{ key: "%In", name: "In", value: P.join(",") }] : [];
      }
      n("save", w.value), n("done");
    }
    function Z(P) {
      w.value.sort = P === w.value.sort ? void 0 : P, jt(_);
    }
    return (P, F) => {
      const re = N("SelectInput"), se = N("TextInput"), B = N("PrimaryButton"), z = N("SecondaryButton");
      return o(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: O,
        onVnodeMounted: E
      }, [
        s("div", {
          class: "absolute",
          style: Un(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: F[5] || (F[5] = Ee(() => {
          }, ["stop"]))
        }, [
          s("div", ru, [
            s("div", iu, [
              F[10] || (F[10] = s("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1)),
              s("div", uu, [
                s("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: F[0] || (F[0] = (K) => Z("ASC")),
                  class: k(`${w.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, [...F[6] || (F[6] = [
                  s("svg", {
                    class: "w-6 h-6",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16"
                  }, [
                    s("g", { fill: "currentColor" }, [
                      s("path", {
                        "fill-rule": "evenodd",
                        d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
                      }),
                      s("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
                    ])
                  ], -1),
                  s("span", null, "ASC", -1)
                ])], 2),
                s("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: F[1] || (F[1] = (K) => Z("DESC")),
                  class: k(`${w.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, [...F[7] || (F[7] = [
                  sn('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2)
                ])], 2)
              ]),
              F[11] || (F[11] = s("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1)),
              c.value ? (o(), u("div", du, [
                (o(!0), u(ye, null, be(m.value, (K) => (o(), u("div", {
                  key: K.key,
                  class: "flex items-center"
                }, [
                  Ot(s("input", {
                    type: "checkbox",
                    id: K.key,
                    value: K.key,
                    "onUpdate:modelValue": F[2] || (F[2] = (j) => r.value = j),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, cu), [
                    [Kn, r.value]
                  ]),
                  s("label", {
                    for: K.key,
                    class: "ml-3"
                  }, S(K.value), 9, fu)
                ]))), 128))
              ])) : (o(), u("div", mu, [
                (o(!0), u(ye, null, be(g.value, (K, j) => (o(), u("div", vu, [
                  s("span", pu, [
                    ve(S(e.column.name) + " " + S(K.name) + " " + S(T(K)) + " ", 1),
                    s("button", {
                      type: "button",
                      onClick: (X) => h(j),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, [...F[8] || (F[8] = [
                      s("svg", {
                        class: "h-2 w-2",
                        stroke: "currentColor",
                        fill: "none",
                        viewBox: "0 0 8 8"
                      }, [
                        s("path", {
                          "stroke-linecap": "round",
                          "stroke-width": "1.5",
                          d: "M1 1l6 6m0-6L1 7"
                        })
                      ], -1)
                    ])], 8, gu)
                  ])
                ]))), 256)),
                s("div", yu, [
                  me(re, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: d.value,
                    "onUpdate:modelValue": F[3] || (F[3] = (K) => d.value = K),
                    entries: b.value,
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  x(e.column.type, d.value)?.valueType !== "none" ? (o(), J(se, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: a,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: i.value,
                    "onUpdate:modelValue": F[4] || (F[4] = (K) => i.value = K),
                    onKeyup: an(y, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue"])) : $("", !0),
                  s("div", { class: "pt-1" }, [
                    s("button", {
                      type: "button",
                      onClick: y,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, [...F[9] || (F[9] = [
                      s("svg", {
                        class: "h-6 w-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }, [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ])])
                  ])
                ])
              ]))
            ]),
            s("div", hu, [
              me(B, {
                onClick: _,
                color: "red",
                class: "ml-2"
              }, {
                default: we(() => [...F[12] || (F[12] = [
                  ve(" Save ", -1)
                ])]),
                _: 1
              }),
              me(z, { onClick: O }, {
                default: we(() => [...F[13] || (F[13] = [
                  ve(" Cancel ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), bu = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, wu = { class: "flex flex-wrap" }, ku = { class: "group pr-4 sm:pr-6 lg:pr-8" }, xu = { class: "flex justify-between w-full font-medium" }, $u = { class: "w-6 flex justify-end" }, Cu = { class: "hidden group-hover:inline" }, Su = ["onClick", "title"], Lu = {
  key: 0,
  class: "pt-2"
}, Vu = { class: "ml-2" }, Au = { key: 1 }, Mu = { class: "pt-2" }, Tu = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, ju = ["onClick"], ws = /* @__PURE__ */ pe({
  __name: "FilterViews",
  props: {
    definitions: {},
    columns: {}
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = f(() => l.columns.filter((w) => w.settings.filters.length > 0));
    function d(w) {
      return w?.[0]?.value?.split(",");
    }
    function i(w) {
      let g = l.definitions;
      return ka(w) || (g = g.filter((p) => p.types !== "string")), g;
    }
    function r(w, g) {
      return i(w).find((p) => p.value === g);
    }
    function c(w, g) {
      return Ta(r(w.type, g.value), w.type, g);
    }
    function v(w) {
      w.settings.filters = [], n("change", w);
    }
    function m(w, g) {
      w.settings.filters.splice(g, 1), n("change", w);
    }
    function b() {
      l.columns.forEach((w) => {
        w.settings.filters = [], n("change", w);
      }), n("done");
    }
    return (w, g) => (o(), u("div", bu, [
      s("div", wu, [
        (o(!0), u(ye, null, be(a.value, (p) => (o(), u("fieldset", ku, [
          s("legend", xu, [
            s("span", null, S(ae(Te)(p.name)), 1),
            s("span", $u, [
              s("span", Cu, [
                s("button", {
                  onClick: (x) => v(p),
                  title: `Clear all ${ae(Te)(p.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, [...g[0] || (g[0] = [
                  s("svg", {
                    class: "h-2 w-2",
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 8 8"
                  }, [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-width": "1.5",
                      d: "M1 1l6 6m0-6L1 7"
                    })
                  ], -1)
                ])], 8, Su)
              ])
            ])
          ]),
          p.meta.isEnum ? (o(), u("div", Lu, [
            (o(!0), u(ye, null, be(d(p.settings.filters), (x) => (o(), u("div", {
              key: x,
              class: "flex items-center"
            }, [
              s("label", Vu, S(x), 1)
            ]))), 128))
          ])) : (o(), u("div", Au, [
            (o(!0), u(ye, null, be(p.settings.filters, (x, y) => (o(), u("div", Mu, [
              s("span", Tu, [
                ve(S(p.name) + " " + S(x.name) + " " + S(c(p, x)) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (h) => m(p, y),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, [...g[1] || (g[1] = [
                  s("svg", {
                    class: "h-2 w-2",
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 8 8"
                  }, [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-width": "1.5",
                      d: "M1 1l6 6m0-6L1 7"
                    })
                  ], -1)
                ])], 8, ju)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      s("div", { class: "flex justify-center pt-4" }, [
        s("button", {
          type: "button",
          onClick: b,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, [...g[2] || (g[2] = [
          s("span", null, "Clear All", -1)
        ])])
      ])
    ]));
  }
}), Ou = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Fu = { class: "" }, Iu = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, Pu = { class: "mt-4" }, Bu = ["for"], Eu = ["id"], Du = ["value", "selected"], Nu = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Ru = ["id", "checked"], Hu = ["for"], qu = { class: "mt-4" }, zu = { class: "pb-2 px-4" }, Uu = { class: "" }, Ku = ["id", "value"], Qu = ["for"], Ju = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, ks = /* @__PURE__ */ pe({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: {},
    prefs: {},
    maxLimit: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const { autoQueryGridDefaults: l } = Ct(), n = e, a = t, d = M({});
    rl(() => d.value = Object.assign({
      take: l.value.take,
      selectedColumns: []
    }, n.prefs));
    const i = [10, 25, 50, 100, 250, 500, 1e3];
    function r() {
      a("done");
    }
    function c() {
      a("save", d.value);
    }
    return (v, m) => {
      const b = N("PrimaryButton"), w = N("SecondaryButton"), g = N("ModalDialog");
      return o(), J(g, {
        id: e.id,
        onDone: r,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: we(() => [
          s("div", Ou, [
            s("div", Fu, [
              s("div", Iu, [
                m[3] || (m[3] = s("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1)),
                s("div", Pu, [
                  s("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Bu),
                  Ot(s("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": m[0] || (m[0] = (p) => d.value.take = p),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), u(ye, null, be(i.filter((p) => n.maxLimit == null || p <= n.maxLimit), (p) => (o(), u("option", {
                      value: p,
                      selected: p === d.value.take
                    }, S(p), 9, Du))), 256))
                  ], 8, Eu), [
                    [Ro, d.value.take]
                  ])
                ]),
                s("div", Nu, [
                  s("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: m[1] || (m[1] = (p) => d.value.selectedColumns = []),
                    checked: d.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Ru),
                  s("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, Hu)
                ]),
                s("div", qu, [
                  s("div", zu, [
                    s("div", Uu, [
                      (o(!0), u(ye, null, be(e.columns, (p) => (o(), u("div", {
                        key: p.name,
                        class: "flex items-center"
                      }, [
                        Ot(s("input", {
                          type: "checkbox",
                          id: p.name,
                          value: p.name,
                          "onUpdate:modelValue": m[2] || (m[2] = (x) => d.value.selectedColumns = x),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, Ku), [
                          [Kn, d.value.selectedColumns]
                        ]),
                        s("label", {
                          for: p.name,
                          class: "ml-3"
                        }, S(p.name), 9, Qu)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          s("div", Ju, [
            me(b, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: we(() => [...m[4] || (m[4] = [
                ve(" Save ", -1)
              ])]),
              _: 1
            }),
            me(w, { onClick: r }, {
              default: we(() => [...m[5] || (m[5] = [
                ve(" Cancel ", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), Gu = { key: 0 }, Wu = { key: 1 }, Zu = {
  key: 2,
  class: "pt-1"
}, Xu = { key: 0 }, Yu = { key: 1 }, _u = { key: 2 }, ed = { key: 4 }, td = { class: "pl-1 pt-1 flex flex-wrap" }, ld = { class: "flex mt-1" }, nd = ["title"], sd = ["disabled"], ad = ["disabled"], od = ["disabled"], rd = ["disabled"], id = {
  key: 0,
  class: "flex mt-1"
}, ud = { class: "px-4 text-lg text-black dark:text-white" }, dd = { key: 0 }, cd = { key: 1 }, fd = { key: 2 }, md = { class: "flex flex-wrap" }, vd = {
  key: 0,
  class: "pl-2 mt-1"
}, pd = {
  key: 1,
  class: "pl-2 mt-1"
}, gd = {
  key: 2,
  class: "pl-2 mt-1"
}, yd = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, hd = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bd = {
  key: 3,
  class: "pl-2 mt-1"
}, wd = {
  key: 4,
  class: "pl-2 mt-1"
}, kd = { class: "mr-1" }, xd = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, $d = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Cd = {
  key: 5,
  class: "pl-2 mt-1"
}, Sd = ["title"], Ld = { class: "whitespace-nowrap" }, Vd = { key: 8 }, Ad = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, Md = { class: "mr-1 select-none" }, Td = {
  key: 1,
  class: "flex justify-between items-center"
}, jd = { class: "mr-1 select-none" }, Hl = 25, Od = /* @__PURE__ */ pe({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: {},
    id: { default: "AutoQueryGrid" },
    ctx: {},
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
  setup(e, { expose: t, emit: l }) {
    const { config: n, autoQueryGridDefaults: a } = Ct(), d = a, i = n.value.storage, r = e, c = l, v = Pe("client"), m = f(() => Ho(r.ctx ?? Mt.createContext({
      id: r.id,
      type: r.type,
      apis: r.apis
    }))), b = "filtering,queryString,queryFilters".split(","), w = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar,forms".split(","), g = f(() => r.deny ? zt(b, r.deny) : zt(b, d.value.deny)), p = f(() => r.hide ? zt(w, r.hide) : zt(w, d.value.hide));
    function x(H) {
      return g.value[H];
    }
    function y(H) {
      return p.value[H];
    }
    const h = f(() => r.tableStyle ?? d.value.tableStyle), T = f(() => r.gridClass ?? ke.getGridClass(h.value)), O = f(() => r.grid2Class ?? ke.getGrid2Class(h.value)), E = f(() => r.grid3Class ?? ke.getGrid3Class(h.value)), _ = f(() => r.grid4Class ?? ke.getGrid4Class(h.value)), Z = f(() => r.tableClass ?? ke.getTableClass(h.value)), P = f(() => r.theadClass ?? ke.getTheadClass(h.value)), F = f(() => r.theadRowClass ?? ke.getTheadRowClass(h.value)), re = f(() => r.theadCellClass ?? ke.getTheadCellClass(h.value)), se = f(() => r.toolbarButtonClass ?? ke.toolbarButtonClass);
    function B(H, q) {
      if (r.rowClass) return r.rowClass(H, q);
      const $e = !!Ve.value.AnyUpdate, Me = (Ne.value?.name ? ce(H, Ne.value.name) : null) == U.value;
      return ke.getTableRowClass(r.tableStyle, q, Me, $e);
    }
    const z = ml(), j = Object.keys(z).map((H) => H.toLowerCase()), X = f(() => m.value.viewModelProps.filter((H) => j.includes(H.name.toLowerCase()) || j.includes(H.name.toLowerCase() + "-header")).map((H) => H.name));
    function A() {
      let H = sl(r.selectedColumns);
      return H.length > 0 ? H : X.value.length > 0 ? X.value : [];
    }
    const L = f(() => {
      let q = A().map((ge) => ge.toLowerCase());
      const $e = m.value.viewModelProps;
      return q.length > 0 ? q.map((ge) => $e.find((Me) => Me.name.toLowerCase() === ge)).filter((ge) => ge != null) : $e;
    }), I = f(() => {
      const H = m.value.viewModelProps;
      let $e = A().map((Se) => Se.toLowerCase()), ge = $e.length > 0 ? $e.map((Se) => H.find((Ze) => Ze.name.toLowerCase() === Se)).filter((Se) => Se != null).map((Se) => Se.name) : H.map((Se) => Se.name), Me = sl(te.value.selectedColumns).map((Se) => Se.toLowerCase());
      return Me.length > 0 ? ge.filter((Se) => Me.includes(Se.toLowerCase())) : ge;
    }), ie = M([]), V = Zl(new tt()), C = Zl(new tt()), le = M(), oe = M(!1), U = M(), Q = M(), R = M(!1), ue = M(), D = M(r.skip), G = M(!1), te = M({ take: Hl }), fe = M(!1), de = f(() => ie.value.some((H) => H.settings.filters.length > 0 || !!H.settings.sort) || te.value.selectedColumns), he = f(() => ie.value.map((H) => H.settings.filters.length).reduce((H, q) => H + q, 0)), je = f(() => m.value.dataModelProps), Ne = f(() => m.value.dataModelPrimaryKey), Ce = f(() => te.value.take ?? Hl), Le = f(() => (V.value.response ? ce(V.value.response, "results") : null) ?? []), Ae = f(() => (V.value.response?.total || Le.value.length) ?? 0), Je = f(() => D.value > 0), ut = f(() => D.value > 0), Bt = f(() => Le.value.length >= Ce.value), Et = f(() => Le.value.length >= Ce.value), Ge = M(), rt = M(), dt = {
      NoQuery: "No Query API was found"
    };
    t({
      update: it,
      search: As,
      createRequestArgs: gn,
      reset: Ps,
      createDone: yl,
      createSave: wn,
      editDone: Dt,
      editSave: Yt,
      forceUpdate: St,
      setEdit: De,
      edit: Q,
      createForm: Ge,
      editForm: rt,
      apiPrefs: te,
      results: Le,
      skip: D,
      take: Ce,
      total: Ae
    }), Y.interceptors.has("AutoQueryGrid.new") && Y.interceptors.invoke("AutoQueryGrid.new", { props: r });
    function Ue(H) {
      if (H) {
        if (r.canFilter)
          return r.canFilter(H);
        const q = je.value.find(($e) => $e.name.toLowerCase() == H.toLowerCase());
        if (q)
          return !xa(q);
      }
      return !1;
    }
    function st(H) {
      c("nav", H), x("queryString") && cs(H);
    }
    async function ct(H) {
      D.value += H, D.value < 0 && (D.value = 0);
      const q = Math.floor(Ae.value / Ce.value) * Ce.value;
      D.value > q && (D.value = q), st({ skip: D.value || void 0 }), await it();
    }
    async function ne(H, q) {
      if (Q.value = null, U.value = q, !H || !q) return;
      let $e = Ll(Ve.value.AnyQuery, { [H]: q });
      const ge = await v.api($e);
      if (ge.succeeded) {
        let Me = ce(ge.response, "results")?.[0];
        Me || console.warn(`API ${Ve.value.AnyQuery?.request.name}(${H}:${q}) returned no results`), Q.value = Me;
      }
    }
    async function ee(H, q) {
      c("rowSelected", H, q);
      const $e = Ne.value?.name, ge = $e ? ce(H, $e) : null;
      !$e || !ge || (st({ edit: ge }), ne($e, ge));
    }
    function Oe(H, q) {
      if (!x("filtering")) return;
      let $e = q.target;
      if (Ue(H) && $e?.tagName !== "TD") {
        let ge = $e?.closest("TABLE")?.getBoundingClientRect(), Me = ie.value.find((Se) => Se.name.toLowerCase() == H.toLowerCase());
        if (Me && ge) {
          let Se = 318, Ze = ge.x + Se + 10;
          ue.value = {
            column: Me,
            topLeft: {
              x: Math.max(Math.floor(q.clientX + Se / 2), Ze),
              y: ge.y + 45
            }
          };
        }
      }
      c("headerSelected", H, q);
    }
    function Ie() {
      ue.value = null;
    }
    async function We(H) {
      let q = ue.value?.column;
      q && (q.settings = H, i.setItem(Bl(q.name), JSON.stringify(q.settings)), await it()), ue.value = null;
    }
    async function ft(H) {
      i.setItem(Bl(H.name), JSON.stringify(H.settings)), await it();
    }
    async function Wt(H) {
      R.value = !1, te.value = H, i.setItem(yn(), JSON.stringify(H)), await it();
    }
    function Zt(H) {
      Ge.value && (Object.assign(Ge.value?.model, H), St());
    }
    function De(H) {
      Object.assign(Q.value, H), St();
    }
    function St() {
      Ge.value?.forceUpdate(), rt.value?.forceUpdate(), Fe()?.proxy?.$forceUpdate();
    }
    async function it() {
      await As(gn());
    }
    async function Mo() {
      await it();
    }
    const To = /iPad|iPhone|iPod/.test(navigator.userAgent);
    async function As(H) {
      const q = Ve.value.AnyQuery;
      if (!q) {
        console.error(dt.NoQuery);
        return;
      }
      let $e = Ll(q, H), ge = await v.api($e);
      fa((Ze) => {
        fe.value = Ze, To ? jt(() => V.value = ge) : V.value = ge;
      })();
      let Se = ce(ge.response, "results") || [];
      !ge.succeeded || Se.label == 0;
    }
    function gn() {
      let H = {
        include: "total",
        take: Ce.value
      }, q = sl(te.value.selectedColumns || r.selectedColumns);
      if (q.length > 0) {
        let ge = Ne.value;
        ge && !q.includes(ge.name) && (q = [ge.name, ...q]);
        const Me = je.value, Se = [];
        q.forEach((Ze) => {
          const _t = Me.find((Nt) => Nt.name.toLowerCase() == Ze.toLowerCase());
          _t?.ref?.selfId && Se.push(_t.ref.selfId), ce(z, Ze) && Se.push(...Me.filter((Nt) => Nt.ref?.selfId?.toLowerCase() == Ze.toLowerCase()).map((Nt) => Nt.name));
        }), Se.forEach((Ze) => {
          q.includes(Ze) || q.push(Ze);
        }), H.fields = to(q).join(",");
      }
      let $e = [];
      if (ie.value.forEach((ge) => {
        ge.settings.sort && $e.push((ge.settings.sort === "DESC" ? "-" : "") + ge.name), ge.settings.filters.forEach((Me) => {
          let Se = Me.key.replace("%", ge.name);
          H[Se] = Me.value;
        });
      }), r.filters && Object.keys(r.filters).forEach((ge) => {
        H[ge] = r.filters[ge];
      }), x("queryString") && x("queryFilters")) {
        const ge = location.search ? location.search : location.hash.includes("?") ? "?" + Ul(location.hash, "?") : "";
        let Me = Vn(ge);
        if (Object.keys(Me).forEach((Se) => {
          L.value.find((_t) => _t.name.toLowerCase() === Se.toLowerCase()) && (H[Se] = Me[Se]);
        }), typeof Me.skip < "u") {
          const Se = parseInt(Me.skip);
          isNaN(Se) || (H.skip = Se);
        }
      }
      return typeof H.skip > "u" && D.value > 0 && (H.skip = D.value), $e.length > 0 && (H.orderBy = $e.join(",")), H;
    }
    function jo() {
      const H = Ms("csv");
      Pn(H), typeof window < "u" && window.open(H);
    }
    function Oo() {
      const H = Ms("json");
      Pn(H), G.value = !0, setTimeout(() => G.value = !1, 3e3);
    }
    function Ms(H = "json") {
      const q = gn(), $e = `/api/${Ve.value.AnyQuery?.request.name}`, ge = nr(v.baseUrl, il($e, { ...q, jsconfig: "edv" }));
      return ge.indexOf("?") >= 0 ? on(ge, "?") + "." + H + "?" + Ul(ge, "?") : ge + ".json";
    }
    async function Fo() {
      ie.value.forEach((H) => {
        H.settings = { filters: [] }, i.removeItem(Bl(H.name));
      }), te.value = { take: Hl }, i.removeItem(yn()), await it();
    }
    function Io() {
      oe.value = !0, st({ create: null });
    }
    const Xt = f(() => m.value.dataModelName), gl = f(() => r.modelTitle || Xt.value), Po = f(() => r.newButtonLabel || `New ${gl.value}`), yn = () => m.value.prefsCacheKey(), Bl = (H) => m.value.columnCacheKey(H), { invalidAccessMessage: hn } = cl(), Ts = f(() => r.filterDefinitions || m.value.filterDefinitions), Ve = f(() => m.value.apis), El = (H) => `<span class="text-yellow-700">${H}</span>`, js = f(() => {
      if (!m.value.metadataApi)
        return El(`AppMetadata not loaded, see <a class="${ln.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let H = m.value.invalidApis;
      if (H.length > 0)
        return El(`Unknown API${H.length > 1 ? "s" : ""}: ${H.join(", ")}`);
      let q = Ve.value;
      return q.empty ? El("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : q.AnyQuery ? null : El(dt.NoQuery);
    }), Os = f(() => Ve.value.AnyQuery && hn(Ve.value.AnyQuery)), Fs = f(() => Ve.value.Create && hn(Ve.value.Create)), Is = f(() => Ve.value.AnyUpdate && hn(Ve.value.AnyUpdate)), Bo = f(() => $l(Ve.value.Create));
    f(() => $l(Ve.value.AnyUpdate));
    const bn = f(() => $l(Ve.value.Delete));
    function Dt() {
      Q.value = null, U.value = null, st({ edit: void 0 });
    }
    function yl() {
      oe.value = !1, st({ create: void 0 });
    }
    async function Yt() {
      await it(), Dt();
    }
    async function wn() {
      await it(), yl();
    }
    function Ps() {
      V.value = new tt(), C.value = new tt(), oe.value = !1, U.value = null, Q.value = null, R.value = !1, ue.value = null, D.value = r.skip, G.value = !1, te.value = { take: Hl }, fe.value = !1;
      const H = r.prefs || tn(i.getItem(yn()));
      H && (te.value = H), ie.value = L.value.map(($e) => ({
        name: $e.name,
        type: $e.type,
        meta: $e,
        settings: Object.assign(
          {
            filters: []
          },
          tn(i.getItem(Bl($e.name)))
        )
      })), isNaN(r.skip) || (D.value = r.skip);
      let q = Ne.value?.name;
      if (x("queryString")) {
        const $e = location.search ? location.search : location.hash.includes("?") ? "?" + Ul(location.hash, "?") : "";
        let ge = Vn($e);
        typeof ge.create < "u" ? oe.value = typeof ge.create < "u" : q && (typeof ge.edit == "string" || typeof ge.edit == "number") && ne(q, ge.edit);
      }
      r.create === !0 && (oe.value = !0), q && r.edit != null && ne(q, r.edit);
    }
    return ze(async () => {
      Ps(), await jt(), await it();
    }), (H, q) => {
      const $e = N("Alert"), ge = N("EnsureAccessDialog"), Me = N("AutoCreateForm"), Se = N("AutoEditForm"), Ze = N("AutoViewForm"), _t = N("ErrorSummary"), Bs = N("Loading"), Nt = N("SettingsIcons"), Eo = N("DataGrid");
      return js.value ? (o(), u("div", Gu, [
        me($e, { innerHTML: js.value }, null, 8, ["innerHTML"])
      ])) : Os.value ? (o(), u("div", Wu, [
        me(io, { "invalid-access": Os.value }, null, 8, ["invalid-access"])
      ])) : (o(), u("div", Zu, [
        y("forms") && oe.value && Ve.value.Create ? (o(), u("div", Xu, [
          Fs.value ? (o(), J(ge, {
            key: 0,
            title: `Create ${gl.value}`,
            "invalid-access": Fs.value,
            "alert-class": "text-yellow-700",
            onDone: yl
          }, null, 8, ["title", "invalid-access"])) : ae(z).createform ? W(H.$slots, "createform", {
            type: Ve.value.Create.request.name,
            configure: e.configureField,
            done: yl,
            save: wn
          }, void 0, void 0, 1) : (o(), J(Me, {
            key: 2,
            ref_key: "createForm",
            ref: Ge,
            type: Ve.value.Create.request.name,
            configure: e.configureField,
            onDone: yl,
            onSave: wn
          }, {
            header: we(() => [
              W(H.$slots, "formheader", {
                form: "create",
                formInstance: Ge.value,
                apis: Ve.value,
                type: Xt.value,
                updateModel: Zt
              })
            ]),
            footer: we(() => [
              W(H.$slots, "formfooter", {
                form: "create",
                formInstance: Ge.value,
                apis: Ve.value,
                type: Xt.value,
                updateModel: Zt
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : y("forms") && Q.value && Ve.value.AnyUpdate ? (o(), u("div", Yu, [
          Is.value ? (o(), J(ge, {
            key: 0,
            title: `Update ${gl.value}`,
            "invalid-access": Is.value,
            "alert-class": "text-yellow-700",
            onDone: Dt
          }, null, 8, ["title", "invalid-access"])) : ae(z).editform ? W(H.$slots, "editform", {
            model: Q.value,
            type: Ve.value.AnyUpdate.request.name,
            deleteType: bn.value ? Ve.value.Delete.request.name : null,
            configure: e.configureField,
            done: Dt,
            save: Yt
          }, void 0, void 0, 1) : (o(), J(Se, {
            key: 2,
            ref_key: "editForm",
            ref: rt,
            modelValue: Q.value,
            "onUpdate:modelValue": q[0] || (q[0] = (Ke) => Q.value = Ke),
            type: Ve.value.AnyUpdate.request.name,
            deleteType: bn.value ? Ve.value.Delete.request.name : null,
            configure: e.configureField,
            onDone: Dt,
            onSave: Yt,
            onDelete: Yt
          }, {
            header: we(() => [
              W(H.$slots, "formheader", {
                form: "edit",
                formInstance: rt.value,
                apis: Ve.value,
                type: Xt.value,
                model: Q.value,
                id: U.value,
                updateModel: De
              })
            ]),
            footer: we(() => [
              W(H.$slots, "formfooter", {
                form: "edit",
                formInstance: rt.value,
                apis: Ve.value,
                type: Xt.value,
                model: Q.value,
                id: U.value,
                updateModel: De
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : y("forms") && Q.value ? (o(), u("div", _u, [
          ae(z).viewform ? W(H.$slots, "viewform", {
            model: Q.value,
            apis: Ve.value,
            done: Dt
          }, void 0, void 0, 0) : (o(), J(Ze, {
            key: 1,
            model: Q.value,
            apis: Ve.value,
            deleteType: bn.value ? Ve.value.Delete.request.name : null,
            done: Dt,
            onSave: Yt,
            onDelete: Yt
          }, null, 8, ["model", "apis", "deleteType"]))
        ])) : $("", !0),
        ae(z).toolbar ? W(H.$slots, "toolbar", {}, void 0, void 0, 3) : y("toolbar") ? (o(), u("div", ed, [
          R.value ? (o(), J(ks, {
            key: 0,
            columns: L.value,
            prefs: te.value,
            onDone: q[1] || (q[1] = (Ke) => R.value = !1),
            onSave: Wt
          }, null, 8, ["columns", "prefs"])) : $("", !0),
          s("div", td, [
            s("div", ld, [
              y("preferences") ? (o(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${gl.value} Preferences`,
                onClick: q[2] || (q[2] = (Ke) => R.value = !R.value)
              }, [...q[9] || (q[9] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("g", {
                    "stroke-width": "1.5",
                    fill: "none"
                  }, [
                    s("path", {
                      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
                      stroke: "currentColor"
                    })
                  ])
                ], -1)
              ])], 8, nd)) : $("", !0),
              y("pagingNav") ? (o(), u("button", {
                key: 1,
                type: "button",
                class: k(["pl-2", Je.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !Je.value,
                onClick: q[3] || (q[3] = (Ke) => ct(-Ae.value))
              }, [...q[10] || (q[10] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, sd)) : $("", !0),
              y("pagingNav") ? (o(), u("button", {
                key: 2,
                type: "button",
                class: k(["pl-2", ut.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !ut.value,
                onClick: q[4] || (q[4] = (Ke) => ct(-Ce.value))
              }, [...q[11] || (q[11] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, ad)) : $("", !0),
              y("pagingNav") ? (o(), u("button", {
                key: 3,
                type: "button",
                class: k(["pl-2", Bt.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !Bt.value,
                onClick: q[5] || (q[5] = (Ke) => ct(Ce.value))
              }, [...q[12] || (q[12] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, od)) : $("", !0),
              y("pagingNav") ? (o(), u("button", {
                key: 4,
                type: "button",
                class: k(["pl-2", Et.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !Et.value,
                onClick: q[6] || (q[6] = (Ke) => ct(Ae.value))
              }, [...q[13] || (q[13] = [
                s("svg", {
                  class: "w-8 h-8",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  s("path", {
                    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 10, rd)) : $("", !0)
            ]),
            y("pagingInfo") ? (o(), u("div", id, [
              s("div", ud, [
                fe.value ? (o(), u("span", dd, "Querying...")) : $("", !0),
                Le.value.length ? (o(), u("span", cd, [
                  q[14] || (q[14] = s("span", { class: "hidden xl:inline" }, " Showing Results ", -1)),
                  ve(" " + S(D.value + 1) + " - " + S(Math.min(D.value + Le.value.length, Ae.value)) + " ", 1),
                  s("span", null, " of " + S(Ae.value), 1)
                ])) : V.value.completed ? (o(), u("span", fd, "No Results")) : $("", !0)
              ])
            ])) : $("", !0),
            s("div", md, [
              y("refresh") ? (o(), u("div", vd, [
                s("button", {
                  type: "button",
                  onClick: Mo,
                  title: "Refresh",
                  class: k(se.value)
                }, [...q[15] || (q[15] = [
                  s("svg", {
                    class: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    s("path", {
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
                    })
                  ], -1)
                ])], 2)
              ])) : $("", !0),
              y("downloadCsv") ? (o(), u("div", pd, [
                s("button", {
                  type: "button",
                  onClick: jo,
                  title: "Download CSV",
                  class: k(se.value)
                }, [...q[16] || (q[16] = [
                  sn('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2)
                ])], 2)
              ])) : $("", !0),
              y("copyApiUrl") ? (o(), u("div", gd, [
                s("button", {
                  type: "button",
                  onClick: Oo,
                  title: "Copy API URL",
                  class: k(se.value)
                }, [
                  G.value ? (o(), u("svg", yd, [...q[17] || (q[17] = [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M5 13l4 4L19 7"
                    }, null, -1)
                  ])])) : (o(), u("svg", hd, [...q[18] || (q[18] = [
                    s("g", { fill: "none" }, [
                      s("path", {
                        d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }),
                      s("path", {
                        d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ], -1)
                  ])])),
                  q[19] || (q[19] = s("span", { class: "whitespace-nowrap" }, "Copy URL", -1))
                ], 2)
              ])) : $("", !0),
              de.value && y("resetPreferences") ? (o(), u("div", bd, [
                s("button", {
                  type: "button",
                  onClick: Fo,
                  title: "Reset Preferences & Filters",
                  class: k(se.value)
                }, [...q[20] || (q[20] = [
                  s("svg", {
                    class: "w-5 h-5",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    viewBox: "0 0 24 24"
                  }, [
                    s("path", {
                      fill: "currentColor",
                      d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
                    })
                  ], -1)
                ])], 2)
              ])) : $("", !0),
              y("filtersView") && he.value > 0 ? (o(), u("div", wd, [
                s("button", {
                  type: "button",
                  onClick: q[7] || (q[7] = (Ke) => le.value = le.value == "filters" ? null : "filters"),
                  class: k(se.value),
                  "aria-expanded": "false"
                }, [
                  q[23] || (q[23] = s("svg", {
                    class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    s("path", {
                      "fill-rule": "evenodd",
                      d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)),
                  s("span", kd, S(he.value) + " " + S(he.value == 1 ? "Filter" : "Filters"), 1),
                  le.value != "filters" ? (o(), u("svg", xd, [...q[21] || (q[21] = [
                    s("path", {
                      "fill-rule": "evenodd",
                      d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                      "clip-rule": "evenodd"
                    }, null, -1)
                  ])])) : (o(), u("svg", $d, [...q[22] || (q[22] = [
                    s("path", {
                      "fill-rule": "evenodd",
                      d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
                      "clip-rule": "evenodd"
                    }, null, -1)
                  ])]))
                ], 2)
              ])) : $("", !0),
              y("newItem") && Ve.value.Create && Bo.value ? (o(), u("div", Cd, [
                s("button", {
                  type: "button",
                  onClick: Io,
                  title: gl.value,
                  class: k(se.value)
                }, [
                  q[24] || (q[24] = s("svg", {
                    class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                  }, [
                    s("path", {
                      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                      fill: "currentColor"
                    })
                  ], -1)),
                  s("span", Ld, S(Po.value), 1)
                ], 10, Sd)
              ])) : $("", !0),
              ae(z).toolbarbuttons ? W(H.$slots, "toolbarbuttons", { toolbarButtonClass: se.value }, void 0, void 0, 6) : $("", !0)
            ])
          ])
        ])) : $("", !0),
        le.value == "filters" ? (o(), J(ws, {
          key: 5,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: Ts.value,
          columns: ie.value,
          onDone: q[8] || (q[8] = (Ke) => le.value = null),
          onChange: ft
        }, null, 8, ["definitions", "columns"])) : $("", !0),
        C.value.error ?? V.value.error ? (o(), J(_t, {
          key: 6,
          status: C.value.error ?? V.value.error
        }, null, 8, ["status"])) : fe.value ? (o(), J(Bs, {
          key: 7,
          class: "p-2"
        })) : $("", !0),
        ue.value ? (o(), u("div", Vd, [
          me(bs, {
            definitions: Ts.value,
            column: ue.value.column,
            "top-left": ue.value.topLeft,
            onDone: Ie,
            onSave: We
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : $("", !0),
        m.value ? (o(), J(Eo, {
          key: 9,
          id: e.id,
          items: Le.value,
          type: Xt.value,
          ctx: m.value,
          "selected-columns": I.value,
          class: "mt-1",
          tableStyle: h.value,
          gridClass: T.value,
          grid2Class: O.value,
          grid3Class: E.value,
          grid4Class: _.value,
          tableClass: Z.value,
          theadClass: P.value,
          theadRowClass: F.value,
          theadCellClass: re.value,
          tbodyClass: e.tbodyClass,
          rowClass: B,
          onRowSelected: ee,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: Oe
        }, Qn({
          header: we(({ column: Ke, label: Dl }) => [
            x("filtering") && Ue(Ke) ? (o(), u("div", Ad, [
              s("span", Md, S(Dl), 1),
              me(Nt, {
                column: ie.value.find((Do) => Do.name.toLowerCase() === Ke.toLowerCase()),
                "is-open": ue.value?.column.name === Ke
              }, null, 8, ["column", "is-open"])
            ])) : (o(), u("div", Td, [
              s("span", jd, S(Dl), 1)
            ]))
          ]),
          _: 2
        }, [
          be(Object.keys(ae(z)), (Ke) => ({
            name: Ke,
            fn: we((Dl) => [
              W(H.$slots, Ke, Xl(Yl(Dl)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "ctx", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : $("", !0)
      ]));
    };
  }
}), Fd = { class: "flex" }, Id = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Pd = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Bd = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Ed = /* @__PURE__ */ pe({
  __name: "SettingsIcons",
  props: {
    column: {},
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, l) => (o(), u("div", Fd, [
      e.column?.settings?.filters?.length ? (o(), u("svg", Id, [...l[0] || (l[0] = [
        s("g", { fill: "none" }, [
          s("path", {
            d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ], -1)
      ])])) : (o(), u("svg", {
        key: 1,
        class: k(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [...l[1] || (l[1] = [
        s("path", {
          d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
          fill: "currentColor"
        }, null, -1),
        s("path", {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
          fill: "currentColor"
        }, null, -1)
      ])], 2)),
      e.column?.settings?.sort === "ASC" ? (o(), u("svg", Pd, [...l[2] || (l[2] = [
        s("g", { fill: "none" }, [
          s("path", {
            d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
            fill: "currentColor"
          })
        ], -1)
      ])])) : e.column?.settings?.sort === "DESC" ? (o(), u("svg", Bd, [...l[3] || (l[3] = [
        s("g", { fill: "none" }, [
          s("path", {
            d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
            fill: "currentColor"
          })
        ], -1)
      ])])) : $("", !0)
    ]));
  }
}), Dd = /* @__PURE__ */ pe({
  __name: "EnsureAccessDialog",
  props: {
    title: {},
    subtitle: {},
    invalidAccess: {},
    alertClass: {}
  },
  emits: ["done"],
  setup(e) {
    return (t, l) => {
      const n = N("EnsureAccess"), a = N("SlideOver");
      return e.invalidAccess ? (o(), J(a, {
        key: 0,
        title: e.title,
        onDone: l[0] || (l[0] = (d) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, Qn({
        default: we(() => [
          me(n, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: we(() => [
            ve(S(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : $("", !0);
    };
  }
}), Nd = ["for"], Rd = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], Hd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, qd = ["id"], zd = ["id"], Ud = {
  inheritAttrs: !1
}, uo = /* @__PURE__ */ pe({
  ...Ud,
  __name: "TextInput",
  props: {
    status: {},
    id: {},
    type: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {}
  },
  setup(e, { expose: t }) {
    const l = (g) => Fn(i.value, g.value), n = e;
    t({
      focus: d
    });
    const a = M();
    function d() {
      a.value?.focus();
    }
    const i = f(() => n.type || "text"), r = f(() => n.label ?? Te(pt(n.id))), c = f(() => n.placeholder ?? r.value);
    function v(g) {
      return n.type === "range" ? g.replace("shadow-sm ", "") : g;
    }
    let m = Pe("ApiState", void 0);
    const b = f(() => $t.call({ responseStatus: n.status ?? m?.error.value }, n.id)), w = f(() => Pt([
      vt.base,
      b.value ? vt.invalid : v(vt.valid),
      n.inputClass
    ], "TextInput", n.filterClass));
    return (g, p) => (o(), u("div", {
      class: k([g.$attrs.class])
    }, [
      W(g.$slots, "header", xe({
        inputElement: a.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, g.$attrs)),
      r.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: k(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(r.value), 11, Nd)) : $("", !0),
      s("div", {
        class: k(v("mt-1 relative"))
      }, [
        s("input", xe({
          ref_key: "inputElement",
          ref: a,
          type: i.value,
          name: e.id,
          id: e.id,
          class: w.value,
          placeholder: c.value,
          value: ae(Fn)(i.value, e.modelValue),
          onInput: p[0] || (p[0] = (x) => g.$emit("update:modelValue", l(x.target))),
          "aria-invalid": b.value != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, ae(ht)(g.$attrs, ["class", "value"])), null, 16, Rd),
        b.value ? (o(), u("div", Hd, [...p[1] || (p[1] = [
          s("svg", {
            class: "h-5 w-5 text-red-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])])) : $("", !0)
      ], 2),
      b.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(b.value), 9, qd)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, zd)) : $("", !0),
      W(g.$slots, "footer", xe({
        inputElement: a.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, g.$attrs))
    ], 2));
  }
}), Kd = ["for"], Qd = { class: "mt-1 relative" }, Jd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], Gd = ["id"], Wd = ["id"], Zd = {
  inheritAttrs: !1
}, Xd = /* @__PURE__ */ pe({
  ...Zd,
  __name: "TextareaInput",
  props: {
    status: {},
    id: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {}
  },
  setup(e) {
    const t = (c) => c.value, l = e, n = f(() => l.label ?? Te(pt(l.id))), a = f(() => l.placeholder ?? n.value);
    let d = Pe("ApiState", void 0);
    const i = f(() => $t.call({ responseStatus: l.status ?? d?.error.value }, l.id)), r = f(() => Pt([
      "shadow-sm " + vt.base,
      i.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + vt.valid,
      l.inputClass
    ], "TextareaInput", l.filterClass));
    return (c, v) => (o(), u("div", {
      class: k([c.$attrs.class])
    }, [
      n.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: k(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(n.value), 11, Kd)) : $("", !0),
      s("div", Qd, [
        s("textarea", xe({
          name: e.id,
          id: e.id,
          class: r.value,
          placeholder: a.value,
          onInput: v[0] || (v[0] = (m) => c.$emit("update:modelValue", t(m.target))),
          "aria-invalid": i.value != null,
          "aria-describedby": `${e.id}-error`
        }, ae(ht)(c.$attrs, ["class"])), S(e.modelValue), 17, Jd)
      ]),
      i.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(i.value), 9, Gd)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Wd)) : $("", !0)
    ], 2));
  }
}), Yd = ["for"], _d = ["id", "name", "value", "aria-invalid", "aria-describedby"], ec = ["value"], tc = ["id"], lc = {
  inheritAttrs: !1
}, nc = /* @__PURE__ */ pe({
  ...lc,
  __name: "SelectInput",
  props: {
    status: {},
    id: {},
    modelValue: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    options: {},
    values: {},
    entries: {}
  },
  setup(e) {
    const t = (c) => c.value, l = e, n = f(() => l.label ?? Te(pt(l.id)));
    let a = Pe("ApiState", void 0);
    const d = f(() => $t.call({ responseStatus: l.status ?? a?.error.value }, l.id)), i = f(() => l.entries || (l.values ? l.values.map((c) => ({ key: c, value: c })) : l.options ? Object.keys(l.options).map((c) => ({ key: c, value: l.options[c] })) : [])), r = f(() => Pt([
      "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500 disabled:border-slate-200 dark:disabled:border-slate-700 disabled:shadow-none",
      d.value ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "shadow-sm border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
      l.inputClass
    ], "SelectInput", l.filterClass));
    return (c, v) => (o(), u("div", {
      class: k([c.$attrs.class])
    }, [
      n.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: k(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(n.value), 11, Yd)) : $("", !0),
      s("select", xe({
        id: e.id,
        name: e.id,
        class: r.value,
        value: e.modelValue,
        onInput: v[0] || (v[0] = (m) => c.$emit("update:modelValue", t(m.target))),
        "aria-invalid": d.value != null,
        "aria-describedby": `${e.id}-error`
      }, ae(ht)(c.$attrs, ["class"])), [
        (o(!0), u(ye, null, be(i.value, (m) => (o(), u("option", {
          value: m.key
        }, S(m.value), 9, ec))), 256))
      ], 16, _d),
      d.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(d.value), 9, tc)) : $("", !0)
    ], 2));
  }
}), sc = { class: "flex items-center h-5" }, ac = ["id", "name", "checked"], oc = { class: "ml-3 text-sm" }, rc = ["for"], ic = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, uc = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, dc = {
  inheritAttrs: !1
}, cc = /* @__PURE__ */ pe({
  ...dc,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: {},
    id: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.label ?? Te(pt(l.id)));
    let a = Pe("ApiState", void 0);
    const d = f(() => $t.call({ responseStatus: l.status ?? a?.error.value }, l.id)), i = f(() => Pt(["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", l.inputClass], "CheckboxInput", l.filterClass));
    return (r, c) => (o(), u("div", {
      class: k(["relative flex items-start", r.$attrs.class])
    }, [
      s("div", sc, [
        s("input", xe({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: c[0] || (c[0] = (v) => r.$emit("update:modelValue", v.target.checked)),
          class: i.value
        }, ae(ht)(r.$attrs, ["class"])), null, 16, ac)
      ]),
      s("div", oc, [
        s("label", {
          for: e.id,
          class: k(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, S(n.value), 11, rc),
        d.value ? (o(), u("p", ic, S(d.value), 1)) : e.help ? (o(), u("p", uc, S(e.help), 1)) : $("", !0)
      ])
    ], 2));
  }
}), fc = ["id"], mc = ["for"], vc = { class: "mt-1 relative" }, pc = ["id", "name", "value"], gc = { class: "flex flex-wrap pb-1.5" }, yc = { class: "pt-1.5 pl-1" }, hc = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, bc = ["onClick"], wc = { class: "pt-1.5 pl-1 shrink" }, kc = ["type", "name", "id", "aria-invalid", "aria-describedby"], xc = ["id"], $c = ["onMouseover", "onClick"], Cc = { class: "block truncate" }, Sc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Lc = ["id"], Vc = ["id"], Ac = {
  inheritAttrs: !1
}, Mc = /* @__PURE__ */ pe({
  ...Ac,
  __name: "TagInput",
  props: {
    status: {},
    id: {},
    type: {},
    inputClass: {},
    filterClass: {},
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
    const l = e, n = t;
    function a(L) {
      return l.converter ? l.converter(L) : L;
    }
    const d = f(() => qe(a(l.modelValue), (L) => typeof L == "string" ? L.trim().length == 0 ? [] : L.split(",") : L) || []), i = M(), r = M(!1), c = f(() => {
      const L = b.value.toLowerCase();
      return !l.allowableValues || l.allowableValues.length == 0 ? [] : l.allowableValues.length < 1e3 ? l.allowableValues.filter((I) => !d.value.includes(I) && I.toLowerCase().includes(L)) : l.allowableValues.filter((I) => !d.value.includes(I) && I.startsWith(L));
    });
    function v(L) {
      i.value = L;
    }
    const m = M(null), b = M(""), w = f(() => l.type || "text"), g = f(() => l.label ?? Te(pt(l.id)));
    let p = Pe("ApiState", void 0);
    const x = f(() => $t.call({ responseStatus: l.status ?? p?.error.value }, l.id)), y = f(() => Pt([
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      x.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      l.inputClass
    ], "TagInput", l.filterClass)), h = (L) => P(d.value.filter((I) => I != L));
    function T(L) {
      document.activeElement === L.target && m.value?.focus();
    }
    const O = M();
    function E() {
      r.value = !0, O.value = !0;
    }
    function _() {
      E();
    }
    function Z() {
      j(re()), O.value = !1, setTimeout(() => {
        O.value || (r.value = !1);
      }, 200);
    }
    function P(L) {
      const I = l.string ? L.join(",") : L;
      n("update:modelValue", I);
    }
    function F(L) {
      if (L.key == "Backspace" && b.value.length == 0 && d.value.length > 0 && h(d.value[d.value.length - 1]), !(!l.allowableValues || l.allowableValues.length == 0))
        if (L.code == "Escape" || L.code == "Tab")
          r.value = !1;
        else if (L.code == "Home")
          i.value = c.value[0], z();
        else if (L.code == "End")
          i.value = c.value[c.value.length - 1], z();
        else if (L.code == "ArrowDown") {
          if (r.value = !0, !i.value)
            i.value = c.value[0];
          else {
            const I = c.value.indexOf(i.value);
            i.value = I + 1 < c.value.length ? c.value[I + 1] : c.value[0];
          }
          K();
        } else if (L.code == "ArrowUp") {
          if (!i.value)
            i.value = c.value[c.value.length - 1];
          else {
            const I = c.value.indexOf(i.value);
            i.value = I - 1 >= 0 ? c.value[I - 1] : c.value[c.value.length - 1];
          }
          K();
        } else L.code == "Enter" ? i.value && r.value ? (j(i.value), L.preventDefault()) : r.value = !1 : r.value = c.value.length > 0;
    }
    function re() {
      if (b.value.length == 0) return "";
      let L = sr(b.value.trim(), ",");
      return L[0] == "," && (L = L.substring(1)), L = L.trim(), L.length == 0 && r.value && c.value.length > 0 ? i.value : L;
    }
    function se(L) {
      const I = re();
      if (I.length > 0) {
        const ie = l.delimiters.some((C) => C == L.key);
        if (ie && L.preventDefault(), L.key == "Enter" || L.key == "NumpadEnter" || L.key.length == 1 && ie) {
          j(I);
          return;
        }
      }
    }
    const B = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function z() {
      setTimeout(() => {
        let L = _l(`#${l.id}-tag li.active`);
        L && L.scrollIntoView(B);
      }, 0);
    }
    function K() {
      setTimeout(() => {
        let L = _l(`#${l.id}-tag li.active`);
        L && ("scrollIntoViewIfNeeded" in L ? L.scrollIntoViewIfNeeded(B) : L.scrollIntoView(B));
      }, 0);
    }
    function j(L) {
      if (L.length === 0) return;
      const I = Array.from(d.value);
      I.indexOf(L) == -1 && I.push(L), P(I), b.value = "", r.value = !1;
    }
    function X(L) {
      const I = L.clipboardData?.getData("Text");
      A(I);
    }
    function A(L) {
      if (!L) return;
      const I = new RegExp(`\\n|\\t|${l.delimiters.join("|")}`), ie = Array.from(d.value);
      L.split(I).map((C) => C.trim()).forEach((C) => {
        ie.indexOf(C) == -1 && ie.push(C);
      }), P(ie), b.value = "";
    }
    return (L, I) => (o(), u("div", {
      class: k([L.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      g.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: k(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(g.value), 11, mc)) : $("", !0),
      s("div", vc, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: d.value.join(",")
        }, null, 8, pc),
        s("button", {
          class: k(y.value),
          onClick: Ee(T, ["prevent"]),
          onFocus: I[2] || (I[2] = (ie) => r.value = !0),
          tabindex: "-1"
        }, [
          s("div", gc, [
            (o(!0), u(ye, null, be(d.value, (ie) => (o(), u("div", yc, [
              s("span", hc, [
                ve(S(ie) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (V) => h(ie),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, [...I[3] || (I[3] = [
                  s("svg", {
                    class: "h-2 w-2",
                    stroke: "currentColor",
                    fill: "none",
                    viewBox: "0 0 8 8"
                  }, [
                    s("path", {
                      "stroke-linecap": "round",
                      "stroke-width": "1.5",
                      d: "M1 1l6 6m0-6L1 7"
                    })
                  ], -1)
                ])], 8, bc)
              ])
            ]))), 256)),
            s("div", wc, [
              Ot(s("input", xe({
                ref_key: "txtInput",
                ref: m,
                type: w.value,
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${e.id}-txt`,
                id: `${e.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${b.value.length + 1}ch`,
                "onUpdate:modelValue": I[0] || (I[0] = (ie) => b.value = ie),
                "aria-invalid": x.value != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: F,
                onKeypress: se,
                onPaste: Ee(X, ["prevent", "stop"]),
                onFocus: _,
                onBlur: Z,
                onClick: I[1] || (I[1] = (ie) => r.value = !0)
              }, ae(ht)(L.$attrs, ["class", "required"])), null, 16, kc), [
                [qo, b.value]
              ])
            ])
          ])
        ], 34),
        r.value && c.value.length ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
          onKeydown: F,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(ye, null, be(c.value.slice(0, e.maxVisibleItems), (ie) => (o(), u("li", {
            class: k([ie === i.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (V) => v(ie),
            onClick: (V) => j(ie),
            role: "option",
            tabindex: "-1"
          }, [
            s("span", Cc, S(ie), 1)
          ], 42, $c))), 256))
        ], 40, xc)) : $("", !0),
        x.value ? (o(), u("div", Sc, [...I[4] || (I[4] = [
          s("svg", {
            class: "h-5 w-5 text-red-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])])) : $("", !0)
      ]),
      x.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(x.value), 9, Lc)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Vc)) : $("", !0)
    ], 10, fc));
  }
}), Tc = { class: "relative flex-grow mr-2 sm:mr-4" }, jc = ["for"], Oc = { class: "block mt-2" }, Fc = { class: "sr-only" }, Ic = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], Pc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Bc = ["id"], Ec = ["id"], Dc = { key: 0 }, Nc = ["title"], Rc = ["alt", "src"], Hc = {
  key: 1,
  class: "mt-3"
}, qc = { class: "w-full" }, zc = { class: "pr-6 align-bottom pb-2" }, Uc = ["title"], Kc = ["src", "onError"], Qc = ["href"], Jc = {
  key: 1,
  class: "overflow-hidden"
}, Gc = { class: "align-top pb-2 whitespace-nowrap" }, Wc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Zc = /* @__PURE__ */ pe({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: {},
    id: {},
    inputClass: {},
    filterClass: { type: Function },
    label: {},
    labelClass: {},
    help: {},
    placeholder: {},
    modelValue: {},
    values: {},
    files: {}
  },
  setup(e) {
    const t = e, l = M(null), { assetsPathResolver: n, fallbackPathResolver: a } = Ct(), d = {}, i = M(), r = M(t.files?.map(c) || []);
    function c(E) {
      return E.filePath = n(E.filePath), E;
    }
    t.values && t.values.length > 0 && (r.value = t.values.map((E) => {
      let _ = E.replace(/\\/g, "/");
      return { fileName: ca(Kt(_, "/"), "."), filePath: _, contentType: Mn(_) };
    }).map(c));
    const v = f(() => t.label ?? Te(pt(t.id))), m = f(() => t.placeholder ?? v.value);
    let b = Pe("ApiState", void 0);
    const w = f(() => $t.call({ responseStatus: t.status ?? b?.error.value }, t.id)), g = f(() => Pt([
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      w.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ], "FileInput", t.filterClass)), p = (E) => {
      let _ = E.target;
      i.value = "", r.value = Array.from(_.files || []).map((Z) => ({
        fileName: Z.name,
        filePath: Xn(Z),
        contentLength: Z.size,
        contentType: Z.type || Mn(Z.name)
      }));
    }, x = () => l.value?.click(), y = (E) => E == null ? !1 : E.startsWith("data:") || E.startsWith("blob:"), h = f(() => {
      if (r.value.length > 0)
        return r.value[0].filePath;
      let E = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return E && Ht(n(E)) || null;
    }), T = (E) => !E || E.startsWith("data:") || E.endsWith(".svg") ? "" : "rounded-full object-cover";
    function O(E) {
      i.value = a(h.value);
    }
    return Jt(ya), (E, _) => (o(), u("div", {
      class: k(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      s("div", Tc, [
        v.value ? (o(), u("label", {
          key: 0,
          for: e.id,
          class: k(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, S(v.value), 11, jc)) : $("", !0),
        s("div", Oc, [
          s("span", Fc, S(e.help ?? v.value), 1),
          s("input", xe({
            ref_key: "input",
            ref: l,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: g.value,
            placeholder: m.value,
            "aria-invalid": w.value != null,
            "aria-describedby": `${e.id}-error`
          }, E.$attrs, { onChange: p }), null, 16, Ic),
          w.value ? (o(), u("div", Pc, [..._[0] || (_[0] = [
            s("svg", {
              class: "h-5 w-5 text-red-500",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true"
            }, [
              s("path", {
                "fill-rule": "evenodd",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])])) : $("", !0)
        ]),
        w.value ? (o(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, S(w.value), 9, Bc)) : e.help ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, S(e.help), 9, Ec)) : $("", !0)
      ]),
      e.multiple ? (o(), u("div", Hc, [
        s("table", qc, [
          (o(!0), u(ye, null, be(r.value, (Z) => (o(), u("tr", null, [
            s("td", zc, [
              s("div", {
                class: "flex w-full",
                title: y(Z.filePath) ? "" : Z.filePath
              }, [
                s("img", {
                  src: d[ae(Ht)(Z.filePath)] || ae(n)(ae(Ht)(Z.filePath)),
                  class: k(["mr-2 h-8 w-8", T(Z.filePath)]),
                  onError: (P) => d[ae(Ht)(Z.filePath)] = ae(a)(ae(Ht)(Z.filePath))
                }, null, 42, Kc),
                y(Z.filePath) ? (o(), u("span", Jc, S(Z.fileName), 1)) : (o(), u("a", {
                  key: 0,
                  href: ae(n)(Z.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, S(Z.fileName), 9, Qc))
              ], 8, Uc)
            ]),
            s("td", Gc, [
              Z.contentLength && Z.contentLength > 0 ? (o(), u("span", Wc, S(ae(_n)(Z.contentLength)), 1)) : $("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), u("div", Dc, [
        h.value ? (o(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: y(h.value) ? "" : h.value
        }, [
          s("img", {
            onClick: x,
            class: k(["h-16 w-16", T(h.value)]),
            alt: `Current ${v.value ?? ""}`,
            src: i.value || ae(n)(h.value),
            onError: O
          }, null, 42, Rc)
        ], 8, Nc)) : $("", !0)
      ]))
    ], 2));
  }
}), Xc = ["id"], Yc = ["for"], _c = { class: "relative mt-1" }, e0 = ["id", "placeholder", "readonly"], t0 = ["id"], l0 = ["onMouseover", "onClick"], n0 = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, s0 = ["id"], a0 = ["id"], o0 = /* @__PURE__ */ pe({
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
  setup(e, { expose: t, emit: l }) {
    const n = M(!1), a = e, d = l;
    t({ toggle: B });
    function i(A) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(A) >= 0;
    }
    const r = f(() => a.label ?? Te(pt(a.id)));
    let c = Pe("ApiState", void 0);
    const v = f(() => $t.call({ responseStatus: a.status ?? c?.error.value }, a.id)), m = f(() => [vt.base, v.value ? vt.invalid : vt.valid]), b = M(null), w = M(""), g = M(null), p = M(a.viewCount), x = M([]), y = f(() => w.value ? a.options.filter((L) => a.match(L, w.value)).slice(0, p.value) : a.options), h = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function T(A) {
      g.value = A, x.value.indexOf(A) > Math.floor(p.value * 0.9) && (p.value += a.viewCount, X());
    }
    const O = [",", `
`, "	"];
    function E(A) {
      const L = A.clipboardData?.getData("Text");
      _(L);
    }
    function _(A) {
      if (!A) return;
      const L = O.some((I) => A.includes(I));
      if (!a.multiple || !L) {
        const I = a.options.filter((ie) => a.match(ie, A));
        I.length == 1 && (j(I[0]), n.value = !1, Jl());
      } else if (L) {
        const I = new RegExp("\\r|\\n|\\t|,"), V = A.split(I).filter((C) => C.trim()).map((C) => a.options.find((le) => a.match(le, C))).filter((C) => !!C);
        if (V.length > 0) {
          w.value = "", n.value = !1, g.value = null;
          let C = Array.from(a.modelValue || []);
          V.forEach((le) => {
            i(le) ? C = C.filter((oe) => oe != le) : C.push(le);
          }), d("update:modelValue", C), Jl();
        }
      }
    }
    function Z(A) {
      h.indexOf(A.code) || K();
    }
    function P(A) {
      if (!(A.shiftKey || A.ctrlKey || A.altKey)) {
        if (!n.value) {
          A.code == "ArrowDown" && (n.value = !0, g.value = x.value[0]);
          return;
        }
        if (A.code == "Escape")
          n.value && (A.stopPropagation(), n.value = !1);
        else if (A.code == "Tab")
          n.value = !1;
        else if (A.code == "Home")
          g.value = x.value[0], re();
        else if (A.code == "End")
          g.value = x.value[x.value.length - 1], re();
        else if (A.code == "ArrowDown") {
          if (!g.value)
            g.value = x.value[0];
          else {
            const L = x.value.indexOf(g.value);
            g.value = L + 1 < x.value.length ? x.value[L + 1] : x.value[0];
          }
          se();
        } else if (A.code == "ArrowUp") {
          if (!g.value)
            g.value = x.value[x.value.length - 1];
          else {
            const L = x.value.indexOf(g.value);
            g.value = L - 1 >= 0 ? x.value[L - 1] : x.value[x.value.length - 1];
          }
          se();
        } else A.code == "Enter" && (g.value ? (j(g.value), a.multiple || (A.preventDefault(), Jl())) : n.value = !1);
      }
    }
    const F = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function re() {
      setTimeout(() => {
        let A = _l(`#${a.id}-autocomplete li.active`);
        A && A.scrollIntoView(F);
      }, 0);
    }
    function se() {
      setTimeout(() => {
        let A = _l(`#${a.id}-autocomplete li.active`);
        A && ("scrollIntoViewIfNeeded" in A ? A.scrollIntoViewIfNeeded(F) : A.scrollIntoView(F));
      }, 0);
    }
    function B(A) {
      n.value = A, A && (X(), b.value?.focus());
    }
    function z() {
      !a.multiple && a.modelValue ? (n.value = !n.value, n.value && X()) : K();
    }
    function K() {
      n.value = !0, X();
    }
    function j(A) {
      if (w.value = "", n.value = !1, a.multiple) {
        let L = Array.from(a.modelValue || []);
        i(A) ? L = L.filter((I) => I != A) : L.push(A), g.value = null, d("update:modelValue", L);
      } else
        d("update:modelValue", A);
    }
    function X() {
      x.value = y.value;
    }
    return lt(w, X), (A, L) => (o(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      r.value ? (o(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, S(r.value), 9, Yc)) : $("", !0),
      s("div", _c, [
        Ot(s("input", xe({
          ref_key: "txtInput",
          ref: b,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": L[0] || (L[0] = (I) => w.value = I),
          class: m.value,
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          readonly: !e.multiple && !!e.modelValue && !n.value,
          onKeydown: P,
          onKeyup: Z,
          onClick: z,
          onPaste: E,
          required: !1
        }, A.$attrs), null, 16, e0), [
          [ra, w.value]
        ]),
        s("button", {
          type: "button",
          onClick: L[1] || (L[1] = (I) => B(!n.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, [...L[2] || (L[2] = [
          s("svg", {
            class: "h-5 w-5 text-gray-400 dark:text-gray-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])]),
        n.value ? (o(), u("ul", {
          key: 0,
          class: "absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
          onKeydown: P,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(ye, null, be(x.value, (I) => (o(), u("li", {
            class: k([I === g.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (ie) => T(I),
            onClick: (ie) => j(I),
            role: "option",
            tabindex: "-1"
          }, [
            typeof I == "string" ? W(A.$slots, "item", xe({ ref_for: !0 }, { key: I, value: I }), void 0, void 0, 0) : W(A.$slots, "item", xe({ ref_for: !0 }, I), void 0, void 0, 1),
            i(I) ? (o(), u("span", {
              key: 2,
              class: k(["absolute inset-y-0 right-0 flex items-center pr-4", I === g.value ? "text-white" : "text-indigo-600"])
            }, [...L[3] || (L[3] = [
              s("svg", {
                class: "h-5 w-5",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "fill-rule": "evenodd",
                  d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                  "clip-rule": "evenodd"
                })
              ], -1)
            ])], 2)) : $("", !0)
          ], 42, l0))), 256))
        ], 40, t0)) : !e.multiple && e.modelValue ? (o(), u("div", {
          key: 1,
          onKeydown: P,
          class: "h-8 -mt-8 ml-3 pt-0.5 pointer-events-none"
        }, [
          typeof e.modelValue == "string" ? W(A.$slots, "item", Xl(Yl({ key: e.modelValue, value: e.modelValue })), void 0, void 0, 0) : W(A.$slots, "item", Xl(Yl(e.modelValue)), void 0, void 0, 1)
        ], 32)) : $("", !0),
        v.value ? (o(), u("div", n0, [...L[4] || (L[4] = [
          s("svg", {
            class: "h-5 w-5 text-red-500",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
              "clip-rule": "evenodd"
            })
          ], -1)
        ])])) : $("", !0)
      ]),
      v.value ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(v.value), 9, s0)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, a0)) : $("", !0)
    ], 8, Xc));
  }
}), r0 = ["id", "name", "value"], i0 = { class: "block truncate" }, u0 = /* @__PURE__ */ pe({
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
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({
      toggle(g) {
        r.value?.toggle(g);
      }
    });
    const a = l;
    function d(g) {
      a("update:modelValue", g);
    }
    const i = f(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), r = M();
    function c(g, p) {
      return !p || g.value.toLowerCase().includes(p.toLowerCase());
    }
    const v = f(() => n.entries || (n.values ? n.values.map((g) => ({ key: g, value: g })) : n.options ? Object.keys(n.options).map((g) => ({ key: g, value: n.options[g] })) : [])), m = M(i.value ? [] : null);
    function b() {
      let g = n.modelValue && typeof n.modelValue == "object" && !Array.isArray(n.modelValue) ? n.modelValue.key : n.modelValue;
      g == null || g === "" ? m.value = i.value ? [] : null : typeof g == "string" ? m.value = v.value.find((p) => p.key === g) || null : Array.isArray(g) && (m.value = v.value.filter((p) => g.includes(p.key)));
    }
    ze(b);
    const w = f(() => m.value == null ? "" : Array.isArray(m.value) ? m.value.map((g) => encodeURIComponent(g.key)).join(",") : m.value.key);
    return (g, p) => {
      const x = N("Autocomplete");
      return o(), u(ye, null, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: w.value
        }, null, 8, r0),
        me(x, xe({
          ref_key: "input",
          ref: r,
          id: e.id,
          options: v.value,
          match: c,
          multiple: i.value
        }, g.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": [
            p[0] || (p[0] = (y) => m.value = y),
            d
          ]
        }), {
          item: we(({ key: y, value: h }) => [
            s("span", i0, S(h), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), d0 = /* @__PURE__ */ pe({
  __name: "DynamicInput",
  props: {
    input: {},
    modelValue: {},
    api: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = f(() => l.input.type || "text"), d = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), i = f(() => ht(l.input, d)), r = M(a.value === "file" ? null : l.modelValue[l.input.id]);
    lt(r, () => {
      l.modelValue[l.input.id] = r.value, n("update:modelValue", l.modelValue);
    });
    const c = f(() => {
      const v = l.modelValue[l.input.id];
      if (l.input.type !== "file" || !v) return [];
      if (typeof v == "string") return [{ filePath: v, fileName: Kt(v, "/") }];
      if (!Array.isArray(v) && typeof v == "object") return v;
      if (Array.isArray(v)) {
        const m = [];
        return v.forEach((b) => {
          typeof b == "string" ? m.push({ filePath: b, fileName: Kt(b, "/") }) : typeof b == "object" && m.push(b);
        }), m;
      }
    });
    return (v, m) => {
      const b = N("SelectInput"), w = N("CheckboxInput"), g = N("TagInput"), p = N("Combobox"), x = N("FileInput"), y = N("TextareaInput"), h = N("MarkdownInput"), T = N("TextInput");
      return ae(Y).component(a.value) ? (o(), J(Jn(ae(Y).component(a.value)), xe({
        key: 0,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[0] || (m[0] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "select" ? (o(), J(b, xe({
        key: 1,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[1] || (m[1] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "checkbox" ? (o(), J(w, xe({
        key: 2,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[2] || (m[2] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "tag" ? (o(), J(g, xe({
        key: 3,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[3] || (m[3] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        allowableValues: e.input.allowableValues,
        string: e.input.prop?.type == "String"
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : a.value == "combobox" ? (o(), J(p, xe({
        key: 4,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[4] || (m[4] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : a.value == "file" ? (o(), J(x, xe({
        key: 5,
        id: e.input.id,
        status: e.api?.error,
        modelValue: r.value,
        "onUpdate:modelValue": m[5] || (m[5] = (O) => r.value = O),
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label,
        files: c.value
      }, i.value), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : a.value == "textarea" ? (o(), J(y, xe({
        key: 6,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[6] || (m[6] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : a.value == "MarkdownInput" ? (o(), J(h, xe({
        key: 7,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[7] || (m[7] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), J(T, xe({
        key: 8,
        type: a.value,
        id: e.input.id,
        modelValue: r.value,
        "onUpdate:modelValue": m[8] || (m[8] = (O) => r.value = O),
        status: e.api?.error,
        "input-class": e.input.css?.input,
        "label-class": e.input.css?.label
      }, i.value), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), c0 = { class: "lookup-field" }, f0 = ["name", "value"], m0 = {
  key: 0,
  class: "flex justify-between"
}, v0 = ["for"], p0 = {
  key: 0,
  class: "flex items-center"
}, g0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, y0 = {
  key: 1,
  class: "mt-1 relative"
}, h0 = { class: "w-full inline-flex truncate" }, b0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, w0 = ["id"], k0 = ["id"], x0 = /* @__PURE__ */ pe({
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
    const { config: l } = Ct(), { metadataApi: n } = bt(), a = e, d = t, i = f(() => a.id || a.input.id), r = f(() => a.label ?? Te(pt(i.value)));
    let c = Pe("ApiState", void 0);
    const v = Pe("client"), m = f(() => $t.call({ responseStatus: a.status ?? c?.error.value }, i.value)), b = M(""), w = M(""), g = f(() => ce(a.modelValue, i.value)), p = f(() => ot(a.metadataType).find((_) => _.name.toLowerCase() == i.value.toLowerCase())), x = f(() => nt(p.value?.ref?.model)?.icon || l.value.tableIcon);
    function y(_) {
      return _ ? a.input.options ? Object.assign({}, _, Il(a.input.options, {
        input: a.input,
        $typeFields: ot(a.metadataType).map((Z) => Z.name),
        ...Y.config.scopeWhitelist
      })) : _ : null;
    }
    const h = f(() => y(p.value?.ref ?? (a.input.type == "lookup" ? {
      model: a.metadataType.name,
      refId: vl(a.metadataType)?.name ?? "id",
      refLabel: a.metadataType.properties?.find((_) => _.type == "String" && !_.isPrimaryKey)?.name
    } : null)));
    let T;
    function O(_) {
      if (_) {
        if (T == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        T.openModal({ name: "ModalLookup", ref: _ }, (Z) => {
          if (console.debug("openModal", b.value, " -> ", Z, _e.setRefValue(_, Z), _), Z) {
            const P = ce(Z, _.refId);
            b.value = _e.setRefValue(_, Z) || P;
            const F = ae(a.modelValue);
            F[i.value] = P, d("update:modelValue", F);
          }
        });
      }
    }
    function E() {
      a.modelValue[i.value] = null, b.value = "";
    }
    return ze(async () => {
      T = Pe("ModalProvider", void 0);
      const _ = a.modelValue;
      a.modelValue[i.value] || (a.modelValue[i.value] = null);
      const Z = p.value, P = h.value;
      if (!Z || !P) {
        console.warn(`No RefInfo for property '${i.value}'`);
        return;
      }
      b.value = "";
      let F = P.selfId == null ? ce(_, Z.name) : ce(_, P.selfId);
      if (Ml(F) && (F = ce(_, P.refId)), F == null)
        return;
      const se = n.value?.operations.find((B) => B.dataModel?.name == P.model);
      if (console.debug("LookupInput queryOp", se), se != null) {
        const B = ce(_, Z.name);
        if (Ml(B)) return;
        if (b.value = `${B}`, w.value = Z.name, P.refLabel != null) {
          const z = ot(a.metadataType).filter((X) => X.type == P.model);
          z.length || console.warn(`Could not find ${P.model} Property on ${a.metadataType.name}`);
          const K = z.map((X) => ce(_, X.name)).filter((X) => !!X), j = K.length <= 1 ? K[0] : K.find((X) => X[P.refId ?? "id"] == F);
          if (j != null) {
            let X = ce(j, P.refLabel);
            X && (b.value = `${X}`, _e.setValue(P.model, F, P.refLabel, X));
          } else {
            const X = Z.attributes?.some((L) => L.name == "Computed") == !0;
            let A = await _e.getOrFetchValue(v, n.value, P.model, P.refId, P.refLabel, X, F);
            b.value = A || `${P.model}: ${b.value}`;
          }
        }
      }
    }), (_, Z) => {
      const P = N("Icon");
      return o(), u("div", c0, [
        s("input", {
          type: "hidden",
          name: i.value,
          value: g.value
        }, null, 8, f0),
        r.value ? (o(), u("div", m0, [
          s("label", {
            for: i.value,
            class: k(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, S(r.value), 11, v0),
          g.value ? (o(), u("div", p0, [
            s("span", g0, S(g.value), 1),
            s("button", {
              onClick: E,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, [...Z[1] || (Z[1] = [
              s("span", { class: "sr-only" }, "Clear", -1),
              s("svg", {
                class: "h-4 w-4",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M6 18L18 6M6 6l12 12"
                })
              ], -1)
            ])])
          ])) : $("", !0)
        ])) : $("", !0),
        h.value ? (o(), u("div", y0, [
          s("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: Z[0] || (Z[0] = (F) => O(h.value)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            s("span", h0, [
              s("span", b0, [
                me(P, {
                  class: "mr-1 w-5 h-5",
                  image: x.value
                }, null, 8, ["image"]),
                s("span", null, S(b.value), 1)
              ])
            ]),
            Z[2] || (Z[2] = s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
              s("svg", {
                class: "h-5 w-5 text-gray-400 dark:text-gray-500",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true"
              }, [
                s("path", {
                  "fill-rule": "evenodd",
                  d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                  "clip-rule": "evenodd"
                })
              ])
            ], -1))
          ])
        ])) : $("", !0),
        m.value ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${i.value}-error`
        }, S(m.value), 9, w0)) : e.help ? (o(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${i.value}-description`
        }, S(e.help), 9, k0)) : $("", !0)
      ]);
    };
  }
}), $0 = /* @__PURE__ */ pe({
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
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l;
    t({ forceUpdate: d, props: n, updateValue: r });
    function d() {
      Fe()?.proxy?.$forceUpdate();
    }
    function i(O, E) {
      r(O.id, ce(E, O.id));
    }
    function r(O, E) {
      n.modelValue[O] = E, a("update:modelValue", n.modelValue), d();
    }
    const { metadataApi: c, apiOf: v, typeOf: m, typeOfRef: b, createFormLayout: w, Crud: g } = bt(), p = f(() => n.type || Gt(n.modelValue)), x = f(() => n.metaType ?? m(p.value)), y = f(() => b(c.value?.operations.find((O) => O.request.name == p.value)?.dataModel) || x.value);
    function h() {
      const O = x.value;
      if (!O) {
        if (n.formLayout) {
          const re = n.formLayout.map((se) => {
            const B = { name: se.id, type: br(se.type) }, z = Object.assign({ prop: B }, se);
            return n.configureField && n.configureField(z), z;
          });
          return n.configureFormLayout && n.configureFormLayout(re), re;
        }
        throw new Error(`MetadataType for ${p.value} not found`);
      }
      const E = ot(O), _ = y.value, Z = n.formLayout ? Array.from(n.formLayout) : w(O), P = [], F = v(O.name);
      return Z.forEach((re) => {
        const se = E.find((K) => K.name == re.name);
        if (re.ignore) return;
        const B = _?.properties?.find((K) => K.name.toLowerCase() == re.name?.toLowerCase()) ?? se, z = Object.assign({ prop: B, op: F }, re);
        n.configureField && n.configureField(z), P.push(z);
      }), n.configureFormLayout && n.configureFormLayout(P), P;
    }
    const T = () => h().filter((O) => O.type != "hidden").map((O) => O.id);
    return (O, E) => {
      const _ = N("ErrorSummary"), Z = N("LookupInput"), P = N("DynamicInput");
      return o(), u(ye, null, [
        e.hideSummary ? $("", !0) : (o(), J(_, {
          key: 0,
          status: e.api?.error,
          except: T()
        }, null, 8, ["status", "except"])),
        s("div", {
          class: k(e.flexClass)
        }, [
          s("div", {
            class: k(e.divideClass)
          }, [
            s("div", {
              class: k(e.spaceClass)
            }, [
              s("fieldset", {
                class: k(e.fieldsetClass)
              }, [
                (o(!0), u(ye, null, be(h(), (F) => (o(), u("div", {
                  key: F.id,
                  class: k([
                    "w-full",
                    F.css?.field ?? (F.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (F.type == "checkbox" ? " flex items-center" : "")),
                    F.type == "hidden" ? "hidden" : ""
                  ])
                }, [
                  F.type === "lookup" || F.prop?.ref != null && F.type != "file" && !F.prop.isPrimaryKey ? (o(), J(Z, {
                    key: 0,
                    metadataType: y.value,
                    input: F,
                    modelValue: e.modelValue,
                    "onUpdate:modelValue": (re) => i(F, re),
                    status: e.api?.error
                  }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), J(P, {
                    key: 1,
                    input: F,
                    modelValue: e.modelValue,
                    "onUpdate:modelValue": E[0] || (E[0] = (re) => O.$emit("update:modelValue", re)),
                    api: e.api
                  }, null, 8, ["input", "modelValue", "api"]))
                ], 2))), 128))
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 64);
    };
  }
}), C0 = { key: 0 }, S0 = { class: "text-red-700" }, L0 = { key: 0 }, V0 = { key: 2 }, A0 = ["innerHTML"], M0 = { class: "flex justify-end" }, T0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, j0 = { class: "fixed inset-0 overflow-hidden" }, O0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, F0 = { class: "flex-1" }, I0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, P0 = { class: "flex items-start justify-between space-x-3" }, B0 = { class: "space-y-1" }, E0 = { key: 0 }, D0 = { key: 2 }, N0 = ["innerHTML"], R0 = { class: "flex h-7 items-center" }, H0 = { class: "flex justify-end" }, q0 = /* @__PURE__ */ pe({
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
  emits: ["success", "error", "done", "update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l, d = M(), i = M(1), r = M();
    function c() {
      i.value++, K.value = z(), Fe()?.proxy?.$forceUpdate();
    }
    async function v(R) {
      Object.assign(K.value, R), c(), await jt(() => null);
    }
    It("ModalProvider", {
      openModal: g
    });
    const b = M(), w = M();
    function g(R, ue) {
      b.value = R, w.value = ue;
    }
    async function p(R) {
      w.value && w.value(R), b.value = void 0, w.value = void 0;
    }
    const x = Pl(), { getTypeName: y } = lo(), { typeOf: h, Crud: T, createDto: O } = bt(), E = M(new tt()), _ = f(() => n.panelClass || Re.panelClass(n.formStyle)), Z = f(() => n.formClass || n.formStyle == "card" ? "shadow sm:rounded-md" : tl.formClass), P = f(() => n.headingClass || Re.headingClass(n.formStyle)), F = f(() => n.subHeadingClass || Re.subHeadingClass(n.formStyle)), re = f(() => typeof n.buttonsClass == "string" ? n.buttonsClass : Re.buttonsClass), se = f(() => n.type ? y(n.type) : n.modelValue?.getTypeName ? n.modelValue.getTypeName() : null), B = f(() => n.metaType ?? h(se.value)), z = () => n.modelValue || A(), K = M(z()), j = f(() => x.loading.value), X = f(() => n.heading != null ? n.heading : B.value?.description || Te(se.value));
    t({ forceUpdate: c, props: n, setModel: v, formFields: d, submit: I, close: U, model: K });
    function A() {
      return typeof n.type == "string" ? O(n.type) : n.type ? new n.type() : n.modelValue;
    }
    async function L(R) {
      if (!R || R.tagName != "FORM") {
        console.error("Not a valid form", R);
        return;
      }
      const ue = A();
      let D = qe(ue?.getMethod, (fe) => typeof fe == "function" ? fe() : null) || "POST", G = qe(ue?.createResponse, (fe) => typeof fe == "function" ? fe() : null) == null;
      const te = n.jsconfig;
      if (Gn.hasRequestBody(D)) {
        let fe = new ue.constructor(), de = new FormData(R);
        G ? E.value = await x.apiFormVoid(fe, de, { jsconfig: te }) : E.value = await x.apiForm(fe, de, { jsconfig: te });
      } else {
        let fe = new ue.constructor(ar(K.value));
        console.debug("AutoForm.submit", fe), G ? E.value = await x.apiVoid(fe, { jsconfig: te }) : E.value = await x.api(fe, { jsconfig: te });
      }
      E.value.succeeded ? (a("success", E.value.response), U()) : a("error", E.value.error);
    }
    async function I() {
      L(r.value);
    }
    function ie(R) {
      a("update:modelValue", R);
    }
    function V() {
      a("done");
    }
    const C = M(!1), le = M(""), oe = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    lt(C, () => {
      Ft(oe, le, C.value), C.value || setTimeout(V, 700);
    }), C.value = !0;
    function U() {
      n.formStyle == "slideOver" ? C.value = !1 : V();
    }
    const Q = (R) => {
      R.key === "Escape" && U();
    };
    return ze(() => window.addEventListener("keydown", Q)), Jt(() => window.removeEventListener("keydown", Q)), (R, ue) => {
      const D = N("AutoFormFields"), G = N("FormLoading"), te = N("PrimaryButton"), fe = N("CloseButton"), de = N("SecondaryButton"), he = N("ModalLookup");
      return o(), u("div", null, [
        B.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: k(_.value)
        }, [
          s("form", {
            ref_key: "elForm",
            ref: r,
            onSubmit: ue[0] || (ue[0] = Ee((je) => L(je.target), ["prevent"])),
            autocomplete: "off",
            class: k(e.innerFormClass)
          }, [
            s("div", {
              class: k(e.bodyClass)
            }, [
              s("div", {
                class: k(e.headerClass)
              }, [
                R.$slots.heading ? (o(), u("div", L0, [
                  W(R.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: k(P.value)
                }, S(X.value), 3)),
                R.$slots.subheading ? (o(), u("div", V0, [
                  W(R.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: k(F.value)
                }, S(e.subHeading), 3)) : B.value?.notes ? (o(), u("p", {
                  key: 4,
                  class: k(["notes", F.value]),
                  innerHTML: B.value?.notes
                }, null, 10, A0)) : $("", !0)
              ], 2),
              W(R.$slots, "header", {
                instance: Fe()?.exposed,
                model: K.value
              }),
              ue[5] || (ue[5] = s("input", {
                type: "submit",
                class: "hidden"
              }, null, -1)),
              (o(), J(D, {
                ref_key: "formFields",
                ref: d,
                key: i.value,
                type: e.type,
                modelValue: K.value,
                "onUpdate:modelValue": ie,
                api: E.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
              W(R.$slots, "footer", {
                instance: Fe()?.exposed,
                model: K.value
              })
            ], 2),
            W(R.$slots, "buttons", {}, () => [
              s("div", {
                class: k(re.value)
              }, [
                s("div", null, [
                  W(R.$slots, "leftbuttons", {
                    instance: Fe()?.exposed,
                    model: K.value
                  })
                ]),
                s("div", null, [
                  e.showLoading && j.value ? (o(), J(G, { key: 0 })) : $("", !0)
                ]),
                s("div", M0, [
                  ue[6] || (ue[6] = s("div", null, null, -1)),
                  me(te, {
                    disabled: j.value || (e.allowSubmit ? !e.allowSubmit(K.value) : !1)
                  }, {
                    default: we(() => [
                      ve(S(e.submitLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  W(R.$slots, "rightbuttons", {
                    instance: Fe()?.exposed,
                    model: K.value
                  })
                ])
              ], 2)
            ])
          ], 34)
        ], 2)) : (o(), u("div", T0, [
          ue[8] || (ue[8] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", j0, [
            s("div", {
              onMousedown: U,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: ue[2] || (ue[2] = Ee(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: k(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", le.value])
                }, [
                  s("form", {
                    ref_key: "elForm",
                    ref: r,
                    class: k(Z.value),
                    onSubmit: ue[1] || (ue[1] = Ee((je) => L(je.target), ["prevent"]))
                  }, [
                    s("div", O0, [
                      s("div", F0, [
                        s("div", I0, [
                          s("div", P0, [
                            s("div", B0, [
                              R.$slots.heading ? (o(), u("div", E0, [
                                W(R.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: k(P.value)
                              }, S(X.value), 3)),
                              R.$slots.subheading ? (o(), u("div", D0, [
                                W(R.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: k(F.value)
                              }, S(e.subHeading), 3)) : B.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: k(["notes", F.value]),
                                innerHTML: B.value?.notes
                              }, null, 10, N0)) : $("", !0)
                            ]),
                            s("div", R0, [
                              me(fe, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: U
                              })
                            ])
                          ])
                        ]),
                        W(R.$slots, "header", {
                          instance: Fe()?.exposed,
                          model: K.value
                        }),
                        (o(), J(D, {
                          ref_key: "formFields",
                          ref: d,
                          key: i.value,
                          type: e.type,
                          modelValue: K.value,
                          "onUpdate:modelValue": ie,
                          api: E.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["type", "modelValue", "api", "configureField", "configureFormLayout"])),
                        W(R.$slots, "footer", {
                          instance: Fe()?.exposed,
                          model: K.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: k(re.value)
                    }, [
                      s("div", null, [
                        W(R.$slots, "leftbuttons", {
                          instance: Fe()?.exposed,
                          model: K.value
                        })
                      ]),
                      s("div", null, [
                        e.showLoading && j.value ? (o(), J(G, { key: 0 })) : $("", !0)
                      ]),
                      s("div", H0, [
                        me(de, {
                          onClick: U,
                          disabled: j.value
                        }, {
                          default: we(() => [...ue[7] || (ue[7] = [
                            ve("Cancel", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"]),
                        me(te, {
                          class: "ml-4",
                          disabled: j.value || (e.allowSubmit ? !e.allowSubmit(K.value) : !1)
                        }, {
                          default: we(() => [
                            ve(S(e.submitLabel), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        W(R.$slots, "rightbuttons", {
                          instance: Fe()?.exposed,
                          model: K.value
                        })
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", C0, [
          s("p", S0, [
            ue[3] || (ue[3] = ve("Could not create form for unknown ", -1)),
            ue[4] || (ue[4] = s("b", null, "type", -1)),
            ve(" " + S(se.value), 1)
          ])
        ])),
        b.value?.name == "ModalLookup" && b.value.ref ? (o(), J(he, {
          key: 3,
          "ref-info": b.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : $("", !0)
      ]);
    };
  }
}), z0 = { key: 0 }, U0 = { class: "text-red-700" }, K0 = { key: 0 }, Q0 = { key: 2 }, J0 = ["innerHTML"], G0 = { class: "flex justify-end" }, W0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, Z0 = { class: "fixed inset-0 overflow-hidden" }, X0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Y0 = { class: "flex-1" }, _0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, ef = { class: "flex items-start justify-between space-x-3" }, tf = { class: "space-y-1" }, lf = { key: 0 }, nf = { key: 2 }, sf = ["innerHTML"], af = { class: "flex h-7 items-center" }, of = { class: "flex justify-end" }, rf = /* @__PURE__ */ pe({
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
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l, d = M(), i = M(1);
    function r() {
      i.value++, d.value?.forceUpdate(), Fe()?.proxy?.$forceUpdate();
    }
    function c(Q) {
      Object.assign(P.value, Q), r();
    }
    function v(Q) {
    }
    It("ModalProvider", {
      openModal: g
    });
    const b = M(), w = M();
    function g(Q, R) {
      b.value = Q, w.value = R;
    }
    async function p(Q) {
      w.value && w.value(Q), b.value = void 0, w.value = void 0;
    }
    const { typeOf: x, typeProperties: y, Crud: h, createDto: T, formValues: O } = bt(), E = f(() => Gt(n.type)), _ = f(() => x(E.value)), P = M(typeof n.type == "string" ? T(n.type) : n.type ? new n.type() : null);
    t({ forceUpdate: r, props: n, setModel: c, formFields: d, model: P });
    const F = f(() => n.panelClass || Re.panelClass(n.formStyle)), re = f(() => n.formClass || Re.formClass(n.formStyle)), se = f(() => n.headingClass || Re.headingClass(n.formStyle)), B = f(() => n.subHeadingClass || Re.subHeadingClass(n.formStyle)), z = f(() => n.buttonsClass || Re.buttonsClass), K = f(() => h.model(_.value)), j = f(() => n.heading || x(E.value)?.description || (K.value ? `New ${Te(K.value)}` : Te(E.value))), X = M(new tt());
    let A = Pl(), L = f(() => A.loading.value);
    Y.interceptors.has("AutoCreateForm.new") && Y.interceptors.invoke("AutoCreateForm.new", { props: n, model: P });
    async function I(Q) {
      let R = Q.target;
      if (!n.autosave) {
        a("save", new P.value.constructor(O(R, y(_.value))));
        return;
      }
      let ue = qe(P.value?.getMethod, (G) => typeof G == "function" ? G() : null) || "POST", D = qe(P.value?.createResponse, (G) => typeof G == "function" ? G() : null) == null;
      if (Gn.hasRequestBody(ue)) {
        let G = new P.value.constructor(), te = new FormData(R);
        D ? X.value = await A.apiFormVoid(G, te, { jsconfig: "eccn" }) : X.value = await A.apiForm(G, te, { jsconfig: "eccn" });
      } else {
        let G = O(R, y(_.value)), te = new P.value.constructor(G);
        D ? X.value = await A.apiVoid(te, { jsconfig: "eccn" }) : X.value = await A.api(te, { jsconfig: "eccn" });
      }
      X.value.succeeded ? (R.reset(), a("save", X.value.response)) : a("error", X.value.error);
    }
    function ie() {
      a("done");
    }
    const V = M(!1), C = M(""), le = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    lt(V, () => {
      Ft(le, C, V.value), V.value || setTimeout(ie, 700);
    }), V.value = !0;
    function oe() {
      n.formStyle == "slideOver" ? V.value = !1 : ie();
    }
    const U = (Q) => {
      Q.key === "Escape" && oe();
    };
    return ze(() => window.addEventListener("keydown", U)), Jt(() => window.removeEventListener("keydown", U)), (Q, R) => {
      const ue = N("AutoFormFields"), D = N("FormLoading"), G = N("SecondaryButton"), te = N("PrimaryButton"), fe = N("CloseButton"), de = N("ModalLookup");
      return o(), u("div", null, [
        _.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: k(F.value)
        }, [
          s("form", {
            onSubmit: Ee(I, ["prevent"])
          }, [
            s("div", {
              class: k(re.value)
            }, [
              s("div", null, [
                Q.$slots.heading ? (o(), u("div", K0, [
                  W(Q.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: k(se.value)
                }, S(j.value), 3)),
                Q.$slots.subheading ? (o(), u("div", Q0, [
                  W(Q.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: k(B.value)
                }, S(e.subHeading), 3)) : _.value?.notes ? (o(), u("p", {
                  key: 4,
                  class: k(["notes", B.value]),
                  innerHTML: _.value?.notes
                }, null, 10, J0)) : $("", !0)
              ]),
              W(Q.$slots, "header", {
                formInstance: Fe()?.exposed,
                model: P.value
              }),
              (o(), J(ue, {
                ref_key: "formFields",
                ref: d,
                key: i.value,
                modelValue: P.value,
                "onUpdate:modelValue": v,
                api: X.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              W(Q.$slots, "footer", {
                formInstance: Fe()?.exposed,
                model: P.value
              })
            ], 2),
            s("div", {
              class: k(z.value)
            }, [
              s("div", null, [
                e.showLoading && ae(L) ? (o(), J(D, { key: 0 })) : $("", !0)
              ]),
              s("div", G0, [
                e.showCancel ? (o(), J(G, {
                  key: 0,
                  onClick: oe,
                  disabled: ae(L)
                }, {
                  default: we(() => [...R[3] || (R[3] = [
                    ve("Cancel", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : $("", !0),
                me(te, {
                  type: "submit",
                  class: "ml-4",
                  disabled: ae(L)
                }, {
                  default: we(() => [...R[4] || (R[4] = [
                    ve("Save", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), u("div", W0, [
          R[7] || (R[7] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", Z0, [
            s("div", {
              onMousedown: oe,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: R[0] || (R[0] = Ee(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: k(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", C.value])
                }, [
                  s("form", {
                    class: k(re.value),
                    onSubmit: Ee(I, ["prevent"])
                  }, [
                    s("div", X0, [
                      s("div", Y0, [
                        s("div", _0, [
                          s("div", ef, [
                            s("div", tf, [
                              Q.$slots.heading ? (o(), u("div", lf, [
                                W(Q.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: k(se.value)
                              }, S(j.value), 3)),
                              Q.$slots.subheading ? (o(), u("div", nf, [
                                W(Q.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: k(B.value)
                              }, S(e.subHeading), 3)) : _.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: k(["notes", B.value]),
                                innerHTML: _.value?.notes
                              }, null, 10, sf)) : $("", !0)
                            ]),
                            s("div", af, [
                              me(fe, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: oe
                              })
                            ])
                          ])
                        ]),
                        W(Q.$slots, "header", {
                          formInstance: Fe()?.exposed,
                          model: P.value
                        }),
                        (o(), J(ue, {
                          ref_key: "formFields",
                          ref: d,
                          key: i.value,
                          modelValue: P.value,
                          "onUpdate:modelValue": v,
                          api: X.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        W(Q.$slots, "footer", {
                          formInstance: Fe()?.exposed,
                          model: P.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: k(z.value)
                    }, [
                      s("div", null, [
                        e.showLoading && ae(L) ? (o(), J(D, { key: 0 })) : $("", !0)
                      ]),
                      s("div", of, [
                        e.showCancel ? (o(), J(G, {
                          key: 0,
                          onClick: oe,
                          disabled: ae(L)
                        }, {
                          default: we(() => [...R[5] || (R[5] = [
                            ve("Cancel", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])) : $("", !0),
                        me(te, {
                          type: "submit",
                          class: "ml-4",
                          disabled: ae(L)
                        }, {
                          default: we(() => [...R[6] || (R[6] = [
                            ve("Save", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", z0, [
          s("p", U0, [
            R[1] || (R[1] = ve("Could not create form for unknown ", -1)),
            R[2] || (R[2] = s("b", null, "type", -1)),
            ve(" " + S(E.value), 1)
          ])
        ])),
        b.value?.name == "ModalLookup" && b.value.ref ? (o(), J(de, {
          key: 3,
          "ref-info": b.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : $("", !0)
      ]);
    };
  }
}), uf = { key: 0 }, df = { class: "text-red-700" }, cf = { key: 0 }, ff = { key: 2 }, mf = ["innerHTML"], vf = { class: "flex justify-end" }, pf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, gf = { class: "fixed inset-0 overflow-hidden" }, yf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, hf = { class: "flex-1" }, bf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, wf = { class: "flex items-start justify-between space-x-3" }, kf = { class: "space-y-1" }, xf = { key: 0 }, $f = { key: 2 }, Cf = ["innerHTML"], Sf = { class: "flex h-7 items-center" }, Lf = { class: "flex justify-end" }, Vf = /* @__PURE__ */ pe({
  __name: "AutoEditForm",
  props: {
    modelValue: {},
    deleteType: {},
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
    showCancel: { type: Boolean },
    configureField: {},
    configureFormLayout: {}
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l, d = M(), i = M(1);
    function r() {
      i.value++, se.value = re(), Fe()?.proxy?.$forceUpdate();
    }
    function c(de) {
      Object.assign(se.value, de);
    }
    function v(de) {
    }
    It("ModalProvider", {
      openModal: g
    });
    const b = M(), w = M();
    function g(de, he) {
      b.value = de, w.value = he;
    }
    async function p(de) {
      w.value && w.value(de), b.value = void 0, w.value = void 0;
    }
    const { typeOf: x, apiOf: y, typeProperties: h, createFormLayout: T, getPrimaryKey: O, Crud: E, createDto: _, formValues: Z } = bt(), P = f(() => Gt(n.type)), F = f(() => x(P.value)), re = () => typeof n.type == "string" ? _(n.type, xl(n.modelValue)) : n.type ? new n.type(xl(n.modelValue)) : null, se = M(re());
    t({ forceUpdate: r, props: n, setModel: c, formFields: d, model: se });
    const B = f(() => n.panelClass || Re.panelClass(n.formStyle)), z = f(() => n.formClass || Re.formClass(n.formStyle)), K = f(() => n.headingClass || Re.headingClass(n.formStyle)), j = f(() => n.subHeadingClass || Re.subHeadingClass(n.formStyle)), X = f(() => n.buttonsClass || Re.buttonsClass), A = f(() => E.model(F.value)), L = f(() => n.heading || x(P.value)?.description || (A.value ? `Update ${Te(A.value)}` : Te(P.value))), I = M(new tt());
    let ie = Object.assign({}, xl(n.modelValue));
    Y.interceptors.has("AutoEditForm.new") && Y.interceptors.invoke("AutoEditForm.new", { props: n, model: se, origModel: ie });
    let V = Pl(), C = f(() => V.loading.value);
    const le = () => qe(x(E.model(F.value)), (de) => O(de));
    function oe(de) {
      const { op: he, prop: je } = de;
      he && (E.isPatch(he) || E.isUpdate(he)) && (de.disabled = je?.isPrimaryKey), n.configureField && n.configureField(de);
    }
    async function U(de) {
      let he = de.target;
      if (!n.autosave) {
        a("save", new se.value.constructor(Z(he, h(F.value))));
        return;
      }
      let je = qe(se.value?.getMethod, (Le) => typeof Le == "function" ? Le() : null) || "POST", Ne = qe(se.value?.createResponse, (Le) => typeof Le == "function" ? Le() : null) == null, Ce = le();
      if (Gn.hasRequestBody(je)) {
        let Le = new se.value.constructor(), Ae = ce(n.modelValue, Ce.name), Je = new FormData(he);
        Ce && !Array.from(Je.keys()).some((Ge) => Ge.toLowerCase() == Ce.name.toLowerCase()) && Je.append(Ce.name, Ae);
        let ut = [];
        const Bt = P.value && y(P.value);
        if (Bt && E.isPatch(Bt)) {
          let Ge = T(F.value), rt = {};
          if (Ce && (rt[Ce.name] = Ae), Ge.forEach((Ue) => {
            let st = Ue.id, ct = ce(ie, st);
            if (Ce && Ce.name.toLowerCase() === st.toLowerCase())
              return;
            let ne = Je.get(st);
            Y.interceptors.has("AutoEditForm.save.formLayout") && Y.interceptors.invoke("AutoEditForm.save.formLayout", { origValue: ct, formLayout: Ge, input: Ue, newValue: ne });
            let ee = ne != null, Oe = Ue.type === "checkbox" ? ee !== !!ct : Ue.type === "file" ? ee : ne != ct;
            !ne && !ct && (Oe = !1), Oe && (ne ? rt[st] = ne : Ue.type !== "file" && ut.push(st));
          }), Y.interceptors.has("AutoEditForm.save") && Y.interceptors.invoke("AutoEditForm.save", { origModel: ie, formLayout: Ge, dirtyValues: rt }), Array.from(Je.keys()).filter((Ue) => !rt[Ue]).forEach((Ue) => Je.delete(Ue)), Array.from(Je.keys()).filter((Ue) => Ue.toLowerCase() != Ce.name.toLowerCase()).length == 0 && ut.length == 0) {
            te();
            return;
          }
        }
        const Et = ut.length > 0 ? { jsconfig: "eccn", reset: ut } : { jsconfig: "eccn" };
        Ne ? I.value = await V.apiFormVoid(Le, Je, Et) : I.value = await V.apiForm(Le, Je, Et);
      } else {
        let Le = Z(he, h(F.value));
        Ce && !ce(Le, Ce.name) && (Le[Ce.name] = ce(n.modelValue, Ce.name));
        let Ae = new se.value.constructor(Le);
        Ne ? I.value = await V.apiVoid(Ae, { jsconfig: "eccn" }) : I.value = await V.api(Ae, { jsconfig: "eccn" });
      }
      I.value.succeeded ? (he.reset(), a("save", I.value.response)) : a("error", I.value.error);
    }
    async function Q(de) {
      let he = le();
      const je = he ? ce(n.modelValue, he.name) : null;
      if (!je) {
        console.error(`Could not find Primary Key for Type ${P.value} (${A.value})`);
        return;
      }
      const Ne = { [he.name]: je }, Ce = typeof n.deleteType == "string" ? _(n.deleteType, Ne) : n.deleteType ? new n.deleteType(Ne) : null;
      qe(Ce.createResponse, (Ae) => typeof Ae == "function" ? Ae() : null) == null ? I.value = await V.apiVoid(Ce) : I.value = await V.api(Ce), I.value.succeeded ? a("delete", I.value.response) : a("error", I.value.error);
    }
    function R() {
      a("done");
    }
    const ue = M(!1), D = M(""), G = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    lt(ue, () => {
      Ft(G, D, ue.value), ue.value || setTimeout(R, 700);
    }), ue.value = !0;
    function te() {
      n.formStyle == "slideOver" ? ue.value = !1 : R();
    }
    const fe = (de) => {
      de.key === "Escape" && te();
    };
    return ze(() => window.addEventListener("keydown", fe)), Jt(() => window.removeEventListener("keydown", fe)), (de, he) => {
      const je = N("AutoFormFields"), Ne = N("ConfirmDelete"), Ce = N("FormLoading"), Le = N("SecondaryButton"), Ae = N("PrimaryButton"), Je = N("CloseButton"), ut = N("ModalLookup");
      return o(), u("div", null, [
        F.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: k(B.value)
        }, [
          s("form", {
            onSubmit: Ee(U, ["prevent"])
          }, [
            s("div", {
              class: k(z.value)
            }, [
              s("div", null, [
                de.$slots.heading ? (o(), u("div", cf, [
                  W(de.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: k(K.value)
                }, S(L.value), 3)),
                de.$slots.subheading ? (o(), u("div", ff, [
                  W(de.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: k(j.value)
                }, S(e.subHeading), 3)) : F.value?.notes ? (o(), u("p", {
                  key: 4,
                  class: k(["notes", j.value]),
                  innerHTML: F.value?.notes
                }, null, 10, mf)) : $("", !0)
              ]),
              W(de.$slots, "header", {
                formInstance: Fe()?.exposed,
                model: se.value
              }),
              (o(), J(je, {
                ref_key: "formFields",
                ref: d,
                key: i.value,
                modelValue: se.value,
                "onUpdate:modelValue": v,
                api: I.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              W(de.$slots, "footer", {
                formInstance: Fe()?.exposed,
                model: se.value
              })
            ], 2),
            s("div", {
              class: k(X.value)
            }, [
              s("div", null, [
                e.deleteType ? (o(), J(Ne, {
                  key: 0,
                  onDelete: Q
                })) : $("", !0)
              ]),
              s("div", null, [
                e.showLoading && ae(C) ? (o(), J(Ce, { key: 0 })) : $("", !0)
              ]),
              s("div", vf, [
                e.showCancel ? (o(), J(Le, {
                  key: 0,
                  onClick: te,
                  disabled: ae(C)
                }, {
                  default: we(() => [...he[3] || (he[3] = [
                    ve("Cancel", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])) : $("", !0),
                me(Ae, {
                  type: "submit",
                  class: "ml-4",
                  disabled: ae(C)
                }, {
                  default: we(() => [...he[4] || (he[4] = [
                    ve("Save", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 32)
        ], 2)) : (o(), u("div", pf, [
          he[7] || (he[7] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", gf, [
            s("div", {
              onMousedown: te,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: he[0] || (he[0] = Ee(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: k(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", D.value])
                }, [
                  s("form", {
                    class: k(z.value),
                    onSubmit: Ee(U, ["prevent"])
                  }, [
                    s("div", yf, [
                      s("div", hf, [
                        s("div", bf, [
                          s("div", wf, [
                            s("div", kf, [
                              de.$slots.heading ? (o(), u("div", xf, [
                                W(de.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: k(K.value)
                              }, S(L.value), 3)),
                              de.$slots.subheading ? (o(), u("div", $f, [
                                W(de.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: k(j.value)
                              }, S(e.subHeading), 3)) : F.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: k(["notes", j.value]),
                                innerHTML: F.value?.notes
                              }, null, 10, Cf)) : $("", !0)
                            ]),
                            s("div", Sf, [
                              me(Je, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: te
                              })
                            ])
                          ])
                        ]),
                        W(de.$slots, "header", {
                          formInstance: Fe()?.exposed,
                          model: se.value
                        }),
                        (o(), J(je, {
                          ref_key: "formFields",
                          ref: d,
                          key: i.value,
                          modelValue: se.value,
                          "onUpdate:modelValue": v,
                          api: I.value,
                          configureField: oe,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        W(de.$slots, "footer", {
                          formInstance: Fe()?.exposed,
                          model: se.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: k(X.value)
                    }, [
                      s("div", null, [
                        e.deleteType ? (o(), J(Ne, {
                          key: 0,
                          onDelete: Q
                        })) : $("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && ae(C) ? (o(), J(Ce, { key: 0 })) : $("", !0)
                      ]),
                      s("div", Lf, [
                        e.showCancel ? (o(), J(Le, {
                          key: 0,
                          onClick: te,
                          disabled: ae(C)
                        }, {
                          default: we(() => [...he[5] || (he[5] = [
                            ve("Cancel", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])) : $("", !0),
                        me(Ae, {
                          type: "submit",
                          class: "ml-4",
                          disabled: ae(C)
                        }, {
                          default: we(() => [...he[6] || (he[6] = [
                            ve("Save", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 34)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", uf, [
          s("p", df, [
            he[1] || (he[1] = ve("Could not create form for unknown ", -1)),
            he[2] || (he[2] = s("b", null, "type", -1)),
            ve(" " + S(P.value), 1)
          ])
        ])),
        b.value?.name == "ModalLookup" && b.value.ref ? (o(), J(ut, {
          key: 3,
          "ref-info": b.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : $("", !0)
      ]);
    };
  }
}), Af = { key: 0 }, Mf = { class: "text-red-700" }, Tf = { key: 0 }, jf = { key: 2 }, Of = ["innerHTML"], Ff = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, If = { class: "fixed inset-0 overflow-hidden" }, Pf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Bf = { class: "flex-1" }, Ef = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Df = { class: "flex items-start justify-between space-x-3" }, Nf = { class: "space-y-1" }, Rf = { key: 0 }, Hf = { key: 2 }, qf = ["innerHTML"], zf = { class: "flex h-7 items-center" }, Uf = /* @__PURE__ */ pe({
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
    subHeading: {},
    showLoading: { type: Boolean },
    deleteType: {}
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { emit: t }) {
    const l = e, n = t, { typeOf: a, getPrimaryKey: d, Crud: i, createDto: r } = bt(), c = f(() => l.typeName ?? l.apis.dataModel.name), v = f(() => a(c.value)), m = f(() => l.panelClass || Re.panelClass(l.formStyle)), b = f(() => l.formClass || Re.formClass(l.formStyle)), w = f(() => l.headingClass || Re.headingClass(l.formStyle)), g = f(() => l.subHeadingClass || Re.subHeadingClass(l.formStyle)), p = f(() => l.heading || a(c.value)?.description || (l.model?.id ? `${Te(c.value)} ${l.model.id}` : "View " + Te(c.value))), x = M(new tt());
    Object.assign({}, xl(l.model)), Y.interceptors.has("AutoViewForm.new") && Y.interceptors.invoke("AutoViewForm.new", { props: l });
    let y = Pl(), h = f(() => y.loading.value);
    const T = () => qe(v.value, (B) => d(B)), O = f(() => v.value);
    async function E(B) {
      let z = T();
      const K = z ? ce(l.model, z.name) : null;
      if (!K) {
        console.error(`Could not find Primary Key for Type ${c.value} (${O.value})`);
        return;
      }
      const j = { [z.name]: K }, X = typeof l.deleteType == "string" ? r(l.deleteType, j) : l.deleteType ? new l.deleteType(j) : null;
      qe(X.createResponse, (L) => typeof L == "function" ? L() : null) == null ? x.value = await y.apiVoid(X) : x.value = await y.api(X), x.value.succeeded ? n("delete", x.value.response) : n("error", x.value.error);
    }
    function _() {
      l.done && l.done();
    }
    const Z = M(!1), P = M(""), F = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    lt(Z, () => {
      Ft(F, P, Z.value), Z.value || setTimeout(_, 700);
    }), Z.value = !0;
    function re() {
      l.formStyle == "slideOver" ? Z.value = !1 : _();
    }
    const se = (B) => {
      B.key === "Escape" && re();
    };
    return ze(() => window.addEventListener("keydown", se)), Jt(() => window.removeEventListener("keydown", se)), (B, z) => {
      const K = N("MarkupModel"), j = N("CloseButton"), X = N("ConfirmDelete"), A = N("FormLoading");
      return o(), u("div", null, [
        c.value ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: k(m.value)
        }, [
          s("div", {
            class: k(b.value)
          }, [
            s("div", null, [
              B.$slots.heading ? (o(), u("div", Tf, [
                W(B.$slots, "heading")
              ])) : (o(), u("h3", {
                key: 1,
                class: k(w.value)
              }, S(p.value), 3)),
              B.$slots.subheading ? (o(), u("div", jf, [
                W(B.$slots, "subheading")
              ])) : e.subHeading ? (o(), u("p", {
                key: 3,
                class: k(g.value)
              }, S(e.subHeading), 3)) : v.value?.notes ? (o(), u("p", {
                key: 4,
                class: k(["notes", g.value]),
                innerHTML: v.value?.notes
              }, null, 10, Of)) : $("", !0)
            ]),
            me(K, { value: e.model }, null, 8, ["value"])
          ], 2)
        ], 2)) : (o(), u("div", Ff, [
          z[4] || (z[4] = s("div", { class: "fixed inset-0" }, null, -1)),
          s("div", If, [
            s("div", {
              onMousedown: re,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: z[0] || (z[0] = Ee(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: k(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", P.value])
                }, [
                  s("div", {
                    class: k(b.value)
                  }, [
                    s("div", Pf, [
                      s("div", Bf, [
                        s("div", Ef, [
                          s("div", Df, [
                            s("div", Nf, [
                              B.$slots.heading ? (o(), u("div", Rf, [
                                W(B.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: k(w.value)
                              }, S(p.value), 3)),
                              B.$slots.subheading ? (o(), u("div", Hf, [
                                W(B.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: k(g.value)
                              }, S(e.subHeading), 3)) : v.value?.notes ? (o(), u("p", {
                                key: 4,
                                class: k(["notes", g.value]),
                                innerHTML: v.value?.notes
                              }, null, 10, qf)) : $("", !0)
                            ]),
                            s("div", zf, [
                              me(j, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: re
                              })
                            ])
                          ])
                        ]),
                        s("div", null, [
                          me(K, {
                            value: e.model,
                            tableClass: "w-full border-separate border-spacing-y-1",
                            basicTrClass: "group",
                            basicThClass: "py-1 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300",
                            basicTdClass: "py-1 px-4 text-sm text-gray-900",
                            complexTitleTrClass: "group",
                            complexTitleTdClass: "py-1 px-4 font-semibold bg-indigo-600 dark:bg-indigo-700 text-white",
                            complexBodyTrClass: "group",
                            complexBodyTdClass: "py-1 px-4 bg-white dark:bg-gray-900"
                          }, null, 8, ["value"])
                        ])
                      ])
                    ]),
                    s("div", {
                      class: k(ae(Re).buttonsClass)
                    }, [
                      s("div", null, [
                        e.deleteType ? (o(), J(X, {
                          key: 0,
                          onDelete: E
                        })) : $("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && ae(h) ? (o(), J(A, { key: 0 })) : $("", !0)
                      ]),
                      z[3] || (z[3] = s("div", { class: "flex justify-end" }, null, -1))
                    ], 2)
                  ], 2)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", Af, [
          s("p", Mf, [
            z[1] || (z[1] = ve("Could not create view for unknown ", -1)),
            z[2] || (z[2] = s("b", null, "type", -1)),
            ve(" " + S(c.value), 1)
          ])
        ]))
      ]);
    };
  }
}), Kf = /* @__PURE__ */ pe({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let l = M(!1);
    const n = t, a = () => {
      l.value && n("delete");
    }, d = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      l.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (i, r) => (o(), u(ye, null, [
      Ot(s("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": r[0] || (r[0] = (c) => oa(l) ? l.value = c : l = c)
      }, null, 512), [
        [Kn, ae(l)]
      ]),
      r[2] || (r[2] = s("label", {
        for: "confirmDelete",
        class: "ml-2 mr-2 select-none"
      }, "confirm", -1)),
      s("span", xe({
        onClick: Ee(a, ["prevent"]),
        class: d.value
      }, i.$attrs), [
        W(i.$slots, "default", {}, () => [
          r[1] || (r[1] = ve("Delete", -1))
        ])
      ], 16)
    ], 64));
  }
}), Qf = {
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
}, Gf = { class: "ml-2 mt-1 text-gray-400" }, Wf = /* @__PURE__ */ pe({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Pe("ApiState", void 0), (t, l) => (o(), u("div", Qf, [
      e.icon ? (o(), u("svg", Jf, [...l[0] || (l[0] = [
        sn('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3)
      ])])) : $("", !0),
      s("span", Gf, S(e.text), 1)
    ]));
  }
}), Zf = ["onClick"], Xf = {
  key: 3,
  class: "flex justify-between items-center"
}, Yf = { class: "mr-1 select-none" }, _f = ["onClick"], em = /* @__PURE__ */ pe({
  inheritAttrs: !1,
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    ctx: {},
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
    const l = e, n = t, a = M(), d = M(null), i = (V) => d.value === V, r = ml(), c = Object.keys(r), v = c.map((V) => V.toLowerCase()), m = (V) => v.includes(V.toLowerCase()), b = (V) => c.find((C) => C.toLowerCase() == V.toLowerCase() + "-header"), w = (V) => c.find((C) => C.toLowerCase() == V.toLowerCase()), g = f(() => en(l.items).filter((V) => m(V) || m(V + "-header"))), p = f(() => l.ctx?.dataModelName || Gt(l.type)), x = f(() => l.ctx?.dataModel || nt(p.value)), y = f(() => l.ctx?.dataModelProps || ot(x.value));
    function h(V) {
      const C = l.headerTitles && ce(l.headerTitles, V) || V;
      return l.headerTitle ? l.headerTitle(C) : Sl(C);
    }
    function T(V) {
      const C = V.toLowerCase();
      return y.value.find((le) => le.name.toLowerCase() == C);
    }
    function O(V) {
      const C = T(V);
      return C?.format ? C.format : C?.type == "TimeSpan" || C?.type == "TimeOnly" ? { method: "time" } : null;
    }
    const E = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function _(V) {
      const C = l.visibleFrom && ce(l.visibleFrom, V);
      return C && qe(E[C], (le) => `hidden ${le}`);
    }
    const Z = f(() => l.gridClass ?? ke.getGridClass(l.tableStyle)), P = f(() => l.grid2Class ?? ke.getGrid2Class(l.tableStyle)), F = f(() => l.grid3Class ?? ke.getGrid3Class(l.tableStyle)), re = f(() => l.grid4Class ?? ke.getGrid4Class(l.tableStyle)), se = f(() => l.tableClass ?? ke.getTableClass(l.tableStyle)), B = f(() => l.tbodyClass ?? ke.getTbodyClass(l.tbodyClass)), z = f(() => l.theadClass ?? ke.getTheadClass(l.tableStyle)), K = f(() => l.theadRowClass ?? ke.getTheadRowClass(l.tableStyle)), j = f(() => l.theadCellClass ?? ke.getTheadCellClass(l.tableStyle));
    function X(V, C) {
      return l.rowClass ? l.rowClass(V, C) : ke.getTableRowClass(l.tableStyle, C, !!(l.isSelected && l.isSelected(V)), l.isSelected != null);
    }
    function A(V, C) {
      return l.rowStyle ? l.rowStyle(V, C) : void 0;
    }
    const L = f(() => {
      const V = (typeof l.selectedColumns == "string" ? l.selectedColumns.split(",") : l.selectedColumns) || (g.value.length > 0 ? g.value : en(l.items)), C = y.value.reduce((le, oe) => (le[oe.name.toLowerCase()] = oe.format, le), {});
      return V.filter((le) => C[le.toLowerCase()]?.method != "hidden");
    });
    function I(V, C) {
      n("headerSelected", C, V);
    }
    function ie(V, C, le) {
      n("rowSelected", le, V);
    }
    return (V, C) => {
      const le = N("CellFormat"), oe = N("PreviewFormat");
      return e.items.length ? (o(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: k(Z.value)
      }, [
        s("div", {
          class: k(P.value)
        }, [
          s("div", {
            class: k(F.value)
          }, [
            s("div", {
              class: k(re.value)
            }, [
              s("table", {
                class: k(se.value)
              }, [
                s("thead", {
                  class: k(z.value)
                }, [
                  s("tr", {
                    class: k(K.value)
                  }, [
                    (o(!0), u(ye, null, be(L.value, (U) => (o(), u("td", {
                      class: k([_(U), j.value, i(U) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      s("div", {
                        onClick: (Q) => I(Q, U)
                      }, [
                        ae(r)[U + "-header"] ? W(V.$slots, U + "-header", { column: U }, void 0, void 0, 0) : b(U) ? W(V.$slots, b(U), { column: U }, void 0, void 0, 1) : ae(r).header ? W(V.$slots, "header", {
                          column: U,
                          label: h(U)
                        }, void 0, void 0, 2) : (o(), u("div", Xf, [
                          s("span", Yf, S(h(U)), 1)
                        ]))
                      ], 8, Zf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                s("tbody", {
                  class: k(B.value)
                }, [
                  (o(!0), u(ye, null, be(e.items, (U, Q) => (o(), u("tr", {
                    class: k(X(U, Q)),
                    style: Un(A(U, Q)),
                    onClick: (R) => ie(R, Q, U)
                  }, [
                    (o(!0), u(ye, null, be(L.value, (R) => (o(), u("td", {
                      class: k([_(R), ae(ke).tableCellClass])
                    }, [
                      ae(r)[R] ? W(V.$slots, R, xe({ ref_for: !0 }, U), void 0, void 0, 0) : w(R) ? W(V.$slots, w(R), xe({ ref_for: !0 }, U), void 0, void 0, 1) : T(R) ? (o(), J(le, {
                        key: 2,
                        type: x.value,
                        propType: T(R),
                        modelValue: U
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), J(oe, {
                        key: 3,
                        value: ae(ce)(U, R),
                        format: O(R),
                        modelValue: U
                      }, null, 8, ["value", "format", "modelValue"]))
                    ], 2))), 256))
                  ], 14, _f))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : $("", !0);
    };
  }
}), tm = pe({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: l } = bt();
    function n(a) {
      return a?.format ? a.format : a?.type == "TimeSpan" || a?.type == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      const a = n(e.propType), d = ce(e.modelValue, e.propType.name), i = Object.assign({}, e, t), r = Rt("span", { innerHTML: Al(d, a, i) }), c = Ml(d) && Array.isArray(d) ? Rt("span", {}, [
        Rt("span", { class: "mr-2" }, `${d.length}`),
        r
      ]) : r, v = e.propType?.ref;
      if (!v)
        return c;
      const b = ot(e.type).find((h) => h.type === v.model);
      if (!b)
        return c;
      const w = ce(e.modelValue, b.name), g = w && v.refLabel && ce(w, v.refLabel);
      if (!g)
        return c;
      const x = l(v.model)?.icon, y = x ? Rt(oo, { image: x, class: "w-5 h-5 mr-1" }) : null;
      return Rt("span", { class: "flex", title: `${v.model} ${d}` }, [
        y,
        g
      ]);
    };
  }
}), lm = { key: 0 }, nm = {
  key: 0,
  class: "mr-2"
}, sm = ["innerHTML"], am = ["innerHTML"], om = {
  inheritAttrs: !1
}, rm = /* @__PURE__ */ pe({
  ...om,
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
    const t = e, l = f(() => Array.isArray(t.value));
    return (n, a) => ae(Ml)(e.value) ? (o(), u("span", lm, [
      e.includeCount && l.value ? (o(), u("span", nm, S(e.value.length), 1)) : $("", !0),
      s("span", {
        innerHTML: ae(Al)(e.value, e.format, n.$attrs)
      }, null, 8, sm)
    ])) : (o(), u("span", {
      key: 1,
      innerHTML: ae(Al)(e.value, e.format, n.$attrs)
    }, null, 8, am));
  }
}), im = ["innerHTML"], um = { key: 0 }, dm = { key: 2 }, cm = /* @__PURE__ */ pe({
  __name: "HtmlFormat",
  props: {
    value: {},
    depth: { default: 0 },
    fieldAttrs: {},
    classes: { type: Function, default: (e, t, l, n, a) => n },
    formatText: {}
  },
  setup(e) {
    const t = e;
    function l(v) {
      return typeof v == "string" && typeof t.formatText == "function" ? t.formatText(v) : v;
    }
    const n = f(() => Qt(t.value)), a = f(() => Array.isArray(t.value)), d = (v) => Sl(v), i = (v) => t.fieldAttrs ? t.fieldAttrs(v) : null, r = f(() => en(t.value)), c = (v) => v ? Object.keys(v).map((m) => ({ key: d(m), val: v[m] })) : [];
    return (v, m) => {
      const b = N("HtmlFormat", !0);
      return o(), u("div", {
        class: k(e.depth == 0 ? "prose html-format" : "")
      }, [
        n.value ? (o(), u("div", {
          key: 0,
          innerHTML: l(ae(Al)(e.value))
        }, null, 8, im)) : a.value ? (o(), u("div", {
          key: 1,
          class: k(e.classes("array", "div", e.depth, ae(ke).gridClass))
        }, [
          ae(Qt)(e.value[0]) ? (o(), u("div", um, "[ " + S(l(e.value.join(", "))) + " ]", 1)) : (o(), u("div", {
            key: 1,
            class: k(e.classes("array", "div", e.depth, ae(ke).grid2Class))
          }, [
            s("div", {
              class: k(e.classes("array", "div", e.depth, ae(ke).grid3Class))
            }, [
              s("div", {
                class: k(e.classes("array", "div", e.depth, ae(ke).grid4Class))
              }, [
                s("table", {
                  class: k(e.classes("object", "table", e.depth, ae(ke).tableClass))
                }, [
                  s("thead", {
                    class: k(e.classes("array", "thead", e.depth, ae(ke).theadClass))
                  }, [
                    s("tr", null, [
                      (o(!0), u(ye, null, be(r.value, (w) => (o(), u("th", {
                        class: k(e.classes("array", "th", e.depth, ae(ke).theadCellClass + " whitespace-nowrap"))
                      }, [
                        m[0] || (m[0] = s("b", null, null, -1)),
                        ve(S(l(d(w))), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  s("tbody", null, [
                    (o(!0), u(ye, null, be(e.value, (w, g) => (o(), u("tr", {
                      class: k(e.classes("array", "tr", e.depth, Number(g) % 2 === 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800", Number(g)))
                    }, [
                      (o(!0), u(ye, null, be(r.value, (p) => (o(), u("td", {
                        class: k(e.classes("array", "td", e.depth, ae(ke).tableCellClass))
                      }, [
                        me(b, xe({
                          value: w[p],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes,
                          formatText: e.formatText
                        }, { ref_for: !0 }, i(p)), null, 16, ["value", "field-attrs", "depth", "classes", "formatText"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (o(), u("div", dm, [
          s("table", {
            class: k(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (o(!0), u(ye, null, be(c(e.value), (w) => (o(), u("tr", {
              class: k(e.classes("object", "tr", e.depth, ""))
            }, [
              s("th", {
                class: k(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, S(l(w.key)), 3),
              s("td", {
                class: k(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                me(b, xe({
                  value: w.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes,
                  formatText: e.formatText
                }, { ref_for: !0 }, i(w.key)), null, 16, ["value", "field-attrs", "depth", "classes", "formatText"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), fm = ["href"], mm = ["href", "title"], vm = /* @__PURE__ */ pe({
  __name: "MarkupFormat",
  props: {
    value: {},
    imageClass: { default: "w-8 h-8" }
  },
  setup(e) {
    const t = e, { getMimeType: l } = fr(), n = t.value;
    let a = typeof t.value;
    const d = a === "string" && n.length ? l(n) : null;
    if (a === "string" && n.length) {
      const i = n.startsWith("https://") || n.startsWith("http://");
      (i || n[0] === "/") && d?.startsWith("image/") ? a = "image" : i && (a = "link");
    }
    return (i, r) => {
      const c = N("Icon"), v = N("HtmlFormat");
      return ae(a) == "link" ? (o(), u("a", {
        key: 0,
        href: e.value,
        class: "text-indigo-600"
      }, S(e.value), 9, fm)) : ae(a) == "image" ? (o(), u("a", {
        key: 1,
        href: e.value,
        title: e.value,
        class: "inline-block"
      }, [
        me(c, {
          src: e.value,
          class: k(e.imageClass)
        }, null, 8, ["src", "class"])
      ], 8, mm)) : (o(), J(v, {
        key: 2,
        value: e.value
      }, null, 8, ["value"]));
    };
  }
}), pm = /* @__PURE__ */ pe({
  __name: "MarkupModel",
  props: {
    value: {},
    imageClass: {},
    tableClass: {},
    basicTrClass: {},
    basicThClass: {},
    basicTdClass: {},
    complexTitleTrClass: {},
    complexTitleTdClass: {},
    complexBodyTrClass: {},
    complexBodyTdClass: {}
  },
  setup(e) {
    const t = e, l = Object.keys(t.value), n = {}, a = {};
    return l.forEach((d) => {
      const i = t.value[d], r = typeof i;
      i == null || r === "function" || r === "symbol" ? n[d] = `(${i == null ? "null" : "t"})` : r === "object" ? a[d] = i : n[d] = i;
    }), (d, i) => {
      const r = N("MarkupFormat");
      return o(), u("table", {
        class: k(t.tableClass ?? "my-2 w-full")
      }, [
        s("tbody", null, [
          (o(), u(ye, null, be(n, (c, v) => s("tr", {
            class: k(t.basicTrClass ?? "leading-7")
          }, [
            s("th", {
              class: k(t.basicThClass ?? "px-2 text-left align-top")
            }, S(ae(Te)(v)), 3),
            s("td", {
              class: k(t.basicTdClass ?? "align-top")
            }, [
              me(r, { value: c }, null, 8, ["value"])
            ], 2)
          ], 2)), 64)),
          (o(), u(ye, null, be(a, (c, v) => (o(), u(ye, null, [
            s("tr", {
              class: k(t.complexTitleTrClass ?? "my-2 leading-7")
            }, [
              s("th", {
                colspan: "2",
                class: k(t.complexTitleTdClass ?? "px-2 bg-indigo-700 text-white")
              }, S(ae(Te)(v)), 3)
            ], 2),
            s("tr", {
              class: k(t.complexBodyTrClass ?? "leading-7")
            }, [
              s("td", {
                colspan: "2",
                class: k(t.complexBodyTdClass ?? "px-2 align-top")
              }, [
                me(r, { value: c }, null, 8, ["value"])
              ], 2)
            ], 2)
          ], 64))), 64))
        ])
      ], 2);
    };
  }
}), gm = { class: "absolute top-0 right-0 pt-4 pr-4" }, ym = ["title"], hm = /* @__PURE__ */ pe({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" },
    title: { default: "Close" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (l, n) => (o(), u("div", gm, [
      s("button", {
        type: "button",
        onClick: n[0] || (n[0] = (a) => l.$emit("close")),
        title: e.title,
        class: k([e.buttonClass, "cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, [...n[1] || (n[1] = [
        s("span", { class: "sr-only" }, "Close", -1),
        s("svg", {
          class: "h-6 w-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          "aria-hidden": "true"
        }, [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M6 18L18 6M6 6l12 12"
          })
        ], -1)
      ])], 10, ym)
    ]));
  }
}), bm = ["id", "aria-labelledby"], wm = { class: "fixed inset-0 overflow-hidden" }, km = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, xm = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, $m = { class: "flex-1" }, Cm = { class: "relative bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Sm = { class: "flex items-start justify-between space-x-3" }, Lm = { class: "space-y-1" }, Vm = { key: 0 }, Am = ["id"], Mm = {
  key: 2,
  class: "text-sm text-gray-500"
}, Tm = { class: "flex h-7 items-center" }, jm = {
  key: 0,
  class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
}, Om = /* @__PURE__ */ pe({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: {},
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = t, n = M(!1), a = M(""), d = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    lt(n, () => {
      Ft(d, a, n.value), n.value || setTimeout(() => l("done"), 700);
    }), n.value = !0;
    const i = () => n.value = !1, r = (c) => {
      c.key === "Escape" && i();
    };
    return ze(() => window.addEventListener("keydown", r)), Jt(() => window.removeEventListener("keydown", r)), (c, v) => {
      const m = N("CloseButton");
      return o(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        v[1] || (v[1] = s("div", { class: "fixed inset-0" }, null, -1)),
        s("div", wm, [
          s("div", {
            onMousedown: i,
            class: "absolute inset-0 overflow-hidden"
          }, [
            s("div", {
              onMousedown: v[0] || (v[0] = Ee(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              s("div", {
                class: k(["panel pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                s("div", km, [
                  s("div", xm, [
                    s("div", $m, [
                      s("div", Cm, [
                        s("div", Sm, [
                          s("div", Lm, [
                            c.$slots.title ? (o(), u("div", Vm, [
                              W(c.$slots, "title")
                            ])) : $("", !0),
                            e.title ? (o(), u("h2", {
                              key: 1,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, S(e.title), 9, Am)) : $("", !0),
                            c.$slots.subtitle ? (o(), u("p", Mm, [
                              W(c.$slots, "subtitle")
                            ])) : $("", !0)
                          ]),
                          s("div", Tm, [
                            me(m, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: i
                            })
                          ])
                        ])
                      ]),
                      s("div", {
                        class: k(e.contentClass)
                      }, [
                        W(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  c.$slots.footer ? (o(), u("div", jm, [
                    W(c.$slots, "footer")
                  ])) : $("", !0)
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, bm);
    };
  }
}), Fm = ["id", "data-transition-for", "aria-labelledby"], Im = { class: "fixed inset-0 z-10 overflow-y-auto" }, Pm = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Bm = {
  key: 1,
  class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10"
}, co = /* @__PURE__ */ pe({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Bn.modalClass },
    sizeClass: { default: Bn.sizeClass },
    closeButtonClass: { default: "bg-white dark:bg-black cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black" },
    configureField: {}
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = ml(), n = t, a = M(!1), d = M(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = M(""), c = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    lt(a, () => {
      Ft(i, d, a.value), Ft(c, r, a.value), a.value || setTimeout(() => n("done"), 200);
    }), a.value = !0;
    const v = () => a.value = !1;
    It("ModalProvider", {
      openModal: g
    });
    const b = M(), w = M();
    function g(y, h) {
      b.value = y, w.value = h;
    }
    async function p(y) {
      w.value && w.value(y), b.value = void 0, w.value = void 0;
    }
    const x = (y) => {
      y.key === "Escape" && v();
    };
    return ze(() => window.addEventListener("keydown", x)), Jt(() => window.removeEventListener("keydown", x)), (y, h) => {
      const T = N("ModalLookup");
      return o(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: v,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        s("div", {
          class: k(["fixed inset-0 bg-gray-500/75 transition-opacity", d.value])
        }, null, 2),
        s("div", Im, [
          s("div", Pm, [
            s("div", {
              class: k([e.modalClass, e.sizeClass, r.value]),
              onMousedown: h[0] || (h[0] = Ee(() => {
              }, ["stop"]))
            }, [
              s("div", null, [
                ae(l).closebutton ? W(y.$slots, "createform", {}, void 0, void 0, 0) : (o(), u("div", Bm, [
                  s("button", {
                    type: "button",
                    onClick: v,
                    class: k(e.closeButtonClass),
                    title: "Close"
                  }, [...h[1] || (h[1] = [
                    s("span", { class: "sr-only" }, "Close", -1),
                    s("svg", {
                      class: "h-6 w-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      "aria-hidden": "true"
                    }, [
                      s("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    ], -1)
                  ])], 2)
                ])),
                W(y.$slots, "default")
              ])
            ], 34),
            W(y.$slots, "bottom")
          ])
        ]),
        b.value?.name == "ModalLookup" && b.value.ref ? (o(), J(T, {
          key: 0,
          "ref-info": b.value.ref,
          onDone: p,
          configureField: e.configureField
        }, null, 8, ["ref-info", "configureField"])) : $("", !0)
      ], 40, Fm);
    };
  }
}), Em = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, Dm = { class: "mt-3 pl-5 flex flex-wrap items-center" }, Nm = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, Rm = { class: "hidden md:inline" }, Hm = { class: "flex pb-1 sm:pb-0" }, qm = ["title"], zm = ["disabled"], Um = ["disabled"], Km = ["disabled"], Qm = ["disabled"], Jm = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, Gm = { class: "px-4 text-lg text-black dark:text-white" }, Wm = { key: 0 }, Zm = { key: 1 }, Xm = { key: 2 }, Ym = {
  key: 1,
  class: "pl-2 mt-1"
}, _m = { class: "whitespace-nowrap" }, ev = {
  key: 2,
  class: "pl-2"
}, tv = { class: "flex pb-1 sm:pb-0" }, lv = {
  key: 0,
  class: "pl-2"
}, nv = { class: "mr-1" }, sv = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, av = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ov = { key: 1 }, rv = { key: 4 }, iv = { key: 0 }, uv = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, dv = { class: "mr-1 select-none" }, cv = {
  key: 1,
  class: "flex justify-between items-center"
}, fv = { class: "mr-1 select-none" }, Ks = 25, mv = /* @__PURE__ */ pe({
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
    canFilter: {},
    type: {},
    modelTitle: {},
    newButtonLabel: {},
    configureField: {}
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = ml(), { config: d } = Ct(), { metadataApi: i, filterDefinitions: r } = bt(), c = Pe("client"), v = d.value.storage, m = f(() => l.toolbarButtonClass ?? ke.toolbarButtonClass), b = f(() => r.value), w = M({ take: Ks }), g = M(new tt()), p = M(l.skip), x = M(!1), y = M(), h = (ne) => typeof ne == "string" ? ne.split(",") : ne || [];
    function T(ne, ee) {
      return ke.getTableRowClass("fullWidth", ee, !1, !0);
    }
    function O() {
      let ne = h(l.selectedColumns);
      return ne.length > 0 ? ne : [];
    }
    const E = f(() => nt(l.refInfo.model)), _ = f(() => {
      let ee = O().map((Ie) => Ie.toLowerCase());
      const Oe = ot(E.value);
      return ee.length > 0 ? ee.map((Ie) => Oe.find((We) => We.name.toLowerCase() === Ie)).filter((Ie) => Ie != null) : Oe;
    }), Z = f(() => {
      let ne = _.value.map((Oe) => Oe.name), ee = h(w.value.selectedColumns).map((Oe) => Oe.toLowerCase());
      return ee.length > 0 ? ne.filter((Oe) => ee.includes(Oe.toLowerCase())) : ne;
    }), P = f(() => w.value.take ?? Ks), F = f(() => (g.value.response ? ce(g.value.response, "results") : null) ?? []), re = f(() => g.value.response?.total ?? F.value.length ?? 0), se = f(() => p.value > 0), B = f(() => p.value > 0), z = f(() => F.value.length >= P.value), K = f(() => F.value.length >= P.value), j = M([]), X = f(() => j.value.some((ne) => ne.settings.filters.length > 0 || !!ne.settings.sort)), A = f(() => j.value.map((ne) => ne.settings.filters.length).reduce((ne, ee) => ne + ee, 0)), L = f(() => vl(E.value)), I = f(() => i.value?.operations.find((ne) => ne.dataModel?.name == l.refInfo.model && He.isAnyQuery(ne))), ie = M(), V = M(!1), C = M(), le = f(() => Gt(l.refInfo.model)), oe = f(() => Mt.forType(le.value, i.value)), U = f(() => le.value || I.value?.dataModel.name), Q = f(() => l.modelTitle || U.value), R = f(() => l.newButtonLabel || `New ${Q.value}`), ue = f(() => $l(oe.value.Create)), D = M(), G = M(!1);
    function te() {
      G.value = !0;
    }
    function fe() {
      G.value = !1;
    }
    async function de(ne) {
      fe(), n("done", ne);
    }
    function he(ne) {
      D.value && (Object.assign(D.value?.model, ne), console.log("setCreate", JSON.stringify(ne, null, 2)), je());
    }
    function je() {
      D.value?.forceUpdate(), Fe()?.proxy?.$forceUpdate();
    }
    const Ne = () => `${l.id}/ApiPrefs/${l.refInfo.model}`, Ce = (ne) => `Column/${l.id}:${l.refInfo.model}.${ne}`;
    async function Le(ne) {
      p.value += ne, p.value < 0 && (p.value = 0);
      var ee = Math.floor(re.value / P.value) * P.value;
      p.value > ee && (p.value = ee), await dt();
    }
    async function Ae(ne, ee) {
      n("done", ne);
    }
    function Je() {
      n("done", null);
    }
    function ut(ne, ee) {
      let Oe = ee.target;
      if (Oe?.tagName !== "TD") {
        let Ie = Oe?.closest("TABLE")?.getBoundingClientRect(), We = j.value.find((ft) => ft.name.toLowerCase() == ne.toLowerCase());
        if (We && Ie) {
          let ft = 318, Zt = (ee.target?.tagName === "DIV" ? ee.target : ee.target?.closest("DIV")).getBoundingClientRect(), De = ft + 25;
          C.value = {
            column: We,
            topLeft: {
              x: Math.max(Math.floor(Zt.x + 25), De),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function Bt() {
      C.value = null;
    }
    async function Et(ne) {
      let ee = C.value?.column;
      ee && (ee.settings = ne, v.setItem(Ce(ee.name), JSON.stringify(ee.settings)), await dt()), C.value = null;
    }
    async function Ge(ne) {
      v.setItem(Ce(ne.name), JSON.stringify(ne.settings)), await dt();
    }
    async function rt(ne) {
      V.value = !1, w.value = ne, v.setItem(Ne(), JSON.stringify(ne)), await dt();
    }
    async function dt() {
      await Ue(st());
    }
    async function Ue(ne) {
      const ee = I.value;
      if (!ee) {
        console.error(`No Query API was found for ${l.refInfo.model}`);
        return;
      }
      let Oe = Ll(ee, ne), Ie = fa((Wt) => {
        g.value.response = g.value.error = void 0, x.value = Wt;
      }), We = await c.api(Oe);
      Ie(), jt(() => g.value = We);
      let ft = ce(We.response, "results") || [];
      !We.succeeded || ft.label == 0;
    }
    function st() {
      let ne = {
        include: "total",
        take: P.value
      }, ee = h(w.value.selectedColumns || l.selectedColumns);
      if (ee.length > 0) {
        let Ie = L.value;
        Ie && ee.includes(Ie.name) && (ee = [Ie.name, ...ee]), ne.fields = ee.join(",");
      }
      let Oe = [];
      return j.value.forEach((Ie) => {
        Ie.settings.sort && Oe.push((Ie.settings.sort === "DESC" ? "-" : "") + Ie.name), Ie.settings.filters.forEach((We) => {
          let ft = We.key.replace("%", Ie.name);
          ne[ft] = We.value;
        });
      }), typeof ne.skip > "u" && p.value > 0 && (ne.skip = p.value), Oe.length > 0 && (ne.orderBy = Oe.join(",")), ne;
    }
    async function ct() {
      j.value.forEach((ne) => {
        ne.settings = { filters: [] }, v.removeItem(Ce(ne.name));
      }), await dt();
    }
    return ze(async () => {
      const ne = l.prefs || tn(v.getItem(Ne()));
      ne && (w.value = ne), j.value = _.value.map((ee) => ({
        name: ee.name,
        type: ee.type,
        meta: ee,
        settings: Object.assign(
          {
            filters: []
          },
          tn(v.getItem(Ce(ee.name)))
        )
      })), isNaN(l.skip) || (p.value = l.skip), await dt();
    }), (ne, ee) => {
      const Oe = N("AutoCreateForm"), Ie = N("ErrorSummary"), We = N("Loading"), ft = N("SettingsIcons"), Wt = N("DataGrid"), Zt = N("ModalDialog");
      return o(), u(ye, null, [
        e.refInfo ? (o(), J(Zt, {
          key: 0,
          ref_key: "modalDialog",
          ref: ie,
          id: e.id,
          onDone: Je
        }, {
          default: we(() => [
            s("div", Em, [
              s("div", Dm, [
                s("h3", Nm, [
                  ee[9] || (ee[9] = ve(" Select ", -1)),
                  s("span", Rm, S(ae(Te)(e.refInfo.model)), 1)
                ]),
                s("div", Hm, [
                  e.showPreferences ? (o(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: ee[0] || (ee[0] = (De) => V.value = !V.value)
                  }, [...ee[10] || (ee[10] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("g", {
                        "stroke-width": "1.5",
                        fill: "none"
                      }, [
                        s("path", {
                          d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
                          stroke: "currentColor"
                        })
                      ])
                    ], -1)
                  ])], 8, qm)) : $("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 1,
                    type: "button",
                    class: k(["pl-2", se.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !se.value,
                    onClick: ee[1] || (ee[1] = (De) => Le(-re.value))
                  }, [...ee[11] || (ee[11] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, zm)) : $("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 2,
                    type: "button",
                    class: k(["pl-2", B.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !B.value,
                    onClick: ee[2] || (ee[2] = (De) => Le(-P.value))
                  }, [...ee[12] || (ee[12] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, Um)) : $("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 3,
                    type: "button",
                    class: k(["pl-2", z.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !z.value,
                    onClick: ee[3] || (ee[3] = (De) => Le(P.value))
                  }, [...ee[13] || (ee[13] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, Km)) : $("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 4,
                    type: "button",
                    class: k(["pl-2", K.value ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !K.value,
                    onClick: ee[4] || (ee[4] = (De) => Le(re.value))
                  }, [...ee[14] || (ee[14] = [
                    s("svg", {
                      class: "w-8 h-8",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])], 10, Qm)) : $("", !0)
                ]),
                e.showPagingInfo ? (o(), u("div", Jm, [
                  s("div", Gm, [
                    x.value ? (o(), u("span", Wm, "Querying...")) : $("", !0),
                    F.value.length ? (o(), u("span", Zm, [
                      ee[15] || (ee[15] = s("span", { class: "hidden xl:inline" }, " Showing Results ", -1)),
                      ve(" " + S(p.value + 1) + " - " + S(Math.min(p.value + F.value.length, re.value)) + " ", 1),
                      s("span", null, " of " + S(re.value), 1)
                    ])) : g.value.completed ? (o(), u("span", Xm, "No Results")) : $("", !0)
                  ])
                ])) : $("", !0),
                oe.value.Create && ue.value ? (o(), u("div", Ym, [
                  s("button", {
                    type: "button",
                    onClick: ee[5] || (ee[5] = (De) => te()),
                    title: "modelTitle",
                    class: k(ae(ke).toolbarButtonClass)
                  }, [
                    ee[16] || (ee[16] = s("svg", {
                      class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                        fill: "currentColor"
                      })
                    ], -1)),
                    s("span", _m, S(R.value), 1)
                  ], 2),
                  G.value ? (o(), J(Oe, {
                    key: 0,
                    ref_key: "createForm",
                    ref: D,
                    type: oe.value.Create.request.name,
                    configure: e.configureField,
                    onDone: fe,
                    onSave: de
                  }, {
                    header: we(() => [
                      W(ne.$slots, "formheader", {
                        form: "create",
                        formInstance: D.value,
                        apis: oe.value,
                        type: U.value,
                        updateModel: he
                      })
                    ]),
                    footer: we(() => [
                      W(ne.$slots, "formfooter", {
                        form: "create",
                        formInstance: D.value,
                        apis: oe.value,
                        type: U.value,
                        updateModel: he
                      })
                    ]),
                    _: 3
                  }, 8, ["type", "configure"])) : $("", !0)
                ])) : $("", !0),
                X.value && e.showResetPreferences ? (o(), u("div", ev, [
                  s("button", {
                    type: "button",
                    onClick: ct,
                    title: "Reset Preferences & Filters",
                    class: k(m.value)
                  }, [...ee[17] || (ee[17] = [
                    s("svg", {
                      class: "w-5 h-5",
                      xmlns: "http://www.w3.org/2000/svg",
                      "aria-hidden": "true",
                      viewBox: "0 0 24 24"
                    }, [
                      s("path", {
                        fill: "currentColor",
                        d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
                      })
                    ], -1)
                  ])], 2)
                ])) : $("", !0),
                s("div", tv, [
                  e.showFiltersView && A.value > 0 ? (o(), u("div", lv, [
                    s("button", {
                      type: "button",
                      onClick: ee[6] || (ee[6] = (De) => y.value = y.value == "filters" ? null : "filters"),
                      class: k(m.value),
                      "aria-expanded": "false"
                    }, [
                      ee[20] || (ee[20] = s("svg", {
                        class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)),
                      s("span", nv, S(A.value) + " " + S(A.value == 1 ? "Filter" : "Filters"), 1),
                      y.value != "filters" ? (o(), u("svg", sv, [...ee[18] || (ee[18] = [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
                          "clip-rule": "evenodd"
                        }, null, -1)
                      ])])) : (o(), u("svg", av, [...ee[19] || (ee[19] = [
                        s("path", {
                          "fill-rule": "evenodd",
                          d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
                          "clip-rule": "evenodd"
                        }, null, -1)
                      ])]))
                    ], 2)
                  ])) : $("", !0)
                ])
              ]),
              y.value == "filters" ? (o(), J(ws, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: b.value,
                columns: j.value,
                onDone: ee[7] || (ee[7] = (De) => y.value = null),
                onChange: Ge
              }, null, 8, ["definitions", "columns"])) : $("", !0),
              C.value ? (o(), u("div", ov, [
                me(bs, {
                  definitions: b.value,
                  column: C.value.column,
                  "top-left": C.value.topLeft,
                  onDone: Bt,
                  onSave: Et
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : $("", !0),
              g.value.error ? (o(), J(Ie, {
                key: 2,
                status: g.value.error
              }, null, 8, ["status"])) : x.value ? (o(), J(We, { key: 3 })) : (o(), u("div", rv, [
                F.value.length ? (o(), u("div", iv, [
                  me(Wt, {
                    id: e.id,
                    items: F.value,
                    type: e.refInfo.model,
                    "selected-columns": Z.value,
                    onFiltersChanged: dt,
                    tableStyle: "fullWidth",
                    rowClass: T,
                    onRowSelected: Ae,
                    onHeaderSelected: ut
                  }, Qn({
                    header: we(({ column: De, label: St }) => [
                      e.allowFiltering && (!l.canFilter || l.canFilter(De)) ? (o(), u("div", uv, [
                        s("span", dv, S(St), 1),
                        me(ft, {
                          column: j.value.find((it) => it.name.toLowerCase() === De.toLowerCase()),
                          "is-open": C.value?.column.name === De
                        }, null, 8, ["column", "is-open"])
                      ])) : (o(), u("div", cv, [
                        s("span", fv, S(St), 1)
                      ]))
                    ]),
                    _: 2
                  }, [
                    be(Object.keys(ae(a)), (De) => ({
                      name: De,
                      fn: we((St) => [
                        W(ne.$slots, De, Xl(Yl(St)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : $("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : $("", !0),
        V.value ? (o(), J(ks, {
          key: 1,
          columns: _.value,
          prefs: w.value,
          onDone: ee[8] || (ee[8] = (De) => V.value = !1),
          onSave: rt
        }, null, 8, ["columns", "prefs"])) : $("", !0)
      ], 64);
    };
  }
}), vv = { class: "sm:hidden" }, pv = ["for"], gv = ["id", "name"], yv = ["value"], hv = { class: "hidden sm:block" }, bv = { class: "border-b border-gray-200" }, wv = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, kv = ["onClick"], xv = /* @__PURE__ */ pe({
  __name: "Tabs",
  props: {
    tabs: {},
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Te(e) },
    selected: {},
    tabClass: {},
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 },
    clearQuery: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, l = f(() => Object.keys(t.tabs)), n = (m) => t.label ? t.label(m) : Te(m), a = f(() => t.id || "tabs"), d = f(() => t.param || "tab"), i = M();
    function r(m) {
      if (i.value = m, t.url) {
        const b = l.value[0];
        cs({ tab: m === b ? void 0 : m }, t.clearQuery);
      }
    }
    function c(m) {
      return i.value === m;
    }
    const v = f(() => `${100 / Object.keys(t.tabs).length}%`);
    return ze(() => {
      if (i.value = t.selected || Object.keys(t.tabs)[0], t.url) {
        const m = location.search ? location.search : location.hash.includes("?") ? "?" + Ul(location.hash, "?") : "", w = Vn(m)[d.value];
        w && (i.value = w);
      }
    }), (m, b) => (o(), u("div", null, [
      s("div", vv, [
        s("label", {
          for: a.value,
          class: "sr-only"
        }, "Select a tab", 8, pv),
        s("select", {
          id: a.value,
          name: a.value,
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: b[0] || (b[0] = (w) => r(w.target?.value))
        }, [
          (o(!0), u(ye, null, be(l.value, (w) => (o(), u("option", {
            key: w,
            value: w
          }, S(n(w)), 9, yv))), 128))
        ], 40, gv)
      ]),
      s("div", hv, [
        s("div", bv, [
          s("nav", wv, [
            (o(!0), u(ye, null, be(l.value, (w) => (o(), u("a", {
              href: "#",
              onClick: Ee((g) => r(w), ["prevent"]),
              style: Un({ width: v.value }),
              class: k([c(w) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, S(n(w)), 15, kv))), 256))
          ])
        ])
      ]),
      s("div", {
        class: k(e.bodyClass)
      }, [
        (o(), J(Jn(e.tabs[i.value])))
      ], 2)
    ]));
  }
}), $v = /* @__PURE__ */ pe({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.documentElement : null, l = () => !!t?.classList.contains("dark"), n = M(localStorage.getItem("color-scheme") == "dark");
    function a() {
      l() ? t?.classList.remove("dark") : t?.classList.add("dark"), n.value = l(), t?.style.setProperty("color-scheme", n.value ? "dark" : null), localStorage.setItem("color-scheme", n.value ? "dark" : "light");
    }
    return (d, i) => (o(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: i[0] || (i[0] = (r) => a())
    }, [
      s("span", {
        class: k(`${n.value ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        s("span", {
          class: k(`${n.value ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, [...i[1] || (i[1] = [
          s("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4 text-gray-400",
            preserveAspectRatio: "xMidYMid meet",
            viewBox: "0 0 32 32"
          }, [
            s("path", {
              fill: "currentColor",
              d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
            })
          ], -1)
        ])], 2),
        s("span", {
          class: k(`${n.value ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, [...i[2] || (i[2] = [
          s("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "h-4 w-4 text-indigo-600",
            preserveAspectRatio: "xMidYMid meet",
            viewBox: "0 0 32 32"
          }, [
            s("path", {
              fill: "currentColor",
              d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
            })
          ], -1)
        ])], 2)
      ], 2)
    ]));
  }
}), Cv = { key: 0 }, Sv = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, Lv = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, Vv = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50" }, Av = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600 dark:text-gray-300"
}, Mv = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, Tv = ["onClick"], jv = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, Ov = { class: "bg-white dark:bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10" }, Fv = { class: "mt-8" }, Iv = {
  key: 1,
  class: "mt-6"
}, Pv = { class: "mt-6 grid grid-cols-3 gap-3" }, Bv = ["href", "title"], Ev = {
  key: 1,
  class: "h-5 w-5 text-gray-700 dark:text-gray-200",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Dv = /* @__PURE__ */ pe({
  __name: "SignIn",
  props: {
    provider: {},
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const l = e, n = t, { getMetadata: a, createDto: d } = bt(), i = Pl(), r = Pe("client"), { signIn: c } = cl(), v = a({ assert: !0 }), m = v.plugins.auth, b = document.baseURI, w = v.app.baseUrl, g = M(d("Authenticate")), p = M(new tt()), x = M(l.provider);
    ze(() => {
      m?.authProviders.map((B) => B.formLayout).filter((B) => B).forEach((B) => B.forEach(
        (z) => g.value[z.id] = z.type === "checkbox" ? !1 : ""
      ));
    });
    const y = f(() => m?.authProviders.filter((B) => B.formLayout) || []), h = f(() => y.value[0] || {}), T = f(() => y.value[Math.max(y.value.length - 1, 0)] || {}), O = f(() => (x.value ? m?.authProviders.find((B) => B.name === x.value) : null) ?? h.value), E = (B) => B === !1 || B === "false";
    function _(B) {
      return B.label || B.navItem && B.navItem.label;
    }
    const Z = f(() => (O.value?.formLayout || []).map((B) => Object.assign({}, B, {
      type: B.type?.toLowerCase(),
      autocomplete: B.autocomplete || (B.type?.toLowerCase() === "password" ? "current-password" : void 0) || (B.id.toLowerCase() === "username" ? "username" : void 0),
      css: Object.assign({ field: "col-span-12" }, B.css)
    }))), P = f(() => E(l.oauth) ? [] : m?.authProviders.filter((B) => B.type === "oauth") || []), F = f(() => {
      let B = or(
        m?.authProviders.filter((K) => K.formLayout && K.formLayout.length > 0),
        (K, j) => {
          let X = _(j) || pt(j.name);
          K[X] = j.name === h.value.name ? "" : j.name;
        }
      );
      const z = O.value;
      return z && E(l.tabs) && (B = { [_(z) || pt(z.name)]: z }), B;
    }), re = f(() => {
      let B = Z.value.map((z) => z.id).filter((z) => z);
      return p.value.summaryMessage(B);
    });
    async function se() {
      if (g.value.provider = O.value.name, O.value.name === "authsecret" ? (r.headers.set("authsecret", g.value.authsecret), g.value = d("Authenticate")) : O.value.name === "basic" ? (r.setCredentials(g.value.UserName, g.value.Password), g.value = d("Authenticate"), g.value.UserName = null, g.value.Password = null) : (O.value.type === "Bearer" || O.value.name === "jwt") && (r.bearerToken = g.value.BearerToken, g.value = d("Authenticate")), p.value = await i.api(g.value), p.value.succeeded) {
        const B = p.value.response;
        c(B), n("login", B), p.value = new tt(), g.value = d("Authenticate");
      }
    }
    return (B, z) => {
      const K = N("ErrorSummary"), j = N("AutoFormFields"), X = N("PrimaryButton"), A = N("Icon"), L = zo("href");
      return ae(m) ? (o(), u("div", Sv, [
        s("div", Lv, [
          s("h2", Vv, S(e.title), 1),
          Object.keys(F.value).length > 1 ? (o(), u("p", Av, [
            s("span", Mv, [
              (o(!0), u(ye, null, be(F.value, (I, ie) => Ot((o(), u("a", {
                onClick: (V) => x.value = I,
                class: k([
                  I === "" || I === T.value.name ? "rounded-l-md" : I === T.value.name ? "rounded-r-md -ml-px" : "-ml-px",
                  x.value === I ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                ])
              }, [
                ve(S(ie), 1)
              ], 10, Tv)), [
                [L, { provider: I }]
              ])), 256))
            ])
          ])) : $("", !0)
        ]),
        s("div", jv, [
          re.value ? (o(), J(K, {
            key: 0,
            class: "mb-3",
            errorSummary: re.value
          }, null, 8, ["errorSummary"])) : $("", !0),
          s("div", Ov, [
            Z.value.length ? (o(), u("form", {
              key: 0,
              onSubmit: Ee(se, ["prevent"])
            }, [
              me(j, {
                modelValue: g.value,
                formLayout: Z.value,
                api: p.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              s("div", Fv, [
                me(X, { class: "w-full" }, {
                  default: we(() => [...z[0] || (z[0] = [
                    ve("Sign In", -1)
                  ])]),
                  _: 1
                })
              ])
            ], 32)) : $("", !0),
            P.value.length ? (o(), u("div", Iv, [
              z[2] || (z[2] = sn('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300 dark:border-gray-600"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500 dark:text-gray-400"> Or continue with </span></div></div>', 1)),
              s("div", Pv, [
                (o(!0), u(ye, null, be(P.value, (I) => (o(), u("div", null, [
                  s("a", {
                    href: ae(w) + I.navItem.href + "?continue=" + ae(b),
                    title: _(I),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-black text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                  }, [
                    I.icon ? (o(), J(A, {
                      key: 0,
                      image: I.icon,
                      class: "h-5 w-5 text-gray-700 dark:text-gray-200"
                    }, null, 8, ["image"])) : (o(), u("svg", Ev, [...z[1] || (z[1] = [
                      s("path", {
                        d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
                        fill: "currentColor"
                      }, null, -1),
                      s("path", {
                        d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
                        fill: "currentColor"
                      }, null, -1)
                    ])]))
                  ], 8, Bv)
                ]))), 256))
              ])
            ])) : $("", !0)
          ])
        ])
      ])) : (o(), u("div", Cv, "No Auth Plugin"));
    };
  }
}), Nv = ["for"], Rv = {
  key: 1,
  class: "border border-gray-200 flex justify-between shadow-sm"
}, Hv = { class: "p-2 flex flex-wrap gap-x-4" }, qv = {
  key: 0,
  class: "p-2 flex flex-wrap gap-x-4"
}, zv = ["href"], Uv = { class: "" }, Kv = ["name", "id", "label", "value", "rows", "disabled"], Qv = ["id"], Jv = ["id"], at = "w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400", Gv = /* @__PURE__ */ pe({
  __name: "MarkdownInput",
  props: {
    status: {},
    id: {},
    inputClass: {},
    filterClass: {},
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
  setup(e, { expose: t, emit: l }) {
    const n = e, a = l;
    let d = [], i = [], r = Pe("ApiState", void 0);
    const c = f(() => $t.call({ responseStatus: n.status ?? r?.error.value }, n.id)), v = f(() => n.label ?? Te(pt(n.id))), m = "bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","), b = f(() => n.hide ? zt(m, n.hide) : zt(m, []));
    function w(V) {
      return b.value[V];
    }
    const g = f(() => Pt([
      "shadow-sm font-mono" + vt.base.replace("rounded-md", ""),
      c.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + vt.valid,
      n.inputClass
    ], "MarkdownInput", n.filterClass)), p = M();
    t({ props: n, textarea: p, updateModelValue: x, selection: h, hasSelection: y, selectionInfo: T, insert: E, replace: O });
    function x(V) {
      a("update:modelValue", V);
    }
    function y() {
      return p.value.selectionStart !== p.value.selectionEnd;
    }
    function h() {
      const V = p.value;
      return V.value.substring(V.selectionStart, V.selectionEnd) || "";
    }
    function T() {
      const V = p.value, C = V.value, le = V.selectionStart, oe = C.substring(le, V.selectionEnd) || "", U = C.substring(0, le), Q = U.lastIndexOf(`
`);
      return {
        value: C,
        sel: oe,
        selPos: le,
        beforeSel: U,
        afterSel: C.substring(le),
        prevCRPos: Q,
        beforeCR: Q >= 0 ? U.substring(0, Q + 1) : "",
        afterCR: Q >= 0 ? U.substring(Q + 1) : ""
      };
    }
    function O({ value: V, selectionStart: C, selectionEnd: le }) {
      le == null && (le = C), x(V), jt(() => {
        p.value.focus(), p.value.setSelectionRange(C, le);
      });
    }
    function E(V, C, le = "", { selectionAtEnd: oe, offsetStart: U, offsetEnd: Q, filterValue: R, filterSelection: ue } = {}) {
      const D = p.value;
      let G = D.value, te = D.selectionEnd;
      d.push({ value: G, selectionStart: D.selectionStart, selectionEnd: D.selectionEnd }), i = [];
      const fe = D.selectionStart, de = D.selectionEnd;
      let he = G.substring(0, fe), je = G.substring(de);
      const Ne = V && he.endsWith(V) && je.startsWith(C);
      if (fe == de) {
        if (Ne ? (G = he.substring(0, he.length - V.length) + je.substring(C.length), te += -C.length) : (G = he + V + le + C + je, te += V.length, U = 0, Q = le?.length || 0, oe && (te += Q, Q = 0)), R) {
          var Le = { pos: te };
          G = R(G, Le), te = Le.pos;
        }
      } else {
        var Ae = G.substring(fe, de);
        ue && (Ae = ue(Ae)), Ne ? (G = he.substring(0, he.length - V.length) + Ae + je.substring(C.length), U = -Ae.length - V.length, Q = Ae.length) : (G = he + V + Ae + C + je, U ? te += (V + C).length : (te = fe, U = V.length, Q = Ae.length));
      }
      x(G), jt(() => {
        D.focus(), U = te + (U || 0), Q = (U || 0) + (Q || 0), D.setSelectionRange(U, Q);
      });
    }
    const _ = () => E("**", "**", "bold"), Z = () => E("_", "_", "italics"), P = () => E("~~", "~~", "strikethrough"), F = () => E("[", "](https://)", "", { offsetStart: -9, offsetEnd: 8 }), re = () => E(`
> `, `
`, "Blockquote", {}), se = () => E("![](", ")");
    function B(V) {
      const C = h();
      if (C && !V.shiftKey)
        E("`", "`", "code");
      else {
        const le = n.lang || "js";
        C.indexOf(`
`) === -1 ? E("\n```" + le + `
`, "\n```\n", "// code") : E("```" + le + `
`, "```\n", "");
      }
    }
    function z() {
      if (y()) {
        let { sel: V, selPos: C, beforeSel: le, afterSel: oe, prevCRPos: U, beforeCR: Q, afterCR: R } = T();
        if (V.indexOf(`
`) === -1)
          E(`
 1. `, `
`);
        else if (!V.startsWith(" 1. ")) {
          let G = 1;
          E("", "", " - ", {
            selectionAtEnd: !0,
            filterSelection: (te) => " 1. " + te.replace(/\n$/, "").replace(/\n/g, (fe) => `
 ${++G}. `) + `
`
          });
        } else
          E("", "", "", {
            filterValue: (G, te) => {
              if (U >= 0) {
                let fe = R.replace(/^ - /, "");
                le = Q + fe, te.pos -= R.length - fe.length;
              }
              return le + oe;
            },
            filterSelection: (G) => G.replace(/^ 1. /g, "").replace(/\n \d+. /g, `
`)
          });
      } else
        E(`
 1. `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function K() {
      if (y()) {
        let { sel: V, selPos: C, beforeSel: le, afterSel: oe, prevCRPos: U, beforeCR: Q, afterCR: R } = T();
        V.indexOf(`
`) === -1 ? E(`
 - `, `
`) : !V.startsWith(" - ") ? E("", "", " - ", {
          selectionAtEnd: !0,
          filterSelection: (G) => " - " + G.replace(/\n$/, "").replace(/\n/g, `
 - `) + `
`
        }) : E("", "", "", {
          filterValue: (G, te) => {
            if (U >= 0) {
              let fe = R.replace(/^ - /, "");
              le = Q + fe, te.pos -= R.length - fe.length;
            }
            return le + oe;
          },
          filterSelection: (G) => G.replace(/^ - /g, "").replace(/\n - /g, `
`)
        });
      } else
        E(`
 - `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function j() {
      const V = h(), C = V.indexOf(`
`) === -1;
      V ? C ? E(`
## `, `
`, "") : E("## ", "", "") : E(`
## `, `
`, "Heading", { offsetStart: -8, offsetEnd: 7 });
    }
    function X() {
      let { sel: V, selPos: C, beforeSel: le, afterSel: oe, prevCRPos: U, beforeCR: Q, afterCR: R } = T();
      !V.startsWith("//") && !R.startsWith("//") ? V ? E("", "", "//", {
        selectionAtEnd: !0,
        filterSelection: (D) => "//" + D.replace(/\n$/, "").replace(/\n/g, `
//`) + `
`
      }) : O({
        value: Q + "//" + R + oe,
        selectionStart: C + 2
      }) : E("", "", "", {
        filterValue: (D, G) => {
          if (U >= 0) {
            let te = R.replace(/^\/\//, "");
            le = Q + te, G.pos -= R.length - te.length;
          }
          return le + oe;
        },
        filterSelection: (D) => D.replace(/^\/\//g, "").replace(/\n\/\//g, `
`)
      });
    }
    const A = () => E(`/*
`, `*/
`, "");
    function L() {
      if (d.length === 0) return !1;
      const V = p.value, C = d.pop();
      return i.push({ value: V.value, selectionStart: V.selectionStart, selectionEnd: V.selectionEnd }), O(C), !0;
    }
    function I() {
      if (i.length === 0) return !1;
      const V = p.value, C = i.pop();
      return d.push({ value: V.value, selectionStart: V.selectionStart, selectionEnd: V.selectionEnd }), O(C), !0;
    }
    const ie = () => null;
    return ze(() => {
      d = [], i = [];
      const V = p.value;
      V.onkeydown = (C) => {
        if (C.key === "Escape" || C.keyCode === 27) {
          a("close");
          return;
        }
        const le = String.fromCharCode(C.keyCode).toLowerCase();
        le === "	" ? (!C.shiftKey ? E("", "", "    ", {
          selectionAtEnd: !0,
          filterSelection: (U) => "    " + U.replace(/\n$/, "").replace(/\n/g, `
    `) + `
`
        }) : E("", "", "", {
          filterValue: (U, Q) => {
            let { selPos: R, beforeSel: ue, afterSel: D, prevCRPos: G, beforeCR: te, afterCR: fe } = T();
            if (G >= 0) {
              let de = fe.replace(/\t/g, "    ").replace(/^ ? ? ? ?/, "");
              ue = te + de, Q.pos -= fe.length - de.length;
            }
            return ue + D;
          },
          filterSelection: (U) => U.replace(/\t/g, "    ").replace(/^ ? ? ? ?/g, "").replace(/\n    /g, `
`)
        }), C.preventDefault()) : C.ctrlKey ? le === "z" ? C.shiftKey ? I() && C.preventDefault() : L() && C.preventDefault() : le === "b" && !C.shiftKey ? (_(), C.preventDefault()) : le === "h" && !C.shiftKey ? (j(), C.preventDefault()) : le === "i" && !C.shiftKey ? (Z(), C.preventDefault()) : le === "q" && !C.shiftKey ? (re(), C.preventDefault()) : le === "k" ? C.shiftKey ? (se(), C.preventDefault()) : (F(), C.preventDefault()) : le === "," || C.key === "<" || C.key === ">" || C.keyCode === 188 ? (B(C), C.preventDefault()) : le === "/" || C.key === "/" ? (X(), C.preventDefault()) : (le === "?" || C.key === "?") && C.shiftKey && (A(), C.preventDefault()) : C.altKey && (C.key === "1" || C.key === "0" ? (z(), C.preventDefault()) : C.key === "-" ? (K(), C.preventDefault()) : C.key === "s" && (P(), C.preventDefault()));
      };
    }), (V, C) => (o(), u("div", null, [
      W(V.$slots, "header", xe({
        inputElement: p.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, V.$attrs)),
      v.value ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: k(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, S(v.value), 11, Nv)) : $("", !0),
      e.disabled ? $("", !0) : (o(), u("div", Rv, [
        s("div", Hv, [
          w("bold") ? (o(), u("svg", {
            key: 0,
            class: k(at),
            onClick: _,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[1] || (C[1] = [
            s("title", null, "Bold text (CTRL+B)", -1),
            s("path", {
              fill: "currentColor",
              d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
            }, null, -1)
          ])])) : $("", !0),
          w("italics") ? (o(), u("svg", {
            key: 1,
            class: k(at),
            onClick: Z,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[2] || (C[2] = [
            s("title", null, "Italics (CTRL+I)", -1),
            s("path", {
              fill: "currentColor",
              d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
            }, null, -1)
          ])])) : $("", !0),
          w("link") ? (o(), u("svg", {
            key: 2,
            class: k(at),
            onClick: F,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[3] || (C[3] = [
            s("title", null, "Insert Link (CTRL+K)", -1),
            s("path", {
              fill: "currentColor",
              d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
            }, null, -1)
          ])])) : $("", !0),
          w("blockquote") ? (o(), u("svg", {
            key: 3,
            class: k(at),
            onClick: re,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[4] || (C[4] = [
            s("title", null, "Blockquote (CTRL+Q)", -1),
            s("path", {
              fill: "currentColor",
              d: "m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
            }, null, -1)
          ])])) : $("", !0),
          w("image") ? (o(), u("svg", {
            key: 4,
            class: k(at),
            onClick: se,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[5] || (C[5] = [
            s("title", null, "Insert Image (CTRL+SHIFT+L)", -1),
            s("path", {
              fill: "currentColor",
              d: "M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
            }, null, -1)
          ])])) : $("", !0),
          w("code") ? (o(), u("svg", {
            key: 5,
            class: k(at),
            onClick: B,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[6] || (C[6] = [
            s("title", null, "Insert Code (CTRL+<)", -1),
            s("path", {
              fill: "currentColor",
              d: "m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
            }, null, -1)
          ])])) : $("", !0),
          w("heading") ? (o(), u("svg", {
            key: 6,
            class: k(at),
            onClick: j,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[7] || (C[7] = [
            s("title", null, "H2 Heading (CTRL+H)", -1),
            s("path", {
              fill: "currentColor",
              d: "M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"
            }, null, -1)
          ])])) : $("", !0),
          w("orderedList") ? (o(), u("svg", {
            key: 7,
            class: k(at),
            icon: "",
            onClick: z,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[8] || (C[8] = [
            s("title", null, "Numbered List (ALT+1)", -1),
            s("path", {
              fill: "currentColor",
              d: "M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
            }, null, -1)
          ])])) : $("", !0),
          w("unorderedList") ? (o(), u("svg", {
            key: 8,
            class: k(at),
            onClick: K,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[9] || (C[9] = [
            s("title", null, "Bulleted List (ALT+-)", -1),
            s("path", {
              fill: "currentColor",
              d: "M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
            }, null, -1)
          ])])) : $("", !0),
          w("strikethrough") ? (o(), u("svg", {
            key: 9,
            class: k(at),
            onClick: P,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[10] || (C[10] = [
            s("title", null, "Strike Through (ALT+S)", -1),
            s("path", {
              fill: "currentColor",
              d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
            }, null, -1)
          ])])) : $("", !0),
          w("undo") ? (o(), u("svg", {
            key: 10,
            class: k(at),
            onClick: L,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[11] || (C[11] = [
            s("title", null, "Undo (CTRL+Z)", -1),
            s("path", {
              fill: "currentColor",
              d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
            }, null, -1)
          ])])) : $("", !0),
          w("redo") ? (o(), u("svg", {
            key: 11,
            class: k(at),
            onClick: I,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, [...C[12] || (C[12] = [
            s("title", null, "Redo (CTRL+SHIFT+Z)", -1),
            s("path", {
              fill: "currentColor",
              d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
            }, null, -1)
          ])])) : $("", !0),
          W(V.$slots, "toolbarbuttons", {
            instance: Fe()?.exposed
          })
        ]),
        w("help") && e.helpUrl ? (o(), u("div", qv, [
          s("a", {
            title: "formatting help",
            target: "_blank",
            href: e.helpUrl,
            tabindex: "-1"
          }, [
            (o(), u("svg", {
              class: k(at),
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, [...C[13] || (C[13] = [
              s("path", {
                fill: "currentColor",
                d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
              }, null, -1)
            ])]))
          ], 8, zv)
        ])) : $("", !0)
      ])),
      s("div", Uv, [
        s("textarea", {
          ref_key: "txt",
          ref: p,
          name: e.id,
          id: e.id,
          class: k(g.value),
          label: e.label,
          value: e.modelValue,
          rows: e.rows || 6,
          disabled: e.disabled,
          onInput: C[0] || (C[0] = (le) => x(le.target?.value || "")),
          onKeydown: an(ie, ["tab"])
        }, null, 42, Kv)
      ]),
      c.value ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, S(c.value), 9, Qv)) : e.help ? (o(), u("p", {
        key: 3,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, S(e.help), 9, Jv)) : $("", !0),
      W(V.$slots, "footer", xe({
        inputElement: p.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, V.$attrs))
    ]));
  }
}), Wv = {
  key: 0,
  class: "relative z-10 lg:hidden",
  role: "dialog",
  "aria-modal": "true"
}, Zv = { class: "fixed inset-0 flex" }, Xv = { class: "flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-black px-6 pb-2" }, Yv = { class: "hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col" }, _v = { class: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-6" }, ep = {
  class: /* @__PURE__ */ k(["sticky top-0 flex items-center gap-x-6 bg-white dark:bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden"])
}, tp = /* @__PURE__ */ pe({
  __name: "SidebarLayout",
  setup(e, { expose: t }) {
    const { transition: l } = lo(), n = M(!0), a = M(""), d = {
      entering: { cls: "transition-opacity ease-linear duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "transition-opacity ease-linear duration-300", from: "opacity-100", to: "opacity-0" }
    }, i = M(""), r = {
      entering: { cls: "transition ease-in-out duration-300 transform", from: "-translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transition ease-in-out duration-300 transform", from: "translate-x-0", to: "-translate-x-full" }
    }, c = M(""), v = {
      entering: { cls: "ease-in-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in-out duration-300", from: "opacity-100", to: "opacity-0" }
    };
    function m(g) {
      l(d, a, g), l(r, i, g), l(v, c, g), setTimeout(() => n.value = g, 300);
    }
    function b() {
      m(!0);
    }
    function w() {
      m(!1);
    }
    return t({ show: b, hide: w, toggle: m }), (g, p) => (o(), u("div", null, [
      n.value ? (o(), u("div", Wv, [
        s("div", {
          class: k(["fixed inset-0 bg-gray-900/80", a.value])
        }, null, 2),
        s("div", Zv, [
          s("div", {
            class: k(["relative mr-16 flex w-full max-w-xs flex-1", i.value])
          }, [
            s("div", {
              class: k(["absolute left-full top-0 flex w-16 justify-center pt-5", c.value])
            }, [
              s("button", {
                type: "button",
                onClick: w,
                class: "-m-2.5 p-2.5"
              }, [...p[0] || (p[0] = [
                s("span", { class: "sr-only" }, "Close sidebar", -1),
                s("svg", {
                  class: "h-6 w-6 text-white dark:text-black",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  "aria-hidden": "true"
                }, [
                  s("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])])
            ], 2),
            s("div", Xv, [
              W(g.$slots, "default")
            ])
          ], 2)
        ])
      ])) : $("", !0),
      s("div", Yv, [
        s("div", _v, [
          W(g.$slots, "default")
        ])
      ]),
      s("div", ep, [
        s("button", {
          type: "button",
          onClick: b,
          class: "-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"
        }, [...p[1] || (p[1] = [
          s("span", { class: "sr-only" }, "Open sidebar", -1),
          s("svg", {
            class: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            "aria-hidden": "true"
          }, [
            s("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            })
          ], -1)
        ])]),
        W(g.$slots, "mobiletitlebar")
      ])
    ]));
  }
}), lp = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, np = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, sp = { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, ap = { class: "pb-4" }, op = { class: "space-y-6 pt-6 pb-5" }, fo = /* @__PURE__ */ pe({
  __name: "ApiKeyDialog",
  props: {
    title: {},
    client: {}
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, n = t, a = Pe("store", null), d = l.client ?? Pe("client", null), i = Wa(), r = M(a?.apikey ?? i.value ?? d?.bearerToken ?? "");
    function c() {
      a && (a.apikey = r.value), d && (d.bearerToken = r.value), i.value = r.value, n("save", r.value), n("done");
    }
    return (v, m) => (o(), J(co, {
      "size-class": "w-96",
      onDone: m[1] || (m[1] = (b) => v.$emit("done"))
    }, {
      default: we(() => [
        s("div", lp, [
          s("div", np, [
            s("h3", sp, S(e.title ?? "API Key"), 1),
            s("div", ap, [
              s("form", {
                onSubmit: Ee(c, ["prevent"])
              }, [
                s("div", op, [
                  me(uo, {
                    id: "apikey",
                    type: "password",
                    autocomplete: "new-password",
                    modelValue: r.value,
                    "onUpdate:modelValue": m[0] || (m[0] = (b) => r.value = b),
                    label: ""
                  }, null, 8, ["modelValue"])
                ]),
                s("div", null, [
                  me(hs, { class: "w-full" }, {
                    default: we(() => [...m[2] || (m[2] = [
                      ve("Save", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 32)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), xs = (e) => e?.viewModel ?? e?.model ?? null, Vt = ia({ models: {}, apis: {} }), ql = /* @__PURE__ */ new Map();
function zl(e, t, l) {
  return t ? t in e ? Promise.resolve(e[t]) : (ql.has(l) || ql.set(l, fetch(l, { headers: { Accept: "application/json" } }).then((n) => n.ok ? n.json() : null).catch(() => null).then((n) => (e[t] = n, ql.delete(l), n))), ql.get(l)) : Promise.resolve(null);
}
function mo() {
  return {
    /** the Model's schema, or undefined while it loads - starts the fetch on first ask */
    model(e) {
      return e && !(e in Vt.models) && zl(Vt.models, e, `/auto/${e}.json`), e ? Vt.models[e] : null;
    },
    /** the API's schema, or undefined while it loads */
    api(e) {
      return e && !(e in Vt.apis) && zl(Vt.apis, e, `/schema/${e}.json`), e ? Vt.apis[e] : null;
    },
    loadModel: (e) => zl(Vt.models, e, `/auto/${e}.json`),
    loadApi: (e) => zl(Vt.apis, e, `/schema/${e}.json`)
  };
}
const { formatValue: rp, Formats: ip } = Ja(), up = {
  name: "SchemaGrid",
  props: {
    items: { type: Array, default: () => [] },
    /** the Model schema whose `properties` describe the columns */
    schema: { type: Object, default: null },
    selectedColumns: { type: Array, default: null },
    headerTitles: { type: Object, default: null },
    /** present (even returning false) to make rows selectable, as DataGrid does */
    isSelected: { type: Function, default: null }
  },
  emits: ["rowSelected", "headerSelected"],
  setup(e) {
    const t = mo(), { config: l } = Ct(), n = f(() => e.schema?.properties ?? {}), a = (p) => n.value[p], d = f(() => (e.selectedColumns ?? Object.keys(n.value)).filter((p) => a(p)?.ui?.format?.method !== "hidden"));
    function i(p) {
      const x = a(p), y = x?.ui?.ref;
      if (!y) return null;
      if (x.type === "object") return { name: p, ref: y };
      const h = p.endsWith("Id") ? p.slice(0, -2) : null, [T] = Object.entries(n.value).find(([O, E]) => E.type === "object" && (h && O.toLowerCase() === h.toLowerCase() || E.ui?.ref?.selfId?.toLowerCase() === p.toLowerCase())) ?? Object.entries(n.value).find(([, O]) => O.type === "object" && O.ui?.ref?.model === y.model) ?? [];
      return T ? { name: T, ref: y } : null;
    }
    function r(p) {
      if (p.refLabel) return p.refLabel;
      const x = xs(t.model(p.model))?.properties ?? {}, [y] = Object.entries(x).find(([h, T]) => T.type === "string" && h !== p.refId) ?? [];
      return y ?? null;
    }
    function c(p) {
      return p?.ui?.format ? p.ui.format : p?.format === "date-time" || p?.format === "date" ? ip.date : null;
    }
    function v(p) {
      const x = a(p)?.ui?.ref;
      return x ? x.icon ?? l.value.tableIcon : null;
    }
    function m(p, x) {
      const y = i(x);
      if (!y) return null;
      const h = ce(p, y.name);
      if (!h || typeof h != "object") return null;
      const T = r(y.ref);
      return T ? ce(h, T) ?? null : null;
    }
    function b(p, x) {
      return Array.isArray(x) && (p?.items?.type === "object" || x.some((y) => y && typeof y == "object"));
    }
    const w = (p) => p == null ? null : typeof p == "object" ? JSON.stringify(p, null, 2) : String(p);
    function g(p, x) {
      const y = a(x), h = ce(p, x), T = m(p, x);
      if (T != null) return { text: T, icon: v(x), title: String(T) };
      if (b(y, h))
        return {
          text: `${h.length} item${h.length === 1 ? "" : "s"}`,
          title: w(h)
        };
      try {
        return { html: rp(h, c(y), { modelValue: p }), title: w(h) };
      } catch {
        return { html: "", title: null };
      }
    }
    return {
      visibleColumns: d,
      labelOf: (p) => e.headerTitles?.[p] ?? a(p)?.title ?? p,
      // built per row so each cell is resolved once, not once per binding that reads it
      cells: f(() => e.items.map((p) => d.value.map((x) => g(p, x)))),
      rowClass: (p) => (e.isSelected ? "cursor-pointer hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (p % 2 === 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800")
    };
  }
}, wt = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, a] of t)
    l[n] = a;
  return l;
}, dp = { class: "overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700" }, cp = { class: "overflow-x-auto" }, fp = { class: "w-full text-sm" }, mp = { class: "bg-gray-50 dark:bg-gray-800" }, vp = ["onClick"], pp = { class: "select-none" }, gp = { class: "divide-y divide-gray-200 dark:divide-gray-700" }, yp = ["onClick"], hp = ["title"], bp = {
  key: 1,
  class: "min-w-0 truncate"
}, wp = ["innerHTML"];
function kp(e, t, l, n, a, d) {
  const i = N("Icon");
  return o(), u("div", dp, [
    s("div", cp, [
      s("table", fp, [
        s("thead", mp, [
          s("tr", null, [
            (o(!0), u(ye, null, be(e.visibleColumns, (r) => (o(), u("td", {
              key: r,
              class: "px-3 py-2 text-left font-semibold whitespace-nowrap text-gray-500 dark:text-gray-400",
              onClick: (c) => e.$emit("headerSelected", r, c)
            }, [
              W(e.$slots, "header", {
                column: r,
                label: e.labelOf(r)
              }, () => [
                s("span", pp, S(e.labelOf(r)), 1)
              ])
            ], 8, vp))), 128))
          ])
        ]),
        s("tbody", gp, [
          (o(!0), u(ye, null, be(e.items, (r, c) => (o(), u("tr", {
            key: c,
            class: k(e.rowClass(c)),
            onClick: (v) => e.$emit("rowSelected", r, v)
          }, [
            (o(!0), u(ye, null, be(e.cells[c], (v, m) => (o(), u("td", {
              key: m,
              class: "px-3 py-3 text-sm text-gray-500 dark:text-gray-400"
            }, [
              s("div", {
                class: "max-w-[500px] flex items-center",
                title: v.title
              }, [
                v.icon ? (o(), J(i, {
                  key: 0,
                  class: "w-5 h-5 mr-1 shrink-0",
                  image: v.icon
                }, null, 8, ["image"])) : $("", !0),
                v.text != null ? (o(), u("span", bp, S(v.text), 1)) : (o(), u("span", {
                  key: 2,
                  class: "min-w-0 truncate",
                  innerHTML: v.html
                }, null, 8, wp))
              ], 8, hp)
            ]))), 128))
          ], 10, yp))), 128))
        ])
      ])
    ]),
    W(e.$slots, "empty")
  ]);
}
const vo = /* @__PURE__ */ wt(up, [["render", kp]]), $s = (e, t) => e.replace(/\{(\w+)\}/g, (l, n) => encodeURIComponent(ce(t, n) ?? "")), xp = { filters: {}, orderBy: "", skip: 0 }, $p = {
  name: "SchemaResults",
  components: { SchemaGrid: vo },
  props: {
    /** an /auto/{Model}.json envelope - `name`, `model` and `query` are read */
    schema: { type: Object, required: !0 },
    /** `{ filters, orderBy, skip }`. Omit to keep the query state component-local */
    query: { type: Object, default: null },
    /** rows per page, until the user picks their own in Query Preferences */
    take: { type: Number, default: 25 },
    /** where preferences persist. Two views of one Model can keep their own columns */
    prefsKey: { type: String, default: null },
    /** the columns to offer, in order. Defaults to the Model's own property order */
    columnOrder: { type: Array, default: null },
    /** makes rows clickable, as DataGrid's isSelected does */
    selectable: { type: Boolean, default: !1 },
    /** AutoQuery filter conventions. Defaults to the library-wide conventions on Sole */
    filterDefinitions: { type: Array, default: null }
  },
  emits: ["update:query", "rowSelected", "loaded"],
  setup(e, { emit: t, expose: l }) {
    const n = M([]), a = M(0), d = M(null), i = M(null), r = M(!1), c = M({ ...xp }), v = f(() => e.query ?? c.value), m = f(() => v.value.filters ?? {}), b = f(() => String(v.value.orderBy ?? "")), w = f(() => Math.max(0, parseInt(v.value.skip) || 0));
    function g(D) {
      const G = { filters: {}, orderBy: "", skip: 0, ...D };
      c.value = G, t("update:query", G);
    }
    const p = f(() => xs(e.schema)), x = f(() => p.value?.properties || {}), y = (D) => {
      const G = x.value[D];
      return G ? { name: D, type: G.type, isEnum: !1 } : null;
    }, h = f(() => e.filterDefinitions ?? Y.filterDefinitions);
    function T(D) {
      for (const G of Object.keys(x.value)) {
        const te = h.value.find((fe) => fe.value.replace("%", G) === D);
        if (te) return { column: G, op: te.name };
      }
      return { column: D, op: "=" };
    }
    const O = f(() => Object.entries(m.value).map(([D, G]) => {
      const { column: te, op: fe } = T(D);
      return { key: D, value: G, op: fe, label: x.value[te]?.title || te };
    })), E = (D) => Object.keys(m.value).filter((G) => T(G).column === D).length, _ = (D) => {
      const G = b.value.split(",").find((te) => te.replace(/^-/, "") === D);
      return G ? G.startsWith("-") ? "DESC" : "ASC" : null;
    }, Z = (D) => !!y(D) && x.value[D]?.type !== "object" && x.value[D]?.type !== "array", P = (D) => Object.fromEntries(
      Object.entries(m.value).filter(([G]) => G !== D)
    ), F = (D) => g({ filters: P(D), orderBy: b.value }), re = () => g({ orderBy: b.value });
    function se(D) {
      const G = [];
      for (const [te, fe] of Object.entries(m.value)) {
        const de = h.value.find((he) => he.value.replace("%", D) === te);
        de && G.push({ key: de.value, name: de.name, value: String(fe) });
      }
      return { filters: G, sort: _(D) ?? void 0 };
    }
    function B(D, G) {
      if (!Z(D)) return;
      const te = y(D), fe = G.target?.closest("TABLE")?.getBoundingClientRect();
      if (!te || !fe) return;
      const de = 318;
      i.value = {
        column: { name: te.name, type: te.type, meta: te, settings: se(te.name) },
        topLeft: {
          x: Math.max(Math.floor(G.clientX + de / 2), fe.x + de + 10),
          y: fe.y + 45
        }
      };
    }
    function z(D) {
      const G = i.value?.column?.name;
      if (i.value = null, !G) return;
      const te = { ...m.value };
      for (const de of h.value) delete te[de.value.replace("%", G)];
      for (const de of D.filters) te[de.key.replace("%", G)] = de.value;
      const fe = b.value.split(",").filter((de) => de && de.replace(/^-/, "") !== G);
      D.sort && fe.push((D.sort === "DESC" ? "-" : "") + G), g({ filters: te, orderBy: fe.join(",") });
    }
    const K = f(() => e.prefsKey || `auto:prefs:${e.schema?.name}`), j = f(() => e.columnOrder ?? Object.keys(x.value)), X = f(() => j.value.map((D) => ({ name: D }))), A = M(L());
    function L() {
      try {
        return JSON.parse(localStorage.getItem(K.value)) || {};
      } catch {
        return {};
      }
    }
    function I(D) {
      A.value = D, localStorage.setItem(K.value, JSON.stringify(D)), r.value = !1, ue();
    }
    const ie = f(() => A.value.take || e.take), V = f(() => {
      const D = A.value.selectedColumns;
      return D?.length ? j.value.filter((G) => D.includes(G)) : j.value;
    }), C = f(() => Object.fromEntries(
      Object.entries(x.value).map(([D, G]) => [D, G.title || D])
    )), le = f(() => w.value > 0), oe = f(() => w.value + ie.value < a.value), U = f(() => Math.max(0, Math.floor((a.value - 1) / ie.value) * ie.value)), Q = (D) => g({ filters: m.value, orderBy: b.value, skip: Math.max(0, D) }), R = (D) => ["px-0.5", D ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500 cursor-not-allowed"];
    async function ue() {
      if (e.schema?.query) {
        d.value = null;
        try {
          const D = new URLSearchParams(m.value);
          b.value && D.set("orderBy", b.value), D.set("skip", w.value), D.set("take", ie.value), D.has("include") || D.set("include", "total");
          const G = $s(e.schema.query.$id, m.value) + "?" + D, te = await fetch(G, { headers: { Accept: "application/json" } }), fe = te.status !== 204 ? await te.json() : {};
          if (!te.ok) throw ce(fe, "responseStatus") || { message: `${te.status} ${te.statusText}` };
          n.value = ce(fe, "results") || [], a.value = ce(fe, "total") ?? w.value + n.value.length;
        } catch (D) {
          d.value = D, n.value = [], a.value = 0;
        }
        t("loaded", { results: n.value, total: a.value });
      }
    }
    return lt(() => JSON.stringify([m.value, b.value, w.value]), ue), lt(K, () => {
      A.value = L();
    }), ze(ue), l({ reload: ue }), {
      rowSchema: p,
      rows: n,
      total: a,
      skip: w,
      take: ie,
      listError: d,
      showFilters: i,
      showPrefs: r,
      prefs: A,
      columns: V,
      allColumns: X,
      headerTitles: C,
      conventions: h,
      activeFilters: O,
      canFilter: Z,
      filterCount: E,
      sortOf: _,
      from: f(() => a.value ? w.value + 1 : 0),
      to: f(() => Math.min(w.value + n.value.length, a.value)),
      isSelected: () => !1,
      onHeaderSelected: B,
      onFilterSave: z,
      onPrefsSave: I,
      clearFilter: F,
      clearFilters: re,
      canPrev: le,
      canNext: oe,
      lastPageSkip: U,
      skipTo: Q,
      pagingClass: R
    };
  }
}, Cp = { class: "flex items-center gap-3 mb-3 min-h-9" }, Sp = {
  key: 0,
  class: "flex items-center"
}, Lp = ["disabled"], Vp = ["disabled"], Ap = ["disabled"], Mp = ["disabled"], Tp = {
  key: 1,
  class: "px-2 text-gray-500 dark:text-gray-400 whitespace-nowrap"
}, jp = { key: 0 }, Op = { key: 1 }, Fp = {
  key: 2,
  class: "flex flex-wrap items-center gap-2"
}, Ip = ["onClick", "title"], Pp = { class: "mr-1 select-none" }, Bp = {
  key: 0,
  class: "size-3.5 text-indigo-600 dark:text-indigo-400",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, Ep = {
  key: 1,
  class: "size-3.5 text-indigo-600 dark:text-indigo-400",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Dp = {
  key: 2,
  class: "size-3.5 text-indigo-600 dark:text-indigo-400",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Np = {
  key: 3,
  class: "size-3.5 text-gray-400 dark:text-gray-500",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true"
}, Rp = {
  key: 1,
  class: "py-8 text-center text-xs text-gray-500 dark:text-gray-400"
};
function Hp(e, t, l, n, a, d) {
  const i = N("ErrorSummary"), r = N("SchemaGrid"), c = N("FilterColumn"), v = N("QueryPrefs");
  return o(), u("div", null, [
    s("div", Cp, [
      s("button", {
        type: "button",
        onClick: t[0] || (t[0] = (m) => e.showPrefs = !0),
        title: "Query Preferences",
        class: "rounded-md p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
      }, [...t[9] || (t[9] = [
        s("span", { class: "sr-only" }, "Query Preferences", -1),
        s("svg", {
          class: "w-7 h-7",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          "stroke-width": "1.5"
        }, [
          s("path", {
            d: `M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1
                    .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18`,
            stroke: "currentColor"
          })
        ], -1)
      ])]),
      e.schema.query ? (o(), u("div", Sp, [
        s("button", {
          type: "button",
          title: "First page",
          disabled: !e.canPrev,
          onClick: t[1] || (t[1] = (m) => e.skipTo(0)),
          class: k(e.pagingClass(e.canPrev))
        }, [...t[10] || (t[10] = [
          s("span", { class: "sr-only" }, "First page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, Lp),
        s("button", {
          type: "button",
          title: "Previous page",
          disabled: !e.canPrev,
          onClick: t[2] || (t[2] = (m) => e.skipTo(e.skip - e.take)),
          class: k(e.pagingClass(e.canPrev))
        }, [...t[11] || (t[11] = [
          s("span", { class: "sr-only" }, "Previous page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, Vp),
        s("button", {
          type: "button",
          title: "Next page",
          disabled: !e.canNext,
          onClick: t[3] || (t[3] = (m) => e.skipTo(e.skip + e.take)),
          class: k(e.pagingClass(e.canNext))
        }, [...t[12] || (t[12] = [
          s("span", { class: "sr-only" }, "Next page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, Ap),
        s("button", {
          type: "button",
          title: "Last page",
          disabled: !e.canNext,
          onClick: t[4] || (t[4] = (m) => e.skipTo(e.lastPageSkip)),
          class: k(e.pagingClass(e.canNext))
        }, [...t[13] || (t[13] = [
          s("span", { class: "sr-only" }, "Last page", -1),
          s("svg", {
            class: "w-7 h-7",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
              fill: "currentColor"
            })
          ], -1)
        ])], 10, Mp)
      ])) : $("", !0),
      e.schema.query ? (o(), u("div", Tp, [
        e.total ? (o(), u("span", jp, [
          t[14] || (t[14] = s("span", { class: "hidden xl:inline" }, "Showing Results ", -1)),
          ve(S(e.from) + " - " + S(e.to) + " of " + S(e.total), 1)
        ])) : e.listError ? $("", !0) : (o(), u("span", Op, "No Results"))
      ])) : $("", !0),
      e.activeFilters.length ? (o(), u("div", Fp, [
        (o(!0), u(ye, null, be(e.activeFilters, (m) => (o(), u("span", {
          key: m.key,
          class: "inline-flex items-center gap-1 rounded-full pl-2.5 pr-1 py-0.5 text-xs bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
        }, [
          ve(S(m.label) + " " + S(m.op) + " " + S(m.value) + " ", 1),
          s("button", {
            type: "button",
            onClick: (b) => e.clearFilter(m.key),
            title: "Remove " + m.label + " filter",
            class: "rounded-full p-0.5 hover:bg-indigo-200 dark:hover:bg-indigo-800"
          }, [...t[15] || (t[15] = [
            s("span", { class: "sr-only" }, "Remove", -1),
            s("svg", {
              class: "w-3 h-3",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              viewBox: "0 0 24 24"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M6 18 18 6M6 6l12 12"
              })
            ], -1)
          ])], 8, Ip)
        ]))), 128)),
        s("button", {
          type: "button",
          onClick: t[5] || (t[5] = (...m) => e.clearFilters && e.clearFilters(...m)),
          class: "text-xs text-gray-500 dark:text-gray-400 hover:underline"
        }, "Clear all")
      ])) : $("", !0),
      t[16] || (t[16] = s("span", { class: "flex-1" }, null, -1)),
      W(e.$slots, "toolbar")
    ]),
    e.listError ? (o(), J(i, {
      key: 0,
      status: e.listError,
      class: "mb-4"
    }, null, 8, ["status"])) : $("", !0),
    me(r, {
      items: e.rows,
      schema: e.rowSchema,
      "selected-columns": e.columns,
      "header-titles": e.headerTitles,
      "is-selected": e.selectable ? e.isSelected : void 0,
      onRowSelected: t[6] || (t[6] = (m) => e.$emit("rowSelected", m)),
      onHeaderSelected: e.onHeaderSelected
    }, {
      header: we(({ column: m, label: b }) => [
        s("div", {
          class: k(["flex items-center justify-between gap-1", e.canFilter(m) ? "cursor-pointer hover:text-gray-900 dark:hover:text-gray-50" : ""])
        }, [
          s("span", Pp, S(b), 1),
          e.filterCount(m) ? (o(), u("svg", Bp, [...t[17] || (t[17] = [
            s("path", {
              d: `M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0
                        0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z`,
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, -1)
          ])])) : e.sortOf(m) === "ASC" ? (o(), u("svg", Ep, [...t[18] || (t[18] = [
            s("path", { d: `M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5
                        0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z` }, null, -1)
          ])])) : e.sortOf(m) === "DESC" ? (o(), u("svg", Dp, [...t[19] || (t[19] = [
            s("path", { d: `M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5
                        0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z` }, null, -1)
          ])])) : e.canFilter(m) ? (o(), u("svg", Np, [...t[20] || (t[20] = [
            s("path", { d: `M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9
                        4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z` }, null, -1)
          ])])) : $("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["items", "schema", "selected-columns", "header-titles", "is-selected", "onHeaderSelected"]),
    !e.rows.length && !e.listError ? (o(), u("div", Rp, " No results ")) : $("", !0),
    (o(), J(ua, { to: "body" }, [
      e.showFilters ? (o(), J(c, {
        key: 0,
        definitions: e.conventions,
        column: e.showFilters.column,
        "top-left": e.showFilters.topLeft,
        onDone: t[7] || (t[7] = (m) => e.showFilters = null),
        onSave: e.onFilterSave
      }, null, 8, ["definitions", "column", "top-left", "onSave"])) : $("", !0),
      e.showPrefs ? (o(), J(v, {
        key: 1,
        columns: e.allColumns,
        prefs: e.prefs,
        onDone: t[8] || (t[8] = (m) => e.showPrefs = !1),
        onSave: e.onPrefsSave
      }, null, 8, ["columns", "prefs", "onSave"])) : $("", !0)
    ]))
  ]);
}
const Cs = /* @__PURE__ */ wt($p, [["render", Hp]]), po = /* @__PURE__ */ Symbol("JsonSchemaForm"), mt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), qp = (e) => e.replace(/^#\//, "").split("/").map((t) => decodeURIComponent(t.replace(/~1/g, "/").replace(/~0/g, "~")));
function go(e, t, l) {
  if (!e?.$ref) return e;
  if (l.has(e.$ref)) return { ...e, $recursive: !0, $ref: void 0 };
  l.add(e.$ref);
  let n = t;
  for (const i of qp(e.$ref)) n = n?.[i];
  if (!n) return e;
  const { $ref: a, ...d } = e;
  return go({ ...n, ...d }, t, l);
}
function zp(e, t) {
  if (!e?.allOf?.length) return e;
  const { allOf: l, ...n } = e;
  return l.reduce((a, d) => {
    const i = Qe(d, t);
    return {
      ...a,
      ...i,
      properties: { ...a.properties ?? {}, ...i.properties ?? {} },
      required: [.../* @__PURE__ */ new Set([...a.required ?? [], ...i.required ?? []])]
    };
  }, n);
}
const Qs = /* @__PURE__ */ new WeakMap();
function Qe(e, t) {
  if (!e || typeof e != "object") return {};
  const l = t ?? e;
  let n = Qs.get(l);
  if (n || Qs.set(l, n = /* @__PURE__ */ new WeakMap()), n.has(e)) return n.get(e);
  let a = zp(go(e, l, /* @__PURE__ */ new Set()), l);
  return a.nullable && !Array.isArray(a.type) && a.type && (a = { ...a, type: [a.type, "null"] }), n.set(e, a), a;
}
function Tt(e, t) {
  const l = Array.isArray(e?.type) ? e.type.find((n) => n !== "null") : e?.type;
  return l || (e?.properties || e?.additionalProperties ? "object" : e?.items || e?.prefixItems ? "array" : e?.const !== void 0 ? typeof e.const == "number" ? "number" : typeof e.const : Array.isArray(t) ? "array" : mt(t) ? "object" : typeof t == "number" ? "number" : typeof t == "boolean" ? "boolean" : "string");
}
const Up = (e) => !!e?.nullable || Array.isArray(e?.type) && e.type.includes("null");
function Tl(e) {
  if (e?.enum) {
    const l = e["x-enumNames"] ?? e.enumNames;
    return e.enum.map((n, a) => ({ value: n, label: l?.[a] ?? String(n) }));
  }
  if (e?.const !== void 0) return [{ value: e.const, label: String(e.const) }];
  const t = e?.oneOf ?? e?.anyOf;
  return t?.length && t.every((l) => l.const !== void 0) ? t.map((l) => ({ value: l.const, label: l.title ?? String(l.const) })) : null;
}
function yo(e) {
  const t = e?.oneOf ?? e?.anyOf;
  return !t?.length || t.every((l) => l.const !== void 0) ? null : t;
}
function Kp(e, t, l) {
  let n = 0, a = -1;
  return e.forEach((d, i) => {
    const r = Qe(d, l);
    let c = 0;
    if (mt(t)) {
      for (const [v, m] of Object.entries(r.properties ?? {}))
        t[v] !== void 0 && (c += 1), m.const !== void 0 && t[v] === m.const && (c += 10);
      for (const v of r.required ?? []) t[v] !== void 0 && (c += 2);
    } else t !== void 0 && Tt(r) === Tt({}, t) && (c += 1);
    c > a && (a = c, n = i);
  }), n;
}
function At(e, t, l = /* @__PURE__ */ new Set()) {
  const n = Qe(e, t);
  if (n.default !== void 0) return structuredClone(n.default);
  if (n.const !== void 0) return n.const;
  const a = Tl(n);
  if (a) return a[0].value;
  const d = yo(n);
  if (d) return At(d[0], t, l);
  const i = Tt(n);
  if (i === "object" || i === "array") {
    if (l.has(n)) return null;
    l.add(n);
  }
  switch (i) {
    case "object": {
      const r = {};
      for (const [c, v] of Object.entries(n.properties ?? {})) r[c] = At(v, t, l);
      return r;
    }
    case "array":
      return (n.prefixItems ?? []).map((r) => At(r, t, l));
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return "";
  }
}
const ho = {
  date: "date",
  "date-time": "datetime-local",
  time: "time",
  month: "month",
  week: "week",
  email: "email",
  uri: "url",
  url: "url",
  password: "password",
  color: "color",
  tel: "tel",
  search: "search",
  uuid: "text"
};
function Qp(e, t) {
  const l = e?.["x-widget"];
  if (l === "hidden") return "hidden";
  if (l) return l;
  if (Tl(e)) return "select";
  const n = Tt(e, t);
  return n === "object" ? "object" : n === "array" ? "array" : n === "boolean" ? "checkbox" : n === "integer" || n === "number" ? "number" : e?.format === "textarea" ? "textarea" : ho[e?.format] ? "input" : typeof t == "string" && (t.length > 80 || t.includes(`
`)) ? "textarea" : "input";
}
const En = (e) => String(e ?? "").replace(/\[(\d+)\]/g, ".$1").toLowerCase();
function Jp(e, t, l) {
  const n = e?.errors ?? e?.Errors;
  if (!n?.length || !t) return null;
  const a = En(t), d = a.split(".").pop(), i = n.find((r) => {
    const c = En(r.fieldName ?? r.FieldName);
    return c === a ? !0 : !c.includes(".") && c === d && (l?.get(d) ?? 2) === 1;
  });
  return i ? i.message ?? i.Message ?? i.errorCode ?? i.ErrorCode : null;
}
function Gl(e, t, l = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map()) {
  const a = Qe(e, t ?? e);
  if (!a.properties && !a.items && !a.prefixItems && !a.oneOf && !a.anyOf || l.has(a)) return n;
  l.add(a);
  for (const [d, i] of Object.entries(a.properties ?? {})) {
    const r = d.toLowerCase();
    n.set(r, (n.get(r) ?? 0) + 1), Gl(i, t ?? e, l, n);
  }
  for (const d of a.oneOf ?? a.anyOf ?? []) Gl(d, t ?? e, l, n);
  for (const d of [a.items, ...a.prefixItems ?? []])
    d && Gl(d, t ?? e, l, n);
  return n;
}
const Xe = (e, t, l) => ({ fieldName: e, errorCode: t, message: l }), Js = (e) => e == null || e === "" || Array.isArray(e) && e.length === 0;
function Dn(e, t, l, n = "", a = "", d = []) {
  const i = Qe(e, l), r = a || (n ? n.split(".").pop() : "value"), c = Tt(i, t);
  i.const !== void 0 && t !== i.const && d.push(Xe(n, "Const", `${r} must be ${i.const}`));
  const v = Tl(i);
  if (v && !Js(t) && !v.some((m) => m.value === t) && d.push(Xe(n, "Enum", `${r} must be one of ${v.map((m) => m.label).join(", ")}`)), c === "object" && mt(t)) {
    for (const m of i.required ?? []) {
      const b = Qe(i.properties?.[m], l);
      Js(t[m]) && d.push(Xe(n ? `${n}.${m}` : m, "NotEmpty", `${b.title || Te(m)} is required`));
    }
    for (const [m, b] of Object.entries(i.properties ?? {}))
      t[m] !== void 0 && Dn(b, t[m], l, n ? `${n}.${m}` : m, Qe(b, l).title || Te(m), d);
  } else c === "array" && Array.isArray(t) ? (i.minItems != null && t.length < i.minItems && d.push(Xe(n, "MinItems", `${r} needs at least ${i.minItems}`)), i.maxItems != null && t.length > i.maxItems && d.push(Xe(n, "MaxItems", `${r} allows at most ${i.maxItems}`)), i.uniqueItems && new Set(t.map((m) => JSON.stringify(m))).size !== t.length && d.push(Xe(n, "UniqueItems", `${r} must not contain duplicates`)), t.forEach((m, b) => {
    const w = i.prefixItems?.[b] ?? i.items;
    w && Dn(w, m, l, `${n}[${b}]`, `${r} ${b + 1}`, d);
  })) : c === "string" && typeof t == "string" && t !== "" ? (i.minLength != null && t.length < i.minLength && d.push(Xe(n, "MinLength", `${r} must be at least ${i.minLength} characters`)), i.maxLength != null && t.length > i.maxLength && d.push(Xe(n, "MaxLength", `${r} must be at most ${i.maxLength} characters`)), i.pattern && !new RegExp(i.pattern).test(t) && d.push(Xe(n, "Pattern", `${r} is not in the expected format`))) : (c === "number" || c === "integer") && typeof t == "number" && (c === "integer" && !Number.isInteger(t) && d.push(Xe(n, "Integer", `${r} must be a whole number`)), i.minimum != null && t < i.minimum && d.push(Xe(n, "Minimum", `${r} must be ${i.minimum} or more`)), i.maximum != null && t > i.maximum && d.push(Xe(n, "Maximum", `${r} must be ${i.maximum} or less`)), i.exclusiveMinimum != null && t <= i.exclusiveMinimum && d.push(Xe(n, "ExclusiveMinimum", `${r} must be greater than ${i.exclusiveMinimum}`)), i.exclusiveMaximum != null && t >= i.exclusiveMaximum && d.push(Xe(n, "ExclusiveMaximum", `${r} must be less than ${i.exclusiveMaximum}`)), i.multipleOf && Math.abs(t / i.multipleOf - Math.round(t / i.multipleOf)) > 1e-9 && d.push(Xe(n, "MultipleOf", `${r} must be a multiple of ${i.multipleOf}`)));
  return d;
}
const Gp = "block w-full sm:text-sm rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:text-white dark:bg-gray-900 focus:border-indigo-500 focus:ring-indigo-500 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500", Wp = "block w-full sm:text-sm rounded-md shadow-sm border-red-500 text-red-900 dark:text-red-200 dark:bg-gray-900 focus:border-red-500 focus:ring-red-500", Zp = "rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden", Xp = "flex items-center gap-2 px-2 py-1.5 bg-gray-50 dark:bg-gray-800/50", Yp = "border-b border-gray-200 dark:border-gray-700", _p = "px-2 py-0.5 text-xs rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40", e1 = "p-1 rounded text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-40", t1 = {
  name: "JsonSchemaNode",
  props: {
    schema: { type: Object, default: () => ({}) },
    model: { type: [Object, Array], required: !0 },
    field: { type: [String, Number], required: !0 },
    path: { type: String, default: "" },
    label: { type: String, default: "" },
    required: { type: Boolean, default: !1 },
    /** render the object's fields without the surrounding panel, header and collapse toggle */
    bare: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = Pe(po), l = t.root, n = M(""), a = f(() => e.model[e.field]), d = f(() => Qe(e.schema, l.value)), i = f(() => yo(d.value)), r = M(0), c = f(() => {
      if (!i.value) return d.value;
      const { oneOf: j, anyOf: X, ...A } = d.value;
      return { ...A, ...Qe(i.value[r.value], l.value) };
    });
    rl(() => {
      i.value && (r.value = Kp(i.value, a.value, l.value));
    });
    const v = f(() => {
      const j = Qp(c.value, a.value);
      return j === "array" && b.value && c.value["x-widget"] !== "list" ? "checklist" : j;
    }), m = f(() => Tl(c.value)), b = f(
      () => Tt(c.value) === "array" && c.value.items ? Tl(Qe(c.value.items, l.value)) : null
    ), w = f(() => e.label || c.value.title || ""), g = f(() => t.readOnly.value || !!c.value.readOnly), p = f(() => Jp(t.status.value, e.path, t.leafCounts.value)), x = f(() => "f-" + (En(e.path).replace(/\./g, "-") || "root")), y = f(() => a.value === void 0 || a.value === null), h = M(!y.value && !c.value["x-collapsed"]);
    rl(() => {
      if (!h.value && !e.bare) return;
      const j = e.model[e.field];
      (v.value === "array" && !Array.isArray(j) || v.value === "object" && !mt(j)) && (e.model[e.field] = At(c.value, l.value));
    });
    const T = f(() => Array.isArray(a.value) ? a.value : []), O = f(() => mt(a.value) ? a.value : {}), E = f(() => c.value.prefixItems ?? (Array.isArray(c.value.items) ? c.value.items : null)), _ = f(() => E.value ?? []), Z = f(() => _.value.length), P = f(
      () => T.value.map((j, X) => X).filter((j) => j >= Z.value)
    ), F = f(() => c.value.maxItems != null && T.value.length >= c.value.maxItems), re = f(() => c.value.minItems != null && T.value.length <= c.value.minItems), se = f(() => {
      const j = c.value.additionalProperties;
      return j === void 0 ? !c.value.properties : j !== !1;
    }), B = f(() => {
      if (v.value !== "object") return [];
      const j = Object.entries(c.value.properties ?? {}), X = Object.keys(O.value).filter((A) => !c.value.properties?.[A]).map((A) => [A, mt(c.value.additionalProperties) ? c.value.additionalProperties : {}]);
      return [...j, ...X].map(([A, L]) => {
        const I = Qe(L, l.value), ie = Tt(I, O.value[A]), V = !!c.value.properties?.[A];
        return {
          key: A,
          schema: L,
          order: I["x-order"] ?? 0,
          // additionalProperties keys are data, not identifiers - show them verbatim
          label: I.title || (V ? Te(A) : A),
          wide: ie === "object" || ie === "array" || I.format === "textarea" || I["x-widget"] === "textarea",
          removable: !c.value.properties?.[A],
          hidden: I["x-widget"] === "hidden"
        };
      }).filter((A) => !A.hidden).sort((A, L) => A.order - L.order);
    });
    function z(j) {
      e.model[e.field] = j, t.onChange();
    }
    function K() {
      return Array.isArray(e.model[e.field]) || (e.model[e.field] = []), e.model[e.field];
    }
    return {
      newKey: n,
      value: a,
      schema: c,
      widget: v,
      choices: m,
      itemChoices: b,
      heading: w,
      readOnly: g,
      error: p,
      id: x,
      expanded: h,
      items: T,
      container: O,
      properties: B,
      allowsNewKeys: se,
      tuple: E,
      tupleEntries: _,
      extraIndexes: P,
      firstExtra: Z,
      atMax: F,
      atMin: re,
      variants: i,
      variant: r,
      variantLabels: f(
        () => (i.value ?? []).map((j, X) => Qe(j, l.value).title ?? `Option ${X + 1}`)
      ),
      nullable: f(() => Up(c.value)),
      fixed: f(() => c.value.const !== void 0),
      step: f(() => Tt(c.value) === "integer" ? 1 : c.value.multipleOf ?? "any"),
      inputType: f(() => ho[c.value.format] ?? "text"),
      describedBy: f(() => p.value ? `${x.value}-err` : c.value.description ? `${x.value}-help` : void 0),
      panelClass: Zp,
      headerClass: Xp,
      headerBorderClass: Yp,
      smallBtnClass: _p,
      iconBtnClass: e1,
      inputClass: Gp,
      errorClass: Wp,
      isRequired: (j) => (c.value.required ?? []).includes(j),
      childPath: (j) => e.path ? `${e.path}.${j}` : j,
      toggle: () => h.value = !h.value,
      itemLabel(j) {
        const X = E.value?.[j];
        if (X) return Qe(X, l.value).title ?? `#${j + 1}`;
        const A = Qe(c.value.items, l.value), L = A["x-titleKey"], I = T.value[j];
        return L && mt(I) && I[L] ? `${j + 1}. ${I[L]}` : A.title ? `${A.title} ${j + 1}` : mt(I) ? `${e.label || "Item"} ${j + 1}` : "";
      },
      setVariant(j) {
        r.value = j;
        const X = Qe(i.value[j], l.value), A = mt(a.value) ? a.value : {}, L = At(X, l.value);
        if (mt(L))
          for (const I of Object.keys(L))
            !(Qe(X.properties?.[I], l.value).const !== void 0) && A[I] !== void 0 && (L[I] = A[I]);
        z(L);
      },
      coerce(j) {
        if (j === String(null)) return null;
        const X = m.value?.find((A) => String(A.value) === j);
        return X ? X.value : j;
      },
      setValue: z,
      toggleChoice(j, X) {
        const A = K(), L = A.indexOf(j);
        X && L === -1 ? A.push(j) : !X && L !== -1 && A.splice(L, 1), t.onChange();
      },
      addItem() {
        K().push(At(c.value.items, l.value)), h.value = !0, t.onChange();
      },
      removeItem(j) {
        e.model[e.field].splice(j, 1), t.onChange();
      },
      move(j, X) {
        const A = e.model[e.field], L = j + X;
        L < Z.value || L >= A.length || (A.splice(L, 0, A.splice(j, 1)[0]), t.onChange());
      },
      addKey() {
        const j = n.value.trim();
        if (!j) return;
        const X = c.value.additionalProperties;
        O.value[j] = mt(X) ? At(X, l.value) : "", n.value = "", t.onChange();
      },
      removeKey(j) {
        delete O.value[j], t.onChange();
      }
    };
  }
}, l1 = { key: 0 }, n1 = ["aria-labelledby"], s1 = ["id", "aria-expanded"], a1 = {
  key: 0,
  class: "text-red-500"
}, o1 = { class: "text-xs text-gray-500" }, r1 = {
  key: 0,
  class: "text-xs italic text-gray-400"
}, i1 = ["disabled", "title"], u1 = {
  key: 0,
  class: "p-2 space-y-2"
}, d1 = { class: "flex-1 min-w-0" }, c1 = {
  key: 0,
  class: "flex flex-col opacity-0 group-hover:opacity-100"
}, f1 = ["onClick", "disabled"], m1 = ["onClick", "disabled"], v1 = ["onClick", "disabled"], p1 = {
  key: 0,
  class: "px-1 py-2 text-xs italic text-gray-500"
}, g1 = {
  key: 1,
  class: "text-xs text-red-600 dark:text-red-400"
}, y1 = { key: 2 }, h1 = { class: "mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300" }, b1 = {
  key: 0,
  class: "text-red-500"
}, w1 = { class: "flex flex-wrap gap-x-4 gap-y-1" }, k1 = ["checked", "disabled", "onChange"], x1 = {
  key: 0,
  class: "mt-1 text-xs text-red-600 dark:text-red-400"
}, $1 = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, C1 = ["role", "aria-labelledby"], S1 = {
  key: 0,
  class: "mb-2 flex justify-end"
}, L1 = ["value", "disabled"], V1 = ["value"], A1 = ["id", "aria-expanded"], M1 = {
  key: 0,
  class: "text-red-500"
}, T1 = {
  key: 0,
  class: "text-xs italic text-gray-400"
}, j1 = ["value", "disabled"], O1 = ["value"], F1 = { class: "flex items-start gap-1" }, I1 = { class: "flex-1 min-w-0" }, P1 = ["onClick", "title"], B1 = {
  key: 0,
  class: "md:col-span-2 px-1 py-2 text-xs italic text-gray-500"
}, E1 = {
  key: 1,
  class: "md:col-span-2 flex items-center gap-2"
}, D1 = ["disabled"], N1 = {
  key: 2,
  class: "md:col-span-2 text-xs text-red-600 dark:text-red-400"
}, R1 = { key: 4 }, H1 = { class: "inline-flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300" }, q1 = ["checked", "disabled", "aria-invalid", "aria-describedby"], z1 = {
  key: 0,
  class: "text-red-500"
}, U1 = ["id"], K1 = ["id"], Q1 = { key: 5 }, J1 = { class: "mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300" }, G1 = {
  key: 0,
  class: "text-red-500"
}, W1 = { class: "flex flex-wrap gap-x-4 gap-y-1" }, Z1 = ["name", "value", "checked", "disabled", "onChange"], X1 = {
  key: 0,
  class: "mt-1 text-xs text-red-600 dark:text-red-400"
}, Y1 = {
  key: 1,
  class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
}, _1 = { key: 6 }, eg = ["for"], tg = {
  key: 0,
  class: "text-red-500"
}, lg = ["id", "value", "disabled", "aria-invalid", "aria-describedby"], ng = ["value"], sg = ["value"], ag = ["id", "step", "min", "max", "value", "disabled", "aria-invalid", "aria-describedby"], og = ["id", "value", "disabled", "maxlength", "aria-invalid", "aria-describedby"], rg = ["id", "type", "value", "disabled", "placeholder", "minlength", "maxlength", "pattern", "aria-invalid", "aria-describedby"], ig = ["id"], ug = ["id"];
function dg(e, t, l, n, a, d) {
  const i = N("JsonSchemaNode", !0);
  return e.widget === "hidden" ? (o(), u("div", l1)) : e.widget === "array" ? (o(), u("div", {
    key: 1,
    class: k(e.panelClass),
    role: "group",
    "aria-labelledby": e.id + "-label"
  }, [
    s("div", {
      class: k([e.headerClass, e.expanded ? e.headerBorderClass : ""])
    }, [
      s("button", {
        type: "button",
        onClick: t[0] || (t[0] = (...r) => e.toggle && e.toggle(...r)),
        class: "flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300",
        id: e.id + "-label",
        "aria-expanded": e.expanded
      }, [
        (o(), u("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: k(["size-3 transition-transform flex-shrink-0", { "-rotate-90": !e.expanded }]),
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, [...t[13] || (t[13] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 9l-7 7-7-7"
          }, null, -1)
        ])], 2)),
        ve(" " + S(e.heading), 1),
        e.required ? (o(), u("span", a1, "*")) : $("", !0)
      ], 8, s1),
      s("span", o1, S(e.items.length), 1),
      e.schema.deprecated ? (o(), u("span", r1, "deprecated")) : $("", !0),
      t[14] || (t[14] = s("div", { class: "flex-1" }, null, -1)),
      !e.readOnly && !e.tuple ? (o(), u("button", {
        key: 1,
        type: "button",
        onClick: t[1] || (t[1] = (...r) => e.addItem && e.addItem(...r)),
        disabled: e.atMax,
        class: k(e.smallBtnClass),
        title: e.atMax ? "At most " + e.schema.maxItems : "Add"
      }, "+ Add", 10, i1)) : $("", !0)
    ], 2),
    e.expanded ? (o(), u("div", u1, [
      (o(!0), u(ye, null, be(e.tupleEntries, (r, c) => (o(), u("div", {
        key: "t" + c
      }, [
        me(i, {
          schema: r,
          model: e.items,
          field: c,
          path: e.path + "[" + c + "]",
          label: e.itemLabel(c)
        }, null, 8, ["schema", "model", "field", "path", "label"])
      ]))), 128)),
      (o(!0), u(ye, null, be(e.extraIndexes, (r) => (o(), u("div", {
        key: "i" + r,
        class: "group flex items-start gap-2"
      }, [
        s("div", d1, [
          me(i, {
            schema: e.schema.items,
            model: e.items,
            field: r,
            path: e.path + "[" + r + "]",
            label: e.itemLabel(r)
          }, null, 8, ["schema", "model", "field", "path", "label"])
        ]),
        e.readOnly ? $("", !0) : (o(), u("div", c1, [
          s("button", {
            type: "button",
            onClick: (c) => e.move(r, -1),
            disabled: r === e.firstExtra,
            title: "Move up",
            class: k(e.iconBtnClass)
          }, [...t[15] || (t[15] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M5 15l7-7 7 7"
              })
            ], -1)
          ])], 10, f1),
          s("button", {
            type: "button",
            onClick: (c) => e.move(r, 1),
            disabled: r === e.items.length - 1,
            title: "Move down",
            class: k(e.iconBtnClass)
          }, [...t[16] || (t[16] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              s("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ], -1)
          ])], 10, m1),
          s("button", {
            type: "button",
            onClick: (c) => e.removeItem(r),
            disabled: e.atMin,
            title: "Remove",
            class: "p-1 rounded text-gray-400 hover:text-red-600 dark:hover:text-red-400 disabled:opacity-40"
          }, [...t[17] || (t[17] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              s("path", {
                "fill-rule": "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])], 8, v1)
        ]))
      ]))), 128)),
      e.items.length ? $("", !0) : (o(), u("div", p1, "No entries yet")),
      e.error ? (o(), u("p", g1, S(e.error), 1)) : $("", !0)
    ])) : $("", !0)
  ], 10, n1)) : e.widget === "checklist" ? (o(), u("div", y1, [
    s("span", h1, [
      ve(S(e.heading), 1),
      e.required ? (o(), u("span", b1, "*")) : $("", !0)
    ]),
    s("div", w1, [
      (o(!0), u(ye, null, be(e.itemChoices, (r) => (o(), u("label", {
        key: String(r.value),
        class: "inline-flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300"
      }, [
        s("input", {
          type: "checkbox",
          checked: e.items.includes(r.value),
          disabled: e.readOnly,
          onChange: (c) => e.toggleChoice(r.value, c.target.checked),
          class: "rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
        }, null, 40, k1),
        ve(" " + S(r.label), 1)
      ]))), 128))
    ]),
    e.error ? (o(), u("p", x1, S(e.error), 1)) : e.schema.description ? (o(), u("p", $1, S(e.schema.description), 1)) : $("", !0)
  ])) : e.widget === "object" ? (o(), u("div", {
    key: 3,
    class: k(e.bare ? "" : e.panelClass),
    role: e.bare ? null : "group",
    "aria-labelledby": e.bare ? null : e.id + "-label"
  }, [
    e.bare && e.variants ? (o(), u("div", S1, [
      s("select", {
        value: e.variant,
        onChange: t[2] || (t[2] = (r) => e.setVariant(Number(r.target.value))),
        disabled: e.readOnly,
        class: "text-xs rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white py-0.5"
      }, [
        (o(!0), u(ye, null, be(e.variantLabels, (r, c) => (o(), u("option", {
          key: c,
          value: c
        }, S(r), 9, V1))), 128))
      ], 40, L1)
    ])) : $("", !0),
    e.heading && !e.bare ? (o(), u("div", {
      key: 1,
      class: k([e.headerClass, e.expanded ? e.headerBorderClass : ""])
    }, [
      s("button", {
        type: "button",
        onClick: t[3] || (t[3] = (...r) => e.toggle && e.toggle(...r)),
        class: "flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300",
        id: e.id + "-label",
        "aria-expanded": e.expanded
      }, [
        (o(), u("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          class: k(["size-3 transition-transform flex-shrink-0", { "-rotate-90": !e.expanded }]),
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, [...t[18] || (t[18] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 9l-7 7-7-7"
          }, null, -1)
        ])], 2)),
        ve(" " + S(e.heading), 1),
        e.required ? (o(), u("span", M1, "*")) : $("", !0)
      ], 8, A1),
      e.schema.deprecated ? (o(), u("span", T1, "deprecated")) : $("", !0),
      t[19] || (t[19] = s("div", { class: "flex-1" }, null, -1)),
      e.variants ? (o(), u("select", {
        key: 1,
        value: e.variant,
        onChange: t[4] || (t[4] = (r) => e.setVariant(Number(r.target.value))),
        disabled: e.readOnly,
        class: "text-xs rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white py-0.5"
      }, [
        (o(!0), u(ye, null, be(e.variantLabels, (r, c) => (o(), u("option", {
          key: c,
          value: c
        }, S(r), 9, O1))), 128))
      ], 40, j1)) : $("", !0)
    ], 2)) : $("", !0),
    e.expanded || e.bare ? (o(), u("div", {
      key: 2,
      class: k(["grid grid-cols-1 md:grid-cols-2 gap-2", e.bare ? "" : "p-2"])
    }, [
      (o(!0), u(ye, null, be(e.properties, (r) => (o(), u("div", {
        key: r.key,
        class: k({ "md:col-span-2": r.wide })
      }, [
        s("div", F1, [
          s("div", I1, [
            me(i, {
              schema: r.schema,
              model: e.container,
              field: r.key,
              path: e.childPath(r.key),
              label: r.label,
              required: e.isRequired(r.key)
            }, null, 8, ["schema", "model", "field", "path", "label", "required"])
          ]),
          r.removable && !e.readOnly ? (o(), u("button", {
            key: 0,
            type: "button",
            onClick: (c) => e.removeKey(r.key),
            title: "Remove " + r.key,
            class: "mt-4 p-1 rounded text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          }, [...t[20] || (t[20] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              class: "size-3.5",
              viewBox: "0 0 20 20",
              fill: "currentColor"
            }, [
              s("path", {
                "fill-rule": "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                "clip-rule": "evenodd"
              })
            ], -1)
          ])], 8, P1)) : $("", !0)
        ])
      ], 2))), 128)),
      !e.properties.length && !e.allowsNewKeys ? (o(), u("div", B1, "No fields")) : $("", !0),
      e.allowsNewKeys && !e.readOnly ? (o(), u("div", E1, [
        Ot(s("input", {
          "onUpdate:modelValue": t[5] || (t[5] = (r) => e.newKey = r),
          type: "text",
          placeholder: "New property",
          onKeyup: t[6] || (t[6] = an((...r) => e.addKey && e.addKey(...r), ["enter"])),
          class: "px-2 py-1 text-xs rounded-md shadow-sm border-gray-300 dark:border-gray-600 dark:text-white dark:bg-gray-900"
        }, null, 544), [
          [ra, e.newKey]
        ]),
        s("button", {
          type: "button",
          onClick: t[7] || (t[7] = (...r) => e.addKey && e.addKey(...r)),
          disabled: !e.newKey.trim(),
          class: k(e.smallBtnClass)
        }, "Add", 10, D1)
      ])) : $("", !0),
      e.error ? (o(), u("p", N1, S(e.error), 1)) : $("", !0)
    ], 2)) : $("", !0)
  ], 10, C1)) : e.widget === "checkbox" ? (o(), u("div", R1, [
    s("label", H1, [
      s("input", {
        type: "checkbox",
        checked: !!e.value,
        disabled: e.readOnly,
        onChange: t[8] || (t[8] = (r) => e.setValue(r.target.checked)),
        "aria-invalid": !!e.error,
        "aria-describedby": e.describedBy,
        class: "rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
      }, null, 40, q1),
      ve(" " + S(e.heading), 1),
      e.required ? (o(), u("span", z1, "*")) : $("", !0)
    ]),
    e.error ? (o(), u("p", {
      key: 0,
      id: e.id + "-err",
      class: "mt-1 text-xs text-red-600 dark:text-red-400"
    }, S(e.error), 9, U1)) : e.schema.description ? (o(), u("p", {
      key: 1,
      id: e.id + "-help",
      class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
    }, S(e.schema.description), 9, K1)) : $("", !0)
  ])) : e.widget === "radio" ? (o(), u("div", Q1, [
    s("span", J1, [
      ve(S(e.heading), 1),
      e.required ? (o(), u("span", G1, "*")) : $("", !0)
    ]),
    s("div", W1, [
      (o(!0), u(ye, null, be(e.choices, (r) => (o(), u("label", {
        key: String(r.value),
        class: "inline-flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300"
      }, [
        s("input", {
          type: "radio",
          name: e.id,
          value: String(r.value),
          checked: e.value === r.value,
          disabled: e.readOnly,
          onChange: (c) => e.setValue(r.value),
          class: "border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
        }, null, 40, Z1),
        ve(" " + S(r.label), 1)
      ]))), 128))
    ]),
    e.error ? (o(), u("p", X1, S(e.error), 1)) : e.schema.description ? (o(), u("p", Y1, S(e.schema.description), 1)) : $("", !0)
  ])) : (o(), u("div", _1, [
    e.heading ? (o(), u("label", {
      key: 0,
      for: e.id,
      class: k(["mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300", { "italic opacity-70": e.schema.deprecated }])
    }, [
      ve(S(e.heading), 1),
      e.required ? (o(), u("span", tg, "*")) : $("", !0)
    ], 10, eg)) : $("", !0),
    e.widget === "select" ? (o(), u("select", {
      key: 1,
      id: e.id,
      value: String(e.value),
      disabled: e.readOnly || e.fixed,
      onChange: t[9] || (t[9] = (r) => e.setValue(e.coerce(r.target.value))),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: k(e.error ? e.errorClass : e.inputClass)
    }, [
      e.nullable ? (o(), u("option", {
        key: 0,
        value: String(null)
      }, "(none)", 8, ng)) : $("", !0),
      (o(!0), u(ye, null, be(e.choices, (r) => (o(), u("option", {
        key: String(r.value),
        value: String(r.value)
      }, S(r.label), 9, sg))), 128))
    ], 42, lg)) : e.widget === "number" ? (o(), u("input", {
      key: 2,
      id: e.id,
      type: "number",
      step: e.step,
      min: e.schema.minimum ?? e.schema.exclusiveMinimum,
      max: e.schema.maximum ?? e.schema.exclusiveMaximum,
      value: e.value,
      disabled: e.readOnly,
      onInput: t[10] || (t[10] = (r) => e.setValue(r.target.value === "" ? null : Number(r.target.value))),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: k(e.error ? e.errorClass : e.inputClass)
    }, null, 42, ag)) : e.widget === "textarea" ? (o(), u("textarea", {
      key: 3,
      id: e.id,
      value: e.value ?? "",
      disabled: e.readOnly,
      rows: "3",
      spellcheck: "false",
      maxlength: e.schema.maxLength,
      onInput: t[11] || (t[11] = (r) => e.setValue(r.target.value)),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: k([e.error ? e.errorClass : e.inputClass, "resize-y"])
    }, null, 42, og)) : (o(), u("input", {
      key: 4,
      id: e.id,
      type: e.inputType,
      value: e.value ?? "",
      disabled: e.readOnly,
      placeholder: e.schema.examples?.[0] ?? e.schema.placeholder ?? "",
      minlength: e.schema.minLength,
      maxlength: e.schema.maxLength,
      pattern: e.schema.pattern,
      onInput: t[12] || (t[12] = (r) => e.setValue(r.target.value)),
      "aria-invalid": !!e.error,
      "aria-describedby": e.describedBy,
      class: k(e.error ? e.errorClass : e.inputClass)
    }, null, 42, rg)),
    e.error ? (o(), u("p", {
      key: 5,
      id: e.id + "-err",
      class: "mt-1 text-xs text-red-600 dark:text-red-400"
    }, S(e.error), 9, ig)) : e.schema.description ? (o(), u("p", {
      key: 6,
      id: e.id + "-help",
      class: "mt-1 text-xs text-gray-500 dark:text-gray-400"
    }, S(e.schema.description), 9, ug)) : $("", !0)
  ]));
}
const cg = /* @__PURE__ */ wt(t1, [["render", dg]]), fg = {
  name: "JsonSchemaForm",
  components: { JsonSchemaNode: cg },
  props: {
    schema: { type: Object, default: null },
    modelValue: { default: void 0 },
    /** alias for modelValue, for `:data` style usage */
    data: { default: void 0 },
    status: { type: Object, default: null },
    readOnly: { type: Boolean, default: !1 },
    showTitle: { type: Boolean, default: !0 },
    /** wrap the whole form in the same collapsible panel nested objects get (off by default) */
    wrapper: { type: Boolean, default: !1 },
    validateOn: { type: String, default: "submit" }
    // 'submit' | 'change'
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t, expose: l }) {
    const n = ml(), a = M(""), d = M(null), i = f(() => {
      if (e.schema)
        return a.value = "", e.schema;
      const g = mg(n);
      if (!g)
        return a.value = "No schema: pass :schema or put one in the component body", {};
      try {
        return a.value = "", JSON.parse(g);
      } catch (p) {
        return a.value = `Schema isn't valid JSON: ${p.message}`, {};
      }
    }), r = f(() => e.modelValue ?? e.data ?? {}), c = ia({ root: r.value });
    lt(r, (g) => {
      g !== c.root && (c.root = g);
    });
    const v = f(() => e.status ?? d.value), m = f(() => Gl(i.value));
    function b() {
      (e.validateOn === "change" || d.value) && (d.value = w()), t("update:modelValue", c.root), t("change", c.root);
    }
    function w() {
      const g = Dn(i.value, c.root, i.value);
      return g.length ? {
        errorCode: "ValidationException",
        message: g.length === 1 ? g[0].message : `${g.length} fields need attention`,
        errors: g
      } : null;
    }
    return It(po, {
      root: i,
      status: v,
      leafCounts: m,
      readOnly: f(() => e.readOnly),
      onChange: b
    }), l({
      validate: () => d.value = w(),
      reset: () => d.value = null
    }), {
      resolvedSchema: i,
      schemaError: a,
      rootModel: c,
      /** the status message, or any field error naming something this schema doesn't render */
      summary: f(() => {
        const g = v.value;
        if (!g) return null;
        const p = g.errors ?? g.Errors ?? [];
        if (!p.length) return g.message ?? g.errorCode ?? null;
        const x = m.value, y = p.find((h) => {
          const T = String(h.fieldName ?? h.FieldName ?? "").split(/[.[]/).pop().replace("]", "");
          return T && !x.has(T.toLowerCase());
        });
        return y ? y.message ?? y.errorCode : null;
      })
    };
  }
};
function mg(e) {
  const t = [], l = (n) => {
    for (const a of n ?? [])
      typeof a.children == "string" ? t.push(a.children) : Array.isArray(a.children) && l(a.children);
  };
  try {
    l(e.default?.());
  } catch {
    return "";
  }
  return t.join("").trim();
}
const vg = {
  key: 0,
  class: "px-2 py-1.5 text-xs rounded-md border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200"
}, pg = {
  key: 0,
  class: "mb-1 text-sm font-semibold text-gray-900 dark:text-gray-100"
}, gg = {
  key: 1,
  class: "mb-3 text-xs text-gray-500 dark:text-gray-400"
}, yg = {
  key: 2,
  class: "mb-3 px-2 py-1.5 text-xs rounded-md border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200"
};
function hg(e, t, l, n, a, d) {
  const i = N("JsonSchemaNode");
  return o(), u("div", null, [
    e.schemaError ? (o(), u("p", vg, S(e.schemaError), 1)) : (o(), u(ye, { key: 1 }, [
      e.resolvedSchema.title && e.showTitle && !e.wrapper ? (o(), u("h3", pg, S(e.resolvedSchema.title), 1)) : $("", !0),
      e.resolvedSchema.description && e.showTitle ? (o(), u("p", gg, S(e.resolvedSchema.description), 1)) : $("", !0),
      e.summary ? (o(), u("p", yg, S(e.summary), 1)) : $("", !0),
      me(i, {
        schema: e.resolvedSchema,
        model: e.rootModel,
        field: "root",
        path: "",
        label: "",
        bare: !e.wrapper
      }, null, 8, ["schema", "model", "bare"])
    ], 64))
  ]);
}
const bo = /* @__PURE__ */ wt(fg, [["render", hg]]), bg = {
  name: "SchemaLookup",
  components: { SchemaResults: Cs },
  props: {
    id: { type: String, required: !0 },
    /** the schema property, whose ui.ref names the referenced Model */
    prop: { type: Object, required: !0 },
    /** the object being edited - mutated in place, as LookupInput does */
    model: { type: Object, required: !0 },
    status: { type: Object, default: null },
    label: { type: String, default: null },
    help: { type: String, default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = mo(), { config: n } = Ct(), a = M(!1), d = M(""), i = f(() => e.prop?.ui?.ref ?? null), r = f(() => i.value ? i.value.icon ?? n.value.tableIcon : null), c = f(() => i.value ? l.model(i.value.model) : null), v = f(() => ce(e.model, e.id)), m = f(() => d.value || (v.value ?? "") || `Select ${i.value?.model ?? ""}`), b = f(() => {
      const h = (e.status?.errors ?? []).find((T) => String(T.fieldName ?? "").toLowerCase() === e.id.toLowerCase());
      return h ? h.message : null;
    }), w = f(() => {
      const y = Object.keys(xs(c.value)?.properties ?? {}), h = [i.value?.refId, i.value?.refLabel].filter((T) => T && y.includes(T));
      return [...h, ...y.filter((T) => !h.includes(T))];
    });
    async function g() {
      const y = i.value;
      if (!y?.refLabel || v.value == null || v.value === "") {
        d.value = "";
        return;
      }
      if (typeof v.value == "string" && isNaN(Number(v.value)) && v.value.includes("Id")) {
        d.value = "";
        return;
      }
      const h = Object.values(e.model).find((O) => O && typeof O == "object" && !Array.isArray(O) && ce(O, y.refId) == v.value);
      if (h && ce(h, y.refLabel)) {
        d.value = String(ce(h, y.refLabel));
        return;
      }
      await l.loadModel(y.model);
      const T = c.value?.query;
      if (T)
        try {
          const O = await fetch(
            `${T.$id}?${new URLSearchParams({ [y.refId]: v.value, take: 1 })}`,
            { headers: { Accept: "application/json" } }
          ), E = O.ok ? (ce(await O.json(), "results") ?? [])[0] : null;
          E && (d.value = String(ce(E, y.refLabel) ?? v.value));
        } catch {
        }
    }
    function p(y) {
      const h = i.value;
      e.model[e.id] = ce(y, h.refId), d.value = String(ce(y, h.refLabel) ?? ""), a.value = !1, t("update:modelValue", e.model);
    }
    function x() {
      e.model[e.id] = null, d.value = "", t("update:modelValue", e.model);
    }
    return lt(a, (y) => {
      y && l.loadModel(i.value?.model);
    }), ze(g), {
      open: a,
      refInfo: i,
      refIcon: r,
      refSchema: c,
      value: v,
      display: m,
      error: b,
      pickerColumns: w,
      // a picker is a different view of the Model to the page's grid, so it keeps its
      // own visible columns rather than overwriting the ones chosen there
      prefsKey: f(() => `auto:prefs:${i.value?.model}:lookup`),
      pick: p,
      clear: x
    };
  }
}, wg = { class: "lookup-field" }, kg = { class: "flex justify-between" }, xg = ["for"], $g = {
  key: 0,
  class: "flex items-center"
}, Cg = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, Sg = { class: "mt-1 relative" }, Lg = { class: "w-full inline-flex truncate" }, Vg = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, Ag = {
  key: 0,
  class: "mt-2 text-sm text-red-500"
}, Mg = {
  key: 1,
  class: "mt-2 text-sm text-gray-500"
}, Tg = { class: "px-6 py-4 border-b border-gray-200 dark:border-gray-700" }, jg = { class: "text-base font-semibold" }, Og = { class: "px-6 py-4 max-h-[70vh] overflow-y-auto" }, Fg = {
  key: 1,
  class: "py-8 text-center text-xs text-gray-500 dark:text-gray-400"
};
function Ig(e, t, l, n, a, d) {
  const i = N("Icon"), r = N("SchemaResults"), c = N("ModalDialog");
  return o(), u("div", wg, [
    s("div", kg, [
      s("label", {
        for: e.id,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, S(e.label), 9, xg),
      e.value != null && e.value !== "" ? (o(), u("div", $g, [
        s("span", Cg, S(e.value), 1),
        s("button", {
          type: "button",
          onClick: t[0] || (t[0] = (...v) => e.clear && e.clear(...v)),
          title: "clear",
          class: "mr-1 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-400"
        }, [...t[3] || (t[3] = [
          s("span", { class: "sr-only" }, "Clear", -1),
          s("svg", {
            class: "h-4 w-4",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M6 18L18 6M6 6l12 12"
            })
          ], -1)
        ])])
      ])) : $("", !0)
    ]),
    s("div", Sg, [
      s("button", {
        type: "button",
        onClick: t[1] || (t[1] = (v) => e.open = !0),
        class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      }, [
        s("span", Lg, [
          s("span", Vg, [
            e.refIcon ? (o(), J(i, {
              key: 0,
              class: "mr-1 w-5 h-5",
              image: e.refIcon
            }, null, 8, ["image"])) : $("", !0),
            s("span", null, S(e.display), 1)
          ])
        ]),
        t[4] || (t[4] = s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
          s("svg", {
            class: "h-5 w-5 text-gray-400",
            viewBox: "0 0 20 20",
            fill: "currentColor"
          }, [
            s("path", {
              "fill-rule": "evenodd",
              d: `M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414
                            7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414
                            0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z`,
              "clip-rule": "evenodd"
            })
          ])
        ], -1))
      ])
    ]),
    e.error ? (o(), u("p", Ag, S(e.error), 1)) : e.help ? (o(), u("p", Mg, S(e.help), 1)) : $("", !0),
    (o(), J(ua, { to: "body" }, [
      e.open ? (o(), J(c, {
        key: 0,
        id: e.id + "-lookup",
        "size-class": "sm:max-w-6xl sm:w-full",
        onDone: t[2] || (t[2] = (v) => e.open = !1)
      }, {
        default: we(() => [
          s("div", Tg, [
            s("h3", jg, "Select " + S(e.refInfo?.model), 1)
          ]),
          s("div", Og, [
            e.refSchema ? (o(), J(r, {
              key: 0,
              schema: e.refSchema,
              "prefs-key": e.prefsKey,
              "column-order": e.pickerColumns,
              selectable: "",
              onRowSelected: e.pick
            }, null, 8, ["schema", "prefs-key", "column-order", "onRowSelected"])) : (o(), u("p", Fg, "Loading…"))
          ])
        ]),
        _: 1
      }, 8, ["id"])) : $("", !0)
    ]))
  ]);
}
const wo = /* @__PURE__ */ wt(bg, [["render", Ig]]);
function Nn(e, t) {
  if (Array.isArray(e)) return e.map((a) => Nn(a, t?.items));
  if (!e || typeof e != "object" || !t?.properties) return e;
  const l = Object.keys(t.properties), n = {};
  for (const [a, d] of Object.entries(e)) {
    const i = l.find((r) => r.toLowerCase() === a.toLowerCase()) ?? a;
    n[i] = Nn(d, t.properties[i]);
  }
  return n;
}
const Pg = {
  components: { JsonSchemaForm: bo, SchemaLookup: wo },
  props: {
    name: String,
    prop: Object,
    schema: Object,
    status: { type: Object, default: null },
    spanClass: { type: String, default: null },
    model: { type: Object, default: null },
    // whole form model, for LookupInput
    modelValue: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = f(() => e.prop.ui || {}), l = f(() => String(t.value.widget || "")), n = f(() => l.value.toLowerCase()), a = f(() => (e.schema?.required || []).includes(e.name)), d = f(() => t.value.widget === "textarea" || e.prop.type === "object"), i = f(() => !!e.model && !!t.value.ref && e.prop.type !== "object"), r = f(() => t.value.widget === "file"), c = f(() => {
      const h = e.prop;
      return h.type === "object" && (h.properties || h.additionalProperties) ? !0 : h.type === "array" && h.items?.type === "object" && !!h.items.properties;
    });
    let v = null, m;
    const b = f(() => {
      const h = e.modelValue;
      return h !== m && h !== v && (m = h, v = h != null ? Nn(h, e.prop) : e.prop.type === "array" ? [] : {}), v;
    }), w = f(() => {
      const h = e.name.toLowerCase(), T = (e.status?.errors ?? []).filter((O) => String(O.fieldName ?? "").toLowerCase().startsWith(h)).map((O) => ({ ...O, fieldName: O.fieldName.slice(e.name.length) }));
      return T.length ? { errors: T } : null;
    }), g = f(() => t.value.multiple === !0 || e.prop.type === "array"), p = f(() => {
      if (!t.value.options) return {};
      try {
        return Il(t.value.options, {
          input: e.prop,
          $typeFields: Object.keys(e.schema?.properties || {}),
          $dataModelFields: e.schema?.ui?.dataModelFields || [],
          ...Y.config.scopeWhitelist
        }) || {};
      } catch {
        return console.error(`failed to evaluate '${t.value.options}'`), {};
      }
    }), x = f(() => {
      const h = {};
      return e.prop.minimum != null && (h.min = e.prop.minimum), e.prop.maximum != null && (h.max = e.prop.maximum), t.value.step != null && (h.step = t.value.step), e.prop.maxLength != null && (h.maxlength = e.prop.maxLength), e.prop.pattern && (h.pattern = e.prop.pattern), e.prop.readOnly && (h.readonly = !0), e.prop.minLength != null && (h.minlength = e.prop.minLength), a.value && (h.required = !0), h;
    }), y = f(() => {
      const h = p.value.allowableEntries || t.value.allowableEntries || (p.value.allowableValues || e.prop.enum || []).map((T) => ({ key: T, value: t.value.enumDescriptions?.[T] || T }));
      return (a.value ? [] : [{ key: "", value: "" }]).concat(h);
    });
    return {
      isTextarea: d,
      lookup: i,
      isFile: r,
      isMultiple: g,
      isComplex: c,
      complexValue: b,
      scopedStatus: w,
      widget: n,
      dynamicComponent: f(() => Y.component(l.value)),
      allowableValues: f(() => p.value.allowableValues || e.prop.enum || []),
      allowableEntries: f(() => p.value.allowableEntries || t.value.allowableEntries),
      selectOptions: f(() => p.value.options),
      componentAttrs: f(() => {
        const {
          widget: h,
          ref: T,
          help: O,
          placeholder: E,
          fieldCss: _,
          inputCss: Z,
          labelCss: P,
          accept: F,
          enumDescriptions: re,
          allowableEntries: se,
          options: B,
          ...z
        } = t.value;
        return {
          ...x.value,
          ...z,
          ...p.value,
          inputClass: Z,
          labelClass: P,
          placeholder: E ?? void 0
        };
      }),
      accept: f(() => t.value.accept),
      // already the { fileName, filePath, contentType, contentLength } shape FileInput wants
      uploadedFiles: f(() => Array.isArray(e.modelValue) ? e.modelValue : []),
      // LookupInput mutates the model in place and emits it, so pull our value back out
      modelOf: (h) => ce(h, e.name),
      label: f(() => (e.prop.title || e.name) + (a.value ? " *" : "")),
      help: f(() => t.value.help),
      placeholder: f(() => t.value.placeholder),
      span: f(() => e.spanClass ?? (c.value || d.value || t.value.fieldCss?.includes("col-span-12") ? "col-span-12" : "col-span-12 sm:col-span-6 3xl:col-span-4")),
      // SelectInput has no empty option of its own, so optional enums need one to be unset
      entries: y,
      type: f(() => e.prop.type === "integer" || e.prop.type === "number" ? "number" : e.prop.format === "date-time" ? "datetime-local" : e.prop.format === "email" ? "email" : e.prop.format === "uri" ? "url" : t.value.widget === "password" ? "password" : "text"),
      attrs: x,
      textValue: f(() => {
        const h = e.modelValue;
        return h == null ? "" : e.prop.type === "object" ? JSON.stringify(h, null, 2) : e.prop.format === "date-time" ? String(h).slice(0, 16) : h;
      })
    };
  }
}, Bg = ["id", "name", "value"], Eg = {
  key: 0,
  class: "mt-2 text-sm text-gray-500"
}, Dg = {
  key: 0,
  class: "mt-2 text-sm text-gray-500"
};
function Ng(e, t, l, n, a, d) {
  const i = N("SchemaLookup"), r = N("FileInput"), c = N("JsonSchemaForm"), v = N("TagInput"), m = N("Combobox"), b = N("MarkdownInput"), w = N("SelectInput"), g = N("CheckboxInput"), p = N("TextareaInput"), x = N("TextInput");
  return e.widget === "hidden" ? (o(), u("input", {
    key: 0,
    type: "hidden",
    id: e.name,
    name: e.name,
    value: e.modelValue ?? e.prop.default ?? ""
  }, null, 8, Bg)) : e.lookup ? (o(), J(i, {
    key: 1,
    id: e.name,
    class: k(e.span),
    label: e.label,
    help: e.help,
    status: e.status,
    prop: e.prop,
    model: e.model,
    "onUpdate:modelValue": t[0] || (t[0] = (y) => e.$emit("update:modelValue", e.modelOf(y)))
  }, null, 8, ["id", "class", "label", "help", "status", "prop", "model"])) : e.isFile ? (o(), J(r, xe({
    key: 2,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status,
    multiple: e.isMultiple,
    files: e.isMultiple ? e.uploadedFiles : void 0,
    "model-value": e.isMultiple ? void 0 : typeof e.modelValue == "string" ? e.modelValue : "",
    accept: e.accept
  }, e.componentAttrs), null, 16, ["id", "class", "label", "help", "status", "multiple", "files", "model-value", "accept"])) : e.isComplex ? (o(), u("div", {
    key: 3,
    class: k(e.span)
  }, [
    me(c, {
      schema: e.prop,
      "model-value": e.complexValue,
      status: e.scopedStatus,
      "show-title": e.prop.type !== "array",
      onChange: t[1] || (t[1] = (y) => e.$emit("update:modelValue", y))
    }, null, 8, ["schema", "model-value", "status", "show-title"]),
    e.help ? (o(), u("p", Eg, S(e.help), 1)) : $("", !0)
  ], 2)) : e.dynamicComponent ? (o(), J(Jn(e.dynamicComponent), xe({
    key: 4,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status
  }, e.componentAttrs, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[2] || (t[2] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "label", "help", "status", "model-value"])) : e.widget === "tag" ? (o(), J(v, xe({
    key: 5,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status,
    "allowable-values": e.allowableValues,
    string: e.prop.type === "string"
  }, e.componentAttrs, {
    "model-value": e.modelValue ?? (e.prop.type === "array" ? [] : ""),
    "onUpdate:modelValue": t[3] || (t[3] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "label", "help", "status", "allowable-values", "string", "model-value"])) : e.widget === "combobox" ? (o(), J(m, xe({
    key: 6,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status,
    values: e.allowableValues,
    entries: e.allowableEntries,
    options: e.selectOptions,
    multiple: e.isMultiple
  }, e.componentAttrs, {
    "model-value": e.modelValue,
    "onUpdate:modelValue": t[4] || (t[4] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "label", "help", "status", "values", "entries", "options", "multiple", "model-value"])) : e.widget === "markdowninput" ? (o(), J(b, xe({
    key: 7,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status,
    placeholder: e.placeholder
  }, e.componentAttrs, {
    "model-value": e.textValue,
    "onUpdate:modelValue": t[5] || (t[5] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "label", "help", "status", "placeholder", "model-value"])) : e.widget === "select" || e.prop.enum ? (o(), u("div", {
    key: 8,
    class: k(e.span)
  }, [
    me(w, xe({
      id: e.name,
      label: e.label,
      status: e.status,
      entries: e.entries
    }, e.componentAttrs, {
      "model-value": e.modelValue,
      "onUpdate:modelValue": t[6] || (t[6] = (y) => e.$emit("update:modelValue", y))
    }), null, 16, ["id", "label", "status", "entries", "model-value"]),
    e.help ? (o(), u("p", Dg, S(e.help), 1)) : $("", !0)
  ], 2)) : e.prop.type === "boolean" ? (o(), J(g, xe({
    key: 9,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status
  }, e.componentAttrs, {
    "model-value": !!e.modelValue,
    "onUpdate:modelValue": t[7] || (t[7] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "label", "help", "status", "model-value"])) : e.isTextarea ? (o(), J(p, xe({
    key: 10,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status,
    placeholder: e.placeholder
  }, e.componentAttrs, {
    "model-value": e.textValue,
    "onUpdate:modelValue": t[8] || (t[8] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "label", "help", "status", "placeholder", "model-value"])) : e.prop.type === "array" ? (o(), J(v, xe({
    key: 11,
    id: e.name,
    class: e.span,
    label: e.label,
    help: e.help,
    status: e.status
  }, e.componentAttrs, {
    "model-value": e.modelValue ?? [],
    "onUpdate:modelValue": t[9] || (t[9] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "label", "help", "status", "model-value"])) : (o(), J(x, xe({
    key: 12,
    id: e.name,
    class: e.span,
    type: e.type,
    label: e.label,
    help: e.help,
    status: e.status,
    placeholder: e.placeholder
  }, e.componentAttrs, {
    "model-value": e.textValue,
    "onUpdate:modelValue": t[10] || (t[10] = (y) => e.$emit("update:modelValue", y))
  }), null, 16, ["id", "class", "type", "label", "help", "status", "placeholder", "model-value"]));
}
const Ss = /* @__PURE__ */ wt(Pg, [["render", Ng]]), Rg = ["skip", "edit", "new", "orderBy"], Hg = (e) => Array.from(e.matchAll(/\{(\w+)\}/g)).map((t) => t[1]), ko = (e) => Object.entries(e?.properties || {}).map(([t, l]) => ({ name: t, prop: l })), qg = (e) => e?.description !== e?.title ? e?.description : null, Wl = (e) => e ? { request: { name: e.title }, ...e.auth || {} } : null, Gs = (e, t = null) => {
  if (e == null || e === "" || Array.isArray(e) && e.length === 0) return !0;
  if (t?.type === "integer" || t?.type === "number" || typeof e == "number") {
    const n = Number(e);
    if (Number.isFinite(n) && n === 0) return !0;
  }
  return !1;
};
function zg(e, t, l) {
  return e === t ? !1 : e == null || t == null || typeof e == "object" || typeof t == "object" ? !0 : l?.format === "date-time" ? String(e).slice(0, 16) !== String(t).slice(0, 16) : String(e) !== String(t);
}
function Rn(e, t, l, { original: n = null, primaryKey: a = null, client: d = null } = {}) {
  const i = e.method || "POST", r = Hg(e.$id);
  let c = $s(e.$id, t);
  const v = e.operation === "Patch" && n != null, m = [], b = {};
  for (const y of Object.keys(e.properties || {})) {
    if (r.includes(y)) continue;
    const h = ce(t, y), T = v ? ce(n, y) : void 0, O = e.properties[y];
    Gs(h, O) ? v && !Gs(T, O) && m.push(y) : (!v || y === a || zg(h, T, O)) && (b[y] = h);
  }
  m.length && (c += (c.includes("?") ? "&" : "?") + new URLSearchParams({ reset: m.join(",") }));
  const w = { Accept: "application/json" }, g = d?.bearerToken || Y.apiKey.value;
  g && (w.Authorization = `Bearer ${g}`);
  const p = l && i !== "GET" && i !== "DELETE" ? [...l.querySelectorAll("input[type=file]")].filter((y) => y.files?.length) : [];
  let x = null;
  if (i === "GET" || i === "DELETE") {
    const y = new URLSearchParams();
    for (const [h, T] of Object.entries(b))
      Array.isArray(T) ? y.append(h, T.join(",")) : typeof T == "object" && T !== null ? y.append(h, JSON.stringify(T)) : y.append(h, T);
    [...y].length && (c += (c.includes("?") ? "&" : "?") + y);
  } else if (p.length) {
    const y = new FormData(), h = p.map((T) => T.name);
    for (const [T, O] of Object.entries(b))
      h.includes(T) || y.append(T, Array.isArray(O) ? O.join(",") : O);
    for (const T of p)
      for (const O of T.files) y.append(T.name, O);
    x = y;
  } else
    w["Content-Type"] = "application/json", x = JSON.stringify(b);
  return { method: i, url: c, headers: w, body: b, payload: x, uploads: p.map((y) => y.name) };
}
async function Ws(e, t, l, n = {}) {
  const { method: a, url: d, headers: i, payload: r } = Rn(e, t, l, n), c = await fetch(d, { method: a, headers: i, body: r ?? void 0 }), v = await c.text(), m = v ? JSON.parse(v) : null;
  if (!c.ok)
    throw ce(m || {}, "responseStatus") || { message: `${c.status} ${c.statusText}`, errors: [] };
  return m;
}
const Vb = { query: "View", create: "Create", update: "Edit", delete: "Delete", save: "Save" };
function Ab(e) {
  const t = [];
  return e.requiredRoles && t.push(hl(e.requiredRoles, "role")), e.requiresAnyRole && t.push("any " + hl(e.requiresAnyRole, "role")), e.requiredPermissions && t.push(hl(e.requiredPermissions, "permission")), e.requiresAnyPermission && t.push("any " + hl(e.requiresAnyPermission, "permission")), e.requiredScopes && t.push(hl(e.requiredScopes, "scope")), e.requiresApiKey && t.push("an API Key"), !t.length && e.requiresAuth && t.push("you to be signed in"), t.join(" and ");
}
const hl = (e, t) => e.join(", ") + " " + t + (e.length > 1 ? "s" : "");
function Ug(e) {
  const t = [], l = (n) => {
    for (const a of n ?? [])
      typeof a.children == "string" ? t.push(a.children) : Array.isArray(a.children) && l(a.children);
  };
  try {
    l(e.default?.());
  } catch {
    return "";
  }
  return t.join("").trim();
}
const Kg = {
  name: "AutoQuerySchema",
  components: { SchemaInput: Ss, SchemaResults: Cs },
  props: {
    /** the AutoQuery Schema to render. Optional - falls back to parsing the component's body */
    schema: { type: Object, default: null },
    /** the current session, as an AuthenticateResponse. null when signed out */
    auth: { type: Object, default: null },
    /** an optional JsonServiceClient; one is created and provided if omitted */
    client: { type: Object, default: null },
    /** rows per page, until the user picks their own in Query Preferences */
    take: { type: Number, default: 25 },
    /**
     * Tailwind size-class override for the edit/create ModalDialog.
     *
     * Example:
     * <AutoQuerySchema
     *   :schema="schema"
     *   modal-size-class="sm:max-w-5xl 2xl:max-w-7xl sm:w-full"
     * />
     */
    modalSizeClass: { type: String, default: "sm:max-w-3xl 3xl:max-w-6xl sm:w-full" },
    /**
     * Full Tailwind class override for regular form fields in the modal dialog.
     *
     * Example:
     * <AutoQuerySchema
     *   :schema="schema"
     *   field-class="col-span-12 md:col-span-6 xl:col-span-3"
     * />
     */
    fieldClass: { type: String, default: null }
  },
  setup(e) {
    const t = ml(), l = e.schema ?? JSON.parse(Ug(t) || "{}"), n = e.take, a = e.client ?? new rr();
    It("client", a), e.auth && cl().signIn(e.auth);
    const { canAccess: d } = cl(), i = Fe()?.appContext.config.globalProperties, r = i?.$router;
    if (!i?.$route || !r) throw new Error("AutoQuerySchema requires app.use(router)");
    const c = f(() => i.$route), v = l.primaryKey || "Id", m = M(null), b = M([]), w = M(!1), g = M(null), p = f(() => d(Wl(l.create))), x = f(() => d(Wl(l.update))), y = f(() => d(Wl(l.delete))), h = f(() => !!l.update), T = f(() => g.value?.key === "create" ? p.value : x.value), O = f(() => ko(g.value?.schema)), E = f(() => e.fieldClass || gs);
    function _(oe) {
      return ys(oe) ? "col-span-12" : E.value;
    }
    const Z = f(() => {
      const oe = Object.keys(g.value?.schema?.properties ?? {});
      return (g.value?.error?.errors ?? []).map((U) => U.fieldName).filter((U) => oe.some((Q) => String(U ?? "").toLowerCase().startsWith(Q.toLowerCase())));
    }), P = f(() => Object.fromEntries(Object.entries(c.value.query).filter(([oe, U]) => !Rg.includes(oe) && U != null && U !== ""))), F = f(() => String(c.value.query.orderBy || "")), re = f(() => Math.max(0, parseInt(c.value.query.skip) || 0)), se = f(() => c.value.query.edit), B = f(() => c.value.query.new != null), z = f(() => ({ filters: P.value, orderBy: F.value, skip: re.value }));
    function K(oe) {
      const U = Object.fromEntries(Object.keys(P.value).map((Q) => [Q, void 0]));
      Object.assign(U, oe.filters), U.orderBy = oe.orderBy || void 0, U.skip = oe.skip || void 0, j(U);
    }
    function j(oe) {
      const U = { ...c.value.query, ...oe };
      for (const Q of Object.keys(U))
        (U[Q] == null || U[Q] === "") && delete U[Q];
      r.push({ query: U });
    }
    const X = () => j({ new: 1, edit: void 0 }), A = (oe) => j({ edit: ce(oe, v), new: void 0 }), L = () => {
      se.value == null && !B.value || j({ edit: void 0, new: void 0 });
    };
    async function I(oe) {
      try {
        const U = new URLSearchParams({ [v]: oe, take: 1 }), Q = $s(l.query.$id, {}) + "?" + U, R = await fetch(Q, { headers: { Accept: "application/json" } });
        return R.ok ? (ce(await R.json(), "results") || [])[0] : null;
      } catch {
        return null;
      }
    }
    function ie(oe, U) {
      const Q = l[oe];
      if (!Q) return !1;
      const R = {};
      if (U) for (const ue of Object.keys(Q.properties || {})) {
        const D = ce(U, ue);
        D != null && (R[ue] = D);
      }
      return g.value = { key: oe, schema: Q, row: U, data: R, error: null }, !0;
    }
    async function V() {
      if (B.value) {
        ie("create") || L();
        return;
      }
      if (se.value == null) {
        g.value = null;
        return;
      }
      if (!l.update) {
        L();
        return;
      }
      const oe = b.value.find((U) => String(ce(U, v)) === String(se.value)) ?? await I(se.value);
      oe ? ie("update", oe) : L();
    }
    async function C(oe) {
      w.value = !0;
      try {
        await Ws(
          g.value.schema,
          g.value.data,
          oe?.target,
          { original: g.value.row, primaryKey: v }
        ), L(), await m.value?.reload();
      } catch (U) {
        g.value.error = U;
      } finally {
        w.value = !1;
      }
    }
    async function le() {
      w.value = !0;
      try {
        await Ws(l.delete, { ...g.value.row, ...g.value.data }), L(), await m.value?.reload();
      } catch (oe) {
        g.value.error = oe;
      } finally {
        w.value = !1;
      }
    }
    return lt(() => [se.value, B.value].join("|"), V), lt(b, V), ze(V), {
      Auto: l,
      results: m,
      rows: b,
      loading: w,
      form: g,
      boundFields: Z,
      formProps: O,
      query: z,
      onQuery: K,
      take: n,
      canCreate: p,
      canUpdate: x,
      canDelete: y,
      canOpenRow: h,
      canSubmit: T,
      formSubtitle: f(() => qg(g.value?.schema)),
      spanClassFor: _,
      openCreate: X,
      rowSelected: A,
      closeForm: L,
      submitForm: C,
      deleteRow: le
    };
  }
}, Qg = { class: "px-6 py-4 border-b border-gray-200 dark:border-gray-700" }, Jg = { class: "text-base font-semibold" }, Gg = ["innerHTML"], Wg = { class: "px-6 py-5 max-h-[60vh] overflow-y-auto" }, Zg = { class: "grid grid-cols-12 gap-4" }, Xg = { class: "px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2" }, Yg = {
  key: 0,
  class: "flex items-center"
};
function _g(e, t, l, n, a, d) {
  const i = N("PrimaryButton"), r = N("SchemaResults"), c = N("ErrorSummary"), v = N("SchemaInput"), m = N("ConfirmDelete"), b = N("SecondaryButton"), w = N("ModalDialog");
  return o(), u("div", null, [
    me(r, {
      ref: "results",
      schema: e.Auto,
      query: e.query,
      "onUpdate:query": e.onQuery,
      take: e.take,
      selectable: e.canOpenRow,
      onRowSelected: e.rowSelected,
      onLoaded: t[0] || (t[0] = (g) => e.rows = g.results)
    }, {
      toolbar: we(() => [
        e.canCreate ? (o(), J(i, {
          key: 0,
          onClick: e.openCreate
        }, {
          default: we(() => [
            ve(S(e.Auto.create.ui?.submitLabel || "New"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : $("", !0)
      ]),
      _: 1
    }, 8, ["schema", "query", "onUpdate:query", "take", "selectable", "onRowSelected"]),
    e.form ? (o(), J(w, {
      key: 0,
      id: "autoForm",
      "size-class": e.modalSizeClass,
      onDone: e.closeForm
    }, {
      default: we(() => [
        s("form", {
          onSubmit: t[1] || (t[1] = Ee((g) => e.submitForm(g), ["prevent"]))
        }, [
          s("div", Qg, [
            s("h3", Jg, S(e.form.schema.title), 1),
            e.formSubtitle ? (o(), u("p", {
              key: 0,
              class: "text-gray-500 dark:text-gray-400 mt-0.5",
              innerHTML: e.formSubtitle
            }, null, 8, Gg)) : $("", !0)
          ]),
          s("div", Wg, [
            e.form.error ? (o(), J(c, {
              key: 0,
              status: e.form.error,
              except: e.boundFields,
              class: "mb-4"
            }, null, 8, ["status", "except"])) : $("", !0),
            s("div", Zg, [
              (o(!0), u(ye, null, be(e.formProps, (g) => (o(), J(v, {
                key: g.name,
                name: g.name,
                prop: g.prop,
                schema: e.form.schema,
                status: e.form.error,
                model: e.form.data,
                "span-class": e.spanClassFor(g.prop),
                modelValue: e.form.data[g.name],
                "onUpdate:modelValue": (p) => e.form.data[g.name] = p
              }, null, 8, ["name", "prop", "schema", "status", "model", "span-class", "modelValue", "onUpdate:modelValue"]))), 128))
            ])
          ]),
          s("div", Xg, [
            e.form.key === "update" && e.canDelete ? (o(), u("div", Yg, [
              me(m, { onDelete: e.deleteRow }, {
                default: we(() => [
                  ve(S(e.Auto.delete.ui?.submitLabel || "Delete"), 1)
                ]),
                _: 1
              }, 8, ["onDelete"])
            ])) : $("", !0),
            t[3] || (t[3] = s("span", { class: "flex-1" }, null, -1)),
            me(b, {
              type: "button",
              onClick: e.closeForm
            }, {
              default: we(() => [...t[2] || (t[2] = [
                ve("Cancel", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            e.canSubmit ? (o(), J(i, {
              key: 1,
              type: "submit",
              disabled: e.loading
            }, {
              default: we(() => [
                ve(S(e.form.schema.ui?.submitLabel || "Submit"), 1)
              ]),
              _: 1
            }, 8, ["disabled"])) : $("", !0)
          ])
        ], 32)
      ]),
      _: 1
    }, 8, ["size-class", "onDone"])) : $("", !0)
  ]);
}
const ey = /* @__PURE__ */ wt(Kg, [["render", _g]]), ty = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(1)} MB`;
function ly({ method: e, url: t, headers: l, body: n, uploads: a }) {
  const d = typeof location < "u" ? location.origin : "";
  let i = t;
  if (d)
    try {
      i = new URL(t, d).href;
    } catch {
      i = d + t;
    }
  const r = [`curl -X ${e} '${i}'`];
  for (const [c, v] of Object.entries(l)) r.push(`-H '${c}: ${v}'`);
  if (a.length) {
    for (const [c, v] of Object.entries(n))
      a.includes(c) || r.push(`-F '${c}=${v}'`);
    for (const c of a) r.push(`-F '${c}=@/path/to/file'`);
  } else e !== "GET" && e !== "DELETE" && r.push(`-d '${JSON.stringify(n)}'`);
  return r.join(` \\
  `);
}
function ny(e, t) {
  const l = t?.type;
  if (l === "boolean")
    return e === "" || /^(true|1|on|yes)$/i.test(e);
  if (l === "integer" || l === "number") {
    const n = Number(e);
    return Number.isFinite(n) && e !== "" ? n : void 0;
  }
  if (l === "array") {
    const n = Array.isArray(e) ? e : [e];
    return t.items?.type === "object" ? Zs(n[0]) : n.flatMap((a) => String(a).split(",")).map((a) => a.trim()).filter(Boolean);
  }
  return l === "object" ? Zs(e) : e;
}
const Zs = (e) => {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
};
function sy(e) {
  if (typeof location > "u") return {};
  const t = new URLSearchParams(location.search), l = new Map(Object.keys(e.properties ?? {}).map((a) => [a.toLowerCase(), a])), n = {};
  for (const [a, d] of t) {
    const i = l.get(a.toLowerCase());
    if (!i || i in n) continue;
    const r = e.properties[i], c = ny(r?.type === "array" ? t.getAll(a) : d, r);
    c !== void 0 && (n[i] = c);
  }
  return n;
}
function Xs(e, t) {
  if (typeof location > "u" || typeof history > "u") return;
  const l = new URLSearchParams(), n = e?.properties ?? {}, a = new Map(Object.entries(n).map(([r, c]) => [r.toLowerCase(), c]));
  for (const [r, c] of Object.entries(t ?? {})) {
    if (c == null) continue;
    const v = n[r] ?? a.get(String(r).toLowerCase());
    if (v?.type === "integer" || v?.type === "number" || typeof c == "number") {
      const b = Number(c);
      if (!Number.isFinite(b) || b === 0) continue;
      l.set(r, String(b));
    } else if (v?.type === "boolean" || typeof c == "boolean")
      (c === !0 || c === "true") && l.set(r, "true");
    else if (Array.isArray(c))
      c.length > 0 && l.set(r, c.join(","));
    else if (typeof c == "object")
      Object.keys(c).length > 0 && l.set(r, JSON.stringify(c));
    else if (typeof c == "string") {
      const b = c.trim();
      if (b === "" || b === "0") continue;
      l.set(r, b);
    }
  }
  const d = l.toString(), i = location.pathname + (d ? "?" + d : "");
  history.replaceState(null, "", i);
}
const ay = {
  name: "ApiFormSchema",
  components: { SchemaInput: Ss, ErrorSummary: ao, PrimaryButton: hs, SecondaryButton: ro, ApiKeyDialog: fo },
  props: {
    schema: { type: Object, required: !0 },
    client: { type: Object, default: null },
    modelValue: { type: Object, default: null },
    autoExecute: { type: Boolean, default: !1 },
    syncUrl: { type: Boolean, default: !1 },
    /**
     * Full Tailwind class override for regular field spans.
     *
     * Example:
     * <ApiFormSchema
     *   :schema="schema"
     *   field-class="col-span-12 md:col-span-6 xl:col-span-3"
     * />
     */
    fieldClass: { type: String, default: null }
  },
  emits: ["update:modelValue", "success", "error", "execute", "reset"],
  setup(e, { emit: t }) {
    const l = e.schema, n = ko(l), a = () => Object.fromEntries(n.map((B) => [B.name, void 0])), d = e.syncUrl ? sy(l) : {}, i = M(e.modelValue ? { ...e.modelValue } : { ...a(), ...d }), r = M(null), c = M(!1), v = M(null), m = Zl(null), b = e.client ?? Pe("client", null);
    It("client", b);
    const w = M(!1), g = Wa(), p = f(() => g.value || b?.bearerToken || ""), x = f(() => !!l.auth?.requiresApiKey);
    function y(B) {
      b && (b.bearerToken = B), g.value = B;
    }
    const { canAccess: h } = cl(), T = l.method || "POST", O = f(() => Rn(l, i.value, m.value, { client: b })), E = f(() => e.fieldClass || gs);
    function _(B) {
      return ys(B) ? "col-span-12" : E.value;
    }
    const Z = f(() => {
      const B = O.value, z = [`${B.method} ${B.url}`];
      for (const [K, j] of Object.entries(B.headers)) z.push(`${K}: ${j}`);
      return B.uploads.length ? z.push("", `(multipart — uploading ${B.uploads.join(", ")})`) : typeof B.payload == "string" && B.payload !== "{}" && z.push("", JSON.stringify(B.body, null, 2)), z.join(`
`);
    }), P = f(() => {
      const B = Object.keys(l.properties ?? {});
      return (r.value?.errors ?? []).map((z) => z.fieldName).filter((z) => B.some((K) => String(z ?? "").toLowerCase().startsWith(K.toLowerCase())));
    });
    async function F() {
      e.syncUrl && Xs(l, i.value), c.value = !0, r.value = null;
      const B = performance.now();
      try {
        const z = Rn(l, i.value, m.value, { client: b });
        t("execute", { request: z, data: i.value });
        const K = await fetch(z.url, { method: z.method, headers: z.headers, body: z.payload ?? void 0 }), j = await K.text(), X = Math.round(performance.now() - B);
        let A = j, L = null;
        try {
          L = j ? JSON.parse(j) : null, A = L != null ? JSON.stringify(L, null, 2) : j;
        } catch {
        }
        A || (A = "(no content)"), v.value = {
          json: L,
          ok: K.ok,
          status: K.status,
          statusText: K.statusText,
          ms: X,
          size: ty(new Blob([j]).size),
          text: A,
          headers: [...K.headers.entries()].map(([I, ie]) => `${I}: ${ie}`).join(`
`)
        }, r.value = K.ok ? null : L?.responseStatus ?? L?.ResponseStatus ?? { message: `${K.status} ${K.statusText}`, errors: [] }, K.ok ? t("success", { json: L, result: v.value }) : t("error", { error: r.value, result: v.value });
      } catch (z) {
        r.value = { message: z.message ?? String(z), errors: [] }, v.value = null, t("error", { error: r.value, result: null });
      } finally {
        c.value = !1;
      }
    }
    function re(B) {
      B.target?.tagName !== "TEXTAREA" && (B.preventDefault(), F());
    }
    function se() {
      i.value = a(), r.value = null, v.value = null, e.syncUrl && Xs(l, i.value), t("reset");
    }
    return ze(() => {
      e.autoExecute && T === "GET" && Object.keys(d).length && F();
    }), {
      schema: l,
      form: m,
      fields: n,
      data: i,
      error: r,
      loading: c,
      result: v,
      boundFields: P,
      requestText: Z,
      execute: F,
      onFormEnter: re,
      reset: se,
      curl: f(() => ly(O.value)),
      request: O,
      spanClassFor: _,
      canCall: f(() => h(Wl(l))),
      showApiKeyDialog: w,
      apiKey: p,
      requiresApiKey: x,
      onApiKeySaved: y
    };
  }
}, oy = {
  key: 1,
  class: "grid grid-cols-12 gap-4"
}, ry = {
  key: 2,
  class: "text-gray-500 dark:text-gray-400"
}, iy = { class: "mt-5 flex items-center gap-3" }, uy = {
  key: 1,
  class: "text-xs text-amber-600 dark:text-amber-400"
};
function dy(e, t, l, n, a, d) {
  const i = N("ErrorSummary"), r = N("SchemaInput"), c = N("PrimaryButton"), v = N("SecondaryButton"), m = N("ApiKeyDialog");
  return o(), u("div", null, [
    s("form", {
      ref: "form",
      onSubmit: t[1] || (t[1] = Ee((...b) => e.execute && e.execute(...b), ["prevent"])),
      onKeydown: t[2] || (t[2] = an((...b) => e.onFormEnter && e.onFormEnter(...b), ["enter"])),
      class: "min-w-0"
    }, [
      e.error ? (o(), J(i, {
        key: 0,
        status: e.error,
        except: e.boundFields,
        class: "mb-4"
      }, null, 8, ["status", "except"])) : $("", !0),
      e.fields.length ? (o(), u("div", oy, [
        (o(!0), u(ye, null, be(e.fields, (b) => (o(), J(r, {
          key: b.name,
          name: b.name,
          prop: b.prop,
          schema: e.schema,
          status: e.error,
          "model-value": e.data[b.name],
          "span-class": e.spanClassFor(b.prop),
          "onUpdate:modelValue": (w) => e.data[b.name] = w
        }, null, 8, ["name", "prop", "schema", "status", "model-value", "span-class", "onUpdate:modelValue"]))), 128))
      ])) : (o(), u("p", ry, " This API takes no parameters — just run it. ")),
      s("div", iy, [
        me(c, {
          type: "submit",
          disabled: e.loading
        }, {
          default: we(() => [
            ve(S(e.loading ? "Running…" : e.schema.ui?.submitLabel || "Execute"), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        me(v, {
          type: "button",
          onClick: e.reset,
          disabled: e.loading
        }, {
          default: we(() => [...t[4] || (t[4] = [
            ve("Reset", -1)
          ])]),
          _: 1
        }, 8, ["onClick", "disabled"]),
        e.requiresApiKey && !e.apiKey ? (o(), u("button", {
          key: 0,
          type: "button",
          onClick: t[0] || (t[0] = (b) => e.showApiKeyDialog = !0),
          class: "inline-flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
        }, [...t[5] || (t[5] = [
          s("svg", {
            class: "w-4 h-4 text-amber-500",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            viewBox: "0 0 24 24"
          }, [
            s("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              d: "M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            })
          ], -1),
          s("span", null, "Add API Key", -1)
        ])])) : $("", !0),
        e.canCall ? $("", !0) : (o(), u("span", uy, " You don't have access to call this — it will fail with 401/403 "))
      ]),
      W(e.$slots, "default", {
        requestText: e.requestText,
        curl: e.curl,
        request: e.request,
        result: e.result,
        error: e.error,
        loading: e.loading,
        data: e.data,
        execute: e.execute,
        reset: e.reset
      })
    ], 544),
    e.showApiKeyDialog ? (o(), J(m, {
      key: 0,
      onDone: t[3] || (t[3] = (b) => e.showApiKeyDialog = !1),
      onSave: e.onApiKeySaved
    }, null, 8, ["onSave"])) : $("", !0)
  ]);
}
const cy = /* @__PURE__ */ wt(ay, [["render", dy]]), { formatValue: Ys, Formats: fy } = Ja(), $n = (e) => e == null || typeof e != "object", my = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), _s = (e) => /^https?:\/\/\S+$/i.test(e) || /^\/[^\s"']*$/.test(e), ea = (e) => /\.(png|jpe?g|gif|svg|webp|avif)(\?|$)/i.test(e), ta = (e) => /^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}|$)/.test(e), vy = 3, py = {
  name: "JsonView",
  props: {
    value: { default: null },
    depth: { type: Number, default: 0 }
  },
  setup(e) {
    const t = f(() => typeof e.value == "string" ? e.value : null), l = f(() => Array.isArray(e.value) ? e.value : null), n = f(() => Object.entries(e.value ?? {}).map(([a, d]) => ({ key: a, label: Sl(a), value: d })));
    return {
      entries: n,
      label: Sl,
      scalarValue: f(() => $n(e.value)),
      date: f(() => t.value != null && ta(t.value)),
      image: f(() => t.value != null && _s(t.value) && ea(t.value)),
      link: f(() => t.value == null ? null : my(t.value) ? `mailto:${t.value}` : _s(t.value) && !ea(t.value) ? t.value : null),
      // dates and numbers read the same here as they do in a data grid. formatValue()
      // leaves an ISO string alone unless told it's a date, and a timestamp that carries
      // a real time of day shouldn't lose it to a date-only format
      scalar: f(() => {
        if (!(t.value != null && ta(t.value))) return Ys(e.value);
        const a = Ys(t.value, fy.date);
        if (!/[T ]\d{2}:\d{2}/.test(t.value) || /[T ]00:00(:00(\.0+)?)?Z?$/.test(t.value))
          return a;
        const d = new Date(t.value).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
        return `${a}, ${d}`;
      }),
      isEmptyList: f(() => l.value?.length === 0),
      scalarList: f(() => l.value?.length > 0 && l.value.every($n)),
      // the union of every row's keys, so a row missing one still lines up
      columns: f(() => l.value ? en(l.value) : []),
      isEmptyObject: f(() => !$n(e.value) && !l.value && n.value.length === 0),
      folded: f(() => e.depth >= vy && n.value.length > 0)
    };
  }
};
function Mb(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return { data: e, key: null };
  const t = Object.keys(e), l = t.find((n) => n.toLowerCase() === "results") ?? t.find((n) => n.toLowerCase() === "result");
  return l == null || e[l] == null ? { data: e, key: null } : { data: e[l], key: l, envelope: e };
}
const gy = {
  key: 0,
  class: "text-gray-400 dark:text-gray-600 italic"
}, yy = {
  class: "w-3 h-3",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2.5",
  viewBox: "0 0 24 24"
}, hy = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m4.5 12.75 6 6 9-13.5"
}, by = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18 18 6M6 6l12 12"
}, wy = {
  key: 2,
  class: "tabular-nums"
}, ky = ["datetime", "title"], xy = ["src", "alt"], $y = ["href", "target"], Cy = {
  key: 6,
  class: "whitespace-pre-wrap break-normal min-w-max"
}, Sy = {
  key: 7,
  class: "text-gray-400 dark:text-gray-600 italic"
}, Ly = {
  key: 8,
  class: "flex flex-wrap gap-1"
}, Vy = {
  key: 9,
  class: "overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800"
}, Ay = { class: "overflow-x-auto" }, My = { class: "w-max min-w-full text-left" }, Ty = { class: "caption-top px-3 py-1.5 text-left text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" }, jy = { class: "bg-gray-50 dark:bg-gray-900" }, Oy = { class: "divide-y divide-gray-200 dark:divide-gray-800" }, Fy = {
  key: 10,
  class: "text-gray-400 dark:text-gray-600 italic"
}, Iy = {
  key: 11,
  class: "group"
}, Py = { class: "cursor-pointer text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 select-none" }, By = { class: "mt-1 grid grid-cols-[auto_auto] gap-x-3 gap-y-1 border-l-2 border-gray-200 dark:border-gray-800 pl-3 min-w-max" }, Ey = { class: "text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap pt-0.5" }, Dy = { class: "min-w-max" }, Ny = { class: "min-w-max" };
function Ry(e, t, l, n, a, d) {
  const i = N("JsonView", !0);
  return e.value == null ? (o(), u("span", gy, "null")) : typeof e.value == "boolean" ? (o(), u("span", {
    key: 1,
    class: k([
      "inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium",
      e.value ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300" : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
    ])
  }, [
    (o(), u("svg", yy, [
      e.value ? (o(), u("path", hy)) : (o(), u("path", by))
    ])),
    ve(" " + S(e.value), 1)
  ], 2)) : typeof e.value == "number" ? (o(), u("span", wy, S(e.scalar), 1)) : e.date ? (o(), u("time", {
    key: 3,
    datetime: e.value,
    title: e.value
  }, S(e.scalar), 9, ky)) : e.image ? (o(), u("img", {
    key: 4,
    src: e.value,
    alt: e.value,
    loading: "lazy",
    class: "max-h-16 rounded border border-gray-200 dark:border-gray-800"
  }, null, 8, xy)) : e.link ? (o(), u("a", {
    key: 5,
    href: e.link,
    target: e.link.startsWith("mailto:") ? null : "_blank",
    rel: "noopener",
    class: "text-indigo-600 dark:text-indigo-400 hover:underline break-all"
  }, S(e.value), 9, $y)) : e.scalarValue ? (o(), u("span", Cy, S(e.scalar), 1)) : e.isEmptyList ? (o(), u("span", Sy, "no items")) : e.scalarList ? (o(), u("ol", Ly, [
    (o(!0), u(ye, null, be(e.value, (r, c) => (o(), u("li", {
      key: c,
      class: "rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-xs"
    }, [
      me(i, {
        value: r,
        depth: e.depth + 1
      }, null, 8, ["value", "depth"])
    ]))), 128))
  ])) : Array.isArray(e.value) ? (o(), u("div", Vy, [
    s("div", Ay, [
      s("table", My, [
        s("caption", Ty, S(e.value.length) + " " + S(e.value.length === 1 ? "row" : "rows"), 1),
        s("thead", jy, [
          s("tr", null, [
            (o(!0), u(ye, null, be(e.columns, (r) => (o(), u("th", {
              key: r,
              scope: "col",
              class: "px-3 py-2 font-semibold whitespace-nowrap text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            }, S(e.label(r)), 1))), 128))
          ])
        ]),
        s("tbody", Oy, [
          (o(!0), u(ye, null, be(e.value, (r, c) => (o(), u("tr", {
            key: c,
            class: k(c % 2 ? "bg-gray-50/60 dark:bg-gray-900/40" : "")
          }, [
            (o(!0), u(ye, null, be(e.columns, (v) => (o(), u("td", {
              key: v,
              class: "px-3 py-2 align-top"
            }, [
              me(i, {
                value: r?.[v],
                depth: e.depth + 1
              }, null, 8, ["value", "depth"])
            ]))), 128))
          ], 2))), 128))
        ])
      ])
    ])
  ])) : e.isEmptyObject ? (o(), u("span", Fy, "no fields")) : e.folded ? (o(), u("details", Iy, [
    s("summary", Py, S(e.entries.length) + " " + S(e.entries.length === 1 ? "field" : "fields"), 1),
    s("dl", By, [
      (o(!0), u(ye, null, be(e.entries, (r) => (o(), u(ye, {
        key: r.key
      }, [
        s("dt", Ey, S(r.label), 1),
        s("dd", Dy, [
          me(i, {
            value: r.value,
            depth: e.depth + 1
          }, null, 8, ["value", "depth"])
        ])
      ], 64))), 128))
    ])
  ])) : (o(), u("dl", {
    key: 12,
    class: k([
      "grid grid-cols-[auto_auto] gap-x-3 min-w-max",
      e.depth === 0 ? "gap-y-2" : "gap-y-1",
      e.depth > 0 ? "border-l-2 border-gray-200 dark:border-gray-800 pl-3" : ""
    ])
  }, [
    (o(!0), u(ye, null, be(e.entries, (r) => (o(), u(ye, {
      key: r.key
    }, [
      s("dt", {
        class: k([
          "whitespace-nowrap text-gray-500 dark:text-gray-400",
          e.depth === 0 ? "font-medium pt-0.5" : "text-xs pt-0.5"
        ])
      }, S(r.label), 3),
      s("dd", Ny, [
        me(i, {
          value: r.value,
          depth: e.depth + 1
        }, null, 8, ["value", "depth"])
      ])
    ], 64))), 128))
  ], 2));
}
const Hy = /* @__PURE__ */ wt(py, [["render", Ry]]), qy = {
  props: {
    name: String,
    alias: String
  },
  setup(e) {
    const t = Pe("routes"), l = `-${e.name}`;
    function n() {
      const a = t.sort === e.name ? l : t.sort === l ? "" : e.name;
      t.to({ sort: a });
    }
    return { routes: t, toggle: n, humanify: Sl };
  }
}, zy = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Uy = {
  key: 1,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
function Ky(e, t, l, n, a, d) {
  return o(), u("div", {
    class: "cursor-pointer flex items-center",
    onClick: t[0] || (t[0] = (i) => e.toggle())
  }, [
    s("span", null, S(e.alias ?? e.humanify(e.name)), 1),
    e.routes.sort === e.name ? (o(), u("svg", zy, [...t[1] || (t[1] = [
      s("g", { fill: "none" }, [
        s("path", {
          d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
          fill: "currentColor"
        })
      ], -1)
    ])])) : e.routes.sort === "-" + e.name ? (o(), u("svg", Uy, [...t[2] || (t[2] = [
      s("g", { fill: "none" }, [
        s("path", {
          d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
          fill: "currentColor"
        })
      ], -1)
    ])])) : $("", !0)
  ]);
}
const Qy = /* @__PURE__ */ wt(qy, [["render", Ky]]), Jy = mi, Gy = ki, Wy = ao, Zy = Li, Xy = oo, Yy = Mi, _y = Oi, eh = hs, th = ro, lh = Ei, nh = qi, sh = Qi, ah = Wi, oh = su, rh = Od, ih = Ed, uh = ws, dh = bs, ch = ks, fh = io, mh = Dd, vh = uo, ph = Xd, gh = nc, yh = cc, hh = Mc, bh = Zc, wh = o0, kh = u0, xh = d0, $h = x0, Ch = $0, Sh = q0, Lh = rf, Vh = Vf, Ah = Uf, Mh = Kf, Th = Wf, jh = em, Oh = tm, Fh = rm, Ih = cm, Ph = vm, Bh = pm, Eh = hm, Dh = Om, Nh = co, Rh = mv, Hh = xv, qh = $v, zh = Dv, Uh = Gv, Kh = tp, Qh = fo, Jh = ey, Gh = cy, Wh = bo, Zh = Hy, Xh = vo, Yh = wo, _h = Cs, eb = Qy, tb = Ss, lb = {
  Alert: Jy,
  AlertSuccess: Gy,
  ErrorSummary: Wy,
  InputDescription: Zy,
  Icon: Xy,
  Loading: Yy,
  OutlineButton: _y,
  PrimaryButton: eh,
  SecondaryButton: th,
  TextLink: lh,
  Breadcrumbs: nh,
  Breadcrumb: sh,
  NavList: ah,
  NavListItem: oh,
  AutoQueryGrid: rh,
  SettingsIcons: ih,
  FilterViews: uh,
  FilterColumn: dh,
  QueryPrefs: ch,
  EnsureAccess: fh,
  EnsureAccessDialog: mh,
  TextInput: vh,
  TextareaInput: ph,
  SelectInput: gh,
  CheckboxInput: yh,
  TagInput: hh,
  FileInput: bh,
  Autocomplete: wh,
  Combobox: kh,
  DynamicInput: xh,
  LookupInput: $h,
  AutoFormFields: Ch,
  AutoForm: Sh,
  AutoCreateForm: Lh,
  AutoEditForm: Vh,
  AutoViewForm: Ah,
  ConfirmDelete: Mh,
  FormLoading: Th,
  DataGrid: jh,
  CellFormat: Oh,
  PreviewFormat: Fh,
  HtmlFormat: Ih,
  MarkupFormat: Ph,
  MarkupModel: Bh,
  CloseButton: Eh,
  SlideOver: Dh,
  ModalDialog: Nh,
  ModalLookup: Rh,
  Tabs: Hh,
  DarkModeToggle: qh,
  SignIn: zh,
  MarkdownInput: Uh,
  SidebarLayout: Kh,
  ApiKeyDialog: Qh,
  AutoQuerySchema: Jh,
  ApiFormSchema: Gh,
  JsonSchemaForm: Wh,
  JsonView: Zh,
  SchemaGrid: Xh,
  SchemaLookup: Yh,
  SchemaResults: _h,
  SortableColumn: eb,
  SchemaInput: tb
}, nb = [
  { id: "csharp", label: "C#", ext: ".cs" },
  { id: "python", label: "Python", ext: ".py" },
  { id: "typescript", label: "TS", ext: ".ts" },
  { id: "javascript", label: "JS", ext: ".js" }
], Hn = {
  csharp: new Set("abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void volatile while".split(" ")),
  python: new Set("False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield".split(" ")),
  typescript: new Set("break case catch class const continue debugger default delete do else enum export extends false finally for function if import in instanceof new null return super switch this throw true try typeof var void while with".split(" "))
};
Hn.javascript = Hn.typescript;
const xo = (e) => String(e).replace(new RegExp("(\\p{Ll}|\\p{N})(\\p{Lu})", "gu"), "$1 $2").split(/[^\p{L}\p{N}]+/u).filter(Boolean), et = (e) => $o(xo(e).map((t) => t[0].toUpperCase() + t.slice(1)).join("")) || "Value", Tb = (e) => {
  const t = et(e);
  return t[0].toLowerCase() + t.slice(1);
}, la = (e) => $o(xo(e).map((t) => t.toLowerCase()).join("_")) || "value";
function ll(e) {
  return /ies$/i.test(e) && e.length > 4 ? e.slice(0, -3) + "y" : /(ss|us|is)$/i.test(e) ? e : /(ches|shes|xes|zes|ses)$/i.test(e) ? e.slice(0, -2) : /s$/i.test(e) && e.length > 2 ? e.slice(0, -1) : e;
}
const Ls = (e) => /^[\p{L}_$][\p{L}\p{N}_$]*$/u.test(e), $o = (e) => new RegExp("^\\p{N}", "u").test(e) ? "_" + e : e, Co = /^\d{4}-\d{2}-\d{2}$/, qn = /^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:?\d{2})?$/, So = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, Be = (e, t = {}) => ({ kind: e, ...t }), fl = Be("any");
class sb {
  constructor() {
    this.types = [], this.byShape = /* @__PURE__ */ new Map(), this.byRef = /* @__PURE__ */ new Map(), this.names = /* @__PURE__ */ new Set();
  }
  /** claim a name before its fields are built, so a recursive $ref can point back at it */
  reserve(t, l = !1) {
    const n = this.uniqueName(t, "", l);
    return this.names.add(n), n;
  }
  pushObject(t, l) {
    return this.types.push({ kind: "object", name: t, fields: l }), Be("ref", { name: t });
  }
  uniqueName(t, l, n = !1) {
    let a = et(t) || "Type";
    if (!n && a === this.rootName && (a += "Info"), !this.names.has(a)) return a;
    for (let d = 2; d < 100; d++) {
      const i = `${a}${d}`;
      if (!this.names.has(i)) return i;
    }
    return `${a}_${l.length}`;
  }
  addObject(t, l, n = !1) {
    const a = JSON.stringify(t.map((r) => [r.key, jl(r.type), r.optional])), d = this.byShape.get(a);
    if (d) return Be("ref", { name: d });
    const i = this.uniqueName(l, a, n);
    return this.names.add(i), this.byShape.set(a, i), this.types.push({ kind: "object", name: i, fields: t }), Be("ref", { name: i });
  }
  addEnum(t, l, n) {
    const a = "enum:" + JSON.stringify(t), d = this.byShape.get(a);
    if (d) return Be("ref", { name: d });
    const i = this.uniqueName(l, a);
    return this.names.add(i), this.byShape.set(a, i), this.types.push({ kind: "enum", name: i, values: t, description: n }), Be("ref", { name: i });
  }
}
const jl = (e) => e.kind === "array" ? `[${jl(e.of)}]` : e.kind === "map" ? `{${jl(e.of)}}` : e.kind === "ref" ? e.name : e.kind, Lo = (e) => {
  const t = Array.isArray(e.type) ? e.type.find((l) => l !== "null") : e.type;
  return t || (e.properties || e.additionalProperties ? "object" : e.items || e.prefixItems ? "array" : e.enum ? typeof e.enum[0] == "number" ? "number" : typeof e.enum[0] : e.const !== void 0 ? typeof e.const : "string");
}, ab = (e) => !!e.nullable || Array.isArray(e.type) && e.type.includes("null");
function Vo(e, t, l = /* @__PURE__ */ new Set()) {
  if (!e?.$ref || l.has(e.$ref)) return e;
  l.add(e.$ref);
  let n = t;
  for (const i of e.$ref.replace(/^#\//, "").split("/"))
    n = n?.[decodeURIComponent(i.replace(/~1/g, "/").replace(/~0/g, "~"))];
  if (!n) return e;
  const { $ref: a, ...d } = e;
  return Vo({ ...n, ...d }, t, l);
}
function ob(e, t) {
  if (!e?.allOf?.length) return e;
  const { allOf: l, ...n } = e;
  return l.reduce((a, d) => {
    const i = zn(d, t);
    return {
      ...a,
      ...i,
      properties: { ...a.properties ?? {}, ...i.properties ?? {} },
      required: [.../* @__PURE__ */ new Set([...a.required ?? [], ...i.required ?? []])]
    };
  }, n);
}
const zn = (e, t) => ob(Vo(e ?? {}, t), t), rb = (e) => e.length > 0 && e.every((t) => typeof t == "string" && /^[A-Za-z][A-Za-z0-9 _-]*$/.test(t));
function wl(e, t, l, n, a = /* @__PURE__ */ new Set(), d = !1, i = void 0) {
  const r = zn(e, t), c = ab(r), v = r.title ? et(r.title) : et(n);
  if (r.enum && rb(r.enum))
    return { ...l.addEnum(r.enum, v, r.description), nullable: c };
  if (r.enum || r.const !== void 0)
    return { ...na(r), nullable: c };
  switch (Lo(r)) {
    case "object": {
      if (r.properties) {
        const w = e?.$ref;
        if (w && l.byRef.has(w)) return { kind: "ref", name: l.byRef.get(w), nullable: c };
        const g = w ? l.reserve(r.title ?? w.split("/").pop(), d) : null;
        w && l.byRef.set(w, g);
        const p = new Set(r.required ?? []), x = Object.entries(r.properties).map(([y, h]) => {
          const T = zn(h, t);
          return {
            key: y,
            description: T.description,
            optional: !p.has(y),
            deprecated: !!T.deprecated,
            type: wl(h, t, l, ll(et(y)), a, !1, Cn(i, y))
          };
        });
        return g ? { ...l.pushObject(g, x), nullable: c } : { ...l.addObject(x, v, d), nullable: c };
      }
      const m = r.additionalProperties;
      return { kind: "map", of: m && typeof m == "object" ? wl(m, t, l, `${v}Value`, a, !1, Object.values(i ?? {})[0]) : fl, nullable: c };
    }
    case "array":
      return r.prefixItems?.length ? {
        kind: "tuple",
        of: r.prefixItems.map((b, w) => wl(b, t, l, `${v}${w + 1}`, a, !1, Cn(i, w))),
        nullable: c
      } : { kind: "array", of: r.items ? wl(r.items, t, l, ll(v), a, !1, Cn(i, 0)) : fl, nullable: c };
    default:
      return { ...na(r, i), nullable: c };
  }
}
const Cn = (e, t) => e?.[t], ib = (e, t) => typeof t != "string" ? !0 : e === "date" ? Co.test(t) || qn.test(t) : e === "date-time" ? qn.test(t) : e === "uuid" ? So.test(t) : !0;
function na(e, t) {
  const l = Lo(e);
  if (l === "boolean") return Be("boolean");
  if (l === "integer")
    return Be(e.maximum > 2147483647 || e.minimum < -2147483648 ? "long" : "integer");
  if (l === "number") {
    const n = e.multipleOf != null && e.multipleOf < 1;
    return Be(n ? "decimal" : "double");
  }
  if (l === "null") return Be("any");
  switch (ib(e.format, t) ? e.format : void 0) {
    case "date":
      return Be("date");
    case "date-time":
      return Be("datetime");
    case "uuid":
      return Be("uuid");
    default:
      return Be("string");
  }
}
function ub(e) {
  const t = /* @__PURE__ */ new Map();
  for (const l of e)
    for (const [n, a] of Object.entries(l)) {
      t.has(n) || t.set(n, { values: [], count: 0 });
      const d = t.get(n);
      d.values.push(a), d.count++;
    }
  return { keys: t, total: e.length };
}
function Vs(e, t, l, n = 0, a = !1) {
  if (e == null) return { ...fl, nullable: !0 };
  if (Array.isArray(e)) {
    if (!e.length) return { kind: "array", of: fl };
    const d = e.filter((i) => i && typeof i == "object" && !Array.isArray(i));
    if (d.length === e.length) {
      const { keys: i, total: r } = ub(d), c = [...i.entries()].map(([v, m]) => ({
        key: v,
        optional: m.count < r || m.values.some((b) => b === null),
        type: sa(m.values, t, ll(et(v)), n + 1)
      }));
      return { kind: "array", of: t.addObject(c, ll(et(l))) };
    }
    return { kind: "array", of: sa(e, t, ll(et(l)), n + 1) };
  }
  if (typeof e == "object") {
    const d = Object.entries(e).map(([i, r]) => ({
      key: i,
      optional: r === null,
      type: Vs(r, t, ll(et(i)), n + 1)
    }));
    return t.addObject(d, et(l), a);
  }
  if (typeof e == "boolean") return Be("boolean");
  if (typeof e == "number")
    return Number.isInteger(e) ? Be(e > 2147483647 || e < -2147483648 ? "long" : "integer") : Be("double");
  if (typeof e == "string") {
    if (So.test(e)) return Be("uuid");
    if (qn.test(e)) return Be("datetime");
    if (Co.test(e)) return Be("date");
  }
  return Be("string");
}
function sa(e, t, l, n) {
  const a = e.filter((c) => c != null);
  if (!a.length) return { ...fl, nullable: !0 };
  const d = a.map((c) => Vs(c, t, l, n)), i = d[0];
  return d.every((c) => jl(c) === jl(i)) ? { ...i, nullable: a.length < e.length } : d.every((c) => c.kind === "integer" || c.kind === "double") ? Be("double") : { ...fl, nullable: !0 };
}
const db = (e) => !!e && typeof e == "object" && !Array.isArray(e) && (e.$schema !== void 0 || e.properties !== void 0 || e.type !== void 0 && typeof e.type == "string");
function cb({ name: e = "data.json", json: t, schema: l } = {}) {
  const n = new sb(), a = et(String(e).replace(/\.ui\.json$/, "").replace(/\.[^.]+$/, "") || "Root");
  n.rootName = a;
  let d;
  return l && db(l) ? d = wl(l, l, n, l.title ? et(l.title) : a, /* @__PURE__ */ new Set(), !0, t) : d = Vs(t, n, a, 0, !0), d.kind !== "ref" && n.types.push({ kind: "alias", name: n.uniqueName(a, "alias"), type: d }), { types: n.types, root: d };
}
function Ao(e) {
  const t = /* @__PURE__ */ new Set(), l = (n) => {
    n && (t.add(n.kind), n.of && (Array.isArray(n.of) ? n.of : [n.of]).forEach(l));
  };
  for (const n of e)
    n.kind === "object" ? n.fields.forEach((a) => l(a.type)) : n.kind === "alias" ? l(n.type) : t.add(n.kind);
  return t;
}
const nn = (e, t, l) => {
  let n = e;
  return Ls(n) || (n = l), Hn[t]?.has(n) && (n = t === "csharp" ? "@" + n : n + "_"), n || l;
}, aa = (e, t, l) => e ? e.split(`
`).map((n) => `${t}${l} ${n}`).join(`
`) + `
` : "", fb = {
  string: "string",
  integer: "int",
  long: "long",
  double: "double",
  decimal: "decimal",
  boolean: "bool",
  date: "DateTime",
  datetime: "DateTime",
  uuid: "Guid",
  any: "object"
};
function Cl(e) {
  return e.kind === "array" ? `List<${Cl(e.of)}>` : e.kind === "map" ? `Dictionary<string, ${Cl(e.of)}>` : e.kind === "tuple" ? `(${e.of.map(Cl).join(", ")})` : e.kind === "ref" ? e.name : fb[e.kind] ?? "object";
}
const mb = ["integer", "long", "double", "decimal", "boolean", "date", "datetime", "uuid"], vb = (e, t) => mb.includes(e.kind) || e.kind === "tuple" || e.kind === "ref" && t?.types.some((l) => l.name === e.name && l.kind === "enum");
function pb(e) {
  const t = [], l = Ao(e.types), n = (...a) => a.some((d) => l.has(d));
  n("date", "datetime", "uuid") && t.push("using System;"), n("array", "map") && t.push("using System.Collections.Generic;"), t.push("using System.Text.Json.Serialization;", "");
  for (const a of e.types) {
    if (a.kind === "enum") {
      t.push(aa(a.description, "", "///").trimEnd()), t.push(`public enum ${a.name}`, "{"), t.push(a.values.map((d) => `    ${nn(et(d), "csharp", "Value")},`).join(`
`)), t.push("}", "");
      continue;
    }
    if (a.kind === "alias") {
      t.push(`// root: ${Cl(a.type)}`, "");
      continue;
    }
    t.push(`public class ${a.name}`, "{"), a.fields.forEach((d, i) => {
      i && t.push(""), t.push(aa(d.description, "    ", "///").trimEnd() || null), d.deprecated && t.push("    [System.Obsolete]"), t.push(`    [JsonPropertyName("${d.key}")]`);
      let r = nn(et(d.key), "csharp", "Value");
      r === a.name && (r += "Value");
      const c = d.optional || d.type.nullable, v = Cl(d.type), m = c ? `${v}?` : v, b = c || vb(d.type, e) ? "" : d.type.kind === "array" || d.type.kind === "map" ? " = new();" : " = null!;";
      t.push(`    public ${m} ${r} { get; set; }${b}`);
    }), t.push("}", "");
  }
  return t.filter((a) => a !== null).join(`
`).replace(/\n{3,}/g, `

`).trim() + `
`;
}
const gb = {
  string: "str",
  integer: "int",
  long: "int",
  double: "float",
  decimal: "Decimal",
  boolean: "bool",
  date: "date",
  datetime: "datetime",
  uuid: "UUID",
  any: "Any"
};
function al(e) {
  return e.kind === "array" ? `List[${al(e.of)}]` : e.kind === "map" ? `Dict[str, ${al(e.of)}]` : e.kind === "tuple" ? `Tuple[${e.of.map(al).join(", ")}]` : e.kind === "ref" ? e.name : gb[e.kind] ?? "Any";
}
function yb(e) {
  const t = [], l = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), a = Ao(e.types);
  a.has("array") && l.add("List"), a.has("map") && l.add("Dict"), a.has("tuple") && l.add("Tuple"), a.has("any") && l.add("Any"), a.has("decimal") && n.add("from decimal import Decimal"), a.has("datetime") && n.add("from datetime import datetime"), a.has("date") && n.add("from datetime import date"), a.has("uuid") && n.add("from uuid import UUID");
  let d = !1, i = !1;
  for (const c of e.types) {
    if (c.kind === "alias") {
      t.push(`# root: ${al(c.type)}`, "");
      continue;
    }
    if (c.kind === "enum") {
      d = !0, t.push(`class ${c.name}(str, Enum):`), c.description && t.push(`    """${c.description}"""`), c.values.forEach((m) => t.push(`    ${nn(la(m).toUpperCase(), "python", "VALUE")} = ${JSON.stringify(m)}`)), t.push("", "");
      continue;
    }
    t.push("@dataclass_json", "@dataclass", `class ${c.name}:`);
    const v = [...c.fields].sort((m, b) => Number(m.optional) - Number(b.optional));
    v.length || t.push("    pass"), v.forEach((m) => {
      const b = nn(la(m.key), "python", "value"), w = m.optional || m.type.nullable;
      w && l.add("Optional");
      const g = w ? `Optional[${al(m.type)}]` : al(m.type), p = b !== m.key ? `metadata=config(field_name=${JSON.stringify(m.key)})` : null;
      let x = "";
      p && w ? (i = !0, x = ` = field(default=None, ${p})`) : p ? (i = !0, x = ` = field(${p})`) : w && (x = " = None"), m.description && t.push(`    # ${m.description}`), t.push(`    ${b}: ${g}${x}`);
    }), t.push("", "");
  }
  const r = ["from __future__ import annotations", ""];
  return r.push(`from dataclasses import dataclass${i ? ", field" : ""}`), r.push(`from dataclasses_json import dataclass_json${i ? ", config" : ""}`), d && r.push("from enum import Enum"), l.size && r.push(`from typing import ${[...l].sort().join(", ")}`), r.push(...[...n].sort()), r.join(`
`) + `


` + t.join(`
`).replace(/\n{4,}/g, `


`).trim() + `
`;
}
const hb = {
  string: "string",
  integer: "number",
  long: "number",
  double: "number",
  decimal: "number",
  boolean: "boolean",
  date: "string",
  datetime: "string",
  uuid: "string",
  any: "any"
};
function ol(e) {
  return e.kind === "array" ? `${ol(e.of)}[]` : e.kind === "map" ? `Record<string, ${ol(e.of)}>` : e.kind === "tuple" ? `[${e.of.map(ol).join(", ")}]` : e.kind === "ref" ? e.name : hb[e.kind] ?? "any";
}
const bb = (e) => Ls(e) ? e : JSON.stringify(e);
function wb(e) {
  const t = [];
  for (const l of e.types) {
    if (l.kind === "alias") {
      t.push(`export type ${l.name} = ${ol(l.type)}`, "");
      continue;
    }
    if (l.kind === "enum") {
      l.description && t.push(`/** ${l.description} */`), t.push(`export type ${l.name} = ${l.values.map((n) => JSON.stringify(n)).join(" | ")}`, "");
      continue;
    }
    t.push(`export class ${l.name} {`), l.fields.forEach((n) => {
      n.description && t.push(`    /** ${n.description} */`);
      const a = n.optional || n.type.nullable;
      t.push(`    ${bb(n.key)}${a ? "?" : "!"}: ${ol(n.type)}`);
    }), t.push("", `    constructor(init?: Partial<${l.name}>) { Object.assign(this, init) }`, "}", "");
  }
  return t.join(`
`).trim() + `
`;
}
function kb(e) {
  const t = [];
  for (const l of e.types)
    l.kind === "alias" || l.kind === "enum" || (t.push(`export class ${l.name} {`), l.fields.forEach((n) => {
      const a = n.optional || n.type.nullable;
      t.push(`    /** @type {${ol(n.type)}${a ? "|undefined" : ""}}${n.description ? ` ${n.description}` : ""} */`), t.push(`    ${Ls(n.key) ? n.key : `[${JSON.stringify(n.key)}]`}`);
    }), t.push("", "    constructor(init = {}) { Object.assign(this, init) }", "}", ""));
  return t.join(`
`).trim() + `
`;
}
const xb = { csharp: pb, python: yb, typescript: wb, javascript: kb };
function jb({ name: e = "data.json", json: t, schema: l, language: n } = {}) {
  const a = nb.find((v) => v.id === n);
  if (!a) throw new Error(`Unsupported language '${n}'`);
  const d = typeof t == "string" ? JSON.parse(t) : t, i = typeof l == "string" ? JSON.parse(l) : l, r = cb({ name: e, json: d, schema: i });
  return {
    path: (String(e).replace(/\.ui\.json$/, "").replace(/\.[^.]+$/, "") || "data") + a.ext,
    content: xb[n](r),
    language: n
  };
}
const Sn = lb || {}, Ob = {
  install(e) {
    Object.keys(Sn).forEach((l) => {
      e.component(l, Sn[l]);
    });
    function t(l) {
      const a = Object.keys(l).filter((d) => l[d]).map((d) => `${encodeURIComponent(d)}=${encodeURIComponent(l[d])}`).join("&");
      return a ? "?" + a : "./";
    }
    e.directive("href", function(l, n) {
      l.href = t(n.value), l.onclick = (a) => {
        a.preventDefault(), history.pushState(n.value, "", t(n.value));
      };
    });
  },
  component(e, t) {
    return e ? t ? Y.components[e] = t : Y.components[e] || Sn[e] || null : null;
  }
};
export {
  Vb as ACTIONS,
  Jy as Alert,
  Gy as AlertSuccess,
  Gh as ApiFormSchema,
  Qh as ApiKeyDialog,
  Lh as AutoCreateForm,
  Vh as AutoEditForm,
  Sh as AutoForm,
  Ch as AutoFormFields,
  rh as AutoQueryGrid,
  Jh as AutoQuerySchema,
  Ah as AutoViewForm,
  wh as Autocomplete,
  sh as Breadcrumb,
  nh as Breadcrumbs,
  po as CONTEXT,
  Oh as CellFormat,
  yh as CheckboxInput,
  Eh as CloseButton,
  kh as Combobox,
  lb as Components,
  Mh as ConfirmDelete,
  qh as DarkModeToggle,
  jh as DataGrid,
  xh as DynamicInput,
  fh as EnsureAccess,
  mh as EnsureAccessDialog,
  Wy as ErrorSummary,
  bh as FileInput,
  dh as FilterColumn,
  uh as FilterViews,
  Th as FormLoading,
  Ih as HtmlFormat,
  ho as INPUT_TYPES,
  Xy as Icon,
  Zy as InputDescription,
  Wh as JsonSchemaForm,
  cg as JsonSchemaNode,
  Zh as JsonView,
  Yy as Loading,
  $h as LookupInput,
  Uh as MarkdownInput,
  Ph as MarkupFormat,
  Bh as MarkupModel,
  mr as MetadataApp,
  Nh as ModalDialog,
  Rh as ModalLookup,
  ah as NavList,
  oh as NavListItem,
  _y as OutlineButton,
  Fh as PreviewFormat,
  eh as PrimaryButton,
  ch as QueryPrefs,
  Xh as SchemaGrid,
  tb as SchemaInput,
  Yh as SchemaLookup,
  _h as SchemaResults,
  th as SecondaryButton,
  gh as SelectInput,
  ih as SettingsIcons,
  Kh as SidebarLayout,
  zh as SignIn,
  Dh as SlideOver,
  eb as SortableColumn,
  nb as TYPE_LANGUAGES,
  Hh as Tabs,
  hh as TagInput,
  vh as TextInput,
  lh as TextLink,
  ph as TextareaInput,
  Kp as bestVariant,
  At as blankFor,
  cb as buildModel,
  Rn as buildRequest,
  Tb as camel,
  Tl as choicesOf,
  Lb as css,
  Ob as default,
  Jp as fieldError,
  jb as generateTypes,
  Lr as initMetadata,
  Up as isNullable,
  mt as isPlainObject,
  Gl as leafNameCounts,
  En as normalizePath,
  et as pascal,
  ko as propsOf,
  Ab as requirementText,
  $s as resolvePath,
  Qe as resolveSchema,
  xs as rowSchema,
  Ws as send,
  ll as singular,
  la as snake,
  qg as subtitle,
  Wl as toOp,
  Tt as typeOf,
  Mb as unwrapResponse,
  Wa as useApiKey,
  cl as useAuth,
  Pl as useClient,
  Ct as useConfig,
  fr as useFiles,
  Ja as useFormatters,
  bt as useMetadata,
  mo as useSchemas,
  lo as useUtils,
  Dn as validateValue,
  yo as variantsOf,
  Qp as widgetOf
};
