/* 面向对象的方式重构代码 */
var mySwiper = {
  banner: null,
  imgBox: null,
  baWith: null,
  ponitBox: null,
  points: null,
  index: 1,
  startX: 0,
  moveX: 0,
  distanceX: 0,
  ISMOVE: false,
  timer: null,
  initSwiper: function () {
    this.banner = document.querySelector('.jd_banner');
    this.baWith = this.banner.offsetWidth;
    this.imgBox = this.banner.children[0];
    this.pointBox = this.banner.children[1];
    this.points = this.pointBox.querySelectorAll('li');
    this.setTimer();
    /* 添加页面可见事件 visibilitychange */
    document.addEventListener('visibilitychange',function(e){
      if(document.hidden){
        clearInterval(self.timer);
      }else{
        self.setTimer();
      }
    })
    var self = this;
    this.imgBox.addEventListener('webkitTransitionEnd', function () {
      if (self.index >= 9) {
        self.index = 1;
        self.clearTransition();
        self.addTranslate(-self.baWith * self.index);
      } else if (self.index <= 0) {
        self.index = 8;
        self.clearTransition();
        self.addTranslate(-self.index * self.baWith);
      };
      self.setPoint();
    });
    this.imgBox.addEventListener('touchstart', function (e) {
      e.preventDefault();
      clearInterval(self.timer);
      self.timer = null;
      self.startX = e.touches[0].pageX;
    })
    this.imgBox.addEventListener('touchmove', function (e) {
      e.preventDefault();
      self.ISMOVE = true;
      self.moveX = e.touches[0].pageX;
      self.distanceX = self.moveX - self.startX;
      self.clearTransition();
      self.addTranslate(-self.index * self.baWith + self.distanceX);
    });
    this.imgBox.addEventListener('touchend', function (e) {
      e.preventDefault();
      if (!self.ISMOVE) {
        return;
      }
      if (Math.abs(self.distanceX) > self.baWith / 3) {
        if (self.distanceX > 0) {
          self.index--;
        } else {
          self.index++;
        };
        self.addTransition();
        self.addTranslate(-self.index * self.baWith);
      } else {
        self.addTransition();
        self.addTranslate(-self.index * self.baWith);
      }
      self.startX = 0,
        self.moveX = 0,
        self.distanceX = 0,
        self.ISMOVE = false;
      self.setTimer();
    });
  },
  addTransition: function () {
    this.imgBox.style.transition = 'all .3s ease-out';
    this.imgBox.style.webkitTransition = 'all .3s ease-out';
  },
  addTranslate: function (x) {
    this.imgBox.style.transform = 'translateX(' + x + 'px)';
    this.imgBox.style.webkitTransform = 'translateX(' + x + 'px)';
  },
  clearTransition: function () {
    this.imgBox.style.transition = 'none';
    this.imgBox.style.webkitTransition = 'none';
  },
  setTimer: function () {
    var self = this; //留住this
    self.timer = setInterval(function () {
      self.index++;
      self.addTransition();
      self.addTranslate(-self.baWith * self.index);
    }, 2000);
  },
  setPoint: function () {
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].className = '';
    };
    this.points[this.index - 1].className = 'now';
  }
};

window.onload = function () {
  mySwiper.initSwiper();
}