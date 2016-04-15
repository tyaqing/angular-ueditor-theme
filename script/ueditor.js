var app = angular.module('index',["ng.ueditor"]);
app.controller("CTRL",["$scope",function($S){
    $S._simpleConfig = {
        //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
        toolbars:[['FullScreen', 'Source',"|",'Undo', 'Redo',"|",'Bold','Italic','underline','forecolor','paragraph',"|",
            'Justifyleft','justifycenter','justifyright','justifyjustify',"|",'insertimage','insertvideo',"|",
            'link','unlink','myblockquote','insertorderedlist','insertunorderedlist',
           'horizontal'
        ]],
        //focus时自动清空初始化时的内容
        initialFrameHeight:320,
        autoClearinitialContent:true,
        //关闭字数统计
        wordCount:false,
        //关闭elementPath
        elementPathEnabled:false,
    };
    $S.content = 'Hello Ueditor';
    UE.registerUI('myblockquote',function(editor,uiName){
        editor.registerCommand(uiName,{
            execCommand:function(){
                this.execCommand('blockquote',{
                    "style":"border-left: 3px solid #E5E6E1; margin-left: 0px; padding-left: 5px; line-height:20px;"
                });
            }
        });
        var btn = new UE.ui.Button({
            name:uiName,
            title:'自定义引用',
            cssRules :"background-position: -220px 0;",
            onclick:function () {
                editor.execCommand(uiName);
            }
        });
        editor.addListener('selectionchange', function () {
            // console.log(this);
            var state = editor.queryCommandState('blockquote');
            if (state == -1) {
                btn.setDisabled(true);
                btn.setChecked(false);
            } else {
                btn.setDisabled(false);
                btn.setChecked(state);
            }
        });

        return btn;
    });
}]);