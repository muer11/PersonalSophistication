// pages/textarea/textarea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [
      { name: 'work', value: '工作' },
      { name: 'study', value: '学习' },
      { name: 'run', value: '运动' },
      { name: 'eat', value: '饮食' },
      { name: 'sleep', value: '睡眠' },
      { name: 'chat', value: '社交' },
      { name: 'profession', value: '专业' },
      { name: 'habit', value: '爱好' },
      { name: 'heart', value: '感情' },
      { name: 'idea', value: '灵感' },
    ]
  },

  changeType: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var index = e.detail.value;
    var currentId = this.data.types[index].name; // 这个id就是选中项的id
    this.setData({
      index: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})