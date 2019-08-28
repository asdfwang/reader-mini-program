// pages/person/person.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  login: function (e) {
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res.code);
          wx.getUserInfo({
            lang: "zh_CN",
            success: function (info) {
              wx.request({
                url: app.APP_SERVER_URL + '/login/do',
                data: {
                  code: res.code,//获得的code
                  imgUrl: info.userInfo.avatarUrl,//获取头像
                  nickName: info.userInfo.nickName,//获取昵称
                  sex: info.userInfo.gender,//获取性别
                  country: info.userInfo.country,//获取国家
                  province: info.userInfo.province,//获取省份
                  city: info.userInfo.city//获取城市
                },
                success: function (res) {
                  if (res.data.code == '0') {
                  }
                }
              })
            },
            fail: function () {
              console.log('获取用户信息失败')
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  getUserInfo: function (e) {
  }
})