//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Ｈ　Ｈ　Ｈ',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //上一次触摸距离页面打开时间毫秒数，默认为为0
    lastTapDiffTime: 0,
    // 用户输入
    inputValue: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady: function () {
    console.log('页面首次渲染完成')
  },
  onShow: function () {
    console.log('显示页面')
  },
  onHide: function () {
    console.log('隐藏页面')
  },
  onUnload: function () {
    console.log('卸载页面')
  },
  onPullDownRefreash: function () {
    console.log('页面下拉刷新')
  },
  mytouchstart: function (e) {
    console.log(e.timeStamp + '- touch start')
  },
  mytouchend: function (e) {
    console.log(e.timeStamp + '- touch end')
  },
  // 点击事件
  mytap: function (e) {
    // console.log(e.timeStamp + '- tap')
    // 根据点击事件判断双击还是单击
    //触摸时间距离页面打开时间毫秒数
    var curTime = e.timeStamp;
    //上一次触摸距离页面打开时间毫秒数
    var lastTime = this.data.lastTapDiffTime;
    if (lastTime > 0) {
      //如果两次单击间隔小于300毫秒，认为是双击
      if (curTime - lastTime < 300) {
        console.log(e.timeStamp + '- db tap')
      } else {
        console.log(e.timeStamp + '- tap')
      }
    } else {
      console.log(e.timeStamp + '- first tap')
    }
    //将本次点击触摸时间设置为上一次触摸时间
    this.setData({ lastTapDiffTime: curTime });
  },
  longtap: function(e){
    console.log("long  tap.");
  },
  bindKeyInput: function(e){
      this.setData({
        inputValue : e.detail.value
      })
    console.log(this.data.inputValue);
  },
  logintap: function(e){
    console.log(this.data.inputValue);
    // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
    wx.redirectTo({
      url: '/pages/chat/chat?user=' + this.data.inputValue
    })
  }

})
