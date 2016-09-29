//index.js
//获取应用实例
Page({
  data: {
    title: "About Me",
    motto: 'Hello World',
    userInfo: {
     wechat: "Emma",
     nickname: "ruijieLou",
     avatarUrl: "../../images/myself.jpg"
    }
  },
  getUserInfo () {
    const that = this
    wx.getUserInfo({
      success (res) {
        console.log(res)
        that.setData({ userInfo: res.userInfo })
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.login({
      success(res){
        if(res){
          console.log("登录成功"+ res.code);
        }else{
           console.log("登录失败" + res.errMsg);
        }
      }
    })
    // console.log('onLoad')
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  }
})
