# angular-ueditor-theme [GitHub][1]

可以适配angular的ueditor，而且把界面重新画了一下

![此处输入图片的描述][2]
###关于图片上传
图片上传需要后端语言支持,如java/php/.net/asp
比如使用ueditor php版本
只需要在public/ueditor/ueditor.config.js  34行中修改serverUrl 

`serverUrl:"/ueditor/php/controller.php"` 

php如果出现跨域问题 请在头上加入

`header('Access-Control-Allow-Origin:*'); //*代表所有网站   设置*为http://www.xxxx.com 表示该域名允许跨域访问
header('Access-Control-Allow-Headers: X-Requested-With,X_Requested_With'); `

  [1]: https://github.com/lapop009/angular-ueditor-theme
  [2]: http://7xsqcz.com2.z0.glb.qiniucdn.com/ueditor.png
