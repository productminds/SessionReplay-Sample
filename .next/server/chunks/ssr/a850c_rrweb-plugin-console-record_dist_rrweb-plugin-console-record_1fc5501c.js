module.exports = {

"[project]/node_modules/@amplitude/rrweb-plugin-console-record/dist/rrweb-plugin-console-record.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PLUGIN_NAME": (()=>PLUGIN_NAME),
    "getRecordConsolePlugin": (()=>getRecordConsolePlugin)
});
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value)=>key in obj ? __defProp2(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField2 = (obj, key, value)=>__defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value)=>key in obj ? __defProp$1(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField$1 = (obj, key, value)=>__defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
const testableAccessors$1 = {
    Node: [
        "childNodes",
        "parentNode",
        "parentElement",
        "textContent"
    ],
    ShadowRoot: [
        "host",
        "styleSheets"
    ],
    Element: [
        "shadowRoot",
        "querySelector",
        "querySelectorAll"
    ],
    MutationObserver: []
};
const testableMethods$1 = {
    Node: [
        "contains",
        "getRootNode"
    ],
    ShadowRoot: [
        "getSelection"
    ],
    Element: [],
    MutationObserver: [
        "constructor"
    ]
};
const untaintedBasePrototype$1 = {};
const isAngularZonePresent$1 = ()=>{
    return !!globalThis.Zone;
};
function getUntaintedPrototype$1(key) {
    if (untaintedBasePrototype$1[key]) return untaintedBasePrototype$1[key];
    const defaultObj = globalThis[key];
    const defaultPrototype = defaultObj.prototype;
    const accessorNames = key in testableAccessors$1 ? testableAccessors$1[key] : void 0;
    const isUntaintedAccessors = Boolean(accessorNames && // @ts-expect-error 2345
    accessorNames.every((accessor)=>{
        var _a2, _b;
        return Boolean((_b = (_a2 = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a2.get) == null ? void 0 : _b.toString().includes("[native code]"));
    }));
    const methodNames = key in testableMethods$1 ? testableMethods$1[key] : void 0;
    const isUntaintedMethods = Boolean(methodNames && methodNames.every(// @ts-expect-error 2345
    (method)=>{
        var _a2;
        return typeof defaultPrototype[method] === "function" && ((_a2 = defaultPrototype[method]) == null ? void 0 : _a2.toString().includes("[native code]"));
    }));
    if (isUntaintedAccessors && isUntaintedMethods && !isAngularZonePresent$1()) {
        untaintedBasePrototype$1[key] = defaultObj.prototype;
        return defaultObj.prototype;
    }
    try {
        const iframeEl = document.createElement("iframe");
        document.body.appendChild(iframeEl);
        const win = iframeEl.contentWindow;
        if (!win) return defaultObj.prototype;
        const untaintedObject = win[key].prototype;
        document.body.removeChild(iframeEl);
        if (!untaintedObject) return defaultPrototype;
        return untaintedBasePrototype$1[key] = untaintedObject;
    } catch  {
        return defaultPrototype;
    }
}
const untaintedAccessorCache$1 = {};
function getUntaintedAccessor$1(key, instance, accessor) {
    var _a2;
    const cacheKey = `${key}.${String(accessor)}`;
    if (untaintedAccessorCache$1[cacheKey]) return untaintedAccessorCache$1[cacheKey].call(instance);
    const untaintedPrototype = getUntaintedPrototype$1(key);
    const untaintedAccessor = (_a2 = Object.getOwnPropertyDescriptor(untaintedPrototype, accessor)) == null ? void 0 : _a2.get;
    if (!untaintedAccessor) return instance[accessor];
    untaintedAccessorCache$1[cacheKey] = untaintedAccessor;
    return untaintedAccessor.call(instance);
}
const untaintedMethodCache$1 = {};
function getUntaintedMethod$1(key, instance, method) {
    const cacheKey = `${key}.${String(method)}`;
    if (untaintedMethodCache$1[cacheKey]) return untaintedMethodCache$1[cacheKey].bind(instance);
    const untaintedPrototype = getUntaintedPrototype$1(key);
    const untaintedMethod = untaintedPrototype[method];
    if (typeof untaintedMethod !== "function") return instance[method];
    untaintedMethodCache$1[cacheKey] = untaintedMethod;
    return untaintedMethod.bind(instance);
}
function childNodes$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "childNodes");
}
function parentNode$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "parentNode");
}
function parentElement$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "parentElement");
}
function textContent$1(n2) {
    return getUntaintedAccessor$1("Node", n2, "textContent");
}
function contains$1(n2, other) {
    return getUntaintedMethod$1("Node", n2, "contains")(other);
}
function getRootNode$1(n2) {
    return getUntaintedMethod$1("Node", n2, "getRootNode")();
}
function host$1(n2) {
    if (!n2 || !("host" in n2)) return null;
    return getUntaintedAccessor$1("ShadowRoot", n2, "host");
}
function styleSheets$1(n2) {
    return n2.styleSheets;
}
function shadowRoot$1(n2) {
    if (!n2 || !("shadowRoot" in n2)) return null;
    return getUntaintedAccessor$1("Element", n2, "shadowRoot");
}
function querySelector$1(n2, selectors) {
    return getUntaintedAccessor$1("Element", n2, "querySelector")(selectors);
}
function querySelectorAll$1(n2, selectors) {
    return getUntaintedAccessor$1("Element", n2, "querySelectorAll")(selectors);
}
function mutationObserverCtor$1() {
    return getUntaintedPrototype$1("MutationObserver").constructor;
}
const index$1 = {
    childNodes: childNodes$1,
    parentNode: parentNode$1,
    parentElement: parentElement$1,
    textContent: textContent$1,
    contains: contains$1,
    getRootNode: getRootNode$1,
    host: host$1,
    styleSheets: styleSheets$1,
    shadowRoot: shadowRoot$1,
    querySelector: querySelector$1,
    querySelectorAll: querySelectorAll$1,
    mutationObserver: mutationObserverCtor$1
};
function isShadowRoot(n2) {
    const hostEl = // anchor and textarea elements also have a `host` property
    // but only shadow roots have a `mode` property
    n2 && "host" in n2 && "mode" in n2 && index$1.host(n2) || null;
    return Boolean(hostEl && "shadowRoot" in hostEl && index$1.shadowRoot(hostEl) === n2);
}
class Mirror {
    constructor(){
        __publicField$1(this, "idNodeMap", /* @__PURE__ */ new Map());
        __publicField$1(this, "nodeMetaMap", /* @__PURE__ */ new WeakMap());
    }
    getId(n2) {
        var _a2;
        if (!n2) return -1;
        const id = (_a2 = this.getMeta(n2)) == null ? void 0 : _a2.id;
        return id ?? -1;
    }
    getNode(id) {
        return this.idNodeMap.get(id) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(n2) {
        return this.nodeMetaMap.get(n2) || null;
    }
    // removes the node from idNodeMap
    // doesn't remove the node from nodeMetaMap
    removeNodeFromMap(n2) {
        const id = this.getId(n2);
        this.idNodeMap.delete(id);
        if (n2.childNodes) {
            n2.childNodes.forEach((childNode)=>this.removeNodeFromMap(childNode));
        }
    }
    has(id) {
        return this.idNodeMap.has(id);
    }
    hasNode(node2) {
        return this.nodeMetaMap.has(node2);
    }
    add(n2, meta) {
        const id = meta.id;
        this.idNodeMap.set(id, n2);
        this.nodeMetaMap.set(n2, meta);
    }
    replace(id, n2) {
        const oldNode = this.getNode(id);
        if (oldNode) {
            const meta = this.nodeMetaMap.get(oldNode);
            if (meta) this.nodeMetaMap.set(n2, meta);
        }
        this.idNodeMap.set(id, n2);
    }
    reset() {
        this.idNodeMap = /* @__PURE__ */ new Map();
        this.nodeMetaMap = /* @__PURE__ */ new WeakMap();
    }
}
function createMirror$2() {
    return new Mirror();
}
const IGNORED_NODE = -2;
function classMatchesRegex(node2, regex, checkAncestors) {
    if (!node2) return false;
    if (node2.nodeType !== node2.ELEMENT_NODE) {
        if (!checkAncestors) return false;
        return classMatchesRegex(index$1.parentNode(node2), regex, checkAncestors);
    }
    for(let eIndex = node2.classList.length; eIndex--;){
        const className = node2.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    if (!checkAncestors) return false;
    return classMatchesRegex(index$1.parentNode(node2), regex, checkAncestors);
}
function getDefaultExportFromCjs$1(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace$1(n2) {
    if (n2.__esModule) return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
        var a2 = function a22() {
            if (this instanceof a22) {
                return Reflect.construct(f2, arguments, this.constructor);
            }
            return f2.apply(this, arguments);
        };
        a2.prototype = f2.prototype;
    } else a2 = {};
    Object.defineProperty(a2, "__esModule", {
        value: true
    });
    Object.keys(n2).forEach(function(k) {
        var d = Object.getOwnPropertyDescriptor(n2, k);
        Object.defineProperty(a2, k, d.get ? d : {
            enumerable: true,
            get: function() {
                return n2[k];
            }
        });
    });
    return a2;
}
var picocolors_browser$1 = {
    exports: {}
};
var x$1 = String;
var create$1 = function() {
    return {
        isColorSupported: false,
        reset: x$1,
        bold: x$1,
        dim: x$1,
        italic: x$1,
        underline: x$1,
        inverse: x$1,
        hidden: x$1,
        strikethrough: x$1,
        black: x$1,
        red: x$1,
        green: x$1,
        yellow: x$1,
        blue: x$1,
        magenta: x$1,
        cyan: x$1,
        white: x$1,
        gray: x$1,
        bgBlack: x$1,
        bgRed: x$1,
        bgGreen: x$1,
        bgYellow: x$1,
        bgBlue: x$1,
        bgMagenta: x$1,
        bgCyan: x$1,
        bgWhite: x$1
    };
};
picocolors_browser$1.exports = create$1();
picocolors_browser$1.exports.createColors = create$1;
var picocolors_browserExports$1 = picocolors_browser$1.exports;
const __viteBrowserExternal$2 = {};
const __viteBrowserExternal$1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal$2
}, Symbol.toStringTag, {
    value: "Module"
}));
const require$$2$1 = /* @__PURE__ */ getAugmentedNamespace$1(__viteBrowserExternal$1$1);
let pico$1 = picocolors_browserExports$1;
let terminalHighlight$1$1 = require$$2$1;
let CssSyntaxError$3$1 = class CssSyntaxError extends Error {
    constructor(message, line, column, source, file, plugin22){
        super(message);
        this.name = "CssSyntaxError";
        this.reason = message;
        if (file) {
            this.file = file;
        }
        if (source) {
            this.source = source;
        }
        if (plugin22) {
            this.plugin = plugin22;
        }
        if (typeof line !== "undefined" && typeof column !== "undefined") {
            if (typeof line === "number") {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError);
        }
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        if (typeof this.line !== "undefined") {
            this.message += ":" + this.line + ":" + this.column;
        }
        this.message += ": " + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return "";
        let css = this.source;
        if (color == null) color = pico$1.isColorSupported;
        if (terminalHighlight$1$1) {
            if (color) css = terminalHighlight$1$1(css);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        let mark, aside;
        if (color) {
            let { bold, gray, red } = pico$1.createColors(true);
            mark = (text)=>bold(red(text));
            aside = (text)=>gray(text);
        } else {
            mark = aside = (str)=>str;
        }
        return lines.slice(start, end).map((line, index2)=>{
            let number = start + 1 + index2;
            let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
            if (number === this.line) {
                let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
            }
            return " " + aside(gutter) + line;
        }).join("\n");
    }
    toString() {
        let code = this.showSourceCode();
        if (code) {
            code = "\n\n" + code + "\n";
        }
        return this.name + ": " + this.message + code;
    }
};
var cssSyntaxError$1 = CssSyntaxError$3$1;
CssSyntaxError$3$1.default = CssSyntaxError$3$1;
var symbols$1 = {};
symbols$1.isClean = Symbol("isClean");
symbols$1.my = Symbol("my");
const DEFAULT_RAW$1 = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: false
};
function capitalize$1(str) {
    return str[0].toUpperCase() + str.slice(1);
}
let Stringifier$2$1 = class Stringifier {
    constructor(builder){
        this.builder = builder;
    }
    atrule(node2, semicolon) {
        let name = "@" + node2.name;
        let params = node2.params ? this.rawValue(node2, "params") : "";
        if (typeof node2.raws.afterName !== "undefined") {
            name += node2.raws.afterName;
        } else if (params) {
            name += " ";
        }
        if (node2.nodes) {
            this.block(node2, name + params);
        } else {
            let end = (node2.raws.between || "") + (semicolon ? ";" : "");
            this.builder(name + params + end, node2);
        }
    }
    beforeAfter(node2, detect) {
        let value;
        if (node2.type === "decl") {
            value = this.raw(node2, null, "beforeDecl");
        } else if (node2.type === "comment") {
            value = this.raw(node2, null, "beforeComment");
        } else if (detect === "before") {
            value = this.raw(node2, null, "beforeRule");
        } else {
            value = this.raw(node2, null, "beforeClose");
        }
        let buf = node2.parent;
        let depth = 0;
        while(buf && buf.type !== "root"){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes("\n")) {
            let indent = this.raw(node2, null, "indent");
            if (indent.length) {
                for(let step = 0; step < depth; step++)value += indent;
            }
        }
        return value;
    }
    block(node2, start) {
        let between = this.raw(node2, "between", "beforeOpen");
        this.builder(start + between + "{", node2, "start");
        let after;
        if (node2.nodes && node2.nodes.length) {
            this.body(node2);
            after = this.raw(node2, "after");
        } else {
            after = this.raw(node2, "after", "emptyBody");
        }
        if (after) this.builder(after);
        this.builder("}", node2, "end");
    }
    body(node2) {
        let last = node2.nodes.length - 1;
        while(last > 0){
            if (node2.nodes[last].type !== "comment") break;
            last -= 1;
        }
        let semicolon = this.raw(node2, "semicolon");
        for(let i2 = 0; i2 < node2.nodes.length; i2++){
            let child = node2.nodes[i2];
            let before = this.raw(child, "before");
            if (before) this.builder(before);
            this.stringify(child, last !== i2 || semicolon);
        }
    }
    comment(node2) {
        let left = this.raw(node2, "left", "commentLeft");
        let right = this.raw(node2, "right", "commentRight");
        this.builder("/*" + left + node2.text + right + "*/", node2);
    }
    decl(node2, semicolon) {
        let between = this.raw(node2, "between", "colon");
        let string = node2.prop + between + this.rawValue(node2, "value");
        if (node2.important) {
            string += node2.raws.important || " !important";
        }
        if (semicolon) string += ";";
        this.builder(string, node2);
    }
    document(node2) {
        this.body(node2);
    }
    raw(node2, own, detect) {
        let value;
        if (!detect) detect = own;
        if (own) {
            value = node2.raws[own];
            if (typeof value !== "undefined") return value;
        }
        let parent = node2.parent;
        if (detect === "before") {
            if (!parent || parent.type === "root" && parent.first === node2) {
                return "";
            }
            if (parent && parent.type === "document") {
                return "";
            }
        }
        if (!parent) return DEFAULT_RAW$1[detect];
        let root2 = node2.root();
        if (!root2.rawCache) root2.rawCache = {};
        if (typeof root2.rawCache[detect] !== "undefined") {
            return root2.rawCache[detect];
        }
        if (detect === "before" || detect === "after") {
            return this.beforeAfter(node2, detect);
        } else {
            let method = "raw" + capitalize$1(detect);
            if (this[method]) {
                value = this[method](root2, node2);
            } else {
                root2.walk((i2)=>{
                    value = i2.raws[own];
                    if (typeof value !== "undefined") return false;
                });
            }
        }
        if (typeof value === "undefined") value = DEFAULT_RAW$1[detect];
        root2.rawCache[detect] = value;
        return value;
    }
    rawBeforeClose(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && i2.nodes.length > 0) {
                if (typeof i2.raws.after !== "undefined") {
                    value = i2.raws.after;
                    if (value.includes("\n")) {
                        value = value.replace(/[^\n]+$/, "");
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeComment(root2, node2) {
        let value;
        root2.walkComments((i2)=>{
            if (typeof i2.raws.before !== "undefined") {
                value = i2.raws.before;
                if (value.includes("\n")) {
                    value = value.replace(/[^\n]+$/, "");
                }
                return false;
            }
        });
        if (typeof value === "undefined") {
            value = this.raw(node2, null, "beforeDecl");
        } else if (value) {
            value = value.replace(/\S/g, "");
        }
        return value;
    }
    rawBeforeDecl(root2, node2) {
        let value;
        root2.walkDecls((i2)=>{
            if (typeof i2.raws.before !== "undefined") {
                value = i2.raws.before;
                if (value.includes("\n")) {
                    value = value.replace(/[^\n]+$/, "");
                }
                return false;
            }
        });
        if (typeof value === "undefined") {
            value = this.raw(node2, null, "beforeRule");
        } else if (value) {
            value = value.replace(/\S/g, "");
        }
        return value;
    }
    rawBeforeOpen(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.type !== "decl") {
                value = i2.raws.between;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawBeforeRule(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && (i2.parent !== root2 || root2.first !== i2)) {
                if (typeof i2.raws.before !== "undefined") {
                    value = i2.raws.before;
                    if (value.includes("\n")) {
                        value = value.replace(/[^\n]+$/, "");
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawColon(root2) {
        let value;
        root2.walkDecls((i2)=>{
            if (typeof i2.raws.between !== "undefined") {
                value = i2.raws.between.replace(/[^\s:]/g, "");
                return false;
            }
        });
        return value;
    }
    rawEmptyBody(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && i2.nodes.length === 0) {
                value = i2.raws.after;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawIndent(root2) {
        if (root2.raws.indent) return root2.raws.indent;
        let value;
        root2.walk((i2)=>{
            let p = i2.parent;
            if (p && p !== root2 && p.parent && p.parent === root2) {
                if (typeof i2.raws.before !== "undefined") {
                    let parts = i2.raws.before.split("\n");
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, "");
                    return false;
                }
            }
        });
        return value;
    }
    rawSemicolon(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && i2.nodes.length && i2.last.type === "decl") {
                value = i2.raws.semicolon;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawValue(node2, prop) {
        let value = node2[prop];
        let raw = node2.raws[prop];
        if (raw && raw.value === value) {
            return raw.raw;
        }
        return value;
    }
    root(node2) {
        this.body(node2);
        if (node2.raws.after) this.builder(node2.raws.after);
    }
    rule(node2) {
        this.block(node2, this.rawValue(node2, "selector"));
        if (node2.raws.ownSemicolon) {
            this.builder(node2.raws.ownSemicolon, node2, "end");
        }
    }
    stringify(node2, semicolon) {
        if (!this[node2.type]) {
            throw new Error("Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier.");
        }
        this[node2.type](node2, semicolon);
    }
};
var stringifier$1 = Stringifier$2$1;
Stringifier$2$1.default = Stringifier$2$1;
let Stringifier$1$1 = stringifier$1;
function stringify$4$1(node2, builder) {
    let str = new Stringifier$1$1(builder);
    str.stringify(node2);
}
var stringify_1$1 = stringify$4$1;
stringify$4$1.default = stringify$4$1;
let { isClean: isClean$2$1, my: my$2$1 } = symbols$1;
let CssSyntaxError$2$1 = cssSyntaxError$1;
let Stringifier2$1 = stringifier$1;
let stringify$3$1 = stringify_1$1;
function cloneNode$1(obj, parent) {
    let cloned = new obj.constructor();
    for(let i2 in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i2)) {
            continue;
        }
        if (i2 === "proxyCache") continue;
        let value = obj[i2];
        let type = typeof value;
        if (i2 === "parent" && type === "object") {
            if (parent) cloned[i2] = parent;
        } else if (i2 === "source") {
            cloned[i2] = value;
        } else if (Array.isArray(value)) {
            cloned[i2] = value.map((j)=>cloneNode$1(j, cloned));
        } else {
            if (type === "object" && value !== null) value = cloneNode$1(value);
            cloned[i2] = value;
        }
    }
    return cloned;
}
let Node$4$1 = class Node2 {
    constructor(defaults = {}){
        this.raws = {};
        this[isClean$2$1] = false;
        this[my$2$1] = true;
        for(let name in defaults){
            if (name === "nodes") {
                this.nodes = [];
                for (let node2 of defaults[name]){
                    if (typeof node2.clone === "function") {
                        this.append(node2.clone());
                    } else {
                        this.append(node2);
                    }
                }
            } else {
                this[name] = defaults[name];
            }
        }
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s2 = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s2.input.from}:${s2.start.line}:${s2.start.column}$&`);
        }
        return error;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    assign(overrides = {}) {
        for(let name in overrides){
            this[name] = overrides[name];
        }
        return this;
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
        let cloned = cloneNode$1(this);
        for(let name in overrides){
            cloned[name] = overrides[name];
        }
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    error(message, opts = {}) {
        if (this.source) {
            let { end, start } = this.rangeBy(opts);
            return this.source.input.error(message, {
                column: start.column,
                line: start.line
            }, {
                column: end.column,
                line: end.line
            }, opts);
        }
        return new CssSyntaxError$2$1(message);
    }
    getProxyProcessor() {
        return {
            get (node2, prop) {
                if (prop === "proxyOf") {
                    return node2;
                } else if (prop === "root") {
                    return ()=>node2.root().toProxy();
                } else {
                    return node2[prop];
                }
            },
            set (node2, prop, value) {
                if (node2[prop] === value) return true;
                node2[prop] = value;
                if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */ prop === "text") {
                    node2.markDirty();
                }
                return true;
            }
        };
    }
    markDirty() {
        if (this[isClean$2$1]) {
            this[isClean$2$1] = false;
            let next = this;
            while(next = next.parent){
                next[isClean$2$1] = false;
            }
        }
    }
    next() {
        if (!this.parent) return void 0;
        let index2 = this.parent.index(this);
        return this.parent.nodes[index2 + 1];
    }
    positionBy(opts, stringRepresentation) {
        let pos = this.source.start;
        if (opts.index) {
            pos = this.positionInside(opts.index, stringRepresentation);
        } else if (opts.word) {
            stringRepresentation = this.toString();
            let index2 = stringRepresentation.indexOf(opts.word);
            if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
        }
        return pos;
    }
    positionInside(index2, stringRepresentation) {
        let string = stringRepresentation || this.toString();
        let column = this.source.start.column;
        let line = this.source.start.line;
        for(let i2 = 0; i2 < index2; i2++){
            if (string[i2] === "\n") {
                column = 1;
                line += 1;
            } else {
                column += 1;
            }
        }
        return {
            column,
            line
        };
    }
    prev() {
        if (!this.parent) return void 0;
        let index2 = this.parent.index(this);
        return this.parent.nodes[index2 - 1];
    }
    rangeBy(opts) {
        let start = {
            column: this.source.start.column,
            line: this.source.start.line
        };
        let end = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
        } : {
            column: start.column + 1,
            line: start.line
        };
        if (opts.word) {
            let stringRepresentation = this.toString();
            let index2 = stringRepresentation.indexOf(opts.word);
            if (index2 !== -1) {
                start = this.positionInside(index2, stringRepresentation);
                end = this.positionInside(index2 + opts.word.length, stringRepresentation);
            }
        } else {
            if (opts.start) {
                start = {
                    column: opts.start.column,
                    line: opts.start.line
                };
            } else if (opts.index) {
                start = this.positionInside(opts.index);
            }
            if (opts.end) {
                end = {
                    column: opts.end.column,
                    line: opts.end.line
                };
            } else if (typeof opts.endIndex === "number") {
                end = this.positionInside(opts.endIndex);
            } else if (opts.index) {
                end = this.positionInside(opts.index + 1);
            }
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) {
            end = {
                column: start.column + 1,
                line: start.line
            };
        }
        return {
            end,
            start
        };
    }
    raw(prop, defaultType) {
        let str = new Stringifier2$1();
        return str.raw(this, prop, defaultType);
    }
    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.parent = void 0;
        return this;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node2 of nodes){
                if (node2 === this) {
                    foundSelf = true;
                } else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node2);
                    bookmark = node2;
                } else {
                    this.parent.insertBefore(bookmark, node2);
                }
            }
            if (!foundSelf) {
                this.remove();
            }
        }
        return this;
    }
    root() {
        let result2 = this;
        while(result2.parent && result2.parent.type !== "document"){
            result2 = result2.parent;
        }
        return result2;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || /* @__PURE__ */ new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) {
                continue;
            }
            if (name === "parent" || name === "proxyCache") continue;
            let value = this[name];
            if (Array.isArray(value)) {
                fixed[name] = value.map((i2)=>{
                    if (typeof i2 === "object" && i2.toJSON) {
                        return i2.toJSON(null, inputs);
                    } else {
                        return i2;
                    }
                });
            } else if (typeof value === "object" && value.toJSON) {
                fixed[name] = value.toJSON(null, inputs);
            } else if (name === "source") {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    end: value.end,
                    inputId,
                    start: value.start
                };
            } else {
                fixed[name] = value;
            }
        }
        if (emitInputs) {
            fixed.inputs = [
                ...inputs.keys()
            ].map((input2)=>input2.toJSON());
        }
        return fixed;
    }
    toProxy() {
        if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
        }
        return this.proxyCache;
    }
    toString(stringifier2 = stringify$3$1) {
        if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
        let result2 = "";
        stringifier2(this, (i2)=>{
            result2 += i2;
        });
        return result2;
    }
    warn(result2, text, opts) {
        let data = {
            node: this
        };
        for(let i2 in opts)data[i2] = opts[i2];
        return result2.warn(text, data);
    }
    get proxyOf() {
        return this;
    }
};
var node$1 = Node$4$1;
Node$4$1.default = Node$4$1;
let Node$3$1 = node$1;
let Declaration$4$1 = class Declaration extends Node$3$1 {
    constructor(defaults){
        if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
            defaults = {
                ...defaults,
                value: String(defaults.value)
            };
        }
        super(defaults);
        this.type = "decl";
    }
    get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
    }
};
var declaration$1 = Declaration$4$1;
Declaration$4$1.default = Declaration$4$1;
let urlAlphabet$1 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet$1 = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = "";
        let i2 = size;
        while(i2--){
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid$1$1 = (size = 21)=>{
    let id = "";
    let i2 = size;
    while(i2--){
        id += urlAlphabet$1[Math.random() * 64 | 0];
    }
    return id;
};
var nonSecure$1 = {
    nanoid: nanoid$1$1,
    customAlphabet: customAlphabet$1
};
let { SourceMapConsumer: SourceMapConsumer$2$1, SourceMapGenerator: SourceMapGenerator$2$1 } = require$$2$1;
let { existsSync: existsSync$1, readFileSync: readFileSync$1 } = require$$2$1;
let { dirname: dirname$1$1, join: join$1 } = require$$2$1;
function fromBase64$1(str) {
    if ("TURBOPACK compile-time truthy", 1) {
        return Buffer.from(str, "base64").toString();
    } else {
        "TURBOPACK unreachable";
    }
}
let PreviousMap$2$1 = class PreviousMap {
    constructor(css, opts){
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, "data:");
        let prev = opts.map ? opts.map.prev : void 0;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) {
            this.mapFile = opts.from;
        }
        if (this.mapFile) this.root = dirname$1$1(this.mapFile);
        if (text) this.text = text;
    }
    consumer() {
        if (!this.consumerCache) {
            this.consumerCache = new SourceMapConsumer$2$1(this.text);
        }
        return this.consumerCache;
    }
    decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        if (charsetUri.test(text) || uri.test(text)) {
            return decodeURIComponent(text.substr(RegExp.lastMatch.length));
        }
        if (baseCharsetUri.test(text) || baseUri.test(text)) {
            return fromBase64$1(text.substr(RegExp.lastMatch.length));
        }
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + encoding);
    }
    getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(map) {
        if (typeof map !== "object") return false;
        return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
    }
    loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!comments) return;
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf("*/", start);
        if (start > -1 && end > -1) {
            this.annotation = this.getAnnotationURL(css.substring(start, end));
        }
    }
    loadFile(path) {
        this.root = dirname$1$1(path);
        if (existsSync$1(path)) {
            this.mapFile = path;
            return readFileSync$1(path, "utf-8").toString().trim();
        }
    }
    loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
            if (typeof prev === "string") {
                return prev;
            } else if (typeof prev === "function") {
                let prevPath = prev(file);
                if (prevPath) {
                    let map = this.loadFile(prevPath);
                    if (!map) {
                        throw new Error("Unable to load previous source map: " + prevPath.toString());
                    }
                    return map;
                }
            } else if (prev instanceof SourceMapConsumer$2$1) {
                return SourceMapGenerator$2$1.fromSourceMap(prev).toString();
            } else if (prev instanceof SourceMapGenerator$2$1) {
                return prev.toString();
            } else if (this.isMap(prev)) {
                return JSON.stringify(prev);
            } else {
                throw new Error("Unsupported previous source map format: " + prev.toString());
            }
        } else if (this.inline) {
            return this.decodeInline(this.annotation);
        } else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join$1(dirname$1$1(file), map);
            return this.loadFile(map);
        }
    }
    startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
};
var previousMap$1 = PreviousMap$2$1;
PreviousMap$2$1.default = PreviousMap$2$1;
let { SourceMapConsumer: SourceMapConsumer$1$1, SourceMapGenerator: SourceMapGenerator$1$1 } = require$$2$1;
let { fileURLToPath: fileURLToPath$1, pathToFileURL: pathToFileURL$1$1 } = require$$2$1;
let { isAbsolute: isAbsolute$1, resolve: resolve$1$1 } = require$$2$1;
let { nanoid: nanoid$2 } = nonSecure$1;
let terminalHighlight$2 = require$$2$1;
let CssSyntaxError$1$1 = cssSyntaxError$1;
let PreviousMap$1$1 = previousMap$1;
let fromOffsetCache$1 = Symbol("fromOffsetCache");
let sourceMapAvailable$1$1 = Boolean(SourceMapConsumer$1$1 && SourceMapGenerator$1$1);
let pathAvailable$1$1 = Boolean(resolve$1$1 && isAbsolute$1);
let Input$4$1 = class Input {
    constructor(css, opts = {}){
        if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
            throw new Error(`PostCSS received ${css} instead of CSS string`);
        }
        this.css = css.toString();
        if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else {
            this.hasBOM = false;
        }
        if (opts.from) {
            if (!pathAvailable$1$1 || /^\w+:\/\//.test(opts.from) || isAbsolute$1(opts.from)) {
                this.file = opts.from;
            } else {
                this.file = resolve$1$1(opts.from);
            }
        }
        if (pathAvailable$1$1 && sourceMapAvailable$1$1) {
            let map = new PreviousMap$1$1(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) {
            this.id = "<input css " + nanoid$2(6) + ">";
        }
        if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
        let result2, endLine, endColumn;
        if (line && typeof line === "object") {
            let start = line;
            let end = column;
            if (typeof start.offset === "number") {
                let pos = this.fromOffset(start.offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
            }
            if (typeof end.offset === "number") {
                let pos = this.fromOffset(end.offset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
            }
        } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) {
            result2 = new CssSyntaxError$1$1(message, origin.endLine === void 0 ? origin.line : {
                column: origin.column,
                line: origin.line
            }, origin.endLine === void 0 ? origin.column : {
                column: origin.endColumn,
                line: origin.endLine
            }, origin.source, origin.file, opts.plugin);
        } else {
            result2 = new CssSyntaxError$1$1(message, endLine === void 0 ? line : {
                column,
                line
            }, endLine === void 0 ? column : {
                column: endColumn,
                line: endLine
            }, this.css, this.file, opts.plugin);
        }
        result2.input = {
            column,
            endColumn,
            endLine,
            line,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL$1$1) {
                result2.input.url = pathToFileURL$1$1(this.file).toString();
            }
            result2.input.file = this.file;
        }
        return result2;
    }
    fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache$1]) {
            let lines = this.css.split("\n");
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for(let i2 = 0, l2 = lines.length; i2 < l2; i2++){
                lineToIndex[i2] = prevIndex;
                prevIndex += lines[i2].length + 1;
            }
            this[fromOffsetCache$1] = lineToIndex;
        } else {
            lineToIndex = this[fromOffsetCache$1];
        }
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) {
            min = lineToIndex.length - 1;
        } else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) {
                    max = mid - 1;
                } else if (offset >= lineToIndex[mid + 1]) {
                    min = mid + 1;
                } else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            col: offset - lineToIndex[min] + 1,
            line: min + 1
        };
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) {
            return file;
        }
        return resolve$1$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            column,
            line
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === "number") {
            to = consumer.originalPositionFor({
                column: endColumn,
                line: endLine
            });
        }
        let fromUrl;
        if (isAbsolute$1(from.source)) {
            fromUrl = pathToFileURL$1$1(from.source);
        } else {
            fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL$1$1(this.map.mapFile));
        }
        let result2 = {
            column: from.column,
            endColumn: to && to.column,
            endLine: to && to.line,
            line: from.line,
            url: fromUrl.toString()
        };
        if (fromUrl.protocol === "file:") {
            if (fileURLToPath$1) {
                result2.file = fileURLToPath$1(fromUrl);
            } else {
                throw new Error(`file: protocol is not available in this PostCSS build`);
            }
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result2.source = source;
        return result2;
    }
    toJSON() {
        let json = {};
        for (let name of [
            "hasBOM",
            "css",
            "file",
            "id"
        ]){
            if (this[name] != null) {
                json[name] = this[name];
            }
        }
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) {
                json.map.consumerCache = void 0;
            }
        }
        return json;
    }
    get from() {
        return this.file || this.id;
    }
};
var input$1 = Input$4$1;
Input$4$1.default = Input$4$1;
if (terminalHighlight$2 && terminalHighlight$2.registerInput) {
    terminalHighlight$2.registerInput(Input$4$1);
}
let { SourceMapConsumer: SourceMapConsumer$3, SourceMapGenerator: SourceMapGenerator$3 } = require$$2$1;
let { dirname: dirname$2, relative: relative$1, resolve: resolve$2, sep: sep$1 } = require$$2$1;
let { pathToFileURL: pathToFileURL$2 } = require$$2$1;
let Input$3$1 = input$1;
let sourceMapAvailable$2 = Boolean(SourceMapConsumer$3 && SourceMapGenerator$3);
let pathAvailable$2 = Boolean(dirname$2 && resolve$2 && relative$1 && sep$1);
let MapGenerator$2$1 = class MapGenerator {
    constructor(stringify2, root2, opts, cssString){
        this.stringify = stringify2;
        this.mapOpts = opts.map || {};
        this.root = root2;
        this.opts = opts;
        this.css = cssString;
        this.originalCSS = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
        this.memoizedFileURLs = /* @__PURE__ */ new Map();
        this.memoizedPaths = /* @__PURE__ */ new Map();
        this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
        let content;
        if (this.isInline()) {
            content = "data:application/json;base64," + this.toBase64(this.map.toString());
        } else if (typeof this.mapOpts.annotation === "string") {
            content = this.mapOpts.annotation;
        } else if (typeof this.mapOpts.annotation === "function") {
            content = this.mapOpts.annotation(this.opts.to, this.root);
        } else {
            content = this.outputFile() + ".map";
        }
        let eol = "\n";
        if (this.css.includes("\r\n")) eol = "\r\n";
        this.css += eol + "/*# sourceMappingURL=" + content + " */";
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root2 = prev.root || dirname$2(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer$3(prev.text);
                if (map.sourcesContent) {
                    map.sourcesContent = null;
                }
            } else {
                map = prev.consumer();
            }
            this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node2;
            for(let i2 = this.root.nodes.length - 1; i2 >= 0; i2--){
                node2 = this.root.nodes[i2];
                if (node2.type !== "comment") continue;
                if (node2.text.indexOf("# sourceMappingURL=") === 0) {
                    this.root.removeChild(i2);
                }
            }
        } else if (this.css) {
            this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
        }
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable$2 && sourceMapAvailable$2 && this.isMap()) {
            return this.generateMap();
        } else {
            let result2 = "";
            this.stringify(this.root, (i2)=>{
                result2 += i2;
            });
            return [
                result2
            ];
        }
    }
    generateMap() {
        if (this.root) {
            this.generateString();
        } else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator$3.fromSourceMap(prev, {
                ignoreInvalidMapping: true
            });
        } else {
            this.map = new SourceMapGenerator$3({
                file: this.outputFile(),
                ignoreInvalidMapping: true
            });
            this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) {
            return [
                this.css
            ];
        } else {
            return [
                this.css,
                this.map
            ];
        }
    }
    generateString() {
        this.css = "";
        this.map = new SourceMapGenerator$3({
            file: this.outputFile(),
            ignoreInvalidMapping: true
        });
        let line = 1;
        let column = 1;
        let noSource = "<no source>";
        let mapping = {
            generated: {
                column: 0,
                line: 0
            },
            original: {
                column: 0,
                line: 0
            },
            source: ""
        };
        let lines, last;
        this.stringify(this.root, (str, node2, type)=>{
            this.css += str;
            if (node2 && type !== "end") {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node2.source && node2.source.start) {
                    mapping.source = this.sourcePath(node2);
                    mapping.original.line = node2.source.start.line;
                    mapping.original.column = node2.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf("\n");
                column = str.length - last;
            } else {
                column += str.length;
            }
            if (node2 && type !== "start") {
                let p = node2.parent || {
                    raws: {}
                };
                let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
                if (!childless || node2 !== p.last || p.raws.semicolon) {
                    if (node2.source && node2.source.end) {
                        mapping.source = this.sourcePath(node2);
                        mapping.original.line = node2.source.end.line;
                        mapping.original.column = node2.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    isAnnotation() {
        if (this.isInline()) {
            return true;
        }
        if (typeof this.mapOpts.annotation !== "undefined") {
            return this.mapOpts.annotation;
        }
        if (this.previous().length) {
            return this.previous().some((i2)=>i2.annotation);
        }
        return true;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== "undefined") {
            return this.mapOpts.inline;
        }
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== "undefined" && annotation !== true) {
            return false;
        }
        if (this.previous().length) {
            return this.previous().some((i2)=>i2.inline);
        }
        return true;
    }
    isMap() {
        if (typeof this.opts.map !== "undefined") {
            return !!this.opts.map;
        }
        return this.previous().length > 0;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== "undefined") {
            return this.mapOpts.sourcesContent;
        }
        if (this.previous().length) {
            return this.previous().some((i2)=>i2.withContent());
        }
        return true;
    }
    outputFile() {
        if (this.opts.to) {
            return this.path(this.opts.to);
        } else if (this.opts.from) {
            return this.path(this.opts.from);
        } else {
            return "to.css";
        }
    }
    path(file) {
        if (this.mapOpts.absolute) return file;
        if (file.charCodeAt(0) === 60) return file;
        if (/^\w+:\/\//.test(file)) return file;
        let cached = this.memoizedPaths.get(file);
        if (cached) return cached;
        let from = this.opts.to ? dirname$2(this.opts.to) : ".";
        if (typeof this.mapOpts.annotation === "string") {
            from = dirname$2(resolve$2(from, this.mapOpts.annotation));
        }
        let path = relative$1(from, file);
        this.memoizedPaths.set(file, path);
        return path;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) {
                this.root.walk((node2)=>{
                    if (node2.source && node2.source.input.map) {
                        let map = node2.source.input.map;
                        if (!this.previousMaps.includes(map)) {
                            this.previousMaps.push(map);
                        }
                    }
                });
            } else {
                let input2 = new Input$3$1(this.originalCSS, this.opts);
                if (input2.map) this.previousMaps.push(input2.map);
            }
        }
        return this.previousMaps;
    }
    setSourcesContent() {
        let already = {};
        if (this.root) {
            this.root.walk((node2)=>{
                if (node2.source) {
                    let from = node2.source.input.from;
                    if (from && !already[from]) {
                        already[from] = true;
                        let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                        this.map.setSourceContent(fromUrl, node2.source.input.css);
                    }
                }
            });
        } else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(from, this.css);
        }
    }
    sourcePath(node2) {
        if (this.mapOpts.from) {
            return this.toUrl(this.mapOpts.from);
        } else if (this.usesFileUrls) {
            return this.toFileUrl(node2.source.input.from);
        } else {
            return this.toUrl(this.path(node2.source.input.from));
        }
    }
    toBase64(str) {
        if ("TURBOPACK compile-time truthy", 1) {
            return Buffer.from(str).toString("base64");
        } else {
            "TURBOPACK unreachable";
        }
    }
    toFileUrl(path) {
        let cached = this.memoizedFileURLs.get(path);
        if (cached) return cached;
        if (pathToFileURL$2) {
            let fileURL = pathToFileURL$2(path).toString();
            this.memoizedFileURLs.set(path, fileURL);
            return fileURL;
        } else {
            throw new Error("`map.absolute` option is not available in this PostCSS build");
        }
    }
    toUrl(path) {
        let cached = this.memoizedURLs.get(path);
        if (cached) return cached;
        if (sep$1 === "\\") {
            path = path.replace(/\\/g, "/");
        }
        let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
        this.memoizedURLs.set(path, url);
        return url;
    }
};
var mapGenerator$1 = MapGenerator$2$1;
let Node$2$1 = node$1;
let Comment$4$1 = class Comment extends Node$2$1 {
    constructor(defaults){
        super(defaults);
        this.type = "comment";
    }
};
var comment$1 = Comment$4$1;
Comment$4$1.default = Comment$4$1;
let { isClean: isClean$1$1, my: my$1$1 } = symbols$1;
let Declaration$3$1 = declaration$1;
let Comment$3$1 = comment$1;
let Node$1$1 = node$1;
let parse$4$1, Rule$4$1, AtRule$4$1, Root$6$1;
function cleanSource$1(nodes) {
    return nodes.map((i2)=>{
        if (i2.nodes) i2.nodes = cleanSource$1(i2.nodes);
        delete i2.source;
        return i2;
    });
}
function markDirtyUp$1(node2) {
    node2[isClean$1$1] = false;
    if (node2.proxyOf.nodes) {
        for (let i2 of node2.proxyOf.nodes){
            markDirtyUp$1(i2);
        }
    }
}
let Container$7$1 = class Container extends Node$1$1 {
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node2 of nodes)this.proxyOf.nodes.push(node2);
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) {
            for (let node2 of this.nodes)node2.cleanRaws(keepBetween);
        }
    }
    each(callback) {
        if (!this.proxyOf.nodes) return void 0;
        let iterator = this.getIterator();
        let index2, result2;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index2 = this.indexes[iterator];
            result2 = callback(this.proxyOf.nodes[index2], index2);
            if (result2 === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result2;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
    getProxyProcessor() {
        return {
            get (node2, prop) {
                if (prop === "proxyOf") {
                    return node2;
                } else if (!node2[prop]) {
                    return node2[prop];
                } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
                    return (...args)=>{
                        return node2[prop](...args.map((i2)=>{
                            if (typeof i2 === "function") {
                                return (child, index2)=>i2(child.toProxy(), index2);
                            } else {
                                return i2;
                            }
                        }));
                    };
                } else if (prop === "every" || prop === "some") {
                    return (cb)=>{
                        return node2[prop]((child, ...other)=>cb(child.toProxy(), ...other));
                    };
                } else if (prop === "root") {
                    return ()=>node2.root().toProxy();
                } else if (prop === "nodes") {
                    return node2.nodes.map((i2)=>i2.toProxy());
                } else if (prop === "first" || prop === "last") {
                    return node2[prop].toProxy();
                } else {
                    return node2[prop];
                }
            },
            set (node2, prop, value) {
                if (node2[prop] === value) return true;
                node2[prop] = value;
                if (prop === "name" || prop === "params" || prop === "selector") {
                    node2.markDirty();
                }
                return true;
            }
        };
    }
    index(child) {
        if (typeof child === "number") return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node2 of nodes)this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
        let index2;
        for(let id in this.indexes){
            index2 = this.indexes[id];
            if (existIndex < index2) {
                this.indexes[id] = index2 + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type = existIndex === 0 ? "prepend" : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
        existIndex = this.index(exist);
        for (let node2 of nodes)this.proxyOf.nodes.splice(existIndex, 0, node2);
        let index2;
        for(let id in this.indexes){
            index2 = this.indexes[id];
            if (existIndex <= index2) {
                this.indexes[id] = index2 + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    normalize(nodes, sample) {
        if (typeof nodes === "string") {
            nodes = cleanSource$1(parse$4$1(nodes).nodes);
        } else if (typeof nodes === "undefined") {
            nodes = [];
        } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i2 of nodes){
                if (i2.parent) i2.parent.removeChild(i2, "ignore");
            }
        } else if (nodes.type === "root" && this.type !== "document") {
            nodes = nodes.nodes.slice(0);
            for (let i2 of nodes){
                if (i2.parent) i2.parent.removeChild(i2, "ignore");
            }
        } else if (nodes.type) {
            nodes = [
                nodes
            ];
        } else if (nodes.prop) {
            if (typeof nodes.value === "undefined") {
                throw new Error("Value field is missed in node creation");
            } else if (typeof nodes.value !== "string") {
                nodes.value = String(nodes.value);
            }
            nodes = [
                new Declaration$3$1(nodes)
            ];
        } else if (nodes.selector) {
            nodes = [
                new Rule$4$1(nodes)
            ];
        } else if (nodes.name) {
            nodes = [
                new AtRule$4$1(nodes)
            ];
        } else if (nodes.text) {
            nodes = [
                new Comment$3$1(nodes)
            ];
        } else {
            throw new Error("Unknown node type in node creation");
        }
        let processed = nodes.map((i2)=>{
            if (!i2[my$1$1]) Container.rebuild(i2);
            i2 = i2.proxyOf;
            if (i2.parent) i2.parent.removeChild(i2);
            if (i2[isClean$1$1]) markDirtyUp$1(i2);
            if (typeof i2.raws.before === "undefined") {
                if (sample && typeof sample.raws.before !== "undefined") {
                    i2.raws.before = sample.raws.before.replace(/\S/g, "");
                }
            }
            i2.parent = this.proxyOf;
            return i2;
        });
        return processed;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, "prepend").reverse();
            for (let node2 of nodes)this.proxyOf.nodes.unshift(node2);
            for(let id in this.indexes){
                this.indexes[id] = this.indexes[id] + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    removeAll() {
        for (let node2 of this.proxyOf.nodes)node2.parent = void 0;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = void 0;
        this.proxyOf.nodes.splice(child, 1);
        let index2;
        for(let id in this.indexes){
            index2 = this.indexes[id];
            if (index2 >= child) {
                this.indexes[id] = index2 - 1;
            }
        }
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    walk(callback) {
        return this.each((child, i2)=>{
            let result2;
            try {
                result2 = callback(child, i2);
            } catch (e2) {
                throw child.addToError(e2);
            }
            if (result2 !== false && child.walk) {
                result2 = child.walk(callback);
            }
            return result2;
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i2)=>{
                if (child.type === "atrule") {
                    return callback(child, i2);
                }
            });
        }
        if (name instanceof RegExp) {
            return this.walk((child, i2)=>{
                if (child.type === "atrule" && name.test(child.name)) {
                    return callback(child, i2);
                }
            });
        }
        return this.walk((child, i2)=>{
            if (child.type === "atrule" && child.name === name) {
                return callback(child, i2);
            }
        });
    }
    walkComments(callback) {
        return this.walk((child, i2)=>{
            if (child.type === "comment") {
                return callback(child, i2);
            }
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i2)=>{
                if (child.type === "decl") {
                    return callback(child, i2);
                }
            });
        }
        if (prop instanceof RegExp) {
            return this.walk((child, i2)=>{
                if (child.type === "decl" && prop.test(child.prop)) {
                    return callback(child, i2);
                }
            });
        }
        return this.walk((child, i2)=>{
            if (child.type === "decl" && child.prop === prop) {
                return callback(child, i2);
            }
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i2)=>{
                if (child.type === "rule") {
                    return callback(child, i2);
                }
            });
        }
        if (selector instanceof RegExp) {
            return this.walk((child, i2)=>{
                if (child.type === "rule" && selector.test(child.selector)) {
                    return callback(child, i2);
                }
            });
        }
        return this.walk((child, i2)=>{
            if (child.type === "rule" && child.selector === selector) {
                return callback(child, i2);
            }
        });
    }
    get first() {
        if (!this.proxyOf.nodes) return void 0;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return void 0;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
};
Container$7$1.registerParse = (dependant)=>{
    parse$4$1 = dependant;
};
Container$7$1.registerRule = (dependant)=>{
    Rule$4$1 = dependant;
};
Container$7$1.registerAtRule = (dependant)=>{
    AtRule$4$1 = dependant;
};
Container$7$1.registerRoot = (dependant)=>{
    Root$6$1 = dependant;
};
var container$1 = Container$7$1;
Container$7$1.default = Container$7$1;
Container$7$1.rebuild = (node2)=>{
    if (node2.type === "atrule") {
        Object.setPrototypeOf(node2, AtRule$4$1.prototype);
    } else if (node2.type === "rule") {
        Object.setPrototypeOf(node2, Rule$4$1.prototype);
    } else if (node2.type === "decl") {
        Object.setPrototypeOf(node2, Declaration$3$1.prototype);
    } else if (node2.type === "comment") {
        Object.setPrototypeOf(node2, Comment$3$1.prototype);
    } else if (node2.type === "root") {
        Object.setPrototypeOf(node2, Root$6$1.prototype);
    }
    node2[my$1$1] = true;
    if (node2.nodes) {
        node2.nodes.forEach((child)=>{
            Container$7$1.rebuild(child);
        });
    }
};
let Container$6$1 = container$1;
let LazyResult$4$1, Processor$3$1;
let Document$3$1 = class Document2 extends Container$6$1 {
    constructor(defaults){
        super({
            type: "document",
            ...defaults
        });
        if (!this.nodes) {
            this.nodes = [];
        }
    }
    toResult(opts = {}) {
        let lazy = new LazyResult$4$1(new Processor$3$1(), this, opts);
        return lazy.stringify();
    }
};
Document$3$1.registerLazyResult = (dependant)=>{
    LazyResult$4$1 = dependant;
};
Document$3$1.registerProcessor = (dependant)=>{
    Processor$3$1 = dependant;
};
var document$1$1 = Document$3$1;
Document$3$1.default = Document$3$1;
let printed$1 = {};
var warnOnce$2$1 = function warnOnce(message) {
    if (printed$1[message]) return;
    printed$1[message] = true;
    if (typeof console !== "undefined" && console.warn) {
        console.warn(message);
    }
};
let Warning$2$1 = class Warning {
    constructor(text, opts = {}){
        this.type = "warning";
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) {
            return this.node.error(this.text, {
                index: this.index,
                plugin: this.plugin,
                word: this.word
            }).message;
        }
        if (this.plugin) {
            return this.plugin + ": " + this.text;
        }
        return this.text;
    }
};
var warning$1 = Warning$2$1;
Warning$2$1.default = Warning$2$1;
let Warning$1$1 = warning$1;
let Result$3$1 = class Result {
    constructor(processor2, root2, opts){
        this.processor = processor2;
        this.messages = [];
        this.root = root2;
        this.opts = opts;
        this.css = void 0;
        this.map = void 0;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
                opts.plugin = this.lastPlugin.postcssPlugin;
            }
        }
        let warning2 = new Warning$1$1(text, opts);
        this.messages.push(warning2);
        return warning2;
    }
    warnings() {
        return this.messages.filter((i2)=>i2.type === "warning");
    }
    get content() {
        return this.css;
    }
};
var result$1 = Result$3$1;
Result$3$1.default = Result$3$1;
const SINGLE_QUOTE$1 = "'".charCodeAt(0);
const DOUBLE_QUOTE$1 = '"'.charCodeAt(0);
const BACKSLASH$1 = "\\".charCodeAt(0);
const SLASH$1 = "/".charCodeAt(0);
const NEWLINE$1 = "\n".charCodeAt(0);
const SPACE$1 = " ".charCodeAt(0);
const FEED$1 = "\f".charCodeAt(0);
const TAB$1 = "	".charCodeAt(0);
const CR$1 = "\r".charCodeAt(0);
const OPEN_SQUARE$1 = "[".charCodeAt(0);
const CLOSE_SQUARE$1 = "]".charCodeAt(0);
const OPEN_PARENTHESES$1 = "(".charCodeAt(0);
const CLOSE_PARENTHESES$1 = ")".charCodeAt(0);
const OPEN_CURLY$1 = "{".charCodeAt(0);
const CLOSE_CURLY$1 = "}".charCodeAt(0);
const SEMICOLON$1 = ";".charCodeAt(0);
const ASTERISK$1 = "*".charCodeAt(0);
const COLON$1 = ":".charCodeAt(0);
const AT$1 = "@".charCodeAt(0);
const RE_AT_END$1 = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END$1 = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET$1 = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE$1 = /[\da-f]/i;
var tokenize$1 = function tokenizer(input2, options = {}) {
    let css = input2.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n2, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input2.error("Unclosed " + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE$1:
            case SPACE$1:
            case TAB$1:
            case CR$1:
            case FEED$1:
                {
                    next = pos;
                    do {
                        next += 1;
                        code = css.charCodeAt(next);
                    }while (code === SPACE$1 || code === NEWLINE$1 || code === TAB$1 || code === CR$1 || code === FEED$1)
                    currentToken = [
                        "space",
                        css.slice(pos, next)
                    ];
                    pos = next - 1;
                    break;
                }
            case OPEN_SQUARE$1:
            case CLOSE_SQUARE$1:
            case OPEN_CURLY$1:
            case CLOSE_CURLY$1:
            case COLON$1:
            case SEMICOLON$1:
            case CLOSE_PARENTHESES$1:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES$1:
                {
                    prev = buffer.length ? buffer.pop()[1] : "";
                    n2 = css.charCodeAt(pos + 1);
                    if (prev === "url" && n2 !== SINGLE_QUOTE$1 && n2 !== DOUBLE_QUOTE$1 && n2 !== SPACE$1 && n2 !== NEWLINE$1 && n2 !== TAB$1 && n2 !== FEED$1 && n2 !== CR$1) {
                        next = pos;
                        do {
                            escaped = false;
                            next = css.indexOf(")", next + 1);
                            if (next === -1) {
                                if (ignore || ignoreUnclosed) {
                                    next = pos;
                                    break;
                                } else {
                                    unclosed("bracket");
                                }
                            }
                            escapePos = next;
                            while(css.charCodeAt(escapePos - 1) === BACKSLASH$1){
                                escapePos -= 1;
                                escaped = !escaped;
                            }
                        }while (escaped)
                        currentToken = [
                            "brackets",
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        next = css.indexOf(")", pos + 1);
                        content = css.slice(pos, next + 1);
                        if (next === -1 || RE_BAD_BRACKET$1.test(content)) {
                            currentToken = [
                                "(",
                                "(",
                                pos
                            ];
                        } else {
                            currentToken = [
                                "brackets",
                                content,
                                pos,
                                next
                            ];
                            pos = next;
                        }
                    }
                    break;
                }
            case SINGLE_QUOTE$1:
            case DOUBLE_QUOTE$1:
                {
                    quote = code === SINGLE_QUOTE$1 ? "'" : '"';
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(quote, next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos + 1;
                                break;
                            } else {
                                unclosed("string");
                            }
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH$1){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped)
                    currentToken = [
                        "string",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case AT$1:
                {
                    RE_AT_END$1.lastIndex = pos + 1;
                    RE_AT_END$1.test(css);
                    if (RE_AT_END$1.lastIndex === 0) {
                        next = css.length - 1;
                    } else {
                        next = RE_AT_END$1.lastIndex - 2;
                    }
                    currentToken = [
                        "at-word",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case BACKSLASH$1:
                {
                    next = pos;
                    escape = true;
                    while(css.charCodeAt(next + 1) === BACKSLASH$1){
                        next += 1;
                        escape = !escape;
                    }
                    code = css.charCodeAt(next + 1);
                    if (escape && code !== SLASH$1 && code !== SPACE$1 && code !== NEWLINE$1 && code !== TAB$1 && code !== CR$1 && code !== FEED$1) {
                        next += 1;
                        if (RE_HEX_ESCAPE$1.test(css.charAt(next))) {
                            while(RE_HEX_ESCAPE$1.test(css.charAt(next + 1))){
                                next += 1;
                            }
                            if (css.charCodeAt(next + 1) === SPACE$1) {
                                next += 1;
                            }
                        }
                    }
                    currentToken = [
                        "word",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            default:
                {
                    if (code === SLASH$1 && css.charCodeAt(pos + 1) === ASTERISK$1) {
                        next = css.indexOf("*/", pos + 2) + 1;
                        if (next === 0) {
                            if (ignore || ignoreUnclosed) {
                                next = css.length;
                            } else {
                                unclosed("comment");
                            }
                        }
                        currentToken = [
                            "comment",
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        RE_WORD_END$1.lastIndex = pos + 1;
                        RE_WORD_END$1.test(css);
                        if (RE_WORD_END$1.lastIndex === 0) {
                            next = css.length - 1;
                        } else {
                            next = RE_WORD_END$1.lastIndex - 2;
                        }
                        currentToken = [
                            "word",
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        buffer.push(currentToken);
                        pos = next;
                    }
                    break;
                }
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        endOfFile,
        nextToken,
        position
    };
};
let Container$5$1 = container$1;
let AtRule$3$1 = class AtRule extends Container$5$1 {
    constructor(defaults){
        super(defaults);
        this.type = "atrule";
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
};
var atRule$1 = AtRule$3$1;
AtRule$3$1.default = AtRule$3$1;
Container$5$1.registerAtRule(AtRule$3$1);
let Container$4$1 = container$1;
let LazyResult$3$1, Processor$2$1;
let Root$5$1 = class Root extends Container$4$1 {
    constructor(defaults){
        super(defaults);
        this.type = "root";
        if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === "prepend") {
                if (this.nodes.length > 1) {
                    sample.raws.before = this.nodes[1].raws.before;
                } else {
                    delete sample.raws.before;
                }
            } else if (this.first !== sample) {
                for (let node2 of nodes){
                    node2.raws.before = sample.raws.before;
                }
            }
        }
        return nodes;
    }
    removeChild(child, ignore) {
        let index2 = this.index(child);
        if (!ignore && index2 === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[index2].raws.before;
        }
        return super.removeChild(child);
    }
    toResult(opts = {}) {
        let lazy = new LazyResult$3$1(new Processor$2$1(), this, opts);
        return lazy.stringify();
    }
};
Root$5$1.registerLazyResult = (dependant)=>{
    LazyResult$3$1 = dependant;
};
Root$5$1.registerProcessor = (dependant)=>{
    Processor$2$1 = dependant;
};
var root$1 = Root$5$1;
Root$5$1.default = Root$5$1;
Container$4$1.registerRoot(Root$5$1);
let list$2$1 = {
    comma (string) {
        return list$2$1.split(string, [
            ","
        ], true);
    },
    space (string) {
        let spaces = [
            " ",
            "\n",
            "	"
        ];
        return list$2$1.split(string, spaces);
    },
    split (string, separators, last) {
        let array = [];
        let current = "";
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = "";
        let escape = false;
        for (let letter of string){
            if (escape) {
                escape = false;
            } else if (letter === "\\") {
                escape = true;
            } else if (inQuote) {
                if (letter === prevQuote) {
                    inQuote = false;
                }
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === "(") {
                func += 1;
            } else if (letter === ")") {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== "") array.push(current.trim());
                current = "";
                split = false;
            } else {
                current += letter;
            }
        }
        if (last || current !== "") array.push(current.trim());
        return array;
    }
};
var list_1$1 = list$2$1;
list$2$1.default = list$2$1;
let Container$3$1 = container$1;
let list$1$1 = list_1$1;
let Rule$3$1 = class Rule extends Container$3$1 {
    constructor(defaults){
        super(defaults);
        this.type = "rule";
        if (!this.nodes) this.nodes = [];
    }
    get selectors() {
        return list$1$1.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
        this.selector = values.join(sep2);
    }
};
var rule$1 = Rule$3$1;
Rule$3$1.default = Rule$3$1;
Container$3$1.registerRule(Rule$3$1);
let Declaration$2$1 = declaration$1;
let tokenizer2$1 = tokenize$1;
let Comment$2$1 = comment$1;
let AtRule$2$1 = atRule$1;
let Root$4$1 = root$1;
let Rule$2$1 = rule$1;
const SAFE_COMMENT_NEIGHBOR$1 = {
    empty: true,
    space: true
};
function findLastWithPosition$1(tokens) {
    for(let i2 = tokens.length - 1; i2 >= 0; i2--){
        let token = tokens[i2];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
let Parser$1$1 = class Parser {
    constructor(input2){
        this.input = input2;
        this.root = new Root$4$1();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = false;
        this.createTokenizer();
        this.root.source = {
            input: input2,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        };
    }
    atrule(token) {
        let node2 = new AtRule$2$1();
        node2.name = token[1].slice(1);
        if (node2.name === "") {
            this.unnamedAtrule(node2, token);
        }
        this.init(node2, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === "(" || type === "[") {
                brackets.push(type === "(" ? ")" : "]");
            } else if (type === "{" && brackets.length > 0) {
                brackets.push("}");
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
            }
            if (brackets.length === 0) {
                if (type === ";") {
                    node2.source.end = this.getPosition(token[2]);
                    node2.source.end.offset++;
                    this.semicolon = true;
                    break;
                } else if (type === "{") {
                    open = true;
                    break;
                } else if (type === "}") {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === "space"){
                            prev = params[--shift];
                        }
                        if (prev) {
                            node2.source.end = this.getPosition(prev[3] || prev[2]);
                            node2.source.end.offset++;
                        }
                    }
                    this.end(token);
                    break;
                } else {
                    params.push(token);
                }
            } else {
                params.push(token);
            }
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node2.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node2.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node2, "params", params);
            if (last) {
                token = params[params.length - 1];
                node2.source.end = this.getPosition(token[3] || token[2]);
                node2.source.end.offset++;
                this.spaces = node2.raws.between;
                node2.raws.between = "";
            }
        } else {
            node2.raws.afterName = "";
            node2.params = "";
        }
        if (open) {
            node2.nodes = [];
            this.current = node2;
        }
    }
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== "space") {
                founded += 1;
                if (founded === 2) break;
            }
        }
        throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
    }
    colon(tokens) {
        let brackets = 0;
        let token, type, prev;
        for (let [i2, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === "(") {
                brackets += 1;
            }
            if (type === ")") {
                brackets -= 1;
            }
            if (brackets === 0 && type === ":") {
                if (!prev) {
                    this.doubleColon(token);
                } else if (prev[0] === "word" && prev[1] === "progid") {
                    continue;
                } else {
                    return i2;
                }
            }
            prev = token;
        }
        return false;
    }
    comment(token) {
        let node2 = new Comment$2$1();
        this.init(node2, token[2]);
        node2.source.end = this.getPosition(token[3] || token[2]);
        node2.source.end.offset++;
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node2.text = "";
            node2.raws.left = text;
            node2.raws.right = "";
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node2.text = match[2];
            node2.raws.left = match[1];
            node2.raws.right = match[3];
        }
    }
    createTokenizer() {
        this.tokenizer = tokenizer2$1(this.input);
    }
    decl(tokens, customProperty) {
        let node2 = new Declaration$2$1();
        this.init(node2, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ";") {
            this.semicolon = true;
            tokens.pop();
        }
        node2.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition$1(tokens));
        node2.source.end.offset++;
        while(tokens[0][0] !== "word"){
            if (tokens.length === 1) this.unknownWord(tokens);
            node2.raws.before += tokens.shift()[1];
        }
        node2.source.start = this.getPosition(tokens[0][2]);
        node2.prop = "";
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ":" || type === "space" || type === "comment") {
                break;
            }
            node2.prop += tokens.shift()[1];
        }
        node2.raws.between = "";
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ":") {
                node2.raws.between += token[1];
                break;
            } else {
                if (token[0] === "word" && /\w/.test(token[1])) {
                    this.unknownWord([
                        token
                    ]);
                }
                node2.raws.between += token[1];
            }
        }
        if (node2.prop[0] === "_" || node2.prop[0] === "*") {
            node2.raws.before += node2.prop[0];
            node2.prop = node2.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i2 = tokens.length - 1; i2 >= 0; i2--){
            token = tokens[i2];
            if (token[1].toLowerCase() === "!important") {
                node2.important = true;
                let string = this.stringFrom(tokens, i2);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== " !important") node2.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === "important") {
                let cache = tokens.slice(0);
                let str = "";
                for(let j = i2; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().indexOf("!") === 0 && type !== "space") {
                        break;
                    }
                    str = cache.pop()[1] + str;
                }
                if (str.trim().indexOf("!") === 0) {
                    node2.important = true;
                    node2.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== "space" && token[0] !== "comment") {
                break;
            }
        }
        let hasWord = tokens.some((i2)=>i2[0] !== "space" && i2[0] !== "comment");
        if (hasWord) {
            node2.raws.between += firstSpaces.map((i2)=>i2[1]).join("");
            firstSpaces = [];
        }
        this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
        if (node2.value.includes(":") && !customProperty) {
            this.checkMissedSemicolon(tokens);
        }
    }
    doubleColon(token) {
        throw this.input.error("Double colon", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    emptyRule(token) {
        let node2 = new Rule$2$1();
        this.init(node2, token[2]);
        node2.selector = "";
        node2.raws.between = "";
        this.current = node2;
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current.source.end.offset++;
            this.current = this.current.parent;
        } else {
            this.unexpectedClose(token);
        }
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = "";
            }
        }
    }
    // Helpers
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            column: pos.col,
            line: pos.line,
            offset
        };
    }
    init(node2, offset) {
        this.current.push(node2);
        node2.source = {
            input: this.input,
            start: this.getPosition(offset)
        };
        node2.raws.before = this.spaces;
        this.spaces = "";
        if (node2.type !== "comment") this.semicolon = false;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith("--");
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === "(" || type === "[") {
                if (!bracket) bracket = token;
                brackets.push(type === "(" ? ")" : "]");
            } else if (customProperty && colon && type === "{") {
                if (!bracket) bracket = token;
                brackets.push("}");
            } else if (brackets.length === 0) {
                if (type === ";") {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else {
                        break;
                    }
                } else if (type === "{") {
                    this.rule(tokens);
                    return;
                } else if (type === "}") {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ":") {
                    colon = true;
                }
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) {
                while(tokens.length){
                    token = tokens[tokens.length - 1][0];
                    if (token !== "space" && token !== "comment") break;
                    this.tokenizer.back(tokens.pop());
                }
            }
            this.decl(tokens, customProperty);
        } else {
            this.unknownWord(tokens);
        }
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case "space":
                    this.spaces += token[1];
                    break;
                case ";":
                    this.freeSemicolon(token);
                    break;
                case "}":
                    this.end(token);
                    break;
                case "comment":
                    this.comment(token);
                    break;
                case "at-word":
                    this.atrule(token);
                    break;
                case "{":
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    precheckMissedSemicolon() {}
    raw(node2, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = "";
        let clean = true;
        let next, prev;
        for(let i2 = 0; i2 < length; i2 += 1){
            token = tokens[i2];
            type = token[0];
            if (type === "space" && i2 === length - 1 && !customProperty) {
                clean = false;
            } else if (type === "comment") {
                prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : "empty";
                next = tokens[i2 + 1] ? tokens[i2 + 1][0] : "empty";
                if (!SAFE_COMMENT_NEIGHBOR$1[prev] && !SAFE_COMMENT_NEIGHBOR$1[next]) {
                    if (value.slice(-1) === ",") {
                        clean = false;
                    } else {
                        value += token[1];
                    }
                } else {
                    clean = false;
                }
            } else {
                value += token[1];
            }
        }
        if (!clean) {
            let raw = tokens.reduce((all, i2)=>all + i2[1], "");
            node2.raws[prop] = {
                raw,
                value
            };
        }
        node2[prop] = value;
    }
    rule(tokens) {
        tokens.pop();
        let node2 = new Rule$2$1();
        this.init(node2, tokens[0][2]);
        node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node2, "selector", tokens);
        this.current = node2;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space" && lastTokenType !== "comment") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = "";
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result2 = "";
        for(let i2 = from; i2 < tokens.length; i2++){
            result2 += tokens[i2][1];
        }
        tokens.splice(from, tokens.length - from);
        return result2;
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error("Unclosed block", pos.line, pos.column);
    }
    unclosedBracket(bracket) {
        throw this.input.error("Unclosed bracket", {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unexpectedClose(token) {
        throw this.input.error("Unexpected }", {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error("Unknown word", {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unnamedAtrule(node2, token) {
        throw this.input.error("At-rule without name", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
};
var parser$1 = Parser$1$1;
let Container$2$1 = container$1;
let Parser2$1 = parser$1;
let Input$2$1 = input$1;
function parse$3$1(css, opts) {
    let input2 = new Input$2$1(css, opts);
    let parser2 = new Parser2$1(input2);
    try {
        parser2.parse();
    } catch (e2) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (e2.name === "CssSyntaxError" && opts && opts.from) {
                if (/\.scss$/i.test(opts.from)) {
                    e2.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
                } else if (/\.sass/i.test(opts.from)) {
                    e2.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
                } else if (/\.less$/i.test(opts.from)) {
                    e2.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
                }
            }
        }
        throw e2;
    }
    return parser2.root;
}
var parse_1$1 = parse$3$1;
parse$3$1.default = parse$3$1;
Container$2$1.registerParse(parse$3$1);
let { isClean: isClean$3, my: my$3 } = symbols$1;
let MapGenerator$1$1 = mapGenerator$1;
let stringify$2$1 = stringify_1$1;
let Container$1$1 = container$1;
let Document$2$1 = document$1$1;
let warnOnce$1$1 = warnOnce$2$1;
let Result$2$1 = result$1;
let parse$2$1 = parse_1$1;
let Root$3$1 = root$1;
const TYPE_TO_CLASS_NAME$1 = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
};
const PLUGIN_PROPS$1 = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
};
const NOT_VISITORS$1 = {
    Once: true,
    postcssPlugin: true,
    prepare: true
};
const CHILDREN$1 = 0;
function isPromise$1(obj) {
    return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents$1(node2) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME$1[node2.type];
    if (node2.type === "decl") {
        key = node2.prop.toLowerCase();
    } else if (node2.type === "atrule") {
        key = node2.name.toLowerCase();
    }
    if (key && node2.append) {
        return [
            type,
            type + "-" + key,
            CHILDREN$1,
            type + "Exit",
            type + "Exit-" + key
        ];
    } else if (key) {
        return [
            type,
            type + "-" + key,
            type + "Exit",
            type + "Exit-" + key
        ];
    } else if (node2.append) {
        return [
            type,
            CHILDREN$1,
            type + "Exit"
        ];
    } else {
        return [
            type,
            type + "Exit"
        ];
    }
}
function toStack$1(node2) {
    let events;
    if (node2.type === "document") {
        events = [
            "Document",
            CHILDREN$1,
            "DocumentExit"
        ];
    } else if (node2.type === "root") {
        events = [
            "Root",
            CHILDREN$1,
            "RootExit"
        ];
    } else {
        events = getEvents$1(node2);
    }
    return {
        eventIndex: 0,
        events,
        iterator: 0,
        node: node2,
        visitorIndex: 0,
        visitors: []
    };
}
function cleanMarks$1(node2) {
    node2[isClean$3] = false;
    if (node2.nodes) node2.nodes.forEach((i2)=>cleanMarks$1(i2));
    return node2;
}
let postcss$2$1 = {};
let LazyResult$2$1 = class LazyResult {
    constructor(processor2, css, opts){
        this.stringified = false;
        this.processed = false;
        let root2;
        if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
            root2 = cleanMarks$1(css);
        } else if (css instanceof LazyResult || css instanceof Result$2$1) {
            root2 = cleanMarks$1(css.root);
            if (css.map) {
                if (typeof opts.map === "undefined") opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser2 = parse$2$1;
            if (opts.syntax) parser2 = opts.syntax.parse;
            if (opts.parser) parser2 = opts.parser;
            if (parser2.parse) parser2 = parser2.parse;
            try {
                root2 = parser2(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root2 && !root2[my$3]) {
                Container$1$1.rebuild(root2);
            }
        }
        this.result = new Result$2$1(processor2, root2, opts);
        this.helpers = {
            ...postcss$2$1,
            postcss: postcss$2$1,
            result: this.result
        };
        this.plugins = this.processor.plugins.map((plugin22)=>{
            if (typeof plugin22 === "object" && plugin22.prepare) {
                return {
                    ...plugin22,
                    ...plugin22.prepare(this.result)
                };
            } else {
                return plugin22;
            }
        });
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) {
            this.processing = this.runAsync();
        }
        return this.processing;
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(error, node2) {
        let plugin22 = this.result.lastPlugin;
        try {
            if (node2) node2.addToError(error);
            this.error = error;
            if (error.name === "CssSyntaxError" && !error.plugin) {
                error.plugin = plugin22.postcssPlugin;
                error.setMessage();
            } else if (plugin22.postcssVersion) {
                if ("TURBOPACK compile-time truthy", 1) {
                    let pluginName = plugin22.postcssPlugin;
                    let pluginVer = plugin22.postcssVersion;
                    let runtimeVer = this.result.processor.version;
                    let a2 = pluginVer.split(".");
                    let b = runtimeVer.split(".");
                    if (a2[0] !== b[0] || parseInt(a2[1]) > parseInt(b[1])) {
                        console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
                    }
                }
            }
        } catch (err) {
            if (console && console.error) console.error(err);
        }
        return error;
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin22, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin22,
                cb
            ]);
        };
        for (let plugin22 of this.plugins){
            if (typeof plugin22 === "object") {
                for(let event in plugin22){
                    if (!PLUGIN_PROPS$1[event] && /^[A-Z]/.test(event)) {
                        throw new Error(`Unknown event ${event} in ${plugin22.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                    }
                    if (!NOT_VISITORS$1[event]) {
                        if (typeof plugin22[event] === "object") {
                            for(let filter in plugin22[event]){
                                if (filter === "*") {
                                    add(plugin22, event, plugin22[event][filter]);
                                } else {
                                    add(plugin22, event + "-" + filter.toLowerCase(), plugin22[event][filter]);
                                }
                            }
                        } else if (typeof plugin22[event] === "function") {
                            add(plugin22, event, plugin22[event]);
                        }
                    }
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i2 = 0; i2 < this.plugins.length; i2++){
            let plugin22 = this.plugins[i2];
            let promise = this.runOnRoot(plugin22);
            if (isPromise$1(promise)) {
                try {
                    await promise;
                } catch (error) {
                    throw this.handleError(error);
                }
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root2 = this.result.root;
            while(!root2[isClean$3]){
                root2[isClean$3] = true;
                let stack = [
                    toStack$1(root2)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise$1(promise)) {
                        try {
                            await promise;
                        } catch (e2) {
                            let node2 = stack[stack.length - 1].node;
                            throw this.handleError(e2, node2);
                        }
                    }
                }
            }
            if (this.listeners.OnceExit) {
                for (let [plugin22, visitor] of this.listeners.OnceExit){
                    this.result.lastPlugin = plugin22;
                    try {
                        if (root2.type === "document") {
                            let roots = root2.nodes.map((subRoot)=>visitor(subRoot, this.helpers));
                            await Promise.all(roots);
                        } else {
                            await visitor(root2, this.helpers);
                        }
                    } catch (e2) {
                        throw this.handleError(e2);
                    }
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    runOnRoot(plugin22) {
        this.result.lastPlugin = plugin22;
        try {
            if (typeof plugin22 === "object" && plugin22.Once) {
                if (this.result.root.type === "document") {
                    let roots = this.result.root.nodes.map((root2)=>plugin22.Once(root2, this.helpers));
                    if (isPromise$1(roots[0])) {
                        return Promise.all(roots);
                    }
                    return roots;
                }
                return plugin22.Once(this.result.root, this.helpers);
            } else if (typeof plugin22 === "function") {
                return plugin22(this.result.root, this.result);
            }
        } catch (error) {
            throw this.handleError(error);
        }
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify$2$1;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator$1$1(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) {
            throw this.getAsyncError();
        }
        for (let plugin22 of this.plugins){
            let promise = this.runOnRoot(plugin22);
            if (isPromise$1(promise)) {
                throw this.getAsyncError();
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root2 = this.result.root;
            while(!root2[isClean$3]){
                root2[isClean$3] = true;
                this.walkSync(root2);
            }
            if (this.listeners.OnceExit) {
                if (root2.type === "document") {
                    for (let subRoot of root2.nodes){
                        this.visitSync(this.listeners.OnceExit, subRoot);
                    }
                } else {
                    this.visitSync(this.listeners.OnceExit, root2);
                }
            }
        }
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!("from" in this.opts)) {
                warnOnce$1$1("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this.css;
    }
    visitSync(visitors, node2) {
        for (let [plugin22, visitor] of visitors){
            this.result.lastPlugin = plugin22;
            let promise;
            try {
                promise = visitor(node2, this.helpers);
            } catch (e2) {
                throw this.handleError(e2, node2.proxyOf);
            }
            if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
                return true;
            }
            if (isPromise$1(promise)) {
                throw this.getAsyncError();
            }
        }
    }
    visitTick(stack) {
        let visit2 = stack[stack.length - 1];
        let { node: node2, visitors } = visit2;
        if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
            let [plugin22, visitor] = visitors[visit2.visitorIndex];
            visit2.visitorIndex += 1;
            if (visit2.visitorIndex === visitors.length) {
                visit2.visitors = [];
                visit2.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin22;
            try {
                return visitor(node2.toProxy(), this.helpers);
            } catch (e2) {
                throw this.handleError(e2, node2);
            }
        }
        if (visit2.iterator !== 0) {
            let iterator = visit2.iterator;
            let child;
            while(child = node2.nodes[node2.indexes[iterator]]){
                node2.indexes[iterator] += 1;
                if (!child[isClean$3]) {
                    child[isClean$3] = true;
                    stack.push(toStack$1(child));
                    return;
                }
            }
            visit2.iterator = 0;
            delete node2.indexes[iterator];
        }
        let events = visit2.events;
        while(visit2.eventIndex < events.length){
            let event = events[visit2.eventIndex];
            visit2.eventIndex += 1;
            if (event === CHILDREN$1) {
                if (node2.nodes && node2.nodes.length) {
                    node2[isClean$3] = true;
                    visit2.iterator = node2.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit2.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
    walkSync(node2) {
        node2[isClean$3] = true;
        let events = getEvents$1(node2);
        for (let event of events){
            if (event === CHILDREN$1) {
                if (node2.nodes) {
                    node2.each((child)=>{
                        if (!child[isClean$3]) this.walkSync(child);
                    });
                }
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node2.toProxy())) return;
                }
            }
        }
    }
    warnings() {
        return this.sync().warnings();
    }
    get content() {
        return this.stringify().content;
    }
    get css() {
        return this.stringify().css;
    }
    get map() {
        return this.stringify().map;
    }
    get messages() {
        return this.sync().messages;
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        return this.sync().root;
    }
    get [Symbol.toStringTag]() {
        return "LazyResult";
    }
};
LazyResult$2$1.registerPostcss = (dependant)=>{
    postcss$2$1 = dependant;
};
var lazyResult$1 = LazyResult$2$1;
LazyResult$2$1.default = LazyResult$2$1;
Root$3$1.registerLazyResult(LazyResult$2$1);
Document$2$1.registerLazyResult(LazyResult$2$1);
let MapGenerator2$1 = mapGenerator$1;
let stringify$1$1 = stringify_1$1;
let warnOnce2$1 = warnOnce$2$1;
let parse$1$1 = parse_1$1;
const Result$1$1 = result$1;
let NoWorkResult$1$1 = class NoWorkResult {
    constructor(processor2, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor2;
        this._css = css;
        this._opts = opts;
        this._map = void 0;
        let root2;
        let str = stringify$1$1;
        this.result = new Result$1$1(this._processor, root2, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, "root", {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator2$1(str, root2, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) {
                this.result.css = generatedCSS;
            }
            if (generatedMap) {
                this.result.map = generatedMap;
            }
        } else {
            map.clearAnnotation();
            this.result.css = map.css;
        }
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!("from" in this._opts)) {
                warnOnce2$1("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this._css;
    }
    warnings() {
        return [];
    }
    get content() {
        return this.result.css;
    }
    get css() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get messages() {
        return [];
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        if (this._root) {
            return this._root;
        }
        let root2;
        let parser2 = parse$1$1;
        try {
            root2 = parser2(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) {
            throw this.error;
        } else {
            this._root = root2;
            return root2;
        }
    }
    get [Symbol.toStringTag]() {
        return "NoWorkResult";
    }
};
var noWorkResult$1 = NoWorkResult$1$1;
NoWorkResult$1$1.default = NoWorkResult$1$1;
let NoWorkResult2$1 = noWorkResult$1;
let LazyResult$1$1 = lazyResult$1;
let Document$1$1 = document$1$1;
let Root$2$1 = root$1;
let Processor$1$1 = class Processor {
    constructor(plugins = []){
        this.version = "8.4.38";
        this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i2 of plugins){
            if (i2.postcss === true) {
                i2 = i2();
            } else if (i2.postcss) {
                i2 = i2.postcss;
            }
            if (typeof i2 === "object" && Array.isArray(i2.plugins)) {
                normalized = normalized.concat(i2.plugins);
            } else if (typeof i2 === "object" && i2.postcssPlugin) {
                normalized.push(i2);
            } else if (typeof i2 === "function") {
                normalized.push(i2);
            } else if (typeof i2 === "object" && (i2.parse || i2.stringify)) {
                if ("TURBOPACK compile-time truthy", 1) {
                    throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
                }
            } else {
                throw new Error(i2 + " is not a PostCSS plugin");
            }
        }
        return normalized;
    }
    process(css, opts = {}) {
        if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
            return new NoWorkResult2$1(this, css, opts);
        } else {
            return new LazyResult$1$1(this, css, opts);
        }
    }
    use(plugin22) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin22
        ]));
        return this;
    }
};
var processor$1 = Processor$1$1;
Processor$1$1.default = Processor$1$1;
Root$2$1.registerProcessor(Processor$1$1);
Document$1$1.registerProcessor(Processor$1$1);
let Declaration$1$1 = declaration$1;
let PreviousMap2$1 = previousMap$1;
let Comment$1$1 = comment$1;
let AtRule$1$1 = atRule$1;
let Input$1$1 = input$1;
let Root$1$1 = root$1;
let Rule$1$1 = rule$1;
function fromJSON$1$1(json, inputs) {
    if (Array.isArray(json)) return json.map((n2)=>fromJSON$1$1(n2));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input2 of ownInputs){
            let inputHydrated = {
                ...input2,
                __proto__: Input$1$1.prototype
            };
            if (inputHydrated.map) {
                inputHydrated.map = {
                    ...inputHydrated.map,
                    __proto__: PreviousMap2$1.prototype
                };
            }
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) {
        defaults.nodes = json.nodes.map((n2)=>fromJSON$1$1(n2, inputs));
    }
    if (defaults.source) {
        let { inputId, ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) {
            defaults.source.input = inputs[inputId];
        }
    }
    if (defaults.type === "root") {
        return new Root$1$1(defaults);
    } else if (defaults.type === "decl") {
        return new Declaration$1$1(defaults);
    } else if (defaults.type === "rule") {
        return new Rule$1$1(defaults);
    } else if (defaults.type === "comment") {
        return new Comment$1$1(defaults);
    } else if (defaults.type === "atrule") {
        return new AtRule$1$1(defaults);
    } else {
        throw new Error("Unknown node type: " + json.type);
    }
}
var fromJSON_1$1 = fromJSON$1$1;
fromJSON$1$1.default = fromJSON$1$1;
let CssSyntaxError2$1 = cssSyntaxError$1;
let Declaration2$1 = declaration$1;
let LazyResult2$1 = lazyResult$1;
let Container2$1 = container$1;
let Processor2$1 = processor$1;
let stringify$5 = stringify_1$1;
let fromJSON$2 = fromJSON_1$1;
let Document22 = document$1$1;
let Warning2$1 = warning$1;
let Comment2$1 = comment$1;
let AtRule2$1 = atRule$1;
let Result2$1 = result$1;
let Input2$1 = input$1;
let parse$5 = parse_1$1;
let list$3 = list_1$1;
let Rule2$1 = rule$1;
let Root2$1 = root$1;
let Node2$1 = node$1;
function postcss$3(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
    }
    return new Processor2$1(plugins);
}
postcss$3.plugin = function plugin(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
            if (process.env.LANG && process.env.LANG.startsWith("cn")) {
                console.warn(name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226");
            }
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor2$1().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, "postcss", {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss$3([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss$3.stringify = stringify$5;
postcss$3.parse = parse$5;
postcss$3.fromJSON = fromJSON$2;
postcss$3.list = list$3;
postcss$3.comment = (defaults)=>new Comment2$1(defaults);
postcss$3.atRule = (defaults)=>new AtRule2$1(defaults);
postcss$3.decl = (defaults)=>new Declaration2$1(defaults);
postcss$3.rule = (defaults)=>new Rule2$1(defaults);
postcss$3.root = (defaults)=>new Root2$1(defaults);
postcss$3.document = (defaults)=>new Document22(defaults);
postcss$3.CssSyntaxError = CssSyntaxError2$1;
postcss$3.Declaration = Declaration2$1;
postcss$3.Container = Container2$1;
postcss$3.Processor = Processor2$1;
postcss$3.Document = Document22;
postcss$3.Comment = Comment2$1;
postcss$3.Warning = Warning2$1;
postcss$3.AtRule = AtRule2$1;
postcss$3.Result = Result2$1;
postcss$3.Input = Input2$1;
postcss$3.Rule = Rule2$1;
postcss$3.Root = Root2$1;
postcss$3.Node = Node2$1;
LazyResult2$1.registerPostcss(postcss$3);
var postcss_1$1 = postcss$3;
postcss$3.default = postcss$3;
const postcss$1$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(postcss_1$1);
postcss$1$1.stringify;
postcss$1$1.fromJSON;
postcss$1$1.plugin;
postcss$1$1.parse;
postcss$1$1.list;
postcss$1$1.document;
postcss$1$1.comment;
postcss$1$1.atRule;
postcss$1$1.rule;
postcss$1$1.decl;
postcss$1$1.root;
postcss$1$1.CssSyntaxError;
postcss$1$1.Declaration;
postcss$1$1.Container;
postcss$1$1.Processor;
postcss$1$1.Document;
postcss$1$1.Comment;
postcss$1$1.Warning;
postcss$1$1.AtRule;
postcss$1$1.Result;
postcss$1$1.Input;
postcss$1$1.Rule;
postcss$1$1.Root;
postcss$1$1.Node;
var __defProp22 = Object.defineProperty;
var __defNormalProp22 = (obj, key, value)=>key in obj ? __defProp22(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField22 = (obj, key, value)=>__defNormalProp22(obj, typeof key !== "symbol" ? key + "" : key, value);
function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
    if (n2.__esModule) return n2;
    var f2 = n2.default;
    if (typeof f2 == "function") {
        var a2 = function a22() {
            if (this instanceof a22) {
                return Reflect.construct(f2, arguments, this.constructor);
            }
            return f2.apply(this, arguments);
        };
        a2.prototype = f2.prototype;
    } else a2 = {};
    Object.defineProperty(a2, "__esModule", {
        value: true
    });
    Object.keys(n2).forEach(function(k) {
        var d = Object.getOwnPropertyDescriptor(n2, k);
        Object.defineProperty(a2, k, d.get ? d : {
            enumerable: true,
            get: function() {
                return n2[k];
            }
        });
    });
    return a2;
}
var picocolors_browser = {
    exports: {}
};
var x = String;
var create = function() {
    return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x
    };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var picocolors_browserExports = picocolors_browser.exports;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
}, Symbol.toStringTag, {
    value: "Module"
}));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
let pico = picocolors_browserExports;
let terminalHighlight$1 = require$$2;
let CssSyntaxError$3 = class CssSyntaxError2 extends Error {
    constructor(message, line, column, source, file, plugin22){
        super(message);
        this.name = "CssSyntaxError";
        this.reason = message;
        if (file) {
            this.file = file;
        }
        if (source) {
            this.source = source;
        }
        if (plugin22) {
            this.plugin = plugin22;
        }
        if (typeof line !== "undefined" && typeof column !== "undefined") {
            if (typeof line === "number") {
                this.line = line;
                this.column = column;
            } else {
                this.line = line.line;
                this.column = line.column;
                this.endLine = column.line;
                this.endColumn = column.column;
            }
        }
        this.setMessage();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CssSyntaxError2);
        }
    }
    setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        if (typeof this.line !== "undefined") {
            this.message += ":" + this.line + ":" + this.column;
        }
        this.message += ": " + this.reason;
    }
    showSourceCode(color) {
        if (!this.source) return "";
        let css = this.source;
        if (color == null) color = pico.isColorSupported;
        if (terminalHighlight$1) {
            if (color) css = terminalHighlight$1(css);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        let mark, aside;
        if (color) {
            let { bold, gray, red } = pico.createColors(true);
            mark = (text)=>bold(red(text));
            aside = (text)=>gray(text);
        } else {
            mark = aside = (str)=>str;
        }
        return lines.slice(start, end).map((line, index2)=>{
            let number = start + 1 + index2;
            let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
            if (number === this.line) {
                let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
            }
            return " " + aside(gutter) + line;
        }).join("\n");
    }
    toString() {
        let code = this.showSourceCode();
        if (code) {
            code = "\n\n" + code + "\n";
        }
        return this.name + ": " + this.message + code;
    }
};
var cssSyntaxError = CssSyntaxError$3;
CssSyntaxError$3.default = CssSyntaxError$3;
var symbols = {};
symbols.isClean = Symbol("isClean");
symbols.my = Symbol("my");
const DEFAULT_RAW = {
    after: "\n",
    beforeClose: "\n",
    beforeComment: "\n",
    beforeDecl: "\n",
    beforeOpen: " ",
    beforeRule: "\n",
    colon: ": ",
    commentLeft: " ",
    commentRight: " ",
    emptyBody: "",
    indent: "    ",
    semicolon: false
};
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
let Stringifier$2 = class Stringifier2 {
    constructor(builder){
        this.builder = builder;
    }
    atrule(node2, semicolon) {
        let name = "@" + node2.name;
        let params = node2.params ? this.rawValue(node2, "params") : "";
        if (typeof node2.raws.afterName !== "undefined") {
            name += node2.raws.afterName;
        } else if (params) {
            name += " ";
        }
        if (node2.nodes) {
            this.block(node2, name + params);
        } else {
            let end = (node2.raws.between || "") + (semicolon ? ";" : "");
            this.builder(name + params + end, node2);
        }
    }
    beforeAfter(node2, detect) {
        let value;
        if (node2.type === "decl") {
            value = this.raw(node2, null, "beforeDecl");
        } else if (node2.type === "comment") {
            value = this.raw(node2, null, "beforeComment");
        } else if (detect === "before") {
            value = this.raw(node2, null, "beforeRule");
        } else {
            value = this.raw(node2, null, "beforeClose");
        }
        let buf = node2.parent;
        let depth = 0;
        while(buf && buf.type !== "root"){
            depth += 1;
            buf = buf.parent;
        }
        if (value.includes("\n")) {
            let indent = this.raw(node2, null, "indent");
            if (indent.length) {
                for(let step = 0; step < depth; step++)value += indent;
            }
        }
        return value;
    }
    block(node2, start) {
        let between = this.raw(node2, "between", "beforeOpen");
        this.builder(start + between + "{", node2, "start");
        let after;
        if (node2.nodes && node2.nodes.length) {
            this.body(node2);
            after = this.raw(node2, "after");
        } else {
            after = this.raw(node2, "after", "emptyBody");
        }
        if (after) this.builder(after);
        this.builder("}", node2, "end");
    }
    body(node2) {
        let last = node2.nodes.length - 1;
        while(last > 0){
            if (node2.nodes[last].type !== "comment") break;
            last -= 1;
        }
        let semicolon = this.raw(node2, "semicolon");
        for(let i2 = 0; i2 < node2.nodes.length; i2++){
            let child = node2.nodes[i2];
            let before = this.raw(child, "before");
            if (before) this.builder(before);
            this.stringify(child, last !== i2 || semicolon);
        }
    }
    comment(node2) {
        let left = this.raw(node2, "left", "commentLeft");
        let right = this.raw(node2, "right", "commentRight");
        this.builder("/*" + left + node2.text + right + "*/", node2);
    }
    decl(node2, semicolon) {
        let between = this.raw(node2, "between", "colon");
        let string = node2.prop + between + this.rawValue(node2, "value");
        if (node2.important) {
            string += node2.raws.important || " !important";
        }
        if (semicolon) string += ";";
        this.builder(string, node2);
    }
    document(node2) {
        this.body(node2);
    }
    raw(node2, own, detect) {
        let value;
        if (!detect) detect = own;
        if (own) {
            value = node2.raws[own];
            if (typeof value !== "undefined") return value;
        }
        let parent = node2.parent;
        if (detect === "before") {
            if (!parent || parent.type === "root" && parent.first === node2) {
                return "";
            }
            if (parent && parent.type === "document") {
                return "";
            }
        }
        if (!parent) return DEFAULT_RAW[detect];
        let root2 = node2.root();
        if (!root2.rawCache) root2.rawCache = {};
        if (typeof root2.rawCache[detect] !== "undefined") {
            return root2.rawCache[detect];
        }
        if (detect === "before" || detect === "after") {
            return this.beforeAfter(node2, detect);
        } else {
            let method = "raw" + capitalize(detect);
            if (this[method]) {
                value = this[method](root2, node2);
            } else {
                root2.walk((i2)=>{
                    value = i2.raws[own];
                    if (typeof value !== "undefined") return false;
                });
            }
        }
        if (typeof value === "undefined") value = DEFAULT_RAW[detect];
        root2.rawCache[detect] = value;
        return value;
    }
    rawBeforeClose(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && i2.nodes.length > 0) {
                if (typeof i2.raws.after !== "undefined") {
                    value = i2.raws.after;
                    if (value.includes("\n")) {
                        value = value.replace(/[^\n]+$/, "");
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawBeforeComment(root2, node2) {
        let value;
        root2.walkComments((i2)=>{
            if (typeof i2.raws.before !== "undefined") {
                value = i2.raws.before;
                if (value.includes("\n")) {
                    value = value.replace(/[^\n]+$/, "");
                }
                return false;
            }
        });
        if (typeof value === "undefined") {
            value = this.raw(node2, null, "beforeDecl");
        } else if (value) {
            value = value.replace(/\S/g, "");
        }
        return value;
    }
    rawBeforeDecl(root2, node2) {
        let value;
        root2.walkDecls((i2)=>{
            if (typeof i2.raws.before !== "undefined") {
                value = i2.raws.before;
                if (value.includes("\n")) {
                    value = value.replace(/[^\n]+$/, "");
                }
                return false;
            }
        });
        if (typeof value === "undefined") {
            value = this.raw(node2, null, "beforeRule");
        } else if (value) {
            value = value.replace(/\S/g, "");
        }
        return value;
    }
    rawBeforeOpen(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.type !== "decl") {
                value = i2.raws.between;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawBeforeRule(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && (i2.parent !== root2 || root2.first !== i2)) {
                if (typeof i2.raws.before !== "undefined") {
                    value = i2.raws.before;
                    if (value.includes("\n")) {
                        value = value.replace(/[^\n]+$/, "");
                    }
                    return false;
                }
            }
        });
        if (value) value = value.replace(/\S/g, "");
        return value;
    }
    rawColon(root2) {
        let value;
        root2.walkDecls((i2)=>{
            if (typeof i2.raws.between !== "undefined") {
                value = i2.raws.between.replace(/[^\s:]/g, "");
                return false;
            }
        });
        return value;
    }
    rawEmptyBody(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && i2.nodes.length === 0) {
                value = i2.raws.after;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawIndent(root2) {
        if (root2.raws.indent) return root2.raws.indent;
        let value;
        root2.walk((i2)=>{
            let p = i2.parent;
            if (p && p !== root2 && p.parent && p.parent === root2) {
                if (typeof i2.raws.before !== "undefined") {
                    let parts = i2.raws.before.split("\n");
                    value = parts[parts.length - 1];
                    value = value.replace(/\S/g, "");
                    return false;
                }
            }
        });
        return value;
    }
    rawSemicolon(root2) {
        let value;
        root2.walk((i2)=>{
            if (i2.nodes && i2.nodes.length && i2.last.type === "decl") {
                value = i2.raws.semicolon;
                if (typeof value !== "undefined") return false;
            }
        });
        return value;
    }
    rawValue(node2, prop) {
        let value = node2[prop];
        let raw = node2.raws[prop];
        if (raw && raw.value === value) {
            return raw.raw;
        }
        return value;
    }
    root(node2) {
        this.body(node2);
        if (node2.raws.after) this.builder(node2.raws.after);
    }
    rule(node2) {
        this.block(node2, this.rawValue(node2, "selector"));
        if (node2.raws.ownSemicolon) {
            this.builder(node2.raws.ownSemicolon, node2, "end");
        }
    }
    stringify(node2, semicolon) {
        if (!this[node2.type]) {
            throw new Error("Unknown AST node type " + node2.type + ". Maybe you need to change PostCSS stringifier.");
        }
        this[node2.type](node2, semicolon);
    }
};
var stringifier = Stringifier$2;
Stringifier$2.default = Stringifier$2;
let Stringifier$1 = stringifier;
function stringify$4(node2, builder) {
    let str = new Stringifier$1(builder);
    str.stringify(node2);
}
var stringify_1 = stringify$4;
stringify$4.default = stringify$4;
let { isClean: isClean$2, my: my$2 } = symbols;
let CssSyntaxError$2 = cssSyntaxError;
let Stringifier22 = stringifier;
let stringify$3 = stringify_1;
function cloneNode(obj, parent) {
    let cloned = new obj.constructor();
    for(let i2 in obj){
        if (!Object.prototype.hasOwnProperty.call(obj, i2)) {
            continue;
        }
        if (i2 === "proxyCache") continue;
        let value = obj[i2];
        let type = typeof value;
        if (i2 === "parent" && type === "object") {
            if (parent) cloned[i2] = parent;
        } else if (i2 === "source") {
            cloned[i2] = value;
        } else if (Array.isArray(value)) {
            cloned[i2] = value.map((j)=>cloneNode(j, cloned));
        } else {
            if (type === "object" && value !== null) value = cloneNode(value);
            cloned[i2] = value;
        }
    }
    return cloned;
}
let Node$4 = class Node3 {
    constructor(defaults = {}){
        this.raws = {};
        this[isClean$2] = false;
        this[my$2] = true;
        for(let name in defaults){
            if (name === "nodes") {
                this.nodes = [];
                for (let node2 of defaults[name]){
                    if (typeof node2.clone === "function") {
                        this.append(node2.clone());
                    } else {
                        this.append(node2);
                    }
                }
            } else {
                this[name] = defaults[name];
            }
        }
    }
    addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
            let s2 = this.source;
            error.stack = error.stack.replace(/\n\s{4}at /, `$&${s2.input.from}:${s2.start.line}:${s2.start.column}$&`);
        }
        return error;
    }
    after(add) {
        this.parent.insertAfter(this, add);
        return this;
    }
    assign(overrides = {}) {
        for(let name in overrides){
            this[name] = overrides[name];
        }
        return this;
    }
    before(add) {
        this.parent.insertBefore(this, add);
        return this;
    }
    cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween) delete this.raws.between;
    }
    clone(overrides = {}) {
        let cloned = cloneNode(this);
        for(let name in overrides){
            cloned[name] = overrides[name];
        }
        return cloned;
    }
    cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
    }
    cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
    }
    error(message, opts = {}) {
        if (this.source) {
            let { end, start } = this.rangeBy(opts);
            return this.source.input.error(message, {
                column: start.column,
                line: start.line
            }, {
                column: end.column,
                line: end.line
            }, opts);
        }
        return new CssSyntaxError$2(message);
    }
    getProxyProcessor() {
        return {
            get (node2, prop) {
                if (prop === "proxyOf") {
                    return node2;
                } else if (prop === "root") {
                    return ()=>node2.root().toProxy();
                } else {
                    return node2[prop];
                }
            },
            set (node2, prop, value) {
                if (node2[prop] === value) return true;
                node2[prop] = value;
                if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || /* c8 ignore next */ prop === "text") {
                    node2.markDirty();
                }
                return true;
            }
        };
    }
    markDirty() {
        if (this[isClean$2]) {
            this[isClean$2] = false;
            let next = this;
            while(next = next.parent){
                next[isClean$2] = false;
            }
        }
    }
    next() {
        if (!this.parent) return void 0;
        let index2 = this.parent.index(this);
        return this.parent.nodes[index2 + 1];
    }
    positionBy(opts, stringRepresentation) {
        let pos = this.source.start;
        if (opts.index) {
            pos = this.positionInside(opts.index, stringRepresentation);
        } else if (opts.word) {
            stringRepresentation = this.toString();
            let index2 = stringRepresentation.indexOf(opts.word);
            if (index2 !== -1) pos = this.positionInside(index2, stringRepresentation);
        }
        return pos;
    }
    positionInside(index2, stringRepresentation) {
        let string = stringRepresentation || this.toString();
        let column = this.source.start.column;
        let line = this.source.start.line;
        for(let i2 = 0; i2 < index2; i2++){
            if (string[i2] === "\n") {
                column = 1;
                line += 1;
            } else {
                column += 1;
            }
        }
        return {
            column,
            line
        };
    }
    prev() {
        if (!this.parent) return void 0;
        let index2 = this.parent.index(this);
        return this.parent.nodes[index2 - 1];
    }
    rangeBy(opts) {
        let start = {
            column: this.source.start.column,
            line: this.source.start.line
        };
        let end = this.source.end ? {
            column: this.source.end.column + 1,
            line: this.source.end.line
        } : {
            column: start.column + 1,
            line: start.line
        };
        if (opts.word) {
            let stringRepresentation = this.toString();
            let index2 = stringRepresentation.indexOf(opts.word);
            if (index2 !== -1) {
                start = this.positionInside(index2, stringRepresentation);
                end = this.positionInside(index2 + opts.word.length, stringRepresentation);
            }
        } else {
            if (opts.start) {
                start = {
                    column: opts.start.column,
                    line: opts.start.line
                };
            } else if (opts.index) {
                start = this.positionInside(opts.index);
            }
            if (opts.end) {
                end = {
                    column: opts.end.column,
                    line: opts.end.line
                };
            } else if (typeof opts.endIndex === "number") {
                end = this.positionInside(opts.endIndex);
            } else if (opts.index) {
                end = this.positionInside(opts.index + 1);
            }
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) {
            end = {
                column: start.column + 1,
                line: start.line
            };
        }
        return {
            end,
            start
        };
    }
    raw(prop, defaultType) {
        let str = new Stringifier22();
        return str.raw(this, prop, defaultType);
    }
    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.parent = void 0;
        return this;
    }
    replaceWith(...nodes) {
        if (this.parent) {
            let bookmark = this;
            let foundSelf = false;
            for (let node2 of nodes){
                if (node2 === this) {
                    foundSelf = true;
                } else if (foundSelf) {
                    this.parent.insertAfter(bookmark, node2);
                    bookmark = node2;
                } else {
                    this.parent.insertBefore(bookmark, node2);
                }
            }
            if (!foundSelf) {
                this.remove();
            }
        }
        return this;
    }
    root() {
        let result2 = this;
        while(result2.parent && result2.parent.type !== "document"){
            result2 = result2.parent;
        }
        return result2;
    }
    toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || /* @__PURE__ */ new Map();
        let inputsNextIndex = 0;
        for(let name in this){
            if (!Object.prototype.hasOwnProperty.call(this, name)) {
                continue;
            }
            if (name === "parent" || name === "proxyCache") continue;
            let value = this[name];
            if (Array.isArray(value)) {
                fixed[name] = value.map((i2)=>{
                    if (typeof i2 === "object" && i2.toJSON) {
                        return i2.toJSON(null, inputs);
                    } else {
                        return i2;
                    }
                });
            } else if (typeof value === "object" && value.toJSON) {
                fixed[name] = value.toJSON(null, inputs);
            } else if (name === "source") {
                let inputId = inputs.get(value.input);
                if (inputId == null) {
                    inputId = inputsNextIndex;
                    inputs.set(value.input, inputsNextIndex);
                    inputsNextIndex++;
                }
                fixed[name] = {
                    end: value.end,
                    inputId,
                    start: value.start
                };
            } else {
                fixed[name] = value;
            }
        }
        if (emitInputs) {
            fixed.inputs = [
                ...inputs.keys()
            ].map((input2)=>input2.toJSON());
        }
        return fixed;
    }
    toProxy() {
        if (!this.proxyCache) {
            this.proxyCache = new Proxy(this, this.getProxyProcessor());
        }
        return this.proxyCache;
    }
    toString(stringifier2 = stringify$3) {
        if (stringifier2.stringify) stringifier2 = stringifier2.stringify;
        let result2 = "";
        stringifier2(this, (i2)=>{
            result2 += i2;
        });
        return result2;
    }
    warn(result2, text, opts) {
        let data = {
            node: this
        };
        for(let i2 in opts)data[i2] = opts[i2];
        return result2.warn(text, data);
    }
    get proxyOf() {
        return this;
    }
};
var node = Node$4;
Node$4.default = Node$4;
let Node$3 = node;
let Declaration$4 = class Declaration2 extends Node$3 {
    constructor(defaults){
        if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
            defaults = {
                ...defaults,
                value: String(defaults.value)
            };
        }
        super(defaults);
        this.type = "decl";
    }
    get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
    }
};
var declaration = Declaration$4;
Declaration$4.default = Declaration$4;
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = "";
        let i2 = size;
        while(i2--){
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid$1 = (size = 21)=>{
    let id = "";
    let i2 = size;
    while(i2--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
var nonSecure = {
    nanoid: nanoid$1,
    customAlphabet
};
let { SourceMapConsumer: SourceMapConsumer$2, SourceMapGenerator: SourceMapGenerator$2 } = require$$2;
let { existsSync, readFileSync } = require$$2;
let { dirname: dirname$1, join } = require$$2;
function fromBase64(str) {
    if ("TURBOPACK compile-time truthy", 1) {
        return Buffer.from(str, "base64").toString();
    } else {
        "TURBOPACK unreachable";
    }
}
let PreviousMap$2 = class PreviousMap2 {
    constructor(css, opts){
        if (opts.map === false) return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, "data:");
        let prev = opts.map ? opts.map.prev : void 0;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) {
            this.mapFile = opts.from;
        }
        if (this.mapFile) this.root = dirname$1(this.mapFile);
        if (text) this.text = text;
    }
    consumer() {
        if (!this.consumerCache) {
            this.consumerCache = new SourceMapConsumer$2(this.text);
        }
        return this.consumerCache;
    }
    decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        if (charsetUri.test(text) || uri.test(text)) {
            return decodeURIComponent(text.substr(RegExp.lastMatch.length));
        }
        if (baseCharsetUri.test(text) || baseUri.test(text)) {
            return fromBase64(text.substr(RegExp.lastMatch.length));
        }
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + encoding);
    }
    getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
    }
    isMap(map) {
        if (typeof map !== "object") return false;
        return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
    }
    loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!comments) return;
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf("*/", start);
        if (start > -1 && end > -1) {
            this.annotation = this.getAnnotationURL(css.substring(start, end));
        }
    }
    loadFile(path) {
        this.root = dirname$1(path);
        if (existsSync(path)) {
            this.mapFile = path;
            return readFileSync(path, "utf-8").toString().trim();
        }
    }
    loadMap(file, prev) {
        if (prev === false) return false;
        if (prev) {
            if (typeof prev === "string") {
                return prev;
            } else if (typeof prev === "function") {
                let prevPath = prev(file);
                if (prevPath) {
                    let map = this.loadFile(prevPath);
                    if (!map) {
                        throw new Error("Unable to load previous source map: " + prevPath.toString());
                    }
                    return map;
                }
            } else if (prev instanceof SourceMapConsumer$2) {
                return SourceMapGenerator$2.fromSourceMap(prev).toString();
            } else if (prev instanceof SourceMapGenerator$2) {
                return prev.toString();
            } else if (this.isMap(prev)) {
                return JSON.stringify(prev);
            } else {
                throw new Error("Unsupported previous source map format: " + prev.toString());
            }
        } else if (this.inline) {
            return this.decodeInline(this.annotation);
        } else if (this.annotation) {
            let map = this.annotation;
            if (file) map = join(dirname$1(file), map);
            return this.loadFile(map);
        }
    }
    startWith(string, start) {
        if (!string) return false;
        return string.substr(0, start.length) === start;
    }
    withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
    }
};
var previousMap = PreviousMap$2;
PreviousMap$2.default = PreviousMap$2;
let { SourceMapConsumer: SourceMapConsumer$1, SourceMapGenerator: SourceMapGenerator$1 } = require$$2;
let { fileURLToPath, pathToFileURL: pathToFileURL$1 } = require$$2;
let { isAbsolute, resolve: resolve$1 } = require$$2;
let { nanoid } = nonSecure;
let terminalHighlight = require$$2;
let CssSyntaxError$1 = cssSyntaxError;
let PreviousMap$1 = previousMap;
let fromOffsetCache = Symbol("fromOffsetCache");
let sourceMapAvailable$1 = Boolean(SourceMapConsumer$1 && SourceMapGenerator$1);
let pathAvailable$1 = Boolean(resolve$1 && isAbsolute);
let Input$4 = class Input2 {
    constructor(css, opts = {}){
        if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
            throw new Error(`PostCSS received ${css} instead of CSS string`);
        }
        this.css = css.toString();
        if (this.css[0] === "\uFEFF" || this.css[0] === "￾") {
            this.hasBOM = true;
            this.css = this.css.slice(1);
        } else {
            this.hasBOM = false;
        }
        if (opts.from) {
            if (!pathAvailable$1 || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
                this.file = opts.from;
            } else {
                this.file = resolve$1(opts.from);
            }
        }
        if (pathAvailable$1 && sourceMapAvailable$1) {
            let map = new PreviousMap$1(this.css, opts);
            if (map.text) {
                this.map = map;
                let file = map.consumer().file;
                if (!this.file && file) this.file = this.mapResolve(file);
            }
        }
        if (!this.file) {
            this.id = "<input css " + nanoid(6) + ">";
        }
        if (this.map) this.map.file = this.from;
    }
    error(message, line, column, opts = {}) {
        let result2, endLine, endColumn;
        if (line && typeof line === "object") {
            let start = line;
            let end = column;
            if (typeof start.offset === "number") {
                let pos = this.fromOffset(start.offset);
                line = pos.line;
                column = pos.col;
            } else {
                line = start.line;
                column = start.column;
            }
            if (typeof end.offset === "number") {
                let pos = this.fromOffset(end.offset);
                endLine = pos.line;
                endColumn = pos.col;
            } else {
                endLine = end.line;
                endColumn = end.column;
            }
        } else if (!column) {
            let pos = this.fromOffset(line);
            line = pos.line;
            column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) {
            result2 = new CssSyntaxError$1(message, origin.endLine === void 0 ? origin.line : {
                column: origin.column,
                line: origin.line
            }, origin.endLine === void 0 ? origin.column : {
                column: origin.endColumn,
                line: origin.endLine
            }, origin.source, origin.file, opts.plugin);
        } else {
            result2 = new CssSyntaxError$1(message, endLine === void 0 ? line : {
                column,
                line
            }, endLine === void 0 ? column : {
                column: endColumn,
                line: endLine
            }, this.css, this.file, opts.plugin);
        }
        result2.input = {
            column,
            endColumn,
            endLine,
            line,
            source: this.css
        };
        if (this.file) {
            if (pathToFileURL$1) {
                result2.input.url = pathToFileURL$1(this.file).toString();
            }
            result2.input.file = this.file;
        }
        return result2;
    }
    fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
            let lines = this.css.split("\n");
            lineToIndex = new Array(lines.length);
            let prevIndex = 0;
            for(let i2 = 0, l2 = lines.length; i2 < l2; i2++){
                lineToIndex[i2] = prevIndex;
                prevIndex += lines[i2].length + 1;
            }
            this[fromOffsetCache] = lineToIndex;
        } else {
            lineToIndex = this[fromOffsetCache];
        }
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) {
            min = lineToIndex.length - 1;
        } else {
            let max = lineToIndex.length - 2;
            let mid;
            while(min < max){
                mid = min + (max - min >> 1);
                if (offset < lineToIndex[mid]) {
                    max = mid - 1;
                } else if (offset >= lineToIndex[mid + 1]) {
                    min = mid + 1;
                } else {
                    min = mid;
                    break;
                }
            }
        }
        return {
            col: offset - lineToIndex[min] + 1,
            line: min + 1
        };
    }
    mapResolve(file) {
        if (/^\w+:\/\//.test(file)) {
            return file;
        }
        return resolve$1(this.map.consumer().sourceRoot || this.map.root || ".", file);
    }
    origin(line, column, endLine, endColumn) {
        if (!this.map) return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({
            column,
            line
        });
        if (!from.source) return false;
        let to;
        if (typeof endLine === "number") {
            to = consumer.originalPositionFor({
                column: endColumn,
                line: endLine
            });
        }
        let fromUrl;
        if (isAbsolute(from.source)) {
            fromUrl = pathToFileURL$1(from.source);
        } else {
            fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL$1(this.map.mapFile));
        }
        let result2 = {
            column: from.column,
            endColumn: to && to.column,
            endLine: to && to.line,
            line: from.line,
            url: fromUrl.toString()
        };
        if (fromUrl.protocol === "file:") {
            if (fileURLToPath) {
                result2.file = fileURLToPath(fromUrl);
            } else {
                throw new Error(`file: protocol is not available in this PostCSS build`);
            }
        }
        let source = consumer.sourceContentFor(from.source);
        if (source) result2.source = source;
        return result2;
    }
    toJSON() {
        let json = {};
        for (let name of [
            "hasBOM",
            "css",
            "file",
            "id"
        ]){
            if (this[name] != null) {
                json[name] = this[name];
            }
        }
        if (this.map) {
            json.map = {
                ...this.map
            };
            if (json.map.consumerCache) {
                json.map.consumerCache = void 0;
            }
        }
        return json;
    }
    get from() {
        return this.file || this.id;
    }
};
var input = Input$4;
Input$4.default = Input$4;
if (terminalHighlight && terminalHighlight.registerInput) {
    terminalHighlight.registerInput(Input$4);
}
let { SourceMapConsumer, SourceMapGenerator } = require$$2;
let { dirname, relative, resolve, sep } = require$$2;
let { pathToFileURL } = require$$2;
let Input$3 = input;
let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
let pathAvailable = Boolean(dirname && resolve && relative && sep);
let MapGenerator$2 = class MapGenerator2 {
    constructor(stringify2, root2, opts, cssString){
        this.stringify = stringify2;
        this.mapOpts = opts.map || {};
        this.root = root2;
        this.opts = opts;
        this.css = cssString;
        this.originalCSS = cssString;
        this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;
        this.memoizedFileURLs = /* @__PURE__ */ new Map();
        this.memoizedPaths = /* @__PURE__ */ new Map();
        this.memoizedURLs = /* @__PURE__ */ new Map();
    }
    addAnnotation() {
        let content;
        if (this.isInline()) {
            content = "data:application/json;base64," + this.toBase64(this.map.toString());
        } else if (typeof this.mapOpts.annotation === "string") {
            content = this.mapOpts.annotation;
        } else if (typeof this.mapOpts.annotation === "function") {
            content = this.mapOpts.annotation(this.opts.to, this.root);
        } else {
            content = this.outputFile() + ".map";
        }
        let eol = "\n";
        if (this.css.includes("\r\n")) eol = "\r\n";
        this.css += eol + "/*# sourceMappingURL=" + content + " */";
    }
    applyPrevMaps() {
        for (let prev of this.previous()){
            let from = this.toUrl(this.path(prev.file));
            let root2 = prev.root || dirname(prev.file);
            let map;
            if (this.mapOpts.sourcesContent === false) {
                map = new SourceMapConsumer(prev.text);
                if (map.sourcesContent) {
                    map.sourcesContent = null;
                }
            } else {
                map = prev.consumer();
            }
            this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
        }
    }
    clearAnnotation() {
        if (this.mapOpts.annotation === false) return;
        if (this.root) {
            let node2;
            for(let i2 = this.root.nodes.length - 1; i2 >= 0; i2--){
                node2 = this.root.nodes[i2];
                if (node2.type !== "comment") continue;
                if (node2.text.indexOf("# sourceMappingURL=") === 0) {
                    this.root.removeChild(i2);
                }
            }
        } else if (this.css) {
            this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, "");
        }
    }
    generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) {
            return this.generateMap();
        } else {
            let result2 = "";
            this.stringify(this.root, (i2)=>{
                result2 += i2;
            });
            return [
                result2
            ];
        }
    }
    generateMap() {
        if (this.root) {
            this.generateString();
        } else if (this.previous().length === 1) {
            let prev = this.previous()[0].consumer();
            prev.file = this.outputFile();
            this.map = SourceMapGenerator.fromSourceMap(prev, {
                ignoreInvalidMapping: true
            });
        } else {
            this.map = new SourceMapGenerator({
                file: this.outputFile(),
                ignoreInvalidMapping: true
            });
            this.map.addMapping({
                generated: {
                    column: 0,
                    line: 1
                },
                original: {
                    column: 0,
                    line: 1
                },
                source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
            });
        }
        if (this.isSourcesContent()) this.setSourcesContent();
        if (this.root && this.previous().length > 0) this.applyPrevMaps();
        if (this.isAnnotation()) this.addAnnotation();
        if (this.isInline()) {
            return [
                this.css
            ];
        } else {
            return [
                this.css,
                this.map
            ];
        }
    }
    generateString() {
        this.css = "";
        this.map = new SourceMapGenerator({
            file: this.outputFile(),
            ignoreInvalidMapping: true
        });
        let line = 1;
        let column = 1;
        let noSource = "<no source>";
        let mapping = {
            generated: {
                column: 0,
                line: 0
            },
            original: {
                column: 0,
                line: 0
            },
            source: ""
        };
        let lines, last;
        this.stringify(this.root, (str, node2, type)=>{
            this.css += str;
            if (node2 && type !== "end") {
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                if (node2.source && node2.source.start) {
                    mapping.source = this.sourcePath(node2);
                    mapping.original.line = node2.source.start.line;
                    mapping.original.column = node2.source.start.column - 1;
                    this.map.addMapping(mapping);
                } else {
                    mapping.source = noSource;
                    mapping.original.line = 1;
                    mapping.original.column = 0;
                    this.map.addMapping(mapping);
                }
            }
            lines = str.match(/\n/g);
            if (lines) {
                line += lines.length;
                last = str.lastIndexOf("\n");
                column = str.length - last;
            } else {
                column += str.length;
            }
            if (node2 && type !== "start") {
                let p = node2.parent || {
                    raws: {}
                };
                let childless = node2.type === "decl" || node2.type === "atrule" && !node2.nodes;
                if (!childless || node2 !== p.last || p.raws.semicolon) {
                    if (node2.source && node2.source.end) {
                        mapping.source = this.sourcePath(node2);
                        mapping.original.line = node2.source.end.line;
                        mapping.original.column = node2.source.end.column - 1;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 2;
                        this.map.addMapping(mapping);
                    } else {
                        mapping.source = noSource;
                        mapping.original.line = 1;
                        mapping.original.column = 0;
                        mapping.generated.line = line;
                        mapping.generated.column = column - 1;
                        this.map.addMapping(mapping);
                    }
                }
            }
        });
    }
    isAnnotation() {
        if (this.isInline()) {
            return true;
        }
        if (typeof this.mapOpts.annotation !== "undefined") {
            return this.mapOpts.annotation;
        }
        if (this.previous().length) {
            return this.previous().some((i2)=>i2.annotation);
        }
        return true;
    }
    isInline() {
        if (typeof this.mapOpts.inline !== "undefined") {
            return this.mapOpts.inline;
        }
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== "undefined" && annotation !== true) {
            return false;
        }
        if (this.previous().length) {
            return this.previous().some((i2)=>i2.inline);
        }
        return true;
    }
    isMap() {
        if (typeof this.opts.map !== "undefined") {
            return !!this.opts.map;
        }
        return this.previous().length > 0;
    }
    isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== "undefined") {
            return this.mapOpts.sourcesContent;
        }
        if (this.previous().length) {
            return this.previous().some((i2)=>i2.withContent());
        }
        return true;
    }
    outputFile() {
        if (this.opts.to) {
            return this.path(this.opts.to);
        } else if (this.opts.from) {
            return this.path(this.opts.from);
        } else {
            return "to.css";
        }
    }
    path(file) {
        if (this.mapOpts.absolute) return file;
        if (file.charCodeAt(0) === 60) return file;
        if (/^\w+:\/\//.test(file)) return file;
        let cached = this.memoizedPaths.get(file);
        if (cached) return cached;
        let from = this.opts.to ? dirname(this.opts.to) : ".";
        if (typeof this.mapOpts.annotation === "string") {
            from = dirname(resolve(from, this.mapOpts.annotation));
        }
        let path = relative(from, file);
        this.memoizedPaths.set(file, path);
        return path;
    }
    previous() {
        if (!this.previousMaps) {
            this.previousMaps = [];
            if (this.root) {
                this.root.walk((node2)=>{
                    if (node2.source && node2.source.input.map) {
                        let map = node2.source.input.map;
                        if (!this.previousMaps.includes(map)) {
                            this.previousMaps.push(map);
                        }
                    }
                });
            } else {
                let input2 = new Input$3(this.originalCSS, this.opts);
                if (input2.map) this.previousMaps.push(input2.map);
            }
        }
        return this.previousMaps;
    }
    setSourcesContent() {
        let already = {};
        if (this.root) {
            this.root.walk((node2)=>{
                if (node2.source) {
                    let from = node2.source.input.from;
                    if (from && !already[from]) {
                        already[from] = true;
                        let fromUrl = this.usesFileUrls ? this.toFileUrl(from) : this.toUrl(this.path(from));
                        this.map.setSourceContent(fromUrl, node2.source.input.css);
                    }
                }
            });
        } else if (this.css) {
            let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(from, this.css);
        }
    }
    sourcePath(node2) {
        if (this.mapOpts.from) {
            return this.toUrl(this.mapOpts.from);
        } else if (this.usesFileUrls) {
            return this.toFileUrl(node2.source.input.from);
        } else {
            return this.toUrl(this.path(node2.source.input.from));
        }
    }
    toBase64(str) {
        if ("TURBOPACK compile-time truthy", 1) {
            return Buffer.from(str).toString("base64");
        } else {
            "TURBOPACK unreachable";
        }
    }
    toFileUrl(path) {
        let cached = this.memoizedFileURLs.get(path);
        if (cached) return cached;
        if (pathToFileURL) {
            let fileURL = pathToFileURL(path).toString();
            this.memoizedFileURLs.set(path, fileURL);
            return fileURL;
        } else {
            throw new Error("`map.absolute` option is not available in this PostCSS build");
        }
    }
    toUrl(path) {
        let cached = this.memoizedURLs.get(path);
        if (cached) return cached;
        if (sep === "\\") {
            path = path.replace(/\\/g, "/");
        }
        let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
        this.memoizedURLs.set(path, url);
        return url;
    }
};
var mapGenerator = MapGenerator$2;
let Node$2 = node;
let Comment$4 = class Comment2 extends Node$2 {
    constructor(defaults){
        super(defaults);
        this.type = "comment";
    }
};
var comment = Comment$4;
Comment$4.default = Comment$4;
let { isClean: isClean$1, my: my$1 } = symbols;
let Declaration$3 = declaration;
let Comment$3 = comment;
let Node$1 = node;
let parse$4, Rule$4, AtRule$4, Root$6;
function cleanSource(nodes) {
    return nodes.map((i2)=>{
        if (i2.nodes) i2.nodes = cleanSource(i2.nodes);
        delete i2.source;
        return i2;
    });
}
function markDirtyUp(node2) {
    node2[isClean$1] = false;
    if (node2.proxyOf.nodes) {
        for (let i2 of node2.proxyOf.nodes){
            markDirtyUp(i2);
        }
    }
}
let Container$7 = class Container2 extends Node$1 {
    append(...children) {
        for (let child of children){
            let nodes = this.normalize(child, this.last);
            for (let node2 of nodes)this.proxyOf.nodes.push(node2);
        }
        this.markDirty();
        return this;
    }
    cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) {
            for (let node2 of this.nodes)node2.cleanRaws(keepBetween);
        }
    }
    each(callback) {
        if (!this.proxyOf.nodes) return void 0;
        let iterator = this.getIterator();
        let index2, result2;
        while(this.indexes[iterator] < this.proxyOf.nodes.length){
            index2 = this.indexes[iterator];
            result2 = callback(this.proxyOf.nodes[index2], index2);
            if (result2 === false) break;
            this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result2;
    }
    every(condition) {
        return this.nodes.every(condition);
    }
    getIterator() {
        if (!this.lastEach) this.lastEach = 0;
        if (!this.indexes) this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
    }
    getProxyProcessor() {
        return {
            get (node2, prop) {
                if (prop === "proxyOf") {
                    return node2;
                } else if (!node2[prop]) {
                    return node2[prop];
                } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
                    return (...args)=>{
                        return node2[prop](...args.map((i2)=>{
                            if (typeof i2 === "function") {
                                return (child, index2)=>i2(child.toProxy(), index2);
                            } else {
                                return i2;
                            }
                        }));
                    };
                } else if (prop === "every" || prop === "some") {
                    return (cb)=>{
                        return node2[prop]((child, ...other)=>cb(child.toProxy(), ...other));
                    };
                } else if (prop === "root") {
                    return ()=>node2.root().toProxy();
                } else if (prop === "nodes") {
                    return node2.nodes.map((i2)=>i2.toProxy());
                } else if (prop === "first" || prop === "last") {
                    return node2[prop].toProxy();
                } else {
                    return node2[prop];
                }
            },
            set (node2, prop, value) {
                if (node2[prop] === value) return true;
                node2[prop] = value;
                if (prop === "name" || prop === "params" || prop === "selector") {
                    node2.markDirty();
                }
                return true;
            }
        };
    }
    index(child) {
        if (typeof child === "number") return child;
        if (child.proxyOf) child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
    }
    insertAfter(exist, add) {
        let existIndex = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
        existIndex = this.index(exist);
        for (let node2 of nodes)this.proxyOf.nodes.splice(existIndex + 1, 0, node2);
        let index2;
        for(let id in this.indexes){
            index2 = this.indexes[id];
            if (existIndex < index2) {
                this.indexes[id] = index2 + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    insertBefore(exist, add) {
        let existIndex = this.index(exist);
        let type = existIndex === 0 ? "prepend" : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
        existIndex = this.index(exist);
        for (let node2 of nodes)this.proxyOf.nodes.splice(existIndex, 0, node2);
        let index2;
        for(let id in this.indexes){
            index2 = this.indexes[id];
            if (existIndex <= index2) {
                this.indexes[id] = index2 + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    normalize(nodes, sample) {
        if (typeof nodes === "string") {
            nodes = cleanSource(parse$4(nodes).nodes);
        } else if (typeof nodes === "undefined") {
            nodes = [];
        } else if (Array.isArray(nodes)) {
            nodes = nodes.slice(0);
            for (let i2 of nodes){
                if (i2.parent) i2.parent.removeChild(i2, "ignore");
            }
        } else if (nodes.type === "root" && this.type !== "document") {
            nodes = nodes.nodes.slice(0);
            for (let i2 of nodes){
                if (i2.parent) i2.parent.removeChild(i2, "ignore");
            }
        } else if (nodes.type) {
            nodes = [
                nodes
            ];
        } else if (nodes.prop) {
            if (typeof nodes.value === "undefined") {
                throw new Error("Value field is missed in node creation");
            } else if (typeof nodes.value !== "string") {
                nodes.value = String(nodes.value);
            }
            nodes = [
                new Declaration$3(nodes)
            ];
        } else if (nodes.selector) {
            nodes = [
                new Rule$4(nodes)
            ];
        } else if (nodes.name) {
            nodes = [
                new AtRule$4(nodes)
            ];
        } else if (nodes.text) {
            nodes = [
                new Comment$3(nodes)
            ];
        } else {
            throw new Error("Unknown node type in node creation");
        }
        let processed = nodes.map((i2)=>{
            if (!i2[my$1]) Container2.rebuild(i2);
            i2 = i2.proxyOf;
            if (i2.parent) i2.parent.removeChild(i2);
            if (i2[isClean$1]) markDirtyUp(i2);
            if (typeof i2.raws.before === "undefined") {
                if (sample && typeof sample.raws.before !== "undefined") {
                    i2.raws.before = sample.raws.before.replace(/\S/g, "");
                }
            }
            i2.parent = this.proxyOf;
            return i2;
        });
        return processed;
    }
    prepend(...children) {
        children = children.reverse();
        for (let child of children){
            let nodes = this.normalize(child, this.first, "prepend").reverse();
            for (let node2 of nodes)this.proxyOf.nodes.unshift(node2);
            for(let id in this.indexes){
                this.indexes[id] = this.indexes[id] + nodes.length;
            }
        }
        this.markDirty();
        return this;
    }
    push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
    }
    removeAll() {
        for (let node2 of this.proxyOf.nodes)node2.parent = void 0;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
    }
    removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = void 0;
        this.proxyOf.nodes.splice(child, 1);
        let index2;
        for(let id in this.indexes){
            index2 = this.indexes[id];
            if (index2 >= child) {
                this.indexes[id] = index2 - 1;
            }
        }
        this.markDirty();
        return this;
    }
    replaceValues(pattern, opts, callback) {
        if (!callback) {
            callback = opts;
            opts = {};
        }
        this.walkDecls((decl)=>{
            if (opts.props && !opts.props.includes(decl.prop)) return;
            if (opts.fast && !decl.value.includes(opts.fast)) return;
            decl.value = decl.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
    }
    some(condition) {
        return this.nodes.some(condition);
    }
    walk(callback) {
        return this.each((child, i2)=>{
            let result2;
            try {
                result2 = callback(child, i2);
            } catch (e2) {
                throw child.addToError(e2);
            }
            if (result2 !== false && child.walk) {
                result2 = child.walk(callback);
            }
            return result2;
        });
    }
    walkAtRules(name, callback) {
        if (!callback) {
            callback = name;
            return this.walk((child, i2)=>{
                if (child.type === "atrule") {
                    return callback(child, i2);
                }
            });
        }
        if (name instanceof RegExp) {
            return this.walk((child, i2)=>{
                if (child.type === "atrule" && name.test(child.name)) {
                    return callback(child, i2);
                }
            });
        }
        return this.walk((child, i2)=>{
            if (child.type === "atrule" && child.name === name) {
                return callback(child, i2);
            }
        });
    }
    walkComments(callback) {
        return this.walk((child, i2)=>{
            if (child.type === "comment") {
                return callback(child, i2);
            }
        });
    }
    walkDecls(prop, callback) {
        if (!callback) {
            callback = prop;
            return this.walk((child, i2)=>{
                if (child.type === "decl") {
                    return callback(child, i2);
                }
            });
        }
        if (prop instanceof RegExp) {
            return this.walk((child, i2)=>{
                if (child.type === "decl" && prop.test(child.prop)) {
                    return callback(child, i2);
                }
            });
        }
        return this.walk((child, i2)=>{
            if (child.type === "decl" && child.prop === prop) {
                return callback(child, i2);
            }
        });
    }
    walkRules(selector, callback) {
        if (!callback) {
            callback = selector;
            return this.walk((child, i2)=>{
                if (child.type === "rule") {
                    return callback(child, i2);
                }
            });
        }
        if (selector instanceof RegExp) {
            return this.walk((child, i2)=>{
                if (child.type === "rule" && selector.test(child.selector)) {
                    return callback(child, i2);
                }
            });
        }
        return this.walk((child, i2)=>{
            if (child.type === "rule" && child.selector === selector) {
                return callback(child, i2);
            }
        });
    }
    get first() {
        if (!this.proxyOf.nodes) return void 0;
        return this.proxyOf.nodes[0];
    }
    get last() {
        if (!this.proxyOf.nodes) return void 0;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
    }
};
Container$7.registerParse = (dependant)=>{
    parse$4 = dependant;
};
Container$7.registerRule = (dependant)=>{
    Rule$4 = dependant;
};
Container$7.registerAtRule = (dependant)=>{
    AtRule$4 = dependant;
};
Container$7.registerRoot = (dependant)=>{
    Root$6 = dependant;
};
var container = Container$7;
Container$7.default = Container$7;
Container$7.rebuild = (node2)=>{
    if (node2.type === "atrule") {
        Object.setPrototypeOf(node2, AtRule$4.prototype);
    } else if (node2.type === "rule") {
        Object.setPrototypeOf(node2, Rule$4.prototype);
    } else if (node2.type === "decl") {
        Object.setPrototypeOf(node2, Declaration$3.prototype);
    } else if (node2.type === "comment") {
        Object.setPrototypeOf(node2, Comment$3.prototype);
    } else if (node2.type === "root") {
        Object.setPrototypeOf(node2, Root$6.prototype);
    }
    node2[my$1] = true;
    if (node2.nodes) {
        node2.nodes.forEach((child)=>{
            Container$7.rebuild(child);
        });
    }
};
let Container$6 = container;
let LazyResult$4, Processor$3;
let Document$3 = class Document23 extends Container$6 {
    constructor(defaults){
        super({
            type: "document",
            ...defaults
        });
        if (!this.nodes) {
            this.nodes = [];
        }
    }
    toResult(opts = {}) {
        let lazy = new LazyResult$4(new Processor$3(), this, opts);
        return lazy.stringify();
    }
};
Document$3.registerLazyResult = (dependant)=>{
    LazyResult$4 = dependant;
};
Document$3.registerProcessor = (dependant)=>{
    Processor$3 = dependant;
};
var document$1 = Document$3;
Document$3.default = Document$3;
let printed = {};
var warnOnce$2 = function warnOnce2(message) {
    if (printed[message]) return;
    printed[message] = true;
    if (typeof console !== "undefined" && console.warn) {
        console.warn(message);
    }
};
let Warning$2 = class Warning2 {
    constructor(text, opts = {}){
        this.type = "warning";
        this.text = text;
        if (opts.node && opts.node.source) {
            let range = opts.node.rangeBy(opts);
            this.line = range.start.line;
            this.column = range.start.column;
            this.endLine = range.end.line;
            this.endColumn = range.end.column;
        }
        for(let opt in opts)this[opt] = opts[opt];
    }
    toString() {
        if (this.node) {
            return this.node.error(this.text, {
                index: this.index,
                plugin: this.plugin,
                word: this.word
            }).message;
        }
        if (this.plugin) {
            return this.plugin + ": " + this.text;
        }
        return this.text;
    }
};
var warning = Warning$2;
Warning$2.default = Warning$2;
let Warning$1 = warning;
let Result$3 = class Result2 {
    constructor(processor2, root2, opts){
        this.processor = processor2;
        this.messages = [];
        this.root = root2;
        this.opts = opts;
        this.css = void 0;
        this.map = void 0;
    }
    toString() {
        return this.css;
    }
    warn(text, opts = {}) {
        if (!opts.plugin) {
            if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
                opts.plugin = this.lastPlugin.postcssPlugin;
            }
        }
        let warning2 = new Warning$1(text, opts);
        this.messages.push(warning2);
        return warning2;
    }
    warnings() {
        return this.messages.filter((i2)=>i2.type === "warning");
    }
    get content() {
        return this.css;
    }
};
var result = Result$3;
Result$3.default = Result$3;
const SINGLE_QUOTE = "'".charCodeAt(0);
const DOUBLE_QUOTE = '"'.charCodeAt(0);
const BACKSLASH = "\\".charCodeAt(0);
const SLASH = "/".charCodeAt(0);
const NEWLINE = "\n".charCodeAt(0);
const SPACE = " ".charCodeAt(0);
const FEED = "\f".charCodeAt(0);
const TAB = "	".charCodeAt(0);
const CR = "\r".charCodeAt(0);
const OPEN_SQUARE = "[".charCodeAt(0);
const CLOSE_SQUARE = "]".charCodeAt(0);
const OPEN_PARENTHESES = "(".charCodeAt(0);
const CLOSE_PARENTHESES = ")".charCodeAt(0);
const OPEN_CURLY = "{".charCodeAt(0);
const CLOSE_CURLY = "}".charCodeAt(0);
const SEMICOLON = ";".charCodeAt(0);
const ASTERISK = "*".charCodeAt(0);
const COLON = ":".charCodeAt(0);
const AT = "@".charCodeAt(0);
const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
const RE_HEX_ESCAPE = /[\da-f]/i;
var tokenize = function tokenizer2(input2, options = {}) {
    let css = input2.css.valueOf();
    let ignore = options.ignoreErrors;
    let code, next, quote, content, escape;
    let escaped, escapePos, prev, n2, currentToken;
    let length = css.length;
    let pos = 0;
    let buffer = [];
    let returned = [];
    function position() {
        return pos;
    }
    function unclosed(what) {
        throw input2.error("Unclosed " + what, pos);
    }
    function endOfFile() {
        return returned.length === 0 && pos >= length;
    }
    function nextToken(opts) {
        if (returned.length) return returned.pop();
        if (pos >= length) return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch(code){
            case NEWLINE:
            case SPACE:
            case TAB:
            case CR:
            case FEED:
                {
                    next = pos;
                    do {
                        next += 1;
                        code = css.charCodeAt(next);
                    }while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED)
                    currentToken = [
                        "space",
                        css.slice(pos, next)
                    ];
                    pos = next - 1;
                    break;
                }
            case OPEN_SQUARE:
            case CLOSE_SQUARE:
            case OPEN_CURLY:
            case CLOSE_CURLY:
            case COLON:
            case SEMICOLON:
            case CLOSE_PARENTHESES:
                {
                    let controlChar = String.fromCharCode(code);
                    currentToken = [
                        controlChar,
                        controlChar,
                        pos
                    ];
                    break;
                }
            case OPEN_PARENTHESES:
                {
                    prev = buffer.length ? buffer.pop()[1] : "";
                    n2 = css.charCodeAt(pos + 1);
                    if (prev === "url" && n2 !== SINGLE_QUOTE && n2 !== DOUBLE_QUOTE && n2 !== SPACE && n2 !== NEWLINE && n2 !== TAB && n2 !== FEED && n2 !== CR) {
                        next = pos;
                        do {
                            escaped = false;
                            next = css.indexOf(")", next + 1);
                            if (next === -1) {
                                if (ignore || ignoreUnclosed) {
                                    next = pos;
                                    break;
                                } else {
                                    unclosed("bracket");
                                }
                            }
                            escapePos = next;
                            while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                                escapePos -= 1;
                                escaped = !escaped;
                            }
                        }while (escaped)
                        currentToken = [
                            "brackets",
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        next = css.indexOf(")", pos + 1);
                        content = css.slice(pos, next + 1);
                        if (next === -1 || RE_BAD_BRACKET.test(content)) {
                            currentToken = [
                                "(",
                                "(",
                                pos
                            ];
                        } else {
                            currentToken = [
                                "brackets",
                                content,
                                pos,
                                next
                            ];
                            pos = next;
                        }
                    }
                    break;
                }
            case SINGLE_QUOTE:
            case DOUBLE_QUOTE:
                {
                    quote = code === SINGLE_QUOTE ? "'" : '"';
                    next = pos;
                    do {
                        escaped = false;
                        next = css.indexOf(quote, next + 1);
                        if (next === -1) {
                            if (ignore || ignoreUnclosed) {
                                next = pos + 1;
                                break;
                            } else {
                                unclosed("string");
                            }
                        }
                        escapePos = next;
                        while(css.charCodeAt(escapePos - 1) === BACKSLASH){
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    }while (escaped)
                    currentToken = [
                        "string",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case AT:
                {
                    RE_AT_END.lastIndex = pos + 1;
                    RE_AT_END.test(css);
                    if (RE_AT_END.lastIndex === 0) {
                        next = css.length - 1;
                    } else {
                        next = RE_AT_END.lastIndex - 2;
                    }
                    currentToken = [
                        "at-word",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            case BACKSLASH:
                {
                    next = pos;
                    escape = true;
                    while(css.charCodeAt(next + 1) === BACKSLASH){
                        next += 1;
                        escape = !escape;
                    }
                    code = css.charCodeAt(next + 1);
                    if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
                        next += 1;
                        if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                            while(RE_HEX_ESCAPE.test(css.charAt(next + 1))){
                                next += 1;
                            }
                            if (css.charCodeAt(next + 1) === SPACE) {
                                next += 1;
                            }
                        }
                    }
                    currentToken = [
                        "word",
                        css.slice(pos, next + 1),
                        pos,
                        next
                    ];
                    pos = next;
                    break;
                }
            default:
                {
                    if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
                        next = css.indexOf("*/", pos + 2) + 1;
                        if (next === 0) {
                            if (ignore || ignoreUnclosed) {
                                next = css.length;
                            } else {
                                unclosed("comment");
                            }
                        }
                        currentToken = [
                            "comment",
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        pos = next;
                    } else {
                        RE_WORD_END.lastIndex = pos + 1;
                        RE_WORD_END.test(css);
                        if (RE_WORD_END.lastIndex === 0) {
                            next = css.length - 1;
                        } else {
                            next = RE_WORD_END.lastIndex - 2;
                        }
                        currentToken = [
                            "word",
                            css.slice(pos, next + 1),
                            pos,
                            next
                        ];
                        buffer.push(currentToken);
                        pos = next;
                    }
                    break;
                }
        }
        pos++;
        return currentToken;
    }
    function back(token) {
        returned.push(token);
    }
    return {
        back,
        endOfFile,
        nextToken,
        position
    };
};
let Container$5 = container;
let AtRule$3 = class AtRule2 extends Container$5 {
    constructor(defaults){
        super(defaults);
        this.type = "atrule";
    }
    append(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.append(...children);
    }
    prepend(...children) {
        if (!this.proxyOf.nodes) this.nodes = [];
        return super.prepend(...children);
    }
};
var atRule = AtRule$3;
AtRule$3.default = AtRule$3;
Container$5.registerAtRule(AtRule$3);
let Container$4 = container;
let LazyResult$3, Processor$2;
let Root$5 = class Root2 extends Container$4 {
    constructor(defaults){
        super(defaults);
        this.type = "root";
        if (!this.nodes) this.nodes = [];
    }
    normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
            if (type === "prepend") {
                if (this.nodes.length > 1) {
                    sample.raws.before = this.nodes[1].raws.before;
                } else {
                    delete sample.raws.before;
                }
            } else if (this.first !== sample) {
                for (let node2 of nodes){
                    node2.raws.before = sample.raws.before;
                }
            }
        }
        return nodes;
    }
    removeChild(child, ignore) {
        let index2 = this.index(child);
        if (!ignore && index2 === 0 && this.nodes.length > 1) {
            this.nodes[1].raws.before = this.nodes[index2].raws.before;
        }
        return super.removeChild(child);
    }
    toResult(opts = {}) {
        let lazy = new LazyResult$3(new Processor$2(), this, opts);
        return lazy.stringify();
    }
};
Root$5.registerLazyResult = (dependant)=>{
    LazyResult$3 = dependant;
};
Root$5.registerProcessor = (dependant)=>{
    Processor$2 = dependant;
};
var root = Root$5;
Root$5.default = Root$5;
Container$4.registerRoot(Root$5);
let list$2 = {
    comma (string) {
        return list$2.split(string, [
            ","
        ], true);
    },
    space (string) {
        let spaces = [
            " ",
            "\n",
            "	"
        ];
        return list$2.split(string, spaces);
    },
    split (string, separators, last) {
        let array = [];
        let current = "";
        let split = false;
        let func = 0;
        let inQuote = false;
        let prevQuote = "";
        let escape = false;
        for (let letter of string){
            if (escape) {
                escape = false;
            } else if (letter === "\\") {
                escape = true;
            } else if (inQuote) {
                if (letter === prevQuote) {
                    inQuote = false;
                }
            } else if (letter === '"' || letter === "'") {
                inQuote = true;
                prevQuote = letter;
            } else if (letter === "(") {
                func += 1;
            } else if (letter === ")") {
                if (func > 0) func -= 1;
            } else if (func === 0) {
                if (separators.includes(letter)) split = true;
            }
            if (split) {
                if (current !== "") array.push(current.trim());
                current = "";
                split = false;
            } else {
                current += letter;
            }
        }
        if (last || current !== "") array.push(current.trim());
        return array;
    }
};
var list_1 = list$2;
list$2.default = list$2;
let Container$3 = container;
let list$1 = list_1;
let Rule$3 = class Rule2 extends Container$3 {
    constructor(defaults){
        super(defaults);
        this.type = "rule";
        if (!this.nodes) this.nodes = [];
    }
    get selectors() {
        return list$1.comma(this.selector);
    }
    set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep2 = match ? match[0] : "," + this.raw("between", "beforeOpen");
        this.selector = values.join(sep2);
    }
};
var rule = Rule$3;
Rule$3.default = Rule$3;
Container$3.registerRule(Rule$3);
let Declaration$2 = declaration;
let tokenizer22 = tokenize;
let Comment$2 = comment;
let AtRule$2 = atRule;
let Root$4 = root;
let Rule$2 = rule;
const SAFE_COMMENT_NEIGHBOR = {
    empty: true,
    space: true
};
function findLastWithPosition(tokens) {
    for(let i2 = tokens.length - 1; i2 >= 0; i2--){
        let token = tokens[i2];
        let pos = token[3] || token[2];
        if (pos) return pos;
    }
}
let Parser$1 = class Parser2 {
    constructor(input2){
        this.input = input2;
        this.root = new Root$4();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = false;
        this.createTokenizer();
        this.root.source = {
            input: input2,
            start: {
                column: 1,
                line: 1,
                offset: 0
            }
        };
    }
    atrule(token) {
        let node2 = new AtRule$2();
        node2.name = token[1].slice(1);
        if (node2.name === "") {
            this.unnamedAtrule(node2, token);
        }
        this.init(node2, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            type = token[0];
            if (type === "(" || type === "[") {
                brackets.push(type === "(" ? ")" : "]");
            } else if (type === "{" && brackets.length > 0) {
                brackets.push("}");
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
            }
            if (brackets.length === 0) {
                if (type === ";") {
                    node2.source.end = this.getPosition(token[2]);
                    node2.source.end.offset++;
                    this.semicolon = true;
                    break;
                } else if (type === "{") {
                    open = true;
                    break;
                } else if (type === "}") {
                    if (params.length > 0) {
                        shift = params.length - 1;
                        prev = params[shift];
                        while(prev && prev[0] === "space"){
                            prev = params[--shift];
                        }
                        if (prev) {
                            node2.source.end = this.getPosition(prev[3] || prev[2]);
                            node2.source.end.offset++;
                        }
                    }
                    this.end(token);
                    break;
                } else {
                    params.push(token);
                }
            } else {
                params.push(token);
            }
            if (this.tokenizer.endOfFile()) {
                last = true;
                break;
            }
        }
        node2.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
            node2.raws.afterName = this.spacesAndCommentsFromStart(params);
            this.raw(node2, "params", params);
            if (last) {
                token = params[params.length - 1];
                node2.source.end = this.getPosition(token[3] || token[2]);
                node2.source.end.offset++;
                this.spaces = node2.raws.between;
                node2.raws.between = "";
            }
        } else {
            node2.raws.afterName = "";
            node2.params = "";
        }
        if (open) {
            node2.nodes = [];
            this.current = node2;
        }
    }
    checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false) return;
        let founded = 0;
        let token;
        for(let j = colon - 1; j >= 0; j--){
            token = tokens[j];
            if (token[0] !== "space") {
                founded += 1;
                if (founded === 2) break;
            }
        }
        throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
    }
    colon(tokens) {
        let brackets = 0;
        let token, type, prev;
        for (let [i2, element] of tokens.entries()){
            token = element;
            type = token[0];
            if (type === "(") {
                brackets += 1;
            }
            if (type === ")") {
                brackets -= 1;
            }
            if (brackets === 0 && type === ":") {
                if (!prev) {
                    this.doubleColon(token);
                } else if (prev[0] === "word" && prev[1] === "progid") {
                    continue;
                } else {
                    return i2;
                }
            }
            prev = token;
        }
        return false;
    }
    comment(token) {
        let node2 = new Comment$2();
        this.init(node2, token[2]);
        node2.source.end = this.getPosition(token[3] || token[2]);
        node2.source.end.offset++;
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
            node2.text = "";
            node2.raws.left = text;
            node2.raws.right = "";
        } else {
            let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
            node2.text = match[2];
            node2.raws.left = match[1];
            node2.raws.right = match[3];
        }
    }
    createTokenizer() {
        this.tokenizer = tokenizer22(this.input);
    }
    decl(tokens, customProperty) {
        let node2 = new Declaration$2();
        this.init(node2, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ";") {
            this.semicolon = true;
            tokens.pop();
        }
        node2.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        node2.source.end.offset++;
        while(tokens[0][0] !== "word"){
            if (tokens.length === 1) this.unknownWord(tokens);
            node2.raws.before += tokens.shift()[1];
        }
        node2.source.start = this.getPosition(tokens[0][2]);
        node2.prop = "";
        while(tokens.length){
            let type = tokens[0][0];
            if (type === ":" || type === "space" || type === "comment") {
                break;
            }
            node2.prop += tokens.shift()[1];
        }
        node2.raws.between = "";
        let token;
        while(tokens.length){
            token = tokens.shift();
            if (token[0] === ":") {
                node2.raws.between += token[1];
                break;
            } else {
                if (token[0] === "word" && /\w/.test(token[1])) {
                    this.unknownWord([
                        token
                    ]);
                }
                node2.raws.between += token[1];
            }
        }
        if (node2.prop[0] === "_" || node2.prop[0] === "*") {
            node2.raws.before += node2.prop[0];
            node2.prop = node2.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for(let i2 = tokens.length - 1; i2 >= 0; i2--){
            token = tokens[i2];
            if (token[1].toLowerCase() === "!important") {
                node2.important = true;
                let string = this.stringFrom(tokens, i2);
                string = this.spacesFromEnd(tokens) + string;
                if (string !== " !important") node2.raws.important = string;
                break;
            } else if (token[1].toLowerCase() === "important") {
                let cache = tokens.slice(0);
                let str = "";
                for(let j = i2; j > 0; j--){
                    let type = cache[j][0];
                    if (str.trim().indexOf("!") === 0 && type !== "space") {
                        break;
                    }
                    str = cache.pop()[1] + str;
                }
                if (str.trim().indexOf("!") === 0) {
                    node2.important = true;
                    node2.raws.important = str;
                    tokens = cache;
                }
            }
            if (token[0] !== "space" && token[0] !== "comment") {
                break;
            }
        }
        let hasWord = tokens.some((i2)=>i2[0] !== "space" && i2[0] !== "comment");
        if (hasWord) {
            node2.raws.between += firstSpaces.map((i2)=>i2[1]).join("");
            firstSpaces = [];
        }
        this.raw(node2, "value", firstSpaces.concat(tokens), customProperty);
        if (node2.value.includes(":") && !customProperty) {
            this.checkMissedSemicolon(tokens);
        }
    }
    doubleColon(token) {
        throw this.input.error("Double colon", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
    emptyRule(token) {
        let node2 = new Rule$2();
        this.init(node2, token[2]);
        node2.selector = "";
        node2.raws.between = "";
        this.current = node2;
    }
    end(token) {
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        if (this.current.parent) {
            this.current.source.end = this.getPosition(token[2]);
            this.current.source.end.offset++;
            this.current = this.current.parent;
        } else {
            this.unexpectedClose(token);
        }
    }
    endFile() {
        if (this.current.parent) this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) {
            this.current.raws.semicolon = this.semicolon;
        }
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.root.source.end = this.getPosition(this.tokenizer.position());
    }
    freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
            let prev = this.current.nodes[this.current.nodes.length - 1];
            if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
                prev.raws.ownSemicolon = this.spaces;
                this.spaces = "";
            }
        }
    }
    // Helpers
    getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
            column: pos.col,
            line: pos.line,
            offset
        };
    }
    init(node2, offset) {
        this.current.push(node2);
        node2.source = {
            input: this.input,
            start: this.getPosition(offset)
        };
        node2.raws.before = this.spaces;
        this.spaces = "";
        if (node2.type !== "comment") this.semicolon = false;
    }
    other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith("--");
        let tokens = [];
        let token = start;
        while(token){
            type = token[0];
            tokens.push(token);
            if (type === "(" || type === "[") {
                if (!bracket) bracket = token;
                brackets.push(type === "(" ? ")" : "]");
            } else if (customProperty && colon && type === "{") {
                if (!bracket) bracket = token;
                brackets.push("}");
            } else if (brackets.length === 0) {
                if (type === ";") {
                    if (colon) {
                        this.decl(tokens, customProperty);
                        return;
                    } else {
                        break;
                    }
                } else if (type === "{") {
                    this.rule(tokens);
                    return;
                } else if (type === "}") {
                    this.tokenizer.back(tokens.pop());
                    end = true;
                    break;
                } else if (type === ":") {
                    colon = true;
                }
            } else if (type === brackets[brackets.length - 1]) {
                brackets.pop();
                if (brackets.length === 0) bracket = null;
            }
            token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile()) end = true;
        if (brackets.length > 0) this.unclosedBracket(bracket);
        if (end && colon) {
            if (!customProperty) {
                while(tokens.length){
                    token = tokens[tokens.length - 1][0];
                    if (token !== "space" && token !== "comment") break;
                    this.tokenizer.back(tokens.pop());
                }
            }
            this.decl(tokens, customProperty);
        } else {
            this.unknownWord(tokens);
        }
    }
    parse() {
        let token;
        while(!this.tokenizer.endOfFile()){
            token = this.tokenizer.nextToken();
            switch(token[0]){
                case "space":
                    this.spaces += token[1];
                    break;
                case ";":
                    this.freeSemicolon(token);
                    break;
                case "}":
                    this.end(token);
                    break;
                case "comment":
                    this.comment(token);
                    break;
                case "at-word":
                    this.atrule(token);
                    break;
                case "{":
                    this.emptyRule(token);
                    break;
                default:
                    this.other(token);
                    break;
            }
        }
        this.endFile();
    }
    precheckMissedSemicolon() {}
    raw(node2, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = "";
        let clean = true;
        let next, prev;
        for(let i2 = 0; i2 < length; i2 += 1){
            token = tokens[i2];
            type = token[0];
            if (type === "space" && i2 === length - 1 && !customProperty) {
                clean = false;
            } else if (type === "comment") {
                prev = tokens[i2 - 1] ? tokens[i2 - 1][0] : "empty";
                next = tokens[i2 + 1] ? tokens[i2 + 1][0] : "empty";
                if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
                    if (value.slice(-1) === ",") {
                        clean = false;
                    } else {
                        value += token[1];
                    }
                } else {
                    clean = false;
                }
            } else {
                value += token[1];
            }
        }
        if (!clean) {
            let raw = tokens.reduce((all, i2)=>all + i2[1], "");
            node2.raws[prop] = {
                raw,
                value
            };
        }
        node2[prop] = value;
    }
    rule(tokens) {
        tokens.pop();
        let node2 = new Rule$2();
        this.init(node2, tokens[0][2]);
        node2.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node2, "selector", tokens);
        this.current = node2;
    }
    spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space" && lastTokenType !== "comment") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    // Errors
    spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = "";
        while(tokens.length){
            next = tokens[0][0];
            if (next !== "space" && next !== "comment") break;
            spaces += tokens.shift()[1];
        }
        return spaces;
    }
    spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while(tokens.length){
            lastTokenType = tokens[tokens.length - 1][0];
            if (lastTokenType !== "space") break;
            spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
    }
    stringFrom(tokens, from) {
        let result2 = "";
        for(let i2 = from; i2 < tokens.length; i2++){
            result2 += tokens[i2][1];
        }
        tokens.splice(from, tokens.length - from);
        return result2;
    }
    unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error("Unclosed block", pos.line, pos.column);
    }
    unclosedBracket(bracket) {
        throw this.input.error("Unclosed bracket", {
            offset: bracket[2]
        }, {
            offset: bracket[2] + 1
        });
    }
    unexpectedClose(token) {
        throw this.input.error("Unexpected }", {
            offset: token[2]
        }, {
            offset: token[2] + 1
        });
    }
    unknownWord(tokens) {
        throw this.input.error("Unknown word", {
            offset: tokens[0][2]
        }, {
            offset: tokens[0][2] + tokens[0][1].length
        });
    }
    unnamedAtrule(node2, token) {
        throw this.input.error("At-rule without name", {
            offset: token[2]
        }, {
            offset: token[2] + token[1].length
        });
    }
};
var parser = Parser$1;
let Container$2 = container;
let Parser22 = parser;
let Input$2 = input;
function parse$3(css, opts) {
    let input2 = new Input$2(css, opts);
    let parser2 = new Parser22(input2);
    try {
        parser2.parse();
    } catch (e2) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (e2.name === "CssSyntaxError" && opts && opts.from) {
                if (/\.scss$/i.test(opts.from)) {
                    e2.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
                } else if (/\.sass/i.test(opts.from)) {
                    e2.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
                } else if (/\.less$/i.test(opts.from)) {
                    e2.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
                }
            }
        }
        throw e2;
    }
    return parser2.root;
}
var parse_1 = parse$3;
parse$3.default = parse$3;
Container$2.registerParse(parse$3);
let { isClean, my } = symbols;
let MapGenerator$1 = mapGenerator;
let stringify$2 = stringify_1;
let Container$1 = container;
let Document$2 = document$1;
let warnOnce$1 = warnOnce$2;
let Result$2 = result;
let parse$2 = parse_1;
let Root$3 = root;
const TYPE_TO_CLASS_NAME = {
    atrule: "AtRule",
    comment: "Comment",
    decl: "Declaration",
    document: "Document",
    root: "Root",
    rule: "Rule"
};
const PLUGIN_PROPS = {
    AtRule: true,
    AtRuleExit: true,
    Comment: true,
    CommentExit: true,
    Declaration: true,
    DeclarationExit: true,
    Document: true,
    DocumentExit: true,
    Once: true,
    OnceExit: true,
    postcssPlugin: true,
    prepare: true,
    Root: true,
    RootExit: true,
    Rule: true,
    RuleExit: true
};
const NOT_VISITORS = {
    Once: true,
    postcssPlugin: true,
    prepare: true
};
const CHILDREN = 0;
function isPromise(obj) {
    return typeof obj === "object" && typeof obj.then === "function";
}
function getEvents(node2) {
    let key = false;
    let type = TYPE_TO_CLASS_NAME[node2.type];
    if (node2.type === "decl") {
        key = node2.prop.toLowerCase();
    } else if (node2.type === "atrule") {
        key = node2.name.toLowerCase();
    }
    if (key && node2.append) {
        return [
            type,
            type + "-" + key,
            CHILDREN,
            type + "Exit",
            type + "Exit-" + key
        ];
    } else if (key) {
        return [
            type,
            type + "-" + key,
            type + "Exit",
            type + "Exit-" + key
        ];
    } else if (node2.append) {
        return [
            type,
            CHILDREN,
            type + "Exit"
        ];
    } else {
        return [
            type,
            type + "Exit"
        ];
    }
}
function toStack(node2) {
    let events;
    if (node2.type === "document") {
        events = [
            "Document",
            CHILDREN,
            "DocumentExit"
        ];
    } else if (node2.type === "root") {
        events = [
            "Root",
            CHILDREN,
            "RootExit"
        ];
    } else {
        events = getEvents(node2);
    }
    return {
        eventIndex: 0,
        events,
        iterator: 0,
        node: node2,
        visitorIndex: 0,
        visitors: []
    };
}
function cleanMarks(node2) {
    node2[isClean] = false;
    if (node2.nodes) node2.nodes.forEach((i2)=>cleanMarks(i2));
    return node2;
}
let postcss$2 = {};
let LazyResult$2 = class LazyResult2 {
    constructor(processor2, css, opts){
        this.stringified = false;
        this.processed = false;
        let root2;
        if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
            root2 = cleanMarks(css);
        } else if (css instanceof LazyResult2 || css instanceof Result$2) {
            root2 = cleanMarks(css.root);
            if (css.map) {
                if (typeof opts.map === "undefined") opts.map = {};
                if (!opts.map.inline) opts.map.inline = false;
                opts.map.prev = css.map;
            }
        } else {
            let parser2 = parse$2;
            if (opts.syntax) parser2 = opts.syntax.parse;
            if (opts.parser) parser2 = opts.parser;
            if (parser2.parse) parser2 = parser2.parse;
            try {
                root2 = parser2(css, opts);
            } catch (error) {
                this.processed = true;
                this.error = error;
            }
            if (root2 && !root2[my]) {
                Container$1.rebuild(root2);
            }
        }
        this.result = new Result$2(processor2, root2, opts);
        this.helpers = {
            ...postcss$2,
            postcss: postcss$2,
            result: this.result
        };
        this.plugins = this.processor.plugins.map((plugin22)=>{
            if (typeof plugin22 === "object" && plugin22.prepare) {
                return {
                    ...plugin22,
                    ...plugin22.prepare(this.result)
                };
            } else {
                return plugin22;
            }
        });
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        if (this.processed) return Promise.resolve(this.result);
        if (!this.processing) {
            this.processing = this.runAsync();
        }
        return this.processing;
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
    }
    handleError(error, node2) {
        let plugin22 = this.result.lastPlugin;
        try {
            if (node2) node2.addToError(error);
            this.error = error;
            if (error.name === "CssSyntaxError" && !error.plugin) {
                error.plugin = plugin22.postcssPlugin;
                error.setMessage();
            } else if (plugin22.postcssVersion) {
                if ("TURBOPACK compile-time truthy", 1) {
                    let pluginName = plugin22.postcssPlugin;
                    let pluginVer = plugin22.postcssVersion;
                    let runtimeVer = this.result.processor.version;
                    let a2 = pluginVer.split(".");
                    let b = runtimeVer.split(".");
                    if (a2[0] !== b[0] || parseInt(a2[1]) > parseInt(b[1])) {
                        console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
                    }
                }
            }
        } catch (err) {
            if (console && console.error) console.error(err);
        }
        return error;
    }
    prepareVisitors() {
        this.listeners = {};
        let add = (plugin22, type, cb)=>{
            if (!this.listeners[type]) this.listeners[type] = [];
            this.listeners[type].push([
                plugin22,
                cb
            ]);
        };
        for (let plugin22 of this.plugins){
            if (typeof plugin22 === "object") {
                for(let event in plugin22){
                    if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                        throw new Error(`Unknown event ${event} in ${plugin22.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                    }
                    if (!NOT_VISITORS[event]) {
                        if (typeof plugin22[event] === "object") {
                            for(let filter in plugin22[event]){
                                if (filter === "*") {
                                    add(plugin22, event, plugin22[event][filter]);
                                } else {
                                    add(plugin22, event + "-" + filter.toLowerCase(), plugin22[event][filter]);
                                }
                            }
                        } else if (typeof plugin22[event] === "function") {
                            add(plugin22, event, plugin22[event]);
                        }
                    }
                }
            }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
    }
    async runAsync() {
        this.plugin = 0;
        for(let i2 = 0; i2 < this.plugins.length; i2++){
            let plugin22 = this.plugins[i2];
            let promise = this.runOnRoot(plugin22);
            if (isPromise(promise)) {
                try {
                    await promise;
                } catch (error) {
                    throw this.handleError(error);
                }
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root2 = this.result.root;
            while(!root2[isClean]){
                root2[isClean] = true;
                let stack = [
                    toStack(root2)
                ];
                while(stack.length > 0){
                    let promise = this.visitTick(stack);
                    if (isPromise(promise)) {
                        try {
                            await promise;
                        } catch (e2) {
                            let node2 = stack[stack.length - 1].node;
                            throw this.handleError(e2, node2);
                        }
                    }
                }
            }
            if (this.listeners.OnceExit) {
                for (let [plugin22, visitor] of this.listeners.OnceExit){
                    this.result.lastPlugin = plugin22;
                    try {
                        if (root2.type === "document") {
                            let roots = root2.nodes.map((subRoot)=>visitor(subRoot, this.helpers));
                            await Promise.all(roots);
                        } else {
                            await visitor(root2, this.helpers);
                        }
                    } catch (e2) {
                        throw this.handleError(e2);
                    }
                }
            }
        }
        this.processed = true;
        return this.stringify();
    }
    runOnRoot(plugin22) {
        this.result.lastPlugin = plugin22;
        try {
            if (typeof plugin22 === "object" && plugin22.Once) {
                if (this.result.root.type === "document") {
                    let roots = this.result.root.nodes.map((root2)=>plugin22.Once(root2, this.helpers));
                    if (isPromise(roots[0])) {
                        return Promise.all(roots);
                    }
                    return roots;
                }
                return plugin22.Once(this.result.root, this.helpers);
            } else if (typeof plugin22 === "function") {
                return plugin22(this.result.root, this.result);
            }
        } catch (error) {
            throw this.handleError(error);
        }
    }
    stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify$2;
        if (opts.syntax) str = opts.syntax.stringify;
        if (opts.stringifier) str = opts.stringifier;
        if (str.stringify) str = str.stringify;
        let map = new MapGenerator$1(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
    }
    sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        this.processed = true;
        if (this.processing) {
            throw this.getAsyncError();
        }
        for (let plugin22 of this.plugins){
            let promise = this.runOnRoot(plugin22);
            if (isPromise(promise)) {
                throw this.getAsyncError();
            }
        }
        this.prepareVisitors();
        if (this.hasListener) {
            let root2 = this.result.root;
            while(!root2[isClean]){
                root2[isClean] = true;
                this.walkSync(root2);
            }
            if (this.listeners.OnceExit) {
                if (root2.type === "document") {
                    for (let subRoot of root2.nodes){
                        this.visitSync(this.listeners.OnceExit, subRoot);
                    }
                } else {
                    this.visitSync(this.listeners.OnceExit, root2);
                }
            }
        }
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!("from" in this.opts)) {
                warnOnce$1("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this.css;
    }
    visitSync(visitors, node2) {
        for (let [plugin22, visitor] of visitors){
            this.result.lastPlugin = plugin22;
            let promise;
            try {
                promise = visitor(node2, this.helpers);
            } catch (e2) {
                throw this.handleError(e2, node2.proxyOf);
            }
            if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
                return true;
            }
            if (isPromise(promise)) {
                throw this.getAsyncError();
            }
        }
    }
    visitTick(stack) {
        let visit2 = stack[stack.length - 1];
        let { node: node2, visitors } = visit2;
        if (node2.type !== "root" && node2.type !== "document" && !node2.parent) {
            stack.pop();
            return;
        }
        if (visitors.length > 0 && visit2.visitorIndex < visitors.length) {
            let [plugin22, visitor] = visitors[visit2.visitorIndex];
            visit2.visitorIndex += 1;
            if (visit2.visitorIndex === visitors.length) {
                visit2.visitors = [];
                visit2.visitorIndex = 0;
            }
            this.result.lastPlugin = plugin22;
            try {
                return visitor(node2.toProxy(), this.helpers);
            } catch (e2) {
                throw this.handleError(e2, node2);
            }
        }
        if (visit2.iterator !== 0) {
            let iterator = visit2.iterator;
            let child;
            while(child = node2.nodes[node2.indexes[iterator]]){
                node2.indexes[iterator] += 1;
                if (!child[isClean]) {
                    child[isClean] = true;
                    stack.push(toStack(child));
                    return;
                }
            }
            visit2.iterator = 0;
            delete node2.indexes[iterator];
        }
        let events = visit2.events;
        while(visit2.eventIndex < events.length){
            let event = events[visit2.eventIndex];
            visit2.eventIndex += 1;
            if (event === CHILDREN) {
                if (node2.nodes && node2.nodes.length) {
                    node2[isClean] = true;
                    visit2.iterator = node2.getIterator();
                }
                return;
            } else if (this.listeners[event]) {
                visit2.visitors = this.listeners[event];
                return;
            }
        }
        stack.pop();
    }
    walkSync(node2) {
        node2[isClean] = true;
        let events = getEvents(node2);
        for (let event of events){
            if (event === CHILDREN) {
                if (node2.nodes) {
                    node2.each((child)=>{
                        if (!child[isClean]) this.walkSync(child);
                    });
                }
            } else {
                let visitors = this.listeners[event];
                if (visitors) {
                    if (this.visitSync(visitors, node2.toProxy())) return;
                }
            }
        }
    }
    warnings() {
        return this.sync().warnings();
    }
    get content() {
        return this.stringify().content;
    }
    get css() {
        return this.stringify().css;
    }
    get map() {
        return this.stringify().map;
    }
    get messages() {
        return this.sync().messages;
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        return this.sync().root;
    }
    get [Symbol.toStringTag]() {
        return "LazyResult";
    }
};
LazyResult$2.registerPostcss = (dependant)=>{
    postcss$2 = dependant;
};
var lazyResult = LazyResult$2;
LazyResult$2.default = LazyResult$2;
Root$3.registerLazyResult(LazyResult$2);
Document$2.registerLazyResult(LazyResult$2);
let MapGenerator22 = mapGenerator;
let stringify$1 = stringify_1;
let warnOnce22 = warnOnce$2;
let parse$1 = parse_1;
const Result$1 = result;
let NoWorkResult$1 = class NoWorkResult2 {
    constructor(processor2, css, opts){
        css = css.toString();
        this.stringified = false;
        this._processor = processor2;
        this._css = css;
        this._opts = opts;
        this._map = void 0;
        let root2;
        let str = stringify$1;
        this.result = new Result$1(this._processor, root2, this._opts);
        this.result.css = css;
        let self = this;
        Object.defineProperty(this.result, "root", {
            get () {
                return self.root;
            }
        });
        let map = new MapGenerator22(str, root2, this._opts, css);
        if (map.isMap()) {
            let [generatedCSS, generatedMap] = map.generate();
            if (generatedCSS) {
                this.result.css = generatedCSS;
            }
            if (generatedMap) {
                this.result.map = generatedMap;
            }
        } else {
            map.clearAnnotation();
            this.result.css = map.css;
        }
    }
    async() {
        if (this.error) return Promise.reject(this.error);
        return Promise.resolve(this.result);
    }
    catch(onRejected) {
        return this.async().catch(onRejected);
    }
    finally(onFinally) {
        return this.async().then(onFinally, onFinally);
    }
    sync() {
        if (this.error) throw this.error;
        return this.result;
    }
    then(onFulfilled, onRejected) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (!("from" in this._opts)) {
                warnOnce22("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
            }
        }
        return this.async().then(onFulfilled, onRejected);
    }
    toString() {
        return this._css;
    }
    warnings() {
        return [];
    }
    get content() {
        return this.result.css;
    }
    get css() {
        return this.result.css;
    }
    get map() {
        return this.result.map;
    }
    get messages() {
        return [];
    }
    get opts() {
        return this.result.opts;
    }
    get processor() {
        return this.result.processor;
    }
    get root() {
        if (this._root) {
            return this._root;
        }
        let root2;
        let parser2 = parse$1;
        try {
            root2 = parser2(this._css, this._opts);
        } catch (error) {
            this.error = error;
        }
        if (this.error) {
            throw this.error;
        } else {
            this._root = root2;
            return root2;
        }
    }
    get [Symbol.toStringTag]() {
        return "NoWorkResult";
    }
};
var noWorkResult = NoWorkResult$1;
NoWorkResult$1.default = NoWorkResult$1;
let NoWorkResult22 = noWorkResult;
let LazyResult$1 = lazyResult;
let Document$1 = document$1;
let Root$2 = root;
let Processor$1 = class Processor2 {
    constructor(plugins = []){
        this.version = "8.4.38";
        this.plugins = this.normalize(plugins);
    }
    normalize(plugins) {
        let normalized = [];
        for (let i2 of plugins){
            if (i2.postcss === true) {
                i2 = i2();
            } else if (i2.postcss) {
                i2 = i2.postcss;
            }
            if (typeof i2 === "object" && Array.isArray(i2.plugins)) {
                normalized = normalized.concat(i2.plugins);
            } else if (typeof i2 === "object" && i2.postcssPlugin) {
                normalized.push(i2);
            } else if (typeof i2 === "function") {
                normalized.push(i2);
            } else if (typeof i2 === "object" && (i2.parse || i2.stringify)) {
                if ("TURBOPACK compile-time truthy", 1) {
                    throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
                }
            } else {
                throw new Error(i2 + " is not a PostCSS plugin");
            }
        }
        return normalized;
    }
    process(css, opts = {}) {
        if (!this.plugins.length && !opts.parser && !opts.stringifier && !opts.syntax) {
            return new NoWorkResult22(this, css, opts);
        } else {
            return new LazyResult$1(this, css, opts);
        }
    }
    use(plugin22) {
        this.plugins = this.plugins.concat(this.normalize([
            plugin22
        ]));
        return this;
    }
};
var processor = Processor$1;
Processor$1.default = Processor$1;
Root$2.registerProcessor(Processor$1);
Document$1.registerProcessor(Processor$1);
let Declaration$1 = declaration;
let PreviousMap22 = previousMap;
let Comment$1 = comment;
let AtRule$1 = atRule;
let Input$1 = input;
let Root$1 = root;
let Rule$1 = rule;
function fromJSON$1(json, inputs) {
    if (Array.isArray(json)) return json.map((n2)=>fromJSON$1(n2));
    let { inputs: ownInputs, ...defaults } = json;
    if (ownInputs) {
        inputs = [];
        for (let input2 of ownInputs){
            let inputHydrated = {
                ...input2,
                __proto__: Input$1.prototype
            };
            if (inputHydrated.map) {
                inputHydrated.map = {
                    ...inputHydrated.map,
                    __proto__: PreviousMap22.prototype
                };
            }
            inputs.push(inputHydrated);
        }
    }
    if (defaults.nodes) {
        defaults.nodes = json.nodes.map((n2)=>fromJSON$1(n2, inputs));
    }
    if (defaults.source) {
        let { inputId, ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) {
            defaults.source.input = inputs[inputId];
        }
    }
    if (defaults.type === "root") {
        return new Root$1(defaults);
    } else if (defaults.type === "decl") {
        return new Declaration$1(defaults);
    } else if (defaults.type === "rule") {
        return new Rule$1(defaults);
    } else if (defaults.type === "comment") {
        return new Comment$1(defaults);
    } else if (defaults.type === "atrule") {
        return new AtRule$1(defaults);
    } else {
        throw new Error("Unknown node type: " + json.type);
    }
}
var fromJSON_1 = fromJSON$1;
fromJSON$1.default = fromJSON$1;
let CssSyntaxError22 = cssSyntaxError;
let Declaration22 = declaration;
let LazyResult22 = lazyResult;
let Container22 = container;
let Processor22 = processor;
let stringify$6 = stringify_1;
let fromJSON = fromJSON_1;
let Document222 = document$1;
let Warning22 = warning;
let Comment22 = comment;
let AtRule22 = atRule;
let Result22 = result;
let Input22 = input;
let parse = parse_1;
let list = list_1;
let Rule22 = rule;
let Root22 = root;
let Node22 = node;
function postcss(...plugins) {
    if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
    }
    return new Processor22(plugins);
}
postcss.plugin = function plugin2(name, initializer) {
    let warningPrinted = false;
    function creator(...args) {
        if (console && console.warn && !warningPrinted) {
            warningPrinted = true;
            console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
            if (process.env.LANG && process.env.LANG.startsWith("cn")) {
                console.warn(name + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226");
            }
        }
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor22().version;
        return transformer;
    }
    let cache;
    Object.defineProperty(creator, "postcss", {
        get () {
            if (!cache) cache = creator();
            return cache;
        }
    });
    creator.process = function(css, processOpts, pluginOpts) {
        return postcss([
            creator(pluginOpts)
        ]).process(css, processOpts);
    };
    return creator;
};
postcss.stringify = stringify$6;
postcss.parse = parse;
postcss.fromJSON = fromJSON;
postcss.list = list;
postcss.comment = (defaults)=>new Comment22(defaults);
postcss.atRule = (defaults)=>new AtRule22(defaults);
postcss.decl = (defaults)=>new Declaration22(defaults);
postcss.rule = (defaults)=>new Rule22(defaults);
postcss.root = (defaults)=>new Root22(defaults);
postcss.document = (defaults)=>new Document222(defaults);
postcss.CssSyntaxError = CssSyntaxError22;
postcss.Declaration = Declaration22;
postcss.Container = Container22;
postcss.Processor = Processor22;
postcss.Document = Document222;
postcss.Comment = Comment22;
postcss.Warning = Warning22;
postcss.AtRule = AtRule22;
postcss.Result = Result22;
postcss.Input = Input22;
postcss.Rule = Rule22;
postcss.Root = Root22;
postcss.Node = Node22;
LazyResult22.registerPostcss(postcss);
var postcss_1 = postcss;
postcss.default = postcss;
const postcss$1 = /* @__PURE__ */ getDefaultExportFromCjs(postcss_1);
postcss$1.stringify;
postcss$1.fromJSON;
postcss$1.plugin;
postcss$1.parse;
postcss$1.list;
postcss$1.document;
postcss$1.comment;
postcss$1.atRule;
postcss$1.rule;
postcss$1.decl;
postcss$1.root;
postcss$1.CssSyntaxError;
postcss$1.Declaration;
postcss$1.Container;
postcss$1.Processor;
postcss$1.Document;
postcss$1.Comment;
postcss$1.Warning;
postcss$1.AtRule;
postcss$1.Result;
postcss$1.Input;
postcss$1.Rule;
postcss$1.Root;
postcss$1.Node;
class BaseRRNode {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    constructor(..._args){
        __publicField22(this, "parentElement", null);
        __publicField22(this, "parentNode", null);
        __publicField22(this, "ownerDocument");
        __publicField22(this, "firstChild", null);
        __publicField22(this, "lastChild", null);
        __publicField22(this, "previousSibling", null);
        __publicField22(this, "nextSibling", null);
        __publicField22(this, "ELEMENT_NODE", 1);
        __publicField22(this, "TEXT_NODE", 3);
        __publicField22(this, "nodeType");
        __publicField22(this, "nodeName");
        __publicField22(this, "RRNodeType");
    }
    get childNodes() {
        const childNodes2 = [];
        let childIterator = this.firstChild;
        while(childIterator){
            childNodes2.push(childIterator);
            childIterator = childIterator.nextSibling;
        }
        return childNodes2;
    }
    contains(node2) {
        if (!(node2 instanceof BaseRRNode)) return false;
        else if (node2.ownerDocument !== this.ownerDocument) return false;
        else if (node2 === this) return true;
        while(node2.parentNode){
            if (node2.parentNode === this) return true;
            node2 = node2.parentNode;
        }
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    appendChild(_newChild) {
        throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(_newChild, _refChild) {
        throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeChild(_node) {
        throw new Error(`RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.`);
    }
    toString() {
        return "RRNode";
    }
}
const testableAccessors = {
    Node: [
        "childNodes",
        "parentNode",
        "parentElement",
        "textContent"
    ],
    ShadowRoot: [
        "host",
        "styleSheets"
    ],
    Element: [
        "shadowRoot",
        "querySelector",
        "querySelectorAll"
    ],
    MutationObserver: []
};
const testableMethods = {
    Node: [
        "contains",
        "getRootNode"
    ],
    ShadowRoot: [
        "getSelection"
    ],
    Element: [],
    MutationObserver: [
        "constructor"
    ]
};
const untaintedBasePrototype = {};
const isAngularZonePresent = ()=>{
    return !!globalThis.Zone;
};
function getUntaintedPrototype(key) {
    if (untaintedBasePrototype[key]) return untaintedBasePrototype[key];
    const defaultObj = globalThis[key];
    const defaultPrototype = defaultObj.prototype;
    const accessorNames = key in testableAccessors ? testableAccessors[key] : void 0;
    const isUntaintedAccessors = Boolean(accessorNames && // @ts-expect-error 2345
    accessorNames.every((accessor)=>{
        var _a2, _b;
        return Boolean((_b = (_a2 = Object.getOwnPropertyDescriptor(defaultPrototype, accessor)) == null ? void 0 : _a2.get) == null ? void 0 : _b.toString().includes("[native code]"));
    }));
    const methodNames = key in testableMethods ? testableMethods[key] : void 0;
    const isUntaintedMethods = Boolean(methodNames && methodNames.every(// @ts-expect-error 2345
    (method)=>{
        var _a2;
        return typeof defaultPrototype[method] === "function" && ((_a2 = defaultPrototype[method]) == null ? void 0 : _a2.toString().includes("[native code]"));
    }));
    if (isUntaintedAccessors && isUntaintedMethods && !isAngularZonePresent()) {
        untaintedBasePrototype[key] = defaultObj.prototype;
        return defaultObj.prototype;
    }
    try {
        const iframeEl = document.createElement("iframe");
        document.body.appendChild(iframeEl);
        const win = iframeEl.contentWindow;
        if (!win) return defaultObj.prototype;
        const untaintedObject = win[key].prototype;
        document.body.removeChild(iframeEl);
        if (!untaintedObject) return defaultPrototype;
        return untaintedBasePrototype[key] = untaintedObject;
    } catch  {
        return defaultPrototype;
    }
}
const untaintedAccessorCache = {};
function getUntaintedAccessor(key, instance, accessor) {
    var _a2;
    const cacheKey = `${key}.${String(accessor)}`;
    if (untaintedAccessorCache[cacheKey]) return untaintedAccessorCache[cacheKey].call(instance);
    const untaintedPrototype = getUntaintedPrototype(key);
    const untaintedAccessor = (_a2 = Object.getOwnPropertyDescriptor(untaintedPrototype, accessor)) == null ? void 0 : _a2.get;
    if (!untaintedAccessor) return instance[accessor];
    untaintedAccessorCache[cacheKey] = untaintedAccessor;
    return untaintedAccessor.call(instance);
}
const untaintedMethodCache = {};
function getUntaintedMethod(key, instance, method) {
    const cacheKey = `${key}.${String(method)}`;
    if (untaintedMethodCache[cacheKey]) return untaintedMethodCache[cacheKey].bind(instance);
    const untaintedPrototype = getUntaintedPrototype(key);
    const untaintedMethod = untaintedPrototype[method];
    if (typeof untaintedMethod !== "function") return instance[method];
    untaintedMethodCache[cacheKey] = untaintedMethod;
    return untaintedMethod.bind(instance);
}
function childNodes(n2) {
    return getUntaintedAccessor("Node", n2, "childNodes");
}
function parentNode(n2) {
    return getUntaintedAccessor("Node", n2, "parentNode");
}
function parentElement(n2) {
    return getUntaintedAccessor("Node", n2, "parentElement");
}
function textContent(n2) {
    return getUntaintedAccessor("Node", n2, "textContent");
}
function contains(n2, other) {
    return getUntaintedMethod("Node", n2, "contains")(other);
}
function getRootNode(n2) {
    return getUntaintedMethod("Node", n2, "getRootNode")();
}
function host(n2) {
    if (!n2 || !("host" in n2)) return null;
    return getUntaintedAccessor("ShadowRoot", n2, "host");
}
function styleSheets(n2) {
    return n2.styleSheets;
}
function shadowRoot(n2) {
    if (!n2 || !("shadowRoot" in n2)) return null;
    return getUntaintedAccessor("Element", n2, "shadowRoot");
}
function querySelector(n2, selectors) {
    return getUntaintedAccessor("Element", n2, "querySelector")(selectors);
}
function querySelectorAll(n2, selectors) {
    return getUntaintedAccessor("Element", n2, "querySelectorAll")(selectors);
}
function mutationObserverCtor() {
    return getUntaintedPrototype("MutationObserver").constructor;
}
const index = {
    childNodes,
    parentNode,
    parentElement,
    textContent,
    contains,
    getRootNode,
    host,
    styleSheets,
    shadowRoot,
    querySelector,
    querySelectorAll,
    mutationObserver: mutationObserverCtor
};
function on(type, fn, target = document) {
    const options = {
        capture: true,
        passive: true
    };
    target.addEventListener(type, fn, options);
    return ()=>target.removeEventListener(type, fn, options);
}
const DEPARTED_MIRROR_ACCESS_WARNING = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
let _mirror = {
    map: {},
    getId () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return -1;
    },
    getNode () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return null;
    },
    removeNodeFromMap () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
    has () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return false;
    },
    reset () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    }
};
if (typeof window !== "undefined" && window.Proxy && window.Reflect) {
    _mirror = new Proxy(_mirror, {
        get (target, prop, receiver) {
            if (prop === "map") {
                console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}
function throttle(func, wait, options = {}) {
    let timeout = null;
    let previous = 0;
    return function(...args) {
        const now = Date.now();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        const context = this;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(()=>{
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(context, args);
            }, remaining);
        }
    };
}
function hookSetter(target, key, d, isRevoked, win = window) {
    const original = win.Object.getOwnPropertyDescriptor(target, key);
    win.Object.defineProperty(target, key, isRevoked ? d : {
        set (value) {
            setTimeout(()=>{
                d.set.call(this, value);
            }, 0);
            if (original && original.set) {
                original.set.call(this, value);
            }
        }
    });
    return ()=>hookSetter(target, key, original || {}, true);
}
function patch(source, name, replacement) {
    try {
        if (!(name in source)) {
            return ()=>{};
        }
        const original = source[name];
        const wrapped = replacement(original);
        if (typeof wrapped === "function") {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __rrweb_original__: {
                    enumerable: false,
                    value: original
                }
            });
        }
        source[name] = wrapped;
        return ()=>{
            source[name] = original;
        };
    } catch  {
        return ()=>{};
    }
}
let nowTimestamp = Date.now;
if (!/* @__PURE__ */ /[1-9][0-9]{12}/.test(Date.now().toString())) {
    nowTimestamp = ()=>/* @__PURE__ */ new Date().getTime();
}
function getWindowScroll(win) {
    var _a2, _b, _c, _d;
    const doc = win.document;
    return {
        left: doc.scrollingElement ? doc.scrollingElement.scrollLeft : win.pageXOffset !== void 0 ? win.pageXOffset : doc.documentElement.scrollLeft || (doc == null ? void 0 : doc.body) && ((_a2 = index.parentElement(doc.body)) == null ? void 0 : _a2.scrollLeft) || ((_b = doc == null ? void 0 : doc.body) == null ? void 0 : _b.scrollLeft) || 0,
        top: doc.scrollingElement ? doc.scrollingElement.scrollTop : win.pageYOffset !== void 0 ? win.pageYOffset : (doc == null ? void 0 : doc.documentElement.scrollTop) || (doc == null ? void 0 : doc.body) && ((_c = index.parentElement(doc.body)) == null ? void 0 : _c.scrollTop) || ((_d = doc == null ? void 0 : doc.body) == null ? void 0 : _d.scrollTop) || 0
    };
}
function getWindowHeight() {
    return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight;
}
function getWindowWidth() {
    return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
}
function closestElementOfNode(node2) {
    if (!node2) {
        return null;
    }
    const el = node2.nodeType === node2.ELEMENT_NODE ? node2 : index.parentElement(node2);
    return el;
}
function isBlocked(node2, blockClass, blockSelector, checkAncestors) {
    if (!node2) {
        return false;
    }
    const el = closestElementOfNode(node2);
    if (!el) {
        return false;
    }
    try {
        if (typeof blockClass === "string") {
            if (el.classList.contains(blockClass)) return true;
            if (checkAncestors && el.closest("." + blockClass) !== null) return true;
        } else {
            if (classMatchesRegex(el, blockClass, checkAncestors)) return true;
        }
    } catch (e2) {}
    if (blockSelector) {
        if (el.matches(blockSelector)) return true;
        if (checkAncestors && el.closest(blockSelector) !== null) return true;
    }
    return false;
}
function isSerialized(n2, mirror2) {
    return mirror2.getId(n2) !== -1;
}
function isIgnored(n2, mirror2, slimDOMOptions) {
    if (n2.tagName === "TITLE" && slimDOMOptions.headTitleMutations) {
        return true;
    }
    return mirror2.getId(n2) === IGNORED_NODE;
}
function isAncestorRemoved(target, mirror2) {
    if (isShadowRoot(target)) {
        return false;
    }
    const id = mirror2.getId(target);
    if (!mirror2.has(id)) {
        return true;
    }
    const parent = index.parentNode(target);
    if (parent && parent.nodeType === target.DOCUMENT_NODE) {
        return false;
    }
    if (!parent) {
        return true;
    }
    return isAncestorRemoved(parent, mirror2);
}
function legacy_isTouchEvent(event) {
    return Boolean(event.changedTouches);
}
function polyfill$1(win = window) {
    if ("NodeList" in win && !win.NodeList.prototype.forEach) {
        win.NodeList.prototype.forEach = Array.prototype.forEach;
    }
    if ("DOMTokenList" in win && !win.DOMTokenList.prototype.forEach) {
        win.DOMTokenList.prototype.forEach = Array.prototype.forEach;
    }
}
function queueToResolveTrees(queue) {
    const queueNodeMap = {};
    const putIntoMap = (m, parent)=>{
        const nodeInTree = {
            value: m,
            parent,
            children: []
        };
        queueNodeMap[m.node.id] = nodeInTree;
        return nodeInTree;
    };
    const queueNodeTrees = [];
    for (const mutation of queue){
        const { nextId, parentId } = mutation;
        if (nextId && nextId in queueNodeMap) {
            const nextInTree = queueNodeMap[nextId];
            if (nextInTree.parent) {
                const idx = nextInTree.parent.children.indexOf(nextInTree);
                nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
            } else {
                const idx = queueNodeTrees.indexOf(nextInTree);
                queueNodeTrees.splice(idx, 0, putIntoMap(mutation, null));
            }
            continue;
        }
        if (parentId in queueNodeMap) {
            const parentInTree = queueNodeMap[parentId];
            parentInTree.children.push(putIntoMap(mutation, parentInTree));
            continue;
        }
        queueNodeTrees.push(putIntoMap(mutation, null));
    }
    return queueNodeTrees;
}
function iterateResolveTree(tree, cb) {
    cb(tree.value);
    for(let i2 = tree.children.length - 1; i2 >= 0; i2--){
        iterateResolveTree(tree.children[i2], cb);
    }
}
function isSerializedIframe(n2, mirror2) {
    return Boolean(n2.nodeName === "IFRAME" && mirror2.getMeta(n2));
}
function isSerializedStylesheet(n2, mirror2) {
    return Boolean(n2.nodeName === "LINK" && n2.nodeType === n2.ELEMENT_NODE && n2.getAttribute && n2.getAttribute("rel") === "stylesheet" && mirror2.getMeta(n2));
}
function getBaseDimension(node2, rootIframe) {
    var _a2, _b;
    const frameElement = (_b = (_a2 = node2.ownerDocument) == null ? void 0 : _a2.defaultView) == null ? void 0 : _b.frameElement;
    if (!frameElement || frameElement === rootIframe) {
        return {
            x: 0,
            y: 0,
            relativeScale: 1,
            absoluteScale: 1
        };
    }
    const frameDimension = frameElement.getBoundingClientRect();
    const frameBaseDimension = getBaseDimension(frameElement, rootIframe);
    const relativeScale = frameDimension.height / frameElement.clientHeight;
    return {
        x: frameDimension.x * frameBaseDimension.relativeScale + frameBaseDimension.x,
        y: frameDimension.y * frameBaseDimension.relativeScale + frameBaseDimension.y,
        relativeScale,
        absoluteScale: frameBaseDimension.absoluteScale * relativeScale
    };
}
function hasShadowRoot(n2) {
    if (!n2) return false;
    if (n2 instanceof BaseRRNode && "shadowRoot" in n2) {
        return Boolean(n2.shadowRoot);
    }
    return Boolean(index.shadowRoot(n2));
}
function getNestedRule(rules2, position) {
    const rule2 = rules2[position[0]];
    if (position.length === 1) {
        return rule2;
    } else {
        return getNestedRule(rule2.cssRules[position[1]].cssRules, position.slice(2));
    }
}
function getPositionsAndIndex(nestedIndex) {
    const positions = [
        ...nestedIndex
    ];
    const index2 = positions.pop();
    return {
        positions,
        index: index2
    };
}
function uniqueTextMutations(mutations) {
    const idSet = /* @__PURE__ */ new Set();
    const uniqueMutations = [];
    for(let i2 = mutations.length; i2--;){
        const mutation = mutations[i2];
        if (!idSet.has(mutation.id)) {
            uniqueMutations.push(mutation);
            idSet.add(mutation.id);
        }
    }
    return uniqueMutations;
}
class StyleSheetMirror {
    constructor(){
        __publicField2(this, "id", 1);
        __publicField2(this, "styleIDMap", /* @__PURE__ */ new WeakMap());
        __publicField2(this, "idStyleMap", /* @__PURE__ */ new Map());
    }
    getId(stylesheet) {
        return this.styleIDMap.get(stylesheet) ?? -1;
    }
    has(stylesheet) {
        return this.styleIDMap.has(stylesheet);
    }
    /**
   * @returns If the stylesheet is in the mirror, returns the id of the stylesheet. If not, return the new assigned id.
   */ add(stylesheet, id) {
        if (this.has(stylesheet)) return this.getId(stylesheet);
        let newId;
        if (id === void 0) {
            newId = this.id++;
        } else newId = id;
        this.styleIDMap.set(stylesheet, newId);
        this.idStyleMap.set(newId, stylesheet);
        return newId;
    }
    getStyle(id) {
        return this.idStyleMap.get(id) || null;
    }
    reset() {
        this.styleIDMap = /* @__PURE__ */ new WeakMap();
        this.idStyleMap = /* @__PURE__ */ new Map();
        this.id = 1;
    }
    generateId() {
        return this.id++;
    }
}
function getShadowHost(n2) {
    var _a2;
    let shadowHost = null;
    if ("getRootNode" in n2 && ((_a2 = index.getRootNode(n2)) == null ? void 0 : _a2.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && index.host(index.getRootNode(n2))) shadowHost = index.host(index.getRootNode(n2));
    return shadowHost;
}
function getRootShadowHost(n2) {
    let rootShadowHost = n2;
    let shadowHost;
    while(shadowHost = getShadowHost(rootShadowHost))rootShadowHost = shadowHost;
    return rootShadowHost;
}
function shadowHostInDom(n2) {
    const doc = n2.ownerDocument;
    if (!doc) return false;
    const shadowHost = getRootShadowHost(n2);
    return index.contains(doc, shadowHost);
}
function inDom(n2) {
    const doc = n2.ownerDocument;
    if (!doc) return false;
    return index.contains(doc, n2) || shadowHostInDom(n2);
}
const utils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    StyleSheetMirror,
    get _mirror () {
        return _mirror;
    },
    closestElementOfNode,
    getBaseDimension,
    getNestedRule,
    getPositionsAndIndex,
    getRootShadowHost,
    getShadowHost,
    getWindowHeight,
    getWindowScroll,
    getWindowWidth,
    hasShadowRoot,
    hookSetter,
    inDom,
    isAncestorRemoved,
    isBlocked,
    isIgnored,
    isSerialized,
    isSerializedIframe,
    isSerializedStylesheet,
    iterateResolveTree,
    legacy_isTouchEvent,
    get nowTimestamp () {
        return nowTimestamp;
    },
    on,
    patch,
    polyfill: polyfill$1,
    queueToResolveTrees,
    shadowHostInDom,
    throttle,
    uniqueTextMutations
}, Symbol.toStringTag, {
    value: "Module"
}));
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for(var i$1 = 0; i$1 < chars.length; i$1++){
    lookup[chars.charCodeAt(i$1)] = i$1;
}
const encodedJs = "KGZ1bmN0aW9uKCkgewogICJ1c2Ugc3RyaWN0IjsKICB2YXIgY2hhcnMgPSAiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyI7CiAgdmFyIGxvb2t1cCA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAidW5kZWZpbmVkIiA/IFtdIDogbmV3IFVpbnQ4QXJyYXkoMjU2KTsKICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7CiAgICBsb29rdXBbY2hhcnMuY2hhckNvZGVBdChpKV0gPSBpOwogIH0KICB2YXIgZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHsKICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKSwgaTIsIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gIiI7CiAgICBmb3IgKGkyID0gMDsgaTIgPCBsZW47IGkyICs9IDMpIHsKICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kyXSA+PiAyXTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMl0gJiAzKSA8PCA0IHwgYnl0ZXNbaTIgKyAxXSA+PiA0XTsKICAgICAgYmFzZTY0ICs9IGNoYXJzWyhieXRlc1tpMiArIDFdICYgMTUpIDw8IDIgfCBieXRlc1tpMiArIDJdID4+IDZdOwogICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaTIgKyAyXSAmIDYzXTsKICAgIH0KICAgIGlmIChsZW4gJSAzID09PSAyKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgIj0iOwogICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7CiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDIpICsgIj09IjsKICAgIH0KICAgIHJldHVybiBiYXNlNjQ7CiAgfTsKICBjb25zdCBsYXN0QmxvYk1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7CiAgY29uc3QgdHJhbnNwYXJlbnRCbG9iTWFwID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTsKICBhc3luYyBmdW5jdGlvbiBnZXRUcmFuc3BhcmVudEJsb2JGb3Iod2lkdGgsIGhlaWdodCwgZGF0YVVSTE9wdGlvbnMpIHsKICAgIGNvbnN0IGlkID0gYCR7d2lkdGh9LSR7aGVpZ2h0fWA7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBpZiAodHJhbnNwYXJlbnRCbG9iTWFwLmhhcyhpZCkpIHJldHVybiB0cmFuc3BhcmVudEJsb2JNYXAuZ2V0KGlkKTsKICAgICAgY29uc3Qgb2Zmc2NyZWVuID0gbmV3IE9mZnNjcmVlbkNhbnZhcyh3aWR0aCwgaGVpZ2h0KTsKICAgICAgb2Zmc2NyZWVuLmdldENvbnRleHQoIjJkIik7CiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBvZmZzY3JlZW4uY29udmVydFRvQmxvYihkYXRhVVJMT3B0aW9ucyk7CiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpOwogICAgICBjb25zdCBiYXNlNjQgPSBlbmNvZGUoYXJyYXlCdWZmZXIpOwogICAgICB0cmFuc3BhcmVudEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICByZXR1cm4gYmFzZTY0OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuICIiOwogICAgfQogIH0KICBjb25zdCB3b3JrZXIgPSBzZWxmOwogIHdvcmtlci5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbihlKSB7CiAgICBpZiAoIk9mZnNjcmVlbkNhbnZhcyIgaW4gZ2xvYmFsVGhpcykgewogICAgICBjb25zdCB7IGlkLCBiaXRtYXAsIHdpZHRoLCBoZWlnaHQsIGRhdGFVUkxPcHRpb25zIH0gPSBlLmRhdGE7CiAgICAgIGNvbnN0IHRyYW5zcGFyZW50QmFzZTY0ID0gZ2V0VHJhbnNwYXJlbnRCbG9iRm9yKAogICAgICAgIHdpZHRoLAogICAgICAgIGhlaWdodCwKICAgICAgICBkYXRhVVJMT3B0aW9ucwogICAgICApOwogICAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHdpZHRoLCBoZWlnaHQpOwogICAgICBjb25zdCBjdHggPSBvZmZzY3JlZW4uZ2V0Q29udGV4dCgiMmQiKTsKICAgICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApOwogICAgICBiaXRtYXAuY2xvc2UoKTsKICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IG9mZnNjcmVlbi5jb252ZXJ0VG9CbG9iKGRhdGFVUkxPcHRpb25zKTsKICAgICAgY29uc3QgdHlwZSA9IGJsb2IudHlwZTsKICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBibG9iLmFycmF5QnVmZmVyKCk7CiAgICAgIGNvbnN0IGJhc2U2NCA9IGVuY29kZShhcnJheUJ1ZmZlcik7CiAgICAgIGlmICghbGFzdEJsb2JNYXAuaGFzKGlkKSAmJiBhd2FpdCB0cmFuc3BhcmVudEJhc2U2NCA9PT0gYmFzZTY0KSB7CiAgICAgICAgbGFzdEJsb2JNYXAuc2V0KGlkLCBiYXNlNjQpOwogICAgICAgIHJldHVybiB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZCB9KTsKICAgICAgfQogICAgICBpZiAobGFzdEJsb2JNYXAuZ2V0KGlkKSA9PT0gYmFzZTY0KSByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQgfSk7CiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7CiAgICAgICAgaWQsCiAgICAgICAgdHlwZSwKICAgICAgICBiYXNlNjQsCiAgICAgICAgd2lkdGgsCiAgICAgICAgaGVpZ2h0CiAgICAgIH0pOwogICAgICBsYXN0QmxvYk1hcC5zZXQoaWQsIGJhc2U2NCk7CiAgICB9IGVsc2UgewogICAgICByZXR1cm4gd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQ6IGUuZGF0YS5pZCB9KTsKICAgIH0KICB9Owp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS1iaXRtYXAtZGF0YS11cmwtd29ya2VyLUlKcEM3Z19iLmpzLm1hcAo=";
const decodeBase64 = (base64)=>Uint8Array.from(atob(base64), (c2)=>c2.charCodeAt(0));
typeof window !== "undefined" && window.Blob && new Blob([
    decodeBase64(encodedJs)
], {
    type: "text/javascript;charset=utf-8"
});
try {
    if (Array.from([
        1
    ], (x2)=>x2 * 2)[0] !== 2) {
        const cleanFrame = document.createElement("iframe");
        document.body.appendChild(cleanFrame);
        Array.from = ((_a = cleanFrame.contentWindow) == null ? void 0 : _a.Array.from) || Array.from;
        document.body.removeChild(cleanFrame);
    }
} catch (err) {
    console.debug("Unable to override Array.from", err);
}
createMirror$2();
var n;
!function(t2) {
    t2[t2.NotStarted = 0] = "NotStarted", t2[t2.Running = 1] = "Running", t2[t2.Stopped = 2] = "Stopped";
}(n || (n = {}));
class StackFrame {
    constructor(obj){
        __publicField(this, "fileName");
        __publicField(this, "functionName");
        __publicField(this, "lineNumber");
        __publicField(this, "columnNumber");
        this.fileName = obj.fileName || "";
        this.functionName = obj.functionName || "";
        this.lineNumber = obj.lineNumber;
        this.columnNumber = obj.columnNumber;
    }
    toString() {
        const lineNumber = this.lineNumber || "";
        const columnNumber = this.columnNumber || "";
        if (this.functionName) return `${this.functionName} (${this.fileName}:${lineNumber}:${columnNumber})`;
        return `${this.fileName}:${lineNumber}:${columnNumber}`;
    }
}
const FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
const CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
const SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
const ErrorStackParser = {
    /**
   * Given an Error object, extract the most information from it.
   */ parse: function(error) {
        if (!error) {
            return [];
        }
        if (// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        typeof error.stacktrace !== "undefined" || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        typeof error["opera#sourceloc"] !== "undefined") {
            return this.parseOpera(error);
        } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
            return this.parseV8OrIE(error);
        } else if (error.stack) {
            return this.parseFFOrSafari(error);
        } else {
            console.warn("[console-record-plugin]: Failed to parse error object:", error);
            return [];
        }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function(urlLike) {
        if (urlLike.indexOf(":") === -1) {
            return [
                urlLike
            ];
        }
        const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
        const parts = regExp.exec(urlLike.replace(/[()]/g, ""));
        if (!parts) throw new Error(`Cannot parse given url: ${urlLike}`);
        return [
            parts[1],
            parts[2] || void 0,
            parts[3] || void 0
        ];
    },
    parseV8OrIE: function(error) {
        const filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function(line) {
            if (line.indexOf("(eval ") > -1) {
                line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, "");
            }
            let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(");
            const location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
            sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
            const tokens = sanitizedLine.split(/\s+/).slice(1);
            const locationParts = this.extractLocation(location ? location[1] : tokens.pop());
            const functionName = tokens.join(" ") || void 0;
            const fileName = [
                "eval",
                "<anonymous>"
            ].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
            return new StackFrame({
                functionName,
                fileName,
                lineNumber: locationParts[1],
                columnNumber: locationParts[2]
            });
        }, this);
    },
    parseFFOrSafari: function(error) {
        const filtered = error.stack.split("\n").filter(function(line) {
            return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function(line) {
            if (line.indexOf(" > eval") > -1) {
                line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
            }
            if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
                return new StackFrame({
                    functionName: line
                });
            } else {
                const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                const matches = line.match(functionNameRegex);
                const functionName = matches && matches[1] ? matches[1] : void 0;
                const locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
                return new StackFrame({
                    functionName,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2]
                });
            }
        }, this);
    },
    parseOpera: function(e) {
        if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
            return this.parseOpera9(e);
        } else if (!e.stack) {
            return this.parseOpera10(e);
        } else {
            return this.parseOpera11(e);
        }
    },
    parseOpera9: function(e) {
        const lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        const lines = e.message.split("\n");
        const result2 = [];
        for(let i = 2, len = lines.length; i < len; i += 2){
            const match = lineRE.exec(lines[i]);
            if (match) {
                result2.push(new StackFrame({
                    fileName: match[2],
                    lineNumber: parseFloat(match[1])
                }));
            }
        }
        return result2;
    },
    parseOpera10: function(e) {
        const lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        const lines = e.stacktrace.split("\n");
        const result2 = [];
        for(let i = 0, len = lines.length; i < len; i += 2){
            const match = lineRE.exec(lines[i]);
            if (match) {
                result2.push(new StackFrame({
                    functionName: match[3] || void 0,
                    fileName: match[2],
                    lineNumber: parseFloat(match[1])
                }));
            }
        }
        return result2;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function(error) {
        const filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
        }, this);
        return filtered.map(function(line) {
            const tokens = line.split("@");
            const locationParts = this.extractLocation(tokens.pop());
            const functionCall = tokens.shift() || "";
            const functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
            return new StackFrame({
                functionName,
                fileName: locationParts[0],
                lineNumber: locationParts[1],
                columnNumber: locationParts[2]
            });
        }, this);
    }
};
function pathToSelector(node2) {
    if (!node2 || !node2.outerHTML) {
        return "";
    }
    let path = "";
    while(node2.parentElement){
        let name = node2.localName;
        if (!name) {
            break;
        }
        name = name.toLowerCase();
        const parent = node2.parentElement;
        const domSiblings = [];
        if (parent.children && parent.children.length > 0) {
            for(let i = 0; i < parent.children.length; i++){
                const sibling = parent.children[i];
                if (sibling.localName && sibling.localName.toLowerCase) {
                    if (sibling.localName.toLowerCase() === name) {
                        domSiblings.push(sibling);
                    }
                }
            }
        }
        if (domSiblings.length > 1) {
            name += `:eq(${domSiblings.indexOf(node2)})`;
        }
        path = name + (path ? ">" + path : "");
        node2 = parent;
    }
    return path;
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
}
function isObjTooDeep(obj, limit) {
    if (limit === 0) {
        return true;
    }
    const keys = Object.keys(obj);
    for (const key of keys){
        if (isObject(obj[key]) && isObjTooDeep(obj[key], limit - 1)) {
            return true;
        }
    }
    return false;
}
function stringify(obj, stringifyOptions) {
    const options = {
        numOfKeysLimit: 50,
        depthOfLimit: 4
    };
    Object.assign(options, stringifyOptions);
    const stack = [];
    const keys = [];
    return JSON.stringify(obj, function(key, value) {
        if (stack.length > 0) {
            const thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) {
                if (stack[0] === value) {
                    value = "[Circular ~]";
                } else {
                    value = "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
                }
            }
        } else {
            stack.push(value);
        }
        if (value === null) return value;
        if (value === void 0) return "undefined";
        if (shouldIgnore(value)) {
            return toString(value);
        }
        if (typeof value === "bigint") {
            return value.toString() + "n";
        }
        if (value instanceof Event) {
            const eventResult = {};
            for(const eventKey in value){
                const eventValue = value[eventKey];
                if (Array.isArray(eventValue)) {
                    eventResult[eventKey] = pathToSelector(eventValue.length ? eventValue[0] : null);
                } else {
                    eventResult[eventKey] = eventValue;
                }
            }
            return eventResult;
        } else if (value instanceof Node) {
            if (value instanceof HTMLElement) {
                return value ? value.outerHTML : "";
            }
            return value.nodeName;
        } else if (value instanceof Error) {
            return value.stack ? value.stack + "\nEnd of stack for Error object" : value.name + ": " + value.message;
        }
        return value;
    });
    "TURBOPACK unreachable";
    function shouldIgnore(_obj) {
        if (isObject(_obj) && Object.keys(_obj).length > options.numOfKeysLimit) {
            return true;
        }
        if (typeof _obj === "function") {
            return true;
        }
        if (isObject(_obj) && isObjTooDeep(_obj, options.depthOfLimit)) {
            return true;
        }
        return false;
    }
    function toString(_obj) {
        let str = _obj.toString();
        if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
            str = `${str.slice(0, options.stringLengthLimit)}...`;
        }
        return str;
    }
}
const defaultLogOptions = {
    level: [
        "assert",
        "clear",
        "count",
        "countReset",
        "debug",
        "dir",
        "dirxml",
        "error",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "table",
        "time",
        "timeEnd",
        "timeLog",
        "trace",
        "warn"
    ],
    lengthThreshold: 1e3,
    logger: "console"
};
function initLogObserver(cb, win, options) {
    const logOptions = options ? Object.assign({}, defaultLogOptions, options) : defaultLogOptions;
    const loggerType = logOptions.logger;
    if (!loggerType) {
        return ()=>{};
    }
    let logger;
    if (typeof loggerType === "string") {
        logger = win[loggerType];
    } else {
        logger = loggerType;
    }
    let logCount = 0;
    let inStack = false;
    const cancelHandlers = [];
    if (logOptions.level.includes("error")) {
        const errorHandler = (event)=>{
            const message = event.message, error = event.error;
            const trace = ErrorStackParser.parse(error).map((stackFrame)=>stackFrame.toString());
            const payload = [
                stringify(message, logOptions.stringifyOptions)
            ];
            cb({
                level: "error",
                trace,
                payload
            });
        };
        win.addEventListener("error", errorHandler);
        cancelHandlers.push(()=>{
            win.removeEventListener("error", errorHandler);
        });
        const unhandledrejectionHandler = (event)=>{
            let error;
            let payload;
            if (event.reason instanceof Error) {
                error = event.reason;
                payload = [
                    stringify(`Uncaught (in promise) ${error.name}: ${error.message}`, logOptions.stringifyOptions)
                ];
            } else {
                error = new Error();
                payload = [
                    stringify("Uncaught (in promise)", logOptions.stringifyOptions),
                    stringify(event.reason, logOptions.stringifyOptions)
                ];
            }
            const trace = ErrorStackParser.parse(error).map((stackFrame)=>stackFrame.toString());
            cb({
                level: "error",
                trace,
                payload
            });
        };
        win.addEventListener("unhandledrejection", unhandledrejectionHandler);
        cancelHandlers.push(()=>{
            win.removeEventListener("unhandledrejection", unhandledrejectionHandler);
        });
    }
    for (const levelType of logOptions.level){
        cancelHandlers.push(replace(logger, levelType));
    }
    return ()=>{
        cancelHandlers.forEach((h)=>h());
    };
    "TURBOPACK unreachable";
    function replace(_logger, level) {
        if (!_logger[level]) {
            return ()=>{};
        }
        return utils.patch(_logger, level, (original)=>{
            return (...args)=>{
                original.apply(this, args);
                if (level === "assert" && !!args[0]) {
                    return;
                }
                if (inStack) {
                    return;
                }
                inStack = true;
                try {
                    const trace = ErrorStackParser.parse(new Error()).map((stackFrame)=>stackFrame.toString()).splice(1);
                    const argsForPayload = level === "assert" ? args.slice(1) : args;
                    const payload = argsForPayload.map((s)=>stringify(s, logOptions.stringifyOptions));
                    logCount++;
                    if (logCount < logOptions.lengthThreshold) {
                        cb({
                            level,
                            trace,
                            payload
                        });
                    } else if (logCount === logOptions.lengthThreshold) {
                        cb({
                            level: "warn",
                            trace: [],
                            payload: [
                                stringify("The number of log records reached the threshold.")
                            ]
                        });
                    }
                } catch (error) {
                    original("rrweb logger error:", error, ...args);
                } finally{
                    inStack = false;
                }
            };
        });
    }
}
const PLUGIN_NAME = "rrweb/console@1";
const getRecordConsolePlugin = (options)=>({
        name: PLUGIN_NAME,
        observer: initLogObserver,
        options
    });
;
 //# sourceMappingURL=rrweb-plugin-console-record.js.map
}}),

};

//# sourceMappingURL=a850c_rrweb-plugin-console-record_dist_rrweb-plugin-console-record_1fc5501c.js.map