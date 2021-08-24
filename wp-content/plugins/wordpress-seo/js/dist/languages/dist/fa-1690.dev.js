"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var t = {};

  function r(o) {
    if (t[o]) return t[o].exports;
    var n = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, o) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (r.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      r.d(o, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return o;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 49);
}([function (e, t) {
  e.exports = window.yoast.analysis;
}, function (e, t) {
  function r(t) {
    return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(t);
  }

  e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},, function (e, t) {
  e.exports = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t, r) {
  var o = r(8);
  e.exports = function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && o(e, t);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t, r) {
  var o = r(6)["default"],
      n = r(9);
  e.exports = function (e, t) {
    return !t || "object" !== o(t) && "function" != typeof t ? n(e) : t;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  function r(t) {
    return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = r = function r(e) {
      return _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = r = function r(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0), r(t);
  }

  e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},, function (e, t) {
  function r(t, o) {
    return e.exports = r = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(t, o);
  }

  e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  e.exports = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},, function (e, t, r) {
  var o = r(14),
      n = r(15),
      u = r(13),
      s = r(16);
  e.exports = function (e) {
    return o(e) || n(e) || u(e) || s();
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  e.exports = function (e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var r = 0, o = new Array(t); r < t; r++) {
      o[r] = e[r];
    }

    return o;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t, r) {
  var o = r(12);
  e.exports = function (e, t) {
    if (e) {
      if ("string" == typeof e) return o(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0;
    }
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t, r) {
  var o = r(12);
  e.exports = function (e) {
    if (Array.isArray(e)) return o(e);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  e.exports = function (e) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  e.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, "default", function () {
    return m;
  });

  var o = r(3),
      n = r.n(o),
      u = r(4),
      s = r.n(u),
      p = r(5),
      a = r.n(p),
      i = r(1),
      c = r.n(i),
      f = r(0),
      l = [].concat(["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه", "ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده", "بیست", "صد", "هزار", "میلیون", "میلیارد"], ["اول", "اوّل", "دوم", "سوم", "چهارم", "پنجم", "ششم", "هفتم", "هشتم", "نهم", "دهم", "یازدهم", "دوازدهم", "سیزدهم", "چهاردهم", "پانزدهم", "شانزدهم", "هفدهم", "هجدهم", "نوزدهم", "بیستم"], ["مرا", "من را", "من‌را", "به من", "تو را", "شما را", "شما", "به تو", "به شما", "اون رو", "اونو", "به اون", "اون", "او را", "به او", "او", "به ایشان", "ایشان را", "ایشان", "به ایشون", "ایشون رو", "ایشون را", "ایشون", "این", "این را", "آن", "به این", "به آن", "آن را", "این رو", "اینو", "ما را", "به ما", "به اونا", "آن‌ها", "آنها را", "آن‌ها را", "به آنها", "به آن‌ها", "اونا", "اونارو", "اونا رو", "من", "تو", "ما", "آنها"], [], [], ["خودم", "خودت", "خودش", "یک نفر خودش", "خودمان", "خودتان", "خودشان"], [], ["با", "بی", "در", "را", "یا", "اگر", "مگر", "نه", "چه", "باری", "بر", "برای", "برای این", "برای این که", "برای آن که", "برای آن", "از برای", "خواه", "زیرا", "که", "نیز", "چون", "چونان که", "چونان‌که", "چنان", "چنان‌چه", "چنانچه", "چنان‌که", "چونکه", "چون که", "چون‌که", "چندان که", "چندان‌که", "زیرا که", "زیراکه", "همین که", "همین‌که", "همان که", "همان‌که", "بلکه", "جز", "الا", "الاّ", "الی", "تا اینکه", "تااینکه", "تا آنکه", "تاآنکه", "آن‌جا که", "آن‌گاه که", "از آن‌جا که", "ازآنجاکه", "از آن‌که", "ازآنکه", "زیرا", "چون‌که", "چون که", "از این رو", "ازاین‌رو", "ازین‌رو", "از بس", "ازبس", "از بس که", "ازبس‌که", "از بهر آن‌که", "اکنون که", "اگرچه", "اگر چنانچه", "اگرچنانچه", "الا این‌که", "با این حال", "بااین‌حال", "با این‌که", "بااین‌که", "بااینکه", "با وجود این", "باوجوداین", "با این وجود", "بس که", "از بس که", "بس‌که", "از بس‌که", "به شرط آن‌که", "به‌شرط آن‌که", "به شرطی که", "به شروطی که", "بعد از", "قبل از", "از بعد از", "از قبل از", "اندر", "بدون", "علیه", "ضد", "غیر", "واسه‎ی", "برای", "واسه", "برای"], [], [], [], [], [], [], [], ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"], [], [], ["دوباره", "قطعاً", "حتماً", "اصلاً", "قاعدتاً", "ظبیعتاً", "شاید", "کاملاً", "به", "از", "و", "همچنین", "هم", "مانند", "مثل", "شبیه به", "ولی", "اما", "امّا", "لیکن", "ولو", "در ضمن", "در کنار", "ترجیحاً", "وگرنه", "پس", "سپس", "وقتی", "زمانی که", "به خاطر", "مخصوصاً", "مشخصاً", "در کل", "بعد", "قبل", "تا"]),
      d = r(11),
      x = r.n(d),
      y = f.languageProcessing.regexHelpers.searchAndReplaceWithRegex,
      _ = function _(e) {
    var t = [];
    return t.push("ن" + e), e.endsWith("ها") ? t.push.apply(t, x()(["یی", "ی"].map(function (t) {
      return e + t;
    }))) : /([^وای]ه)$/i.test(e) ? t.push.apply(t, x()(["‌ای", "‌یی", "‌ام", "‌ات", "‌اش"].map(function (t) {
      return e + t;
    }))) : /([وا])$/i.test(e) ? t.push.apply(t, x()(["یی", "یم", "یت", "یش"].map(function (t) {
      return e + t;
    }))) : (e.endsWith("ی") && t.push(e + "‌ای"), t.push.apply(t, x()(["مان", "شان", "تان", "ش", "ت", "م", "ی"].map(function (t) {
      return e + t;
    })))), t;
  };

  function b(e) {
    var t = [];
    t.push.apply(t, x()(_(e)));

    var r = function (e) {
      return e.startsWith("ن") ? e.slice(1, e.length) : y(e, [["(و|ا)(یش|یت|یم|یی)$", "$1"], ["([^وای]ه)(‌یی|‌ای|‌اش|‌ات|‌ام)$", "$1"], ["(ی)‌ای$", "$1"], ["(ها)یی$", "$1"], ["(مان|شان|تان|ش|ت|م|ی)$", ""]]);
    }(e);

    return r && (t.push(r), t.push.apply(t, x()(_(r)))), t;
  }

  var h = f.languageProcessing.baseStemmer;

  function g() {
    return h;
  }

  var m = function (e) {
    s()(u, e);
    var t,
        r,
        o = (t = u, r = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }(), function () {
      var e,
          o = c()(t);

      if (r) {
        var n = c()(this).constructor;
        e = Reflect.construct(o, arguments, n);
      } else e = o.apply(this, arguments);

      return a()(this, e);
    });

    function u(e) {
      var t;
      return n()(this, u), delete (t = o.call(this, e)).defaultResearches.getFleschReadingScore, delete t.defaultResearches.findTransitionWords, delete t.defaultResearches.getPassiveVoiceResult, delete t.defaultResearches.getSentenceBeginnings, Object.assign(t.config, {
        language: "fa",
        functionWords: l
      }), Object.assign(t.helpers, {
        createBasicWordForms: b,
        getStemmer: g
      }), t;
    }

    return u;
  }(f.languageProcessing.AbstractResearcher);
}]);