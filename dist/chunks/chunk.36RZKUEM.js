import {
  require_lodash
} from "./chunk.FJ3V2PYX.js";
import {
  FLZ_WIDGET_EVENT_TYPE
} from "./chunk.SCQSIJU2.js";
import {
  __decorateClass,
  __spreadProps,
  __spreadValues,
  __toModule
} from "./chunk.Z3GS5MY4.js";

// node_modules/@lit/reactive-element/css-tag.js
var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = /* @__PURE__ */ new Map();
var s = class {
  constructor(t3, n6) {
    if (this._$cssResult$ = true, n6 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3;
  }
  get styleSheet() {
    let e6 = n.get(this.cssText);
    return t && e6 === void 0 && (n.set(this.cssText, e6 = new CSSStyleSheet()), e6.replaceSync(this.cssText)), e6;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t3) => new s(typeof t3 == "string" ? t3 : t3 + "", e);
var r = (t3, ...n6) => {
  const o6 = t3.length === 1 ? t3[0] : n6.reduce((e6, n7, s5) => e6 + ((t4) => {
    if (t4._$cssResult$ === true)
      return t4.cssText;
    if (typeof t4 == "number")
      return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n7) + t3[s5 + 1], t3[0]);
  return new s(o6, e);
};
var i = (e6, n6) => {
  t ? e6.adoptedStyleSheets = n6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n6.forEach((t3) => {
    const n7 = document.createElement("style"), s5 = window.litNonce;
    s5 !== void 0 && n7.setAttribute("nonce", s5), n7.textContent = t3.cssText, e6.appendChild(n7);
  });
};
var S = t ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e6 = "";
  for (const n6 of t4.cssRules)
    e6 += n6.cssText;
  return o(e6);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window.trustedTypes;
var r2 = e2 ? e2.emptyScript : "";
var h = window.reactiveElementPolyfillSupport;
var o2 = { toAttribute(t3, i5) {
  switch (i5) {
    case Boolean:
      t3 = t3 ? r2 : null;
      break;
    case Object:
    case Array:
      t3 = t3 == null ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, i5) {
  let s5 = t3;
  switch (i5) {
    case Boolean:
      s5 = t3 !== null;
      break;
    case Number:
      s5 = t3 === null ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t3);
      } catch (t4) {
        s5 = null;
      }
  }
  return s5;
} };
var n2 = (t3, i5) => i5 !== t3 && (i5 == i5 || t3 == t3);
var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
var a = class extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t3) {
    var i5;
    (i5 = this.l) !== null && i5 !== void 0 || (this.l = []), this.l.push(t3);
  }
  static get observedAttributes() {
    this.finalize();
    const t3 = [];
    return this.elementProperties.forEach((i5, s5) => {
      const e6 = this._$Eh(s5, i5);
      e6 !== void 0 && (this._$Eu.set(e6, s5), t3.push(e6));
    }), t3;
  }
  static createProperty(t3, i5 = l) {
    if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t3, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t3)) {
      const s5 = typeof t3 == "symbol" ? Symbol() : "__" + t3, e6 = this.getPropertyDescriptor(t3, s5, i5);
      e6 !== void 0 && Object.defineProperty(this.prototype, t3, e6);
    }
  }
  static getPropertyDescriptor(t3, i5, s5) {
    return { get() {
      return this[i5];
    }, set(e6) {
      const r4 = this[t3];
      this[i5] = e6, this.requestUpdate(t3, r4, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) || l;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t3 = Object.getPrototypeOf(this);
    if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t4 = this.properties, i5 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
      for (const s5 of i5)
        this.createProperty(s5, t4[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i5) {
    const s5 = [];
    if (Array.isArray(i5)) {
      const e6 = new Set(i5.flat(1 / 0).reverse());
      for (const i6 of e6)
        s5.unshift(S(i6));
    } else
      i5 !== void 0 && s5.push(S(i5));
    return s5;
  }
  static _$Eh(t3, i5) {
    const s5 = i5.attribute;
    return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
  }
  o() {
    var t3;
    this._$Ep = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t3 = this.constructor.l) === null || t3 === void 0 || t3.forEach((t4) => t4(this));
  }
  addController(t3) {
    var i5, s5;
    ((i5 = this._$Eg) !== null && i5 !== void 0 ? i5 : this._$Eg = []).push(t3), this.renderRoot !== void 0 && this.isConnected && ((s5 = t3.hostConnected) === null || s5 === void 0 || s5.call(t3));
  }
  removeController(t3) {
    var i5;
    (i5 = this._$Eg) === null || i5 === void 0 || i5.splice(this._$Eg.indexOf(t3) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t3, i5) => {
      this.hasOwnProperty(i5) && (this._$Et.set(i5, this[i5]), delete this[i5]);
    });
  }
  createRenderRoot() {
    var t3;
    const s5 = (t3 = this.shadowRoot) !== null && t3 !== void 0 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t3;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
      var i5;
      return (i5 = t4.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(t4);
    });
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    var t3;
    (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
      var i5;
      return (i5 = t4.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(t4);
    });
  }
  attributeChangedCallback(t3, i5, s5) {
    this._$AK(t3, s5);
  }
  _$ES(t3, i5, s5 = l) {
    var e6, r4;
    const h3 = this.constructor._$Eh(t3, s5);
    if (h3 !== void 0 && s5.reflect === true) {
      const n6 = ((r4 = (e6 = s5.converter) === null || e6 === void 0 ? void 0 : e6.toAttribute) !== null && r4 !== void 0 ? r4 : o2.toAttribute)(i5, s5.type);
      this._$Ei = t3, n6 == null ? this.removeAttribute(h3) : this.setAttribute(h3, n6), this._$Ei = null;
    }
  }
  _$AK(t3, i5) {
    var s5, e6, r4;
    const h3 = this.constructor, n6 = h3._$Eu.get(t3);
    if (n6 !== void 0 && this._$Ei !== n6) {
      const t4 = h3.getPropertyOptions(n6), l5 = t4.converter, a3 = (r4 = (e6 = (s5 = l5) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e6 !== void 0 ? e6 : typeof l5 == "function" ? l5 : null) !== null && r4 !== void 0 ? r4 : o2.fromAttribute;
      this._$Ei = n6, this[n6] = a3(i5, t4.type), this._$Ei = null;
    }
  }
  requestUpdate(t3, i5, s5) {
    let e6 = true;
    t3 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || n2)(this[t3], i5) ? (this._$AL.has(t3) || this._$AL.set(t3, i5), s5.reflect === true && this._$Ei !== t3 && (this._$E_ === void 0 && (this._$E_ = /* @__PURE__ */ new Map()), this._$E_.set(t3, s5))) : e6 = false), !this.isUpdatePending && e6 && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return t3 != null && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t3;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i6) => this[i6] = t4), this._$Et = void 0);
    let i5 = false;
    const s5 = this._$AL;
    try {
      i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
        var i6;
        return (i6 = t4.hostUpdate) === null || i6 === void 0 ? void 0 : i6.call(t4);
      }), this.update(s5)) : this._$EU();
    } catch (t4) {
      throw i5 = false, this._$EU(), t4;
    }
    i5 && this._$AE(s5);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    var i5;
    (i5 = this._$Eg) === null || i5 === void 0 || i5.forEach((t4) => {
      var i6;
      return (i6 = t4.hostUpdated) === null || i6 === void 0 ? void 0 : i6.call(t4);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$E_ !== void 0 && (this._$E_.forEach((t4, i5) => this._$ES(i5, this[i5], t4)), this._$E_ = void 0), this._$EU();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.2.1");

// node_modules/lit-html/lit-html.js
var t2;
var i2 = globalThis.trustedTypes;
var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var e3 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + e3;
var n3 = `<${o3}>`;
var l2 = document;
var h2 = (t3 = "") => l2.createComment(t3);
var r3 = (t3) => t3 === null || typeof t3 != "object" && typeof t3 != "function";
var d = Array.isArray;
var u = (t3) => {
  var i5;
  return d(t3) || typeof ((i5 = t3) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a2 = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea)$/i;
var p = (t3) => (i5, ...s5) => ({ _$litType$: t3, strings: i5, values: s5 });
var $ = p(1);
var y = p(2);
var b = Symbol.for("lit-noChange");
var w = Symbol.for("lit-nothing");
var T = new WeakMap();
var x = (t3, i5, s5) => {
  var e6, o6;
  const n6 = (e6 = s5 == null ? void 0 : s5.renderBefore) !== null && e6 !== void 0 ? e6 : i5;
  let l5 = n6._$litPart$;
  if (l5 === void 0) {
    const t4 = (o6 = s5 == null ? void 0 : s5.renderBefore) !== null && o6 !== void 0 ? o6 : null;
    n6._$litPart$ = l5 = new N(i5.insertBefore(h2(), t4), t4, void 0, s5 != null ? s5 : {});
  }
  return l5._$AI(t3), l5;
};
var A = l2.createTreeWalker(l2, 129, null, false);
var C = (t3, i5) => {
  const o6 = t3.length - 1, l5 = [];
  let h3, r4 = i5 === 2 ? "<svg>" : "", d2 = c;
  for (let i6 = 0; i6 < o6; i6++) {
    const s5 = t3[i6];
    let o7, u3, p2 = -1, $2 = 0;
    for (; $2 < s5.length && (d2.lastIndex = $2, u3 = d2.exec(s5), u3 !== null); )
      $2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o7 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a2 ? d2 = c : (d2 = f, h3 = void 0);
    const y2 = d2 === f && t3[i6 + 1].startsWith("/>") ? " " : "";
    r4 += d2 === c ? s5 + n3 : p2 >= 0 ? (l5.push(o7), s5.slice(0, p2) + "$lit$" + s5.slice(p2) + e3 + y2) : s5 + e3 + (p2 === -2 ? (l5.push(void 0), i6) : y2);
  }
  const u2 = r4 + (t3[o6] || "<?>") + (i5 === 2 ? "</svg>" : "");
  if (!Array.isArray(t3) || !t3.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s3 !== void 0 ? s3.createHTML(u2) : u2, l5];
};
var E = class {
  constructor({ strings: t3, _$litType$: s5 }, n6) {
    let l5;
    this.parts = [];
    let r4 = 0, d2 = 0;
    const u2 = t3.length - 1, c2 = this.parts, [v2, a3] = C(t3, s5);
    if (this.el = E.createElement(v2, n6), A.currentNode = this.el.content, s5 === 2) {
      const t4 = this.el.content, i5 = t4.firstChild;
      i5.remove(), t4.append(...i5.childNodes);
    }
    for (; (l5 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l5.nodeType === 1) {
        if (l5.hasAttributes()) {
          const t4 = [];
          for (const i5 of l5.getAttributeNames())
            if (i5.endsWith("$lit$") || i5.startsWith(e3)) {
              const s6 = a3[d2++];
              if (t4.push(i5), s6 !== void 0) {
                const t5 = l5.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i6 = /([.?@])?(.*)/.exec(s6);
                c2.push({ type: 1, index: r4, name: i6[2], strings: t5, ctor: i6[1] === "." ? M : i6[1] === "?" ? H : i6[1] === "@" ? I : S2 });
              } else
                c2.push({ type: 6, index: r4 });
            }
          for (const i5 of t4)
            l5.removeAttribute(i5);
        }
        if (g.test(l5.tagName)) {
          const t4 = l5.textContent.split(e3), s6 = t4.length - 1;
          if (s6 > 0) {
            l5.textContent = i2 ? i2.emptyScript : "";
            for (let i5 = 0; i5 < s6; i5++)
              l5.append(t4[i5], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
            l5.append(t4[s6], h2());
          }
        }
      } else if (l5.nodeType === 8)
        if (l5.data === o3)
          c2.push({ type: 2, index: r4 });
        else {
          let t4 = -1;
          for (; (t4 = l5.data.indexOf(e3, t4 + 1)) !== -1; )
            c2.push({ type: 7, index: r4 }), t4 += e3.length - 1;
        }
      r4++;
    }
  }
  static createElement(t3, i5) {
    const s5 = l2.createElement("template");
    return s5.innerHTML = t3, s5;
  }
};
function P(t3, i5, s5 = t3, e6) {
  var o6, n6, l5, h3;
  if (i5 === b)
    return i5;
  let d2 = e6 !== void 0 ? (o6 = s5._$Cl) === null || o6 === void 0 ? void 0 : o6[e6] : s5._$Cu;
  const u2 = r3(i5) ? void 0 : i5._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n6 = d2 == null ? void 0 : d2._$AO) === null || n6 === void 0 || n6.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t3), d2._$AT(t3, s5, e6)), e6 !== void 0 ? ((l5 = (h3 = s5)._$Cl) !== null && l5 !== void 0 ? l5 : h3._$Cl = [])[e6] = d2 : s5._$Cu = d2), d2 !== void 0 && (i5 = P(t3, d2._$AS(t3, i5.values), d2, e6)), i5;
}
var V = class {
  constructor(t3, i5) {
    this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t3) {
    var i5;
    const { el: { content: s5 }, parts: e6 } = this._$AD, o6 = ((i5 = t3 == null ? void 0 : t3.creationScope) !== null && i5 !== void 0 ? i5 : l2).importNode(s5, true);
    A.currentNode = o6;
    let n6 = A.nextNode(), h3 = 0, r4 = 0, d2 = e6[0];
    for (; d2 !== void 0; ) {
      if (h3 === d2.index) {
        let i6;
        d2.type === 2 ? i6 = new N(n6, n6.nextSibling, this, t3) : d2.type === 1 ? i6 = new d2.ctor(n6, d2.name, d2.strings, this, t3) : d2.type === 6 && (i6 = new L(n6, this, t3)), this.v.push(i6), d2 = e6[++r4];
      }
      h3 !== (d2 == null ? void 0 : d2.index) && (n6 = A.nextNode(), h3++);
    }
    return o6;
  }
  m(t3) {
    let i5 = 0;
    for (const s5 of this.v)
      s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t3, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t3[i5])), i5++;
  }
};
var N = class {
  constructor(t3, i5, s5, e6) {
    var o6;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s5, this.options = e6, this._$Cg = (o6 = e6 == null ? void 0 : e6.isConnected) === null || o6 === void 0 || o6;
  }
  get _$AU() {
    var t3, i5;
    return (i5 = (t3 = this._$AM) === null || t3 === void 0 ? void 0 : t3._$AU) !== null && i5 !== void 0 ? i5 : this._$Cg;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return i5 !== void 0 && t3.nodeType === 11 && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = P(this, t3, i5), r3(t3) ? t3 === w || t3 == null || t3 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t3 !== this._$AH && t3 !== b && this.$(t3) : t3._$litType$ !== void 0 ? this.T(t3) : t3.nodeType !== void 0 ? this.S(t3) : u(t3) ? this.A(t3) : this.$(t3);
  }
  M(t3, i5 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t3, i5);
  }
  S(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.M(t3));
  }
  $(t3) {
    this._$AH !== w && r3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.S(l2.createTextNode(t3)), this._$AH = t3;
  }
  T(t3) {
    var i5;
    const { values: s5, _$litType$: e6 } = t3, o6 = typeof e6 == "number" ? this._$AC(t3) : (e6.el === void 0 && (e6.el = E.createElement(e6.h, this.options)), e6);
    if (((i5 = this._$AH) === null || i5 === void 0 ? void 0 : i5._$AD) === o6)
      this._$AH.m(s5);
    else {
      const t4 = new V(o6, this), i6 = t4.p(this.options);
      t4.m(s5), this.S(i6), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = T.get(t3.strings);
    return i5 === void 0 && T.set(t3.strings, i5 = new E(t3)), i5;
  }
  A(t3) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s5, e6 = 0;
    for (const o6 of t3)
      e6 === i5.length ? i5.push(s5 = new N(this.M(h2()), this.M(h2()), this, this.options)) : s5 = i5[e6], s5._$AI(o6), e6++;
    e6 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e6), i5.length = e6);
  }
  _$AR(t3 = this._$AA.nextSibling, i5) {
    var s5;
    for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i5); t3 && t3 !== this._$AB; ) {
      const i6 = t3.nextSibling;
      t3.remove(), t3 = i6;
    }
  }
  setConnected(t3) {
    var i5;
    this._$AM === void 0 && (this._$Cg = t3, (i5 = this._$AP) === null || i5 === void 0 || i5.call(this, t3));
  }
};
var S2 = class {
  constructor(t3, i5, s5, e6, o6) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e6, this.options = o6, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = w;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3, i5 = this, s5, e6) {
    const o6 = this.strings;
    let n6 = false;
    if (o6 === void 0)
      t3 = P(this, t3, i5, 0), n6 = !r3(t3) || t3 !== this._$AH && t3 !== b, n6 && (this._$AH = t3);
    else {
      const e7 = t3;
      let l5, h3;
      for (t3 = o6[0], l5 = 0; l5 < o6.length - 1; l5++)
        h3 = P(this, e7[s5 + l5], i5, l5), h3 === b && (h3 = this._$AH[l5]), n6 || (n6 = !r3(h3) || h3 !== this._$AH[l5]), h3 === w ? t3 = w : t3 !== w && (t3 += (h3 != null ? h3 : "") + o6[l5 + 1]), this._$AH[l5] = h3;
    }
    n6 && !e6 && this.k(t3);
  }
  k(t3) {
    t3 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
  }
};
var M = class extends S2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t3) {
    this.element[this.name] = t3 === w ? void 0 : t3;
  }
};
var k = i2 ? i2.emptyScript : "";
var H = class extends S2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t3) {
    t3 && t3 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
};
var I = class extends S2 {
  constructor(t3, i5, s5, e6, o6) {
    super(t3, i5, s5, e6, o6), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    var s5;
    if ((t3 = (s5 = P(this, t3, i5, 0)) !== null && s5 !== void 0 ? s5 : w) === b)
      return;
    const e6 = this._$AH, o6 = t3 === w && e6 !== w || t3.capture !== e6.capture || t3.once !== e6.once || t3.passive !== e6.passive, n6 = t3 !== w && (e6 === w || o6);
    o6 && this.element.removeEventListener(this.name, this, e6), n6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    var i5, s5;
    typeof this._$AH == "function" ? this._$AH.call((s5 = (i5 = this.options) === null || i5 === void 0 ? void 0 : i5.host) !== null && s5 !== void 0 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var L = class {
  constructor(t3, i5, s5) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    P(this, t3);
  }
};
var z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.1.2");

// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t3, e6;
    const i5 = super.createRenderRoot();
    return (t3 = (e6 = this.renderOptions).renderBefore) !== null && t3 !== void 0 || (e6.renderBefore = i5.firstChild), i5;
  }
  update(t3) {
    const i5 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = x(i5, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t3;
    super.connectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(true);
  }
  disconnectedCallback() {
    var t3;
    super.disconnectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(false);
  }
  render() {
    return b;
  }
};
s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
n4 == null || n4({ LitElement: s4 });
((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.1.2");

// src/common/LiveDraggable.ts
var LiveDraggable = class extends s4 {
  constructor() {
    super();
    this.zIndex = 10;
    this.xOffset = 0;
    this.yOffset = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.initialX = 0;
    this.initialY = 0;
    this.isDraggable = true;
  }
  resetPosition() {
    this.zIndex = 10;
    this.xOffset = 0;
    this.yOffset = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.initialX = 0;
    this.initialY = 0;
    this.setAttribute("style", "");
  }
  set pos(pos) {
    if (pos) {
      this._pos = pos;
    } else {
      this._pos = { x: 0, y: 0 };
    }
    this.currentX = this.xOffset = this.initialX = this._pos.x;
    this.currentY = this.yOffset = this.initialY = this._pos.y;
    this.moveTo(this._pos);
  }
  get pos() {
    return this._pos;
  }
  moveTo(pos) {
    this.setAttribute("style", `transform: translate(${pos.x}px, ${pos.y}px); z-index: ${this.zIndex}`);
  }
  onDragStart(e6) {
    console.log(e6);
  }
  onDragEnd(e6) {
    this._pos = { x: Math.round(this.currentX), y: Math.round(this.currentY) };
    console.log("new pos", this._pos);
  }
  onDrag(e6) {
    this.setAttribute("style", `transform: translate(${this.currentX}px, ${this.currentY}px);`);
  }
  onClick(e6) {
    console.log("inner ckick", e6);
  }
  refreshPos() {
    this.onDragEnd();
  }
};

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i5 = 0; i5 < 256; ++i5) {
  byteToHex.push((i5 + 256).toString(16).substr(1));
}
var i5;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i5 = 0; i5 < 16; ++i5) {
      buf[offset + i5] = rnds[i5];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// src/common/LiveWidget.ts
var LiveWidget = class extends LiveDraggable {
  constructor() {
    super();
    this._widgetId = v4_default();
  }
  willUpdate(_changedProperties) {
    super.willUpdate(_changedProperties);
    this.dispatchEvent(new CustomEvent("widget-update", { detail: {
      widgetEl: this
    }, bubbles: true, composed: true }));
  }
  set config(data) {
    this._widgetId = data.id;
    this._config = data;
    this._data = data == null ? void 0 : data.data;
    this.requestUpdate();
  }
  get config() {
    return this._config;
  }
  set data(x2) {
    this._data = x2;
    this.requestUpdate();
  }
  get data() {
    return this._data;
  }
  get widgetId() {
    return this._widgetId;
  }
  incomingEvents(e6) {
    return;
  }
};

// src/common/LiveWidgetEdit.ts
var LiveWidgetEdit = class extends s4 {
  set widget(w2) {
    this._widget = w2;
    this.data = w2.data;
  }
  get widget() {
    return this._widget;
  }
  set propertyPath(path) {
    this._propPath = path;
  }
  get propertyPath() {
    return this._propPath;
  }
  get widgetId() {
    return this._widget.id;
  }
  updateWidget() {
    this._widget.data = this._data;
  }
  set data(x2) {
    this._data = x2;
  }
  get data() {
    return this._data;
  }
};

// src/common/LiveWidgetComponentEdit.ts
var import_lodash = __toModule(require_lodash());
var LiveWidgetComponentEdit = class extends LiveWidgetEdit {
  set propertyPath(path) {
    this._propPath = path;
  }
  get propertyPath() {
    return this._propPath;
  }
  firstUpdated() {
    this.data = import_lodash.default.get(this.widget.data, this.propertyPath);
  }
};

// src/common/makeDraggable.ts
function makeDragElement(dom, el, handleEl) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (handleEl) {
    dom.querySelector(handleEl).onmousedown = dragMouseDown;
  } else {
    el.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e6) {
    e6 = e6 || window.event;
    e6.preventDefault();
    pos3 = e6.clientX;
    pos4 = e6.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e6) {
    e6 = e6 || window.event;
    e6.preventDefault();
    pos1 = pos3 - e6.clientX;
    pos2 = pos4 - e6.clientY;
    pos3 = e6.clientX;
    pos4 = e6.clientY;
    const newTop = el.offsetTop - pos2;
    const newLeft = el.offsetLeft - pos1;
    if (newTop <= 0) {
      return;
    }
    if (newLeft <= 0 || newLeft >= window.innerWidth - el.offsetWidth) {
      return;
    }
    el.style.top = newTop + "px";
    el.style.left = newLeft + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// node_modules/@lit/reactive-element/decorators/property.js
var i3 = (i5, e6) => e6.kind === "method" && e6.descriptor && !("value" in e6.descriptor) ? __spreadProps(__spreadValues({}, e6), { finisher(n6) {
  n6.createProperty(e6.key, i5);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e6.key, initializer() {
  typeof e6.initializer == "function" && (this[e6.key] = e6.initializer.call(this));
}, finisher(n6) {
  n6.createProperty(e6.key, i5);
} };
function e4(e6) {
  return (n6, t3) => t3 !== void 0 ? ((i5, e7, n7) => {
    e7.constructor.createProperty(n7, i5);
  })(e6, n6, t3) : i3(e6, n6);
}

// node_modules/@lit/reactive-element/decorators/base.js
var o5 = ({ finisher: e6, descriptor: t3 }) => (o6, n6) => {
  var r4;
  if (n6 === void 0) {
    const n7 = (r4 = o6.originalKey) !== null && r4 !== void 0 ? r4 : o6.key, i5 = t3 != null ? { kind: "method", placement: "prototype", key: n7, descriptor: t3(o6.key) } : __spreadProps(__spreadValues({}, o6), { key: n7 });
    return e6 != null && (i5.finisher = function(t4) {
      e6(t4, n7);
    }), i5;
  }
  {
    const r5 = o6.constructor;
    t3 !== void 0 && Object.defineProperty(o6, n6, t3(n6)), e6 == null || e6(r5, n6);
  }
};

// node_modules/@lit/reactive-element/decorators/query.js
function i4(i5, n6) {
  return o5({ descriptor: (o6) => {
    const t3 = { get() {
      var o7, n7;
      return (n7 = (o7 = this.renderRoot) === null || o7 === void 0 ? void 0 : o7.querySelector(i5)) !== null && n7 !== void 0 ? n7 : null;
    }, enumerable: true, configurable: true };
    if (n6) {
      const n7 = typeof o6 == "symbol" ? Symbol() : "__" + o6;
      t3.get = function() {
        var o7, t4;
        return this[n7] === void 0 && (this[n7] = (t4 = (o7 = this.renderRoot) === null || o7 === void 0 ? void 0 : o7.querySelector(i5)) !== null && t4 !== void 0 ? t4 : null), this[n7];
      };
    }
    return t3;
  } });
}

// node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var n5;
var e5 = ((n5 = window.HTMLSlotElement) === null || n5 === void 0 ? void 0 : n5.prototype.assignedElements) != null ? (o6, n6) => o6.assignedElements(n6) : (o6, n6) => o6.assignedNodes(n6).filter((o7) => o7.nodeType === Node.ELEMENT_NODE);

// src/common/FloatEditor.ts
var FloatEditor = class extends s4 {
  constructor(el) {
    super();
    this.isLoading = true;
    this.childEl = el;
  }
  disconnectedCallback() {
    this.removeHighlight();
    super.disconnectedCallback();
  }
  firstUpdated() {
    this.isLoading = false;
    this.body.appendChild(this.childEl);
    makeDragElement(this.shadowRoot, this, "#handle");
    setTimeout(() => {
      this.moveToPos();
      this.style.opacity = "1";
    });
  }
  close(e6) {
    e6.stopPropagation();
    this.remove();
  }
  setStartPos(x2, y2) {
    this.x = x2;
    this.y = y2;
  }
  moveToPos() {
    if (!this.x || !this.y) {
      return;
    }
    const rect = this.getBoundingClientRect();
    const width = rect.width;
    const viewPortWidth = document.body.getBoundingClientRect().width;
    let newX = this.x - width / 2;
    if (newX < 5) {
      newX = 5;
    } else if (newX + width > viewPortWidth - 5) {
      newX = viewPortWidth - width - 5;
    }
    this.style.top = `${this.y + 30 + window.scrollY}px`;
    this.style.left = `${newX}px`;
  }
  highlight() {
    if (this.childEl.widget) {
      this.childEl.widget.classList.add("highlight");
    }
  }
  removeHighlight() {
    if (this.childEl.widget) {
      this.childEl.widget.classList.remove("highlight");
    }
  }
  render() {
    var _a;
    return $`
            ${this.isLoading ? $`<div class="loading"></div>` : ""}
            <div id="handle" style="${this.childEl._handleStyle}" 
                 @mouseover="${this.highlight}" 
                 @mouseleave="${this.removeHighlight}">
                
                <span class="conf-name">
                    ${((_a = this.childEl.widget) == null ? void 0 : _a.widgetTitle) || ""}
                </span>
                <div class="close" @click=${this.close}>X</div>
            </div>
            <div id="body"></div>
        `;
  }
};
FloatEditor.styles = [
  r`
          :host {
            --floatBoxShadow: 0.1px 1.1px 1.9px -13px rgba(0, 0, 0, 0.045), 0.3px 2.5px 4.7px -13px rgba(0, 0, 0, 0.065),
            0.5px 4.8px 8.8px -13px rgba(0, 0, 0, 0.08), 0.9px 8.5px 15.6px -13px rgba(0, 0, 0, 0.095),
            1.7px 15.9px 29.2px -13px rgba(0, 0, 0, 0.115), 4px 38px 70px -13px rgba(0, 0, 0, 0.16);

            --floatBoxBorder: thin solid rgb(103 103 103 / 78%);
            --outlineShadow: 1px 1px 3px #ccc;

            resize: both;
            pointer-events: all;

            opacity: 0;
            transition: opacity 500ms ease-in;
            position: absolute;
            top: 100px;
            left: 150px;
            z-index: 110;
            box-shadow: var(--floatBoxShadow);
            
            //overflow: hidden;
            min-width: 300px;
            min-height: 40px;

            overflow: visible;
            max-width: 300px;

            border-radius: var(--edit-fz-border-radius-small);
            font-family: Open Sans, serif;
          }

          .close {
            font-size: 15px;
            font-family: "Roboto", serif;
            cursor: pointer;
            color: var(--edit-fz-color-neutral-0);
            border: none;
            background: none;

            &:hover {
              color: black;
            }
          }

          .save {
            position: absolute;
            right: 60px;
            font-size: 14px;
            cursor: pointer;
            color: var(--sys-color-neutral-500);
            border: none;
            background: none;
          }

          .save[disabled] {
            cursor: default;
            color: gray;
          }

          #handle {
            background-color: var(--edit-fz-color-primary-3);
            border-radius: var(--edit-fz-border-radius-small) var(--edit-fz-border-radius-small) 0 0;
            height: 30px;
            display: flex;
            align-items: center;
            padding: var(--edit-fz-spacing-4x-small) var(--edit-fz-spacing-small);
            justify-content: space-between;

            white-space: nowrap;

            font-family: Open Sans, serif;
            font-size: 14px;
            font-style: normal;
            /*font-weight: 600;*/
            line-height: 21px;
            letter-spacing: 0;
            text-align: left;
            color: var(--edit-fz-color-neutral-0);

          }

          #body {
            padding: var(--edit-fz-spacing-small);
            background-color: var(--sys-color-neutral-0);
            border-radius: 0 0 var(--edit-fz-border-radius-small) var(--edit-fz-border-radius-small);
          }
          .loading {
            width: 100%;
            height: calc(100% - 2em);
            background: var(--loading-bg-color, rgba(0, 0, 0, 0.4));
            /* min-height: 100px; */
            position: absolute;
            z-index: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loading::after {
            content: "autorenew";
            font-family: "Material Icons", sans-serif;
            font-size: 40px;
            text-shadow: 0 0 14px #fff, 0 0 14px #fff, 0 0 20px #fff;
            animation: rotating 2s ease-in-out infinite;
          }
          @keyframes rotating {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .btn {
            margin: 0 1em;
            width: 10%;
            text-align: center;
          }

          input,
          select {
            background: transparent;
            border: none;
            color: var(--sys-color-neutral-500);
            outline: none;
            padding: 0.6em;
            margin: 0.4em;
            width: 40%;
          }

          input:focus {
            outline: none;
          }
        `
];
__decorateClass([
  i4("#body")
], FloatEditor.prototype, "body", 2);
__decorateClass([
  e4()
], FloatEditor.prototype, "isLoading", 2);

// src/common/FlzEvent.ts
var FLZ_DESIGNER_EVENT_TYPE = "flz-designer-event-type";
var FlzEvent = class extends Event {
  constructor(emitter, listenerStr, action, payload, onSuccess, onError) {
    super(listenerStr, { bubbles: true, composed: true });
    this.action = action;
    this.payload = payload;
    this.emitter = emitter;
    this.onSuccess = onSuccess;
    this.onError = onError;
  }
};
var FlzBoardEvent = class extends FlzEvent {
  constructor(emitter, action, payload, onSuccess, onError) {
    super(emitter, FLZ_WIDGET_EVENT_TYPE, action, payload, onSuccess, onError);
  }
};
var FlzDesignerEvent = class extends FlzEvent {
  constructor(emitter, action, payload, onSuccess, onError) {
    super(emitter, FLZ_DESIGNER_EVENT_TYPE, action, payload, onSuccess, onError);
  }
};

export {
  LiveDraggable,
  LiveWidget,
  LiveWidgetEdit,
  LiveWidgetComponentEdit,
  makeDragElement,
  FloatEditor,
  FLZ_DESIGNER_EVENT_TYPE,
  FlzEvent,
  FlzBoardEvent,
  FlzDesignerEvent
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
