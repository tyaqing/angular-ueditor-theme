



var app = angular.module('index',[]);

app.controller('excerpt',function($scope,$http){
    $scope.list = [
        {
            id: parseInt(Math.random()*100),
            img:'/img/thumbnail.png',
            title:'这是一篇测试&amp;视频页面',
            date: new Date(),
            excerpt:'本主题支持手机端视频播放，如不能播放请检测手机是否安装播放视频插件flash，插入视频请复制视频网站上的HTML代码，如 &lt;embed src="http://player.youku.com/player.php/sid/XMTM4...',
            comment_num:parseInt(Math.random()*100),
            author:'Admin',
            cate:'科技'
        },{
            id: parseInt(Math.random()*100),
            img:'/img/thumbnail.png',
            title:'这是一篇测试&amp;视频页面',
            date: new Date().toDateString(),
            excerpt:'本主题支持手机端视频播放，如不能播放请检测手机是否安装播放视频插件flash，插入视频请复制视频网站上的HTML代码，如 &lt;embed src="http://player.youku.com/player.php/sid/XMTM4...',
            comment_num:parseInt(Math.random()*100),
            author:'Admin',
            cate:'科技'
        },
        {
            id: parseInt(Math.random()*100),
            img:'/img/thumbnail.png',
            title:'这是一篇测试&amp;视频页面',
            date: new Date().toDateString(),
            excerpt:'本主题支持手机端视频播放，如不能播放请检测手机是否安装播放视频插件flash，插入视频请复制视频网站上的HTML代码，如 &lt;embed src="http://player.youku.com/player.php/sid/XMTM4...',
            comment_num:parseInt(Math.random()*100),
            author:'Admin',
            cate:'科技'
        }
    ];
});
