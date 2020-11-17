var url=location.search;
var formid;
var Request = new Object();
if(url.indexOf("?")!=-1)
{
var str = url.substr(1);
strs= str.split("&");
for(var i=0;i<strs.length;i++)
{
Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
}
}
formid= Request["formid"];

unwarehouse=(decodeURI(Request["hourse"]));
proname=(decodeURI(Request["name"]))
console.log(formid);
console.log(unwarehouse)
console.log(proname);
  function trans(){
    var $ =layui.jquery;
    layui.use('layer', function(){
        // var $ = layui.jquery
        var layer = layui.layer;
        layer.open({
            type: 1,        
            content: $('#transinfo'),            
end:function (res) {
    $('#transinfo').css("display",'none');
},
            btnAlign: 'c',
            shade: 0,
            closeBtn:0,
            btn: ['确定'],
            yes:function(index,layero){
                layer.close(layer.index)
              
            },

            // anim: 6,
        

          });
      });  
  }
  function sureinfo(){
    var $ =layui.jquery;
    layui.use('layer', function(){
        // var $ = layui.jquery
        var layer = layui.layer;
        layer.open({
            type: 1,        
            content: $('#sureinfo'),
            
end:function (res) {
    $('#sureinfo').css("display",'none');
},
            btnAlign: 'c',
            shade: 0,
            closeBtn:0,
            btn: ['确定','取消'],
            yes:function(index,layero){
                layer.close(layer.index)
              
            },

            // anim: 6,
        
       
         
          });
      });  
  }
