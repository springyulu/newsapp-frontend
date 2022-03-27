
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/news-titles/news-titles","pages/center/center","pages/news-detail/news-detail","pages/news-club/news-club","pages/anti-epidemic/anti-epidemic","pages/common/login/login","pages/common/login/register","pages/center/updateInfo","uview-ui/components/u-avatar-cropper/u-avatar-cropper"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"雨哥头条","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#F8F8F8","bounce":"none"},"tabBar":{"color":"#2c2c2c","selectedColor":"#d81e06","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/news-titles/news-titles","iconPath":"static/icon/shouye.png","selectedIconPath":"static/icon/shouye_sel.png","text":"首页"},{"pagePath":"pages/news-club/news-club","iconPath":"static/icon/shequ.png","selectedIconPath":"static/icon/shequ_sel.png","text":"社区"},{"pagePath":"pages/anti-epidemic/anti-epidemic","iconPath":"static/icon/wode.png","selectedIconPath":"static/icon/wode_sel.png","text":"抗疫"},{"pagePath":"pages/center/center","iconPath":"static/icon/wode.png","selectedIconPath":"static/icon/wode_sel.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uView-demo","compilerVersion":"3.3.13","entryPagePath":"pages/news-titles/news-titles","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/news-titles/news-titles","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#d81e06","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"发布      ","fontSize":"16","float":"right","color":"#fff"},{"text":"HFUT       ","fontSize":"13","float":"left","color":"#fff"}],"searchInput":{"align":"left","borderRadius":"15px","placeholder":"搜你想看的","placeholderColor":"#fff"}}}},{"path":"/pages/center/center","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"white","navigationBarTitleText":"个人中心","navigationStyle":"default","navigationBarTextStyle":"black"}},{"path":"/pages/news-detail/news-detail","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/news-club/news-club","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationStyle":"custom","navigationBarTextStyle":"black"}},{"path":"/pages/anti-epidemic/anti-epidemic","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/common/login/login","meta":{},"window":{"navigationBarBackgroundColor":"white","navigationBarTitleText":"用户登录","navigationStyle":"default","navigationBarTextStyle":"black"}},{"path":"/pages/common/login/register","meta":{},"window":{"navigationBarTitleText":"用户注册","enablePullDownRefresh":false,"navigationStyle":"default","navigationBarTextStyle":"black"}},{"path":"/pages/center/updateInfo","meta":{},"window":{"navigationBarTitleText":"编辑资料","enablePullDownRefresh":false,"navigationStyle":"default","navigationBarTextStyle":"black"}},{"path":"/uview-ui/components/u-avatar-cropper/u-avatar-cropper","meta":{},"window":{"navigationBarTitleText":"头像裁剪","navigationBarBackgroundColor":"#000000"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
