webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/intro/index.js":
/*!***********************************!*\
  !*** ./components/intro/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./components/intro/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\@MAliCD31E\\@Front-End_Developer\\#Projects\\#Freelance\\Tronx\\components\\intro\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const assetPrefix = next_config__WEBPACK_IMPORTED_MODULE_0___default()().publicRuntimeConfig.assetPrefix;

class Intro extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    document.querySelectorAll(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief, " div:last-child")).forEach(brief => {
      brief.innerHTML = [...brief.innerText].map(char => "<span>".concat(char, "</span>")).join('');
    });
    const wheelAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["gsap"].timeline();
    wheelAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.video), {
      x: '-50%',
      duration: 1,
      ease: 'none'
    });
    wheelAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.video, " .").concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view), {
      x: "100%",
      duration: 1,
      ease: 'none'
    }, '-=1');
    wheelAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content), {
      x: '0%',
      duration: 1,
      ease: 'none'
    }, '-=1');
    wheelAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content, " .").concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view), {
      x: "50%",
      duration: 1,
      ease: 'none'
    }, '-=1');
    wheelAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble), {
      x: '25%',
      y: '25%',
      duration: 0.75,
      ease: 'none'
    }, '-=0.75');
    wheelAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble, " .").concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view), {
      x: "-25%",
      y: "-25%",
      duration: 0.75,
      ease: 'none'
    }, '-=0.75');
    wheelAnimation.pause();
    const introAnimation = gsap__WEBPACK_IMPORTED_MODULE_3__["gsap"].timeline();
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief, " div"), {
      top: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
      ease: 'slow(0.7, 0.7, false)'
    });
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief, " div:not(:last-child)"), {
      top: -64,
      opacity: 0,
      stagger: 0.2,
      duration: 0.4,
      ease: 'slow(0.7, 0.7, false)'
    }, '+=1');
    introAnimation.set(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief, " div:last-child"), {
      display: 'grid',
      gridAutoFlow: 'column',
      justifyContent: 'space-around',
      lineHeight: '1em'
    }, "-=0.2");
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief), {
      width: '72%',
      duration: 0.4,
      ease: 'slow(0.7, 0.7, false)'
    }, "-=0.2");
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief, " div:last-child"), {
      fontSize: '10vw',
      duration: 0.2,
      ease: 'slow(0.7, 0.7, false)'
    }, '-=0.1');
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief), {
      width: '92%',
      top: '100%',
      yPercent: -100,
      duration: 0.4,
      ease: 'slow(0.7, 0.7, false)'
    });
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slide), {
      height: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: 'slow(0.7, 0.7, false)',
      onStart: () => {
        document.querySelector(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.video, " video")).play();
      }
    }, '-=0.2');
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.intro, " > .").concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief, " span"), {
      opacity: 0,
      stagger: 0.18,
      duration: 0,
      ease: 'slow(0.7, 0.7, false)',
      onComplete: () => {
        let wheelPointer = 0;
        document.querySelector(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.intro)).addEventListener('wheel', event => {
          if (event.wheelDeltaY < 0 && wheelPointer < 100) {
            wheelPointer = Math.min(100, wheelPointer + 4.8 * (event.wheelDeltaY / -120));
          }

          if (event.wheelDeltaY > 0 && wheelPointer > 0) {
            wheelPointer = Math.max(0, wheelPointer - 4.8 * (event.wheelDeltaY / 120));
          }

          wheelAnimation.progress(wheelPointer / 100);
        });
      }
    }, '-=1.2');
  }

  render() {
    return __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.intro,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.video,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("video", {
      loop: true,
      muted: true,
      preload: "auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("source", {
      src: "".concat(assetPrefix, "/intro.mp4"),
      type: "video/mp4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a['brief__title'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, 'tronx'.split('').map((char, key) => __jsx("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, char))))), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, beatae repellendus voluptates reiciendis quae porro, explicabo temporibus recusandae laborum, eaque nobis optio eligendi aperiam asperiores ipsam consequatur provident dignissimos error."), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.grid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cell,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a['brief__title'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, 'tronx'.split('').map((char, key) => __jsx("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, char))))), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bubble,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.circle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a['brief__title'],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, 'tronx'.split('').map((char, key) => __jsx("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, char)))))), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    })), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.brief,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "this"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "is"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "tronx")));
  }

}

const mapStateToProps = state => ({
  intro_loading: state.intro_loading
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Intro));

/***/ })

})
//# sourceMappingURL=index.js.c1b3bbea63946fd14a26.hot-update.js.map