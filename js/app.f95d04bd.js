(function (a) {
  function t(t) {
    for (
      var n, p, d = t[0], l = t[1], f = t[2], i = 0, r = [];
      i < d.length;
      i++
    )
      (p = d[i]),
        Object.prototype.hasOwnProperty.call(e, p) && e[p] && r.push(e[p][0]),
        (e[p] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (a[n] = l[n]);
    v && v(t);
    while (r.length) r.shift()();
    return c.push.apply(c, f || []), s();
  }
  function s() {
    for (var a, t = 0; t < c.length; t++) {
      for (var s = c[t], n = !0, d = 1; d < s.length; d++) {
        var l = s[d];
        0 !== e[l] && (n = !1);
      }
      n && (c.splice(t--, 1), (a = p((p.s = s[0]))));
    }
    return a;
  }
  var n = {},
    e = { app: 0 },
    c = [];
  function p(t) {
    if (n[t]) return n[t].exports;
    var s = (n[t] = { i: t, l: !1, exports: {} });
    return a[t].call(s.exports, s, s.exports, p), (s.l = !0), s.exports;
  }
  (p.m = a),
    (p.c = n),
    (p.d = function (a, t, s) {
      p.o(a, t) || Object.defineProperty(a, t, { enumerable: !0, get: s });
    }),
    (p.r = function (a) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (p.t = function (a, t) {
      if ((1 & t && (a = p(a)), 8 & t)) return a;
      if (4 & t && "object" === typeof a && a && a.__esModule) return a;
      var s = Object.create(null);
      if (
        (p.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: a }),
        2 & t && "string" != typeof a)
      )
        for (var n in a)
          p.d(
            s,
            n,
            function (t) {
              return a[t];
            }.bind(null, n)
          );
      return s;
    }),
    (p.n = function (a) {
      var t =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return p.d(t, "a", t), t;
    }),
    (p.o = function (a, t) {
      return Object.prototype.hasOwnProperty.call(a, t);
    }),
    (p.p = "");
  var d = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var f = 0; f < d.length; f++) t(d[f]);
  var v = l;
  c.push([0, "chunk-vendors"]), s();
})({
  0: function (a, t, s) {
    a.exports = s("56d7");
  },
  "05b1": function (a, t, s) {},
  1081: function (a, t, s) {
    a.exports = s.p + "img/程式交易競賽.ec883266.jpg";
  },
  "12e6": function (a, t, s) {
    a.exports = s.p + "img/實務專題佳作.1d1de070.jpg";
  },
  "21af": function (a, t, s) {
    "use strict";
    s("4d28");
  },
  "289e": function (a, t, s) {
    a.exports = s.p + "img/GitHub-Mark-120px-plus.ef7a02b6.png";
  },
  "2c68": function (a, t, s) {
    "use strict";
    s("a934");
  },
  "2ead": function (a, t, s) {},
  "4c19": function (a, t, s) {
    "use strict";
    s("ba48");
  },
  "4d28": function (a, t, s) {},
  "4d7a": function (a, t, s) {},
  "4dae": function (a, t, s) {},
  "4ffd": function (a, t, s) {
    a.exports = s.p + "img/logo.82b9c7a5.png";
  },
  "53c4": function (a, t, s) {},
  5519: function (a, t, s) {
    "use strict";
    s("9cab");
  },
  "55ae": function (a, t, s) {},
  "56d7": function (a, t, s) {
    "use strict";
    s.r(t);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var n = s("7a23");
    function e(a, t, s, e, c, p) {
      var d = Object(n["q"])("Main");
      return Object(n["l"])(), Object(n["c"])(d);
    }
    var c = Object(n["f"])("div", { class: "background" }, null, -1),
      p = { class: "container" },
      d = { class: "glass-background" };
    function l(a, t, s, e, l, f) {
      var v = Object(n["q"])("Introduction"),
        i = Object(n["q"])("ProjectsAndSkills"),
        r = Object(n["q"])("Practice"),
        o = Object(n["q"])("Certificate"),
        u = Object(n["q"])("Awards"),
        b = Object(n["q"])("FloatingArrow"),
        m = Object(n["q"])("Details");
      return (
        Object(n["l"])(),
        Object(n["e"])(
          n["a"],
          null,
          [
            c,
            Object(n["f"])("div", p, [
              Object(n["f"])("div", d, [
                Object(n["i"])(v),
                Object(n["i"])(i),
                Object(n["i"])(r),
                Object(n["i"])(o),
                Object(n["i"])(u),
              ]),
              Object(n["i"])(b),
              Object(n["i"])(m),
            ]),
          ],
          64
        )
      );
    }
    var f = s("4ffd"),
      v = s.n(f),
      i = s("cf79"),
      r = s.n(i),
      o = { class: "card introduction" },
      u = Object(n["g"])(
        '<div class="picture"><img src="' +
          v.a +
          '"></div><div class="name layer-1">方皓昀</div><div class="info layer-1"><div class="info2"> 高雄科技大學-資訊工程系 <a href="https://github.com/AlexFangSW" target="_blank"><img src="' +
          r.a +
          '"></a></div><p> 在網頁和AI領域皆有涉略。AI - NLP : 實做過長篇文章摘要、書籍分類，研究過Transformer 和其衍生的語言模型Ex: BERT、PEGASUS、GPT-2，並融入實作。對前端開發抱有熱誠，時常自行學習新知並實作練習。製作過網頁後端的Project，實作REST API 和資料庫運用。自學前端開發，理解 HTML，JS，CSS/SCSS三種基本語言和Vue Framework: Vue.js, Vuex。並將其用於實作上。致力於製作使用者體驗良好的網站。 </p></div>',
        3
      ),
      b = [u];
    function m(a, t, s, e, c, p) {
      return Object(n["l"])(), Object(n["e"])("div", o, b);
    }
    var j = {},
      O = s("6b0d"),
      N = s.n(O);
    const g = N()(j, [["render", m]]);
    var k = g,
      h = { class: "card project-container" },
      A = Object(n["f"])(
        "div",
        { class: "skills layer-1 title head" },
        "Skills & Projects",
        -1
      ),
      w = { class: "buttons layer-1" };
    function y(a, t, s, e, c, p) {
      var d = Object(n["q"])("ProjectContainer");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", h, [
          A,
          Object(n["f"])("div", w, [
            Object(n["f"])(
              "button",
              {
                class: Object(n["k"])([
                  "fe-button",
                  { active: a.frontendShow },
                ]),
                onClick:
                  t[0] ||
                  (t[0] = function (a) {
                    return p.showProjects(a);
                  }),
              },
              " Front-end ",
              2
            ),
            Object(n["f"])(
              "button",
              {
                class: Object(n["k"])(["ai-button", { active: a.aiNLPShow }]),
                onClick:
                  t[1] ||
                  (t[1] = function (a) {
                    return p.showProjects(a);
                  }),
              },
              " AI (NLP) ",
              2
            ),
          ]),
          Object(n["i"])(
            d,
            {
              className: "front-end",
              skills: a.frontendSkills,
              projects: a.frontendProjects,
              isActive: a.frontendShow,
            },
            null,
            8,
            ["skills", "projects", "isActive"]
          ),
          Object(n["i"])(
            d,
            {
              className: "ai-nlp",
              skills: a.aiNLPSkills,
              projects: a.aiNLPProjects,
              isActive: a.aiNLPShow,
            },
            null,
            8,
            ["skills", "projects", "isActive"]
          ),
        ])
      );
    }
    var D = s("5530"),
      C = s("5502");
    function P(a, t, s, e, c, p) {
      var d = this,
        l = Object(n["q"])("ProjectCard");
      return (
        Object(n["l"])(),
        Object(n["e"])(
          n["a"],
          null,
          [
            Object(n["f"])(
              "div",
              {
                class: Object(n["k"])([
                  "tools layer-1",
                  [{ active: s.isActive }, s.className],
                ]),
              },
              [
                (Object(n["l"])(!0),
                Object(n["e"])(
                  n["a"],
                  null,
                  Object(n["p"])(s.skills, function (a, t, s) {
                    return (
                      Object(n["l"])(),
                      Object(n["e"])(
                        "div",
                        { key: s, class: Object(n["k"])(t) },
                        [
                          (Object(n["l"])(!0),
                          Object(n["e"])(
                            n["a"],
                            null,
                            Object(n["p"])(a, function (a, t, s) {
                              return (
                                Object(n["l"])(),
                                Object(n["e"])(
                                  "span",
                                  { key: s },
                                  Object(n["r"])(a),
                                  1
                                )
                              );
                            }),
                            128
                          )),
                        ],
                        2
                      )
                    );
                  }),
                  128
                )),
              ],
              2
            ),
            Object(n["f"])(
              "div",
              {
                class: Object(n["k"])([
                  "projects",
                  [{ active: s.isActive }, s.className],
                ]),
              },
              [
                (Object(n["l"])(!0),
                Object(n["e"])(
                  n["a"],
                  null,
                  Object(n["p"])(s.projects, function (a, t) {
                    return (
                      Object(n["l"])(),
                      Object(n["c"])(
                        l,
                        {
                          key: t,
                          title: a.title,
                          abstract: a.abstract,
                          className: d.className,
                        },
                        null,
                        8,
                        ["title", "abstract", "className"]
                      )
                    );
                  }),
                  128
                )),
              ],
              2
            ),
          ],
          64
        )
      );
    }
    var S = s("289e"),
      I = s.n(S),
      L = s("607b"),
      M = s.n(L),
      x = { class: "project" },
      E = { class: "title" },
      B = { class: "abstract" },
      T = ["href"],
      F = Object(n["f"])("img", { src: I.a }, null, -1),
      J = Object(n["f"])("img", { src: M.a }, null, -1),
      G = [F, J];
    function R(a, t, s, e, c, p) {
      return (
        Object(n["l"])(),
        Object(n["e"])("div", x, [
          Object(n["f"])("div", E, Object(n["r"])(s.title), 1),
          Object(n["f"])("div", B, Object(n["r"])(s.abstract), 1),
          "practice" != s.className
            ? (Object(n["l"])(),
              Object(n["e"])(
                "button",
                {
                  key: 0,
                  class: "call-of-action",
                  onClick:
                    t[0] ||
                    (t[0] = function (a) {
                      return p.openDetails();
                    }),
                },
                " click for more + "
              ))
            : Object(n["d"])("", !0),
          "practice" == s.className
            ? (Object(n["l"])(),
              Object(n["e"])(
                "a",
                {
                  key: 1,
                  class: "call-of-action",
                  href: s.githubLink,
                  target: "_blank",
                },
                G,
                8,
                T
              ))
            : Object(n["d"])("", !0),
        ])
      );
    }
    var Q = {
      props: ["title", "abstract", "className", "githubLink"],
      methods: Object(D["a"])(
        Object(D["a"])({}, Object(C["b"])("details", ["setOpened"])),
        {},
        {
          openDetails: function () {
            this.setOpened({
              cName: this.className,
              pName: this.title,
              abstract: this.abstract,
            });
          },
        }
      ),
    };
    const W = N()(Q, [["render", R]]);
    var q = W,
      H = {
        props: ["className", "skills", "projects", "isActive"],
        components: { ProjectCard: q },
      };
    const Y = N()(H, [["render", P]]);
    var Z = Y,
      _ = {
        computed: Object(D["a"])(
          Object(D["a"])(
            {},
            Object(C["c"])("frontend", {
              frontendSkills: function (a) {
                return a.skills;
              },
              frontendProjects: function (a) {
                return a.projects;
              },
              frontendShow: function (a) {
                return a.active;
              },
            })
          ),
          Object(C["c"])("aiNLP", {
            aiNLPSkills: function (a) {
              return a.skills;
            },
            aiNLPProjects: function (a) {
              return a.projects;
            },
            aiNLPShow: function (a) {
              return a.active;
            },
          })
        ),
        methods: Object(D["a"])(
          Object(D["a"])(
            {},
            Object(C["b"])({
              FEtoggleActive: "frontend/toggleActive",
              AItoggleActive: "aiNLP/toggleActive",
            })
          ),
          {},
          {
            showProjects: function (a) {
              a.target.classList.contains("active") ||
                (this.FEtoggleActive(), this.AItoggleActive());
            },
          }
        ),
        components: { ProjectContainer: Z },
      };
    const V = N()(_, [["render", y]]);
    var z = V,
      U = { class: "card awards" },
      X = Object(n["f"])("div", { class: "title head layer-1" }, "Awards", -1),
      K = { class: "awards" };
    function $(a, t, s, e, c, p) {
      var d = Object(n["q"])("ProjectCard");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", U, [
          X,
          Object(n["f"])("div", K, [
            (Object(n["l"])(!0),
            Object(n["e"])(
              n["a"],
              null,
              Object(n["p"])(a.awards, function (a, t) {
                return (
                  Object(n["l"])(),
                  Object(n["c"])(
                    d,
                    {
                      key: t,
                      title: a.title,
                      abstract: a.abstract,
                      className: "awards",
                    },
                    null,
                    8,
                    ["title", "abstract"]
                  )
                );
              }),
              128
            )),
          ]),
        ])
      );
    }
    var aa = {
      computed: Object(D["a"])({}, Object(C["c"])("awards", ["awards"])),
      components: { ProjectCard: q },
    };
    const ta = N()(aa, [["render", $]]);
    var sa = ta,
      na = { class: "floating-arrow layer-1" },
      ea = Object(n["f"])(
        "svg",
        {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fas",
          "data-icon": "chevron-up",
          class: "svg-inline--fa fa-chevron-up fa-w-14",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512",
        },
        [
          Object(n["f"])("path", {
            fill: "currentColor",
            d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z",
          }),
        ],
        -1
      ),
      ca = Object(n["f"])("span", null, "scroll", -1),
      pa = [ea, ca];
    function da(a, t, s, e, c, p) {
      return Object(n["l"])(), Object(n["e"])("div", na, pa);
    }
    var la = {};
    const fa = N()(la, [["render", da]]);
    var va = fa,
      ia = { key: 0, class: "details" },
      ra = { class: "top-menu" },
      oa = Object(n["f"])(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
        [
          Object(n["f"])("path", {
            d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z",
          }),
        ],
        -1
      ),
      ua = [oa],
      ba = { class: "content" },
      ma = { class: "title" },
      ja = { class: "abstract" },
      Oa = Object(n["f"])("div", { class: "subtitle" }, "Abstract", -1),
      Na = { class: "detail-content" },
      ga = Object(n["f"])("div", { class: "subtitle" }, "Details", -1);
    function ka(a, t, s, e, c, p) {
      var d = Object(n["q"])("FrontendDetails"),
        l = Object(n["q"])("AwardsDetails"),
        f = Object(n["q"])("AINLPDetails"),
        v = Object(n["q"])("CertificateDetails");
      return a.opened
        ? (Object(n["l"])(),
          Object(n["e"])("div", ia, [
            Object(n["f"])("div", ra, [
              Object(n["f"])(
                "button",
                {
                  onClick:
                    t[0] ||
                    (t[0] = function (a) {
                      return p.closeDiv();
                    }),
                },
                ua
              ),
            ]),
            Object(n["f"])("div", ba, [
              Object(n["f"])("div", ma, Object(n["r"])(a.projectName), 1),
              Object(n["f"])("div", ja, [
                Oa,
                Object(n["h"])(" " + Object(n["r"])(a.abstract), 1),
              ]),
              Object(n["f"])("div", Na, [
                ga,
                "front-end" == a.className
                  ? (Object(n["l"])(),
                    Object(n["c"])(
                      d,
                      { key: 0, projectName: a.projectName },
                      null,
                      8,
                      ["projectName"]
                    ))
                  : Object(n["d"])("", !0),
                "awards" == a.className
                  ? (Object(n["l"])(),
                    Object(n["c"])(
                      l,
                      { key: 1, projectName: a.projectName },
                      null,
                      8,
                      ["projectName"]
                    ))
                  : Object(n["d"])("", !0),
                "ai-nlp" == a.className
                  ? (Object(n["l"])(),
                    Object(n["c"])(
                      f,
                      { key: 2, projectName: a.projectName },
                      null,
                      8,
                      ["projectName"]
                    ))
                  : Object(n["d"])("", !0),
                "certificate" == a.className
                  ? (Object(n["l"])(),
                    Object(n["c"])(
                      v,
                      { key: 3, projectName: a.projectName },
                      null,
                      8,
                      ["projectName"]
                    ))
                  : Object(n["d"])("", !0),
              ]),
            ]),
          ]))
        : Object(n["d"])("", !0);
    }
    var ha = { class: "front-end-details" };
    function Aa(a, t, s, e, c, p) {
      var d = Object(n["q"])("FEDetails1"),
        l = Object(n["q"])("FEDetails2");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", ha, [
          "履歷網站(本網頁)" == s.projectName
            ? (Object(n["l"])(), Object(n["c"])(d, { key: 0 }))
            : Object(n["d"])("", !0),
          "練習HTML、JS、CSS運用" == s.projectName
            ? (Object(n["l"])(), Object(n["c"])(l, { key: 1 }))
            : Object(n["d"])("", !0),
        ])
      );
    }
    var wa = { class: "FEDetails-1" },
      ya = Object(n["g"])(
        '<div class="FEDetails-title" data-v-07fc0d90><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-v-07fc0d90><path d="M528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h192L224 464H152C138.8 464 128 474.8 128 488S138.8 512 152 512h272c13.25 0 24-10.75 24-24s-10.75-24-24-24H352L336 416h192c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM512 288H64V64h448V288z" data-v-07fc0d90></path></svg>RWD <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-v-07fc0d90><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z" data-v-07fc0d90></path></svg></div><details data-v-07fc0d90><summary data-v-07fc0d90>玻璃區域(內容主體)</summary><p data-v-07fc0d90>使用clamp()。隨螢幕寬度變化，不會太細或太寬。</p></details><details data-v-07fc0d90><summary data-v-07fc0d90>Project排列</summary><p data-v-07fc0d90>依照螢幕寬度調整為橫向/垂直滾動。</p></details><details data-v-07fc0d90><summary data-v-07fc0d90>文字大小</summary><p data-v-07fc0d90>使用clamp()。隨螢幕寬度變化，不會太小或太大。</p></details><div class="FEDetails-title" data-v-07fc0d90>Accessibility</div><details data-v-07fc0d90><summary data-v-07fc0d90>背景明暗</summary><p data-v-07fc0d90>當背景圖案開始和中間主體內容重疊，會降低opacity，減少干擾。</p></details><details data-v-07fc0d90><summary data-v-07fc0d90>向下滑動提示</summary><p data-v-07fc0d90>中下方有箭頭告知使用者可以向下滑。到底消失。</p></details><details data-v-07fc0d90><summary data-v-07fc0d90>標題顏色</summary><p data-v-07fc0d90>區塊標題除了變大，還呈現黃色，更好判斷達到下一部分。</p></details><details data-v-07fc0d90><summary data-v-07fc0d90>Click for more 按鈕</summary><p data-v-07fc0d90>希望使用者發現並按下的按鈕，使用較突出的顏色。</p></details><details data-v-07fc0d90><summary data-v-07fc0d90>可滑動區排列</summary><p data-v-07fc0d90> Project / Awards 當能夠滑動時，都會將下一項露出一部分，讓使用者知道可以滑動。 </p></details>',
        10
      ),
      Da = [ya];
    function Ca(a, t, s, e, c, p) {
      return Object(n["l"])(), Object(n["e"])("div", wa, Da);
    }
    var Pa = {};
    s("959a");
    const Sa = N()(Pa, [
      ["render", Ca],
      ["__scopeId", "data-v-07fc0d90"],
    ]);
    var Ia = Sa,
      La = function (a) {
        return (
          Object(n["n"])("data-v-d9c07e3a"), (a = a()), Object(n["m"])(), a
        );
      },
      Ma = { class: "FEDetails2-container" },
      xa = La(function () {
        return Object(n["f"])("div", { class: "header" }, "SHOWCASE", -1);
      }),
      Ea = La(function () {
        return Object(n["f"])(
          "div",
          { class: "drop_shadow" },
          [Object(n["f"])("div", { class: "drop_shadow_text" }, "DROP SHADOW")],
          -1
        );
      }),
      Ba = { class: "navigator" },
      Ta = La(function () {
        return Object(n["f"])(
          "div",
          { class: "indicator" },
          [
            Object(n["f"])("div", { class: "outer" }),
            Object(n["f"])("div", { class: "inner" }),
            Object(n["f"])("div", { class: "dot_right" }),
          ],
          -1
        );
      }),
      Fa = { class: "active" },
      Ja = La(function () {
        return Object(n["f"])("span", null, "Bus", -1);
      }),
      Ga = La(function () {
        return Object(n["f"])("span", null, "Food", -1);
      }),
      Ra = La(function () {
        return Object(n["f"])("span", null, "Music", -1);
      }),
      Qa = La(function () {
        return Object(n["f"])("span", null, "Skull", -1);
      }),
      Wa = La(function () {
        return Object(n["f"])("span", null, "Rocket", -1);
      }),
      qa = Object(n["g"])(
        '<div class="soft_circle" data-v-d9c07e3a></div><div class="circle" data-v-d9c07e3a><div class="lighting" data-v-d9c07e3a><span data-v-d9c07e3a></span><span data-v-d9c07e3a></span><span data-v-d9c07e3a></span><span data-v-d9c07e3a></span></div><div class="inner_circle1" data-v-d9c07e3a></div><div class="circle_text" data-v-d9c07e3a>CIRCLE</div></div>',
        2
      );
    function Ha(a, t, s, e, c, p) {
      var d = Object(n["q"])("ion-icon");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", Ma, [
          xa,
          Ea,
          Object(n["f"])("div", Ba, [
            Ta,
            Object(n["f"])("a", Fa, [Object(n["i"])(d, { name: "bus" }), Ja]),
            Object(n["f"])("a", null, [
              Object(n["i"])(d, { name: "fast-food-outline" }),
              Ga,
            ]),
            Object(n["f"])("a", null, [
              Object(n["i"])(d, { name: "headset-outline" }),
              Ra,
            ]),
            Object(n["f"])("a", null, [
              Object(n["i"])(d, { name: "skull-outline" }),
              Qa,
            ]),
            Object(n["f"])("a", null, [
              Object(n["i"])(d, { name: "rocket-outline" }),
              Wa,
            ]),
          ]),
          qa,
        ])
      );
    }
    s("d3b7"), s("159b");
    var Ya = {
      mounted: function () {
        var a = document.querySelectorAll(".navigator a"),
          t = document.querySelector(".navigator .indicator");
        a.forEach(function (s) {
          s.addEventListener("click", function () {
            a.forEach(function (a) {
              a.classList.remove("active");
            }),
              s.classList.add("active");
            var n = 0;
            a.forEach(function (a) {
              a.classList.contains("active") &&
                (t.style.transform = "translate(".concat(2.85 * n, "rem)")),
                n++;
            });
          });
        });
      },
    };
    s("f01f");
    const Za = N()(Ya, [
      ["render", Ha],
      ["__scopeId", "data-v-d9c07e3a"],
    ]);
    var _a = Za,
      Va = {
        props: ["projectName"],
        components: { FEDetails1: Ia, FEDetails2: _a },
      };
    s("d824");
    const za = N()(Va, [
      ["render", Aa],
      ["__scopeId", "data-v-285b64ea"],
    ]);
    var Ua = za,
      Xa = { class: "awards-details" };
    function Ka(a, t, s, e, c, p) {
      var d = Object(n["q"])("ADetails1"),
        l = Object(n["q"])("ADetails2");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", Xa, [
          "實務專題製作競賽" == s.projectName
            ? (Object(n["l"])(), Object(n["c"])(d, { key: 0 }))
            : Object(n["d"])("", !0),
          "程式交易競賽" == s.projectName
            ? (Object(n["l"])(), Object(n["c"])(l, { key: 1 }))
            : Object(n["d"])("", !0),
        ])
      );
    }
    var $a = s("12e6"),
      at = s.n($a),
      tt = function (a) {
        return (
          Object(n["n"])("data-v-7fcf3197"), (a = a()), Object(n["m"])(), a
        );
      },
      st = { class: "ADetails-1" },
      nt = tt(function () {
        return Object(n["f"])("img", { src: at.a }, null, -1);
      }),
      et = [nt];
    function ct(a, t, s, e, c, p) {
      return Object(n["l"])(), Object(n["e"])("div", st, et);
    }
    var pt = {};
    s("21af");
    const dt = N()(pt, [
      ["render", ct],
      ["__scopeId", "data-v-7fcf3197"],
    ]);
    var lt = dt,
      ft = s("1081"),
      vt = s.n(ft),
      it = function (a) {
        return (
          Object(n["n"])("data-v-50511412"), (a = a()), Object(n["m"])(), a
        );
      },
      rt = { class: "ADetails-2" },
      ot = it(function () {
        return Object(n["f"])("img", { src: vt.a }, null, -1);
      }),
      ut = [ot];
    function bt(a, t, s, e, c, p) {
      return Object(n["l"])(), Object(n["e"])("div", rt, ut);
    }
    var mt = {};
    s("4c19");
    const jt = N()(mt, [
      ["render", bt],
      ["__scopeId", "data-v-50511412"],
    ]);
    var Ot = jt,
      Nt = {
        props: ["projectName"],
        components: { ADetails1: lt, ADetails2: Ot },
      };
    s("9578");
    const gt = N()(Nt, [
      ["render", Ka],
      ["__scopeId", "data-v-5abd4cf6"],
    ]);
    var kt = gt,
      ht = { class: "ai-details" };
    function At(a, t, s, e, c, p) {
      var d = Object(n["q"])("AIDetails1"),
        l = Object(n["q"])("AIDetails2");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", ht, [
          "BERT+LSTM 文本分類器" == s.projectName
            ? (Object(n["l"])(), Object(n["c"])(d, { key: 0 }))
            : Object(n["d"])("", !0),
          "Auto Summary" == s.projectName
            ? (Object(n["l"])(), Object(n["c"])(l, { key: 1 }))
            : Object(n["d"])("", !0),
        ])
      );
    }
    var wt = { class: "ai-details-container" },
      yt = Object(n["g"])(
        '<div class="Video" data-v-d40bafb0><p data-v-d40bafb0>專題比賽所使用講解影片</p><div class="title-2" data-v-d40bafb0><p data-v-d40bafb0>方皓昀(本人) : 架構和實作方法</p><p data-v-d40bafb0>李冠篁(隊友) : 開頭和結尾</p></div><iframe src="https://www.youtube.com/embed/yADwqHN9_Ls" data-v-d40bafb0> </iframe></div><div class="paper" data-v-d40bafb0><p data-v-d40bafb0>成果報告書</p><iframe src="https://drive.google.com/file/d/1FkKVnTbeAJWswhDuu5EtA4w6qw_7vWCX/preview" width="100%" height="480" allow="autoplay" data-v-d40bafb0></iframe></div>',
        2
      ),
      Dt = [yt];
    function Ct(a, t, s, e, c, p) {
      return Object(n["l"])(), Object(n["e"])("div", wt, Dt);
    }
    var Pt = {};
    s("816d");
    const St = N()(Pt, [
      ["render", Ct],
      ["__scopeId", "data-v-d40bafb0"],
    ]);
    var It = St,
      Lt = function (a) {
        return (
          Object(n["n"])("data-v-89101f28"), (a = a()), Object(n["m"])(), a
        );
      },
      Mt = { class: "ai-details-container" },
      xt = Lt(function () {
        return Object(n["f"])(
          "div",
          null,
          [
            Object(n["f"])("p", null, "Steps"),
            Object(n["f"])(
              "p",
              { class: "steps" },
              "產生語意向量 => 分割主題 => 提取摘要"
            ),
          ],
          -1
        );
      }),
      Et = Lt(function () {
        return Object(n["f"])("p", null, "Example", -1);
      }),
      Bt = Lt(function () {
        return Object(n["f"])(
          "div",
          { class: "from" },
          "文章:〈鬼頭刀〉廖鴻基",
          -1
        );
      }),
      Tt = { class: "example" },
      Ft = { class: "summary-menu" },
      Jt = { key: 0, class: "original" },
      Gt = Object(n["g"])(
        '<p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>1.</span>漁船鏗鏘的引擎聲，響徹黎明港灣，破曉晨色茫茫。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>2.</span>飛魚衝破海面凌空飛起，像一隻亮白的飛鳥，低空劃過東邊浮出海面的火紅朝陽。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>3.</span>飛魚飛越了比我歡呼聲更持久的距離，在一個漂亮的弧線轉彎後，墜入海中。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>4.</span>掌舵的海湧伯說：「飛魚在逃避，逃避鬼頭刀的追擊。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>5.</span>」鬼頭刀，果然是海中的一把刀。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>6.</span>牠快速的身影從船邊一閃而過，在深邃的波光中閃耀著青藍光芒。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>7.</span>偶爾，牠會放慢速度，甚或停在船邊，用好奇的龍銀大眼與我在不同的世界裡相互對望。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>8.</span>那眼神肆無忌憚，高傲銳利得像把刀。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>9.</span>當飛魚將被追上，驚慌的躍出水面，逃避到另一個空間裡飛翔。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>10.</span>水面下，鬼頭刀以牠驚人的爆發力，繼續盯住在空氣中快速拍動翅鰭的飛魚，也算準牠落水的時刻，從容優美的迴身轉彎，把嘴巴特別張大，等待飛魚的歸來。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>11.</span>海裡的魚群生性驚惶，只有兩種魚肯大大方方的靠近船筏。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>12.</span>那就是海豚和鬼頭刀，牠們用兩種截然不同的方式跟漁人接觸。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>13.</span>海豚常常會跟在船筏邊跳躍，雖然牠們的泳速遠遠高過船筏，但是牠們就那麼俏皮的跟在船筏邊戲耍。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>14.</span>這時，海湧伯會把船舵交給我，也許他的年紀不再合適這樣的遊戲。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>15.</span>我會加足馬力，把滿舵，讓船筏急速的壓向跳躍的海豚，海豚會跟著船筏的轉彎而轉彎，仍舊與船筏保持一定的距離在船舷邊跳躍。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>16.</span>再把舵搖向另一個方向，讓船筏快速離開，牠們立刻又跟了上來，始終與我們保持一段安全距離。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>17.</span>就這樣跟牠們在寬廣的海域蛇行、繞圈子。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>18.</span>在牠們躍出水面的瞬間，我看到牠們的眼睛帶著笑容，像一群非常非常頑皮的猴子。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>19.</span>那樣友善的接觸，卻始終保持警覺，感覺是溫暖的又有點清冷，不曉得是海豚的聰黠，還是漁人的悲哀。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>20.</span>海上遠遠的，時常可以看到一圈激起白色浪花的海面，海豚的背影在其間穿梭跳躍，這是一群海豚正在享用鰹魚大餐。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>21.</span>年輕力壯的海豚會分頭追趕一群鰹魚，逐漸把鰹魚群趕入牠們圍住的圈圈裡，讓老弱婦孺共享大餐。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>22.</span>人們也沿用這樣的方法把海豚圍入淺灣中，然後集體屠殺，不為了食物，不為了生活的必需，像是嫉妒牠們的聰明，或是怨恨牠們的頑皮。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>23.</span>鬼頭刀也會游近船筏，但感覺總是那樣恍然，突然出現又突然失去蹤影。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>24.</span>牠游近船筏可沒覺得牠的善意或者惡意，僅僅是路過或者因緣際會罷了。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>25.</span>牠一點也不在乎船筏的陰影，不在乎船上虎視眈眈的漁人及漁具。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>26.</span>偶爾牠會好奇的停下來與你瞪上兩眼，然後從容離開。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>27.</span>牠那毫不畏懼的眼神，顯現牠不是智商不足，就是信心十足。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>28.</span>鬼頭刀不同於一般洄游性魚類慣用的灰黑保護色調，牠美麗的色彩像極了熱帶雨林中的花彩鸚鵡，不但不驚惶避諱任何注視的目光，反而是驕傲的展現自我的存在。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>29.</span>兩片鮮黃胸鰭平衡著青色的流線身軀，像一艘在海洋中悠游飛翔的潛艇。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>30.</span>牠的背上綴飾著藍色發亮星點，在墨藍的海水中如武士佩戴著勳章般的神氣，也像夜暗星光般的神祕與詭異。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>31.</span>雖然在魚市場鬼頭刀算是賤價的魚種，但是價錢的高低並不能絲毫減損牠在我心目中的價值。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>32.</span>牠的價值表現在牠的生命上，就像牠美麗的色彩與藍色星點，在離開海洋離開生命後，即刻消逝。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>33.</span>在我將近五年的海上經驗中，每次看到牠，我的心情都會像槳葉攪動後的海面般，波波痕痕。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>34.</span>初初下海的那年夏天，一個烏雲滿天傍晚，暴風雨正盤算跟著夜幕來襲，海湧伯把引擎催趕成急迫的回航節奏。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>35.</span>在立霧溪海口，一條大魚咬中了船尾拖釣的假餌，八十磅的粗線及緩衝用的內胎橡皮瞬間被拉成筆直，時空似乎凍結住了，就等候斷裂的一聲巨響。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>36.</span>我幾乎是尖叫呼喊著，海湧伯緩下船速回頭看著那條在船後凌空翻跳的大魚，示意我：「拉牠上來！」而且並沒有要過來幫忙的意思。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>37.</span>拉扯了半天，那大魚驚人的力量折騰得我手掌都起了水泡。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>38.</span>好不容易將牠拉近船尾。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>39.</span>牠也似乎認命了，終於安靜的停止跳躍。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>40.</span>這時我清楚的看到水面下這條巨大的鬼頭刀。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>41.</span>粉紅色的假餌掛在牠的嘴角，牠游水的姿態竟然還十分從容。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>42.</span>充滿自信的緩緩游向左側，用牠大大的左眼狠狠瞪我，那眼神毫無畏懼而且十分的不在乎；再悠閒的游向右方，右眼一樣的對我射出倨傲的神采。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>43.</span>當牠背上藍色明亮的星狀光點迷惑在我瞳孔上時，一股強烈的意識瞬間進入我的腦中，清楚的告訴我：「你已經失去了這條魚！」在我的夢裡，開始出現了跟鬼頭刀搏鬥的場景，那倨傲桀驁的眼神經常壓迫著我的夢，一遍又一遍，我撫摸著銳利的魚鉤，一遍又一遍把鮮豔的假餌提在眼前晃動。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>44.</span>我常常幻覺進入鬼頭刀牠的眼、牠的心，我終日沉浸悠游在藍色冰涼的海洋中，我看到船筏底部黑色的陰影在我頭上的海面光影中滑行而過，槳葉打出一團翻滾的白色泡沫。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>45.</span>我靜靜的等待，等待泡沫後那隻跟在船後游動的鮮美目標。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>46.</span>衝過去！大大的張開嘴，狠狠的咬下去……咬下去的剎那，意識又瞬間轉換到船上拉緊魚線的漁人，正強烈的感受鬼頭刀中鉤後強勁拉扯的抖動。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>47.</span>從海中的鬼頭刀到海面上拉線的漁人，我的精神陷入這樣的輪迴中，一遍遍的反覆演練，從不疲倦。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>48.</span>鬥志逐漸被激發成激昂的獸性，等待牠再度出現的心每一次伴隨著我出海。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>49.</span>這段期間，海湧伯看出我的沉默及我眼中燃燒的火炬，卻始終不曾為我說一句鼓勵的話，也許他期待的是一場公平的戰爭，或者是一堂漁人入門的必修課程。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>50.</span>遠山浮雲飛鳥波濤，海面上的一切是我們習慣了的亮麗世界。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>51.</span>薄薄一面之隔的海面下，那鬼頭刀浮沉的空間，是漁人視覺不可及的未知世界。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>52.</span>一個個餌鉤沉下水面，就像沉下一個個倒懸的問號，而答案往往是從零到無窮，甚或常常連問號也無法收回。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>53.</span>這是在放下餌釣或撒網當初誰也無法預知的結果。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>54.</span>所以漁人必須學會承受不自主的命運，學會等待、落空、失望，或者學會如何承受難堪的狂喜。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>55.</span>海洋那般嚴格的試煉漁人的原始動物性格，卻又不斷的誘惑漁人下海的勇氣，如潮汐的漲退般，漁人宿命的在充滿希望與絕望的空隙間擺盪。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>56.</span>跟鬼頭刀纏鬥的意志如能量般累積在我的胸腔。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>57.</span>船筏一次次的在立霧溪海口巡弋，也一次次的落空失望。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>58.</span>感覺上鬼頭刀似乎隱藏在海面下的某個角落窺視著我們，那幽靈般藍色的發亮星點似乎環繞在船筏四周，而又在我興奮的跳躍起來後消失無蹤。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>59.</span>海上的日子在苦悶的等待中彷彿海水的味道鹹鹹苦苦的。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>60.</span>偶爾低空貼浪覓食的海鳥，常被我誤以為是跳出水面的飛魚而興奮起來，而灰暗下來。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>61.</span>鬼頭刀是少數兩性表徵明顯的魚類，公魚額頭高聳如崖壁，就像頭上頂著一把劈水的刀斧，像公牛隆起的肩或雄獅威風的鬃鬣及吼叫；母魚全身體型修長圓潤，連眼神都帶著幾許溫柔。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>62.</span>「鬼頭刀」這樣的名稱似乎是來自公魚的威容，漁人又稱牠為「飛魚虎」，從「鬼」、「刀」、「虎」這三個字就足以形容鬼頭刀在漁人眼中是如此神祕、銳利及凶猛。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>63.</span>同樣時間、同樣地點、同樣場景，船尾的魚線再度被拉成筆直。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>64.</span>大約在船後一百米處中鉤的鬼頭刀不斷的翻躍到空中，重重的摔滾在水面上。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>65.</span>我用興奮得幾乎顫抖的聲音，呼喊海湧伯放慢船速，多日來等待的抑鬱都在中魚的瞬間明朗起來。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>66.</span>如同長久沉浸的幻影中那般熟練的姿態，我雙膝頂住船尾板，手中緊緊的握住魚線。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>67.</span>心裡充滿自信的告訴自己：「決戰的時刻終於來了。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>68.</span>」一把，一把，隨著牠跳躍的節奏有力的收線，我嘴裡咕噥著海湧伯不堪入耳的髒話。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>69.</span>在比鬼頭刀更威猛的氣勢下，我可以想像背後海湧伯讚許點頭的微笑表情。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>70.</span>已經收回了大約五十米線，牠再度躍出水面。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>71.</span>我竟然看到兩隻鬼頭刀一起跳出水面，大概是眼裡的戰鬥火花模糊了我的視覺，用袖口抹了下眼角……沒有看錯，是兩隻鬼頭刀幾乎是頭靠著頭一起躍出水面。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>72.</span>這是什麼情況？在我牢不可破的戰鬥心情中，滲入了一個問號。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>73.</span>並沒有放鬆我收線的手，再拉進了將近三十米線。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>74.</span>兩隻鬼頭刀一起躍起，一起摔下，一起游在水裡。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>75.</span>這樣的距離已經可以確定，中鉤的只有一隻，而另一隻是自由的。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>76.</span>為什麼會這樣呢？第二個問號重重的打進我的意志中。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>77.</span>再拉近十多米，這場鬥爭似乎已接近尾聲。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>78.</span>現在，我可以清楚看到，看到中鉤的是一隻母魚，而陪她一起摔滾的是一隻公魚。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>79.</span>母魚游向左方，公魚也貼著身游向左邊，那親密的距離彷彿是在耳邊叮嚀，在耳邊安慰。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>80.</span>尤其當我看到那公魚的眼神，不再是記憶中的倨傲從容，而是無限的悲傷、痛苦或者柔情。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>81.</span>那眼神說話了：「讓我來分擔妳的痛苦，我願意與妳同生共死陪伴妳到永遠。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>82.</span>」牠們背上的藍色光點一起躍進我的眼裡，竟然是那般的刺眼、光亮。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>83.</span>海湧伯似乎察覺到了我逐漸鬆垮的臂膀，不知什麼時候已站立在我的身旁。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>84.</span>我感覺到他在我的耳邊說：「眼睛閉起來吧！如果當做是一場戰爭，就該忘掉眼淚……。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>85.</span>」高傲美麗而且多情的鬼頭刀哇！如果是岸上的鬥爭我絕不遲疑，因為在岸上的世界，溫情就是懦弱就是包袱。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>86.</span>但，我心裡的這片海原本多情，為這美麗的魚和這美麗的情意，這場景畢竟人間少見，我捨不得閉眼。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>87.</span>堅持的肩膀很快的完全鬆垮了，手臂不再有力。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>88.</span>把岸上的鬥爭習性帶來海洋，原本就是我最大的錯誤。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>89.</span>海湧伯撿起折斷了的魚鉤說：「這不是普通的力量。 </span></p><p data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>90.</span>」夕陽煥照，紅霞滿天，船隻落寞回航，蓊鬱遠山以其永恆不變的姿態橫亙浪緣，飛魚照樣飛起，照樣。 </span></p>',
        90
      ),
      Rt = [Gt],
      Qt = { key: 1, class: "block" },
      Wt = Object(n["g"])(
        '<p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 1</span><span data-v-89101f28><span class="lineNum" data-v-89101f28>1.</span>漁船鏗鏘的引擎聲，響徹黎明港灣，破曉晨色茫茫。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>2.</span>飛魚衝破海面凌空飛起，像一隻亮白的飛鳥，低空劃過東邊浮出海面的火紅朝陽。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>3.</span>飛魚飛越了比我歡呼聲更持久的距離，在一個漂亮的弧線轉彎後，墜入海中。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>4.</span>掌舵的海湧伯說：「飛魚在逃避，逃避鬼頭刀的追擊。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>5.</span>」鬼頭刀，果然是海中的一把刀。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>6.</span>牠快速的身影從船邊一閃而過，在深邃的波光中閃耀著青藍光芒。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>7.</span>偶爾，牠會放慢速度，甚或停在船邊，用好奇的龍銀大眼與我在不同的世界裡相互對望。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>8.</span>那眼神肆無忌憚，高傲銳利得像把刀。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>9.</span>當飛魚將被追上，驚慌的躍出水面，逃避到另一個空間裡飛翔。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>10.</span>水面下，鬼頭刀以牠驚人的爆發力，繼續盯住在空氣中快速拍動翅鰭的飛魚，也算準牠落水的時刻，從容優美的迴身轉彎，把嘴巴特別張大，等待飛魚的歸來。 </span><br data-v-89101f28></p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 2</span><span data-v-89101f28><span class="lineNum" data-v-89101f28>11.</span>海裡的魚群生性驚惶，只有兩種魚肯大大方方的靠近船筏。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>12.</span>那就是海豚和鬼頭刀，牠們用兩種截然不同的方式跟漁人接觸。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>13.</span>海豚常常會跟在船筏邊跳躍，雖然牠們的泳速遠遠高過船筏，但是牠們就那麼俏皮的跟在船筏邊戲耍。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>14.</span>這時，海湧伯會把船舵交給我，也許他的年紀不再合適這樣的遊戲。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>15.</span>我會加足馬力，把滿舵，讓船筏急速的壓向跳躍的海豚，海豚會跟著船筏的轉彎而轉彎，仍舊與船筏保持一定的距離在船舷邊跳躍。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>16.</span>再把舵搖向另一個方向，讓船筏快速離開，牠們立刻又跟了上來，始終與我們保持一段安全距離。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>17.</span>就這樣跟牠們在寬廣的海域蛇行、繞圈子。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>18.</span>在牠們躍出水面的瞬間，我看到牠們的眼睛帶著笑容，像一群非常非常頑皮的猴子。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>19.</span>那樣友善的接觸，卻始終保持警覺，感覺是溫暖的又有點清冷，不曉得是海豚的聰黠，還是漁人的悲哀。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>20.</span>海上遠遠的，時常可以看到一圈激起白色浪花的海面，海豚的背影在其間穿梭跳躍，這是一群海豚正在享用鰹魚大餐。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>21.</span>年輕力壯的海豚會分頭追趕一群鰹魚，逐漸把鰹魚群趕入牠們圍住的圈圈裡，讓老弱婦孺共享大餐。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>22.</span>人們也沿用這樣的方法把海豚圍入淺灣中，然後集體屠殺，不為了食物，不為了生活的必需，像是嫉妒牠們的聰明，或是怨恨牠們的頑皮。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>23.</span>鬼頭刀也會游近船筏，但感覺總是那樣恍然，突然出現又突然失去蹤影。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>24.</span>牠游近船筏可沒覺得牠的善意或者惡意，僅僅是路過或者因緣際會罷了。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>25.</span>牠一點也不在乎船筏的陰影，不在乎船上虎視眈眈的漁人及漁具。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>26.</span>偶爾牠會好奇的停下來與你瞪上兩眼，然後從容離開。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>27.</span>牠那毫不畏懼的眼神，顯現牠不是智商不足，就是信心十足。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>28.</span>鬼頭刀不同於一般洄游性魚類慣用的灰黑保護色調，牠美麗的色彩像極了熱帶雨林中的花彩鸚鵡，不但不驚惶避諱任何注視的目光，反而是驕傲的展現自我的存在。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>29.</span>兩片鮮黃胸鰭平衡著青色的流線身軀，像一艘在海洋中悠游飛翔的潛艇。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>30.</span>牠的背上綴飾著藍色發亮星點，在墨藍的海水中如武士佩戴著勳章般的神氣，也像夜暗星光般的神祕與詭異。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>31.</span>雖然在魚市場鬼頭刀算是賤價的魚種，但是價錢的高低並不能絲毫減損牠在我心目中的價值。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>32.</span>牠的價值表現在牠的生命上，就像牠美麗的色彩與藍色星點，在離開海洋離開生命後，即刻消逝。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>33.</span>在我將近五年的海上經驗中，每次看到牠，我的心情都會像槳葉攪動後的海面般，波波痕痕。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>34.</span>初初下海的那年夏天，一個烏雲滿天傍晚，暴風雨正盤算跟著夜幕來襲，海湧伯把引擎催趕成急迫的回航節奏。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>35.</span>在立霧溪海口，一條大魚咬中了船尾拖釣的假餌，八十磅的粗線及緩衝用的內胎橡皮瞬間被拉成筆直，時空似乎凍結住了，就等候斷裂的一聲巨響。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>36.</span>我幾乎是尖叫呼喊著，海湧伯緩下船速回頭看著那條在船後凌空翻跳的大魚，示意我：「拉牠上來！」而且並沒有要過來幫忙的意思。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>37.</span>拉扯了半天，那大魚驚人的力量折騰得我手掌都起了水泡。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>38.</span>好不容易將牠拉近船尾。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>39.</span>牠也似乎認命了，終於安靜的停止跳躍。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>40.</span>這時我清楚的看到水面下這條巨大的鬼頭刀。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>41.</span>粉紅色的假餌掛在牠的嘴角，牠游水的姿態竟然還十分從容。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>42.</span>充滿自信的緩緩游向左側，用牠大大的左眼狠狠瞪我，那眼神毫無畏懼而且十分的不在乎；再悠閒的游向右方，右眼一樣的對我射出倨傲的神采。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>43.</span>當牠背上藍色明亮的星狀光點迷惑在我瞳孔上時，一股強烈的意識瞬間進入我的腦中，清楚的告訴我：「你已經失去了這條魚！」在我的夢裡，開始出現了跟鬼頭刀搏鬥的場景，那倨傲桀驁的眼神經常壓迫著我的夢，一遍又一遍，我撫摸著銳利的魚鉤，一遍又一遍把鮮豔的假餌提在眼前晃動。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>44.</span>我常常幻覺進入鬼頭刀牠的眼、牠的心，我終日沉浸悠游在藍色冰涼的海洋中，我看到船筏底部黑色的陰影在我頭上的海面光影中滑行而過，槳葉打出一團翻滾的白色泡沫。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>45.</span>我靜靜的等待，等待泡沫後那隻跟在船後游動的鮮美目標。 </span><br data-v-89101f28></p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 3</span><span data-v-89101f28><span class="lineNum" data-v-89101f28>46.</span>衝過去！大大的張開嘴，狠狠的咬下去……咬下去的剎那，意識又瞬間轉換到船上拉緊魚線的漁人，正強烈的感受鬼頭刀中鉤後強勁拉扯的抖動。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>47.</span>從海中的鬼頭刀到海面上拉線的漁人，我的精神陷入這樣的輪迴中，一遍遍的反覆演練，從不疲倦。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>48.</span>鬥志逐漸被激發成激昂的獸性，等待牠再度出現的心每一次伴隨著我出海。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>49.</span>這段期間，海湧伯看出我的沉默及我眼中燃燒的火炬，卻始終不曾為我說一句鼓勵的話，也許他期待的是一場公平的戰爭，或者是一堂漁人入門的必修課程。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>50.</span>遠山浮雲飛鳥波濤，海面上的一切是我們習慣了的亮麗世界。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>51.</span>薄薄一面之隔的海面下，那鬼頭刀浮沉的空間，是漁人視覺不可及的未知世界。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>52.</span>一個個餌鉤沉下水面，就像沉下一個個倒懸的問號，而答案往往是從零到無窮，甚或常常連問號也無法收回。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>53.</span>這是在放下餌釣或撒網當初誰也無法預知的結果。 </span><br data-v-89101f28></p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 4</span><span data-v-89101f28><span class="lineNum" data-v-89101f28>54.</span>所以漁人必須學會承受不自主的命運，學會等待、落空、失望，或者學會如何承受難堪的狂喜。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>55.</span>海洋那般嚴格的試煉漁人的原始動物性格，卻又不斷的誘惑漁人下海的勇氣，如潮汐的漲退般，漁人宿命的在充滿希望與絕望的空隙間擺盪。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>56.</span>跟鬼頭刀纏鬥的意志如能量般累積在我的胸腔。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>57.</span>船筏一次次的在立霧溪海口巡弋，也一次次的落空失望。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>58.</span>感覺上鬼頭刀似乎隱藏在海面下的某個角落窺視著我們，那幽靈般藍色的發亮星點似乎環繞在船筏四周，而又在我興奮的跳躍起來後消失無蹤。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>59.</span>海上的日子在苦悶的等待中彷彿海水的味道鹹鹹苦苦的。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>60.</span>偶爾低空貼浪覓食的海鳥，常被我誤以為是跳出水面的飛魚而興奮起來，而灰暗下來。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>61.</span>鬼頭刀是少數兩性表徵明顯的魚類，公魚額頭高聳如崖壁，就像頭上頂著一把劈水的刀斧，像公牛隆起的肩或雄獅威風的鬃鬣及吼叫；母魚全身體型修長圓潤，連眼神都帶著幾許溫柔。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>62.</span>「鬼頭刀」這樣的名稱似乎是來自公魚的威容，漁人又稱牠為「飛魚虎」，從「鬼」、「刀」、「虎」這三個字就足以形容鬼頭刀在漁人眼中是如此神祕、銳利及凶猛。 </span><br data-v-89101f28></p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 5</span><span data-v-89101f28><span class="lineNum" data-v-89101f28>63.</span>同樣時間、同樣地點、同樣場景，船尾的魚線再度被拉成筆直。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>64.</span>大約在船後一百米處中鉤的鬼頭刀不斷的翻躍到空中，重重的摔滾在水面上。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>65.</span>我用興奮得幾乎顫抖的聲音，呼喊海湧伯放慢船速，多日來等待的抑鬱都在中魚的瞬間明朗起來。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>66.</span>如同長久沉浸的幻影中那般熟練的姿態，我雙膝頂住船尾板，手中緊緊的握住魚線。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>67.</span>心裡充滿自信的告訴自己：「決戰的時刻終於來了。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>68.</span>」一把，一把，隨著牠跳躍的節奏有力的收線，我嘴裡咕噥著海湧伯不堪入耳的髒話。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>69.</span>在比鬼頭刀更威猛的氣勢下，我可以想像背後海湧伯讚許點頭的微笑表情。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>70.</span>已經收回了大約五十米線，牠再度躍出水面。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>71.</span>我竟然看到兩隻鬼頭刀一起跳出水面，大概是眼裡的戰鬥火花模糊了我的視覺，用袖口抹了下眼角……沒有看錯，是兩隻鬼頭刀幾乎是頭靠著頭一起躍出水面。 </span><br data-v-89101f28></p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 6</span><span data-v-89101f28><span class="lineNum" data-v-89101f28>72.</span>這是什麼情況？在我牢不可破的戰鬥心情中，滲入了一個問號。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>73.</span>並沒有放鬆我收線的手，再拉進了將近三十米線。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>74.</span>兩隻鬼頭刀一起躍起，一起摔下，一起游在水裡。 </span><br data-v-89101f28></p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 7</span><span data-v-89101f28><span class="lineNum" data-v-89101f28>75.</span>這樣的距離已經可以確定，中鉤的只有一隻，而另一隻是自由的。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>76.</span>為什麼會這樣呢？第二個問號重重的打進我的意志中。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>77.</span>再拉近十多米，這場鬥爭似乎已接近尾聲。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>78.</span>現在，我可以清楚看到，看到中鉤的是一隻母魚，而陪她一起摔滾的是一隻公魚。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>79.</span>母魚游向左方，公魚也貼著身游向左邊，那親密的距離彷彿是在耳邊叮嚀，在耳邊安慰。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>80.</span>尤其當我看到那公魚的眼神，不再是記憶中的倨傲從容，而是無限的悲傷、痛苦或者柔情。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>81.</span>那眼神說話了：「讓我來分擔妳的痛苦，我願意與妳同生共死陪伴妳到永遠。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>82.</span>」牠們背上的藍色光點一起躍進我的眼裡，竟然是那般的刺眼、光亮。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>83.</span>海湧伯似乎察覺到了我逐漸鬆垮的臂膀，不知什麼時候已站立在我的身旁。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>84.</span>我感覺到他在我的耳邊說：「眼睛閉起來吧！如果當做是一場戰爭，就該忘掉眼淚……。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>85.</span>」高傲美麗而且多情的鬼頭刀哇！如果是岸上的鬥爭我絕不遲疑，因為在岸上的世界，溫情就是懦弱就是包袱。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>86.</span>但，我心裡的這片海原本多情，為這美麗的魚和這美麗的情意，這場景畢竟人間少見，我捨不得閉眼。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>87.</span>堅持的肩膀很快的完全鬆垮了，手臂不再有力。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>88.</span>把岸上的鬥爭習性帶來海洋，原本就是我最大的錯誤。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>89.</span>海湧伯撿起折斷了的魚鉤說：「這不是普通的力量。 </span><br data-v-89101f28><span data-v-89101f28><span class="lineNum" data-v-89101f28>90.</span>」夕陽煥照，紅霞滿天，船隻落寞回航，蓊鬱遠山以其永恆不變的姿態橫亙浪緣，飛魚照樣飛起，照樣。 </span><br data-v-89101f28></p>',
        7
      ),
      qt = [Wt],
      Ht = { key: 2, class: "summary" },
      Yt = Object(n["g"])(
        '<p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 1</span> 水面下，鬼頭刀以牠驚人的爆發力，繼續盯住在空氣中快速拍動翅鰭的飛魚，也算準牠落水的時刻，從容優美的迴身轉彎，把嘴巴特別張大，等待飛魚的歸來。 </p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 2</span> 海豚常常會跟在船筏邊跳躍，雖然牠們的泳速遠遠高過船筏，但是牠們就那麼俏皮的跟在船筏邊戲耍。 我會加足馬力，把滿舵，讓船筏急速的壓向跳躍的海豚，海豚會跟著船筏的轉彎而轉彎，仍舊與船筏保持一定的距離在船舷邊跳躍。 在牠們躍出水面的瞬間，我看到牠們的眼睛帶著笑容，像一群非常非常頑皮的猴子。 我常常幻覺進入鬼頭刀牠的眼、牠的心，我終日沉浸悠游在藍色冰涼的海洋中，我看到船筏底部黑色的陰影在我頭上的海面光影中滑行而過，槳葉打出一團翻滾的白色泡沫。 </p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 3</span> 衝過去！大大的張開嘴，狠狠的咬下去……咬下去的剎那，意識又瞬間轉換到船上拉緊魚線的漁人，正強烈的感受鬼頭刀中鉤後強勁拉扯的抖動。 </p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 4</span> 海洋那般嚴格的試煉漁人的原始動物性格，卻又不斷的誘惑漁人下海的勇氣，如潮汐的漲退般，漁人宿命的在充滿希望與絕望的空隙間擺盪。 </p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 5</span> 如同長久沉浸的幻影中那般熟練的姿態，我雙膝頂住船尾板，手中緊緊的握住魚線。 </p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 6</span> 這是什麼情況？在我牢不可破的戰鬥心情中，滲入了一個問號。 </p><p data-v-89101f28><span class="blockNum" data-v-89101f28>block : 7</span> 現在，我可以清楚看到，看到中鉤的是一隻母魚，而陪她一起摔滾的是一隻公魚。 尤其當我看到那公魚的眼神，不再是記憶中的倨傲從容，而是無限的悲傷、痛苦或者柔情。 </p>',
        7
      ),
      Zt = [Yt];
    function _t(a, t, s, e, c, p) {
      return (
        Object(n["l"])(),
        Object(n["e"])("div", Mt, [
          xt,
          Object(n["f"])("div", null, [
            Et,
            Bt,
            Object(n["f"])("div", Tt, [
              Object(n["f"])("div", Ft, [
                Object(n["f"])(
                  "button",
                  {
                    onClick:
                      t[0] ||
                      (t[0] = function (a) {
                        return p.openContent(a);
                      }),
                    class: "original",
                  },
                  " 原文(句) "
                ),
                Object(n["f"])(
                  "button",
                  {
                    onClick:
                      t[1] ||
                      (t[1] = function (a) {
                        return p.openContent(a);
                      }),
                    class: "block",
                  },
                  "分割主題"
                ),
                Object(n["f"])(
                  "button",
                  {
                    onClick:
                      t[2] ||
                      (t[2] = function (a) {
                        return p.openContent(a);
                      }),
                    class: "summary",
                  },
                  "摘要"
                ),
              ]),
              "original" == a.open
                ? (Object(n["l"])(), Object(n["e"])("div", Jt, Rt))
                : Object(n["d"])("", !0),
              "block" == a.open
                ? (Object(n["l"])(), Object(n["e"])("div", Qt, qt))
                : Object(n["d"])("", !0),
              "summary" == a.open
                ? (Object(n["l"])(), Object(n["e"])("div", Ht, Zt))
                : Object(n["d"])("", !0),
            ]),
          ]),
        ])
      );
    }
    var Vt = {
      computed: Object(D["a"])({}, Object(C["c"])("AIDetails", ["open"])),
      methods: Object(D["a"])(
        Object(D["a"])({}, Object(C["b"])("AIDetails", ["setOpen"])),
        {},
        {
          openContent: function (a) {
            this.setOpen(a.target.classList[0]);
          },
        }
      ),
    };
    s("e2f6");
    const zt = N()(Vt, [
      ["render", _t],
      ["__scopeId", "data-v-89101f28"],
    ]);
    var Ut = zt,
      Xt = {
        props: ["projectName"],
        components: { AIDetails1: It, AIDetails2: Ut },
      };
    s("6712");
    const Kt = N()(Xt, [
      ["render", At],
      ["__scopeId", "data-v-0851fde8"],
    ]);
    var $t = Kt,
      as = { class: "CertificateDetails-details" };
    function ts(a, t, s, e, c, p) {
      var d = Object(n["q"])("CertificateDetails1");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", as, [
          "TOEIC 測驗" == s.projectName
            ? (Object(n["l"])(), Object(n["c"])(d, { key: 0 }))
            : Object(n["d"])("", !0),
        ])
      );
    }
    var ss = s("68eec"),
      ns = s.n(ss),
      es = function (a) {
        return (
          Object(n["n"])("data-v-0bf10066"), (a = a()), Object(n["m"])(), a
        );
      },
      cs = { class: "CertificateDetails-1" },
      ps = es(function () {
        return Object(n["f"])("img", { src: ns.a }, null, -1);
      }),
      ds = [ps];
    function ls(a, t, s, e, c, p) {
      return Object(n["l"])(), Object(n["e"])("div", cs, ds);
    }
    var fs = {};
    s("a10b");
    const vs = N()(fs, [
      ["render", ls],
      ["__scopeId", "data-v-0bf10066"],
    ]);
    var is = vs,
      rs = { props: ["projectName"], components: { CertificateDetails1: is } };
    s("5519");
    const os = N()(rs, [
      ["render", ts],
      ["__scopeId", "data-v-2f2816a4"],
    ]);
    var us = os,
      bs = {
        computed: Object(D["a"])(
          {},
          Object(C["c"])("details", [
            "opened",
            "projectName",
            "abstract",
            "className",
          ])
        ),
        methods: Object(D["a"])(
          Object(D["a"])({}, Object(C["b"])("details", ["setClosed"])),
          {},
          {
            closeDiv: function () {
              this.setClosed();
            },
          }
        ),
        components: {
          FrontendDetails: Ua,
          AwardsDetails: kt,
          AINLPDetails: $t,
          CertificateDetails: us,
        },
      };
    const ms = N()(bs, [["render", ka]]);
    var js = ms,
      Os = function (a) {
        return (
          Object(n["n"])("data-v-4a788105"), (a = a()), Object(n["m"])(), a
        );
      },
      Ns = { class: "card certificate" },
      gs = Os(function () {
        return Object(n["f"])(
          "div",
          { class: "title head layer-1" },
          "Certificate",
          -1
        );
      }),
      ks = { class: "certificate" };
    function hs(a, t, s, e, c, p) {
      var d = Object(n["q"])("ProjectCard");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", Ns, [
          gs,
          Object(n["f"])("div", ks, [
            (Object(n["l"])(!0),
            Object(n["e"])(
              n["a"],
              null,
              Object(n["p"])(a.certificate, function (a, t) {
                return (
                  Object(n["l"])(),
                  Object(n["c"])(
                    d,
                    {
                      key: t,
                      title: a.title,
                      abstract: a.abstract,
                      className: "certificate",
                    },
                    null,
                    8,
                    ["title", "abstract"]
                  )
                );
              }),
              128
            )),
          ]),
        ])
      );
    }
    var As = {
      computed: Object(D["a"])(
        {},
        Object(C["c"])("certificate", ["certificate"])
      ),
      components: { ProjectCard: q },
    };
    s("2c68");
    const ws = N()(As, [
      ["render", hs],
      ["__scopeId", "data-v-4a788105"],
    ]);
    var ys = ws,
      Ds = function (a) {
        return (
          Object(n["n"])("data-v-0d595ceb"), (a = a()), Object(n["m"])(), a
        );
      },
      Cs = { class: "card practice-container" },
      Ps = Ds(function () {
        return Object(n["f"])(
          "div",
          { class: "title head layer-1" },
          "Practice",
          -1
        );
      }),
      Ss = { class: "practice" };
    function Is(a, t, s, e, c, p) {
      var d = Object(n["q"])("ProjectCard");
      return (
        Object(n["l"])(),
        Object(n["e"])("div", Cs, [
          Ps,
          Object(n["f"])("div", Ss, [
            (Object(n["l"])(!0),
            Object(n["e"])(
              n["a"],
              null,
              Object(n["p"])(a.practice, function (a, t) {
                return (
                  Object(n["l"])(),
                  Object(n["c"])(
                    d,
                    {
                      key: t,
                      title: a.title,
                      abstract: a.abstract,
                      githubLink: a.githubLink,
                      className: "practice",
                    },
                    null,
                    8,
                    ["title", "abstract", "githubLink"]
                  )
                );
              }),
              128
            )),
          ]),
        ])
      );
    }
    var Ls = {
      computed: Object(D["a"])({}, Object(C["c"])("practice", ["practice"])),
      components: { ProjectCard: q },
    };
    s("92d8");
    const Ms = N()(Ls, [
      ["render", Is],
      ["__scopeId", "data-v-0d595ceb"],
    ]);
    var xs = Ms,
      Es = {
        mounted: function () {
          var a = document.querySelector(".container");
          a.addEventListener("scroll", function () {
            var t = a.scrollTop + a.clientHeight - a.scrollHeight;
            document.querySelector(".floating-arrow").style.opacity =
              t <= 10 && t >= -10 ? "0" : "1";
          });
        },
        components: {
          Introduction: k,
          ProjectsAndSkills: z,
          Awards: sa,
          FloatingArrow: va,
          Details: js,
          Certificate: ys,
          Practice: xs,
        },
      };
    const Bs = N()(Es, [["render", l]]);
    var Ts = Bs,
      Fs = { components: { Main: Ts } };
    const Js = N()(Fs, [["render", e]]);
    var Gs = Js,
      Rs = {
        namespaced: !0,
        state: {
          awards: [
            {
              title: "實務專題製作競賽",
              abstract:
                "參加2021年國立高雄科技大學，電機與資訊學院學生實務專題製作競賽。獲得佳作。",
            },
            {
              title: "程式交易競賽",
              abstract: "參加第四屆高雄杯程式交易競賽。獲得佳作。",
            },
            { title: "Placeholder", abstract: "Placeholder" },
            { title: "Placeholder", abstract: "Placeholder" },
          ],
        },
        mutations: {},
        actions: {},
      },
      Qs = {
        namespaced: !0,
        state: {
          active: !0,
          skills: {
            basic: ["HTML", "CSS", "Javascript"],
            preprocessor: ["SCSS"],
            framework: ["Vue.js", "Vuex"],
          },
          projects: [
            {
              title: "履歷網站(本網頁)",
              abstract:
                "利用Vuejs製作。結合先前所學，將RWD、Accessibility實作。",
            },
            {
              title: "練習HTML、JS、CSS運用",
              abstract: "實作小插件以練習CSS動畫、JS控制HTML DOM等。",
            },
            { title: "Placeholder", abstract: "Placeholder" },
            { title: "Placeholder", abstract: "Placeholder" },
          ],
        },
        mutations: {
          toggleActive: function (a) {
            a.active = !a.active;
          },
        },
        actions: {},
      },
      Ws = {
        namespaced: !0,
        state: {
          active: !1,
          skills: { language: ["Python"], framework: ["Pytorch", "keras"] },
          projects: [
            {
              title: "BERT+LSTM 文本分類器",
              abstract:
                "與台師大華語文科技中心合作。利用BERT將長篇文章分段處理，產生語意向量，再以LSTM模仿人類閱讀順序，整合判斷其分類。",
            },
            {
              title: "Auto Summary",
              abstract:
                "專為長文本所製作，分割出文章中各個主題，再從中挑選摘要句，獲得較為全面的摘要。降低因文章篇幅長，摘要後所遺漏的細節。",
            },
            { title: "Placeholder", abstract: "Placeholder" },
            { title: "Placeholder", abstract: "Placeholder" },
          ],
        },
        mutations: {
          toggleActive: function (a) {
            a.active = !a.active;
          },
        },
        actions: {},
      },
      qs = {
        namespaced: !0,
        state: { opened: !1, className: "", projectName: "", abstract: "" },
        mutations: {
          setOpened: function (a, t) {
            var s = t.cName,
              n = t.pName,
              e = t.abstract;
            (a.opened = !0),
              (a.className = s),
              (a.projectName = n),
              (a.abstract = e);
          },
          setClosed: function (a) {
            (a.opened = !1),
              (a.className = ""),
              (a.projectName = ""),
              (a.abstract = "");
          },
        },
        actions: {},
      },
      Hs = {
        namespaced: !0,
        state: { open: "summary" },
        mutations: {
          setOpen: function (a, t) {
            a.open = t;
          },
        },
        actions: {},
      },
      Ys = {
        namespaced: !0,
        state: {
          certificate: [
            { title: "TOEIC 測驗", abstract: "聽力:455 閱讀:430 總分:885" },
          ],
        },
        mutations: {},
        actions: {},
      },
      Zs = {
        namespaced: !0,
        state: {
          practice: [
            {
              title: "moving_background",
              abstract: "PC : 滑鼠互動, Mobile : 手機左右搖(Android)",
              githubLink: "https://github.com/AlexFangSW/moving_background",
            },
            {
              title: "Login form",
              abstract: "參考Pinterest上的設計，加上一些動畫",
              githubLink: "https://github.com/AlexFangSW/Login_form",
            },
            {
              title: "Scroll Snap",
              abstract: "練習製作Scroll Snap功能",
              githubLink: "https://github.com/AlexFangSW/scroll_snap",
            },
            {
              title: "vuex_store_practice",
              abstract: "把State, Mutation, Action, Module 都練習用用",
              githubLink: "https://github.com/AlexFangSW/vuex_store_practice",
            },
          ],
        },
        mutations: {},
        actions: {},
      },
      _s = Object(C["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {
          awards: Rs,
          frontend: Qs,
          aiNLP: Ws,
          details: qs,
          AIDetails: Hs,
          certificate: Ys,
          practice: Zs,
        },
      }),
      Vs = (s("f27b"), Object(n["b"])(Gs));
    Vs.use(_s), Vs.mount("#app");
  },
  "607b": function (a, t, s) {
    a.exports = s.p + "img/GitHub_Logo.cefc2023.png";
  },
  6712: function (a, t, s) {
    "use strict";
    s("4d7a");
  },
  "68eec": function (a, t, s) {
    a.exports = s.p + "img/TOEIC.a20dd52b.png";
  },
  "816d": function (a, t, s) {
    "use strict";
    s("4dae");
  },
  "8ebd": function (a, t, s) {},
  "92d8": function (a, t, s) {
    "use strict";
    s("2ead");
  },
  9578: function (a, t, s) {
    "use strict";
    s("f66e");
  },
  "959a": function (a, t, s) {
    "use strict";
    s("dd89");
  },
  "9cab": function (a, t, s) {},
  a10b: function (a, t, s) {
    "use strict";
    s("05b1");
  },
  a934: function (a, t, s) {},
  ba48: function (a, t, s) {},
  cf79: function (a, t) {
    a.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=";
  },
  d824: function (a, t, s) {
    "use strict";
    s("55ae");
  },
  dd89: function (a, t, s) {},
  e2f6: function (a, t, s) {
    "use strict";
    s("8ebd");
  },
  f01f: function (a, t, s) {
    "use strict";
    s("53c4");
  },
  f27b: function (a, t, s) {},
  f66e: function (a, t, s) {},
});
//# sourceMappingURL=app.f95d04bd.js.map
