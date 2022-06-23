import {
  require_get
} from "./chunk.JQDT3QVW.js";
import {
  FLZ_WIDGET_EVENT_TYPE
} from "./chunk.TSPPKQSU.js";
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

// src/common/FlzEvent.ts
var FLZ_DESIGNER_EVENT_TYPE = "flz-designer-event-type";
var FlzEvent = class extends Event {
  constructor(emitter, listenerStr, action, payload, onSuccess, onError) {
    super(listenerStr, { bubbles: true, composed: true });
    this.skipWidgetsNotify = false;
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

// src/common/helpers/eventHelpers.ts
function widgetEmit(el, action, payload, onSuccess, onError) {
  el.dispatchEvent(new FlzBoardEvent(el, action, payload, onSuccess, onError));
}
function editorEmit(el, action, payload, onSuccess, onError) {
  el.dispatchEvent(new FlzDesignerEvent(el, action, payload, onSuccess, onError));
}
function componentEmit(el, action, payload, onSuccess, onError) {
  widgetEmit(el, action, payload, onSuccess, onError);
}
function widgetEmitPromise(el, action, payload) {
  return new Promise((resolve, reject) => {
    widgetEmit(el, action, payload, resolve, reject);
  });
}
function editorEmitPromise(el, action, payload) {
  return new Promise((resolve, reject) => {
    editorEmit(el, action, payload, resolve, reject);
  });
}
function emit(el, name, options) {
  const event = new CustomEvent(name, Object.assign({
    bubbles: true,
    cancelable: false,
    composed: true,
    detail: {}
  }, options));
  el.dispatchEvent(event);
  return event;
}
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}

// src/common/LiveWidget.ts
var LiveWidget = class extends LiveDraggable {
  constructor() {
    super();
    this.setConfigOnlyOnce = false;
    this._widgetId = v4_default();
  }
  connectedCallback() {
    super.connectedCallback();
    widgetEmit(this, "widget-connected");
  }
  willUpdate(_changedProperties) {
    super.willUpdate(_changedProperties);
    widgetEmit(this, "widget-update");
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    widgetEmit(this, "widget-first-updated");
  }
  updated(_changedProperties) {
    super.updated(_changedProperties);
    widgetEmit(this, "widget-updated");
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
  onEnterViewport(entry) {
    this.style.setProperty("--fz-animation-1-name", "inherit");
    this.style.setProperty("--fz-animation-1-play-state", "running");
  }
  onLeaveViewport(entry) {
    return;
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
var import_get = __toModule(require_get());
var LiveWidgetComponentEdit = class extends LiveWidgetEdit {
  set propertyPath(path) {
    this._propPath = path;
  }
  get propertyPath() {
    return this._propPath;
  }
  firstUpdated() {
    this.data = (0, import_get.default)(this.widget.data, this.propertyPath);
  }
};

// src/common/LiveWidgetComponentPersonalization.ts
var LiveWidgetComponentPersonalization = class extends LiveWidgetComponentEdit {
  set editTag(tag) {
    this._editTag = tag;
  }
  get editTag() {
    return this._editTag;
  }
  set viewTag(tag) {
    this._viewTag = tag;
  }
  get viewTag() {
    return this._viewTag;
  }
  set viewTagDataProperty(tagProp) {
    this._viewTagDataProperty = tagProp;
  }
  get viewTagDataProperty() {
    return this._viewTagDataProperty;
  }
  set board(board) {
    this._board = board;
  }
  get board() {
    return this._board;
  }
  set onCancel(onCancel) {
    this._onCancel = onCancel;
  }
  get onCancel() {
    return this._onCancel;
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
  const topLimit = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--edit-fz-system-control-bar-height")) || 0;
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
    let newTop = el.offsetTop - pos2;
    let newLeft = el.offsetLeft - pos1;
    if (newTop <= topLimit) {
      newTop = topLimit + 1;
    }
    if (newLeft <= 0 || newLeft >= window.innerWidth - el.offsetWidth) {
      if (newLeft < 5) {
        newLeft = 1;
      } else {
        newLeft = window.innerWidth - el.offsetWidth - 1;
      }
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
    e6 == null ? void 0 : e6.stopPropagation();
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
    const height = rect.height;
    const bounds = document.body.getBoundingClientRect();
    const viewPortWidth = bounds.width;
    const viewPortHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + window.scrollY;
    let newX = this.x - width / 2;
    if (newX < 5) {
      newX = 5;
    } else if (newX + width > viewPortWidth - 5) {
      newX = viewPortWidth - width - 5;
    }
    let newY = this.y + 30 + window.scrollY;
    if (newY + height > viewPortHeight - 5) {
      newY = this.y - height - 30 + window.scrollY;
    }
    this.style.top = `${newY}px`;
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
            <div
                id="handle"
                style="${this.childEl._handleStyle}"
                @mouseover="${this.highlight}"
                @mouseleave="${this.removeHighlight}">
                <span class="conf-name"> ${((_a = this.childEl.widget) == null ? void 0 : _a.widgetTitle) || ""} </span>
                <div class="close" @click=${this.close}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#ffffff">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                </div>
            </div>
            <div id="body"></div>
        `;
  }
};
FloatEditor.styles = [
  r`
            :host {
                --floatBoxShadow: 0.1px 1.1px 1.9px -13px rgba(0, 0, 0, 0.045),
                    0.3px 2.5px 4.7px -13px rgba(0, 0, 0, 0.065), 0.5px 4.8px 8.8px -13px rgba(0, 0, 0, 0.08),
                    0.9px 8.5px 15.6px -13px rgba(0, 0, 0, 0.095), 1.7px 15.9px 29.2px -13px rgba(0, 0, 0, 0.115),
                    4px 38px 70px -13px rgba(0, 0, 0, 0.16);

                --floatBoxBorder: thin solid rgb(103 103 103 / 78%);
                --outlineShadow: 1px 1px 3px #ccc;

                resize: both;
                pointer-events: all;

                opacity: 0;
                transition: opacity 500ms ease-in;
                position: absolute;
                top: 100px;
                left: 150px;
                z-index: 104;
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
                cursor: pointer;
                color: var(--edit-fz-color-neutral-0);
                border: none;
                background: none;
                display: flex;
                align-items: center;

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

// node_modules/@cloudinary/url-gen/internal/qualifier/QualifierValue.js
var QualifierValue = class {
  constructor(qualifierValue) {
    this.values = [];
    this.delimiter = ":";
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }
  toString() {
    return this.values.join(this.delimiter);
  }
  hasValue(v2) {
    return typeof v2 !== "undefined" && v2 !== null && v2 !== "";
  }
  addValue(value) {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    this.values = this.values.filter((v2) => this.hasValue(v2));
    return this;
  }
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
    return this;
  }
};

// node_modules/@cloudinary/url-gen/internal/utils/unsupportedError.js
var UnsupportedError = class extends Error {
  constructor(message = "Unsupported") {
    super(message);
  }
};
function createUnsupportedError(message) {
  return new UnsupportedError(message);
}

// node_modules/@cloudinary/url-gen/internal/models/qualifierToJson.js
function qualifierToJson() {
  return this._qualifierModel || { error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`) };
}

// node_modules/@cloudinary/url-gen/internal/models/QualifierModel.js
var QualifierModel = class {
  constructor() {
    this._qualifierModel = {};
  }
  toJson() {
    return qualifierToJson.apply(this);
  }
};

// node_modules/@cloudinary/url-gen/internal/qualifier/Qualifier.js
var Qualifier = class extends QualifierModel {
  constructor(key, qualifierValue) {
    super();
    this.delimiter = "_";
    this.key = key;
    if (qualifierValue instanceof QualifierValue) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue();
      this.qualifierValue.addValue(qualifierValue);
    }
  }
  toString() {
    const { key, delimiter, qualifierValue } = this;
    return `${key}${delimiter}${qualifierValue.toString()}`;
  }
  addValue(value) {
    this.qualifierValue.addValue(value);
    return this;
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/flag/FlagQualifier.js
var FlagQualifier = class extends Qualifier {
  constructor(flagType, flagValue) {
    let qualifierValue;
    if (flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(":");
    } else {
      qualifierValue = flagType;
    }
    super("fl", qualifierValue);
    this.flagValue = flagValue;
  }
  toString() {
    return super.toString().replace(/\./, "%2E");
  }
  getFlagValue() {
    return this.flagValue;
  }
};

// node_modules/@cloudinary/url-gen/internal/utils/dataStructureUtils.js
function mapToSortedArray(map, flags) {
  const array = Array.from(map.entries());
  flags.forEach((flag) => {
    array.push(["fl", flag]);
  });
  return array.sort().map((v2) => v2[1]);
}

// node_modules/@cloudinary/url-gen/internal/models/actionToJson.js
function actionToJson() {
  const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
  if (actionModelIsNotEmpty) {
    return this._actionModel;
  }
  return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
}

// node_modules/@cloudinary/url-gen/internal/models/ActionModel.js
var ActionModel = class {
  constructor() {
    this._actionModel = {};
  }
  toJson() {
    return actionToJson.apply(this);
  }
};

// node_modules/@cloudinary/url-gen/internal/Action.js
var Action = class extends ActionModel {
  constructor() {
    super(...arguments);
    this.qualifiers = /* @__PURE__ */ new Map();
    this.flags = [];
    this.delimiter = ",";
    this.actionTag = "";
  }
  prepareQualifiers() {
  }
  getActionTag() {
    return this.actionTag;
  }
  setActionTag(tag) {
    this.actionTag = tag;
    return this;
  }
  toString() {
    this.prepareQualifiers();
    return mapToSortedArray(this.qualifiers, this.flags).join(this.delimiter);
  }
  addQualifier(qualifier) {
    if (typeof qualifier === "string") {
      const [key, value] = qualifier.toLowerCase().split("_");
      if (key === "fl") {
        this.flags.push(new FlagQualifier(value));
      } else {
        this.qualifiers.set(key, new Qualifier(key, value));
      }
    } else {
      this.qualifiers.set(qualifier.key, qualifier);
    }
    return this;
  }
  addFlag(flag) {
    if (typeof flag === "string") {
      this.flags.push(new FlagQualifier(flag));
    } else {
      if (flag instanceof FlagQualifier) {
        this.flags.push(flag);
      }
    }
    return this;
  }
  addValueToQualifier(qualifierKey, qualifierValue) {
    this.qualifiers.get(qualifierKey).addValue(qualifierValue);
    return this;
  }
};

// node_modules/@cloudinary/url-gen/internal/utils/toFloatAsString.js
function toFloatAsString(value) {
  const returnValue = value.toString();
  if (returnValue.match(/[A-Z]/gi)) {
    return returnValue;
  }
  if (returnValue.length > 1 && returnValue[0] === "0") {
    return returnValue;
  }
  const isNumberLike = !isNaN(parseFloat(returnValue)) && returnValue.indexOf(":") === -1;
  if (isNumberLike && returnValue.indexOf(".") === -1) {
    return `${returnValue}.0`;
  } else {
    return returnValue;
  }
}

// node_modules/@cloudinary/url-gen/qualifiers/aspectRatio/AspectRatioQualifierValue.js
var AspectRatioQualifierValue = class extends QualifierValue {
};

// node_modules/@cloudinary/url-gen/qualifiers/flag.js
function ignoreInitialAspectRatio() {
  return new FlagQualifier("ignore_aspect_ratio");
}
function lossy() {
  return new FlagQualifier("lossy");
}
function preserveTransparency() {
  return new FlagQualifier("preserve_transparency");
}
function progressive(mode2) {
  return new FlagQualifier("progressive", mode2);
}
function regionRelative() {
  return new FlagQualifier("region_relative");
}
function relative() {
  return new FlagQualifier("relative");
}

// node_modules/@cloudinary/url-gen/internal/utils/objectFlip.js
function objectFlip(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });
  return result;
}

// node_modules/@cloudinary/url-gen/internal/internalConstants.js
var ALLOWED_URL_CONFIG = [
  "cname",
  "secureDistribution",
  "privateCdn",
  "signUrl",
  "longUrlSignature",
  "shorten",
  "useRootPath",
  "secure",
  "forceVersion",
  "analytics"
];
var ACTION_TYPE_TO_CROP_MODE_MAP = {
  limitFit: "limit",
  limitFill: "lfill",
  minimumFit: "mfit",
  thumbnail: "thumb",
  limitPad: "lpad",
  minimumPad: "mpad"
};
var ACTION_TYPE_TO_DELIVERY_MODE_MAP = {
  colorSpace: "cs",
  dpr: "dpr",
  density: "dn",
  defaultImage: "d",
  format: "f",
  quality: "q"
};
var ACTION_TYPE_TO_EFFECT_MODE_MAP = {
  redEye: "redeye",
  advancedRedEye: "adv_redeye",
  oilPaint: "oil_paint",
  unsharpMask: "unsharp_mask",
  makeTransparent: "make_transparent"
};
var ACTION_TYPE_TO_QUALITY_MODE_MAP = {
  autoBest: "auto:best",
  autoEco: "auto:eco",
  autoGood: "auto:good",
  autoLow: "auto:low",
  jpegminiHigh: "jpegmini:1",
  jpegminiMedium: "jpegmini:2",
  jpegminiBest: "jpegmini:0"
};
var ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP = {
  fullHd: "full_hd",
  fullHdWifi: "full_hd_wifi",
  fullHdLean: "full_hd_lean",
  hdLean: "hd_lean"
};
var CHROMA_VALUE_TO_CHROMA_MODEL_ENUM = {
  444: "CHROMA_444",
  420: "CHROMA_420"
};
var COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP = {
  "noCmyk": "no_cmyk",
  "keepCmyk": "keep_cmyk",
  "tinySrgb": "tinysrgb",
  "srgbTrueColor": "srgb:truecolor"
};
var CHROMA_MODEL_ENUM_TO_CHROMA_VALUE = objectFlip(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM);
var COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP = objectFlip(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP);
var CROP_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_CROP_MODE_MAP);
var DELIVERY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_DELIVERY_MODE_MAP);
var EFFECT_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_EFFECT_MODE_MAP);
var QUALITY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_QUALITY_MODE_MAP);
var STREAMING_PROFILE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP);

// node_modules/@cloudinary/url-gen/actions/resize/ResizeSimpleAction.js
var ResizeSimpleAction = class extends Action {
  constructor(cropType, cropWidth, cropHeight) {
    super();
    this._actionModel = { dimensions: {} };
    this._actionModel.actionType = CROP_MODE_TO_ACTION_TYPE_MAP[cropType] || cropType;
    this.addQualifier(new Qualifier("c", cropType));
    cropWidth && this.width(cropWidth);
    cropHeight && this.height(cropHeight);
  }
  height(x2) {
    this._actionModel.dimensions.height = x2;
    return this.addQualifier(new Qualifier("h", x2));
  }
  width(x2) {
    this._actionModel.dimensions.width = x2;
    return this.addQualifier(new Qualifier("w", x2));
  }
  aspectRatio(ratio) {
    if (ratio instanceof AspectRatioQualifierValue) {
      this._actionModel.dimensions.aspectRatio = `${ratio}`;
      return this.addQualifier(new Qualifier("ar", ratio));
    }
    if (typeof ratio === "number" || typeof ratio === "string") {
      this._actionModel.dimensions.aspectRatio = toFloatAsString(ratio);
      return this.addQualifier(new Qualifier("ar", toFloatAsString(ratio)));
    }
    if (ratio instanceof FlagQualifier) {
      this._actionModel.dimensions.aspectRatio = `${ratio.qualifierValue}`;
      return this.addFlag(ratio);
    }
  }
  relative() {
    this._actionModel.relative = true;
    return this.addFlag(relative());
  }
  regionRelative() {
    this._actionModel.regionRelative = true;
    return this.addFlag(regionRelative());
  }
  static fromJson(actionModel) {
    const { actionType, dimensions, relative: relative2, regionRelative: regionRelative2 } = actionModel;
    const { aspectRatio, width, height } = dimensions;
    const cropMode = ACTION_TYPE_TO_CROP_MODE_MAP[actionType] || actionType;
    const result = new this(cropMode, width, height);
    aspectRatio && result.aspectRatio(aspectRatio === "ignore_aspect_ratio" ? ignoreInitialAspectRatio() : aspectRatio);
    relative2 && result.relative();
    regionRelative2 && result.regionRelative();
    return result;
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/gravity/GravityQualifier.js
var GravityQualifier = class extends Qualifier {
  constructor(value) {
    super("g", new QualifierValue(value));
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/gravity/autoGravity/AutoGravity.js
var AutoGravity = class extends GravityQualifier {
  constructor() {
    super("auto");
  }
  autoFocus(...AutoFocusObjects) {
    this.addValue(AutoFocusObjects);
    return this;
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/gravity/focusOnGravity/FocusOnGravity.js
var FocusOnGravity = class extends GravityQualifier {
  constructor(FocusOnObjects) {
    super(FocusOnObjects);
  }
  fallbackGravity(val) {
    this.addValue(val.qualifierValue);
    return this;
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/gravity/compassGravity/CompassGravity.js
var CompassGravity = class extends GravityQualifier {
  constructor(dir) {
    super(dir);
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/gravity.js
function focusOn(...args) {
  const res = [...args];
  return new FocusOnGravity(res);
}
function autoGravity() {
  return new AutoGravity();
}

// node_modules/@cloudinary/url-gen/qualifiers/gravity/qualifiers/focusOn/FocusOnValue.js
var FocusOnValue = class extends QualifierValue {
  constructor(name) {
    super();
    this.name = name;
  }
  toString() {
    return this.name;
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/focusOn.js
function ocr() {
  return new FocusOnValue("ocr_text");
}

// node_modules/@cloudinary/url-gen/internal/models/createGravityModel.js
function isIAutoGravityString(gravity) {
  return gravity && `${gravity}`.split(":")[0] === "auto";
}
function isCompassGravity(gravity) {
  const gravityValue = getGravityValue(gravity);
  return ["north", "center", "east", "west", "south", "north_west", "south_east", "south_west", "north_east"].includes(gravityValue);
}
function getGravityValue(gravity) {
  return `${gravity}`.replace("g_", "");
}
function createCompassGravityModel(gravity) {
  return {
    compass: getGravityValue(gravity),
    gravityType: "direction"
  };
}
function isOcrGravity(gravity) {
  return getGravityValue(gravity) === "ocr_text";
}
function createOcrGravityModel() {
  return {
    gravityType: "ocr"
  };
}
function isAutoGravity(gravity) {
  return `${gravity.qualifierValue}`.split(":")[0] === "auto";
}
function createIAutoFocusObject(gravity) {
  const gravityString = gravity.toString();
  const values = gravityString.split("_");
  const result = {
    object: values[0]
  };
  if (values.length > 1) {
    if (values[1] === "avoid") {
      result.avoid = true;
    } else {
      result.weight = +values[1];
    }
  }
  return result;
}
function createAutoGravityModel(gravity) {
  let values;
  const gravityQualifier = gravity === "auto" ? new AutoGravity() : gravity;
  if (`${gravity}`.startsWith("auto:")) {
    values = `${gravity}`.split(":").filter((v2) => v2 !== "auto");
  } else {
    values = gravityQualifier.qualifierValue.values.filter((v2) => v2 !== "auto");
  }
  const autoFocus = values.map(createIAutoFocusObject);
  return {
    gravityType: "auto",
    autoFocus
  };
}
function createFocusOnGravityModel(gravity) {
  const hasAutoGravity = `${gravity}`.split(":").includes("auto");
  const values = gravity.qualifierValue.values;
  const focusOnValues = hasAutoGravity ? values.slice(0, values.length - 1) : values;
  const result = {
    gravityType: "object",
    focusOnObjects: focusOnValues.map((v2) => `${v2}`)
  };
  if (hasAutoGravity) {
    const autoFocusObjects = values[values.length - 1].values.slice(1);
    const autoGravityInstance = autoGravity().autoFocus(...autoFocusObjects);
    result.fallbackGravity = createAutoGravityModel(autoGravityInstance);
  }
  return result;
}
function createFocusOnGravity(gravity) {
  const values = gravity.split(":");
  const focusOnValues = values.map((g2) => new FocusOnValue(g2));
  return new FocusOnGravity(focusOnValues);
}
function createGravityModel(gravity) {
  if (isCompassGravity(gravity)) {
    return createCompassGravityModel(gravity);
  }
  if (isOcrGravity(gravity)) {
    return createOcrGravityModel();
  }
  if (isIAutoGravityString(gravity) || isAutoGravity(gravity)) {
    return createAutoGravityModel(gravity);
  }
  return createFocusOnGravityModel(typeof gravity === "string" ? createFocusOnGravity(gravity) : gravity);
}

// node_modules/@cloudinary/url-gen/qualifiers/autoFocus.js
var AutoFocus = class extends QualifierValue {
  constructor(focusOn2, weight) {
    super();
    this._weight = weight;
    this.focusOn = focusOn2;
    this.shouldAvoid = false;
  }
  static focusOn(obj, weight) {
    return new AutoFocus(obj, weight);
  }
  shouldAddWeight() {
    return typeof this._weight === "number" || typeof this._weight === "string" || this.shouldAvoid;
  }
  getName() {
    return this.focusOn.name;
  }
  getWeight() {
    if (this.shouldAvoid) {
      return "avoid";
    } else {
      return this._weight;
    }
  }
  toString() {
    if (this.shouldAddWeight()) {
      return `${this.getName()}_${this.getWeight()}`;
    } else {
      return `${this.getName()}`;
    }
  }
  weight(w2) {
    this._weight = w2;
    return this;
  }
  avoid() {
    this.shouldAvoid = true;
    return this;
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/gravity/qualifiers/compass/CompassQualifier.js
var CompassQualifier = class extends QualifierValue {
  constructor(val) {
    super();
    this.val = val;
  }
  toString() {
    return this.val;
  }
};

// node_modules/@cloudinary/url-gen/internal/models/createGravityFromModel.js
function isCompassGravityModel(gravityModel) {
  return gravityModel.gravityType === "direction";
}
function isOcrGravityModel(gravityModel) {
  return gravityModel.gravityType === "ocr";
}
function isAutoGravityModel(gravityModel) {
  return gravityModel.gravityType === "auto";
}
function createAutoFocusFromModel(autoGravityObjectModel) {
  const { object, weight, avoid } = autoGravityObjectModel;
  const autoFocus = new AutoFocus(new FocusOnValue(object));
  (weight || weight === 0) && autoFocus.weight(weight);
  avoid && autoFocus.avoid();
  return autoFocus;
}
function createAutoGravityFromModel(gravityModel) {
  const autoFocusModel = gravityModel.autoFocus || [];
  const autoFocus = autoFocusModel.map(createAutoFocusFromModel);
  return autoGravity().autoFocus(...autoFocus);
}
function createFocusOnGravityFromModel(gravityModel) {
  const focusOnObjects = (gravityModel.focusOnObjects || []).map((str) => new FocusOnValue(str));
  const result = focusOn(...focusOnObjects);
  if (gravityModel.fallbackGravity) {
    const autoGravity2 = createAutoGravityFromModel(gravityModel.fallbackGravity);
    result.fallbackGravity(autoGravity2);
  }
  return result;
}
function createGravityFromModel(gravityModel) {
  if (isCompassGravityModel(gravityModel)) {
    return new CompassGravity(new CompassQualifier(gravityModel.compass));
  }
  if (isOcrGravityModel(gravityModel)) {
    return focusOn(ocr());
  }
  if (isAutoGravityModel(gravityModel)) {
    return createAutoGravityFromModel(gravityModel);
  }
  return createFocusOnGravityFromModel(gravityModel);
}

// node_modules/@cloudinary/url-gen/actions/resize/ResizeAdvancedAction.js
var ResizeAdvancedAction = class extends ResizeSimpleAction {
  gravity(gravity) {
    this._actionModel.gravity = createGravityModel(gravity);
    const gravityQualifier = typeof gravity === "string" ? new Qualifier("g", gravity) : gravity;
    return this.addQualifier(gravityQualifier);
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    if (actionModel.gravity) {
      result.gravity(createGravityFromModel(actionModel.gravity));
    }
    return result;
  }
};

// node_modules/@cloudinary/url-gen/internal/utils/prepareColor.js
function prepareColor(color) {
  if (color) {
    return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
  } else {
    return color;
  }
}

// node_modules/@cloudinary/url-gen/qualifiers/rotate/RotationModeQualifierValue.js
var RotationModeQualifierValue = class extends QualifierValue {
  constructor(val) {
    super();
    this.val = val;
  }
  toString() {
    return this.val;
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/rotationMode.js
function verticalFlip() {
  return new RotationModeQualifierValue("vflip");
}
function horizontalFlip() {
  return new RotationModeQualifierValue("hflip");
}

// node_modules/@cloudinary/url-gen/qualifiers/format/FormatQualifier.js
var FormatQualifier = class extends QualifierValue {
  constructor(val) {
    super(val);
    this.val = val;
  }
  getValue() {
    return this.val;
  }
};

// node_modules/@cloudinary/url-gen/actions/resize/ResizeCropAction.js
var ResizeCropAction = class extends ResizeAdvancedAction {
  x(x2) {
    this._actionModel.x = x2;
    return this.addQualifier(new Qualifier("x", x2));
  }
  y(y2) {
    this._actionModel.y = y2;
    return this.addQualifier(new Qualifier("y", y2));
  }
  zoom(z2) {
    this._actionModel.zoom = z2;
    return this.addQualifier(new Qualifier("z", z2));
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.x && result.x(actionModel.x);
    actionModel.y && result.y(actionModel.y);
    actionModel.zoom && result.zoom(actionModel.zoom);
    return result;
  }
};

// node_modules/@cloudinary/url-gen/actions/resize/ResizeFillAction.js
var ResizeFillAction = class extends ResizeAdvancedAction {
  x(x2) {
    this._actionModel.x = x2;
    return this.addQualifier(new Qualifier("x", x2));
  }
  y(y2) {
    this._actionModel.y = y2;
    return this.addQualifier(new Qualifier("y", y2));
  }
  static fromJson(actionModel) {
    const result = super.fromJson.apply(this, [actionModel]);
    actionModel.x && result.x(actionModel.x);
    actionModel.y && result.y(actionModel.y);
    return result;
  }
};

// node_modules/@cloudinary/url-gen/actions/resize.js
function crop(width, height) {
  return new ResizeCropAction("crop", width, height);
}
function fill(width, height) {
  return new ResizeFillAction("fill", width, height);
}

// node_modules/@cloudinary/url-gen/config/BaseConfig.js
function isObject(a3) {
  if (typeof a3 !== "object" || a3 instanceof Array) {
    return false;
  } else {
    return true;
  }
}
var Config = class {
  filterOutNonSupportedKeys(userProvidedConfig, validKeys) {
    const obj = Object.create({});
    if (isObject(userProvidedConfig)) {
      Object.keys(userProvidedConfig).forEach((key) => {
        if (validKeys.indexOf(key) >= 0) {
          obj[key] = userProvidedConfig[key];
        } else {
          console.warn("Warning - unsupported key provided to configuration: ", key);
        }
      });
      return obj;
    } else {
      return Object.create({});
    }
  }
};
var BaseConfig_default = Config;

// node_modules/@cloudinary/url-gen/config/URLConfig.js
var URLConfig = class extends BaseConfig_default {
  constructor(userURLConfig) {
    super();
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    Object.assign(this, {
      secure: true
    }, urlConfig);
  }
  extend(userURLConfig) {
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    return new URLConfig(Object.assign({}, this, urlConfig));
  }
  setCname(value) {
    this.cname = value;
    return this;
  }
  setSecureDistribution(value) {
    this.secureDistribution = value;
    return this;
  }
  setPrivateCdn(value) {
    this.privateCdn = value;
    return this;
  }
  setSignUrl(value) {
    this.signUrl = value;
    return this;
  }
  setLongUrlSignature(value) {
    this.longUrlSignature = value;
    return this;
  }
  setShorten(value) {
    this.shorten = value;
    return this;
  }
  setUseRootPath(value) {
    this.useRootPath = value;
    return this;
  }
  setSecure(value) {
    this.secure = value;
    return this;
  }
  setForceVersion(value) {
    this.forceVersion = value;
    return this;
  }
};
var URLConfig_default = URLConfig;

// node_modules/@cloudinary/url-gen/actions/background/actions/BackgroundColor.js
var BackgroundColor = class extends Action {
  constructor(color) {
    super();
    this.addQualifier(new Qualifier("b", new QualifierValue(color).setDelimiter("_")));
  }
};

// node_modules/@cloudinary/url-gen/internal/RawAction.js
var RawAction = class {
  constructor(raw) {
    this.raw = raw;
  }
  toString() {
    return this.raw;
  }
  toJson() {
    return { error: createUnsupportedError(`unsupported action ${this.constructor.name}`) };
  }
};

// node_modules/@cloudinary/url-gen/internal/models/IErrorObject.js
function isErrorObject(obj) {
  const errorObj = obj;
  return "error" in errorObj && !!errorObj.error;
}

// node_modules/@cloudinary/url-gen/transformation/Transformation.js
var Transformation = class {
  constructor() {
    this.actions = [];
  }
  addAction(action) {
    let actionToAdd;
    if (typeof action === "string") {
      if (action.indexOf("/") >= 0) {
        throw "addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";
      } else {
        actionToAdd = new RawAction(action);
      }
    } else {
      actionToAdd = action;
    }
    this.actions.push(actionToAdd);
    return this;
  }
  addTransformation(tx) {
    if (tx instanceof Transformation) {
      this.actions = this.actions.concat(tx.actions);
    } else {
      this.actions.push(new RawAction(tx));
    }
    return this;
  }
  toString() {
    return this.actions.map((action) => {
      return action.toString();
    }).filter((a3) => a3).join("/");
  }
  animated(animatedAction) {
    return this.addAction(animatedAction);
  }
  border(borderAction) {
    return this.addAction(borderAction);
  }
  reshape(reshapeAction) {
    return this.addAction(reshapeAction);
  }
  resize(resizeAction) {
    return this.addAction(resizeAction);
  }
  quality(quality) {
    return this.addAction(quality);
  }
  roundCorners(roundCornersAction) {
    return this.addAction(roundCornersAction);
  }
  overlay(overlayAction) {
    return this.addAction(overlayAction);
  }
  underlay(underlayAction) {
    underlayAction.setLayerType("u");
    return this.addAction(underlayAction);
  }
  addVariable(variableAction) {
    return this.addAction(variableAction);
  }
  conditional(conditionAction) {
    return this.addAction(conditionAction);
  }
  effect(effectAction) {
    return this.addAction(effectAction);
  }
  adjust(action) {
    return this.addAction(action);
  }
  rotate(rotateAction) {
    return this.addAction(rotateAction);
  }
  namedTransformation(namedTransformation) {
    return this.addAction(namedTransformation);
  }
  delivery(deliveryAction) {
    return this.addAction(deliveryAction);
  }
  backgroundColor(color) {
    return this.addAction(new BackgroundColor(prepareColor(color)));
  }
  psdTools(action) {
    return this.addAction(action);
  }
  extract(action) {
    return this.addAction(action);
  }
  addFlag(flagQualifier) {
    const action = new Action();
    let flagToAdd = flagQualifier;
    if (typeof flagQualifier === "string") {
      flagToAdd = new FlagQualifier(flagQualifier);
    }
    action.addQualifier(flagToAdd);
    return this.addAction(action);
  }
  customFunction(customFunction) {
    return this.addAction(customFunction);
  }
  transcode(action) {
    return this.addAction(action);
  }
  videoEdit(action) {
    return this.addAction(action);
  }
  toJson() {
    const actions = [];
    for (const action of this.actions) {
      const json = action.toJson();
      if (isErrorObject(json)) {
        return json;
      }
      actions.push(json);
    }
    return { actions };
  }
};

// node_modules/@cloudinary/url-gen/transformation/ImageTransformation.js
var ImageTransformation = class extends Transformation {
};

// node_modules/@cloudinary/url-gen/transformation/VideoTransformation.js
var VideoTransformation = class extends Transformation {
};

// node_modules/@cloudinary/url-gen/internal/url/urlUtils/isUrl.js
function isUrl(publicID) {
  return publicID.match(/^https?:\//);
}

// node_modules/@cloudinary/url-gen/internal/url/urlUtils/isFileName.js
function isFileName(publicID) {
  return publicID.indexOf("/") < 0;
}

// node_modules/@cloudinary/url-gen/internal/url/urlUtils/publicIDContainsVersion.js
function publicIDContainsVersion(publicID) {
  return publicID.match(/^v[0-9]+/);
}

// node_modules/@cloudinary/url-gen/internal/url/cloudinaryURL.js
function getUrlPrefix(cloudName, urlConfig) {
  const secure = urlConfig.secure;
  const privateCDN = urlConfig.privateCdn;
  const cname = urlConfig.cname;
  const secureDistribution = urlConfig.secureDistribution;
  if (!secure && !cname) {
    return `http://res.cloudinary.com/${cloudName}`;
  }
  if (secure && !secureDistribution && privateCDN) {
    return `https://${cloudName}-res.cloudinary.com`;
  }
  if (secure && !secureDistribution) {
    return `https://res.cloudinary.com/${cloudName}`;
  }
  if (secure && secureDistribution && privateCDN) {
    return `https://${secureDistribution}`;
  }
  if (secure && secureDistribution) {
    return `https://${secureDistribution}/${cloudName}`;
  }
  if (!secure && cname) {
    return `http://${cname}/${cloudName}`;
  } else {
    return "ERROR";
  }
}
function handleAssetType(assetType) {
  if (!assetType) {
    return "image";
  }
  return assetType;
}
function handleDeliveryType(deliveryType) {
  if (!deliveryType) {
    return "upload";
  }
  return deliveryType;
}
function getUrlVersion(publicID, version, forceVersion) {
  const shouldForceVersion = forceVersion !== false;
  if (version) {
    return `v${version}`;
  }
  if (publicIDContainsVersion(publicID) || isUrl(publicID) || isFileName(publicID)) {
    return "";
  }
  return shouldForceVersion ? "v1" : "";
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js
function stringPad(value, _targetLength, _padString) {
  let targetLength = _targetLength >> 0;
  let padString = String(typeof _padString !== "undefined" ? _padString : " ");
  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;
    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(value);
  }
}
function repeatStringNumTimes(string, _times) {
  let times = _times;
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/base64Map.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64Map = {};
var num = 0;
chars.split("").forEach((char) => {
  let key = num.toString(2);
  key = stringPad(key, 6, "0");
  base64Map[key] = char;
  num++;
});

// node_modules/@cloudinary/url-gen/sdkAnalytics/reverseVersion.js
function reverseVersion(semVer) {
  if (semVer.split(".").length < 2) {
    throw new Error("invalid semVer, must have at least two segments");
  }
  return semVer.split(".").reverse().map((segment) => {
    const asNumber = +segment;
    if (isNaN(asNumber) || asNumber < 0) {
      throw "Invalid version number provided";
    }
    return stringPad(segment, 2, "0");
  }).join(".");
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/encodeVersion.js
function encodeVersion(semVer) {
  let strResult = "";
  const parts = semVer.split(".").length;
  const paddedStringLength = parts * 6;
  const paddedReversedSemver = reverseVersion(semVer);
  const num2 = parseInt(paddedReversedSemver.split(".").join(""));
  let paddedBinary = num2.toString(2);
  paddedBinary = stringPad(paddedBinary, paddedStringLength, "0");
  if (paddedBinary.length % 6 !== 0) {
    throw "Version must be smaller than 43.21.26)";
  }
  paddedBinary.match(/.{1,6}/g).forEach((bitString) => {
    strResult += base64Map[bitString];
  });
  return strResult;
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/getAnalyticsOptions.js
function getAnalyticsOptions(options) {
  const analyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    feature: "0"
  };
  if (options.accessibility) {
    analyticsOptions.feature = "D";
  }
  if (options.lazyload) {
    analyticsOptions.feature = "C";
  }
  if (options.responsive) {
    analyticsOptions.feature = "A";
  }
  if (options.placeholder) {
    analyticsOptions.feature = "B";
  }
  return analyticsOptions;
}

// node_modules/@cloudinary/url-gen/internal/utils/packageVersion.js
var packageVersion = "1.8.0";

// node_modules/@cloudinary/url-gen/sdkAnalytics/getSDKAnalyticsSignature.js
function getNodeVersion() {
  const failedVersion = "0.0.0";
  if (typeof window !== "undefined") {
    return failedVersion;
  } else {
    try {
      return process.versions.node || failedVersion;
    } catch (e6) {
      return failedVersion;
    }
  }
}
function ensureShapeOfTrackedProperties(trackedAnalytics) {
  const defaults = {
    techVersion: getNodeVersion(),
    sdkCode: "T",
    sdkSemver: packageVersion.split("-")[0],
    responsive: false,
    placeholder: false,
    lazyload: false,
    accessibility: false
  };
  if (!trackedAnalytics) {
    return defaults;
  } else {
    return Object.assign(Object.assign({}, defaults), trackedAnalytics);
  }
}
function getSDKAnalyticsSignature(_trackedAnalytics) {
  const trackedAnalytics = ensureShapeOfTrackedProperties(_trackedAnalytics);
  const analyticsOptions = getAnalyticsOptions(trackedAnalytics);
  try {
    const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    const encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    const encodedTechVersion = encodeVersion(twoPartVersion);
    const featureCode = analyticsOptions.feature;
    const SDKCode = analyticsOptions.sdkCode;
    const algoVersion = "A";
    return `${algoVersion}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${featureCode}`;
  } catch (e6) {
    return "E";
  }
}
function removePatchFromSemver(semVerStr) {
  const parts = semVerStr.split(".");
  return `${parts[0]}.${parts[1]}`;
}

// node_modules/@cloudinary/url-gen/assets/CloudinaryFile.js
var SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
var CloudinaryFile = class {
  constructor(publicID, cloudConfig = {}, urlConfig) {
    this.setPublicID(publicID);
    this.setCloudConfig(cloudConfig);
    this.setURLConfig(urlConfig);
  }
  setURLConfig(urlConfig) {
    this.urlConfig = new URLConfig_default(urlConfig);
    return this;
  }
  setCloudConfig(cloudConfig) {
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    return this;
  }
  setPublicID(publicID) {
    this.publicID = publicID ? publicID.toString() : "";
    return this;
  }
  setDeliveryType(newType) {
    this.deliveryType = newType;
    return this;
  }
  setSuffix(newSuffix) {
    this.suffix = newSuffix;
    return this;
  }
  setSignature(signature) {
    this.signature = signature;
    return this;
  }
  setVersion(newVersion) {
    if (newVersion) {
      this.version = newVersion;
    }
    return this;
  }
  setAssetType(newType) {
    if (newType) {
      this.assetType = newType;
    }
    return this;
  }
  sign() {
    return this;
  }
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
  }
  validateAssetForURLCreation() {
    if (typeof this.cloudName === "undefined") {
      throw "You must supply a cloudName when initializing the asset";
    }
    const suffixContainsDot = this.suffix && this.suffix.indexOf(".") >= 0;
    const suffixContainsSlash = this.suffix && this.suffix.indexOf("/") >= 0;
    if (suffixContainsDot || suffixContainsSlash) {
      throw "`suffix`` should not include . or /";
    }
  }
  getResourceType() {
    const assetType = handleAssetType(this.assetType);
    const deliveryType = handleDeliveryType(this.deliveryType);
    const hasSuffix = !!this.suffix;
    const regularSEOType = `${assetType}/${deliveryType}`;
    const shortSEOType = SEO_TYPES[`${assetType}/${deliveryType}`];
    const useRootPath = this.urlConfig.useRootPath;
    const shorten = this.urlConfig.shorten;
    if (useRootPath) {
      if (regularSEOType === "image/upload") {
        return "";
      } else {
        throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${regularSEOType} instead`);
      }
    }
    if (shorten && regularSEOType === "image/upload") {
      return "iu";
    }
    if (hasSuffix) {
      if (shortSEOType) {
        return shortSEOType;
      } else {
        throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(", ")}, Provided: ${regularSEOType} instead`);
      }
    }
    return regularSEOType;
  }
  getSignature() {
    if (this.signature) {
      return `s--${this.signature}--`;
    } else {
      return "";
    }
  }
  createCloudinaryURL(transformation, trackedAnalytics) {
    if (!this.publicID) {
      return "";
    }
    this.validateAssetForURLCreation();
    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const transformationString = transformation ? transformation.toString() : "";
    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);
    const publicID = this.publicID.replace(/,/g, "%2C");
    const url = [prefix, this.getResourceType(), this.getSignature(), transformationString, version, publicID, this.suffix].filter((a3) => a3).join("/");
    if (typeof transformation === "string") {
      return url;
    } else {
      const safeURL = encodeURI(url).replace(/\?/g, "%3F").replace(/=/g, "%3D");
      if (this.urlConfig.analytics !== false && !publicID.includes("?")) {
        return `${safeURL}?_a=${getSDKAnalyticsSignature(trackedAnalytics)}`;
      } else {
        return safeURL;
      }
    }
  }
};

// node_modules/@cloudinary/url-gen/actions/delivery/DeliveryAction.js
var DeliveryAction = class extends Action {
  constructor(deliveryKey, deliveryType, modelProperty) {
    super();
    this._actionModel = {};
    let deliveryTypeValue;
    if (deliveryType instanceof FormatQualifier) {
      deliveryTypeValue = deliveryType.getValue();
    } else {
      deliveryTypeValue = deliveryType;
    }
    this._actionModel.actionType = DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
    this._actionModel[modelProperty] = deliveryTypeValue;
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
};

// node_modules/@cloudinary/url-gen/qualifiers/progressive.js
var ProgressiveQualifier = class extends FlagQualifier {
  constructor(mode2) {
    super("progressive", mode2);
  }
};

// node_modules/@cloudinary/url-gen/actions/delivery/DeliveryFormatAction.js
var DeliveryFormatAction = class extends DeliveryAction {
  constructor(deliveryKey, deliveryType) {
    super(deliveryKey, deliveryType, "formatType");
  }
  lossy() {
    this._actionModel.lossy = true;
    this.addFlag(lossy());
    return this;
  }
  progressive(mode2) {
    if (mode2 instanceof ProgressiveQualifier) {
      this._actionModel.progressive = { mode: mode2.getFlagValue() };
      this.addFlag(mode2);
    } else {
      this._actionModel.progressive = { mode: mode2 };
      this.addFlag(progressive(mode2));
    }
    return this;
  }
  preserveTransparency() {
    this._actionModel.preserveTransparency = true;
    this.addFlag(preserveTransparency());
    return this;
  }
  static fromJson(actionModel) {
    const { formatType, lossy: lossy2, progressive: progressive2, preserveTransparency: preserveTransparency2 } = actionModel;
    let result;
    if (formatType) {
      result = new this("f", formatType);
    } else {
      result = new this("f");
    }
    if (progressive2) {
      if (progressive2.mode) {
        result.progressive(progressive2.mode);
      } else {
        result.progressive();
      }
    }
    lossy2 && result.lossy();
    preserveTransparency2 && result.preserveTransparency();
    return result;
  }
};

// node_modules/@cloudinary/url-gen/assets/CloudinaryTransformable.js
var CloudinaryTransformable = class extends CloudinaryFile {
  constructor(publicID, cloudConfig, urlConfig, transformation) {
    super(publicID, cloudConfig, urlConfig);
    this.transformation = transformation;
  }
  animated(animated) {
    this.transformation.animated(animated);
    return this;
  }
  border(border) {
    this.transformation.border(border);
    return this;
  }
  reshape(reshape) {
    this.transformation.reshape(reshape);
    return this;
  }
  resize(resize) {
    this.transformation.resize(resize);
    return this;
  }
  quality(quality) {
    this.addAction(new DeliveryFormatAction("q", quality));
    return this;
  }
  format(format) {
    this.addAction(new DeliveryFormatAction("f", format));
    return this;
  }
  roundCorners(roundCorners) {
    this.transformation.roundCorners(roundCorners);
    return this;
  }
  overlay(overlayAction) {
    this.transformation.overlay(overlayAction);
    return this;
  }
  addVariable(variableAction) {
    this.transformation.addVariable(variableAction);
    return this;
  }
  conditional(conditionalAction) {
    this.transformation.conditional(conditionalAction);
    return this;
  }
  effect(effect) {
    this.transformation.effect(effect);
    return this;
  }
  adjust(action) {
    this.transformation.adjust(action);
    return this;
  }
  rotate(rotate) {
    this.transformation.rotate(rotate);
    return this;
  }
  namedTransformation(namedTransformation) {
    this.transformation.namedTransformation(namedTransformation);
    return this;
  }
  delivery(deliveryAction) {
    this.transformation.delivery(deliveryAction);
    return this;
  }
  backgroundColor(color) {
    this.transformation.backgroundColor(color);
    return this;
  }
  psdTools(action) {
    this.transformation.psdTools(action);
    return this;
  }
  extract(action) {
    this.transformation.extract(action);
    return this;
  }
  addFlag(flagQualifier) {
    this.transformation.addFlag(flagQualifier);
    return this;
  }
  customFunction(customFunction) {
    this.transformation.customFunction(customFunction);
    return this;
  }
  addAction(action) {
    this.transformation.addAction(action);
    return this;
  }
  addTransformation(tx) {
    this.transformation.addTransformation(tx);
    return this;
  }
  toString() {
    return this.transformation.toString();
  }
  underlay(underlayAction) {
    this.transformation.underlay(underlayAction);
    return this;
  }
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(this.transformation, overwriteOptions === null || overwriteOptions === void 0 ? void 0 : overwriteOptions.trackedAnalytics);
  }
};

// node_modules/@cloudinary/url-gen/assets/CloudinaryImage.js
var CloudinaryImage = class extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new ImageTransformation());
  }
};

// node_modules/@cloudinary/url-gen/assets/CloudinaryVideo.js
var CloudinaryVideo = class extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new VideoTransformation());
    this.assetType = "video";
  }
  transcode(action) {
    this.transformation.transcode(action);
    return this;
  }
  videoEdit(action) {
    this.transformation.videoEdit(action);
    return this;
  }
};

