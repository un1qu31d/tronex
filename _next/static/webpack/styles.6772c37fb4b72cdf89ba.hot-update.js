webpackHotUpdate("styles",{

/***/ "./components/header/index.scss":
/*!**************************************!*\
  !*** ./components/header/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_3Q9c-pq5xWxm_qg4pjhUm3","logo":"_2r1VQiQr7y_loqy-qvn0vi","links":"_2D7KmtuYvOAwJVmh704fU7","label":"_1gC-7PVTJOzznpCDE1iS4H"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1576897357666");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6772c37fb4b72cdf89ba.hot-update.js.map