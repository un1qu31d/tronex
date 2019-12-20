webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/intro/index.js":
/*!***********************************!*\
  !*** ./components/intro/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./components/intro/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\@MAliCD31E\\@Front-End_Developer\\#Projects\\#Freelance\\Tronx\\components\\intro\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Intro extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    document.querySelectorAll(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief, " div:last-child")).forEach(brief => {
      brief.innerHTML = [...brief.innerText].map(char => "<span>".concat(char, "</span>")).join('');
    });
    const introAnimation = gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].timeline();
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.intro, " > .").concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief, " div"), {
      top: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
      ease: 'slow(0.7, 0.7, false)'
    });
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief, " div:not(:last-child)"), {
      top: -64,
      opacity: 0,
      stagger: 0.2,
      duration: 0.4,
      ease: 'slow(0.7, 0.7, false)'
    }, '+=1');
    introAnimation.set(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief, " div:last-child"), {
      display: 'grid',
      gridAutoFlow: 'column',
      justifyContent: 'space-around',
      lineHeight: '1em'
    }, "-=0.2");
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief), {
      width: '72%',
      duration: 0.4,
      ease: 'slow(0.7, 0.7, false)'
    }, "-=0.2");
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief, " div:last-child"), {
      fontSize: '10vw',
      duration: 0.2,
      ease: 'slow(0.7, 0.7, false)'
    }, '-=0.1');
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief), {
      width: '92%',
      top: '100%',
      yPercent: -100,
      duration: 0.4,
      ease: 'slow(0.7, 0.7, false)'
    });
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide), {
      height: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: 'slow(0.7, 0.7, false)'
    }, '-=0.2');
    introAnimation.to(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.intro, " > .").concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief, " span"), {
      opacity: 0,
      stagger: 0.18,
      duration: 0,
      ease: 'slow(0.7, 0.7, false)'
    }, '-=1.2');
    window.setTimeout(() => {
      document.querySelectorAll(".".concat(_index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.video, " video")).forEach(element => {
        element.play();
        element.muted = false;
      });
    }, introAnimation.duration() * 1000 - 1200);
  }

  render() {
    return __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.video,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("video", {
      loop: true,
      muted: true,
      preload: "auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("source", {
      src: "/intro.mp4",
      type: "video/mp4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("tt", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "this"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "is"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "tronx")))), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, beatae repellendus voluptates reiciendis quae porro, explicabo temporibus recusandae laborum, eaque nobis optio eligendi aperiam asperiores ipsam consequatur provident dignissimos error."), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.view,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.grid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.cell,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), __jsx("tt", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "this"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "is"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "tronx")))), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slides,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), __jsx("div", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), __jsx("tt", {
      className: _index_scss__WEBPACK_IMPORTED_MODULE_3___default.a.brief,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "this"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "is"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "tronx")));
  }

}

const mapStateToProps = state => ({
  intro_loading: state.intro_loading
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Intro));

/***/ })

})
//# sourceMappingURL=index.js.efd52ce694adb03f4649.hot-update.js.map