// node_modules/@cloudinary/url-gen/instance/Cloudinary.js
var Cloudinary = class {
  constructor(cloudinaryConfig) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }
  image(publicID) {
    return new CloudinaryImage(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  video(publicID) {
    return new CloudinaryVideo(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  setConfig(cloudinaryConfig) {
    this.cloudinaryConfig = cloudinaryConfig;
    return this;
  }
  getConfig() {
    return this.cloudinaryConfig;
  }
  extendConfig() {
  }
};

// node_modules/@cloudinary/url-gen/actions/roundCorners/RoundCornersAction.js
var RoundCornersAction = class extends Action {
  constructor() {
    super();
  }
  radius(a3, b2, c2, d2) {
    const qualifierValue = new QualifierValue();
    typeof a3 !== void 0 && qualifierValue.addValue(a3);
    typeof b2 !== void 0 && qualifierValue.addValue(b2);
    typeof c2 !== void 0 && qualifierValue.addValue(c2);
    typeof d2 !== void 0 && qualifierValue.addValue(d2);
    this.addQualifier(new Qualifier("r").addValue(qualifierValue));
    return this;
  }
  max() {
    return this.addQualifier(new Qualifier("r", "max"));
  }
};
var RoundCornersAction_default = RoundCornersAction;

// node_modules/@cloudinary/url-gen/actions/roundCorners.js
function max() {
  return new RoundCornersAction_default().max();
}

// node_modules/@cloudinary/url-gen/actions/effect/EffectActions/SimpleEffectAction.js
var SimpleEffectAction = class extends Action {
  constructor(effectType, level) {
    super();
    this._actionModel = {};
    this._actionModel.actionType = EFFECT_MODE_TO_ACTION_TYPE_MAP[effectType] || effectType;
    const qualifierEffect = this.createEffectQualifier(effectType, level);
    this.addQualifier(qualifierEffect);
  }
  createEffectQualifier(effectType, level) {
    let qualifierValue;
    if (level) {
      qualifierValue = new QualifierValue([effectType, `${level}`]).setDelimiter(":");
    } else {
      qualifierValue = new QualifierValue(effectType);
    }
    return new Qualifier("e", qualifierValue);
  }
  static fromJson(actionModel) {
    const { actionType, level, strength } = actionModel;
    const effectType = ACTION_TYPE_TO_EFFECT_MODE_MAP[actionType] || actionType;
    const result = new this(effectType, level ? level : strength);
    return result;
  }
};

// node_modules/@cloudinary/url-gen/actions/effect.js
function artisticFilter(artisticFilterType) {
  return new SimpleEffectAction("art", artisticFilterType);
}

// node_modules/@cloudinary/url-gen/actions/rotate/RotateAction.js
var QUALIFIER_KEY = "a";
var RotateAction = class extends Action {
  constructor(angle) {
    super();
    this.addQualifier(new Qualifier(QUALIFIER_KEY, angle));
  }
  mode(rotationMode) {
    return this.addValueToQualifier(QUALIFIER_KEY, rotationMode);
  }
  angle(degrees) {
    return this.addValueToQualifier(QUALIFIER_KEY, degrees);
  }
};
var RotateAction_default = RotateAction;

// node_modules/@cloudinary/url-gen/actions/rotate.js
function mode(rotationMode) {
  return new RotateAction_default().mode(rotationMode);
}

// node_modules/@cloudinary/url-gen/actions/adjust.js
function tint(value = "") {
  return new SimpleEffectAction("tint", value);
}

// src/common/helpers/imageHelpers.ts
var CloudinaryHelper = class {
  constructor() {
    this.flzImagesDomain = "images.folloze.com";
    this.cloudinaryImagesDomain = "res.cloudinary.com/folloze";
    this.cloudinaryUrlRegex = new RegExp(`(?:((http|https):)?)//(${this.flzImagesDomain}|${this.cloudinaryImagesDomain})/(image|video).(fetch|upload)/`);
    this.cloudinaryFetchUrlRegex = new RegExp(`(?:((http|https):)?)//(${this.flzImagesDomain}|${this.cloudinaryImagesDomain})/(image|video).(fetch)/`);
    this.cloudinary = new Cloudinary({
      cloud: {
        cloudName: "folloze"
      },
      url: {
        secureDistribution: this.flzImagesDomain,
        cname: this.flzImagesDomain,
        secure: true,
        privateCdn: true
      }
    });
  }
  getImage(image) {
    const cldImageId = this.getPublicId(image.url);
    return this.cloudinary.image(cldImageId);
  }
  getTransformedUrl(image, maxWidth, maxHeight, reOptimize = false) {
    var _a, _b, _c, _d, _e, _f;
    if (typeof image === "string") {
      image = {
        bankCategory: "banners",
        url: image
      };
    }
    if (image.optimized_url && !reOptimize) {
      return image.optimized_url;
    }
    if (!this.isCloudinaryImage(image.url)) {
      return image.url;
    }
    const isFetch = this.cloudinaryFetchUrlRegex.test(image.url);
    if (isFetch) {
      const urlParts = image.url.split(this.cloudinaryFetchUrlRegex);
      const originalUrl = urlParts[urlParts.length - 1];
      image.url = image.url.replace(originalUrl, encodeURIComponent(originalUrl));
    }
    const cldImage = this.getImage(image);
    if ((_a = image.transformation) == null ? void 0 : _a.crop) {
      const { x: x2, y: y2, width, height, aspect, radius } = image.transformation.crop;
      const cropTransformation = crop();
      width && cropTransformation.width(width);
      height && cropTransformation.height(height);
      x2 && cropTransformation.x(x2);
      y2 && cropTransformation.y(y2);
      aspect && cropTransformation.aspectRatio(aspect);
      cldImage.resize(cropTransformation);
      radius == "max" && cldImage.roundCorners(max());
    }
    if (maxWidth || maxHeight) {
      const sizeTransformation = fill();
      maxWidth && sizeTransformation.width(maxWidth);
      maxHeight && sizeTransformation.height(maxHeight);
      cldImage.resize(sizeTransformation);
    }
    if ((_b = image.transformation) == null ? void 0 : _b.flipY) {
      cldImage.rotate(mode(verticalFlip()));
    }
    if ((_c = image.transformation) == null ? void 0 : _c.flipX) {
      cldImage.rotate(mode(horizontalFlip()));
    }
    if ((_d = image.transformation) == null ? void 0 : _d.artisticFilter) {
      cldImage.effect(artisticFilter(image.transformation.artisticFilter));
    }
    if ((_f = (_e = image.transformation) == null ? void 0 : _e.tint) == null ? void 0 : _f.color) {
      const tintTransformation = `${image.transformation.tint.alpha}:${image.transformation.tint.color.substring(1)}`;
      cldImage.effect(tint(tintTransformation));
    }
    cldImage.format("auto").quality("auto");
    let imageUrl = cldImage.toURL();
    if (isFetch) {
      imageUrl = imageUrl.replace("/upload/", "/fetch/");
    }
    return imageUrl;
  }
  getPublicId(url) {
    const publicId = url.replace(this.cloudinaryUrlRegex, "");
    return publicId.split("?")[0];
  }
  isCloudinaryImage(url) {
    return url.startsWith(`https://${this.flzImagesDomain}`);
  }
};

export {
  LiveDraggable,
  FLZ_DESIGNER_EVENT_TYPE,
  FlzEvent,
  FlzBoardEvent,
  FlzDesignerEvent,
  widgetEmit,
  editorEmit,
  componentEmit,
  widgetEmitPromise,
  editorEmitPromise,
  emit,
  waitForEvent,
  LiveWidget,
  LiveWidgetEdit,
  LiveWidgetComponentEdit,
  LiveWidgetComponentPersonalization,
  makeDragElement,
  FloatEditor,
  CloudinaryHelper
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
