/** 
 *    移动端轮播图
 * 1. 自动轮播(定时器 + C3-位移+过渡, 无缝衔接-过渡结束+定位)
 * 2. 点要跟随轮播改变样式
 * 3. 可以滑动轮播图(touch事件)
 */

window.onload = function () {
  mySwiper(); //当页面加载时 执行
  search();
  downTime();
}
/* 自动轮播 */
function mySwiper() {

  var banner = document.querySelector('.jd_banner'); //轮播的盒子
  var baWith = banner.offsetWidth; //图片宽度
  var imgBox = banner.children[0]; //图片的盒子
  var pointBox = banner.children[1]; //点的集合
  var points = pointBox.querySelectorAll('li'); //获取所有的点的集合
  /* 定义过渡方法 */
  var addTransition = function () {
    imgBox.style.transition = 'all .3s ease-out';
    imgBox.style.webkitTransition = 'all .3s ease-out'; //兼容性写法
  };
  /* 定义位移方法 */
  var addTranslate = function (x) {
    imgBox.style.transform = 'translateX(' + x + 'px)';
    imgBox.style.webkitTransform = 'translateX(' + x + 'px)';
  };
  /* 清除过渡方法 */
  var clearTransition = function () {
    imgBox.style.transition = 'none';
    imgBox.style.webkitTransition = 'none';
  };
  var index = 1;
  /* 定义定时器,实现自动轮播  setInterval*/
  var timer = setInterval(function () {
    // 调用 定位 过渡
    index++;
    addTransition();
    addTranslate(-baWith * index);
  }, 2000);
  // 绑定过渡结束事件,重新定位到第一张图片
  imgBox.addEventListener('webkitTransitionEnd', function () {
    // 处理过渡事件结束的逻辑
    if (index >= 9) {
      index = 1;
      clearTransition(); //清楚过渡
      addTranslate(-baWith * index); //调用位移方法
    } else if (index <= 0) {
      index = 8;
      clearTransition();
      addTranslate(-index * baWith);
    };
    // 调用setPoint()
    setPoint();
  })
  /* 点需要跟随滚动 改变当前li的样式 */
  function setPoint() {
    for (var i = 0; i < points.length; i++) {
      points[i].className = '';
    };
    points[index - 1].className = 'now';
  }
  /**
   * 绑定touch事件,滑动图片功能 
   * 需要初始化的变量:
   * startX : 记录开始触摸的X轴坐标
   * moveX  : 记录滑动的X轴坐标
   * distanceX :  记录滑动的距离  moveX - startX
   * isMove : 表示是否滑动过
   */
  var startX = 0,
    moveX = 0,
    distanceX = 0,
    ISMOVE = false;
  /* 绑定touchstart事件 */
  imgBox.addEventListener('touchstart', function (e) {
    e.preventDefault();
    // 停止轮播 关闭计时器
    clearInterval(timer);
    timer = null;
    // 记录startX
    startX = e.touches[0].pageX;
  })
  /* 绑定touchmove事件 */
  imgBox.addEventListener('touchmove', function (e) {
    e.preventDefault();
    ISMOVE = true; //表示滑动
    moveX = e.touches[0].pageX;
    distanceX = moveX - startX; //记录滑动距离
    /* 重新定位 */
    clearTransition(); // 清除过渡
    addTranslate(-index * baWith + distanceX);
  });
  /* 绑定touchend事件 */
  /**
   * 当滑动的距离不超过图片的三分之一时,当前滑动无效,吸附回去
   * 超过三分之一时,当前滑动生效,切换下一张或上一张
   */
  imgBox.addEventListener('touchend', function (e) {
    e.preventDefault();
    if (!ISMOVE) { //判断ISMOVE是否滑动
      return;
    }
    // Math.abs()取绝对值
    if (Math.abs(distanceX) > baWith / 3) { //表示滑动有效
      // 判断右滑动(上一张)还是左滑动(下一张)
      if (distanceX > 0) { //上一张
        index--;
      } else { //下一张
        index++;
      };
      // 调用位移和过渡方法
      addTransition();
      addTranslate(-index * baWith);
    } else { //滑动无效  吸附回去
      addTransition();
      addTranslate(-index * baWith);
    }
    // 重新初始化全局参数,防止对下一次滑动有影响
    startX = 0,
      moveX = 0,
      distanceX = 0,
      ISMOVE = false;
    // 再次开启定时器
    timer = setInterval(function () {
      index++;
      addTransition();
      addTranslate(-index * baWith);
    }, 2000);
  });

};


/* 搜索区域滚动效果 */
function search() {
  /** 
   * 1. 颜色随着页面滚动 逐渐加深(变的不透明)
   * 2. 当滚动的距离超过轮播图的高度时,颜色保持不变
   *  浏览器的滚动事件
   *  window.onscroll
   *  监听滚动高度 document.body.scrollTop
   */
  /* 获取搜索盒子 */
  var header = document.querySelector('.jd_header_box');
  /* 获取轮播图的高度 */
  var bannerh = document.querySelector('.jd_banner').offsetHeight;
  /* 监听滚动事件 scroll  */
  window.onscroll = function () {
    /* 获取页面滚动的高度 */
    var top = document.documentElement.scrollTop;
    var opacity = 0; //透明度
    if (top <= bannerh) {
      opacity = top / bannerh;
    } else {
      opacity = 1;
    }
    header.style.background = 'rgba(201,21,35,' + opacity + ')';
  }
}


/* 设置倒计时 */
function downTime() {
  function fun (){
    var spane = document.querySelectorAll('.sk_time span');
    var start = new Date().getTime();
    var end = new Date('2018-10-30 00:00:00').getTime();
    var cape = (end - start) / 1000;
    var day = Math.floor(cape / 60 / 60 / 24);
    var H = String(Math.floor((cape - day * 24 * 3600) / 60 / 60));
    H<10?H='0'+H:H;
    var HH = H.split('');
    spane[0].innerHTML = HH[0];
    spane[1].innerHTML = HH[1];
    var M = String(Math.floor((cape - day * 24 * 3600 - H * 3600) / 60));
    M<10?M='0'+M:M;
    var MM = M.split('');
    spane[3].innerHTML = MM[0];
    spane[4].innerHTML = MM[1];
    var S = String(Math.floor(cape - day * 24 * 3600 - H * 3600 - M * 60));
    S<10?S='0'+S:S;
    var SS = S.split('');
    spane[6].innerHTML = SS[0];
    spane[7].innerHTML = SS[1];
  }
    fun();
    setInterval(fun,1000);
    
}