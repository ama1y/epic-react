(this["webpackJsonpreact-epic-teach"]=this["webpackJsonpreact-epic-teach"]||[]).push([[10],{366:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(51),c=n(46),u=n(12),i=n(3),o=n(362),s=n(135),g=n(255),d=n(365),h=n(14);function m(){var e=Object(u.a)(["\n  max-width: 300px;\n"]);return m=function(){return e},e}function p(){var e=Object(u.a)(["\n  margin: 20px 0;\n  text-align: center;\n"]);return p=function(){return e},e}function f(){var e=Object(u.a)(["\n  margin-top: 30px;\n  border: 1px dashed #ccc;\n  padding: 20px;\n"]);return f=function(){return e},e}var b=o.a.Dragger,E=h.a.div(f()),v=h.a.h1(p()),j=h.a.img(m()),w=Object(l.a)((function(){var e=Object(c.a)(),t=e.ImageStore,n=e.UserStore,l=Object(r.useRef)(),u=Object(r.useRef)(),o=Object(i.d)((function(){return{width:null,setWidth:function(e){o.width=e},get widthStr(){return o.width?"/w/".concat(o.width):""},height:null,setHeight:function(e){o.height=e},get heightStr(){return o.height?"/h/".concat(o.height):""},get fullStr(){return t.serverFile.attributes.url.attributes.url+"?imageView2/0"+o.widthStr+o.heightStr}}})),h={showUploadList:!1,beforeUpload:function(e){return t.setFile(e),t.setFilename(e.name),null===n.currentUser?(s.a.warning("\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20\uff01"),!1):(window.file=e,/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?e.size>1048576?(s.a.error("\u56fe\u7247\u6700\u59271M"),!1):(t.upload().then((function(e){console.log("\u4e0a\u4f20\u6210\u529f"),console.log(e)})).catch((function(){console.log("\u4e0a\u4f20\u5931\u8d25")})),!1):(s.a.error("\u53ea\u80fd\u4e0a\u4f20png/svg/jpg/gif\u683c\u5f0f\u7684\u56fe\u7247"),!1))}};return a.a.createElement("div",null,a.a.createElement(g.a,{tip:"\u4e0a\u4f20\u4e2d",spinning:t.isUpoading},a.a.createElement(b,h,a.a.createElement("p",{className:"ant-upload-drag-icon"},a.a.createElement(d.a,null)),a.a.createElement("p",{className:"ant-upload-text"},"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"),a.a.createElement("p",{className:"ant-upload-hint"},"\u4ec5\u652f\u6301.png/.gif/.jpg/.svg\u683c\u5f0f\u7684\u56fe\u7247\uff0c\u56fe\u7247\u6700\u59271M"))),t.serverFile?a.a.createElement(E,null,a.a.createElement(v,null,"\u4e0a\u4f20\u7ed3\u679c"),a.a.createElement("dl",null,a.a.createElement("dt",null,"\u7ebf\u4e0a\u5730\u5740"),a.a.createElement("dd",null,a.a.createElement("a",{target:"_blank",href:t.serverFile.attributes.url.attributes.url},t.serverFile.attributes.url.attributes.url)),a.a.createElement("dt",null,"\u6587\u4ef6\u540d"),a.a.createElement("dd",null,t.filename),a.a.createElement("dt",null,"\u56fe\u7247\u9884\u89c8"),a.a.createElement("dd",null,a.a.createElement(j,{src:t.serverFile.attributes.url.attributes.url})),a.a.createElement("dt",null,"\u66f4\u591a\u5c3a\u5bf8"),a.a.createElement("dd",null,a.a.createElement("input",{ref:l,onChange:function(){console.log("bindWidthChange..."),console.log(l.current.value),o.setWidth(l.current.value)},placeholder:"\u6700\u5927\u5bbd\u5ea6\uff08\u53ef\u9009\uff09"}),a.a.createElement("input",{ref:u,onChange:function(){o.setHeight(u.current.value)},placeholder:"\u6700\u5927\u9ad8\u5ea6\uff08\u53ef\u9009\uff09"})),a.a.createElement("dd",null,a.a.createElement("a",{target:"_blank",href:o.fullStr},o.fullStr)))):null)}));function O(){var e=Object(u.a)(["\n  background: orange;\n  padding: 10px;\n  margin: 30px 0;\n  color: #fff;\n  border-radius: 4px;\n"]);return O=function(){return e},e}var x=h.a.div(O()),S=Object(l.a)((function(e){var t=e.children,n=Object(c.a)().UserStore;return a.a.createElement(a.a.Fragment,null,n.currentUser?null:a.a.createElement(x,null,t))})),F=Object(l.a)((function(){Object(c.a)().UserStore;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null,"\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20!!!"),a.a.createElement(w,null))}));t.default=F}}]);
//# sourceMappingURL=10.7736b115.chunk.js.map