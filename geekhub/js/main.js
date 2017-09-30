document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 500);
};
let overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function Modal(settings) {
  this.open = document.querySelectorAll(settings.open);
  this.addClass = settings.addClass;
  this.nameClose = settings.close;

  // this.overlay = document.createElement('div');
  // this.overlay.classList.add(settings.overlayClass);
  // document.body.appendChild(this.overlay);


  this.innerBox = document.createElement('div');
  this.innerBox.classList.add(settings.popupClass);
  document.body.appendChild(this.innerBox);

  this.eventOpen = settings.eventOpen || 'click';
  this.eventClose = settings.eventClose || 'click';

  this.getBtn.call(this);
}

Modal.prototype.getBtn = function getBtn() {
  for (let i = 0; i < this.open.length; i++) {
    this.open[i].addEventListener(this.eventOpen, this.inner.bind(this));
  }
};

Modal.prototype.inner = function show(e) {
  let innerClass = e.target.getAttribute('data-modal');
  let box = document.querySelector(innerClass);
  this.show.call(this, box.innerHTML);
};

Modal.prototype.show = function show(boxInnerHtml) {
  overlay.classList.add(this.addClass);
  this.innerBox.classList.add(this.addClass);
  this.innerBox.innerHTML = boxInnerHtml;
  overlay.addEventListener(this.eventClose, this.hide.bind(this));
  this.closeIcon.call(this);
  new Accariod({
    link: '.nav__responsive .header__menu-link-drop',
  })
  
};

Modal.prototype.closeIcon = function closeIcon() {
  let elementsClose = document.querySelectorAll(this.nameClose);

  for (let i = 0; i < elementsClose.length; i++) {
    elementsClose[i].addEventListener('click', this.hide.bind(this));
  }
};

Modal.prototype.hide = function hide() {
  overlay.classList.remove(this.addClass);
  this.innerBox.classList.remove(this.addClass);
};

// Модальное окна в  Services
new Modal({
  open: '.advantages__info-lear-more[data-modal]',
  close: '.close-modal',
  //overlayClass: 'overlay',
  popupClass: 'modal',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

// Модальное окна Progress
new Modal({
  open: '.progress__img[data-modal]',
  close: '.show .progress__img',
  //overlayClass: 'overlay',
  popupClass: 'big-img',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});

//menu
new Modal({
  open: '.header__menu-dropdown',
  close: '.header__menu-close',
  //overlayClass: 'overlay',
  popupClass: 'nav__responsive',
  addClass: 'show',
  eventOpen: 'click',
  eventClose: 'click',
});
function Slider(settings) {
  this.prev = document.querySelector(settings.prev);
  this.next = document.querySelector(settings.next);
  this.slider = document.querySelector(settings.slider);

  this.dots = document.querySelectorAll(settings.dots);
  this.len = this.slider.children.length;
  this.count = 0;

  this.next.addEventListener('click', this.slideNext.bind(this));
  this.prev.addEventListener('click', this.slidePrev.bind(this));

  this.dotsSlide.call(this);

  if (settings.auto) {
    this.time = settings.time || 7000;
    this.autoScroll();
  }
}


Slider.prototype.slideNext = function slideNext() {
  this.deleteDots();
  this.count++;
  this.mainSlider.call(this);
};


Slider.prototype.slidePrev = function slidePrev() {
  this.deleteDots();
  this.count--;
  this.mainSlider.call(this);
};


Slider.prototype.mainSlider = function mainSlider(count) {
  if (count !== undefined) {
    this.count = +count;
  }

  this.countReset();
  this.dots[this.count].classList.add('active');
  this.slider.style.transform = `translateX(-${this.count}00%)`;
};


Slider.prototype.countReset = function countReset() {
  if (this.count >= this.len) {
    this.count = 0;
  } else if (this.count < 0) {
    this.count = this.len - 1;
  }
};


Slider.prototype.dotsSlide = function dotsSlide() {
  for (let i = 0; i < this.dots.length; i++) {
    this.dots[i].addEventListener('click', this.getNumberCircle.bind(this));
  }
};


Slider.prototype.getNumberCircle = function getNumberCircle(e) {
  this.dotsCount = e.target.getAttribute('data-carousel-circle');
  this.mainSlider.call(this, this.dotsCount);

  for (let i = 0; i < this.dots.length; i++) {
    this.dots[i].classList.remove('active');
  }

  e.target.classList.add('active');
};


Slider.prototype.deleteDots = function deleteDots() {
  this.dots[this.count].classList.remove('active');
};


Slider.prototype.autoScroll = function autoScroll() {
  this.timerId = setInterval(() => {
    this.slideNext();
  }, this.time);
};


new Slider({
  prev: '#slide-prev',
  next: '#slide-next',
  slider: '.sustomers-words__list',
  dots: '.sustomers__slider-dots .slider-dot',
  auto: false,
  time: 7000,
});

new Slider({
  prev: '.header__slider-prev',
  next: '.header__slider-next',
  slider: '.header__slider-list',
  dots: '.header__slider-dots span',
  auto: true,
  time: 7000,
});

"use strict";

(function () {
  var a,
      b,
      c,
      d,
      e,
      f = function f(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  },
      g = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }return -1;
  };b = function () {
    function a() {}return a.prototype.extend = function (a, b) {
      var c, d;for (c in b) {
        d = b[c], null == a[c] && (a[c] = d);
      }return a;
    }, a.prototype.isMobile = function (a) {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
      );
    }, a.prototype.createEvent = function (a, b, c, d) {
      var e;return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
    }, a.prototype.emitEvent = function (a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
    }, a.prototype.addEvent = function (a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
    }, a.prototype.removeEvent = function (a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
    }, a.prototype.innerHeight = function () {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, a;
  }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
    function a() {
      this.keys = [], this.values = [];
    }return a.prototype.get = function (a) {
      var b, c, d, e, f;for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) {
        if (c = f[b], c === a) return this.values[b];
      }
    }, a.prototype.set = function (a, b) {
      var c, d, e, f, g;for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) {
        if (d = g[c], d === a) return void (this.values[c] = b);
      }return this.keys.push(a), this.values.push(b);
    }, a;
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }return a.notSupported = !0, a.prototype.observe = function () {}, a;
  }()), d = this.getComputedStyle || function (a) {
    return this.getPropertyValue = function (b) {
      var c;return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
        return b.toUpperCase();
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null;
    }, this;
  }, e = /(\-([a-z]){1})/g, this.WOW = function () {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);
    }return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function () {
      var a;return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
    }, e.prototype.start = function () {
      var b, c, d, e;if (this.stopped = !1, this.boxes = function () {
        var a, c, d, e;for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(b);
        }return e;
      }.call(this), this.all = function () {
        var a, c, d, e;for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(b);
        }return e;
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();else for (e = this.boxes, c = 0, d = e.length; d > c; c++) {
        b = e[c], this.applyStyle(b, !0);
      }return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
        return function (b) {
          var c, d, e, f, g;for (g = [], c = 0, d = b.length; d > c; c++) {
            f = b[c], g.push(function () {
              var a, b, c, d;for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) {
                e = c[a], d.push(this.doSync(e));
              }return d;
            }.call(a));
          }return g;
        };
      }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0;
    }, e.prototype.stop = function () {
      return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
    }, e.prototype.sync = function () {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, e.prototype.doSync = function (a) {
      var b, c, d, e, f;if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) {
          b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        }return f;
      }
    }, e.prototype.show = function (a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a;
    }, e.prototype.applyStyle = function (a, b) {
      var c, d, e;return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
        return function () {
          return f.customStyle(a, b, d, c, e);
        };
      }(this));
    }, e.prototype.animate = function () {
      return "requestAnimationFrame" in window ? function (a) {
        return window.requestAnimationFrame(a);
      } : function (a) {
        return a();
      };
    }(), e.prototype.resetStyle = function () {
      var a, b, c, d, e;for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
        a = d[b], e.push(a.style.visibility = "visible");
      }return e;
    }, e.prototype.resetAnimation = function (a) {
      var b;return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0;
    }, e.prototype.customStyle = function (a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a;
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
      var c, d, e, f;d = [];for (c in b) {
        e = b[c], a["" + c] = e, d.push(function () {
          var b, d, g, h;for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) {
            f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
          }return h;
        }.call(this));
      }return d;
    }, e.prototype.vendorCSS = function (a, b) {
      var c, e, f, g, h, i;for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) {
        i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      }return g;
    }, e.prototype.animationName = function (a) {
      var b;try {
        b = this.vendorCSS(a, "animation-name").cssText;
      } catch (c) {
        b = d(a).getPropertyValue("animation-name");
      }return "none" === b ? "" : b;
    }, e.prototype.cacheAnimationName = function (a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }, e.prototype.cachedAnimationName = function (a) {
      return this.animationNameCache.get(a);
    }, e.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, e.prototype.scrollCallback = function () {
      var a;return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
        var b, c, d, e;for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
          a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        }return e;
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, e.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;) {
        a = a.parentNode;
      }for (b = a.offsetTop; a = a.offsetParent;) {
        b += a.offsetTop;
      }return b;
    }, e.prototype.isVisible = function (a) {
      var b, c, d, e, f;return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
    }, e.prototype.util = function () {
      return null != this._util ? this._util : this._util = new b();
    }, e.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, e;
  }();
}).call(undefined);

