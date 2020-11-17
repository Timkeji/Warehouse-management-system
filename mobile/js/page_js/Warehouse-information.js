
  function Purchase(){
    var $ =layui.jquery;
    layui.use('layer', function(){
        // var $ = layui.jquery
        var layer = layui.layer;
        layer.open({
            type: 1,        
            content: $('.outcomemoreinfo'),
            
end:function (res) {
    $('.outcomemoreinfo').css("display",'none');
},
            btnAlign: 'c',
            shade: 0,
   
            btn: ['确定'],
            yes:function(index,layero){
                layer.close(layer.index)
                layui.use('layer', function(){
                    var layer = layui.layer;
                    layer.open({
                        type: 1,        
                        content: $('.sureinfo'),
                        
            end:function (res) {
                $('.sureinfo').css("display",'none');
            },
                        btnAlign: 'c',
                        shade: 0,
               
                        btn: ['确定'],
                        yes:function(index,layero){
                            layer.close(layer.index)
                          
                        },
            
                        // anim: 6,
                    
                   
                     
                      });
                  });  
              
            },

            // anim: 6,
        
       
         
          });
      });  
     
  }
  function category(){
     var a=$("#status option:selected").val()
     console.log(a)
     if(a==='1'){
       alert("123")
     }
     else if(a==='2'){
      alert("456")
     }
  }
  function Transfer(){
    window.location.href="../html/Transfer-fill.html"
  }