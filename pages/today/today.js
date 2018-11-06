// pages/today/today.js

var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList: [
      { name: 'dev', value: '开发' },
      { name: 'sum', value: '总结', checked: 'true' }
    ],
    habits: [
      { name: 'dev', value: '早睡' },
      { name: 'sum', value: '早起', checked: 'true' }
    ],
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
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  // 监听添加事件
  addTodoList: function(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = util.formatDate(new Date());
    var day = util.formatDay(new Date());
    this.setData({
      date: date,
      day: day
    });
    console.log(day);
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