new WOW().init();

function Accariod(setting) {
  this.title = document.querySelectorAll(setting.link);

  for (let i = 0; i < this.title.length; i++) {
    this.title[i].addEventListener('click', function openAccardion() {
      let accariodSection = this.nextElementSibling;

      if (accariodSection.style.maxHeight) {
        accariodSection.style.maxHeight = null;
      } else {
        accariodSection.style.maxHeight = `${accariodSection.scrollHeight}px`;
      }
    });
  }
}

new Accariod({
  link: '.header__menu-link-drop',
});


let arrr = [5, 6, 8, 7, 4, 5, 6, -20, 1, 3, 6, 555, 4, 5, 2000, -10, 4, 50, 6, 2, 14, 5];

function maxF(params) {
  let maxTotal = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] > maxTotal) {
      maxTotal = params[i];
    }
  }
  return maxTotal;
}

console.log(maxF(arrr));

function minM(params) {
  let maxTotal = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] < maxTotal) {
      maxTotal = params[i];
    }
  }
  return maxTotal;
}

console.log(minM(arrr));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmJvZHkub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVsb2FkZXInKTtcclxuICAgIGlmICghcHJlbG9hZGVyLmNsYXNzTGlzdC5jb250YWlucygnZG9uZScpKSB7XHJcbiAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XHJcbiAgICB9XHJcbiAgfSwgNTAwKTtcclxufTtcclxubGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcblxyXG5mdW5jdGlvbiBNb2RhbChzZXR0aW5ncykge1xyXG4gIHRoaXMub3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3Mub3Blbik7XHJcbiAgdGhpcy5hZGRDbGFzcyA9IHNldHRpbmdzLmFkZENsYXNzO1xyXG4gIHRoaXMubmFtZUNsb3NlID0gc2V0dGluZ3MuY2xvc2U7XHJcblxyXG4gIC8vIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIC8vIHRoaXMub3ZlcmxheS5jbGFzc0xpc3QuYWRkKHNldHRpbmdzLm92ZXJsYXlDbGFzcyk7XHJcbiAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xyXG5cclxuXHJcbiAgdGhpcy5pbm5lckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRoaXMuaW5uZXJCb3guY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5wb3B1cENsYXNzKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5uZXJCb3gpO1xyXG5cclxuICB0aGlzLmV2ZW50T3BlbiA9IHNldHRpbmdzLmV2ZW50T3BlbiB8fCAnY2xpY2snO1xyXG4gIHRoaXMuZXZlbnRDbG9zZSA9IHNldHRpbmdzLmV2ZW50Q2xvc2UgfHwgJ2NsaWNrJztcclxuXHJcbiAgdGhpcy5nZXRCdG4uY2FsbCh0aGlzKTtcclxufVxyXG5cclxuTW9kYWwucHJvdG90eXBlLmdldEJ0biA9IGZ1bmN0aW9uIGdldEJ0bigpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub3Blbi5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5vcGVuW2ldLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE9wZW4sIHRoaXMuaW5uZXIuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuTW9kYWwucHJvdG90eXBlLmlubmVyID0gZnVuY3Rpb24gc2hvdyhlKSB7XHJcbiAgbGV0IGlubmVyQ2xhc3MgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwnKTtcclxuICBsZXQgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihpbm5lckNsYXNzKTtcclxuICB0aGlzLnNob3cuY2FsbCh0aGlzLCBib3guaW5uZXJIVE1MKTtcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gc2hvdyhib3hJbm5lckh0bWwpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQodGhpcy5hZGRDbGFzcyk7XHJcbiAgdGhpcy5pbm5lckJveC5jbGFzc0xpc3QuYWRkKHRoaXMuYWRkQ2xhc3MpO1xyXG4gIHRoaXMuaW5uZXJCb3guaW5uZXJIVE1MID0gYm94SW5uZXJIdG1sO1xyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50Q2xvc2UsIHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcclxuICB0aGlzLmNsb3NlSWNvbi5jYWxsKHRoaXMpO1xyXG4gIG5ldyBBY2NhcmlvZCh7XHJcbiAgICBsaW5rOiAnLm5hdl9fcmVzcG9uc2l2ZSAuaGVhZGVyX19tZW51LWxpbmstZHJvcCcsXHJcbiAgfSlcclxuICBcclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5jbG9zZUljb24gPSBmdW5jdGlvbiBjbG9zZUljb24oKSB7XHJcbiAgbGV0IGVsZW1lbnRzQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtZUNsb3NlKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50c0Nsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBlbGVtZW50c0Nsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxufTtcclxuXHJcbk1vZGFsLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hZGRDbGFzcyk7XHJcbiAgdGhpcy5pbm5lckJveC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWRkQ2xhc3MpO1xyXG59O1xyXG5cclxuLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdCwINCyICBTZXJ2aWNlc1xyXG5uZXcgTW9kYWwoe1xyXG4gIG9wZW46ICcuYWR2YW50YWdlc19faW5mby1sZWFyLW1vcmVbZGF0YS1tb2RhbF0nLFxyXG4gIGNsb3NlOiAnLmNsb3NlLW1vZGFsJyxcclxuICAvL292ZXJsYXlDbGFzczogJ292ZXJsYXknLFxyXG4gIHBvcHVwQ2xhc3M6ICdtb2RhbCcsXHJcbiAgYWRkQ2xhc3M6ICdzaG93JyxcclxuICBldmVudE9wZW46ICdjbGljaycsXHJcbiAgZXZlbnRDbG9zZTogJ2NsaWNrJyxcclxufSk7XHJcblxyXG4vLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90LAgUHJvZ3Jlc3NcclxubmV3IE1vZGFsKHtcclxuICBvcGVuOiAnLnByb2dyZXNzX19pbWdbZGF0YS1tb2RhbF0nLFxyXG4gIGNsb3NlOiAnLnNob3cgLnByb2dyZXNzX19pbWcnLFxyXG4gIC8vb3ZlcmxheUNsYXNzOiAnb3ZlcmxheScsXHJcbiAgcG9wdXBDbGFzczogJ2JpZy1pbWcnLFxyXG4gIGFkZENsYXNzOiAnc2hvdycsXHJcbiAgZXZlbnRPcGVuOiAnY2xpY2snLFxyXG4gIGV2ZW50Q2xvc2U6ICdjbGljaycsXHJcbn0pO1xyXG5cclxuLy9tZW51XHJcbm5ldyBNb2RhbCh7XHJcbiAgb3BlbjogJy5oZWFkZXJfX21lbnUtZHJvcGRvd24nLFxyXG4gIGNsb3NlOiAnLmhlYWRlcl9fbWVudS1jbG9zZScsXHJcbiAgLy9vdmVybGF5Q2xhc3M6ICdvdmVybGF5JyxcclxuICBwb3B1cENsYXNzOiAnbmF2X19yZXNwb25zaXZlJyxcclxuICBhZGRDbGFzczogJ3Nob3cnLFxyXG4gIGV2ZW50T3BlbjogJ2NsaWNrJyxcclxuICBldmVudENsb3NlOiAnY2xpY2snLFxyXG59KTtcclxuZnVuY3Rpb24gU2xpZGVyKHNldHRpbmdzKSB7XHJcbiAgdGhpcy5wcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5wcmV2KTtcclxuICB0aGlzLm5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLm5leHQpO1xyXG4gIHRoaXMuc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZXR0aW5ncy5zbGlkZXIpO1xyXG5cclxuICB0aGlzLmRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLmRvdHMpO1xyXG4gIHRoaXMubGVuID0gdGhpcy5zbGlkZXIuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIHRoaXMuY291bnQgPSAwO1xyXG5cclxuICB0aGlzLm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNsaWRlTmV4dC5iaW5kKHRoaXMpKTtcclxuICB0aGlzLnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNsaWRlUHJldi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgdGhpcy5kb3RzU2xpZGUuY2FsbCh0aGlzKTtcclxuXHJcbiAgaWYgKHNldHRpbmdzLmF1dG8pIHtcclxuICAgIHRoaXMudGltZSA9IHNldHRpbmdzLnRpbWUgfHwgNzAwMDtcclxuICAgIHRoaXMuYXV0b1Njcm9sbCgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblNsaWRlci5wcm90b3R5cGUuc2xpZGVOZXh0ID0gZnVuY3Rpb24gc2xpZGVOZXh0KCkge1xyXG4gIHRoaXMuZGVsZXRlRG90cygpO1xyXG4gIHRoaXMuY291bnQrKztcclxuICB0aGlzLm1haW5TbGlkZXIuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLnNsaWRlUHJldiA9IGZ1bmN0aW9uIHNsaWRlUHJldigpIHtcclxuICB0aGlzLmRlbGV0ZURvdHMoKTtcclxuICB0aGlzLmNvdW50LS07XHJcbiAgdGhpcy5tYWluU2xpZGVyLmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5tYWluU2xpZGVyID0gZnVuY3Rpb24gbWFpblNsaWRlcihjb3VudCkge1xyXG4gIGlmIChjb3VudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLmNvdW50ID0gK2NvdW50O1xyXG4gIH1cclxuXHJcbiAgdGhpcy5jb3VudFJlc2V0KCk7XHJcbiAgdGhpcy5kb3RzW3RoaXMuY291bnRdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIHRoaXMuc2xpZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuY291bnR9MDAlKWA7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5jb3VudFJlc2V0ID0gZnVuY3Rpb24gY291bnRSZXNldCgpIHtcclxuICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLmxlbikge1xyXG4gICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgfSBlbHNlIGlmICh0aGlzLmNvdW50IDwgMCkge1xyXG4gICAgdGhpcy5jb3VudCA9IHRoaXMubGVuIC0gMTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5kb3RzU2xpZGUgPSBmdW5jdGlvbiBkb3RzU2xpZGUoKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRoaXMuZG90c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZ2V0TnVtYmVyQ2lyY2xlLmJpbmQodGhpcykpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5TbGlkZXIucHJvdG90eXBlLmdldE51bWJlckNpcmNsZSA9IGZ1bmN0aW9uIGdldE51bWJlckNpcmNsZShlKSB7XHJcbiAgdGhpcy5kb3RzQ291bnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2Fyb3VzZWwtY2lyY2xlJyk7XHJcbiAgdGhpcy5tYWluU2xpZGVyLmNhbGwodGhpcywgdGhpcy5kb3RzQ291bnQpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5kb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5kZWxldGVEb3RzID0gZnVuY3Rpb24gZGVsZXRlRG90cygpIHtcclxuICB0aGlzLmRvdHNbdGhpcy5jb3VudF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbn07XHJcblxyXG5cclxuU2xpZGVyLnByb3RvdHlwZS5hdXRvU2Nyb2xsID0gZnVuY3Rpb24gYXV0b1Njcm9sbCgpIHtcclxuICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICB0aGlzLnNsaWRlTmV4dCgpO1xyXG4gIH0sIHRoaXMudGltZSk7XHJcbn07XHJcblxyXG5cclxubmV3IFNsaWRlcih7XHJcbiAgcHJldjogJyNzbGlkZS1wcmV2JyxcclxuICBuZXh0OiAnI3NsaWRlLW5leHQnLFxyXG4gIHNsaWRlcjogJy5zdXN0b21lcnMtd29yZHNfX2xpc3QnLFxyXG4gIGRvdHM6ICcuc3VzdG9tZXJzX19zbGlkZXItZG90cyAuc2xpZGVyLWRvdCcsXHJcbiAgYXV0bzogZmFsc2UsXHJcbiAgdGltZTogNzAwMCxcclxufSk7XHJcblxyXG5uZXcgU2xpZGVyKHtcclxuICBwcmV2OiAnLmhlYWRlcl9fc2xpZGVyLXByZXYnLFxyXG4gIG5leHQ6ICcuaGVhZGVyX19zbGlkZXItbmV4dCcsXHJcbiAgc2xpZGVyOiAnLmhlYWRlcl9fc2xpZGVyLWxpc3QnLFxyXG4gIGRvdHM6ICcuaGVhZGVyX19zbGlkZXItZG90cyBzcGFuJyxcclxuICBhdXRvOiB0cnVlLFxyXG4gIHRpbWU6IDcwMDAsXHJcbn0pO1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIHZhciBhLFxyXG4gICAgICBiLFxyXG4gICAgICBjLFxyXG4gICAgICBkLFxyXG4gICAgICBlLFxyXG4gICAgICBmID0gZnVuY3Rpb24gZihhLCBiKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gYS5hcHBseShiLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9LFxyXG4gICAgICBnID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbiAoYSkge1xyXG4gICAgZm9yICh2YXIgYiA9IDAsIGMgPSB0aGlzLmxlbmd0aDsgYyA+IGI7IGIrKykge1xyXG4gICAgICBpZiAoYiBpbiB0aGlzICYmIHRoaXNbYl0gPT09IGEpIHJldHVybiBiO1xyXG4gICAgfXJldHVybiAtMTtcclxuICB9O2IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBhKCkge31yZXR1cm4gYS5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgdmFyIGMsIGQ7Zm9yIChjIGluIGIpIHtcclxuICAgICAgICBkID0gYltjXSwgbnVsbCA9PSBhW2NdICYmIChhW2NdID0gZCk7XHJcbiAgICAgIH1yZXR1cm4gYTtcclxuICAgIH0sIGEucHJvdG90eXBlLmlzTW9iaWxlID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgcmV0dXJuICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoYSlcclxuICAgICAgKTtcclxuICAgIH0sIGEucHJvdG90eXBlLmNyZWF0ZUV2ZW50ID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcclxuICAgICAgdmFyIGU7cmV0dXJuIG51bGwgPT0gYiAmJiAoYiA9ICExKSwgbnVsbCA9PSBjICYmIChjID0gITEpLCBudWxsID09IGQgJiYgKGQgPSBudWxsKSwgbnVsbCAhPSBkb2N1bWVudC5jcmVhdGVFdmVudCA/IChlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSwgZS5pbml0Q3VzdG9tRXZlbnQoYSwgYiwgYywgZCkpIDogbnVsbCAhPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCA/IChlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKSwgZS5ldmVudFR5cGUgPSBhKSA6IGUuZXZlbnROYW1lID0gYSwgZTtcclxuICAgIH0sIGEucHJvdG90eXBlLmVtaXRFdmVudCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIHJldHVybiBudWxsICE9IGEuZGlzcGF0Y2hFdmVudCA/IGEuZGlzcGF0Y2hFdmVudChiKSA6IGIgaW4gKG51bGwgIT0gYSkgPyBhW2JdKCkgOiBcIm9uXCIgKyBiIGluIChudWxsICE9IGEpID8gYVtcIm9uXCIgKyBiXSgpIDogdm9pZCAwO1xyXG4gICAgfSwgYS5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICByZXR1cm4gbnVsbCAhPSBhLmFkZEV2ZW50TGlzdGVuZXIgPyBhLmFkZEV2ZW50TGlzdGVuZXIoYiwgYywgITEpIDogbnVsbCAhPSBhLmF0dGFjaEV2ZW50ID8gYS5hdHRhY2hFdmVudChcIm9uXCIgKyBiLCBjKSA6IGFbYl0gPSBjO1xyXG4gICAgfSwgYS5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICByZXR1cm4gbnVsbCAhPSBhLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYiwgYywgITEpIDogbnVsbCAhPSBhLmRldGFjaEV2ZW50ID8gYS5kZXRhY2hFdmVudChcIm9uXCIgKyBiLCBjKSA6IGRlbGV0ZSBhW2JdO1xyXG4gICAgfSwgYS5wcm90b3R5cGUuaW5uZXJIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBcImlubmVySGVpZ2h0XCIgaW4gd2luZG93ID8gd2luZG93LmlubmVySGVpZ2h0IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIH0sIGE7XHJcbiAgfSgpLCBjID0gdGhpcy5XZWFrTWFwIHx8IHRoaXMuTW96V2Vha01hcCB8fCAoYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGEoKSB7XHJcbiAgICAgIHRoaXMua2V5cyA9IFtdLCB0aGlzLnZhbHVlcyA9IFtdO1xyXG4gICAgfXJldHVybiBhLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICB2YXIgYiwgYywgZCwgZSwgZjtmb3IgKGYgPSB0aGlzLmtleXMsIGIgPSBkID0gMCwgZSA9IGYubGVuZ3RoOyBlID4gZDsgYiA9ICsrZCkge1xyXG4gICAgICAgIGlmIChjID0gZltiXSwgYyA9PT0gYSkgcmV0dXJuIHRoaXMudmFsdWVzW2JdO1xyXG4gICAgICB9XHJcbiAgICB9LCBhLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICB2YXIgYywgZCwgZSwgZiwgZztmb3IgKGcgPSB0aGlzLmtleXMsIGMgPSBlID0gMCwgZiA9IGcubGVuZ3RoOyBmID4gZTsgYyA9ICsrZSkge1xyXG4gICAgICAgIGlmIChkID0gZ1tjXSwgZCA9PT0gYSkgcmV0dXJuIHZvaWQgKHRoaXMudmFsdWVzW2NdID0gYik7XHJcbiAgICAgIH1yZXR1cm4gdGhpcy5rZXlzLnB1c2goYSksIHRoaXMudmFsdWVzLnB1c2goYik7XHJcbiAgICB9LCBhO1xyXG4gIH0oKSksIGEgPSB0aGlzLk11dGF0aW9uT2JzZXJ2ZXIgfHwgdGhpcy5XZWJraXRNdXRhdGlvbk9ic2VydmVyIHx8IHRoaXMuTW96TXV0YXRpb25PYnNlcnZlciB8fCAoYSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGEoKSB7XHJcbiAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGNvbnNvbGUgJiYgbnVsbCAhPT0gY29uc29sZSAmJiBjb25zb2xlLndhcm4oXCJNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyLlwiKSwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBudWxsICE9PSBjb25zb2xlICYmIGNvbnNvbGUud2FybihcIldPVy5qcyBjYW5ub3QgZGV0ZWN0IGRvbSBtdXRhdGlvbnMsIHBsZWFzZSBjYWxsIC5zeW5jKCkgYWZ0ZXIgbG9hZGluZyBuZXcgY29udGVudC5cIik7XHJcbiAgICB9cmV0dXJuIGEubm90U3VwcG9ydGVkID0gITAsIGEucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7fSwgYTtcclxuICB9KCkpLCBkID0gdGhpcy5nZXRDb21wdXRlZFN0eWxlIHx8IGZ1bmN0aW9uIChhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlID0gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgdmFyIGM7cmV0dXJuIFwiZmxvYXRcIiA9PT0gYiAmJiAoYiA9IFwic3R5bGVGbG9hdFwiKSwgZS50ZXN0KGIpICYmIGIucmVwbGFjZShlLCBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIH0pLCAobnVsbCAhPSAoYyA9IGEuY3VycmVudFN0eWxlKSA/IGNbYl0gOiB2b2lkIDApIHx8IG51bGw7XHJcbiAgICB9LCB0aGlzO1xyXG4gIH0sIGUgPSAvKFxcLShbYS16XSl7MX0pL2csIHRoaXMuV09XID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZShhKSB7XHJcbiAgICAgIG51bGwgPT0gYSAmJiAoYSA9IHt9KSwgdGhpcy5zY3JvbGxDYWxsYmFjayA9IGYodGhpcy5zY3JvbGxDYWxsYmFjaywgdGhpcyksIHRoaXMuc2Nyb2xsSGFuZGxlciA9IGYodGhpcy5zY3JvbGxIYW5kbGVyLCB0aGlzKSwgdGhpcy5yZXNldEFuaW1hdGlvbiA9IGYodGhpcy5yZXNldEFuaW1hdGlvbiwgdGhpcyksIHRoaXMuc3RhcnQgPSBmKHRoaXMuc3RhcnQsIHRoaXMpLCB0aGlzLnNjcm9sbGVkID0gITAsIHRoaXMuY29uZmlnID0gdGhpcy51dGlsKCkuZXh0ZW5kKGEsIHRoaXMuZGVmYXVsdHMpLCBudWxsICE9IGEuc2Nyb2xsQ29udGFpbmVyICYmICh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGEuc2Nyb2xsQ29udGFpbmVyKSksIHRoaXMuYW5pbWF0aW9uTmFtZUNhY2hlID0gbmV3IGMoKSwgdGhpcy53b3dFdmVudCA9IHRoaXMudXRpbCgpLmNyZWF0ZUV2ZW50KHRoaXMuY29uZmlnLmJveENsYXNzKTtcclxuICAgIH1yZXR1cm4gZS5wcm90b3R5cGUuZGVmYXVsdHMgPSB7IGJveENsYXNzOiBcIndvd1wiLCBhbmltYXRlQ2xhc3M6IFwiYW5pbWF0ZWRcIiwgb2Zmc2V0OiAwLCBtb2JpbGU6ICEwLCBsaXZlOiAhMCwgY2FsbGJhY2s6IG51bGwsIHNjcm9sbENvbnRhaW5lcjogbnVsbCB9LCBlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYTtyZXR1cm4gdGhpcy5lbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgXCJpbnRlcmFjdGl2ZVwiID09PSAoYSA9IGRvY3VtZW50LnJlYWR5U3RhdGUpIHx8IFwiY29tcGxldGVcIiA9PT0gYSA/IHRoaXMuc3RhcnQoKSA6IHRoaXMudXRpbCgpLmFkZEV2ZW50KGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy5zdGFydCksIHRoaXMuZmluaXNoZWQgPSBbXTtcclxuICAgIH0sIGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYiwgYywgZCwgZTtpZiAodGhpcy5zdG9wcGVkID0gITEsIHRoaXMuYm94ZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEsIGMsIGQsIGU7Zm9yIChkID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyB0aGlzLmNvbmZpZy5ib3hDbGFzcyksIGUgPSBbXSwgYSA9IDAsIGMgPSBkLmxlbmd0aDsgYyA+IGE7IGErKykge1xyXG4gICAgICAgICAgYiA9IGRbYV0sIGUucHVzaChiKTtcclxuICAgICAgICB9cmV0dXJuIGU7XHJcbiAgICAgIH0uY2FsbCh0aGlzKSwgdGhpcy5hbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEsIGMsIGQsIGU7Zm9yIChkID0gdGhpcy5ib3hlcywgZSA9IFtdLCBhID0gMCwgYyA9IGQubGVuZ3RoOyBjID4gYTsgYSsrKSB7XHJcbiAgICAgICAgICBiID0gZFthXSwgZS5wdXNoKGIpO1xyXG4gICAgICAgIH1yZXR1cm4gZTtcclxuICAgICAgfS5jYWxsKHRoaXMpLCB0aGlzLmJveGVzLmxlbmd0aCkgaWYgKHRoaXMuZGlzYWJsZWQoKSkgdGhpcy5yZXNldFN0eWxlKCk7ZWxzZSBmb3IgKGUgPSB0aGlzLmJveGVzLCBjID0gMCwgZCA9IGUubGVuZ3RoOyBkID4gYzsgYysrKSB7XHJcbiAgICAgICAgYiA9IGVbY10sIHRoaXMuYXBwbHlTdHlsZShiLCAhMCk7XHJcbiAgICAgIH1yZXR1cm4gdGhpcy5kaXNhYmxlZCgpIHx8ICh0aGlzLnV0aWwoKS5hZGRFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgfHwgd2luZG93LCBcInNjcm9sbFwiLCB0aGlzLnNjcm9sbEhhbmRsZXIpLCB0aGlzLnV0aWwoKS5hZGRFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHRoaXMuc2Nyb2xsSGFuZGxlciksIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnNjcm9sbENhbGxiYWNrLCA1MCkpLCB0aGlzLmNvbmZpZy5saXZlID8gbmV3IGEoZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcclxuICAgICAgICAgIHZhciBjLCBkLCBlLCBmLCBnO2ZvciAoZyA9IFtdLCBjID0gMCwgZCA9IGIubGVuZ3RoOyBkID4gYzsgYysrKSB7XHJcbiAgICAgICAgICAgIGYgPSBiW2NdLCBnLnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHZhciBhLCBiLCBjLCBkO2ZvciAoYyA9IGYuYWRkZWROb2RlcyB8fCBbXSwgZCA9IFtdLCBhID0gMCwgYiA9IGMubGVuZ3RoOyBiID4gYTsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICBlID0gY1thXSwgZC5wdXNoKHRoaXMuZG9TeW5jKGUpKTtcclxuICAgICAgICAgICAgICB9cmV0dXJuIGQ7XHJcbiAgICAgICAgICAgIH0uY2FsbChhKSk7XHJcbiAgICAgICAgICB9cmV0dXJuIGc7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSh0aGlzKSkub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwIH0pIDogdm9pZCAwO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RvcHBlZCA9ICEwLCB0aGlzLnV0aWwoKS5yZW1vdmVFdmVudCh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgfHwgd2luZG93LCBcInNjcm9sbFwiLCB0aGlzLnNjcm9sbEhhbmRsZXIpLCB0aGlzLnV0aWwoKS5yZW1vdmVFdmVudCh3aW5kb3csIFwicmVzaXplXCIsIHRoaXMuc2Nyb2xsSGFuZGxlciksIG51bGwgIT0gdGhpcy5pbnRlcnZhbCA/IGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCkgOiB2b2lkIDA7XHJcbiAgICB9LCBlLnByb3RvdHlwZS5zeW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gYS5ub3RTdXBwb3J0ZWQgPyB0aGlzLmRvU3luYyh0aGlzLmVsZW1lbnQpIDogdm9pZCAwO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuZG9TeW5jID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgdmFyIGIsIGMsIGQsIGUsIGY7aWYgKG51bGwgPT0gYSAmJiAoYSA9IHRoaXMuZWxlbWVudCksIDEgPT09IGEubm9kZVR5cGUpIHtcclxuICAgICAgICBmb3IgKGEgPSBhLnBhcmVudE5vZGUgfHwgYSwgZSA9IGEucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHRoaXMuY29uZmlnLmJveENsYXNzKSwgZiA9IFtdLCBjID0gMCwgZCA9IGUubGVuZ3RoOyBkID4gYzsgYysrKSB7XHJcbiAgICAgICAgICBiID0gZVtjXSwgZy5jYWxsKHRoaXMuYWxsLCBiKSA8IDAgPyAodGhpcy5ib3hlcy5wdXNoKGIpLCB0aGlzLmFsbC5wdXNoKGIpLCB0aGlzLnN0b3BwZWQgfHwgdGhpcy5kaXNhYmxlZCgpID8gdGhpcy5yZXNldFN0eWxlKCkgOiB0aGlzLmFwcGx5U3R5bGUoYiwgITApLCBmLnB1c2godGhpcy5zY3JvbGxlZCA9ICEwKSkgOiBmLnB1c2godm9pZCAwKTtcclxuICAgICAgICB9cmV0dXJuIGY7XHJcbiAgICAgIH1cclxuICAgIH0sIGUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5hcHBseVN0eWxlKGEpLCBhLmNsYXNzTmFtZSA9IGEuY2xhc3NOYW1lICsgXCIgXCIgKyB0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsIG51bGwgIT0gdGhpcy5jb25maWcuY2FsbGJhY2sgJiYgdGhpcy5jb25maWcuY2FsbGJhY2soYSksIHRoaXMudXRpbCgpLmVtaXRFdmVudChhLCB0aGlzLndvd0V2ZW50KSwgdGhpcy51dGlsKCkuYWRkRXZlbnQoYSwgXCJhbmltYXRpb25lbmRcIiwgdGhpcy5yZXNldEFuaW1hdGlvbiksIHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsIFwib2FuaW1hdGlvbmVuZFwiLCB0aGlzLnJlc2V0QW5pbWF0aW9uKSwgdGhpcy51dGlsKCkuYWRkRXZlbnQoYSwgXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5yZXNldEFuaW1hdGlvbiksIHRoaXMudXRpbCgpLmFkZEV2ZW50KGEsIFwiTVNBbmltYXRpb25FbmRcIiwgdGhpcy5yZXNldEFuaW1hdGlvbiksIGE7XHJcbiAgICB9LCBlLnByb3RvdHlwZS5hcHBseVN0eWxlID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgdmFyIGMsIGQsIGU7cmV0dXJuIGQgPSBhLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWR1cmF0aW9uXCIpLCBjID0gYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1kZWxheVwiKSwgZSA9IGEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctaXRlcmF0aW9uXCIpLCB0aGlzLmFuaW1hdGUoZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIGYuY3VzdG9tU3R5bGUoYSwgYiwgZCwgYywgZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSh0aGlzKSk7XHJcbiAgICB9LCBlLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gXCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIiBpbiB3aW5kb3cgPyBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGEpO1xyXG4gICAgICB9IDogZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICByZXR1cm4gYSgpO1xyXG4gICAgICB9O1xyXG4gICAgfSgpLCBlLnByb3RvdHlwZS5yZXNldFN0eWxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYSwgYiwgYywgZCwgZTtmb3IgKGQgPSB0aGlzLmJveGVzLCBlID0gW10sIGIgPSAwLCBjID0gZC5sZW5ndGg7IGMgPiBiOyBiKyspIHtcclxuICAgICAgICBhID0gZFtiXSwgZS5wdXNoKGEuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiKTtcclxuICAgICAgfXJldHVybiBlO1xyXG4gICAgfSwgZS5wcm90b3R5cGUucmVzZXRBbmltYXRpb24gPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICB2YXIgYjtyZXR1cm4gYS50eXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImFuaW1hdGlvbmVuZFwiKSA+PSAwID8gKGIgPSBhLnRhcmdldCB8fCBhLnNyY0VsZW1lbnQsIGIuY2xhc3NOYW1lID0gYi5jbGFzc05hbWUucmVwbGFjZSh0aGlzLmNvbmZpZy5hbmltYXRlQ2xhc3MsIFwiXCIpLnRyaW0oKSkgOiB2b2lkIDA7XHJcbiAgICB9LCBlLnByb3RvdHlwZS5jdXN0b21TdHlsZSA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCBlKSB7XHJcbiAgICAgIHJldHVybiBiICYmIHRoaXMuY2FjaGVBbmltYXRpb25OYW1lKGEpLCBhLnN0eWxlLnZpc2liaWxpdHkgPSBiID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLCBjICYmIHRoaXMudmVuZG9yU2V0KGEuc3R5bGUsIHsgYW5pbWF0aW9uRHVyYXRpb246IGMgfSksIGQgJiYgdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSwgeyBhbmltYXRpb25EZWxheTogZCB9KSwgZSAmJiB0aGlzLnZlbmRvclNldChhLnN0eWxlLCB7IGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBlIH0pLCB0aGlzLnZlbmRvclNldChhLnN0eWxlLCB7IGFuaW1hdGlvbk5hbWU6IGIgPyBcIm5vbmVcIiA6IHRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShhKSB9KSwgYTtcclxuICAgIH0sIGUucHJvdG90eXBlLnZlbmRvcnMgPSBbXCJtb3pcIiwgXCJ3ZWJraXRcIl0sIGUucHJvdG90eXBlLnZlbmRvclNldCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIHZhciBjLCBkLCBlLCBmO2QgPSBbXTtmb3IgKGMgaW4gYikge1xyXG4gICAgICAgIGUgPSBiW2NdLCBhW1wiXCIgKyBjXSA9IGUsIGQucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgYiwgZCwgZywgaDtmb3IgKGcgPSB0aGlzLnZlbmRvcnMsIGggPSBbXSwgYiA9IDAsIGQgPSBnLmxlbmd0aDsgZCA+IGI7IGIrKykge1xyXG4gICAgICAgICAgICBmID0gZ1tiXSwgaC5wdXNoKGFbXCJcIiArIGYgKyBjLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYy5zdWJzdHIoMSldID0gZSk7XHJcbiAgICAgICAgICB9cmV0dXJuIGg7XHJcbiAgICAgICAgfS5jYWxsKHRoaXMpKTtcclxuICAgICAgfXJldHVybiBkO1xyXG4gICAgfSwgZS5wcm90b3R5cGUudmVuZG9yQ1NTID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgdmFyIGMsIGUsIGYsIGcsIGgsIGk7Zm9yIChoID0gZChhKSwgZyA9IGguZ2V0UHJvcGVydHlDU1NWYWx1ZShiKSwgZiA9IHRoaXMudmVuZG9ycywgYyA9IDAsIGUgPSBmLmxlbmd0aDsgZSA+IGM7IGMrKykge1xyXG4gICAgICAgIGkgPSBmW2NdLCBnID0gZyB8fCBoLmdldFByb3BlcnR5Q1NTVmFsdWUoXCItXCIgKyBpICsgXCItXCIgKyBiKTtcclxuICAgICAgfXJldHVybiBnO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuYW5pbWF0aW9uTmFtZSA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgIHZhciBiO3RyeSB7XHJcbiAgICAgICAgYiA9IHRoaXMudmVuZG9yQ1NTKGEsIFwiYW5pbWF0aW9uLW5hbWVcIikuY3NzVGV4dDtcclxuICAgICAgfSBjYXRjaCAoYykge1xyXG4gICAgICAgIGIgPSBkKGEpLmdldFByb3BlcnR5VmFsdWUoXCJhbmltYXRpb24tbmFtZVwiKTtcclxuICAgICAgfXJldHVybiBcIm5vbmVcIiA9PT0gYiA/IFwiXCIgOiBiO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuY2FjaGVBbmltYXRpb25OYW1lID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uTmFtZUNhY2hlLnNldChhLCB0aGlzLmFuaW1hdGlvbk5hbWUoYSkpO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuY2FjaGVkQW5pbWF0aW9uTmFtZSA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5nZXQoYSk7XHJcbiAgICB9LCBlLnByb3RvdHlwZS5zY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxlZCA9ICEwO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuc2Nyb2xsQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBhO3JldHVybiAhdGhpcy5zY3JvbGxlZCB8fCAodGhpcy5zY3JvbGxlZCA9ICExLCB0aGlzLmJveGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiLCBjLCBkLCBlO2ZvciAoZCA9IHRoaXMuYm94ZXMsIGUgPSBbXSwgYiA9IDAsIGMgPSBkLmxlbmd0aDsgYyA+IGI7IGIrKykge1xyXG4gICAgICAgICAgYSA9IGRbYl0sIGEgJiYgKHRoaXMuaXNWaXNpYmxlKGEpID8gdGhpcy5zaG93KGEpIDogZS5wdXNoKGEpKTtcclxuICAgICAgICB9cmV0dXJuIGU7XHJcbiAgICAgIH0uY2FsbCh0aGlzKSwgdGhpcy5ib3hlcy5sZW5ndGggfHwgdGhpcy5jb25maWcubGl2ZSkgPyB2b2lkIDAgOiB0aGlzLnN0b3AoKTtcclxuICAgIH0sIGUucHJvdG90eXBlLm9mZnNldFRvcCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgIGZvciAodmFyIGI7IHZvaWQgMCA9PT0gYS5vZmZzZXRUb3A7KSB7XHJcbiAgICAgICAgYSA9IGEucGFyZW50Tm9kZTtcclxuICAgICAgfWZvciAoYiA9IGEub2Zmc2V0VG9wOyBhID0gYS5vZmZzZXRQYXJlbnQ7KSB7XHJcbiAgICAgICAgYiArPSBhLm9mZnNldFRvcDtcclxuICAgICAgfXJldHVybiBiO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgdmFyIGIsIGMsIGQsIGUsIGY7cmV0dXJuIGMgPSBhLmdldEF0dHJpYnV0ZShcImRhdGEtd293LW9mZnNldFwiKSB8fCB0aGlzLmNvbmZpZy5vZmZzZXQsIGYgPSB0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgJiYgdGhpcy5jb25maWcuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQsIGUgPSBmICsgTWF0aC5taW4odGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCwgdGhpcy51dGlsKCkuaW5uZXJIZWlnaHQoKSkgLSBjLCBkID0gdGhpcy5vZmZzZXRUb3AoYSksIGIgPSBkICsgYS5jbGllbnRIZWlnaHQsIGUgPj0gZCAmJiBiID49IGY7XHJcbiAgICB9LCBlLnByb3RvdHlwZS51dGlsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl91dGlsID8gdGhpcy5fdXRpbCA6IHRoaXMuX3V0aWwgPSBuZXcgYigpO1xyXG4gICAgfSwgZS5wcm90b3R5cGUuZGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiAhdGhpcy5jb25maWcubW9iaWxlICYmIHRoaXMudXRpbCgpLmlzTW9iaWxlKG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfSwgZTtcclxuICB9KCk7XHJcbn0pLmNhbGwodW5kZWZpbmVkKTtcclxuXHJcbm5ldyBXT1coKS5pbml0KCk7XHJcblxyXG5mdW5jdGlvbiBBY2NhcmlvZChzZXR0aW5nKSB7XHJcbiAgdGhpcy50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZy5saW5rKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpdGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzLnRpdGxlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gb3BlbkFjY2FyZGlvbigpIHtcclxuICAgICAgbGV0IGFjY2FyaW9kU2VjdGlvbiA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgICAgaWYgKGFjY2FyaW9kU2VjdGlvbi5zdHlsZS5tYXhIZWlnaHQpIHtcclxuICAgICAgICBhY2NhcmlvZFNlY3Rpb24uc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2NhcmlvZFNlY3Rpb24uc3R5bGUubWF4SGVpZ2h0ID0gYCR7YWNjYXJpb2RTZWN0aW9uLnNjcm9sbEhlaWdodH1weGA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxubmV3IEFjY2FyaW9kKHtcclxuICBsaW5rOiAnLmhlYWRlcl9fbWVudS1saW5rLWRyb3AnLFxyXG59KTtcclxuXHJcblxyXG5sZXQgYXJyciA9IFs1LCA2LCA4LCA3LCA0LCA1LCA2LCAtMjAsIDEsIDMsIDYsIDU1NSwgNCwgNSwgMjAwMCwgLTEwLCA0LCA1MCwgNiwgMiwgMTQsIDVdO1xyXG5cclxuZnVuY3Rpb24gbWF4RihwYXJhbXMpIHtcclxuICBsZXQgbWF4VG90YWwgPSAwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAocGFyYW1zW2ldID4gbWF4VG90YWwpIHtcclxuICAgICAgbWF4VG90YWwgPSBwYXJhbXNbaV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtYXhUb3RhbDtcclxufVxyXG5cclxuY29uc29sZS5sb2cobWF4RihhcnJyKSk7XHJcblxyXG5mdW5jdGlvbiBtaW5NKHBhcmFtcykge1xyXG4gIGxldCBtYXhUb3RhbCA9IDA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChwYXJhbXNbaV0gPCBtYXhUb3RhbCkge1xyXG4gICAgICBtYXhUb3RhbCA9IHBhcmFtc1tpXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG1heFRvdGFsO1xyXG59XHJcblxyXG5jb25zb2xlLmxvZyhtaW5NKGFycnIpKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
