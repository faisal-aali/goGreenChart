"use strict";
(()=>{
        var Ea = Object.create;
        var last_applied_filter = null;
        var Rr = Object.defineProperty;
        var wa = Object.getOwnPropertyDescriptor;
        var ba = Object.getOwnPropertyNames;
        var Sa = Object.getPrototypeOf
            , Ma = Object.prototype.hasOwnProperty;
        var ka = (t,e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e),
            e.exports);

        var compare_arrays = (key, last_filters, profile_filters_form) => {
            const temp = {};
            [...((last_filters || {})[key] || []), ...(profile_filters_form[key] || [])]
                .forEach(x => {
                    if (!temp[x]) {
                        temp[x] = 0
                    }

                    temp[x]++;
                });

            const changes = Object.values(temp).filter(x => x != 2);
            return !!changes.length;
        };

        var Na = (t,e,r,o)=>{
                if (e && typeof e == "object" || typeof e == "function")
                    for (let n of ba(e))
                        !Ma.call(t, n) && n !== r && Rr(t, n, {
                            get: ()=>e[n],
                            enumerable: !(o = wa(e, n)) || o.enumerable
                        });
                return t
            }
        ;
        var Wa = (t,e,r)=>(r = t != null ? Ea(Sa(t)) : {},
            Na(e || !t || !t.__esModule ? Rr(r, "default", {
                value: t,
                enumerable: !0
            }) : r, t));
        var ya = ka((Ny,pa)=>{
                pa.exports = as;
                function as(t, e, r, o) {
                    var n, a, i;
                    return function() {
                        if (i = this,
                            a = Array.prototype.slice.call(arguments),
                        n && (r || o))
                            return;
                        if (!r)
                            return s(),
                                n = setTimeout(u, e),
                                n;
                        n = setTimeout(s, e),
                            t.apply(i, a);
                        function u() {
                            s(),
                                t.apply(i, a)
                        }
                        function s() {
                            clearTimeout(n),
                                n = null
                        }
                    }
                }
            }
        );
        var Br = "https://api-gogreen-ai.deno.dev/addresses",
            Audr = "https://api-gogreen-ai.deno.dev/audience"
            , Fr = "di3T?IHUjH91mgCKs3IrVe5HYP8ctOOH";
        var qr = "chart";
        var Pr = ["wrapper", "filters-wrapper","filters-submit-button", "filters-reset-button", "filter-toggle", "filter-content", "filter-summary-label", "geography-filter-wrapper", "region-filter", "local-authority-filter", "fuel-poverty-rate-filter", "energy-efficiency-filter-wrapper", "current-rating-filter", "hot-water-efficiency-filter", "windows-efficiency-filter", "walls-efficiency-filter", "roof-efficiency-filter", "main-heat-efficiency-filter", "lighting-efficiency-filter", "energy-cost-filter-wrapper", "current-consumption-filter", "household-income-filter-wrapper", "tenure-filter", "main-gas-filter", "income-deprivation-domain-filter", "income-deprivation-children-filter", "income-deprivation-elderly-filter", "addresses-count", "toolbar", "chart-toggle", "search", "canvas", "canvas-placeholder", "loader"]
            , xt = 2e3
            , Et = !1
            , wt = !0;
        var Ta = ()=>Pr.reduce((e,r)=>(e[r] = `[data-${qr}-element="${r}"]`,
            e), {})
            , A = Ta();
        var Or = ()=>{}
        ;
        function q(t, e, r, o) {
            return t ? (t.addEventListener(e, r, o),
                ()=>t.removeEventListener(e, r, o)) : Or
        }
        function ut(t, e) {
            return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
        function $e(t, e) {
            return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
        }
        function ue(t) {
            let e, r, o;
            t.length !== 2 ? (e = ut,
                r = (l,u)=>ut(t(l), u),
                o = (l,u)=>t(l) - u) : (e = t === ut || t === $e ? t : Ca,
                r = t,
                o = t);
            function n(l, u, s=0, c=l.length) {
                if (s < c) {
                    if (e(u, u) !== 0)
                        return c;
                    do {
                        let h = s + c >>> 1;
                        r(l[h], u) < 0 ? s = h + 1 : c = h
                    } while (s < c)
                }
                return s
            }
            function a(l, u, s=0, c=l.length) {
                if (s < c) {
                    if (e(u, u) !== 0)
                        return c;
                    do {
                        let h = s + c >>> 1;
                        r(l[h], u) <= 0 ? s = h + 1 : c = h
                    } while (s < c)
                }
                return s
            }
            function i(l, u, s=0, c=l.length) {
                let h = n(l, u, s, c - 1);
                return h > s && o(l[h - 1], u) > -o(l[h], u) ? h - 1 : h
            }
            return {
                left: n,
                center: i,
                right: a
            }
        }
        function Ca() {
            return 0
        }
        function Ge(t) {
            return t === null ? NaN : +t
        }
        var zr = ue(ut)
            , Vr = zr.right
            , La = zr.left
            , Aa = ue(Ge).center
            , Ke = Vr;
        function Rt(t, e) {
            let r, o;
            if (e === void 0)
                for (let n of t)
                    n != null && (r === void 0 ? n >= n && (r = o = n) : (r > n && (r = n),
                    o < n && (o = n)));
            else {
                let n = -1;
                for (let a of t)
                    (a = e(a, ++n, t)) != null && (r === void 0 ? a >= a && (r = o = a) : (r > a && (r = a),
                    o < a && (o = a)))
            }
            return [r, o]
        }
        var bt = class extends Map {
                constructor(e, r=Ia) {
                    if (super(),
                        Object.defineProperties(this, {
                            _intern: {
                                value: new Map
                            },
                            _key: {
                                value: r
                            }
                        }),
                    e != null)
                        for (let[o,n] of e)
                            this.set(o, n)
                }
                get(e) {
                    return super.get(Yr(this, e))
                }
                has(e) {
                    return super.has(Yr(this, e))
                }
                set(e, r) {
                    return super.set(Ha(this, e), r)
                }
                delete(e) {
                    return super.delete(Da(this, e))
                }
            }
        ;
        function Yr({_intern: t, _key: e}, r) {
            let o = e(r);
            return t.has(o) ? t.get(o) : r
        }
        function Ha({_intern: t, _key: e}, r) {
            let o = e(r);
            return t.has(o) ? t.get(o) : (t.set(o, r),
                r)
        }
        function Da({_intern: t, _key: e}, r) {
            let o = e(r);
            return t.has(o) && (r = t.get(o),
                t.delete(o)),
                r
        }
        function Ia(t) {
            return t !== null && typeof t == "object" ? t.valueOf() : t
        }
        var Ra = Math.sqrt(50)
            , Ba = Math.sqrt(10)
            , Fa = Math.sqrt(2);
        function ce(t, e, r) {
            let o = (e - t) / Math.max(0, r), n = Math.floor(Math.log10(o)), a = o / Math.pow(10, n), i = a >= Ra ? 10 : a >= Ba ? 5 : a >= Fa ? 2 : 1, l, u, s;
            return n < 0 ? (s = Math.pow(10, -n) / i,
                l = Math.round(t * s),
                u = Math.round(e * s),
            l / s < t && ++l,
            u / s > e && --u,
                s = -s) : (s = Math.pow(10, n) * i,
                l = Math.round(t / s),
                u = Math.round(e / s),
            l * s < t && ++l,
            u * s > e && --u),
                u < l && .5 <= r && r < 2 ? ce(t, e, r * 2) : [l, u, s]
        }
        function fe(t, e, r) {
            if (e = +e,
                t = +t,
                r = +r,
                !(r > 0))
                return [];
            if (t === e)
                return [t];
            let o = e < t
                , [n,a,i] = o ? ce(e, t, r) : ce(t, e, r);
            if (!(a >= n))
                return [];
            let l = a - n + 1
                , u = new Array(l);
            if (o)
                if (i < 0)
                    for (let s = 0; s < l; ++s)
                        u[s] = (a - s) / -i;
                else
                    for (let s = 0; s < l; ++s)
                        u[s] = (a - s) * i;
            else if (i < 0)
                for (let s = 0; s < l; ++s)
                    u[s] = (n + s) / -i;
            else
                for (let s = 0; s < l; ++s)
                    u[s] = (n + s) * i;
            return u
        }
        function Bt(t, e, r) {
            return e = +e,
                t = +t,
                r = +r,
                ce(t, e, r)[2]
        }
        function Xe(t, e, r) {
            e = +e,
                t = +t,
                r = +r;
            let o = e < t
                , n = o ? Bt(e, t, r) : Bt(t, e, r);
            return (o ? -1 : 1) * (n < 0 ? 1 / -n : n)
        }
        function he(t, e, r) {
            t = +t,
                e = +e,
                r = (n = arguments.length) < 2 ? (e = t,
                    t = 0,
                    1) : n < 3 ? 1 : +r;
            for (var o = -1, n = Math.max(0, Math.ceil((e - t) / r)) | 0, a = new Array(n); ++o < n; )
                a[o] = t + o * r;
            return a
        }
        function $r(t) {
            return t
        }
        var Ue = 1
            , Qe = 2
            , Ze = 3
            , Ft = 4
            , Gr = 1e-6;
        function qa(t) {
            return "translate(" + t + ",0)"
        }
        function Pa(t) {
            return "translate(0," + t + ")"
        }
        function Oa(t) {
            return e=>+t(e)
        }
        function za(t, e) {
            return e = Math.max(0, t.bandwidth() - e * 2) / 2,
            t.round() && (e = Math.round(e)),
                r=>+t(r) + e
        }
        function Va() {
            return !this.__axis
        }
        function Kr(t, e) {
            var r = []
                , o = null
                , n = null
                , a = 6
                , i = 6
                , l = 3
                , u = typeof window != "undefined" && window.devicePixelRatio > 1 ? 0 : .5
                , s = t === Ue || t === Ft ? -1 : 1
                , c = t === Ft || t === Qe ? "x" : "y"
                , h = t === Ue || t === Ze ? qa : Pa;
            function f(d) {
                var E = o == null ? e.ticks ? e.ticks.apply(e, r) : e.domain() : o
                    , m = n == null ? e.tickFormat ? e.tickFormat.apply(e, r) : $r : n
                    , b = Math.max(a, 0) + l
                    , S = e.range()
                    , W = +S[0] + u
                    , C = +S[S.length - 1] + u
                    , R = (e.bandwidth ? za : Oa)(e.copy(), u)
                    , L = d.selection ? d.selection() : d
                    , O = L.selectAll(".domain").data([null])
                    , F = L.selectAll(".tick").data(E, e).order()
                    , I = F.exit()
                    , G = F.enter().append("g").attr("class", "tick")
                    , B = F.select("line")
                    , k = F.select("text");
                O = O.merge(O.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")),
                    F = F.merge(G),
                    B = B.merge(G.append("line").attr("stroke", "currentColor").attr(c + "2", s * a)),
                    k = k.merge(G.append("text").attr("fill", "currentColor").attr(c, s * b).attr("dy", t === Ue ? "0em" : t === Ze ? "0.71em" : "0.32em")),
                d !== L && (O = O.transition(d),
                    F = F.transition(d),
                    B = B.transition(d),
                    k = k.transition(d),
                    I = I.transition(d).attr("opacity", Gr).attr("transform", function(g) {
                        return isFinite(g = R(g)) ? h(g + u) : this.getAttribute("transform")
                    }),
                    G.attr("opacity", Gr).attr("transform", function(g) {
                        var _ = this.parentNode.__axis;
                        return h((_ && isFinite(_ = _(g)) ? _ : R(g)) + u)
                    })),
                    I.remove(),
                    O.attr("d", t === Ft || t === Qe ? i ? "M" + s * i + "," + W + "H" + u + "V" + C + "H" + s * i : "M" + u + "," + W + "V" + C : i ? "M" + W + "," + s * i + "V" + u + "H" + C + "V" + s * i : "M" + W + "," + u + "H" + C),
                    F.attr("opacity", 1).attr("transform", function(g) {
                        return h(R(g) + u)
                    }),
                    B.attr(c + "2", s * a),
                    k.attr(c, s * b).text(m),
                    L.filter(Va).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Qe ? "start" : t === Ft ? "end" : "middle"),
                    L.each(function() {
                        this.__axis = R
                    })
            }
            return f.scale = function(d) {
                return arguments.length ? (e = d,
                    f) : e
            }
                ,
                f.ticks = function() {
                    return r = Array.from(arguments),
                        f
                }
                ,
                f.tickArguments = function(d) {
                    return arguments.length ? (r = d == null ? [] : Array.from(d),
                        f) : r.slice()
                }
                ,
                f.tickValues = function(d) {
                    return arguments.length ? (o = d == null ? null : Array.from(d),
                        f) : o && o.slice()
                }
                ,
                f.tickFormat = function(d) {
                    return arguments.length ? (n = d,
                        f) : n
                }
                ,
                f.tickSize = function(d) {
                    return arguments.length ? (a = i = +d,
                        f) : a
                }
                ,
                f.tickSizeInner = function(d) {
                    return arguments.length ? (a = +d,
                        f) : a
                }
                ,
                f.tickSizeOuter = function(d) {
                    return arguments.length ? (i = +d,
                        f) : i
                }
                ,
                f.tickPadding = function(d) {
                    return arguments.length ? (l = +d,
                        f) : l
                }
                ,
                f.offset = function(d) {
                    return arguments.length ? (u = +d,
                        f) : u
                }
                ,
                f
        }
        function Je(t) {
            return Kr(Ze, t)
        }
        function je(t) {
            return Kr(Ft, t)
        }
        var Ya = {
            value: ()=>{}
        };
        function Ur() {
            for (var t = 0, e = arguments.length, r = {}, o; t < e; ++t) {
                if (!(o = arguments[t] + "") || o in r || /[\s.]/.test(o))
                    throw new Error("illegal type: " + o);
                r[o] = []
            }
            return new de(r)
        }
        function de(t) {
            this._ = t
        }
        function $a(t, e) {
            return t.trim().split(/^|\s+/).map(function(r) {
                var o = ""
                    , n = r.indexOf(".");
                if (n >= 0 && (o = r.slice(n + 1),
                    r = r.slice(0, n)),
                r && !e.hasOwnProperty(r))
                    throw new Error("unknown type: " + r);
                return {
                    type: r,
                    name: o
                }
            })
        }
        de.prototype = Ur.prototype = {
            constructor: de,
            on: function(t, e) {
                var r = this._, o = $a(t + "", r), n, a = -1, i = o.length;
                if (arguments.length < 2) {
                    for (; ++a < i; )
                        if ((n = (t = o[a]).type) && (n = Ga(r[n], t.name)))
                            return n;
                    return
                }
                if (e != null && typeof e != "function")
                    throw new Error("invalid callback: " + e);
                for (; ++a < i; )
                    if (n = (t = o[a]).type)
                        r[n] = Xr(r[n], t.name, e);
                    else if (e == null)
                        for (n in r)
                            r[n] = Xr(r[n], t.name, null);
                return this
            },
            copy: function() {
                var t = {}
                    , e = this._;
                for (var r in e)
                    t[r] = e[r].slice();
                return new de(t)
            },
            call: function(t, e) {
                if ((n = arguments.length - 2) > 0)
                    for (var r = new Array(n), o = 0, n, a; o < n; ++o)
                        r[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (a = this._[t],
                         o = 0,
                         n = a.length; o < n; ++o)
                    a[o].value.apply(e, r)
            },
            apply: function(t, e, r) {
                if (!this._.hasOwnProperty(t))
                    throw new Error("unknown type: " + t);
                for (var o = this._[t], n = 0, a = o.length; n < a; ++n)
                    o[n].value.apply(e, r)
            }
        };
        function Ga(t, e) {
            for (var r = 0, o = t.length, n; r < o; ++r)
                if ((n = t[r]).name === e)
                    return n.value
        }
        function Xr(t, e, r) {
            for (var o = 0, n = t.length; o < n; ++o)
                if (t[o].name === e) {
                    t[o] = Ya,
                        t = t.slice(0, o).concat(t.slice(o + 1));
                    break
                }
            return r != null && t.push({
                name: e,
                value: r
            }),
                t
        }
        var qt = Ur;
        var _e = "http://www.w3.org/1999/xhtml"
            , tr = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: _e,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        };
        function rt(t) {
            var e = t += ""
                , r = e.indexOf(":");
            return r >= 0 && (e = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)),
                tr.hasOwnProperty(e) ? {
                    space: tr[e],
                    local: t
                } : t
        }
        function Ka(t) {
            return function() {
                var e = this.ownerDocument
                    , r = this.namespaceURI;
                return r === _e && e.documentElement.namespaceURI === _e ? e.createElement(t) : e.createElementNS(r, t)
            }
        }
        function Xa(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        function St(t) {
            var e = rt(t);
            return (e.local ? Xa : Ka)(e)
        }
        function Ua() {}
        function ct(t) {
            return t == null ? Ua : function() {
                return this.querySelector(t)
            }
        }
        function Qr(t) {
            typeof t != "function" && (t = ct(t));
            for (var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)
                for (var a = e[n], i = a.length, l = o[n] = new Array(i), u, s, c = 0; c < i; ++c)
                    (u = a[c]) && (s = t.call(u, u.__data__, c, a)) && ("__data__"in u && (s.__data__ = u.__data__),
                        l[c] = s);
            return new D(o,this._parents)
        }
        function Pt(t) {
            return t == null ? [] : Array.isArray(t) ? t : Array.from(t)
        }
        function Qa() {
            return []
        }
        function Ot(t) {
            return t == null ? Qa : function() {
                return this.querySelectorAll(t)
            }
        }
        function Za(t) {
            return function() {
                return Pt(t.apply(this, arguments))
            }
        }
        function Zr(t) {
            typeof t == "function" ? t = Za(t) : t = Ot(t);
            for (var e = this._groups, r = e.length, o = [], n = [], a = 0; a < r; ++a)
                for (var i = e[a], l = i.length, u, s = 0; s < l; ++s)
                    (u = i[s]) && (o.push(t.call(u, u.__data__, s, i)),
                        n.push(u));
            return new D(o,n)
        }
        function zt(t) {
            return function() {
                return this.matches(t)
            }
        }
        function me(t) {
            return function(e) {
                return e.matches(t)
            }
        }
        var Ja = Array.prototype.find;
        function ja(t) {
            return function() {
                return Ja.call(this.children, t)
            }
        }
        function ti() {
            return this.firstElementChild
        }
        function Jr(t) {
            return this.select(t == null ? ti : ja(typeof t == "function" ? t : me(t)))
        }
        var ei = Array.prototype.filter;
        function ri() {
            return Array.from(this.children)
        }
        function oi(t) {
            return function() {
                return ei.call(this.children, t)
            }
        }
        function jr(t) {
            return this.selectAll(t == null ? ri : oi(typeof t == "function" ? t : me(t)))
        }
        function to(t) {
            typeof t != "function" && (t = zt(t));
            for (var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)
                for (var a = e[n], i = a.length, l = o[n] = [], u, s = 0; s < i; ++s)
                    (u = a[s]) && t.call(u, u.__data__, s, a) && l.push(u);
            return new D(o,this._parents)
        }
        function pe(t) {
            return new Array(t.length)
        }
        function eo() {
            return new D(this._enter || this._groups.map(pe),this._parents)
        }
        function Vt(t, e) {
            this.ownerDocument = t.ownerDocument,
                this.namespaceURI = t.namespaceURI,
                this._next = null,
                this._parent = t,
                this.__data__ = e
        }
        Vt.prototype = {
            constructor: Vt,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, e) {
                return this._parent.insertBefore(t, e)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };
        function ro(t) {
            return function() {
                return t
            }
        }
        function ni(t, e, r, o, n, a) {
            for (var i = 0, l, u = e.length, s = a.length; i < s; ++i)
                (l = e[i]) ? (l.__data__ = a[i],
                    o[i] = l) : r[i] = new Vt(t,a[i]);
            for (; i < u; ++i)
                (l = e[i]) && (n[i] = l)
        }
        function ai(t, e, r, o, n, a, i) {
            var l, u, s = new Map, c = e.length, h = a.length, f = new Array(c), d;
            for (l = 0; l < c; ++l)
                (u = e[l]) && (f[l] = d = i.call(u, u.__data__, l, e) + "",
                    s.has(d) ? n[l] = u : s.set(d, u));
            for (l = 0; l < h; ++l)
                d = i.call(t, a[l], l, a) + "",
                    (u = s.get(d)) ? (o[l] = u,
                        u.__data__ = a[l],
                        s.delete(d)) : r[l] = new Vt(t,a[l]);
            for (l = 0; l < c; ++l)
                (u = e[l]) && s.get(f[l]) === u && (n[l] = u)
        }
        function ii(t) {
            return t.__data__
        }
        function oo(t, e) {
            if (!arguments.length)
                return Array.from(this, ii);
            var r = e ? ai : ni
                , o = this._parents
                , n = this._groups;
            typeof t != "function" && (t = ro(t));
            for (var a = n.length, i = new Array(a), l = new Array(a), u = new Array(a), s = 0; s < a; ++s) {
                var c = o[s]
                    , h = n[s]
                    , f = h.length
                    , d = li(t.call(c, c && c.__data__, s, o))
                    , E = d.length
                    , m = l[s] = new Array(E)
                    , b = i[s] = new Array(E)
                    , S = u[s] = new Array(f);
                r(c, h, m, b, S, d, e);
                for (var W = 0, C = 0, R, L; W < E; ++W)
                    if (R = m[W]) {
                        for (W >= C && (C = W + 1); !(L = b[C]) && ++C < E; )
                            ;
                        R._next = L || null
                    }
            }
            return i = new D(i,o),
                i._enter = l,
                i._exit = u,
                i
        }
        function li(t) {
            return typeof t == "object" && "length"in t ? t : Array.from(t)
        }
        function no() {
            return new D(this._exit || this._groups.map(pe),this._parents)
        }
        function ao(t, e, r) {
            var o = this.enter()
                , n = this
                , a = this.exit();
            return typeof t == "function" ? (o = t(o),
            o && (o = o.selection())) : o = o.append(t + ""),
            e != null && (n = e(n),
            n && (n = n.selection())),
                r == null ? a.remove() : r(a),
                o && n ? o.merge(n).order() : n
        }
        function io(t) {
            for (var e = t.selection ? t.selection() : t, r = this._groups, o = e._groups, n = r.length, a = o.length, i = Math.min(n, a), l = new Array(n), u = 0; u < i; ++u)
                for (var s = r[u], c = o[u], h = s.length, f = l[u] = new Array(h), d, E = 0; E < h; ++E)
                    (d = s[E] || c[E]) && (f[E] = d);
            for (; u < n; ++u)
                l[u] = r[u];
            return new D(l,this._parents)
        }
        function lo() {
            for (var t = this._groups, e = -1, r = t.length; ++e < r; )
                for (var o = t[e], n = o.length - 1, a = o[n], i; --n >= 0; )
                    (i = o[n]) && (a && i.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(i, a),
                        a = i);
            return this
        }
        function so(t) {
            t || (t = si);
            function e(h, f) {
                return h && f ? t(h.__data__, f.__data__) : !h - !f
            }
            for (var r = this._groups, o = r.length, n = new Array(o), a = 0; a < o; ++a) {
                for (var i = r[a], l = i.length, u = n[a] = new Array(l), s, c = 0; c < l; ++c)
                    (s = i[c]) && (u[c] = s);
                u.sort(e)
            }
            return new D(n,this._parents).order()
        }
        function si(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
        function uo() {
            var t = arguments[0];
            return arguments[0] = this,
                t.apply(null, arguments),
                this
        }
        function co() {
            return Array.from(this)
        }
        function fo() {
            for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
                for (var o = t[e], n = 0, a = o.length; n < a; ++n) {
                    var i = o[n];
                    if (i)
                        return i
                }
            return null
        }
        function ho() {
            let t = 0;
            for (let e of this)
                ++t;
            return t
        }
        function _o() {
            return !this.node()
        }
        function mo(t) {
            for (var e = this._groups, r = 0, o = e.length; r < o; ++r)
                for (var n = e[r], a = 0, i = n.length, l; a < i; ++a)
                    (l = n[a]) && t.call(l, l.__data__, a, n);
            return this
        }
        function ui(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function ci(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function fi(t, e) {
            return function() {
                this.setAttribute(t, e)
            }
        }
        function hi(t, e) {
            return function() {
                this.setAttributeNS(t.space, t.local, e)
            }
        }
        function di(t, e) {
            return function() {
                var r = e.apply(this, arguments);
                r == null ? this.removeAttribute(t) : this.setAttribute(t, r)
            }
        }
        function _i(t, e) {
            return function() {
                var r = e.apply(this, arguments);
                r == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, r)
            }
        }
        function po(t, e) {
            var r = rt(t);
            if (arguments.length < 2) {
                var o = this.node();
                return r.local ? o.getAttributeNS(r.space, r.local) : o.getAttribute(r)
            }
            return this.each((e == null ? r.local ? ci : ui : typeof e == "function" ? r.local ? _i : di : r.local ? hi : fi)(r, e))
        }
        function ye(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        }
        function mi(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function pi(t, e, r) {
            return function() {
                this.style.setProperty(t, e, r)
            }
        }
        function yi(t, e, r) {
            return function() {
                var o = e.apply(this, arguments);
                o == null ? this.style.removeProperty(t) : this.style.setProperty(t, o, r)
            }
        }
        function yo(t, e, r) {
            return arguments.length > 1 ? this.each((e == null ? mi : typeof e == "function" ? yi : pi)(t, e, r == null ? "" : r)) : at(this.node(), t)
        }
        function at(t, e) {
            return t.style.getPropertyValue(e) || ye(t).getComputedStyle(t, null).getPropertyValue(e)
        }
        function gi(t) {
            return function() {
                delete this[t]
            }
        }
        function vi(t, e) {
            return function() {
                this[t] = e
            }
        }
        function xi(t, e) {
            return function() {
                var r = e.apply(this, arguments);
                r == null ? delete this[t] : this[t] = r
            }
        }
        function go(t, e) {
            return arguments.length > 1 ? this.each((e == null ? gi : typeof e == "function" ? xi : vi)(t, e)) : this.node()[t]
        }
        function vo(t) {
            return t.trim().split(/^|\s+/)
        }
        function er(t) {
            return t.classList || new xo(t)
        }
        function xo(t) {
            this._node = t,
                this._names = vo(t.getAttribute("class") || "")
        }
        xo.prototype = {
            add: function(t) {
                var e = this._names.indexOf(t);
                e < 0 && (this._names.push(t),
                    this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var e = this._names.indexOf(t);
                e >= 0 && (this._names.splice(e, 1),
                    this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };
        function Eo(t, e) {
            for (var r = er(t), o = -1, n = e.length; ++o < n; )
                r.add(e[o])
        }
        function wo(t, e) {
            for (var r = er(t), o = -1, n = e.length; ++o < n; )
                r.remove(e[o])
        }
        function Ei(t) {
            return function() {
                Eo(this, t)
            }
        }
        function wi(t) {
            return function() {
                wo(this, t)
            }
        }
        function bi(t, e) {
            return function() {
                (e.apply(this, arguments) ? Eo : wo)(this, t)
            }
        }
        function bo(t, e) {
            var r = vo(t + "");
            if (arguments.length < 2) {
                for (var o = er(this.node()), n = -1, a = r.length; ++n < a; )
                    if (!o.contains(r[n]))
                        return !1;
                return !0
            }
            return this.each((typeof e == "function" ? bi : e ? Ei : wi)(r, e))
        }
        function Si() {
            this.textContent = ""
        }
        function Mi(t) {
            return function() {
                this.textContent = t
            }
        }
        function ki(t) {
            return function() {
                var e = t.apply(this, arguments);
                this.textContent = e == null ? "" : e
            }
        }
        function So(t) {
            return arguments.length ? this.each(t == null ? Si : (typeof t == "function" ? ki : Mi)(t)) : this.node().textContent
        }
        function Ni() {
            this.innerHTML = ""
        }
        function Wi(t) {
            return function() {
                this.innerHTML = t
            }
        }
        function Ti(t) {
            return function() {
                var e = t.apply(this, arguments);
                this.innerHTML = e == null ? "" : e
            }
        }
        function Mo(t) {
            return arguments.length ? this.each(t == null ? Ni : (typeof t == "function" ? Ti : Wi)(t)) : this.node().innerHTML
        }
        function Ci() {
            this.nextSibling && this.parentNode.appendChild(this)
        }
        function ko() {
            return this.each(Ci)
        }
        function Li() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }
        function No() {
            return this.each(Li)
        }
        function Wo(t) {
            var e = typeof t == "function" ? t : St(t);
            return this.select(function() {
                return this.appendChild(e.apply(this, arguments))
            })
        }
        function Ai() {
            return null
        }
        function To(t, e) {
            var r = typeof t == "function" ? t : St(t)
                , o = e == null ? Ai : typeof e == "function" ? e : ct(e);
            return this.select(function() {
                return this.insertBefore(r.apply(this, arguments), o.apply(this, arguments) || null)
            })
        }
        function Hi() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }
        function Co() {
            return this.each(Hi)
        }
        function Di() {
            var t = this.cloneNode(!1)
                , e = this.parentNode;
            return e ? e.insertBefore(t, this.nextSibling) : t
        }
        function Ii() {
            var t = this.cloneNode(!0)
                , e = this.parentNode;
            return e ? e.insertBefore(t, this.nextSibling) : t
        }
        function Lo(t) {
            return this.select(t ? Ii : Di)
        }
        function Ao(t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        }
        function Ri(t) {
            return function(e) {
                t.call(this, e, this.__data__)
            }
        }
        function Bi(t) {
            return t.trim().split(/^|\s+/).map(function(e) {
                var r = ""
                    , o = e.indexOf(".");
                return o >= 0 && (r = e.slice(o + 1),
                    e = e.slice(0, o)),
                    {
                        type: e,
                        name: r
                    }
            })
        }
        function Fi(t) {
            return function() {
                var e = this.__on;
                if (e) {
                    for (var r = 0, o = -1, n = e.length, a; r < n; ++r)
                        a = e[r],
                            (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++o] = a;
                    ++o ? e.length = o : delete this.__on
                }
            }
        }
        function qi(t, e, r) {
            return function() {
                var o = this.__on, n, a = Ri(e);
                if (o) {
                    for (var i = 0, l = o.length; i < l; ++i)
                        if ((n = o[i]).type === t.type && n.name === t.name) {
                            this.removeEventListener(n.type, n.listener, n.options),
                                this.addEventListener(n.type, n.listener = a, n.options = r),
                                n.value = e;
                            return
                        }
                }
                this.addEventListener(t.type, a, r),
                    n = {
                        type: t.type,
                        name: t.name,
                        value: e,
                        listener: a,
                        options: r
                    },
                    o ? o.push(n) : this.__on = [n]
            }
        }
        function Ho(t, e, r) {
            var o = Bi(t + ""), n, a = o.length, i;
            if (arguments.length < 2) {
                var l = this.node().__on;
                if (l) {
                    for (var u = 0, s = l.length, c; u < s; ++u)
                        for (n = 0,
                                 c = l[u]; n < a; ++n)
                            if ((i = o[n]).type === c.type && i.name === c.name)
                                return c.value
                }
                return
            }
            for (l = e ? qi : Fi,
                     n = 0; n < a; ++n)
                this.each(l(o[n], e, r));
            return this
        }
        function Do(t, e, r) {
            var o = ye(t)
                , n = o.CustomEvent;
            typeof n == "function" ? n = new n(e,r) : (n = o.document.createEvent("Event"),
                r ? (n.initEvent(e, r.bubbles, r.cancelable),
                    n.detail = r.detail) : n.initEvent(e, !1, !1)),
                t.dispatchEvent(n)
        }
        function Pi(t, e) {
            return function() {
                return Do(this, t, e)
            }
        }
        function Oi(t, e) {
            return function() {
                return Do(this, t, e.apply(this, arguments))
            }
        }
        function Io(t, e) {
            return this.each((typeof e == "function" ? Oi : Pi)(t, e))
        }
        function *Ro() {
            for (var t = this._groups, e = 0, r = t.length; e < r; ++e)
                for (var o = t[e], n = 0, a = o.length, i; n < a; ++n)
                    (i = o[n]) && (yield i)
        }
        var Yt = [null];
        function D(t, e) {
            this._groups = t,
                this._parents = e
        }
        function Bo() {
            return new D([[document.documentElement]],Yt)
        }
        function zi() {
            return this
        }
        D.prototype = Bo.prototype = {
            constructor: D,
            select: Qr,
            selectAll: Zr,
            selectChild: Jr,
            selectChildren: jr,
            filter: to,
            data: oo,
            enter: eo,
            exit: no,
            join: ao,
            merge: io,
            selection: zi,
            order: lo,
            sort: so,
            call: uo,
            nodes: co,
            node: fo,
            size: ho,
            empty: _o,
            each: mo,
            attr: po,
            style: yo,
            property: go,
            classed: bo,
            text: So,
            html: Mo,
            raise: ko,
            lower: No,
            append: Wo,
            insert: To,
            remove: Co,
            clone: Lo,
            datum: Ao,
            on: Ho,
            dispatch: Io,
            [Symbol.iterator]: Ro
        };
        var ot = Bo;
        function Mt(t) {
            return typeof t == "string" ? new D([[document.querySelector(t)]],[document.documentElement]) : new D([[t]],Yt)
        }
        function rr(t) {
            return Mt(St(t).call(document.documentElement))
        }
        function $t(t) {
            return typeof t == "string" ? new D([document.querySelectorAll(t)],[document.documentElement]) : new D([Pt(t)],Yt)
        }
        function ge(t, e, r) {
            t.prototype = e.prototype = r,
                r.constructor = t
        }
        function or(t, e) {
            var r = Object.create(t.prototype);
            for (var o in e)
                r[o] = e[o];
            return r
        }
        function Xt() {}
        var Gt = .7
            , Ee = 1 / Gt
            , kt = "\\s*([+-]?\\d+)\\s*"
            , Kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*"
            , tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
            , Vi = /^#([0-9a-f]{3,8})$/
            , Yi = new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`)
            , $i = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`)
            , Gi = new RegExp(`^rgba\\(${kt},${kt},${kt},${Kt}\\)$`)
            , Ki = new RegExp(`^rgba\\(${tt},${tt},${tt},${Kt}\\)$`)
            , Xi = new RegExp(`^hsl\\(${Kt},${tt},${tt}\\)$`)
            , Ui = new RegExp(`^hsla\\(${Kt},${tt},${tt},${Kt}\\)$`)
            , Fo = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
        ge(Xt, J, {
            copy(t) {
                return Object.assign(new this.constructor, this, t)
            },
            displayable() {
                return this.rgb().displayable()
            },
            hex: qo,
            formatHex: qo,
            formatHex8: Qi,
            formatHsl: Zi,
            formatRgb: Po,
            toString: Po
        });
        function qo() {
            return this.rgb().formatHex()
        }
        function Qi() {
            return this.rgb().formatHex8()
        }
        function Zi() {
            return Go(this).formatHsl()
        }
        function Po() {
            return this.rgb().formatRgb()
        }
        function J(t) {
            var e, r;
            return t = (t + "").trim().toLowerCase(),
                (e = Vi.exec(t)) ? (r = e[1].length,
                    e = parseInt(e[1], 16),
                    r === 6 ? Oo(e) : r === 3 ? new U(e >> 8 & 15 | e >> 4 & 240,e >> 4 & 15 | e & 240,(e & 15) << 4 | e & 15,1) : r === 8 ? ve(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : r === 4 ? ve(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Yi.exec(t)) ? new U(e[1],e[2],e[3],1) : (e = $i.exec(t)) ? new U(e[1] * 255 / 100,e[2] * 255 / 100,e[3] * 255 / 100,1) : (e = Gi.exec(t)) ? ve(e[1], e[2], e[3], e[4]) : (e = Ki.exec(t)) ? ve(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Xi.exec(t)) ? Yo(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ui.exec(t)) ? Yo(e[1], e[2] / 100, e[3] / 100, e[4]) : Fo.hasOwnProperty(t) ? Oo(Fo[t]) : t === "transparent" ? new U(NaN,NaN,NaN,0) : null
        }
        function Oo(t) {
            return new U(t >> 16 & 255,t >> 8 & 255,t & 255,1)
        }
        function ve(t, e, r, o) {
            return o <= 0 && (t = e = r = NaN),
                new U(t,e,r,o)
        }
        function Ji(t) {
            return t instanceof Xt || (t = J(t)),
                t ? (t = t.rgb(),
                    new U(t.r,t.g,t.b,t.opacity)) : new U
        }
        function Nt(t, e, r, o) {
            return arguments.length === 1 ? Ji(t) : new U(t,e,r,o == null ? 1 : o)
        }
        function U(t, e, r, o) {
            this.r = +t,
                this.g = +e,
                this.b = +r,
                this.opacity = +o
        }
        ge(U, Nt, or(Xt, {
            brighter(t) {
                return t = t == null ? Ee : Math.pow(Ee, t),
                    new U(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            darker(t) {
                return t = t == null ? Gt : Math.pow(Gt, t),
                    new U(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            rgb() {
                return this
            },
            clamp() {
                return new U(ht(this.r),ht(this.g),ht(this.b),we(this.opacity))
            },
            displayable() {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: zo,
            formatHex: zo,
            formatHex8: ji,
            formatRgb: Vo,
            toString: Vo
        }));
        function zo() {
            return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}`
        }
        function ji() {
            return `#${ft(this.r)}${ft(this.g)}${ft(this.b)}${ft((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
        }
        function Vo() {
            let t = we(this.opacity);
            return `${t === 1 ? "rgb(" : "rgba("}${ht(this.r)}, ${ht(this.g)}, ${ht(this.b)}${t === 1 ? ")" : `, ${t})`}`
        }
        function we(t) {
            return isNaN(t) ? 1 : Math.max(0, Math.min(1, t))
        }
        function ht(t) {
            return Math.max(0, Math.min(255, Math.round(t) || 0))
        }
        function ft(t) {
            return t = ht(t),
            (t < 16 ? "0" : "") + t.toString(16)
        }
        function Yo(t, e, r, o) {
            return o <= 0 ? t = e = r = NaN : r <= 0 || r >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
                new Z(t,e,r,o)
        }
        function Go(t) {
            if (t instanceof Z)
                return new Z(t.h,t.s,t.l,t.opacity);
            if (t instanceof Xt || (t = J(t)),
                !t)
                return new Z;
            if (t instanceof Z)
                return t;
            t = t.rgb();
            var e = t.r / 255
                , r = t.g / 255
                , o = t.b / 255
                , n = Math.min(e, r, o)
                , a = Math.max(e, r, o)
                , i = NaN
                , l = a - n
                , u = (a + n) / 2;
            return l ? (e === a ? i = (r - o) / l + (r < o) * 6 : r === a ? i = (o - e) / l + 2 : i = (e - r) / l + 4,
                l /= u < .5 ? a + n : 2 - a - n,
                i *= 60) : l = u > 0 && u < 1 ? 0 : i,
                new Z(i,l,u,t.opacity)
        }
        function Ko(t, e, r, o) {
            return arguments.length === 1 ? Go(t) : new Z(t,e,r,o == null ? 1 : o)
        }
        function Z(t, e, r, o) {
            this.h = +t,
                this.s = +e,
                this.l = +r,
                this.opacity = +o
        }
        ge(Z, Ko, or(Xt, {
            brighter(t) {
                return t = t == null ? Ee : Math.pow(Ee, t),
                    new Z(this.h,this.s,this.l * t,this.opacity)
            },
            darker(t) {
                return t = t == null ? Gt : Math.pow(Gt, t),
                    new Z(this.h,this.s,this.l * t,this.opacity)
            },
            rgb() {
                var t = this.h % 360 + (this.h < 0) * 360
                    , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
                    , r = this.l
                    , o = r + (r < .5 ? r : 1 - r) * e
                    , n = 2 * r - o;
                return new U(nr(t >= 240 ? t - 240 : t + 120, n, o),nr(t, n, o),nr(t < 120 ? t + 240 : t - 120, n, o),this.opacity)
            },
            clamp() {
                return new Z($o(this.h),xe(this.s),xe(this.l),we(this.opacity))
            },
            displayable() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            },
            formatHsl() {
                let t = we(this.opacity);
                return `${t === 1 ? "hsl(" : "hsla("}${$o(this.h)}, ${xe(this.s) * 100}%, ${xe(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`
            }
        }));
        function $o(t) {
            return t = (t || 0) % 360,
                t < 0 ? t + 360 : t
        }
        function xe(t) {
            return Math.max(0, Math.min(1, t || 0))
        }
        function nr(t, e, r) {
            return (t < 60 ? e + (r - e) * t / 60 : t < 180 ? r : t < 240 ? e + (r - e) * (240 - t) / 60 : e) * 255
        }
        function ar(t, e, r, o, n) {
            var a = t * t
                , i = a * t;
            return ((1 - 3 * t + 3 * a - i) * e + (4 - 6 * a + 3 * i) * r + (1 + 3 * t + 3 * a - 3 * i) * o + i * n) / 6
        }
        function Xo(t) {
            var e = t.length - 1;
            return function(r) {
                var o = r <= 0 ? r = 0 : r >= 1 ? (r = 1,
                e - 1) : Math.floor(r * e)
                    , n = t[o]
                    , a = t[o + 1]
                    , i = o > 0 ? t[o - 1] : 2 * n - a
                    , l = o < e - 1 ? t[o + 2] : 2 * a - n;
                return ar((r - o / e) * e, i, n, a, l)
            }
        }
        function Uo(t) {
            var e = t.length;
            return function(r) {
                var o = Math.floor(((r %= 1) < 0 ? ++r : r) * e)
                    , n = t[(o + e - 1) % e]
                    , a = t[o % e]
                    , i = t[(o + 1) % e]
                    , l = t[(o + 2) % e];
                return ar((r - o / e) * e, n, a, i, l)
            }
        }
        var Ut = t=>()=>t;
        function tl(t, e) {
            return function(r) {
                return t + r * e
            }
        }
        function el(t, e, r) {
            return t = Math.pow(t, r),
                e = Math.pow(e, r) - t,
                r = 1 / r,
                function(o) {
                    return Math.pow(t + o * e, r)
                }
        }
        function Qo(t) {
            return (t = +t) == 1 ? be : function(e, r) {
                return r - e ? el(e, r, t) : Ut(isNaN(e) ? r : e)
            }
        }
        function be(t, e) {
            var r = e - t;
            return r ? tl(t, r) : Ut(isNaN(t) ? e : t)
        }
        var dt = function t(e) {
            var r = Qo(e);
            function o(n, a) {
                var i = r((n = Nt(n)).r, (a = Nt(a)).r)
                    , l = r(n.g, a.g)
                    , u = r(n.b, a.b)
                    , s = be(n.opacity, a.opacity);
                return function(c) {
                    return n.r = i(c),
                        n.g = l(c),
                        n.b = u(c),
                        n.opacity = s(c),
                    n + ""
                }
            }
            return o.gamma = t,
                o
        }(1);
        function Zo(t) {
            return function(e) {
                var r = e.length, o = new Array(r), n = new Array(r), a = new Array(r), i, l;
                for (i = 0; i < r; ++i)
                    l = Nt(e[i]),
                        o[i] = l.r || 0,
                        n[i] = l.g || 0,
                        a[i] = l.b || 0;
                return o = t(o),
                    n = t(n),
                    a = t(a),
                    l.opacity = 1,
                    function(u) {
                        return l.r = o(u),
                            l.g = n(u),
                            l.b = a(u),
                        l + ""
                    }
            }
        }
        var rl = Zo(Xo)
            , ol = Zo(Uo);
        function Jo(t, e) {
            e || (e = []);
            var r = t ? Math.min(e.length, t.length) : 0, o = e.slice(), n;
            return function(a) {
                for (n = 0; n < r; ++n)
                    o[n] = t[n] * (1 - a) + e[n] * a;
                return o
            }
        }
        function jo(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }
        function tn(t, e) {
            var r = e ? e.length : 0, o = t ? Math.min(r, t.length) : 0, n = new Array(o), a = new Array(r), i;
            for (i = 0; i < o; ++i)
                n[i] = _t(t[i], e[i]);
            for (; i < r; ++i)
                a[i] = e[i];
            return function(l) {
                for (i = 0; i < o; ++i)
                    a[i] = n[i](l);
                return a
            }
        }
        function en(t, e) {
            var r = new Date;
            return t = +t,
                e = +e,
                function(o) {
                    return r.setTime(t * (1 - o) + e * o),
                        r
                }
        }
        function Y(t, e) {
            return t = +t,
                e = +e,
                function(r) {
                    return t * (1 - r) + e * r
                }
        }
        function rn(t, e) {
            var r = {}, o = {}, n;
            (t === null || typeof t != "object") && (t = {}),
            (e === null || typeof e != "object") && (e = {});
            for (n in e)
                n in t ? r[n] = _t(t[n], e[n]) : o[n] = e[n];
            return function(a) {
                for (n in r)
                    o[n] = r[n](a);
                return o
            }
        }
        var lr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
            , ir = new RegExp(lr.source,"g");
        function nl(t) {
            return function() {
                return t
            }
        }
        function al(t) {
            return function(e) {
                return t(e) + ""
            }
        }
        function Qt(t, e) {
            var r = lr.lastIndex = ir.lastIndex = 0, o, n, a, i = -1, l = [], u = [];
            for (t = t + "",
                     e = e + ""; (o = lr.exec(t)) && (n = ir.exec(e)); )
                (a = n.index) > r && (a = e.slice(r, a),
                    l[i] ? l[i] += a : l[++i] = a),
                    (o = o[0]) === (n = n[0]) ? l[i] ? l[i] += n : l[++i] = n : (l[++i] = null,
                        u.push({
                            i,
                            x: Y(o, n)
                        })),
                    r = ir.lastIndex;
            return r < e.length && (a = e.slice(r),
                l[i] ? l[i] += a : l[++i] = a),
                l.length < 2 ? u[0] ? al(u[0].x) : nl(e) : (e = u.length,
                        function(s) {
                            for (var c = 0, h; c < e; ++c)
                                l[(h = u[c]).i] = h.x(s);
                            return l.join("")
                        }
                )
        }
        function _t(t, e) {
            var r = typeof e, o;
            return e == null || r === "boolean" ? Ut(e) : (r === "number" ? Y : r === "string" ? (o = J(e)) ? (e = o,
                dt) : Qt : e instanceof J ? dt : e instanceof Date ? en : jo(e) ? Jo : Array.isArray(e) ? tn : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? rn : Y)(t, e)
        }
        function sr(t, e) {
            return t = +t,
                e = +e,
                function(r) {
                    return Math.round(t * (1 - r) + e * r)
                }
        }
        var on = 180 / Math.PI
            , Se = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        };
        function ur(t, e, r, o, n, a) {
            var i, l, u;
            return (i = Math.sqrt(t * t + e * e)) && (t /= i,
                e /= i),
            (u = t * r + e * o) && (r -= t * u,
                o -= e * u),
            (l = Math.sqrt(r * r + o * o)) && (r /= l,
                o /= l,
                u /= l),
            t * o < e * r && (t = -t,
                e = -e,
                u = -u,
                i = -i),
                {
                    translateX: n,
                    translateY: a,
                    rotate: Math.atan2(e, t) * on,
                    skewX: Math.atan(u) * on,
                    scaleX: i,
                    scaleY: l
                }
        }
        var Me;
        function nn(t) {
            let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
            return e.isIdentity ? Se : ur(e.a, e.b, e.c, e.d, e.e, e.f)
        }
        function an(t) {
            return t == null ? Se : (Me || (Me = document.createElementNS("http://www.w3.org/2000/svg", "g")),
                Me.setAttribute("transform", t),
                (t = Me.transform.baseVal.consolidate()) ? (t = t.matrix,
                    ur(t.a, t.b, t.c, t.d, t.e, t.f)) : Se)
        }
        function ln(t, e, r, o) {
            function n(s) {
                return s.length ? s.pop() + " " : ""
            }
            function a(s, c, h, f, d, E) {
                if (s !== h || c !== f) {
                    var m = d.push("translate(", null, e, null, r);
                    E.push({
                        i: m - 4,
                        x: Y(s, h)
                    }, {
                        i: m - 2,
                        x: Y(c, f)
                    })
                } else
                    (h || f) && d.push("translate(" + h + e + f + r)
            }
            function i(s, c, h, f) {
                s !== c ? (s - c > 180 ? c += 360 : c - s > 180 && (s += 360),
                    f.push({
                        i: h.push(n(h) + "rotate(", null, o) - 2,
                        x: Y(s, c)
                    })) : c && h.push(n(h) + "rotate(" + c + o)
            }
            function l(s, c, h, f) {
                s !== c ? f.push({
                    i: h.push(n(h) + "skewX(", null, o) - 2,
                    x: Y(s, c)
                }) : c && h.push(n(h) + "skewX(" + c + o)
            }
            function u(s, c, h, f, d, E) {
                if (s !== h || c !== f) {
                    var m = d.push(n(d) + "scale(", null, ",", null, ")");
                    E.push({
                        i: m - 4,
                        x: Y(s, h)
                    }, {
                        i: m - 2,
                        x: Y(c, f)
                    })
                } else
                    (h !== 1 || f !== 1) && d.push(n(d) + "scale(" + h + "," + f + ")")
            }
            return function(s, c) {
                var h = []
                    , f = [];
                return s = t(s),
                    c = t(c),
                    a(s.translateX, s.translateY, c.translateX, c.translateY, h, f),
                    i(s.rotate, c.rotate, h, f),
                    l(s.skewX, c.skewX, h, f),
                    u(s.scaleX, s.scaleY, c.scaleX, c.scaleY, h, f),
                    s = c = null,
                    function(d) {
                        for (var E = -1, m = f.length, b; ++E < m; )
                            h[(b = f[E]).i] = b.x(d);
                        return h.join("")
                    }
            }
        }
        var cr = ln(nn, "px, ", "px)", "deg)")
            , fr = ln(an, ", ", ")", ")");
        var Wt = 0, Jt = 0, Zt = 0, un = 1e3, ke, jt, Ne = 0, mt = 0, We = 0, te = typeof performance == "object" && performance.now ? performance : Date, cn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                setTimeout(t, 17)
            }
        ;
        function re() {
            return mt || (cn(il),
                mt = te.now() + We)
        }
        function il() {
            mt = 0
        }
        function ee() {
            this._call = this._time = this._next = null
        }
        ee.prototype = Tt.prototype = {
            constructor: ee,
            restart: function(t, e, r) {
                if (typeof t != "function")
                    throw new TypeError("callback is not a function");
                r = (r == null ? re() : +r) + (e == null ? 0 : +e),
                !this._next && jt !== this && (jt ? jt._next = this : ke = this,
                    jt = this),
                    this._call = t,
                    this._time = r,
                    hr()
            },
            stop: function() {
                this._call && (this._call = null,
                    this._time = 1 / 0,
                    hr())
            }
        };
        function Tt(t, e, r) {
            var o = new ee;
            return o.restart(t, e, r),
                o
        }
        function fn() {
            re(),
                ++Wt;
            for (var t = ke, e; t; )
                (e = mt - t._time) >= 0 && t._call.call(void 0, e),
                    t = t._next;
            --Wt
        }
        function sn() {
            mt = (Ne = te.now()) + We,
                Wt = Jt = 0;
            try {
                fn()
            } finally {
                Wt = 0,
                    sl(),
                    mt = 0
            }
        }
        function ll() {
            var t = te.now()
                , e = t - Ne;
            e > un && (We -= e,
                Ne = t)
        }
        function sl() {
            for (var t, e = ke, r, o = 1 / 0; e; )
                e._call ? (o > e._time && (o = e._time),
                    t = e,
                    e = e._next) : (r = e._next,
                    e._next = null,
                    e = t ? t._next = r : ke = r);
            jt = t,
                hr(o)
        }
        function hr(t) {
            if (!Wt) {
                Jt && (Jt = clearTimeout(Jt));
                var e = t - mt;
                e > 24 ? (t < 1 / 0 && (Jt = setTimeout(sn, t - te.now() - We)),
                Zt && (Zt = clearInterval(Zt))) : (Zt || (Ne = te.now(),
                    Zt = setInterval(ll, un)),
                    Wt = 1,
                    cn(sn))
            }
        }
        function Te(t, e, r) {
            var o = new ee;
            return e = e == null ? 0 : +e,
                o.restart(n=>{
                        o.stop(),
                            t(n + e)
                    }
                    , e, r),
                o
        }
        var ul = qt("start", "end", "cancel", "interrupt")
            , cl = []
            , _n = 0
            , hn = 1
            , Le = 2
            , Ce = 3
            , dn = 4
            , Ae = 5
            , oe = 6;
        function it(t, e, r, o, n, a) {
            var i = t.__transition;
            if (!i)
                t.__transition = {};
            else if (r in i)
                return;
            fl(t, r, {
                name: e,
                index: o,
                group: n,
                on: ul,
                tween: cl,
                time: a.time,
                delay: a.delay,
                duration: a.duration,
                ease: a.ease,
                timer: null,
                state: _n
            })
        }
        function ne(t, e) {
            var r = P(t, e);
            if (r.state > _n)
                throw new Error("too late; already scheduled");
            return r
        }
        function $(t, e) {
            var r = P(t, e);
            if (r.state > Ce)
                throw new Error("too late; already running");
            return r
        }
        function P(t, e) {
            var r = t.__transition;
            if (!r || !(r = r[e]))
                throw new Error("transition not found");
            return r
        }
        function fl(t, e, r) {
            var o = t.__transition, n;
            o[e] = r,
                r.timer = Tt(a, 0, r.time);
            function a(s) {
                r.state = hn,
                    r.timer.restart(i, r.delay, r.time),
                r.delay <= s && i(s - r.delay)
            }
            function i(s) {
                var c, h, f, d;
                if (r.state !== hn)
                    return u();
                for (c in o)
                    if (d = o[c],
                    d.name === r.name) {
                        if (d.state === Ce)
                            return Te(i);
                        d.state === dn ? (d.state = oe,
                            d.timer.stop(),
                            d.on.call("interrupt", t, t.__data__, d.index, d.group),
                            delete o[c]) : +c < e && (d.state = oe,
                            d.timer.stop(),
                            d.on.call("cancel", t, t.__data__, d.index, d.group),
                            delete o[c])
                    }
                if (Te(function() {
                    r.state === Ce && (r.state = dn,
                        r.timer.restart(l, r.delay, r.time),
                        l(s))
                }),
                    r.state = Le,
                    r.on.call("start", t, t.__data__, r.index, r.group),
                r.state === Le) {
                    for (r.state = Ce,
                             n = new Array(f = r.tween.length),
                             c = 0,
                             h = -1; c < f; ++c)
                        (d = r.tween[c].value.call(t, t.__data__, r.index, r.group)) && (n[++h] = d);
                    n.length = h + 1
                }
            }
            function l(s) {
                for (var c = s < r.duration ? r.ease.call(null, s / r.duration) : (r.timer.restart(u),
                    r.state = Ae,
                    1), h = -1, f = n.length; ++h < f; )
                    n[h].call(t, c);
                r.state === Ae && (r.on.call("end", t, t.__data__, r.index, r.group),
                    u())
            }
            function u() {
                r.state = oe,
                    r.timer.stop(),
                    delete o[e];
                for (var s in o)
                    return;
                delete t.__transition
            }
        }
        function He(t, e) {
            var r = t.__transition, o, n, a = !0, i;
            if (r) {
                e = e == null ? null : e + "";
                for (i in r) {
                    if ((o = r[i]).name !== e) {
                        a = !1;
                        continue
                    }
                    n = o.state > Le && o.state < Ae,
                        o.state = oe,
                        o.timer.stop(),
                        o.on.call(n ? "interrupt" : "cancel", t, t.__data__, o.index, o.group),
                        delete r[i]
                }
                a && delete t.__transition
            }
        }
        function mn(t) {
            return this.each(function() {
                He(this, t)
            })
        }
        function hl(t, e) {
            var r, o;
            return function() {
                var n = $(this, t)
                    , a = n.tween;
                if (a !== r) {
                    o = r = a;
                    for (var i = 0, l = o.length; i < l; ++i)
                        if (o[i].name === e) {
                            o = o.slice(),
                                o.splice(i, 1);
                            break
                        }
                }
                n.tween = o
            }
        }
        function dl(t, e, r) {
            var o, n;
            if (typeof r != "function")
                throw new Error;
            return function() {
                var a = $(this, t)
                    , i = a.tween;
                if (i !== o) {
                    n = (o = i).slice();
                    for (var l = {
                        name: e,
                        value: r
                    }, u = 0, s = n.length; u < s; ++u)
                        if (n[u].name === e) {
                            n[u] = l;
                            break
                        }
                    u === s && n.push(l)
                }
                a.tween = n
            }
        }
        function pn(t, e) {
            var r = this._id;
            if (t += "",
            arguments.length < 2) {
                for (var o = P(this.node(), r).tween, n = 0, a = o.length, i; n < a; ++n)
                    if ((i = o[n]).name === t)
                        return i.value;
                return null
            }
            return this.each((e == null ? hl : dl)(r, t, e))
        }
        function Ct(t, e, r) {
            var o = t._id;
            return t.each(function() {
                var n = $(this, o);
                (n.value || (n.value = {}))[e] = r.apply(this, arguments)
            }),
                function(n) {
                    return P(n, o).value[e]
                }
        }
        function De(t, e) {
            var r;
            return (typeof e == "number" ? Y : e instanceof J ? dt : (r = J(e)) ? (e = r,
                dt) : Qt)(t, e)
        }
        function _l(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function ml(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function pl(t, e, r) {
            var o, n = r + "", a;
            return function() {
                var i = this.getAttribute(t);
                return i === n ? null : i === o ? a : a = e(o = i, r)
            }
        }
        function yl(t, e, r) {
            var o, n = r + "", a;
            return function() {
                var i = this.getAttributeNS(t.space, t.local);
                return i === n ? null : i === o ? a : a = e(o = i, r)
            }
        }
        function gl(t, e, r) {
            var o, n, a;
            return function() {
                var i, l = r(this), u;
                return l == null ? void this.removeAttribute(t) : (i = this.getAttribute(t),
                    u = l + "",
                    i === u ? null : i === o && u === n ? a : (n = u,
                        a = e(o = i, l)))
            }
        }
        function vl(t, e, r) {
            var o, n, a;
            return function() {
                var i, l = r(this), u;
                return l == null ? void this.removeAttributeNS(t.space, t.local) : (i = this.getAttributeNS(t.space, t.local),
                    u = l + "",
                    i === u ? null : i === o && u === n ? a : (n = u,
                        a = e(o = i, l)))
            }
        }
        function yn(t, e) {
            var r = rt(t)
                , o = r === "transform" ? fr : De;
            return this.attrTween(t, typeof e == "function" ? (r.local ? vl : gl)(r, o, Ct(this, "attr." + t, e)) : e == null ? (r.local ? ml : _l)(r) : (r.local ? yl : pl)(r, o, e))
        }
        function xl(t, e) {
            return function(r) {
                this.setAttribute(t, e.call(this, r))
            }
        }
        function El(t, e) {
            return function(r) {
                this.setAttributeNS(t.space, t.local, e.call(this, r))
            }
        }
        function wl(t, e) {
            var r, o;
            function n() {
                var a = e.apply(this, arguments);
                return a !== o && (r = (o = a) && El(t, a)),
                    r
            }
            return n._value = e,
                n
        }
        function bl(t, e) {
            var r, o;
            function n() {
                var a = e.apply(this, arguments);
                return a !== o && (r = (o = a) && xl(t, a)),
                    r
            }
            return n._value = e,
                n
        }
        function gn(t, e) {
            var r = "attr." + t;
            if (arguments.length < 2)
                return (r = this.tween(r)) && r._value;
            if (e == null)
                return this.tween(r, null);
            if (typeof e != "function")
                throw new Error;
            var o = rt(t);
            return this.tween(r, (o.local ? wl : bl)(o, e))
        }
        function Sl(t, e) {
            return function() {
                ne(this, t).delay = +e.apply(this, arguments)
            }
        }
        function Ml(t, e) {
            return e = +e,
                function() {
                    ne(this, t).delay = e
                }
        }
        function vn(t) {
            var e = this._id;
            return arguments.length ? this.each((typeof t == "function" ? Sl : Ml)(e, t)) : P(this.node(), e).delay
        }
        function kl(t, e) {
            return function() {
                $(this, t).duration = +e.apply(this, arguments)
            }
        }
        function Nl(t, e) {
            return e = +e,
                function() {
                    $(this, t).duration = e
                }
        }
        function xn(t) {
            var e = this._id;
            return arguments.length ? this.each((typeof t == "function" ? kl : Nl)(e, t)) : P(this.node(), e).duration
        }
        function Wl(t, e) {
            if (typeof e != "function")
                throw new Error;
            return function() {
                $(this, t).ease = e
            }
        }
        function En(t) {
            var e = this._id;
            return arguments.length ? this.each(Wl(e, t)) : P(this.node(), e).ease
        }
        function Tl(t, e) {
            return function() {
                var r = e.apply(this, arguments);
                if (typeof r != "function")
                    throw new Error;
                $(this, t).ease = r
            }
        }
        function wn(t) {
            if (typeof t != "function")
                throw new Error;
            return this.each(Tl(this._id, t))
        }
        function bn(t) {
            typeof t != "function" && (t = zt(t));
            for (var e = this._groups, r = e.length, o = new Array(r), n = 0; n < r; ++n)
                for (var a = e[n], i = a.length, l = o[n] = [], u, s = 0; s < i; ++s)
                    (u = a[s]) && t.call(u, u.__data__, s, a) && l.push(u);
            return new K(o,this._parents,this._name,this._id)
        }
        function Sn(t) {
            if (t._id !== this._id)
                throw new Error;
            for (var e = this._groups, r = t._groups, o = e.length, n = r.length, a = Math.min(o, n), i = new Array(o), l = 0; l < a; ++l)
                for (var u = e[l], s = r[l], c = u.length, h = i[l] = new Array(c), f, d = 0; d < c; ++d)
                    (f = u[d] || s[d]) && (h[d] = f);
            for (; l < o; ++l)
                i[l] = e[l];
            return new K(i,this._parents,this._name,this._id)
        }
        function Cl(t) {
            return (t + "").trim().split(/^|\s+/).every(function(e) {
                var r = e.indexOf(".");
                return r >= 0 && (e = e.slice(0, r)),
                !e || e === "start"
            })
        }
        function Ll(t, e, r) {
            var o, n, a = Cl(e) ? ne : $;
            return function() {
                var i = a(this, t)
                    , l = i.on;
                l !== o && (n = (o = l).copy()).on(e, r),
                    i.on = n
            }
        }
        function Mn(t, e) {
            var r = this._id;
            return arguments.length < 2 ? P(this.node(), r).on.on(t) : this.each(Ll(r, t, e))
        }
        function Al(t) {
            return function() {
                var e = this.parentNode;
                for (var r in this.__transition)
                    if (+r !== t)
                        return;
                e && e.removeChild(this)
            }
        }
        function kn() {
            return this.on("end.remove", Al(this._id))
        }
        function Nn(t) {
            var e = this._name
                , r = this._id;
            typeof t != "function" && (t = ct(t));
            for (var o = this._groups, n = o.length, a = new Array(n), i = 0; i < n; ++i)
                for (var l = o[i], u = l.length, s = a[i] = new Array(u), c, h, f = 0; f < u; ++f)
                    (c = l[f]) && (h = t.call(c, c.__data__, f, l)) && ("__data__"in c && (h.__data__ = c.__data__),
                        s[f] = h,
                        it(s[f], e, r, f, s, P(c, r)));
            return new K(a,this._parents,e,r)
        }
        function Wn(t) {
            var e = this._name
                , r = this._id;
            typeof t != "function" && (t = Ot(t));
            for (var o = this._groups, n = o.length, a = [], i = [], l = 0; l < n; ++l)
                for (var u = o[l], s = u.length, c, h = 0; h < s; ++h)
                    if (c = u[h]) {
                        for (var f = t.call(c, c.__data__, h, u), d, E = P(c, r), m = 0, b = f.length; m < b; ++m)
                            (d = f[m]) && it(d, e, r, m, f, E);
                        a.push(f),
                            i.push(c)
                    }
            return new K(a,i,e,r)
        }
        var Hl = ot.prototype.constructor;
        function Tn() {
            return new Hl(this._groups,this._parents)
        }
        function Dl(t, e) {
            var r, o, n;
            return function() {
                var a = at(this, t)
                    , i = (this.style.removeProperty(t),
                    at(this, t));
                return a === i ? null : a === r && i === o ? n : n = e(r = a, o = i)
            }
        }
        function Cn(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function Il(t, e, r) {
            var o, n = r + "", a;
            return function() {
                var i = at(this, t);
                return i === n ? null : i === o ? a : a = e(o = i, r)
            }
        }
        function Rl(t, e, r) {
            var o, n, a;
            return function() {
                var i = at(this, t)
                    , l = r(this)
                    , u = l + "";
                return l == null && (u = l = (this.style.removeProperty(t),
                    at(this, t))),
                    i === u ? null : i === o && u === n ? a : (n = u,
                        a = e(o = i, l))
            }
        }
        function Bl(t, e) {
            var r, o, n, a = "style." + e, i = "end." + a, l;
            return function() {
                var u = $(this, t)
                    , s = u.on
                    , c = u.value[a] == null ? l || (l = Cn(e)) : void 0;
                (s !== r || n !== c) && (o = (r = s).copy()).on(i, n = c),
                    u.on = o
            }
        }
        function Ln(t, e, r) {
            var o = (t += "") == "transform" ? cr : De;
            return e == null ? this.styleTween(t, Dl(t, o)).on("end.style." + t, Cn(t)) : typeof e == "function" ? this.styleTween(t, Rl(t, o, Ct(this, "style." + t, e))).each(Bl(this._id, t)) : this.styleTween(t, Il(t, o, e), r).on("end.style." + t, null)
        }
        function Fl(t, e, r) {
            return function(o) {
                this.style.setProperty(t, e.call(this, o), r)
            }
        }
        function ql(t, e, r) {
            var o, n;
            function a() {
                var i = e.apply(this, arguments);
                return i !== n && (o = (n = i) && Fl(t, i, r)),
                    o
            }
            return a._value = e,
                a
        }
        function An(t, e, r) {
            var o = "style." + (t += "");
            if (arguments.length < 2)
                return (o = this.tween(o)) && o._value;
            if (e == null)
                return this.tween(o, null);
            if (typeof e != "function")
                throw new Error;
            return this.tween(o, ql(t, e, r == null ? "" : r))
        }
        function Pl(t) {
            return function() {
                this.textContent = t
            }
        }
        function Ol(t) {
            return function() {
                var e = t(this);
                this.textContent = e == null ? "" : e
            }
        }
        function Hn(t) {
            return this.tween("text", typeof t == "function" ? Ol(Ct(this, "text", t)) : Pl(t == null ? "" : t + ""))
        }
        function zl(t) {
            return function(e) {
                this.textContent = t.call(this, e)
            }
        }
        function Vl(t) {
            var e, r;
            function o() {
                var n = t.apply(this, arguments);
                return n !== r && (e = (r = n) && zl(n)),
                    e
            }
            return o._value = t,
                o
        }
        function Dn(t) {
            var e = "text";
            if (arguments.length < 1)
                return (e = this.tween(e)) && e._value;
            if (t == null)
                return this.tween(e, null);
            if (typeof t != "function")
                throw new Error;
            return this.tween(e, Vl(t))
        }
        function In() {
            for (var t = this._name, e = this._id, r = Ie(), o = this._groups, n = o.length, a = 0; a < n; ++a)
                for (var i = o[a], l = i.length, u, s = 0; s < l; ++s)
                    if (u = i[s]) {
                        var c = P(u, e);
                        it(u, t, r, s, i, {
                            time: c.time + c.delay + c.duration,
                            delay: 0,
                            duration: c.duration,
                            ease: c.ease
                        })
                    }
            return new K(o,this._parents,t,r)
        }
        function Rn() {
            var t, e, r = this, o = r._id, n = r.size();
            return new Promise(function(a, i) {
                    var l = {
                        value: i
                    }
                        , u = {
                        value: function() {
                            --n === 0 && a()
                        }
                    };
                    r.each(function() {
                        var s = $(this, o)
                            , c = s.on;
                        c !== t && (e = (t = c).copy(),
                            e._.cancel.push(l),
                            e._.interrupt.push(l),
                            e._.end.push(u)),
                            s.on = e
                    }),
                    n === 0 && a()
                }
            )
        }
        var Yl = 0;
        function K(t, e, r, o) {
            this._groups = t,
                this._parents = e,
                this._name = r,
                this._id = o
        }
        function Bn(t) {
            return ot().transition(t)
        }
        function Ie() {
            return ++Yl
        }
        var nt = ot.prototype;
        K.prototype = Bn.prototype = {
            constructor: K,
            select: Nn,
            selectAll: Wn,
            selectChild: nt.selectChild,
            selectChildren: nt.selectChildren,
            filter: bn,
            merge: Sn,
            selection: Tn,
            transition: In,
            call: nt.call,
            nodes: nt.nodes,
            node: nt.node,
            size: nt.size,
            empty: nt.empty,
            each: nt.each,
            on: Mn,
            attr: yn,
            attrTween: gn,
            style: Ln,
            styleTween: An,
            text: Hn,
            textTween: Dn,
            remove: kn,
            tween: pn,
            delay: vn,
            duration: xn,
            ease: En,
            easeVarying: wn,
            end: Rn,
            [Symbol.iterator]: nt[Symbol.iterator]
        };
        function Re(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
        var $l = {
            time: null,
            delay: 0,
            duration: 250,
            ease: Re
        };
        function Gl(t, e) {
            for (var r; !(r = t.__transition) || !(r = r[e]); )
                if (!(t = t.parentNode))
                    throw new Error(`transition ${e} not found`);
            return r
        }
        function Fn(t) {
            var e, r;
            t instanceof K ? (e = t._id,
                t = t._name) : (e = Ie(),
                (r = $l).time = re(),
                t = t == null ? null : t + "");
            for (var o = this._groups, n = o.length, a = 0; a < n; ++a)
                for (var i = o[a], l = i.length, u, s = 0; s < l; ++s)
                    (u = i[s]) && it(u, t, e, s, i, r || Gl(u, e));
            return new K(o,this._parents,t,e)
        }
        ot.prototype.interrupt = mn;
        ot.prototype.transition = Fn;
        var {abs: f_, max: h_, min: d_} = Math;
        function qn(t) {
            return [+t[0], +t[1]]
        }
        function Kl(t) {
            return [qn(t[0]), qn(t[1])]
        }
        var __ = {
            name: "x",
            handles: ["w", "e"].map(dr),
            input: function(t, e) {
                return t == null ? null : [[+t[0], e[0][1]], [+t[1], e[1][1]]]
            },
            output: function(t) {
                return t && [t[0][0], t[1][0]]
            }
        }
            , m_ = {
            name: "y",
            handles: ["n", "s"].map(dr),
            input: function(t, e) {
                return t == null ? null : [[e[0][0], +t[0]], [e[1][0], +t[1]]]
            },
            output: function(t) {
                return t && [t[0][1], t[1][1]]
            }
        }
            , p_ = {
            name: "xy",
            handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(dr),
            input: function(t) {
                return t == null ? null : Kl(t)
            },
            output: function(t) {
                return t
            }
        };
        function dr(t) {
            return {
                type: t
            }
        }
        function Pn(t) {
            let e = +this._x.call(null, t)
                , r = +this._y.call(null, t);
            return On(this.cover(e, r), e, r, t)
        }
        function On(t, e, r, o) {
            if (isNaN(e) || isNaN(r))
                return t;
            var n, a = t._root, i = {
                data: o
            }, l = t._x0, u = t._y0, s = t._x1, c = t._y1, h, f, d, E, m, b, S, W;
            if (!a)
                return t._root = i,
                    t;
            for (; a.length; )
                if ((m = e >= (h = (l + s) / 2)) ? l = h : s = h,
                    (b = r >= (f = (u + c) / 2)) ? u = f : c = f,
                    n = a,
                    !(a = a[S = b << 1 | m]))
                    return n[S] = i,
                        t;
            if (d = +t._x.call(null, a.data),
                E = +t._y.call(null, a.data),
            e === d && r === E)
                return i.next = a,
                    n ? n[S] = i : t._root = i,
                    t;
            do
                n = n ? n[S] = new Array(4) : t._root = new Array(4),
                    (m = e >= (h = (l + s) / 2)) ? l = h : s = h,
                    (b = r >= (f = (u + c) / 2)) ? u = f : c = f;
            while ((S = b << 1 | m) === (W = (E >= f) << 1 | d >= h));
            return n[W] = a,
                n[S] = i,
                t
        }
        function zn(t) {
            var e, r, o = t.length, n, a, i = new Array(o), l = new Array(o), u = 1 / 0, s = 1 / 0, c = -1 / 0, h = -1 / 0;
            for (r = 0; r < o; ++r)
                isNaN(n = +this._x.call(null, e = t[r])) || isNaN(a = +this._y.call(null, e)) || (i[r] = n,
                    l[r] = a,
                n < u && (u = n),
                n > c && (c = n),
                a < s && (s = a),
                a > h && (h = a));
            if (u > c || s > h)
                return this;
            for (this.cover(u, s).cover(c, h),
                     r = 0; r < o; ++r)
                On(this, i[r], l[r], t[r]);
            return this
        }
        function Vn(t, e) {
            if (isNaN(t = +t) || isNaN(e = +e))
                return this;
            var r = this._x0
                , o = this._y0
                , n = this._x1
                , a = this._y1;
            if (isNaN(r))
                n = (r = Math.floor(t)) + 1,
                    a = (o = Math.floor(e)) + 1;
            else {
                for (var i = n - r || 1, l = this._root, u, s; r > t || t >= n || o > e || e >= a; )
                    switch (s = (e < o) << 1 | t < r,
                        u = new Array(4),
                        u[s] = l,
                        l = u,
                        i *= 2,
                        s) {
                        case 0:
                            n = r + i,
                                a = o + i;
                            break;
                        case 1:
                            r = n - i,
                                a = o + i;
                            break;
                        case 2:
                            n = r + i,
                                o = a - i;
                            break;
                        case 3:
                            r = n - i,
                                o = a - i;
                            break
                    }
                this._root && this._root.length && (this._root = l)
            }
            return this._x0 = r,
                this._y0 = o,
                this._x1 = n,
                this._y1 = a,
                this
        }
        function Yn() {
            var t = [];
            return this.visit(function(e) {
                if (!e.length)
                    do
                        t.push(e.data);
                    while (e = e.next)
            }),
                t
        }
        function $n(t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
        }
        function V(t, e, r, o, n) {
            this.node = t,
                this.x0 = e,
                this.y0 = r,
                this.x1 = o,
                this.y1 = n
        }
        function Gn(t, e, r) {
            var o, n = this._x0, a = this._y0, i, l, u, s, c = this._x1, h = this._y1, f = [], d = this._root, E, m;
            for (d && f.push(new V(d,n,a,c,h)),
                     r == null ? r = 1 / 0 : (n = t - r,
                         a = e - r,
                         c = t + r,
                         h = e + r,
                         r *= r); E = f.pop(); )
                if (!(!(d = E.node) || (i = E.x0) > c || (l = E.y0) > h || (u = E.x1) < n || (s = E.y1) < a))
                    if (d.length) {
                        var b = (i + u) / 2
                            , S = (l + s) / 2;
                        f.push(new V(d[3],b,S,u,s), new V(d[2],i,S,b,s), new V(d[1],b,l,u,S), new V(d[0],i,l,b,S)),
                        (m = (e >= S) << 1 | t >= b) && (E = f[f.length - 1],
                            f[f.length - 1] = f[f.length - 1 - m],
                            f[f.length - 1 - m] = E)
                    } else {
                        var W = t - +this._x.call(null, d.data)
                            , C = e - +this._y.call(null, d.data)
                            , R = W * W + C * C;
                        if (R < r) {
                            var L = Math.sqrt(r = R);
                            n = t - L,
                                a = e - L,
                                c = t + L,
                                h = e + L,
                                o = d.data
                        }
                    }
            return o
        }
        function Kn(t) {
            if (isNaN(c = +this._x.call(null, t)) || isNaN(h = +this._y.call(null, t)))
                return this;
            var e, r = this._root, o, n, a, i = this._x0, l = this._y0, u = this._x1, s = this._y1, c, h, f, d, E, m, b, S;
            if (!r)
                return this;
            if (r.length)
                for (; ; ) {
                    if ((E = c >= (f = (i + u) / 2)) ? i = f : u = f,
                        (m = h >= (d = (l + s) / 2)) ? l = d : s = d,
                        e = r,
                        !(r = r[b = m << 1 | E]))
                        return this;
                    if (!r.length)
                        break;
                    (e[b + 1 & 3] || e[b + 2 & 3] || e[b + 3 & 3]) && (o = e,
                        S = b)
                }
            for (; r.data !== t; )
                if (n = r,
                    !(r = r.next))
                    return this;
            return (a = r.next) && delete r.next,
                n ? (a ? n.next = a : delete n.next,
                    this) : e ? (a ? e[b] = a : delete e[b],
                (r = e[0] || e[1] || e[2] || e[3]) && r === (e[3] || e[2] || e[1] || e[0]) && !r.length && (o ? o[S] = r : this._root = r),
                    this) : (this._root = a,
                    this)
        }
        function Xn(t) {
            for (var e = 0, r = t.length; e < r; ++e)
                this.remove(t[e]);
            return this
        }
        function Un() {
            return this._root
        }
        function Qn() {
            var t = 0;
            return this.visit(function(e) {
                if (!e.length)
                    do
                        ++t;
                    while (e = e.next)
            }),
                t
        }
        function Zn(t) {
            var e = [], r, o = this._root, n, a, i, l, u;
            for (o && e.push(new V(o,this._x0,this._y0,this._x1,this._y1)); r = e.pop(); )
                if (!t(o = r.node, a = r.x0, i = r.y0, l = r.x1, u = r.y1) && o.length) {
                    var s = (a + l) / 2
                        , c = (i + u) / 2;
                    (n = o[3]) && e.push(new V(n,s,c,l,u)),
                    (n = o[2]) && e.push(new V(n,a,c,s,u)),
                    (n = o[1]) && e.push(new V(n,s,i,l,c)),
                    (n = o[0]) && e.push(new V(n,a,i,s,c))
                }
            return this
        }
        function Jn(t) {
            var e = [], r = [], o;
            for (this._root && e.push(new V(this._root,this._x0,this._y0,this._x1,this._y1)); o = e.pop(); ) {
                var n = o.node;
                if (n.length) {
                    var a, i = o.x0, l = o.y0, u = o.x1, s = o.y1, c = (i + u) / 2, h = (l + s) / 2;
                    (a = n[0]) && e.push(new V(a,i,l,c,h)),
                    (a = n[1]) && e.push(new V(a,c,l,u,h)),
                    (a = n[2]) && e.push(new V(a,i,h,c,s)),
                    (a = n[3]) && e.push(new V(a,c,h,u,s))
                }
                r.push(o)
            }
            for (; o = r.pop(); )
                t(o.node, o.x0, o.y0, o.x1, o.y1);
            return this
        }
        function jn(t) {
            return t[0]
        }
        function ta(t) {
            return arguments.length ? (this._x = t,
                this) : this._x
        }
        function ea(t) {
            return t[1]
        }
        function ra(t) {
            return arguments.length ? (this._y = t,
                this) : this._y
        }
        function ae(t, e, r) {
            var o = new _r(e == null ? jn : e,r == null ? ea : r,NaN,NaN,NaN,NaN);
            return t == null ? o : o.addAll(t)
        }
        function _r(t, e, r, o, n, a) {
            this._x = t,
                this._y = e,
                this._x0 = r,
                this._y0 = o,
                this._x1 = n,
                this._y1 = a,
                this._root = void 0
        }
        function oa(t) {
            for (var e = {
                data: t.data
            }, r = e; t = t.next; )
                r = r.next = {
                    data: t.data
                };
            return e
        }
        var X = ae.prototype = _r.prototype;
        X.copy = function() {
            var t = new _r(this._x,this._y,this._x0,this._y0,this._x1,this._y1), e = this._root, r, o;
            if (!e)
                return t;
            if (!e.length)
                return t._root = oa(e),
                    t;
            for (r = [{
                source: e,
                target: t._root = new Array(4)
            }]; e = r.pop(); )
                for (var n = 0; n < 4; ++n)
                    (o = e.source[n]) && (o.length ? r.push({
                        source: o,
                        target: e.target[n] = new Array(4)
                    }) : e.target[n] = oa(o));
            return t
        }
        ;
        X.add = Pn;
        X.addAll = zn;
        X.cover = Vn;
        X.data = Yn;
        X.extent = $n;
        X.find = Gn;
        X.remove = Kn;
        X.removeAll = Xn;
        X.root = Un;
        X.size = Qn;
        X.visit = Zn;
        X.visitAfter = Jn;
        X.x = ta;
        X.y = ra;
        function Q(t) {
            return function() {
                return t
            }
        }
        function mr(t) {
            return (t() - .5) * 1e-6
        }
        function Xl(t) {
            return t.x + t.vx
        }
        function Ul(t) {
            return t.y + t.vy
        }
        function pr(t) {
            var e, r, o, n = 1, a = 1;
            typeof t != "function" && (t = Q(t == null ? 1 : +t));
            function i() {
                for (var s, c = e.length, h, f, d, E, m, b, S = 0; S < a; ++S)
                    for (h = ae(e, Xl, Ul).visitAfter(l),
                             s = 0; s < c; ++s)
                        f = e[s],
                            m = r[f.index],
                            b = m * m,
                            d = f.x + f.vx,
                            E = f.y + f.vy,
                            h.visit(W);
                function W(C, R, L, O, F) {
                    var I = C.data
                        , G = C.r
                        , B = m + G;
                    if (I) {
                        if (I.index > f.index) {
                            var k = d - I.x - I.vx
                                , g = E - I.y - I.vy
                                , _ = k * k + g * g;
                            _ < B * B && (k === 0 && (k = mr(o),
                                _ += k * k),
                            g === 0 && (g = mr(o),
                                _ += g * g),
                                _ = (B - (_ = Math.sqrt(_))) / _ * n,
                                f.vx += (k *= _) * (B = (G *= G) / (b + G)),
                                f.vy += (g *= _) * B,
                                I.vx -= k * (B = 1 - B),
                                I.vy -= g * B)
                        }
                        return
                    }
                    return R > d + B || O < d - B || L > E + B || F < E - B
                }
            }
            function l(s) {
                if (s.data)
                    return s.r = r[s.data.index];
                for (var c = s.r = 0; c < 4; ++c)
                    s[c] && s[c].r > s.r && (s.r = s[c].r)
            }
            function u() {
                if (e) {
                    var s, c = e.length, h;
                    for (r = new Array(c),
                             s = 0; s < c; ++s)
                        h = e[s],
                            r[h.index] = +t(h, s, e)
                }
            }
            return i.initialize = function(s, c) {
                e = s,
                    o = c,
                    u()
            }
                ,
                i.iterations = function(s) {
                    return arguments.length ? (a = +s,
                        i) : a
                }
                ,
                i.strength = function(s) {
                    return arguments.length ? (n = +s,
                        i) : n
                }
                ,
                i.radius = function(s) {
                    return arguments.length ? (t = typeof s == "function" ? s : Q(+s),
                        u(),
                        i) : t
                }
                ,
                i
        }
        function na() {
            let t = 1;
            return ()=>(t = (1664525 * t + 1013904223) % 4294967296) / 4294967296
        }
        var Ql = 10
            , Zl = Math.PI * (3 - Math.sqrt(5));
        function yr(t) {
            var e, r = 1, o = .001, n = 1 - Math.pow(o, 1 / 300), a = 0, i = .6, l = new Map, u = Tt(h), s = qt("tick", "end"), c = na();
            t == null && (t = []);
            function h() {
                f(),
                    s.call("tick", e),
                r < o && (u.stop(),
                    s.call("end", e))
            }
            function f(m) {
                var b, S = t.length, W;
                m === void 0 && (m = 1);
                for (var C = 0; C < m; ++C)
                    for (r += (a - r) * n,
                             l.forEach(function(R) {
                                 R(r)
                             }),
                             b = 0; b < S; ++b)
                        W = t[b],
                            W.fx == null ? W.x += W.vx *= i : (W.x = W.fx,
                                W.vx = 0),
                            W.fy == null ? W.y += W.vy *= i : (W.y = W.fy,
                                W.vy = 0);
                return e
            }
            function d() {
                for (var m = 0, b = t.length, S; m < b; ++m) {
                    if (S = t[m],
                        S.index = m,
                    S.fx != null && (S.x = S.fx),
                    S.fy != null && (S.y = S.fy),
                    isNaN(S.x) || isNaN(S.y)) {
                        var W = Ql * Math.sqrt(.5 + m)
                            , C = m * Zl;
                        S.x = W * Math.cos(C),
                            S.y = W * Math.sin(C)
                    }
                    (isNaN(S.vx) || isNaN(S.vy)) && (S.vx = S.vy = 0)
                }
            }
            function E(m) {
                return m.initialize && m.initialize(t, c),
                    m
            }
            return d(),
                e = {
                    tick: f,
                    restart: function() {
                        return u.restart(h),
                            e
                    },
                    stop: function() {
                        return u.stop(),
                            e
                    },
                    nodes: function(m) {
                        return arguments.length ? (t = m,
                            d(),
                            l.forEach(E),
                            e) : t
                    },
                    alpha: function(m) {
                        return arguments.length ? (r = +m,
                            e) : r
                    },
                    alphaMin: function(m) {
                        return arguments.length ? (o = +m,
                            e) : o
                    },
                    alphaDecay: function(m) {
                        return arguments.length ? (n = +m,
                            e) : +n
                    },
                    alphaTarget: function(m) {
                        return arguments.length ? (a = +m,
                            e) : a
                    },
                    velocityDecay: function(m) {
                        return arguments.length ? (i = 1 - m,
                            e) : 1 - i
                    },
                    randomSource: function(m) {
                        return arguments.length ? (c = m,
                            l.forEach(E),
                            e) : c
                    },
                    force: function(m, b) {
                        return arguments.length > 1 ? (b == null ? l.delete(m) : l.set(m, E(b)),
                            e) : l.get(m)
                    },
                    find: function(m, b, S) {
                        var W = 0, C = t.length, R, L, O, F, I;
                        for (S == null ? S = 1 / 0 : S *= S,
                                 W = 0; W < C; ++W)
                            F = t[W],
                                R = m - F.x,
                                L = b - F.y,
                                O = R * R + L * L,
                            O < S && (I = F,
                                S = O);
                        return I
                    },
                    on: function(m, b) {
                        return arguments.length > 1 ? (s.on(m, b),
                            e) : s.on(m)
                    }
                }
        }
        function gr(t) {
            var e = Q(.1), r, o, n;
            typeof t != "function" && (t = Q(t == null ? 0 : +t));
            function a(l) {
                for (var u = 0, s = r.length, c; u < s; ++u)
                    c = r[u],
                        c.vx += (n[u] - c.x) * o[u] * l
            }
            function i() {
                if (r) {
                    var l, u = r.length;
                    for (o = new Array(u),
                             n = new Array(u),
                             l = 0; l < u; ++l)
                        o[l] = isNaN(n[l] = +t(r[l], l, r)) ? 0 : +e(r[l], l, r)
                }
            }
            return a.initialize = function(l) {
                r = l,
                    i()
            }
                ,
                a.strength = function(l) {
                    return arguments.length ? (e = typeof l == "function" ? l : Q(+l),
                        i(),
                        a) : e
                }
                ,
                a.x = function(l) {
                    return arguments.length ? (t = typeof l == "function" ? l : Q(+l),
                        i(),
                        a) : t
                }
                ,
                a
        }
        function vr(t) {
            var e = Q(.1), r, o, n;
            typeof t != "function" && (t = Q(t == null ? 0 : +t));
            function a(l) {
                for (var u = 0, s = r.length, c; u < s; ++u)
                    c = r[u],
                        c.vy += (n[u] - c.y) * o[u] * l
            }
            function i() {
                if (r) {
                    var l, u = r.length;
                    for (o = new Array(u),
                             n = new Array(u),
                             l = 0; l < u; ++l)
                        o[l] = isNaN(n[l] = +t(r[l], l, r)) ? 0 : +e(r[l], l, r)
                }
            }
            return a.initialize = function(l) {
                r = l,
                    i()
            }
                ,
                a.strength = function(l) {
                    return arguments.length ? (e = typeof l == "function" ? l : Q(+l),
                        i(),
                        a) : e
                }
                ,
                a.y = function(l) {
                    return arguments.length ? (t = typeof l == "function" ? l : Q(+l),
                        i(),
                        a) : t
                }
                ,
                a
        }
        function aa(t) {
            return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
        }
        function pt(t, e) {
            if ((r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
                return null;
            var r, o = t.slice(0, r);
            return [o.length > 1 ? o[0] + o.slice(2) : o, +t.slice(r + 1)]
        }
        function et(t) {
            return t = pt(Math.abs(t)),
                t ? t[1] : NaN
        }
        function ia(t, e) {
            return function(r, o) {
                for (var n = r.length, a = [], i = 0, l = t[0], u = 0; n > 0 && l > 0 && (u + l + 1 > o && (l = Math.max(1, o - u)),
                    a.push(r.substring(n -= l, n + l)),
                    !((u += l + 1) > o)); )
                    l = t[i = (i + 1) % t.length];
                return a.reverse().join(e)
            }
        }
        function la(t) {
            return function(e) {
                return e.replace(/[0-9]/g, function(r) {
                    return t[+r]
                })
            }
        }
        var Jl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function lt(t) {
            if (!(e = Jl.exec(t)))
                throw new Error("invalid format: " + t);
            var e;
            return new Be({
                fill: e[1],
                align: e[2],
                sign: e[3],
                symbol: e[4],
                zero: e[5],
                width: e[6],
                comma: e[7],
                precision: e[8] && e[8].slice(1),
                trim: e[9],
                type: e[10]
            })
        }
        lt.prototype = Be.prototype;
        function Be(t) {
            this.fill = t.fill === void 0 ? " " : t.fill + "",
                this.align = t.align === void 0 ? ">" : t.align + "",
                this.sign = t.sign === void 0 ? "-" : t.sign + "",
                this.symbol = t.symbol === void 0 ? "" : t.symbol + "",
                this.zero = !!t.zero,
                this.width = t.width === void 0 ? void 0 : +t.width,
                this.comma = !!t.comma,
                this.precision = t.precision === void 0 ? void 0 : +t.precision,
                this.trim = !!t.trim,
                this.type = t.type === void 0 ? "" : t.type + ""
        }
        Be.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
        }
        ;
        function sa(t) {
            t: for (var e = t.length, r = 1, o = -1, n; r < e; ++r)
                switch (t[r]) {
                    case ".":
                        o = n = r;
                        break;
                    case "0":
                        o === 0 && (o = r),
                            n = r;
                        break;
                    default:
                        if (!+t[r])
                            break t;
                        o > 0 && (o = 0);
                        break
                }
            return o > 0 ? t.slice(0, o) + t.slice(n + 1) : t
        }
        var xr;
        function ua(t, e) {
            var r = pt(t, e);
            if (!r)
                return t + "";
            var o = r[0]
                , n = r[1]
                , a = n - (xr = Math.max(-8, Math.min(8, Math.floor(n / 3))) * 3) + 1
                , i = o.length;
            return a === i ? o : a > i ? o + new Array(a - i + 1).join("0") : a > 0 ? o.slice(0, a) + "." + o.slice(a) : "0." + new Array(1 - a).join("0") + pt(t, Math.max(0, e + a - 1))[0]
        }
        function Er(t, e) {
            var r = pt(t, e);
            if (!r)
                return t + "";
            var o = r[0]
                , n = r[1];
            return n < 0 ? "0." + new Array(-n).join("0") + o : o.length > n + 1 ? o.slice(0, n + 1) + "." + o.slice(n + 1) : o + new Array(n - o.length + 2).join("0")
        }
        var wr = {
            "%": (t,e)=>(t * 100).toFixed(e),
            b: t=>Math.round(t).toString(2),
            c: t=>t + "",
            d: aa,
            e: (t,e)=>t.toExponential(e),
            f: (t,e)=>t.toFixed(e),
            g: (t,e)=>t.toPrecision(e),
            o: t=>Math.round(t).toString(8),
            p: (t,e)=>Er(t * 100, e),
            r: Er,
            s: ua,
            X: t=>Math.round(t).toString(16).toUpperCase(),
            x: t=>Math.round(t).toString(16)
        };
        function br(t) {
            return t
        }
        var ca = Array.prototype.map
            , fa = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
        function ha(t) {
            var e = t.grouping === void 0 || t.thousands === void 0 ? br : ia(ca.call(t.grouping, Number), t.thousands + "")
                , r = t.currency === void 0 ? "" : t.currency[0] + ""
                , o = t.currency === void 0 ? "" : t.currency[1] + ""
                , n = t.decimal === void 0 ? "." : t.decimal + ""
                , a = t.numerals === void 0 ? br : la(ca.call(t.numerals, String))
                , i = t.percent === void 0 ? "%" : t.percent + ""
                , l = t.minus === void 0 ? "\u2212" : t.minus + ""
                , u = t.nan === void 0 ? "NaN" : t.nan + "";
            function s(h) {
                h = lt(h);
                var f = h.fill
                    , d = h.align
                    , E = h.sign
                    , m = h.symbol
                    , b = h.zero
                    , S = h.width
                    , W = h.comma
                    , C = h.precision
                    , R = h.trim
                    , L = h.type;
                L === "n" ? (W = !0,
                    L = "g") : wr[L] || (C === void 0 && (C = 12),
                    R = !0,
                    L = "g"),
                (b || f === "0" && d === "=") && (b = !0,
                    f = "0",
                    d = "=");
                var O = m === "$" ? r : m === "#" && /[boxX]/.test(L) ? "0" + L.toLowerCase() : ""
                    , F = m === "$" ? o : /[%p]/.test(L) ? i : ""
                    , I = wr[L]
                    , G = /[defgprs%]/.test(L);
                C = C === void 0 ? 6 : /[gprs]/.test(L) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
                function B(k) {
                    var g = O, _ = F, v, N, H;
                    if (L === "c")
                        _ = I(k) + _,
                            k = "";
                    else {
                        k = +k;
                        var p = k < 0 || 1 / k < 0;
                        if (k = isNaN(k) ? u : I(Math.abs(k), C),
                        R && (k = sa(k)),
                        p && +k == 0 && E !== "+" && (p = !1),
                            g = (p ? E === "(" ? E : l : E === "-" || E === "(" ? "" : E) + g,
                            _ = (L === "s" ? fa[8 + xr / 3] : "") + _ + (p && E === "(" ? ")" : ""),
                            G) {
                            for (v = -1,
                                     N = k.length; ++v < N; )
                                if (H = k.charCodeAt(v),
                                48 > H || H > 57) {
                                    _ = (H === 46 ? n + k.slice(v + 1) : k.slice(v)) + _,
                                        k = k.slice(0, v);
                                    break
                                }
                        }
                    }
                    W && !b && (k = e(k, 1 / 0));
                    var w = g.length + k.length + _.length
                        , x = w < S ? new Array(S - w + 1).join(f) : "";
                    switch (W && b && (k = e(x + k, x.length ? S - _.length : 1 / 0),
                        x = ""),
                        d) {
                        case "<":
                            k = g + k + _ + x;
                            break;
                        case "=":
                            k = g + x + k + _;
                            break;
                        case "^":
                            k = x.slice(0, w = x.length >> 1) + g + k + _ + x.slice(w);
                            break;
                        default:
                            k = x + g + k + _;
                            break
                    }
                    return a(k)
                }
                return B.toString = function() {
                    return h + ""
                }
                    ,
                    B
            }
            function c(h, f) {
                var d = s((h = lt(h),
                    h.type = "f",
                    h))
                    , E = Math.max(-8, Math.min(8, Math.floor(et(f) / 3))) * 3
                    , m = Math.pow(10, -E)
                    , b = fa[8 + E / 3];
                return function(S) {
                    return d(m * S) + b
                }
            }
            return {
                format: s,
                formatPrefix: c
            }
        }
        var Fe, qe, Pe;
        Sr({
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        });
        function Sr(t) {
            return Fe = ha(t),
                qe = Fe.format,
                Pe = Fe.formatPrefix,
                Fe
        }
        function Mr(t) {
            return Math.max(0, -et(Math.abs(t)))
        }
        function kr(t, e) {
            return Math.max(0, Math.max(-8, Math.min(8, Math.floor(et(e) / 3))) * 3 - et(Math.abs(t)))
        }
        function Nr(t, e) {
            return t = Math.abs(t),
                e = Math.abs(e) - t,
            Math.max(0, et(e) - et(t)) + 1
        }
        function Lt(t, e) {
            switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(e).domain(t);
                    break
            }
            return this
        }
        var da = Symbol("implicit");
        function Oe() {
            var t = new bt
                , e = []
                , r = []
                , o = da;
            function n(a) {
                let i = t.get(a);
                if (i === void 0) {
                    if (o !== da)
                        return o;
                    t.set(a, i = e.push(a) - 1)
                }
                return r[i % r.length]
            }
            return n.domain = function(a) {
                if (!arguments.length)
                    return e.slice();
                e = [],
                    t = new bt;
                for (let i of a)
                    t.has(i) || t.set(i, e.push(i) - 1);
                return n
            }
                ,
                n.range = function(a) {
                    return arguments.length ? (r = Array.from(a),
                        n) : r.slice()
                }
                ,
                n.unknown = function(a) {
                    return arguments.length ? (o = a,
                        n) : o
                }
                ,
                n.copy = function() {
                    return Oe(e, r).unknown(o)
                }
                ,
                Lt.apply(n, arguments),
                n
        }
        function ie() {
            var t = Oe().unknown(void 0), e = t.domain, r = t.range, o = 0, n = 1, a, i, l = !1, u = 0, s = 0, c = .5;
            delete t.unknown;
            function h() {
                var f = e().length
                    , d = n < o
                    , E = d ? n : o
                    , m = d ? o : n;
                a = (m - E) / Math.max(1, f - u + s * 2),
                l && (a = Math.floor(a)),
                    E += (m - E - a * (f - u)) * c,
                    i = a * (1 - u),
                l && (E = Math.round(E),
                    i = Math.round(i));
                var b = he(f).map(function(S) {
                    return E + a * S
                });
                return r(d ? b.reverse() : b)
            }
            return t.domain = function(f) {
                return arguments.length ? (e(f),
                    h()) : e()
            }
                ,
                t.range = function(f) {
                    return arguments.length ? ([o,n] = f,
                        o = +o,
                        n = +n,
                        h()) : [o, n]
                }
                ,
                t.rangeRound = function(f) {
                    return [o,n] = f,
                        o = +o,
                        n = +n,
                        l = !0,
                        h()
                }
                ,
                t.bandwidth = function() {
                    return i
                }
                ,
                t.step = function() {
                    return a
                }
                ,
                t.round = function(f) {
                    return arguments.length ? (l = !!f,
                        h()) : l
                }
                ,
                t.padding = function(f) {
                    return arguments.length ? (u = Math.min(1, s = +f),
                        h()) : u
                }
                ,
                t.paddingInner = function(f) {
                    return arguments.length ? (u = Math.min(1, f),
                        h()) : u
                }
                ,
                t.paddingOuter = function(f) {
                    return arguments.length ? (s = +f,
                        h()) : s
                }
                ,
                t.align = function(f) {
                    return arguments.length ? (c = Math.max(0, Math.min(1, f)),
                        h()) : c
                }
                ,
                t.copy = function() {
                    return ie(e(), [o, n]).round(l).paddingInner(u).paddingOuter(s).align(c)
                }
                ,
                Lt.apply(h(), arguments)
        }
        function Wr(t) {
            return function() {
                return t
            }
        }
        function Tr(t) {
            return +t
        }
        var _a = [0, 1];
        function At(t) {
            return t
        }
        function Cr(t, e) {
            return (e -= t = +t) ? function(r) {
                    return (r - t) / e
                }
                : Wr(isNaN(e) ? NaN : .5)
        }
        function jl(t, e) {
            var r;
            return t > e && (r = t,
                t = e,
                e = r),
                function(o) {
                    return Math.max(t, Math.min(e, o))
                }
        }
        function ts(t, e, r) {
            var o = t[0]
                , n = t[1]
                , a = e[0]
                , i = e[1];
            return n < o ? (o = Cr(n, o),
                a = r(i, a)) : (o = Cr(o, n),
                a = r(a, i)),
                function(l) {
                    return a(o(l))
                }
        }
        function es(t, e, r) {
            var o = Math.min(t.length, e.length) - 1
                , n = new Array(o)
                , a = new Array(o)
                , i = -1;
            for (t[o] < t[0] && (t = t.slice().reverse(),
                e = e.slice().reverse()); ++i < o; )
                n[i] = Cr(t[i], t[i + 1]),
                    a[i] = r(e[i], e[i + 1]);
            return function(l) {
                var u = Ke(t, l, 1, o) - 1;
                return a[u](n[u](l))
            }
        }
        function ma(t, e) {
            return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())
        }
        function rs() {
            var t = _a, e = _a, r = _t, o, n, a, i = At, l, u, s;
            function c() {
                var f = Math.min(t.length, e.length);
                return i !== At && (i = jl(t[0], t[f - 1])),
                    l = f > 2 ? es : ts,
                    u = s = null,
                    h
            }
            function h(f) {
                return f == null || isNaN(f = +f) ? a : (u || (u = l(t.map(o), e, r)))(o(i(f)))
            }
            return h.invert = function(f) {
                return i(n((s || (s = l(e, t.map(o), Y)))(f)))
            }
                ,
                h.domain = function(f) {
                    return arguments.length ? (t = Array.from(f, Tr),
                        c()) : t.slice()
                }
                ,
                h.range = function(f) {
                    return arguments.length ? (e = Array.from(f),
                        c()) : e.slice()
                }
                ,
                h.rangeRound = function(f) {
                    return e = Array.from(f),
                        r = sr,
                        c()
                }
                ,
                h.clamp = function(f) {
                    return arguments.length ? (i = f ? !0 : At,
                        c()) : i !== At
                }
                ,
                h.interpolate = function(f) {
                    return arguments.length ? (r = f,
                        c()) : r
                }
                ,
                h.unknown = function(f) {
                    return arguments.length ? (a = f,
                        h) : a
                }
                ,
                function(f, d) {
                    return o = f,
                        n = d,
                        c()
                }
        }
        function Lr() {
            return rs()(At, At)
        }
        function Ar(t, e, r, o) {
            var n = Xe(t, e, r), a;
            switch (o = lt(o == null ? ",f" : o),
                o.type) {
                case "s":
                {
                    var i = Math.max(Math.abs(t), Math.abs(e));
                    return o.precision == null && !isNaN(a = kr(n, i)) && (o.precision = a),
                        Pe(o, i)
                }
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                {
                    o.precision == null && !isNaN(a = Nr(n, Math.max(Math.abs(t), Math.abs(e)))) && (o.precision = a - (o.type === "e"));
                    break
                }
                case "f":
                case "%":
                {
                    o.precision == null && !isNaN(a = Mr(n)) && (o.precision = a - (o.type === "%") * 2);
                    break
                }
            }
            return qe(o)
        }
        function os(t) {
            var e = t.domain;
            return t.ticks = function(r) {
                var o = e();
                return fe(o[0], o[o.length - 1], r == null ? 10 : r)
            }
                ,
                t.tickFormat = function(r, o) {
                    var n = e();
                    return Ar(n[0], n[n.length - 1], r == null ? 10 : r, o)
                }
                ,
                t.nice = function(r) {
                    r == null && (r = 10);
                    var o = e(), n = 0, a = o.length - 1, i = o[n], l = o[a], u, s, c = 10;
                    for (l < i && (s = i,
                        i = l,
                        l = s,
                        s = n,
                        n = a,
                        a = s); c-- > 0; ) {
                        if (s = Bt(i, l, r),
                        s === u)
                            return o[n] = i,
                                o[a] = l,
                                e(o);
                        if (s > 0)
                            i = Math.floor(i / s) * s,
                                l = Math.ceil(l / s) * s;
                        else if (s < 0)
                            i = Math.ceil(i * s) / s,
                                l = Math.floor(l * s) / s;
                        else
                            break;
                        u = s
                    }
                    return t
                }
                ,
                t
        }
        function Ht() {
            var t = Lr();
            return t.copy = function() {
                return ma(t, Ht())
            }
                ,
                Lt.apply(t, arguments),
                os(t)
        }
        function st(t, e, r) {
            this.k = t,
                this.x = e,
                this.y = r
        }
        st.prototype = {
            constructor: st,
            scale: function(t) {
                return t === 1 ? this : new st(this.k * t,this.x,this.y)
            },
            translate: function(t, e) {
                return t === 0 & e === 0 ? this : new st(this.k,this.x + this.k * t,this.y + this.k * e)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var Hr = new st(1,0,0);
        Dr.prototype = st.prototype;
        function Dr(t) {
            for (; !t.__zoom; )
                if (!(t = t.parentNode))
                    return Hr;
            return t.__zoom
        }
        var It = Wa(ya(), 1);
        var ga = [{
            name: "County Durham",
            region_name: "North East"
        }, {
            name: "Darlington",
            region_name: "North East"
        }, {
            name: "Hartlepool",
            region_name: "North East"
        }, {
            name: "Middlesbrough",
            region_name: "North East"
        }, {
            name: "Northumberland",
            region_name: "North East"
        }, {
            name: "Redcar and Cleveland",
            region_name: "North East"
        }, {
            name: "Stockton-on-Tees",
            region_name: "North East"
        }, {
            name: "Gateshead",
            region_name: "North East"
        }, {
            name: "Newcastle upon Tyne",
            region_name: "North East"
        }, {
            name: "North Tyneside",
            region_name: "North East"
        }, {
            name: "South Tyneside",
            region_name: "North East"
        }, {
            name: "Sunderland",
            region_name: "North East"
        }, {
            name: "Blackburn with Darwen",
            region_name: "North West"
        }, {
            name: "Blackpool",
            region_name: "North West"
        }, {
            name: "Cheshire East",
            region_name: "North West"
        }, {
            name: "Cheshire West and Chester",
            region_name: "North West"
        }, {
            name: "Halton",
            region_name: "North West"
        }, {
            name: "Warrington",
            region_name: "North West"
        }, {
            name: "Bolton",
            region_name: "North West"
        }, {
            name: "Bury",
            region_name: "North West"
        }, {
            name: "Manchester",
            region_name: "North West"
        }, {
            name: "Oldham",
            region_name: "North West"
        }, {
            name: "Rochdale",
            region_name: "North West"
        }, {
            name: "Salford",
            region_name: "North West"
        }, {
            name: "Stockport",
            region_name: "North West"
        }, {
            name: "Tameside",
            region_name: "North West"
        }, {
            name: "Trafford",
            region_name: "North West"
        }, {
            name: "Wigan",
            region_name: "North West"
        }, {
            name: "Burnley",
            region_name: "North West"
        }, {
            name: "Chorley",
            region_name: "North West"
        }, {
            name: "Fylde",
            region_name: "North West"
        }, {
            name: "Hyndburn",
            region_name: "North West"
        }, {
            name: "Lancaster",
            region_name: "North West"
        }, {
            name: "Pendle",
            region_name: "North West"
        }, {
            name: "Preston",
            region_name: "North West"
        }, {
            name: "Ribble Valley",
            region_name: "North West"
        }, {
            name: "Rossendale",
            region_name: "North West"
        }, {
            name: "South Ribble",
            region_name: "North West"
        }, {
            name: "West Lancashire",
            region_name: "North West"
        }, {
            name: "Wyre",
            region_name: "North West"
        }, {
            name: "Knowsley",
            region_name: "North West"
        }, {
            name: "Liverpool",
            region_name: "North West"
        }, {
            name: "Sefton",
            region_name: "North West"
        }, {
            name: "St. Helens",
            region_name: "North West"
        }, {
            name: "Wirral",
            region_name: "North West"
        }, {
            name: "East Riding of Yorkshire",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "North East Lincolnshire",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "North Lincolnshire",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "York",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Barnsley",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Doncaster",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Rotherham",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Sheffield",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Bradford",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Calderdale",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Kirklees",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Leeds",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Wakefield",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Derby",
            region_name: "East Midlands"
        }, {
            name: "Leicester",
            region_name: "East Midlands"
        }, {
            name: "Nottingham",
            region_name: "East Midlands"
        }, {
            name: "Rutland",
            region_name: "East Midlands"
        }, {
            name: "Amber Valley",
            region_name: "East Midlands"
        }, {
            name: "Bolsover",
            region_name: "East Midlands"
        }, {
            name: "Chesterfield",
            region_name: "East Midlands"
        }, {
            name: "Derbyshire Dales",
            region_name: "East Midlands"
        }, {
            name: "Erewash",
            region_name: "East Midlands"
        }, {
            name: "High Peak",
            region_name: "East Midlands"
        }, {
            name: "North East Derbyshire",
            region_name: "East Midlands"
        }, {
            name: "South Derbyshire",
            region_name: "East Midlands"
        }, {
            name: "Blaby",
            region_name: "East Midlands"
        }, {
            name: "Charnwood",
            region_name: "East Midlands"
        }, {
            name: "Harborough",
            region_name: "East Midlands"
        }, {
            name: "Hinckley and Bosworth",
            region_name: "East Midlands"
        }, {
            name: "Melton",
            region_name: "East Midlands"
        }, {
            name: "North West Leicestershire",
            region_name: "East Midlands"
        }, {
            name: "Oadby and Wigston",
            region_name: "East Midlands"
        }, {
            name: "Boston",
            region_name: "East Midlands"
        }, {
            name: "East Lindsey",
            region_name: "East Midlands"
        }, {
            name: "Lincoln",
            region_name: "East Midlands"
        }, {
            name: "North Kesteven",
            region_name: "East Midlands"
        }, {
            name: "South Holland",
            region_name: "East Midlands"
        }, {
            name: "South Kesteven",
            region_name: "East Midlands"
        }, {
            name: "West Lindsey",
            region_name: "East Midlands"
        }, {
            name: "Ashfield",
            region_name: "East Midlands"
        }, {
            name: "Bassetlaw",
            region_name: "East Midlands"
        }, {
            name: "Broxtowe",
            region_name: "East Midlands"
        }, {
            name: "Gedling",
            region_name: "East Midlands"
        }, {
            name: "Mansfield",
            region_name: "East Midlands"
        }, {
            name: "Newark and Sherwood",
            region_name: "East Midlands"
        }, {
            name: "Rushcliffe",
            region_name: "East Midlands"
        }, {
            name: "North Northamptonshire",
            region_name: "East Midlands"
        }, {
            name: "West Northamptonshire",
            region_name: "East Midlands"
        }, {
            name: "Shropshire",
            region_name: "West Midlands"
        }, {
            name: "Stoke-on-Trent",
            region_name: "West Midlands"
        }, {
            name: "Telford and Wrekin",
            region_name: "West Midlands"
        }, {
            name: "Cannock Chase",
            region_name: "West Midlands"
        }, {
            name: "East Staffordshire",
            region_name: "West Midlands"
        }, {
            name: "Lichfield",
            region_name: "West Midlands"
        }, {
            name: "Newcastle-under-Lyme",
            region_name: "West Midlands"
        }, {
            name: "South Staffordshire",
            region_name: "West Midlands"
        }, {
            name: "Stafford",
            region_name: "West Midlands"
        }, {
            name: "Staffordshire Moorlands",
            region_name: "West Midlands"
        }, {
            name: "Tamworth",
            region_name: "West Midlands"
        }, {
            name: "North Warwickshire",
            region_name: "West Midlands"
        }, {
            name: "Nuneaton and Bedworth",
            region_name: "West Midlands"
        }, {
            name: "Rugby",
            region_name: "West Midlands"
        }, {
            name: "Stratford-on-Avon",
            region_name: "West Midlands"
        }, {
            name: "Warwick",
            region_name: "West Midlands"
        }, {
            name: "Birmingham",
            region_name: "West Midlands"
        }, {
            name: "Coventry",
            region_name: "West Midlands"
        }, {
            name: "Dudley",
            region_name: "West Midlands"
        }, {
            name: "Sandwell",
            region_name: "West Midlands"
        }, {
            name: "Solihull",
            region_name: "West Midlands"
        }, {
            name: "Walsall",
            region_name: "West Midlands"
        }, {
            name: "Wolverhampton",
            region_name: "West Midlands"
        }, {
            name: "Bromsgrove",
            region_name: "West Midlands"
        }, {
            name: "Malvern Hills",
            region_name: "West Midlands"
        }, {
            name: "Redditch",
            region_name: "West Midlands"
        }, {
            name: "Worcester",
            region_name: "West Midlands"
        }, {
            name: "Wychavon",
            region_name: "West Midlands"
        }, {
            name: "Wyre Forest",
            region_name: "West Midlands"
        }, {
            name: "Bedford",
            region_name: "East of England"
        }, {
            name: "Central Bedfordshire",
            region_name: "East of England"
        }, {
            name: "Luton",
            region_name: "East of England"
        }, {
            name: "Peterborough",
            region_name: "East of England"
        }, {
            name: "Southend-on-Sea",
            region_name: "East of England"
        }, {
            name: "Thurrock",
            region_name: "East of England"
        }, {
            name: "Cambridge",
            region_name: "East of England"
        }, {
            name: "East Cambridgeshire",
            region_name: "East of England"
        }, {
            name: "Fenland",
            region_name: "East of England"
        }, {
            name: "Huntingdonshire",
            region_name: "East of England"
        }, {
            name: "South Cambridgeshire",
            region_name: "East of England"
        }, {
            name: "Basildon",
            region_name: "East of England"
        }, {
            name: "Braintree",
            region_name: "East of England"
        }, {
            name: "Brentwood",
            region_name: "East of England"
        }, {
            name: "Castle Point",
            region_name: "East of England"
        }, {
            name: "Chelmsford",
            region_name: "East of England"
        }, {
            name: "Colchester",
            region_name: "East of England"
        }, {
            name: "Epping Forest",
            region_name: "East of England"
        }, {
            name: "Harlow",
            region_name: "East of England"
        }, {
            name: "Maldon",
            region_name: "East of England"
        }, {
            name: "Rochford",
            region_name: "East of England"
        }, {
            name: "Tendring",
            region_name: "East of England"
        }, {
            name: "Uttlesford",
            region_name: "East of England"
        }, {
            name: "Broxbourne",
            region_name: "East of England"
        }, {
            name: "Dacorum",
            region_name: "East of England"
        }, {
            name: "East Hertfordshire",
            region_name: "East of England"
        }, {
            name: "Hertsmere",
            region_name: "East of England"
        }, {
            name: "North Hertfordshire",
            region_name: "East of England"
        }, {
            name: "St Albans",
            region_name: "East of England"
        }, {
            name: "Stevenage",
            region_name: "East of England"
        }, {
            name: "Three Rivers",
            region_name: "East of England"
        }, {
            name: "Watford",
            region_name: "East of England"
        }, {
            name: "Welwyn Hatfield",
            region_name: "East of England"
        }, {
            name: "Breckland",
            region_name: "East of England"
        }, {
            name: "Broadland",
            region_name: "East of England"
        }, {
            name: "Great Yarmouth",
            region_name: "East of England"
        }, {
            name: "North Norfolk",
            region_name: "East of England"
        }, {
            name: "Norwich",
            region_name: "East of England"
        }, {
            name: "South Norfolk",
            region_name: "East of England"
        }, {
            name: "Babergh",
            region_name: "East of England"
        }, {
            name: "Ipswich",
            region_name: "East of England"
        }, {
            name: "Mid Suffolk",
            region_name: "East of England"
        }, {
            name: "East Suffolk",
            region_name: "East of England"
        }, {
            name: "West Suffolk",
            region_name: "East of England"
        }, {
            name: "Camden",
            region_name: "London"
        }, {
            name: "City of London",
            region_name: "London"
        }, {
            name: "Hackney",
            region_name: "London"
        }, {
            name: "Hammersmith and Fulham",
            region_name: "London"
        }, {
            name: "Haringey",
            region_name: "London"
        }, {
            name: "Islington",
            region_name: "London"
        }, {
            name: "Kensington and Chelsea",
            region_name: "London"
        }, {
            name: "Lambeth",
            region_name: "London"
        }, {
            name: "Lewisham",
            region_name: "London"
        }, {
            name: "Newham",
            region_name: "London"
        }, {
            name: "Southwark",
            region_name: "London"
        }, {
            name: "Tower Hamlets",
            region_name: "London"
        }, {
            name: "Wandsworth",
            region_name: "London"
        }, {
            name: "Westminster",
            region_name: "London"
        }, {
            name: "Barking and Dagenham",
            region_name: "London"
        }, {
            name: "Barnet",
            region_name: "London"
        }, {
            name: "Bexley",
            region_name: "London"
        }, {
            name: "Brent",
            region_name: "London"
        }, {
            name: "Bromley",
            region_name: "London"
        }, {
            name: "Croydon",
            region_name: "London"
        }, {
            name: "Ealing",
            region_name: "London"
        }, {
            name: "Enfield",
            region_name: "London"
        }, {
            name: "Greenwich",
            region_name: "London"
        }, {
            name: "Harrow",
            region_name: "London"
        }, {
            name: "Havering",
            region_name: "London"
        }, {
            name: "Hillingdon",
            region_name: "London"
        }, {
            name: "Hounslow",
            region_name: "London"
        }, {
            name: "Kingston upon Thames",
            region_name: "London"
        }, {
            name: "Merton",
            region_name: "London"
        }, {
            name: "Redbridge",
            region_name: "London"
        }, {
            name: "Richmond upon Thames",
            region_name: "London"
        }, {
            name: "Sutton",
            region_name: "London"
        }, {
            name: "Waltham Forest",
            region_name: "London"
        }, {
            name: "Bracknell Forest",
            region_name: "South East"
        }, {
            name: "Brighton and Hove",
            region_name: "South East"
        }, {
            name: "Isle of Wight",
            region_name: "South East"
        }, {
            name: "Medway",
            region_name: "South East"
        }, {
            name: "Milton Keynes",
            region_name: "South East"
        }, {
            name: "Portsmouth",
            region_name: "South East"
        }, {
            name: "Reading",
            region_name: "South East"
        }, {
            name: "Slough",
            region_name: "South East"
        }, {
            name: "Southampton",
            region_name: "South East"
        }, {
            name: "West Berkshire",
            region_name: "South East"
        }, {
            name: "Windsor and Maidenhead",
            region_name: "South East"
        }, {
            name: "Wokingham",
            region_name: "South East"
        }, {
            name: "Eastbourne",
            region_name: "South East"
        }, {
            name: "Hastings",
            region_name: "South East"
        }, {
            name: "Lewes",
            region_name: "South East"
        }, {
            name: "Rother",
            region_name: "South East"
        }, {
            name: "Wealden",
            region_name: "South East"
        }, {
            name: "Basingstoke and Deane",
            region_name: "South East"
        }, {
            name: "East Hampshire",
            region_name: "South East"
        }, {
            name: "Eastleigh",
            region_name: "South East"
        }, {
            name: "Fareham",
            region_name: "South East"
        }, {
            name: "Gosport",
            region_name: "South East"
        }, {
            name: "Hart",
            region_name: "South East"
        }, {
            name: "Havant",
            region_name: "South East"
        }, {
            name: "New Forest",
            region_name: "South East"
        }, {
            name: "Rushmoor",
            region_name: "South East"
        }, {
            name: "Test Valley",
            region_name: "South East"
        }, {
            name: "Winchester",
            region_name: "South East"
        }, {
            name: "Ashford",
            region_name: "South East"
        }, {
            name: "Canterbury",
            region_name: "South East"
        }, {
            name: "Dartford",
            region_name: "South East"
        }, {
            name: "Dover",
            region_name: "South East"
        }, {
            name: "Gravesham",
            region_name: "South East"
        }, {
            name: "Maidstone",
            region_name: "South East"
        }, {
            name: "Sevenoaks",
            region_name: "South East"
        }, {
            name: "Swale",
            region_name: "South East"
        }, {
            name: "Thanet",
            region_name: "South East"
        }, {
            name: "Tonbridge and Malling",
            region_name: "South East"
        }, {
            name: "Tunbridge Wells",
            region_name: "South East"
        }, {
            name: "Cherwell",
            region_name: "South East"
        }, {
            name: "Oxford",
            region_name: "South East"
        }, {
            name: "South Oxfordshire",
            region_name: "South East"
        }, {
            name: "Vale of White Horse",
            region_name: "South East"
        }, {
            name: "West Oxfordshire",
            region_name: "South East"
        }, {
            name: "Elmbridge",
            region_name: "South East"
        }, {
            name: "Epsom and Ewell",
            region_name: "South East"
        }, {
            name: "Guildford",
            region_name: "South East"
        }, {
            name: "Mole Valley",
            region_name: "South East"
        }, {
            name: "Reigate and Banstead",
            region_name: "South East"
        }, {
            name: "Runnymede",
            region_name: "South East"
        }, {
            name: "Spelthorne",
            region_name: "South East"
        }, {
            name: "Surrey Heath",
            region_name: "South East"
        }, {
            name: "Tandridge",
            region_name: "South East"
        }, {
            name: "Waverley",
            region_name: "South East"
        }, {
            name: "Woking",
            region_name: "South East"
        }, {
            name: "Adur",
            region_name: "South East"
        }, {
            name: "Arun",
            region_name: "South East"
        }, {
            name: "Chichester",
            region_name: "South East"
        }, {
            name: "Crawley",
            region_name: "South East"
        }, {
            name: "Horsham",
            region_name: "South East"
        }, {
            name: "Mid Sussex",
            region_name: "South East"
        }, {
            name: "Worthing",
            region_name: "South East"
        }, {
            name: "Buckinghamshire",
            region_name: "South East"
        }, {
            name: "Folkestone and Hythe",
            region_name: "South East"
        }, {
            name: "Bath and North East Somerset",
            region_name: "South West"
        }, {
            name: "Cornwall",
            region_name: "South West"
        }, {
            name: "Isles of Scilly",
            region_name: "South West"
        }, {
            name: "North Somerset",
            region_name: "South West"
        }, {
            name: "Plymouth",
            region_name: "South West"
        }, {
            name: "South Gloucestershire",
            region_name: "South West"
        }, {
            name: "Swindon",
            region_name: "South West"
        }, {
            name: "Torbay",
            region_name: "South West"
        }, {
            name: "Wiltshire",
            region_name: "South West"
        }, {
            name: "East Devon",
            region_name: "South West"
        }, {
            name: "Exeter",
            region_name: "South West"
        }, {
            name: "Mid Devon",
            region_name: "South West"
        }, {
            name: "North Devon",
            region_name: "South West"
        }, {
            name: "South Hams",
            region_name: "South West"
        }, {
            name: "Teignbridge",
            region_name: "South West"
        }, {
            name: "Torridge",
            region_name: "South West"
        }, {
            name: "West Devon",
            region_name: "South West"
        }, {
            name: "Cheltenham",
            region_name: "South West"
        }, {
            name: "Cotswold",
            region_name: "South West"
        }, {
            name: "Forest of Dean",
            region_name: "South West"
        }, {
            name: "Gloucester",
            region_name: "South West"
        }, {
            name: "Stroud",
            region_name: "South West"
        }, {
            name: "Tewkesbury",
            region_name: "South West"
        }, {
            name: "Dorset",
            region_name: "South West"
        }, {
            name: "Bournemouth, Christchurch and Poole",
            region_name: "South West"
        }, {
            name: "Cumberland",
            region_name: "North West"
        }, {
            name: "Westmorland and Furness",
            region_name: "North West"
        }, {
            name: "Kingston upon Hull, City of",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "North Yorkshire",
            region_name: "Yorkshire and The Humber"
        }, {
            name: "Herefordshire, County of",
            region_name: "West Midlands"
        }, {
            name: "Kings Lynn and West Norfolk",
            region_name: "East of England"
        }, {
            name: "Bristol, City of",
            region_name: "South West"
        }, {
            name: "Somerset",
            region_name: "South West"
        }];
        var ze = ()=>{
                let t = {
                    Regions: ["North West", "Yorkshire and The Humber", "West Midlands", "London", "East Midlands", "South West", "East of England", "North East", "South East"],
                    la_select_status: !1,
                    LocalAuthorityLabels: [],
                    CurrentEnergyRating: ["A", "B", "C", "D", "E", "F", "G", "INVALID"],
                    FuelPovertyRateLower: 0,
                    FuelPovertyRateUpper: 100,
                    IncomeDeprivationIndex: "Income Deprivation Domain",
                    IncomeDeprivationRangeLower: 0,
                    IncomeDeprivationRangeUpper: 1,
                    IncomeDeprivationRangeChildLower: 0,
                    IncomeDeprivationRangeChildUpper: 1,
                    IncomeDeprivationRangeElderLower: 0,
                    IncomeDeprivationRangeElderUpper: 1,
                    HotWaterEnergyEfficiency: ["Very Poor", "Poor", "Average", "Good", "Very Good", ""],
                    WindowsEnergyEfficiency: ["Very Poor", "Poor", "Average", "Good", "Very Good", ""],
                    WallsEnergyEfficiency: ["Very Poor", "Poor", "Average", "Good", "Very Good", ""],
                    RoofEnergyEfficiency: ["Very Poor", "Poor", "Average", "Good", "Very Good", ""],
                    LightingEnergyEfficiency: ["Very Poor", "Poor", "Average", "Good", "Very Good", ""],
                    HeatingEnergyEfficiency: ["Very Poor", "Poor", "Average", "Good", "Very Good", ""],
                    Tenure: ["owner-occupied", "rented(private)", "rented(social)","unknown"],
                    MainsGasFlag: ["Y", "N", ""],
                    CurrentEnergyConsumptionLower: -10,
                    CurrentEnergyConsumptionUpper: 313
                };
                function e(o, n) {
                    typeof o != "number" && (Array.isArray(n) ? t[o] = [...new Set(n)] : t[o] = n)
                }
                function r() {}
                return {
                    value: t,
                    reset: r,
                    setValue: e
                }
            }
        ;
        var va = {
            async ping() {
                return "ping"
            },
            async locationData() {
                return "locationData"
            },
            async findAddressCount(t, mode = 'apply') {
                t || (t = ze().value);
                let e = ga.filter(n=>t.Regions.includes(n.region_name))
                    , r = (t.LocalAuthorityLabels || []).filter(n=>e.map(a=>a.name).includes(n));
                // Rename keys
                const keys = Object.keys(t);
                let payload = {};
                if (t.LocalAuthorityLabels.length === 296 || !t.LocalAuthorityLabels.length) {
                    payload['la_select_status'] = false;
                    payload['local_authority_label'] = null;
                } else {
                    payload['la_select_status'] = true;
                    payload['local_authority_label'] = t.LocalAuthorityLabels;
                }
                if ( mode === 'reset') {
                    last_applied_filter = JSON.parse(JSON.stringify(t));
                    console.log('====== CHART API RESET ======');
                    return t.LocalAuthorityLabels = r,
                        (await fetch(`${Br}/chart`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${Fr}`
                            },
                            body: JSON.stringify(payload)
                        })).json()
                }

                if (last_applied_filter) {
                    if (!compare_arrays('LocalAuthorityLabels', last_applied_filter, t)) {
                        delete payload['local_authority_label'];
                    }
                }

                keys.forEach(key => {
                    switch (key){
                        case 'Regions':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['region'] = (!t[key] || t[key].length == 0) ? null : t[key];
                                if (t.LocalAuthorityLabels.length == 296 || !t.LocalAuthorityLabels.length) {
                                    payload['la_select_status'] = false;
                                    payload['local_authority_label'] = null;
                                } else {
                                    payload['la_select_status'] = true;
                                    payload['local_authority_label'] = t.LocalAuthorityLabels;
                                }
                            }
                            break;
                        case 'FuelPovertyRateLower':
                            if (last_applied_filter && last_applied_filter[key] === t[key]
                                && last_applied_filter['FuelPovertyRateUpper'] === t['FuelPovertyRateUpper']) {
                                delete payload['house_fuel_poverty'];
                            } else {
                                payload['house_fuel_poverty'] = {
                                    'lower': t[key],
                                    'higher': t['FuelPovertyRateUpper']
                                };
                            }
                            break;
                        case 'CurrentEnergyRating':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['current_energy_rating'] = (!t[key] || t[key].length == 0) ? null : t[key];
                            }
                            break;
                        case 'HotWaterEnergyEfficiency':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['hot_water_energy_eff'] = (!t[key] || t[key].length == 0) ? null : t[key];
                            }
                            break;
                        case 'WindowsEnergyEfficiency':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['windows_energy_eff'] = (!t[key] || t[key].length == 0) ? null : t[key];
                            }
                            break;
                        case 'WallsEnergyEfficiency':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['walls_energy_eff'] = (!t[key] || t[key].length == 0) ? null : t[key];
                            }
                            break;
                        case 'RoofEnergyEfficiency':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['roof_energy_eff'] = (!t[key] || t[key].length == 0) ? null : t[key];
                            }
                            break;
                        case 'HeatingEnergyEfficiency':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['mainheat_energy_eff'] = (!t[key] || t[key].length == 0) ? null : t[key];
                            }
                            break;
                        case 'LightingEnergyEfficiency':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['lighting_energy_eff'] = (!t[key] || t[key].length == 0) ? null : t[key];
                            }
                            break;
                        case 'CurrentEnergyConsumptionLower':
                            if (last_applied_filter && last_applied_filter[key] === t[key]
                                && last_applied_filter['CurrentEnergyConsumptionUpper'] === t['CurrentEnergyConsumptionUpper']) {
                                return
                            } else {
                                payload['energy_consumption_current'] = {
                                    lower: (Number(t[key]) == 313) ? 312274 : (Number(t[key]) * 1000),
                                    higher: (Number(t['CurrentEnergyConsumptionUpper']) == 313) ? 312274 : (Number(t['CurrentEnergyConsumptionUpper']) * 1000)
                                };
                            }
                            break;
                        case 'Tenure':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                const tmp = {}
                                t[key].forEach(x => {
                                    tmp[x] = true
                                })
                                if (tmp['unknown']) {
                                    tmp[''] = true;
                                } else {
                                    delete tmp['unknown'];
                                    delete tmp[''];
                                }
                                payload['tenure'] = t[key].length === 0 ? null : Object.keys(tmp)
                            }
                            break;
                        case 'MainsGasFlag':
                            if (compare_arrays(key, last_applied_filter, t)) {
                                payload['mains_gas_flag'] = t[key];
                            }
                            break;
                        case 'IncomeDeprivationRangeChildLower':
                            if (last_applied_filter && last_applied_filter[key] === t[key]
                                && last_applied_filter['IncomeDeprivationRangeChildUpper'] === t['IncomeDeprivationRangeChildUpper']) {
                                return
                            } else {
                                payload['idc_value'] = {
                                    'lower': t[key],
                                    'higher': t['IncomeDeprivationRangeChildUpper']
                                };
                            }
                            break;
                        case 'IncomeDeprivationRangeElderLower':
                            if (last_applied_filter && last_applied_filter[key] === t[key]
                                && last_applied_filter['IncomeDeprivationRangeElderUpper'] === t['IncomeDeprivationRangeElderUpper']) {
                                return
                            } else {
                                payload['idop_value'] = {
                                    'lower': t[key],
                                    'higher': t['IncomeDeprivationRangeElderUpper']
                                };
                            }
                            break;
                        case 'IncomeDeprivationRangeLower':
                            if (last_applied_filter && last_applied_filter[key] === t[key]
                                && last_applied_filter['IncomeDeprivationRangeUpper'] === t['IncomeDeprivationRangeUpper']) {
                                return
                            } else {
                                payload['income_deprivation_value'] = {
                                    'lower': t[key],
                                    'higher': t['IncomeDeprivationRangeUpper']
                                };
                            }
                            break;
                    }
                });
                last_applied_filter = JSON.parse(JSON.stringify(t));
                console.log('====== CHART API PAYLOAD APPLY ======');
                console.log(payload);
                /*fetch(`${Audr}/address_match`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${Fr}`
                    },
                    body: JSON.stringify(payload)
                })*/

                return t.LocalAuthorityLabels = r,
                    (await fetch(`${Br}/chart`, {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${Fr}`
                        },
                        body: JSON.stringify(payload)
                    })).json()
            }
        };
        var Ir = {
            completion_status: !0,
            error: !1,
            total_address_count: 23734860,
            datasets: [{
                region: "East Midlands",
                local_authority: "Amber Valley",
                address_count: 48849,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 14.157731130592714
            }, {
                region: "East Midlands",
                local_authority: "Ashfield",
                address_count: 52349,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 14.192037470725996
            }, {
                region: "East Midlands",
                local_authority: "Bassetlaw",
                address_count: 54271,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 14.198438305427748
            }, {
                region: "East Midlands",
                local_authority: "Blaby",
                address_count: 34263,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 9.224947506864487
            }, {
                region: "East Midlands",
                local_authority: "Bolsover",
                address_count: 32777,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 15.830987485715879
            }, {
                region: "East Midlands",
                local_authority: "Boston",
                address_count: 31536,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 14.506802152622257
            }, {
                region: "East Midlands",
                local_authority: "Broxtowe",
                address_count: 40731,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 12.183338746346216
            }, {
                region: "East Midlands",
                local_authority: "Charnwood",
                address_count: 68773,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 11.293820262090067
            }, {
                region: "East Midlands",
                local_authority: "Chesterfield",
                address_count: 44640,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 14.712253739883922
            }, {
                region: "East Midlands",
                local_authority: "Derby",
                address_count: 108933,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 15.693162702948857
            }, {
                region: "East Midlands",
                local_authority: "Derbyshire Dales",
                address_count: 30257,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 15.860182370820668
            }, {
                region: "East Midlands",
                local_authority: "East Lindsey",
                address_count: 69390,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 16.279774531789805
            }, {
                region: "East Midlands",
                local_authority: "Erewash",
                address_count: 43373,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 13.395608253051991
            }, {
                region: "East Midlands",
                local_authority: "Gedling",
                address_count: 50430,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 11.533922180766009
            }, {
                region: "East Midlands",
                local_authority: "Harborough",
                address_count: 38444,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 10.372476127997668
            }, {
                region: "East Midlands",
                local_authority: "High Peak",
                address_count: 34125,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 13.777403035413153
            }, {
                region: "East Midlands",
                local_authority: "Hinckley and Bosworth",
                address_count: 44969,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 10.633646048656384
            }, {
                region: "East Midlands",
                local_authority: "Leicester",
                address_count: 144316,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 18.906426937209677
            }, {
                region: "East Midlands",
                local_authority: "Lincoln",
                address_count: 44098,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 15.681061586831884
            }, {
                region: "East Midlands",
                local_authority: "Mansfield",
                address_count: 44227,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 14.511743903186899
            }, {
                region: "East Midlands",
                local_authority: "Melton",
                address_count: 20950,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 12.716360789771244
            }, {
                region: "East Midlands",
                local_authority: "Newark and Sherwood",
                address_count: 52286,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 13.548588995453123
            }, {
                region: "East Midlands",
                local_authority: "North East Derbyshire",
                address_count: 39240,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 13.119832503685346
            }, {
                region: "East Midlands",
                local_authority: "North Kesteven",
                address_count: 48926,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 11.420639663781303
            }, {
                region: "East Midlands",
                local_authority: "North Northamptonshire",
                address_count: 140994,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 12.21261713079055
            }, {
                region: "East Midlands",
                local_authority: "North West Leicestershire",
                address_count: 45668,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 12.442637996591058
            }, {
                region: "East Midlands",
                local_authority: "Nottingham",
                address_count: 182116,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 18.08495580788224
            }, {
                region: "East Midlands",
                local_authority: "Oadby and Wigston",
                address_count: 20189,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 10.231509581201768
            }, {
                region: "East Midlands",
                local_authority: "Rushcliffe",
                address_count: 47225,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 10.589508906603681
            }, {
                region: "East Midlands",
                local_authority: "Rutland",
                address_count: 15592,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 12.89620699794178
            }, {
                region: "East Midlands",
                local_authority: "South Derbyshire",
                address_count: 42779,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 11.51549369177651
            }, {
                region: "East Midlands",
                local_authority: "South Holland",
                address_count: 38806,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 12.965600482800241
            }, {
                region: "East Midlands",
                local_authority: "South Kesteven",
                address_count: 64865,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 12.074598633713205
            }, {
                region: "East Midlands",
                local_authority: "West Lindsey",
                address_count: 43133,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 14.440734557595993
            }, {
                region: "East Midlands",
                local_authority: "West Northamptonshire",
                address_count: 162519,
                regional_poverty_rate: 13.6,
                local_authority_poverty_rate: 11.587516497519683
            }, {
                region: "East of England",
                local_authority: "Babergh",
                address_count: 36736,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 14.346874000442881
            }, {
                region: "East of England",
                local_authority: "Basildon",
                address_count: 65357,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.825152182359798
            }, {
                region: "East of England",
                local_authority: "Bedford",
                address_count: 75074,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 12.352195945945946
            }, {
                region: "East of England",
                local_authority: "Braintree",
                address_count: 58969,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 12.141976154584077
            }, {
                region: "East of England",
                local_authority: "Breckland",
                address_count: 59009,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 14.071439109551989
            }, {
                region: "East of England",
                local_authority: "Brentwood",
                address_count: 29651,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.01834862385321
            }, {
                region: "East of England",
                local_authority: "Broadland",
                address_count: 49197,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 11.70174507218331
            }, {
                region: "East of England",
                local_authority: "Broxbourne",
                address_count: 35214,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.471803018268467
            }, {
                region: "East of England",
                local_authority: "Cambridge",
                address_count: 57396,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 11.53954882116809
            }, {
                region: "East of England",
                local_authority: "Castle Point",
                address_count: 28575,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.487901626338754
            }, {
                region: "East of England",
                local_authority: "Central Bedfordshire",
                address_count: 116209,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.991640851649702
            }, {
                region: "East of England",
                local_authority: "Chelmsford",
                address_count: 67226,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.208351913543005
            }, {
                region: "East of England",
                local_authority: "Colchester",
                address_count: 83428,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 11.508846759494611
            }, {
                region: "East of England",
                local_authority: "Dacorum",
                address_count: 60598,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.28976014472412
            }, {
                region: "East of England",
                local_authority: "East Cambridgeshire",
                address_count: 36540,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 12.439147668324866
            }, {
                region: "East of England",
                local_authority: "East Hertfordshire",
                address_count: 56231,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.942098798908969
            }, {
                region: "East of England",
                local_authority: "East Suffolk",
                address_count: 107217,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 15.260850543308422
            }, {
                region: "East of England",
                local_authority: "Epping Forest",
                address_count: 47955,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.958457188428913
            }, {
                region: "East of England",
                local_authority: "Fenland",
                address_count: 42521,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 13.434713268492104
            }, {
                region: "East of England",
                local_authority: "Great Yarmouth",
                address_count: 43708,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 17.712725820054153
            }, {
                region: "East of England",
                local_authority: "Harlow",
                address_count: 41627,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.52782783567082
            }, {
                region: "East of England",
                local_authority: "Hertsmere",
                address_count: 37690,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.578148534352914
            }, {
                region: "East of England",
                local_authority: "Huntingdonshire",
                address_count: 73821,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.968594743480836
            }, {
                region: "East of England",
                local_authority: "Ipswich",
                address_count: 59936,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 14.961768617021276
            }, {
                region: "East of England",
                local_authority: "Kings Lynn and West Norfolk",
                address_count: 73947,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 15.65318122498057
            }, {
                region: "East of England",
                local_authority: "Luton",
                address_count: 81633,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 16.685458007616756
            }, {
                region: "East of England",
                local_authority: "Maldon",
                address_count: 23955,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 12.437493350356421
            }, {
                region: "East of England",
                local_authority: "Mid Suffolk",
                address_count: 41030,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 13.12046444121916
            }, {
                region: "East of England",
                local_authority: "North Hertfordshire",
                address_count: 54953,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.79634601303999
            }, {
                region: "East of England",
                local_authority: "North Norfolk",
                address_count: 50742,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 16.40238669336712
            }, {
                region: "East of England",
                local_authority: "Norwich",
                address_count: 70283,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 15.503983054749733
            }, {
                region: "East of England",
                local_authority: "Peterborough",
                address_count: 95373,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 12.796341563256568
            }, {
                region: "East of England",
                local_authority: "Rochford",
                address_count: 28029,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.349095966620306
            }, {
                region: "East of England",
                local_authority: "South Cambridgeshire",
                address_count: 67279,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.872261264985532
            }, {
                region: "East of England",
                local_authority: "Southend-on-Sea",
                address_count: 75162,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 14.908291647718661
            }, {
                region: "East of England",
                local_authority: "South Norfolk",
                address_count: 57504,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 13.036612092303725
            }, {
                region: "East of England",
                local_authority: "St Albans",
                address_count: 57880,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.742230868566255
            }, {
                region: "East of England",
                local_authority: "Stevenage",
                address_count: 33431,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 9.671473490187575
            }, {
                region: "East of England",
                local_authority: "Tendring",
                address_count: 66020,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 17.05103581743809
            }, {
                region: "East of England",
                local_authority: "Three Rivers",
                address_count: 33593,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.452166912652624
            }, {
                region: "East of England",
                local_authority: "Thurrock",
                address_count: 62545,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 11.118890494421189
            }, {
                region: "East of England",
                local_authority: "Uttlesford",
                address_count: 33621,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 11.771165331976324
            }, {
                region: "East of England",
                local_authority: "Watford",
                address_count: 40312,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 12.683194766933811
            }, {
                region: "East of England",
                local_authority: "Welwyn Hatfield",
                address_count: 42488,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 10.793935894968675
            }, {
                region: "East of England",
                local_authority: "West Suffolk",
                address_count: 80550,
                regional_poverty_rate: 12.3,
                local_authority_poverty_rate: 12.13172448466566
            }, {
                region: "London",
                local_authority: "Barking and Dagenham",
                address_count: 80681,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 15.278276021114129
            }, {
                region: "London",
                local_authority: "Barnet",
                address_count: 161376,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.458831176279416
            }, {
                region: "London",
                local_authority: "Bexley",
                address_count: 94057,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 9.806084821739173
            }, {
                region: "London",
                local_authority: "Brent",
                address_count: 124294,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 14.848753808141627
            }, {
                region: "London",
                local_authority: "Bromley",
                address_count: 125606,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 9.92392518146287
            }, {
                region: "London",
                local_authority: "Camden",
                address_count: 117066,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.207485246603406
            }, {
                region: "London",
                local_authority: "City of London",
                address_count: 7770,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 5.4101221640488655
            }, {
                region: "London",
                local_authority: "Croydon",
                address_count: 156743,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 13.115333135038668
            }, {
                region: "London",
                local_authority: "Ealing",
                address_count: 143268,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 13.006600894314712
            }, {
                region: "London",
                local_authority: "Enfield",
                address_count: 126473,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 13.79069749210157
            }, {
                region: "London",
                local_authority: "Greenwich",
                address_count: 122841,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.534056010225934
            }, {
                region: "London",
                local_authority: "Hackney",
                address_count: 118233,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.137281027282725
            }, {
                region: "London",
                local_authority: "Hammersmith and Fulham",
                address_count: 103990,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.336833649603594
            }, {
                region: "London",
                local_authority: "Haringey",
                address_count: 124239,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 15.488072549249848
            }, {
                region: "London",
                local_authority: "Harrow",
                address_count: 85131,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.782742029292022
            }, {
                region: "London",
                local_authority: "Havering",
                address_count: 89545,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 9.340546206690002
            }, {
                region: "London",
                local_authority: "Hillingdon",
                address_count: 108570,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.955468187222815
            }, {
                region: "London",
                local_authority: "Hounslow",
                address_count: 98763,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.783404278843495
            }, {
                region: "London",
                local_authority: "Islington",
                address_count: 113780,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.048660604571149
            }, {
                region: "London",
                local_authority: "Kensington and Chelsea",
                address_count: 104575,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.4118793009208
            }, {
                region: "London",
                local_authority: "Kingston upon Thames",
                address_count: 71954,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.351793599030332
            }, {
                region: "London",
                local_authority: "Lambeth",
                address_count: 171547,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.793060194776825
            }, {
                region: "London",
                local_authority: "Lewisham",
                address_count: 133220,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.736356946434796
            }, {
                region: "London",
                local_authority: "Merton",
                address_count: 87988,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.49334875650665
            }, {
                region: "London",
                local_authority: "Newham",
                address_count: 139859,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 17.81391088137146
            }, {
                region: "London",
                local_authority: "Redbridge",
                address_count: 98470,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 14.303453061373556
            }, {
                region: "London",
                local_authority: "Richmond upon Thames",
                address_count: 80952,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 9.715500634309073
            }, {
                region: "London",
                local_authority: "Southwark",
                address_count: 147684,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 9.91647904713487
            }, {
                region: "London",
                local_authority: "Sutton",
                address_count: 78846,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 9.715140703228405
            }, {
                region: "London",
                local_authority: "Tower Hamlets",
                address_count: 163466,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 8.737558519217908
            }, {
                region: "London",
                local_authority: "Waltham Forest",
                address_count: 113765,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 15.976620479206424
            }, {
                region: "London",
                local_authority: "Wandsworth",
                address_count: 172051,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 9.335579598572147
            }, {
                region: "London",
                local_authority: "Westminster",
                address_count: 152140,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.860359687141932
            }, {
                region: "North East",
                local_authority: "County Durham",
                address_count: 254702,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 14.671138982062127
            }, {
                region: "North East",
                local_authority: "Darlington",
                address_count: 50452,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 14.501878947789237
            }, {
                region: "North East",
                local_authority: "Gateshead",
                address_count: 81646,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 13.346434217460038
            }, {
                region: "North East",
                local_authority: "Hartlepool",
                address_count: 46834,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 14.308224901516056
            }, {
                region: "North East",
                local_authority: "Middlesbrough",
                address_count: 68418,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 16.62285399019894
            }, {
                region: "North East",
                local_authority: "Newcastle upon Tyne",
                address_count: 129243,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 15.22820816979675
            }, {
                region: "North East",
                local_authority: "North Tyneside",
                address_count: 87806,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 11.594099767203083
            }, {
                region: "North East",
                local_authority: "Northumberland",
                address_count: 141052,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 13.76079013397403
            }, {
                region: "North East",
                local_authority: "Redcar and Cleveland",
                address_count: 58059,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 14.748093055709733
            }, {
                region: "North East",
                local_authority: "South Tyneside",
                address_count: 66062,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 13.867422290915336
            }, {
                region: "North East",
                local_authority: "Stockton-on-Tees",
                address_count: 88760,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 12.165489875707532
            }, {
                region: "North East",
                local_authority: "Sunderland",
                address_count: 154651,
                regional_poverty_rate: 14,
                local_authority_poverty_rate: 13.812658470841367
            }, {
                region: "North West",
                local_authority: "Blackburn with Darwen",
                address_count: 64271,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 18.295446970201986
            }, {
                region: "North West",
                local_authority: "Blackpool",
                address_count: 81386,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 20.242535904677048
            }, {
                region: "North West",
                local_authority: "Bolton",
                address_count: 115314,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 15.428491357638002
            }, {
                region: "North West",
                local_authority: "Burnley",
                address_count: 45576,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 19.587704857613208
            }, {
                region: "North West",
                local_authority: "Bury",
                address_count: 76135,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.367075701853404
            }, {
                region: "North West",
                local_authority: "Cheshire East",
                address_count: 165989,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 11.632532989661838
            }, {
                region: "North West",
                local_authority: "Cheshire West and Chester",
                address_count: 139133,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 11.807817589576548
            }, {
                region: "North West",
                local_authority: "Chorley",
                address_count: 44429,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 11.119362151176425
            }, {
                region: "North West",
                local_authority: "Cumberland",
                address_count: 115134,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 14.610777507945308
            }, {
                region: "North West",
                local_authority: "Fylde",
                address_count: 39419,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 12.502930985071517
            }, {
                region: "North West",
                local_authority: "Halton",
                address_count: 50003,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 12.428854135654367
            }, {
                region: "North West",
                local_authority: "Hyndburn",
                address_count: 36183,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 18.610540532935648
            }, {
                region: "North West",
                local_authority: "Knowsley",
                address_count: 72018,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 12.912881762814338
            }, {
                region: "North West",
                local_authority: "Lancaster",
                address_count: 59898,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 15.406948295547219
            }, {
                region: "North West",
                local_authority: "Liverpool",
                address_count: 235411,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 18.016096921204344
            }, {
                region: "North West",
                local_authority: "Manchester",
                address_count: 284408,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 18.285130096254342
            }, {
                region: "North West",
                local_authority: "Oldham",
                address_count: 95217,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 16.034672970843182
            }, {
                region: "North West",
                local_authority: "Pendle",
                address_count: 42416,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 19.81226694097981
            }, {
                region: "North West",
                local_authority: "Preston",
                address_count: 67945,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 15.345583526282084
            }, {
                region: "North West",
                local_authority: "Ribble Valley",
                address_count: 23554,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.356766256590511
            }, {
                region: "North West",
                local_authority: "Rochdale",
                address_count: 86878,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 15.75033921302578
            }, {
                region: "North West",
                local_authority: "Rossendale",
                address_count: 28752,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 15.377957299480668
            }, {
                region: "North West",
                local_authority: "Salford",
                address_count: 149774,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.175089331291476
            }, {
                region: "North West",
                local_authority: "Sefton",
                address_count: 120872,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.892669261195872
            }, {
                region: "North West",
                local_authority: "South Ribble",
                address_count: 41279,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 10.007451714901416
            }, {
                region: "North West",
                local_authority: "St. Helens",
                address_count: 69033,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.932562527212037
            }, {
                region: "North West",
                local_authority: "Stockport",
                address_count: 110700,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 12.246743709658718
            }, {
                region: "North West",
                local_authority: "Tameside",
                address_count: 99850,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 14.187586722694038
            }, {
                region: "North West",
                local_authority: "Trafford",
                address_count: 88999,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 11.819448541003448
            }, {
                region: "North West",
                local_authority: "Warrington",
                address_count: 82445,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 10.672377058931682
            }, {
                region: "North West",
                local_authority: "West Lancashire",
                address_count: 45458,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.106678510861666
            }, {
                region: "North West",
                local_authority: "Westmorland and Furness",
                address_count: 101422,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 14.797582910153478
            }, {
                region: "North West",
                local_authority: "Wigan",
                address_count: 127166,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.638012828850538
            }, {
                region: "North West",
                local_authority: "Wirral",
                address_count: 138407,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 15.335694845248026
            }, {
                region: "North West",
                local_authority: "Wyre",
                address_count: 47451,
                regional_poverty_rate: 14.6,
                local_authority_poverty_rate: 13.49354832487897
            }, {
                region: "South East",
                local_authority: "Adur",
                address_count: 24222,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.207450383839813
            }, {
                region: "South East",
                local_authority: "Arun",
                address_count: 72120,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.42476013116878
            }, {
                region: "South East",
                local_authority: "Ashford",
                address_count: 52165,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.61513687600644
            }, {
                region: "South East",
                local_authority: "Basingstoke and Deane",
                address_count: 73068,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.255910845282826
            }, {
                region: "South East",
                local_authority: "Bracknell Forest",
                address_count: 49433,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 5.196651090342679
            }, {
                region: "South East",
                local_authority: "Brighton and Hove",
                address_count: 142533,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 11.623626661930786
            }, {
                region: "South East",
                local_authority: "Buckinghamshire",
                address_count: 220523,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.53093228254005
            }, {
                region: "South East",
                local_authority: "Canterbury",
                address_count: 66394,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 10.331003763151832
            }, {
                region: "South East",
                local_authority: "Cherwell",
                address_count: 63924,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.263641636550217
            }, {
                region: "South East",
                local_authority: "Chichester",
                address_count: 54243,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.64457809499656
            }, {
                region: "South East",
                local_authority: "Crawley",
                address_count: 39694,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.620906313207385
            }, {
                region: "South East",
                local_authority: "Dartford",
                address_count: 43059,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.628026569530748
            }, {
                region: "South East",
                local_authority: "Dover",
                address_count: 51281,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 11.515492302322876
            }, {
                region: "South East",
                local_authority: "Eastbourne",
                address_count: 49008,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 10.105561277033985
            }, {
                region: "South East",
                local_authority: "East Hampshire",
                address_count: 48700,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.230797842663195
            }, {
                region: "South East",
                local_authority: "Eastleigh",
                address_count: 53860,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 5.936041605676006
            }, {
                region: "South East",
                local_authority: "Elmbridge",
                address_count: 56940,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.332733590869803
            }, {
                region: "South East",
                local_authority: "Epsom and Ewell",
                address_count: 28452,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.508447002878238
            }, {
                region: "South East",
                local_authority: "Fareham",
                address_count: 39845,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.04411112455143
            }, {
                region: "South East",
                local_authority: "Folkestone and Hythe",
                address_count: 53124,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 11.451001075116132
            }, {
                region: "South East",
                local_authority: "Gosport",
                address_count: 35994,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.202219616611677
            }, {
                region: "South East",
                local_authority: "Gravesham",
                address_count: 39108,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 10.195986386574345
            }, {
                region: "South East",
                local_authority: "Guildford",
                address_count: 55990,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.057404837604736
            }, {
                region: "South East",
                local_authority: "Hart",
                address_count: 36791,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 5.71820901378059
            }, {
                region: "South East",
                local_authority: "Hastings",
                address_count: 50198,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 13.899052557609828
            }, {
                region: "South East",
                local_authority: "Havant",
                address_count: 48731,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.690055804592443
            }, {
                region: "South East",
                local_authority: "Horsham",
                address_count: 57496,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.189337021784917
            }, {
                region: "South East",
                local_authority: "Isle of Wight",
                address_count: 66685,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 11.593610417139828
            }, {
                region: "South East",
                local_authority: "Lewes",
                address_count: 41769,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.03115816864443
            }, {
                region: "South East",
                local_authority: "Maidstone",
                address_count: 72977,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.066293775659219
            }, {
                region: "South East",
                local_authority: "Medway",
                address_count: 110527,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.463819462149118
            }, {
                region: "South East",
                local_authority: "Mid Sussex",
                address_count: 60510,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.162871340774339
            }, {
                region: "South East",
                local_authority: "Milton Keynes",
                address_count: 121102,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.295099576399657
            }, {
                region: "South East",
                local_authority: "Mole Valley",
                address_count: 33059,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.911960308244484
            }, {
                region: "South East",
                local_authority: "New Forest",
                address_count: 68634,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.063314005634087
            }, {
                region: "South East",
                local_authority: "Oxford",
                address_count: 66567,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.96897988123726
            }, {
                region: "South East",
                local_authority: "Portsmouth",
                address_count: 96427,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 11.839696132282533
            }, {
                region: "South East",
                local_authority: "Reading",
                address_count: 75279,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.425873356120734
            }, {
                region: "South East",
                local_authority: "Reigate and Banstead",
                address_count: 61537,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.81542844045709
            }, {
                region: "South East",
                local_authority: "Rother",
                address_count: 43831,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 11.181468979164242
            }, {
                region: "South East",
                local_authority: "Runnymede",
                address_count: 35555,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.168549429550946
            }, {
                region: "South East",
                local_authority: "Rushmoor",
                address_count: 40939,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.663346613545816
            }, {
                region: "South East",
                local_authority: "Sevenoaks",
                address_count: 40948,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.361672334466894
            }, {
                region: "South East",
                local_authority: "Slough",
                address_count: 54498,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.432799013563502
            }, {
                region: "South East",
                local_authority: "Southampton",
                address_count: 115784,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 10.438129523955421
            }, {
                region: "South East",
                local_authority: "South Oxfordshire",
                address_count: 56758,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.655639697090474
            }, {
                region: "South East",
                local_authority: "Spelthorne",
                address_count: 39385,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.656662524326479
            }, {
                region: "South East",
                local_authority: "Surrey Heath",
                address_count: 33186,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 5.919978225367447
            }, {
                region: "South East",
                local_authority: "Swale",
                address_count: 58190,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.78968858355747
            }, {
                region: "South East",
                local_authority: "Tandridge",
                address_count: 31660,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.839309282886053
            }, {
                region: "South East",
                local_authority: "Test Valley",
                address_count: 50092,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.256808293495193
            }, {
                region: "South East",
                local_authority: "Thanet",
                address_count: 74294,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 13.262603651038877
            }, {
                region: "South East",
                local_authority: "Tonbridge and Malling",
                address_count: 47538,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.348932511296903
            }, {
                region: "South East",
                local_authority: "Tunbridge Wells",
                address_count: 48936,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.476978095663835
            }, {
                region: "South East",
                local_authority: "Vale of White Horse",
                address_count: 55688,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.0037849081051595
            }, {
                region: "South East",
                local_authority: "Waverley",
                address_count: 48622,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.344242061562628
            }, {
                region: "South East",
                local_authority: "Wealden",
                address_count: 62752,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.115724445082968
            }, {
                region: "South East",
                local_authority: "West Berkshire",
                address_count: 63069,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.692554349424881
            }, {
                region: "South East",
                local_authority: "West Oxfordshire",
                address_count: 47146,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.719964862822006
            }, {
                region: "South East",
                local_authority: "Winchester",
                address_count: 51381,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 8.11164413432185
            }, {
                region: "South East",
                local_authority: "Windsor and Maidenhead",
                address_count: 60658,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 7.039850640571686
            }, {
                region: "South East",
                local_authority: "Woking",
                address_count: 43941,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 6.66903073286052
            }, {
                region: "South East",
                local_authority: "Wokingham",
                address_count: 63533,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 5.277246653919694
            }, {
                region: "South East",
                local_authority: "Worthing",
                address_count: 48916,
                regional_poverty_rate: 8.4,
                local_authority_poverty_rate: 9.131037212984957
            }, {
                region: "South West",
                local_authority: "Bath and North East Somerset",
                address_count: 77205,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.145306003355461
            }, {
                region: "South West",
                local_authority: "Bournemouth, Christchurch and Poole",
                address_count: 182645,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.293038766152563
            }, {
                region: "South West",
                local_authority: "Bristol, City of",
                address_count: 203108,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.827025910078268
            }, {
                region: "South West",
                local_authority: "Cheltenham",
                address_count: 54345,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.381158971180664
            }, {
                region: "South West",
                local_authority: "Cornwall",
                address_count: 267995,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 13.980952234123329
            }, {
                region: "South West",
                local_authority: "Cotswold",
                address_count: 41568,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.592909216119303
            }, {
                region: "South West",
                local_authority: "Dorset",
                address_count: 158395,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.528422108490727
            }, {
                region: "South West",
                local_authority: "East Devon",
                address_count: 67646,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.113279046558382
            }, {
                region: "South West",
                local_authority: "Exeter",
                address_count: 52939,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.630422824452676
            }, {
                region: "South West",
                local_authority: "Forest of Dean",
                address_count: 33380,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 14.24864416015777
            }, {
                region: "South West",
                local_authority: "Gloucester",
                address_count: 54672,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.48481155888241
            }, {
                region: "South West",
                local_authority: "Isles of Scilly",
                address_count: 962,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 16.260162601626014
            }, {
                region: "South West",
                local_authority: "Mid Devon",
                address_count: 33427,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 13.659633251171483
            }, {
                region: "South West",
                local_authority: "North Devon",
                address_count: 45170,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 14.353104250039125
            }, {
                region: "South West",
                local_authority: "North Somerset",
                address_count: 93797,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.345530319241076
            }, {
                region: "South West",
                local_authority: "Plymouth",
                address_count: 121816,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 13.48811358411439
            }, {
                region: "South West",
                local_authority: "Somerset",
                address_count: 249958,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.297456270611152
            }, {
                region: "South West",
                local_authority: "South Gloucestershire",
                address_count: 105578,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 8.407513270722744
            }, {
                region: "South West",
                local_authority: "South Hams",
                address_count: 42802,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 13.257389767259156
            }, {
                region: "South West",
                local_authority: "Stroud",
                address_count: 48042,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 11.429836374033831
            }, {
                region: "South West",
                local_authority: "Swindon",
                address_count: 90522,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 8.9196737121273
            }, {
                region: "South West",
                local_authority: "Teignbridge",
                address_count: 57832,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 12.091086616206445
            }, {
                region: "South West",
                local_authority: "Tewkesbury",
                address_count: 37886,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 8.545116235249782
            }, {
                region: "South West",
                local_authority: "Torbay",
                address_count: 64120,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 14.17017691659646
            }, {
                region: "South West",
                local_authority: "Torridge",
                address_count: 32802,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 14.574808893963903
            }, {
                region: "South West",
                local_authority: "West Devon",
                address_count: 24386,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 14.356377799415773
            }, {
                region: "South West",
                local_authority: "Wiltshire",
                address_count: 202338,
                regional_poverty_rate: 11.9,
                local_authority_poverty_rate: 10.403238096945682
            }, {
                region: "West Midlands",
                local_authority: "Birmingham",
                address_count: 456043,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 23.189636277642553
            }, {
                region: "West Midlands",
                local_authority: "Bromsgrove",
                address_count: 34296,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 12.954669320632211
            }, {
                region: "West Midlands",
                local_authority: "Cannock Chase",
                address_count: 39016,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 15.72813786586875
            }, {
                region: "West Midlands",
                local_authority: "Coventry",
                address_count: 145251,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 20.773706786684436
            }, {
                region: "West Midlands",
                local_authority: "Dudley",
                address_count: 108437,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 17.37815317886086
            }, {
                region: "West Midlands",
                local_authority: "East Staffordshire",
                address_count: 50756,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 18.073483707361717
            }, {
                region: "West Midlands",
                local_authority: "Herefordshire, County of",
                address_count: 78147,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 19.230179420334302
            }, {
                region: "West Midlands",
                local_authority: "Lichfield",
                address_count: 40095,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 13.325620755404161
            }, {
                region: "West Midlands",
                local_authority: "Malvern Hills",
                address_count: 33635,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 18.523501219204576
            }, {
                region: "West Midlands",
                local_authority: "Newcastle-under-Lyme",
                address_count: 45593,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 17.97360532280471
            }, {
                region: "West Midlands",
                local_authority: "North Warwickshire",
                address_count: 26561,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 16.298841616777075
            }, {
                region: "West Midlands",
                local_authority: "Nuneaton and Bedworth",
                address_count: 51791,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 15.947687576663268
            }, {
                region: "West Midlands",
                local_authority: "Redditch",
                address_count: 32150,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 13.58993656596065
            }, {
                region: "West Midlands",
                local_authority: "Rugby",
                address_count: 44357,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 14.374532146718789
            }, {
                region: "West Midlands",
                local_authority: "Sandwell",
                address_count: 117492,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 20.562003573519917
            }, {
                region: "West Midlands",
                local_authority: "Shropshire",
                address_count: 131569,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 18.040315512708148
            }, {
                region: "West Midlands",
                local_authority: "Solihull",
                address_count: 80304,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 12.7001638448935
            }, {
                region: "West Midlands",
                local_authority: "South Staffordshire",
                address_count: 35851,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 13.725822511281063
            }, {
                region: "West Midlands",
                local_authority: "Stafford",
                address_count: 53366,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 15.274610723825658
            }, {
                region: "West Midlands",
                local_authority: "Staffordshire Moorlands",
                address_count: 35248,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 18.018142787895574
            }, {
                region: "West Midlands",
                local_authority: "Stoke-on-Trent",
                address_count: 108033,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 22.909386859635
            }, {
                region: "West Midlands",
                local_authority: "Stratford-on-Avon",
                address_count: 68370,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 15.56578947368421
            }, {
                region: "West Midlands",
                local_authority: "Tamworth",
                address_count: 28029,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 13.564106373495765
            }, {
                region: "West Midlands",
                local_authority: "Telford and Wrekin",
                address_count: 75395,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 14.927508462668454
            }, {
                region: "West Midlands",
                local_authority: "Walsall",
                address_count: 109883,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 19.694409115458996
            }, {
                region: "West Midlands",
                local_authority: "Warwick",
                address_count: 66400,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 13.914074813901589
            }, {
                region: "West Midlands",
                local_authority: "Wolverhampton",
                address_count: 101082,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 21.773234200743495
            }, {
                region: "West Midlands",
                local_authority: "Worcester",
                address_count: 46048,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 15.006010272101411
            }, {
                region: "West Midlands",
                local_authority: "Wychavon",
                address_count: 53886,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 15.630965366784839
            }, {
                region: "West Midlands",
                local_authority: "Wyre Forest",
                address_count: 38801,
                regional_poverty_rate: 18.5,
                local_authority_poverty_rate: 16.532901833872707
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Barnsley",
                address_count: 101990,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 17.263928851687158
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Bradford",
                address_count: 239463,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 19.162563176727758
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Calderdale",
                address_count: 93510,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 17.14593314313398
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Doncaster",
                address_count: 131566,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 17.572998956897244
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "East Riding of Yorkshire",
                address_count: 141638,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 14.36568478629851
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Kingston upon Hull, City of",
                address_count: 123737,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 19.870492314696932
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Kirklees",
                address_count: 164393,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 17.337037968867936
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Leeds",
                address_count: 368612,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 15.759341730864634
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "North East Lincolnshire",
                address_count: 67102,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 18.392454092011036
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "North Lincolnshire",
                address_count: 65549,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 15.67706392718369
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "North Yorkshire",
                address_count: 271658,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 15.483795450595366
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Rotherham",
                address_count: 100454,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 16.088134029338143
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Sheffield",
                address_count: 221665,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 16.38092282399913
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "Wakefield",
                address_count: 179929,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 15.072565245066835
            }, {
                region: "Yorkshire and The Humber",
                local_authority: "York",
                address_count: 77897,
                regional_poverty_rate: 16.5,
                local_authority_poverty_rate: 13.4901201526109
            }]
        };
        var Dt = {
            line: "#e5e6e7",
            regions: {
                "East Midlands": "#ef4444",
                "East of England": "#f97316",
                London: "#84cc16",
                "North East": "#10b981",
                "North West": "#0ea5e9",
                "South East": "#8b5cf6",
                "South West": "#d946ef",
                "West Midlands": "#15803d",
                "Yorkshire and The Humber": "#2563eb"
            }
        }
            , le = {
            width: {
                default: 630,
                mobile: 400
            },
            height: {
                default: 630,
                mobile: 400
            },
            margin: {
                top: 24,
                right: 24,
                bottom: 24,
                left: 24
            }
        }
            , Iy = new Intl.NumberFormat("uk-GB");
        var se = ()=>window.innerWidth < 1024;
        var is = ()=>{
                let t = {
                    hoveredAuthority: {},
                    mousePosition: {
                        x: 0,
                        y: 0
                    },
                    showTooltip: !1,
                    selectedAuthority: {},
                    selectedAuthorityPosition: {
                        x: 0,
                        y: 0
                    }
                };
                return {
                    hoveredAuthority: {
                        value: t.hoveredAuthority,
                        set: e=>{
                            t.hoveredAuthority = e
                        }
                    },
                    mousePosition: {
                        value: t.mousePosition,
                        set: e=>{
                            t.mousePosition = e
                        }
                    },
                    showTooltip: {
                        value: t.showTooltip,
                        set: e=>{
                            t.showTooltip = e
                        }
                    },
                    selectedAuthority: {
                        value: t.selectedAuthority,
                        set: e=>{
                            t.selectedAuthority = e
                        }
                    },
                    selectedAuthorityPosition: {
                        value: t.selectedAuthorityPosition,
                        set: e=>{
                            t.selectedAuthorityPosition = e
                        }
                    }
                }
            }
            , xa = (t,e)=>{
                t.setAttribute("data-chart-instance", (e + 1).toString());
                let r = t.querySelector(A.canvas);
                if (!r) {
                    console.error("canvas not found");
                    return
                }
                let o = !0
                    , n = is()
                    , a = o ? {
                    top: 24,
                    right: 24,
                    bottom: 24,
                    left: 170
                } : {
                    top: 24,
                    right: 24,
                    bottom: 24,
                    left: 24
                }
                    , i = se() ? le.width.mobile : r.clientWidth || le.width.default
                    , l = se() ? le.height.mobile : le.height.default
                    , u = Ir;
                function s(g, _) {
                    _ ? $t(".circ").transition().style("opacity", v=>v.region === g ? 1 : .1) : $t(".circ").transition().style("opacity", 1)
                }
                function c(g, _) {
                    window.matchMedia("(hover: hover) and (pointer: fine)").matches && s(_, g.type === "mouseenter")
                }
                let f = (()=>{
                        let g = document.createElement("div");
                        g.style.position = "fixed",
                            g.style.pointerEvents = "none",
                            g.style.left = "200px",
                            g.style.top = "200px",
                            g.style.zIndex = "1000",
                            g.style.color = "white",
                            g.style.backgroundColor = "#282F26",
                            g.style.marginTop = "3px",
                            g.style.padding = "6px",
                            g.style.paddingLeft = "12px",
                            g.style.borderRadius = "12px",
                            g.style.transition = "opacity",
                            g.style.transform = "translateX(-50%)",
                            g.style.opacity = "0";
                        let _ = document.createElement("p");
                        _.setAttribute("id", "tooltip-title"),
                            _.style.fontWeight = "bold",
                            _.style.paddingBottom = "6px",
                            _.textContent = "Birmingham";
                        let v = document.createElement("ul");
                        return v.style.fontSize = "14px",
                            v.style.marginTop = "1px",
                            v.style.paddingLeft = "0px",
                            v.style.whiteSpace = "nowrap",
                            [{
                                label: "Region",
                                id: "region",
                                value: "West Midlands"
                            }, {
                                label: "Address count",
                                id: "address-count",
                                value: "440 648"
                            }, {
                                label: "Local authority fuel poverty rate",
                                id: "local-authority-fuel-poverty-rate",
                                value: "23.19%"
                            }, {
                                label: "Regional fuel poverty rate",
                                id: "regional-fuel-poverty-rate",
                                value: "18.50%"
                            }].forEach(H=>{
                                    let p = document.createElement("li");
                                    p.setAttribute("id", "tooltip-item"),
                                        p.style.display = "flex",
                                        p.style.gap = "2px",
                                        p.innerHTML = `<span style="opacity:0.7;font-weight="bold";>${H.label}</span><span style="padding-left:6px;" id="${H.id}">${H.value}</span>`,
                                        v.appendChild(p)
                                }
                            ),
                            g.appendChild(_),
                            g.appendChild(v),
                            g.addEventListener("click", ()=>{
                                    g.style.opacity = "0"
                                }
                            ),
                            t.appendChild(g),
                            g
                    }
                )()
                    , E = (()=>{
                        let g = document.createElement("div");
                        g.textContent = "Updating data...";
                        let _ = document.createElement("img");
                        _.src = "https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif",
                            _.style.width = "1.5rem",
                            _.style.marginRight = "0.5rem",
                            _.style.backgroundColor = "white",
                            _.style.borderRadius = "100%";
                        let aa = document.createElement("div");
                        aa.setAttribute("class", "animation-spinner")
                        aa.innerHTML = `<span></span><span></span><span></span><span></span>`
                        let v = document.createElement("div");
                        return v.setAttribute("data-chart-element", "loader"),
                            v.style.backgroundColor = "#3CA91E",
                            v.style.color = "white",
                            v.style.paddingTop = "0.50rem",
                            v.style.paddingBottom = "0.50rem",
                            v.style.paddingLeft = "4rem",
                            v.style.paddingRight = "2rem",
                            v.style.borderRadius = "10px",
                            v.style.display = "flex",
                            v.style.opacity = "0",
                            v.style.position = "absolute",
                            v.style.top = "80px",
                            v.style.right = "10px",
                            v.style.zIndex = 10000,
                            // v.appendChild(_),
                            v.appendChild(aa),
                            v.appendChild(g),
                            t.style.position = "relative",
                        t == null || t.appendChild(v),
                            {
                                loader: v,
                                show: ()=>{
                                    v.style.opacity = "1"
                                }
                                ,
                                hide: ()=>{
                                    v.style.opacity = "0"
                                }
                            }
                    }
                )()
                    , m = rr("svg")
                    , b = [];
                function S(g) {
                    n.hoveredAuthority.set(g),
                    n.showTooltip.value || n.showTooltip.set(!0),
                        m.selectAll(".circ").attr("stroke", "none");
                    let _ = m.selectAll(".circ").filter(z=>z.local_authority === g.local_authority).attr("stroke", "black").attr("stroke-width", 2)
                        , [v] = [+_.attr("r")]
                        , N = _.node()
                        , H = N == null ? void 0 : N.getBoundingClientRect()
                        , p = f.querySelector("#tooltip-title");
                    p && (p.textContent = g.local_authority || "");
                    let w = f.querySelector("#region");
                    w && (w.textContent = g.region || "");
                    let x = f.querySelector("#address-count");
                    x && (x.textContent = g.address_count.toLocaleString().replace(",", " ") || "");
                    let y = f.querySelector("#local-authority-fuel-poverty-rate");
                    y && (y.textContent = parseFloat(g.local_authority_poverty_rate.toFixed(2)) + "%" || "");
                    let M = f.querySelector("#regional-fuel-poverty-rate");
                    M && (M.textContent = parseFloat(g.regional_poverty_rate.toFixed(2)) + "%" || ""),
                        f.style.left = `${H.x}px`,
                        f.style.top = `${H.y + v}px`,
                        f.style.opacity = "1"
                }
                function W(g, _) {
                    n.hoveredAuthority.set(_),
                    n.showTooltip.value || n.showTooltip.set(!0),
                        Mt(g.target).style("stroke", "black");
                    let {clientX: v, clientY: N} = g
                        , H = f.querySelector("#tooltip-title");
                    H && (H.textContent = _.local_authority || "");
                    let p = f.querySelector("#region");
                    p && (p.textContent = _.region || "");
                    let w = f.querySelector("#address-count");
                    w && (w.textContent = _.address_count.toLocaleString().replace(",", " ") || "");
                    let x = f.querySelector("#local-authority-fuel-poverty-rate");
                    x && (x.textContent = parseFloat(_.local_authority_poverty_rate).toFixed(2) + "%" || "");
                    let y = f.querySelector("#regional-fuel-poverty-rate");
                    y && (y.textContent = parseFloat(_.regional_poverty_rate).toFixed(2) + "%" || ""),
                        f.style.left = v + "px",
                        f.style.top = N + 10 + "px",
                        f.style.opacity = "1"
                }
                function C(g) {
                    n.showTooltip.set(!1),
                        f.style.opacity = "0",
                        Mt(g.target).style("stroke", "none")
                }
                function R() {
                    $t(".circ").attr("cx", g=>g.x).attr("cy", g=>g.y)
                }
                let O = (()=>{
                        var p;
                        let {datasets: g} = u
                            , _ = []
                            , v = t.querySelector('[data-chart-element="search"]')
                            , N = document.createElement("div");
                        if (!v || !N)
                            return;
                        (p = v.querySelector("input")) == null || p.setAttribute("autocomplete", "off"),
                            N.style.display = "none",
                            N.style.backgroundColor = "white",
                            N.style.width = "100%",
                            N.style.height = "auto",
                            N.style.maxHeight = "200px",
                            N.style.paddingTop = "6px",
                            N.style.paddingBottom = "6px",
                            N.style.border = "1px solid #d6d6d6",
                            N.style.borderRadius = "6px",
                            N.style.position = "absolute",
                            N.style.marginTop = "4px";
                        let H = document.createElement("div");
                        return N.style.overflowY = "auto",
                            v.addEventListener("input", w=>{
                                    let x = w.target
                                        , y = x.value.toLowerCase();
                                    if (y === "") {
                                        N.style.display = "none";
                                        return
                                    }
                                    if (N.style.display = "block",
                                        _ = g.filter(M=>M.local_authority.toLowerCase().includes(y)),
                                        H.innerHTML = "",
                                        _.forEach(M=>{
                                                let z = document.createElement("div");
                                                z.style.paddingLeft = "10px",
                                                    z.style.paddingTop = "4px",
                                                    z.style.paddingRight = "10px",
                                                    z.style.paddingBottom = "4px",
                                                    z.style.cursor = "pointer",
                                                    z.textContent = M.local_authority,
                                                    z.addEventListener("mouseover", ()=>{
                                                            z.style.backgroundColor = "#d5ffd1",
                                                                z.style.color = "#0da100"
                                                        }
                                                    ),
                                                    z.addEventListener("mouseout", ()=>{
                                                            z.style.backgroundColor = "white",
                                                                z.style.color = "black"
                                                        }
                                                    ),
                                                    z.addEventListener("click", ()=>{
                                                            S(M),
                                                                x.value = "",
                                                                N.style.display = "none"
                                                        }
                                                    ),
                                                    H.appendChild(z)
                                            }
                                        ),
                                    _.length === 0) {
                                        let M = document.createElement("div");
                                        M.style.paddingLeft = "10px",
                                            M.style.paddingTop = "4px",
                                            M.style.paddingRight = "10px",
                                            M.style.paddingBottom = "4px",
                                            M.textContent = "No results",
                                            M.style.fontStyle = "italic",
                                            H.appendChild(M)
                                    }
                                }
                            ),
                            document.addEventListener("click", w=>{
                                    if (w.target !== v) {
                                        N.style.display = "none";
                                        let y = v.querySelector("input");
                                        y && (y.value = "")
                                    }
                                }
                            ),
                            N.appendChild(H),
                            v.appendChild(N),
                            {
                                datasets: {
                                    value: g,
                                    set: w=>{
                                        g = w
                                    }
                                },
                                searchField: v,
                                popup: N,
                                popupContent: H
                            }
                    }
                )();
                setTimeout(()=>{
                        F()
                        console.log("Chart file loaded: calling API's now");
                        if(window.location.pathname !== '/profile-creation') {
                            document.querySelector('a[wized="profile_filters_reset"]').click();
                        } else {
                            document.querySelector('.filters_submit-button').click(); // TODO: instead of triggering click event listen an event from wized that filters are loaded
                            q(document.querySelector('a[wized="chart_section_toggle"]'), "click", (e)=>{
                                I();
                            });
                        }
                    }
                    , 5e3);
                function F() {
                    let g = t.querySelector(A["chart-toggle"]);
                    g && q(g, "change", ()=>{
                            var w;
                            switch ((w = g.firstChild) == null ? void 0 : w.textContent) {
                                case "By region":
                                    k(!0);
                                    break;
                                case "All":
                                    k(!1);
                                    break;
                                default:
                                    break
                            }
                        }
                    ),
                        document.addEventListener("visibilitychange", function() {
                            document.visibilityState === "visible" && I()
                        }),
                        window.addEventListener("resize", function() {
                            I()
                        });
                    let _ = {
                            geography: {
                                element: t.querySelector(A["geography-filter-wrapper"]),
                                regionField: t.querySelector(A["region-filter"]),
                                localAuthorityField: t.querySelector(A["local-authority-filter"]),
                                fuelPovertyRateField: t.querySelector(A["fuel-poverty-rate-filter"])
                            },
                            energyEfficiency: {
                                element: t.querySelector(A["energy-efficiency-filter-wrapper"]),
                                currentRatingField: t.querySelector(A["current-rating-filter"]),
                                hotWaterEfficiencyField: t.querySelector(A["hot-water-efficiency-filter"]),
                                windowsEfficiencyField: t.querySelector(A["windows-efficiency-filter"]),
                                wallsEfficiencyField: t.querySelector(A["walls-efficiency-filter"]),
                                roofEfficiencyField: t.querySelector(A["roof-efficiency-filter"]),
                                mainHeatEfficiencyField: t.querySelector(A["main-heat-efficiency-filter"]),
                                lightingEfficiencyField: t.querySelector(A["lighting-efficiency-filter"])
                            },
                            energyCost: {
                                element: t.querySelector(A["energy-cost-filter-wrapper"]),
                                currentConsumptionField: t.querySelector(A["current-consumption-filter"])
                            },
                            householdIncome: {
                                element: t.querySelector(A["household-income-filter-wrapper"]),
                                tenureField: t.querySelector(A["tenure-filter"]),
                                mainGasField: t.querySelector(A["main-gas-filter"]),
                                incomeDeprivationDomainField: t.querySelector(A["income-deprivation-domain-filter"]),
                                incomeDeprivationChildrenDomainField: t.querySelector(A["income-deprivation-children-filter"]),
                                incomeDeprivationElderlyDomainField: t.querySelector(A["income-deprivation-elderly-filter"])
                            }
                        }
                        , v = ze()
                        , N = async()=>{
                            E == null || E.show();
                            // let p = await va.findAddressCount(v.value);
                            // G(p),
                            E == null || E.hide()
                        }, NN = async(mode)=>{
                            E == null || E.show();
                            let p = await va.findAddressCount(v.value, mode);
                            G(p);
                            E == null || E.hide()
                        }
                        , H = async()=>{
                            E == null || E.show(),
                                G(Ir),
                            E == null || E.hide()
                        }
                    ;
                    return [q(t.querySelector(A["filters-reset-button"]), "click", async()=>{
                            // v.reset();
                            await NN('reset');
                        }
                    ),q(t.querySelector(A["filters-submit-button"]), "click", async()=>{
                        // Set Region
                        var w, x;
                        let p1 = (w = _.geography.regionField) == null ? void 0 : w.querySelectorAll("input");
                        p1 == null || p1.forEach(x=>{
                            let y = v.value.Regions;
                            x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                            v.setValue("Regions", y)
                        });
                        // Set Authorities
                        let p2 = (w = _.geography.localAuthorityField) == null ? void 0 : w.querySelectorAll("input");
                        let tempy =  [];
                        p2 == null || p2.forEach((x, idx) => {
                            if (x.checked) { tempy.push(x.value); }
                            v.setValue("LocalAuthorityLabels", tempy);
                            (p2.length == tempy.length && tempy != 0) ? v.setValue("la_select_status", true) : v.setValue("la_select_status", false)
                        });
                        // Set Poverty Rate
                        let {fuelPovertyRateField: p3} = _.geography;
                        if (p3) {
                            let y = (w = p3.querySelector('[name="fuel_poverty_rate_from"]')) == null ? void 0 : w.value
                                , M = (x = p3.querySelector('[name="fuel_poverty_rate_to"]')) == null ? void 0 : x.value;
                            v.setValue("FuelPovertyRateLower", Number(y != null ? y : 0));
                            v.setValue("FuelPovertyRateUpper", Number(M != null ? M : 100))
                        }
                        // set Energy Efficiency current Rating
                        let p4 = (w = _.energyEfficiency.currentRatingField) == null ? void 0 : w.querySelectorAll("input");
                        p4 == null || p4.forEach(x=>{
                                let y = v.value.CurrentEnergyRating;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("CurrentEnergyRating", y)
                            }
                        )
                        // set Energy Efficiency Hot Water Efficiency
                        let p5 = (w = _.energyEfficiency.hotWaterEfficiencyField) == null ? void 0 : w.querySelectorAll("input");
                        p5 == null || p5.forEach(x=>{
                                let y = v.value.HotWaterEnergyEfficiency;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("HotWaterEnergyEfficiency", (y.length == 0 ? null : y))
                            }
                        )
                        // set Energy Efficiency windows Efficiency
                        let p6 = (w = _.energyEfficiency.windowsEfficiencyField) == null ? void 0 : w.querySelectorAll("input");
                        p6 == null || p6.forEach(x=>{
                                let y = v.value.WindowsEnergyEfficiency;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("WindowsEnergyEfficiency", (y.length == 0 ? null : y))
                            }
                        )
                        // set Energy Efficiency walls Efficiency
                        let p7 = (w = _.energyEfficiency.wallsEfficiencyField) == null ? void 0 : w.querySelectorAll("input");
                        p7 == null || p7.forEach(x=>{
                                let y = v.value.WallsEnergyEfficiency;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("WallsEnergyEfficiency", (y.length == 0 ? null : y))
                            }
                        )
                        // set Energy Efficiency roof Efficiency
                        let p8 = (w = _.energyEfficiency.roofEfficiencyField) == null ? void 0 : w.querySelectorAll("input");
                        p8 == null || p8.forEach(x=>{
                                let y = v.value.RoofEnergyEfficiency;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("RoofEnergyEfficiency", (y.length == 0 ? null : y))
                            }
                        )
                        // lightening
                        // set Energy Efficiency roof Efficiency
                        let p18 = (w = _.energyEfficiency.lightingEfficiencyField) == null ? void 0 : w.querySelectorAll("input");
                        p18 == null || p18.forEach(x=>{
                                let y = v.value.LightingEnergyEfficiency;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("LightingEnergyEfficiency", (y.length == 0 ? null : y))
                            }
                        )
                        // set Energy Efficiency mainHeat Efficiency
                        let p9 = (w = _.energyEfficiency.mainHeatEfficiencyField) == null ? void 0 : w.querySelectorAll("input");
                        p9 == null || p9.forEach(x=>{
                            let y = v.value.HeatingEnergyEfficiency;
                            x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                            v.setValue("HeatingEnergyEfficiency", (y.length == 0 ? null : y))
                        })
                        // set Current Consumption
                        let {currentConsumptionField: p10} = _.energyCost;
                        if (p10) {
                            let y = (w = p10.querySelector('[name="current_heat_consumption_from"]')) == null ? void 0 : w.value
                                , M = (x = p10.querySelector('[name="current_heat_consumption_to"]')) == null ? void 0 : x.value;
                            v.setValue("CurrentEnergyConsumptionLower", Number(y != null ? y : 0));
                            v.setValue("CurrentEnergyConsumptionUpper", Number(M != null ? M : 100));
                        }
                        // set householdIncome tenureField
                        let p11 = (w = _.householdIncome.tenureField) == null ? void 0 : w.querySelectorAll("input");
                        p11 == null || p11.forEach(x=>{
                                let y = v.value.Tenure;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("Tenure", y)
                            }
                        )
                        // set householdIncome mainGasField
                        let p12 = (w = _.householdIncome.mainGasField) == null ? void 0 : w.querySelectorAll("input");
                        p12 == null || p12.forEach(x=>{
                                let y = v.value.MainsGasFlag;
                                x.checked ? y.push(x.value) : y = y.filter(M=>M !== x.value);
                                v.setValue("MainsGasFlag", y)
                            }
                        )
                        // set householdIncome incomeDeprivationDomain
                        let {incomeDeprivationDomainField: p13} = _.householdIncome;
                        if (p13) {
                            let y = (w = p13.querySelector('[name="income_deprivation_domain_from"]')) == null ? void 0 : w.value
                                , M = (x = p13.querySelector('[name="income_deprivation_domain_to"]')) == null ? void 0 : x.value;
                            v.setValue("IncomeDeprivationRangeLower", Number(y != null ? y : 0))
                            v.setValue("IncomeDeprivationRangeUpper", Number(M != null ? M : 100));
                            v.setValue("IncomeDeprivationIndex", "Income Deprivation Domain");
                        }
                        // set householdIncome incomeDeprivationChildrenDomain
                        let {incomeDeprivationChildrenDomainField: p14} = _.householdIncome;
                        if (p14) {
                            let y = (w = p14.querySelector('[name="income_deprivation_children_from"]')) == null ? void 0 : w.value
                                , M = (x = p14.querySelector('[name="income_deprivation_children_to"]')) == null ? void 0 : x.value;
                            v.setValue("IncomeDeprivationRangeChildLower", Number(y != null ? y : 0));
                            v.setValue("IncomeDeprivationRangeChildUpper", Number(M != null ? M : 100));
                            v.setValue("IncomeDeprivationIndex", "Income Deprivation Children Domain");
                        }
                        // set householdIncome incomeDeprivationElderly
                        let {incomeDeprivationElderlyDomainField: p15} = _.householdIncome;
                        if (p15) {
                            let y = (w = p15.querySelector('[name="income_deprivation_older_from"]')) == null ? void 0 : w.value
                                , M = (x = p15.querySelector('[name="income_deprivation_older_to"]')) == null ? void 0 : x.value;
                            v.setValue("IncomeDeprivationRangeElderLower", Number(y != null ? y : 0));
                            v.setValue("IncomeDeprivationRangeElderUpper", Number(M != null ? M : 100));
                            v.setValue("IncomeDeprivationIndex", "Income Deprivation Elderly Domain");
                        }
                        await NN('apply');
                    }), q(_.geography.regionField, "change", async()=>{
                            //await N()
                        }
                    ), q(_.geography.localAuthorityField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.geography.fuelPovertyRateField, "input", (0,
                        It.default)(async()=>{
                            //var w, x;
                            // await N()
                        }
                        , xt, Et, wt)), q(_.energyEfficiency.currentRatingField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.energyEfficiency.hotWaterEfficiencyField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.energyEfficiency.windowsEfficiencyField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.energyEfficiency.wallsEfficiencyField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.energyEfficiency.roofEfficiencyField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.energyEfficiency.mainHeatEfficiencyField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.energyEfficiency.lightingEfficiencyField, "change", async()=>{
                            //var w;
                        }
                    ), q(_.energyCost.currentConsumptionField, "input", (0,
                        It.default)(async()=>{
                            // var w, x;
                            // await N()
                        }
                        , xt, Et, wt)), q(_.householdIncome.tenureField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.householdIncome.mainGasField, "change", async()=>{
                            // var w;
                            // await N()
                        }
                    ), q(_.householdIncome.incomeDeprivationDomainField, "input", (0,
                        It.default)(async()=>{
                            // var w, x;
                            // await N()
                        }
                        , xt, Et, wt)), q(_.householdIncome.incomeDeprivationChildrenDomainField, "input", (0,
                        It.default)(async()=>{
                            // var w, x;
                            // await N()
                        }
                        , xt, Et, wt)), q(_.householdIncome.incomeDeprivationElderlyDomainField, "input", (0,
                        It.default)(async()=>{
                            // var w, x;
                            // await N()
                        }
                        , xt, Et, wt))]
                }
                function I(g=u) {
                    if (!r) {
                        console.error("canvas not found");
                        return
                    }
                    if (u = g,
                        u.error)
                        return;
                    let {datasets: _, total_address_count: v} = u;
                    B(v),
                    u === u && (r.innerHTML = ""),
                        b = Array.from(new Set(_.map(T=>T.region))),
                    O == null || O.datasets.set(_),
                        (()=>{
                                var yt;
                                let T = document.createElement("div");
                                T.style.display = "flex",
                                    T.style.justifyContent = "center",
                                    T.style.alignItems = "center",
                                    T.style.gap = "0.75rem",
                                (yt = t.querySelector(A.canvas)) == null || yt.appendChild(T),
                                b.length && b.forEach(gt=>{
                                        let j = document.createElement("div");
                                        j.style.display = "flex",
                                            j.style.alignItems = "center",
                                            j.style.cursor = "pointer",
                                            j.addEventListener("mouseenter", Ye=>{
                                                    j.style.color = "#2D8614",
                                                        c(Ye, gt)
                                                }
                                            ),
                                            j.addEventListener("mouseleave", Ye=>{
                                                    j.style.color = "inherit",
                                                        c(Ye, gt)
                                                }
                                            ),
                                            T.append(j);
                                        let vt = document.createElement("div");
                                        vt.style.width = "0.75rem",
                                            vt.style.height = "0.75rem",
                                            vt.style.borderRadius = "1rem",
                                            vt.style.marginRight = "0.3rem",
                                            vt.style.backgroundColor = Dt.regions[gt],
                                            j.appendChild(vt);
                                        let Ve = document.createElement("div");
                                        Ve.style.fontSize = "0.85rem",
                                            Ve.textContent = gt,
                                            j.appendChild(Ve)
                                    }
                                )
                            }
                        )(),
                        r.appendChild(m.node()),
                        m.attr("width", i),
                        m.attr("height", l),
                        m.selectAll("*").remove();
                    let H = Ht().domain(Rt(_.map(T=>+T.local_authority_poverty_rate)).map((T,yt)=>T ? yt === 0 ? T * .7 : T * 1.2 : 0)).range([a.left, i - a.right])
                        , p = ie().domain(o ? b.length ? b : ["No regions"] : ["All"]).range([l - a.bottom, a.top])
                        , w = Je(H)
                        , x = je(p);
                    m.append("g").attr("class", "x-axis").attr("transform", `translate(0, ${l - a.bottom})`).call(w),
                        m.selectAll(".x-axis .tick line").attr("y2", `-${l - a.top - a.bottom}`).attr("stroke", Dt.line),
                        m.append("g").style("font-size", "0.75rem").attr("class", "y-axis").attr("transform", `translate(${a.left}, 0)`).call(x),
                        m.selectAll(".y-axis .tick line").attr("x2", `${i - a.right - a.left}`).attr("stroke", Dt.line),
                        m.selectAll(".domain").attr("stroke", Dt.line);
                    let y = Ht().domain(Rt(_, T=>+T.address_count)).range(se() ? [1, 15] : [2, 20]);
                    m.selectAll(".circ").data(_).enter().append("circle").attr("class", "circ").attr("fill", T=>Dt.regions[T.region]).attr("r", T=>y(T.address_count)).attr("cx", T=>H(T.local_authority_poverty_rate)).attr("cy", T=>p(o ? T.region : "All")).on("mouseover", W).on("mousemove", T=>{
                            let {clientX: yt, clientY: gt} = T;
                            f.style.left = yt + "px",
                                f.style.top = gt + 10 + "px"
                        }
                    ).on("mouseleave", C);
                    let M = yr(_).force("x", gr(T=>H(T.local_authority_poverty_rate))).force("y", vr(T=>p(o ? T.region : "All") + p.bandwidth() / 2)).force("collide", pr(T=>y(T.address_count) + (se() ? .75 : 1.5))).on("tick", R);
                    function z() {
                        let T = document.createElement("div");
                        T.textContent = "Fuel poverty rate (%, Local authority-level)",
                            T.style.textAlign = "center",
                            T.style.marginTop = "0.5rem",
                            T.style.fontSize = "0.75rem",
                        r == null || r.appendChild(T)
                    }
                    return z(),
                        setTimeout(()=>{
                                M.alphaDecay(.1)
                            }
                            , 1e3),
                        {
                            canvas: r
                        }
                }
                let G = g=>{
                        u = g,
                            I(u)
                    }
                    , B = g=>{
                        let _ = t.querySelector(A["addresses-count-dummy"]);
                        !_ || !g || (_.textContent = `${g.toLocaleString().replace(/,/g, " ")}`)
                    }
                    , k = g=>{
                        o = g != null ? g : !0,
                            I()
                    }
                ;
                return {
                    build: I,
                    update: G,
                    state: n,
                    loader: E,
                    toggleGroupMode: k
                }
            }
        ;
        window.Webflow || (window.Webflow = []);
        window.Webflow.push(()=>{
            document.querySelectorAll(A.wrapper).forEach((e,r)=>{
                    let o = xa(e, r);
                    o == null || o.build()
                }
            );
        });
    }
)();
