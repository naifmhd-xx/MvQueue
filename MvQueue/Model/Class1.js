(function(n) {

    function g(n, t, i) {
        switch (arguments.length) {
        case 2:
            return null != n ? n : t;
        case 3:
            return null != n ? n : null != t ? t : i;
        default:
            throw new Error("Implement me");
        }
    }

    function p(n, t) { return gu.call(n, t); }

    function st() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 }; }

    function ni(n) { t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + n); }

    function f(n, t) {
        var i = !0;
        return w(function() { return i && (ni(n), i = !1), t.apply(this, arguments); }, t);
    }

    function br(n, t) { pr[n] || (ni(t), pr[n] = !0); }

    function ti(n, t) { return function(i) { return r(n.call(this, i), t); }; }

    function kr(n, t) { return function(i) { return this.localeData().ordinal(n.call(this, i), t); }; }

    function ii() {}

    function rt(n, t) {
        t !== !1 && ai(n);
        ri(this, n);
        this._d = new Date(+n._d);
    }

    function ht(n) {
        var i = si(n), r = i.year || 0, u = i.quarter || 0, f = i.month || 0, e = i.week || 0, o = i.day || 0, s = i.hour || 0, h = i.minute || 0, c = i.second || 0, l = i.millisecond || 0;
        this._milliseconds = +l + 1e3 * c + 6e4 * h + 36e5 * s;
        this._days = +o + 7 * e;
        this._months = +f + 3 * u + 12 * r;
        this._data = {};
        this._locale = t.localeData();
        this._bubble();
    }

    function w(n, t) {
        for (var i in t) p(t, i) && (n[i] = t[i]);
        return p(t, "toString") && (n.toString = t.toString), p(t, "valueOf") && (n.valueOf = t.valueOf), n;
    }

    function ri(n, t) {
        var u, i, r;
        if ("undefined" != typeof t._isAMomentObject && (n._isAMomentObject = t._isAMomentObject), "undefined" != typeof t._i && (n._i = t._i), "undefined" != typeof t._f && (n._f = t._f), "undefined" != typeof t._l && (n._l = t._l), "undefined" != typeof t._strict && (n._strict = t._strict), "undefined" != typeof t._tzm && (n._tzm = t._tzm), "undefined" != typeof t._isUTC && (n._isUTC = t._isUTC), "undefined" != typeof t._offset && (n._offset = t._offset), "undefined" != typeof t._pf && (n._pf = t._pf), "undefined" != typeof t._locale && (n._locale = t._locale), et.length > 0) for (u in et) i = et[u], r = t[i], "undefined" != typeof r && (n[i] = r);
        return n;
    }

    function e(n) { return 0 > n ? Math.ceil(n) : Math.floor(n); }

    function r(n, t, i) {
        for (var r = "" + Math.abs(n), u = n >= 0; r.length < t;) r = "0" + r;
        return (u ? i ? "+" : "" : "-") + r;
    }

    function ui(n, t) {
        var i = { milliseconds: 0, months: 0 };
        return i.months = t.month() - n.month() + 12 * (t.year() - n.year()), n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i;
    }

    function dr(n, t) {
        var i;
        return t = ft(t, n), n.isBefore(t) ? i = ui(n, t) : (i = ui(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i;
    }

    function fi(n, i) {
        return function(r, u) {
            var f, e;
            return null === u || isNaN(+u) || (br(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period)."), e = r, r = u, u = e), r = "string" == typeof r ? +r : r, f = t.duration(r, u), ei(this, f, n), this;
        };
    }

    function ei(n, i, r, u) {
        var o = i._milliseconds, f = i._days, e = i._months;
        u = null == u ? !0 : u;
        o && n._d.setTime(+n._d + o * r);
        f && tr(n, "Date", pt(n, "Date") + f * r);
        e && nr(n, pt(n, "Month") + e * r);
        u && t.updateOffset(n, f || e);
    }

    function ut(n) { return "[object Array]" === Object.prototype.toString.call(n); }

    function gr(n) { return "[object Date]" === Object.prototype.toString.call(n) || n instanceof Date; }

    function oi(n, t, r) {
        for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), f = 0, u = 0; e > u; u++) (r && n[u] !== t[u] || !r && i(n[u]) !== i(t[u])) && f++;
        return f + o;
    }

    function s(n) {
        if (n) {
            var t = n.toLowerCase().replace(/(.)s$/, "$1");
            n = bf[n] || kf[t] || t;
        }
        return n;
    }

    function si(n) {
        var i, t, r = {};
        for (t in n) p(n, t) && (i = s(t), i && (r[i] = n[t]));
        return r;
    }

    function nu(i) {
        var r, u;
        if (0 === i.indexOf("week")) r = 7, u = "day";
        else {
            if (0 !== i.indexOf("month")) return;
            r = 12;
            u = "month";
        }
        t[i] = function(f, e) {
            var o, s, c = t._locale[i], h = [];
            if ("number" == typeof f && (e = f, f = n), s = function(n) {
                var i = t().utc().set(u, n);
                return c.call(t._locale, i, f || "");
            }, null != e) return s(e);
            for (o = 0; r > o; o++) h.push(s(o));
            return h;
        };
    }

    function i(n) {
        var t = +n, i = 0;
        return 0 !== t && isFinite(t) && (i = t >= 0 ? Math.floor(t) : Math.ceil(t)), i;
    }

    function ct(n, t) { return new Date(Date.UTC(n, t + 1, 0)).getUTCDate(); }

    function hi(n, i, r) { return b(t([n, 11, 31 + i - r]), i, r).week; }

    function ci(n) { return li(n) ? 366 : 365; }

    function li(n) { return n % 4 == 0 && n % 100 != 0 || n % 400 == 0; }

    function ai(n) {
        var t;
        n._a && -2 === n._pf.overflow && (t = n._a[l] < 0 || n._a[l] > 11 ? l : n._a[o] < 1 || n._a[o] > ct(n._a[c], n._a[l]) ? o : n._a[a] < 0 || n._a[a] > 23 ? a : n._a[nt] < 0 || n._a[nt] > 59 ? nt : n._a[tt] < 0 || n._a[tt] > 59 ? tt : n._a[it] < 0 || n._a[it] > 999 ? it : -1, n._pf._overflowDayOfYear && (c > t || t > o) && (t = o), n._pf.overflow = t);
    }

    function vi(n) { return null == n._isValid && (n._isValid = !isNaN(n._d.getTime()) && n._pf.overflow < 0 && !n._pf.empty && !n._pf.invalidMonth && !n._pf.nullInput && !n._pf.invalidFormat && !n._pf.userInvalidated, n._strict && (n._isValid = n._isValid && 0 === n._pf.charsLeftOver && 0 === n._pf.unusedTokens.length)), n._isValid; }

    function yi(n) { return n ? n.toLowerCase().replace("_", "-") : n; }

    function tu(n) {
        for (var i, t, f, r, u = 0; u < n.length;) {
            for (r = yi(n[u]).split("-"), i = r.length, t = yi(n[u + 1]), t = t ? t.split("-") : null; i > 0;) {
                if (f = pi(r.slice(0, i).join("-"))) return f;
                if (t && t.length >= i && oi(r, t, !0) >= i - 1) break;
                i--;
            }
            u++;
        }
        return null;
    }

    function pi(n) {
        var i = null;
        if (!d[n] && er)
            try {
                i = t.locale();
                require("./locale/" + n);
                t.locale(i);
            } catch (r) {
            }
        return d[n];
    }

    function ft(n, i) { return i._isUTC ? t(n).zone(i._offset || 0) : t(n).local(); }

    function iu(n) { return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, ""); }

    function ru(n) {
        for (var i = n.match(or), t = 0, r = i.length; r > t; t++) i[t] = v[i[t]] ? v[i[t]] : iu(i[t]);
        return function(u) {
            var f = "";
            for (t = 0; r > t; t++) f += i[t] instanceof Function ? i[t].call(u, n) : i[t];
            return f;
        };
    }

    function lt(n, t) { return n.isValid() ? (t = wi(t, n.localeData()), gt[t] || (gt[t] = ru(t)), gt[t](n)) : n.localeData().invalidDate(); }

    function wi(n, t) {

        function r(n) { return t.longDateFormat(n) || n; }

        var i = 5;
        for (ot.lastIndex = 0; i >= 0 && ot.test(n);) n = n.replace(ot, r), ot.lastIndex = 0, i -= 1;
        return n;
    }

    function uu(n, t) {
        var i = t._strict;
        switch (n) {
        case "Q":
            return hr;
        case "DDDD":
            return lr;
        case "YYYY":
        case "GGGG":
        case "gggg":
            return i ? af : ff;
        case "Y":
        case "G":
        case "g":
            return yf;
        case "YYYYYY":
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
            return i ? vf : ef;
        case "S":
            if (i) return hr;
        case "SS":
            if (i) return cr;
        case "SSS":
            if (i) return lr;
        case "DDD":
            return uf;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
            return sf;
        case "a":
        case "A":
            return t._locale._meridiemParse;
        case "X":
            return cf;
        case "Z":
        case "ZZ":
            return bt;
        case "T":
            return hf;
        case "SSSS":
            return of;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "ww":
        case "WW":
            return i ? cr : sr;
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "W":
        case "e":
        case "E":
            return sr;
        case "Do":
            return lf;
        default:
            return new RegExp(cu(hu(n.replace("\\", "")), "i"));
        }
    }

    function bi(n) {
        n = n || "";
        var r = n.match(bt) || [], f = r[r.length - 1] || [], t = (f + "").match(wf) || ["-", 0, 0], u = +(60 * t[1]) + i(t[2]);
        return "+" === t[0] ? -u : u;
    }

    function fu(n, r, u) {
        var e, f = u._a;
        switch (n) {
        case "Q":
            null != r && (f[l] = 3 * (i(r) - 1));
            break;
        case "M":
        case "MM":
            null != r && (f[l] = i(r) - 1);
            break;
        case "MMM":
        case "MMMM":
            e = u._locale.monthsParse(r);
            null != e ? f[l] = e : u._pf.invalidMonth = r;
            break;
        case "D":
        case "DD":
            null != r && (f[o] = i(r));
            break;
        case "Do":
            null != r && (f[o] = i(parseInt(r, 10)));
            break;
        case "DDD":
        case "DDDD":
            null != r && (u._dayOfYear = i(r));
            break;
        case "YY":
            f[c] = t.parseTwoDigitYear(r);
            break;
        case "YYYY":
        case "YYYYY":
        case "YYYYYY":
            f[c] = i(r);
            break;
        case "a":
        case "A":
            u._isPm = u._locale.isPM(r);
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            f[a] = i(r);
            break;
        case "m":
        case "mm":
            f[nt] = i(r);
            break;
        case "s":
        case "ss":
            f[tt] = i(r);
            break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
            f[it] = i(1e3 * ("0." + r));
            break;
        case "X":
            u._d = new Date(1e3 * parseFloat(r));
            break;
        case "Z":
        case "ZZ":
            u._useUTC = !0;
            u._tzm = bi(r);
            break;
        case "dd":
        case "ddd":
        case "dddd":
            e = u._locale.weekdaysParse(r);
            null != e ? (u._w = u._w || {}, u._w.d = e) : u._pf.invalidWeekday = r;
            break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "e":
        case "E":
            n = n.substr(0, 1);
        case "gggg":
        case "GGGG":
        case "GGGGG":
            n = n.substr(0, 2);
            r && (u._w = u._w || {}, u._w[n] = i(r));
            break;
        case "gg":
        case "GG":
            u._w = u._w || {};
            u._w[n] = t.parseTwoDigitYear(r);
        }
    }

    function eu(n) {
        var i, o, f, u, r, e, s;
        i = n._w;
        null != i.GG || null != i.W || null != i.E ? (r = 1, e = 4, o = g(i.GG, n._a[c], b(t(), 1, 4).year), f = g(i.W, 1), u = g(i.E, 1)) : (r = n._locale._week.dow, e = n._locale._week.doy, o = g(i.gg, n._a[c], b(t(), r, e).year), f = g(i.w, 1), null != i.d ? (u = i.d, r > u && ++f) : u = null != i.e ? i.e + r : r);
        s = ku(o, f, u, e, r);
        n._a[c] = s.year;
        n._dayOfYear = s.dayOfYear;
    }

    function at(n) {
        var t, i, r, u, f = [];
        if (!n._d) {
            for (r = su(n), n._w && null == n._a[o] && null == n._a[l] && eu(n), n._dayOfYear && (u = g(n._a[c], r[c]), n._dayOfYear > ci(u) && (n._pf._overflowDayOfYear = !0), i = yt(u, 0, n._dayOfYear), n._a[l] = i.getUTCMonth(), n._a[o] = i.getUTCDate()), t = 0; 3 > t && null == n._a[t]; ++t) n._a[t] = f[t] = r[t];
            for (; 7 > t; t++) n._a[t] = f[t] = null == n._a[t] ? 2 === t ? 1 : 0 : n._a[t];
            n._d = (n._useUTC ? yt : yu).apply(null, f);
            null != n._tzm && n._d.setUTCMinutes(n._d.getUTCMinutes() + n._tzm);
        }
    }

    function ou(n) {
        var t;
        n._d || (t = si(n._i), n._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], at(n));
    }

    function su(n) {
        var t = new Date;
        return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()];
    }

    function vt(n) {
        if (n._f === t.ISO_8601) return void ki(n);
        n._a = [];
        n._pf.empty = !0;
        for (var i, u, o, r = "" + n._i, h = r.length, s = 0, e = wi(n._f, n._locale).match(or) || [], f = 0; f < e.length; f++) u = e[f], i = (r.match(uu(u, n)) || [])[0], i && (o = r.substr(0, r.indexOf(i)), o.length > 0 && n._pf.unusedInput.push(o), r = r.slice(r.indexOf(i) + i.length), s += i.length), v[u] ? (i ? n._pf.empty = !1 : n._pf.unusedTokens.push(u), fu(u, i, n)) : n._strict && !i && n._pf.unusedTokens.push(u);
        n._pf.charsLeftOver = h - s;
        r.length > 0 && n._pf.unusedInput.push(r);
        n._isPm && n._a[a] < 12 && (n._a[a] += 12);
        n._isPm === !1 && 12 === n._a[a] && (n._a[a] = 0);
        at(n);
        ai(n);
    }

    function hu(n) { return n.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) { return t || i || r || u; }); }

    function cu(n) { return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); }

    function lu(n) {
        var t, f, u, r, i;
        if (0 === n._f.length) return n._pf.invalidFormat = !0, void (n._d = new Date(NaN));
        for (r = 0; r < n._f.length; r++) i = 0, t = ri({}, n), t._pf = st(), t._f = n._f[r], vt(t), vi(t) && (i += t._pf.charsLeftOver, i += 10 * t._pf.unusedTokens.length, t._pf.score = i, (null == u || u > i) && (u = i, f = t));
        w(n, f || t);
    }

    function ki(n) {
        var t, i, r = n._i, u = pf.exec(r);
        if (u) {
            for (n._pf.iso = !0, t = 0, i = kt.length; i > t; t++)
                if (kt[t][1].exec(r)) {
                    n._f = kt[t][0] + (u[6] || " ");
                    break;
                }
            for (t = 0, i = dt.length; i > t; t++)
                if (dt[t][1].exec(r)) {
                    n._f += dt[t][0];
                    break;
                }
            r.match(bt) && (n._f += "Z");
            vt(n);
        } else n._isValid = !1;
    }

    function au(n) {
        ki(n);
        n._isValid === !1 && (delete n._isValid, t.createFromInputFallback(n));
    }

    function vu(i) {
        var u, r = i._i;
        r === n ? i._d = new Date : gr(r) ? i._d = new Date(+r) : null !== (u = nf.exec(r)) ? i._d = new Date(+u[1]) : "string" == typeof r ? au(i) : ut(r) ? (i._a = r.slice(0), at(i)) : "object" == typeof r ? ou(i) : "number" == typeof r ? i._d = new Date(r) : t.createFromInputFallback(i);
    }

    function yu(n, t, i, r, u, f, e) {
        var o = new Date(n, t, i, r, u, f, e);
        return 1970 > n && o.setFullYear(n), o;
    }

    function yt(n) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 1970 > n && t.setUTCFullYear(n), t;
    }

    function pu(n, t) {
        if ("string" == typeof n)
            if (isNaN(n)) {
                if (n = t.weekdaysParse(n), "number" != typeof n) return null;
            } else n = parseInt(n, 10);
        return n;
    }

    function wu(n, t, i, r, u) { return u.relativeTime(t || 1, !!i, n, r); }

    function bu(n, i, r) {
        var u = t.duration(n).abs(), c = k(u.as("s")), e = k(u.as("m")), o = k(u.as("h")), s = k(u.as("d")), h = k(u.as("M")), l = k(u.as("y")), f = c < y.s && ["s", c] || 1 === e && ["m"] || e < y.m && ["mm", e] || 1 === o && ["h"] || o < y.h && ["hh", o] || 1 === s && ["d"] || s < y.d && ["dd", s] || 1 === h && ["M"] || h < y.M && ["MM", h] || 1 === l && ["y"] || ["yy", l];
        return f[2] = i, f[3] = +n > 0, f[4] = r, wu.apply({}, f);
    }

    function b(n, i, r) {
        var f, e = r - i, u = r - n.day();
        return u > e && (u -= 7), e - 7 > u && (u += 7), f = t(n).add(u, "d"), { week: Math.ceil(f.dayOfYear() / 7), year: f.year() };
    }

    function ku(n, t, i, r, u) {
        var o, e, f = yt(n, 0, 1).getUTCDay();
        return f = 0 === f ? 7 : f, i = null != i ? i : u, o = u - f + (f > r ? 7 : 0) - (u > f ? 7 : 0), e = 7 * (t - 1) + (i - u) + o + 1, { year: e > 0 ? n : n - 1, dayOfYear: e > 0 ? e : ci(n - 1) + e };
    }

    function di(i) {
        var r = i._i, u = i._f;
        return i._locale = i._locale || t.localeData(i._l), null === r || u === n && "" === r ? t.invalid({ nullInput: !0 }) : ("string" == typeof r && (i._i = r = i._locale.preparse(r)), t.isMoment(r) ? new rt(r, !0) : (u ? ut(u) ? lu(i) : vt(i) : vu(i), new rt(i)));
    }

    function gi(n, i) {
        var u, r;
        if (1 === i.length && ut(i[0]) && (i = i[0]), !i.length) return t();
        for (u = i[0], r = 1; r < i.length; ++r) i[r][n](u) && (u = i[r]);
        return u;
    }

    function nr(n, t) {
        var i;
        return "string" == typeof t && (t = n.localeData().monthsParse(t), "number" != typeof t) ? n : (i = Math.min(n.date(), ct(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n);
    }

    function pt(n, t) { return n._d["get" + (n._isUTC ? "UTC" : "") + t](); }

    function tr(n, t, i) { return "Month" === t ? nr(n, i) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i); }

    function h(n, i) { return function(r) { return null != r ? (tr(this, n, r), t.updateOffset(this, i), this) : pt(this, n); }; }

    function ir(n) { return 400 * n / 146097; }

    function rr(n) { return 146097 * n / 400; }

    function du(n) { t.duration.fn[n] = function() { return this._data[n]; }; }

    function ur(n) { "undefined" == typeof ender && (fr = wt.moment, wt.moment = n ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : t); }

    for (var t,
        fr,
        u,
        wt = "undefined" != typeof global ? global : this,
        k = Math.round,
        gu = Object.prototype.hasOwnProperty,
        c = 0,
        l = 1,
        o = 2,
        a = 3,
        nt = 4,
        tt = 5,
        it = 6,
        d = {},
        et = [],
        er = "undefined" != typeof module && module.exports,
        nf = /^\/?Date\((\-?\d+)/i,
        tf = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        rf = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
        or = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        ot = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,
        sr = /\d\d?/,
        uf = /\d{1,3}/,
        ff = /\d{1,4}/,
        ef = /[+\-]?\d{1,6}/,
        of = /\d+/,
        sf = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        bt = /Z|[\+\-]\d\d:?\d\d/gi,
        hf = /T/i,
        cf = /[\+\-]?\d+(\.\d{1,3})?/,
        lf = /\d{1,2}/,
        hr = /\d/,
        cr = /\d\d/,
        lr = /\d{3}/,
        af = /\d{4}/,
        vf = /[+-]?\d{6}/,
        yf = /[+-]?\d+/,
        pf = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        kt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
        dt = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
        wf = /([\+\-]|\d\d)/gi,
        ar = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), { Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6 }),
        bf = { ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear" },
        kf = { dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear" },
        gt = {},
        y = { s: 45, m: 45, h: 22, d: 26, M: 11 },
        vr = "DDD w W M D d".split(" "),
        yr = "M D H h m s w W".split(" "),
        v = {
            M: function() { return this.month() + 1; },
            MMM: function(n) { return this.localeData().monthsShort(this, n); },
            MMMM: function(n) { return this.localeData().months(this, n); },
            D: function() { return this.date(); },
            DDD: function() { return this.dayOfYear(); },
            d: function() { return this.day(); },
            dd: function(n) { return this.localeData().weekdaysMin(this, n); },
            ddd: function(n) { return this.localeData().weekdaysShort(this, n); },
            dddd: function(n) { return this.localeData().weekdays(this, n); },
            w: function() { return this.week(); },
            W: function() { return this.isoWeek(); },
            YY: function() { return r(this.year() % 100, 2); },
            YYYY: function() { return r(this.year(), 4); },
            YYYYY: function() { return r(this.year(), 5); },
            YYYYYY: function() {
                var n = this.year(), t = n >= 0 ? "+" : "-";
                return t + r(Math.abs(n), 6);
            },
            gg: function() { return r(this.weekYear() % 100, 2); },
            gggg: function() { return r(this.weekYear(), 4); },
            ggggg: function() { return r(this.weekYear(), 5); },
            GG: function() { return r(this.isoWeekYear() % 100, 2); },
            GGGG: function() { return r(this.isoWeekYear(), 4); },
            GGGGG: function() { return r(this.isoWeekYear(), 5); },
            e: function() { return this.weekday(); },
            E: function() { return this.isoWeekday(); },
            a: function() { return this.localeData().meridiem(this.hours(), this.minutes(), !0); },
            A: function() { return this.localeData().meridiem(this.hours(), this.minutes(), !1); },
            H: function() { return this.hours(); },
            h: function() { return this.hours() % 12 || 12; },
            m: function() { return this.minutes(); },
            s: function() { return this.seconds(); },
            S: function() { return i(this.milliseconds() / 100); },
            SS: function() { return r(i(this.milliseconds() / 10), 2); },
            SSS: function() { return r(this.milliseconds(), 3); },
            SSSS: function() { return r(this.milliseconds(), 3); },
            Z: function() {
                var n = -this.zone(), t = "+";
                return 0 > n && (n = -n, t = "-"), t + r(i(n / 60), 2) + ":" + r(i(n) % 60, 2);
            },
            ZZ: function() {
                var n = -this.zone(), t = "+";
                return 0 > n && (n = -n, t = "-"), t + r(i(n / 60), 2) + r(i(n) % 60, 2);
            },
            z: function() { return this.zoneAbbr(); },
            zz: function() { return this.zoneName(); },
            X: function() { return this.unix(); },
            Q: function() { return this.quarter(); }
        },
        pr = {},
        wr = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; vr.length;) u = vr.pop(), v[u + "o"] = kr(v[u], u);
    for (; yr.length;) u = yr.pop(), v[u + u] = ti(v[u], 2);
    for (v.DDDD = ti(v.DDD, 3), w(ii.prototype, {
        set: function(n) {
            var t, i;
            for (i in n) t = n[i], "function" == typeof t ? this[i] = t : this["_" + i] = t;
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(n) { return this._months[n.month()]; },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(n) { return this._monthsShort[n.month()]; },
        monthsParse: function(n) {
            var i, r, u;
            for (this._monthsParse || (this._monthsParse = []), i = 0; 12 > i; i++) if (this._monthsParse[i] || (r = t.utc([2e3, i]), u = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(u.replace(".", ""), "i")), this._monthsParse[i].test(n)) return i;
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(n) { return this._weekdays[n.day()]; },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(n) { return this._weekdaysShort[n.day()]; },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(n) { return this._weekdaysMin[n.day()]; },
        weekdaysParse: function(n) {
            var i, r, u;
            for (this._weekdaysParse || (this._weekdaysParse = []), i = 0; 7 > i; i++) if (this._weekdaysParse[i] || (r = t([2e3, 1]).day(i), u = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(u.replace(".", ""), "i")), this._weekdaysParse[i].test(n)) return i;
        },
        _longDateFormat: { LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT" },
        longDateFormat: function(n) {
            var t = this._longDateFormat[n];
            return !t && this._longDateFormat[n.toUpperCase()] && (t = this._longDateFormat[n.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(n) { return n.slice(1); }), this._longDateFormat[n] = t), t;
        },
        isPM: function(n) { return "p" === (n + "").toLowerCase().charAt(0); },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(n, t, i) { return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"; },
        _calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
        calendar: function(n, t) {
            var i = this._calendar[n];
            return "function" == typeof i ? i.apply(t) : i;
        },
        _relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
        relativeTime: function(n, t, i, r) {
            var u = this._relativeTime[i];
            return "function" == typeof u ? u(n, t, i, r) : u.replace(/%d/i, n);
        },
        pastFuture: function(n, t) {
            var i = this._relativeTime[n > 0 ? "future" : "past"];
            return "function" == typeof i ? i(t) : i.replace(/%s/i, t);
        },
        ordinal: function(n) { return this._ordinal.replace("%d", n); },
        _ordinal: "%d",
        preparse: function(n) { return n; },
        postformat: function(n) { return n; },
        week: function(n) { return b(n, this._week.dow, this._week.doy).week; },
        _week: { dow: 0, doy: 6 },
        _invalidDate: "Invalid date",
        invalidDate: function() { return this._invalidDate; }
    }), t = function(t, i, r, u) {
        var f;
        return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._i = t, f._f = i, f._l = r, f._strict = u, f._isUTC = !1, f._pf = st(), di(f);
    }, t.suppressDeprecationWarnings = !1, t.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(n) { n._d = new Date(n._i); }), t.min = function() {
        var n = [].slice.call(arguments, 0);
        return gi("isBefore", n);
    }, t.max = function() {
        var n = [].slice.call(arguments, 0);
        return gi("isAfter", n);
    }, t.utc = function(t, i, r, u) {
        var f;
        return "boolean" == typeof r && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._useUTC = !0, f._isUTC = !0, f._l = r, f._i = t, f._f = i, f._strict = u, f._pf = st(), di(f).utc();
    }, t.unix = function(n) { return t(1e3 * n); }, t.duration = function(n, r) {
        var e, h, s, c, f = n, u = null;
        return t.isDuration(n) ? f = { ms: n._milliseconds, d: n._days, M: n._months } : "number" == typeof n ? (f = {}, r ? f[r] = n : f.milliseconds = n) : (u = tf.exec(n)) ? (e = "-" === u[1] ? -1 : 1, f = { y: 0, d: i(u[o]) * e, h: i(u[a]) * e, m: i(u[nt]) * e, s: i(u[tt]) * e, ms: i(u[it]) * e }) : (u = rf.exec(n)) ? (e = "-" === u[1] ? -1 : 1, s = function(n) {
            var t = n && parseFloat(n.replace(",", "."));
            return (isNaN(t) ? 0 : t) * e;
        }, f = { y: s(u[2]), M: s(u[3]), d: s(u[4]), h: s(u[5]), m: s(u[6]), s: s(u[7]), w: s(u[8]) }) : "object" == typeof f && ("from" in f || "to" in f) && (c = dr(t(f.from), t(f.to)), f = {}, f.ms = c.milliseconds, f.M = c.months), h = new ht(f), t.isDuration(n) && p(n, "_locale") && (h._locale = n._locale), h;
    }, t.version = "2.8.2", t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.ISO_8601 = function() {}, t.momentProperties = et, t.updateOffset = function() {}, t.relativeTimeThreshold = function(t, i) { return y[t] === n ? !1 : i === n ? y[t] : (y[t] = i, !0); }, t.lang = f("moment.lang is deprecated. Use moment.locale instead.", function(n, i) { return t.locale(n, i); }), t.locale = function(n, i) {
        var r;
        return n && (r = "undefined" != typeof i ? t.defineLocale(n, i) : t.localeData(n), r && (t.duration._locale = t._locale = r)), t._locale._abbr;
    }, t.defineLocale = function(n, i) { return null !== i ? (i.abbr = n, d[n] || (d[n] = new ii), d[n].set(i), t.locale(n), d[n]) : (delete d[n], null); }, t.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function(n) { return t.localeData(n); }), t.localeData = function(n) {
        var i;
        if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return t._locale;
        if (!ut(n)) {
            if (i = pi(n)) return i;
            n = [n];
        }
        return tu(n);
    }, t.isMoment = function(n) { return n instanceof rt || null != n && p(n, "_isAMomentObject"); }, t.isDuration = function(n) { return n instanceof ht; }, u = wr.length - 1; u >= 0; --u) nu(wr[u]);
    t.normalizeUnits = function(n) { return s(n); };
    t.invalid = function(n) {
        var i = t.utc(NaN);
        return null != n ? w(i._pf, n) : i._pf.userInvalidated = !0, i;
    };
    t.parseZone = function() { return t.apply(null, arguments).parseZone(); };
    t.parseTwoDigitYear = function(n) { return i(n) + (i(n) > 68 ? 1900 : 2e3); };
    w(t.fn = rt.prototype, {
        clone: function() { return t(this); },
        valueOf: function() { return +this._d + 6e4 * (this._offset || 0); },
        unix: function() {
            return Math.floor(+this;
            / 1e3) }, toString: function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, toDate: function () { return this._offset ? new Date(+this) : this._d }, toISOString: function () { var n = t(this).utc(); return 0 < n.year() && n.year() <= 9999 ? lt(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : lt(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }, toArray: function () { var n = this; return [n.year(), n.month(), n.date(), n.hours(), n.minutes(), n.seconds(), n.milliseconds()] }, isValid: function () { return vi(this) }, isDSTShifted: function () { return this._a ? this.isValid() && oi(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1 }, parsingFlags: function () { return w({}, this._pf) }, invalidAt: function () { return this._pf.overflow }, utc: function (n) { return this.zone(0, n) }, local: function (n) { return this._isUTC && (this.zone(0, n), this._isUTC = !1, n && this.add(this._d.getTimezoneOffset(), "m")), this }, format: function (n) { var i = lt(this, n || t.defaultFormat); return this.localeData().postformat(i) }, add: fi(1, "add"), subtract: fi(-1, "subtract"), diff: function (n, i, r) { var u, o, f = ft(n, this), h = 6e4 * (this.zone() - f.zone()); return i = s(i), "year" === i || "month" === i ? (u = 432e5 * (this.daysInMonth() + f.daysInMonth()), o = 12 * (this.year() - f.year()) + (this.month() - f.month()), o += (this - t(this).startOf("month") - (f - t(f).startOf("month"))) /;
            u, o -= 6e4 * (this.zone() - t(this).startOf("month").zone() - (f.zone() - t(f).startOf("month").zone())) / u, "year" === i && (o /= 12)); :
            (u = this - f, o = "second" === i ? u / 1e3 : "minute" === i ? u / 6e4 : "hour" === i ? u / 36e5 : "day" === i ? (u - h) / 864e5 : "week" === i ? (u - h) / 6048e5 : u), r ? o : e(o);
        },
        from: function(n, i) { return t.duration({ to: this, from: n }).locale(this.locale()).humanize(!i); },
        fromNow: function(n) { return this.from(t(), n); },
        calendar: function(n) {
            var r = n || t(), u = ft(r, this).startOf("day"), i = this.diff(u, "days", !0), f = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(f, this));
        },
        isLeapYear: function() { return li(this.year()); },
        isDST: function() { return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone(); },
        day: function(n) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != n ? (n = pu(n, this.localeData()), this.add(n - t, "d")) : t;
        },
        month: h("Month", !0),
        startOf: function(n) {
            switch (n = s(n)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0);
            }
            return "week" === n ? this.weekday(0) : "isoWeek" === n && this.isoWeekday(1), "quarter" === n && this.month(3 * Math.floor(this.month() / 3)), this;
        },
        endOf: function(n) { return n = s(n), this.startOf(n).add(1, "isoWeek" === n ? "week" : n).subtract(1, "ms"); },
        isAfter: function(n, i) { return i = "undefined" != typeof i ? i : "millisecond", +this.clone().startOf(i) > +t(n).startOf(i); },
        isBefore: function(n, i) { return i = "undefined" != typeof i ? i : "millisecond", +this.clone().startOf(i) < +t(n).startOf(i); },
        isSame: function(n, t) { return t = t || "ms", +this.clone().startOf(t) == +ft(n, this).startOf(t); },
        min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(n) { return n = t.apply(null, arguments), this > n ? this : n; }),
        max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(n) { return n = t.apply(null, arguments), n > this ? this : n; }),
        zone: function(n, i) {
            var r, u = this._offset || 0;
            return null == n ? this._isUTC ? u : this._d.getTimezoneOffset() : ("string" == typeof n && (n = bi(n)), Math.abs(n) < 16 && (n = 60 * n), !this._isUTC && i && (r = this._d.getTimezoneOffset()), this._offset = n, this._isUTC = !0, null != r && this.subtract(r, "m"), u !== n && (!i || this._changeInProgress ? ei(this, t.duration(u - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this);
        },
        zoneAbbr: function() { return this._isUTC ? "UTC" : ""; },
        zoneName: function() { return this._isUTC ? "Coordinated Universal Time" : ""; },
        parseZone: function() { return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this; },
        hasAlignedHourOffset: function(n) { return n = n ? t(n).zone() : 0, (this.zone() - n) % 60 == 0; },
        daysInMonth: function() { return ct(this.year(), this.month()); },
        dayOfYear: function(n) {
            var i = k((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
            return null == n ? i : this.add(n - i, "d");
        },
        quarter: function(n) { return null == n ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (n - 1) + this.month() % 3); },
        weekYear: function(n) {
            var t = b(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == n ? t : this.add(n - t, "y");
        },
        isoWeekYear: function(n) {
            var t = b(this, 1, 4).year;
            return null == n ? t : this.add(n - t, "y");
        },
        week: function(n) {
            var t = this.localeData().week(this);
            return null == n ? t : this.add(7 * (n - t), "d");
        },
        isoWeek: function(n) {
            var t = b(this, 1, 4).week;
            return null == n ? t : this.add(7 * (n - t), "d");
        },
        weekday: function(n) {
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == n ? t : this.add(n - t, "d");
        },
        isoWeekday: function(n) { return null == n ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7); },
        isoWeeksInYear: function() { return hi(this.year(), 1, 4); },
        weeksInYear: function() {
            var n = this.localeData()._week;
            return hi(this.year(), n.dow, n.doy);
        },
        get: function(n) { return n = s(n), this[n](); },
        set: function(n, t) { return n = s(n), "function" == typeof this[n] && this[n](t), this; },
        locale: function(i) { return i === n ? this._locale._abbr : (this._locale = t.localeData(i), this); },
        lang: f("moment().lang() is deprecated. Use moment().localeData() instead.", function(i) { return i === n ? this.localeData() : (this._locale = t.localeData(i), this); }),
        localeData: function() { return this._locale; }
    });
    t.fn.millisecond = t.fn.milliseconds = h("Milliseconds", !1);
    t.fn.second = t.fn.seconds = h("Seconds", !1);
    t.fn.minute = t.fn.minutes = h("Minutes", !1);
    t.fn.hour = t.fn.hours = h("Hours", !0);
    t.fn.date = h("Date", !0);
    t.fn.dates = f("dates accessor is deprecated. Use date instead.", h("Date", !0));
    t.fn.year = h("FullYear", !0);
    t.fn.years = f("years accessor is deprecated. Use year instead.", h("FullYear", !0));
    t.fn.days = t.fn.day;
    t.fn.months = t.fn.month;
    t.fn.weeks = t.fn.week;
    t.fn.isoWeeks = t.fn.isoWeek;
    t.fn.quarters = t.fn.quarter;
    t.fn.toJSON = t.fn.toISOString;
    w(t.duration.fn = ht.prototype, {
        _bubble: function() {
            var u, f, o, s = this._milliseconds, t = this._days, i = this._months, n = this._data, r = 0;
            n.milliseconds = s % 1e3;
            u = e(s / 1e3);
            n.seconds = u % 60;
            f = e(u / 60);
            n.minutes = f % 60;
            o = e(f / 60);
            n.hours = o % 24;
            t += e(o / 24);
            r = e(ir(t));
            t -= e(rr(r));
            i += e(t / 30);
            t %= 30;
            r += e(i / 12);
            i %= 12;
            n.days = t;
            n.months = i;
            n.years = r;
        },
        abs: function() { return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this; },
        weeks: function() { return e(this.days() / 7); },
        valueOf: function() { return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * i(this._months / 12); },
        humanize: function(n) {
            var t = bu(this, !n, this.localeData());
            return n && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t);
        },
        add: function(n, i) {
            var r = t.duration(n, i);
            return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this;
        },
        subtract: function(n, i) {
            var r = t.duration(n, i);
            return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this;
        },
        get: function(n) { return n = s(n), this[n.toLowerCase() + "s"](); },
        as: function(n) {
            var t, i;
            if (n = s(n), t = this._days + this._milliseconds / 864e5, "month" === n || "year" === n) return i = this._months + 12 * ir(t), "month" === n ? i : i / 12;
            switch (t += rr(this._months / 12), n) {
            case "week":
                return t / 7;
            case "day":
                return t;
            case "hour":
                return 24 * t;
            case "minute":
                return 1440 * t;
            case "second":
                return 86400 * t;
            case "millisecond":
                return 864e5 * t;
            default:
                throw new Error("Unknown unit " + n);
            }
        },
        lang: t.fn.lang,
        locale: t.fn.locale,
        toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() { return this.toISOString(); }),
        toISOString: function() {
            var r = Math.abs(this.years()), u = Math.abs(this.months()), f = Math.abs(this.days()), n = Math.abs(this.hours()), t = Math.abs(this.minutes()), i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (u ? u + "M" : "") + (f ? f + "D" : "") + (n || t || i ? "T" : "") + (n ? n + "H" : "") + (t ? t + "M" : "") + (i ? i + "S" : "") : "P0D";
        },
        localeData: function() { return this._locale; }
    });
    t.duration.fn.toString = t.duration.fn.toISOString;
    for (u in ar) p(ar, u) && du(u.toLowerCase());
    t.duration.fn.asMilliseconds = function() { return this.as("ms"); };
    t.duration.fn.asSeconds = function() { return this.as("s"); };
    t.duration.fn.asMinutes = function() { return this.as("m"); };
    t.duration.fn.asHours = function() { return this.as("h"); };
    t.duration.fn.asDays = function() { return this.as("d"); };
    t.duration.fn.asWeeks = function() { return this.as("weeks"); };
    t.duration.fn.asMonths = function() { return this.as("M"); };
    t.duration.fn.asYears = function() { return this.as("y"); };
    t.locale("en", {
        ordinal: function(n) {
            var t = n % 10, r = 1 === i(n % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return n + r;
        }
    });
    er ? module.exports = t : "function" == typeof define && define.amd ? (define("moment", function(n, i, r) { return r.config && r.config() && r.config().noGlobal === !0 && (wt.moment = fr), t; }), ur(!0)) : ur();
}).call(this), function(n, t, i) {
    "use strict";

    function y(n) {
        return function() {
            for (var i = arguments[0], i = "[" + (n ? n + ":" : "") + i + "] http://errors.angularjs.org/1.2.24/" + (n ? n + "/" : "") + i, t = 1; t < arguments.length; t++) i = i + (1 == t ? "?" : "&") + "p" + (t - 1) + "=" + encodeURIComponent("function" == typeof arguments[t] ? arguments[t].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[t] ? "undefined" : "string" != typeof arguments[t] ? JSON.stringify(arguments[t]) : arguments[t]);
            return Error(i);
        };
    }

    function yi(n) {
        if (null == n || ei(n)) return !1;
        var t = n.length;
        return 1 === n.nodeType && t ? !0 : e(n) || o(n) || 0 === t || "number" == typeof t && 0 < t && t - 1 in n;
    }

    function r(n, t, i) {
        var u;
        if (n)
            if (h(n)) for (u in n) "prototype" == u || "length" == u || "name" == u || n.hasOwnProperty && !n.hasOwnProperty(u) || t.call(i, n[u], u);
            else if (o(n) || yi(n)) for (u = 0; u < n.length; u++) t.call(i, n[u], u);
            else if (n.forEach && n.forEach !== r) n.forEach(t, i);
            else for (u in n) n.hasOwnProperty(u) && t.call(i, n[u], u);
        return n;
    }

    function af(n) {
        var i = [], t;
        for (t in n) n.hasOwnProperty(t) && i.push(t);
        return i.sort();
    }

    function ko(n, t, i) {
        for (var r = af(n), u = 0; u < r.length; u++) t.call(i, n[r[u]], r[u]);
        return r;
    }

    function vf(n) { return function(t, i) { n(i, t); }; }

    function ar() {
        for (var n = vt.length, t; n;) {
            if (n--, t = vt[n].charCodeAt(0), 57 == t) return vt[n] = "A", vt.join("");
            if (90 == t) vt[n] = "0";
            else return vt[n] = String.fromCharCode(t + 1), vt.join("");
        }
        return vt.unshift("0"), vt.join("");
    }

    function yf(n, t) { t ? n.$$hashKey = t : delete n.$$hashKey; }

    function c(n) {
        var t = n.$$hashKey;
        return r(arguments, function(t) { t !== n && r(t, function(t, i) { n[i] = t; }); }), yf(n, t), n;
    }

    function b(n) { return parseInt(n, 10); }

    function pf(n, t) { return c(new (c(function() {}, { prototype: n })), t); }

    function s() {}

    function pi(n) { return n; }

    function nt(n) { return function() { return n; }; }

    function l(n) { return "undefined" == typeof n; }

    function f(n) { return "undefined" != typeof n; }

    function a(n) { return null != n && "object" == typeof n; }

    function e(n) { return "string" == typeof n; }

    function vr(n) { return "number" == typeof n; }

    function yt(n) { return "[object Date]" === ui.call(n); }

    function h(n) { return "function" == typeof n; }

    function yr(n) { return "[object RegExp]" === ui.call(n); }

    function ei(n) { return n && n.document && n.location && n.alert && n.setInterval; }

    function go(n) { return !(!n || !(n.nodeName || n.prop && n.attr && n.find)); }

    function ns(n, t, i) {
        var u = [];
        return r(n, function(n, r, f) { u.push(t.call(i, n, r, f)); }), u;
    }

    function wi(n, t) {
        if (n.indexOf) return n.indexOf(t);
        for (var i = 0; i < n.length; i++) if (t === n[i]) return i;
        return -1;
    }

    function bi(n, t) {
        var i = wi(n, t);
        return 0 <= i && n.splice(i, 1), t;
    }

    function oi(n, t, i, u) {
        var e, f, s;
        if (ei(n) || n && n.$evalAsync && n.$watch) throw ir("cpws");
        if (t) {
            if (n === t) throw ir("cpi");
            if (i = i || [], u = u || [], a(n)) {
                if (e = wi(i, n), -1 !== e) return u[e];
                i.push(n);
                u.push(t);
            }
            if (o(n)) for (f = t.length = 0; f < n.length; f++) e = oi(n[f], null, i, u), a(n[f]) && (i.push(n[f]), u.push(e)), t.push(e);
            else {
                s = t.$$hashKey;
                o(t) ? t.length = 0 : r(t, function(n, i) { delete t[i]; });
                for (f in n) e = oi(n[f], null, i, u), a(n[f]) && (i.push(n[f]), u.push(e)), t[f] = e;
                yf(t, s);
            }
        } else (t = n) && (o(n) ? t = oi(n, [], i, u) : yt(n) ? t = new Date(n.getTime()) : yr(n) ? (t = RegExp(n.source, n.toString().match(/[^\/]*$/)[0]), t.lastIndex = n.lastIndex) : a(n) && (t = oi(n, {}, i, u)));
        return t;
    }

    function rt(n, t) {
        if (o(n)) {
            t = t || [];
            for (var i = 0; i < n.length; i++) t[i] = n[i];
        } else if (a(n)) for (i in t = t || {}, n) ru.call(n, i) && ("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = n[i]);
        return t || n;
    }

    function gt(n, t) {
        if (n === t) return !0;
        if (null === n || null === t) return !1;
        if (n !== n && t !== t) return !0;
        var u = typeof n, r;
        if (u == typeof t && "object" == u)
            if (o(n)) {
                if (!o(t)) return !1;
                if ((u = n.length) == t.length) {
                    for (r = 0; r < u; r++) if (!gt(n[r], t[r])) return !1;
                    return !0;
                }
            } else {
                if (yt(n)) return yt(t) ? isNaN(n.getTime()) && isNaN(t.getTime()) || n.getTime() === t.getTime() : !1;
                if (yr(n) && yr(t)) return n.toString() == t.toString();
                if (n && n.$evalAsync && n.$watch || t && t.$evalAsync && t.$watch || ei(n) || ei(t) || o(t)) return !1;
                u = {};
                for (r in n)
                    if ("$" !== r.charAt(0) && !h(n[r])) {
                        if (!gt(n[r], t[r])) return !1;
                        u[r] = !0;
                    }
                for (r in t) if (!u.hasOwnProperty(r) && "$" !== r.charAt(0) && t[r] !== i && !h(t[r])) return !1;
                return !0;
            }
        return !1;
    }

    function hu(n, t) {
        var i = 2 < arguments.length ? ri.call(arguments, 2) : [];
        return !h(t) || t instanceof RegExp ? t : i.length ? function() { return arguments.length ? t.apply(n, i.concat(ri.call(arguments, 0))) : t.apply(n, i); } : function() { return arguments.length ? t.apply(n, arguments) : t.call(n); };
    }

    function ts(n, r) {
        var u = r;
        return "string" == typeof n && "$" === n.charAt(0) ? u = i : ei(r) ? u = "$WINDOW" : r && t === r ? u = "$DOCUMENT" : r && r.$evalAsync && r.$watch && (u = "$SCOPE"), u;
    }

    function st(n, t) { return "undefined" == typeof n ? i : JSON.stringify(n, ts, t ? "  " : null); }

    function wf(n) { return e(n) ? JSON.parse(n) : n; }

    function ki(n) { return "function" == typeof n ? n = !0 : n && 0 !== n.length ? (n = v("" + n), n = !("f" == n || "0" == n || "false" == n || "no" == n || "n" == n || "[]" == n)) : n = !1, n; }

    function ut(n) {
        n = u(n).clone();
        try {
            n.empty();
        } catch (i) {
        }
        var t = u("<div>").append(n).html();
        try {
            return 3 === n[0].nodeType ? v(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(n, t) { return "<" + v(t); });
        } catch (r) {
            return v(t);
        }
    }

    function bf(n) {
        try {
            return decodeURIComponent(n);
        } catch (t) {
        }
    }

    function kf(n) {
        var i = {}, u, t;
        return r((n || "").split("&"), function(n) { n && (u = n.replace(/\+/g, "%20").split("="), t = bf(u[0]), f(t) && (n = f(u[1]) ? bf(u[1]) : !0, ru.call(i, t) ? o(i[t]) ? i[t].push(n) : i[t] = [i[t], n] : i[t] = n)); }), i;
    }

    function cu(n) {
        var t = [];
        return r(n, function(n, i) { o(n) ? r(n, function(n) { t.push(ni(i, !0) + (!0 === n ? "" : "=" + ni(n, !0))); }) : t.push(ni(i, !0) + (!0 === n ? "" : "=" + ni(n, !0))); }), t.length ? t.join("&") : "";
    }

    function pr(n) { return ni(n, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"); }

    function ni(n, t) { return encodeURIComponent(n).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+"); }

    function is(n, i) {

        function f(n) { n && s.push(n); }

        var s = [n], u, e, o = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        r(o, function(i) {
            o[i] = !0;
            f(t.getElementById(i));
            i = i.replace(":", "\\:");
            n.querySelectorAll && (r(n.querySelectorAll("." + i), f), r(n.querySelectorAll("." + i + "\\:"), f), r(n.querySelectorAll("[" + i + "]"), f));
        });
        r(s, function(n) {
            if (!u) {
                var t = h.exec(" " + n.className + " ");
                t ? (u = n, e = (t[2] || "").replace(/\s+/g, ",")) : r(n.attributes, function(t) { !u && o[t.name] && (u = n, e = t.value); });
            }
        });
        u && i(u, e ? [e] : []);
    }

    function df(i, f) {
        var e = function() {
                if (i = u(i), i.injector()) {
                    var n = i[0] === t ? "document" : ut(i);
                    throw ir("btstrpd", n.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                return f = f || [], f.unshift(["$provide", function(n) { n.value("$rootElement", i); }]), f.unshift("ng"), n = fe(f), n.invoke([
                    "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(n, t, i, r) {
                        n.$apply(function() {
                            t.data("$injector", r);
                            i(t)(n);
                        });
                    }
                ]), n;
            },
            o = /^NG_DEFER_BOOTSTRAP!/;
        if (n && !o.test(n.name)) return e();
        n.name = n.name.replace(o, "");
        rr.resumeBootstrap = function(n) {
            r(n, function(n) { f.push(n); });
            e();
        };
    }

    function wr(n, t) { return t = t || "_", n.replace(nc, function(n, i) { return (i ? t : "") + n.toLowerCase(); }); }

    function lu(n, t, i) {
        if (!n) throw ir("areq", t || "?", i || "required");
        return n;
    }

    function di(n, t, i) { return i && o(n) && (n = n[n.length - 1]), lu(h(n), t, "not a function, got " + (n && "object" == typeof n ? n.constructor.name || "Object" : typeof n)), n; }

    function ti(n, t) { if ("hasOwnProperty" === n) throw ir("badname", t); }

    function gf(n, t, i) {
        if (!t) return n;
        t = t.split(".");
        for (var u, f = n, e = t.length, r = 0; r < e; r++) u = t[r], n && (n = (f = n)[u]);
        return !i && h(n) ? hu(f, n) : n;
    }

    function au(n) {
        var t = n[0], i;
        if (n = n[n.length - 1], t === n) return u(t);
        i = [t];
        do {
            if (t = t.nextSibling, !t) break;
            i.push(t);
        } while (t !== n);
        return u(i);
    }

    function rs(n) {
        var t = y("$injector"), i = y("ng");
        return n = n.angular || (n.angular = {}), n.$$minErr = n.$$minErr || y, n.module || (n.module = function() {
            var n = {};
            return function(r, u, f) {
                if ("hasOwnProperty" === r) throw i("badname", "module");
                return u && n.hasOwnProperty(r) && (n[r] = null), n[r] || (n[r] = function() {

                    function n(n, t, r) { return function() { return i[r || "push"]([n, t, arguments]), s; }; }

                    if (!u) throw t("nomod", r);
                    var i = [], e = [], o = n("$injector", "invoke"), s = { _invokeQueue: i, _runBlocks: e, requires: u, name: r, provider: n("$provide", "provider"), factory: n("$provide", "factory"), service: n("$provide", "service"), value: n("$provide", "value"), constant: n("$provide", "constant", "unshift"), animation: n("$animateProvider", "register"), filter: n("$filterProvider", "register"), controller: n("$controllerProvider", "register"), directive: n("$compileProvider", "directive"), config: o, run: function(n) { return e.push(n), this; } };
                    return f && o(f), s;
                }());
            };
        }());
    }

    function us(t) {
        c(t, { bootstrap: df, copy: oi, extend: c, equals: gt, element: u, forEach: r, injector: fe, noop: s, bind: hu, toJson: st, fromJson: wf, identity: pi, isUndefined: l, isDefined: f, isString: e, isFunction: h, isObject: a, isNumber: vr, isElement: go, isArray: o, version: tc, isDate: yt, lowercase: v, uppercase: ci, callbacks: { counter: 0 }, $$minErr: y, $$csp: fr });
        ur = rs(n);
        try {
            ur("ngLocale");
        } catch (i) {
            ur("ngLocale", []).provider("$locale", nh);
        }
        ur("ng", ["ngLocale"], [
            "$provide", function(n) {
                n.provider({ $$sanitizeUri: sh });
                n.provider("$compile", ee).directive({ a: ao, input: po, textarea: po, form: rl, script: ba, select: ga, style: tv, option: nv, ngBind: pl, ngBindHtml: bl, ngBindTemplate: wl, ngClass: kl, ngClassEven: gl, ngClassOdd: dl, ngCloak: na, ngController: ta, ngForm: ul, ngHide: la, ngIf: ra, ngInclude: ua, ngInit: ea, ngNonBindable: oa, ngPluralize: sa, ngRepeat: ha, ngShow: ca, ngStyle: aa, ngSwitch: va, ngSwitchWhen: ya, ngSwitchDefault: pa, ngOptions: da, ngTransclude: wa, ngModel: cl, ngList: al, ngChange: ll, required: wo, ngRequired: wo, ngValue: yl }).directive({ ngInclude: fa }).directive(fu).directive(bo);
                n.provider({ $anchorScroll: es, $animate: yc, $browser: hs, $cacheFactory: cs, $controller: as, $document: vs, $exceptionHandler: ys, $filter: ke, $interpolate: ds, $interval: gs, $http: ps, $httpBackend: bs, $location: th, $log: ih, $parse: rh, $rootScope: oh, $q: uh, $sce: lh, $sceDelegate: ch, $sniffer: ah, $templateCache: ls, $timeout: vh, $window: yh, $$rAF: eh, $$asyncCallback: os });
            }
        ]);
    }

    function gi(n) { return n.replace(rc, function(n, t, i, r) { return r ? i.toUpperCase() : i; }).replace(uc, "Moz$1"); }

    function vu(n, t, i, r) {

        function e(n) {
            var h = i && n ? [this.filter(n)] : [this], c = t, l, o, a, e, s, v;
            if (!r || null != n) for (; h.length;) for (l = h.shift(), o = 0, a = l.length; o < a; o++) for (e = u(l[o]), c ? e.triggerHandler("$destroy") : c = !c, s = 0, e = (v = e.children()).length; s < e; s++) h.push(ii(v[s]));
            return f.apply(this, arguments);
        }

        var f = ii.fn[n], f = f.$original || f;
        e.$original = f;
        ii.fn[n] = e;
    }

    function w(n) {
        var r, o, i, f;
        if (n instanceof w) return n;
        if (e(n) && (n = g(n)), !(this instanceof w)) {
            if (e(n) && "<" != n.charAt(0)) throw ef("nosel");
            return new w(n);
        }
        if (e(n)) {
            if (r = n, n = t, o = fc.exec(r)) n = [n.createElement(o[1])];
            else {
                if (i = n, n = i.createDocumentFragment(), o = [], of.test(r)) {
                    for (i = n.appendChild(i.createElement("div")), f = (ec.exec(r) || ["", ""])[1].toLowerCase(), f = tt[f] || tt._default, i.innerHTML = "<div>&#160;<\/div>" + f[1] + r.replace(oc, "<$1><\/$2>") + f[2], i.removeChild(i.firstChild), r = f[0]; r--;) i = i.lastChild;
                    for (r = 0, f = i.childNodes.length; r < f; ++r) o.push(i.childNodes[r]);
                    i = n.firstChild;
                    i.textContent = "";
                } else o.push(i.createTextNode(r));
                n.textContent = "";
                n.innerHTML = "";
                n = o;
            }
            ku(this, n);
            u(t.createDocumentFragment()).append(this);
        } else ku(this, n);
    }

    function yu(n) { return n.cloneNode(!0); }

    function si(n) {
        pu(n);
        var t = 0;
        for (n = n.childNodes || []; t < n.length; t++) si(n[t]);
    }

    function ne(n, t, i, u) {
        if (f(u)) throw ef("offargs");
        var e = ht(n, "events");
        ht(n, "handle") && (l(t) ? r(e, function(t, i) {
            or(n, i, t);
            delete e[i];
        }) : r(t.split(" "), function(t) { l(i) ? (or(n, t, e[t]), delete e[t]) : bi(e[t] || [], i); }));
    }

    function pu(n, t) {
        var u = n.ng339, r = er[u];
        r && (t ? delete er[u].data[t] : (r.handle && (r.events.$destroy && r.handle({}, "$destroy"), ne(n)), delete er[u], n.ng339 = i));
    }

    function ht(n, t, i) {
        var r = n.ng339, r = er[r || -1];
        if (f(i)) r || (n.ng339 = r = ++ic, r = er[r] = {}), r[t] = i;
        else return r && r[t];
    }

    function wu(n, t, i) {
        var r = ht(n, "data"), u = f(i), e = !u && f(t), o = e && !a(t);
        if (r || o || ht(n, "data", r = {}), u) r[t] = i;
        else if (e) {
            if (o) return r && r[t];
            c(r, t);
        } else return r;
    }

    function bu(n, t) { return n.getAttribute ? -1 < (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") : !1; }

    function br(n, t) { t && n.setAttribute && r(t.split(" "), function(t) { n.setAttribute("class", g((" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + g(t) + " ", " "))); }); }

    function kr(n, t) {
        if (t && n.setAttribute) {
            var i = (" " + (n.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(t.split(" "), function(n) {
                n = g(n);
                -1 === i.indexOf(" " + n + " ") && (i += n + " ");
            });
            n.setAttribute("class", g(i));
        }
    }

    function ku(n, t) {
        if (t) {
            t = t.nodeName || !f(t.length) || ei(t) ? [t] : t;
            for (var i = 0; i < t.length; i++) n.push(t[i]);
        }
    }

    function te(n, t) { return dr(n, "$" + (t || "ngController") + "Controller"); }

    function dr(n, t, r) {
        for (9 == n.nodeType && (n = n.documentElement), t = o(t) ? t : [t]; n;) {
            for (var f = 0, e = t.length; f < e; f++) if ((r = u.data(n, t[f])) !== i) return r;
            n = n.parentNode || 11 === n.nodeType && n.host;
        }
    }

    function ie(n) {
        for (var t = 0, i = n.childNodes; t < i.length; t++) si(i[t]);
        for (; n.firstChild;) n.removeChild(n.firstChild);
    }

    function re(n, t) {
        var i = sr[t.toLowerCase()];
        return i && sf[n.nodeName] && i;
    }

    function fs(n, i) {
        var u = function(u, f) {
            var e, o;
            u.preventDefault || (u.preventDefault = function() { u.returnValue = !1; });
            u.stopPropagation || (u.stopPropagation = function() { u.cancelBubble = !0; });
            u.target || (u.target = u.srcElement || t);
            l(u.defaultPrevented) && (e = u.preventDefault, u.preventDefault = function() {
                u.defaultPrevented = !0;
                e.call(u);
            }, u.defaultPrevented = !1);
            u.isDefaultPrevented = function() { return u.defaultPrevented || !1 === u.returnValue; };
            o = rt(i[f || u.type] || []);
            r(o, function(t) { t.call(n, u); });
            8 >= p ? (u.preventDefault = null, u.stopPropagation = null, u.isDefaultPrevented = null) : (delete u.preventDefault, delete u.stopPropagation, delete u.isDefaultPrevented);
        };
        return u.elem = n, u;
    }

    function hi(n, t) {
        var u = typeof n, r;
        return "function" == u || "object" == u && null !== n ? "function" == typeof (r = n.$$hashKey) ? r = n.$$hashKey() : r === i && (r = n.$$hashKey = (t || ar)()) : r = n, u + ":" + r;
    }

    function nr(n, t) {
        if (t) {
            var i = 0;
            this.nextUid = function() { return ++i; };
        }
        r(n, this.put, this);
    }

    function ue(n) {
        var i, t;
        return "function" == typeof n ? (i = n.$inject) || (i = [], n.length && (t = n.toString().replace(ac, ""), t = t.match(hc), r(t[1].split(cc), function(n) { n.replace(lc, function(n, t, r) { i.push(r); }); })), n.$inject = i) : o(n) ? (t = n.length - 1, di(n[t], "fn"), i = n.slice(0, t)) : di(n, "fn", !0), i;
    }

    function fe(n) {

        function i(n) {
            return function(t, i) {
                if (a(t)) r(t, vf(n));
                else return n(t, i);
            };
        }

        function w(n, i) {
            if (ti(n, "service"), (h(i) || o(i)) && (i = t.instantiate(i)), !i.$get) throw hr("pget", n);
            return u[n + c] = i;
        }

        function v(n, t) { return w(n, { $get: t }); }

        function b(n) {
            var i = [], u, s, f, c;
            return r(n, function(n) {
                if (!d.get(n)) {
                    d.put(n, !0);
                    try {
                        if (e(n))
                            for (u = ur(n), i = i.concat(b(u.requires)).concat(u._runBlocks), s = u._invokeQueue, f = 0, c = s.length; f < c; f++) {
                                var l = s[f], a = t.get(l[0]);
                                a[l[1]].apply(a, l[2]);
                            }
                        else h(n) ? i.push(t.invoke(n)) : o(n) ? i.push(t.invoke(n)) : di(n, "module");
                    } catch (r) {
                        throw o(n) && (n = n[n.length - 1]), r.message && r.stack && -1 == r.stack.indexOf(r.message) && (r = r.message + "\n" + r.stack), hr("modulerr", n, r.stack || r.message || r);
                    }
                }
            }), i;
        }

        function k(n, t) {

            function i(i) {
                if (n.hasOwnProperty(i)) {
                    if (n[i] === y) throw hr("cdep", i + " <- " + l.join(" <- "));
                    return n[i];
                }
                try {
                    return l.unshift(i), n[i] = y, n[i] = t(i);
                } catch (r) {
                    throw n[i] === y && delete n[i], r;
                } finally {
                    l.shift();
                }
            }

            function r(n, t, r) {
                for (var s = [], h = ue(n), u, f = 0, e = h.length; f < e; f++) {
                    if (u = h[f], "string" != typeof u) throw hr("itkn", u);
                    s.push(r && r.hasOwnProperty(u) ? r[u] : i(u));
                }
                return o(n) && (n = n[e]), n.apply(t, s);
            }

            return {
                invoke: r,
                instantiate: function(n, t) {
                    var i = function() {}, u;
                    return i.prototype = (o(n) ? n[n.length - 1] : n).prototype, i = new i, u = r(n, i, t), a(u) || h(u) ? u : i;
                },
                get: i,
                annotate: ue,
                has: function(t) { return u.hasOwnProperty(t + c) || n.hasOwnProperty(t); }
            };
        }

        var y = {},
            c = "Provider",
            l = [],
            d = new nr([], !0),
            u = {
                $provide: {
                    provider: i(w),
                    factory: i(v),
                    service: i(function(n, t) { return v(n, ["$injector", function(n) { return n.instantiate(t); }]); }),
                    value: i(function(n, t) { return v(n, nt(t)); }),
                    constant: i(function(n, t) {
                        ti(n, "constant");
                        u[n] = t;
                        p[n] = t;
                    }),
                    decorator: function(n, i) {
                        var r = t.get(n + c), u = r.$get;
                        r.$get = function() {
                            var n = f.invoke(u, r);
                            return f.invoke(i, null, { $delegate: n });
                        };
                    }
                }
            },
            t = u.$injector = k(u, function() { throw hr("unpr", l.join(" <- ")); }),
            p = {},
            f = p.$injector = k(p, function(n) { return n = t.get(n + c), f.invoke(n.$get, n); });
        return r(b(n), function(n) { f.invoke(n || s); }), f;
    }

    function es() {
        var n = !0;
        this.disableAutoScrolling = function() { n = !1; };
        this.$get = [
            "$window", "$location", "$rootScope", function(t, i, u) {

                function o(n) {
                    var t = null;
                    return r(n, function(n) { t || "a" !== v(n.nodeName) || (t = n); }), t;
                }

                function f() {
                    var n = i.hash(), r;
                    n ? (r = e.getElementById(n)) ? r.scrollIntoView() : (r = o(e.getElementsByName(n))) ? r.scrollIntoView() : "top" === n && t.scrollTo(0, 0) : t.scrollTo(0, 0);
                }

                var e = t.document;
                return n && u.$watch(function() { return i.hash(); }, function() { u.$evalAsync(f); }), f;
            }
        ];
    }

    function os() { this.$get = ["$$rAF", "$timeout", function(n, t) { return n.supported ? function(t) { return n(t); } : function(n) { return t(n, 0, !1); }; }]; }

    function ss(n, t, f, o) {

        function nt(n) {
            try {
                n.apply(null, ri.call(arguments, 1));
            } finally {
                if (a--, 0 === a)
                    for (; b.length;)
                        try {
                            b.pop()();
                        } catch (t) {
                            f.error(t);
                        }
            }
        }

        function ht(n, t) {
            (function i() {
                r(k, function(n) { n(); });
                ot = t(i, n);
            })();
        }

        function v() {
            it = null;
            d != h.url() && (d = h.url(), r(rt, function(n) { n(h.url()); }));
        }

        var h = this, y = t[0], c = n.location, p = n.history, et = n.setTimeout, ct = n.clearTimeout, w = {}, a, b, k, ot, rt, ut;
        h.isMock = !1;
        a = 0;
        b = [];
        h.$$completeOutstandingRequest = nt;
        h.$$incOutstandingRequestCount = function() { a++; };
        h.notifyWhenNoOutstandingRequests = function(n) {
            r(k, function(n) { n(); });
            0 === a ? n() : b.push(n);
        };
        k = [];
        h.addPollFn = function(n) { return l(ot) && ht(100, et), k.push(n), n; };
        var d = c.href, tt = t.find("base"), it = null;
        h.url = function(t, i) {
            if (c !== n.location && (c = n.location), p !== n.history && (p = n.history), t) {
                if (d != t) return d = t, o.history ? i ? p.replaceState(null, "", t) : (p.pushState(null, "", t), tt.attr("href", tt.attr("href"))) : (it = t, i ? c.replace(t) : c.href = t), h;
            } else return it || c.href.replace(/%27/g, "'");
        };
        rt = [];
        ut = !1;
        h.onUrlChange = function(t) {
            if (!ut) {
                if (o.history) u(n).on("popstate", v);
                if (o.hashchange) u(n).on("hashchange", v);
                else h.addPollFn(v);
                ut = !0;
            }
            return rt.push(t), t;
        };
        h.$$checkUrlChange = v;
        h.baseHref = function() {
            var n = tt.attr("href");
            return n ? n.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var g = {}, ft = "", st = h.baseHref();
        h.cookies = function(n, t) {
            var r, u, o, s;
            if (n) t === i ? y.cookie = escape(n) + "=;path=" + st + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : e(t) && (r = (y.cookie = escape(n) + "=" + escape(t) + ";path=" + st).length + 1, 4096 < r && f.warn("Cookie '" + n + "' possibly not set or overflowed because it was too large (" + r + " > 4096 bytes)!"));
            else {
                if (y.cookie !== ft) for (ft = y.cookie, r = ft.split("; "), g = {}, o = 0; o < r.length; o++) u = r[o], s = u.indexOf("="), 0 < s && (n = unescape(u.substring(0, s)), g[n] === i && (g[n] = unescape(u.substring(s + 1))));
                return g;
            }
        };
        h.defer = function(n, t) {
            var i;
            return a++, i = et(function() {
                delete w[i];
                nt(n);
            }, t || 0), w[i] = !0, i;
        };
        h.defer.cancel = function(n) { return w[n] ? (delete w[n], ct(n), nt(s), !0) : !1; };
    }

    function hs() { this.$get = ["$window", "$log", "$sniffer", "$document", function(n, t, i, r) { return new ss(n, r, t, i); }]; }

    function cs() {
        this.$get = function() {

            function t(t, i) {

                function a(n) { n != f && (r ? r == n && (r = n.n) : r = n, h(n.n, n.p), h(n, f), f = n, f.n = null); }

                function h(n, t) { n != t && (n && (n.p = t), t && (t.n = n)); }

                if (t in n) throw y("$cacheFactory")("iid", t);
                var o = 0, v = c({}, i, { id: t }), e = {}, s = i && i.capacity || Number.MAX_VALUE, u = {}, f = null, r = null;
                return n[t] = {
                    put: function(n, t) {
                        if (s < Number.MAX_VALUE) {
                            var i = u[n] || (u[n] = { key: n });
                            a(i);
                        }
                        if (!l(t)) return n in e || o++, e[n] = t, o > s && this.remove(r.key), t;
                    },
                    get: function(n) {
                        if (s < Number.MAX_VALUE) {
                            var t = u[n];
                            if (!t) return;
                            a(t);
                        }
                        return e[n];
                    },
                    remove: function(n) {
                        if (s < Number.MAX_VALUE) {
                            var t = u[n];
                            if (!t) return;
                            t == f && (f = t.p);
                            t == r && (r = t.n);
                            h(t.n, t.p);
                            delete u[n];
                        }
                        delete e[n];
                        o--;
                    },
                    removeAll: function() {
                        e = {};
                        o = 0;
                        u = {};
                        f = r = null;
                    },
                    destroy: function() {
                        u = v = e = null;
                        delete n[t];
                    },
                    info: function() { return c({}, v, { size: o }); }
                };
            }

            var n = {};
            return t.info = function() {
                var t = {};
                return r(n, function(n, i) { t[i] = n.info(); }), t;
            }, t.get = function(t) { return n[t]; }, t;
        };
    }

    function ls() { this.$get = ["$cacheFactory", function(n) { return n("templates"); }]; }

    function ee(n, s) {
        var l = {}, v = "Directive", y = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, w = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, b = /^(on[a-z]+|formaction)$/;
        this.directive = function k(t, i) {
            return ti(t, "directive"), e(t) ? (lu(i, "directiveFactory"), l.hasOwnProperty(t) || (l[t] = [], n.factory(t + v, [
                "$injector", "$exceptionHandler", function(n, i) {
                    var u = [];
                    return r(l[t], function(r, f) {
                        try {
                            var e = n.invoke(r);
                            h(e) ? e = { compile: nt(e) } : !e.compile && e.link && (e.compile = nt(e.link));
                            e.priority = e.priority || 0;
                            e.index = f;
                            e.name = e.name || t;
                            e.require = e.require || e.controller && e.name;
                            e.restrict = e.restrict || "A";
                            u.push(e);
                        } catch (o) {
                            i(o);
                        }
                    }), u;
                }
            ])), l[t].push(i)) : r(t, vf(k)), this;
        };
        this.aHrefSanitizationWhitelist = function(n) { return f(n) ? (s.aHrefSanitizationWhitelist(n), this) : s.aHrefSanitizationWhitelist(); };
        this.imgSrcSanitizationWhitelist = function(n) { return f(n) ? (s.imgSrcSanitizationWhitelist(n), this) : s.imgSrcSanitizationWhitelist(); };
        this.$get = [
            "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(n, f, s, k, d, nt, tt, it, ft, ot, st, ht) {

                function wt(n, t, i, f, e) {
                    n instanceof u || (n = u(n));
                    r(n, function(t, i) { 3 == t.nodeType && t.nodeValue.match(/\S+/) && (n[i] = u(t).wrap("<span><\/span>").parent()[0]); });
                    var o = bt(n, t, n, i, f, e);
                    return lt(n, "ng-scope"), function(t, i, u, f) {
                        var e, h, s;
                        for (lu(t, "scope"), e = i ? fi.clone.call(n) : n, r(u, function(n, t) { e.data("$" + t + "Controller", n); }), u = 0, h = e.length; u < h; u++) s = e[u].nodeType, 1 !== s && 9 !== s || e.eq(u).data("$scope", t);
                        return i && i(e, t), o && o(t, e, e, f), e;
                    };
                }

                function lt(n, t) {
                    try {
                        n.addClass(t);
                    } catch (i) {
                    }
                }

                function bt(n, t, r, f, e, o) {

                    function y(n, r, f, e) {
                        var s, h, l, o, y, a, p, v;
                        for (s = r.length, v = Array(s), o = 0; o < s; o++) v[o] = r[o];
                        for (a = o = 0, y = c.length; o < y; a++) h = v[a], r = c[o++], s = c[o++], r ? (r.scope ? (l = n.$new(), u.data(h, "$scope", l)) : l = n, p = r.transcludeOnThisElement ? vt(n, r.transclude, e) : !r.templateOnThisElement && e ? e : !e && t ? vt(n, t) : null, r(s, l, h, f, p)) : s && s(n, h.childNodes, i, e);
                    }

                    for (var c = [], s, l, a, v, h = 0; h < n.length; h++) s = new dt, l = kt(n[h], [], s, 0 === h ? f : i, e), (o = l.length ? ii(l, n[h], s, t, r, null, [], [], o) : null) && o.scope && lt(s.$$element, "ng-scope"), s = o && o.terminal || !(a = n[h].childNodes) || !a.length ? null : bt(a, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : t), c.push(o, s), v = v || o || s, o = null;
                    return v ? y : null;
                }

                function vt(n, t, i) {
                    return function(r, u, f) {
                        var e = !1;
                        if (r || (r = n.$new(), e = r.$$transcluded = !0), u = t(r, u, f, i), e) u.on("$destroy", function() { r.$destroy(); });
                        return u;
                    };
                }

                function kt(n, t, i, r, u) {
                    var k = i.$attr, o, l, a, b;
                    switch (n.nodeType) {
                    case 1:
                        yt(t, ct(li(n).toLowerCase()), "E", r, u);
                        for (var f, s, v, h = n.attributes, c = 0, d = h && h.length; c < d; c++) l = !1, a = !1, f = h[c], (!p || 8 <= p || f.specified) && (o = f.name, s = g(f.value), f = ct(o), (v = ki.test(f)) && (o = wr(f.substr(6), "-")), b = f.replace(/(Start|End)$/, ""), f === b + "Start" && (l = o, a = o.substr(0, o.length - 5) + "end", o = o.substr(0, o.length - 6)), f = ct(o.toLowerCase()), k[f] = o, (v || !i.hasOwnProperty(f)) && (i[f] = s, re(n, f) && (i[f] = !0)), bi(n, t, s, f), yt(t, f, "A", r, u, l, a));
                        if (n = n.className, e(n) && "" !== n) for (; o = w.exec(n);) f = ct(o[2]), yt(t, f, "C", r, u) && (i[f] = g(o[3])), n = n.substr(o.index + o[0].length);
                        break;
                    case 3:
                        yi(t, n.nodeValue);
                        break;
                    case 8:
                        try {
                            (o = y.exec(n.nodeValue)) && (f = ct(o[1]), yt(t, f, "M", r, u) && (i[f] = g(o[2])));
                        } catch (nt) {
                        }
                    }
                    return t.sort(vi), t;
                }

                function ni(n, t, i) {
                    var r = [], f = 0;
                    if (t && n.hasAttribute && n.hasAttribute(t)) {
                        do {
                            if (!n) throw et("uterdir", t, i);
                            1 == n.nodeType && (n.hasAttribute(t) && f++, n.hasAttribute(i) && f--);
                            r.push(n);
                            n = n.nextSibling;
                        } while (0 < f);
                    } else r.push(n);
                    return u(r);
                }

                function ti(n, t, i) { return function(r, u, f, e, o) { return u = ni(u[0], t, i), n(r, u, f, e, o); }; }

                function ii(n, c, l, v, y, p, w, b, k) {

                    function di(n, t, i, r) {
                        n && (i && (n = ti(n, i, r)), n.require = d.require, n.directiveName = st, (ft === d || d.$$isolateScope) && (n = oi(n, { isolateScope: !0 })), w.push(n));
                        t && (i && (t = ti(t, i, r)), t.require = d.require, t.directiveName = st, (ft === d || d.$$isolateScope) && (t = oi(t, { isolateScope: !0 })), b.push(t));
                    }

                    function wi(n, t, i, u) {
                        var f, s = "data", h = !1;
                        if (e(t)) {
                            for (; "^" == (f = t.charAt(0)) || "?" == f;) t = t.substr(1), "^" == f && (s = "inheritedData"), h = h || "?" == f;
                            if (f = null, u && "data" === s && (f = u[t]), f = f || i[s]("$" + t + "Controller"), !f && !h) throw et("ctreq", t, n);
                        } else o(t) && (f = [], r(t, function(t) { f.push(wi(n, t, i, u)); }));
                        return f;
                    }

                    function ct(n, t, e, o, h) {

                        function st(n, t) {
                            var r;
                            return 2 > arguments.length && (t = n, n = i), yi && (r = d), h(n, t, r);
                        }

                        var v, y, it, p, k, a, d = {}, g, ot;
                        for (v = c === e ? l : rt(l, new dt(u(e), l.$attr)), y = v.$$element, ft && (ot = /^\s*([@=&])(\??)\s*(\w*)\s*$/, a = t.$new(!0), !ht || ht !== ft && ht !== ft.$$originalDirective ? y.data("$isolateScopeNoTemplate", a) : y.data("$isolateScope", a), lt(y, "ng-isolate-scope"), r(ft.scope, function(n, i) {
                            var e = n.match(ot) || [], r = e[3] || i, c = "?" == e[2], e = e[1], o, u, h, s;
                            a.$$isolateBindings[i] = e + r;
                            switch (e) {
                            case "@":
                                v.$observe(r, function(n) { a[i] = n; });
                                v.$$observers[r].$$scope = t;
                                v[r] && (a[i] = f(v[r])(t));
                                break;
                            case "=":
                                if (c && !v[r]) break;
                                u = nt(v[r]);
                                s = u.literal ? gt : function(n, t) { return n === t || n !== n && t !== t; };
                                h = u.assign || function() {
                                    o = a[i] = u(t);
                                    throw et("nonassign", v[r], ft.name);
                                };
                                o = a[i] = u(t);
                                a.$watch(function() {
                                    var n = u(t);
                                    return s(n, a[i]) || (s(n, o) ? h(t, n = a[i]) : a[i] = n), o = n;
                                }, null, u.literal);
                                break;
                            case "&":
                                u = nt(v[r]);
                                a[i] = function(n) { return u(t, n); };
                                break;
                            default:
                                throw et("iscp", ft.name, i, n);
                            }
                        })), g = h && st, vt && r(vt, function(n) {
                            var r = { $scope: n === ft || n.$$isolateScope ? a : t, $element: y, $attrs: v, $transclude: g }, i;
                            k = n.controller;
                            "@" == k && (k = v[n.name]);
                            i = tt(k, r);
                            d[n.name] = i;
                            yi || y.data("$" + n.name + "Controller", i);
                            n.controllerAs && (r.$scope[n.controllerAs] = i);
                        }), o = 0, it = w.length; o < it; o++)
                            try {
                                p = w[o];
                                p(p.isolateScope ? a : t, y, v, p.require && wi(p.directiveName, p.require, y, d), g);
                            } catch (ct) {
                                s(ct, ut(y));
                            }
                        for (o = t, ft && (ft.template || null === ft.templateUrl) && (o = a), n && n(o, e.childNodes, i, h), o = b.length - 1; 0 <= o; o--)
                            try {
                                p = b[o];
                                p(p.isolateScope ? a : t, y, v, p.require && wi(p.directiveName, p.require, y, d), g);
                            } catch (at) {
                                s(at, ut(y));
                            }
                    }

                    var hi, pi, gi;
                    k = k || {};
                    for (var fi = -Number.MAX_VALUE, li, vt = k.controllerDirectives, ft = k.newIsolateScopeDirective, ht = k.templateDirective, vi = k.nonTlbTranscludeDirective, bi = !1, ki = !1, yi = k.hasElementTranscludeDirective, ot = l.$$element = u(c), d, st, it, si = v, bt, yt = 0, ii = n.length; yt < ii; yt++) {
                        if (d = n[yt], hi = d.$$start, pi = d.$$end, hi && (ot = ni(c, hi, pi)), it = i, fi > d.priority) break;
                        if ((it = d.scope) && (li = li || d, d.templateUrl || (at("new/isolated scope", ft, d, ot), a(it) && (ft = d))), st = d.name, !d.templateUrl && d.controller && (it = d.controller, vt = vt || {}, at("'" + st + "' controller", vt[st], d, ot), vt[st] = d), (it = d.transclude) && (bi = !0, d.$$tlb || (at("transclusion", vi, d, ot), vi = d), "element" == it ? (yi = !0, fi = d.priority, it = ot, ot = l.$$element = u(t.createComment(" " + st + ": " + l[st] + " ")), c = ot[0], pt(y, ri.call(it, 0), c), si = wt(it, v, fi, p && p.name, { nonTlbTranscludeDirective: vi })) : (it = u(yu(c)).contents(), ot.empty(), si = wt(it, v))), d.template)
                            if (ki = !0, at("template", ht, d, ot), ht = d, it = h(d.template) ? d.template(ot, l) : d.template, it = ci(it), d.replace) {
                                if (p = d, it = of.test(it) ? u(g(it)) : [], c = it[0], 1 != it.length || 1 !== c.nodeType) throw et("tplrt", st, "");
                                pt(y, ot, c);
                                ii = { $attr: {} };
                                it = kt(c, [], ii);
                                gi = n.splice(yt + 1, n.length - (yt + 1));
                                ft && ui(it);
                                n = n.concat(it).concat(gi);
                                ei(l, ii);
                                ii = n.length;
                            } else ot.html(it);
                        if (d.templateUrl) ki = !0, at("template", ht, d, ot), ht = d, d.replace && (p = d), ct = ai(n.splice(yt, n.length - yt), ot, l, y, bi && si, w, b, { controllerDirectives: vt, newIsolateScopeDirective: ft, templateDirective: ht, nonTlbTranscludeDirective: vi }), ii = n.length;
                        else if (d.compile)
                            try {
                                bt = d.compile(ot, l, si);
                                h(bt) ? di(null, bt, hi, pi) : bt && di(bt.pre, bt.post, hi, pi);
                            } catch (nr) {
                                s(nr, ut(ot));
                            }
                        d.terminal && (ct.terminal = !0, fi = Math.max(fi, d.priority));
                    }
                    return ct.scope = li && !0 === li.scope, ct.transcludeOnThisElement = bi, ct.templateOnThisElement = ki, ct.transclude = si, k.hasElementTranscludeDirective = yi, ct;
                }

                function ui(n) { for (var t = 0, i = n.length; t < i; t++) n[t] = pf(n[t], { $$isolateScope: !0 }); }

                function yt(t, r, u, f, e, o, h) {
                    var c, a, y;
                    if (r === e) return null;
                    if (e = null, l.hasOwnProperty(r))
                        for (r = n.get(r + v), a = 0, y = r.length; a < y; a++)
                            try {
                                c = r[a];
                                (f === i || f > c.priority) && -1 != c.restrict.indexOf(u) && (o && (c = pf(c, { $$start: o, $$end: h })), t.push(c), e = c);
                            } catch (p) {
                                s(p);
                            }
                    return e;
                }

                function ei(n, t) {
                    var u = t.$attr, f = n.$attr, i = n.$$element;
                    r(n, function(i, r) { "$" != r.charAt(0) && (t[r] && t[r] !== i && (i += ("style" === r ? ";" : " ") + t[r]), n.$set(r, i, !0, u[r])); });
                    r(t, function(t, r) { "class" == r ? (lt(i, t), n["class"] = (n["class"] ? n["class"] + " " : "") + t) : "style" == r ? (i.attr("style", i.attr("style") + ";" + t), n.style = (n.style ? n.style + ";" : "") + t) : "$" == r.charAt(0) || n.hasOwnProperty(r) || (n[r] = t, f[r] = u[r]); });
                }

                function ai(n, t, i, f, e, o, s, l) {
                    var v = [], p, w, b = t[0], y = n.shift(), tt = c({}, y, { templateUrl: null, transclude: null, replace: null, $$originalDirective: y }), nt = h(y.templateUrl) ? y.templateUrl(t, i) : y.templateUrl;
                    return t.empty(), k.get(ot.getTrustedResourceUrl(nt), { cache: d }).success(function(h) {
                        var c, d, k, rt;
                        if (h = ci(h), y.replace) {
                            if (h = of.test(h) ? u(g(h)) : [], c = h[0], 1 != h.length || 1 !== c.nodeType) throw et("tplrt", y.name, nt);
                            h = { $attr: {} };
                            pt(f, t, c);
                            k = kt(c, [], h);
                            a(y.scope) && ui(k);
                            n = k.concat(n);
                            ei(i, h);
                        } else c = b, t.html(h);
                        for (n.unshift(tt), p = ii(n, c, i, e, t, y, o, s, l), r(f, function(n, i) { n == c && (f[i] = t[0]); }), w = bt(t[0].childNodes, e); v.length;) {
                            h = v.shift();
                            d = v.shift();
                            var ut = v.shift(), it = v.shift(), k = t[0];
                            d !== b && (rt = d.className, l.hasElementTranscludeDirective && y.replace || (k = yu(c)), pt(ut, u(d), k), lt(u(k), rt));
                            d = p.transcludeOnThisElement ? vt(h, p.transclude, it) : it;
                            p(w, h, k, f, d);
                        }
                        v = null;
                    }).error(function(n, t, i, r) { throw et("tpload", r.url); }), function(n, t, i, r, u) {
                        n = u;
                        v ? (v.push(t), v.push(i), v.push(r), v.push(n)) : (p.transcludeOnThisElement && (n = vt(t, p.transclude, u)), p(w, t, i, r, n));
                    };
                }

                function vi(n, t) {
                    var i = t.priority - n.priority;
                    return 0 !== i ? i : n.name !== t.name ? n.name < t.name ? -1 : 1 : n.index - t.index;
                }

                function at(n, t, i, r) { if (t) throw et("multidir", t.name, i.name, n, ut(r)); }

                function yi(n, t) {
                    var i = f(t, !0);
                    i && n.push({
                        priority: 0,
                        compile: function(n) {
                            var t = n.parent().length;
                            return t && lt(n.parent(), "ng-binding"), function(n, r) {
                                var u = r.parent(), f = u.data("$binding") || [];
                                f.push(i);
                                u.data("$binding", f);
                                t || lt(u, "ng-binding");
                                n.$watch(i, function(n) { r[0].nodeValue = n; });
                            };
                        }
                    });
                }

                function wi(n, t) {
                    if ("srcdoc" == t) return ot.HTML;
                    var i = li(n);
                    if ("xlinkHref" == t || "FORM" == i && "action" == t || "IMG" != i && ("src" == t || "ngSrc" == t)) return ot.RESOURCE_URL;
                }

                function bi(n, t, i, r) {
                    var u = f(i, !0);
                    if (u) {
                        if ("multiple" === r && "SELECT" === li(n)) throw et("selmulti", ut(n));
                        t.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(t, i, e) {
                                        if (i = e.$$observers || (e.$$observers = {}), b.test(r)) throw et("nodomevents");
                                        (u = f(e[r], !0, wi(n, r))) && (e[r] = u(t), (i[r] || (i[r] = [])).$$inter = !0, (e.$$observers && e.$$observers[r].$$scope || t).$watch(u, function(n, t) { "class" === r && n != t ? e.$updateClass(n, t) : e.$set(r, n); }));
                                    }
                                };
                            }
                        });
                    }
                }

                function pt(n, i, r) {
                    var f = i[0], h = i.length, s = f.parentNode, e, o, c;
                    if (n)
                        for (e = 0, o = n.length; e < o; e++)
                            if (n[e] == f) {
                                for (n[e++] = r, o = e + h - 1, c = n.length; e < c; e++, o++) o < c ? n[e] = n[o] : delete n[e];
                                n.length -= h - 1;
                                break;
                            }
                    for (s && s.replaceChild(r, f), n = t.createDocumentFragment(), n.appendChild(f), r[u.expando] = f[u.expando], f = 1, h = i.length; f < h; f++) s = i[f], u(s).remove(), n.appendChild(s), delete i[f];
                    i[0] = r;
                    i.length = 1;
                }

                function oi(n, t) { return c(function() { return n.apply(null, arguments); }, n, t); }

                var dt = function(n, t) {
                    this.$$element = n;
                    this.$attr = t || {};
                };
                dt.prototype = {
                    $normalize: ct,
                    $addClass: function(n) { n && 0 < n.length && st.addClass(this.$$element, n); },
                    $removeClass: function(n) { n && 0 < n.length && st.removeClass(this.$$element, n); },
                    $updateClass: function(n, t) {
                        var i = oe(n, t), r = oe(t, n);
                        0 === i.length ? st.removeClass(this.$$element, r) : 0 === r.length ? st.addClass(this.$$element, i) : st.setClass(this.$$element, i, r);
                    },
                    $set: function(n, t, u, f) {
                        var e = re(this.$$element[0], n);
                        e && (this.$$element.prop(n, t), f = e);
                        this[n] = t;
                        f ? this.$attr[n] = f : (f = this.$attr[n]) || (this.$attr[n] = f = wr(n, "-"));
                        e = li(this.$$element);
                        ("A" === e && "href" === n || "IMG" === e && "src" === n) && (this[n] = t = ht(t, "src" === n));
                        !1 !== u && (null === t || t === i ? this.$$element.removeAttr(f) : this.$$element.attr(f, t));
                        (u = this.$$observers) && r(u[n], function(n) {
                            try {
                                n(t);
                            } catch (i) {
                                s(i);
                            }
                        });
                    },
                    $observe: function(n, t) {
                        var i = this, r = i.$$observers || (i.$$observers = {}), u = r[n] || (r[n] = []);
                        return u.push(t), it.$evalAsync(function() { u.$$inter || t(i[n]); }), t;
                    }
                };
                var si = f.startSymbol(), hi = f.endSymbol(), ci = "{{" == si || "}}" == hi ? pi : function(n) { return n.replace(/\{\{/g, si).replace(/}}/g, hi); }, ki = /^ngAttr[A-Z]/;
                return wt;
            }
        ];
    }

    function ct(n) { return gi(n.replace(pc, "")); }

    function oe(n, t) {
        var r = "", e = n.split(/\s+/), o = t.split(/\s+/), u = 0, f, i;
        n: for (; u < e.length; u++) {
            for (f = e[u], i = 0; i < o.length; i++) if (f == o[i]) continue n;
            r += (0 < r.length ? " " : "") + f;
        }
        return r;
    }

    function as() {
        var n = {}, t = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(t, i) {
            ti(t, "controller");
            a(t) ? c(n, t) : n[t] = i;
        };
        this.$get = [
            "$injector", "$window", function(i, r) {
                return function(u, f) {
                    var s, o, h;
                    if (e(u) && (s = u.match(t), o = s[1], h = s[3], u = n.hasOwnProperty(o) ? n[o] : gf(f.$scope, o, !0) || gf(r, o, !0), di(u, o, !0)), s = i.instantiate(u, f), h) {
                        if (!f || "object" != typeof f.$scope) throw y("$controller")("noscp", o || u.name, h);
                        f.$scope[h] = s;
                    }
                    return s;
                };
            }
        ];
    }

    function vs() { this.$get = ["$window", function(n) { return u(n.document); }]; }

    function ys() { this.$get = ["$log", function(n) { return function() { n.error.apply(n, arguments); }; }]; }

    function se(n) {
        var t = {}, i, u, f;
        return n ? (r(n.split("\n"), function(n) {
            f = n.indexOf(":");
            i = v(g(n.substr(0, f)));
            u = g(n.substr(f + 1));
            i && (t[i] = t[i] ? t[i] + ", " + u : u);
        }), t) : t;
    }

    function he(n) {
        var t = a(n) ? n : i;
        return function(i) { return t || (t = se(n)), i ? t[v(i)] || null : t; };
    }

    function ce(n, t, i) { return h(i) ? i(n, t) : (r(i, function(i) { n = i(n, t); }), n); }

    function ps() {
        var u = /^\s*(\[|\{[^\{])/, s = /[\}\]]\s*$/, y = /^\)\]\}',?\n/, t = { "Content-Type": "application/json;charset=utf-8" }, n = this.defaults = { transformResponse: [function(n) { return e(n) && (n = n.replace(y, ""), u.test(n) && s.test(n) && (n = wf(n))), n; }], transformRequest: [function(n) { return a(n) && "[object File]" !== ui.call(n) && "[object Blob]" !== ui.call(n) ? st(n) : n; }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: rt(t), put: rt(t), patch: rt(t) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN" }, p = this.interceptors = [], w = this.responseInterceptors = [];
        this.$get = [
            "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(t, u, s, y, b, k) {

                function d(t) {

                    function s(n) {
                        var t = c({}, n, { data: ce(n.data, n.headers, f.transformResponse) });
                        return 200 <= n.status && 300 > n.status ? t : b.reject(t);
                    }

                    var f = { method: "get", transformRequest: n.transformRequest, transformResponse: n.transformResponse },
                        e = function(t) {
                            var i = n.headers, u = c({}, t.headers), f, e, i = c({}, i.common, i[v(t.method)]);
                            n: for (f in i) {
                                t = v(f);
                                for (e in u) if (v(e) === t) continue n;
                                u[f] = i[f];
                            }
                            return function(n) {
                                var t;
                                r(n, function(i, r) { h(i) && (t = i(), null != t ? n[r] = t : delete n[r]); });
                            }(u), u;
                        }(t),
                        o,
                        a,
                        u;
                    for (c(f, t), f.headers = e, f.method = ci(f.method), o = [
                        function(t) {
                            e = t.headers;
                            var i = ce(t.data, he(e), t.transformRequest);
                            return l(i) && r(e, function(n, t) { "content-type" === v(t) && delete e[t]; }), l(t.withCredentials) && !l(n.withCredentials) && (t.withCredentials = n.withCredentials), nt(t, i, e).then(s, s);
                        }, i
                    ], u = b.when(f), r(g, function(n) {
                        (n.request || n.requestError) && o.unshift(n.request, n.requestError);
                        (n.response || n.responseError) && o.push(n.response, n.responseError);
                    }); o.length;) t = o.shift(), a = o.shift(), u = u.then(t, a);
                    return u.success = function(n) { return u.then(function(t) { n(t.data, t.status, t.headers, f); }), u; }, u.error = function(n) { return u.then(null, function(t) { n(t.data, t.status, t.headers, f); }), u; }, u;
                }

                function nt(r, e, s) {

                    function ut(n, t, i, r) {
                        v && (200 <= n && 300 > n ? v.put(p, [n, t, se(i), r]) : v.remove(p));
                        k(t, n, i, r);
                        y.$$phase || y.$apply();
                    }

                    function k(n, t, i, u) {
                        t = Math.max(t, 0);
                        (200 <= t && 300 > t ? g.resolve : g.reject)({ data: n, status: t, headers: he(i), config: r, statusText: u });
                    }

                    function w() {
                        var n = wi(d.pendingRequests, r);
                        -1 !== n && d.pendingRequests.splice(n, 1);
                    }

                    var g = b.defer(), nt = g.promise, v, c, p = tt(r.url, r.params);
                    if (d.pendingRequests.push(r), nt.then(w, w), (r.cache || n.cache) && !1 !== r.cache && ("GET" === r.method || "JSONP" === r.method) && (v = a(r.cache) ? r.cache : a(n.cache) ? n.cache : it), v)
                        if (c = v.get(p), f(c)) {
                            if (c && h(c.then)) return c.then(w, w), c;
                            o(c) ? k(c[1], c[0], rt(c[2]), c[3]) : k(c, 200, {}, "OK");
                        } else v.put(p, nt);
                    return l(c) && ((c = rf(r.url) ? u.cookies()[r.xsrfCookieName || n.xsrfCookieName] : i) && (s[r.xsrfHeaderName || n.xsrfHeaderName] = c), t(r.method, p, e, ut, s, r.timeout, r.withCredentials, r.responseType)), nt;
                }

                function tt(n, t) {
                    if (!t) return n;
                    var i = [];
                    return ko(t, function(n, t) {
                        null === n || l(n) || (o(n) || (n = [n]), r(n, function(n) {
                            a(n) && (n = yt(n) ? n.toISOString() : st(n));
                            i.push(ni(t) + "=" + ni(n));
                        }));
                    }), 0 < i.length && (n += (-1 == n.indexOf("?") ? "?" : "&") + i.join("&")), n;
                }

                var it = s("$http"), g = [];
                return r(p, function(n) { g.unshift(e(n) ? k.get(n) : k.invoke(n)); }), r(w, function(n, t) {
                    var i = e(n) ? k.get(n) : k.invoke(n);
                    g.splice(t, 0, { response: function(n) { return i(b.when(n)); }, responseError: function(n) { return i(b.reject(n)); } });
                }), d.pendingRequests = [], function() { r(arguments, function(n) { d[n] = function(t, i) { return d(c(i || {}, { method: n, url: t })); }; }); }("get", "delete", "head", "jsonp"), function() { r(arguments, function(n) { d[n] = function(t, i, r) { return d(c(r || {}, { method: n, url: t, data: i })); }; }); }("post", "put"), d.defaults = n, d;
            }
        ];
    }

    function ws(t) {
        if (8 >= p && (!t.match(/^(get|post|head|put|delete|options)$/i) || !n.XMLHttpRequest)) return new n.ActiveXObject("Microsoft.XMLHTTP");
        if (n.XMLHttpRequest) return new n.XMLHttpRequest;
        throw y("$httpBackend")("noxhr");
    }

    function bs() { this.$get = ["$browser", "$window", "$document", function(n, t, i) { return ks(n, ws, n.defer, t.angular.callbacks, i[0]); }]; }

    function ks(n, t, i, u, o) {

        function l(n, t, i) {
            var r = o.createElement("script"), f = null;
            return r.type = "text/javascript", r.src = n, r.async = !0, f = function(n) {
                or(r, "load", f);
                or(r, "error", f);
                o.body.removeChild(r);
                r = null;
                var e = -1, s = "unknown";
                n && ("load" !== n.type || u[t].called || (n = { type: "error" }), s = n.type, e = "error" === n.type ? 404 : 200);
                i && i(e, s);
            }, uu(r, "load", f), uu(r, "error", f), 8 >= p && (r.onreadystatechange = function() { e(r.readyState) && /loaded|complete/.test(r.readyState) && (r.onreadystatechange = null, f({ type: "load" })); }), o.body.appendChild(r), f;
        }

        var c = -1;
        return function(e, o, a, y, w, b, k, d) {

            function ut() {
                tt = c;
                it && it();
                g && g.abort();
            }

            function ft(t, r, u, f, e) {
                rt && i.cancel(rt);
                it = g = null;
                0 === r && (r = u ? 200 : "file" == wt(o).protocol ? 404 : 0);
                t(1223 === r ? 204 : r, u, f, e || "");
                n.$$completeOutstandingRequest(s);
            }

            var tt, nt, it, g, rt;
            if (n.$$incOutstandingRequestCount(), o = o || n.url(), "jsonp" == v(e))
                nt = "_" + (u.counter++).toString(36), u[nt] = function(n) {
                    u[nt].data = n;
                    u[nt].called = !0;
                }, it = l(o.replace("JSON_CALLBACK", "angular.callbacks." + nt), nt, function(n, t) {
                    ft(y, n, u[nt].data, "", t);
                    u[nt] = s;
                });
            else {
                if (g = t(e), g.open(e, o, !0), r(w, function(n, t) { f(n) && g.setRequestHeader(t, n); }), g.onreadystatechange = function() {
                    if (g && 4 == g.readyState) {
                        var n = null, t = null, i = "";
                        tt !== c && (n = g.getAllResponseHeaders(), t = "response" in g ? g.response : g.responseText);
                        tt === c && 10 > p || (i = g.statusText);
                        ft(y, tt || g.status, t, n, i);
                    }
                }, k && (g.withCredentials = !0), d)
                    try {
                        g.responseType = d;
                    } catch (et) {
                        if ("json" !== d) throw et;
                    }
                g.send(a || null);
            }
            0 < b ? rt = i(ut, b) : b && h(b.then) && b.then(ut);
        };
    }

    function ds() {
        var n = "{{", t = "}}";
        this.startSymbol = function(t) { return t ? (n = t, this) : n; };
        this.endSymbol = function(n) { return n ? (t = n, this) : t; };
        this.$get = [
            "$parse", "$exceptionHandler", "$sce", function(i, r, u) {

                function f(f, s, h) {
                    for (var v, p, c = 0, l = [], a = f.length, y = !1, w = []; c < a;) -1 != (v = f.indexOf(n, c)) && -1 != (p = f.indexOf(t, v + e)) ? (c != v && l.push(f.substring(c, v)), l.push(c = i(y = f.substring(v + e, p))), c.exp = y, c = p + o, y = !0) : (c != a && l.push(f.substring(c)), c = a);
                    if ((a = l.length) || (l.push(""), a = 1), h && 1 < l.length) throw fo("noconcat", f);
                    if (!s || y)
                        return w.length = a, c = function(n) {
                            try {
                                for (var i = 0, e = a, t; i < e; i++) {
                                    if ("function" == typeof (t = l[i]))
                                        if (t = t(n), t = h ? u.getTrusted(h, t) : u.valueOf(t), null == t) t = "";
                                        else
                                            switch (typeof t) {
                                            case "string":
                                                break;
                                            case "number":
                                                t = "" + t;
                                                break;
                                            default:
                                                t = st(t);
                                            }
                                    w[i] = t;
                                }
                                return w.join("");
                            } catch (o) {
                                n = fo("interr", f, o.toString());
                                r(n);
                            }
                        }, c.exp = f, c.parts = l, c;
                }

                var e = n.length, o = t.length;
                return f.startSymbol = function() { return n; }, f.endSymbol = function() { return t; }, f;
            }
        ];
    }

    function gs() {
        this.$get = [
            "$rootScope", "$window", "$q", function(n, t, i) {

                function u(u, e, o, s) {
                    var a = t.setInterval, v = t.clearInterval, c = i.defer(), h = c.promise, l = 0, y = f(s) && !s;
                    return o = f(o) ? o : 0, h.then(null, null, u), h.$$intervalId = a(function() {
                        c.notify(l++);
                        0 < o && l >= o && (c.resolve(l), v(h.$$intervalId), delete r[h.$$intervalId]);
                        y || n.$apply();
                    }, e), r[h.$$intervalId] = c, h;
                }

                var r = {};
                return u.cancel = function(n) { return n && n.$$intervalId in r ? (r[n.$$intervalId].reject("canceled"), t.clearInterval(n.$$intervalId), delete r[n.$$intervalId], !0) : !1; }, u;
            }
        ];
    }

    function nh() { this.$get = function() { return { id: "en-us", NUMBER_FORMATS: { DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3 }, { minInt: 1, minFrac: 2, maxFrac: 2, posPre: "Â¤", posSuf: "", negPre: "(Â¤", negSuf: ")", gSize: 3, lgSize: 3 }], CURRENCY_SYM: "$" }, DATETIME_FORMATS: { MONTH: "January February March April May June July August September October November December".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", short: "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a" }, pluralCat: function(n) { return 1 === n ? "one" : "other"; } }; }; }

    function du(n) {
        n = n.split("/");
        for (var t = n.length; t--;) n[t] = pr(n[t]);
        return n.join("/");
    }

    function le(n, t, i) {
        n = wt(n, i);
        t.$$protocol = n.protocol;
        t.$$host = n.hostname;
        t.$$port = b(n.port) || bc[n.protocol] || null;
    }

    function ae(n, t, i) {
        var r = "/" !== n.charAt(0);
        r && (n = "/" + n);
        n = wt(n, i);
        t.$$path = decodeURIComponent(r && "/" === n.pathname.charAt(0) ? n.pathname.substring(1) : n.pathname);
        t.$$search = kf(n.search);
        t.$$hash = decodeURIComponent(n.hash);
        t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path);
    }

    function lt(n, t) { if (0 === t.indexOf(n)) return t.substr(n.length); }

    function tr(n) {
        var t = n.indexOf("#");
        return -1 == t ? n : n.substr(0, t);
    }

    function gu(n) { return n.substr(0, tr(n).lastIndexOf("/") + 1); }

    function ve(n, t) {
        this.$$html5 = !0;
        t = t || "";
        var r = gu(n);
        le(n, this, n);
        this.$$parse = function(t) {
            var i = lt(r, t);
            if (!e(i)) throw hf("ipthprfx", t, r);
            ae(i, this, n);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function() {
            var n = cu(this.$$search), t = this.$$hash ? "#" + pr(this.$$hash) : "";
            this.$$url = du(this.$$path) + (n ? "?" + n : "") + t;
            this.$$absUrl = r + this.$$url.substr(1);
        };
        this.$$rewrite = function(u) {
            var f;
            return (f = lt(n, u)) !== i ? (u = f, (f = lt(t, f)) !== i ? r + (lt("/", f) || f) : n + u) : (f = lt(r, u)) !== i ? r + f : r == u + "/" ? r : void 0;
        };
    }

    function nf(n, t) {
        var i = gu(n);
        le(n, this, n);
        this.$$parse = function(r) {
            var u = lt(n, r) || lt(i, r), u = "#" == u.charAt(0) ? lt(t, u) : this.$$html5 ? u : "", f;
            if (!e(u)) throw hf("ihshprfx", r, t);
            ae(u, this, n);
            r = this.$$path;
            f = /^\/[A-Z]:(\/.*)/;
            0 === u.indexOf(n) && (u = u.replace(n, ""));
            f.exec(u) || (r = (u = f.exec(r)) ? u[1] : r);
            this.$$path = r;
            this.$$compose();
        };
        this.$$compose = function() {
            var i = cu(this.$$search), r = this.$$hash ? "#" + pr(this.$$hash) : "";
            this.$$url = du(this.$$path) + (i ? "?" + i : "") + r;
            this.$$absUrl = n + (this.$$url ? t + this.$$url : "");
        };
        this.$$rewrite = function(t) { if (tr(n) == tr(t)) return t; };
    }

    function tf(n, t) {
        this.$$html5 = !0;
        nf.apply(this, arguments);
        var i = gu(n);
        this.$$rewrite = function(r) {
            var u;
            return n == tr(r) ? r : (u = lt(i, r)) ? n + t + u : i === r + "/" ? i : void 0;
        };
        this.$$compose = function() {
            var i = cu(this.$$search), r = this.$$hash ? "#" + pr(this.$$hash) : "";
            this.$$url = du(this.$$path) + (i ? "?" + i : "") + r;
            this.$$absUrl = n + t + this.$$url;
        };
    }

    function gr(n) { return function() { return this[n]; }; }

    function ye(n, t) { return function(i) { return l(i) ? this[n] : (this[n] = t(i), this.$$compose(), this); }; }

    function th() {
        var t = "", i = !1;
        this.hashPrefix = function(n) { return f(n) ? (t = n, this) : t; };
        this.html5Mode = function(n) { return f(n) ? (i = n, this) : i; };
        this.$get = [
            "$rootScope", "$browser", "$sniffer", "$rootElement", function(r, f, e, o) {

                function p(n) { r.$broadcast("$locationChangeSuccess", s.absUrl(), n); }

                var s, l, b = f.baseHref(), h = f.url(), c, w, y;
                i ? (c = h.substring(0, h.indexOf("/", h.indexOf("//") + 2)) + (b || "/"), l = e.history ? ve : tf) : (c = tr(h), l = nf);
                s = new l(c, "#" + t);
                s.$$parse(s.$$rewrite(h));
                w = /^\s*(javascript|mailto):/i;
                o.on("click", function(i) {
                    var p, e, y, h, b;
                    if (!i.ctrlKey && !i.metaKey && 2 != i.which) {
                        for (p = u(i.target); "a" !== v(p[0].nodeName);) if (p[0] === o[0] || !(p = p.parent())[0]) return;
                        if (e = p.prop("href"), a(e) && "[object SVGAnimatedString]" === e.toString() && (e = wt(e.animVal).href), !w.test(e)) {
                            if (l === tf && (h = p.attr("href") || p.attr("xlink:href"), h && 0 > h.indexOf("://")))
                                if (e = "#" + t, "/" == h[0]) e = c + e + h;
                                else if ("#" == h[0]) e = c + e + (s.path() || "/") + h;
                                else {
                                    for (y = s.path().split("/"), h = h.split("/"), 2 !== y.length || y[1] || (y.length = 1), b = 0; b < h.length; b++) "." != h[b] && (".." == h[b] ? y.pop() : h[b].length && y.push(h[b]));
                                    e = c + e + y.join("/");
                                }
                            y = s.$$rewrite(e);
                            e && !p.attr("target") && y && !i.isDefaultPrevented() && (i.preventDefault(), y != f.url() && (s.$$parse(y), r.$apply(), n.angular["ff-684208-preventDefault"] = !0));
                        }
                    }
                });
                s.absUrl() != h && f.url(s.absUrl(), !0);
                f.onUrlChange(function(n) {
                    s.absUrl() != n && (r.$evalAsync(function() {
                        var t = s.absUrl();
                        s.$$parse(n);
                        r.$broadcast("$locationChangeStart", n, t).defaultPrevented ? (s.$$parse(t), f.url(t)) : p(t);
                    }), r.$$phase || r.$digest());
                });
                return y = 0, r.$watch(function() {
                    var n = f.url(), t = s.$$replace;
                    return y && n == s.absUrl() || (y++, r.$evalAsync(function() { r.$broadcast("$locationChangeStart", s.absUrl(), n).defaultPrevented ? s.$$parse(n) : (f.url(s.absUrl(), t), p(n)); })), s.$$replace = !1, y;
                }), s;
            }
        ];
    }

    function ih() {
        var n = !0, t = this;
        this.debugEnabled = function(t) { return f(t) ? (n = t, this) : n; };
        this.$get = [
            "$window", function(i) {

                function f(n) { return n instanceof Error && (n.stack ? n = n.message && -1 === n.stack.indexOf(n.message) ? "Error: " + n.message + "\n" + n.stack : n.stack : n.sourceURL && (n = n.message + "\n" + n.sourceURL + ":" + n.line)), n; }

                function u(n) {
                    var t = i.console || {}, u = t[n] || t.log || s;
                    n = !1;
                    try {
                        n = !!u.apply;
                    } catch (e) {
                    }
                    return n ? function() {
                        var n = [];
                        return r(arguments, function(t) { n.push(f(t)); }), u.apply(t, n);
                    } : function(n, t) { u(n, null == t ? "" : t); };
                }

                return {
                    log: u("log"),
                    info: u("info"),
                    warn: u("warn"),
                    error: u("error"),
                    debug: function() {
                        var i = u("debug");
                        return function() { n && i.apply(t, arguments); };
                    }()
                };
            }
        ];
    }

    function ft(n, t) {
        if ("__defineGetter__" === n || "__defineSetter__" === n || "__lookupGetter__" === n || "__lookupSetter__" === n || "__proto__" === n) throw ot("isecfld", t);
        return n;
    }

    function pt(n, t) {
        if (n) {
            if (n.constructor === n) throw ot("isecfn", t);
            if (n.document && n.location && n.alert && n.setInterval) throw ot("isecwindow", t);
            if (n.children && (n.nodeName || n.prop && n.attr && n.find)) throw ot("isecdom", t);
            if (n === Object) throw ot("isecobj", t);
        }
        return n;
    }

    function nu(n, t, r, u, f) {
        var e, s, o;
        for (pt(n, u), f = f || {}, t = t.split("."), s = 0; 1 < t.length; s++) e = ft(t.shift(), u), o = pt(n[e], u), o || (o = {}, n[e] = o), n = o, n.then && f.unwrapPromises && (kt(u), "$$v" in n || function(n) { n.then(function(t) { n.$$v = t; }); }(n), n.$$v === i && (n.$$v = {}), n = n.$$v);
        return e = ft(t.shift(), u), pt(n[e], u), n[e] = r;
    }

    function pe(n, t, r, u, f, e, o) {
        return ft(n, e), ft(t, e), ft(r, e), ft(u, e), ft(f, e), o.unwrapPromises ? function(o, s) {
            var h = s && s.hasOwnProperty(n) ? s : o, c;
            return null == h ? h : ((h = h[n]) && h.then && (kt(e), "$$v" in h || (c = h, c.$$v = i, c.then(function(n) { c.$$v = n; })), h = h.$$v), !t) ? h : null == h ? i : ((h = h[t]) && h.then && (kt(e), "$$v" in h || (c = h, c.$$v = i, c.then(function(n) { c.$$v = n; })), h = h.$$v), !r) ? h : null == h ? i : ((h = h[r]) && h.then && (kt(e), "$$v" in h || (c = h, c.$$v = i, c.then(function(n) { c.$$v = n; })), h = h.$$v), !u) ? h : null == h ? i : ((h = h[u]) && h.then && (kt(e), "$$v" in h || (c = h, c.$$v = i, c.then(function(n) { c.$$v = n; })), h = h.$$v), !f) ? h : null == h ? i : ((h = h[f]) && h.then && (kt(e), "$$v" in h || (c = h, c.$$v = i, c.then(function(n) { c.$$v = n; })), h = h.$$v), h);
        } : function(e, o) {
            var s = o && o.hasOwnProperty(n) ? o : e;
            return null == s ? s : (s = s[n], !t) ? s : null == s ? i : (s = s[t], !r) ? s : null == s ? i : (s = s[r], !u) ? s : null == s ? i : (s = s[u], f ? null == s ? i : s = s[f] : s);
        };
    }

    function we(n, t, u) {
        var f, h, o, e, s;
        return lf.hasOwnProperty(n) ? lf[n] : (f = n.split("."), h = f.length, t.csp ? o = 6 > h ? pe(f[0], f[1], f[2], f[3], f[4], u, t) : function(n, r) {
            var e = 0, o;
            do o = pe(f[e++], f[e++], f[e++], f[e++], f[e++], u, t)(n, r), r = i, n = o;
            while (e < h);
            return o;
        } : (e = "var p;\n", r(f, function(n, i) {
            ft(n, u);
            e += "if(s == null) return undefined;\ns=" + (i ? "s" : '((k&&k.hasOwnProperty("' + n + '"))?k:s)') + '["' + n + '"];\n' + (t.unwrapPromises ? 'if (s && s.then) {\n pw("' + u.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
        }), e = e + "return s;", s = new Function("s", "k", "pw", e), s.toString = nt(e), o = t.unwrapPromises ? function(n, t) { return s(n, t, kt); } : s), "hasOwnProperty" !== n && (lf[n] = o), o);
    }

    function rh() {
        var t = {}, n = { csp: !1, unwrapPromises: !1, logPromiseWarnings: !0 };
        this.unwrapPromises = function(t) { return f(t) ? (n.unwrapPromises = !!t, this) : n.unwrapPromises; };
        this.logPromiseWarnings = function(t) { return f(t) ? (n.logPromiseWarnings = t, this) : n.logPromiseWarnings; };
        this.$get = [
            "$filter", "$sniffer", "$log", function(i, r, u) {
                return n.csp = r.csp, kt = function(t) { n.logPromiseWarnings && !eo.hasOwnProperty(t) && (eo[t] = !0, u.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated.")); }, function(r) {
                    var u;
                    switch (typeof r) {
                    case "string":
                        return t.hasOwnProperty(r) ? t[r] : (u = new cf(n), u = new ai(u, i, n).parse(r), "hasOwnProperty" !== r && (t[r] = u), u);
                    case "function":
                        return r;
                    default:
                        return s;
                    }
                };
            }
        ];
    }

    function uh() { this.$get = ["$rootScope", "$exceptionHandler", function(n, t) { return fh(function(t) { n.$evalAsync(t); }, t); }]; }

    function fh(n, t) {

        function f(n) { return n; }

        function c(n) { return s(n); }

        var u = function() {
                var r = [], o, s;
                return s = {
                    resolve: function(t) {
                        if (r) {
                            var u = r;
                            r = i;
                            o = e(t);
                            u.length && n(function() { for (var n, t = 0, i = u.length; t < i; t++) n = u[t], o.then(n[0], n[1], n[2]); });
                        }
                    },
                    reject: function(n) { s.resolve(l(n)); },
                    notify: function(t) {
                        if (r) {
                            var i = r;
                            r.length && n(function() { for (var r, n = 0, u = i.length; n < u; n++) r = i[n], r[2](t); });
                        }
                    },
                    promise: {
                        then: function(n, i, e) {
                            var s = u(),
                                l = function(i) {
                                    try {
                                        s.resolve((h(n) ? n : f)(i));
                                    } catch (r) {
                                        s.reject(r);
                                        t(r);
                                    }
                                },
                                a = function(n) {
                                    try {
                                        s.resolve((h(i) ? i : c)(n));
                                    } catch (r) {
                                        s.reject(r);
                                        t(r);
                                    }
                                },
                                v = function(n) {
                                    try {
                                        s.notify((h(e) ? e : f)(n));
                                    } catch (i) {
                                        t(i);
                                    }
                                };
                            return r ? r.push([l, a, v]) : o.then(l, a, v), s.promise;
                        },
                        "catch": function(n) { return this.then(null, n); },
                        "finally": function(n) {

                            function t(n, t) {
                                var i = u();
                                return t ? i.resolve(n) : i.reject(n), i.promise;
                            }

                            function i(i, r) {
                                var u = null;
                                try {
                                    u = (n || f)();
                                } catch (e) {
                                    return t(e, !1);
                                }
                                return u && h(u.then) ? u.then(function() { return t(i, r); }, function(n) { return t(n, !1); }) : t(i, r);
                            }

                            return this.then(function(n) { return i(n, !0); }, function(n) { return i(n, !1); });
                        }
                    }
                };
            },
            e = function(t) {
                return t && h(t.then) ? t : {
                    then: function(i) {
                        var r = u();
                        return n(function() { r.resolve(i(t)); }), r.promise;
                    }
                };
            },
            s = function(n) {
                var t = u();
                return t.reject(n), t.promise;
            },
            l = function(i) {
                return {
                    then: function(r, f) {
                        var e = u();
                        return n(function() {
                            try {
                                e.resolve((h(f) ? f : c)(i));
                            } catch (n) {
                                e.reject(n);
                                t(n);
                            }
                        }), e.promise;
                    }
                };
            };
        return {
            defer: u,
            reject: s,
            when: function(i, r, o, l) {
                var v = u(),
                    a,
                    w = function(n) {
                        try {
                            return (h(r) ? r : f)(n);
                        } catch (i) {
                            return t(i), s(i);
                        }
                    },
                    y = function(n) {
                        try {
                            return (h(o) ? o : c)(n);
                        } catch (i) {
                            return t(i), s(i);
                        }
                    },
                    p = function(n) {
                        try {
                            return (h(l) ? l : f)(n);
                        } catch (i) {
                            t(i);
                        }
                    };
                return n(function() { e(i).then(function(n) { a || (a = !0, v.resolve(e(n).then(w, y, p))); }, function(n) { a || (a = !0, v.resolve(y(n))); }, function(n) { a || v.notify(p(n)); }); }), v.promise;
            },
            all: function(n) {
                var i = u(), f = 0, t = o(n) ? [] : {};
                return r(n, function(n, r) {
                    f++;
                    e(n).then(function(n) { t.hasOwnProperty(r) || (t[r] = n, --f || i.resolve(t)); }, function(n) { t.hasOwnProperty(r) || i.reject(n); });
                }), 0 === f && i.resolve(t), i.promise;
            }
        };
    }

    function eh() {
        this.$get = [
            "$window", "$timeout", function(n, t) {
                var i = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame,
                    f = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.webkitCancelRequestAnimationFrame,
                    r = !!i,
                    u = r ? function(n) {
                        var t = i(n);
                        return function() { f(t); };
                    } : function(n) {
                        var i = t(n, 16.66, !1);
                        return function() { t.cancel(i); };
                    };
                return u.supported = r, u;
            }
        ];
    }

    function oh() {
        var t = 10, i = y("$rootScope"), n = null;
        this.digestTtl = function(n) { return arguments.length && (t = n), t; };
        this.$get = [
            "$injector", "$exceptionHandler", "$parse", "$browser", function(u, f, e, o) {

                function l() {
                    this.$id = ar();
                    this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                    this["this"] = this.$root = this;
                    this.$$destroyed = !1;
                    this.$$asyncQueue = [];
                    this.$$postDigestQueue = [];
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$$isolateBindings = {};
                }

                function v(n) {
                    if (c.$$phase) throw i("inprog", c.$$phase);
                    c.$$phase = n;
                }

                function y(n, t) {
                    var i = e(n);
                    return di(i, t), i;
                }

                function p(n, t, i) {
                    do n.$$listenerCount[i] -= t, 0 === n.$$listenerCount[i] && delete n.$$listenerCount[i];
                    while (n = n.$parent);
                }

                function w() {}

                l.prototype = {
                    constructor: l,
                    $new: function(n) {
                        return n ? (n = new l, n.$root = this.$root, n.$$asyncQueue = this.$$asyncQueue, n.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                            this.$$listeners = {};
                            this.$$listenerCount = {};
                            this.$id = ar();
                            this.$$childScopeClass = null;
                        }, this.$$childScopeClass.prototype = this), n = new this.$$childScopeClass), n["this"] = n, n.$parent = this, n.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = n : this.$$childHead = this.$$childTail = n, n;
                    },
                    $watch: function(t, i, r) {
                        var e = y(t, "watch"), f = this.$$watchers, u = { fn: i, last: w, get: e, exp: t, eq: !!r }, o, c;
                        return n = null, h(i) || (o = y(i || s, "listener"), u.fn = function(n, t, i) { o(i); }), "string" == typeof t && e.constant && (c = u.fn, u.fn = function(n, t, i) {
                            c.call(this, n, t, i);
                            bi(f, u);
                        }), f || (f = this.$$watchers = []), f.unshift(u), function() {
                            bi(f, u);
                            n = null;
                        };
                    },
                    $watchCollection: function(n, t) {
                        var s = this, i, r, o, v = 1 < t.length, u = 0, y = e(n), h = [], c = {}, l = !0, f = 0;
                        return this.$watch(function() {
                            i = y(s);
                            var t, n, e;
                            if (a(i))
                                if (yi(i)) for (r !== h && (r = h, f = r.length = 0, u++), t = i.length, f !== t && (u++, r.length = f = t), n = 0; n < t; n++) e = r[n] !== r[n] && i[n] !== i[n], e || r[n] === i[n] || (u++, r[n] = i[n]);
                                else {
                                    r !== c && (r = c = {}, f = 0, u++);
                                    t = 0;
                                    for (n in i) i.hasOwnProperty(n) && (t++, r.hasOwnProperty(n) ? (e = r[n] !== r[n] && i[n] !== i[n], e || r[n] === i[n] || (u++, r[n] = i[n])) : (f++, r[n] = i[n], u++));
                                    if (f > t) for (n in u++, r) r.hasOwnProperty(n) && !i.hasOwnProperty(n) && (f--, delete r[n]);
                                }
                            else r !== i && (r = i, u++);
                            return u;
                        }, function() {
                            if (l ? (l = !1, t(i, i, s)) : t(i, o, s), v)
                                if (a(i))
                                    if (yi(i)) {
                                        o = Array(i.length);
                                        for (var n = 0; n < i.length; n++) o[n] = i[n];
                                    } else for (n in o = {}, i) ru.call(i, n) && (o[n] = i[n]);
                                else o = i;
                        });
                    },
                    $digest: function() {
                        var r, e, s, l, y = this.$$asyncQueue, tt = this.$$postDigestQueue, k, a, d = t, u, p = [], b, g, nt;
                        v("$digest");
                        o.$$checkUrlChange();
                        n = null;
                        do {
                            for (a = !1, u = this; y.length;) {
                                try {
                                    nt = y.shift();
                                    nt.scope.$eval(nt.expression);
                                } catch (it) {
                                    c.$$phase = null;
                                    f(it);
                                }
                                n = null;
                            }
                            n: do {
                                if (l = u.$$watchers)
                                    for (k = l.length; k--;)
                                        try {
                                            if (r = l[k])
                                                if ((e = r.get(u)) === (s = r.last) || (r.eq ? gt(e, s) : "number" == typeof e && "number" == typeof s && isNaN(e) && isNaN(s))) {
                                                    if (r === n) {
                                                        a = !1;
                                                        break n;
                                                    }
                                                } else a = !0, n = r, r.last = r.eq ? oi(e, null) : e, r.fn(e, s === w ? e : s, u), 5 > d && (b = 4 - d, p[b] || (p[b] = []), g = h(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp, g += "; newVal: " + st(e) + "; oldVal: " + st(s), p[b].push(g));
                                        } catch (rt) {
                                            c.$$phase = null;
                                            f(rt);
                                        }
                                if (!(l = u.$$childHead || u !== this && u.$$nextSibling)) for (; u !== this && !(l = u.$$nextSibling);) u = u.$parent;
                            } while (u = l);
                            if ((a || y.length) && !d--) throw c.$$phase = null, i("infdig", t, st(p));
                        } while (a || y.length);
                        for (c.$$phase = null; tt.length;)
                            try {
                                tt.shift()();
                            } catch (ut) {
                                f(ut);
                            }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var n = this.$parent;
                            this.$broadcast("$destroy");
                            this.$$destroyed = !0;
                            this !== c && (r(this.$$listenerCount, hu(null, p, this)), n.$$childHead == this && (n.$$childHead = this.$$nextSibling), n.$$childTail == this && (n.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = s, this.$on = this.$watch = function() { return s; });
                        }
                    },
                    $eval: function(n, t) { return e(n)(this, t); },
                    $evalAsync: function(n) {
                        c.$$phase || c.$$asyncQueue.length || o.defer(function() { c.$$asyncQueue.length && c.$digest(); });
                        this.$$asyncQueue.push({ scope: this, expression: n });
                    },
                    $$postDigest: function(n) { this.$$postDigestQueue.push(n); },
                    $apply: function(n) {
                        try {
                            return v("$apply"), this.$eval(n);
                        } catch (i) {
                            f(i);
                        } finally {
                            c.$$phase = null;
                            try {
                                c.$digest();
                            } catch (t) {
                                throw f(t), t;
                            }
                        }
                    },
                    $on: function(n, t) {
                        var r = this.$$listeners[n], i, u;
                        r || (this.$$listeners[n] = r = []);
                        r.push(t);
                        i = this;
                        do i.$$listenerCount[n] || (i.$$listenerCount[n] = 0), i.$$listenerCount[n]++;
                        while (i = i.$parent);
                        return u = this, function() {
                            r[wi(r, t)] = null;
                            p(u, 1, n);
                        };
                    },
                    $emit: function(n) {
                        var s = [], r, i = this, o = !1, u = { name: n, targetScope: i, stopPropagation: function() { o = !0; }, preventDefault: function() { u.defaultPrevented = !0; }, defaultPrevented: !1 }, h = [u].concat(ri.call(arguments, 1)), t, e;
                        do {
                            for (r = i.$$listeners[n] || s, u.currentScope = i, t = 0, e = r.length; t < e; t++)
                                if (r[t])
                                    try {
                                        r[t].apply(null, h);
                                    } catch (c) {
                                        f(c);
                                    }
                                else r.splice(t, 1), t--, e--;
                            if (o) break;
                            i = i.$parent;
                        } while (i);
                        return u;
                    },
                    $broadcast: function(n) {
                        for (var t = this, i = this, u = { name: n, targetScope: this, preventDefault: function() { u.defaultPrevented = !0; }, defaultPrevented: !1 }, o = [u].concat(ri.call(arguments, 1)), r, e; t = i;) {
                            for (u.currentScope = t, i = t.$$listeners[n] || [], r = 0, e = i.length; r < e; r++)
                                if (i[r])
                                    try {
                                        i[r].apply(null, o);
                                    } catch (s) {
                                        f(s);
                                    }
                                else i.splice(r, 1), r--, e--;
                            if (!(i = t.$$listenerCount[n] && t.$$childHead || t !== this && t.$$nextSibling)) for (; t !== this && !(i = t.$$nextSibling);) t = t.$parent;
                        }
                        return u;
                    }
                };
                var c = new l;
                return c;
            }
        ];
    }

    function sh() {
        var n = /^\s*(https?|ftp|mailto|tel|file):/, t = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(t) { return f(t) ? (n = t, this) : n; };
        this.imgSrcSanitizationWhitelist = function(n) { return f(n) ? (t = n, this) : t; };
        this.$get = function() {
            return function(i, r) {
                var f = r ? t : n, u;
                return (!p || 8 <= p) && (u = wt(i).href, "" !== u && !u.match(f)) ? "unsafe:" + u : i;
            };
        };
    }

    function hh(n) {
        if ("self" === n) return n;
        if (e(n)) {
            if (-1 < n.indexOf("***")) throw dt("iwcard", n);
            return n = n.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + n + "$");
        }
        if (yr(n)) return RegExp("^" + n.source + "$");
        throw dt("imatcher");
    }

    function be(n) {
        var t = [];
        return f(n) && r(n, function(n) { t.push(hh(n)); }), t;
    }

    function ch() {
        this.SCE_CONTEXTS = it;
        var n = ["self"], t = [];
        this.resourceUrlWhitelist = function(t) { return arguments.length && (n = be(t)), n; };
        this.resourceUrlBlacklist = function(n) { return arguments.length && (t = be(n)), t; };
        this.$get = [
            "$injector", function(r) {

                function f(n) {
                    var t = function(n) { this.$$unwrapTrustedValue = function() { return n; }; };
                    return n && (t.prototype = new n), t.prototype.valueOf = function() { return this.$$unwrapTrustedValue(); }, t.prototype.toString = function() { return this.$$unwrapTrustedValue().toString(); }, t;
                }

                var o = function() { throw dt("unsafe"); }, e, u;
                return r.has("$sanitize") && (o = r.get("$sanitize")), e = f(), u = {}, u[it.HTML] = f(e), u[it.CSS] = f(e), u[it.URL] = f(e), u[it.JS] = f(e), u[it.RESOURCE_URL] = f(u[it.URL]), {
                    trustAs: function(n, t) {
                        var r = u.hasOwnProperty(n) ? u[n] : null;
                        if (!r) throw dt("icontext", n, t);
                        if (null === t || t === i || "" === t) return t;
                        if ("string" != typeof t) throw dt("itype", n);
                        return new r(t);
                    },
                    getTrusted: function(r, f) {
                        var s, e, c, h;
                        if (null === f || f === i || "" === f) return f;
                        if (s = u.hasOwnProperty(r) ? u[r] : null, s && f instanceof s) return f.$$unwrapTrustedValue();
                        if (r === it.RESOURCE_URL) {
                            for (s = wt(f.toString()), h = !1, e = 0, c = n.length; e < c; e++)
                                if ("self" === n[e] ? rf(s) : n[e].exec(s.href)) {
                                    h = !0;
                                    break;
                                }
                            if (h)
                                for (e = 0, c = t.length; e < c; e++)
                                    if ("self" === t[e] ? rf(s) : t[e].exec(s.href)) {
                                        h = !1;
                                        break;
                                    }
                            if (h) return f;
                            throw dt("insecurl", f.toString());
                        }
                        if (r === it.HTML) return o(f);
                        throw dt("unsafe");
                    },
                    valueOf: function(n) { return n instanceof e ? n.$$unwrapTrustedValue() : n; }
                };
            }
        ];
    }

    function lh() {
        var n = !0;
        this.enabled = function(t) { return arguments.length && (n = !!t), n; };
        this.$get = [
            "$parse", "$sniffer", "$sceDelegate", function(t, i, u) {
                var f;
                if (n && i.msie && 8 > i.msieDocumentMode) throw dt("iequirks");
                f = rt(it);
                f.isEnabled = function() { return n; };
                f.trustAs = u.trustAs;
                f.getTrusted = u.getTrusted;
                f.valueOf = u.valueOf;
                n || (f.trustAs = f.getTrusted = function(n, t) { return t; }, f.valueOf = pi);
                f.parseAs = function(n, i) {
                    var r = t(i);
                    return r.literal && r.constant ? r : function(t, i) { return f.getTrusted(n, r(t, i)); };
                };
                var e = f.parseAs, o = f.getTrusted, s = f.trustAs;
                return r(it, function(n, t) {
                    var i = v(t);
                    f[gi("parse_as_" + i)] = function(t) { return e(n, t); };
                    f[gi("get_trusted_" + i)] = function(t) { return o(n, t); };
                    f[gi("trust_as_" + i)] = function(t) { return s(n, t); };
                }), f;
            }
        ];
    }

    function ah() {
        this.$get = [
            "$window", "$document", function(n, t) {
                var s = {}, h = b((/android (\d+)/.exec(v((n.navigator || {}).userAgent)) || [])[1]), y = /Boxee/i.test((n.navigator || {}).userAgent), u = t[0] || {}, c = u.documentMode, i, r = u.body && u.body.style, f = !1, o = !1, a;
                if (r) {
                    for (a in r)
                        if (f = /^(Moz|webkit|O|ms)(?=[A-Z])/.exec(a)) {
                            i = f[0];
                            i = i.substr(0, 1).toUpperCase() + i.substr(1);
                            break;
                        }
                    i || (i = "WebkitOpacity" in r && "webkit");
                    f = !!("transition" in r || i + "Transition" in r);
                    o = !!("animation" in r || i + "Animation" in r);
                    !h || f && o || (f = e(u.body.style.webkitTransition), o = e(u.body.style.webkitAnimation));
                }
                return {
                    history: !(!n.history || !n.history.pushState || 4 > h || y),
                    hashchange: "onhashchange" in n && (!c || 7 < c),
                    hasEvent: function(n) {
                        if ("input" == n && 9 == p) return !1;
                        if (l(s[n])) {
                            var t = u.createElement("div");
                            s[n] = "on" + n in t;
                        }
                        return s[n];
                    },
                    csp: fr(),
                    vendorPrefix: i,
                    transitions: f,
                    animations: o,
                    android: h,
                    msie: p,
                    msieDocumentMode: c
                };
            }
        ];
    }

    function vh() {
        this.$get = [
            "$rootScope", "$browser", "$q", "$exceptionHandler", function(n, t, i, r) {

                function e(e, o, s) {
                    var h = i.defer(), c = h.promise, l = f(s) && !s;
                    return o = t.defer(function() {
                        try {
                            h.resolve(e());
                        } catch (t) {
                            h.reject(t);
                            r(t);
                        } finally {
                            delete u[c.$$timeoutId];
                        }
                        l || n.$apply();
                    }, o), c.$$timeoutId = o, u[o] = h, c;
                }

                var u = {};
                return e.cancel = function(n) { return n && n.$$timeoutId in u ? (u[n.$$timeoutId].reject("canceled"), delete u[n.$$timeoutId], t.defer.cancel(n.$$timeoutId)) : !1; }, e;
            }
        ];
    }

    function wt(n) {
        var t = n;
        return p && (d.setAttribute("href", t), t = d.href), d.setAttribute("href", t), { href: d.href, protocol: d.protocol ? d.protocol.replace(/:$/, "") : "", host: d.host, search: d.search ? d.search.replace(/^\?/, "") : "", hash: d.hash ? d.hash.replace(/^#/, "") : "", hostname: d.hostname, port: d.port, pathname: "/" === d.pathname.charAt(0) ? d.pathname : "/" + d.pathname };
    }

    function rf(n) { return n = e(n) ? wt(n) : n, n.protocol === so.protocol && n.host === so.host; }

    function yh() { this.$get = nt(n); }

    function ke(n) {

        function t(u, f) {
            if (a(u)) {
                var e = {};
                return r(u, function(n, i) { e[i] = t(i, n); }), e;
            }
            return n.factory(u + i, f);
        }

        var i = "Filter";
        this.register = t;
        this.$get = ["$injector", function(n) { return function(t) { return n.get(t + i); }; }];
        t("currency", de);
        t("date", to);
        t("filter", ph);
        t("json", wh);
        t("limitTo", bh);
        t("lowercase", co);
        t("number", ge);
        t("orderBy", io);
        t("uppercase", lo);
    }

    function ph() {
        return function(n, t, i) {
            var u, r, e, f, s;
            if (!o(n)) return n;
            u = typeof i;
            r = [];
            r.check = function(n) {
                for (var t = 0; t < r.length; t++) if (!r[t](n)) return !1;
                return !0;
            };
            "function" !== u && (i = "boolean" === u && i ? function(n, t) { return rr.equals(n, t); } : function(n, t) {
                if (n && t && "object" == typeof n && "object" == typeof t) {
                    for (var r in n) if ("$" !== r.charAt(0) && ru.call(n, r) && i(n[r], t[r])) return !0;
                    return !1;
                }
                return t = ("" + t).toLowerCase(), -1 < ("" + n).toLowerCase().indexOf(t);
            });
            e = function(n, t) {
                if ("string" == typeof t && "!" === t.charAt(0)) return !e(n, t.substr(1));
                switch (typeof n) {
                case "boolean":
                case "number":
                case "string":
                    return i(n, t);
                case "object":
                    switch (typeof t) {
                    case "object":
                        return i(n, t);
                    default:
                        for (var r in n) if ("$" !== r.charAt(0) && e(n[r], t)) return !0;
                    }
                    return !1;
                case "array":
                    for (r = 0; r < n.length; r++) if (e(n[r], t)) return !0;
                    return !1;
                default:
                    return !1;
                }
            };
            switch (typeof t) {
            case "boolean":
            case "number":
            case "string":
                t = { $: t };
            case "object":
                for (f in t) (function(n) { "undefined" != typeof t[n] && r.push(function(i) { return e("$" == n ? i : i && i[n], t[n]); }); })(f);
                break;
            case "function":
                r.push(t);
                break;
            default:
                return n;
            }
            for (u = [], f = 0; f < n.length; f++) s = n[f], r.check(s) && u.push(s);
            return u;
        };
    }

    function de(n) {
        var t = n.NUMBER_FORMATS;
        return function(n, i) { return l(i) && (i = t.CURRENCY_SYM), no(n, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, 2).replace(/\u00A4/g, i); };
    }

    function ge(n) {
        var t = n.NUMBER_FORMATS;
        return function(n, i) { return no(n, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, i); };
    }

    function no(n, t, i, r, u) {
        var h, o;
        if (null == n || !isFinite(n) || a(n)) return "";
        h = 0 > n;
        n = Math.abs(n);
        var f = n + "", s = "", c = [], e = !1;
        if (-1 !== f.indexOf("e") && (o = f.match(/([\d\.]+)e(-?)(\d+)/), o && "-" == o[2] && o[3] > u + 1 ? (f = "0", n = 0) : (s = f, e = !0)), e) 0 < u && -1 < n && 1 > n && (s = n.toFixed(u));
        else {
            f = (f.split(ho)[1] || "").length;
            l(u) && (u = Math.min(Math.max(t.minFrac, f), t.maxFrac));
            n = +(Math.round(+(n.toString() + "e" + u)).toString() + "e" + -u);
            0 === n && (h = !1);
            n = ("" + n).split(ho);
            f = n[0];
            n = n[1] || "";
            var o = 0, v = t.lgSize, y = t.gSize;
            if (f.length >= v + y) for (o = f.length - v, e = 0; e < o; e++) 0 == (o - e) % y && 0 !== e && (s += i), s += f.charAt(e);
            for (e = o; e < f.length; e++) 0 == (f.length - e) % v && 0 !== e && (s += i), s += f.charAt(e);
            for (; n.length < u;) n += "0";
            u && "0" !== u && (s += r + n.substr(0, u));
        }
        return c.push(h ? t.negPre : t.posPre), c.push(s), c.push(h ? t.negSuf : t.posSuf), c.join("");
    }

    function uf(n, t, i) {
        var r = "";
        for (0 > n && (r = "-", n = -n), n = "" + n; n.length < t;) n = "0" + n;
        return i && (n = n.substr(n.length - t)), r + n;
    }

    function k(n, t, i, r) { return i = i || 0, function(u) { return u = u["get" + n](), (0 < i || u > -i) && (u += i), 0 === u && -12 == i && (u = 12), uf(u, t, r); }; }

    function tu(n, t) {
        return function(i, r) {
            var u = i["get" + n](), f = ci(t ? "SHORT" + n : n);
            return r[f][u];
        };
    }

    function to(n) {

        function t(n) {
            var t;
            if (t = n.match(i)) {
                n = new Date(0);
                var r = 0, u = 0, f = t[8] ? n.setUTCFullYear : n.setFullYear, e = t[8] ? n.setUTCHours : n.setHours;
                t[9] && (r = b(t[9] + t[10]), u = b(t[9] + t[11]));
                f.call(n, b(t[1]), b(t[2]) - 1, b(t[3]));
                r = b(t[4] || 0) - r;
                u = b(t[5] || 0) - u;
                f = b(t[6] || 0);
                t = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                e.call(n, r, u, f, t);
            }
            return n;
        }

        var i = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(i, u) {
            var s = "", f = [], o, h;
            if (u = u || "mediumDate", u = n.DATETIME_FORMATS[u] || u, e(i) && (i = il.test(i) ? b(i) : t(i)), vr(i) && (i = new Date(i)), !yt(i)) return i;
            for (; u;) (h = tl.exec(u)) ? (f = f.concat(ri.call(h, 1)), u = f.pop()) : (f.push(u), u = null);
            return r(f, function(t) {
                o = nl[t];
                s += o ? o(i, n.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), s;
        };
    }

    function wh() { return function(n) { return st(n, !0); }; }

    function bh() {
        return function(n, t) {
            if (!o(n) && !e(n)) return n;
            if (t = Infinity === Math.abs(Number(t)) ? Number(t) : b(t), e(n)) return t ? 0 <= t ? n.slice(0, t) : n.slice(t, n.length) : "";
            var u = [], i, r;
            for (t > n.length ? t = n.length : t < -n.length && (t = -n.length), 0 < t ? (i = 0, r = t) : (i = n.length + t, r = n.length); i < r; i++) u.push(n[i]);
            return u;
        };
    }

    function io(n) {
        return function(t, i, r) {

            function u(n, t) { return ki(t) ? function(t, i) { return n(i, t); } : n; }

            function s(n, t) {
                var i = typeof n, r = typeof t;
                return i == r ? (yt(n) && yt(t) && (n = n.valueOf(), t = t.valueOf()), "string" == i && (n = n.toLowerCase(), t = t.toLowerCase()), n === t ? 0 : n < t ? -1 : 1) : i < r ? -1 : 1;
            }

            if (!yi(t) || !i) return t;
            i = o(i) ? i : [i];
            i = ns(i, function(t) {
                var r = !1, i = t || pi, f;
                return e(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (r = "-" == t.charAt(0), t = t.substring(1)), i = n(t), i.constant) ? (f = i(), u(function(n, t) { return s(n[f], t[f]); }, r)) : u(function(n, t) { return s(i(n), i(t)); }, r);
            });
            for (var h = [], f = 0; f < t.length; f++) h.push(t[f]);
            return h.sort(u(function(n, t) {
                for (var u, r = 0; r < i.length; r++) if (u = i[r](n, t), 0 !== u) return u;
                return 0;
            }, r));
        };
    }

    function bt(n) { return h(n) && (n = { link: n }), n.restrict = n.restrict || "AC", nt(n); }

    function ro(n, t, i, u) {

        function e(t, i) {
            i = i ? "-" + wr(i, "-") : "";
            u.setClass(n, (t ? eu : ou) + i, (t ? ou : eu) + i);
        }

        var f = this, o = n.parent().controller("form") || lr, s = 0, h = f.$error = {}, c = [];
        f.$name = t.name || t.ngForm;
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        o.$addControl(f);
        n.addClass(vi);
        e(!0);
        f.$addControl = function(n) {
            ti(n.$name, "input");
            c.push(n);
            n.$name && (f[n.$name] = n);
        };
        f.$removeControl = function(n) {
            n.$name && f[n.$name] === n && delete f[n.$name];
            r(h, function(t, i) { f.$setValidity(i, !0, n); });
            bi(c, n);
        };
        f.$setValidity = function(n, t, i) {
            var r = h[n];
            if (t) r && (bi(r, i), r.length || (s--, s || (e(t), f.$valid = !0, f.$invalid = !1), h[n] = !1, e(!0, n), o.$setValidity(n, !0, f)));
            else {
                if (s || e(t), r) {
                    if (-1 != wi(r, i)) return;
                } else h[n] = r = [], s++, e(!1, n), o.$setValidity(n, !1, f);
                r.push(i);
                f.$valid = !1;
                f.$invalid = !0;
            }
        };
        f.$setDirty = function() {
            u.removeClass(n, vi);
            u.addClass(n, su);
            f.$dirty = !0;
            f.$pristine = !1;
            o.$setDirty();
        };
        f.$setPristine = function() {
            u.removeClass(n, su);
            u.addClass(n, vi);
            f.$dirty = !1;
            f.$pristine = !0;
            r(c, function(n) { n.$setPristine(); });
        };
    }

    function at(n, t, r, u) { return n.$setValidity(t, r), r ? u : i; }

    function uo(n, t) {
        var i, r;
        if (t) for (i = 0; i < t.length; ++i) if (r = t[i], n[r]) return !0;
        return !1;
    }

    function kh(n, t, i, r, u) {
        a(u) && (n.$$hasNativeValidators = !0, n.$parsers.push(function(f) {
            if (n.$error[t] || uo(u, r) || !uo(u, i)) return f;
            n.$setValidity(t, !1);
        }));
    }

    function iu(n, t, i, r, u, f) {
        var l = t.prop(dh), a = t[0].placeholder, d = {}, nt = v(t[0].type), s, o, h, c, e, w, k;
        if (r.$$validityState = l, !u.android) {
            s = !1;
            t.on("compositionstart", function() { s = !0; });
            t.on("compositionend", function() {
                s = !1;
                o();
            });
        }
        if (o = function(u) {
            if (!s) {
                var f = t.val();
                p && "input" === (u || d).type && t[0].placeholder !== a ? a = t[0].placeholder : ("password" !== nt && ki(i.ngTrim || "T") && (f = g(f)), u = l && r.$$hasNativeValidators, r.$viewValue !== f || "" === f && u) && (n.$root.$$phase ? r.$setViewValue(f) : n.$apply(function() { r.$setViewValue(f); }));
            }
        }, u.hasEvent("input")) t.on("input", o);
        else {
            c = function() {
                h || (h = f.defer(function() {
                    o();
                    h = null;
                }));
            };
            t.on("keydown", function(n) {
                n = n.keyCode;
                91 === n || 15 < n && 19 > n || 37 <= n && 40 >= n || c();
            });
            if (u.hasEvent("paste")) t.on("paste cut", c);
        }
        t.on("change", o);
        r.$render = function() { t.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue); };
        e = i.ngPattern;
        e && ((u = e.match(/^\/(.*)\/([gim]*)$/)) ? (e = RegExp(u[1], u[2]), u = function(n) { return at(r, "pattern", r.$isEmpty(n) || e.test(n), n); }) : u = function(i) {
            var u = n.$eval(e);
            if (!u || !u.test) throw y("ngPattern")("noregexp", e, u, ut(t));
            return at(r, "pattern", r.$isEmpty(i) || u.test(i), i);
        }, r.$formatters.push(u), r.$parsers.push(u));
        i.ngMinlength && (w = b(i.ngMinlength), u = function(n) { return at(r, "minlength", r.$isEmpty(n) || n.length >= w, n); }, r.$parsers.push(u), r.$formatters.push(u));
        i.ngMaxlength && (k = b(i.ngMaxlength), u = function(n) { return at(r, "maxlength", r.$isEmpty(n) || n.length <= k, n); }, r.$parsers.push(u), r.$formatters.push(u));
    }

    function ff(n, t) {
        return n = "ngClass" + n, [
            "$animate", function(i) {

                function f(n, t) {
                    var f = [], r = 0, u, i;
                    n: for (; r < n.length; r++) {
                        for (u = n[r], i = 0; i < t.length; i++) if (u == t[i]) continue n;
                        f.push(u);
                    }
                    return f;
                }

                function u(n) {
                    if (!o(n)) {
                        if (e(n)) return n.split(" ");
                        if (a(n)) {
                            var t = [];
                            return r(n, function(n, i) { n && (t = t.concat(i.split(" "))); }), t;
                        }
                    }
                    return n;
                }

                return {
                    restrict: "AC",
                    link: function(e, o, s) {

                        function h(n, t) {
                            var i = o.data("$classCounts") || {}, u = [];
                            return r(n, function(n) { (0 < t || i[n]) && (i[n] = (i[n] || 0) + t, i[n] === +(0 < t) && u.push(n)); }), o.data("$classCounts", i), u.join(" ");
                        }

                        function l(n) {
                            var r, l;
                            if (!0 === t || e.$index % 2 === t)
                                if (r = u(n || []), c) {
                                    if (!gt(n, c)) {
                                        var a = u(c), l = f(r, a), r = f(a, r), r = h(r, -1), l = h(l, 1);
                                        0 === l.length ? i.removeClass(o, r) : 0 === r.length ? i.addClass(o, l) : i.setClass(o, l, r);
                                    }
                                } else l = h(r, 1), s.$addClass(l);
                            c = rt(n);
                        }

                        var c;
                        e.$watch(s[n], l, !0);
                        s.$observe("class", function() { l(e.$eval(s[n])); });
                        "ngClass" !== n && e.$watch("$index", function(i, r) {
                            var f = i & 1, o;
                            f !== (r & 1) && (o = u(e.$eval(s[n])), f === t ? (f = h(o, 1), s.$addClass(f)) : (f = h(o, -1), s.$removeClass(f)));
                        });
                    }
                };
            }
        ];
    }

    var dh = "validity", v = function(n) { return e(n) ? n.toLowerCase() : n; }, ru = Object.prototype.hasOwnProperty, ci = function(n) { return e(n) ? n.toUpperCase() : n; }, p, u, ii, ri = [].slice, gh = [].push, ui = Object.prototype.toString, ir = y("ng"), rr = n.angular || (n.angular = {}), ur, li, vt = ["0", "0", "0"], o, g, fi, sr, sf, ai, co, lo, ao, fu, lr;
    p = b((/msie (\d+)/.exec(v(navigator.userAgent)) || [])[1]);
    isNaN(p) && (p = b((/trident\/.*; rv:(\d+)/.exec(v(navigator.userAgent)) || [])[1]));
    s.$inject = [];
    pi.$inject = [];
    o = function() { return h(Array.isArray) ? Array.isArray : function(n) { return "[object Array]" === ui.call(n); }; }();
    g = function() { return String.prototype.trim ? function(n) { return e(n) ? n.trim() : n; } : function(n) { return e(n) ? n.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : n; }; }();
    li = 9 > p ? function(n) { return n = n.nodeName ? n : n[0], n.scopeName && "HTML" != n.scopeName ? ci(n.scopeName + ":" + n.nodeName) : n.nodeName; } : function(n) { return n.nodeName ? n.nodeName : n[0].nodeName; };
    var fr = function() {
            if (f(fr.isActive_)) return fr.isActive_;
            var n = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
            if (!n)
                try {
                    new Function("");
                } catch (i) {
                    n = !0;
                }
            return fr.isActive_ = n;
        },
        nc = /[A-Z]/g,
        tc = { full: "1.2.24", major: 1, minor: 2, dot: 24, codeName: "static-levitation" };
    w.expando = "ng339";
    var er = w.cache = {}, ic = 1, uu = n.document.addEventListener ? function(n, t, i) { n.addEventListener(t, i, !1); } : function(n, t, i) { n.attachEvent("on" + t, i); }, or = n.document.removeEventListener ? function(n, t, i) { n.removeEventListener(t, i, !1); } : function(n, t, i) { n.detachEvent("on" + t, i); };
    w._data = function(n) { return this.cache[n[this.expando]] || {}; };
    var rc = /([\:\-\_]+(.))/g, uc = /^moz([A-Z])/, ef = y("jqLite"), fc = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, of = /<|&#?\w+;/, ec = /<([\w:]+)/, oc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, tt = { option: [1, '<select multiple="multiple">', "<\/select>"], thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    tt.optgroup = tt.option;
    tt.tbody = tt.tfoot = tt.colgroup = tt.caption = tt.thead;
    tt.th = tt.td;
    fi = w.prototype = {
        ready: function(i) {

            function r() { u || (u = !0, i()); }

            var u = !1;
            "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), w(n).on("load", r));
        },
        toString: function() {
            var n = [];
            return r(this, function(t) { n.push("" + t); }), "[" + n.join(", ") + "]";
        },
        eq: function(n) { return 0 <= n ? u(this[n]) : u(this[this.length + n]); },
        length: 0,
        push: gh,
        sort: [].sort,
        splice: [].splice
    };
    sr = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function(n) { sr[v(n)] = n; });
    sf = {};
    r("input select option textarea button form details".split(" "), function(n) { sf[ci(n)] = !0; });
    r({ data: wu, removeData: pu }, function(n, t) { w[t] = n; });
    r({
        data: wu,
        inheritedData: dr,
        scope: function(n) { return u.data(n, "$scope") || dr(n.parentNode || n, ["$isolateScope", "$scope"]); },
        isolateScope: function(n) { return u.data(n, "$isolateScope") || u.data(n, "$isolateScopeNoTemplate"); },
        controller: te,
        injector: function(n) { return dr(n, "$injector"); },
        removeAttr: function(n, t) { n.removeAttribute(t); },
        hasClass: bu,
        css: function(n, t, r) {
            if (t = gi(t), f(r)) n.style[t] = r;
            else {
                var u;
                return 8 >= p && (u = n.currentStyle && n.currentStyle[t], "" === u && (u = "auto")), u = u || n.style[t], 8 >= p && (u = "" === u ? i : u), u;
            }
        },
        attr: function(n, t, r) {
            var u = v(t);
            if (sr[u])
                if (f(r)) r ? (n[t] = !0, n.setAttribute(t, u)) : (n[t] = !1, n.removeAttribute(u));
                else return n[t] || (n.attributes.getNamedItem(t) || s).specified ? u : i;
            else if (f(r)) n.setAttribute(t, r);
            else if (n.getAttribute) return n = n.getAttribute(t, 2), null === n ? i : n;
        },
        prop: function(n, t, i) {
            if (f(i)) n[t] = i;
            else return n[t];
        },
        text: function() {

            function t(t, i) {
                var r = n[t.nodeType];
                if (l(i)) return r ? t[r] : "";
                t[r] = i;
            }

            var n = [];
            return 9 > p ? (n[1] = "innerText", n[3] = "nodeValue") : n[1] = n[3] = "textContent", t.$dv = "", t;
        }(),
        val: function(n, t) {
            if (l(t)) {
                if ("SELECT" === li(n) && n.multiple) {
                    var i = [];
                    return r(n.options, function(n) { n.selected && i.push(n.value || n.text); }), 0 === i.length ? null : i;
                }
                return n.value;
            }
            n.value = t;
        },
        html: function(n, t) {
            if (l(t)) return n.innerHTML;
            for (var i = 0, r = n.childNodes; i < r.length; i++) si(r[i]);
            n.innerHTML = t;
        },
        empty: ie
    }, function(n, t) {
        w.prototype[t] = function(t, r) {
            var u, f, e = this.length, o;
            if (n !== ie && (2 == n.length && n !== bu && n !== te ? t : r) === i) {
                if (a(t)) {
                    for (u = 0; u < e; u++)
                        if (n === wu) n(this[u], t);
                        else for (f in t) n(this[u], f, t[f]);
                    return this;
                }
                for (u = n.$dv, e = u === i ? Math.min(e, 1) : e, f = 0; f < e; f++) o = n(this[f], t, r), u = u ? u + o : o;
                return u;
            }
            for (u = 0; u < e; u++) n(this[u], t, r);
            return this;
        };
    });
    r({
        removeData: pu,
        dealoc: si,
        on: function sc(n, i, u, e) {
            if (f(e)) throw ef("onargs");
            var o = ht(n, "events"), s = ht(n, "handle");
            o || ht(n, "events", o = {});
            s || ht(n, "handle", s = fs(n, o));
            r(i.split(" "), function(i) {
                var r = o[i], f;
                r || ("mouseenter" == i || "mouseleave" == i ? (f = t.body.contains || t.body.compareDocumentPosition ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n, i = t && t.parentNode;
                    return n === i || !!(i && 1 === i.nodeType && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16));
                } : function(n, t) {
                    if (t) for (; t = t.parentNode;) if (t === n) return !0;
                    return !1;
                }, o[i] = [], sc(n, { mouseleave: "mouseout", mouseenter: "mouseover" }[i], function(n) {
                    var t = n.relatedTarget;
                    t && (t === this || f(this, t)) || s(n, i);
                })) : (uu(n, i, s), o[i] = []), r = o[i]);
                r.push(u);
            });
        },
        off: ne,
        one: function(n, t, i) {
            n = u(n);
            n.on(t, function r() {
                n.off(t, i);
                n.off(t, r);
            });
            n.on(t, i);
        },
        replaceWith: function(n, t) {
            var i, u = n.parentNode;
            si(n);
            r(new w(t), function(t) {
                i ? u.insertBefore(t, i.nextSibling) : u.replaceChild(t, n);
                i = t;
            });
        },
        children: function(n) {
            var t = [];
            return r(n.childNodes, function(n) { 1 === n.nodeType && t.push(n); }), t;
        },
        contents: function(n) { return n.contentDocument || n.childNodes || []; },
        append: function(n, t) { r(new w(t), function(t) { 1 !== n.nodeType && 11 !== n.nodeType || n.appendChild(t); }); },
        prepend: function(n, t) {
            if (1 === n.nodeType) {
                var i = n.firstChild;
                r(new w(t), function(t) { n.insertBefore(t, i); });
            }
        },
        wrap: function(n, t) {
            t = u(t)[0];
            var i = n.parentNode;
            i && i.replaceChild(t, n);
            t.appendChild(n);
        },
        remove: function(n) {
            si(n);
            var t = n.parentNode;
            t && t.removeChild(n);
        },
        after: function(n, t) {
            var i = n, u = n.parentNode;
            r(new w(t), function(n) {
                u.insertBefore(n, i.nextSibling);
                i = n;
            });
        },
        addClass: kr,
        removeClass: br,
        toggleClass: function(n, t, i) {
            t && r(t.split(" "), function(t) {
                var r = i;
                l(r) && (r = !bu(n, t));
                (r ? kr : br)(n, t);
            });
        },
        parent: function(n) { return (n = n.parentNode) && 11 !== n.nodeType ? n : null; },
        next: function(n) {
            if (n.nextElementSibling) return n.nextElementSibling;
            for (n = n.nextSibling; null != n && 1 !== n.nodeType;) n = n.nextSibling;
            return n;
        },
        find: function(n, t) { return n.getElementsByTagName ? n.getElementsByTagName(t) : []; },
        clone: yu,
        triggerHandler: function(n, t, i) {
            var u, e, f;
            u = t.type || t;
            f = (ht(n, "events") || {})[u];
            f && (u = { preventDefault: function() { this.defaultPrevented = !0; }, isDefaultPrevented: function() { return !0 === this.defaultPrevented; }, stopPropagation: s, type: u, target: n }, t.type && (u = c(u, t)), t = rt(f), e = i ? [u].concat(i) : [u], r(t, function(t) { t.apply(n, e); }));
        }
    }, function(n, t) {
        w.prototype[t] = function(t, i, r) {
            for (var e, o = 0; o < this.length; o++) l(e) ? (e = n(this[o], t, i, r), f(e) && (e = u(e))) : ku(e, n(this[o], t, i, r));
            return f(e) ? e : this;
        };
        w.prototype.bind = w.prototype.on;
        w.prototype.unbind = w.prototype.off;
    });
    nr.prototype = {
        put: function(n, t) { this[hi(n, this.nextUid)] = t; },
        get: function(n) { return this[hi(n, this.nextUid)]; },
        remove: function(n) {
            var t = this[n = hi(n, this.nextUid)];
            return delete this[n], t;
        }
    };
    var hc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        cc = /,/,
        lc = /^\s*(_?)(\S+?)\1\s*$/,
        ac = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        hr = y("$injector"),
        vc = y("$animate"),
        yc = [
            "$provide", function(n) {
                this.$$selectors = {};
                this.register = function(t, i) {
                    var r = t + "-animation";
                    if (t && "." != t.charAt(0)) throw vc("notcsel", t);
                    this.$$selectors[t.substr(1)] = r;
                    n.factory(r, i);
                };
                this.classNameFilter = function(n) { return 1 === arguments.length && (this.$$classNameFilter = n instanceof RegExp ? n : null), this.$$classNameFilter; };
                this.$get = [
                    "$timeout", "$$asyncCallback", function(n, t) {
                        return {
                            enter: function(n, i, r, u) {
                                r ? r.after(n) : (i && i[0] || (i = r.parent()), i.append(n));
                                u && t(u);
                            },
                            leave: function(n, i) {
                                n.remove();
                                i && t(i);
                            },
                            move: function(n, t, i, r) { this.enter(n, t, i, r); },
                            addClass: function(n, i, u) {
                                i = e(i) ? i : o(i) ? i.join(" ") : "";
                                r(n, function(n) { kr(n, i); });
                                u && t(u);
                            },
                            removeClass: function(n, i, u) {
                                i = e(i) ? i : o(i) ? i.join(" ") : "";
                                r(n, function(n) { br(n, i); });
                                u && t(u);
                            },
                            setClass: function(n, i, u, f) {
                                r(n, function(n) {
                                    kr(n, i);
                                    br(n, u);
                                });
                                f && t(f);
                            },
                            enabled: s
                        };
                    }
                ];
            }
        ],
        et = y("$compile");
    ee.$inject = ["$provide", "$$sanitizeUriProvider"];
    var pc = /^(x[\:\-_]|data[\:\-_])/i, fo = y("$interpolate"), wc = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, bc = { http: 80, https: 443, ftp: 21 }, hf = y("$location");
    tf.prototype = nf.prototype = ve.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: gr("$$absUrl"),
        url: function(n) { return l(n) ? this.$$url : (n = wc.exec(n), n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || ""), this); },
        protocol: gr("$$protocol"),
        host: gr("$$host"),
        port: gr("$$port"),
        path: ye("$$path", function(n) { return n = n ? n.toString() : "", "/" == n.charAt(0) ? n : "/" + n; }),
        search: function(n, t) {
            switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (e(n) || vr(n)) n = n.toString(), this.$$search = kf(n);
                else if (a(n)) r(n, function(t, i) { null == t && delete n[i]; }), this.$$search = n;
                else throw hf("isrcharg");
                break;
            default:
                l(t) || null === t ? delete this.$$search[n] : this.$$search[n] = t;
            }
            return this.$$compose(), this;
        },
        hash: ye("$$hash", function(n) { return n ? n.toString() : ""; }),
        replace: function() { return this.$$replace = !0, this; }
    };
    var ot = y("$parse"), eo = {}, kt, kc = Function.prototype.call, dc = Function.prototype.apply, oo = Function.prototype.bind, cr = { "null": function() { return null; }, "true": function() { return !0; }, "false": function() { return !1; }, undefined: s, "+": function(n, t, r, u) { return r = r(n, t), u = u(n, t), f(r) ? f(u) ? r + u : r : f(u) ? u : i; }, "-": function(n, t, i, r) { return i = i(n, t), r = r(n, t), (f(i) ? i : 0) - (f(r) ? r : 0); }, "*": function(n, t, i, r) { return i(n, t) * r(n, t); }, "/": function(n, t, i, r) { return i(n, t) / r(n, t); }, "%": function(n, t, i, r) { return i(n, t) % r(n, t); }, "^": function(n, t, i, r) { return i(n, t) ^ r(n, t); }, "=": s, "===": function(n, t, i, r) { return i(n, t) === r(n, t); }, "!==": function(n, t, i, r) { return i(n, t) !== r(n, t); }, "==": function(n, t, i, r) { return i(n, t) == r(n, t); }, "!=": function(n, t, i, r) { return i(n, t) != r(n, t); }, "<": function(n, t, i, r) { return i(n, t) < r(n, t); }, ">": function(n, t, i, r) { return i(n, t) > r(n, t); }, "<=": function(n, t, i, r) { return i(n, t) <= r(n, t); }, ">=": function(n, t, i, r) { return i(n, t) >= r(n, t); }, "&&": function(n, t, i, r) { return i(n, t) && r(n, t); }, "||": function(n, t, i, r) { return i(n, t) || r(n, t); }, "&": function(n, t, i, r) { return i(n, t) & r(n, t); }, "|": function(n, t, i, r) { return r(n, t)(n, t, i(n, t)); }, "!": function(n, t, i) { return !i(n, t); } }, gc = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' }, cf = function(n) { this.options = n; };
    cf.prototype = {
        constructor: cf,
        lex: function(n) {
            for (this.text = n, this.index = 0, this.ch = i, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent();
                else if (this.is("(){}[].,;:?")) this.tokens.push({ index: this.index, text: this.ch }), this.index++;
                else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue;
                } else {
                    n = this.ch + this.peek();
                    var t = n + this.peek(2), r = cr[this.ch], u = cr[n], f = cr[t];
                    f ? (this.tokens.push({ index: this.index, text: t, fn: f }), this.index += 3) : u ? (this.tokens.push({ index: this.index, text: n, fn: u }), this.index += 2) : r ? (this.tokens.push({ index: this.index, text: this.ch, fn: r }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(n) { return -1 !== n.indexOf(this.ch); },
        was: function(n) { return -1 !== n.indexOf(this.lastCh); },
        peek: function(n) { return n = n || 1, this.index + n < this.text.length ? this.text.charAt(this.index + n) : !1; },
        isNumber: function(n) { return "0" <= n && "9" >= n; },
        isWhitespace: function(n) { return " " === n || "\r" === n || "\t" === n || "\n" === n || "\v" === n || "Â " === n; },
        isIdent: function(n) { return "a" <= n && "z" >= n || "A" <= n && "Z" >= n || "_" === n || "$" === n; },
        isExpOperator: function(n) { return "-" === n || "+" === n || this.isNumber(n); },
        throwError: function(n, t, i) {
            i = i || this.index;
            t = f(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, i) + "]" : " " + i;
            throw ot("lexerr", n, t, this.text);
        },
        readNumber: function() {
            for (var t, i, n = "", r = this.index; this.index < this.text.length;) {
                if (t = v(this.text.charAt(this.index)), "." == t || this.isNumber(t)) n += t;
                else if (i = this.peek(), "e" == t && this.isExpOperator(i)) n += t;
                else if (this.isExpOperator(t) && i && this.isNumber(i) && "e" == n.charAt(n.length - 1)) n += t;
                else if (!this.isExpOperator(t) || i && this.isNumber(i) || "e" != n.charAt(n.length - 1)) break;
                else this.throwError("Invalid exponent");
                this.index++;
            }
            n *= 1;
            this.tokens.push({ index: r, text: n, literal: !0, constant: !0, fn: function() { return n; } });
        },
        readIdent: function() {
            for (var o, e = this, n = "", t = this.index, r, u, f, i; this.index < this.text.length;) {
                if (i = this.text.charAt(this.index), "." === i || this.isIdent(i) || this.isNumber(i)) "." === i && (r = this.index), n += i;
                else break;
                this.index++;
            }
            if (r)
                for (u = this.index; u < this.text.length;) {
                    if (i = this.text.charAt(u), "(" === i) {
                        f = n.substr(r - t + 1);
                        n = n.substr(0, r - t);
                        this.index = u;
                        break;
                    }
                    if (this.isWhitespace(i)) u++;
                    else break;
                }
            t = { index: t, text: n };
            cr.hasOwnProperty(n) ? (t.fn = cr[n], t.literal = !0, t.constant = !0) : (o = we(n, this.options, this.text), t.fn = c(function(n, t) { return o(n, t); }, { assign: function(t, i) { return nu(t, n, i, e.text, e.options); } }));
            this.tokens.push(t);
            f && (this.tokens.push({ index: r, text: "." }), this.tokens.push({ index: r + 1, text: f }));
        },
        readString: function(n) {
            var f = this.index, t, u;
            this.index++;
            for (var r = "", u = n, i = !1; this.index < this.text.length;) {
                if (t = this.text.charAt(this.index), u = u + t, i) "u" === t ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, r += String.fromCharCode(parseInt(i, 16))) : r += gc[t] || t, i = !1;
                else if ("\\" === t) i = !0;
                else {
                    if (t === n) {
                        this.index++;
                        this.tokens.push({ index: f, text: u, string: r, literal: !0, constant: !0, fn: function() { return r; } });
                        return;
                    }
                    r += t;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", f);
        }
    };
    ai = function(n, t, i) {
        this.lexer = n;
        this.$filter = t;
        this.options = i;
    };
    ai.ZERO = c(function() { return 0; }, { constant: !0 });
    ai.prototype = {
        constructor: ai,
        parse: function(n) { return this.text = n, this.tokens = this.lexer.lex(n), n = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), n.literal = !!n.literal, n.constant = !!n.constant, n; },
        primary: function() {
            var n, t, i;
            for (this.expect("(") ? (n = this.filterChain(), this.consume(")")) : this.expect("[") ? n = this.arrayDeclaration() : this.expect("{") ? n = this.object() : (t = this.expect(), (n = t.fn) || this.throwError("not a primary expression", t), n.literal = !!t.literal, n.constant = !!t.constant); t = this.expect("(", "[", ".");) "(" === t.text ? (n = this.functionCall(n, i), i = null) : "[" === t.text ? (i = n, n = this.objectIndex(n)) : "." === t.text ? (i = n, n = this.fieldAccess(n)) : this.throwError("IMPOSSIBLE");
            return n;
        },
        throwError: function(n, t) { throw ot("syntax", t.text, n, t.index + 1, this.text, this.text.substring(t.index)); },
        peekToken: function() {
            if (0 === this.tokens.length) throw ot("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(n, t, i, r) {
            if (0 < this.tokens.length) {
                var f = this.tokens[0], u = f.text;
                if (u === n || u === t || u === i || u === r || !(n || t || i || r)) return f;
            }
            return !1;
        },
        expect: function(n, t, i, r) { return (n = this.peek(n, t, i, r)) ? (this.tokens.shift(), n) : !1; },
        consume: function(n) { this.expect(n) || this.throwError("is unexpected, expecting [" + n + "]", this.peek()); },
        unaryFn: function(n, t) { return c(function(i, r) { return n(i, r, t); }, { constant: t.constant }); },
        ternaryFn: function(n, t, i) { return c(function(r, u) { return n(r, u) ? t(r, u) : i(r, u); }, { constant: n.constant && t.constant && i.constant }); },
        binaryFn: function(n, t, i) { return c(function(r, u) { return t(r, u, n, i); }, { constant: n.constant && i.constant }); },
        statements: function() {
            for (var n = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && n.push(this.filterChain()), !this.expect(";"))
                    return 1 === n.length ? n[0] : function(t, i) {
                        for (var f, u, r = 0; r < n.length; r++) u = n[r], u && (f = u(t, i));
                        return f;
                    };
        },
        filterChain: function() {
            for (var n = this.expression(), t;;)
                if (t = this.expect("|")) n = this.binaryFn(n, t.fn, this.filter());
                else return n;
        },
        filter: function() {
            for (var i, t = this.expect(), r = this.$filter(t.text), n = [];;)
                if (t = this.expect(":")) n.push(this.expression());
                else
                    return i = function(t, i, u) {
                        u = [u];
                        for (var f = 0; f < n.length; f++) u.push(n[f](t, i));
                        return r.apply(t, u);
                    }, function() { return i; };
        },
        expression: function() { return this.assignment(); },
        assignment: function() {
            var n = this.ternary(), i, t;
            return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), i = this.ternary(), function(t, r) { return n.assign(t, i(t, r), r); }) : n;
        },
        ternary: function() {
            var n = this.logicalOR(), t, i;
            if (this.expect("?")) {
                if (t = this.assignment(), i = this.expect(":")) return this.ternaryFn(n, t, this.assignment());
                this.throwError("expected :", i);
            } else return n;
        },
        logicalOR: function() {
            for (var n = this.logicalAND(), t;;)
                if (t = this.expect("||")) n = this.binaryFn(n, t.fn, this.logicalAND());
                else return n;
        },
        logicalAND: function() {
            var n = this.equality(), t;
            return (t = this.expect("&&")) && (n = this.binaryFn(n, t.fn, this.logicalAND())), n;
        },
        equality: function() {
            var n = this.relational(), t;
            return (t = this.expect("==", "!=", "===", "!==")) && (n = this.binaryFn(n, t.fn, this.equality())), n;
        },
        relational: function() {
            var n = this.additive(), t;
            return (t = this.expect("<", ">", "<=", ">=")) && (n = this.binaryFn(n, t.fn, this.relational())), n;
        },
        additive: function() {
            for (var n = this.multiplicative(), t; t = this.expect("+", "-");) n = this.binaryFn(n, t.fn, this.multiplicative());
            return n;
        },
        multiplicative: function() {
            for (var n = this.unary(), t; t = this.expect("*", "/", "%");) n = this.binaryFn(n, t.fn, this.unary());
            return n;
        },
        unary: function() {
            var n;
            return this.expect("+") ? this.primary() : (n = this.expect("-")) ? this.binaryFn(ai.ZERO, n.fn, this.unary()) : (n = this.expect("!")) ? this.unaryFn(n.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(n) {
            var t = this, i = this.expect().text, r = we(i, this.options, this.text);
            return c(function(t, i, u) { return r(u || n(t, i)); }, { assign: function(r, u, f) { return (f = n(r, f)) || n.assign(r, f = {}), nu(f, i, u, t.text, t.options); } });
        },
        objectIndex: function(n) {
            var t = this, r = this.expression();
            return this.consume("]"), c(function(u, f) {
                var e = n(u, f), s = r(u, f), o;
                return (ft(s, t.text), !e) ? i : ((e = pt(e[s], t.text)) && e.then && t.options.unwrapPromises && (o = e, "$$v" in e || (o.$$v = i, o.then(function(n) { o.$$v = n; })), e = e.$$v), e);
            }, {
                assign: function(i, u, f) {
                    var e = ft(r(i, f), t.text);
                    return (f = pt(n(i, f), t.text)) || n.assign(i, f = {}), f[e] = u;
                }
            });
        },
        functionCall: function(n, t) {
            var r = [], i;
            if (")" !== this.peekToken().text)
                do r.push(this.expression());
                while (this.expect(","));
            return this.consume(")"), i = this, function(u, f) {
                for (var c, o = [], h = t ? t(u, f) : u, e = 0; e < r.length; e++) o.push(pt(r[e](u, f), i.text));
                if (e = n(u, f, h) || s, pt(h, i.text), c = i.text, e) {
                    if (e.constructor === e) throw ot("isecfn", c);
                    if (e === kc || e === dc || oo && e === oo) throw ot("isecff", c);
                }
                return o = e.apply ? e.apply(h, o) : e(o[0], o[1], o[2], o[3], o[4]), pt(o, i.text);
            };
        },
        arrayDeclaration: function() {
            var n = [], i = !0, t;
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    t = this.expression();
                    n.push(t);
                    t.constant || (i = !1);
                } while (this.expect(","));
            return this.consume("]"), c(function(t, i) {
                for (var u = [], r = 0; r < n.length; r++) u.push(n[r](t, i));
                return u;
            }, { literal: !0, constant: i });
        },
        object: function() {
            var t = [], r = !0, n, i;
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    n = this.expect();
                    n = n.string || n.text;
                    this.consume(":");
                    i = this.expression();
                    t.push({ key: n, value: i });
                    i.constant || (r = !1);
                } while (this.expect(","));
            return this.consume("}"), c(function(n, i) {
                for (var f, u = {}, r = 0; r < t.length; r++) f = t[r], u[f.key] = f.value(n, i);
                return u;
            }, { literal: !0, constant: r });
        }
    };
    var lf = {}, dt = y("$sce"), it = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" }, d = t.createElement("a"), so = wt(n.location.href, !0);
    ke.$inject = ["$provide"];
    de.$inject = ["$locale"];
    ge.$inject = ["$locale"];
    var ho = ".", nl = { yyyy: k("FullYear", 4), yy: k("FullYear", 2, 0, !0), y: k("FullYear", 1), MMMM: tu("Month"), MMM: tu("Month", !0), MM: k("Month", 2, 1), M: k("Month", 1, 1), dd: k("Date", 2), d: k("Date", 1), HH: k("Hours", 2), H: k("Hours", 1), hh: k("Hours", 2, -12), h: k("Hours", 1, -12), mm: k("Minutes", 2), m: k("Minutes", 1), ss: k("Seconds", 2), s: k("Seconds", 1), sss: k("Milliseconds", 3), EEEE: tu("Day"), EEE: tu("Day", !0), a: function(n, t) { return 12 > n.getHours() ? t.AMPMS[0] : t.AMPMS[1]; }, Z: function(n) { return n = -1 * n.getTimezoneOffset(), (0 <= n ? "+" : "") + (uf(Math[0 < n ? "floor" : "ceil"](n / 60), 2) + uf(Math.abs(n % 60), 2)); } }, tl = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, il = /^\-?\d+$/;
    to.$inject = ["$locale"];
    co = nt(v);
    lo = nt(ci);
    io.$inject = ["$parse"];
    ao = nt({
        restrict: "E",
        compile: function(n, i) {
            return 8 >= p && (i.href || i.name || i.$set("href", ""), n.append(t.createComment("IE fix"))), !i.href && !i.xlinkHref && !i.name ? function(n, t) {
                var i = "[object SVGAnimatedString]" === ui.call(t.prop("href")) ? "xlink:href" : "href";
                t.on("click", function(n) { t.attr(i) || n.preventDefault(); });
            } : void 0;
        }
    });
    fu = {};
    r(sr, function(n, t) {
        if ("multiple" != n) {
            var i = ct("ng-" + t);
            fu[i] = function() { return { priority: 100, link: function(n, r, u) { n.$watch(u[i], function(n) { u.$set(t, !!n); }); } }; };
        }
    });
    r(["src", "srcset", "href"], function(n) {
        var t = ct("ng-" + n);
        fu[t] = function() {
            return {
                priority: 99,
                link: function(i, r, u) {
                    var e = n, f = n;
                    "href" === n && "[object SVGAnimatedString]" === ui.call(r.prop("href")) && (f = "xlinkHref", u.$attr[f] = "xlink:href", e = null);
                    u.$observe(t, function(t) { t ? (u.$set(f, t), p && e && r.prop(e, u[f])) : "href" === n && u.$set(f, null); });
                }
            };
        };
    });
    lr = { $addControl: s, $removeControl: s, $setValidity: s, $setDirty: s, $setPristine: s };
    ro.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var vo = function(n) {
            return [
                "$timeout", function(t) {
                    return {
                        name: "form",
                        restrict: n ? "EAC" : "E",
                        controller: ro,
                        compile: function() {
                            return {
                                pre: function(n, r, u, f) {
                                    var o, s, e;
                                    if (!u.action) {
                                        o = function(n) { n.preventDefault ? n.preventDefault() : n.returnValue = !1; };
                                        uu(r[0], "submit", o);
                                        r.on("$destroy", function() { t(function() { or(r[0], "submit", o); }, 0, !1); });
                                    }
                                    if (s = r.parent().controller("form"), e = u.name || u.ngForm, e && nu(n, e, f, e), s)
                                        r.on("$destroy", function() {
                                            s.$removeControl(f);
                                            e && nu(n, e, i, e);
                                            c(f, lr);
                                        });
                                }
                            };
                        }
                    };
                }
            ];
        },
        rl = vo(),
        ul = vo(!0),
        fl = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        el = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        ol = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        yo = {
            text: iu,
            number: function(n, t, r, u, f, e) {
                iu(n, t, r, u, f, e);
                u.$parsers.push(function(n) {
                    var t = u.$isEmpty(n);
                    return t || ol.test(n) ? (u.$setValidity("number", !0), "" === n ? null : t ? n : parseFloat(n)) : (u.$setValidity("number", !1), i);
                });
                kh(u, "number", sl, null, u.$$validityState);
                u.$formatters.push(function(n) { return u.$isEmpty(n) ? "" : "" + n; });
                r.min && (n = function(n) {
                    var t = parseFloat(r.min);
                    return at(u, "min", u.$isEmpty(n) || n >= t, n);
                }, u.$parsers.push(n), u.$formatters.push(n));
                r.max && (n = function(n) {
                    var t = parseFloat(r.max);
                    return at(u, "max", u.$isEmpty(n) || n <= t, n);
                }, u.$parsers.push(n), u.$formatters.push(n));
                u.$formatters.push(function(n) { return at(u, "number", u.$isEmpty(n) || vr(n), n); });
            },
            url: function(n, t, i, r, u, f) {
                iu(n, t, i, r, u, f);
                n = function(n) { return at(r, "url", r.$isEmpty(n) || fl.test(n), n); };
                r.$formatters.push(n);
                r.$parsers.push(n);
            },
            email: function(n, t, i, r, u, f) {
                iu(n, t, i, r, u, f);
                n = function(n) { return at(r, "email", r.$isEmpty(n) || el.test(n), n); };
                r.$formatters.push(n);
                r.$parsers.push(n);
            },
            radio: function(n, t, i, r) {
                l(i.name) && t.attr("name", ar());
                t.on("click", function() { t[0].checked && n.$apply(function() { r.$setViewValue(i.value); }); });
                r.$render = function() { t[0].checked = i.value == r.$viewValue; };
                i.$observe("value", r.$render);
            },
            checkbox: function(n, t, i, r) {
                var u = i.ngTrueValue, f = i.ngFalseValue;
                e(u) || (u = !0);
                e(f) || (f = !1);
                t.on("click", function() { n.$apply(function() { r.$setViewValue(t[0].checked); }); });
                r.$render = function() { t[0].checked = r.$viewValue; };
                r.$isEmpty = function(n) { return n !== u; };
                r.$formatters.push(function(n) { return n === u; });
                r.$parsers.push(function(n) { return n ? u : f; });
            },
            hidden: s,
            button: s,
            submit: s,
            reset: s,
            file: s
        },
        sl = ["badInput"],
        po = ["$browser", "$sniffer", function(n, t) { return { restrict: "E", require: "?ngModel", link: function(i, r, u, f) { f && (yo[v(u.type)] || yo.text)(i, r, u, f, t, n); } }; }],
        eu = "ng-valid",
        ou = "ng-invalid",
        vi = "ng-pristine",
        su = "ng-dirty",
        hl = [
            "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(n, t, i, u, f, e) {

                function h(n, t) {
                    t = t ? "-" + wr(t, "-") : "";
                    e.removeClass(u, (n ? ou : eu) + t);
                    e.addClass(u, (n ? eu : ou) + t);
                }

                var c, a, o;
                if (this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = i.name, c = f(i.ngModel), a = c.assign, !a) throw y("ngModel")("nonassign", i.ngModel, ut(u));
                this.$render = s;
                this.$isEmpty = function(n) { return l(n) || "" === n || null === n || n !== n; };
                var w = u.inheritedData("$formController") || lr, v = 0, p = this.$error = {};
                u.addClass(vi);
                h(!0);
                this.$setValidity = function(n, t) { p[n] !== !t && (t ? (p[n] && v--, v || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, v++), p[n] = !t, h(t, n), w.$setValidity(n, t, this)); };
                this.$setPristine = function() {
                    this.$dirty = !1;
                    this.$pristine = !0;
                    e.removeClass(u, su);
                    e.addClass(u, vi);
                };
                this.$setViewValue = function(i) {
                    this.$viewValue = i;
                    this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(u, vi), e.addClass(u, su), w.$setDirty());
                    r(this.$parsers, function(n) { i = n(i); });
                    this.$modelValue !== i && (this.$modelValue = i, a(n, i), r(this.$viewChangeListeners, function(n) {
                        try {
                            n();
                        } catch (i) {
                            t(i);
                        }
                    }));
                };
                o = this;
                n.$watch(function() {
                    var t = c(n), i, r;
                    if (o.$modelValue !== t) {
                        for (i = o.$formatters, r = i.length, o.$modelValue = t; r--;) t = i[r](t);
                        o.$viewValue !== t && (o.$viewValue = t, o.$render());
                    }
                    return t;
                });
            }
        ],
        cl = function() {
            return {
                require: ["ngModel", "^?form"],
                controller: hl,
                link: function(n, t, i, r) {
                    var u = r[0], f = r[1] || lr;
                    f.$addControl(u);
                    n.$on("$destroy", function() { f.$removeControl(u); });
                }
            };
        },
        ll = nt({ require: "ngModel", link: function(n, t, i, r) { r.$viewChangeListeners.push(function() { n.$eval(i.ngChange); }); } }),
        wo = function() {
            return {
                require: "?ngModel",
                link: function(n, t, i, r) {
                    if (r) {
                        i.required = !0;
                        var u = function(n) {
                            if (i.required && r.$isEmpty(n)) r.$setValidity("required", !1);
                            else return r.$setValidity("required", !0), n;
                        };
                        r.$formatters.push(u);
                        r.$parsers.unshift(u);
                        i.$observe("required", function() { u(r.$viewValue); });
                    }
                }
            };
        },
        al = function() {
            return {
                require: "ngModel",
                link: function(n, t, u, f) {
                    var e = (n = /\/(.*)\//.exec(u.ngList)) && RegExp(n[1]) || u.ngList || ",";
                    f.$parsers.push(function(n) {
                        if (!l(n)) {
                            var t = [];
                            return n && r(n.split(e), function(n) { n && t.push(g(n)); }), t;
                        }
                    });
                    f.$formatters.push(function(n) { return o(n) ? n.join(", ") : i; });
                    f.$isEmpty = function(n) { return !n || !n.length; };
                }
            };
        },
        vl = /^(true|false|\d+)$/,
        yl = function() { return { priority: 100, compile: function(n, t) { return vl.test(t.ngValue) ? function(n, t, i) { i.$set("value", n.$eval(i.ngValue)); } : function(n, t, i) { n.$watch(i.ngValue, function(n) { i.$set("value", n); }); }; } }; },
        pl = bt({
            compile: function(n) {
                return n.addClass("ng-binding"), function(n, t, r) {
                    t.data("$binding", r.ngBind);
                    n.$watch(r.ngBind, function(n) { t.text(n == i ? "" : n); });
                };
            }
        }),
        wl = [
            "$interpolate", function(n) {
                return function(t, i, r) {
                    t = n(i.attr(r.$attr.ngBindTemplate));
                    i.addClass("ng-binding").data("$binding", t);
                    r.$observe("ngBindTemplate", function(n) { i.text(n); });
                };
            }
        ],
        bl = [
            "$sce", "$parse", function(n, t) {
                return {
                    compile: function(i) {
                        return i.addClass("ng-binding"), function(i, r, u) {
                            r.data("$binding", u.ngBindHtml);
                            var f = t(u.ngBindHtml);
                            i.$watch(function() { return (f(i) || "").toString(); }, function() { r.html(n.getTrustedHtml(f(i)) || ""); });
                        };
                    }
                };
            }
        ],
        kl = ff("", !0),
        dl = ff("Odd", 0),
        gl = ff("Even", 1),
        na = bt({
            compile: function(n, t) {
                t.$set("ngCloak", i);
                n.removeClass("ng-cloak");
            }
        }),
        ta = [function() { return { scope: !0, controller: "@", priority: 500 }; }],
        bo = {},
        ia = { blur: !0, focus: !0 };
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(n) {
        var t = ct("ng-" + n);
        bo[t] = [
            "$parse", "$rootScope", function(i, r) {
                return {
                    compile: function(u, f) {
                        var e = i(f[t]);
                        return function(t, i) {
                            var u = v(n);
                            i.on(u, function(n) {
                                var i = function() { e(t, { $event: n }); };
                                ia[u] && r.$$phase ? t.$evalAsync(i) : t.$apply(i);
                            });
                        };
                    }
                };
            }
        ];
    });
    var ra = [
            "$animate", function(n) {
                return {
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(i, r, u, f, e) {
                        var h, o, s;
                        i.$watch(u.ngIf, function(f) {
                            ki(f) ? o || (o = i.$new(), e(o, function(i) {
                                i[i.length++] = t.createComment(" end ngIf: " + u.ngIf + " ");
                                h = { clone: i };
                                n.enter(i, r.parent(), r);
                            })) : (s && (s.remove(), s = null), o && (o.$destroy(), o = null), h && (s = au(h.clone), n.leave(s, function() { s = null; }), h = null));
                        });
                    }
                };
            }
        ],
        ua = [
            "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(n, t, i, r, u) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: rr.noop,
                    compile: function(e, o) {
                        var h = o.ngInclude || o.src, c = o.onload || "", s = o.autoscroll;
                        return function(e, o, l, a, v) {
                            var b = 0,
                                y,
                                p,
                                w,
                                k = function() {
                                    p && (p.remove(), p = null);
                                    y && (y.$destroy(), y = null);
                                    w && (r.leave(w, function() { p = null; }), p = w, w = null);
                                };
                            e.$watch(u.parseAsResourceUrl(h), function(u) {
                                var l = function() { f(s) && (!s || e.$eval(s)) && i(); }, h = ++b;
                                u ? (n.get(u, { cache: t }).success(function(n) {
                                    if (h === b) {
                                        var t = e.$new();
                                        a.template = n;
                                        n = v(t, function(n) {
                                            k();
                                            r.enter(n, null, o, l);
                                        });
                                        y = t;
                                        w = n;
                                        y.$emit("$includeContentLoaded");
                                        e.$eval(c);
                                    }
                                }).error(function() { h === b && k(); }), e.$emit("$includeContentRequested")) : (k(), a.template = null);
                            });
                        };
                    }
                };
            }
        ],
        fa = [
            "$compile", function(n) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(t, i, r, u) {
                        i.html(u.template);
                        n(i.contents())(t);
                    }
                };
            }
        ],
        ea = bt({ priority: 450, compile: function() { return { pre: function(n, t, i) { n.$eval(i.ngInit); } }; } }),
        oa = bt({ terminal: !0, priority: 1e3 }),
        sa = [
            "$locale", "$interpolate", function(n, t) {
                var i = /{}/g;
                return {
                    restrict: "EA",
                    link: function(u, f, e) {
                        var s = e.count, l = e.$attr.when && f.attr(e.$attr.when), h = e.offset || 0, o = u.$eval(l) || {}, c = {}, a = t.startSymbol(), y = t.endSymbol(), p = /^when(Minus)?(.+)$/;
                        r(e, function(n, t) { p.test(t) && (o[v(t.replace("when", "").replace("Minus", "-"))] = f.attr(e.$attr[t])); });
                        r(o, function(n, r) { c[r] = t(n.replace(i, a + s + "-" + h + y)); });
                        u.$watch(function() {
                            var t = parseFloat(u.$eval(s));
                            return isNaN(t) ? "" : (t in o || (t = n.pluralCat(t - h)), c[t](u, f, !0));
                        }, function(n) { f.text(n); });
                    }
                };
            }
        ],
        ha = [
            "$parse", "$animate", function(n, i) {
                var f = y("ngRepeat");
                return {
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    link: function(e, o, s, h, c) {
                        var y = s.ngRepeat, l = y.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), k, w, d, g, b, v, p = { $id: hi }, a;
                        if (!l) throw f("iexp", y);
                        if (s = l[1], h = l[2], (l = l[3]) ? (k = n(l), w = function(n, t, i) { return v && (p[v] = n), p[b] = t, p.$index = i, k(e, p); }) : (d = function(n, t) { return hi(t); }, g = function(n) { return n; }), l = s.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !l) throw f("iidexp", s);
                        b = l[3] || l[1];
                        v = l[2];
                        a = {};
                        e.$watchCollection(h, function(n) {
                            var s, ft, it = o[0], l, rt = {}, ot, p, k, ut, et, nt, h, tt = [];
                            if (yi(n)) nt = n, et = w || d;
                            else {
                                et = w || g;
                                nt = [];
                                for (k in n) n.hasOwnProperty(k) && "$" != k.charAt(0) && nt.push(k);
                                nt.sort();
                            }
                            for (ot = nt.length, ft = tt.length = nt.length, s = 0; s < ft; s++)
                                if (k = n === nt ? s : nt[s], ut = n[k], l = et(k, ut, s), ti(l, "`track by` id"), a.hasOwnProperty(l)) h = a[l], delete a[l], rt[l] = h, tt[s] = h;
                                else {
                                    if (rt.hasOwnProperty(l)) throw r(tt, function(n) { n && n.scope && (a[n.id] = n); }), f("dupes", y, l, st(ut));
                                    tt[s] = { id: l };
                                    rt[l] = !1;
                                }
                            for (k in a) a.hasOwnProperty(k) && (h = a[k], s = au(h.clone), i.leave(s), r(s, function(n) { n.$$NG_REMOVED = !0; }), h.scope.$destroy());
                            for (s = 0, ft = nt.length; s < ft; s++) {
                                if (k = n === nt ? s : nt[s], ut = n[k], h = tt[s], tt[s - 1] && (it = tt[s - 1].clone[tt[s - 1].clone.length - 1]), h.scope) {
                                    p = h.scope;
                                    l = it;
                                    do l = l.nextSibling;
                                    while (l && l.$$NG_REMOVED);
                                    h.clone[0] != l && i.move(au(h.clone), null, u(it));
                                    it = h.clone[h.clone.length - 1];
                                } else p = e.$new();
                                p[b] = ut;
                                v && (p[v] = k);
                                p.$index = s;
                                p.$first = 0 === s;
                                p.$last = s === ot - 1;
                                p.$middle = !(p.$first || p.$last);
                                p.$odd = !(p.$even = 0 == (s & 1));
                                h.scope || c(p, function(n) {
                                    n[n.length++] = t.createComment(" end ngRepeat: " + y + " ");
                                    i.enter(n, null, u(it));
                                    it = n;
                                    h.scope = p;
                                    h.clone = n;
                                    rt[h.id] = h;
                                });
                            }
                            a = rt;
                        });
                    }
                };
            }
        ],
        ca = ["$animate", function(n) { return function(t, i, r) { t.$watch(r.ngShow, function(t) { n[ki(t) ? "removeClass" : "addClass"](i, "ng-hide"); }); }; }],
        la = ["$animate", function(n) { return function(t, i, r) { t.$watch(r.ngHide, function(t) { n[ki(t) ? "addClass" : "removeClass"](i, "ng-hide"); }); }; }],
        aa = bt(function(n, t, i) {
            n.$watch(i.ngStyle, function(n, i) {
                i && n !== i && r(i, function(n, i) { t.css(i, ""); });
                n && t.css(n);
            }, !0);
        }),
        va = [
            "$animate", function(n) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope", function() { this.cases = {}; }],
                    link: function(t, i, u, f) {
                        var h = [], s = [], e = [], o = [];
                        t.$watch(u.ngSwitch || u.on, function(i) {
                            for (var a, c = 0, l = e.length; c < l; ++c) e[c].remove();
                            for (c = e.length = 0, l = o.length; c < l; ++c) a = s[c], o[c].$destroy(), e[c] = a, n.leave(a, function() { e.splice(c, 1); });
                            s.length = 0;
                            o.length = 0;
                            (h = f.cases["!" + i] || f.cases["?"]) && (t.$eval(u.change), r(h, function(i) {
                                var r = t.$new();
                                o.push(r);
                                i.transclude(r, function(t) {
                                    var r = i.element;
                                    s.push(t);
                                    n.enter(t, r.parent(), r);
                                });
                            }));
                        });
                    }
                };
            }
        ],
        ya = bt({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(n, t, i, r, u) {
                r.cases["!" + i.ngSwitchWhen] = r.cases["!" + i.ngSwitchWhen] || [];
                r.cases["!" + i.ngSwitchWhen].push({ transclude: u, element: t });
            }
        }),
        pa = bt({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(n, t, i, r, u) {
                r.cases["?"] = r.cases["?"] || [];
                r.cases["?"].push({ transclude: u, element: t });
            }
        }),
        wa = bt({
            link: function(n, t, i, r, u) {
                if (!u) throw y("ngTransclude")("orphan", ut(t));
                u(function(n) {
                    t.empty();
                    t.append(n);
                });
            }
        }),
        ba = ["$templateCache", function(n) { return { restrict: "E", terminal: !0, compile: function(t, i) { "text/ng-template" == i.type && n.put(i.id, t[0].text); } }; }],
        ka = y("ngOptions"),
        da = nt({ terminal: !0 }),
        ga = [
            "$compile", "$parse", function(n, e) {
                var h = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, c = { $setViewValue: s };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: [
                        "$element", "$scope", "$attrs", function(n, t, i) {
                            var r = this, f = {}, e = c, u;
                            r.databound = i.ngModel;
                            r.init = function(n, t, i) {
                                e = n;
                                u = i;
                            };
                            r.addOption = function(t) {
                                ti(t, '"option value"');
                                f[t] = !0;
                                e.$viewValue == t && (n.val(t), u.parent() && u.remove());
                            };
                            r.removeOption = function(n) { this.hasOption(n) && (delete f[n], e.$viewValue == n && this.renderUnknownOption(n)); };
                            r.renderUnknownOption = function(t) {
                                t = "? " + hi(t) + " ?";
                                u.val(t);
                                n.prepend(u);
                                n.val(t);
                                u.prop("selected", !0);
                            };
                            r.hasOption = function(n) { return f.hasOwnProperty(n); };
                            t.$on("$destroy", function() { r.renderUnknownOption = s; });
                        }
                    ],
                    link: function(s, c, a, v) {

                        function ft(n, t, i, r) {
                            i.$render = function() {
                                var n = i.$viewValue;
                                r.hasOption(n) ? (b.parent() && b.remove(), t.val(n), "" === n && nt.prop("selected", !0)) : l(n) && nt ? t.val("") : r.renderUnknownOption(n);
                            };
                            t.on("change", function() {
                                n.$apply(function() {
                                    b.parent() && b.remove();
                                    i.$setViewValue(t.val());
                                });
                            });
                        }

                        function et(n, t, i) {
                            var u;
                            i.$render = function() {
                                var n = new nr(i.$viewValue);
                                r(t.find("option"), function(t) { t.selected = f(n.get(t.value)); });
                            };
                            n.$watch(function() { gt(u, i.$viewValue) || (u = rt(i.$viewValue), i.$render()); });
                            t.on("change", function() {
                                n.$apply(function() {
                                    var n = [];
                                    r(t.find("option"), function(t) { t.selected && n.push(t.value); });
                                    i.$setViewValue(n);
                                });
                            });
                        }

                        function ot(t, r, u) {

                            function k() {
                                var et = { "": [] }, ht = [""], n, h, g, rt, i, ut, ot, c, e, k, ft;
                                if (g = u.$modelValue, rt = d(t) || [], ut = a ? af(rt) : rt, c = {}, e = !1, w)
                                    if (h = u.$modelValue, s && o(h)) for (e = new nr([]), n = {}, i = 0; i < h.length; i++) n[l] = h[i], e.put(s(t, n), h[i]);
                                    else e = new nr(h);
                                for (i = e, e = 0; ot = ut.length, e < ot; e++) {
                                    if (h = e, a) {
                                        if (h = ut[e], "$" === h.charAt(0)) continue;
                                        c[a] = h;
                                    }
                                    c[l] = rt[h];
                                    n = it(t, c) || "";
                                    (h = et[n]) || (h = et[n] = [], ht.push(n));
                                    w ? n = f(i.remove(s ? s(t, c) : b(t, c))) : (s ? (n = {}, n[l] = g, n = s(t, n) === s(t, c)) : n = g === b(t, c), i = i || n);
                                    k = nt(t, c);
                                    k = f(k) ? k : "";
                                    h.push({ id: s ? s(t, c) : a ? ut[e] : e, label: k, selected: n });
                                }
                                for (w || (y || null === g ? et[""].unshift({ id: "", label: "", selected: !i }) : i || et[""].unshift({ id: "?", label: "", selected: !0 })), c = 0, ut = ht.length; c < ut; c++) {
                                    for (n = ht[c], h = et[n], v.length <= c ? (g = { element: st.clone().attr("label", n), label: h.label }, rt = [g], v.push(rt), r.append(g.element)) : (rt = v[c], g = rt[0], g.label != n && g.element.attr("label", g.label = n)), k = null, e = 0, ot = h.length; e < ot; e++) n = h[e], (i = rt[e + 1]) ? (k = i.element, i.label !== n.label && k.text(i.label = n.label), i.id !== n.id && k.val(i.id = n.id), k[0].selected !== n.selected && (k.prop("selected", i.selected = n.selected), p && k.prop("selected", i.selected))) : ("" === n.id && y ? ft = y : (ft = tt.clone()).val(n.id).prop("selected", n.selected).attr("selected", n.selected).text(n.label), rt.push({ element: ft, label: n.label, id: n.id, selected: n.selected }), k ? k.after(ft) : g.element.append(ft), k = ft);
                                    for (e++; rt.length > e;) rt.pop().element.remove();
                                }
                                for (; v.length > c;) v.pop()[0].element.remove();
                            }

                            var c;
                            if (!(c = g.match(h))) throw ka("iexp", g, ut(r));
                            var nt = e(c[2] || c[1]), l = c[4] || c[6], a = c[5], it = e(c[3] || ""), b = e(c[2] ? c[1] : l), d = e(c[7]), s = c[8] ? e(c[8]) : null, v = [[{ element: r, label: "" }]];
                            y && (n(y)(t), y.removeClass("ng-scope"), y.remove());
                            r.empty();
                            r.on("change", function() {
                                t.$apply(function() {
                                    var p, h = d(t) || [], f = {}, n, o, c, y, g, nt, e;
                                    if (w) {
                                        for (o = [], y = 0, nt = v.length; y < nt; y++)
                                            for (p = v[y], c = 1, g = p.length; c < g; c++)
                                                if ((n = p[c].element)[0].selected) {
                                                    if (n = n.val(), a && (f[a] = n), s) for (e = 0; e < h.length && (f[l] = h[e], s(t, f) != n); e++);
                                                    else f[l] = h[n];
                                                    o.push(b(t, f));
                                                }
                                    } else if (n = r.val(), "?" == n) o = i;
                                    else if ("" === n) o = null;
                                    else if (s) {
                                        for (e = 0; e < h.length; e++)
                                            if (f[l] = h[e], s(t, f) == n) {
                                                o = b(t, f);
                                                break;
                                            }
                                    } else f[l] = h[n], a && (f[a] = n), o = b(t, f);
                                    u.$setViewValue(o);
                                    k();
                                });
                            });
                            u.$render = k;
                            t.$watchCollection(d, k);
                            w && t.$watchCollection(function() { return u.$modelValue; }, k);
                        }

                        var d, k, it;
                        if (v[1]) {
                            d = v[0];
                            v = v[1];
                            var w = a.multiple, g = a.ngOptions, y = !1, nt, tt = u(t.createElement("option")), st = u(t.createElement("optgroup")), b = tt.clone();
                            for (a = 0, k = c.children(), it = k.length; a < it; a++)
                                if ("" === k[a].value) {
                                    nt = y = k.eq(a);
                                    break;
                                }
                            d.init(v, y, b);
                            w && (v.$isEmpty = function(n) { return !n || 0 === n.length; });
                            g ? ot(s, c, v) : w ? et(s, c, v) : ft(s, c, v, d);
                        }
                    }
                };
            }
        ],
        nv = [
            "$interpolate", function(n) {
                var t = { addOption: s, removeOption: s };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(i, r) {
                        if (l(r.value)) {
                            var u = n(i.text(), !0);
                            u || r.$set("value", i.text());
                        }
                        return function(n, i, r) {
                            var e = i.parent(), f = e.data("$selectController") || e.parent().data("$selectController");
                            f && f.databound ? i.prop("selected", !1) : f = t;
                            u ? n.$watch(u, function(n, t) {
                                r.$set("value", n);
                                n !== t && f.removeOption(t);
                                f.addOption(n);
                            }) : f.addOption(r.value);
                            i.on("$destroy", function() { f.removeOption(r.value); });
                        };
                    }
                };
            }
        ],
        tv = nt({ restrict: "E", terminal: !0 });
    n.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((ii = n.jQuery) && ii.fn.on ? (u = ii, c(ii.fn, { scope: fi.scope, isolateScope: fi.isolateScope, controller: fi.controller, injector: fi.injector, inheritedData: fi.inheritedData }), vu("remove", !0, !0, !1), vu("empty", !1, !1, !1), vu("html", !1, !1, !0)) : u = w, rr.element = u, us(rr), u(t).ready(function() { is(t, df); }));
}(window, document);
window.angular.$$csp() || window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}<\/style>'), function(n, t, i) {
    "use strict";

    function u(n, i) {
        i = i || {};
        t.forEach(i, function(n, t) { delete i[t]; });
        for (var r in n) n.hasOwnProperty(r) && ("$" !== r.charAt(0) || "$" !== r.charAt(1)) && (i[r] = n[r]);
        return i;
    }

    var r = t.$$minErr("$resource"), f = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    t.module("ngResource", ["ng"]).factory("$resource", [
        "$http", "$q", function(n, e) {

            function c(n, t) {
                this.template = n;
                this.defaults = t || {};
                this.urlParams = {};
            }

            function l(p, w, b) {

                function d(n, t) {
                    var u = {};
                    return t = h({}, w, t), o(t, function(t, e) {
                        var h, o, l;
                        if (s(t) && (t = t()), t && t.charAt && "@" == t.charAt(0)) {
                            if (h = n, o = t.substr(1), null == o || "" === o || "hasOwnProperty" === o || !f.test("." + o)) throw r("badmember", o);
                            for (var o = o.split("."), c = 0, a = o.length; c < a && h !== i; c++) l = o[c], h = null !== h ? h[l] : i;
                        } else h = t;
                        u[e] = h;
                    }), u;
                }

                function g(n) { return n.resource; }

                function k(n) { u(n || {}, this); }

                var nt = new c(p);
                return b = h({}, v, b), o(b, function(f, c) {
                    var l = /^(POST|PUT|PATCH)$/i.test(f.method);
                    k[c] = function(c, v, p, w) {
                        var tt = {}, it, rt, ut;
                        switch (arguments.length) {
                        case 4:
                            ut = w;
                            rt = p;
                        case 3:
                        case 2:
                            if (s(v)) {
                                if (s(c)) {
                                    rt = c;
                                    ut = v;
                                    break;
                                }
                                rt = v;
                                ut = p;
                            } else {
                                tt = c;
                                it = v;
                                rt = p;
                                break;
                            }
                        case 1:
                            s(c) ? rt = c : l ? it = c : tt = c;
                            break;
                        case 0:
                            break;
                        default:
                            throw r("badargs", arguments.length);
                        }
                        var et = this instanceof k, b = et ? it : f.isArray ? [] : new k(it), ft = {}, ot = f.interceptor && f.interceptor.response || g, st = f.interceptor && f.interceptor.responseError || i;
                        return o(f, function(n, t) { "params" != t && "isArray" != t && "interceptor" != t && (ft[t] = y(n)); }), l && (ft.data = it), nt.setUrlParams(ft, h({}, d(it, f.params || {}), tt), f.url), tt = n(ft).then(function(n) {
                            var i = n.data, e = b.$promise;
                            if (i) {
                                if (t.isArray(i) !== !!f.isArray) throw r("badcfg", f.isArray ? "array" : "object", t.isArray(i) ? "array" : "object");
                                f.isArray ? (b.length = 0, o(i, function(n) { "object" == typeof n ? b.push(new k(n)) : b.push(n); })) : (u(i, b), b.$promise = e);
                            }
                            return b.$resolved = !0, n.resource = b, n;
                        }, function(n) { return b.$resolved = !0, (ut || a)(n), e.reject(n); }), tt = tt.then(function(n) {
                            var t = ot(n);
                            return (rt || a)(t, n.headers), t;
                        }, st), et ? tt : (b.$promise = tt, b.$resolved = !1, b);
                    };
                    k.prototype["$" + c] = function(n, t, i) { return s(n) && (i = t, t = n, n = {}), n = k[c].call(this, n, this, t, i), n.$promise || n; };
                }), k.bind = function(n) { return l(p, h({}, w, n), b); }, k;
            }

            var v = { get: { method: "GET" }, save: { method: "POST" }, query: { method: "GET", isArray: !0 }, remove: { method: "DELETE" }, "delete": { method: "DELETE" } }, a = t.noop, o = t.forEach, h = t.extend, y = t.copy, s = t.isFunction;
            return c.prototype = {
                setUrlParams: function(n, i, u) {
                    var e = this, f = u || e.template, s, h, c = e.urlParams = {};
                    o(f.split(/\W/), function(n) {
                        if ("hasOwnProperty" === n) throw r("badname");
                        !/^\d+$/.test(n) && n && RegExp("(^|[^\\\\]):" + n + "(\\W|$)").test(f) && (c[n] = !0);
                    });
                    f = f.replace(/\\:/g, ":");
                    i = i || {};
                    o(e.urlParams, function(n, r) {
                        s = i.hasOwnProperty(r) ? i[r] : e.defaults[r];
                        t.isDefined(s) && null !== s ? (h = encodeURIComponent(s).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), f = f.replace(RegExp(":" + r + "(\\W|$)", "g"), function(n, t) { return h + t; })) : f = f.replace(RegExp("(/?):" + r + "(\\W|$)", "g"), function(n, t, i) { return "/" == i.charAt(0) ? i : t + i; });
                    });
                    f = f.replace(/\/+$/, "") || "/";
                    f = f.replace(/\/\.(?=\w+($|\?))/, ".");
                    n.url = f.replace(/\/\\\./, "/.");
                    o(i, function(t, i) { e.urlParams[i] || (n.params = n.params || {}, n.params[i] = t); });
                }
            }, l;
        }
    ]);
}(window, window.angular), function e$$0(n, t, i) {

    function r(u, e) {
        if (!t[u]) {
            if (!n[u]) {
                var o = "function" == typeof require && require;
                if (!e && o) return o(u, !0);
                if (f) return f(u, !0);
                o = Error("Cannot find module '" + u + "'");
                throw o.code = "MODULE_NOT_FOUND", o;
            }
            o = t[u] = { exports: {} };
            n[u][0].call(o.exports, function(t) {
                var i = n[u][1][t];
                return r(i ? i : t);
            }, o, o.exports, e$$0, n, t, i);
        }
        return t[u].exports;
    }

    for (var f = "function" == typeof require && require, u = 0; u < i.length; u++) r(i[u]);
    return r;
}({
    1: [
        function(n, t) {

            function i(n, t) {

                function o(n, t) { return function() { return n.apply(t, arguments); }; }

                var e;
                if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = n, this.tapDelay = t.tapDelay || 200, !i.notNeeded(n)) {
                    for (var f = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), r = 0, s = f.length; r < s; r++) this[f[r]] = o(this[f[r]], this);
                    u && (n.addEventListener("mouseover", this.onMouse, !0), n.addEventListener("mousedown", this.onMouse, !0), n.addEventListener("mouseup", this.onMouse, !0));
                    n.addEventListener("click", this.onClick, !0);
                    n.addEventListener("touchstart", this.onTouchStart, !1);
                    n.addEventListener("touchmove", this.onTouchMove, !1);
                    n.addEventListener("touchend", this.onTouchEnd, !1);
                    n.addEventListener("touchcancel", this.onTouchCancel, !1);
                    Event.prototype.stopImmediatePropagation || (n.removeEventListener = function(t, i, r) {
                        var u = Node.prototype.removeEventListener;
                        "click" === t ? u.call(n, t, i.hijacked || i, r) : u.call(n, t, i, r);
                    }, n.addEventListener = function(t, i, r) {
                        var u = Node.prototype.addEventListener;
                        "click" === t ? u.call(n, t, i.hijacked || (i.hijacked = function(n) { n.propagationStopped || i(n); }), r) : u.call(n, t, i, r);
                    });
                    "function" == typeof n.onclick && (e = n.onclick, n.addEventListener("click", function(n) { e(n); }, !1), n.onclick = null);
                }
            }

            var u = 0 < navigator.userAgent.indexOf("Android"), r = /iP(ad|hone|od)/.test(navigator.userAgent), f = r && /OS 4_\d(_\d)?/.test(navigator.userAgent), e = r && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), o = 0 < navigator.userAgent.indexOf("BB10");
            i.prototype.needsClick = function(n) {
                switch (n.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (n.disabled) return !0;
                    break;
                case "input":
                    if (r && "file" === n.type || n.disabled) return !0;
                    break;
                case "label":
                case "video":
                    return !0;
                }
                return /\bneedsclick\b/.test(n.className);
            };
            i.prototype.needsFocus = function(n) {
                switch (n.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !u;
                case "input":
                    switch (n.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1;
                    }
                    return !n.disabled && !n.readOnly;
                default:
                    return /\bneedsfocus\b/.test(n.className);
                }
            };
            i.prototype.sendClick = function(n, t) {
                var r, i;
                document.activeElement && document.activeElement !== n && document.activeElement.blur();
                i = t.changedTouches[0];
                r = document.createEvent("MouseEvents");
                r.initMouseEvent(this.determineEventType(n), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null);
                r.forwardedTouchEvent = !0;
                n.dispatchEvent(r);
            };
            i.prototype.determineEventType = function(n) { return u && "select" === n.tagName.toLowerCase() ? "mousedown" : "click"; };
            i.prototype.focus = function(n) {
                var t;
                r && n.setSelectionRange && 0 !== n.type.indexOf("date") && "time" !== n.type ? (t = n.value.length, n.setSelectionRange(t, t)) : n.focus();
            };
            i.prototype.updateScrollParent = function(n) {
                var i, t;
                if (i = n.fastClickScrollParent, !i || !i.contains(n)) {
                    t = n;
                    do {
                        if (t.scrollHeight > t.offsetHeight) {
                            i = t;
                            n.fastClickScrollParent = t;
                            break;
                        }
                        t = t.parentElement;
                    } while (t);
                }
                i && (i.fastClickLastScrollTop = i.scrollTop);
            };
            i.prototype.getTargetElementFromEventTarget = function(n) { return n.nodeType === Node.TEXT_NODE ? n.parentNode : n; };
            i.prototype.onTouchStart = function(n) {
                var i, t, u;
                if (1 < n.targetTouches.length) return !0;
                if (i = this.getTargetElementFromEventTarget(n.target), t = n.targetTouches[0], r) {
                    if (u = window.getSelection(), u.rangeCount && !u.isCollapsed) return !0;
                    if (!f) {
                        if (t.identifier && t.identifier === this.lastTouchIdentifier) return n.preventDefault(), !1;
                        this.lastTouchIdentifier = t.identifier;
                        this.updateScrollParent(i);
                    }
                }
                return this.trackingClick = !0, this.trackingClickStart = n.timeStamp, this.targetElement = i, this.touchStartX = t.pageX, this.touchStartY = t.pageY, n.timeStamp - this.lastClickTime < this.tapDelay && n.preventDefault(), !0;
            };
            i.prototype.touchHasMoved = function(n) {
                n = n.changedTouches[0];
                var t = this.touchBoundary;
                return Math.abs(n.pageX - this.touchStartX) > t || Math.abs(n.pageY - this.touchStartY) > t ? !0 : !1;
            };
            i.prototype.onTouchMove = function(n) { return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(n.target) || this.touchHasMoved(n)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0; };
            i.prototype.findControl = function(n) { return void 0 !== n.control ? n.control : n.htmlFor ? document.getElementById(n.htmlFor) : n.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"); };
            i.prototype.onTouchEnd = function(n) {
                var i, o, t = this.targetElement;
                if (!this.trackingClick) return !0;
                if (n.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
                if (this.cancelNextClick = !1, this.lastClickTime = n.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, e && (o = n.changedTouches[0], t = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || t, t.fastClickScrollParent = this.targetElement.fastClickScrollParent), o = t.tagName.toLowerCase(), "label" === o) {
                    if (i = this.findControl(t)) {
                        if (this.focus(t), u) return !1;
                        t = i;
                    }
                } else if (this.needsFocus(t)) return 100 < n.timeStamp - i || r && window.top !== window && "input" === o ? (this.targetElement = null, !1) : (this.focus(t), this.sendClick(t, n), r && "select" === o || (this.targetElement = null, n.preventDefault()), !1);
                return r && !f && (i = t.fastClickScrollParent) && i.fastClickLastScrollTop !== i.scrollTop ? !0 : (this.needsClick(t) || (n.preventDefault(), this.sendClick(t, n)), !1);
            };
            i.prototype.onTouchCancel = function() {
                this.trackingClick = !1;
                this.targetElement = null;
            };
            i.prototype.onMouse = function(n) { return this.targetElement && !n.forwardedTouchEvent && n.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (n.stopImmediatePropagation ? n.stopImmediatePropagation() : n.propagationStopped = !0, n.stopPropagation(), n.preventDefault(), !1) : !0 : !0; };
            i.prototype.onClick = function(n) { return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === n.target.type && 0 === n.detail ? !0 : (n = this.onMouse(n), n || (this.targetElement = null), n); };
            i.prototype.destroy = function() {
                var n = this.layer;
                u && (n.removeEventListener("mouseover", this.onMouse, !0), n.removeEventListener("mousedown", this.onMouse, !0), n.removeEventListener("mouseup", this.onMouse, !0));
                n.removeEventListener("click", this.onClick, !0);
                n.removeEventListener("touchstart", this.onTouchStart, !1);
                n.removeEventListener("touchmove", this.onTouchMove, !1);
                n.removeEventListener("touchend", this.onTouchEnd, !1);
                n.removeEventListener("touchcancel", this.onTouchCancel, !1);
            };
            i.notNeeded = function(n) {
                var t, i;
                if ("undefined" == typeof window.ontouchstart) return !0;
                if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
                    if (u) {
                        if ((t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || 31 < i && document.documentElement.scrollWidth <= window.outerWidth)) return !0;
                    } else return !0;
                return o && (t = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= t[1] && 3 <= t[2] && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === n.style.msTouchAction ? !0 : !1;
            };
            i.attach = function(n, t) { return new i(n, t); };
            "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return i; }) : "undefined" != typeof t && t.exports ? (t.exports = i.attach, t.exports.FastClick = i) : window.FastClick = i;
        }, {}
    ],
    2: [function(n) { window.Origami = { fastclick: n("./bower_components/fastclick/lib/fastclick.js") }; }, { "./bower_components/fastclick/lib/fastclick.js": 1 }]
}, {}, [2]);
document.addEventListener("load", function() { document.dispatchEvent(new CustomEvent("o.load")); });
document.addEventListener("DOMContentLoaded", function() { document.dispatchEvent(new CustomEvent("o.DOMContentLoaded")); }), function() {
    var n = angular.module("TokenViewer", ["ngResource"]).run(function() {
            var n = Origami.fastclick;
            n(document.body);
        }),
        t = function(n, t, i) {

            function f(t) {
                var i, o, r, f, s;
                for (n.data.title = t.title, n.data.updatedDate = t.updatedDate, n.message = t.message, i = 0; i < n.data.tokenPoints.length; i++) o = n.data.tokenPoints[i], r = u(t.tokenPoints, o.key), r == null ? (n.data.tokenPoints.splice(i, 1), i--) : e(n.data.tokenPoints[i], r);
                for (i = 0; i < t.tokenPoints.length; i++) f = t.tokenPoints[i], s = u(n.data.tokenPoints, f.key), s == null && n.data.tokenPoints.push(f);
            }

            function e(n, t) {
                n.name = t.name;
                n.value = t.value;
                n.sortOrder = t.sortOrder;
                n.additionalAttributes = t.additionalAttributes;
            }

            function u(n, t) {
                for (var i = 0; i < n.length; i++) if (n[i].key == t) return n[i];
                return null;
            }

            n.data = { title: "Current Queue", updatedDate: "", tokenPoints: [] };
            n.isLoading = !1;
            var r = function() {
                n.isLoading = !0;
                t.get().$promise.then(function(t) {
                    f(t);
                    n.error = "";
                    n.isLoading = !1;
                }, function() {
                    n.data.tokenPoints.length > 0 && (n.data.updatedDate = n.data.updatedDate);
                    n.error = "Queue system update presently not available.";
                    n.isLoading = !1;
                });
            };
            i(r, 2e4);
            r();
            n.showMore = function(n) { n.additionalAttributes && n.additionalAttributes.length && (n.showMore = !n.showMore); };
        };
    n.controller("mainCtrl", ["$scope", "tokenService", "$interval", "$log", t]);
    n.filter("numberPadded", function() {
        return function(n, t) {
            var i = parseInt(n, 10);
            if (t = parseInt(t, 10), isNaN(i) || isNaN(t)) return n;
            for (i = "" + i; i.length < t;) i = "0" + i;
            return i;
        };
    });
    n.filter("fromNow", ["moment", function(n) { return function(t) { return n(t).fromNow(); }; }]);
    n.directive("pulse", function() {
        return {
            link: function(n, t, i) {
                var f, u, e, r;
                f = 800;
                r = 300;
                n.$watchCollection(i.pulse, function(n, i) {
                    if (n !== i) {
                        var s = function(n) { n.clearQueue().fadeOut(r * .5, function() { n.fadeIn(r * .5, function() { n.fadeOut(r, function() { n.fadeIn(r, function() { n.fadeOut(r * 1.5, function() { n.fadeIn(r * 1.5, function() { n.css("opacity", 1); }); }); }); }); }); }); }, o = +new Date, h = arguments;
                        u && o < u + f ? (clearTimeout(e), e = setTimeout(function() {
                            u = o;
                            s(t);
                        }, f)) : (u = o, s(t));
                    }
                }, !0);
            }
        };
    });
    n.value("moment", moment);
    n.value("apiPathProvider", apiPathProvider);
    n.factory("tokenService", ["$resource", "$q", "$timeout", "apiPathProvider", function(n, t, i, r) { return { get: function() { return n(r.rootPath + "/api/token/data").get(); } }; }]);
}();