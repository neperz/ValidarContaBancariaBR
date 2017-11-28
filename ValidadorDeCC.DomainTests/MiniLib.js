﻿/*! moip-2.6.3.js - build date: 2016-06-02 */
var JSEncryptExports = {};
! function(a) {
    function b(a, b, c) {
        null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
    }

    function c() {
        return new b(null)
    }

    function d(a, b, c, d, e, f) {
        for (; 0 <= --f;) {
            var g = b * this[a++] + c[d] + e;
            e = Math.floor(g / 67108864), c[d++] = 67108863 & g
        }
        return e
    }

    function e(a, b, c, d, e, f) {
        var g = 32767 & b;
        for (b >>= 15; 0 <= --f;) {
            var h = 32767 & this[a],
                i = this[a++] >> 15,
                j = b * h + i * g,
                h = g * h + ((32767 & j) << 15) + c[d] + (1073741823 & e);
            e = (h >>> 30) + (j >>> 15) + b * i + (e >>> 30), c[d++] = 1073741823 & h
        }
        return e
    }

    function f(a, b, c, d, e, f) {
        var g = 16383 & b;
        for (b >>= 14; 0 <= --f;) {
            var h = 16383 & this[a],
                i = this[a++] >> 14,
                j = b * h + i * g,
                h = g * h + ((16383 & j) << 14) + c[d] + e;
            e = (h >> 28) + (j >> 14) + b * i, c[d++] = 268435455 & h
        }
        return e
    }

    function g(a, b) {
        var c = C[a.charCodeAt(b)];
        return null == c ? -1 : c
    }

    function h(a) {
        var b = c();
        return b.fromInt(a), b
    }

    function i(a) {
        var b, c = 1;
        return 0 != (b = a >>> 16) && (a = b, c += 16), 0 != (b = a >> 8) && (a = b, c += 8), 0 != (b = a >> 4) && (a = b, c += 4), 0 != (b = a >> 2) && (a = b, c += 2), 0 != a >> 1 && (c += 1), c
    }

    function j(a) {
        this.m = a
    }

    function k(a) {
        this.m = a, this.mp = a.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << a.DB - 15) - 1, this.mt2 = 2 * a.t
    }

    function l(a, b) {
        return a & b
    }

    function m(a, b) {
        return a | b
    }

    function n(a, b) {
        return a ^ b
    }

    function o(a, b) {
        return a & ~b
    }

    function p() {}

    function q(a) {
        return a
    }

    function r(a) {
        this.r2 = c(), this.q3 = c(), b.ONE.dlShiftTo(2 * a.t, this.r2), this.mu = this.r2.divide(a), this.m = a
    }

    function s() {
        this.j = this.i = 0, this.S = []
    }

    function t() {}

    function u(a, c) {
        return new b(a, c)
    }

    function w() {
        this.n = null, this.e = 0, this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null
    }

    function x(a) {
        var b, c, d = "";
        for (b = 0; b + 3 <= a.length; b += 3) c = parseInt(a.substring(b, b + 3), 16), d += J.charAt(c >> 6) + J.charAt(63 & c);
        for (b + 1 == a.length ? (c = parseInt(a.substring(b, b + 1), 16), d += J.charAt(c << 2)) : b + 2 == a.length && (c = parseInt(a.substring(b, b + 2), 16), d += J.charAt(c >> 2) + J.charAt((3 & c) << 4)); 0 < (3 & d.length);) d += K;
        return d
    }

    function y(a) {
        var b, c, d = "",
            e = 0;
        for (b = 0; b < a.length && a.charAt(b) != K; ++b) v = J.indexOf(a.charAt(b)), 0 > v || (0 == e ? (d += B.charAt(v >> 2), c = 3 & v, e = 1) : 1 == e ? (d += B.charAt(c << 2 | v >> 4), c = 15 & v, e = 2) : 2 == e ? (d += B.charAt(c), d += B.charAt(v >> 2), c = 3 & v, e = 3) : (d += B.charAt(c << 2 | v >> 4), d += B.charAt(15 & v), e = 0));
        return 1 == e && (d += B.charAt(c << 2)), d
    }
    var z;
    "Microsoft Internet Explorer" == navigator.appName ? (b.prototype.am = e, z = 30) : "Netscape" != navigator.appName ? (b.prototype.am = d, z = 26) : (b.prototype.am = f, z = 28), b.prototype.DB = z, b.prototype.DM = (1 << z) - 1, b.prototype.DV = 1 << z, b.prototype.FV = Math.pow(2, 52), b.prototype.F1 = 52 - z, b.prototype.F2 = 2 * z - 52;
    var A, B = "0123456789abcdefghijklmnopqrstuvwxyz",
        C = [];
    for (z = 48, A = 0; 9 >= A; ++A) C[z++] = A;
    for (z = 97, A = 10; 36 > A; ++A) C[z++] = A;
    for (z = 65, A = 10; 36 > A; ++A) C[z++] = A;
    j.prototype.convert = function(a) {
        return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a
    }, j.prototype.revert = function(a) {
        return a
    }, j.prototype.reduce = function(a) {
        a.divRemTo(this.m, null, a)
    }, j.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c), this.reduce(c)
    }, j.prototype.sqrTo = function(a, b) {
        a.squareTo(b), this.reduce(b)
    }, k.prototype.convert = function(a) {
        var d = c();
        return a.abs().dlShiftTo(this.m.t, d), d.divRemTo(this.m, null, d), 0 > a.s && 0 < d.compareTo(b.ZERO) && this.m.subTo(d, d), d
    }, k.prototype.revert = function(a) {
        var b = c();
        return a.copyTo(b), this.reduce(b), b
    }, k.prototype.reduce = function(a) {
        for (; a.t <= this.mt2;) a[a.t++] = 0;
        for (var b = 0; b < this.m.t; ++b) {
            var c = 32767 & a[b],
                d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM,
                c = b + this.m.t;
            for (a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV;) a[c] -= a.DV, a[++c]++
        }
        a.clamp(), a.drShiftTo(this.m.t, a), 0 <= a.compareTo(this.m) && a.subTo(this.m, a)
    }, k.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c), this.reduce(c)
    }, k.prototype.sqrTo = function(a, b) {
        a.squareTo(b), this.reduce(b)
    }, b.prototype.copyTo = function(a) {
        for (var b = this.t - 1; b >= 0; --b) a[b] = this[b];
        a.t = this.t, a.s = this.s
    }, b.prototype.fromInt = function(a) {
        this.t = 1, this.s = 0 > a ? -1 : 0, a > 0 ? this[0] = a : -1 > a ? this[0] = a + DV : this.t = 0
    }, b.prototype.fromString = function(a, c) {
        var d;
        if (16 == c) d = 4;
        else if (8 == c) d = 3;
        else if (256 == c) d = 8;
        else if (2 == c) d = 1;
        else if (32 == c) d = 5;
        else {
            if (4 != c) return void this.fromRadix(a, c);
            d = 2
        }
        this.s = this.t = 0;
        for (var e = a.length, f = !1, h = 0; 0 <= --e;) {
            var i = 8 == d ? 255 & a[e] : g(a, e);
            0 > i ? "-" == a.charAt(e) && (f = !0) : (f = !1, 0 == h ? this[this.t++] = i : h + d > this.DB ? (this[this.t - 1] |= (i & (1 << this.DB - h) - 1) << h, this[this.t++] = i >> this.DB - h) : this[this.t - 1] |= i << h, h += d, h >= this.DB && (h -= this.DB))
        }
        8 == d && 0 != (128 & a[0]) && (this.s = -1, h > 0 && (this[this.t - 1] |= (1 << this.DB - h) - 1 << h)), this.clamp(), f && b.ZERO.subTo(this, this)
    }, b.prototype.clamp = function() {
        for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a;) --this.t
    }, b.prototype.dlShiftTo = function(a, b) {
        var c;
        for (c = this.t - 1; c >= 0; --c) b[c + a] = this[c];
        for (c = a - 1; c >= 0; --c) b[c] = 0;
        b.t = this.t + a, b.s = this.s
    }, b.prototype.drShiftTo = function(a, b) {
        for (var c = a; c < this.t; ++c) b[c - a] = this[c];
        b.t = Math.max(this.t - a, 0), b.s = this.s
    }, b.prototype.lShiftTo = function(a, b) {
        var c, d = a % this.DB,
            e = this.DB - d,
            f = (1 << e) - 1,
            g = Math.floor(a / this.DB),
            h = this.s << d & this.DM;
        for (c = this.t - 1; c >= 0; --c) b[c + g + 1] = this[c] >> e | h, h = (this[c] & f) << d;
        for (c = g - 1; c >= 0; --c) b[c] = 0;
        b[g] = h, b.t = this.t + g + 1, b.s = this.s, b.clamp()
    }, b.prototype.rShiftTo = function(a, b) {
        b.s = this.s;
        var c = Math.floor(a / this.DB);
        if (c >= this.t) b.t = 0;
        else {
            var d = a % this.DB,
                e = this.DB - d,
                f = (1 << d) - 1;
            b[0] = this[c] >> d;
            for (var g = c + 1; g < this.t; ++g) b[g - c - 1] |= (this[g] & f) << e, b[g - c] = this[g] >> d;
            d > 0 && (b[this.t - c - 1] |= (this.s & f) << e), b.t = this.t - c, b.clamp()
        }
    }, b.prototype.subTo = function(a, b) {
        for (var c = 0, d = 0, e = Math.min(a.t, this.t); e > c;) d += this[c] - a[c], b[c++] = d & this.DM, d >>= this.DB;
        if (a.t < this.t) {
            for (d -= a.s; c < this.t;) d += this[c], b[c++] = d & this.DM, d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t;) d -= a[c], b[c++] = d & this.DM, d >>= this.DB;
            d -= a.s
        }
        b.s = 0 > d ? -1 : 0, -1 > d ? b[c++] = this.DV + d : d > 0 && (b[c++] = d), b.t = c, b.clamp()
    }, b.prototype.multiplyTo = function(a, c) {
        var d = this.abs(),
            e = a.abs(),
            f = d.t;
        for (c.t = f + e.t; 0 <= --f;) c[f] = 0;
        for (f = 0; f < e.t; ++f) c[f + d.t] = d.am(0, e[f], c, f, 0, d.t);
        c.s = 0, c.clamp(), this.s != a.s && b.ZERO.subTo(c, c)
    }, b.prototype.squareTo = function(a) {
        for (var b = this.abs(), c = a.t = 2 * b.t; 0 <= --c;) a[c] = 0;
        for (c = 0; c < b.t - 1; ++c) {
            var d = b.am(c, b[c], a, 2 * c, 0, 1);
            (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV, a[c + b.t + 1] = 1)
        }
        0 < a.t && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)), a.s = 0, a.clamp()
    }, b.prototype.divRemTo = function(a, d, e) {
        var f = a.abs();
        if (!(0 >= f.t)) {
            var g = this.abs();
            if (g.t < f.t) null != d && d.fromInt(0), null != e && this.copyTo(e);
            else {
                null == e && (e = c());
                var h = c(),
                    j = this.s;
                a = a.s;
                var k = this.DB - i(f[f.t - 1]);
                if (k > 0 ? (f.lShiftTo(k, h), g.lShiftTo(k, e)) : (f.copyTo(h), g.copyTo(e)), f = h.t, g = h[f - 1], 0 != g) {
                    var l = g * (1 << this.F1) + (f > 1 ? h[f - 2] >> this.F2 : 0),
                        m = this.FV / l,
                        l = (1 << this.F1) / l,
                        n = 1 << this.F2,
                        o = e.t,
                        p = o - f,
                        q = null == d ? c() : d;
                    for (h.dlShiftTo(p, q), 0 <= e.compareTo(q) && (e[e.t++] = 1, e.subTo(q, e)), b.ONE.dlShiftTo(f, q), q.subTo(h, h); h.t < f;) h[h.t++] = 0;
                    for (; 0 <= --p;) {
                        var r = e[--o] == g ? this.DM : Math.floor(e[o] * m + (e[o - 1] + n) * l);
                        if ((e[o] += h.am(0, r, e, p, 0, f)) < r)
                            for (h.dlShiftTo(p, q), e.subTo(q, e); e[o] < --r;) e.subTo(q, e)
                    }
                    null != d && (e.drShiftTo(f, d), j != a && b.ZERO.subTo(d, d)), e.t = f, e.clamp(), k > 0 && e.rShiftTo(k, e), 0 > j && b.ZERO.subTo(e, e)
                }
            }
        }
    }, b.prototype.invDigit = function() {
        if (1 > this.t) return 0;
        var a = this[0];
        if (0 == (1 & a)) return 0;
        var b = 3 & a,
            b = b * (2 - (15 & a) * b) & 15,
            b = b * (2 - (255 & a) * b) & 255,
            b = b * (2 - ((65535 & a) * b & 65535)) & 65535,
            b = b * (2 - a * b % this.DV) % this.DV;
        return b > 0 ? this.DV - b : -b
    }, b.prototype.isEven = function() {
        return 0 == (0 < this.t ? 1 & this[0] : this.s)
    }, b.prototype.exp = function(a, d) {
        if (a > 4294967295 || 1 > a) return b.ONE;
        var e = c(),
            f = c(),
            g = d.convert(this),
            h = i(a) - 1;
        for (g.copyTo(e); 0 <= --h;)
            if (d.sqrTo(e, f), (a & 1 << h) > 0) d.mulTo(f, g, e);
            else var j = e,
                e = f,
                f = j;
        return d.revert(e)
    }, b.prototype.toString = function(a) {
        if (0 > this.s) return "-" + this.negate().toString(a);
        if (16 == a) a = 4;
        else if (8 == a) a = 3;
        else if (2 == a) a = 1;
        else if (32 == a) a = 5;
        else {
            if (4 != a) return this.toRadix(a);
            a = 2
        }
        var b, c = (1 << a) - 1,
            d = !1,
            e = "",
            f = this.t,
            g = this.DB - f * this.DB % a;
        if (0 < f--)
            for (g < this.DB && 0 < (b = this[f] >> g) && (d = !0, e = B.charAt(b)); f >= 0;) a > g ? (b = (this[f] & (1 << g) - 1) << a - g, b |= this[--f] >> (g += this.DB - a)) : (b = this[f] >> (g -= a) & c, 0 >= g && (g += this.DB, --f)), b > 0 && (d = !0), d && (e += B.charAt(b));
        return d ? e : "0"
    }, b.prototype.negate = function() {
        var a = c();
        return b.ZERO.subTo(this, a), a
    }, b.prototype.abs = function() {
        return 0 > this.s ? this.negate() : this
    }, b.prototype.compareTo = function(a) {
        var b = this.s - a.s;
        if (0 != b) return b;
        var c = this.t,
            b = c - a.t;
        if (0 != b) return 0 > this.s ? -b : b;
        for (; 0 <= --c;)
            if (0 != (b = this[c] - a[c])) return b;
        return 0
    }, b.prototype.bitLength = function() {
        return 0 >= this.t ? 0 : this.DB * (this.t - 1) + i(this[this.t - 1] ^ this.s & this.DM)
    }, b.prototype.mod = function(a) {
        var d = c();
        return this.abs().divRemTo(a, null, d), 0 > this.s && 0 < d.compareTo(b.ZERO) && a.subTo(d, d), d
    }, b.prototype.modPowInt = function(a, b) {
        var c;
        return c = 256 > a || b.isEven() ? new j(b) : new k(b), this.exp(a, c)
    }, b.ZERO = h(0), b.ONE = h(1), p.prototype.convert = q, p.prototype.revert = q, p.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c)
    }, p.prototype.sqrTo = function(a, b) {
        a.squareTo(b)
    }, r.prototype.convert = function(a) {
        if (0 > a.s || a.t > 2 * this.m.t) return a.mod(this.m);
        if (0 > a.compareTo(this.m)) return a;
        var b = c();
        return a.copyTo(b), this.reduce(b), b
    }, r.prototype.revert = function(a) {
        return a
    }, r.prototype.reduce = function(a) {
        for (a.drShiftTo(this.m.t - 1, this.r2), a.t > this.m.t + 1 && (a.t = this.m.t + 1, a.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > a.compareTo(this.r2);) a.dAddOffset(1, this.m.t + 1);
        for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m);) a.subTo(this.m, a)
    }, r.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c), this.reduce(c)
    }, r.prototype.sqrTo = function(a, b) {
        a.squareTo(b), this.reduce(b)
    };
    var D = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        E = 67108864 / D[D.length - 1];
    b.prototype.chunkSize = function(a) {
        return Math.floor(Math.LN2 * this.DB / Math.log(a))
    }, b.prototype.toRadix = function(a) {
        if (null == a && (a = 10), 0 == this.signum() || 2 > a || a > 36) return "0";
        var b = this.chunkSize(a),
            b = Math.pow(a, b),
            d = h(b),
            e = c(),
            f = c(),
            g = "";
        for (this.divRemTo(d, e, f); 0 < e.signum();) g = (b + f.intValue()).toString(a).substr(1) + g, e.divRemTo(d, e, f);
        return f.intValue().toString(a) + g
    }, b.prototype.fromRadix = function(a, c) {
        this.fromInt(0), null == c && (c = 10);
        for (var d = this.chunkSize(c), e = Math.pow(c, d), f = !1, h = 0, i = 0, j = 0; j < a.length; ++j) {
            var k = g(a, j);
            0 > k ? "-" == a.charAt(j) && 0 == this.signum() && (f = !0) : (i = c * i + k, ++h >= d && (this.dMultiply(e), this.dAddOffset(i, 0), i = h = 0))
        }
        h > 0 && (this.dMultiply(Math.pow(c, h)), this.dAddOffset(i, 0)), f && b.ZERO.subTo(this, this)
    }, b.prototype.fromNumber = function(a, c, d) {
        if ("number" == typeof c)
            if (2 > a) this.fromInt(1);
            else
                for (this.fromNumber(a, d), this.testBit(a - 1) || this.bitwiseTo(b.ONE.shiftLeft(a - 1), m, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(c);) this.dAddOffset(2, 0), this.bitLength() > a && this.subTo(b.ONE.shiftLeft(a - 1), this);
        else {
            d = [];
            var e = 7 & a;
            d.length = (a >> 3) + 1, c.nextBytes(d), d[0] = e > 0 ? d[0] & (1 << e) - 1 : 0, this.fromString(d, 256)
        }
    }, b.prototype.bitwiseTo = function(a, b, c) {
        var d, e, f = Math.min(a.t, this.t);
        for (d = 0; f > d; ++d) c[d] = b(this[d], a[d]);
        if (a.t < this.t) {
            for (e = a.s & this.DM, d = f; d < this.t; ++d) c[d] = b(this[d], e);
            c.t = this.t
        } else {
            for (e = this.s & this.DM, d = f; d < a.t; ++d) c[d] = b(e, a[d]);
            c.t = a.t
        }
        c.s = b(this.s, a.s), c.clamp()
    }, b.prototype.changeBit = function(a, c) {
        var d = b.ONE.shiftLeft(a);
        return this.bitwiseTo(d, c, d), d
    }, b.prototype.addTo = function(a, b) {
        for (var c = 0, d = 0, e = Math.min(a.t, this.t); e > c;) d += this[c] + a[c], b[c++] = d & this.DM, d >>= this.DB;
        if (a.t < this.t) {
            for (d += a.s; c < this.t;) d += this[c], b[c++] = d & this.DM, d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t;) d += a[c], b[c++] = d & this.DM, d >>= this.DB;
            d += a.s
        }
        b.s = 0 > d ? -1 : 0, d > 0 ? b[c++] = d : -1 > d && (b[c++] = this.DV + d), b.t = c, b.clamp()
    }, b.prototype.dMultiply = function(a) {
        this[this.t] = this.am(0, a - 1, this, 0, 0, this.t), ++this.t, this.clamp()
    }, b.prototype.dAddOffset = function(a, b) {
        if (0 != a) {
            for (; this.t <= b;) this[this.t++] = 0;
            for (this[b] += a; this[b] >= this.DV;) this[b] -= this.DV, ++b >= this.t && (this[this.t++] = 0), ++this[b]
        }
    }, b.prototype.multiplyLowerTo = function(a, b, c) {
        var d = Math.min(this.t + a.t, b);
        for (c.s = 0, c.t = d; d > 0;) c[--d] = 0;
        var e;
        for (e = c.t - this.t; e > d; ++d) c[d + this.t] = this.am(0, a[d], c, d, 0, this.t);
        for (e = Math.min(a.t, b); e > d; ++d) this.am(0, a[d], c, d, 0, b - d);
        c.clamp()
    }, b.prototype.multiplyUpperTo = function(a, b, c) {
        --b;
        var d = c.t = this.t + a.t - b;
        for (c.s = 0; 0 <= --d;) c[d] = 0;
        for (d = Math.max(b - this.t, 0); d < a.t; ++d) c[this.t + d - b] = this.am(b - d, a[d], c, 0, 0, this.t + d - b);
        c.clamp(), c.drShiftTo(1, c)
    }, b.prototype.modInt = function(a) {
        if (0 >= a) return 0;
        var b = this.DV % a,
            c = 0 > this.s ? a - 1 : 0;
        if (0 < this.t)
            if (0 == b) c = this[0] % a;
            else
                for (var d = this.t - 1; d >= 0; --d) c = (b * c + this[d]) % a;
        return c
    }, b.prototype.millerRabin = function(a) {
        var d = this.subtract(b.ONE),
            e = d.getLowestSetBit();
        if (0 >= e) return !1;
        var f = d.shiftRight(e);
        a = a + 1 >> 1, a > D.length && (a = D.length);
        for (var g = c(), h = 0; a > h; ++h) {
            g.fromInt(D[Math.floor(Math.random() * D.length)]);
            var i = g.modPow(f, this);
            if (0 != i.compareTo(b.ONE) && 0 != i.compareTo(d)) {
                for (var j = 1; j++ < e && 0 != i.compareTo(d);)
                    if (i = i.modPowInt(2, this), 0 == i.compareTo(b.ONE)) return !1;
                if (0 != i.compareTo(d)) return !1
            }
        }
        return !0
    }, b.prototype.clone = function() {
        var a = c();
        return this.copyTo(a), a
    }, b.prototype.intValue = function() {
        if (0 > this.s) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1
        } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    }, b.prototype.byteValue = function() {
        return 0 == this.t ? this.s : this[0] << 24 >> 24
    }, b.prototype.shortValue = function() {
        return 0 == this.t ? this.s : this[0] << 16 >> 16
    }, b.prototype.signum = function() {
        return 0 > this.s ? -1 : 0 >= this.t || 1 == this.t && 0 >= this[0] ? 0 : 1
    }, b.prototype.toByteArray = function() {
        var a = this.t,
            b = [];
        b[0] = this.s;
        var c, d = this.DB - a * this.DB % 8,
            e = 0;
        if (0 < a--)
            for (d < this.DB && (c = this[a] >> d) != (this.s & this.DM) >> d && (b[e++] = c | this.s << this.DB - d); a >= 0;) 8 > d ? (c = (this[a] & (1 << d) - 1) << 8 - d, c |= this[--a] >> (d += this.DB - 8)) : (c = this[a] >> (d -= 8) & 255, 0 >= d && (d += this.DB, --a)), 0 != (128 & c) && (c |= -256), 0 == e && (128 & this.s) != (128 & c) && ++e, (e > 0 || c != this.s) && (b[e++] = c);
        return b
    }, b.prototype.equals = function(a) {
        return 0 == this.compareTo(a)
    }, b.prototype.min = function(a) {
        return 0 > this.compareTo(a) ? this : a
    }, b.prototype.max = function(a) {
        return 0 < this.compareTo(a) ? this : a
    }, b.prototype.and = function(a) {
        var b = c();
        return this.bitwiseTo(a, l, b), b
    }, b.prototype.or = function(a) {
        var b = c();
        return this.bitwiseTo(a, m, b), b
    }, b.prototype.xor = function(a) {
        var b = c();
        return this.bitwiseTo(a, n, b), b
    }, b.prototype.andNot = function(a) {
        var b = c();
        return this.bitwiseTo(a, o, b), b
    }, b.prototype.not = function() {
        for (var a = c(), b = 0; b < this.t; ++b) a[b] = this.DM & ~this[b];
        return a.t = this.t, a.s = ~this.s, a
    }, b.prototype.shiftLeft = function(a) {
        var b = c();
        return 0 > a ? this.rShiftTo(-a, b) : this.lShiftTo(a, b), b
    }, b.prototype.shiftRight = function(a) {
        var b = c();
        return 0 > a ? this.lShiftTo(-a, b) : this.rShiftTo(a, b), b
    }, b.prototype.getLowestSetBit = function() {
        for (var a = 0; a < this.t; ++a)
            if (0 != this[a]) {
                var b = a * this.DB;
                if (a = this[a], 0 == a) a = -1;
                else {
                    var c = 0;
                    0 == (65535 & a) && (a >>= 16, c += 16), 0 == (255 & a) && (a >>= 8, c += 8), 0 == (15 & a) && (a >>= 4, c += 4), 0 == (3 & a) && (a >>= 2, c += 2), 0 == (1 & a) && ++c, a = c
                }
                return b + a
            }
        return 0 > this.s ? this.t * this.DB : -1
    }, b.prototype.bitCount = function() {
        for (var a = 0, b = this.s & this.DM, c = 0; c < this.t; ++c) {
            for (var d = this[c] ^ b, e = 0; 0 != d;) d &= d - 1, ++e;
            a += e
        }
        return a
    }, b.prototype.testBit = function(a) {
        var b = Math.floor(a / this.DB);
        return b >= this.t ? 0 != this.s : 0 != (this[b] & 1 << a % this.DB)
    }, b.prototype.setBit = function(a) {
        return this.changeBit(a, m)
    }, b.prototype.clearBit = function(a) {
        return this.changeBit(a, o)
    }, b.prototype.flipBit = function(a) {
        return this.changeBit(a, n)
    }, b.prototype.add = function(a) {
        var b = c();
        return this.addTo(a, b), b
    }, b.prototype.subtract = function(a) {
        var b = c();
        return this.subTo(a, b), b
    }, b.prototype.multiply = function(a) {
        var b = c();
        return this.multiplyTo(a, b), b
    }, b.prototype.divide = function(a) {
        var b = c();
        return this.divRemTo(a, b, null), b
    }, b.prototype.remainder = function(a) {
        var b = c();
        return this.divRemTo(a, null, b), b
    }, b.prototype.divideAndRemainder = function(a) {
        var b = c(),
            d = c();
        return this.divRemTo(a, b, d), [b, d]
    }, b.prototype.modPow = function(a, b) {
        var d, e, f = a.bitLength(),
            g = h(1);
        if (0 >= f) return g;
        d = 18 > f ? 1 : 48 > f ? 3 : 144 > f ? 4 : 768 > f ? 5 : 6, e = 8 > f ? new j(b) : b.isEven() ? new r(b) : new k(b);
        var l = [],
            m = 3,
            n = d - 1,
            o = (1 << d) - 1;
        if (l[1] = e.convert(this), d > 1)
            for (f = c(), e.sqrTo(l[1], f); o >= m;) l[m] = c(), e.mulTo(f, l[m - 2], l[m]), m += 2;
        for (var p, q = a.t - 1, s = !0, t = c(), f = i(a[q]) - 1; q >= 0;) {
            for (f >= n ? p = a[q] >> f - n & o : (p = (a[q] & (1 << f + 1) - 1) << n - f, q > 0 && (p |= a[q - 1] >> this.DB + f - n)), m = d; 0 == (1 & p);) p >>= 1, --m;
            if (0 > (f -= m) && (f += this.DB, --q), s) l[p].copyTo(g), s = !1;
            else {
                for (; m > 1;) e.sqrTo(g, t), e.sqrTo(t, g), m -= 2;
                m > 0 ? e.sqrTo(g, t) : (m = g, g = t, t = m), e.mulTo(t, l[p], g)
            }
            for (; q >= 0 && 0 == (a[q] & 1 << f);) e.sqrTo(g, t), m = g, g = t, t = m, 0 > --f && (f = this.DB - 1, --q)
        }
        return e.revert(g)
    }, b.prototype.modInverse = function(a) {
        var c = a.isEven();
        if (this.isEven() && c || 0 == a.signum()) return b.ZERO;
        for (var d = a.clone(), e = this.clone(), f = h(1), g = h(0), i = h(0), j = h(1); 0 != d.signum();) {
            for (; d.isEven();) d.rShiftTo(1, d), c ? (f.isEven() && g.isEven() || (f.addTo(this, f), g.subTo(a, g)), f.rShiftTo(1, f)) : g.isEven() || g.subTo(a, g), g.rShiftTo(1, g);
            for (; e.isEven();) e.rShiftTo(1, e), c ? (i.isEven() && j.isEven() || (i.addTo(this, i), j.subTo(a, j)), i.rShiftTo(1, i)) : j.isEven() || j.subTo(a, j), j.rShiftTo(1, j);
            0 <= d.compareTo(e) ? (d.subTo(e, d), c && f.subTo(i, f), g.subTo(j, g)) : (e.subTo(d, e), c && i.subTo(f, i), j.subTo(g, j))
        }
        return 0 != e.compareTo(b.ONE) ? b.ZERO : 0 <= j.compareTo(a) ? j.subtract(a) : 0 > j.signum() ? (j.addTo(a, j), 0 > j.signum() ? j.add(a) : j) : j
    }, b.prototype.pow = function(a) {
        return this.exp(a, new p)
    }, b.prototype.gcd = function(a) {
        var b = 0 > this.s ? this.negate() : this.clone();
        if (a = 0 > a.s ? a.negate() : a.clone(), 0 > b.compareTo(a)) {
            var c = b,
                b = a;
            a = c
        }
        var c = b.getLowestSetBit(),
            d = a.getLowestSetBit();
        if (0 > d) return b;
        for (d > c && (d = c), d > 0 && (b.rShiftTo(d, b), a.rShiftTo(d, a)); 0 < b.signum();) 0 < (c = b.getLowestSetBit()) && b.rShiftTo(c, b), 0 < (c = a.getLowestSetBit()) && a.rShiftTo(c, a), 0 <= b.compareTo(a) ? (b.subTo(a, b), b.rShiftTo(1, b)) : (a.subTo(b, a), a.rShiftTo(1, a));
        return d > 0 && a.lShiftTo(d, a), a
    }, b.prototype.isProbablePrime = function(a) {
        var b, c = this.abs();
        if (1 == c.t && c[0] <= D[D.length - 1]) {
            for (b = 0; b < D.length; ++b)
                if (c[0] == D[b]) return !0;
            return !1
        }
        if (c.isEven()) return !1;
        for (b = 1; b < D.length;) {
            for (var d = D[b], e = b + 1; e < D.length && E > d;) d *= D[e++];
            for (d = c.modInt(d); e > b;)
                if (0 == d % D[b++]) return !1
        }
        return c.millerRabin(a)
    }, b.prototype.square = function() {
        var a = c();
        return this.squareTo(a), a
    }, s.prototype.init = function(a) {
        var b, c, d;
        for (b = 0; 256 > b; ++b) this.S[b] = b;
        for (b = c = 0; 256 > b; ++b) c = c + this.S[b] + a[b % a.length] & 255, d = this.S[b], this.S[b] = this.S[c], this.S[c] = d;
        this.j = this.i = 0
    }, s.prototype.next = function() {
        var a;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, a = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = a, this.S[a + this.S[this.i] & 255]
    };
    var F, G, H;
    if (null == G) {
        if (G = [], H = 0, window.crypto && window.crypto.getRandomValues)
            for (A = new Uint32Array(256), window.crypto.getRandomValues(A), z = 0; z < A.length; ++z) G[H++] = 255 & A[z];
        var I = function(a) {
            this.count = this.count || 0, 256 <= this.count || H >= 256 ? window.removeEventListener ? window.removeEventListener("mousemove", I) : window.detachEvent && window.detachEvent("onmousemove", I) : (this.count += 1, a = a.x + a.y, G[H++] = 255 & a)
        };
        window.addEventListener ? window.addEventListener("mousemove", I) : window.attachEvent && window.attachEvent("onmousemove", I)
    }
    t.prototype.nextBytes = function(a) {
            var b;
            for (b = 0; b < a.length; ++b) {
                var c, d = a,
                    e = b;
                if (null == F) {
                    for (F = new s; 256 > H;) c = Math.floor(65536 * Math.random()), G[H++] = 255 & c;
                    for (F.init(G), H = 0; H < G.length; ++H) G[H] = 0;
                    H = 0
                }
                c = F.next(), d[e] = c
            }
        }, w.prototype.doPublic = function(a) {
            return a.modPowInt(this.e, this.n)
        }, w.prototype.setPublic = function(a, b) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = u(a, 16), this.e = parseInt(b, 16)) : console.error("Invalid RSA public key")
        }, w.prototype.encrypt = function(a) {
            var c;
            if (c = this.n.bitLength() + 7 >> 3, c < a.length + 11) console.error("Message too long for RSA"), c = null;
            else {
                for (var d = [], e = a.length - 1; e >= 0 && c > 0;) {
                    var f = a.charCodeAt(e--);
                    128 > f ? d[--c] = f : f > 127 && 2048 > f ? (d[--c] = 63 & f | 128, d[--c] = f >> 6 | 192) : (d[--c] = 63 & f | 128, d[--c] = f >> 6 & 63 | 128, d[--c] = f >> 12 | 224)
                }
                for (d[--c] = 0, a = new t, e = []; c > 2;) {
                    for (e[0] = 0; 0 == e[0];) a.nextBytes(e);
                    d[--c] = e[0]
                }
                d[--c] = 2, d[--c] = 0, c = new b(d)
            }
            return null == c ? null : (c = this.doPublic(c), null == c ? null : (c = c.toString(16), 0 == (1 & c.length) ? c : "0" + c))
        }, w.prototype.doPrivate = function(a) {
            if (null == this.p || null == this.q) return a.modPow(this.d, this.n);
            var b = a.mod(this.p).modPow(this.dmp1, this.p);
            for (a = a.mod(this.q).modPow(this.dmq1, this.q); 0 > b.compareTo(a);) b = b.add(this.p);
            return b.subtract(a).multiply(this.coeff).mod(this.p).multiply(this.q).add(a)
        }, w.prototype.setPrivate = function(a, b, c) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = u(a, 16), this.e = parseInt(b, 16), this.d = u(c, 16)) : console.error("Invalid RSA private key")
        }, w.prototype.setPrivateEx = function(a, b, c, d, e, f, g, h) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = u(a, 16), this.e = parseInt(b, 16), this.d = u(c, 16), this.p = u(d, 16), this.q = u(e, 16), this.dmp1 = u(f, 16), this.dmq1 = u(g, 16), this.coeff = u(h, 16)) : console.error("Invalid RSA private key")
        }, w.prototype.generate = function(a, c) {
            var d = new t,
                e = a >> 1;
            this.e = parseInt(c, 16);
            for (var f = new b(c, 16);;) {
                for (; this.p = new b(a - e, 1, d), 0 != this.p.subtract(b.ONE).gcd(f).compareTo(b.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new b(e, 1, d), 0 != this.q.subtract(b.ONE).gcd(f).compareTo(b.ONE) || !this.q.isProbablePrime(10););
                if (0 >= this.p.compareTo(this.q)) {
                    var g = this.p;
                    this.p = this.q, this.q = g
                }
                var g = this.p.subtract(b.ONE),
                    h = this.q.subtract(b.ONE),
                    i = g.multiply(h);
                if (0 == i.gcd(f).compareTo(b.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = f.modInverse(i), this.dmp1 = this.d.mod(g), this.dmq1 = this.d.mod(h), this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }, w.prototype.decrypt = function(a) {
            if (a = u(a, 16), a = this.doPrivate(a), null == a) return null;
            a: {
                var b = this.n.bitLength() + 7 >> 3;
                a = a.toByteArray();
                for (var c = 0; c < a.length && 0 == a[c];) ++c;
                if (a.length - c != b - 1 || 2 != a[c]) a = null;
                else {
                    for (++c; 0 != a[c];)
                        if (++c >= a.length) {
                            a = null;
                            break a
                        }
                    for (b = ""; ++c < a.length;) {
                        var d = 255 & a[c];
                        128 > d ? b += String.fromCharCode(d) : d > 191 && 224 > d ? (b += String.fromCharCode((31 & d) << 6 | 63 & a[c + 1]), ++c) : (b += String.fromCharCode((15 & d) << 12 | (63 & a[c + 1]) << 6 | 63 & a[c + 2]), c += 2)
                    }
                    a = b
                }
            }
            return a
        },
        function() {
            w.prototype.generateAsync = function(a, d, e) {
                var f = new t,
                    g = a >> 1;
                this.e = parseInt(d, 16);
                var h = new b(d, 16),
                    i = this,
                    j = function() {
                        var d = function() {
                                if (0 >= i.p.compareTo(i.q)) {
                                    var a = i.p;
                                    i.p = i.q, i.q = a
                                }
                                var a = i.p.subtract(b.ONE),
                                    c = i.q.subtract(b.ONE),
                                    d = a.multiply(c);
                                0 == d.gcd(h).compareTo(b.ONE) ? (i.n = i.p.multiply(i.q), i.d = h.modInverse(d), i.dmp1 = i.d.mod(a), i.dmq1 = i.d.mod(c), i.coeff = i.q.modInverse(i.p), setTimeout(function() {
                                    e()
                                }, 0)) : setTimeout(j, 0)
                            },
                            k = function() {
                                i.q = c(), i.q.fromNumberAsync(g, 1, f, function() {
                                    i.q.subtract(b.ONE).gcda(h, function(a) {
                                        0 == a.compareTo(b.ONE) && i.q.isProbablePrime(10) ? setTimeout(d, 0) : setTimeout(k, 0)
                                    })
                                })
                            },
                            l = function() {
                                i.p = c(), i.p.fromNumberAsync(a - g, 1, f, function() {
                                    i.p.subtract(b.ONE).gcda(h, function(a) {
                                        0 == a.compareTo(b.ONE) && i.p.isProbablePrime(10) ? setTimeout(k, 0) : setTimeout(l, 0)
                                    })
                                })
                            };
                        setTimeout(l, 0)
                    };
                setTimeout(j, 0)
            }, b.prototype.gcda = function(a, b) {
                var c = 0 > this.s ? this.negate() : this.clone(),
                    d = 0 > a.s ? a.negate() : a.clone();
                if (0 > c.compareTo(d)) var e = c,
                    c = d,
                    d = e;
                var f = c.getLowestSetBit(),
                    g = d.getLowestSetBit();
                if (0 > g) b(c);
                else {
                    g > f && (g = f), g > 0 && (c.rShiftTo(g, c), d.rShiftTo(g, d));
                    var h = function() {
                        0 < (f = c.getLowestSetBit()) && c.rShiftTo(f, c), 0 < (f = d.getLowestSetBit()) && d.rShiftTo(f, d), 0 <= c.compareTo(d) ? (c.subTo(d, c), c.rShiftTo(1, c)) : (d.subTo(c, d), d.rShiftTo(1, d)), 0 < c.signum() ? setTimeout(h, 0) : (g > 0 && d.lShiftTo(g, d), setTimeout(function() {
                            b(d)
                        }, 0))
                    };
                    setTimeout(h, 10)
                }
            }, b.prototype.fromNumberAsync = function(a, c, d, e) {
                if ("number" == typeof c)
                    if (2 > a) this.fromInt(1);
                    else {
                        this.fromNumber(a, d), this.testBit(a - 1) || this.bitwiseTo(b.ONE.shiftLeft(a - 1), m, this), this.isEven() && this.dAddOffset(1, 0);
                        var f = this,
                            g = function() {
                                f.dAddOffset(2, 0), f.bitLength() > a && f.subTo(b.ONE.shiftLeft(a - 1), f), f.isProbablePrime(c) ? setTimeout(function() {
                                    e()
                                }, 0) : setTimeout(g, 0)
                            };
                        setTimeout(g, 0)
                    } else {
                    d = [];
                    var h = 7 & a;
                    d.length = (a >> 3) + 1, c.nextBytes(d), d[0] = h > 0 ? d[0] & (1 << h) - 1 : 0, this.fromString(d, 256)
                }
            }
        }();
    var J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        K = "=",
        L = L || {};
    L.env = L.env || {};
    var M = L,
        N = Object.prototype,
        O = ["toString", "valueOf"];
    L.env.parseUA = function(a) {
            var b = function(a) {
                    var b = 0;
                    return parseFloat(a.replace(/\./g, function() {
                        return 1 == b++ ? "" : "."
                    }))
                },
                c = navigator,
                c = {
                    ie: 0,
                    opera: 0,
                    gecko: 0,
                    webkit: 0,
                    chrome: 0,
                    mobile: null,
                    air: 0,
                    ipad: 0,
                    iphone: 0,
                    ipod: 0,
                    ios: null,
                    android: 0,
                    webos: 0,
                    caja: c && c.cajaVersion,
                    secure: !1,
                    os: null
                };
            a = a || navigator && navigator.userAgent;
            var d = window && window.location,
                d = d && d.href;
            return c.secure = d && 0 === d.toLowerCase().indexOf("https"), a && (/windows|win32/i.test(a) ? c.os = "windows" : /macintosh/i.test(a) ? c.os = "macintosh" : /rhino/i.test(a) && (c.os = "rhino"), /KHTML/.test(a) && (c.webkit = 1), (d = a.match(/AppleWebKit\/([^\s]*)/)) && d[1] && (c.webkit = b(d[1]), / Mobile\//.test(a) ? (c.mobile = "Apple", (d = a.match(/OS ([^\s]*)/)) && d[1] && (d = b(d[1].replace("_", "."))), c.ios = d, c.ipad = c.ipod = c.iphone = 0, (d = a.match(/iPad|iPod|iPhone/)) && d[0] && (c[d[0].toLowerCase()] = c.ios)) : ((d = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (c.mobile = d[0]), /webOS/.test(a) && (c.mobile = "WebOS", (d = a.match(/webOS\/([^\s]*);/)) && d[1] && (c.webos = b(d[1]))), / Android/.test(a) && (c.mobile = "Android", (d = a.match(/Android ([^\s]*);/)) && d[1] && (c.android = b(d[1])))), (d = a.match(/Chrome\/([^\s]*)/)) && d[1] ? c.chrome = b(d[1]) : (d = a.match(/AdobeAIR\/([^\s]*)/)) && (c.air = d[0])), c.webkit || ((d = a.match(/Opera[\s\/]([^\s]*)/)) && d[1] ? (c.opera = b(d[1]), (d = a.match(/Version\/([^\s]*)/)) && d[1] && (c.opera = b(d[1])), (d = a.match(/Opera Mini[^;]*/)) && (c.mobile = d[0])) : (d = a.match(/MSIE\s([^;]*)/)) && d[1] ? c.ie = b(d[1]) : (d = a.match(/Gecko\/([^\s]*)/)) && (c.gecko = 1, (d = a.match(/rv:([^\s\)]*)/)) && d[1] && (c.gecko = b(d[1]))))), c
        }, L.env.ua = L.env.parseUA(), L.isFunction = function(a) {
            return "function" == typeof a || "[object Function]" === N.toString.apply(a)
        }, L._IEEnumFix = L.env.ua.ie ? function(a, b) {
            var c, d, e;
            for (c = 0; c < O.length; c += 1) d = O[c], e = b[d], M.isFunction(e) && e != N[d] && (a[d] = e)
        } : function() {}, L.extend = function(a, b, c) {
            if (!b || !a) throw Error("extend failed, please check that all dependencies are included.");
            var d, e = function() {};
            if (e.prototype = b.prototype, a.prototype = new e, a.prototype.constructor = a, a.superclass = b.prototype, b.prototype.constructor == N.constructor && (b.prototype.constructor = b), c) {
                for (d in c) M.hasOwnProperty(c, d) && (a.prototype[d] = c[d]);
                M._IEEnumFix(a.prototype, c)
            }
        }, "undefined" != typeof KJUR && KJUR || (KJUR = {}), "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), KJUR.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(a) {
                return a = a.toString(16), 1 == a.length % 2 && (a = "0" + a), a
            }, this.bigIntToMinTwosComplementsHex = function(a) {
                var c = a.toString(16);
                if ("-" != c.substr(0, 1)) 1 == c.length % 2 ? c = "0" + c : c.match(/^[0-7]/) || (c = "00" + c);
                else {
                    var d = c.substr(1).length;
                    1 == d % 2 ? d += 1 : c.match(/^[0-7]/) || (d += 2);
                    for (var c = "", e = 0; d > e; e++) c += "f";
                    c = new b(c, 16).xor(a).add(b.ONE).toString(16).replace(/^-/, "")
                }
                return c
            }, this.getPEMStringFromHex = function(a, b) {
                var c = CryptoJS.enc.Hex.parse(a),
                    c = CryptoJS.enc.Base64.stringify(c).replace(/(.{64})/g, "$1\r\n"),
                    c = c.replace(/\r\n$/, "");
                return "-----BEGIN " + b + "-----\r\n" + c + "\r\n-----END " + b + "-----\r\n"
            }
        }, KJUR.asn1.ASN1Object = function() {
            this.getLengthHexFromValue = function() {
                if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
                if (1 == this.hV.length % 2) throw "value hex must be even length: n=0,v=" + this.hV;
                var a = this.hV.length / 2,
                    b = a.toString(16);
                if (1 == b.length % 2 && (b = "0" + b), 128 > a) return b;
                var c = b.length / 2;
                if (c > 15) throw "ASN.1 length too long to represent by 8x: n = " + a.toString(16);
                return (128 + c).toString(16) + b
            }, this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
            }, this.getValueHex = function() {
                return this.getEncodedHex(), this.hV
            }, this.getFreshValueHex = function() {
                return ""
            }
        }, KJUR.asn1.DERAbstractString = function(a) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                return this.s
            }, this.setString = function(a) {
                this.hTLV = null, this.isModified = !0, this.s = a, this.hV = stohex(this.s)
            }, this.setStringHex = function(a) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = a
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof a && ("undefined" != typeof a.str ? this.setString(a.str) : "undefined" != typeof a.hex && this.setStringHex(a.hex))
        }, L.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractTime = function() {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(a) {
                return utc = a.getTime() + 6e4 * a.getTimezoneOffset(), new Date(utc)
            }, this.formatDate = function(a, b) {
                var c = this.zeroPadding,
                    d = this.localDateToUTC(a),
                    e = String(d.getFullYear());
                "utc" == b && (e = e.substr(2, 2));
                var f = c(String(d.getMonth() + 1), 2),
                    g = c(String(d.getDate()), 2),
                    h = c(String(d.getHours()), 2),
                    i = c(String(d.getMinutes()), 2),
                    c = c(String(d.getSeconds()), 2);
                return e + f + g + h + i + c + "Z"
            }, this.zeroPadding = function(a, b) {
                return a.length >= b ? a : Array(b - a.length + 1).join("0") + a
            }, this.getString = function() {
                return this.s
            }, this.setString = function(a) {
                this.hTLV = null, this.isModified = !0, this.s = a, this.hV = stohex(this.s)
            }, this.setByDateValue = function(a, b, c, d, e, f) {
                a = new Date(Date.UTC(a, b - 1, c, d, e, f, 0)), this.setByDate(a)
            }, this.getFreshValueHex = function() {
                return this.hV
            }
        }, L.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractStructured = function(a) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(a) {
                this.hTLV = null, this.isModified = !0, this.asn1Array = a
            }, this.appendASN1Object = function(a) {
                this.hTLV = null, this.isModified = !0, this.asn1Array.push(a)
            }, this.asn1Array = [], "undefined" != typeof a && "undefined" != typeof a.array && (this.asn1Array = a.array)
        }, L.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object), KJUR.asn1.DERBoolean = function() {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
        }, L.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object), KJUR.asn1.DERInteger = function(a) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(a) {
                this.hTLV = null, this.isModified = !0, this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
            }, this.setByInteger = function(a) {
                a = new b(String(a), 10), this.setByBigInteger(a)
            }, this.setValueHex = function(a) {
                this.hV = a
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof a && ("undefined" != typeof a.bigint ? this.setByBigInteger(a.bigint) : "undefined" != typeof a["int"] ? this.setByInteger(a["int"]) : "undefined" != typeof a.hex && this.setValueHex(a.hex))
        }, L.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object), KJUR.asn1.DERBitString = function(a) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(a) {
                this.hTLV = null, this.isModified = !0, this.hV = a
            }, this.setUnusedBitsAndHexValue = function(a, b) {
                if (0 > a || a > 7) throw "unused bits shall be from 0 to 7: u = " + a;
                this.hTLV = null, this.isModified = !0, this.hV = "0" + a + b
            }, this.setByBinaryString = function(a) {
                a = a.replace(/0+$/, "");
                var b = 8 - a.length % 8;
                8 == b && (b = 0);
                for (var c = 0; b >= c; c++) a += "0";
                for (var d = "", c = 0; c < a.length - 1; c += 8) {
                    var e = a.substr(c, 8),
                        e = parseInt(e, 2).toString(16);
                    1 == e.length && (e = "0" + e), d += e
                }
                this.hTLV = null, this.isModified = !0, this.hV = "0" + b + d
            }, this.setByBooleanArray = function(a) {
                for (var b = "", c = 0; c < a.length; c++) b = 1 == a[c] ? b + "1" : b + "0";
                this.setByBinaryString(b)
            }, this.newFalseArray = function(a) {
                for (var b = Array(a), c = 0; a > c; c++) b[c] = !1;
                return b
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof a && ("undefined" != typeof a.hex ? this.setHexValueIncludingUnusedBits(a.hex) : "undefined" != typeof a.bin ? this.setByBinaryString(a.bin) : "undefined" != typeof a.array && this.setByBooleanArray(a.array))
        }, L.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object), KJUR.asn1.DEROctetString = function(a) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, a), this.hT = "04"
        }, L.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNull = function() {
            KJUR.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
        }, L.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERObjectIdentifier = function(a) {
            var c = function(a) {
                return a = a.toString(16), 1 == a.length && (a = "0" + a), a
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(a) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = a
            }, this.setValueOidString = function(a) {
                if (!a.match(/^[0-9.]+$/)) throw "malformed oid string: " + a;
                var d = "";
                a = a.split(".");
                var e = 40 * parseInt(a[0]) + parseInt(a[1]),
                    d = d + c(e);
                for (a.splice(0, 2), e = 0; e < a.length; e++) {
                    var f = "",
                        g = new b(a[e], 10).toString(2),
                        h = 7 - g.length % 7;
                    7 == h && (h = 0);
                    for (var i = "", j = 0; h > j; j++) i += "0";
                    for (g = i + g, j = 0; j < g.length - 1; j += 7) h = g.substr(j, 7), j != g.length - 7 && (h = "1" + h), f += c(parseInt(h, 2));
                    d += f
                }
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = d
            }, this.setValueName = function(a) {
                if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[a]) throw "DERObjectIdentifier oidName undefined: " + a;
                this.setValueOidString(KJUR.asn1.x509.OID.name2oidList[a])
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof a && ("undefined" != typeof a.oid ? this.setValueOidString(a.oid) : "undefined" != typeof a.hex ? this.setValueHex(a.hex) : "undefined" != typeof a.name && this.setValueName(a.name))
        }, L.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object), KJUR.asn1.DERUTF8String = function(a) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, a), this.hT = "0c"
        }, L.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNumericString = function(a) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, a), this.hT = "12"
        }, L.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERPrintableString = function(a) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, a), this.hT = "13"
        }, L.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERTeletexString = function(a) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, a), this.hT = "14"
        }, L.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERIA5String = function(a) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, a), this.hT = "16"
        }, L.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERUTCTime = function(a) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, a), this.hT = "17", this.setByDate = function(a) {
                this.hTLV = null, this.isModified = !0, this.date = a, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
            }, "undefined" != typeof a && ("undefined" != typeof a.str ? this.setString(a.str) : "undefined" != typeof a.hex ? this.setStringHex(a.hex) : "undefined" != typeof a.date && this.setByDate(a.date))
        }, L.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERGeneralizedTime = function(a) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, a), this.hT = "18", this.setByDate = function(a) {
                this.hTLV = null, this.isModified = !0, this.date = a, this.s = this.formatDate(this.date, "gen"), this.hV = stohex(this.s)
            }, "undefined" != typeof a && ("undefined" != typeof a.str ? this.setString(a.str) : "undefined" != typeof a.hex ? this.setStringHex(a.hex) : "undefined" != typeof a.date && this.setByDate(a.date))
        }, L.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERSequence = function(a) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, a), this.hT = "30", this.getFreshValueHex = function() {
                for (var a = "", b = 0; b < this.asn1Array.length; b++) a += this.asn1Array[b].getEncodedHex();
                return this.hV = a
            }
        }, L.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERSet = function(a) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, a), this.hT = "31", this.getFreshValueHex = function() {
                for (var a = [], b = 0; b < this.asn1Array.length; b++) a.push(this.asn1Array[b].getEncodedHex());
                return a.sort(), this.hV = a.join("")
            }
        }, L.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERTaggedObject = function(a) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(a, b, c) {
                this.hT = b, this.isExplicit = a, this.asn1Object = c, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = c.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, b), this.isModified = !1)
            }, this.getFreshValueHex = function() {
                return this.hV
            }, "undefined" != typeof a && ("undefined" != typeof a.tag && (this.hT = a.tag), "undefined" != typeof a.explicit && (this.isExplicit = a.explicit), "undefined" != typeof a.obj && (this.asn1Object = a.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }, L.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
        function(a) {
            var b, c = {};
            c.decode = function(c) {
                var d;
                if (b === a) {
                    var e = "0123456789ABCDEF";
                    for (b = [], d = 0; 16 > d; ++d) b[e.charAt(d)] = d;
                    for (e = e.toLowerCase(), d = 10; 16 > d; ++d) b[e.charAt(d)] = d;
                    for (d = 0; 8 > d; ++d) b[" \f\n\r	Â \u2028\u2029".charAt(d)] = -1
                }
                var e = [],
                    f = 0,
                    g = 0;
                for (d = 0; d < c.length; ++d) {
                    var h = c.charAt(d);
                    if ("=" == h) break;
                    if (h = b[h], -1 != h) {
                        if (h === a) throw "Illegal character at offset " + d;
                        f |= h, 2 <= ++g ? (e[e.length] = f, g = f = 0) : f <<= 4
                    }
                }
                if (g) throw "Hex encoding incomplete: 4 bits missing";
                return e
            }, window.Hex = c
        }(),
        function(a) {
            var b, c = {};
            c.decode = function(c) {
                var d;
                if (b === a) {
                    for (b = [], d = 0; 64 > d; ++d) b["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d)] = d;
                    for (d = 0; 9 > d; ++d) b["= \f\n\r	Â \u2028\u2029".charAt(d)] = -1
                }
                var e = [],
                    f = 0,
                    g = 0;
                for (d = 0; d < c.length; ++d) {
                    var h = c.charAt(d);
                    if ("=" == h) break;
                    if (h = b[h], -1 != h) {
                        if (h === a) throw "Illegal character at offset " + d;
                        f |= h, 4 <= ++g ? (e[e.length] = f >> 16, e[e.length] = f >> 8 & 255, e[e.length] = 255 & f, g = f = 0) : f <<= 6
                    }
                }
                switch (g) {
                    case 1:
                        throw "Base64 encoding incomplete: at least 2 bits missing";
                    case 2:
                        e[e.length] = f >> 10;
                        break;
                    case 3:
                        e[e.length] = f >> 16, e[e.length] = f >> 8 & 255
                }
                return e
            }, c.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/, c.unarmor = function(a) {
                var b = c.re.exec(a);
                if (b)
                    if (b[1]) a = b[1];
                    else {
                        if (!b[2]) throw "RegExp out of sync";
                        a = b[2]
                    }
                return c.decode(a)
            }, window.Base64 = c
        }(),
        function(a) {
            function b(a, c) {
                a instanceof b ? (this.enc = a.enc, this.pos = a.pos) : (this.enc = a, this.pos = c)
            }

            function c(a, b, c, d, e) {
                this.stream = a, this.header = b, this.length = c, this.tag = d, this.sub = e
            }
            var d = {
                tag: function(a, b) {
                    var c = document.createElement(a);
                    return c.className = b, c
                },
                text: function(a) {
                    return document.createTextNode(a)
                }
            };
            b.prototype.get = function(b) {
                if (b === a && (b = this.pos++), b >= this.enc.length) throw "Requesting byte offset " + b + " on a stream of length " + this.enc.length;
                return this.enc[b]
            }, b.prototype.hexDigits = "0123456789ABCDEF", b.prototype.hexByte = function(a) {
                return this.hexDigits.charAt(a >> 4 & 15) + this.hexDigits.charAt(15 & a)
            }, b.prototype.hexDump = function(a, b, c) {
                for (var d = ""; b > a; ++a)
                    if (d += this.hexByte(this.get(a)), !0 !== c) switch (15 & a) {
                        case 7:
                            d += "  ";
                            break;
                        case 15:
                            d += "\n";
                            break;
                        default:
                            d += " "
                    }
                    return d
            }, b.prototype.parseStringISO = function(a, b) {
                for (var c = "", d = a; b > d; ++d) c += String.fromCharCode(this.get(d));
                return c
            }, b.prototype.parseStringUTF = function(a, b) {
                for (var c = "", d = a; b > d;) var e = this.get(d++),
                    c = 128 > e ? c + String.fromCharCode(e) : e > 191 && 224 > e ? c + String.fromCharCode((31 & e) << 6 | 63 & this.get(d++)) : c + String.fromCharCode((15 & e) << 12 | (63 & this.get(d++)) << 6 | 63 & this.get(d++));
                return c
            }, b.prototype.parseStringBMP = function(a, b) {
                for (var c = "", d = a; b > d; d += 2) var e = this.get(d),
                    f = this.get(d + 1),
                    c = c + String.fromCharCode((e << 8) + f);
                return c
            }, b.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, b.prototype.parseTime = function(a, b) {
                var c = this.parseStringISO(a, b),
                    d = this.reTime.exec(c);
                return d ? (c = d[1] + "-" + d[2] + "-" + d[3] + " " + d[4], d[5] && (c += ":" + d[5], d[6] && (c += ":" + d[6], d[7] && (c += "." + d[7]))), d[8] && (c += " UTC", "Z" != d[8] && (c += d[8], d[9] && (c += ":" + d[9]))), c) : "Unrecognized time: " + c
            }, b.prototype.parseInteger = function(a, b) {
                var c = b - a;
                if (c > 4) {
                    var c = c << 3,
                        d = this.get(a);
                    if (0 === d) c -= 8;
                    else
                        for (; 128 > d;) d <<= 1, --c;
                    return "(" + c + " bit)"
                }
                for (c = 0, d = a; b > d; ++d) c = c << 8 | this.get(d);
                return c
            }, b.prototype.parseBitString = function(a, b) {
                var c = this.get(a),
                    d = (b - a - 1 << 3) - c,
                    e = "(" + d + " bit)";
                if (20 >= d)
                    for (var f = c, e = e + " ", c = b - 1; c > a; --c) {
                        for (d = this.get(c); 8 > f; ++f) e += d >> f & 1 ? "1" : "0";
                        f = 0
                    }
                return e
            }, b.prototype.parseOctetString = function(a, b) {
                var c = b - a,
                    d = "(" + c + " byte) ";
                c > 100 && (b = a + 100);
                for (var e = a; b > e; ++e) d += this.hexByte(this.get(e));
                return c > 100 && (d += "â€¦"), d
            }, b.prototype.parseOID = function(a, b) {
                for (var c = "", d = 0, e = 0, f = a; b > f; ++f) {
                    var g = this.get(f),
                        d = d << 7 | 127 & g,
                        e = e + 7;
                    128 & g || ("" === c ? (c = 80 > d ? 40 > d ? 0 : 1 : 2, c = c + "." + (d - 40 * c)) : c += "." + (e >= 31 ? "bigint" : d), d = e = 0)
                }
                return c
            }, c.prototype.typeName = function() {
                if (this.tag === a) return "unknown";
                var b = 31 & this.tag;
                switch (this.tag >> 6) {
                    case 0:
                        switch (b) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString";
                            default:
                                return "Universal_" + b.toString(16)
                        }
                    case 1:
                        return "Application_" + b.toString(16);
                    case 2:
                        return "[" + b + "]";
                    case 3:
                        return "Private_" + b.toString(16)
                }
            }, c.prototype.reSeemsASCII = /^[ -~]+$/, c.prototype.content = function() {
                if (this.tag === a) return null;
                var b = this.tag >> 6,
                    c = 31 & this.tag,
                    d = this.posContent(),
                    e = Math.abs(this.length);
                if (0 !== b) return null !== this.sub ? "(" + this.sub.length + " elem)" : (b = this.stream.parseStringISO(d, d + Math.min(e, 100)), this.reSeemsASCII.test(b) ? b.substring(0, 200) + (200 < b.length ? "â€¦" : "") : this.stream.parseOctetString(d, d + e));
                switch (c) {
                    case 1:
                        return 0 === this.stream.get(d) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(d, d + e);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(d, d + e);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(d, d + e);
                    case 6:
                        return this.stream.parseOID(d, d + e);
                    case 16:
                    case 17:
                        return "(" + this.sub.length + " elem)";
                    case 12:
                        return this.stream.parseStringUTF(d, d + e);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return this.stream.parseStringISO(d, d + e);
                    case 30:
                        return this.stream.parseStringBMP(d, d + e);
                    case 23:
                    case 24:
                        return this.stream.parseTime(d, d + e)
                }
                return null
            }, c.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }, c.prototype.print = function(b) {
                if (b === a && (b = ""), document.writeln(b + this), null !== this.sub) {
                    b += "  ";
                    for (var c = 0, d = this.sub.length; d > c; ++c) this.sub[c].print(b)
                }
            }, c.prototype.toPrettyString = function(b) {
                b === a && (b = "");
                var c = b + this.typeName() + " @" + this.stream.pos;
                if (0 <= this.length && (c += "+"), c += this.length, 32 & this.tag ? c += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (c += " (encapsulates)"), c += "\n", null !== this.sub) {
                    b += "  ";
                    for (var d = 0, e = this.sub.length; e > d; ++d) c += this.sub[d].toPrettyString(b)
                }
                return c
            }, c.prototype.toDOM = function() {
                var a = d.tag("div", "node");
                a.asn1 = this;
                var b = d.tag("div", "head"),
                    c = this.typeName().replace(/_/g, " ");
                b.innerHTML = c;
                var e = this.content();
                null !== e && (e = String(e).replace(/</g, "&lt;"), c = d.tag("span", "preview"), c.appendChild(d.text(e)), b.appendChild(c)), a.appendChild(b), this.node = a, this.head = b;
                var f = d.tag("div", "value"),
                    c = "Offset: " + this.stream.pos + "<br/>",
                    c = c + ("Length: " + this.header + "+"),
                    c = 0 <= this.length ? c + this.length : c + (-this.length + " (undefined)");
                if (32 & this.tag ? c += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (c += "<br/>(encapsulates)"), null !== e && (c += "<br/>Value:<br/><b>" + e + "</b>", "object" == typeof oids && 6 == this.tag && (e = oids[e])) && (e.d && (c += "<br/>" + e.d), e.c && (c += "<br/>" + e.c), e.w && (c += "<br/>(warning!)")), f.innerHTML = c, a.appendChild(f), c = d.tag("div", "sub"), null !== this.sub)
                    for (e = 0, f = this.sub.length; f > e; ++e) c.appendChild(this.sub[e].toDOM());
                return a.appendChild(c), b.onclick = function() {
                    a.className = "node collapsed" == a.className ? "node" : "node collapsed"
                }, a
            }, c.prototype.posStart = function() {
                return this.stream.pos
            }, c.prototype.posContent = function() {
                return this.stream.pos + this.header
            }, c.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }, c.prototype.fakeHover = function(a) {
                this.node.className += " hover", a && (this.head.className += " hover")
            }, c.prototype.fakeOut = function(a) {
                var b = / ?hover/;
                this.node.className = this.node.className.replace(b, ""), a && (this.head.className = this.head.className.replace(b, ""))
            }, c.prototype.toHexDOM_sub = function(a, b, c, e, f) {
                e >= f || (b = d.tag("span", b), b.appendChild(d.text(c.hexDump(e, f))), a.appendChild(b))
            }, c.prototype.toHexDOM = function(b) {
                var c = d.tag("span", "hex");
                if (b === a && (b = c), this.head.hexNode = c, this.head.onmouseover = function() {
                        this.hexNode.className = "hexCurrent"
                    }, this.head.onmouseout = function() {
                        this.hexNode.className = "hex"
                    }, c.asn1 = this, c.onmouseover = function() {
                        var a = !b.selected;
                        a && (b.selected = this.asn1, this.className = "hexCurrent"), this.asn1.fakeHover(a)
                    }, c.onmouseout = function() {
                        var a = b.selected == this.asn1;
                        this.asn1.fakeOut(a), a && (b.selected = null, this.className = "hex")
                    }, this.toHexDOM_sub(c, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(c, 0 <= this.length ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) c.appendChild(d.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                else if (0 < this.sub.length) {
                    var e = this.sub[0],
                        f = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(c, "intro", this.stream, this.posContent(), e.posStart());
                    for (var e = 0, g = this.sub.length; g > e; ++e) c.appendChild(this.sub[e].toHexDOM(b));
                    this.toHexDOM_sub(c, "outro", this.stream, f.posEnd(), this.posEnd())
                }
                return c
            }, c.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }, c.decodeLength = function(a) {
                var b = a.get(),
                    c = 127 & b;
                if (c == b) return c;
                if (c > 3) throw "Length over 24 bits not supported at position " + (a.pos - 1);
                if (0 === c) return -1;
                for (var d = b = 0; c > d; ++d) b = b << 8 | a.get();
                return b
            }, c.hasContent = function(a, d, e) {
                if (32 & a) return !0;
                if (3 > a || a > 4) return !1;
                var f = new b(e);
                if (3 == a && f.get(), f.get() >> 6 & 1) return !1;
                try {
                    var g = c.decodeLength(f);
                    return f.pos - e.pos + g == d
                } catch (h) {
                    return !1
                }
            }, c.decode = function(a) {
                a instanceof b || (a = new b(a, 0));
                var d = new b(a),
                    e = a.get(),
                    f = c.decodeLength(a),
                    g = a.pos - d.pos,
                    h = null;
                if (c.hasContent(e, f, a)) {
                    var i = a.pos;
                    if (3 == e && a.get(), h = [], f >= 0) {
                        for (var j = i + f; a.pos < j;) h[h.length] = c.decode(a);
                        if (a.pos != j) throw "Content size is not correct for container starting at offset " + i
                    } else try {
                        for (; j = c.decode(a), 0 !== j.tag;) h[h.length] = j;
                        f = i - a.pos
                    } catch (k) {
                        throw "Exception while decoding undefined length content: " + k
                    }
                } else a.pos += f;
                return new c(d, g, f, e, h)
            }, c.test = function() {
                for (var a = [{
                        value: [39],
                        expected: 39
                    }, {
                        value: [129, 201],
                        expected: 201
                    }, {
                        value: [131, 254, 220, 186],
                        expected: 16702650
                    }], d = 0, e = a.length; e > d; ++d) {
                    var f = new b(a[d].value, 0),
                        f = c.decodeLength(f);
                    f != a[d].expected && document.write("In test[" + d + "] expected " + a[d].expected + " got " + f + "\n")
                }
            }, window.ASN1 = c
        }(), ASN1.prototype.getHexStringValue = function() {
            return this.toHexString().substr(2 * this.header, 2 * this.length)
        }, w.prototype.parseKey = function(a) {
            try {
                var b = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(a) ? Hex.decode(a) : Base64.unarmor(a),
                    c = ASN1.decode(b);
                if (9 === c.sub.length) {
                    var d = c.sub[1].getHexStringValue();
                    this.n = u(d, 16);
                    var e = c.sub[2].getHexStringValue();
                    this.e = parseInt(e, 16);
                    var f = c.sub[3].getHexStringValue();
                    this.d = u(f, 16);
                    var g = c.sub[4].getHexStringValue();
                    this.p = u(g, 16);
                    var h = c.sub[5].getHexStringValue();
                    this.q = u(h, 16);
                    var i = c.sub[6].getHexStringValue();
                    this.dmp1 = u(i, 16);
                    var j = c.sub[7].getHexStringValue();
                    this.dmq1 = u(j, 16);
                    var k = c.sub[8].getHexStringValue();
                    this.coeff = u(k, 16)
                } else {
                    if (2 !== c.sub.length) return !1;
                    var l = c.sub[1].sub[0],
                        d = l.sub[0].getHexStringValue();
                    this.n = u(d, 16), e = l.sub[1].getHexStringValue(), this.e = parseInt(e, 16)
                }
                return !0
            } catch (m) {
                return !1
            }
        }, w.prototype.getPrivateBaseKey = function() {
            var a = {
                array: [new KJUR.asn1.DERInteger({
                    "int": 0
                }), new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    "int": this.e
                }), new KJUR.asn1.DERInteger({
                    bigint: this.d
                }), new KJUR.asn1.DERInteger({
                    bigint: this.p
                }), new KJUR.asn1.DERInteger({
                    bigint: this.q
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmp1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmq1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.coeff
                })]
            };
            return new KJUR.asn1.DERSequence(a).getEncodedHex()
        }, w.prototype.getPrivateBaseKeyB64 = function() {
            return x(this.getPrivateBaseKey())
        }, w.prototype.getPublicBaseKey = function() {
            var a = {
                    array: [new KJUR.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new KJUR.asn1.DERNull]
                },
                b = new KJUR.asn1.DERSequence(a),
                a = {
                    array: [new KJUR.asn1.DERInteger({
                        bigint: this.n
                    }), new KJUR.asn1.DERInteger({
                        "int": this.e
                    })]
                },
                a = {
                    hex: "00" + new KJUR.asn1.DERSequence(a).getEncodedHex()
                },
                a = new KJUR.asn1.DERBitString(a),
                a = {
                    array: [b, a]
                };
            return new KJUR.asn1.DERSequence(a).getEncodedHex()
        }, w.prototype.getPublicBaseKeyB64 = function() {
            return x(this.getPublicBaseKey())
        }, w.prototype.wordwrap = function(a, b) {
            return b = b || 64, a ? a.match(RegExp("(.{1," + b + "})( +|$\n?)|(.{1," + b + "})", "g")).join("\n") : a
        }, w.prototype.getPrivateKey = function() {
            var a;
            return a = "-----BEGIN RSA PRIVATE KEY-----\n" + (this.wordwrap(this.getPrivateBaseKeyB64()) + "\n"), a + "-----END RSA PRIVATE KEY-----"
        }, w.prototype.getPublicKey = function() {
            var a;
            return a = "-----BEGIN PUBLIC KEY-----\n" + (this.wordwrap(this.getPublicBaseKeyB64()) + "\n"), a + "-----END PUBLIC KEY-----"
        }, w.prototype.hasPublicKeyProperty = function(a) {
            return a = a || {}, a.hasOwnProperty("n") && a.hasOwnProperty("e")
        }, w.prototype.hasPrivateKeyProperty = function(a) {
            return a = a || {}, a.hasOwnProperty("n") && a.hasOwnProperty("e") && a.hasOwnProperty("d") && a.hasOwnProperty("p") && a.hasOwnProperty("q") && a.hasOwnProperty("dmp1") && a.hasOwnProperty("dmq1") && a.hasOwnProperty("coeff")
        }, w.prototype.parsePropertiesFrom = function(a) {
            this.n = a.n, this.e = a.e, a.hasOwnProperty("d") && (this.d = a.d, this.p = a.p, this.q = a.q, this.dmp1 = a.dmp1, this.dmq1 = a.dmq1, this.coeff = a.coeff)
        };
    var P = function(a) {
        w.call(this), a && ("string" == typeof a ? this.parseKey(a) : (this.hasPrivateKeyProperty(a) || this.hasPublicKeyProperty(a)) && this.parsePropertiesFrom(a))
    };
    P.prototype = new w, P.prototype.constructor = P, L = function(a) {
        a = a || {}, this.default_key_size = parseInt(a.default_key_size) || 1024, this.default_public_exponent = a.default_public_exponent || "010001", this.log = a.log || !1, this.key = null
    }, L.prototype.setKey = function(a) {
        this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new P(a)
    }, L.prototype.setPrivateKey = function(a) {
        this.setKey(a)
    }, L.prototype.setPublicKey = function(a) {
        this.setKey(a)
    }, L.prototype.decrypt = function(a) {
        try {
            return this.getKey().decrypt(y(a))
        } catch (b) {
            return !1
        }
    }, L.prototype.encrypt = function(a) {
        try {
            return x(this.getKey().encrypt(a))
        } catch (b) {
            return !1
        }
    }, L.prototype.getKey = function(a) {
        if (!this.key) {
            if (this.key = new P, a && "[object Function]" === {}.toString.call(a)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, a);
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    }, L.prototype.getPrivateKey = function() {
        return this.getKey().getPrivateKey()
    }, L.prototype.getPrivateKeyB64 = function() {
        return this.getKey().getPrivateBaseKeyB64()
    }, L.prototype.getPublicKey = function() {
        return this.getKey().getPublicKey()
    }, L.prototype.getPublicKeyB64 = function() {
        return this.getKey().getPublicBaseKeyB64()
    }, a.JSEncrypt = L
}(JSEncryptExports);
var JSEncrypt = JSEncryptExports.JSEncrypt;
! function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        calculateAccount: function(a) {
            for (var b = a.split(""), c = 0, d = 0; d < b.length; d++) seq = 9 - d, c += parseInt(b[d]) * seq;
            return this.module(c)
        },
        calculateAgency: function(a) {
            for (var b = a.split(""), c = 0, d = 0; d < b.length; d++) seq = 5 - d, c += parseInt(b[d]) * seq;
            return this.module(c)
        },
        module: function(a) {
            var b = 11 - a % 11;
            return 10 === b ? "X" : 11 === b ? "0" : b.toString()
        }
    }, c.BancoDoBrasilCheckNumberCalculator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.agencyNumberIsValid(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return a.length == this.agencyCheckNumberLength() && c.CommonBankAccountValidator.agencyCheckNumberIsValid(a)
        },
        accountNumberIsValid: function(a) {
            return a.length == this.accountNumberLength() && c.CommonBankAccountValidator.accountNumberIsValid(a)
        },
        accountCheckNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.accountCheckNumberIsValid(a)
        },
        agencyCheckNumberMatch: function(a) {
            var b = c.BancoDoBrasilCheckNumberCalculator.calculateAgency(a.agencyNumber);
            return b === a.agencyCheckNumber.toUpperCase()
        },
        accountCheckNumberMatch: function(a) {
            var b = c.BancoDoBrasilCheckNumberCalculator.calculateAccount(a.accountNumber);
            return b === a.accountCheckNumber.toUpperCase()
        },
        agencyNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyNumberMsgError()
        },
        agencyCheckNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength())
        },
        accountNumberMsgError: function() {
            return c.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength())
        },
        agencyCheckNumberLength: function() {
            return 1
        },
        accountNumberLength: function() {
            return 8
        }
    }, c.BancoDoBrasilValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        validator: function(a) {
            var b = {
                "001": c.BancoDoBrasilValidator,
                237: c.BradescoValidator,
                341: c.ItauValidator,
                "033": c.SantanderValidator,
                "041": c.BanrisulValidator,
                745: c.CitibankValidator,
                399: c.HSBCValidator
            };
            return b[a] ? b[a] : c.GenericBankAccountValidator
        },
        validate: function(a) {
            var b = [],
                d = this.validator(a.bankNumber);
            c.GenericBankAccountValidator.bankNumberIsValid(a.bankNumber) || b.push({
                description: "Banco invÃ¡lido",
                code: "INVALID_BANK_NUMBER"
            }), d.agencyNumberIsValid(a.agencyNumber) || b.push({
                description: d.agencyNumberMsgError(),
                code: "INVALID_AGENCY_NUMBER"
            }), d.agencyCheckNumberIsValid(a.agencyCheckNumber) || b.push({
                description: d.agencyCheckNumberMsgError(),
                code: "INVALID_AGENCY_CHECK_NUMBER"
            }), d.accountNumberIsValid(a.accountNumber) || b.push({
                description: d.accountNumberMsgError(),
                code: "INVALID_ACCOUNT_NUMBER"
            }), d.accountCheckNumberIsValid(a.accountCheckNumber) || b.push({
                description: "DÃ­gito da conta corrente invÃ¡lido",
                code: "INVALID_ACCOUNT_CHECK_NUMBER"
            }), d.agencyNumberIsValid(a.agencyNumber) && d.agencyCheckNumberIsValid(a.agencyCheckNumber) && (d.agencyCheckNumberMatch(a) || b.push({
                description: "DÃ­gito da agÃªncia nÃ£o corresponde ao nÃºmero da agÃªncia preenchido",
                code: "AGENCY_CHECK_NUMBER_DONT_MATCH"
            })), d.accountNumberIsValid(a.accountNumber) && d.accountCheckNumberIsValid(a.accountCheckNumber) && (d.accountCheckNumberMatch(a) || b.push({
                description: "DÃ­gito da conta nÃ£o corresponde ao nÃºmero da conta/agÃªncia preenchido",
                code: "ACCOUNT_CHECK_NUMBER_DONT_MATCH"
            })), 0 === b.length ? a.valid() : a.invalid({
                errors: b
            })
        }
    }, c.BankAccount = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        calculateAccount: function(a) {
            for (var b = a.split(""), c = 0, d = 0; d < b.length; d++) {
                var e = parseInt(b[d]);
                c += this.multiplyAccordingWeight(e, d)
            }
            return this.moduleAccount(c)
        },
        multiplyAccordingWeight: function(a, b) {
            var c = [3, 2, 4, 7, 6, 5, 4, 3, 2];
            return a * c[b]
        },
        moduleAccount: function(a) {
            var b = a % 11;
            return 0 === b ? "0" : 1 === b ? "6" : (11 - b).toString()
        },
        calculateAgency: function(a) {
            var b = a.split(""),
                c = this.firstAgencyDigit(b),
                d = this.secondAgencyDigit(b, c);
            return c + d
        },
        firstAgencyDigit: function(a) {
            for (var b = 0, c = 0, d = 0; d < a.length; d++) {
                var e = parseInt(a[d]);
                c = this.multiplyAccordingParity(e, d), c = this.adjustAccordingLength(c), b += c
            }
            return this.moduleAgencyFirstDigit(b)
        },
        secondAgencyDigit: function(a, b) {
            a.push(b);
            for (var c = 0, d = 0; d < a.length; d++) seq = 6 - d, c += parseInt(a[d]) * seq;
            var e = this.moduleAgencySecondDigit(c);
            return "1" === e && (9 != b ? b += 1 : b = 0, this.secondAgencyDigit(a, b)), e
        },
        multiplyAccordingParity: function(a, b) {
            return a * (b % 2 === 0 ? 1 : 2)
        },
        adjustAccordingLength: function(a) {
            if (a > 9) {
                var b = a.toString().split("");
                a = 0;
                for (var c = 0; c < b.length; c++) a += parseInt(b[c])
            }
            return a
        },
        moduleAgencyFirstDigit: function(a) {
            var b = a % 10;
            return 0 === b ? "0" : (10 - b).toString()
        },
        moduleAgencySecondDigit: function(a) {
            var b = a % 11;
            return 0 === b ? "0" : 1 === b ? "1" : (11 - b).toString()
        }
    }, c.BanrisulCheckNumberCalculator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.agencyNumberIsValid(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return a.length == this.agencyCheckNumberLength() && c.GenericBankAccountValidator.agencyCheckNumberIsValid(a)
        },
        accountNumberIsValid: function(a) {
            return a.length == this.accountNumberLength() && c.CommonBankAccountValidator.accountNumberIsValid(a)
        },
        accountCheckNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.accountCheckNumberIsValid(a)
        },
        agencyCheckNumberMatch: function(a) {
            var b = c.BanrisulCheckNumberCalculator.calculateAgency(a.agencyNumber);
            return b === a.agencyCheckNumber
        },
        accountCheckNumberMatch: function(a) {
            var b = c.BanrisulCheckNumberCalculator.calculateAccount(a.accountNumber);
            return b === a.accountCheckNumber
        },
        agencyNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyNumberMsgError()
        },
        agencyCheckNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength())
        },
        accountNumberMsgError: function() {
            return c.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength())
        },
        agencyCheckNumberLength: function() {
            return 2
        },
        accountNumberLength: function() {
            return 9
        }
    }, c.BanrisulValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        calculateAccount: function(a) {
            for (var b = a.split(""), c = 0, d = 0; d < b.length; d++) {
                var e = parseInt(b[d]);
                c += this.multiplyAccordingWeight(e, d)
            }
            return this.accountModule(c)
        },
        multiplyAccordingWeight: function(a, b) {
            var c = [2, 7, 6, 5, 4, 3, 2];
            return a * c[b]
        },
        accountModule: function(a) {
            var b = a % 11;
            return 0 === b ? "0" : 1 === b ? "P" : (11 - b).toString()
        },
        calculateAgency: function(a) {
            for (var b = a.split(""), c = 0, d = 0; d < b.length; d++) seq = 5 - d, c += parseInt(b[d]) * seq;
            return this.agencyModule(c)
        },
        agencyModule: function(a) {
            var b = 11 - a % 11;
            return 10 === b ? "P" : 11 === b ? "0" : b.toString()
        }
    }, c.BradescoCheckNumberCalculator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.agencyNumberIsValid(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return a.length == this.agencyCheckNumberLength() && c.CommonBankAccountValidator.agencyCheckNumberIsValid(a)
        },
        accountNumberIsValid: function(a) {
            return a.length == this.accountNumberLength() && c.CommonBankAccountValidator.accountNumberIsValid(a)
        },
        accountCheckNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.accountCheckNumberIsValid(a)
        },
        agencyCheckNumberMatch: function(a) {
            var b = c.BradescoCheckNumberCalculator.calculateAgency(a.agencyNumber),
                d = a.agencyCheckNumber.toUpperCase();
            return "0" === d ? b === d || "P" === b : b === d
        },
        accountCheckNumberMatch: function(a) {
            var b = c.BradescoCheckNumberCalculator.calculateAccount(a.accountNumber);
            return b === a.accountCheckNumber.toUpperCase()
        },
        agencyNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyNumberMsgError()
        },
        agencyCheckNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyCheckNumberMsgError(this.agencyCheckNumberLength())
        },
        accountNumberMsgError: function() {
            return c.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength())
        },
        agencyCheckNumberLength: function() {
            return 1
        },
        accountNumberLength: function() {
            return 7
        }
    }, c.BradescoValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.agencyNumberIsValid(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return void 0 === a || "" === a
        },
        accountNumberIsValid: function(a) {
            return a.length == this.accountNumberLength() && c.CommonBankAccountValidator.accountNumberIsValid(a)
        },
        accountCheckNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.accountCheckNumberIsValid(a)
        },
        agencyCheckNumberMatch: function() {
            return !0
        },
        accountCheckNumberMatch: function() {
            return !0
        },
        agencyNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyNumberMsgError()
        },
        agencyCheckNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyCheckNumberMsgError()
        },
        accountNumberMsgError: function() {
            return c.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength())
        },
        accountNumberLength: function() {
            return 7
        }
    }, c.CitibankValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return /^(?!0000)([0-9]{4})$/.test(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return /^[a-zA-Z0-9]{0,1}$/.test(a)
        },
        accountNumberIsValid: function(a) {
            return /^[0-9]{1,12}$/.test(a) && parseInt(a) > 0
        },
        accountCheckNumberIsValid: function(a) {
            return /^[a-zA-Z0-9]{1}$/.test(a)
        },
        agencyNumberMsgError: function(a) {
            return void 0 === a && (a = this.agencyNumberLength()), "A agÃªncia deve conter " + a + " nÃºmeros. Complete com zeros a esquerda se necessÃ¡rio."
        },
        agencyCheckNumberMsgError: function(a) {
            return void 0 === a || 0 === a ? "O dÃ­gito da agÃªncia deve ser vazio" : 1 === a ? "O dÃ­gito da agÃªncia deve conter 1 dÃ­gito" : "O dÃ­gito da agÃªncia deve conter " + a + " nÃºmeros. Complete com zeros a esquerda se necessÃ¡rio."
        },
        accountNumberMsgError: function(a) {
            return "A conta corrente deve conter " + a + " nÃºmeros. Complete com zeros a esquerda se necessÃ¡rio."
        },
        agencyNumberLength: function() {
            return 4
        }
    }, c.CommonBankAccountValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        bankNumberIsValid: function(a) {
            return /^([0-9-A-Za-x]{3,5})$/.test(a)
        },
        agencyNumberIsValid: function(a) {
            return /^[0-9]{1,5}$/.test(a) && parseInt(a) > 0
        },
        agencyCheckNumberIsValid: function(a) {
            return /^[a-zA-Z0-9]{0,2}$/.test(a)
        },
        accountNumberIsValid: function(a) {
            return /^[0-9]{1,12}$/.test(a) && parseInt(a) > 0
        },
        accountCheckNumberIsValid: function(a) {
            return /^[a-zA-Z0-9]{0,2}$/.test(a)
        },
        agencyCheckNumberMatch: function() {
            return !0
        },
        accountCheckNumberMatch: function() {
            return !0
        },
        agencyNumberMsgError: function() {
            return "AgÃªncia invÃ¡lida"
        },
        agencyCheckNumberMsgError: function() {
            return "DÃ­gito da agÃªncia invÃ¡lido"
        },
        accountNumberMsgError: function() {
            return "Conta corrente invÃ¡lida"
        }
    }, c.GenericBankAccountValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.agencyNumberIsValid(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return void 0 === a || "" === a
        },
        accountNumberIsValid: function(a) {
            return a.length == this.accountNumberLength() && c.CommonBankAccountValidator.accountNumberIsValid(a)
        },
        accountCheckNumberIsValid: function() {
            return !0
        },
        agencyCheckNumberMatch: function() {
            return !0
        },
        accountCheckNumberMatch: function() {
            return !0
        },
        agencyNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyNumberMsgError()
        },
        agencyCheckNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyCheckNumberMsgError()
        },
        accountNumberMsgError: function() {
            return c.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength())
        },
        accountNumberLength: function() {
            return 6
        }
    }, c.HSBCValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        calculate: function(a, b) {
            for (var c = (a + b).split(""), d = 0, e = 0, f = 0; f < c.length; f++) {
                var g = parseInt(c[f]);
                e = this.multiplyAccordingParity(g, f), e = this.adjustAccordingLength(e), d += e
            }
            return this.module(d)
        },
        multiplyAccordingParity: function(a, b) {
            return a * (b % 2 === 0 ? 2 : 1)
        },
        adjustAccordingLength: function(a) {
            if (a > 9) {
                var b = a.toString().split("");
                a = 0;
                for (var c = 0; c < b.length; c++) a += parseInt(b[c])
            }
            return a
        },
        module: function(a) {
            var b = a % 10;
            return 0 === b ? "0" : (10 - b).toString()
        }
    }, c.ItauCheckNumberCalculator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.agencyNumberIsValid(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return void 0 === a || "" === a
        },
        accountNumberIsValid: function(a) {
            return a.length == this.accountNumberLength() && c.CommonBankAccountValidator.accountNumberIsValid(a)
        },
        accountCheckNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.accountCheckNumberIsValid(a)
        },
        agencyCheckNumberMatch: function() {
            return !0
        },
        accountCheckNumberMatch: function(a) {
            var b = c.ItauCheckNumberCalculator.calculate(a.agencyNumber, a.accountNumber);
            return b === a.accountCheckNumber
        },
        agencyNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyNumberMsgError()
        },
        agencyCheckNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyCheckNumberMsgError()
        },
        accountNumberMsgError: function() {
            return c.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength())
        },
        accountNumberLength: function() {
            return 5
        }
    }, c.ItauValidator = b()
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        agencyNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.agencyNumberIsValid(a)
        },
        agencyCheckNumberIsValid: function(a) {
            return void 0 === a || "" === a
        },
        accountNumberIsValid: function(a) {
            return a.length == this.accountNumberLength() && c.CommonBankAccountValidator.accountNumberIsValid(a)
        },
        accountCheckNumberIsValid: function(a) {
            return c.CommonBankAccountValidator.accountCheckNumberIsValid(a)
        },
        agencyCheckNumberMatch: function() {
            return !0
        },
        accountCheckNumberMatch: function() {
            return !0
        },
        agencyNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyNumberMsgError()
        },
        agencyCheckNumberMsgError: function() {
            return c.CommonBankAccountValidator.agencyCheckNumberMsgError()
        },
        accountNumberMsgError: function() {
            return c.CommonBankAccountValidator.accountNumberMsgError(this.accountNumberLength())
        },
        accountNumberLength: function() {
            return 8
        }
    }, c.SantanderValidator = b()
}(window),
function(a) {
    var b = a.Moip || {};
    a.Moip = b, b.Calculator = {
        pricing: function(a) {
            return this.buildJson(a)
        },
        buildJson: function(a) {
            var b, c = [],
                d = [],
                e = [],
                f = [];
            if (b = this._calculateTransactionTax(a.amount, a.transaction_percentage, a.fixed), void 0 !== a.antecipation_percentage && void 0 !== a.floating && void 0 !== a.installment) {
                for (var g = 0; 11 >= g; g++) c[g] = this._calculateInstallmentValue(a.amount, g + 1), d[g] = this._calculateAntecipationPercentage(b, a, g, a.amount), e[g] = this._calculateTotalTax(d[g], b), f[g] = this._calculateLiquidValue(a.amount, e[g]);
                return {
                    amount: a.amount,
                    transaction_tax: b,
                    antecipation_percentage: d,
                    total_tax: e,
                    liquid_value: f,
                    installment_value: c
                }
            }
            return f = this._calculateLiquidValue(a.amount, b), {
                amount: a.amount,
                transaction_tax: b,
                liquid_value: f
            }
        },
        pricingWithInterest: function(a) {
            for (var b = [], c = [], d = [], e = [], f = [], g = [], h = [], i = 1; 12 >= i; i++) b[i - 1] = this._calculateInterestRate(a.amount, a.interest_rate, i), c[i - 1] = this._calculateAmount(b[i - 1], i), d[i - 1] = this._calculateTransactionTax(c[i - 1], a.transaction_percentage, a.fixed), e[i - 1] = this._calculateAntecipationPercentage(d[i - 1], a, i - 1, c[i - 1]), f[i - 1] = this._calculateAntecipationPercentageFromAmount(c[i - 1], e[i - 1]), g[i - 1] = this._calculateTotalTax(e[i - 1], d[i - 1]), h[i - 1] = this._calculateLiquidValue(c[i - 1], g[i - 1]);
            return {
                amount: c,
                transaction_tax: d,
                antecipation_percentage: f,
                total_tax: g,
                liquid_value: h,
                installment_value: b
            }
        },
        _calculateAntecipationPercentageFromAmount: function(a, b) {
            return parseFloat(100 * b / (a / 100)).toFixed(2)
        },
        _calculateTransactionTax: function(a, b, c) {
            return parseFloat(((a * (b / 100) + c) / 100).toFixed(2))
        },
        _calculateAntecipationPercentage: function(a, b, c, d) {
            return parseFloat((parseFloat(b.antecipation_percentage / 100 / 30 * (30 + 15 * c - b.floating)) * parseFloat(d / 100 - a)).toFixed(2))
        },
        _calculateTotalTax: function(a, b) {
            return parseFloat((a + b).toFixed(2))
        },
        _calculateLiquidValue: function(a, b) {
            return parseFloat((a / 100 - parseFloat(b)).toFixed(2))
        },
        _calculateInstallmentValue: function(a, b) {
            return parseFloat((a / b / 100).toFixed(2))
        },
        _calculateInterestRate: function(a, b, c) {
            return parseFloat(1 === c ? a / 100 : (this._coefficient(b, c) * (a / 100)).toFixed(2))
        },
        _calculateAmount: function(a, b) {
            return parseFloat(100 * (a * b).toFixed(2))
        },
        _coefficient: function(a, b) {
            return parseFloat((a / 100 / (1 - 1 / Math.pow(a / 100 + 1, b))).toFixed(10))
        }
    }
}(window),
function(a) {
    function b(a) {
        this.number = c.Validator.normalizeCardNumber(a.number), this.cvc = a.cvc, this.expMonth = a.expMonth, this.expYear = a.expYear, this.pubKey = a.pubKey
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        hash: function() {
            if (!(this.pubKey && this.number && this.cvc && this.expMonth && this.expYear)) return null;
            var a = new JSEncrypt({
                default_key_size: 2048
            });
            a.setPublicKey(this.pubKey);
            var b = "number=" + this.number + "&";
            return b += "cvc=" + this.cvc + "&", b += "expirationMonth=" + this.expMonth + "&", b += "expirationYear=" + this.expYear, a.encrypt(b)
        },
        isValid: function() {
            if (!(this.pubKey && this.number && this.cvc && this.expMonth && this.expYear)) return !1;
            var a = c.Validator.isValid(this.number),
                b = c.Validator.isSecurityCodeValid(this.number, this.cvc),
                d = c.Validator.isExpiryDateValid(this.expMonth, this.expYear);
            return a && b && d
        },
        cardType: function() {
            return type = c.Validator.cardType(this.number), type ? type.brand : null
        },
        _setPubKey: function(a) {
            this.pubKey = a
        },
        _setNumber: function(a) {
            this.number = a
        },
        _setCvc: function(a) {
            this.cvc = a
        },
        _setExpMonth: function(a) {
            this.expMonth = a
        },
        _setExpYear: function(a) {
            this.expYear = a
        }
    }, c.CreditCard = b
}(window),
function(a) {
    function b() {
        return this instanceof b ? void 0 : new b
    }
    var c = a.Moip || {};
    a.Moip = c, b.prototype = {
        _eloBins: ["401178", "401179", "431274", "438935", "451416", "457393", "457631", "457632", "504175", "627780", "636297", "636368"],
        _eloBinRanges: [
            [506699, 506778],
            [509e3, 509999],
            [650031, 650033],
            [650035, 650051],
            [650405, 650439],
            [650485, 650538],
            [650541, 650598],
            [650700, 650718],
            [650720, 650727],
            [650901, 650920],
            [651652, 651679],
            [655e3, 655019],
            [655021, 655058]
        ],
        _hiperBins: ["637095", "637612", "637599", "637609", "637568"],
        _hipercardBins: ["606282"],
        _isInEloBinRanges: function(a) {
            for (var b = parseInt(a), c = 0; c < this._eloBinRanges.length; c++) {
                var d = this._eloBinRanges[c][0],
                    e = this._eloBinRanges[c][1];
                if (b >= d && e >= b) return !0
            }
            return !1
        },
        normalizeCardNumber: function(a) {
            return a ? (a += "", a.replace(/[\s+|\.|\-]/g, "")) : a
        },
        isValid: function(a) {
            var c = this.normalizeCardNumber(a),
                d = b.prototype.cardType(c);
            if (d) {
                if ("HIPERCARD" === d.brand) return !0;
                for (var e = 0, f = 2 - c.length % 2; f <= c.length; f += 2) e += parseInt(c.charAt(f - 1), 10);
                for (f = c.length % 2 + 1; f < c.length; f += 2) {
                    var g = 2 * parseInt(c.charAt(f - 1), 10);
                    e += 10 > g ? g : g - 9
                }
                return e % 10 === 0 ? !0 : !1
            }
            return !1
        },
        cardType: function(a, b) {
            var c = this,
                d = this.normalizeCardNumber(a),
                e = function(a) {
                    return a.substring(0, 6)
                },
                f = {
                    VISA: {
                        matches: function(a) {
                            return /^4\d{15}$/.test(a)
                        }
                    },
                    MASTERCARD: {
                        matches: function(a) {
                            return /^5[1-5]\d{14}$/.test(a)
                        }
                    },
                    AMEX: {
                        matches: function(a) {
                            return /^3[4,7]\d{13}$/.test(a)
                        }
                    },
                    DINERS: {
                        matches: function(a) {
                            return /^3[0,6,8]\d{12}$/.test(a)
                        }
                    },
                    HIPERCARD: {
                        matches: function(a) {
                            return null !== a && 16 == a.length && c._hipercardBins.indexOf(e(a)) > -1
                        }
                    },
                    ELO: {
                        matches: function(a) {
                            return null !== a && 16 == a.length && (c._eloBins.indexOf(e(a)) > -1 || c._isInEloBinRanges(e(a)))
                        }
                    },
                    HIPER: {
                        matches: function(a) {
                            return null !== a && a.length >= 6 && c._hiperBins.indexOf(e(a)) > -1
                        }
                    }
                },
                g = {
                    VISA: {
                        matches: function(a) {
                            return /^4\d{3}\d*$/.test(a)
                        }
                    },
                    MASTERCARD: {
                        matches: function(a) {
                            return /^5[1-5]\d{4}\d*$/.test(a)
                        }
                    },
                    AMEX: {
                        matches: function(a) {
                            return /^3[4,7]\d{2}\d*$/.test(a)
                        }
                    },
                    DINERS: {
                        matches: function(a) {
                            return /^3(?:0[0-5]|[68][0-9])+\d*$/.test(a)
                        }
                    },
                    HIPERCARD: {
                        matches: function(a) {
                            return null !== a && a.length >= 6 && c._hipercardBins.indexOf(e(a)) > -1
                        }
                    },
                    ELO: {
                        matches: function(a) {
                            return null !== a && a.length >= 6 && (c._eloBins.indexOf(e(a)) > -1 || c._isInEloBinRanges(e(a)))
                        }
                    },
                    HIPER: {
                        matches: function(a) {
                            return null !== a && a.length >= 6 && c._hiperBins.indexOf(e(a)) > -1
                        }
                    }
                };
            return b && (f = g), f.ELO.matches(d) ? {
                brand: "ELO"
            } : f.HIPER.matches(d) ? {
                brand: "HIPER"
            } : f.VISA.matches(d) ? {
                brand: "VISA"
            } : f.MASTERCARD.matches(d) ? {
                brand: "MASTERCARD"
            } : f.AMEX.matches(d) ? {
                brand: "AMEX"
            } : f.HIPERCARD.matches(d) ? {
                brand: "HIPERCARD"
            } : f.DINERS.matches(d) ? {
                brand: "DINERS"
            } : null
        },
        isSecurityCodeValid: function(a, b) {
            var d = c.Validator.cardType(a);
            if (!d) return !1;
            var e = "AMEX" === d.brand ? 4 : 3,
                f = new RegExp("[0-9]{" + e + "}");
            return b.length === e && f.test(b)
        },
        isExpiryDateValid: function(a, c) {
            return a = parseInt(a, 10), c = parseInt(c, 10), 1 > a || a > 12 ? !1 : 2 !== (c + "").length && 4 !== (c + "").length ? !1 : (2 === (c + "").length && (c = c > 80 ? "19" + c : "20" + c), 1e3 > c || c >= 3e3 ? !1 : !b.prototype.isExpiredDate(a, c))
        },
        isExpiredDate: function(a, b) {
            var c = new Date,
                d = ("0" + (c.getMonth() + 1)).slice(-2),
                e = c.getFullYear();
            if (a = ("0" + a).slice(-2), 2 === b.toString().length) {
                if (b > 80) return !0;
                b = "20" + b
            }
            var f = e + d,
                g = b + a;
            return parseInt(g, 10) < parseInt(f, 10)
        }
    }, c.Validator = b()
}(window);