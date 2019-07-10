let app = getApp();
let socketOpen = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputValue :'',
      // 消息记录
      historyMsgList: []
  },

  /**
   * 生命周期函数--监听页面加载
   * options 为页面跳转带来的参数
   */
  onLoad: function (options) {
    this.setData({
      user : options.user
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  // 用户输入消息事件
  bindKeyInput: function(e){
      this.setData({
        inputValue : e.detail.value
      })
  },
  // 点击发送按钮事件
  sendtap: function (e) {
    var $thia = this;
    // 如果socket已经连接成功
    if (socketOpen){

    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})