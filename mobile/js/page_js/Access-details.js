


function remove(){
    //    alert("123")
    layui.use('layer', function(){
        var layer = layui.layer;
        layer.open({
            content: '确认删除吗？',
            btnAlign: 'c',
            shade: 0,
            anim: 6,
            skin:'remove',
            icon: 5
        });
    });
}
function moreinfo(){
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
            closeBtn:0,
            btn: ['确定'],
            yes:function(index,layero){
                layer.close(layer.index)

            },

            // anim: 6,



        });
    });

}
function category(){
//     var $ =layui.jquery;
//     layui.use('layer', function(){
//         // var $ = layui.jquery
//         var layer = layui.layer;
//         layer.open({
//             type: 1,
//             content: $('.outcomemoreinfo'),

// end:function (res) {
//     $('.outcomemoreinfo').css("display",'none');
// },
//             btnAlign: 'c',
//             shade: 0,
//             closeBtn:0,
//             btn: ['确定'],
//             yes:function(index,layero){
//                 layer.close(layer.index)

//             },

//             // anim: 6,



//           });
//       });
// alert("123")
}