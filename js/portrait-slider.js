(function(h, g, c, j, e, l, k) { /*! Jssor */
	new(function() {});
	var f = {
			gd: function(a) {
				return -c.cos(a * c.PI) / 2 + .5
			},
			Ec: function(a) {
				return a
			},
			Ce: function(a) {
				return -a * (a - 2)
			},
			De: function(a) {
				return a * a * a
			},
			Ee: function(a) {
				return (a -= 1) * a * a + 1
			}
		},
		d = {
			l: f.Ec,
			m: f.De,
			ld: f.Ee
		};
	var b = new function() {
		var d = this,
			Bb = /\S+/g,
			G = 1,
			db = 2,
			hb = 3,
			gb = 4,
			lb = 5,
			H, r = 0,
			i = 0,
			s = 0,
			W = 0,
			z = 0,
			J = navigator,
			pb = J.appName,
			o = J.userAgent,
			p = parseFloat;

		function zb() {
			if (!H) {
				H = {
					pf: "ontouchstart" in h || "createTouch" in g
				};
				var a;
				if (J.pointerEnabled || (a = J.msPointerEnabled)) H.vd = a ? "msTouchAction" : "touchAction"
			}
			return H
		}

		function v(j) {
			if (!r) {
				r = -1;
				if (pb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
					var e = o.indexOf("MSIE");
					r = G;
					s = p(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on W=@_jscript_version@*/ ;
					i = g.documentMode || s
				} else if (pb == "Netscape" && !!h.addEventListener) {
					var d = o.indexOf("Firefox"),
						b = o.indexOf("Safari"),
						f = o.indexOf("Chrome"),
						c = o.indexOf("AppleWebKit");
					if (d >= 0) {
						r = db;
						i = p(o.substring(d + 8))
					} else if (b >= 0) {
						var k = o.substring(0, b).lastIndexOf("/");
						r = f >= 0 ? gb : hb;
						i = p(o.substring(k + 1, b))
					} else {
						var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
						if (a) {
							r = G;
							i = s = p(a[1])
						}
					}
					if (c >= 0) z = p(o.substring(c + 12))
				} else {
					var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
					if (a) {
						r = lb;
						i = p(a[2])
					}
				}
			}
			return j == r
		}

		function q() {
			return v(G)
		}

		function R() {
			return q() && (i < 6 || g.compatMode == "BackCompat")
		}

		function fb() {
			return v(hb)
		}

		function kb() {
			return v(lb)
		}

		function wb() {
			return fb() && z > 534 && z < 535
		}

		function K() {
			v();
			return z > 537 || i > 42 || r == G && i >= 11
		}

		function P() {
			return q() && i < 9
		}

		function xb(a) {
			var b, c;
			return function(f) {
				if (!b) {
					b = e;
					var d = a.substr(0, 1).toUpperCase() + a.substr(1);
					n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, e) {
						var b = a;
						if (e) b = g + d;
						if (f.style[b] != k) return c = b
					})
				}
				return c
			}
		}

		function vb(b) {
			var a;
			return function(c) {
				a = a || xb(b)(c) || b;
				return a
			}
		}
		var L = vb("transform");

		function ob(a) {
			return {}.toString.call(a)
		}
		var F;

		function Hb() {
			if (!F) {
				F = {};
				n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
					F["[object " + a + "]"] = a.toLowerCase()
				})
			}
			return F
		}

		function n(b, d) {
			var a, c;
			if (ob(b) == "[object Array]") {
				for (a = 0; a < b.length; a++)
					if (c = d(b[a], a, b)) return c
			} else
				for (a in b)
					if (c = d(b[a], a, b)) return c
		}

		function C(a) {
			return a == j ? String(a) : Hb()[ob(a)] || "object"
		}

		function mb(a) {
			for (var b in a) return e
		}

		function A(a) {
			try {
				return C(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
			} catch (b) {}
		}

		function u(a, b) {
			return {
				x: a,
				y: b
			}
		}

		function sb(b, a) {
			setTimeout(b, a || 0)
		}

		function I(b, d, c) {
			var a = !b || b == "inherit" ? "" : b;
			n(d, function(c) {
				var b = c.exec(a);
				if (b) {
					var d = a.substr(0, b.index),
						e = a.substr(b.index + b[0].length + 1, a.length - 1);
					a = d + e
				}
			});
			a = c + (!a.indexOf(" ") ? "" : " ") + a;
			return a
		}

		function ub(b, a) {
			if (i < 9) b.style.filter = a
		}
		d.qf = zb;
		d.rd = q;
		d.tf = fb;
		d.kd = kb;
		d.wf = K;
		d.sb = P;
		xb("transform");
		d.md = function() {
			return i
		};
		d.zf = function() {
			v();
			return z
		};
		d.R = sb;

		function Z(a) {
			a.constructor === Z.caller && a.td && a.td.apply(a, Z.caller.arguments)
		}
		d.td = Z;
		d.yb = function(a) {
			if (d.Ve(a)) a = g.getElementById(a);
			return a
		};

		function t(a) {
			return a || h.event
		}
		d.jd = t;
		d.ic = function(b) {
			b = t(b);
			var a = b.target || b.srcElement || g;
			if (a.nodeType == 3) a = d.wd(a);
			return a
		};
		d.Id = function(a) {
			a = t(a);
			return {
				x: a.pageX || a.clientX || 0,
				y: a.pageY || a.clientY || 0
			}
		};

		function D(c, d, a) {
			if (a !== k) c.style[d] = a == k ? "" : a;
			else {
				var b = c.currentStyle || c.style;
				a = b[d];
				if (a == "" && h.getComputedStyle) {
					b = c.ownerDocument.defaultView.getComputedStyle(c, j);
					b && (a = b.getPropertyValue(d) || b[d])
				}
				return a
			}
		}

		function bb(b, c, a, d) {
			if (a !== k) {
				if (a == j) a = "";
				else d && (a += "px");
				D(b, c, a)
			} else return p(D(b, c))
		}

		function m(c, a) {
			var d = a ? bb : D,
				b;
			if (a & 4) b = vb(c);
			return function(e, f) {
				return d(e, b ? b(e) : c, f, a & 2)
			}
		}

		function Eb(b) {
			if (q() && s < 9) {
				var a = /opacity=([^)]*)/.exec(b.style.filter || "");
				return a ? p(a[1]) / 100 : 1
			} else return p(b.style.opacity || "1")
		}

		function Gb(b, a, f) {
			if (q() && s < 9) {
				var h = b.style.filter || "",
					i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
					e = c.round(100 * a),
					d = "";
				if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
				var g = I(h, [i], d);
				ub(b, g)
			} else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
		}
		var M = {
			S: ["rotate"],
			db: ["rotateX"],
			mb: ["rotateY"],
			Sb: ["skewX"],
			Tb: ["skewY"]
		};
		if (!K()) M = B(M, {
			u: ["scaleX", 2],
			v: ["scaleY", 2],
			kb: ["translateZ", 1]
		});

		function N(d, a) {
			var c = "";
			if (a) {
				if (q() && i && i < 10) {
					delete a.db;
					delete a.mb;
					delete a.kb
				}
				b.j(a, function(d, b) {
					var a = M[b];
					if (a) {
						var e = a[1] || 0;
						if (O[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
					}
				});
				if (K()) {
					if (a.qb || a.rb || a.kb) c += " translate3d(" + (a.qb || 0) + "px," + (a.rb || 0) + "px," + (a.kb || 0) + "px)";
					if (a.u == k) a.u = 1;
					if (a.v == k) a.v = 1;
					if (a.u != 1 || a.v != 1) c += " scale3d(" + a.u + ", " + a.v + ", 1)"
				}
			}
			d.style[L(d)] = c
		}
		d.Mc = m("transformOrigin", 4);
		d.Ue = m("backfaceVisibility", 4);
		d.af = m("transformStyle", 4);
		d.cf = m("perspective", 6);
		d.kf = m("perspectiveOrigin", 4);
		d.ge = function(a, b) {
			if (q() && s < 9 || s < 10 && R()) a.style.zoom = b == 1 ? "" : b;
			else {
				var c = L(a),
					f = "scale(" + b + ")",
					e = a.style[c],
					g = new RegExp(/[\s]*scale\(.*?\)/g),
					d = I(e, [g], f);
				a.style[c] = d
			}
		};
		d.rc = function(b, a) {
			return function(c) {
				c = t(c);
				var f = c.type,
					e = c.relatedTarget || (f == "mouseout" ? c.toElement : c.fromElement);
				(!e || e !== a && !d.mf(a, e)) && b(c)
			}
		};
		d.g = function(a, e, b, c) {
			a = d.yb(a);
			if (a.addEventListener) {
				e == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
				a.addEventListener(e, b, c)
			} else if (a.attachEvent) {
				a.attachEvent("on" + e, b);
				c && a.setCapture && a.setCapture()
			}
		};
		d.P = function(a, c, e, b) {
			a = d.yb(a);
			if (a.removeEventListener) {
				c == "mousewheel" && a.removeEventListener("DOMMouseScroll", e, b);
				a.removeEventListener(c, e, b)
			} else if (a.detachEvent) {
				a.detachEvent("on" + c, e);
				b && a.releaseCapture && a.releaseCapture()
			}
		};
		d.Xb = function(a) {
			a = t(a);
			a.preventDefault && a.preventDefault();
			a.cancel = e;
			a.returnValue = l
		};
		d.nf = function(a) {
			a = t(a);
			a.stopPropagation && a.stopPropagation();
			a.cancelBubble = e
		};
		d.X = function(d, c) {
			var a = [].slice.call(arguments, 2),
				b = function() {
					var b = a.concat([].slice.call(arguments, 0));
					return c.apply(d, b)
				};
			return b
		};
		d.Ze = function(a, b) {
			if (b == k) return a.textContent || a.innerText;
			var c = g.createTextNode(b);
			d.pc(a);
			a.appendChild(c)
		};
		d.Zb = function(d, c) {
			for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
			return b
		};

		function nb(a, c, e, b) {
			b = b || "u";
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1) {
					if (V(a, b) == c) return a;
					if (!e) {
						var d = nb(a, c, e, b);
						if (d) return d
					}
				}
		}
		d.E = nb;

		function T(a, d, f, b) {
			b = b || "u";
			var c = [];
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1) {
					V(a, b) == d && c.push(a);
					if (!f) {
						var e = T(a, d, f, b);
						if (e.length) c = c.concat(e)
					}
				}
			return c
		}
		d.hf = T;

		function ib(a, c, d) {
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1) {
					if (a.tagName == c) return a;
					if (!d) {
						var b = ib(a, c, d);
						if (b) return b
					}
				}
		}
		d.gf = ib;

		function yb(a, c, e) {
			var b = [];
			for (a = a ? a.firstChild : j; a; a = a.nextSibling)
				if (a.nodeType == 1) {
					(!c || a.tagName == c) && b.push(a);
					if (!e) {
						var d = yb(a, c, e);
						if (d.length) b = b.concat(d)
					}
				}
			return b
		}
		d.ff = yb;
		d.Ye = function(b, a) {
			return b.getElementsByTagName(a)
		};

		function B() {
			var e = arguments,
				d, c, b, a, g = 1 & e[0],
				f = 1 + g;
			d = e[f - 1] || {};
			for (; f < e.length; f++)
				if (c = e[f])
					for (b in c) {
						a = c[b];
						if (a !== k) {
							a = c[b];
							var h = d[b];
							d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a) : a
						}
					}
				return d
		}
		d.J = B;

		function ab(f, g) {
			var d = {},
				c, a, b;
			for (c in f) {
				a = f[c];
				b = g[c];
				if (a !== b) {
					var e;
					if (A(a) && A(b)) {
						a = ab(a, b);
						e = !mb(a)
					}!e && (d[c] = a)
				}
			}
			return d
		}
		d.Yc = function(a) {
			return C(a) == "function"
		};
		d.Ve = function(a) {
			return C(a) == "string"
		};
		d.Xc = function(a) {
			return !isNaN(p(a)) && isFinite(a)
		};
		d.j = n;
		d.bf = A;

		function S(a) {
			return g.createElement(a)
		}
		d.hb = function() {
			return S("DIV")
		};
		d.Tc = function() {};

		function X(b, c, a) {
			if (a == k) return b.getAttribute(c);
			b.setAttribute(c, a)
		}

		function V(a, b) {
			return X(a, b) || X(a, "data-" + b)
		}
		d.M = X;
		d.p = V;

		function x(b, a) {
			if (a == k) return b.className;
			b.className = a
		}
		d.Rc = x;

		function rb(b) {
			var a = {};
			n(b, function(b) {
				a[b] = b
			});
			return a
		}

		function tb(b, a) {
			return b.match(a || Bb)
		}

		function Q(b, a) {
			return rb(tb(b || "", a))
		}
		d.je = tb;

		function cb(b, c) {
			var a = "";
			n(c, function(c) {
				a && (a += b);
				a += c
			});
			return a
		}

		function E(a, c, b) {
			x(a, cb(" ", B(ab(Q(x(a)), Q(c)), Q(b))))
		}
		d.wd = function(a) {
			return a.parentNode
		};
		d.U = function(a) {
			d.gb(a, "none")
		};
		d.H = function(a, b) {
			d.gb(a, b ? "none" : "")
		};
		d.Td = function(b, a) {
			b.removeAttribute(a)
		};
		d.Xd = function() {
			return q() && i < 10
		};
		d.Yd = function(d, a) {
			if (a) d.style.clip = "rect(" + c.round(a.f) + "px " + c.round(a.z) + "px " + c.round(a.B) + "px " + c.round(a.e) + "px)";
			else if (a !== k) {
				var g = d.style.cssText,
					f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
					e = I(g, f, "");
				b.Bb(d, e)
			}
		};
		d.lb = function() {
			return +new Date
		};
		d.F = function(b, a) {
			b.appendChild(a)
		};
		d.Ob = function(b, a, c) {
			(c || a.parentNode).insertBefore(b, a)
		};
		d.Lb = function(b, a) {
			a = a || b.parentNode;
			a && a.removeChild(b)
		};
		d.Wd = function(a, b) {
			n(a, function(a) {
				d.Lb(a, b)
			})
		};
		d.pc = function(a) {
			d.Wd(d.Zb(a, e), a)
		};
		d.Rd = function(a, b) {
			var c = d.wd(a);
			b & 1 && d.N(a, (d.q(c) - d.q(a)) / 2);
			b & 2 && d.K(a, (d.s(c) - d.s(a)) / 2)
		};
		d.Od = function(b, a) {
			return parseInt(b, a || 10)
		};
		d.Kd = p;
		d.mf = function(b, a) {
			var c = g.body;
			while (a && b !== a && c !== a) try {
				a = a.parentNode
			} catch (d) {
				return l
			}
			return b === a
		};

		function Y(e, c, b) {
			var a = e.cloneNode(!c);
			!b && d.Td(a, "id");
			return a
		}
		d.eb = Y;
		d.Cb = function(f, g) {
			var a = new Image;

			function b(f, e) {
				d.P(a, "load", b);
				d.P(a, "abort", c);
				d.P(a, "error", c);
				g && g(a, e)
			}

			function c(a) {
				b(a, e)
			}
			if (kb() && i < 11.6 || !f) b(!f);
			else {
				d.g(a, "load", b);
				d.g(a, "abort", c);
				d.g(a, "error", c);
				a.src = f
			}
		};
		d.Ld = function(e, a, f) {
			var c = e.length + 1;

			function b(b) {
				c--;
				if (a && b && b.src == a.src) a = b;
				!c && f && f(a)
			}
			n(e, function(a) {
				d.Cb(a.src, b)
			});
			b()
		};
		d.Jd = function(a, g, i, h) {
			if (h) a = Y(a);
			var c = T(a, g);
			if (!c.length) c = b.Ye(a, g);
			for (var f = c.length - 1; f > -1; f--) {
				var d = c[f],
					e = Y(i);
				x(e, x(d));
				b.Bb(e, d.style.cssText);
				b.Ob(e, d);
				b.Lb(d)
			}
			return a
		};

		function Ib(a) {
			var l = this,
				p = "",
				r = ["av", "pv", "ds", "dn"],
				f = [],
				q, j = 0,
				h = 0,
				e = 0;

			function i() {
				E(a, q, f[e || j || h & 2 || h]);
				b.Y(a, "pointer-events", e ? "none" : "")
			}

			function c() {
				j = 0;
				i();
				d.P(g, "mouseup", c);
				d.P(g, "touchend", c);
				d.P(g, "touchcancel", c)
			}

			function o(a) {
				if (e) d.Xb(a);
				else {
					j = 4;
					i();
					d.g(g, "mouseup", c);
					d.g(g, "touchend", c);
					d.g(g, "touchcancel", c)
				}
			}
			l.de = function(a) {
				if (a === k) return h;
				h = a & 2 || a & 1;
				i()
			};
			l.Bd = function(a) {
				if (a === k) return !e;
				e = a ? 0 : 3;
				i()
			};
			l.bb = a = d.yb(a);
			var m = b.je(x(a));
			if (m) p = m.shift();
			n(r, function(a) {
				f.push(p + a)
			});
			q = cb(" ", f);
			f.unshift("");
			d.g(a, "mousedown", o);
			d.g(a, "touchstart", o)
		}
		d.Bc = function(a) {
			return new Ib(a)
		};
		d.Y = D;
		d.pb = m("overflow");
		d.K = m("top", 2);
		d.N = m("left", 2);
		d.q = m("width", 2);
		d.s = m("height", 2);
		d.Zd = m("marginLeft", 2);
		d.Te = m("marginTop", 2);
		d.G = m("position");
		d.gb = m("display");
		d.O = m("zIndex", 1);
		d.Fb = function(b, a, c) {
			if (a != k) Gb(b, a, c);
			else return Eb(b)
		};
		d.Bb = function(a, b) {
			if (b != k) a.style.cssText = b;
			else return a.style.cssText
		};
		var U = {
			a: d.Fb,
			f: d.K,
			e: d.N,
			Z: d.q,
			ab: d.s,
			Ab: d.G,
			Kf: d.gb,
			W: d.O
		};

		function w(g, l) {
			var f = P(),
				b = K(),
				e = wb(),
				h = L(g);

			function i(b, d, a) {
				var e = b.wb(u(-d / 2, -a / 2)),
					f = b.wb(u(d / 2, -a / 2)),
					g = b.wb(u(d / 2, a / 2)),
					h = b.wb(u(-d / 2, a / 2));
				b.wb(u(300, 300));
				return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
			}

			function a(e, a) {
				a = a || {};
				var g = a.kb || 0,
					l = (a.db || 0) % 360,
					m = (a.mb || 0) % 360,
					o = (a.S || 0) % 360,
					p = a.Lf;
				if (f) {
					g = 0;
					l = 0;
					m = 0;
					p = 0
				}
				var c = new Db(a.qb, a.rb, g);
				c.db(l);
				c.mb(m);
				c.ce(o);
				c.be(a.Sb, a.Tb);
				c.yc(a.u, a.v, p);
				if (b) {
					c.xb(a.V, a.Q);
					e.style[h] = c.ee()
				} else if (!W || W < 9) {
					var j = "";
					if (o || a.u != k && a.u != 1 || a.v != k && a.v != 1) {
						var n = i(c, a.ub, a.ob);
						d.Te(e, n.y);
						d.Zd(e, n.x);
						j = c.Md()
					}
					var r = e.style.filter,
						s = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
						q = I(r, [s], j);
					ub(e, q)
				}
			}
			w = function(f, c) {
				c = c || {};
				var h = c.V,
					i = c.Q,
					g;
				n(U, function(a, b) {
					g = c[b];
					g !== k && a(f, g)
				});
				d.Yd(f, c.c);
				if (!b) {
					h != k && d.N(f, c.fd + h);
					i != k && d.K(f, c.Pc + i)
				}
				if (c.Qd)
					if (e) sb(d.X(j, N, f, c));
					else a(f, c)
			};
			d.Kb = N;
			if (e) d.Kb = w;
			if (f) d.Kb = a;
			else if (!b) a = N;
			d.L = w;
			w(g, l)
		}
		d.Kb = w;
		d.L = w;

		function Db(i, l, p) {
			var d = this,
				b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, l || 0, p || 0, 1],
				h = c.sin,
				g = c.cos,
				m = c.tan;

			function f(a) {
				return a * c.PI / 180
			}

			function o(a, b) {
				return {
					x: a,
					y: b
				}
			}

			function n(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
				return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
			}

			function e(c, a) {
				return n.apply(j, (a || b).concat(c))
			}
			d.yc = function(a, c, d) {
				if (a == k) a = 1;
				if (c == k) c = 1;
				if (d == k) d = 1;
				if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
			};
			d.xb = function(a, c, d) {
				b[12] += a || 0;
				b[13] += c || 0;
				b[14] += d || 0
			};
			d.db = function(c) {
				if (c) {
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
				}
			};
			d.mb = function(c) {
				if (c) {
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
				}
			};
			d.ce = function(c) {
				if (c) {
					a = f(c);
					var d = g(a),
						i = h(a);
					b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
				}
			};
			d.be = function(a, c) {
				if (a || c) {
					i = f(a);
					l = f(c);
					b = e([1, m(l), 0, 0, m(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
				}
			};
			d.wb = function(c) {
				var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
				return o(a[12], a[13])
			};
			d.ee = function() {
				return "matrix3d(" + b.join(",") + ")"
			};
			d.Md = function() {
				return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
			}
		}
		new function() {
			var a = this;

			function b(d, g) {
				for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
					for (var k = f[c] = [], b = 0; b < h; b++) {
						for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
						k[b] = e
					}
				return f
			}
			a.u = function(b, c) {
				return a.Cd(b, c, 0)
			};
			a.v = function(b, c) {
				return a.Cd(b, 0, c)
			};
			a.Cd = function(a, c, d) {
				return b(a, [
					[c, 0],
					[0, d]
				])
			};
			a.wb = function(d, c) {
				var a = b(d, [
					[c.x],
					[c.y]
				]);
				return u(a[0][0], a[1][0])
			}
		};
		var O = {
			fd: 0,
			Pc: 0,
			V: 0,
			Q: 0,
			I: 1,
			u: 1,
			v: 1,
			S: 0,
			db: 0,
			mb: 0,
			qb: 0,
			rb: 0,
			kb: 0,
			Sb: 0,
			Tb: 0
		};
		d.Fd = function(a) {
			var c = a || {};
			if (a)
				if (b.Yc(a)) c = {
					zc: c
				};
				else if (b.Yc(a.c)) c.c = {
				zc: a.c
			};
			return c
		};
		d.Hd = function(l, m, w, n, y, z, o) {
			var a = m;
			if (l) {
				a = {};
				for (var g in m) {
					var A = z[g] || 1,
						v = y[g] || [0, 1],
						d = (w - v[0]) / v[1];
					d = c.min(c.max(d, 0), 1);
					d = d * A;
					var u = c.floor(d);
					if (d != u) d -= u;
					var h = n.zc || f.gd,
						i, B = l[g],
						q = m[g];
					if (b.Xc(q)) {
						h = n[g] || h;
						var x = h(d);
						i = B + q * x
					} else {
						i = b.J({
							Pb: {}
						}, l[g]);
						b.j(q.Pb || q, function(e, a) {
							if (n.c) h = n.c[a] || n.c.zc || h;
							var c = h(d),
								b = e * c;
							i.Pb[a] = b;
							i[a] += b
						})
					}
					a[g] = i
				}
				var t = b.j(m, function(b, a) {
					return O[a] != k
				});
				t && b.j(O, function(c, b) {
					if (a[b] == k && l[b] !== k) a[b] = l[b]
				});
				if (t) {
					if (a.I) a.u = a.v = a.I;
					a.ub = o.ub;
					a.ob = o.ob;
					a.Qd = e
				}
			}
			if (m.c && o.xb) {
				var p = a.c.Pb,
					s = (p.f || 0) + (p.B || 0),
					r = (p.e || 0) + (p.z || 0);
				a.e = (a.e || 0) + r;
				a.f = (a.f || 0) + s;
				a.c.e -= r;
				a.c.z -= r;
				a.c.f -= s;
				a.c.B -= s
			}
			if (a.c && b.Xd() && !a.c.f && !a.c.e && a.c.z == o.ub && a.c.B == o.ob) a.c = j;
			return a
		}
	};

	function n() {
		var a = this,
			d = [];

		function i(a, b) {
			d.push({
				xc: a,
				Cc: b
			})
		}

		function g(a, c) {
			b.j(d, function(b, e) {
				b.xc == a && b.Cc === c && d.splice(e, 1)
			})
		}
		a.Jb = a.addEventListener = i;
		a.removeEventListener = g;
		a.o = function(a) {
			var c = [].slice.call(arguments, 1);
			b.j(d, function(b) {
				b.xc == a && b.Cc.apply(h, c)
			})
		}
	}
	var m = function(z, C, i, J, M, L) {
		z = z || 0;
		var a = this,
			q, n, o, u, A = 0,
			G, H, F, B, y = 0,
			g = 0,
			m = 0,
			D, k, f, d, p, w = [],
			x;

		function O(a) {
			f += a;
			d += a;
			k += a;
			g += a;
			m += a;
			y += a
		}

		function t(o) {
			var h = o;
			if (p && (h >= d || h <= f)) h = ((h - f) % p + p) % p + f;
			if (!D || u || g != h) {
				var j = c.min(h, d);
				j = c.max(j, f);
				if (!D || u || j != m) {
					if (L) {
						var l = (j - k) / (C || 1);
						if (i.sd) l = 1 - l;
						var n = b.Hd(M, L, l, G, F, H, i);
						if (x) b.j(n, function(b, a) {
							x[a] && x[a](J, b)
						});
						else b.L(J, n)
					}
					a.lc(m - k, j - k);
					m = j;
					b.j(w, function(b, c) {
						var a = o < g ? w[w.length - c - 1] : b;
						a.nb(m - y)
					});
					var r = g,
						q = m;
					g = h;
					D = e;
					a.Ub(r, q)
				}
			}
		}

		function E(a, b, e) {
			b && a.Vb(d);
			if (!e) {
				f = c.min(f, a.hd() + y);
				d = c.max(d, a.tc() + y)
			}
			w.push(a)
		}
		var r = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
		if (b.tf() && b.md() < 7) r = j;
		r = r || function(a) {
			b.R(a, i.jb)
		};

		function I() {
			if (q) {
				var d = b.lb(),
					e = c.min(d - A, i.Nc),
					a = g + e * o;
				A = d;
				if (a * o >= n * o) a = n;
				t(a);
				if (!u && a * o >= n * o) K(B);
				else r(I)
			}
		}

		function s(h, i, j) {
			if (!q) {
				q = e;
				u = j;
				B = i;
				h = c.max(h, f);
				h = c.min(h, d);
				n = h;
				o = n < g ? -1 : 1;
				a.id();
				A = b.lb();
				r(I)
			}
		}

		function K(b) {
			if (q) {
				u = q = B = l;
				a.Lc();
				b && b()
			}
		}
		a.Kc = function(a, b, c) {
			s(a ? g + a : d, b, c)
		};
		a.Jc = s;
		a.tb = K;
		a.ae = function(a) {
			s(a)
		};
		a.ib = function() {
			return g
		};
		a.Oc = function() {
			return n
		};
		a.Ib = function() {
			return m
		};
		a.nb = t;
		a.xb = function(a) {
			t(g + a)
		};
		a.Sc = function() {
			return q
		};
		a.Pd = function(a) {
			p = a
		};
		a.Vb = O;
		a.Ic = function(a, b) {
			E(a, 0, b)
		};
		a.vc = function(a) {
			E(a, 1)
		};
		a.hd = function() {
			return f
		};
		a.tc = function() {
			return d
		};
		a.Ub = a.id = a.Lc = a.lc = b.Tc;
		a.cc = b.lb();
		i = b.J({
			jb: 16,
			Nc: 50
		}, i);
		p = i.Zc;
		x = i.Sd;
		f = k = z;
		d = z + C;
		H = i.Gc || {};
		F = i.C || {};
		G = b.Fd(i.i)
	};
	var p = new function() {
			var h = this;

			function g(b, a, c) {
				c.push(a);
				b[a] = b[a] || [];
				b[a].push(c)
			}
			h.Ud = function(d) {
				for (var e = [], a, b = 0; b < d.A; b++)
					for (a = 0; a < d.n; a++) g(e, c.ceil(1e5 * c.random()) % 13, [b, a]);
				return e
			}
		},
		s = function(k, s, q, u, z) {
			var d = this,
				v, g, a, y = 0,
				x = u.Vd,
				r, h = 8;

			function t(a) {
				if (a.f) a.Q = a.f;
				if (a.e) a.V = a.e;
				b.j(a, function(a) {
					b.bf(a) && t(a)
				})
			}

			function i(g, d) {
				var a = {
					jb: d,
					k: 1,
					R: 0,
					n: 1,
					A: 1,
					a: 0,
					I: 0,
					c: 0,
					xb: l,
					r: l,
					sd: l,
					Nd: p.Ud,
					D: {
						fb: 0,
						cb: 0
					},
					i: f.gd,
					Gc: {},
					Rb: [],
					C: {}
				};
				b.J(a, g);
				t(a);
				a.i = b.Fd(a.i);
				a.he = c.ceil(a.k / a.jb);
				a.lf = function(c, b) {
					c /= a.n;
					b /= a.A;
					var f = c + "x" + b;
					if (!a.Rb[f]) {
						a.Rb[f] = {
							Z: c,
							ab: b
						};
						for (var d = 0; d < a.n; d++)
							for (var e = 0; e < a.A; e++) a.Rb[f][e + "," + d] = {
								f: e * b,
								z: d * c + c,
								B: e * b + b,
								e: d * c
							}
					}
					return a.Rb[f]
				};
				if (a.gc) {
					a.gc = i(a.gc, d);
					a.r = e
				}
				return a
			}

			function o(B, h, a, w, o, m) {
				var z = this,
					u, v = {},
					i = {},
					n = [],
					f, d, s, q = a.D.fb || 0,
					r = a.D.cb || 0,
					g = a.lf(o, m),
					p = C(a),
					D = p.length - 1,
					t = a.k + a.R * D,
					x = w + t,
					k = a.r,
					y;
				x += 50;

				function C(a) {
					var b = a.Nd(a);
					return a.sd ? b.reverse() : b
				}
				z.Wc = x;
				z.ac = function(d) {
					d -= w;
					var e = d < t;
					if (e || y) {
						y = e;
						if (!k) d = t - d;
						var f = c.ceil(d / a.jb);
						b.j(i, function(a, e) {
							var d = c.max(f, a.We);
							d = c.min(d, a.length - 1);
							if (a.dd != d) {
								if (!a.dd && !k) b.H(n[e]);
								else d == a.jf && k && b.U(n[e]);
								a.dd = d;
								b.L(n[e], a[d])
							}
						})
					}
				};
				h = b.eb(h);
				b.Kb(h, j);
				if (b.sb()) {
					var E = !h["no-image"],
						A = b.ff(h);
					b.j(A, function(a) {
						(E || a["jssor-slider"]) && b.Fb(a, b.Fb(a), e)
					})
				}
				b.j(p, function(h, j) {
					b.j(h, function(G) {
						var K = G[0],
							J = G[1],
							t = K + "," + J,
							n = l,
							p = l,
							x = l;
						if (q && J % 2) {
							if (q & 3) n = !n;
							if (q & 12) p = !p;
							if (q & 16) x = !x
						}
						if (r && K % 2) {
							if (r & 3) n = !n;
							if (r & 12) p = !p;
							if (r & 16) x = !x
						}
						a.f = a.f || a.c & 4;
						a.B = a.B || a.c & 8;
						a.e = a.e || a.c & 1;
						a.z = a.z || a.c & 2;
						var E = p ? a.B : a.f,
							B = p ? a.f : a.B,
							D = n ? a.z : a.e,
							C = n ? a.e : a.z;
						a.c = E || B || D || C;
						s = {};
						d = {
							Q: 0,
							V: 0,
							a: 1,
							Z: o,
							ab: m
						};
						f = b.J({}, d);
						u = b.J({}, g[t]);
						if (a.a) d.a = 2 - a.a;
						if (a.W) {
							d.W = a.W;
							f.W = 0
						}
						var I = a.n * a.A > 1 || a.c;
						if (a.I || a.S) {
							var H = e;
							if (b.sb())
								if (a.n * a.A > 1) H = l;
								else I = l;
							if (H) {
								d.I = a.I ? a.I - 1 : 1;
								f.I = 1;
								if (b.sb() || b.kd()) d.I = c.min(d.I, 2);
								var N = a.S || 0;
								d.S = N * 360 * (x ? -1 : 1);
								f.S = 0
							}
						}
						if (I) {
							var h = u.Pb = {};
							if (a.c) {
								var w = a.Cf || 1;
								if (E && B) {
									h.f = g.ab / 2 * w;
									h.B = -h.f
								} else if (E) h.B = -g.ab * w;
								else if (B) h.f = g.ab * w;
								if (D && C) {
									h.e = g.Z / 2 * w;
									h.z = -h.e
								} else if (D) h.z = -g.Z * w;
								else if (C) h.e = g.Z * w
							}
							s.c = u;
							f.c = g[t]
						}
						var L = n ? 1 : -1,
							M = p ? 1 : -1;
						if (a.x) d.V += o * a.x * L;
						if (a.y) d.Q += m * a.y * M;
						b.j(d, function(a, c) {
							if (b.Xc(a))
								if (a != f[c]) s[c] = a - f[c]
						});
						v[t] = k ? f : d;
						var F = a.he,
							A = c.round(j * a.R / a.jb);
						i[t] = new Array(A);
						i[t].We = A;
						i[t].jf = A + F - 1;
						for (var z = 0; z <= F; z++) {
							var y = b.Hd(f, s, z / F, a.i, a.C, a.Gc, {
								xb: a.xb,
								ub: o,
								ob: m
							});
							y.W = y.W || 1;
							i[t].push(y)
						}
					})
				});
				p.reverse();
				b.j(p, function(a) {
					b.j(a, function(c) {
						var f = c[0],
							e = c[1],
							d = f + "," + e,
							a = h;
						if (e || f) a = b.eb(h);
						b.L(a, v[d]);
						b.pb(a, "hidden");
						b.G(a, "absolute");
						B.sf(a);
						n[d] = a;
						b.H(a, !k)
					})
				})
			}

			function w() {
				var b = this,
					c = 0;
				m.call(b, 0, v);
				b.Ub = function(d, b) {
					if (b - c > h) {
						c = b;
						a && a.ac(b);
						g && g.ac(b)
					}
				};
				b.Qc = r
			}
			d.uf = function() {
				var a = 0,
					b = u.Db,
					d = b.length;
				if (x) a = y++ % d;
				else a = c.floor(c.random() * d);
				b[a] && (b[a].vb = a);
				return b[a]
			};
			d.ef = function(w, x, l, m, b) {
				r = b;
				b = i(b, h);
				var j = m.Ed,
					f = l.Ed;
				j["no-image"] = !m.Qb;
				f["no-image"] = !l.Qb;
				var n = j,
					p = f,
					u = b,
					e = b.gc || i({}, h);
				if (!b.r) {
					n = f;
					p = j
				}
				var t = e.Vb || 0;
				g = new o(k, p, e, c.max(t - e.jb, 0), s, q);
				a = new o(k, n, u, c.max(e.jb - t, 0), s, q);
				g.ac(0);
				a.ac(0);
				v = c.max(g.Wc, a.Wc);
				d.vb = w
			};
			d.zb = function() {
				k.zb();
				g = j;
				a = j
			};
			d.Xe = function() {
				var b = j;
				if (a) b = new w;
				return b
			};
			if (b.sb() || b.kd() || z && b.zf() < 537) h = 16;
			n.call(d);
			m.call(d, -1e7, 1e7)
		},
		i = function(p, fc) {
			var d = this;

			function Bc() {
				var a = this;
				m.call(a, -1e8, 2e8);
				a.yf = function() {
					var b = a.Ib(),
						d = c.floor(b),
						f = t(d),
						e = b - c.floor(b);
					return {
						vb: f,
						xf: d,
						Ab: e
					}
				};
				a.Ub = function(b, a) {
					var f = c.floor(a);
					if (f != a && a > b) f++;
					Ub(f, e);
					d.o(i.Af, t(a), t(b), a, b)
				}
			}

			function Ac() {
				var a = this;
				m.call(a, 0, 0, {
					Zc: q
				});
				b.j(C, function(b) {
					D & 1 && b.Pd(q);
					a.vc(b);
					b.Vb(ib / bc)
				})
			}

			function zc() {
				var a = this,
					b = Tb.bb;
				m.call(a, -1, 2, {
					i: f.Ec,
					Sd: {
						Ab: Zb
					},
					Zc: q
				}, b, {
					Ab: 1
				}, {
					Ab: -2
				});
				a.Mb = b
			}

			function nc(o, n) {
				var b = this,
					f, g, h, k, c;
				m.call(b, -1e8, 2e8, {
					Nc: 100
				});
				b.id = function() {
					M = e;
					R = j;
					d.o(i.vf, t(w.ib()), w.ib())
				};
				b.Lc = function() {
					M = l;
					k = l;
					var a = w.yf();
					d.o(i.rf, t(w.ib()), w.ib());
					!a.Ab && Dc(a.xf, s)
				};
				b.Ub = function(i, e) {
					var b;
					if (k) b = c;
					else {
						b = g;
						if (h) {
							var d = e / h;
							b = a.of(d) * (g - f) + f
						}
					}
					w.nb(b)
				};
				b.Wb = function(a, d, c, e) {
					f = a;
					g = d;
					h = c;
					w.nb(a);
					b.nb(0);
					b.Jc(c, e)
				};
				b.df = function(a) {
					k = e;
					c = a;
					b.Kc(a, j, e)
				};
				b.Se = function(a) {
					c = a
				};
				w = new Bc;
				w.Ic(o);
				w.Ic(n)
			}

			function pc() {
				var c = this,
					a = Xb();
				b.O(a, 0);
				b.Y(a, "pointerEvents", "none");
				c.bb = a;
				c.sf = function(c) {
					b.F(a, c);
					b.H(a)
				};
				c.zb = function() {
					b.U(a);
					b.pc(a)
				}
			}

			function xc(o, g) {
				var f = this,
					r, L, v, k, y = [],
					x, B, W, G, Q, F, h, w, p;
				m.call(f, -u, u + 1, {});

				function E(a) {
					r && r.xd();
					T(o, a, 0);
					F = e;
					r = new I.T(o, I, b.Kd(b.p(o, "idle")) || lc);
					r.nb(0)
				}

				function Z() {
					r.cc < I.cc && E()
				}

				function M(p, r, o) {
					if (!G) {
						G = e;
						if (k && o) {
							var h = o.width,
								c = o.height,
								n = h,
								m = c;
							if (h && c && a.Eb) {
								if (a.Eb & 3 && (!(a.Eb & 4) || h > K || c > J)) {
									var j = l,
										q = K / J * c / h;
									if (a.Eb & 1) j = q > 1;
									else if (a.Eb & 2) j = q < 1;
									n = j ? h * J / c : K;
									m = j ? J : c * K / h
								}
								b.q(k, n);
								b.s(k, m);
								b.K(k, (J - m) / 2);
								b.N(k, (K - n) / 2)
							}
							b.G(k, "absolute");
							d.o(i.Ie, g)
						}
					}
					b.U(r);
					p && p(f)
				}

				function Y(b, c, d, e) {
					if (e == R && s == g && N)
						if (!Cc) {
							var a = t(b);
							A.ef(a, g, c, f, d);
							c.we();
							U.Vb(a - U.hd() - 1);
							U.nb(a);
							z.Wb(b, b, 0)
						}
				}

				function cb(b) {
					if (b == R && s == g) {
						if (!h) {
							var a = j;
							if (A)
								if (A.vb == g) a = A.Xe();
								else A.zb();
							Z();
							h = new vc(o, g, a, r);
							h.nd(p)
						}!h.Sc() && h.wc()
					}
				}

				function S(d, e, l) {
					if (d == g) {
						if (d != e) C[e] && C[e].ve();
						else !l && h && h.ue();
						p && p.Bd();
						var m = R = b.lb();
						f.Cb(b.X(j, cb, m))
					} else {
						var k = c.min(g, d),
							i = c.max(g, d),
							o = c.min(i - k, k + q - i),
							n = u + a.te - 1;
						(!Q || o <= n) && f.Cb()
					}
				}

				function db() {
					if (s == g && h) {
						h.tb();
						p && p.se();
						p && p.re();
						h.Dd()
					}
				}

				function eb() {
					s == g && h && h.tb()
				}

				function ab(a) {
					!P && d.o(i.qe, g, a)
				}

				function O() {
					p = w.pInstance;
					h && h.nd(p)
				}
				f.Cb = function(c, a) {
					a = a || v;
					if (y.length && !G) {
						b.H(a);
						if (!W) {
							W = e;
							d.o(i.pe, g);
							b.j(y, function(a) {
								if (!b.M(a, "src")) {
									a.src = b.p(a, "src2");
									b.gb(a, a["display-origin"])
								}
							})
						}
						b.Ld(y, k, b.X(j, M, c, a))
					} else M(c, a)
				};
				f.oe = function() {
					var h = g;
					if (a.Ad < 0) h -= q;
					var d = h + a.Ad * tc;
					if (D & 2) d = t(d);
					if (!(D & 1)) d = c.max(0, c.min(d, q - u));
					if (d != g) {
						if (A) {
							var e = A.uf(q);
							if (e) {
								var i = R = b.lb(),
									f = C[t(d)];
								return f.Cb(b.X(j, Y, d, f, e, i), v)
							}
						}
						bb(d)
					}
				};
				f.Dc = function() {
					S(g, g, e)
				};
				f.ve = function() {
					p && p.se();
					p && p.re();
					f.od();
					h && h.ne();
					h = j;
					E()
				};
				f.we = function() {
					b.U(o)
				};
				f.od = function() {
					b.H(o)
				};
				f.me = function() {
					p && p.Bd()
				};

				function T(a, c, d) {
					if (b.M(a, "jssor-slider")) return;
					if (!F) {
						if (a.tagName == "IMG") {
							y.push(a);
							if (!b.M(a, "src")) {
								Q = e;
								a["display-origin"] = b.gb(a);
								b.U(a)
							}
						}
						b.sb() && b.O(a, (b.O(a) || 0) + 1)
					}
					var f = b.Zb(a);
					b.j(f, function(f) {
						var h = f.tagName,
							i = b.p(f, "u");
						if (i == "player" && !w) {
							w = f;
							if (w.pInstance) O();
							else b.g(w, "dataavailable", O)
						}
						if (i == "caption") {
							if (c) {
								b.Mc(f, b.p(f, "to"));
								b.Ue(f, b.p(f, "bf"));
								b.p(f, "3d") && b.af(f, "preserve-3d")
							} else if (!b.rd()) {
								var g = b.eb(f, l, e);
								b.Ob(g, f, a);
								b.Lb(f, a);
								f = g;
								c = e
							}
						} else if (!F && !d && !k) {
							if (h == "A") {
								if (b.p(f, "u") == "image") k = b.gf(f, "IMG");
								else k = b.E(f, "image", e);
								if (k) {
									x = f;
									b.gb(x, "block");
									b.L(x, V);
									B = b.eb(x, e);
									b.G(x, "relative");
									b.Fb(B, 0);
									b.Y(B, "backgroundColor", "#000")
								}
							} else if (h == "IMG" && b.p(f, "u") == "image") k = f;
							if (k) {
								k.border = 0;
								b.L(k, V)
							}
						}
						T(f, c, d + 1)
					})
				}
				f.lc = function(c, b) {
					var a = u - b;
					Zb(L, a)
				};
				f.vb = g;
				n.call(f);
				b.cf(o, b.p(o, "p"));
				b.kf(o, b.p(o, "po"));
				var H = b.E(o, "thumb", e);
				if (H) {
					f.le = b.eb(H);
					b.U(H)
				}
				b.H(o);
				v = b.eb(fb);
				b.O(v, 1e3);
				b.g(o, "click", ab);
				E(e);
				f.Qb = k;
				f.Hc = B;
				f.Ed = o;
				f.Mb = L = o;
				b.F(L, v);
				d.Jb(203, S);
				d.Jb(28, eb);
				d.Jb(24, db)
			}

			function vc(y, g, p, q) {
				var a = this,
					n = 0,
					u = 0,
					h, j, f, c, k, t, r, o = C[g];
				m.call(a, 0, 0);

				function v() {
					b.pc(L);
					cc && k && o.Hc && b.F(L, o.Hc);
					b.H(L, !k && o.Qb)
				}

				function w() {
					a.wc()
				}

				function x(b) {
					r = b;
					a.tb();
					a.wc()
				}
				a.wc = function() {
					var b = a.Ib();
					if (!B && !M && !r && s == g) {
						if (!b) {
							if (h && !k) {
								k = e;
								a.Dd(e);
								d.o(i.ke, g, n, u, h, c)
							}
							v()
						}
						var l, p = i.Fc;
						if (b != c)
							if (b == f) l = c;
							else if (b == j) l = f;
						else if (!b) l = j;
						else l = a.Oc();
						d.o(p, g, b, n, j, f, c);
						var m = N && (!E || F);
						if (b == c)(f != c && !(E & 12) || m) && o.oe();
						else(m || b != f) && a.Jc(l, w)
					}
				};
				a.ue = function() {
					f == c && f == a.Ib() && a.nb(j)
				};
				a.ne = function() {
					A && A.vb == g && A.zb();
					var b = a.Ib();
					b < c && d.o(i.Fc, g, -b - 1, n, j, f, c)
				};
				a.Dd = function(a) {
					p && b.pb(jb, a && p.Qc.Jf ? "" : "hidden")
				};
				a.lc = function(b, a) {
					if (k && a >= h) {
						k = l;
						v();
						o.od();
						A.zb();
						d.o(i.ie, g, n, u, h, c)
					}
					d.o(i.xe, g, a, n, j, f, c)
				};
				a.nd = function(a) {
					if (a && !t) {
						t = a;
						a.Jb($JssorPlayer$.fe, x)
					}
				};
				p && a.vc(p);
				h = a.tc();
				a.vc(q);
				j = h + q.ed;
				f = h + q.cd;
				c = a.tc()
			}

			function Kb(a, c, d) {
				b.N(a, c);
				b.K(a, d)
			}

			function Zb(c, b) {
				var a = x > 0 ? x : eb,
					d = zb * b * (a & 1),
					e = Ab * b * (a >> 1 & 1);
				Kb(c, d, e)
			}

			function Pb() {
				pb = M;
				Ib = z.Oc();
				G = w.ib()
			}

			function gc() {
				Pb();
				if (B || !F && E & 12) {
					z.tb();
					d.o(i.ye)
				}
			}

			function ec(f) {
				if (!B && (F || !(E & 12)) && !z.Sc()) {
					var d = w.ib(),
						b = c.ceil(G);
					if (f && c.abs(H) >= a.ad) {
						b = c.ceil(d);
						b += hb
					}
					if (!(D & 1)) b = c.min(q - u, c.max(b, 0));
					var e = c.abs(b - d);
					e = 1 - c.pow(1 - e, 5);
					if (!P && pb) z.ae(Ib);
					else if (d == b) {
						sb.me();
						sb.Dc()
					} else z.Wb(d, b, e * Vb)
				}
			}

			function Hb(a) {
				!b.p(b.ic(a), "nodrag") && b.Xb(a)
			}

			function rc(a) {
				Yb(a, 1)
			}

			function Yb(a, c) {
				a = b.jd(a);
				var k = b.ic(a);
				if (!O && !b.p(k, "nodrag") && sc() && (!c || a.touches.length == 1)) {
					B = e;
					yb = l;
					R = j;
					b.g(g, c ? "touchmove" : "mousemove", Bb);
					b.lb();
					P = 0;
					gc();
					if (!pb) x = 0;
					if (c) {
						var h = a.touches[0];
						ub = h.clientX;
						vb = h.clientY
					} else {
						var f = b.Id(a);
						ub = f.x;
						vb = f.y
					}
					H = 0;
					gb = 0;
					hb = 0;
					d.o(i.ze, t(G), G, a)
				}
			}

			function Bb(d) {
				if (B) {
					d = b.jd(d);
					var f;
					if (d.type != "mousemove") {
						var l = d.touches[0];
						f = {
							x: l.clientX,
							y: l.clientY
						}
					} else f = b.Id(d);
					if (f) {
						var j = f.x - ub,
							k = f.y - vb;
						if (c.floor(G) != G) x = x || eb & O;
						if ((j || k) && !x) {
							if (O == 3)
								if (c.abs(k) > c.abs(j)) x = 2;
								else x = 1;
							else x = O;
							if (mb && x == 1 && c.abs(k) - c.abs(j) > 3) yb = e
						}
						if (x) {
							var a = k,
								i = Ab;
							if (x == 1) {
								a = j;
								i = zb
							}
							if (!(D & 1)) {
								if (a > 0) {
									var g = i * s,
										h = a - g;
									if (h > 0) a = g + c.sqrt(h) * 5
								}
								if (a < 0) {
									var g = i * (q - u - s),
										h = -a - g;
									if (h > 0) a = -g - c.sqrt(h) * 5
								}
							}
							if (H - gb < -2) hb = 0;
							else if (H - gb > 2) hb = -1;
							gb = H;
							H = a;
							rb = G - H / i / (Y || 1);
							if (H && x && !yb) {
								b.Xb(d);
								if (!M) z.df(rb);
								else z.Se(rb)
							}
						}
					}
				}
			}

			function ab() {
				qc();
				if (B) {
					B = l;
					b.lb();
					b.P(g, "mousemove", Bb);
					b.P(g, "touchmove", Bb);
					P = H;
					z.tb();
					var a = w.ib();
					d.o(i.Ae, t(a), a, t(G), G);
					E & 12 && Pb();
					ec(e)
				}
			}

			function jc(c) {
				if (P) {
					b.nf(c);
					var a = b.ic(c);
					while (a && v !== a) {
						a.tagName == "A" && b.Xb(c);
						try {
							a = a.parentNode
						} catch (d) {
							break
						}
					}
				}
			}

			function Jb(a) {
				C[s];
				s = t(a);
				sb = C[s];
				Ub(a);
				return s
			}

			function Dc(a, b) {
				x = 0;
				Jb(a);
				d.o(i.Qe, t(a), b)
			}

			function Ub(a, c) {
				wb = a;
				b.j(S, function(b) {
					b.Ac(t(a), a, c)
				})
			}

			function sc() {
				var b = i.Vc || 0,
					a = X;
				if (mb) a & 1 && (a &= 1);
				i.Vc |= a;
				return O = a & ~b
			}

			function qc() {
				if (O) {
					i.Vc &= ~X;
					O = 0
				}
			}

			function Xb() {
				var a = b.hb();
				b.L(a, V);
				b.G(a, "absolute");
				return a
			}

			function t(a) {
				return (a % q + q) % q
			}

			function kc(b, d) {
				if (d)
					if (!D) {
						b = c.min(c.max(b + wb, 0), q - u);
						d = l
					} else if (D & 2) {
					b = t(b + wb);
					d = l
				}
				bb(b, a.uc, d)
			}

			function xb() {
				b.j(S, function(a) {
					a.hc(a.Yb.If <= F)
				})
			}

			function hc() {
				if (!F) {
					F = 1;
					xb();
					if (!B) {
						E & 12 && ec();
						E & 3 && C[s].Dc()
					}
				}
			}

			function Ec() {
				if (F) {
					F = 0;
					xb();
					B || !(E & 12) || gc()
				}
			}

			function ic() {
				V = {
					Z: K,
					ab: J,
					f: 0,
					e: 0
				};
				b.j(T, function(a) {
					b.L(a, V);
					b.G(a, "absolute");
					b.pb(a, "hidden");
					b.U(a)
				});
				b.L(fb, V)
			}

			function ob(b, a) {
				bb(b, a, e)
			}

			function bb(g, f, j) {
				if (Rb && (!B && (F || !(E & 12)) || a.bd)) {
					M = e;
					B = l;
					z.tb();
					if (f == k) f = Vb;
					var d = Cb.Ib(),
						b = g;
					if (j) {
						b = d + g;
						if (g > 0) b = c.ceil(b);
						else b = c.floor(b)
					}
					if (D & 2) b = t(b);
					if (!(D & 1)) b = c.max(0, c.min(b, q - u));
					var i = (b - d) % q;
					b = d + i;
					var h = d == b ? 0 : f * c.abs(i);
					h = c.min(h, f * u * 1.5);
					z.Wb(d, b, h || 1)
				}
			}
			d.Pe = bb;
			d.Kc = function() {
				if (!N) {
					N = e;
					C[s] && C[s].Dc()
				}
			};
			d.Ne = function() {
				return P
			};

			function W() {
				return b.q(y || p)
			}

			function lb() {
				return b.s(y || p)
			}
			d.ub = W;
			d.ob = lb;

			function Eb(c, d) {
				if (c == k) return b.q(p);
				if (!y) {
					var a = b.hb(g);
					b.Rc(a, b.Rc(p));
					b.Bb(a, b.Bb(p));
					b.gb(a, "block");
					b.G(a, "relative");
					b.K(a, 0);
					b.N(a, 0);
					b.pb(a, "visible");
					y = b.hb(g);
					b.G(y, "absolute");
					b.K(y, 0);
					b.N(y, 0);
					b.q(y, b.q(p));
					b.s(y, b.s(p));
					b.Mc(y, "0 0");
					b.F(y, a);
					var h = b.Zb(p);
					b.F(p, y);
					b.Y(p, "backgroundImage", "");
					b.j(h, function(c) {
						b.F(b.p(c, "noscale") ? p : a, c);
						b.p(c, "autocenter") && Mb.push(c)
					})
				}
				Y = c / (d ? b.s : b.q)(y);
				b.ge(y, Y);
				var f = d ? Y * W() : c,
					e = d ? c : Y * lb();
				b.q(p, f);
				b.s(p, e);
				b.j(Mb, function(a) {
					var c = b.Od(b.p(a, "autocenter"));
					b.Rd(a, c)
				})
			}
			d.Me = Eb;
			d.qd = function(a) {
				var d = c.ceil(t(ib / bc)),
					b = t(a - s + d);
				if (b > u) {
					if (a - s > q / 2) a -= q;
					else if (a - s <= -q / 2) a += q
				} else a = s + b - d;
				return a
			};
			n.call(d);
			d.bb = p = b.yb(p);
			var a = b.J({
				Eb: 0,
				te: 1,
				dc: 1,
				ec: 0,
				fc: l,
				Nb: 1,
				Gb: e,
				bd: e,
				Ad: 1,
				pd: 3e3,
				ud: 1,
				uc: 500,
				of: f.Ce,
				ad: 20,
				yd: 0,
				n: 1,
				kc: 0,
				Le: 1,
				mc: 1,
				zd: 1
			}, fc);
			a.Gb = a.Gb && b.wf();
			if (a.Ke != k) a.pd = a.Ke;
			if (a.Re != k) a.kc = a.Re;
			var eb = a.mc & 3,
				tc = (a.mc & 4) / -4 || 1,
				kb = a.Oe,
				I = b.J({
					T: r,
					Gb: a.Gb
				}, a.Bf);
			I.Db = I.Db || I.Hf;
			var Fb = a.Df,
				Z = a.Je,
				db = a.He,
				Q = !a.Le,
				y, v = b.E(p, "slides", Q),
				fb = b.E(p, "loading", Q) || b.hb(g),
				Nb = b.E(p, "navigator", Q),
				dc = b.E(p, "arrowleft", Q),
				ac = b.E(p, "arrowright", Q),
				Lb = b.E(p, "thumbnavigator", Q),
				oc = b.q(v),
				mc = b.s(v),
				V, T = [],
				uc = b.Zb(v);
			b.j(uc, function(a) {
				if (a.tagName == "DIV" && !b.p(a, "u")) T.push(a);
				else b.sb() && b.O(a, (b.O(a) || 0) + 1)
			});
			var s = -1,
				wb, sb, q = T.length,
				K = a.Ge || oc,
				J = a.Fe || mc,
				Wb = a.yd,
				zb = K + Wb,
				Ab = J + Wb,
				bc = eb & 1 ? zb : Ab,
				u = c.min(a.n, q),
				jb, x, O, yb, S = [],
				Qb, Sb, Ob, cc, Cc, N, E = a.ud,
				lc = a.pd,
				Vb = a.uc,
				qb, tb, ib, Rb = u < q,
				D = Rb ? a.Nb : 0,
				X, P, F = 1,
				M, B, R, ub = 0,
				vb = 0,
				H, gb, hb, Cb, w, U, z, Tb = new pc,
				Y, Mb = [];
			if (q) {
				if (a.Gb) Kb = function(a, c, d) {
					b.Kb(a, {
						qb: c,
						rb: d
					})
				};
				N = a.fc;
				d.Yb = fc;
				ic();
				b.M(p, "jssor-slider", e);
				b.O(v, b.O(v) || 0);
				b.G(v, "absolute");
				jb = b.eb(v, e);
				b.Ob(jb, v);
				if (kb) {
					cc = kb.Ef;
					qb = kb.T;
					tb = u == 1 && q > 1 && qb && (!b.rd() || b.md() >= 8)
				}
				ib = tb || u >= q || !(D & 1) ? 0 : a.kc;
				X = (u > 1 || ib ? eb : -1) & a.zd;
				var Gb = v,
					C = [],
					A, L, Db = b.qf(),
					mb = Db.pf,
					G, pb, Ib, rb;
				Db.vd && b.Y(Gb, Db.vd, ([j, "pan-y", "pan-x", "none"])[X] || "");
				U = new zc;
				if (tb) A = new qb(Tb, K, J, kb, mb);
				b.F(jb, U.Mb);
				b.pb(v, "hidden");
				L = Xb();
				b.Y(L, "backgroundColor", "#000");
				b.Fb(L, 0);
				b.Ob(L, Gb.firstChild, Gb);
				for (var cb = 0; cb < T.length; cb++) {
					var wc = T[cb],
						yc = new xc(wc, cb);
					C.push(yc)
				}
				b.U(fb);
				Cb = new Ac;
				z = new nc(Cb, U);
				if (X) {
					b.g(v, "mousedown", Yb);
					b.g(v, "touchstart", rc);
					b.g(v, "dragstart", Hb);
					b.g(v, "selectstart", Hb);
					b.g(g, "mouseup", ab);
					b.g(g, "touchend", ab);
					b.g(g, "touchcancel", ab);
					b.g(h, "blur", ab)
				}
				E &= mb ? 10 : 5;
				if (Nb && Fb) {
					Qb = new Fb.T(Nb, Fb, W(), lb());
					S.push(Qb)
				}
				if (Z && dc && ac) {
					Z.Nb = D;
					Z.n = u;
					Sb = new Z.T(dc, ac, Z, W(), lb());
					S.push(Sb)
				}
				if (Lb && db) {
					db.ec = a.ec;
					Ob = new db.T(Lb, db);
					S.push(Ob)
				}
				b.j(S, function(a) {
					a.sc(q, C, fb);
					a.Jb(o.qc, kc)
				});
				b.Y(p, "visibility", "visible");
				Eb(W());
				b.g(v, "click", jc, e);
				b.g(p, "mouseout", b.rc(hc, p));
				b.g(p, "mouseover", b.rc(Ec, p));
				xb();
				a.dc && b.g(g, "keydown", function(b) {
					if (b.keyCode == 37) ob(-a.dc);
					else b.keyCode == 39 && ob(a.dc)
				});
				var nb = a.ec;
				if (!(D & 1)) nb = c.max(0, c.min(nb, q - u));
				z.Wb(nb, nb, 0)
			}
		};
	i.qe = 21;
	i.ze = 22;
	i.Ae = 23;
	i.vf = 24;
	i.rf = 25;
	i.pe = 26;
	i.Ie = 27;
	i.ye = 28;
	i.Af = 202;
	i.Qe = 203;
	i.ke = 206;
	i.ie = 207;
	i.xe = 208;
	i.Fc = 209;
	var o = {
		qc: 1
	};
	var t = function(a, g, h) {
			var c = this;
			n.call(c);
			var r, q, d, f, i;
			b.q(a);
			b.s(a);

			function k(a) {
				c.o(o.qc, a, e)
			}

			function p(c) {
				b.H(a, c || !h.Nb && d == 0);
				b.H(g, c || !h.Nb && d >= q - h.n);
				r = c
			}
			c.Ac = function(b, a, c) {
				if (c) d = a;
				else {
					d = b;
					p(r)
				}
			};
			c.hc = p;
			var m;
			c.sc = function(c) {
				q = c;
				d = 0;
				if (!m) {
					b.g(a, "click", b.X(j, k, -i));
					b.g(g, "click", b.X(j, k, i));
					b.Bc(a);
					b.Bc(g);
					m = e
				}
			};
			c.Yb = f = b.J({
				Be: 1
			}, h);
			i = f.Be;
			if (f.yc == l) {
				b.M(a, "noscale", e);
				b.M(g, "noscale", e)
			}
			if (f.Hb) {
				b.M(a, "autocenter", f.Hb);
				b.M(g, "autocenter", f.Hb)
			}
		},
		q = function(g, B) {
			var h = this,
				z, p, a, v = [],
				x, w, d, q, r, u, t, m, s, f, k;
			n.call(h);
			g = b.yb(g);

			function A(n, f) {
				var g = this,
					c, m, l;

				function q() {
					m.de(p == f)
				}

				function i(e) {
					if (e || !s.Ne()) {
						var a = d - f % d,
							b = s.qd((f + a) / d - 1),
							c = b * d + d - a;
						h.o(o.qc, c)
					}
				}
				g.vb = f;
				g.Uc = q;
				l = n.le || n.Qb || b.hb();
				g.Mb = c = b.Jd(k, "thumbnailtemplate", l, e);
				m = b.Bc(c);
				a.oc & 1 && b.g(c, "click", b.X(j, i, 0));
				a.oc & 2 && b.g(c, "mouseover", b.rc(b.X(j, i, 1), c))
			}
			h.Ac = function(b, e, f) {
				var a = p;
				p = b;
				a != -1 && v[a].Uc();
				v[b].Uc();
				!f && s.Pe(s.qd(c.floor(e / d)))
			};
			h.hc = function(a) {
				b.H(g, a)
			};
			var y;
			h.sc = function(D, C) {
				if (!y) {
					z = D;
					c.ceil(z / d);
					p = -1;
					m = c.min(m, C.length);
					var h = a.bc & 1,
						n = u + (u + q) * (d - 1) * (1 - h),
						k = t + (t + r) * (d - 1) * h,
						B = n + (n + q) * (m - 1) * h,
						o = k + (k + r) * (m - 1) * (1 - h);
					b.G(f, "absolute");
					b.pb(f, "hidden");
					a.Hb & 1 && b.N(f, (x - B) / 2);
					a.Hb & 2 && b.K(f, (w - o) / 2);
					b.q(f, B);
					b.s(f, o);
					var j = [];
					b.j(C, function(l, g) {
						var i = new A(l, g),
							e = i.Mb,
							a = c.floor(g / d),
							k = g % d;
						b.N(e, (u + q) * k * (1 - h));
						b.K(e, (t + r) * k * h);
						if (!j[a]) {
							j[a] = b.hb();
							b.F(f, j[a])
						}
						b.F(j[a], e);
						v.push(i)
					});
					var E = b.J({
						fc: l,
						bd: l,
						Ge: n,
						Fe: k,
						yd: q * h + r * (1 - h),
						ad: 12,
						uc: 200,
						ud: 1,
						mc: a.bc,
						zd: a.Ff || a.Gf ? 0 : a.bc
					}, a);
					s = new i(g, E);
					y = e
				}
			};
			h.Yb = a = b.J({
				nc: 0,
				jc: 0,
				n: 1,
				bc: 1,
				Hb: 3,
				oc: 1
			}, B);
			x = b.q(g);
			w = b.s(g);
			f = b.E(g, "slides", e);
			k = b.E(f, "prototype");
			u = b.q(k);
			t = b.s(k);
			b.Lb(k, f);
			d = a.A || 1;
			q = a.nc;
			r = a.jc;
			m = a.n;
			a.yc == l && b.M(g, "noscale", e)
		};

	function r(e, d, c) {
		var a = this;
		m.call(a, 0, c);
		a.xd = b.Tc;
		a.ed = 0;
		a.cd = c
	}
	jssor_1_slider_init = function() {
		var g = [{
				k: 1200,
				x: .3,
				C: {
					e: [.3, .7]
				},
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: -.3,
				r: e,
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: -.3,
				C: {
					e: [.3, .7]
				},
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				r: e,
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				C: {
					f: [.3, .7]
				},
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: -.3,
				r: e,
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: -.3,
				C: {
					f: [.3, .7]
				},
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				r: e,
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				n: 2,
				C: {
					e: [.3, .7]
				},
				D: {
					fb: 3
				},
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				n: 2,
				r: e,
				D: {
					fb: 3
				},
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				A: 2,
				C: {
					f: [.3, .7]
				},
				D: {
					cb: 12
				},
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				A: 2,
				r: e,
				D: {
					cb: 12
				},
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				n: 2,
				C: {
					f: [.3, .7]
				},
				D: {
					fb: 12
				},
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				y: -.3,
				n: 2,
				r: e,
				D: {
					fb: 12
				},
				i: {
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				A: 2,
				C: {
					e: [.3, .7]
				},
				D: {
					cb: 3
				},
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: -.3,
				A: 2,
				r: e,
				D: {
					cb: 3
				},
				i: {
					e: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				y: .3,
				n: 2,
				A: 2,
				C: {
					e: [.3, .7],
					f: [.3, .7]
				},
				D: {
					fb: 3,
					cb: 12
				},
				i: {
					e: d.m,
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				y: .3,
				n: 2,
				A: 2,
				C: {
					e: [.3, .7],
					f: [.3, .7]
				},
				r: e,
				D: {
					fb: 3,
					cb: 12
				},
				i: {
					e: d.m,
					f: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				R: 20,
				c: 3,
				i: {
					c: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				R: 20,
				c: 3,
				r: e,
				i: {
					c: d.ld,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				R: 20,
				c: 12,
				i: {
					c: d.m,
					a: d.l
				},
				a: 2
			}, {
				k: 1200,
				R: 20,
				c: 12,
				r: e,
				i: {
					c: d.ld,
					a: d.l
				},
				a: 2
			}],
			j = {
				fc: e,
				Oe: {
					T: s,
					Db: g,
					Vd: 1
				},
				Je: {
					T: t
				},
				He: {
					T: q,
					n: 10,
					nc: 8,
					jc: 8,
					kc: 360
				}
			},
			f = new i("jssor_1", j);

		function k() {
			var d = b.hf(f.bb, "slides");
			if (d) {
				var c = d[1];
				if (c) {
					var a = b.E(c, "ad");
					if (!a) {
						a = b.hb();
						b.Bb(a, "position:absolute;top:0px;right:0px;width:80px;height:20px;background-color:rgba(255,255,140,0.5);font-size: 12px;line-height: 20px;text-align:center;");
						b.Ze(a, "Jssor Slider");
						b.F(c, a)
					}
				}
			}
		}
		k();

		function a() {
			var b = f.bb.parentNode.clientWidth;
			if (b) {
				b = c.min(b, 800);
				f.Me(b)
			} else h.setTimeout(a, 30)
		}
		a();
		b.g(h, "load", a);
		b.g(h, "resize", a);
		b.g(h, "orientationchange", a)
	}
})(window, document, Math, null, true, false)
