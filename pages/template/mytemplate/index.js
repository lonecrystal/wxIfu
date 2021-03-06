const App = getApp()
var Api = require('../../../utils/api.js');
var Req = require('../../../utils/req.js');
Page({
  data: {
    pageCount: 0,
    currentPage: 0,
    resDesc: null,
    resultList: []
  },
  getMyTemplateList: function () {
    var that = this;
    Req.req_post(Api.getMyTemplateList({
      token: Api.getToken(),
      page: 1,
      tempname: "",
      type: 0,
      page: 0
    }), "", function success(res) {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      that.setData({
        resultList: res.data.resultList
      })
    }, function fail(res) {
    })
  },
  onLoad: function () {
    var that = this;
    this.getMyTemplateList();
  },
  search() {
    App.WxService.navigateTo('/pages/search/index')
  },
  navigateTo(e) {
    console.log("--------------------templateid=" + e.currentTarget.dataset.id);
    wx.navigateTo({
      url: "/pages/template/confirmTemplate/index?templateId=" + e.currentTarget.dataset.id
    })
  },
  //下拉刷新
  onPullDownRefresh: function () {
    this.getMyTemplateList();
  },
  //全部方案
  jumpToAllTemplate(){
    wx.navigateTo({
      url: "/pages/template/index"
    })
  }
})