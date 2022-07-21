module.exports = (function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var a = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            r,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 1))
  );
})([
  function (t, e) {
    t.exports = require("react");
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "useGravityFormMutation", function () {
        return rt;
      });
    var r = n(0),
      a = n.n(r);
    function o(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function c(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? o(Object(n), !0).forEach(function (e) {
              i(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function i(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var l = function (t, e, n, r, a) {
      if ("name" === t) {
        var o = r.prefix,
          l = r.first,
          u = r.middle,
          f = r.last,
          s = r.suffix,
          d = o && "".concat(t).concat(e, "PrefixValue"),
          m = l && "".concat(t).concat(e, "FirstValue"),
          y = u && "".concat(t).concat(e, "MiddleValue"),
          p = f && "".concat(t).concat(e, "LastValue"),
          b = s && "".concat(t).concat(e, "SuffixValue"),
          v = c({}, n);
        return (
          o && (v = c(c({}, n), {}, i({}, d, o))),
          l && (v = c(c({}, n), {}, i({}, m, l))),
          u && (v = c(c({}, n), {}, i({}, y, u))),
          f && (v = c(c({}, n), {}, i({}, p, f))),
          s && (v = c(c({}, n), {}, i({}, b, s))),
          a(v)
        );
      }
      if ("address" === t) {
        var h,
          g = r.street,
          S = r.lineTwo,
          O = r.city,
          j = r.state,
          w = r.zip,
          E = r.country,
          A = "".concat(t).concat(e, "StreetValue"),
          C = "".concat(t).concat(e, "LineTwoValue"),
          x = "".concat(t).concat(e, "CityValue"),
          V = "".concat(t).concat(e, "StateValue"),
          I = "".concat(t).concat(e, "ZipValue"),
          F = "".concat(t).concat(e, "CountryValue"),
          P =
            (i((h = {}), A, g),
            i(h, C, S),
            i(h, x, O),
            i(h, V, j),
            i(h, I, w),
            i(h, F, E),
            h);
        return a(c(c({}, n), P));
      }
      var _ = "".concat(t).concat(e, "Value");
      return a(c(c({}, n), {}, i({}, _, r)));
    };
    function u(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function f(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u(Object(n), !0).forEach(function (e) {
              s(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function s(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function d(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return m(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return m(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function m(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function y(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        m = e.label,
        y = (e.description, e.cssClass),
        p = e.inputs,
        b = e.size,
        v = "field_".concat(i, "_").concat(c),
        h = d(Object(r.useState)(), 2),
        g = h[0],
        S = h[1],
        O = ""
          .concat((b && b.toLowerCase()) || "", " ")
          .concat(y)
          .trim(),
        j = function (t) {
          var e = t.target,
            r = e.name,
            a = e.value;
          S(f(f({}, g), {}, s({}, r, a)));
          var i = f(f({}, g), {}, s({}, r, a));
          return l(u, c, n, i, o);
        };
      return a.a.createElement(
        "fieldset",
        { id: v, className: O },
        a.a.createElement("legend", null, m),
        null == p
          ? void 0
          : p.map(function (t) {
              var e = null == t ? void 0 : t.key,
                n = (null == t ? void 0 : t.label) || "",
                r = (null == t ? void 0 : t.placeholder) || "";
              return a.a.createElement(
                "div",
                { key: e },
                a.a.createElement("input", {
                  type: "text",
                  name: String(e),
                  id: "input_".concat(i, "_").concat(c, "_").concat(e),
                  placeholder: r,
                  value: null == g ? void 0 : g[e],
                  onChange: j,
                }),
                a.a.createElement(
                  "label",
                  { htmlFor: "input_".concat(i, "_").concat(c, "_").concat(e) },
                  n
                )
              );
            })
      );
    }
    function p(t) {
      return (
        (function (t) {
          if (Array.isArray(t)) return h(t);
        })(t) ||
        (function (t) {
          if (
            ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
            null != t["@@iterator"]
          )
            return Array.from(t);
        })(t) ||
        v(t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function b(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        v(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function v(t, e) {
      if (t) {
        if ("string" == typeof t) return h(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === n && t.constructor && (n = t.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(t)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? h(t, e)
            : void 0
        );
      }
    }
    function h(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function g(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function S(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? g(Object(n), !0).forEach(function (e) {
              O(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : g(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function O(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function j(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.inputs,
        m = e.choices,
        y = e.size,
        v =
          null == m
            ? void 0
            : m.map(function (t, e) {
                var n;
                return S(
                  S({}, t),
                  {},
                  {
                    id:
                      null == d || null === (n = d[e]) || void 0 === n
                        ? void 0
                        : n.id,
                  }
                );
              }),
        h = "field_".concat(i, "_").concat(c),
        g = v.filter(function (t) {
          return t.isSelected;
        }),
        O = b(Object(r.useState)(g), 2),
        j = O[0],
        E = O[1],
        A = ""
          .concat((y && y.toLowerCase()) || "", " ")
          .concat(s)
          .trim(),
        C = function (t) {
          var e,
            r = t.target,
            a = r.value,
            i = r.checked;
          return (
            v.map(function (t) {
              if (a === t.value) {
                if (!i) {
                  var n = j.filter(function (e) {
                    return t.value !== e.value;
                  });
                  return (e = n), E(n);
                }
                return (e = [].concat(p(j), [t])), E([].concat(p(j), [t]));
              }
            }),
            l(u, c, n, e, o)
          );
        };
      return a.a.createElement(
        "fieldset",
        { id: h, className: A },
        a.a.createElement("legend", null, f),
        v.map(function (t) {
          var e = t.id,
            n = t.text,
            r = t.value,
            o = t.isSelected;
          return a.a.createElement(w, {
            key: e,
            inputId: e,
            id: "input_".concat(i, "_").concat(c, "_").concat(e),
            htmlFor: "input_".concat(i, "_").concat(c, "_").concat(e),
            isSelected: o,
            text: n,
            value: r,
            handleChangeProp: C,
          });
        })
      );
    }
    var w = function (t) {
      var e = t.inputId,
        n = t.id,
        o = t.htmlFor,
        c = t.text,
        i = t.isSelected,
        l = t.value,
        u = t.handleChangeProp,
        f = b(Object(r.useState)(i), 2),
        s = f[0],
        d = f[1];
      return a.a.createElement(
        a.a.Fragment,
        null,
        a.a.createElement(
          "div",
          null,
          a.a.createElement("input", {
            type: "checkbox",
            name: String(e),
            id: n,
            value: String(l),
            onChange: function (t) {
              u(t), d(!s);
            },
            checked: s,
          }),
          a.a.createElement("label", { htmlFor: o }, c)
        )
      );
    };
    function E(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return A(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return A(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function A(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function C(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.isRequired,
        m = e.checkboxLabel,
        y = "field_".concat(i, "_").concat(c),
        p = E(Object(r.useState)(!1), 2),
        b = p[0],
        v = p[1];
      return a.a.createElement(
        "div",
        { className: "".concat(s).trim() },
        a.a.createElement("label", { htmlFor: y }, f),
        a.a.createElement("input", {
          type: "checkbox",
          name: String(c),
          id: y,
          onChange: function (t) {
            var e = t.target.value;
            return v(!b), l(u, c, n, e, o);
          },
          checked: b,
          required: d,
        }),
        a.a.createElement("p", null, m)
      );
    }
    function x(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return V(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return V(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function V(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function I(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.isRequired,
        m = e.placeholder,
        y = e.size,
        p = "field_".concat(i, "_").concat(c),
        b = x(Object(r.useState)(""), 2),
        v = b[0],
        h = b[1],
        g = ""
          .concat((y && y.toLowerCase()) || "", " ")
          .concat(s)
          .trim();
      return a.a.createElement(
        "div",
        { className: g },
        a.a.createElement("label", { htmlFor: p }, f),
        a.a.createElement("input", {
          type: "email",
          name: c,
          id: p,
          placeholder: m,
          required: d,
          value: v,
          onChange: function (t) {
            var e = t.target.value;
            return h(e), l(u, c, n, e, o);
          },
        })
      );
    }
    function F(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function P(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? F(Object(n), !0).forEach(function (e) {
              _(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : F(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function _(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    function D(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return $(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return $(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function $(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function k(t) {
      var e,
        n = t.field,
        o = t.state,
        c = t.setFormData,
        i = n.id,
        u = n.formId,
        f = n.type,
        s = n.label,
        d = (n.description, n.cssClass),
        m = n.inputs,
        y = n.size,
        p = "field_".concat(u, "_").concat(i),
        b =
          m &&
          m.find(function (t) {
            return "prefix" === t.key;
          }),
        v =
          (null == m
            ? void 0
            : m.filter(function (t) {
                return "prefix" !== (null == t ? void 0 : t.key);
              })) || [],
        h = D(Object(r.useState)(), 2),
        g = h[0],
        S = h[1],
        O = ""
          .concat((y && y.toLowerCase()) || "", " ")
          .concat(d)
          .trim(),
        j = function (t) {
          var e = t.target,
            n = e.name,
            r = e.value;
          S(P(P({}, g), {}, _({}, n, r)));
          var a = P(P({}, g), {}, _({}, n, r));
          return l(f, i, o, a, c);
        };
      return a.a.createElement(
        "fieldset",
        { id: p, className: O },
        a.a.createElement("legend", null, s),
        b && !b.isHidden
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                "select",
                {
                  name: String(b.key),
                  id: "input_".concat(u, "_").concat(i, "_").concat(b.key),
                  value: null == g ? void 0 : g.prefix,
                  onChange: j,
                },
                a.a.createElement("option", { value: "" }),
                null === (e = b.choices) || void 0 === e
                  ? void 0
                  : e.map(function (t) {
                      return a.a.createElement(
                        "option",
                        {
                          key: null == t ? void 0 : t.value,
                          value: String(null == t ? void 0 : t.value),
                        },
                        String(null == t ? void 0 : t.text)
                      );
                    })
              )
            )
          : null,
        v &&
          v.map(function (t) {
            var e = t.key,
              n = (null == t ? void 0 : t.label) || "",
              r = (null == t ? void 0 : t.placeholder) || "",
              o = (null == t ? void 0 : t.isRequired) || "";
            if (!t.isHidden)
              return a.a.createElement(
                "div",
                { key: e },
                a.a.createElement(
                  "label",
                  { htmlFor: "input_".concat(u, "_").concat(i, "_").concat(e) },
                  n
                ),
                a.a.createElement("input", {
                  name: String(e),
                  type: "text",
                  id: "input_".concat(u, "_").concat(i, "_").concat(e),
                  placeholder: r,
                  required: o,
                  value: null == g ? void 0 : g[e],
                  onChange: j,
                })
              );
          })
      );
    }
    function T(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return M(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return M(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function M(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function q(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.isRequired,
        m = e.placeholder,
        y = (e.phoneFormat, e.size),
        p = "field_".concat(i, "_").concat(c),
        b = T(Object(r.useState)(""), 2),
        v = b[0],
        h = b[1],
        g = ""
          .concat((y && y.toLowerCase()) || "", " ")
          .concat(s)
          .trim();
      return a.a.createElement(
        "div",
        { className: g },
        a.a.createElement("label", { htmlFor: p }, f),
        a.a.createElement("input", {
          type: "tel",
          name: c,
          id: p,
          required: d,
          placeholder: m || "",
          value: v,
          onChange: function (t) {
            var e = t.target.value;
            return h(e), l(u, c, n, e, o);
          },
        })
      );
    }
    function L(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return H(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return H(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function H(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function z(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.isRequired,
        m = e.defaultValue,
        y = e.choices,
        p = e.size,
        b = "field_".concat(i, "_").concat(c),
        v = L(Object(r.useState)(m), 2),
        h = v[0],
        g = v[1],
        S = ""
          .concat((p && p.toLowerCase()) || "", " ")
          .concat(s)
          .trim();
      Object(r.useEffect)(function () {
        l(u, c, n, m, o);
      }, []);
      return a.a.createElement(
        "div",
        { className: S },
        a.a.createElement("label", { htmlFor: b }, f),
        a.a.createElement(
          "select",
          {
            name: c,
            id: b,
            required: d,
            value: h,
            onChange: function (t) {
              var e = t.target.value;
              return g(e), l(u, c, n, e, o);
            },
          },
          null == y
            ? void 0
            : y.map(function (t) {
                return a.a.createElement(
                  "option",
                  {
                    key: (null == t ? void 0 : t.value) || "",
                    value: (null == t ? void 0 : t.value) || "",
                  },
                  (null == t ? void 0 : t.text) || ""
                );
              })
        )
      );
    }
    function N(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return U(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return U(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function U(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function R(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.isRequired,
        m = e.placeholder,
        y = e.size,
        p = "field_".concat(i, "_").concat(c),
        b = N(Object(r.useState)(""), 2),
        v = b[0],
        h = b[1],
        g = ""
          .concat((y && y.toLowerCase()) || "", " ")
          .concat(s)
          .trim();
      return a.a.createElement(
        "div",
        { className: g },
        a.a.createElement("label", { htmlFor: p }, f),
        a.a.createElement("input", {
          type: "text",
          name: c,
          id: p,
          required: d,
          placeholder: m || "",
          value: v,
          onChange: function (t) {
            var e = t.target.value;
            return h(e), l(u, c, n, e, o);
          },
        })
      );
    }
    function G(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return Z(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return Z(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Z(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function B(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.isRequired,
        m = e.placeholder,
        y = e.size,
        p = "field_".concat(i, "_").concat(c),
        b = G(Object(r.useState)(""), 2),
        v = b[0],
        h = b[1],
        g = ""
          .concat((y && y.toLowerCase()) || "", " ")
          .concat(s)
          .trim();
      return a.a.createElement(
        "div",
        { className: g },
        a.a.createElement("label", { htmlFor: p }, f),
        a.a.createElement("textarea", {
          name: c,
          id: p,
          required: d,
          value: v,
          onChange: function (t) {
            var e = t.target.value;
            return h(e), l(u, c, n, e, o);
          },
          placeholder: m || "",
        })
      );
    }
    function J(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return K(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return K(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function K(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function Q(t) {
      var e = t.field,
        n = t.state,
        o = t.setFormData,
        c = e.id,
        i = e.formId,
        u = e.type,
        f = e.label,
        s = (e.description, e.cssClass),
        d = e.isRequired,
        m = e.placeholder,
        y = e.size,
        p = "field_".concat(i, "_").concat(c),
        b = J(Object(r.useState)(""), 2),
        v = b[0],
        h = b[1],
        g = ""
          .concat((y && y.toLowerCase()) || "", " ")
          .concat(s)
          .trim();
      return a.a.createElement(
        "div",
        { className: g },
        a.a.createElement("label", { htmlFor: p }, f),
        a.a.createElement("input", {
          type: "url",
          name: c,
          id: p,
          required: d,
          placeholder: m || "",
          value: v,
          onChange: function (t) {
            var e = t.target.value;
            return h(e), l(u, c, n, e, o);
          },
        })
      );
    }
    function W(t) {
      var e = t.field,
        n = t.state,
        r = t.setFormData;
      switch (e.type) {
        case "address":
          return a.a.createElement(y, { field: e, state: n, setFormData: r });
        case "checkbox":
          return a.a.createElement(j, { field: e, state: n, setFormData: r });
        case "consent":
          return a.a.createElement(C, { field: e, state: n, setFormData: r });
        case "email":
          return a.a.createElement(I, { field: e, state: n, setFormData: r });
        case "name":
          return a.a.createElement(k, { field: e, state: n, setFormData: r });
        case "phone":
          return a.a.createElement(q, { field: e, state: n, setFormData: r });
        case "select":
          return a.a.createElement(z, { field: e, state: n, setFormData: r });
        case "text":
          return a.a.createElement(R, { field: e, state: n, setFormData: r });
        case "textarea":
          return a.a.createElement(B, { field: e, state: n, setFormData: r });
        case "website":
          return a.a.createElement(Q, { field: e, state: n, setFormData: r });
        default:
          return a.a.createElement(
            "p",
            null,
            "This Gravity Forms field type is not currently supported: ".concat(
              e.type,
              "."
            )
          );
      }
    }
    function X(t) {
      var e = t.type,
        n = t.text,
        r = t.cssClass,
        o = t.onClick;
      return a.a.createElement(
        "div",
        { className: "".concat(r).trim() },
        a.a.createElement("button", { type: e, onClick: o }, n || "Submit")
      );
    }
    function Y(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          var n =
            null == t
              ? null
              : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
          if (null == n) return;
          var r,
            a,
            o = [],
            c = !0,
            i = !1;
          try {
            for (
              n = n.call(t);
              !(c = (r = n.next()).done) &&
              (o.push(r.value), !e || o.length !== e);
              c = !0
            );
          } catch (t) {
            (i = !0), (a = t);
          } finally {
            try {
              c || null == n.return || n.return();
            } finally {
              if (i) throw a;
            }
          }
          return o;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return tt(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return tt(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function tt(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var et = function (t) {
        return {
          mutationVariables: t
            .map(function (t, e) {
              var n,
                r,
                a,
                o,
                c,
                i = t.id,
                l = t.type,
                u = t.isRequired,
                f = "".concat(u ? "!" : ""),
                s = "".concat(l).concat(i),
                d = 0 === e ? "" : " ",
                m = "name" === l,
                y = "email" === l,
                p = "$".concat(s, "StreetValue: String").concat(f),
                b = "$".concat(s, "LineTwoValue: String").concat(f),
                v = "$".concat(s, "CityValue: String").concat(f),
                h = "$".concat(s, "StateValue: String").concat(f),
                g = "$".concat(s, "ZipValue: String").concat(f),
                S = "$".concat(s, "CountryValue: String").concat(f),
                O = "$".concat(s, "Value: String").concat(f),
                j =
                  (y &&
                    t.emailConfirmEnabled &&
                    ", $".concat(s, "ConfirmationValue: String").concat(f)) ||
                  "",
                w =
                  m &&
                  (null == t || null === (n = t.inputs) || void 0 === n
                    ? void 0
                    : n.find(function (t) {
                        return "prefix" === t.key;
                      })),
                E =
                  m &&
                  (null == t || null === (r = t.inputs) || void 0 === r
                    ? void 0
                    : r.find(function (t) {
                        return "first" === t.key;
                      })),
                A =
                  m &&
                  (null == t || null === (a = t.inputs) || void 0 === a
                    ? void 0
                    : a.find(function (t) {
                        return "middle" === t.key;
                      })),
                C =
                  m &&
                  (null == t || null === (o = t.inputs) || void 0 === o
                    ? void 0
                    : o.find(function (t) {
                        return "last" === t.key;
                      })),
                x =
                  m &&
                  (null == t || null === (c = t.inputs) || void 0 === c
                    ? void 0
                    : c.find(function (t) {
                        return "suffix" === t.key;
                      })),
                V =
                  (w &&
                    !w.isHidden &&
                    "$".concat(s, "PrefixValue: String").concat(f, ", ")) ||
                  "",
                I =
                  (E &&
                    !E.isHidden &&
                    "$".concat(s, "FirstValue: String").concat(f, ", ")) ||
                  "",
                F =
                  (A &&
                    !A.isHidden &&
                    "$".concat(s, "MiddleValue: String").concat(f, ", ")) ||
                  "",
                P =
                  (C &&
                    !C.isHidden &&
                    "$".concat(s, "LastValue: String").concat(f)) ||
                  "",
                _ =
                  (x &&
                    !x.isHidden &&
                    ", $".concat(s, "SuffixValue: String").concat(f, ", ")) ||
                  "";
              switch (l) {
                case "address":
                  return ""
                    .concat(d)
                    .concat(p, ", ")
                    .concat(b, ", ")
                    .concat(v, ", ")
                    .concat(h, ", ")
                    .concat(g, ", ")
                    .concat(S);
                case "consent":
                  return "".concat(d, "$").concat(s, "Value: String").concat(f);
                case "email":
                  return "".concat(d).concat(O).concat(j);
                case "name":
                  return ""
                    .concat(d)
                    .concat(V)
                    .concat(I)
                    .concat(F)
                    .concat(P)
                    .concat(_);
                case "phone":
                case "text":
                case "textarea":
                case "website":
                  return "".concat(d, "$").concat(s, "Value: String").concat(f);
                default:
                  return "";
              }
            })
            .filter(function (t) {
              return "" !== t || null;
            })
            .toString(),
          fieldValuesShape: t
            .map(function (t) {
              var e,
                n,
                r,
                a,
                o,
                c = t.id,
                i = t.type,
                l = "".concat(i).concat(c),
                u = "name" === i,
                f = "email" === i,
                s = "street: $".concat(l, "StreetValue"),
                d = "lineTwo: $".concat(l, "LineTwoValue"),
                m = "city: $".concat(l, "CityValue"),
                y = "state: $".concat(l, "StateValue"),
                p = "zip: $".concat(l, "ZipValue"),
                b = "country: $".concat(l, "CountryValue"),
                v =
                  (f &&
                    t.emailConfirmEnabled &&
                    "confirmationValue: $".concat(l, "ConfirmationValue")) ||
                  "",
                h =
                  u &&
                  t.inputs &&
                  (null == t || null === (e = t.inputs) || void 0 === e
                    ? void 0
                    : e.find(function (t) {
                        return "prefix" === t.key;
                      })),
                g =
                  u &&
                  t.inputs &&
                  (null == t || null === (n = t.inputs) || void 0 === n
                    ? void 0
                    : n.find(function (t) {
                        return "first" === t.key;
                      })),
                S =
                  u &&
                  t.inputs &&
                  (null == t || null === (r = t.inputs) || void 0 === r
                    ? void 0
                    : r.find(function (t) {
                        return "middle" === t.key;
                      })),
                O =
                  u &&
                  t.inputs &&
                  (null == t || null === (a = t.inputs) || void 0 === a
                    ? void 0
                    : a.find(function (t) {
                        return "last" === t.key;
                      })),
                j =
                  u &&
                  t.inputs &&
                  (null == t || null === (o = t.inputs) || void 0 === o
                    ? void 0
                    : o.find(function (t) {
                        return "suffix" === t.key;
                      })),
                w =
                  (h && !h.isHidden && "prefix: $".concat(l, "PrefixValue")) ||
                  "",
                E =
                  (g && !g.isHidden && "first: $".concat(l, "FirstValue")) ||
                  "",
                A =
                  (S && !S.isHidden && "middle: $".concat(l, "MiddleValue")) ||
                  "",
                C =
                  (O && !O.isHidden && "last: $".concat(l, "LastValue")) || "",
                x =
                  (j && !j.isHidden && "suffix: $".concat(l, "SuffixValue")) ||
                  "";
              switch (i) {
                case "address":
                  return "{\n                    id: "
                    .concat(
                      c,
                      "\n                    addressValues: {\n                        "
                    )
                    .concat(s, "\n                        ")
                    .concat(d, "\n                        ")
                    .concat(m, "\n                        ")
                    .concat(y, "\n                        ")
                    .concat(p, "\n                        ")
                    .concat(b, "\n                    }\n                }");
                case "consent":
                  return "{\n                    id: ".concat(
                    c,
                    '\n                    value: "Consent"\n                }'
                  );
                case "email":
                  return "{\n                    id: "
                    .concat(
                      c,
                      "\n                    emailValues: {\n                        value: $"
                    )
                    .concat(l, "Value\n                        ")
                    .concat(v, "\n                    }\n                }");
                case "name":
                  return "{\n                    id: "
                    .concat(
                      c,
                      "\n                    nameValues: {\n                        "
                    )
                    .concat(w, "\n                        ")
                    .concat(E, "\n                        ")
                    .concat(A, "\n                        ")
                    .concat(C, "\n                        ")
                    .concat(x, "\n                    }\n                }");
                case "phone":
                case "text":
                case "textarea":
                case "website":
                  return "{\n                    id: "
                    .concat(c, "\n                    value: $")
                    .concat(l, "Value\n                }");
                default:
                  return "";
              }
            })
            .filter(function (t) {
              return "" !== t || null;
            })
            .join("\n"),
        };
      },
      nt = function (t, e, n) {
        return "\n        mutation SubmitForm("
          .concat(
            e,
            ") {\n            submitGravityFormsForm(\n                input: {\n                    formId: "
          )
          .concat(t, "\n                    fieldValues: [")
          .concat(
            n,
            "]\n                    saveAsDraft: false\n                    sourcePage: 1\n                    targetPage: 0\n                }\n            ) {\n                errors {\n                    id\n                    message\n                }\n                entryId\n                resumeToken\n                entry {\n                    id\n                }\n            }\n        }\n    "
          );
      },
      rt = function (t) {
        var e = et(t.formFields.nodes),
          n = e.mutationVariables,
          r = e.fieldValuesShape;
        return nt(t.formId, n, r);
      };
    e.default = function (t) {
      var e = t.form,
        n = t.buttonClass,
        o = t.onSubmit,
        c = e.formFields.nodes,
        i = e.button,
        l = Y(Object(r.useState)(), 2),
        u = l[0],
        f = l[1],
        s = function (t) {
          return t.preventDefault(), o(u);
        };
      return a.a.createElement(
        a.a.Fragment,
        null,
        a.a.createElement(
          "form",
          { onSubmit: s },
          c &&
            c.map(function (t, e) {
              return a.a.createElement(W, {
                key: "".concat(e, "-").concat(t.type),
                field: t,
                state: u,
                setFormData: f,
              });
            }),
          i &&
            a.a.createElement(X, {
              type: i.type,
              text: i.text,
              cssClass: n,
              onClick: s,
            })
        )
      );
    };
  },
]);
