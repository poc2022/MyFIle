<
/script> <
script type = "text/javascript"
nonce = "p6CInNsUOhkqeHrfbMxQ61QSGBqa22bB" >
   const Ziggy = {
      "url": "https:\/\/compliance.cbre.de",
      "port": null,
      "defaults": {},
      "routes": {
         "horizon.stats.index": {
            "uri": "horizon\/api\/stats",
            "methods": ["GET", "HEAD"]
         },
         "horizon.workload.index": {
            "uri": "horizon\/api\/workload",
            "methods": ["GET", "HEAD"]
         },
         "horizon.masters.index": {
            "uri": "horizon\/api\/masters",
            "methods": ["GET", "HEAD"]
         },
         "horizon.monitoring.index": {
            "uri": "horizon\/api\/monitoring",
            "methods": ["GET", "HEAD"]
         },
         "horizon.monitoring.store": {
            "uri": "horizon\/api\/monitoring",
            "methods": ["POST"]
         },
         "horizon.monitoring-tag.paginate": {
            "uri": "horizon\/api\/monitoring\/{tag}",
            "methods": ["GET", "HEAD"]
         },
         "horizon.monitoring-tag.destroy": {
            "uri": "horizon\/api\/monitoring\/{tag}",
            "methods": ["DELETE"],
            "wheres": {
               "tag": ".*"
            }
         },
         "horizon.jobs-metrics.index": {
            "uri": "horizon\/api\/metrics\/jobs",
            "methods": ["GET", "HEAD"]
         },
         "horizon.jobs-metrics.show": {
            "uri": "horizon\/api\/metrics\/jobs\/{id}",
            "methods": ["GET", "HEAD"]
         },
         "horizon.queues-metrics.index": {
            "uri": "horizon\/api\/metrics\/queues",
            "methods": ["GET", "HEAD"]
         },
         "horizon.queues-metrics.show": {
            "uri": "horizon\/api\/metrics\/queues\/{id}",
            "methods": ["GET", "HEAD"]
         },
         "horizon.jobs-batches.index": {
            "uri": "horizon\/api\/batches",
            "methods": ["GET", "HEAD"]
         },
         "horizon.jobs-batches.show": {
            "uri": "horizon\/api\/batches\/{id}",
            "methods": ["GET", "HEAD"]
         },
         "horizon.jobs-batches.retry": {
            "uri": "horizon\/api\/batches\/retry\/{id}",
            "methods": ["POST"]
         },
         "horizon.pending-jobs.index": {
            "uri": "horizon\/api\/jobs\/pending",
            "methods": ["GET", "HEAD"]
         },
         "horizon.completed-jobs.index": {
            "uri": "horizon\/api\/jobs\/completed",
            "methods": ["GET", "HEAD"]
         },
         "horizon.failed-jobs.index": {
            "uri": "horizon\/api\/jobs\/failed",
            "methods": ["GET", "HEAD"]
         },
         "horizon.failed-jobs.show": {
            "uri": "horizon\/api\/jobs\/failed\/{id}",
            "methods": ["GET", "HEAD"]
         },
         "horizon.retry-jobs.show": {
            "uri": "horizon\/api\/jobs\/retry\/{id}",
            "methods": ["POST"]
         },
         "horizon.jobs.show": {
            "uri": "horizon\/api\/jobs\/{id}",
            "methods": ["GET", "HEAD"]
         },
         "horizon.index": {
            "uri": "horizon\/{view?}",
            "methods": ["GET", "HEAD"],
            "wheres": {
               "view": "(.*)"
            }
         },
         "login": {
            "uri": "login",
            "methods": ["GET", "HEAD"]
         },
         "logout": {
            "uri": "logout",
            "methods": ["POST"]
         },
         "password.request": {
            "uri": "password\/reset",
            "methods": ["GET", "HEAD"]
         },
         "password.email": {
            "uri": "password\/email",
            "methods": ["POST"]
         },
         "password.reset": {
            "uri": "password\/reset\/{token}",
            "methods": ["GET", "HEAD"]
         },
         "password.update": {
            "uri": "password\/reset",
            "methods": ["POST"]
         },
         "password.confirm": {
            "uri": "password\/confirm",
            "methods": ["GET", "HEAD"]
         },
         "home": {
            "uri": "manage",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.check.list": {
            "uri": "manage\/checks",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.check.pdf": {
            "uri": "manage\/checks\/{complianceCheck}\/pdf",
            "methods": ["GET", "HEAD"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.status.update": {
            "uri": "manage\/checks\/{complianceCheck}\/status",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.risk.store": {
            "uri": "manage\/checks\/{complianceCheck}\/storeRisk",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.risk.finish": {
            "uri": "manage\/checks\/{complianceCheck}\/finish",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.store.documents": {
            "uri": "manage\/checks\/{complianceCheck}\/store-documents",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.destroy.documents": {
            "uri": "manage\/checks\/{complianceCheck}\/destroy-documents\/{document}",
            "methods": ["DELETE"],
            "bindings": {
               "complianceCheck": "identifier",
               "document": "id"
            }
         },
         "dashboard.check.destroy": {
            "uri": "manage\/checks\/{complianceCheck}\/destroy",
            "methods": ["DELETE"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.store.company": {
            "uri": "manage\/checks\/{complianceCheck}\/company\/store\/company",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.store.person": {
            "uri": "manage\/checks\/{complianceCheck}\/company\/store\/person",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.update.contact": {
            "uri": "manage\/checks\/{complianceCheck}\/company\/update\/contact",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.update.comment": {
            "uri": "manage\/checks\/{complianceCheck}\/company\/update\/comment",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.monitoring.update": {
            "uri": "manage\/checks\/{complianceCheck}\/monitoring",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.archive": {
            "uri": "manage\/checks\/archive",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.check.archive.datatable": {
            "uri": "manage\/checks\/archive\/items.json",
            "methods": ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
         },
         "dashboard.check.archive.restore": {
            "uri": "manage\/checks\/archive\/{trashedComplianceCheck}\/restore",
            "methods": ["POST"]
         },
         "dashboard.check.archive.destroy": {
            "uri": "manage\/checks\/archive\/{trashedComplianceCheck}\/destroy",
            "methods": ["DELETE"]
         },
         "dashboard.check.show": {
            "uri": "manage\/checks\/{complianceCheck}",
            "methods": ["GET", "HEAD"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "dashboard.check.datatable": {
            "uri": "manage\/checks\/items.json",
            "methods": ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
         },
         "dashboard.check.store": {
            "uri": "manage\/checks\/create",
            "methods": ["POST"]
         },
         "dashboard.business_unit.list": {
            "uri": "manage\/business_units",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.business_unit.create": {
            "uri": "manage\/business_units\/create",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.business_unit.datatable": {
            "uri": "manage\/business_units\/items.json",
            "methods": ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
         },
         "dashboard.business_unit.edit": {
            "uri": "manage\/business_units\/edit\/{businessUnit}",
            "methods": ["GET", "HEAD"],
            "bindings": {
               "businessUnit": "id"
            }
         },
         "dashboard.business_unit.store": {
            "uri": "manage\/business_units\/store\/{businessUnit?}",
            "methods": ["POST"],
            "bindings": {
               "businessUnit": "id"
            }
         },
         "dashboard.business_unit.destroy": {
            "uri": "manage\/business_units\/{businessUnit}",
            "methods": ["DELETE"],
            "bindings": {
               "businessUnit": "id"
            }
         },
         "dashboard.user.list": {
            "uri": "manage\/users",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.user.create": {
            "uri": "manage\/users\/create",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.user.datatable": {
            "uri": "manage\/users\/items.json",
            "methods": ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
         },
         "dashboard.user.edit": {
            "uri": "manage\/users\/edit\/{user}",
            "methods": ["GET", "HEAD"],
            "bindings": {
               "user": "id"
            }
         },
         "dashboard.user.store": {
            "uri": "manage\/users\/store\/{user?}",
            "methods": ["POST"],
            "bindings": {
               "user": "id"
            }
         },
         "dashboard.user.destroy": {
            "uri": "manage\/users\/{user}",
            "methods": ["DELETE"],
            "bindings": {
               "user": "id"
            }
         },
         "dashboard.reminders.list": {
            "uri": "manage\/reminders",
            "methods": ["GET", "HEAD"]
         },
         "dashboard.reminders.datatable": {
            "uri": "manage\/reminders\/items.json",
            "methods": ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
         },
         "manage.company_info.company_by_name": {
            "uri": "manage\/company_info\/companies",
            "methods": ["GET", "HEAD"]
         },
         "manage.company_info.person_by_data": {
            "uri": "manage\/company_info\/persons",
            "methods": ["GET", "HEAD"]
         },
         "manage.company_info.result.reset": {
            "uri": "manage\/company_info\/{companyInfoResult}\/reset",
            "methods": ["DELETE"],
            "bindings": {
               "companyInfoResult": "id"
            }
         },
         "company_info.company_by_coc": {
            "uri": "company_info\/company",
            "methods": ["GET", "HEAD"]
         },
         "company_info.company_by_duns": {
            "uri": "company_info\/company_by_duns",
            "methods": ["GET", "HEAD"]
         },
         "company_info.company_name": {
            "uri": "company_info\/company_by_name",
            "methods": ["GET", "HEAD"]
         },
         "company_info.ubo": {
            "uri": "company_info\/company_by_duns\/ubo",
            "methods": ["GET", "HEAD"]
         },
         "company_info.vat": {
            "uri": "company_info\/vat",
            "methods": ["GET", "HEAD"]
         },
         "compliance_check.show": {
            "uri": "{complianceCheck}",
            "methods": ["GET", "HEAD"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "compliance_check.store": {
            "uri": "{complianceCheck}",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "compliance_check.update_language": {
            "uri": "{complianceCheck}\/updateLanguage",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "compliance_check.authentication": {
            "uri": "{complianceCheck}\/authenticate",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "compliance_check.document.store": {
            "uri": "{complianceCheck}\/document\/upload",
            "methods": ["POST"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "faq.index": {
            "uri": "{complianceCheck}\/faq",
            "methods": ["GET", "HEAD"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "compliance_check.document.destroy": {
            "uri": "{complianceCheck}\/document\/destroy\/{type}\/{key}",
            "methods": ["DELETE"],
            "bindings": {
               "complianceCheck": "identifier"
            }
         },
         "criipto.auth": {
            "uri": "auth\/criipto",
            "methods": ["GET", "HEAD"]
         }
      }
   };

! function(t, r) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (t || self).route = r()
}(this, function() {
   function t(t, r) {
      for (var e = 0; e < r.length; e++) {
         var n = r[e];
         n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
   }

   function r(r, e, n) {
      return e && t(r.prototype, e), n && t(r, n), Object.defineProperty(r, "prototype", {
         writable: !1
      }), r
   }

   function e() {
      return e = Object.assign ? Object.assign.bind() : function(t) {
         for (var r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
         }
         return t
      }, e.apply(this, arguments)
   }

   function n(t) {
      return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
         return t.__proto__ || Object.getPrototypeOf(t)
      }, n(t)
   }

   function o(t, r) {
      return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
         return t.__proto__ = r, t
      }, o(t, r)
   }

   function i() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
         return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
      } catch (t) {
         return !1
      }
   }

   function u(t, r, e) {
      return u = i() ? Reflect.construct.bind() : function(t, r, e) {
         var n = [null];
         n.push.apply(n, r);
         var i = new(Function.bind.apply(t, n));
         return e && o(i, e.prototype), i
      }, u.apply(null, arguments)
   }

   function f(t) {
      var r = "function" == typeof Map ? new Map : void 0;
      return f = function(t) {
         if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
         if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
         if (void 0 !== r) {
            if (r.has(t)) return r.get(t);
            r.set(t, e)
         }

         function e() {
            return u(t, arguments, n(this).constructor)
         }
         return e.prototype = Object.create(t.prototype, {
            constructor: {
               value: e,
               enumerable: !1,
               writable: !0,
               configurable: !0
            }
         }), o(e, t)
      }, f(t)
   }
   var a = String.prototype.replace,
      c = /%20/g,
      l = "RFC3986",
      s = {
         default: l,
         formatters: {
            RFC1738: function(t) {
               return a.call(t, c, "+")
            },
            RFC3986: function(t) {
               return String(t)
            }
         },
         RFC1738: "RFC1738",
         RFC3986: l
      },
      v = Object.prototype.hasOwnProperty,
      p = Array.isArray,
      y = function() {
         for (var t = [], r = 0; r < 256; ++r) t.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
         return t
      }(),
      d = function(t, r) {
         for (var e = r && r.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n) void 0 !== t[n] && (e[n] = t[n]);
         return e
      },
      b = {
         arrayToObject: d,
         assign: function(t, r) {
            return Object.keys(r).reduce(function(t, e) {
               return t[e] = r[e], t
            }, t)
         },
         combine: function(t, r) {
            return [].concat(t, r)
         },
         compact: function(t) {
            for (var r = [{
                  obj: {
                     o: t
                  },
                  prop: "o"
               }], e = [], n = 0; n < r.length; ++n)
               for (var o = r[n], i = o.obj[o.prop], u = Object.keys(i), f = 0; f < u.length; ++f) {
                  var a = u[f],
                     c = i[a];
                  "object" == typeof c && null !== c && -1 === e.indexOf(c) && (r.push({
                     obj: i,
                     prop: a
                  }), e.push(c))
               }
            return function(t) {
               for (; t.length > 1;) {
                  var r = t.pop(),
                     e = r.obj[r.prop];
                  if (p(e)) {
                     for (var n = [], o = 0; o < e.length; ++o) void 0 !== e[o] && n.push(e[o]);
                     r.obj[r.prop] = n
                  }
               }
            }(r), t
         },
         decode: function(t, r, e) {
            var n = t.replace(/\+/g, " ");
            if ("iso-8859-1" === e) return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
               return decodeURIComponent(n)
            } catch (t) {
               return n
            }
         },
         encode: function(t, r, e, n, o) {
            if (0 === t.length) return t;
            var i = t;
            if ("symbol" == typeof t ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === e) return escape(i).replace(/%u[0-9a-f]{4}/gi, function(t) {
               return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
            });
            for (var u = "", f = 0; f < i.length; ++f) {
               var a = i.charCodeAt(f);
               45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || o === s.RFC1738 && (40 === a || 41 === a) ? u += i.charAt(f) : a < 128 ? u += y[a] : a < 2048 ? u += y[192 | a >> 6] + y[128 | 63 & a] : a < 55296 || a >= 57344 ? u += y[224 | a >> 12] + y[128 | a >> 6 & 63] + y[128 | 63 & a] : (a = 65536 + ((1023 & a) << 10 | 1023 & i.charCodeAt(f += 1)), u += y[240 | a >> 18] + y[128 | a >> 12 & 63] + y[128 | a >> 6 & 63] + y[128 | 63 & a])
            }
            return u
         },
         isBuffer: function(t) {
            return !(!t || "object" != typeof t || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)))
         },
         isRegExp: function(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t)
         },
         maybeMap: function(t, r) {
            if (p(t)) {
               for (var e = [], n = 0; n < t.length; n += 1) e.push(r(t[n]));
               return e
            }
            return r(t)
         },
         merge: function t(r, e, n) {
            if (!e) return r;
            if ("object" != typeof e) {
               if (p(r)) r.push(e);
               else {
                  if (!r || "object" != typeof r) return [r, e];
                  (n && (n.plainObjects || n.allowPrototypes) || !v.call(Object.prototype, e)) && (r[e] = !0)
               }
               return r
            }
            if (!r || "object" != typeof r) return [r].concat(e);
            var o = r;
            return p(r) && !p(e) && (o = d(r, n)), p(r) && p(e) ? (e.forEach(function(e, o) {
               if (v.call(r, o)) {
                  var i = r[o];
                  i && "object" == typeof i && e && "object" == typeof e ? r[o] = t(i, e, n) : r.push(e)
               } else r[o] = e
            }), r) : Object.keys(e).reduce(function(r, o) {
               var i = e[o];
               return r[o] = v.call(r, o) ? t(r[o], i, n) : i, r
            }, o)
         }
      },
      h = Object.prototype.hasOwnProperty,
      m = {
         brackets: function(t) {
            return t + "[]"
         },
         comma: "comma",
         indices: function(t, r) {
            return t + "[" + r + "]"
         },
         repeat: function(t) {
            return t
         }
      },
      g = Array.isArray,
      j = String.prototype.split,
      w = Array.prototype.push,
      O = function(t, r) {
         w.apply(t, g(r) ? r : [r])
      },
      E = Date.prototype.toISOString,
      R = s.default,
      S = {
         addQueryPrefix: !1,
         allowDots: !1,
         charset: "utf-8",
         charsetSentinel: !1,
         delimiter: "&",
         encode: !0,
         encoder: b.encode,
         encodeValuesOnly: !1,
         format: R,
         formatter: s.formatters[R],
         indices: !1,
         serializeDate: function(t) {
            return E.call(t)
         },
         skipNulls: !1,
         strictNullHandling: !1
      },
      T = function t(r, e, n, o, i, u, f, a, c, l, s, v, p, y) {
         var d, h = r;
         if ("function" == typeof f ? h = f(e, h) : h instanceof Date ? h = l(h) : "comma" === n && g(h) && (h = b.maybeMap(h, function(t) {
               return t instanceof Date ? l(t) : t
            })), null === h) {
            if (o) return u && !p ? u(e, S.encoder, y, "key", s) : e;
            h = ""
         }
         if ("string" == typeof(d = h) || "number" == typeof d || "boolean" == typeof d || "symbol" == typeof d || "bigint" == typeof d || b.isBuffer(h)) {
            if (u) {
               var m = p ? e : u(e, S.encoder, y, "key", s);
               if ("comma" === n && p) {
                  for (var w = j.call(String(h), ","), E = "", R = 0; R < w.length; ++R) E += (0 === R ? "" : ",") + v(u(w[R], S.encoder, y, "value", s));
                  return [v(m) + "=" + E]
               }
               return [v(m) + "=" + v(u(h, S.encoder, y, "value", s))]
            }
            return [v(e) + "=" + v(String(h))]
         }
         var T, k = [];
         if (void 0 === h) return k;
         if ("comma" === n && g(h)) T = [{
            value: h.length > 0 ? h.join(",") || null : void 0
         }];
         else if (g(f)) T = f;
         else {
            var x = Object.keys(h);
            T = a ? x.sort(a) : x
         }
         for (var N = 0; N < T.length; ++N) {
            var C = T[N],
               D = "object" == typeof C && void 0 !== C.value ? C.value : h[C];
            if (!i || null !== D) {
               var F = g(h) ? "function" == typeof n ? n(e, C) : e : e + (c ? "." + C : "[" + C + "]");
               O(k, t(D, F, n, o, i, u, f, a, c, l, s, v, p, y))
            }
         }
         return k
      },
      k = Object.prototype.hasOwnProperty,
      x = Array.isArray,
      N = {
         allowDots: !1,
         allowPrototypes: !1,
         arrayLimit: 20,
         charset: "utf-8",
         charsetSentinel: !1,
         comma: !1,
         decoder: b.decode,
         delimiter: "&",
         depth: 5,
         ignoreQueryPrefix: !1,
         interpretNumericEntities: !1,
         parameterLimit: 1e3,
         parseArrays: !0,
         plainObjects: !1,
         strictNullHandling: !1
      },
      C = function(t) {
         return t.replace(/&#(\d+);/g, function(t, r) {
            return String.fromCharCode(parseInt(r, 10))
         })
      },
      D = function(t, r) {
         return t && "string" == typeof t && r.comma && t.indexOf(",") > -1 ? t.split(",") : t
      },
      F = function(t, r, e, n) {
         if (t) {
            var o = e.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
               i = /(\[[^[\]]*])/g,
               u = e.depth > 0 && /(\[[^[\]]*])/.exec(o),
               f = u ? o.slice(0, u.index) : o,
               a = [];
            if (f) {
               if (!e.plainObjects && k.call(Object.prototype, f) && !e.allowPrototypes) return;
               a.push(f)
            }
            for (var c = 0; e.depth > 0 && null !== (u = i.exec(o)) && c < e.depth;) {
               if (c += 1, !e.plainObjects && k.call(Object.prototype, u[1].slice(1, -1)) && !e.allowPrototypes) return;
               a.push(u[1])
            }
            return u && a.push("[" + o.slice(u.index) + "]"),
               function(t, r, e, n) {
                  for (var o = n ? r : D(r, e), i = t.length - 1; i >= 0; --i) {
                     var u, f = t[i];
                     if ("[]" === f && e.parseArrays) u = [].concat(o);
                     else {
                        u = e.plainObjects ? Object.create(null) : {};
                        var a = "[" === f.charAt(0) && "]" === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                           c = parseInt(a, 10);
                        e.parseArrays || "" !== a ? !isNaN(c) && f !== a && String(c) === a && c >= 0 && e.parseArrays && c <= e.arrayLimit ? (u = [])[c] = o : "__proto__" !== a && (u[a] = o) : u = {
                           0: o
                        }
                     }
                     o = u
                  }
                  return o
               }(a, r, e, n)
         }
      },
      $ = function(t, r) {
         var e = function(t) {
            if (!t) return N;
            if (null != t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
            if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            return {
               allowDots: void 0 === t.allowDots ? N.allowDots : !!t.allowDots,
               allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : N.allowPrototypes,
               arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : N.arrayLimit,
               charset: void 0 === t.charset ? N.charset : t.charset,
               charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : N.charsetSentinel,
               comma: "boolean" == typeof t.comma ? t.comma : N.comma,
               decoder: "function" == typeof t.decoder ? t.decoder : N.decoder,
               delimiter: "string" == typeof t.delimiter || b.isRegExp(t.delimiter) ? t.delimiter : N.delimiter,
               depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : N.depth,
               ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
               interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : N.interpretNumericEntities,
               parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : N.parameterLimit,
               parseArrays: !1 !== t.parseArrays,
               plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : N.plainObjects,
               strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : N.strictNullHandling
            }
         }(r);
         if ("" === t || null == t) return e.plainObjects ? Object.create(null) : {};
         for (var n = "string" == typeof t ? function(t, r) {
               var e, n = {},
                  o = (r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(r.delimiter, Infinity === r.parameterLimit ? void 0 : r.parameterLimit),
                  i = -1,
                  u = r.charset;
               if (r.charsetSentinel)
                  for (e = 0; e < o.length; ++e) 0 === o[e].indexOf("utf8=") && ("utf8=%E2%9C%93" === o[e] ? u = "utf-8" : "utf8=%26%2310003%3B" === o[e] && (u = "iso-8859-1"), i = e, e = o.length);
               for (e = 0; e < o.length; ++e)
                  if (e !== i) {
                     var f, a, c = o[e],
                        l = c.indexOf("]="),
                        s = -1 === l ? c.indexOf("=") : l + 1; - 1 === s ? (f = r.decoder(c, N.decoder, u, "key"), a = r.strictNullHandling ? null : "") : (f = r.decoder(c.slice(0, s), N.decoder, u, "key"), a = b.maybeMap(D(c.slice(s + 1), r), function(t) {
                        return r.decoder(t, N.decoder, u, "value")
                     })), a && r.interpretNumericEntities && "iso-8859-1" === u && (a = C(a)), c.indexOf("[]=") > -1 && (a = x(a) ? [a] : a), n[f] = k.call(n, f) ? b.combine(n[f], a) : a
                  } return n
            }(t, e) : t, o = e.plainObjects ? Object.create(null) : {}, i = Object.keys(n), u = 0; u < i.length; ++u) {
            var f = i[u],
               a = F(f, n[f], e, "string" == typeof t);
            o = b.merge(o, a, e)
         }
         return b.compact(o)
      },
      A = /*#__PURE__*/ function() {
         function t(t, r, e) {
            var n, o;
            this.name = t, this.definition = r, this.bindings = null != (n = r.bindings) ? n : {}, this.wheres = null != (o = r.wheres) ? o : {}, this.config = e
         }
         var e = t.prototype;
         return e.matchesUrl = function(t) {
            var r = this;
            if (!this.definition.methods.includes("GET")) return !1;
            var e = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t, e, n, o) {
                  var i, u = "(?<" + n + ">" + ((null == (i = r.wheres[n]) ? void 0 : i.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
                  return o ? "(" + e + u + ")?" : "" + e + u
               }).replace(/^\w+:\/\//, ""),
               n = t.replace(/^\w+:\/\//, "").split("?"),
               o = n[0],
               i = n[1],
               u = new RegExp("^" + e + "/?$").exec(o);
            return !!u && {
               params: u.groups,
               query: $(i)
            }
         }, e.compile = function(t) {
            var r = this,
               e = this.parameterSegments;
            return e.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n, o, i) {
               var u, f, a;
               if (!i && [null, void 0].includes(t[o])) throw new Error("Ziggy error: '" + o + "' parameter is required for route '" + r.name + "'.");
               if (e[e.length - 1].name === o && ".*" === r.wheres[o]) return encodeURIComponent(null != (a = t[o]) ? a : "").replace(/%2F/g, "/");
               if (r.wheres[o] && !new RegExp("^" + (i ? "(" + r.wheres[o] + ")?" : r.wheres[o]) + "$").test(null != (u = t[o]) ? u : "")) throw new Error("Ziggy error: '" + o + "' parameter does not match required format '" + r.wheres[o] + "' for route '" + r.name + "'.");
               return encodeURIComponent(null != (f = t[o]) ? f : "")
            }).replace(/\/+$/, "") : this.template
         }, r(t, [{
            key: "template",
            get: function() {
               return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "")
            }
         }, {
            key: "parameterSegments",
            get: function() {
               var t, r;
               return null != (t = null == (r = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r.map(function(t) {
                  return {
                     name: t.replace(/{|\??}/g, ""),
                     required: !/\?}$/.test(t)
                  }
               })) ? t : []
            }
         }]), t
      }(),
      P = /*#__PURE__*/ function(t) {
         var n, i;

         function u(r, n, o, i) {
            var u;
            if (void 0 === o && (o = !0), (u = t.call(this) || this).t = null != i ? i : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u.t = e({}, u.t, {
                  absolute: o
               }), r) {
               if (!u.t.routes[r]) throw new Error("Ziggy error: route '" + r + "' is not in the route list.");
               u.i = new A(r, u.t.routes[r], u.t), u.u = u.l(n)
            }
            return u
         }
         i = t, (n = u).prototype = Object.create(i.prototype), n.prototype.constructor = n, o(n, i);
         var f = u.prototype;
         return f.toString = function() {
            var t = this,
               r = Object.keys(this.u).filter(function(r) {
                  return !t.i.parameterSegments.some(function(t) {
                     return t.name === r
                  })
               }).filter(function(t) {
                  return "_query" !== t
               }).reduce(function(r, n) {
                  var o;
                  return e({}, r, ((o = {})[n] = t.u[n], o))
               }, {});
            return this.i.compile(this.u) + function(t, r) {
               var e, n = t,
                  o = function(t) {
                     if (!t) return S;
                     if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                     var r = t.charset || S.charset;
                     if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                     var e = s.default;
                     if (void 0 !== t.format) {
                        if (!h.call(s.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                        e = t.format
                     }
                     var n = s.formatters[e],
                        o = S.filter;
                     return ("function" == typeof t.filter || g(t.filter)) && (o = t.filter), {
                        addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : S.addQueryPrefix,
                        allowDots: void 0 === t.allowDots ? S.allowDots : !!t.allowDots,
                        charset: r,
                        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : S.charsetSentinel,
                        delimiter: void 0 === t.delimiter ? S.delimiter : t.delimiter,
                        encode: "boolean" == typeof t.encode ? t.encode : S.encode,
                        encoder: "function" == typeof t.encoder ? t.encoder : S.encoder,
                        encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : S.encodeValuesOnly,
                        filter: o,
                        format: e,
                        formatter: n,
                        serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : S.serializeDate,
                        skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : S.skipNulls,
                        sort: "function" == typeof t.sort ? t.sort : null,
                        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : S.strictNullHandling
                     }
                  }(r);
               "function" == typeof o.filter ? n = (0, o.filter)("", n) : g(o.filter) && (e = o.filter);
               var i = [];
               if ("object" != typeof n || null === n) return "";
               var u = m[r && r.arrayFormat in m ? r.arrayFormat : r && "indices" in r ? r.indices ? "indices" : "repeat" : "indices"];
               e || (e = Object.keys(n)), o.sort && e.sort(o.sort);
               for (var f = 0; f < e.length; ++f) {
                  var a = e[f];
                  o.skipNulls && null === n[a] || O(i, T(n[a], a, u, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset))
               }
               var c = i.join(o.delimiter),
                  l = !0 === o.addQueryPrefix ? "?" : "";
               return o.charsetSentinel && (l += "iso-8859-1" === o.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c.length > 0 ? l + c : ""
            }(e({}, r, this.u._query), {
               addQueryPrefix: !0,
               arrayFormat: "indices",
               encodeValuesOnly: !0,
               skipNulls: !0,
               encoder: function(t, r) {
                  return "boolean" == typeof t ? Number(t) : r(t)
               }
            })
         }, f.v = function(t) {
            var r = this;
            t ? this.t.absolute && t.startsWith("/") && (t = this.p().host + t) : t = this.h();
            var n = {},
               o = Object.entries(this.t.routes).find(function(e) {
                  return n = new A(e[0], e[1], r.t).matchesUrl(t)
               }) || [void 0, void 0];
            return e({
               name: o[0]
            }, n, {
               route: o[1]
            })
         }, f.h = function() {
            var t = this.p(),
               r = t.pathname,
               e = t.search;
            return (this.t.absolute ? t.host + r : r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + e
         }, f.current = function(t, r) {
            var n = this.v(),
               o = n.name,
               i = n.params,
               u = n.query,
               f = n.route;
            if (!t) return o;
            var a = new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o);
            if ([null, void 0].includes(r) || !a) return a;
            var c = new A(o, f, this.t);
            r = this.l(r, c);
            var l = e({}, i, u);
            return !(!Object.values(r).every(function(t) {
               return !t
            }) || Object.values(l).some(function(t) {
               return void 0 !== t
            })) || Object.entries(r).every(function(t) {
               return l[t[0]] == t[1]
            })
         }, f.p = function() {
            var t, r, e, n, o, i, u = "undefined" != typeof window ? window.location : {},
               f = u.host,
               a = u.pathname,
               c = u.search;
            return {
               host: null != (t = null == (r = this.t.location) ? void 0 : r.host) ? t : void 0 === f ? "" : f,
               pathname: null != (e = null == (n = this.t.location) ? void 0 : n.pathname) ? e : void 0 === a ? "" : a,
               search: null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : void 0 === c ? "" : c
            }
         }, f.has = function(t) {
            return Object.keys(this.t.routes).includes(t)
         }, f.l = function(t, r) {
            var n = this;
            void 0 === t && (t = {}), void 0 === r && (r = this.i), null != t || (t = {}), t = ["string", "number"].includes(typeof t) ? [t] : t;
            var o = r.parameterSegments.filter(function(t) {
               return !n.t.defaults[t.name]
            });
            if (Array.isArray(t)) t = t.reduce(function(t, r, n) {
               var i, u;
               return e({}, t, o[n] ? ((i = {})[o[n].name] = r, i) : "object" == typeof r ? r : ((u = {})[r] = "", u))
            }, {});
            else if (1 === o.length && !t[o[0].name] && (t.hasOwnProperty(Object.values(r.bindings)[0]) || t.hasOwnProperty("id"))) {
               var i;
               (i = {})[o[0].name] = t, t = i
            }
            return e({}, this.m(r), this.g(t, r))
         }, f.m = function(t) {
            var r = this;
            return t.parameterSegments.filter(function(t) {
               return r.t.defaults[t.name]
            }).reduce(function(t, n, o) {
               var i, u = n.name;
               return e({}, t, ((i = {})[u] = r.t.defaults[u], i))
            }, {})
         }, f.g = function(t, r) {
            var n = r.bindings,
               o = r.parameterSegments;
            return Object.entries(t).reduce(function(t, r) {
               var i, u, f = r[0],
                  a = r[1];
               if (!a || "object" != typeof a || Array.isArray(a) || !o.some(function(t) {
                     return t.name === f
                  })) return e({}, t, ((u = {})[f] = a, u));
               if (!a.hasOwnProperty(n[f])) {
                  if (!a.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + f + "' parameter is missing route model binding key '" + n[f] + "'.");
                  n[f] = "id"
               }
               return e({}, t, ((i = {})[f] = a[n[f]], i))
            }, {})
         }, f.valueOf = function() {
            return this.toString()
         }, f.check = function(t) {
            return this.has(t)
         }, r(u, [{
            key: "params",
            get: function() {
               var t = this.v();
               return e({}, t.params, t.query)
            }
         }]), u
      }( /*#__PURE__*/ f(String));
   return function(t, r, e, n) {
      var o = new P(t, r, e, n);
      return t ? o.toString() : o
   }
});

<
/script></head >