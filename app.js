
//  import WxValidate from 'utils/wxValidate'
//  import Tools from 'utils/tools'

App({
	onLaunch() {
		console.log('onLaunch')
	},
	onShow() {
		console.log('onShow')
	},
	onHide() {
		console.log('onHide')
	},
	// getUserInfo() {
	// 	return this.WxService.login()
	// 	.then(data => {
	// 		console.log(data)
	// 		return this.WxService.getUserInfo()
	// 	})
	// 	.then(data => {
	// 		console.log(data)
	// 		this.globalData.userInfo = data.userInfo
	// 		return this.globalData.userInfo
	// 	})
	// },
	// globalData: {
	// 	userInfo: null
	// },
	// renderImage(path) {
  //       if (!path) return ''
  //       if (path.indexOf('http') !== -1) return path
  //       return `${this.Config.fileBasePath}${path}`
  //   },
	// WxValidate: (rules, messages) => new WxValidate(rules, messages), 
	// HttpResource: (url, paramDefaults, actions, options) => new HttpResource(url, paramDefaults, actions, options).init(), 
	// HttpService: new HttpService, 
	// WxService: new WxService, 
	// Tools: new Tools, 
	// Config: Config, 
})